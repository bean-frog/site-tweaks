// ==UserScript==
// @name         slope y8 schoology integration because fuck you
// @version      0.1
// @description  adds the slope game to your schoology homepage
// @author       graeme kieran
// @match        pausd.schoology.com/*
// @icon         https://cdn-icons-png.flaticon.com/512/3422/3422228.png
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
//toggle visibility using jquery
    let togbtn = document.createElement('button');
    togbtn.setAttribute('id', 'togbtn');
    togbtn.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    document.body.appendChild(togbtn);


    $("#togbtn").click(function(){
  $("#iframe").toggle();
});
//game iframe
const iframe = document.createElement("iframe");
    iframe.setAttribute('id', 'iframe');
iframe.style.display = "block";
iframe.style.height = "550px";
iframe.style.width = "100%";
iframe.style.opacity = "80%";
iframe.src = "https://slopegame.online/slope-game.embed";
document.body.appendChild(iframe);
        iframe.style.display = 'none';

})();
