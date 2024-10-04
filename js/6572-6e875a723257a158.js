(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6572],{8146:function(e){var t,n,r=Object.prototype,o=Function.prototype.toString,u=r.hasOwnProperty,l=o.call(Object),i=r.toString,a=(t=Object.getPrototypeOf,n=Object,function(e){return t(n(e))});e.exports=function(e){if(!(e&&"object"==typeof e)||"[object Object]"!=i.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=a(e);if(null===t)return!0;var n=u.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&o.call(n)==l}},94440:function(e,t,n){"use strict";n.d(t,{p:function(){return R}});var r,o,u,l=n(67294),i=n(32984),a=n(37237),c=n(23784),s=n(19946),f=n(61363),d=n(64103),p=n(16567),g=n(16723);function m(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var y=n(15466),h=n(73781);let v=null!=(u=l.startTransition)?u:function(e){e()};var b=((r=b||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),E=((o=E||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let S={0:e=>({...e,disclosureState:(0,i.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},w=(0,l.createContext)(null);function k(e){let t=(0,l.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}w.displayName="DisclosureContext";let O=(0,l.createContext)(null);O.displayName="DisclosureAPIContext";let I=(0,l.createContext)(null);function P(e,t){return(0,i.E)(t.type,S,e,t)}I.displayName="DisclosurePanelContext";let j=l.Fragment,C=a.AN.RenderStrategy|a.AN.Static,R=Object.assign((0,a.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,l.useRef)(null),u=(0,c.T)(t,(0,c.h)(e=>{o.current=e},void 0===e.as||e.as===l.Fragment)),s=(0,l.useRef)(null),f=(0,l.useRef)(null),d=(0,l.useReducer)(P,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:s,buttonId:null,panelId:null}),[{disclosureState:g,buttonId:m},v]=d,b=(0,h.z)(e=>{v({type:1});let t=(0,y.r)(o);if(!t||!m)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(m):t.getElementById(m);null==n||n.focus()}),E=(0,l.useMemo)(()=>({close:b}),[b]),S=(0,l.useMemo)(()=>({open:0===g,close:b}),[g,b]);return l.createElement(w.Provider,{value:d},l.createElement(O.Provider,{value:E},l.createElement(p.up,{value:(0,i.E)(g,{0:p.ZM.Open,1:p.ZM.Closed})},(0,a.sY)({ourProps:{ref:u},theirProps:r,slot:S,defaultTag:j,name:"Disclosure"}))))}),{Button:(0,a.yV)(function(e,t){let n=(0,s.M)(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[u,i]=k("Disclosure.Button"),p=(0,l.useContext)(I),y=null!==p&&p===u.panelId,v=(0,l.useRef)(null),b=(0,c.T)(v,t,y?null:u.buttonRef);(0,l.useEffect)(()=>{if(!y)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,y]);let E=(0,h.z)(e=>{var t;if(y){if(1===u.disclosureState)return;switch(e.key){case f.R.Space:case f.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=u.buttonRef.current)||t.focus()}}else switch(e.key){case f.R.Space:case f.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}}),S=(0,h.z)(e=>{e.key===f.R.Space&&e.preventDefault()}),w=(0,h.z)(t=>{var n;(0,d.P)(t.currentTarget)||e.disabled||(y?(i({type:0}),null==(n=u.buttonRef.current)||n.focus()):i({type:0}))}),O=(0,l.useMemo)(()=>({open:0===u.disclosureState}),[u]),P=function(e,t){let[n,r]=(0,l.useState)(()=>m(e));return(0,g.e)(()=>{r(m(e))},[e.type,e.as]),(0,g.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,v),j=y?{ref:b,type:P,onKeyDown:E,onClick:w}:{ref:b,id:r,type:P,"aria-expanded":0===u.disclosureState,"aria-controls":u.linkedPanel?u.panelId:void 0,onKeyDown:E,onKeyUp:S,onClick:w};return(0,a.sY)({ourProps:j,theirProps:o,slot:O,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,a.yV)(function(e,t){let n=(0,s.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[u,i]=k("Disclosure.Panel"),{close:f}=function e(t){let n=(0,l.useContext)(O);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),d=(0,c.T)(t,u.panelRef,e=>{v(()=>i({type:e?4:5}))});(0,l.useEffect)(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let g=(0,p.oJ)(),m=null!==g?(g&p.ZM.Open)===p.ZM.Open:0===u.disclosureState,y=(0,l.useMemo)(()=>({open:0===u.disclosureState,close:f}),[u,f]);return l.createElement(I.Provider,{value:u.panelId},(0,a.sY)({ourProps:{ref:d,id:r},theirProps:o,slot:y,defaultTag:"div",features:C,visible:m,name:"Disclosure.Panel"}))})})},61363:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},73781:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(67294),o=n(3855);let u=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},19946:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,o=n(67294),u=n(16723),l=n(82180),i=n(77896);let a=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?()=>i.O.nextId():null);return(0,u.e)(()=>{null===t&&n(i.O.nextId())},[t]),null!=t?""+t:void 0}},16723:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var r=n(67294),o=n(77896);let u=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(67294),o=n(16723);function u(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},82180:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var r,o=n(67294),u=n(77896);function l(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(o,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[l,i]=o.useState(u.O.isHandoffComplete);return l&&!1===u.O.isHandoffComplete&&i(!1),o.useEffect(()=>{!0!==l&&i(!0)},[l]),o.useEffect(()=>u.O.handoff(),[]),!t&&l}},23784:function(e,t,n){"use strict";n.d(t,{T:function(){return i},h:function(){return l}});var r=n(67294),o=n(73781);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},16567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return l},oJ:function(){return i},up:function(){return a}});var r,o=n(67294);let u=(0,o.createContext)(null);u.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function i(){return(0,o.useContext)(u)}function a({value:e,children:t}){return o.createElement(u.Provider,{value:e},t)}},64103:function(e,t,n){"use strict";function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},77896:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},15466:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(77896);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},37237:function(e,t,n){"use strict";n.d(t,{AN:function(){return a},yV:function(){return p},sY:function(){return s}});var r,o,u=n(67294);function l(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var i=n(32984),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),c=((o=c||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:l}){let a=d(t,e);if(u)return f(a,n,r,l);let c=null!=o?o:0;if(2&c){let{static:e=!1,...t}=a;if(e)return f(t,n,r,l)}if(1&c){let{unmount:e=!0,...t}=a;return(0,i.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return f(a,n,r,l)}function f(e,t={},n,r){let{as:o=n,children:i,refName:a="ref",...c}=m(e,["unmount","static"]),s=void 0!==e.ref?{[a]:e.ref}:{},f="function"==typeof i?i(t):i;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===u.Fragment&&Object.keys(g(c)).length>0){if(!(0,u.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>l(null==e?void 0:e.className(...t),c.className):l(null==e?void 0:e.className,c.className);return(0,u.cloneElement)(f,Object.assign({},d(f.props,g(m(c,["ref"]))),p,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,s.ref),t?{className:t}:{}))}return(0,u.createElement)(o,Object.assign({},m(c,["ref"]),o!==u.Fragment&&s,o!==u.Fragment&&p),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function p(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},43407:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},31415:function(e,t,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o},48169:function(e,t,n){"use strict";n.d(t,{e:function(){return m}});var r=n(67021),o=n(8146);let u={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162};Object.fromEntries(Object.entries(u).map(e=>e.reverse()));let l=`${Object.values(u).map(e=>`\\u{${e.toString(16)}}`).join("")}`;RegExp(`(?:[${l}]{2})+`,"gu");let i={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},a={"\\f":"\f","\\n":"\n","\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function c(e){let t;let n=[],r=/\['(.*?)'\]|\[(\d+)\]/g;for(;null!==(t=r.exec(e));){if(void 0!==t[1]){let e=t[1].replace(/\\(\\|f|n|r|t|')/g,e=>a[e]);n.push(e);continue}if(void 0!==t[2]){n.push(parseInt(t[2],10));continue}}return n}var s=n(34155);let f=e=>{let{path:t}=e,n=t.at(-1);return!("slug"===t.at(-2)&&"current"===n||"string"==typeof n&&n.startsWith("_"))&&("number"!=typeof n||"marks"!==t.at(-2)||"number"!=typeof t.at(-3)||"children"!==t.at(-4)||"number"!=typeof t.at(-5))&&("href"!==n||"number"!=typeof t.at(-2)||"markDefs"!==t.at(-3)||"number"!=typeof t.at(-4))&&("string"!=typeof n||"number"!=typeof t.at(-2)||"style"!==n&&"listItem"!==n)};function d(e){return e.map((e,t)=>"number"==typeof e?"[".concat(e,"]"):t>0?".".concat(e):e).join("")}let p=e=>{var t;let{encodeSourceMap:n=function(){try{return"true"===(void 0).SANITY_SOURCE_MAP||"auto"}catch{}try{return"true"===s.env.SANITY_SOURCE_MAP||"auto"}catch{}return"auto"}(),encodeSourceMapAtPath:l,studioUrl:a=function(){try{return(void 0).SANITY_STUDIO_URL}catch{}try{return s.env.SANITY_STUDIO_URL}catch{}}(),logger:p,...g}=e,m=!0===n;if("auto"===n&&(m=function(){try{return"preview"===(void 0).VERCEL_ENV}catch{}try{return"preview"===s.env.VERCEL_ENV}catch{}return!1}()),"string"==typeof n&&"auto"!==n)throw Error("Invalid value for encodeSourceMap: ".concat(n,". Did you mean 'auto'?"));try{if(m&&!1!==e.resultSourceMap){null==(t=null==p?void 0:p.debug)||t.call(p,"[@sanity/preview-kit]: Creating source map enabled client");let e=function(e){let{studioUrl:t,encodeSourceMapAtPath:n,logger:l}=e;!function(e,t){if(!e)throw Error("Invariant failed")}(t,0);let a=r.Lx.clone();function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return t({maxRedirects:0,...e})}return a.use(function(e){let{studioUrl:t,encodeSourceMapAtPath:n,logger:r}=e,l=function(e,t,n){let r=function(e){let t=e.replace(/\/$/,"");return(e,n)=>"".concat(t,"/intent/edit/id=").concat(e._id,";path=").concat(function(e){let t=Array.isArray(e)?e:c(e);return encodeURIComponent(t.map((e,t)=>"number"==typeof e?"[".concat(e,"]"):t>0?".".concat(e):e).join(""))}(n))}(e),o={encoded:[],skipped:[]},l=(e,l,i)=>("function"==typeof t?t({path:i,filterDefault:f}):f({path:i,filterDefault:f}))===!1?(n&&o.skipped.push({path:d(i),value:"".concat(e.slice(0,20)).concat(e.length>20?"...":""),length:e.length}),e):(n&&o.encoded.push({path:d(i),value:"".concat(e.slice(0,20)).concat(e.length>20?"...":""),length:e.length}),function(e,t,n="auto"){return!0===n?e:"auto"===n&&(Boolean(Date.parse(e))||function(e){try{new URL(e)}catch{return!1}return!0}(e))?e:`${e}${function(e){let t=JSON.stringify(e);return Array.from(t).map(e=>{let n=e.charCodeAt(0);if(n>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${t} on character ${e} (${n})`);return Array.from(n.toString(16).padStart(2,"0")).map(e=>String.fromCodePoint(u[e])).join("")}).join("")}(t)}`}(e,{origin:"sanity.io",href:r(l,i)},"auto"));return{report:o,transcode:l,walk:e=>(o.encoded.length=0,o.skipped.length=0,function(e,t){if(!e.resultSourceMap)throw TypeError("Missing resultSourceMap");return e.result=function e(t,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return null!==t&&Array.isArray(t)?t.map((t,o)=>e(t,n,r.concat(o))):"object"==typeof t&&null!==t?Object.fromEntries(Object.entries(t).map(t=>{let[o,u]=t;return[o,e(u,n,r.concat(o))]})):n(t,r)}(e.result,(n,r)=>{if("string"!=typeof n)return n;let o=function(e,t,n){var r;let o="$".concat(e.map(e=>{if("string"==typeof e){let t=e.replace(/[\f\n\r\t'\\]/g,e=>i[e]);return"['".concat(t,"']")}return"[".concat(e,"]")}).join(""));if(!t.mappings){null==(r=null==n?void 0:n.error)||r.call(n,"Missing resultSourceMap.mappings",{resultSourceMap:t});return}if(void 0!==t.mappings[o])return[t.mappings[o],o,""];let u=Object.entries(t.mappings).filter(e=>{let[t]=e;return o.startsWith(t)}).sort((e,t)=>{let[n]=e,[r]=t;return r.length-n.length});if(0==u.length)return;let[l,a]=u[0],c=o.substring(l.length);return[a,l,c]}(r,e.resultSourceMap);if(!o)return n;let[u,,l]=o;if("value"!==u.type||"documentValue"!==u.source.type)return n;let a=e.resultSourceMap.documents[u.source.document],c=e.resultSourceMap.paths[u.source.path];return t(n,a,c+l)}),e}(e,(e,t,n)=>l(e,t,c(n))))}}(t,n,r);return{onResponse:e=>{var t,n,u,i,a,c,s,f;if("object"!=typeof e||null===e)return e;if(Array.isArray(e.body)||"string"==typeof e.body||o(e.body)){if(f=e.body,"object"!=typeof f||null===f||!("resultSourceMap"in f))return r&&(null==(t=null==r?void 0:r.error)||t.call(r,"[@sanity/preview-kit]: Missing Content Source Map from response body",e.body)),e;let o=l.walk(e.body);if(r){let e=l.report.skipped.length,t=l.report.encoded.length;if((e||t)&&(null==(n=(null==r?void 0:r.groupCollapsed)||r.log)||n("[@sanity/preview-kit]: Stega encoding source map into result"),null==(u=r.log)||u.call(r,"[@sanity/preview-kit]: Paths encoded: ".concat(l.report.encoded.length,", skipped: ").concat(l.report.skipped.length))),l.report.encoded.length>0&&(null==(i=null==r?void 0:r.log)||i.call(r,"[@sanity/preview-kit]: Table of encoded paths"),null==(a=(null==r?void 0:r.table)||r.log)||a(l.report.encoded)),l.report.skipped.length>0){let e=new Set;for(let{path:t}of l.report.skipped)e.add(t.replace(/\[\d+\]/g,"[]"));null==(c=null==r?void 0:r.log)||c.call(r,"[@sanity/preview-kit]: List of skipped paths",[...e.values()])}(e||t)&&(null==(s=null==r?void 0:r.groupEnd)||s.call(r))}return{...e,body:o}}return e}}}({studioUrl:t,encodeSourceMapAtPath:n,logger:l})),s.defaultRequester=a,s}({encodeSourceMapAtPath:l,studioUrl:a,logger:p});return new r.aN(e,{...g,resultSourceMap:!0})}}catch(e){console.error("[@sanity/preview-kit]: Error creating client",e,"falling back to non-embedded sourcemap mode")}return(0,r.eI)(g)};var g=n(34155);function m(e){let{studioUrl:t=g.env.NEXT_PUBLIC_SANITY_STUDIO_URL,encodeSourceMap:n=!!t&&"auto"}=e;return p({...e,studioUrl:t,encodeSourceMap:n})}}}]);