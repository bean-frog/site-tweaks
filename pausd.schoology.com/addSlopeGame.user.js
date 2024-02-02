// ==UserScript==
// @name         wowowowow slope
// @namespace    http://tampermonkey.net/
// @version      2024-02-02
// @description  try to take over the world!
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let menu = document.createElement("div");
    menu.setAttribute('style', 'position:absolute; padding: 5px;top: 0; right: 0; height: fit-content; width: fit-content; z-index: 599990');
    menu.innerHTML = "<input type='checkbox' id='toggle' style='background-color: transparent; color: transparent'></input><input type='number' min='0.01' max='1' step='0.1' value='0.5' style='width:fit-content'id='opacityrange'></input>";
    document.body.insertAdjacentElement('afterbegin', menu);

    let game = document.createElement("iframe");
    game.setAttribute("style", "height: 100%; width: 100%; opacity: 0.08; position: absolute; z-index: 999; display:none");
    game.src = "https://slopegame.online/slope-game.embed";
    game.id = "game"
    document.body.insertAdjacentElement('afterbegin', game);

    document.getElementById("toggle").addEventListener('change', function() {
if (document.getElementById("toggle").checked) {
    document.getElementById("game").style.display = "block";
} else {
    document.getElementById("game").style.display = "none";
}
    });

    document.getElementById('opacityrange').addEventListener('input', function() {
    document.getElementById('game').style.opacity = this.value;
    })
})();
