!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.KadenceAccordion=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function a(t){return s(t)||r(t)||o()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var l,c,d,h,u,f;return Array.from||(Array.from=(l=Object.prototype.toString,c=function t(e){return"function"==typeof e||"[object Function]"===l.call(e)},d=function t(e){var n=Number(e);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},h=Math.pow(2,53)-1,u=function t(e){var n=d(e);return Math.min(Math.max(n,0),h)},function t(e){var n=this,i=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a=arguments.length>1?arguments[1]:void 0,s;if(void 0!==a){if(!c(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(s=arguments[2])}for(var r=u(i.length),o=c(n)?Object(new n(r)):new Array(r),l=0,d;l<r;)d=i[l],o[l]=a?void 0===s?a(d,l):a.call(s,d,l):d,l+=1;return o.length=r,o})),function(t,e){var n,i=(t.body||t.documentElement).style,a="",s="";""==i.WebkitAnimation&&(a="-webkit-"),""==i.MozAnimation&&(a="-moz-"),""==i.OAnimation&&(a="-o-"),""==i.WebkitTransition&&(s="-webkit-"),""==i.MozTransition&&(s="-moz-"),""==i.OTransition&&(s="-o-"),Object.defineProperty(Object.prototype,"onCSSAnimationEnd",{value:function t(e){var n=function t(n){e(),n.target.removeEventListener(n.type,t)};return this.addEventListener("webkitAnimationEnd",n),this.addEventListener("mozAnimationEnd",n),this.addEventListener("oAnimationEnd",n),this.addEventListener("oanimationend",n),this.addEventListener("animationend",n),(""!=a||"animation"in i)&&"0s"!=getComputedStyle(this)[a+"animation-duration"]||e(),this},enumerable:!1,writable:!0}),Object.defineProperty(Object.prototype,"onCSSTransitionEnd",{value:function t(e){var n=function t(n){e(),n.target.removeEventListener(n.type,t)};return this.addEventListener("webkitTransitionEnd",n),this.addEventListener("mozTransitionEnd",n),this.addEventListener("oTransitionEnd",n),this.addEventListener("transitionend",n),this.addEventListener("transitionend",n),(""!=s||"transition"in i)&&"0s"!=getComputedStyle(this)[s+"transition-duration"]||e(),this},enumerable:!1,writable:!0})}(document,window,0),function(){function e(n,s){var r=this;t(this,e);var o="string"==typeof n?document.querySelector(n):n;if(null!=o){var l={headerClass:".kt-blocks-accordion-header",panelClass:".kt-accordion-panel",panelInnerClass:".kt-accordion-panel-inner",hiddenClass:"kt-accordion-panel-hidden",activeClass:"kt-accordion-panel-active",get hidenClass(){return this.hiddenClass},initializedClass:"kt-accordion-initialized",get initalisedClass(){return this.initializedClass},headerDataAttr:"data-kt-accordion-header-id",openMultiplePanels:!1,openHeadersOnLoad:[],headerOpenLabel:"",headerCloseLabel:"",roles:!0};this.settings=i({},l,s),this.container=o;var c=Array.from(this.container.children),d=[];Array.from(c).forEach(function(t){Array.from(t.children).forEach(function(t){d.push(t)})});var h=d.filter(function(t){return!t.classList.contains(r.settings.panelClass.substr(1))});this.headers=h.reduce(function(t,e){var n,i=Array.from(e.children).filter(function(t){return t.classList.contains(r.settings.headerClass.substr(1))});return t=(n=[]).concat.apply(n,a(t).concat([i]))},[]),this.panels=d.filter(function(t){return t.classList.contains(r.settings.panelClass.substr(1))}),this.toggleEl=void 0!==this.settings.toggleEl?Array.from(this.container.querySelectorAll(this.settings.toggleEl)):this.headers,this.states=[].map.call(this.headers,function(){return{state:"closed"}}),this.ids=[].map.call(this.headers,function(){return{id:Math.floor(1e6*Math.random()+1)}}),this.toggling=!1,this.container?this.init():console.log("Something is wrong with you markup...")}}return n(e,[{key:"init",value:function t(){this._setupAttributes(),this._initalState(),this.calculateAllPanelsHeight(),this._insertDataAttrs(),this._addListeners(),this._finishInitialization()}},{key:"_setRole",value:function t(e,n){("boolean"==typeof this.settings.roles&&this.settings.roles||void 0!==this.settings.roles[e]&&!1!==this.settings.roles[e])&&n.setAttribute("role",e)}},{key:"_initalState",value:function t(){var e=this.settings.openHeadersOnLoad;e.length&&this._openHeadersOnLoad(e),this._renderDom()}},{key:"_insertDataAttrs",value:function t(){var e=this;this.headers.forEach(function(t,n){t.setAttribute(e.settings.headerDataAttr,n)})}},{key:"_finishInitialization",value:function t(){this.container.classList.add(this.settings.initializedClass),this._setRole("presentation",this.container)}},{key:"_addListeners",value:function t(){var e=this;this.headers.forEach(function(t,n){t.addEventListener("click",function(){e.handleClick(t,n)})})}},{key:"handleClick",value:function t(e,n){var i=this.settings.headerClass.substr(1);e.classList.contains(i)&&!1===this.toggling&&(this.toggling=!0,this.setState(n),this._renderDom())}},{key:"setState",value:function t(e){var n=this,i=this.getState();this.settings.openMultiplePanels||i.filter(function(t,n){n!=e&&(t.state="closed")}),i.filter(function(t,i){if(i==e){var a=n.toggleState(t.state);return t.state=a}})}},{key:"_renderDom",value:function t(){var e=this;this.states.filter(function(t,n){"open"===t.state&&e.open(n,!1)}),this.states.filter(function(t,n){"closed"===t.state&&e.close(n,!1)})}},{key:"open",value:function t(e){var n;(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this.setState(e),this.togglePanel("open",e)}},{key:"close",value:function t(e){var n;(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this.setState(e),this.togglePanel("closed",e)}},{key:"openAll",value:function t(){var e=this;this.headers.forEach(function(t,n){e.togglePanel("open",n)})}},{key:"closeAll",value:function t(){var e=this;this.headers.forEach(function(t,n){e.togglePanel("closed",n)})}},{key:"togglePanel",value:function t(e,n){var i=this;if(void 0!==e&&void 0!==n)if("closed"===e){var a=this.headers[n],s=this.panels[n];if(!s.classList.contains(this.settings.hiddenClass)){s.style.height=s.getAttribute("data-panel-height"),s.offsetHeight,s.style.height="",s.classList.add("kt-panel-is-collapsing"),s.classList.remove(this.settings.activeClass),a.classList.remove(this.settings.activeClass),a.setAttribute("aria-expanded",!1);var r=1e3*parseFloat(getComputedStyle(s).transitionDuration);setTimeout(function(){return s.classList.add(i.settings.hiddenClass),s.classList.remove("kt-panel-is-collapsing"),i.toggling=!1},r)}}else if("open"===e){var o=this.headers[n],l=this.panels[n];if(!l.classList.contains(this.settings.activeClass)){l.classList.remove(this.settings.hiddenClass),l.style.height=0,l.offsetHeight,l.classList.add("kt-panel-is-expanding"),l.style.height=l.getAttribute("data-panel-height"),l.offsetHeight,o.classList.add(this.settings.activeClass),o.setAttribute("aria-expanded",!0);var c=window.document.createEvent("UIEvents");c.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(c);var d=1e3*parseFloat(getComputedStyle(l).transitionDuration);setTimeout(function(){return l.classList.add(i.settings.activeClass),l.style.height="",l.classList.remove("kt-panel-is-expanding"),i.toggling=!1},d)}}}},{key:"getState",value:function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i;return n.length&&Array.isArray(n)?n.map(function(t){return e.states[t]}):this.states}},{key:"toggleState",value:function t(e){if(void 0!==e)return"closed"===e?"open":"closed"}},{key:"_openHeadersOnLoad",value:function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i;n.length&&Array.isArray(n)&&n.filter(function(t){return null!=t}).forEach(function(t){e.setState(t)})}},{key:"_setupAttributes",value:function t(){this._setupHeaders(),this._setupPanels(),this._insertDataAttrs()}},{key:"_setPanelHeight",value:function t(){this.calculateAllPanelsHeight()}},{key:"calculatePanelHeight",value:function t(e){var n,i=e.querySelector(this.settings.panelInnerClass).getBoundingClientRect();return e.setAttribute("data-panel-height","".concat(i.height,"px"))}},{key:"calculateAllPanelsHeight",value:function t(){var e=this;this.panels.forEach(function(t){e.calculatePanelHeight(t)})}},{key:"_setupHeaders",value:function t(){var e=this;this.headers.forEach(function(t,n){t.setAttribute("id","kt-accordion-header-".concat(e.ids[n].id)),t.setAttribute("aria-controls","kt-accordion-panel-".concat(e.ids[n].id))})}},{key:"_setupPanels",value:function t(){var e=this;this.panels.forEach(function(t,n){t.setAttribute("id","kt-accordion-panel-".concat(e.ids[n].id)),t.setAttribute("aria-labelledby","kt-accordion-header-".concat(e.ids[n].id)),!0!==e.settings.roles&&!1===e.settings.roles.region||e._setRole("region",t)})}}]),e}()});for(var accordions=document.querySelectorAll(".kt-accordion-inner-wrap"),accordionsArray=Array.from(accordions),i=0,len=accordionsArray.length;i<len;i++){var multiplePanels=accordionsArray[i].getAttribute("data-allow-multiple-open"),openPanels=accordionsArray[i].getAttribute("data-start-open"),openPanel=parseInt(openPanels);if("none"!==openPanels)for(var b=0,lenb=accordionsArray[i].children.length;b<lenb;b++)accordionsArray[i].children[b].classList.contains("kt-accordion-pane-"+(1+openPanel))&&(openPanel=b);new KadenceAccordion(accordionsArray[i],{openHeadersOnLoad:"none"===openPanels?[]:[parseInt(openPanel)],headerClass:".kt-blocks-accordion-header",panelClass:".kt-accordion-panel",panelInnerClass:".kt-accordion-panel-inner",hiddenClass:"kt-accordion-panel-hidden",activeClass:"kt-accordion-panel-active",initializedClass:"kt-accordion-initialized",headerDataAttr:"data-kt-accordion-header-id",openMultiplePanels:"true"===multiplePanels})}!function(){if(document.getElementById&&window.addEventListener){function t(t,e,n){if(!(n<=0)){var i,a=(e-t.scrollTop)/n*10;setTimeout(function(){t.scrollTop=t.scrollTop+a,t.scrollTop!==e&&scrollTo(t,e,n-10)},10)}}function e(){if(""!=window.location.hash){var e=location.hash.substring(1),n;if(!/^[A-z0-9_-]+$/.test(e))return;if((n=document.getElementById(e))&&n.classList.contains("wp-block-kadence-pane")){var i=document.querySelectorAll("#"+e+" .kt-blocks-accordion-header")[0];i.classList.contains("kt-accordion-panel-active")||i.click(),window.setTimeout(function(){t(document.body,n.offsetTop,600)},500)}}}window.addEventListener("hashchange",e,!1),window.addEventListener("load",e,!1)}}();