// ==UserScript==
// @name         SPaleon Answer Spammer
// @namespace    https://spaleon.com
// @version      2023-12-29
// @description  spams correct answers on spaleon.com (trainer page)
// @author       beanfrog
// @match        https://www.spaleon.com/*?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spaleon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let spammer = false;
    let spammerInterval;
let menu = document.createElement('div');
    menu.style.height = "fit-content";
    menu.style.width = "fit-content";
    menu.style.position = "absolute";
    menu.style.top = "0px";
    menu.style.right = "0px";
    menu.style.padding = "10px";
    menu.style.backgroundColor = "gray";
    menu.innerHTML = `
     <button onclick="spammerInterval = setInterval(function(){solve(); check()}, 10)">Enable Answer Bot</button>
     <button onclick="clearInterval(spammerInterval)">Disable Answer Bot</button>
    `
    document.body.insertAdjacentElement('beforebegin', menu);
})();
