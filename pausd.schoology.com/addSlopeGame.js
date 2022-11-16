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
    togbtn.textContent = 'toggle';
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
