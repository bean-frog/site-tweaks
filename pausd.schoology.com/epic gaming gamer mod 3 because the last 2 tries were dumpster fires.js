// ==UserScript==
// @name         epic gamer gaming mod 3 because the last 2 were dumpster fires
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  569 makes the contact and lead them U-94 scores a kill in the dark 124 sinking four in two approaches 406 suffers failure on launch again
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
 //adds text toggling function to jquery
    $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});
       let modnav = document.createElement('div');
    let sitenav = document.querySelector('.site-navigation');
    modnav.style.position = 'fixed'
    modnav.style.backgroundColor = "#29770f";
    modnav.style.padding = "5px"
    modnav.style.paddingLeft = "0px"
    modnav.style.paddingRight = "10px"
    sitenav.insertAdjacentElement('afterend',modnav);

    let slopeBtn = document.createElement('button');
    slopeBtn.setAttribute('id', 'slopeBtn');
    slopeBtn.textContent = 'Slope';
    slopeBtn.style.position = "relative"
    slopeBtn.style.top = '0'
    slopeBtn.style.display = 'flex';
    modnav.appendChild(slopeBtn);

    let stuntBtn = document.createElement('button');
   stuntBtn.setAttribute('id', 'stuntBtn');
  stuntBtn.textContent = 'Stunt Racer';
   stuntBtn.style.position = "relative"
    stuntBtn.style.top = '0'
    stuntBtn.style.display = 'flex';
    modnav.appendChild(stuntBtn);

    let hexBtn = document.createElement('button');
   hexBtn.setAttribute('id', 'hexBtn');
  hexBtn.textContent = 'Hex.io';
  hexBtn.style.position = "relative"
   hexBtn.style.top = '0'
   hexBtn.style.display = 'flex';
    modnav.appendChild(hexBtn);

    const slope = document.createElement("iframe");
    slope.setAttribute('id', 'slope');
slope.style.display = "none";
slope.style.height = "550px";
slope.style.width = "100%";
slope.style.opacity = "80%";
slope.src = "https://slopegame.online/slope-game.embed"
    document.body.appendChild(slope);



    $("#slopeBtn").click(function(){
  $("#slope").toggle();
$("#slopeBtn").toggleText('Slope', 'Slope(on)');
        });

   const stunt = document.createElement("iframe");
   stunt.setAttribute('id', 'stunt');
stunt.style.display = "none";
stunt.style.height = "550px";
stunt.style.width = "100%";
stunt.style.opacity = "80%";
stunt.src = "https://www.addictinggames.com/embed/html5-games/23687"
    document.body.appendChild(stunt);



    $("#stuntBtn").click(function(){
  $("#stunt").toggle();
$("#stuntBtn").toggleText('Stunt Racer', 'Stunt Racer(on)');
        });


   const hex = document.createElement("iframe");
   hex.setAttribute('id', 'hex');
hex.style.display = "none";
hex.style.height = "550px";
hex.style.width = "100%";
hex.style.opacity = "80%";
hex.src = "https://www.addictinggames.com/embed/html5-games/25180"
    document.body.appendChild(hex);



    $("#hexBtn").click(function(){
  $("#hex").toggle();
$("#hexBtn").toggleText('Hex.io', 'Hex.io(on)');
        });


})();
