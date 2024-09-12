# block nsfw ads on most manga websites

The manga adblocker Google Extension is an extension designed to block specific ads on mangalife. As part of a commission, it is injectable onto phones, so you may be allowed to read manga in public without looking strange.

## Features:
Blocks ads on manga4life.com, can be customizable if needed <br>
Uses Javascript to identify and hide ad elements. <br>
Executes ad-blocking algorithm upon navigation <br>

This extension consists of 3 components: **adblock.js**, **background.js**, and **manifest.json**.

### adblock.js:
This script is responsible for identifying and removing ad elements from the page. 
removeAds locates all iframe elements on the page.
It checks if the iframe consists of a frequent ad tag. 
If the ad is found, it is removed. This function is called every 100 milliseconds.

### background.js:
This script is responsible for navigation events and triggers the adblock script when the current page's domain is the same as the specified website (customizable).
It listens for navigation events using onCommitted, checks if the navigation is part of the main frame, and extracts the domain from the URL.

### manifest.json:
This file defines the extension's metadata and permissions (customizable)

**In order to inject this extension into Chrome or any other Chromium browser, download or clone the files**. On Chrome, go to settings --> extensions --> developer mode, toggle it, and click 'load unpacked' and select the directory containing the scripts. After this, this extension should be installed and active.

This adblocker will automatically run on the specified websites. 

If you encounter errors, verify that the domain matches the permissions and check the console log for errors. 
