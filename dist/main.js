!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e){var t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=function(e){return e<10?"0"+e:e};!function c(){var a,i,u,l=(a=(new Date(e).getTime()-(new Date).getTime())/1e3,i=Math.floor(a%60),u=Math.floor(a/60%60),{timeRemaining:a,hours:Math.floor(a/60/60),minutes:u,seconds:i});t.textContent=l.hours,n.textContent=l.minutes,o.textContent=l.seconds,l.timeRemaining>0&&setInterval(c,1e3),l.timeRemaining<0?(t.textContent="00",n.textContent="00",o.textContent="00"):(t.textContent=r(l.hours),n.textContent=r(l.minutes),o.textContent=r(l.seconds))}()},r=function(){var e=document.querySelector(".menu"),t=document.querySelector("menu"),n=function(){t.classList.toggle("active-menu")};e.addEventListener("click",(function(){event.target.closest(".menu")&&n()})),t.addEventListener("click",(function(){event.target.matches("a")&&n()}))},c=function(){var e,t=document.querySelector(".popup"),n=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content"),r=0,c=function n(){e=requestAnimationFrame(n),++r<50?(o.style.top=r+"px",t.style.display="block"):cancelAnimationFrame(e),window.matchMedia("(max-width: 768px)").matches?cancelAnimationFrame(e):e=requestAnimationFrame(n)};n.forEach((function(t){t.addEventListener("click",(function(){e=requestAnimationFrame(c)}))})),t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"))||(t.style.display="none")}))},a=function(){var e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(function(e){var o=e.target;(o=o.closest(".service-header-tab"))&&t.forEach((function(e,r){e===o&&function(e){for(var o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(t[o].classList.remove("active"),n[o].classList.add("d-none"))}(r)}))}))},i=function(){var e=function(e){var t=e.target.closest(".command__photo");if(t&&t.dataset.img){var n=[t.dataset.img,t.src];t.src=n[0],t.dataset.img=n[1]}};document.addEventListener("mouseover",e),document.addEventListener("mouseout",e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.getElementById("total"),i=function(){var t=0,i=1,u=1,l=n.options[n.selectedIndex].value,s=+o.value;r.value>1&&(i+=(r.value-1)/10),c.value&&c.value<5&&c.value>1?u*=2:c.value&&c.value<10?u*=1.5:c.value&&0==c.value&&(u=0),l&&s&&(t=e*l*s*i*u),c.value&&""==c.value&&(i=1,u=1),c.value&&0==c.value&&0==r.value&&(t=0),a.textContent=t};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))};u(100);var l=u,s=function(){var e=document.createElement("div"),t=document.querySelector(".preloader"),n=document.querySelectorAll("form");e.style.cssText="font-size: 20px; color: #fff;";var o=document.querySelectorAll('input[type="tel"]'),r=document.querySelectorAll('input[type="text"]'),c=document.querySelector(".mess");function a(n){n.preventDefault();var o=new FormData(this),r=this,c={},a=null;r.querySelectorAll("input").forEach((function(e){return""===e.value?(e.style.border="solid red",a=!1):(e.style.border="",a=!0)})),a&&(this.appendChild(e),t.style.display="block",e.appendChild(t),o.forEach((function(e,t){c[t]=e})),i(c,r).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){e.style.display="none"}),3e3),r.querySelectorAll("input").forEach((function(e){e.value="",e.style.border=""}))})).catch((function(t){e.textContent="Что-то пошло не так!",console.log(t)})))}o.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/[^0-9\+]/,"")}))})),r.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/[^А-я]/,"")}))})),c.addEventListener("input",(function(){c.value=c.value.replace(/[^А-я\s]/,"")})),n.forEach((function(e){e.addEventListener("submit",a)}));var i=function(e,t){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};o("31 September 2020"),r(),c(),a(),function(){for(var e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll("li [alt=portfolio]"),n=0;n<t.length;n++){var o=document.createElement("li");o.className="dot",e.appendChild(o)}document.querySelectorAll(".dot")[0].classList.add("dot-active")}(),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content"),r=0,c=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)},u=function(){c(t,r,"portfolio-item-active"),c(n,r,"dot-active"),++r>=t.length&&(r=0),a(t,r,"portfolio-item-active"),a(n,r,"dot-active")};o.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),o.addEventListener("click",(function(e){e.preventDefault();var o=e.target;o.matches(".portfolio-btn, .dot")&&(c(t,r,"portfolio-item-active"),c(n,r,"dot-active"),o.matches("#arrow-right")?r++:o.matches("#arrow-left")?r--:o.matches(".dot")&&n.forEach((function(e,t){e===o&&(r=t)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),a(t,r,"portfolio-item-active"),a(n,r,"dot-active"))})),o.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i(1500)}(),i(),l(),s()}]);