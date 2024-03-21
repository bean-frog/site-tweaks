// ==UserScript==
// @name         schoology gambling
// @namespace    http://tampermonkey.net/
// @version      2024-03-21
// @description  gamble but in schoology lol
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function() {
    'use strict';
const header = document.querySelector('._2trRU._2K08O.fSqCh._1tpub');
    header.insertAdjacentHTML('beforeend', `
<li class="_24avl _3Rh90"><button id="gamblingButton" onclick="$('#casino').toggle()"class="_13cCs _2M5aC _24avl _3ghFm _3LeCL _31GLY _9GDcm _1D8fw util-height-six-3PHnk util-pds-icon-default-2kZM7 _1SIMq _2kpZl _3OAXJ _3_bfp _3v0y7 _2s0LQ Header-header-button-active-state-3AvBm Header-header-button-1EE8Y fjQuT uQOmx">CASINO</button>
<div role="gambling" id="casino" style="height:600px !important; display: flex" class="_2mWUT _2trRU _2xvND j17AQ _3RmDr S42JQ _1Z0RM _2ue1O les2- util-box-shadow-dropdown-2Bl9b util-margin-top-negative-point-four-3GRLY _3brnw QshRx fjQuT uQOmx">
    <div style="height: 600px; width: 100%; class="_3mp5E _24W2g _26UWf">
        <div style="height: 600px; width: 100%;">
            <iframe style="height: 600px; width: 100%; overflow:hidden" src="https://www.7seascasino.com/fx/?env=sevenseas"></iframe>
        </div>
    </div>
</div>
</li>
`)
// eslint-disable-next-line
$('#casino').hide();

})();
