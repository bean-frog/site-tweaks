// ==UserScript==
// @name         custom styling for spotify
// @version      0.1
// @description  yes
// @author       Graeme Kieran
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.5.1/jscolor.min.js
// @grant        GM_addStyle
// ==/UserScript==
// comments with [N] explain features, for any future devs looking at this who are confused by the spaghetti that amazes even the best italian chefs

/*
list of classes with text(for the custom text color)
div.RP2rRchy4i8TIp1CTmb7
h1.Type__TypeElement-sc-goli3j-0.fhrvNw
div.xgmjVLxjqfcXK5BV_XyN
span.UyzJidwrGk3awngSGIwv
div span a
div.iCQtmPqY0QvkumAOuCjr
span.Type__TypeElement-sc-goli3j-0.dvSMET
div.Type__TypeElement-sc-goli3j-0.kHHFyx.t_yrXoUO3qGsJS4Y6iXX.standalone-ellipsis-one-line
a.link-subtle.ATUzFKub89lzvkmvhpyE
a svg path
button.IPVjkkhh06nan7aZK7Bx
a.r9YzlaAPnM2LGK97GSfa
span.Type__TypeElement-sc-goli3j-0.gkqrGP.VjIb8SfYTkc4wMpqqj3f
span.Type__TypeElement-sc-goli3j-0.dXoLvE
span.Type__TypeElement-sc-goli3j-0.hGXzYa.NCKSUYdZaTMrobq8ilkc
h1.Type__TypeElement-sc-goli3j-0.dXoLvE.SMJIXlalPk_TESlyt2pC
p.Type__TypeElement-sc-goli3j-0.kUtbWF.EzRmGRncgnv1zFgF4dqE
a.MfVrtIzQJ7iZXfRWg6eM
div.tsv7E_RBBw6v0XTQlcRo
div.Type__TypeElement-sc-goli3j-0.dvSMET.Za_uNH8nTZ0qCuIqbPLZ
div div a
*/

