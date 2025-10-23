(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const yt=(h,t)=>{for(let e in t)h[e]=t[e];return h},x=(h,t)=>Array.from(h.querySelectorAll(t)),Yt=(h,t,e)=>{e?h.classList.add(t):h.classList.remove(t)},vt=h=>{if(typeof h=="string"){if(h==="null")return null;if(h==="true")return!0;if(h==="false")return!1;if(h.match(/^-?[\d\.]+$/))return parseFloat(h)}return h},lt=(h,t)=>{h.style.transform=t},$t=(h,t)=>{let e=h.matches||h.matchesSelector||h.msMatchesSelector;return!(!e||!e.call(h,t))},W=(h,t)=>{if(typeof h.closest=="function")return h.closest(t);for(;h;){if($t(h,t))return h;h=h.parentNode}return null},Ke=h=>{let t=(h=h||document.documentElement).requestFullscreen||h.webkitRequestFullscreen||h.webkitRequestFullScreen||h.mozRequestFullScreen||h.msRequestFullscreen;t&&t.apply(h)},Gt=h=>{let t=document.createElement("style");return t.type="text/css",h&&h.length>0&&(t.styleSheet?t.styleSheet.cssText=h:t.appendChild(document.createTextNode(h))),document.head.appendChild(t),t},$e=()=>{let h={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{h[t.split("=").shift()]=t.split("=").pop()}));for(let t in h){let e=h[t];h[t]=vt(unescape(e))}return h.dependencies!==void 0&&delete h.dependencies,h},ln={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Xe=navigator.userAgent,bt=/(iphone|ipod|ipad|android)/gi.test(Xe)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ye=/android/gi.test(Xe);var dn=(function(h){if(h){var t=function(f){return[].slice.call(f)},e=3,n=[],i=null,s="requestAnimationFrame"in h?function(){h.cancelAnimationFrame(i),i=h.requestAnimationFrame((function(){return o(n.filter((function(f){return f.dirty&&f.active})))}))}:function(){},a=function(f){return function(){n.forEach((function(T){return T.dirty=f})),s()}},o=function(f){f.filter((function(P){return!P.styleComputed})).forEach((function(P){P.styleComputed=c(P)})),f.filter(g).forEach(y);var T=f.filter(u);T.forEach(d),T.forEach((function(P){y(P),r(P)})),T.forEach(L)},r=function(f){return f.dirty=0},d=function(f){f.availableWidth=f.element.parentNode.clientWidth,f.currentWidth=f.element.scrollWidth,f.previousFontSize=f.currentFontSize,f.currentFontSize=Math.min(Math.max(f.minSize,f.availableWidth/f.currentWidth*f.previousFontSize),f.maxSize),f.whiteSpace=f.multiLine&&f.currentFontSize===f.minSize?"normal":"nowrap"},u=function(f){return f.dirty!==2||f.dirty===2&&f.element.parentNode.clientWidth!==f.availableWidth},c=function(f){var T=h.getComputedStyle(f.element,null);return f.currentFontSize=parseFloat(T.getPropertyValue("font-size")),f.display=T.getPropertyValue("display"),f.whiteSpace=T.getPropertyValue("white-space"),!0},g=function(f){var T=!1;return!f.preStyleTestCompleted&&(/inline-/.test(f.display)||(T=!0,f.display="inline-block"),f.whiteSpace!=="nowrap"&&(T=!0,f.whiteSpace="nowrap"),f.preStyleTestCompleted=!0,T)},y=function(f){f.element.style.whiteSpace=f.whiteSpace,f.element.style.display=f.display,f.element.style.fontSize=f.currentFontSize+"px"},L=function(f){f.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:f.previousFontSize,newValue:f.currentFontSize,scaleFactor:f.currentFontSize/f.previousFontSize}}))},p=function(f,T){return function(){f.dirty=T,f.active&&s()}},D=function(f){return function(){n=n.filter((function(T){return T.element!==f.element})),f.observeMutations&&f.observer.disconnect(),f.element.style.whiteSpace=f.originalStyle.whiteSpace,f.element.style.display=f.originalStyle.display,f.element.style.fontSize=f.originalStyle.fontSize}},S=function(f){return function(){f.active||(f.active=!0,s())}},q=function(f){return function(){return f.active=!1}},J=function(f){f.observeMutations&&(f.observer=new MutationObserver(p(f,1)),f.observer.observe(f.element,f.observeMutations))},M={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in h&&{subtree:!0,childList:!0,characterData:!0}},R=null,C=function(){h.clearTimeout(R),R=h.setTimeout(a(2),N.observeWindowDelay)},O=["resize","orientationchange"];return Object.defineProperty(N,"observeWindow",{set:function(f){var T="".concat(f?"add":"remove","EventListener");O.forEach((function(P){h[T](P,C)}))}}),N.observeWindow=!0,N.observeWindowDelay=100,N.fitAll=a(e),N}function U(f,T){var P=Object.assign({},M,T),$=f.map((function(K){var X=Object.assign({},P,{element:K,active:!0});return(function(V){V.originalStyle={whiteSpace:V.element.style.whiteSpace,display:V.element.style.display,fontSize:V.element.style.fontSize},J(V),V.newbie=!0,V.dirty=!0,n.push(V)})(X),{element:K,fit:p(X,e),unfreeze:S(X),freeze:q(X),unsubscribe:D(X)}}));return s(),$}function N(f){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof f=="string"?U(t(document.querySelectorAll(f)),T):U([f],T)[0]}})(typeof window>"u"?null:window);let cn=class{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,x(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))})),x(t,"video, audio").forEach((i=>{let s=0;x(i,"source[data-src]").forEach((a=>{a.setAttribute("src",a.getAttribute("data-src")),a.removeAttribute("data-src"),a.setAttribute("data-lazy-loaded",""),s+=1})),bt&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),s>0&&i.load()}));let n=t.slideBackgroundElement;if(n){n.style.display="block";let i=t.slideBackgroundContentElement,s=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let o=t.getAttribute("data-background-image"),r=t.getAttribute("data-background-video"),d=t.hasAttribute("data-background-video-loop"),u=t.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?i.style.backgroundImage=`url(${o.trim()})`:i.style.backgroundImage=o.split(",").map((c=>`url(${((g="")=>encodeURI(g).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(y=>`%${y.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(c.trim()))})`)).join(",");else if(r){let c=document.createElement("video");d&&c.setAttribute("loop",""),(u||this.Reveal.isSpeakerNotes())&&(c.muted=!0),bt&&(c.muted=!0,c.setAttribute("playsinline","")),r.split(",").forEach((g=>{const y=document.createElement("source");y.setAttribute("src",g);let L=((p="")=>ln[p.split(".").pop()])(g);L&&y.setAttribute("type",L),c.appendChild(y)})),i.appendChild(c)}else if(s&&e.excludeIframes!==!0){let c=document.createElement("iframe");c.setAttribute("allowfullscreen",""),c.setAttribute("mozallowfullscreen",""),c.setAttribute("webkitallowfullscreen",""),c.setAttribute("allow","autoplay"),c.setAttribute("data-src",s),c.style.width="100%",c.style.height="100%",c.style.maxHeight="100%",c.style.maxWidth="100%",i.appendChild(c)}}let a=i.querySelector("iframe[data-src]");a&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(s)&&a.getAttribute("src")!==s&&a.setAttribute("src",s)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach((e=>{dn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",x(e,"iframe[src]").forEach((n=>{n.removeAttribute("src")}))),x(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})),x(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}))}formatEmbeddedContent(){let t=(e,n,i)=>{x(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach((s=>{let a=s.getAttribute(e);a&&a.indexOf(i)===-1&&s.setAttribute(e,a+(/\?/.test(a)?"&":"?")+i)}))};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){if(t){const e=this.Reveal.isSpeakerNotes();x(t,'img[src$=".gif"]').forEach((n=>{n.setAttribute("src",n.getAttribute("src"))})),x(t,"video, audio").forEach((n=>{if(W(n,".fragment")&&!W(n,".fragment.visible"))return;let i=this.Reveal.getConfig().autoPlayMedia;if(typeof i!="boolean"&&(i=n.hasAttribute("data-autoplay")||!!W(n,".slide-background")),i&&typeof n.play=="function"){if(e&&!n.muted)return;if(n.readyState>1)this.startEmbeddedMedia({target:n});else if(bt){let s=n.play();s&&typeof s.catch=="function"&&n.controls===!1&&s.catch((()=>{n.controls=!0,n.addEventListener("play",(()=>{n.controls=!1}))}))}else n.removeEventListener("loadeddata",this.startEmbeddedMedia),n.addEventListener("loadeddata",this.startEmbeddedMedia)}})),e||(x(t,"iframe[src]").forEach((n=>{W(n,".fragment")&&!W(n,".fragment.visible")||this.startEmbeddedIframe({target:n})})),x(t,"iframe[data-src]").forEach((n=>{W(n,".fragment")&&!W(n,".fragment.visible")||n.getAttribute("src")!==n.getAttribute("data-src")&&(n.removeEventListener("load",this.startEmbeddedIframe),n.addEventListener("load",this.startEmbeddedIframe),n.setAttribute("src",n.getAttribute("data-src")))})))}}startEmbeddedMedia(t){let e=!!W(t.target,"html"),n=!!W(t.target,".present");e&&n&&(t.target.paused||t.target.ended)&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!W(t.target,"html"),i=!!W(t.target,".present");if(n&&i){let s=this.Reveal.getConfig().autoPlayMedia;typeof s!="boolean"&&(s=e.hasAttribute("data-autoplay")||!!W(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&s?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&s?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=yt({unloadIframes:!0},e),t&&t.parentNode&&(x(t,"video, audio").forEach((n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())})),x(t,"iframe").forEach((n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)})),x(t,'iframe[src*="youtube.com/embed/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),x(t,'iframe[src*="player.vimeo.com/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")})),e.unloadIframes===!0&&x(t,"iframe[data-src]").forEach((n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")})))}};const pt=".slides section",rt=".slides>section",Be=".slides>section.present>section",hn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;let un=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),i="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(i=n.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let a=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],i){case"c":e.push(this.Reveal.getSlidePastCount(t)+a);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+a,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(t);e.push(o.h+a);let r=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(r,o.v+1)}}let s="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],s)}formatNumber(t,e,n,i="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}},pn=class{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const i=this.Reveal.getSlides()[parseInt(e,10)-1];i&&(t=this.Reveal.getIndices(i))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find((i=>e.test(i.innerText)));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}};const Jt=h=>{let t=h.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=h.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=h.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let i=h.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};let gn=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((t=>{let e=this.createBackground(t,this.element);x(t,"section").forEach((n=>{this.createBackground(n,e),e.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",n.appendChild(i),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=i,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,i={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},s=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?t.setAttribute("data-background-image",i.background):e.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&e.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&e.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(e.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(e.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&e.setAttribute("data-background-transition",i.backgroundTransition),s&&e.setAttribute("data-preload",""),i.backgroundSize&&(n.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(n.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(n.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(n.style.opacity=i.backgroundOpacity);const a=this.getContrastClass(t);typeof a=="string"&&t.classList.add(a)}getContrastClass(t){const e=t.slideBackgroundElement;let n=t.getAttribute("data-background-color");if(!n||!Jt(n)){let s=window.getComputedStyle(e);s&&s.backgroundColor&&(n=s.backgroundColor)}if(n){const s=Jt(n);if(s&&s.a!==0)return typeof(i=n)=="string"&&(i=Jt(i)),(i?(299*i.r+587*i.g+114*i.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var i;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach((n=>{t.classList.contains(n)?e.classList.add(n):e.classList.remove(n)}),this)}update(t=!1){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),i=this.Reveal.getIndices(),s=null,a=e.rtl?"future":"past",o=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((d,u)=>{d.classList.remove("past","present","future"),u<i.h?d.classList.add(a):u>i.h?d.classList.add(o):(d.classList.add("present"),s=d),(t||u===i.h)&&x(d,".slide-background").forEach(((c,g)=>{c.classList.remove("past","present","future");const y=typeof i.v=="number"?i.v:0;g<y?c.classList.add("past"):g>y?c.classList.add("future"):(c.classList.add("present"),u===i.h&&(s=c))}))})),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),s&&this.previousBackground){let d=this.previousBackground.getAttribute("data-background-hash"),u=s.getAttribute("data-background-hash");if(u&&u===d&&s!==this.previousBackground){this.element.classList.add("no-transition");const c=s.querySelector("video"),g=this.previousBackground.querySelector("video");if(c&&g){const y=c.parentNode;g.parentNode.appendChild(c),y.appendChild(g)}}}const r=s!==this.previousBackground;if(r&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r&&s){this.Reveal.slideContent.startEmbeddedContent(s);let d=s.querySelector(".slide-background-content");if(d){let u=d.style.backgroundImage||"";/\.gif/i.test(u)&&(d.style.backgroundImage="",window.getComputedStyle(d).opacity,d.style.backgroundImage=u)}this.previousBackground=s}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove("no-transition")}),10)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,i=this.Reveal.getHorizontalSlides(),s=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(" ");a.length===1?e=n=parseInt(a[0],10):(e=parseInt(a[0],10),n=parseInt(a[1],10));let o,r,d=this.element.offsetWidth,u=i.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:u>1?(e-d)/(u-1):0,r=o*t.h*-1;let c,g,y=this.element.offsetHeight,L=s.length;c=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-y)/(L-1),g=L>0?c*t.v:0,this.element.style.backgroundPosition=r+"px "+-g+"px"}}destroy(){this.element.remove()}},He=0,mn=class{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),i=n.indexOf(e),s=n.indexOf(t);if(t&&e&&t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(i>s?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Gt();let a=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",a.slideDirection=i>s?"forward":"backward";let o=t.style.display==="none";o&&(t.style.display=this.Reveal.getConfig().display);let r=this.getAutoAnimatableElements(t,e).map((d=>this.autoAnimateElements(d.from,d.to,d.options||{},a,He++)));if(o&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let d=.8*a.duration,u=.2*a.duration;this.getUnmatchedAutoAnimateElements(e).forEach((c=>{let g=this.getAutoAnimateOptions(c,a),y="unmatched";g.duration===a.duration&&g.delay===a.delay||(y="unmatched-"+He++,r.push(`[data-auto-animate="running"] [data-auto-animate-target="${y}"] { transition: opacity ${g.duration}s ease ${g.delay}s; }`)),c.dataset.autoAnimateTarget=y}),this),r.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${d}s ease ${u}s; }`)}this.autoAnimateStyleSheet.innerHTML=r.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){x(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((t=>{t.dataset.autoAnimate=""})),x(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((t=>{delete t.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,i,s){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=s;let a=this.getAutoAnimateOptions(e,i);n.delay!==void 0&&(a.delay=n.delay),n.duration!==void 0&&(a.duration=n.duration),n.easing!==void 0&&(a.easing=n.easing);let o=this.getAutoAnimatableProperties("from",t,n),r=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&delete r.styles.opacity,n.translate!==!1||n.scale!==!1){let c=this.Reveal.getScale(),g={x:(o.x-r.x)/c,y:(o.y-r.y)/c,scaleX:o.width/r.width,scaleY:o.height/r.height};g.x=Math.round(1e3*g.x)/1e3,g.y=Math.round(1e3*g.y)/1e3,g.scaleX=Math.round(1e3*g.scaleX)/1e3,g.scaleX=Math.round(1e3*g.scaleX)/1e3;let y=n.translate!==!1&&(g.x!==0||g.y!==0),L=n.scale!==!1&&(g.scaleX!==0||g.scaleY!==0);if(y||L){let p=[];y&&p.push(`translate(${g.x}px, ${g.y}px)`),L&&p.push(`scale(${g.scaleX}, ${g.scaleY})`),o.styles.transform=p.join(" "),o.styles["transform-origin"]="top left",r.styles.transform="none"}}for(let c in r.styles){const g=r.styles[c],y=o.styles[c];g===y?delete r.styles[c]:(g.explicitValue===!0&&(r.styles[c]=g.value),y.explicitValue===!0&&(o.styles[c]=y.value))}let d="",u=Object.keys(r.styles);return u.length>0&&(o.styles.transition="none",r.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,r.styles["transition-property"]=u.join(", "),r.styles["will-change"]=u.join(", "),d='[data-auto-animate-target="'+s+'"] {'+Object.keys(o.styles).map((c=>c+": "+o.styles[c]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+s+'"] {'+Object.keys(r.styles).map((c=>c+": "+r.styles[c]+" !important;")).join("")+"}"),d}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=yt(n,e),t.parentNode){let i=W(t.parentNode,"[data-auto-animate-target]");i&&(n=this.getAutoAnimateOptions(i,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let i=this.Reveal.getConfig(),s={styles:[]};if(n.translate!==!1||n.scale!==!1){let o;if(typeof n.measure=="function")o=n.measure(e);else if(i.center)o=e.getBoundingClientRect();else{let r=this.Reveal.getScale();o={x:e.offsetLeft*r,y:e.offsetTop*r,width:e.offsetWidth*r,height:e.offsetHeight*r}}s.x=o.x,s.y=o.y,s.width=o.width,s.height=o.height}const a=getComputedStyle(e);return(n.styles||i.autoAnimateStyles).forEach((o=>{let r;typeof o=="string"&&(o={property:o}),o.from!==void 0&&t==="from"?r={value:o.from,explicitValue:!0}:o.to!==void 0&&t==="to"?r={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(r=parseFloat(a["line-height"])/parseFloat(a["font-size"])),isNaN(r)&&(r=a[o.property])),r!==""&&(s.styles[o.property]=r)})),s}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),i=[];return n.filter(((s,a)=>{if(i.indexOf(s.to)===-1)return i.push(s.to),!0}))}getAutoAnimatePairs(t,e){let n=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",(s=>s.nodeName+":::"+s.getAttribute("data-id"))),this.findAutoAnimateMatches(n,t,e,i,(s=>s.nodeName+":::"+s.textContent.trim())),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",(s=>s.nodeName+":::"+(s.getAttribute("src")||s.getAttribute("data-src")))),this.findAutoAnimateMatches(n,t,e,"pre",(s=>s.nodeName+":::"+s.textContent.trim())),n.forEach((s=>{$t(s.from,i)?s.options={scale:!1}:$t(s.from,"pre")&&(s.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,s.from,s.to,".hljs .hljs-ln-code",(a=>a.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,s.from,s.to,".hljs .hljs-ln-numbers[data-line-number]",(a=>a.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,i,s,a){let o={},r={};[].slice.call(e.querySelectorAll(i)).forEach(((d,u)=>{const c=s(d);typeof c=="string"&&c.length&&(o[c]=o[c]||[],o[c].push(d))})),[].slice.call(n.querySelectorAll(i)).forEach(((d,u)=>{const c=s(d);let g;if(r[c]=r[c]||[],r[c].push(d),o[c]){const y=r[c].length-1,L=o[c].length-1;o[c][y]?(g=o[c][y],o[c][y]=null):o[c][L]&&(g=o[c][L],o[c][L]=null)}g&&t.push({from:g,to:d,options:a})}))}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce(((e,n)=>{const i=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||i||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e}),[])}},fn=class{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=x(this.Reveal.getRevealElement(),rt),n=x(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let i;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const s=window.getComputedStyle(this.viewportElement);s&&s.background&&(i=s.background);const a=[],o=e[0].parentNode;let r;const d=(u,c,g,y)=>{let L;if(r&&this.Reveal.shouldAutoAnimateBetween(r,u))L=document.createElement("div"),L.className="scroll-page-content scroll-auto-animate-page",L.style.display="none",r.closest(".scroll-page-content").parentNode.appendChild(L);else{const p=document.createElement("div");if(p.className="scroll-page",a.push(p),y&&n.length>c){const S=n[c],q=window.getComputedStyle(S);q&&q.background?p.style.background=q.background:i&&(p.style.background=i)}else i&&(p.style.background=i);const D=document.createElement("div");D.className="scroll-page-sticky",p.appendChild(D),L=document.createElement("div"),L.className="scroll-page-content",D.appendChild(L)}L.appendChild(u),u.classList.remove("past","future"),u.setAttribute("data-index-h",c),u.setAttribute("data-index-v",g),u.slideBackgroundElement&&(u.slideBackgroundElement.remove("past","future"),L.insertBefore(u.slideBackgroundElement,u)),r=u};e.forEach(((u,c)=>{this.Reveal.isVerticalStack(u)?u.querySelectorAll("section").forEach(((g,y)=>{d(g,c,y,!0)})):d(u,c,0)}),this),this.createProgressBar(),x(this.Reveal.getRevealElement(),".stack").forEach((u=>u.remove())),a.forEach((u=>o.appendChild(u))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach((u=>u())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=n=>{let i=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;i=Math.max(Math.min(i,1),0),this.viewportElement.scrollTop=i*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",(n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(n)}))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),i=t.scrollLayout==="compact",s=this.viewportElement.offsetHeight,a=e.height*n,o=i?a:s;this.scrollTriggerHeight=i?a:s,this.viewportElement.style.setProperty("--page-height",o+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const r=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=r.map((d=>{const u=this.createPage({pageElement:d,slideElement:d.querySelector("section"),stickyElement:d.querySelector(".scroll-page-sticky"),contentElement:d.querySelector(".scroll-page-content"),backgroundElement:d.querySelector(".slide-background"),autoAnimateElements:d.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});u.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:u,activate:()=>this.activatePage(u),deactivate:()=>this.deactivatePage(u)}),this.createFragmentTriggersForPage(u),u.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(u);let c=Math.max(u.scrollTriggers.length-1,0);c+=u.autoAnimatePages.reduce(((g,y)=>g+Math.max(y.scrollTriggers.length-1,0)),u.autoAnimatePages.length),u.pageElement.querySelectorAll(".scroll-snap-point").forEach((g=>g.remove()));for(let g=0;g<c+1;g++){const y=document.createElement("div");y.className="scroll-snap-point",y.style.height=this.scrollTriggerHeight+"px",y.style.scrollSnapAlign=i?"center":"start",u.pageElement.appendChild(y),g===0&&(y.style.marginTop=-this.scrollTriggerHeight+"px")}return i&&u.scrollTriggers.length>0?(u.pageHeight=s,u.pageElement.style.setProperty("--page-height",s+"px")):(u.pageHeight=o,u.pageElement.style.removeProperty("--page-height")),u.scrollPadding=this.scrollTriggerHeight*c,u.totalHeight=u.pageHeight+u.scrollPadding,u.pageElement.style.setProperty("--page-scroll-padding",u.scrollPadding+"px"),c>0?(u.stickyElement.style.position="sticky",u.stickyElement.style.top=Math.max((s-u.pageHeight)/2,0)+"px"):(u.stickyElement.style.position="relative",u.pageElement.style.scrollSnapAlign=u.pageHeight<s?"center":"start"),u})),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((e,n)=>e+Math.max(n.page.scrollTriggers.length,1)),0);let t=0;this.slideTriggers.forEach(((e,n)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const i=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach(((s,a)=>{s.range=[t+a*i,t+(a+1)*i]})),t=e.range[1]})),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const n=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return n.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),n.forEach(((i,s)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(s,t.fragments,e)}})}))),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map(((e,n)=>{let i=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(i,i.slideElement),t.autoAnimatePages.push(i),{page:i,activate:()=>this.activatePage(i),deactivate:()=>this.deactivatePage(i)}})))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((a=>a.remove()));const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,n=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const i=e/t*this.progressBarHeight,s=Math.min(i/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-s+"px",i>6?this.slideTriggers.forEach((a=>{const{page:o}=a;o.progressBarSlide=document.createElement("div"),o.progressBarSlide.className="scrollbar-slide",o.progressBarSlide.style.top=a.range[0]*this.progressBarHeight+"px",o.progressBarSlide.style.height=(a.range[1]-a.range[0])*this.progressBarHeight-s+"px",o.progressBarSlide.classList.toggle("has-triggers",o.scrollTriggers.length>0),this.progressBarInner.appendChild(o.progressBarSlide),o.scrollTriggerElements=o.scrollTriggers.map(((r,d)=>{const u=document.createElement("div");return u.className="scrollbar-trigger",u.style.top=(r.range[0]-a.range[0])*this.progressBarHeight+"px",u.style.height=(r.range[1]-r.range[0])*this.progressBarHeight-s+"px",o.progressBarSlide.appendChild(u),d===0&&(u.style.display="none"),u}))})):this.pages.forEach((a=>a.progressBarSlide=null))}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,i=this.viewportElement.scrollHeight-t,s=Math.max(Math.min(n/i,1),0),a=Math.max(Math.min((n+t/2)/this.viewportElement.scrollHeight,1),0);let o;this.slideTriggers.forEach((r=>{const{page:d}=r;s>=r.range[0]-2*e&&s<=r.range[1]+2*e&&!d.loaded?(d.loaded=!0,this.Reveal.slideContent.load(d.slideElement)):d.loaded&&(d.loaded=!1,this.Reveal.slideContent.unload(d.slideElement)),s>=r.range[0]&&s<=r.range[1]?(this.activateTrigger(r),o=r.page):r.active&&this.deactivateTrigger(r)})),o&&o.scrollTriggers.forEach((r=>{a>=r.range[0]&&a<=r.range[1]?this.activateTrigger(r):r.active&&this.deactivateTrigger(r)})),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((e=>e.progressBarSlide)).forEach((e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach(((n,i)=>{e.scrollTriggerElements[i].classList.toggle("active",e.active===!0&&n.active===!0)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove("visible")}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(t)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:n,contentElement:i,indexh:s,indexv:a}=t;i.style.display="block",e.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(e,s,a),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(i.parentNode.querySelectorAll(".scroll-page-content")).forEach((o=>{o!==i&&(o.style.display="none")}))}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const n=this.getAllPages().find((i=>i.indexh===t&&i.indexv===e));return n?n.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find((e=>e.page.slideElement===t))}getAllPages(){return this.pages.flatMap((t=>[t,...t.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},vn=class{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=x(this.Reveal.getRevealElement(),pt),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),s=Math.floor(i.width*(1+t.margin)),a=Math.floor(i.height*(1+t.margin)),o=i.width,r=i.height;await new Promise(requestAnimationFrame),Gt("@page{size:"+s+"px "+a+"px; margin: 0px;}"),Gt(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+r+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=s+"px",document.body.style.height=a+"px";const d=this.Reveal.getViewportElement();let u;if(d){const p=window.getComputedStyle(d);p&&p.background&&(u=p.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,r),await new Promise(requestAnimationFrame);const c=e.map((p=>p.scrollHeight)),g=[],y=e[0].parentNode;let L=1;e.forEach((function(p,D){if(p.classList.contains("stack")===!1){let S=(s-o)/2,q=(a-r)/2;const J=c[D];let M=Math.max(Math.ceil(J/a),1);M=Math.min(M,t.pdfMaxPagesPerSlide),(M===1&&t.center||p.classList.contains("center"))&&(q=Math.max((a-J)/2,0));const R=document.createElement("div");if(g.push(R),R.className="pdf-page",R.style.height=(a+t.pdfPageHeightOffset)*M+"px",u&&(R.style.background=u),R.appendChild(p),p.style.left=S+"px",p.style.top=q+"px",p.style.width=o+"px",this.Reveal.slideContent.layout(p),p.slideBackgroundElement&&R.insertBefore(p.slideBackgroundElement,p),t.showNotes){const C=this.Reveal.getSlideNotes(p);if(C){const U=typeof t.showNotes=="string"?t.showNotes:"inline",N=document.createElement("div");N.classList.add("speaker-notes"),N.classList.add("speaker-notes-pdf"),N.setAttribute("data-layout",U),N.innerHTML=C,U==="separate-page"?g.push(N):(N.style.left="8px",N.style.bottom="8px",N.style.width=s-16+"px",R.appendChild(N))}}if(n){const C=document.createElement("div");C.classList.add("slide-number"),C.classList.add("slide-number-pdf"),C.innerHTML=L++,R.appendChild(C)}if(t.pdfSeparateFragments){const C=this.Reveal.fragments.sort(R.querySelectorAll(".fragment"),!0);let O;C.forEach((function(U,N){O&&O.forEach((function(T){T.classList.remove("current-fragment")})),U.forEach((function(T){T.classList.add("visible","current-fragment")}),this);const f=R.cloneNode(!0);if(n){const T=N+1;f.querySelector(".slide-number-pdf").innerHTML+="."+T}g.push(f),O=U}),this),C.forEach((function(U){U.forEach((function(N){N.classList.remove("visible","current-fragment")}))}))}else x(R,".fragment:not(.fade-out)").forEach((function(C){C.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),g.forEach((p=>y.appendChild(p))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),d.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}},yn=class{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){x(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.add("visible"),t.classList.remove("current-fragment")}))}enable(){x(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")}))}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],i=[],s=[];t.forEach((o=>{if(o.hasAttribute("data-fragment-index")){let r=parseInt(o.getAttribute("data-fragment-index"),10);n[r]||(n[r]=[]),n[r].push(o)}else i.push([o])})),n=n.concat(i);let a=0;return n.forEach((o=>{o.forEach((r=>{s.push(r),r.setAttribute("data-fragment-index",a)})),a++})),e===!0?n:s}sortAll(){this.Reveal.getHorizontalSlides().forEach((t=>{let e=x(t,"section");e.forEach(((n,i)=>{this.sort(n.querySelectorAll(".fragment"))}),this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))}))}update(t,e,n=this.Reveal.getCurrentSlide()){let i={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(e=e||this.sort(n.querySelectorAll(".fragment"))).length){let s=0;if(typeof t!="number"){let a=this.sort(n.querySelectorAll(".fragment.visible")).pop();a&&(t=parseInt(a.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach(((a,o)=>{if(a.hasAttribute("data-fragment-index")&&(o=parseInt(a.getAttribute("data-fragment-index"),10)),s=Math.max(s,o),o<=t){let r=a.classList.contains("visible");a.classList.add("visible"),a.classList.remove("current-fragment"),o===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(a)),a.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(a)),r||(i.shown.push(a),this.Reveal.dispatchEvent({target:a,type:"visible",bubbles:!1}))}else{let r=a.classList.contains("visible");a.classList.remove("visible"),a.classList.remove("current-fragment"),r&&(this.Reveal.slideContent.stopEmbeddedContent(a),i.hidden.push(a),this.Reveal.dispatchEvent({target:a,type:"hidden",bubbles:!1}))}})),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,s),-1),n.setAttribute("data-fragment",t)}return i.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:i.hidden[0],fragments:i.hidden}}),i.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:i.shown[0],fragments:i.shown}}),i}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let i=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof t!="number"){let a=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=a?parseInt(a.getAttribute("data-fragment-index")||0,10):-1}t+=e;let s=this.update(t,i);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!s.shown.length&&!s.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},bn=class{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),x(this.Reveal.getRevealElement(),pt).forEach((i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)}));const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((t,e)=>{t.setAttribute("data-index-h",e),lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&x(t,"section").forEach(((n,i)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",i),lt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((t,e)=>{lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),x(t,".slide-background").forEach(((n,i)=>{lt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")}))}))}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),x(this.Reveal.getRevealElement(),pt).forEach((e=>{lt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)})),x(this.Reveal.getBackgroundsElement(),".slide-background").forEach((e=>{lt(e,"")})),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),i=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,i)}}}},wn=class{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let s=document.activeElement&&document.activeElement.isContentEditable===!0,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),r=!([32,37,38,39,40,63,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(s||a||o||r)return;let d,u=[66,86,190,191,112];if(typeof e.keyboard=="object")for(d in e.keyboard)e.keyboard[d]==="togglePause"&&u.push(parseInt(d,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(t.key)||this.Reveal.isPaused()&&u.indexOf(n)===-1)return!1;let c=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),g=!1;if(typeof e.keyboard=="object"){for(d in e.keyboard)if(parseInt(d,10)===n){let y=e.keyboard[d];typeof y=="function"?y.apply(null,[t]):typeof y=="string"&&typeof this.Reveal[y]=="function"&&this.Reveal[y].call(),g=!0}}if(g===!1){for(d in this.bindings)if(parseInt(d,10)===n){let y=this.bindings[d].callback;typeof y=="function"?y.apply(null,[t]):typeof y=="string"&&typeof this.Reveal[y]=="function"&&this.Reveal[y].call(),g=!0}}g===!1&&(g=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&c?e.rtl?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&c?e.rtl?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&c?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&c?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(n)||n===191&&!t.shiftKey?this.Reveal.togglePause():n===70?Ke(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():n!==63&&n!==191||!t.shiftKey?n===112?this.Reveal.toggleHelp():g=!1:this.Reveal.toggleHelp()),g?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}},kn=class{MAX_REPLACE_STATE_FREQUENCY=1e3;constructor(t){this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),i=n.split("/");if(/^[0-9]*$/.test(i[0])||!n.length){const s=this.Reveal.getConfig();let a,o=s.hashOneBasedIndex||e.oneBasedIndex?1:0,r=parseInt(i[0],10)-o||0,d=parseInt(i[1],10)-o||0;return s.fragmentInURL&&(a=parseInt(i[2],10),isNaN(a)&&(a=void 0)),{h:r,v:d,f:a}}{let s,a;/\/[-\d]+$/g.test(n)&&(a=parseInt(n.split("/").pop(),10),a=isNaN(a)?void 0:a,n=n.split("/").shift());try{s=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(s)return{...this.Reveal.getIndices(s),f:a}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let i=this.getHash();e.history?window.location.hash=i:e.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout((()=>this.replaceState(t)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),i=n?n.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let s=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(s.f=void 0),typeof i=="string"&&i.length)e="/"+i,s.f>=0&&(e+="/"+s.f);else{let a=this.Reveal.getConfig().hashOneBasedIndex?1:0;(s.h>0||s.v>0||s.f>=0)&&(e+=s.h+a),(s.v>0||s.f>=0)&&(e+="/"+(s.v+a)),s.f>=0&&(e+="/"+s.f)}return e}onWindowHashChange(t){this.readURL()}},Sn=class{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=x(e,".navigate-left"),this.controlsRight=x(e,".navigate-right"),this.controlsUp=x(e,".navigate-up"),this.controlsDown=x(e,".navigate-down"),this.controlsPrev=x(e,".navigate-prev"),this.controlsNext=x(e,".navigate-next"),this.controlsFullscreen=x(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls&&(t.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];Ye&&(t=["touchstart"]),t.forEach((e=>{this.controlsLeft.forEach((n=>n.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((n=>n.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((n=>n.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((n=>n.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((n=>n.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((n=>n.addEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((n=>n.addEventListener(e,this.onEnterFullscreen,!1)))}))}unbind(){["touchstart","click"].forEach((t=>{this.controlsLeft.forEach((e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((e=>e.removeEventListener(t,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((e=>e.removeEventListener(t,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((e=>e.removeEventListener(t,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((e=>e.removeEventListener(t,this.onEnterFullscreen,!1)))}))}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")})),t.left&&this.controlsLeft.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.right&&this.controlsRight.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.up&&this.controlsUp.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.down&&this.controlsDown.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(t.left||t.up)&&this.controlsPrev.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(t.right||t.down)&&this.controlsNext.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}));let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsNext.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}));const i=this.Reveal.isVerticalSlide(e),s=i&&e.parentElement&&e.parentElement.querySelectorAll(":scope > section").length>1;i&&s?(n.prev&&this.controlsUp.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsDown.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}))):(n.prev&&this.controlsLeft.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsRight.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(t){const e=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();Ke(e.embedded?n:n.parentElement)}},xn=class{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,i=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(i=n-i);let s=this.Reveal.getIndices(e[i]);this.Reveal.slide(s.h,s.v)}destroy(){this.element.remove()}};class En{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const _e=(h,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=h,typeof t=="function"&&(e.onload=e.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=i=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+i))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class An{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise((n=>{let i=[],s=0;if(e.forEach((a=>{a.condition&&!a.condition()||(a.async?this.asyncDependencies.push(a):i.push(a))})),i.length){s=i.length;const a=o=>{o&&typeof o.callback=="function"&&o.callback(),--s==0&&this.initPlugins().then(n)};i.forEach((o=>{typeof o.id=="string"?(this.registerPlugin(o),a(o)):typeof o.src=="string"?_e(o.src,(()=>a(o))):(console.warn("Unrecognized plugin format",o),a())}))}else this.initPlugins().then(n)}))}initPlugins(){return new Promise((t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let i,s=()=>{--n==0?this.loadAsync().then(t):i()},a=0;i=()=>{let o=e[a++];if(typeof o.init=="function"){let r=o.init(this.Reveal);r&&typeof r.then=="function"?r.then(s):s()}else s()},i()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((t=>{_e(t.src,t.callback)})),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((t=>{typeof t.destroy=="function"&&t.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class Rn{constructor(t){this.Reveal=t,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const t=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,e=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;t||e?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(t){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(t),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(t){this.close(),this.state={previewIframe:t},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${t}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${t}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",(e=>{this.dom.dataset.state="loaded"}),!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",(e=>{this.close(),e.preventDefault()}),!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",(e=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:t}})}previewMedia(t,e,n){if(e!=="image"&&e!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),n=n||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=n,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const i=this.dom.querySelector(".r-overlay-content");if(e==="image"){this.state={previewImage:t,previewFit:n};const s=document.createElement("img",{});s.src=t,i.appendChild(s),s.addEventListener("load",(()=>{this.dom.dataset.state="loaded"}),!1),s.addEventListener("error",(()=>{this.dom.dataset.state="error",i.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'}),!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",(a=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:t}})}else{if(e!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:t,previewFit:n};const s=document.createElement("video");s.autoplay=this.dom.dataset.previewAutoplay!=="false",s.controls=this.dom.dataset.previewControls!=="false",s.loop=this.dom.dataset.previewLoop==="true",s.muted=this.dom.dataset.previewMuted==="true",s.playsInline=!0,s.src=t,i.appendChild(s),s.addEventListener("loadeddata",(()=>{this.dom.dataset.state="loaded"}),!1),s.addEventListener("error",(()=>{this.dom.dataset.state="error",i.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'}),!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:t}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",(s=>{this.close(),s.preventDefault()}),!1)}previewImage(t,e){this.previewMedia(t,"image",e)}previewVideo(t,e){this.previewMedia(t,"video",e)}toggleHelp(t){typeof t=="boolean"?t?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let t='<p class="title">Keyboard Shortcuts</p>',e=this.Reveal.keyboard.getShortcuts(),n=this.Reveal.keyboard.getBindings();t+="<table><th>KEY</th><th>ACTION</th>";for(let i in e)t+=`<tr><td>${i}</td><td>${e[i]}</td></tr>`;for(let i in n)n[i].key&&n[i].description&&(t+=`<tr><td>${n[i].key}</td><td>${n[i].description}</td></tr>`);t+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${t}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",(i=>{this.close(),i.preventDefault()}),!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(t){this.stateProps.every((e=>this.state[e]===t[e]))||(t.previewIframe?this.previewIframe(t.previewIframe):t.previewImage?this.previewImage(t.previewImage,t.previewFit):t.previewVideo?this.previewVideo(t.previewVideo,t.previewFit):this.close())}onSlidesClicked(t){const e=t.target,n=e.closest(this.iframeTriggerSelector),i=e.closest(this.mediaTriggerSelector);if(n){if(t.metaKey||t.shiftKey||t.altKey)return;let s=n.getAttribute("href")||n.getAttribute("data-preview-link");s&&(this.previewIframe(s),t.preventDefault())}else if(i){if(i.hasAttribute("data-preview-image")){let s=i.dataset.previewImage||i.getAttribute("src");s&&(this.previewImage(s,i.dataset.previewFit),t.preventDefault())}else if(i.hasAttribute("data-preview-video")){let s=i.dataset.previewVideo||i.getAttribute("src");if(!s){let a=i.querySelector("source");a&&(s=a.getAttribute("src"))}s&&(this.previewVideo(s,i.dataset.previewFit),t.preventDefault())}}}destroy(){this.close()}}let Ln=class{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if($t(t,"video[controls], audio[controls]"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.touchCaptured=!1,this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)Ye&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,i=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let s=this.Reveal.availableRoutes({includeFragments:!0}),a=n-this.touchStartX,o=i-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&s.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&s.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}};const Zt="focus",De="blur";class Cn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==Zt&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Zt}blur(){this.state!==De&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=De}isFocused(){return this.state===Zt}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=W(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class Tn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map((n=>n.innerHTML)).join(`
`):null}destroy(){this.element.remove()}}class Pn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,i=this.diameter2,s=28;this.progressOffset+=.1*(1-this.progressOffset);const a=-Math.PI/2+t*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,i,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,i,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,i,e,o,a,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,s),this.context.fillRect(18,0,10,s)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,s),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var In={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Je="5.2.1";function Ze(h,t){arguments.length<2&&(t=arguments[0],h=document.querySelector(".reveal"));const e={};let n,i,s,a,o,r={},d=!1,u=!1,c={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},g=[],y=1,L={layout:"",overview:""},p={},D="idle",S=0,q=0,J=-1,M=!1,R=new cn(e),C=new un(e),O=new pn(e),U=new mn(e),N=new gn(e),f=new fn(e),T=new vn(e),P=new yn(e),$=new bn(e),K=new wn(e),X=new kn(e),V=new Sn(e),nt=new xn(e),ne=new En(e),tt=new An(e),F=new Rn(e),ht=new Cn(e),_t=new Ln(e),G=new Tn(e);function an(){d!==!1&&(u=!0,r.showHiddenSlides||x(p.wrapper,'section[data-visibility="hidden"]').forEach((l=>{const m=l.parentNode;m.childElementCount===1&&/section/i.test(m.nodeName)?m.remove():l.remove()})),(function(){p.slides.classList.add("no-transition"),bt?p.wrapper.classList.add("no-hover"):p.wrapper.classList.remove("no-hover"),N.render(),C.render(),O.render(),V.render(),nt.render(),G.render(),p.pauseOverlay=((l,m,v,b="")=>{let w=l.querySelectorAll("."+v);for(let z=0;z<w.length;z++){let H=w[z];if(H.parentNode===l)return H}let I=document.createElement(m);return I.className=v,I.innerHTML=b,l.appendChild(I),I})(p.wrapper,"div","pause-overlay",r.controls?'<button class="resume-button">Resume presentation</button>':null),p.statusElement=(function(){let l=p.wrapper.querySelector(".aria-status");return l||(l=document.createElement("div"),l.style.position="absolute",l.style.height="1px",l.style.width="1px",l.style.overflow="hidden",l.style.clip="rect( 1px, 1px, 1px, 1px )",l.classList.add("aria-status"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),p.wrapper.appendChild(l)),l})(),p.wrapper.setAttribute("role","application")})(),r.postMessage&&window.addEventListener("message",Te,!1),setInterval((()=>{(!f.isActive()&&p.wrapper.scrollTop!==0||p.wrapper.scrollLeft!==0)&&(p.wrapper.scrollTop=0,p.wrapper.scrollLeft=0)}),1e3),document.addEventListener("fullscreenchange",It),document.addEventListener("webkitfullscreenchange",It),at().forEach((l=>{x(l,"section").forEach(((m,v)=>{v>0&&(m.classList.remove("present"),m.classList.remove("past"),m.classList.add("future"),m.setAttribute("aria-hidden","true"))}))})),ie(),N.update(!0),(function(){const l=r.view==="print",m=r.view==="scroll"||r.view==="reader";(l||m)&&(l?Et():_t.unbind(),p.viewport.classList.add("loading-scroll-mode"),l?document.readyState==="complete"?T.activate():window.addEventListener("load",(()=>T.activate())):f.activate())})(),X.readURL(),setTimeout((()=>{p.slides.classList.remove("no-transition"),p.wrapper.classList.add("ready"),Q({type:"ready",data:{indexh:n,indexv:i,currentSlide:a}})}),1))}function Dt(l){p.statusElement.textContent=l}function xt(l){let m="";if(l.nodeType===3)m+=l.textContent;else if(l.nodeType===1){let v=l.getAttribute("aria-hidden"),b=window.getComputedStyle(l).display==="none";v==="true"||b||Array.from(l.childNodes).forEach((w=>{m+=xt(w)}))}return m=m.trim(),m===""?"":m+" "}function ie(l){const m={...r};if(typeof l=="object"&&yt(r,l),e.isReady()===!1)return;const v=p.wrapper.querySelectorAll(pt).length;p.wrapper.classList.remove(m.transition),p.wrapper.classList.add(r.transition),p.wrapper.setAttribute("data-transition-speed",r.transitionSpeed),p.wrapper.setAttribute("data-background-transition",r.backgroundTransition),p.viewport.style.setProperty("--slide-width",typeof r.width=="string"?r.width:r.width+"px"),p.viewport.style.setProperty("--slide-height",typeof r.height=="string"?r.height:r.height+"px"),r.shuffle&&Ut(),Yt(p.wrapper,"embedded",r.embedded),Yt(p.wrapper,"rtl",r.rtl),Yt(p.wrapper,"center",r.center),r.pause===!1&&kt(),U.reset(),o&&(o.destroy(),o=null),v>1&&r.autoSlide&&r.autoSlideStoppable&&(o=new Pn(p.wrapper,(()=>Math.min(Math.max((Date.now()-J)/S,0),1))),o.on("click",rn),M=!1),r.navigationMode!=="default"?p.wrapper.setAttribute("data-navigation-mode",r.navigationMode):p.wrapper.removeAttribute("data-navigation-mode"),G.configure(r,m),ht.configure(r,m),ne.configure(r,m),V.configure(r,m),nt.configure(r,m),K.configure(r,m),P.configure(r,m),C.configure(r,m),fe()}function se(){window.addEventListener("resize",Ne,!1),r.touch&&_t.bind(),r.keyboard&&K.bind(),r.progress&&nt.bind(),r.respondToHashChanges&&X.bind(),V.bind(),ht.bind(),p.slides.addEventListener("click",Ie,!1),p.slides.addEventListener("transitionend",Pe,!1),p.pauseOverlay.addEventListener("click",kt,!1),r.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Me,!1)}function Et(){_t.unbind(),ht.unbind(),K.unbind(),V.unbind(),nt.unbind(),X.unbind(),window.removeEventListener("resize",Ne,!1),p.slides.removeEventListener("click",Ie,!1),p.slides.removeEventListener("transitionend",Pe,!1),p.pauseOverlay.removeEventListener("click",kt,!1)}function ae(l,m,v){h.addEventListener(l,m,v)}function re(l,m,v){h.removeEventListener(l,m,v)}function qt(l){typeof l.layout=="string"&&(L.layout=l.layout),typeof l.overview=="string"&&(L.overview=l.overview),L.layout?lt(p.slides,L.layout+" "+L.overview):lt(p.slides,L.overview)}function Q({target:l=p.wrapper,type:m,data:v,bubbles:b=!0}){let w=document.createEvent("HTMLEvents",1,2);return w.initEvent(m,b,!0),yt(w,v),l.dispatchEvent(w),l===p.wrapper&&le(m),w}function oe(l){Q({type:"slidechanged",data:{indexh:n,indexv:i,previousSlide:s,currentSlide:a,origin:l}})}function le(l,m){if(r.postMessageEvents&&window.parent!==window.self){let v={namespace:"reveal",eventName:l,state:Le()};yt(v,m),window.parent.postMessage(JSON.stringify(v),"*")}}function mt(){if(p.wrapper&&!T.isActive()){const l=p.viewport.offsetWidth,m=p.viewport.offsetHeight;if(!r.disableLayout){bt&&!r.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const v=f.isActive()?At(l,m):At(),b=y;de(r.width,r.height),p.slides.style.width=v.width+"px",p.slides.style.height=v.height+"px",y=Math.min(v.presentationWidth/v.width,v.presentationHeight/v.height),y=Math.max(y,r.minScale),y=Math.min(y,r.maxScale),y===1||f.isActive()?(p.slides.style.zoom="",p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",qt({layout:""})):(p.slides.style.zoom="",p.slides.style.left="50%",p.slides.style.top="50%",p.slides.style.bottom="auto",p.slides.style.right="auto",qt({layout:"translate(-50%, -50%) scale("+y+")"}));const w=Array.from(p.wrapper.querySelectorAll(pt));for(let I=0,z=w.length;I<z;I++){const H=w[I];H.style.display!=="none"&&(r.center||H.classList.contains("center")?H.classList.contains("stack")?H.style.top=0:H.style.top=Math.max((v.height-H.scrollHeight)/2,0)+"px":H.style.top="")}b!==y&&Q({type:"resize",data:{oldScale:b,scale:y,size:v}})}(function(){if(p.wrapper&&!r.disableLayout&&!T.isActive()&&typeof r.scrollActivationWidth=="number"&&r.view!=="scroll"){const v=At();v.presentationWidth>0&&v.presentationWidth<=r.scrollActivationWidth?f.isActive()||(N.create(),f.activate()):f.isActive()&&f.deactivate()}})(),p.viewport.style.setProperty("--slide-scale",y),p.viewport.style.setProperty("--viewport-width",l+"px"),p.viewport.style.setProperty("--viewport-height",m+"px"),f.layout(),nt.update(),N.updateParallax(),$.isActive()&&$.update()}}function de(l,m){x(p.slides,"section > .stretch, section > .r-stretch").forEach((v=>{let b=((w,I=0)=>{if(w){let z,H=w.style.height;return w.style.height="0px",w.parentNode.style.height="auto",z=I-w.parentNode.offsetHeight,w.style.height=H+"px",w.parentNode.style.removeProperty("height"),z}return I})(v,m);if(/(img|video)/gi.test(v.nodeName)){const w=v.naturalWidth||v.videoWidth,I=v.naturalHeight||v.videoHeight,z=Math.min(l/w,b/I);v.style.width=w*z+"px",v.style.height=I*z+"px"}else v.style.width=l+"px",v.style.height=b+"px"}))}function At(l,m){let v=r.width,b=r.height;r.disableLayout&&(v=p.slides.offsetWidth,b=p.slides.offsetHeight);const w={width:v,height:b,presentationWidth:l||p.wrapper.offsetWidth,presentationHeight:m||p.wrapper.offsetHeight};return w.presentationWidth-=w.presentationWidth*r.margin,w.presentationHeight-=w.presentationHeight*r.margin,typeof w.width=="string"&&/%$/.test(w.width)&&(w.width=parseInt(w.width,10)/100*w.presentationWidth),typeof w.height=="string"&&/%$/.test(w.height)&&(w.height=parseInt(w.height,10)/100*w.presentationHeight),w}function ce(l,m){typeof l=="object"&&typeof l.setAttribute=="function"&&l.setAttribute("data-previous-indexv",m||0)}function he(l){if(typeof l=="object"&&typeof l.setAttribute=="function"&&l.classList.contains("stack")){const m=l.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(l.getAttribute(m)||0,10)}return 0}function wt(l=a){return l&&l.parentNode&&!!l.parentNode.nodeName.match(/section/i)}function ue(){return!(!a||!wt(a))&&!a.nextElementSibling}function pe(){return n===0&&i===0}function Ot(){return!!a&&!a.nextElementSibling&&(!wt(a)||!a.parentNode.nextElementSibling)}function ge(){if(r.pause){const l=p.wrapper.classList.contains("paused");Rt(),p.wrapper.classList.add("paused"),l===!1&&Q({type:"paused"})}}function kt(){const l=p.wrapper.classList.contains("paused");p.wrapper.classList.remove("paused"),ft(),l&&Q({type:"resumed"})}function me(l){typeof l=="boolean"?l?ge():kt():St()?kt():ge()}function St(){return p.wrapper.classList.contains("paused")}function et(l,m,v,b){if(Q({type:"beforeslidechange",data:{indexh:l===void 0?n:l,indexv:m===void 0?i:m,origin:b}}).defaultPrevented)return;s=a;const w=p.wrapper.querySelectorAll(rt);if(f.isActive()){const Z=f.getSlideByIndices(l,m);return void(Z&&f.scrollToSlide(Z))}if(w.length===0)return;m!==void 0||$.isActive()||(m=he(w[l])),s&&s.parentNode&&s.parentNode.classList.contains("stack")&&ce(s.parentNode,i);const I=g.concat();g.length=0;let z=n||0,H=i||0;n=ve(rt,l===void 0?n:l),i=ve(Be,m===void 0?i:m);let st=n!==z||i!==H;st||(s=null);let ut=w[n],Y=ut.querySelectorAll("section");h.classList.toggle("is-vertical-slide",Y.length>1),a=Y[i]||ut;let _=!1;st&&s&&a&&!$.isActive()&&(D="running",_=Ft(s,a,z,H),_&&p.slides.classList.add("disable-slide-transitions")),Vt(),mt(),$.isActive()&&$.update(),v!==void 0&&P.goto(v),s&&s!==a&&(s.classList.remove("present"),s.setAttribute("aria-hidden","true"),pe()&&setTimeout((()=>{x(p.wrapper,rt+".stack").forEach((Z=>{ce(Z,0)}))}),0));t:for(let Z=0,on=g.length;Z<on;Z++){for(let Nt=0;Nt<I.length;Nt++)if(I[Nt]===g[Z]){I.splice(Nt,1);continue t}p.viewport.classList.add(g[Z]),Q({type:g[Z]})}for(;I.length;)p.viewport.classList.remove(I.pop());st&&oe(b),!st&&s||(R.stopEmbeddedContent(s),R.startEmbeddedContent(a)),requestAnimationFrame((()=>{Dt(xt(a))})),nt.update(),V.update(),G.update(),N.update(),N.updateParallax(),C.update(),P.update(),X.writeURL(),ft(),_&&(setTimeout((()=>{p.slides.classList.remove("disable-slide-transitions")}),0),r.autoAnimate&&U.run(s,a))}function Ft(l,m,v,b){return l.hasAttribute("data-auto-animate")&&m.hasAttribute("data-auto-animate")&&l.getAttribute("data-auto-animate-id")===m.getAttribute("data-auto-animate-id")&&!(n>v||i>b?m:l).hasAttribute("data-auto-animate-restart")}function fe(){Et(),se(),mt(),S=r.autoSlide,ft(),N.create(),X.writeURL(),r.sortFragmentsOnSync===!0&&P.sortAll(),V.update(),nt.update(),Vt(),G.update(),G.updateVisibility(),F.update(),N.update(!0),C.update(),R.formatEmbeddedContent(),r.autoPlayMedia===!1?R.stopEmbeddedContent(a,{unloadIframes:!1}):R.startEmbeddedContent(a),$.isActive()&&$.layout()}function Ut(l=at()){l.forEach(((m,v)=>{let b=l[Math.floor(Math.random()*l.length)];b.parentNode===m.parentNode&&m.parentNode.insertBefore(m,b);let w=m.querySelectorAll("section");w.length&&Ut(w)}))}function ve(l,m){let v=x(p.wrapper,l),b=v.length,w=f.isActive()||T.isActive(),I=!1,z=!1;if(b){r.loop&&(m>=b&&(I=!0),(m%=b)<0&&(m=b+m,z=!0)),m=Math.max(Math.min(m,b-1),0);for(let Y=0;Y<b;Y++){let _=v[Y],Z=r.rtl&&!wt(_);_.classList.remove("past"),_.classList.remove("present"),_.classList.remove("future"),_.setAttribute("hidden",""),_.setAttribute("aria-hidden","true"),_.querySelector("section")&&_.classList.add("stack"),w?_.classList.add("present"):Y<m?(_.classList.add(Z?"future":"past"),r.fragments&&ye(_)):Y>m?(_.classList.add(Z?"past":"future"),r.fragments&&be(_)):Y===m&&r.fragments&&(I?be(_):z&&ye(_))}let H=v[m],st=H.classList.contains("present");H.classList.add("present"),H.removeAttribute("hidden"),H.removeAttribute("aria-hidden"),st||Q({target:H,type:"visible",bubbles:!1});let ut=H.getAttribute("data-state");ut&&(g=g.concat(ut.split(" ")))}else m=0;return m}function ye(l){x(l,".fragment").forEach((m=>{m.classList.add("visible"),m.classList.remove("current-fragment")}))}function be(l){x(l,".fragment.visible").forEach((m=>{m.classList.remove("visible","current-fragment")}))}function Vt(){let l,m,v=at(),b=v.length;if(b&&n!==void 0){let w=$.isActive()?10:r.viewDistance;bt&&(w=$.isActive()?6:r.mobileViewDistance),T.isActive()&&(w=Number.MAX_VALUE);for(let I=0;I<b;I++){let z=v[I],H=x(z,"section"),st=H.length;if(l=Math.abs((n||0)-I)||0,r.loop&&(l=Math.abs(((n||0)-I)%(b-w))||0),l<w?R.load(z):R.unload(z),st){let ut=he(z);for(let Y=0;Y<st;Y++){let _=H[Y];m=Math.abs(I===(n||0)?(i||0)-Y:Y-ut),l+m<w?R.load(_):R.unload(_)}}}Ee()?p.wrapper.classList.add("has-vertical-slides"):p.wrapper.classList.remove("has-vertical-slides"),xe()?p.wrapper.classList.add("has-horizontal-slides"):p.wrapper.classList.remove("has-horizontal-slides")}}function it({includeFragments:l=!1}={}){let m=p.wrapper.querySelectorAll(rt),v=p.wrapper.querySelectorAll(Be),b={left:n>0,right:n<m.length-1,up:i>0,down:i<v.length-1};if(r.loop&&(m.length>1&&(b.left=!0,b.right=!0),v.length>1&&(b.up=!0,b.down=!0)),m.length>1&&r.navigationMode==="linear"&&(b.right=b.right||b.down,b.left=b.left||b.up),l===!0){let w=P.availableRoutes();b.left=b.left||w.prev,b.up=b.up||w.prev,b.down=b.down||w.next,b.right=b.right||w.next}if(r.rtl){let w=b.left;b.left=b.right,b.right=w}return b}function we(l=a){let m=at(),v=0;t:for(let b=0;b<m.length;b++){let w=m[b],I=w.querySelectorAll("section");for(let z=0;z<I.length;z++){if(I[z]===l)break t;I[z].dataset.visibility!=="uncounted"&&v++}if(w===l)break;w.classList.contains("stack")===!1&&w.dataset.visibility!=="uncounted"&&v++}return v}function ke(l){let m,v=n,b=i;if(l)if(f.isActive())v=parseInt(l.getAttribute("data-index-h"),10),l.getAttribute("data-index-v")&&(b=parseInt(l.getAttribute("data-index-v"),10));else{let w=wt(l),I=w?l.parentNode:l,z=at();v=Math.max(z.indexOf(I),0),b=void 0,w&&(b=Math.max(x(l.parentNode,"section").indexOf(l),0))}if(!l&&a&&a.querySelectorAll(".fragment").length>0){let w=a.querySelector(".current-fragment");m=w&&w.hasAttribute("data-fragment-index")?parseInt(w.getAttribute("data-fragment-index"),10):a.querySelectorAll(".fragment.visible").length-1}return{h:v,v:b,f:m}}function Wt(){return x(p.wrapper,pt+':not(.stack):not([data-visibility="uncounted"])')}function at(){return x(p.wrapper,rt)}function Se(){return x(p.wrapper,".slides>section>section")}function xe(){return at().length>1}function Ee(){return Se().length>1}function Ae(){return Wt().length}function Re(l,m){let v=at()[l],b=v&&v.querySelectorAll("section");return b&&b.length&&typeof m=="number"?b?b[m]:void 0:v}function Le(){let l=ke();return{indexh:l.h,indexv:l.v,indexf:l.f,paused:St(),overview:$.isActive(),...F.getState()}}function ft(){if(Rt(),a&&r.autoSlide!==!1){let l=a.querySelector(".current-fragment[data-autoslide]"),m=l?l.getAttribute("data-autoslide"):null,v=a.parentNode?a.parentNode.getAttribute("data-autoslide"):null,b=a.getAttribute("data-autoslide");m?S=parseInt(m,10):b?S=parseInt(b,10):v?S=parseInt(v,10):(S=r.autoSlide,a.querySelectorAll(".fragment").length===0&&x(a,"video, audio").forEach((w=>{w.hasAttribute("data-autoplay")&&S&&1e3*w.duration/w.playbackRate>S&&(S=1e3*w.duration/w.playbackRate+1e3)}))),!S||M||St()||$.isActive()||Ot()&&!P.availableRoutes().next&&r.loop!==!0||(q=setTimeout((()=>{typeof r.autoSlideMethod=="function"?r.autoSlideMethod():Xt(),ft()}),S),J=Date.now()),o&&o.setPlaying(q!==-1)}}function Rt(){clearTimeout(q),q=-1}function Lt(){S&&!M&&(M=!0,Q({type:"autoslidepaused"}),clearTimeout(q),o&&o.setPlaying(!1))}function Ct(){S&&M&&(M=!1,Q({type:"autoslideresumed"}),ft())}function Tt({skipFragments:l=!1}={}){if(c.hasNavigatedHorizontally=!0,f.isActive())return f.prev();r.rtl?($.isActive()||l||P.next()===!1)&&it().left&&et(n+1,r.navigationMode==="grid"?i:void 0):($.isActive()||l||P.prev()===!1)&&it().left&&et(n-1,r.navigationMode==="grid"?i:void 0)}function Pt({skipFragments:l=!1}={}){if(c.hasNavigatedHorizontally=!0,f.isActive())return f.next();r.rtl?($.isActive()||l||P.prev()===!1)&&it().right&&et(n-1,r.navigationMode==="grid"?i:void 0):($.isActive()||l||P.next()===!1)&&it().right&&et(n+1,r.navigationMode==="grid"?i:void 0)}function jt({skipFragments:l=!1}={}){if(f.isActive())return f.prev();($.isActive()||l||P.prev()===!1)&&it().up&&et(n,i-1)}function Kt({skipFragments:l=!1}={}){if(c.hasNavigatedVertically=!0,f.isActive())return f.next();($.isActive()||l||P.next()===!1)&&it().down&&et(n,i+1)}function Ce({skipFragments:l=!1}={}){if(f.isActive())return f.prev();if(l||P.prev()===!1)if(it().up)jt({skipFragments:l});else{let m;if(m=r.rtl?x(p.wrapper,rt+".future").pop():x(p.wrapper,rt+".past").pop(),m&&m.classList.contains("stack")){let v=m.querySelectorAll("section").length-1||void 0;et(n-1,v)}else r.rtl?Pt({skipFragments:l}):Tt({skipFragments:l})}}function Xt({skipFragments:l=!1}={}){if(c.hasNavigatedHorizontally=!0,c.hasNavigatedVertically=!0,f.isActive())return f.next();if(l||P.next()===!1){let m=it();m.down&&m.right&&r.loop&&ue()&&(m.down=!1),m.down?Kt({skipFragments:l}):r.rtl?Tt({skipFragments:l}):Pt({skipFragments:l})}}function Te(l){let m=l.data;if(typeof m=="string"&&m.charAt(0)==="{"&&m.charAt(m.length-1)==="}"&&(m=JSON.parse(m),m.method&&typeof e[m.method]=="function"))if(hn.test(m.method)===!1){const v=e[m.method].apply(e,m.args);le("callback",{method:m.method,result:v})}else console.warn('reveal.js: "'+m.method+'" is is blacklisted from the postMessage API')}function Pe(l){D==="running"&&/section/gi.test(l.target.nodeName)&&(D="idle",Q({type:"slidetransitionend",data:{indexh:n,indexv:i,previousSlide:s,currentSlide:a}}))}function Ie(l){const m=W(l.target,'a[href^="#"]');if(m){const v=m.getAttribute("href"),b=X.getIndicesFromHash(v);b&&(e.slide(b.h,b.v,b.f),l.preventDefault())}}function Ne(l){mt()}function Me(l){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function It(l){(document.fullscreenElement||document.webkitFullscreenElement)===p.wrapper&&(l.stopImmediatePropagation(),setTimeout((()=>{e.layout(),e.focus.focus()}),1))}function rn(l){Ot()&&r.loop===!1?(et(0,0),Ct()):M?Ct():Lt()}const ze={VERSION:Je,initialize:function(l){if(!h)throw'Unable to find presentation root (<div class="reveal">).';if(d)throw"Reveal.js has already been initialized.";if(d=!0,p.wrapper=h,p.slides=h.querySelector(".slides"),!p.slides)throw'Unable to find slides container (<div class="slides">).';return r={...In,...r,...t,...l,...$e()},/print-pdf/gi.test(window.location.search)&&(r.view="print"),(function(){r.embedded===!0?p.viewport=W(h,".reveal-viewport")||h:(p.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),p.viewport.classList.add("reveal-viewport")})(),window.addEventListener("load",mt,!1),tt.load(r.plugins,r.dependencies).then(an),new Promise((m=>e.on("ready",m)))},configure:ie,destroy:function(){d=!1,u!==!1&&(Et(),Rt(),G.destroy(),ht.destroy(),F.destroy(),tt.destroy(),ne.destroy(),V.destroy(),nt.destroy(),N.destroy(),C.destroy(),O.destroy(),document.removeEventListener("fullscreenchange",It),document.removeEventListener("webkitfullscreenchange",It),document.removeEventListener("visibilitychange",Me,!1),window.removeEventListener("message",Te,!1),window.removeEventListener("load",mt,!1),p.pauseOverlay&&p.pauseOverlay.remove(),p.statusElement&&p.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),p.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),p.wrapper.removeAttribute("data-transition-speed"),p.wrapper.removeAttribute("data-background-transition"),p.viewport.classList.remove("reveal-viewport"),p.viewport.style.removeProperty("--slide-width"),p.viewport.style.removeProperty("--slide-height"),p.slides.style.removeProperty("width"),p.slides.style.removeProperty("height"),p.slides.style.removeProperty("zoom"),p.slides.style.removeProperty("left"),p.slides.style.removeProperty("top"),p.slides.style.removeProperty("bottom"),p.slides.style.removeProperty("right"),p.slides.style.removeProperty("transform"),Array.from(p.wrapper.querySelectorAll(pt)).forEach((l=>{l.style.removeProperty("display"),l.style.removeProperty("top"),l.removeAttribute("hidden"),l.removeAttribute("aria-hidden")})))},sync:fe,syncSlide:function(l=a){N.sync(l),P.sync(l),R.load(l),N.update(),G.update()},syncFragments:P.sync.bind(P),slide:et,left:Tt,right:Pt,up:jt,down:Kt,prev:Ce,next:Xt,navigateLeft:Tt,navigateRight:Pt,navigateUp:jt,navigateDown:Kt,navigatePrev:Ce,navigateNext:Xt,navigateFragment:P.goto.bind(P),prevFragment:P.prev.bind(P),nextFragment:P.next.bind(P),on:ae,off:re,addEventListener:ae,removeEventListener:re,layout:mt,shuffle:Ut,availableRoutes:it,availableFragments:P.availableRoutes.bind(P),toggleHelp:F.toggleHelp.bind(F),toggleOverview:$.toggle.bind($),toggleScrollView:f.toggle.bind(f),togglePause:me,toggleAutoSlide:function(l){typeof l=="boolean"?l?Ct():Lt():M?Ct():Lt()},toggleJumpToSlide:function(l){typeof l=="boolean"?l?O.show():O.hide():O.isVisible()?O.hide():O.show()},isFirstSlide:pe,isLastSlide:Ot,isLastVerticalSlide:ue,isVerticalSlide:wt,isVerticalStack:function(l=a){return l.classList.contains(".stack")||l.querySelector("section")!==null},isPaused:St,isAutoSliding:function(){return!(!S||M)},isSpeakerNotes:G.isSpeakerNotesWindow.bind(G),isOverview:$.isActive.bind($),isFocused:ht.isFocused.bind(ht),isOverlayOpen:F.isOpen.bind(F),isScrollView:f.isActive.bind(f),isPrintView:T.isActive.bind(T),isReady:()=>u,loadSlide:R.load.bind(R),unloadSlide:R.unload.bind(R),startEmbeddedContent:()=>R.startEmbeddedContent(a),stopEmbeddedContent:()=>R.stopEmbeddedContent(a,{unloadIframes:!1}),previewIframe:F.previewIframe.bind(F),previewImage:F.previewImage.bind(F),previewVideo:F.previewVideo.bind(F),showPreview:F.previewIframe.bind(F),hidePreview:F.close.bind(F),addEventListeners:se,removeEventListeners:Et,dispatchEvent:Q,getState:Le,setState:function(l){if(typeof l=="object"){et(vt(l.indexh),vt(l.indexv),vt(l.indexf));let m=vt(l.paused),v=vt(l.overview);typeof m=="boolean"&&m!==St()&&me(m),typeof v=="boolean"&&v!==$.isActive()&&$.toggle(v),F.setState(l)}},getProgress:function(){let l=Ae(),m=we();if(a){let v=a.querySelectorAll(".fragment");v.length>0&&(m+=a.querySelectorAll(".fragment.visible").length/v.length*.9)}return Math.min(m/(l-1),1)},getIndices:ke,getSlidesAttributes:function(){return Wt().map((l=>{let m={};for(let v=0;v<l.attributes.length;v++){let b=l.attributes[v];m[b.name]=b.value}return m}))},getSlidePastCount:we,getTotalSlides:Ae,getSlide:Re,getPreviousSlide:()=>s,getCurrentSlide:()=>a,getSlideBackground:function(l,m){let v=typeof l=="number"?Re(l,m):l;if(v)return v.slideBackgroundElement},getSlideNotes:G.getSlideNotes.bind(G),getSlides:Wt,getHorizontalSlides:at,getVerticalSlides:Se,hasHorizontalSlides:xe,hasVerticalSlides:Ee,hasNavigatedHorizontally:()=>c.hasNavigatedHorizontally,hasNavigatedVertically:()=>c.hasNavigatedVertically,shouldAutoAnimateBetween:Ft,addKeyBinding:K.addKeyBinding.bind(K),removeKeyBinding:K.removeKeyBinding.bind(K),triggerKey:K.triggerKey.bind(K),registerKeyboardShortcut:K.registerKeyboardShortcut.bind(K),getComputedSlideSize:At,setCurrentScrollPage:function(l,m,v){let b=n||0;n=m,i=v;const w=a!==l;s=a,a=l,a&&s&&r.autoAnimate&&Ft(s,a,b,i)&&U.run(s,a),w&&(s&&(R.stopEmbeddedContent(s),R.stopEmbeddedContent(s.slideBackgroundElement)),R.startEmbeddedContent(a),R.startEmbeddedContent(a.slideBackgroundElement)),requestAnimationFrame((()=>{Dt(xt(a))})),oe()},getScale:()=>y,getConfig:()=>r,getQueryHash:$e,getSlidePath:X.getHash.bind(X),getRevealElement:()=>h,getSlidesElement:()=>p.slides,getViewportElement:()=>p.viewport,getBackgroundsElement:()=>N.element,registerPlugin:tt.registerPlugin.bind(tt),hasPlugin:tt.hasPlugin.bind(tt),getPlugin:tt.getPlugin.bind(tt),getPlugins:tt.getRegisteredPlugins.bind(tt)};return yt(e,{...ze,announceStatus:Dt,getStatusText:xt,focus:ht,scroll:f,progress:nt,controls:V,location:X,overview:$,keyboard:K,fragments:P,backgrounds:N,slideContent:R,slideNumber:C,onUserInput:function(l){r.autoSlideStoppable&&Lt()},closeOverlay:F.close.bind(F),updateSlidesVisibility:Vt,layoutSlideContents:de,transformSlides:qt,cueAutoSlide:ft,cancelAutoSlide:Rt}),ze}let ot=Ze,qe=[];ot.initialize=h=>(Object.assign(ot,new Ze(document.querySelector(".reveal"),h)),qe.map((t=>t(ot))),ot.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((h=>{ot[h]=(...t)=>{qe.push((e=>e[h].call(null,...t)))}})),ot.isReady=()=>!1,ot.VERSION=Je;function Nn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let gt={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Qe=/[&<>"']/,Mn=new RegExp(Qe.source,"g"),Ge=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,zn=new RegExp(Ge.source,"g"),$n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Oe=h=>$n[h];function j(h,t){if(t){if(Qe.test(h))return h.replace(Mn,Oe)}else if(Ge.test(h))return h.replace(zn,Oe);return h}const Bn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function tn(h){return h.replace(Bn,((t,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Hn=/(^|[^\[])\^/g;function B(h,t){h=typeof h=="string"?h:h.source,t=t||"";const e={replace:(n,i)=>(i=(i=i.source||i).replace(Hn,"$1"),h=h.replace(n,i),e),getRegex:()=>new RegExp(h,t)};return e}const _n=/[^\w:]/g,Dn=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Fe(h,t,e){if(h){let n;try{n=decodeURIComponent(tn(e)).replace(_n,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!Dn.test(e)&&(e=(function(n,i){Mt[" "+n]||(qn.test(n)?Mt[" "+n]=n+"/":Mt[" "+n]=zt(n,"/",!0)),n=Mt[" "+n];const s=n.indexOf(":")===-1;return i.substring(0,2)==="//"?s?i:n.replace(On,"$1")+i:i.charAt(0)==="/"?s?i:n.replace(Fn,"$1")+i:n+i})(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Mt={},qn=/^[^:]+:\/*[^/]*$/,On=/^([^:]+:)[\s\S]*$/,Fn=/^([^:]+:\/*[^/]*)[\s\S]*$/,Bt={exec:function(){}};function Ue(h,t){const e=h.replace(/\|/g,((i,s,a)=>{let o=!1,r=s;for(;--r>=0&&a[r]==="\\";)o=!o;return o?"|":" |"})).split(/ \|/);let n=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;n<e.length;n++)e[n]=e[n].trim().replace(/\\\|/g,"|");return e}function zt(h,t,e){const n=h.length;if(n===0)return"";let i=0;for(;i<n;){const s=h.charAt(n-i-1);if(s!==t||e){if(s===t||!e)break;i++}else i++}return h.slice(0,n-i)}function Ve(h,t){if(t<1)return"";let e="";for(;t>1;)1&t&&(e+=h),t>>=1,h+=h;return e+h}function We(h,t,e,n){const i=t.href,s=t.title?j(t.title):null,a=h[1].replace(/\\([\[\]])/g,"$1");if(h[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:e,href:i,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,o}return{type:"image",raw:e,href:i,title:s,text:j(a)}}class te{constructor(t){this.options=t||gt}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:zt(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=(function(s,a){const o=s.match(/^(\s+)(?:```)/);if(o===null)return a;const r=o[1];return a.split(`
`).map((d=>{const u=d.match(/^\s+/);if(u===null)return d;const[c]=u;return c.length>=r.length?d.slice(r.length):d})).join(`
`)})(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const i=zt(n,"#");this.options.pedantic?n=i.trim():i&&!/ $/.test(i)||(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=e[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:s,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n,i,s,a,o,r,d,u,c,g,y,L,p=e[1].trim();const D=p.length>1,S={type:"list",raw:"",ordered:D,start:D?+p.slice(0,-1):"",loose:!1,items:[]};p=D?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=D?p:"[*+-]");const q=new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(L=!1,e=q.exec(t))&&!this.rules.block.hr.test(t);){if(n=e[0],t=t.substring(n.length),u=e[2].split(`
`,1)[0].replace(/^\t+/,(M=>" ".repeat(3*M.length))),c=t.split(`
`,1)[0],this.options.pedantic?(a=2,y=u.trimLeft()):(a=e[2].search(/[^ ]/),a=a>4?1:a,y=u.slice(a),a+=e[1].length),r=!1,!u&&/^ *$/.test(c)&&(n+=c+`
`,t=t.substring(c.length+1),L=!0),!L){const M=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),R=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),C=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),O=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;t&&(g=t.split(`
`,1)[0],c=g,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!C.test(c))&&!O.test(c)&&!M.test(c)&&!R.test(t);){if(c.search(/[^ ]/)>=a||!c.trim())y+=`
`+c.slice(a);else{if(r||u.search(/[^ ]/)>=4||C.test(u)||O.test(u)||R.test(u))break;y+=`
`+c}r||c.trim()||(r=!0),n+=g+`
`,t=t.substring(g.length+1),u=c.slice(a)}}S.loose||(d?S.loose=!0:/\n *\n *$/.test(n)&&(d=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(y),i&&(s=i[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),S.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:y}),S.raw+=n}S.items[S.items.length-1].raw=n.trimRight(),S.items[S.items.length-1].text=y.trimRight(),S.raw=S.raw.trimRight();const J=S.items.length;for(o=0;o<J;o++)if(this.lexer.state.top=!1,S.items[o].tokens=this.lexer.blockTokens(S.items[o].text,[]),!S.loose){const M=S.items[o].tokens.filter((C=>C.type==="space")),R=M.length>0&&M.some((C=>/\n.*\n/.test(C.raw)));S.loose=R}if(S.loose)for(o=0;o<J;o++)S.items[o].loose=!0;return S}}html(t){const e=this.rules.block.html.exec(t);if(e){const n={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(e[0]):j(e[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:s}}}table(t){const e=this.rules.block.table.exec(t);if(e){const n={type:"table",header:Ue(e[1]).map((i=>({text:i}))),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=e[0];let i,s,a,o,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.rows.length,i=0;i<r;i++)n.rows[i]=Ue(n.rows[i],n.header.length).map((d=>({text:d})));for(r=n.header.length,s=0;s<r;s++)n.header[s].tokens=this.lexer.inline(n.header[s].text);for(r=n.rows.length,s=0;s<r;s++)for(o=n.rows[s],a=0;a<o.length;a++)o[a].tokens=this.lexer.inline(o[a].text);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:j(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):j(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=zt(n.slice(0,-1),"\\");if((n.length-a.length)%2==0)return}else{const a=(function(o,r){if(o.indexOf(r[1])===-1)return-1;const d=o.length;let u=0,c=0;for(;c<d;c++)if(o[c]==="\\")c++;else if(o[c]===r[0])u++;else if(o[c]===r[1]&&(u--,u<0))return c;return-1})(e[2],"()");if(a>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(n)?i.slice(1):i.slice(1,-1)),We(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return We(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const a=i[0].length-1;let o,r,d=a,u=0;const c=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(c.lastIndex=0,e=e.slice(-1*t.length+a);(i=c.exec(e))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(r=o.length,i[3]||i[4]){d+=r;continue}if((i[5]||i[6])&&a%3&&!((a+r)%3)){u+=r;continue}if(d-=r,d>0)continue;r=Math.min(r,r+d+u);const g=t.slice(0,a+i.index+(i[0].length-o.length)+r);if(Math.min(a,r)%2){const L=g.slice(1,-1);return{type:"em",raw:g,text:L,tokens:this.lexer.inlineTokens(L)}}const y=g.slice(2,-2);return{type:"strong",raw:g,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=j(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t,e){const n=this.rules.inline.autolink.exec(t);if(n){let i,s;return n[2]==="@"?(i=j(this.options.mangle?e(n[1]):n[1]),s="mailto:"+i):(i=j(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(t,e){let n;if(n=this.rules.inline.url.exec(t)){let i,s;if(n[2]==="@")i=j(this.options.mangle?e(n[0]):n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);i=j(n[0]),s=n[1]==="www."?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,e){const n=this.rules.inline.text.exec(t);if(n){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):j(n[0]):n[0]:j(this.options.smartypants?e(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const A={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Bt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};A.def=B(A.def).replace("label",A._label).replace("title",A._title).getRegex(),A.bullet=/(?:[*+-]|\d{1,9}[.)])/,A.listItemStart=B(/^( *)(bull) */).replace("bull",A.bullet).getRegex(),A.list=B(A.list).replace(/bull/g,A.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+A.def.source+")").getRegex(),A._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",A._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,A.html=B(A.html,"i").replace("comment",A._comment).replace("tag",A._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),A.paragraph=B(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.blockquote=B(A.blockquote).replace("paragraph",A.paragraph).getRegex(),A.normal={...A},A.gfm={...A.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},A.gfm.table=B(A.gfm.table).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.gfm.paragraph=B(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",A.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.pedantic={...A.normal,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",A._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Bt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(A.normal._paragraph).replace("hr",A.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",A.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const k={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Bt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Bt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Un(h){return h.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function je(h){let t,e,n="";const i=h.length;for(t=0;t<i;t++)e=h.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n}k._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",k.punctuation=B(k.punctuation).replace(/punctuation/g,k._punctuation).getRegex(),k.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,k.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,k._comment=B(A._comment).replace("(?:-->|$)","-->").getRegex(),k.emStrong.lDelim=B(k.emStrong.lDelim).replace(/punct/g,k._punctuation).getRegex(),k.emStrong.rDelimAst=B(k.emStrong.rDelimAst,"g").replace(/punct/g,k._punctuation).getRegex(),k.emStrong.rDelimUnd=B(k.emStrong.rDelimUnd,"g").replace(/punct/g,k._punctuation).getRegex(),k._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,k._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,k._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,k.autolink=B(k.autolink).replace("scheme",k._scheme).replace("email",k._email).getRegex(),k._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,k.tag=B(k.tag).replace("comment",k._comment).replace("attribute",k._attribute).getRegex(),k._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,k._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,k._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,k.link=B(k.link).replace("label",k._label).replace("href",k._href).replace("title",k._title).getRegex(),k.reflink=B(k.reflink).replace("label",k._label).replace("ref",A._label).getRegex(),k.nolink=B(k.nolink).replace("ref",A._label).getRegex(),k.reflinkSearch=B(k.reflinkSearch,"g").replace("reflink",k.reflink).replace("nolink",k.nolink).getRegex(),k.normal={...k},k.pedantic={...k.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",k._label).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",k._label).getRegex()},k.gfm={...k.normal,escape:B(k.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},k.gfm.url=B(k.gfm.url,"i").replace("email",k.gfm._extended_email).getRegex(),k.breaks={...k.gfm,br:B(k.br).replace("{2,}","*").getRegex(),text:B(k.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class dt{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||gt,this.options.tokenizer=this.options.tokenizer||new te,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:A.normal,inline:k.normal};this.options.pedantic?(e.block=A.pedantic,e.inline=k.pedantic):this.options.gfm&&(e.block=A.gfm,this.options.breaks?e.inline=k.breaks:e.inline=k.gfm),this.tokenizer.rules=e}static get rules(){return{block:A,inline:k}}static lex(t,e){return new dt(e).lex(t)}static lexInline(t,e){return new dt(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,i,s,a;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,((o,r,d)=>r+"    ".repeat(d.length)));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o=>!!(n=o.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?e.push(n):(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(s=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const r=t.slice(1);let d;this.options.extensions.startBlock.forEach((function(u){d=u.call({lexer:this},r),typeof d=="number"&&d>=0&&(o=Math.min(o,d))})),o<1/0&&o>=0&&(s=t.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s)))i=e[e.length-1],a&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),a=s.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);else if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,i,s,a,o,r,d=t;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,a.index)+"["+Ve("a",a[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,a.index)+"["+Ve("a",a[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(d))!=null;)d=d.slice(0,a.index+a[0].length-2)+"++"+d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(o||(r=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((u=>!!(n=u.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,d,r))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t,je))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,je))){if(s=t,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const c=t.slice(1);let g;this.options.extensions.startInline.forEach((function(y){g=y.call({lexer:this},c),typeof g=="number"&&g>=0&&(u=Math.min(u,g))})),u<1/0&&u>=0&&(s=t.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,Un))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(r=n.raw.slice(-1)),o=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else t=t.substring(n.raw.length),e.push(n);return e}}class ee{constructor(t){this.options=t||gt}code(t,e,n){const i=(e||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(t,i);s!=null&&s!==t&&(n=!0,t=s)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+j(i)+'">'+(n?t:j(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:j(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,e,n,i){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+i.slug(n)}">${t}</h${e}>
`:`<h${e}>${t}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,n){const i=e?"ol":"ul";return"<"+i+(e&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+i+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){if((t=Fe(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){if((t=Fe(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class en{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class nn{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let n=t,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[t];do i++,n=t+"-"+i;while(this.seen.hasOwnProperty(n))}return e||(this.seen[t]=i,this.seen[n]=0),n}slug(t,e={}){const n=this.serialize(t);return this.getNextSafeSlug(n,e.dryrun)}}class ct{constructor(t){this.options=t||gt,this.options.renderer=this.options.renderer||new ee,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new en,this.slugger=new nn}static parse(t,e){return new ct(e).parse(t)}static parseInline(t,e){return new ct(e).parseInline(t)}parse(t,e=!0){let n,i,s,a,o,r,d,u,c,g,y,L,p,D,S,q,J,M,R,C="";const O=t.length;for(n=0;n<O;n++)if(g=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(R=this.options.extensions.renderers[g.type].call({parser:this},g),R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type)))C+=R||"";else switch(g.type){case"space":continue;case"hr":C+=this.renderer.hr();continue;case"heading":C+=this.renderer.heading(this.parseInline(g.tokens),g.depth,tn(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue;case"code":C+=this.renderer.code(g.text,g.lang,g.escaped);continue;case"table":for(u="",d="",a=g.header.length,i=0;i<a;i++)d+=this.renderer.tablecell(this.parseInline(g.header[i].tokens),{header:!0,align:g.align[i]});for(u+=this.renderer.tablerow(d),c="",a=g.rows.length,i=0;i<a;i++){for(r=g.rows[i],d="",o=r.length,s=0;s<o;s++)d+=this.renderer.tablecell(this.parseInline(r[s].tokens),{header:!1,align:g.align[s]});c+=this.renderer.tablerow(d)}C+=this.renderer.table(u,c);continue;case"blockquote":c=this.parse(g.tokens),C+=this.renderer.blockquote(c);continue;case"list":for(y=g.ordered,L=g.start,p=g.loose,a=g.items.length,c="",i=0;i<a;i++)S=g.items[i],q=S.checked,J=S.task,D="",S.task&&(M=this.renderer.checkbox(q),p?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=M+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=M+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:M}):D+=M),D+=this.parse(S.tokens,p),c+=this.renderer.listitem(D,J,q);C+=this.renderer.list(c,y,L);continue;case"html":C+=this.renderer.html(g.text);continue;case"paragraph":C+=this.renderer.paragraph(this.parseInline(g.tokens));continue;case"text":for(c=g.tokens?this.parseInline(g.tokens):g.text;n+1<O&&t[n+1].type==="text";)g=t[++n],c+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);C+=e?this.renderer.paragraph(c):c;continue;default:{const U='Token with "'+g.type+'" type was not found.';if(this.options.silent)return void console.error(U);throw new Error(U)}}return C}parseInline(t,e){e=e||this.renderer;let n,i,s,a="";const o=t.length;for(n=0;n<o;n++)if(i=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(s=this.options.extensions.renderers[i.type].call({parser:this},i),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))a+=s||"";else switch(i.type){case"escape":case"text":a+=e.text(i.text);break;case"html":a+=e.html(i.text);break;case"link":a+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break;case"image":a+=e.image(i.href,i.title,i.text);break;case"strong":a+=e.strong(this.parseInline(i.tokens,e));break;case"em":a+=e.em(this.parseInline(i.tokens,e));break;case"codespan":a+=e.codespan(i.text);break;case"br":a+=e.br();break;case"del":a+=e.del(this.parseInline(i.tokens,e));break;default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(r);throw new Error(r)}}return a}}class Qt{constructor(t){this.options=t||gt}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}function sn(h,t){return(e,n,i)=>{typeof n=="function"&&(i=n,n=null);const s={...n},a=(function(o,r,d){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,o){const c="<p>An error occurred:</p><pre>"+j(u.message+"",!0)+"</pre>";return r?Promise.resolve(c):d?void d(null,c):c}if(r)return Promise.reject(u);if(!d)throw u;d(u)}})((n={...E.defaults,...s}).silent,n.async,i);if(e==null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if((function(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(n),n.hooks&&(n.hooks.options=n),i){const o=n.highlight;let r;try{n.hooks&&(e=n.hooks.preprocess(e)),r=h(e,n)}catch(c){return a(c)}const d=function(c){let g;if(!c)try{n.walkTokens&&E.walkTokens(r,n.walkTokens),g=t(r,n),n.hooks&&(g=n.hooks.postprocess(g))}catch(y){c=y}return n.highlight=o,c?a(c):i(null,g)};if(!o||o.length<3||(delete n.highlight,!r.length))return d();let u=0;return E.walkTokens(r,(function(c){c.type==="code"&&(u++,setTimeout((()=>{o(c.text,c.lang,(function(g,y){if(g)return d(g);y!=null&&y!==c.text&&(c.text=y,c.escaped=!0),u--,u===0&&d()}))}),0))})),void(u===0&&d())}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(e):e).then((o=>h(o,n))).then((o=>n.walkTokens?Promise.all(E.walkTokens(o,n.walkTokens)).then((()=>o)):o)).then((o=>t(o,n))).then((o=>n.hooks?n.hooks.postprocess(o):o)).catch(a);try{n.hooks&&(e=n.hooks.preprocess(e));const o=h(e,n);n.walkTokens&&E.walkTokens(o,n.walkTokens);let r=t(o,n);return n.hooks&&(r=n.hooks.postprocess(r)),r}catch(o){return a(o)}}}function E(h,t,e){return sn(dt.lex,ct.parse)(h,t,e)}E.options=E.setOptions=function(h){var t;return E.defaults={...E.defaults,...h},t=E.defaults,gt=t,E},E.getDefaults=Nn,E.defaults=gt,E.use=function(...h){const t=E.defaults.extensions||{renderers:{},childTokens:{}};h.forEach((e=>{const n={...e};if(n.async=E.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const s=t.renderers[i.name];t.renderers[i.name]=s?function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),n.extensions=t),e.renderer){const i=E.defaults.renderer||new ee;for(const s in e.renderer){const a=i[s];i[s]=(...o)=>{let r=e.renderer[s].apply(i,o);return r===!1&&(r=a.apply(i,o)),r}}n.renderer=i}if(e.tokenizer){const i=E.defaults.tokenizer||new te;for(const s in e.tokenizer){const a=i[s];i[s]=(...o)=>{let r=e.tokenizer[s].apply(i,o);return r===!1&&(r=a.apply(i,o)),r}}n.tokenizer=i}if(e.hooks){const i=E.defaults.hooks||new Qt;for(const s in e.hooks){const a=i[s];Qt.passThroughHooks.has(s)?i[s]=o=>{if(E.defaults.async)return Promise.resolve(e.hooks[s].call(i,o)).then((d=>a.call(i,d)));const r=e.hooks[s].call(i,o);return a.call(i,r)}:i[s]=(...o)=>{let r=e.hooks[s].apply(i,o);return r===!1&&(r=a.apply(i,o)),r}}n.hooks=i}if(e.walkTokens){const i=E.defaults.walkTokens;n.walkTokens=function(s){let a=[];return a.push(e.walkTokens.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}E.setOptions(n)}))},E.walkTokens=function(h,t){let e=[];for(const n of h)switch(e=e.concat(t.call(E,n)),n.type){case"table":for(const i of n.header)e=e.concat(E.walkTokens(i.tokens,t));for(const i of n.rows)for(const s of i)e=e.concat(E.walkTokens(s.tokens,t));break;case"list":e=e.concat(E.walkTokens(n.items,t));break;default:E.defaults.extensions&&E.defaults.extensions.childTokens&&E.defaults.extensions.childTokens[n.type]?E.defaults.extensions.childTokens[n.type].forEach((function(i){e=e.concat(E.walkTokens(n[i],t))})):n.tokens&&(e=e.concat(E.walkTokens(n.tokens,t)))}return e},E.parseInline=sn(dt.lexInline,ct.parseInline),E.Parser=ct,E.parser=ct.parse,E.Renderer=ee,E.TextRenderer=en,E.Lexer=dt,E.lexer=dt.lex,E.Tokenizer=te,E.Slugger=nn,E.Hooks=Qt,E.parse=E,E.options,E.setOptions,E.use,E.walkTokens,E.parseInline,ct.parse,dt.lex;const Vn=()=>{let h,t,e=null;function n(){if(e&&!e.closed)e.focus();else{if(e=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),e.marked=E,e.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!e)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const o=t.getConfig().url,r=typeof o=="string"?o:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;h=setInterval((function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:t.getState(),url:r}),"*")}),500),window.addEventListener("message",s)})()}}function i(o){let r=t.getCurrentSlide(),d=r.querySelectorAll("aside.notes"),u=r.querySelector(".current-fragment"),c={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:t.getState()};if(r.hasAttribute("data-notes")&&(c.notes=r.getAttribute("data-notes"),c.whitespace="pre-wrap"),u){let g=u.querySelector("aside.notes");g?(c.notes=g.innerHTML,c.markdown=typeof g.getAttribute("data-markdown")=="string",d=null):u.hasAttribute("data-notes")&&(c.notes=u.getAttribute("data-notes"),c.whitespace="pre-wrap",d=null)}d&&d.length&&(d=Array.from(d).filter((g=>g.closest(".fragment")===null)),c.notes=d.map((g=>g.innerHTML)).join(`
`),c.markdown=d[0]&&typeof d[0].getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(c),"*")}function s(o){if((function(r){try{return window.location.origin===r.source.location.origin}catch{return!1}})(o))try{let r=JSON.parse(o.data);r&&r.namespace==="reveal-notes"&&r.type==="connected"?(clearInterval(h),a()):r&&r.namespace==="reveal-notes"&&r.type==="call"&&(function(d,u,c){let g=t[d].apply(t,u);e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:g,callId:c}),"*")})(r.methodName,r.arguments,r.callId)}catch{}}function a(){t.on("slidechanged",i),t.on("fragmentshown",i),t.on("fragmenthidden",i),t.on("overviewhidden",i),t.on("overviewshown",i),t.on("paused",i),t.on("resumed",i),t.on("previewiframe",i),t.on("previewimage",i),t.on("previewvideo",i),t.on("closeoverlay",i),i()}return{id:"notes",init:function(o){t=o,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?n():window.addEventListener("message",(r=>{if(!e&&typeof r.data=="string"){let u;try{u=JSON.parse(r.data)}catch{}u&&u.namespace==="reveal-notes"&&u.type==="heartbeat"&&(d=r.source,e&&!e.closed?e.focus():(e=d,window.addEventListener("message",s),a()))}var d})),t.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){n()})))},open:n}};/*!
 * reveal.js Zoom plugin
 */const Wn={id:"zoom",init:function(h){h.getRevealElement().addEventListener("mousedown",(function(t){var e=/Linux/.test(window.navigator.platform)?"ctrl":"alt",n=(h.getConfig().zoomKey?h.getConfig().zoomKey:e)+"Key",i=h.getConfig().zoomLevel?h.getConfig().zoomLevel:2;t[n]&&!h.isOverview()&&(t.preventDefault(),Ht.to({x:t.clientX,y:t.clientY,scale:i,pan:!1}))}))},destroy:()=>{Ht.reset()}};var jn=()=>Wn,Ht=(function(){var h=1,t=0,e=0,n=-1,i=-1,s="transform"in document.body.style;function a(d,u){var c=r();if(d.width=d.width||1,d.height=d.height||1,d.x-=(window.innerWidth-d.width*u)/2,d.y-=(window.innerHeight-d.height*u)/2,s)if(u===1)document.body.style.transform="";else{var g=c.x+"px "+c.y+"px",y="translate("+-d.x+"px,"+-d.y+"px) scale("+u+")";document.body.style.transformOrigin=g,document.body.style.transform=y}else u===1?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(c.x+d.x)/u+"px",document.body.style.top=-(c.y+d.y)/u+"px",document.body.style.width=100*u+"%",document.body.style.height=100*u+"%",document.body.style.zoom=u);h=u,document.documentElement.classList&&(h!==1?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function o(){var d=.12*window.innerWidth,u=.12*window.innerHeight,c=r();e<u?window.scroll(c.x,c.y-14/h*(1-e/u)):e>window.innerHeight-u&&window.scroll(c.x,c.y+(1-(window.innerHeight-e)/u)*(14/h)),t<d?window.scroll(c.x-14/h*(1-t/d),c.y):t>window.innerWidth-d&&window.scroll(c.x+(1-(window.innerWidth-t)/d)*(14/h),c.y)}function r(){return{x:window.scrollX!==void 0?window.scrollX:window.pageXOffset,y:window.scrollY!==void 0?window.scrollY:window.pageYOffset}}return s&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",(function(d){h!==1&&d.keyCode===27&&Ht.out()})),document.addEventListener("mousemove",(function(d){h!==1&&(t=d.clientX,e=d.clientY)})),{to:function(d){if(h!==1)Ht.out();else{if(d.x=d.x||0,d.y=d.y||0,d.element){var u=d.element.getBoundingClientRect();d.x=u.left-20,d.y=u.top-20,d.width=u.width+40,d.height=u.height+40}d.width!==void 0&&d.height!==void 0&&(d.scale=Math.max(Math.min(window.innerWidth/d.width,window.innerHeight/d.height),1)),d.scale>1&&(d.x*=d.scale,d.y*=d.scale,a(d,d.scale),d.pan!==!1&&(n=setTimeout((function(){i=setInterval(o,1e3/60)}),800)))}},out:function(){clearTimeout(n),clearInterval(i),a({x:0,y:0},1),h=1},magnify:function(d){this.to(d)},reset:function(){this.out()},zoomLevel:function(){return h}}})();ot.initialize({hash:!0,plugins:[Vn,jn]});
