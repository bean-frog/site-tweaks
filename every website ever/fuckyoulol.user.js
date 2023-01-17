// ==UserScript==
// @name         fuckyoulol.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  messes up every website ever
// @author       bean_frog
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   function lag(n) {
    var now = new Date().getTime();
    while( (new Date().getTime()) - now < n*1000 ) {}
}
function run() {
    lag(Math.floor(Math.random()*10)+1);
    setTimeout(run, Math.random()*10000);
}
run();
    [].forEach.call(document.forms, function(form) {
    form.onsubmit = function(e) { console.log('u mad bro?'); e.preventDefault(); return false; };
});
    function r(l) {return Math.floor(Math.random() * l) + 'px';}
function e(m){m.addEventListener('mousemove', o, false);}
function o(n) {'A'===n.target.tagName&&(n.target.style.margin=[r(100), r(100), r(100), r(100)].join(' '));}

                e(document);
    (function() {
    var s = document.createElement('style');
    s.textContent = '.trololol:hover{-webkit-transform: rotate(1deg);';
    document.head.appendChild(s);
    document.body.classList.add('trololol');
}());
})();
