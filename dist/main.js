var Client=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function o(t){const e=new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);return t.match(e)?(alert("Correct URL address!"),!0):(alert("Incorrect URL address! Make sure your address starts from www or http or https."),!1)}function r(t){t.preventDefault();let e=document.getElementById("url_main").value;console.log(e);const n=Client.ValidURL(e);console.log("Form Submitted"),n&&(u("http://localhost:8081/aylienapi",{formText:e}).then((function(){l()})),alert("Your data should display below form!"))}n.r(e),n.d(e,"handleSubmit",(function(){return r})),n.d(e,"ValidURL",(function(){return o})),n.d(e,"postData",(function(){return u})),n.d(e,"getData",(function(){return c})),n.d(e,"updateInterface",(function(){return l}));const c=async t=>{const e=await fetch(t);try{const t=await e.json();return console.log(t),t}catch(t){console.log(t)}},u=async(t="",e={})=>{console.log(e);const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})});try{const t=await n.json();return console.log(t),t}catch(t){console.log(t)}},l=async()=>{const t=await fetch("http://localhost:8081/all");try{const e=await t.json();console.log(e),document.querySelector("#results").innerHTML="Results: ",document.querySelector("#polarity").innerHTML="Polarity: "+e.polarity,document.querySelector("#subjectivity").innerHTML="Subjectivity: "+e.subjectivity}catch(t){console.log(t)}};n(0),n(1),n(2),n(3),n(4);console.log(o),console.log(r)}]);