(function() {
    'use strict';

    $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});
    function addGlobalStyle(css) { //[N] function that allows css to be easily added to the <head> using addGlobalStyle(<css>)
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    //always applied styles
    addGlobalStyle('.tUwyjggD2n5KvEtP5z1B {background: transparent}'); //[N] examples of above comment
    addGlobalStyle('div.HsbczDqu9qjcYr7EIdHR {display:none;}');
    addGlobalStyle('div.RP2rRchy4i8TIp1CTmb7 {background: transparent;}');
    addGlobalStyle('div.gHImFiUWOg93pvTefeAD.xYgjMpAjE5XT05aRIezb {display:none}');
    addGlobalStyle('div.CoLO4pdSl8LGWyVZA00t {display:none}');
    addGlobalStyle('div.gHImFiUWOg93pvTefeAD {display:none}');
    addGlobalStyle('div.contentSpacing.NXiYChVp4Oydfxd7rT5r.RMDSGDMFrx8eXHpFphqG {background: transparent}');
    addGlobalStyle('div.dZPmmYYhskhqHJCAruvI.wTUruPetkKdWAR1dd6w4 {visibility: hidden}');
    addGlobalStyle('div.koyeY6AgGRPmyPITi7yO.qJOhHoRcFhHJpEQ2CwFT {visibility: hidden}');
    addGlobalStyle('span.Type__TypeElement-sc-goli3j-0.dXoLvE.G7zO58ORUHxcUw0sXktM {background-color: transparent;}');
    addGlobalStyle("@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');")
    //toggled styles
    addGlobalStyle('.transparentFooter {background-color: transparent;border-top:  1px groove white; color: white !important}'); // [N] extra class containing all css rules needed for the transparent playbar
    addGlobalStyle('.transparentSidebar {background-color: transparent;border-top:  1px groove white; color: black !important}'); // [N] extra class containing all css rules needed for the transparent sidebar

    //toggled menu
    let menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.style.fontFamily = "Oxygen"
    menuBtn.style.zIndex = "1";
    menuBtn.style.color = "white";
    menuBtn.style.backgroundColor = "#121212";
    menuBtn.style.position = "absolute";
    menuBtn.style.float = "left";
    menuBtn.style.display = "inline-block"
    menuBtn.setAttribute('id', "menuBtn");
    menuBtn.style.border = "1px groove white"

    let menu = document.createElement("div");
    menu.style.width = "200px"
    menu.style.height = "300px"
    menu.style.position = "absolute"
    menu.style.backgroundColor = "#121212"
    menu.style.border = "1px groove white"
    menu.style.zIndex = "1"
    menu.style.display = "none"
    menu.style.flexDirection = "column"
    menu.setAttribute('id', 'menu');
    menu.style.marginTop = "25px"

    //selection button
    let selection = document.createElement("button"); // [N] create and style the button for selecting a url
    selection.textContent = "Set Background Image";
    selection.style.zIndex = "1";
    selection.style.color = "white";
    selection.style.backgroundColor = "#121212";
    selection.addEventListener("click", setBg);
    selection.style.position = "absolute";
    selection.style.display = "block"
    selection.style.marginTop = "21px"
    selection.style.border = "1px groove white"

    let tp = document.createElement("button"); // [N] button to make playbar transparent
    tp.textContent = "Transparent Playbar";
    tp.style.zIndex = "1";
    tp.style.color = "white";
    tp.style.backgroundColor = "#121212";
    tp.setAttribute('id', 'tp');
    tp.style.marginTop = "20px"
    tp.style.position = "relative"
    tp.style.display = "block"
    tp.style.border = "1px groove white"

    let ts = document.createElement("button"); // [N] button to make playbar transparent
    ts.textContent = "Transparent Sidebar";
    ts.style.zIndex = "1";
    ts.style.color = "white";
    ts.style.backgroundColor = "#121212";
    ts.setAttribute('id', 'ts');
    ts.style.position = "relative"
    ts.style.display = "block"
    ts.style.float = "left"
    ts.style.marginTop = "1px"
    ts.style.border = "1px groove white"

    let menuTitle = document.createElement("h3")
    menuTitle.textContent = "Spotify Theme Menu"
    menuTitle.style.color = "white"
    menuTitle.style.fontFamily = "Oxygen"

    let pageTitleBtn = document.createElement("button");
    pageTitleBtn.textContent = "Custom Tab Title";
    pageTitleBtn.style.zIndex = "1";
    pageTitleBtn.style.color = "white";
    pageTitleBtn.style.backgroundColor = "#121212";
    pageTitleBtn.setAttribute('id', 'pageTitleBtn');
    pageTitleBtn.style.position = "relative"
    pageTitleBtn.style.display = "block"
    pageTitleBtn.style.float = "left"
    pageTitleBtn.style.marginTop = "20px"
    pageTitleBtn.addEventListener('click', setCustomTitle);
    pageTitleBtn.style.border = "1px groove white"

    let selAnchor = document.querySelector("body");
    selAnchor.insertAdjacentElement('beforebegin', menuBtn);
    selAnchor.insertAdjacentElement('beforebegin', menu);
    menu.insertAdjacentElement('afterbegin', selection); // [N] append selection, ts, and tp buttons
    menu.insertAdjacentElement('afterbegin', tp);
    tp.insertAdjacentElement('afterend', ts);
    ts.insertAdjacentElement('afterend', pageTitleBtn);
    tp.insertAdjacentElement('beforebegin', menuTitle);

    $("#menuBtn").click(function() {
        $("#menu").toggle();
    });

    $("#tp").click(function() {
        $("footer.GD2gbRtcs5dOjMGAM_Y4").toggleClass("transparentFooter"); // [N] transparent footer jQuery toggle
    });

    $("#ts").click(function() {
        $("nav.Root__nav-bar").toggleClass("transparentSidebar"); // [N] transparent sidebar jQuery toggle
    });
    //custom title dialog
    function setCustomTitle() { // the popup asking for title

        const customTitle = prompt("Enter a custom title for the tab", "Spotify Style Mod by bean_frog");
        if (customTitle != null) {
            console.log("successfully got user's title '" + customTitle + "'")
            console.log("page title set to" + customTitle)
            setInterval(forceCustomTitle, 1);

            function forceCustomTitle() {
                document.title = customTitle
            }
        } else {
            alert("you braindead homunculus you have to actually put something there");
        }
    }

    //selection dialog
    function setBg() { // the popup asking for image URL
        let url = prompt("Enter an image URL (right click -> open image in new tab -> copy that URL (base64 strings are supported as well)", "");
        if (url != null) {
            console.log("successfully got url '" + url + "'")
            document.body.style.backgroundImage = "url(" + url + ")"
            document.body.style.backgroundSize = "100%"
            console.log("body.style.backgroundImage set to url(" + url + ")")
        } else {
            alert("you braindead homunculus you have to actually put something there");
        }
    }
    //add cookie stuff

})();
