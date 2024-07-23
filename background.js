chrome.webNavigation.onCommitted.addListener(function (details) {
    if (details.frameId == 0) {
        chrome.tabs.get(details.tabId, (tab) => {
            let url = tab.url;
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));
            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain === "manga4life.com") {
                    runAdblockScript(details.tabId);
                    return;
                }
            } catch (err) {
                console.error('Error:', err);
            }
        });
    }
});

function runAdblockScript(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['adblock.js']
    }, () => {
        if (chrome.runtime.lastError) {
            console.error('Error executing script:', chrome.runtime.lastError);
        }
    });
}
