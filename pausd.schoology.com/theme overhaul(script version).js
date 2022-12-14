// ==UserScript==
// @name schoology theme overhaul
// @version 0.1
// @grant GM_addStyle
// @run-at document-start
// @include https://pausd.schoology.com*
// ==/UserScript==

(function() {
let css = `

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

div._2q19q.Card-card-image-uV6Bu {
  background: url(https://steamuserimages-a.akamaihd.net/ugc/1750231054980923525/E01DE70FF3B2F98665CA63899B7FC1880726FE95/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false);
  background-size: 100% 150%;
}



 body{
	background-image: url(https://images.unsplash.com/photo-1571755931207-3ede68df575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80);
	background-size: 100% 120%;
	height: 100vh;
  color: black;
  background-attachment: fixed;
}



#center-top {
  background-color: transparent;
  color: black
}

div.site-navigation-resize {
    background-color: transparent

}

div.sidebar {
  color: lightgrey
  
}
#body {
font-family: 'Oxygen' !important

}

nav._1tpub._3mp5E._24W2g.util-justify-content-space-between-3euFK {
  font-family: 'Oxygen'!important;
}

div.clearfix {
  color: black !important;
  border: none;
  opacity: 96%
}

a.sExtlink-processed {
  color: inherit
}

button._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.fjQuT.uQOmx {
  color: black;
  height:40px;
  font-family: 'Oxygen';
  background-color: white;
}

div.overdue-submissions.overdue-submissions-wrapper {
  border: 2px outset black;
  color: black;
  border-radius: 10px
}


div.upcoming-events.upcoming-events-wrapper.sEventUpcoming-processed {
  border: 2px outset black;
  border-radius: 10px;
}

#main-inner {
  border: 2px outset black;
  background-color: #FFF0ED;
}

div.edge-wrapper {
  border: 1px outset black;
  background-color: #f0f5f7
}

span.infotip.sCommonInfotip-processed:hover {
    transform: translateY(-2px);
box-shadow: 3px 3px 3px lightslategray;
border: 1px outset black
}

div.edge-main-wrapper {
  border: 1px outset black;
  box-shadow: 3px 3px 3px lightlategray
}
div.edge-main-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 3px 3px 3px lightslategray
}

header._1SIMq._3v0y7._349XD {
  color: white;
  position: sticky;
  display:flex;
  flex: 1;
  width:50%;
  height: 40px;
  background: transparent;
  opacity: 90%;
  align-self: center;
 }

td.folder-contents-cell {
  box-shadow: 5px 5px 5px lightslategray;
 
}

footer div div {
  background-color: transparent;
}

div._1tpub._3mp5E._24W2g._26UWf.util-height-six-3PHnk.util-line-height-six-3lFgd.util-justify-content-space-between-3euFK {
  background-color:transparent;
  display:none;
}

div.discussion-card:hover {
  box-shadow: 5px 5px 5px lightslategray;
  border: 1px outset black
}

div.s_comments_level {
  border:1px outset black;
}
div.s_comments_level:hover {
border: 2px outset black
}

div.site-navigation {
  background: transparent;
  display: flex;
  justify-content: center;
}

a._2JX1Q._1LY8n._2SVA_._9GDcm.util-height-six-3PHnk.util-width-sixteen-JiX3r.sExtlink-processed {
  height: 40px;
  background-color: white;
  display:none;
}

a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.sExtlink-processed {
  display: none
}

a._1SIMq._2kpZl._3OAXJ._13cCs._3_bfp._2M5aC._24avl._3v0y7._2s0LQ._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y {
  height: 40px;
  margin: 0px;
}

img.imagecache.imagecache-profile_reg {
  display: block;
  border: 2px outset white;
}

span._1D8fw {
  font-family: 'Oxygen';
}
div.LGaPf._3LkKR._17Z60.util-max-width-twenty-characters-2pOJU {
    font-family: 'Oxygen'

}

li._24avl._3Rh90 {
  border-radius: 5px;
}


`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
