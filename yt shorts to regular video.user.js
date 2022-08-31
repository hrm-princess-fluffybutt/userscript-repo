// ==UserScript==
// @name         yt shorts to regular video
// @version      1.0
// @description  desc
// @namespace    https://github.com/hrm-princess-fluffybutt/userscript-repo
// @updateURL    https://github.com/hrm-princess-fluffybutt/userscript-repo/raw/main/*.user.js
// @downloadURL  https://github.com/hrm-princess-fluffybutt/userscript-repo/raw/main/*.js
// @author       hrm-princess-fluffybutt
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        var url = window.location.toString();
    window.location = url.replace('shorts/', 'watch?v=')
})();