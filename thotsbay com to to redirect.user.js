// ==UserScript==
// @name         thotsbay com to to redirect
// @version      1
// @description  redirect
// @author       hrm-princess-fluffybutt
// @match        https://forum.thotsbay.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=forum.thotsbay.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        var url = window.location.toString();
    window.location = url.replace(/.com/, '.to')
})();