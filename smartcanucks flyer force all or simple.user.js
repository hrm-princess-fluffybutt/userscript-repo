// ==UserScript==
// @name         smartcanucks flyer force all or simple
// @version      1.0
// @updateURL    https://github.com/hrm-princess-fluffybutt/userscript-repo/raw/main/smartcanucks%20flyer%20force%20all%20or%20simple.user.js
// @downloadURL  https://github.com/hrm-princess-fluffybutt/userscript-repo/raw/main/smartcanucks%20flyer%20force%20all%20or%20simple.user.js
// @author       hrm-princess-fluffybutt
// @match        https://flyers.smartcanucks.ca/canada/*-flyer-*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=smartcanucks.ca
// @grant        GM_addStyle
// ==/UserScript==

//first, force simple
var url = window.location.toString();
//var searchWithoutQuestionMark = window.location.search.replace('?', '');

//fml i can't figure out an or condition
//if (url.indexOf("/simple") < 0 || url.indexOf("/all") < 0) {
  //window.location.search.replace('?', '/simple');
//    window.location = url + "/simple"
//};

if (url.indexOf("/simple") > 0) {
  //  block of code to be executed if condition1 is true
} else if (url.indexOf("/all") > 0) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else if (url.indexOf("book") > 0) {
  window.location = url.replace('/book', '/simple')
} else if (url.indexOf("thumbnail") > 0) {
  window.location = url.replace('/book', '/simple')
} else {
  window.location = url + "/simple"
}



/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'all or simple</button>'
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
    if (url.indexOf("/simple") > 0) {
  window.location = url.replace('/simple', '/all')
    } else if (url.indexOf("/all") > 0) {
  window.location = url.replace('/all', '/simple')
    } else {
        //nothing
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