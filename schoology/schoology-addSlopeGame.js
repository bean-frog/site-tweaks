// ==UserScript==
// @name         slope y8 schoology integration because fuck you
// @version      0.1
// @description  adds the slope game to your schoology homepage
// @author       graeme kieran
// @match        pausd.schoology.com/home
// @icon         https://cdn-icons-png.flaticon.com/512/3422/3422228.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
const iframe = document.createElement("iframe");
iframe.style.display = "block";
iframe.style.height = "641px";
iframe.style.width = "960px";
iframe.src = "https://y8.com/embed/slope";
document.body.appendChild(iframe);
})();
