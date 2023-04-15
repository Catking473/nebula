(()=>{var __webpack_modules__={368:()=>{const e=self.__osana$bundle.rewrite.url,t=self.__osana$bundle.rewrite.css,o=self.__osana$bundle.rewrite.js,n=self.__osana$bundle.rewrite.html,r=(self.__osana$bundle.rewrite.srcset,{href:[HTMLAnchorElement,HTMLLinkElement,HTMLAreaElement,HTMLBaseElement],src:[HTMLAudioElement,HTMLEmbedElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLScriptElement,HTMLSourceElement,HTMLTrackElement,HTMLVideoElement],srcset:[HTMLImageElement,HTMLSourceElement],action:[HTMLFormElement]}),c=Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute").value;Element.prototype.setAttribute=function(t,o){if(r[t])for(let n in r[t])if(this instanceof r[t][n])return void c.apply(this,[t,e(o)]);if(void 0===t||void 0===o)throw new TypeError(`Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only ${t||o?1:0} present.`);c.apply(this,[t,o])},Object.keys(r).forEach((t=>{r[t].forEach((o=>{try{if(["href","src","srcset","action"].includes(t)){const{set:n,get:r}=Object.getOwnPropertyDescriptor(o.prototype,t);Object.defineProperty(o.prototype,t,{set(t){return n.call(this,[e(t)])}})}}catch(e){}}))}));const{set:i}=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML");Object.defineProperty(Element.prototype,"innerHTML",{set(e){return this instanceof HTMLScriptElement?i.call(this,o(e)):this instanceof HTMLStyleElement?i.call(this,t(e)):i.call(this,n(e))}})},250:()=>{Object.defineProperty(navigator,"serviceWorker",{})}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](o,o.exports,__webpack_require__),o.exports}var __webpack_exports__={};(()=>{var client_element=__webpack_require__(368);const config=self.__osana$config;function getLocation(e){try{let t=new URL(config.codec.decode(location.pathname.replace(new RegExp(`^${config.prefix}`),"")));return e&&(t.href=new URL(config.codec.decode(e.location.pathname.replace(new RegExp(`^${config.prefix}`),"")))),t.ancestorOrigins={length:0},t.assign=e=>location.assign(config.prefix+config.codec.encode(e)),t.reload=()=>location.reload(),t.replace=e=>location.replace(config.prefix+config.codec.encode(e)),t.toString=()=>t.href,t}catch(e){return{}}}window.Location=class{};class LocationProxy{constructor(e){return new Proxy(new Location,{get:(t,o,n)=>getLocation(e)[o],set(t,o,n){let r=getLocation(e);return r[o]=n,location.pathname=config.prefix+config.codec.encode(r.href),r[o]}})}}const client_location=new LocationProxy;function createStorageProxy(e){return new Proxy({getItem:t=>e.getItem(`${t}@${client_location.host}`),setItem(t,o){e.setItem(`${t}@${client_location.host}`,o)},removeItem(t){e.removeItem(`${t}@${client_location.host}`)},clear(){Object.keys(e).forEach((e=>{new RegExp(`@${client_location.host}$`).test(e)&&this.removeItem(e.replace(new RegExp(`@${client_location.host}$`),""))}))}},{get:(t,o,n)=>"length"===o?Object.keys(e).filter((e=>new RegExp(`@${client_location.host}$`).test(e))).length:["getItem","setItem","removeItem","clear"].includes(o)?t[o]:t.getItem(o),set:(e,t,o)=>e.setItem(t,o)})}const idbopen=indexedDB.open;if(indexedDB.open=(e,t)=>idbopen.call(indexedDB,`${e}@${client_location.host}`,t),window.hasOwnProperty("openDatabase")){const e=openDatabase;openDatabase=(t,o,n,r)=>e(`${t}@${client_location.host}`,o,n,r)}window.__localStorage=createStorageProxy(localStorage),window.__sessionStorage=createStorageProxy(sessionStorage);var client_navigator=__webpack_require__(250);class WindowProxy{constructor(e){return new Proxy(e,{get:(e,t,o)=>"location"===t?new LocationProxy(e):["parent","top"].includes(t)?window===window[t]?window.__window:new WindowProxy(e[t]):["window","self","globalThis"].includes(t)?new WindowProxy(e):"localStorage"===t?window.__localStorage:"sessionStorage"===t?window.__sessionStorage:e[t],set:(t,o,n)=>Reflect.set(e,o,n)})}}const client_window=new WindowProxy(window);class MessageProxy{constructor(e){return new Proxy(e.addEventListener,{apply:(e,t,o)=>(o[0]&&o[1]&&"message"===o[0]&&(o[1]=new Proxy(o[1],{apply:(e,t,o)=>(o[0]=new Proxy(o[0],{get:(e,t,o)=>"origin"===t?__location.origin:("path"===t&&e[t].map((e=>new WindowProxy(e))),"currentTarget"===t||"source"===t||"srcElement"===t||"target"===t?new WindowProxy(e[t]):e[t])}),Reflect.apply(e,t,o))})),Reflect.apply(e,t,o))})}}const rewriteURL=self.__osana$bundle.rewrite.url,client_fetch=new Proxy(fetch,{apply:(e,t,o)=>(o[0]&&(o[0]=rewriteURL(o[0])),Reflect.apply(e,t,o))}),history_rewriteURL=self.__osana$bundle.rewrite.url,history_config=self.__osana$config,pushState=new Proxy(window.history.pushState,{apply(e,t,o){new RegExp(`^${history_config.prefix}`).test(o[2])||(o[2]=history_rewriteURL(o[2]),Reflect.apply(e,t,o))}}),replaceState=new Proxy(window.history.replaceState,{apply(e,t,o){new RegExp(`^${history_config.prefix}`).test(o[2])||(o[2]=history_rewriteURL(o[2]),Reflect.apply(e,t,o))}}),xmlhttp_rewriteURL=self.__osana$bundle.rewrite.url,XMLOpen=window.XMLHttpRequest.prototype.open;function xmlhttp(...e){return e[1]&&(e[1]=xmlhttp_rewriteURL(e[1])),XMLOpen.call(this,...e)}const request_rewriteURL=self.__osana$bundle.rewrite.url,request_config=self.__osana$config,request=new Proxy(Request,{construct:(e,t)=>(t[0]&&(t[0]=request_rewriteURL(t[0])),new Proxy(Reflect.construct(e,t),{get:(e,t,o)=>"url"===t?new URL(request_config.codec.decode(location.pathname.replace(new RegExp(`^${request_config.prefix}`),""))).href:e[t]}))}),beacon_rewriteURL=self.__osana$bundle.rewrite.url,beacon=new Proxy(navigator.sendBeacon,{apply:(e,t,o)=>(o[0]&&(o[0]=beacon_rewriteURL(o[0])),Reflect.apply(e,t,o))}),encodeProtocol=self.__osana$bundle.rewrite.protocol,v4=self.__osana$bundle.uuid,websocket_config=self.__osana$config,websockets=new Map,websocket=new Proxy(WebSocket,{construct(e,t,o){if(t[0]){const o=new URL(t[0]),n=v4();websockets.set(n,o.toString());const r={remote:{host:o.hostname,port:o.port||("wss:"===o.protocol?"443":"80"),path:o.pathname+o.search,protocol:o.protocol},headers:{Host:o.host,Origin:client_location.origin,Pragma:"no-cache","Cache-Control":"no-cache",Upgrade:"websocket",Connection:"Upgrade"},forward_headers:["accept-encoding","accept-language","sec-websocket-extensions","sec-websocket-key","sec-websocket-version"]},c=new URL(websocket_config.bare);return Reflect.construct(e,[location.protocol.replace("http","ws")+"//"+(c.host+c.pathname)+`v1/?${n}`,["bare",encodeProtocol(JSON.stringify(r))]])}return Reflect.construct(e,t,o)}}),websocketURL=Object.getOwnPropertyDescriptor(WebSocket.prototype,"url");Object.defineProperty(WebSocket.prototype,"url",{get(){const e=websocketURL.get.call(this),t=new URL(e).search.substring(1);return websockets.get(t)}});const rewriteJS=self.__osana$bundle.rewrite.js,client_eval=new Proxy(eval,{apply:(e,t,o)=>(o[0]&&(o[0]=rewriteJS(o[0])),Reflect.apply(e,t,o))}),worker_rewriteURL=self.__osana$bundle.rewrite.url,worker=new Proxy(window.Worker,{construct:(e,t,o)=>(t[0]&&(t[0]=worker_rewriteURL(t[0])),Reflect.construct(e,t,o))}),open_rewriteURL=self.__osana$bundle.rewrite.url,client_open=new Proxy(window.open,{apply(e,t,o){o[0]&&"about:blank"!==o[0]&&(o[0]=open_rewriteURL(o[0])),Reflect.apply(e,t,o)}});window.fetch=client_fetch,window.Request=request,window.history.pushState=pushState,window.history.replaceState=replaceState,window.__parent=client_window.parent,window.__top=client_window.top,window.__window=client_window,window.__location=client_location,window.__self=client_window,window.XMLHttpRequest.prototype.open=xmlhttp,navigator.sendBeacon=beacon,window.WebSocket=websocket,window.eval=client_eval,window.Worker=worker,window.open=client_open,window.addEventListener=new MessageProxy(window),window.Worker.prototype.addEventListener=new MessageProxy(window.Worker.prototype)})()})();