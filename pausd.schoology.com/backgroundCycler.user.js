// ==UserScript==
// @name         Schoology background cycler
// @version      0.1
// @description  adds a button to cycle through some backgrounds in schoology
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @grant        none
// ==/UserScript==
/*You can add your own images to this too,
follow this syntax:
const image(whatever number is next) = "url('image url')"
then add image(whatever number is next) to the var images = [...]
*/
(function() {
    'use strict';
const image1 = "url('https://images.unsplash.com/photo-1571755931207-3ede68df575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80')"
const image2 = "url('https://images.unsplash.com/photo-1613904296925-4bca2b176686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
const image3 = "url('https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80')"
var images = [image1, image2, image3]
    var idx = 0;
const body = document.getElementById(".body");
    document.body.addEventListener('click', change);
    document.body.style.backgroundImage = image1
function change() {
    document.body.style.backgroundImage = images[++idx%4];
}
})();
