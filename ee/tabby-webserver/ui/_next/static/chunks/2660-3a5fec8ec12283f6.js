"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2660],{18400:function(e,t,n){n.d(t,{z:function(){return r}});class r extends AbortController{constructor(...e){super();let t=e.find(e=>e.aborted);if(t)this.abort(t.reason);else{let t=e=>this.abort(e.target.reason),n={signal:this.signal};for(let r of e)r.addEventListener("abort",t,n)}}}},89704:function(e,t,n){n.d(t,{K:function(){return i}});var r=n(18400),o=n(82205),a=n(94822);function i(e,{targetOrigin:t="*",...n}={}){let i=!1,l=function(n,r){e.contentWindow?.postMessage(n,t,r)},s=new Promise(t=>{let o=n.signal?new r.z(n.signal):new AbortController;window.addEventListener("message",n=>{n.source===e.contentWindow&&n.data===a.P&&(i=!0,o.abort(),t())},{signal:o.signal}),o.signal.addEventListener("abort",()=>{t()},{once:!0}),l(a.t)});return(0,o.g)({send:(e,t)=>i?l(e,t):s.then(()=>{if(i)return l(e,t)}),listen(t,{signal:n}){self.addEventListener("message",n=>{n.source===e.contentWindow&&n.data!==a.P&&t(n.data)},{signal:n})}},n)}},95686:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(18400),o=n(82205),a=n(94822);function i({targetOrigin:e="*",...t}={}){if("undefined"==typeof self||null==self.parent)throw Error("You are not inside an iframe, because there is no parent window.");let{parent:n}=self,i=t.signal?new r.z(t.signal):new AbortController,l=()=>{let r=()=>n.postMessage(a.P,e);self.addEventListener("message",({data:e})=>{e===a.t&&r()},{signal:t.signal}),r()};return"complete"===document.readyState?l():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&(l(),i.abort())},{signal:i.signal}),(0,o.g)({send:(t,r)=>n.postMessage(t,e,r),listen(e,{signal:t}){self.addEventListener("message",t=>{t.data!==a.t&&e(t.data)},{signal:t})}},t)}},94822:function(e,t,n){n.d(t,{P:function(){return o},t:function(){return r}});let r="quilt.threads.ping",o="quilt.threads.pong"},82205:function(e,t,n){n.d(t,{g:function(){return c}});let r=Symbol.for("quilt.threads.retain"),o=Symbol.for("quilt.threads.release"),a=Symbol.for("quilt.threads.retained-by"),i=Symbol.for("quilt.threads.encode"),l=Symbol.for("quilt.threads.transferable");class s{memoryManaged=new Set;add(e){this.memoryManaged.add(e),e[a].add(this),e[r]()}release(){for(let e of this.memoryManaged)e[a].delete(this),e[o]();this.memoryManaged.clear()}}function u(e){return!!(e&&e[r]&&e[o])}function f(e){if(null==e||"object"!=typeof e)return!1;let t=Object.getPrototypeOf(e);return null==t||t===Object.prototype}function c(e,{expose:t,callable:n,signal:c,uuid:p=y,encoder:b=function({encode:e,decode:t}={}){return{encode:function(e,t){let r={api:t,seen:new Map,encode:e=>n(e,r,!0)};return n(e,r)},decode:function(e,t,n){let o={api:t,decode:e=>r(e,o,n,!0)};return r(e,o)}};function n(t,r,o=!1){let{seen:a,api:s,encode:u}=r;if(!o&&e)return e(t,u);if(null==t)return[t];let c=a.get(t);if(c)return c;if(a.set(t,[void 0]),"object"==typeof t){if(t[l]){let e=[t,[t]];return a.set(t,e),e}let e=[],o=t=>{let[o,a=[]]=n(t,r);return e.push(...a),o};if("function"==typeof t[i]){let n=t[i]({encode:o}),r=[n,e];return a.set(t,r),r}if(Array.isArray(t)){let n=t.map(e=>o(e)),r=[n,e];return a.set(t,r),r}if(t instanceof RegExp){let n={"_@r":[t.source,t.flags]},r=[n,e];return a.set(t,r),r}if(t instanceof URL){let n={"_@u":t.href},r=[n,e];return a.set(t,r),r}if(t instanceof Date){let n={"_@d":t.toISOString()},r=[n,e];return a.set(t,r),r}if(t instanceof Map){let n=[...t.entries()].map(([e,t])=>[o(e),o(t)]),r=[{"_@m":n},e];return a.set(t,r),r}if(t instanceof Set){let n=[...t].map(e=>o(e)),r=[{"_@s":n},e];return a.set(t,r),r}let s=null!=t&&(Symbol.asyncIterator in t||Symbol.iterator in t)&&"function"==typeof t.next;if(f(t)||s){let n={};for(let e of Object.keys(t))n[e]=o(t[e]);s&&(n.next??=o(t.next.bind(t)),n.return??=o(t.return.bind(t)),n.throw??=o(t.throw.bind(t)),n["_@i"]=!0);let r=[n,e];return a.set(t,r),r}}if("function"==typeof t){let e=s.functions?.add(t);if(null==e)return[e];let n=[{"_@f":e}];return a.set(t,n),n}let d=[t];return a.set(t,d),d}function r(e,n,o,a=!1){let{api:i,decode:l}=n;if(!a&&t)return t(e,l,o);if("object"==typeof e){if(null==e)return e;if(Array.isArray(e))return e.map(e=>r(e,n,o));if("_@r"in e)return new RegExp(...e["_@r"]);if("_@u"in e)return new URL(e["_@u"]);if("_@d"in e)return new Date(e["_@d"]);if("_@m"in e)return new Map(e["_@m"].map(([e,t])=>[r(e,n,o),r(t,n,o)]));if("_@s"in e)return new Set(e["_@s"].map(e=>r(e,n,o)));if("_@f"in e){let t=e["_@f"],n=i.functions?.get(t);if(o&&u(n))for(let e of o)e.add(n);return n}if(!f(e))return e;let t={};for(let a of Object.keys(e))"_@i"===a?t[Symbol.asyncIterator]=()=>t:t[a]=r(e[a],n,o);return t}return e}}()}={}){let m=!1,w=new Map,g=new Map,h=new Map,_=new Map;if(t)for(let e of Object.keys(t)){let n=t[e];"function"==typeof n&&w.set(e,n)}let E=new Map,v=function(e,t){let n;if(null==t){if("function"!=typeof Proxy)throw Error("You must pass an array of callable methods in environments without Proxies.");let t=new Map;n=new Proxy({},{get(n,r){if(t.has(r))return t.get(r);let o=e(r);return t.set(r,o),o}})}else for(let r of(n={},t))Object.defineProperty(n,r,{value:e(r),writable:!1,configurable:!0,enumerable:!0});return n}(function(e){return(...t)=>{try{if(m)throw new d;if("string"!=typeof e&&"number"!=typeof e)throw Error(`Can’t call a symbol method on a thread: ${e.toString()}`);let n=p(),r=k(n),[o,a]=b.encode(t,S);return P(0,[n,e,o],a),r}catch(e){return Promise.reject(e)}}},n),S={functions:{add(e){let t=g.get(e);return null==t&&(t=p(),g.set(e,t),h.set(t,e)),t},get(e){let t=_.get(e);if(t)return t;let n=0,i=!1;return Object.defineProperties(t=(...t)=>{if(i)throw Error("You attempted to call a function that was already released.");if(!_.has(e))throw Error("You attempted to call a function that was already revoked.");let[n,r]=b.encode(t,S),o=p(),a=k(o);return P(5,[o,e,n],r),a},{[o]:{value:()=>{0==(n-=1)&&(i=!0,_.delete(e),P(3,[e]))},writable:!1},[r]:{value:()=>{n+=1},writable:!1},[a]:{value:new Set,writable:!1}}),_.set(e,t),t}}},M=()=>{if(!m){for(let e of E.keys())A(e,new d);m=!0,w.clear(),E.clear(),g.clear(),h.clear(),_.clear()}};return c?.addEventListener("abort",()=>{P(2,[]),M()},{once:!0}),e.listen(j,{signal:c}),v;function P(t,n,r){m||e.send([t,n],r)}async function j(e){let t=Array.isArray(e)&&"number"==typeof e[0]&&(null==e[1]||Array.isArray(e[1]));if(t)switch(e[0]){case 2:M();break;case 0:{let t=new s,[n,r,o]=e[1],a=w.get(r);try{if(null==a)throw Error(`No '${r}' method is exposed on this endpoint`);let e=await a(...b.decode(o,S,[t])),[i,l]=b.encode(e,S);P(1,[n,void 0,i],l)}catch(o){let{name:e,message:t,stack:r}=o;P(1,[n,{name:e,message:t,stack:r}])}finally{t.release()}break}case 1:case 6:A(...e[1]);break;case 3:{let[t]=e[1],n=h.get(t);n&&(h.delete(t),g.delete(n));break}case 5:{let[t,n,r]=e[1],o=new s;try{let e=h.get(n);if(null==e)throw Error("You attempted to call a function that was already released.");let i=await e(...b.decode(r,S,u(e)?[...e[a],o]:[o])),[l,s]=b.encode(i,S);P(6,[t,void 0,l],s)}catch(o){let{name:e,message:n,stack:r}=o;P(6,[t,{name:e,message:n,stack:r}])}finally{o.release()}}}}function k(e){let t=new Promise((t,n)=>{E.set(e,(e,r,o)=>{if(null==r)t(b.decode(o,S));else{let e=Error();Object.assign(e,r),n(e)}})});return Object.defineProperty(t,Symbol.asyncIterator,{async *value(){let e=await t;Object.defineProperty(e,Symbol.asyncIterator,{value:()=>e}),yield*e}}),t}function A(...e){let t=e[0],n=E.get(t);n&&(n(...e),E.delete(t))}}class d extends Error{constructor(){super("You attempted to call a function on a terminated thread.")}}function y(){return`${p()}-${p()}-${p()}-${p()}`}function p(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)}}}]);