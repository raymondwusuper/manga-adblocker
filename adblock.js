function removeAds() {
    let frames = document.getElementsByTagName("iframe");
    for (let i = 0; i < frames.length; ++i){
        if (frames[i].title === "BidGear Ad") {
            let card = frames[i].closest("div");
            if (card === null) {
                let j = 0;
                card = frames[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }
            card.setAttribute("style", "display: none !important;");
        }
    }
}
removeAds();
setInterval(function() {
    removeAds();
}, 100)