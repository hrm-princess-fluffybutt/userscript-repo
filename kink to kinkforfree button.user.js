// ==UserScript==
// @name         kink to kinkforfree button
// @version      1.0
// @description  button makes it go to kinkforfree
// @author       hrm-princess-fluffybutt
// @match        https://www.kink.com/shoot/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kink.com
// @grant        GM_addStyle
// ==/UserScript==


/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'kinkforfree</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    //--- replace kink with kinkforfree
    var url = window.location.toString();
    window.location = url.replace(/kink/, 'kinkforfree')
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