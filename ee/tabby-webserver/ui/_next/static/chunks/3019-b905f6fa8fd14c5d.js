"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3019],{35646:function(e,t,n){n.d(t,{q:function(){return d}});let r=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,o=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(r);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},l=e=>"*"===e||"x"===e||"X"===e,a=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},i=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],u=(e,t)=>{if(l(e)||l(t))return 0;let[n,r]=i(a(e),a(t));return n>r?1:n<r?-1:0},c=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=u(e[n]||"0",t[n]||"0");if(0!==r)return r}return 0},s=(e,t)=>{let n=o(e),r=o(t),l=n.pop(),a=r.pop(),i=c(n,r);return 0!==i?i:l&&a?c(l.split("."),a.split(".")):l||a?l?-1:1:0},d=(e,t,n)=>{p(n);let r=s(e,t);return f[n].includes(r)},f={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},m=Object.keys(f),p=e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===m.indexOf(e))throw Error(`Invalid operator, expected one of ${m.join("|")}`)}},28242:function(e,t,n){n.d(t,{F:function(){return c},f:function(){return s}});var r=n(3546);let o=["light","dark"],l="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,r.createContext)(void 0),u={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:u},s=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:u="theme",themes:c=d,defaultTheme:s=n?"system":"light",attribute:f="data-theme",value:b,children:g,nonce:E})=>{let[y,w]=(0,r.useState)(()=>p(u,s)),[C,T]=(0,r.useState)(()=>p(u)),S=b?Object.values(b):c,I=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let l=b?b[r]:r,i=t?v():null,u=document.documentElement;if("class"===f?(u.classList.remove(...S),l&&u.classList.add(l)):l?u.setAttribute(f,l):u.removeAttribute(f),a){let e=o.includes(s)?s:null,t=o.includes(r)?r:e;u.style.colorScheme=t}null==i||i()},[]),R=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),x=(0,r.useCallback)(t=>{let r=h(t);T(r),"system"===y&&n&&!e&&I("system")},[y,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,r.useEffect)(()=>{let e=e=>{e.key===u&&R(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),(0,r.useEffect)(()=>{I(null!=e?e:y)},[e,y]);let F=(0,r.useMemo)(()=>({theme:y,setTheme:R,forcedTheme:e,resolvedTheme:"system"===y?C:y,themes:n?[...c,"system"]:c,systemTheme:n?C:void 0}),[y,R,e,C,n,c]);return r.createElement(i.Provider,{value:F},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:u,themes:c,defaultTheme:s,attribute:f,value:b,children:g,attrs:S,nonce:E}),g)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:i,defaultTheme:u,value:c,attrs:s,nonce:d})=>{let f="system"===u,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=i?o.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let l=c?c[e]:e,a=t?e+"|| ''":`'${l}'`,u="";return i&&r&&!t&&o.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===n?u+=t||l?`c.add(${a})`:"null":l&&(u+=`d[s](n,${a})`),u},h=e?`!function(){${m}${v(e)}}()`:a?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${f?"":"else{"+v(u,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},17989:function(e,t,n){n.d(t,{Fw:function(){return w},VY:function(){return R},fC:function(){return S},p_:function(){return v},wy:function(){return E},xz:function(){return I}});var r=n(65122),o=n(3546),l=n(65727),a=n(47091),i=n(27250),u=n(65292),c=n(79869),s=n(72205),d=n(96497),f=n(29434);let m="Collapsible",[p,v]=(0,a.b)(m),[h,b]=p(m),g=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:l,defaultOpen:a,disabled:u,onOpenChange:c,...d}=e,[m=!1,p]=(0,i.T)({prop:l,defaultProp:a,onChange:c});return(0,o.createElement)(h,{scope:n,disabled:u,contentId:(0,f.M)(),open:m,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p])},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":T(m),"data-disabled":u?"":void 0},d,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...a}=e,i=b("CollapsibleTrigger",n);return(0,o.createElement)(s.WV.button,(0,r.Z)({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":T(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},a,{ref:t,onClick:(0,l.M)(e.onClick,i.onOpenToggle)}))}),y="CollapsibleContent",w=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...l}=e,a=b(y,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:n||a.open},({present:e})=>(0,o.createElement)(C,(0,r.Z)({},l,{ref:t,present:e})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:l,children:a,...i}=e,d=b(y,n),[f,m]=(0,o.useState)(l),p=(0,o.useRef)(null),v=(0,c.e)(t,p),h=(0,o.useRef)(0),g=h.current,E=(0,o.useRef)(0),w=E.current,C=d.open||f,S=(0,o.useRef)(C),I=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>S.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=p.current;if(e){I.current=I.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,E.current=t.width,S.current||(e.style.transitionDuration=I.current.transitionDuration,e.style.animationName=I.current.animationName),m(l)}},[d.open,l]),(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":T(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!C},i,{ref:v,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style}}),C&&a)});function T(e){return e?"open":"closed"}let S=g,I=E,R=w},85656:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(3546),o=n(47091),l=n(79869),a=n(74047);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[u,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=c(s,n),u=(0,l.e)(t,i.collectionRef);return r.createElement(a.g7,{ref:u},o)}),f=e+"CollectionItemSlot",m="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,u=r.useRef(null),s=(0,l.e)(t,u),d=c(f,n);return r.useEffect(()=>(d.itemMap.set(u,{ref:u,...i}),()=>void d.itemMap.delete(u))),r.createElement(a.g7,{[m]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),l=r.useRef(new Map).current;return r.createElement(u,{scope:t,itemMap:l,collectionRef:o},n)},Slot:d,ItemSlot:p},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},i]}},57541:function(e,t,n){n.d(t,{gm:function(){return l}});var r=n(3546);let o=(0,r.createContext)(void 0);function l(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},8914:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(65122),l=n(3546),a=n(79869),i=n(72205),u=n(17957);let c="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,l.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:b,...g}=e,[E,y]=(0,l.useState)(null),w=(0,u.W)(f),C=(0,u.W)(b),T=(0,l.useRef)(null),S=(0,a.e)(t,e=>y(e)),I=(0,l.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,l.useEffect)(()=>{if(r){function e(e){if(I.paused||!E)return;let t=e.target;E.contains(t)?T.current=t:v(T.current,{select:!0})}function t(e){if(I.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||v(T.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&v(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,I.paused]),(0,l.useEffect)(()=>{if(E){h.add(I);let e=document.activeElement,t=E.contains(e);if(!t){let t=new CustomEvent(c,d);E.addEventListener(c,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(v(r,{select:t}),document.activeElement!==n)return}(m(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&v(E))}return()=>{E.removeEventListener(c,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||v(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,C),h.remove(I)},0)}}},[E,w,C,I]);let R=(0,l.useCallback)(e=>{if(!n&&!r||I.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,l]=function(e){let t=m(e),n=p(t,e),r=p(t.reverse(),e);return[n,r]}(t),a=r&&l;a?e.shiftKey||o!==l?e.shiftKey&&o===r&&(e.preventDefault(),n&&v(l,{select:!0})):(e.preventDefault(),n&&v(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,I.paused]);return(0,l.createElement)(i.WV.div,(0,o.Z)({tabIndex:-1},g,{ref:S,onKeyDown:R}))});function m(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function v(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=b(r,e)).unshift(e)},remove(e){var t;null===(t=(r=b(r,e))[0])||void 0===t||t.resume()}});function b(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},1333:function(e,t,n){n.d(t,{Pc:function(){return w},ck:function(){return M},fC:function(){return $}});var r=n(65122),o=n(3546),l=n(65727),a=n(85656),i=n(79869),u=n(47091),c=n(29434),s=n(72205),d=n(17957),f=n(27250),m=n(57541);let p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[b,g,E]=(0,a.B)(h),[y,w]=(0,u.b)(h,[E]),[C,T]=y(h),S=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(I,(0,r.Z)({},e,{ref:t}))))),I=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:u=!1,dir:c,currentTabStopId:h,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:E,onEntryFocus:y,...w}=e,T=(0,o.useRef)(null),S=(0,i.e)(t,T),I=(0,m.gm)(c),[R=null,x]=(0,f.T)({prop:h,defaultProp:b,onChange:E}),[$,M]=(0,o.useState)(!1),k=(0,d.W)(y),L=g(n),_=(0,o.useRef)(!1),[A,N]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=T.current;if(e)return e.addEventListener(p,k),()=>e.removeEventListener(p,k)},[k]),(0,o.createElement)(C,{scope:n,orientation:a,dir:I,loop:u,currentTabStopId:R,onItemFocus:(0,o.useCallback)(e=>x(e),[x]),onItemShiftTab:(0,o.useCallback)(()=>M(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>N(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>N(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:$||0===A?-1:0,"data-orientation":a},w,{ref:S,style:{outline:"none",...e.style},onMouseDown:(0,l.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,l.M)(e.onFocus,e=>{let t=!_.current;if(e.target===e.currentTarget&&t&&!$){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=L().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===R),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);F(o)}}_.current=!1}),onBlur:(0,l.M)(e.onBlur,()=>M(!1))})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:i=!1,tabStopId:u,...d}=e,f=(0,c.M)(),m=u||f,p=T("RovingFocusGroupItem",n),v=p.currentTabStopId===m,h=g(n),{onFocusableItemAdd:E,onFocusableItemRemove:y}=p;return(0,o.useEffect)(()=>{if(a)return E(),()=>y()},[a,E,y]),(0,o.createElement)(b.ItemSlot,{scope:n,id:m,focusable:a,active:i},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,l.M)(e.onMouseDown,e=>{a?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,l.M)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,l.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=h().filter(e=>e.focusable),l=o.map(e=>e.ref.current);if("last"===t)l.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&l.reverse();let o=l.indexOf(e.currentTarget);l=p.loop?(n=l,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):l.slice(o+1)}setTimeout(()=>F(l))}})})))}),x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function F(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let $=S,M=R}}]);