// ==UserScript==
// @name       not fake ddos
// @namespace  http://bean-frog.github.io/
// @version    0.1
// @description  very real ddos
// @match      https://*/*
// @grant      none
// ==/UserScript==

(function() {
    'use strict';
    let newHTML = `
<table width="100%" height="100%" cellpadding="30">
<tr>


<div id="challenge" style="width: 100%; margin: 0 auto; text-align: center;">
<h1 style="display: block; font-size: 32px">Checking your browser before accessing the requested content</h1>
<p style="font-size: 18px; margin-top: 50px">This process is automatic. Your browser will redirect to your requested content shortly.</p>
<p style="font-size: 12px">Please allow up to 5 seconds...</p>
<img src="https://i.imgur.com/t6DVUDi.gif" style="margin: 40px 0 30px 0;"/>
</div>
<div style="margin-top:20px; width: 100%; margin: 0 auto; text-align: center;">
<a href="http://www.cloudflare.com/" target="_blank" style="font-size: 12px;">DDoS protection by CloudFlare</a>
</div>
</td>
</tr>
</table>
    `

    document.body.innerHTML = newHTML;
    document.title = "Just a moment...";

})();
