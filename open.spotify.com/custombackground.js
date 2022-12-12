// ==UserScript==
// @name         background selector for spotify
// @version      0.1
// @description  yes
// @author       Graeme Kieran
// @match       https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('.tUwyjggD2n5KvEtP5z1B {background: transparent}');
addGlobalStyle('div.HsbczDqu9qjcYr7EIdHR {display:none;}');
addGlobalStyle('div.RP2rRchy4i8TIp1CTmb7 {background: transparent;}');
addGlobalStyle('div.gHImFiUWOg93pvTefeAD.xYgjMpAjE5XT05aRIezb {display:none}');
addGlobalStyle('div.CoLO4pdSl8LGWyVZA00t {display:none}');
addGlobalStyle('div.gHImFiUWOg93pvTefeAD {display:none}');
addGlobalStyle('div.contentSpacing.NXiYChVp4Oydfxd7rT5r.RMDSGDMFrx8eXHpFphqG {background: transparent}');
addGlobalStyle('div.dZPmmYYhskhqHJCAruvI.wTUruPetkKdWAR1dd6w4 {visibility: hidden}');
addGlobalStyle('div.koyeY6AgGRPmyPITi7yO.qJOhHoRcFhHJpEQ2CwFT {visibility: hidden}');
addGlobalStyle('span.Type__TypeElement-sc-goli3j-0.dXoLvE.G7zO58ORUHxcUw0sXktM {background-color: transparent;}');

//transparent footer addGlobalStyle('footer.GD2gbRtcs5dOjMGAM_Y4 {background-color: transparent;border-top:  1px groove white}');
//transparent sidenav nav.Root__nav-bar {  background-color: transparent;  border-right: 1px groove white}



    //selection button stuff
    let selection = document.createElement("button");
    selection.textContent = "Set Background";
    selection.style.zIndex = "1";
    selection.style.color = "white";
    selection.style.backgroundColor = "#121212";
    selection.addEventListener("click", setBg);
    selection.style.position = "absolute";
    selection.style.float = "left";
    selection.style.display = "inline-block"

    let selAnchor = document.querySelector("body");
    selAnchor.insertAdjacentElement('beforebegin', selection);

    //selection dialog
function setBg() {
    let url = prompt("Enter an image URL (right click -> open image in new tab -> copy that URL", "URL");
if (url != null) {
  console.log("successfully got url '" + url + "'")
  document.body.style.backgroundImage = "url(" + url + ")"
    document.body.style.backgroundSize = "100%"
    console.log("body.style.backgroundImage set to url(" + url + ")")
}
}




})();
