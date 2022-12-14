// ==UserScript==
// @name id.pausd theme "Liquid"
// @version 0.1
// @grant GM_addStyle
// @run-at document-start
// @include https://id.pausd.org
// ==/UserScript==

(function() {
let css = `
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
/*login page styles*/
main.content {
  background-color: #242526;
  border: 3px outset;
  border-color: #0784b5;
  border-style:groove;
}
h1.page-heading.cs-heading.cs-text {
  color:white
}

button.cs-button-aslink {
  color: white
}

div.login-logo.cs-login-logo {
  display: none
}

h1.cs-app-heading {
  background-color: #0784b5;
  font-family: 'Oxygen'
}

div.cs-logo-container {
  background-color: #0784b5
}

div.top-section {
  font-family: 'Oxygen'
}

form.login-container.cs-login-container{   
  font-family: 'Oxygen'

}

button.cs-button.button.button-small.button-wide.cs-nav-next-button {
    font-family: 'Oxygen'

}

div.cs-container {
  border: 3px outset;
  border-color: #0784b5;
  border-style:groove;
}
/*end login page styles, begin dashboard styles*/
div.application-grid-view.card-wide-container {
  background-color: #242526
}

div.workspace-control-bar.grid-view.ember-view {
  background-color: #242526;
  color: #39ace7;
  font-family: 'Oxygen'
}

div.workspace-control-bar__secondary__views {
  background-color: #242526;
  color: #39ace7
}

div.left-sidebar-inner-content.ember-view {
  background-color: #242526;
  color: #39ace7;
}

a.cp-Panel-toggle.cp-is-open.ember-view {
  background-color: #242526;
  color: #39ace7;
  font-family: 'Oxygen'
}
a.cp-Panel-toggle.cp-is-open.ember-view:hover{
background-color: #414c50
}

span.category-name {
  background-color: #242526;
  color: #39ace7;
  font-family: 'Oxygen'
}
span.category-name:hover {
  background-color: #414c50
}

div.module-select.brand-bg-color-1.ember-view {
  background-color: #0784b5;
  color: #242526;
  font-family: 'Oxygen';
}

div.profile-top-nav.ember-view {
    background-color: #0784b5
}

div.input-wrapper {
    background-color: #0784b5;
    font-family: 'Oxygen'
}

button.list-view-btn.toggle-button.brand-color-2.brand-color-2-hover, i.material-icons {
  color: #39ace7;
}

div.notification-box {
    background-color: #0784b5  
}

span.notify-button.enabled.ember-view {
      background-color: #0784b5;
}

i.material-icons {
  color: #242526;
}

span.profile-data {
  color: #242526;
  font-family: 'Oxygen'
}

div.branding-box {
        background-color: #0784b5;
}

div.card-data-area {
  font-family: 'Oxygen'
}

div.sec-2 {
  background-color: #242526
}

div.sec-1 {
    background-color: #242526
}

div.footer-branding {
    background-color: #242526
}

button.is-open.ri-button.has-label-only.hide-label.ember-view {
  color: #242526
}

div.wrapper.cs-wrapper {
  background-color: #242526
}

div div h2 {
  color: #0784b5
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
