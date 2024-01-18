// ==UserScript==
// @name         sold by amazon filter toggle
// @version      1.0
// @description  desc
// @namespace    https://github.com/hrm-princess-fluffybutt/userscript-repo
// @updateURL    https://github.com/hrm-princess-fluffybutt/userscript-repo/blob/main/sold%20by%20amazon%20filter%20toggle-1.0.user.js
// @downloadURL  https://github.com/hrm-princess-fluffybutt/userscript-repo/blob/main/sold%20by%20amazon%20filter%20toggle-1.0.user.js
// @author       hrm-princess-fluffybutt
// @include        https://www.amazon.tld/*
// @include        https://amazon.tld/*
// @icon         http://www.amazon.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

//(function() {
//    if (window.location.href.indexOf('&emi=A3DWYIK6Y9EEQB') === -1) {
//        window.location.href += '&emi=A3DWYIK6Y9EEQB';
//    }
//})();

// Define the mapping from top level domain to code
var domainToID = {
    "UK": "A3P5ROKL5A1OLE",
    "DE": "A3JWKAKR8XB7XF",
    "FR": "A1X6FK5RDHNB96",
    "IT": "A11IL2PNWYJU7H",
    "ES": "A1AT7YVPFBWXBL",
    "BE": "A3Q3FYJVX702M2",
    "NL": "A17D2BRD4YMT0X",
    "PL": "A2R2221NX79QZP",
    "SE": "ANU9KP01APNAG",
    "CA": "A3DWYIK6Y9EEQB",
    "JP": "AN1VRQENFRJN5",
    "COM": "ATVPDKIKX0DER"
};

// Get the top level domain from the URL
var url = window.location.href;
var topLevelDomain = url.split('/')[2].split('.')[url.split('/')[2].split('.').length - 1];
//url.split('/')[2].split('.')[url.split('/')[2].split('.').length - 1]
//url.split('.').pop()
//convert to id
var country_id = domainToID[topLevelDomain.toUpperCase()];
//create append string
var id_append_string = `&emi=${country_id}`;


/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'do filter</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    //--- append country id
    if (window.location.href.indexOf(id_append_string) === -1) {
        window.location.href += id_append_string;
    }


}

//--- Style elements using CSS.
GM_addStyle ( `
    #myContainer {
        position:               fixed;
        top:                    0;
        left:                   50%;
        transform:              translate(100, -50%);
        font-size:              20px;
        background:             #CCCCFF;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );


/*
country code reference
(UK) A3P5ROKL5A1OLE
(DE) A3JWKAKR8XB7XF
(FR) A1X6FK5RDHNB96
(IT) A11IL2PNWYJU7H
(ES) A1AT7YVPFBWXBL
(BE) A3Q3FYJVX702M2
(NL) A17D2BRD4YMT0X
(PL) A2R2221NX79QZP
(SE) ANU9KP01APNAG
(CA) A3DWYIK6Y9EEQB
(US) ATVPDKIKX0DER
(JP) AN1VRQENFRJN5
*/
