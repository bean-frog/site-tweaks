// ==UserScript==
// @name         epic gamer gaming mod 3 because the last 2 were dumpster fires
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  estos putos que solo andan chingad les parto su madre
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
    let menuBtn = document.createElement("button");
    menuBtn.textContent = "EGGM3BTL2WDF Menu"
    menuBtn.setAttribute('id', 'menuBtn');
    var frameheight = "600px"
    var framewidth = "100%"
       let modnav = document.createElement('div');
    let sitenav = document.querySelector('.site-navigation');
    modnav.style.position = 'absolute'
    modnav.style.backgroundColor = "#29770f";
    modnav.style.padding = "5px"
    modnav.style.paddingLeft = "0px"
    modnav.style.paddingRight = "10px"
    modnav.style.zIndex = "1"
    modnav.style.width = "100px"
    modnav.style.marginTop = "25px";
    modnav.setAttribute('id', 'modnav');
    modnav.style.display = "none"
    sitenav.insertAdjacentElement('beforeend', menuBtn);
    sitenav.insertAdjacentElement('afterend',modnav);

    $("#menuBtn").click(function(){
  $("#modnav").toggle();
        });


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

    let td4Btn = document.createElement('button');
  td4Btn.setAttribute('id', 'td4Btn');
  td4Btn.textContent = 'BTD4';
  td4Btn.style.position = "relative"
   td4Btn.style.top = '0'
   td4Btn.style.display = 'flex';
    modnav.appendChild(td4Btn);

    let shotBtn = document.createElement('button');
  shotBtn.setAttribute('id', 'shotBtn');
  shotBtn.textContent = 'Deadshot.io';
  shotBtn.style.position = "relative"
   shotBtn.style.top = '0'
   shotBtn.style.display = 'flex';
    modnav.appendChild(shotBtn);


    let clankBtn = document.createElement('button');
  clankBtn.setAttribute('id', 'clankBtn');
  clankBtn.textContent = 'Clanker.io';
  clankBtn.style.position = "relative"
   clankBtn.style.top = '0'
   clankBtn.style.display = 'flex';
    modnav.appendChild(clankBtn);

    const slope = document.createElement("iframe");
    slope.setAttribute('id', 'slope');
slope.style.display = "none";
slope.style.height = "550px";
slope.style.width = framewidth;
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
stunt.style.height = frameheight;
stunt.style.width = framewidth;
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
hex.style.height = frameheight;
hex.style.width = framewidth;
hex.style.opacity = "80%";
hex.src = "https://www.addictinggames.com/embed/html5-games/25180"
    document.body.appendChild(hex);



    $("#hexBtn").click(function(){
  $("#hex").toggle();
$("#hexBtn").toggleText('Hex.io', 'Hex.io(on)');
        });
const td4 = document.createElement("iframe");
   td4.setAttribute('id', 'td4');
td4.style.display = "none";
td4.style.height = frameheight;
td4.style.width = framewidth;
td4.style.opacity = "80%";
td4.src = "https://www.addictinggames.com/embed/html5-games/20543"
    document.body.appendChild(td4);



    $("#td4Btn").click(function(){
  $("#td4").toggle();
$("#td4Btn").toggleText('BTD4', 'BTD4(on)');
        });

    const shot = document.createElement("iframe");
   shot.setAttribute('id', 'shot');
shot.style.display = "none";
shot.style.height = frameheight;
shot.style.width = framewidth;
shot.style.opacity = "80%";
shot.src = "https://www.addictinggames.com/embed/html5-games/25189"
    document.body.appendChild(shot);


    $("#shotBtn").click(function(){
  $("#shot").toggle();
$("#shotBtn").toggleText('Deadshot.io', 'Deadshot.io(on)');
        });

    const clank = document.createElement("iframe");
   clank.setAttribute('id', 'clank');
clank.style.display = "none";
clank.style.height = frameheight;
clank.style.width = framewidth;
clank.style.opacity = "80%";
clank.src = "https://www.addictinggames.com/embed/html5-games/10000216"
    document.body.appendChild(clank);




    $("#clankBtn").click(function(){
  $("#clank").toggle();
$("#clankBtn").toggleText('Clanker.io', 'Clanker.io(on)');
        });


})();
