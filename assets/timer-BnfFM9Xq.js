import{w as kl}from"./with-props-DBf2IZuv.js";import{r as St,l as j,p as Ml}from"./chunk-KNED5TY2-DMJ2IUhw.js";function Ll(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),e}function Fl({duration:n,activity:t,onStop:e}){const[r,s]=St.useState(n),[o,l]=St.useState(!1);St.useEffect(()=>{let f=null;return o&&r>0&&(f=setInterval(()=>{s(p=>p-1)},1e3)),r===0&&o&&(l(!1),e()),()=>{f&&clearInterval(f)}},[o,r,e]);const c=f=>`${String(Math.floor(f/3600)).padStart(2,"0")}:${String(Math.floor(f%3600/60)).padStart(2,"0")}:${String(f%60).padStart(2,"0")}`;return j.jsxs("div",{children:[j.jsx("h2",{className:"text-3xl font-mono mb-4",children:c(r)}),j.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 bg-indigo-400 text-white rounded mr-2",children:"Start"}),j.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 bg-black text-white rounded mr-2",children:"Stop"}),j.jsx("button",{onClick:()=>{s(n),l(!1)},className:"px-4 py-2 bg-black text-white rounded",children:"Reset"})]})}function Ul({activity:n,onStop:t}){const[e,r]=St.useState(0),[s,o]=St.useState(!1);St.useEffect(()=>{let f=null;return s&&(f=setInterval(()=>{r(p=>p+1)},1e3)),()=>{f&&clearInterval(f)}},[s]);const l=f=>`${String(Math.floor(f/3600)).padStart(2,"0")}:${String(Math.floor(f%3600/60)).padStart(2,"0")}:${String(f%60).padStart(2,"0")}`,c=()=>{o(!1),t()};return j.jsxs("div",{children:[j.jsx("h2",{className:"text-3xl font-mono mb-4",children:l(e)}),j.jsx("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-indigo-400 text-white rounded mr-2",children:"Start"}),j.jsx("button",{onClick:c,className:"px-4 py-2 bg-black text-white rounded mr-2",children:"Stop"}),j.jsx("button",{onClick:()=>{r(0),o(!1)},className:"px-4 py-2 bg-black text-white rounded",children:"Reset"})]})}const Bl=()=>{};var xs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},jl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let S=(c&15)<<2|p>>6,C=p&63;f||(C=64,l||(S=64)),r.push(e[I],e[w],e[S],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):jl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const p=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||p==null||w==null)throw new $l;const S=o<<2|c>>4;if(r.push(S),p!==64){const C=c<<4&240|p>>2;if(r.push(C),w!==64){const D=p<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ql=function(n){const t=xo(n);return ko.encodeByteArray(t,!0)},$n=function(n){return ql(n).replace(/\./g,"")},Gl=function(n){try{return ko.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=()=>zl().__FIREBASE_DEFAULTS__,Kl=()=>{if(typeof process>"u"||typeof xs>"u")return;const n=xs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gl(n[1]);return t&&JSON.parse(t)},li=()=>{try{return Bl()||Hl()||Kl()||Wl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ql=n=>{var t,e;return(e=(t=li())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Xl=n=>{const t=Ql(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Mo=()=>{var n;return(n=li())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$n(JSON.stringify(e)),$n(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tu(){var n;const t=(n=li())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eu(){return!tu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nu(){try{return typeof indexedDB=="object"}catch{return!1}}function ru(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="FirebaseError";class we extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=iu,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?su(o,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new we(s,c,r)}}function su(n,t){return n.replace(ou,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ou=/\{\$([^}]+)}/g;function qn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],l=t[s];if(ks(o)&&ks(l)){if(!qn(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ks(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Yl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uu(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lu(n){return n===te?void 0:n}function uu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new au(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const hu={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},fu=F.INFO,du={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},pu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=du[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fo{constructor(t){this.name=t,this._logLevel=fu,this._logHandler=pu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const mu=(n,t)=>t.some(e=>n instanceof e);let Ms,Ls;function gu(){return Ms||(Ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _u(){return Ls||(Ls=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,Gr=new WeakMap,Bo=new WeakMap,Lr=new WeakMap,ui=new WeakMap;function yu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e($t(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Uo.set(e,n)}).catch(()=>{}),ui.set(t,n),t}function Eu(n){if(Gr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Gr.set(n,t)}let zr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Bo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function vu(n){zr=n(zr)}function Tu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Fr(this),t,...e);return Bo.set(r,t.sort?t.sort():[t]),$t(r)}:_u().includes(n)?function(...t){return n.apply(Fr(this),t),$t(Uo.get(this))}:function(...t){return $t(n.apply(Fr(this),t))}}function Iu(n){return typeof n=="function"?Tu(n):(n instanceof IDBTransaction&&Eu(n),mu(n,gu())?new Proxy(n,zr):n)}function $t(n){if(n instanceof IDBRequest)return yu(n);if(Lr.has(n))return Lr.get(n);const t=Iu(n);return t!==n&&(Lr.set(n,t),ui.set(t,n)),t}const Fr=n=>ui.get(n);function Au(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=$t(l);return r&&l.addEventListener("upgradeneeded",f=>{r($t(l.result),f.oldVersion,f.newVersion,$t(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const wu=["get","getKey","getAll","getAllKeys","count"],Ru=["put","add","delete","clear"],Ur=new Map;function Fs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ur.get(t))return Ur.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ru.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wu.includes(e)))return;const o=async function(l,...c){const f=this.transaction(l,s?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[e](...c),s&&f.done]))[0]};return Ur.set(t,o),o}vu(n=>({...n,get:(t,e,r)=>Fs(t,e)||n.get(t,e,r),has:(t,e)=>!!Fs(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Su(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Su(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hr="@firebase/app",Us="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Fo("@firebase/app"),Pu="@firebase/app-compat",Cu="@firebase/analytics-compat",Vu="@firebase/analytics",Du="@firebase/app-check-compat",Nu="@firebase/app-check",Ou="@firebase/auth",xu="@firebase/auth-compat",ku="@firebase/database",Mu="@firebase/data-connect",Lu="@firebase/database-compat",Fu="@firebase/functions",Uu="@firebase/functions-compat",Bu="@firebase/installations",ju="@firebase/installations-compat",$u="@firebase/messaging",qu="@firebase/messaging-compat",Gu="@firebase/performance",zu="@firebase/performance-compat",Hu="@firebase/remote-config",Ku="@firebase/remote-config-compat",Wu="@firebase/storage",Qu="@firebase/storage-compat",Xu="@firebase/firestore",Yu="@firebase/vertexai",Ju="@firebase/firestore-compat",Zu="firebase",tc="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",ec={[Hr]:"fire-core",[Pu]:"fire-core-compat",[Vu]:"fire-analytics",[Cu]:"fire-analytics-compat",[Nu]:"fire-app-check",[Du]:"fire-app-check-compat",[Ou]:"fire-auth",[xu]:"fire-auth-compat",[ku]:"fire-rtdb",[Mu]:"fire-data-connect",[Lu]:"fire-rtdb-compat",[Fu]:"fire-fn",[Uu]:"fire-fn-compat",[Bu]:"fire-iid",[ju]:"fire-iid-compat",[$u]:"fire-fcm",[qu]:"fire-fcm-compat",[Gu]:"fire-perf",[zu]:"fire-perf-compat",[Hu]:"fire-rc",[Ku]:"fire-rc-compat",[Wu]:"fire-gcs",[Qu]:"fire-gcs-compat",[Xu]:"fire-fst",[Ju]:"fire-fst-compat",[Yu]:"fire-vertex","fire-js":"fire-js",[Zu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Map,nc=new Map,Wr=new Map;function Bs(n,t){try{n.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function zn(n){const t=n.name;if(Wr.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;Wr.set(t,n);for(const e of Gn.values())Bs(e,n);for(const e of nc.values())Bs(e,n);return!0}function rc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ic(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Lo("app","Firebase",sc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=tc;function jo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(e||(e=Mo()),!e)throw qt.create("no-options");const o=Gn.get(s);if(o){if(qn(e,o.options)&&qn(r,o.config))return o;throw qt.create("duplicate-app",{appName:s})}const l=new cu(s);for(const f of Wr.values())l.addComponent(f);const c=new oc(e,r,l);return Gn.set(s,c),c}function lc(n=Kr){const t=Gn.get(n);if(!t&&n===Kr&&Mo())return jo();if(!t)throw qt.create("no-app",{appName:n});return t}function _e(n,t,e){var r;let s=(r=ec[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(c.join(" "));return}zn(new Ze(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="firebase-heartbeat-database",cc=1,tn="firebase-heartbeat-store";let Br=null;function $o(){return Br||(Br=Au(uc,cc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),Br}async function hc(n){try{const e=(await $o()).transaction(tn),r=await e.objectStore(tn).get(qo(n));return await e.done,r}catch(t){if(t instanceof we)Mt.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(e.message)}}}async function js(n,t){try{const r=(await $o()).transaction(tn,"readwrite");await r.objectStore(tn).put(t,qo(n)),await r.done}catch(e){if(e instanceof we)Mt.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(r.message)}}}function qo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=1024,dc=30;class pc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$s();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>dc){const l=_c(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$s(),{heartbeatsToSend:r,unsentEntries:s}=mc(this._heartbeatsCache.heartbeats),o=$n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function $s(){return new Date().toISOString().substring(0,10)}function mc(n,t=fc){const e=[];let r=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),qs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),qs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class gc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nu()?ru().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await hc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return js(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return js(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qs(n){return $n(JSON.stringify({version:2,heartbeats:n})).length}function _c(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){zn(new Ze("platform-logger",t=>new bu(t),"PRIVATE")),zn(new Ze("heartbeat",t=>new pc(t),"PRIVATE")),_e(Hr,Us,n),_e(Hr,Us,"esm2017"),_e("fire-js","")}yc("");var Ec="firebase",vc="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e(Ec,vc,"app");var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function g(){}g.prototype=d.prototype,E.D=d.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var m=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)m[Dt-2]=arguments[Dt];return d.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],m=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var g=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=g&255,g/=256;for(this.u(E),E=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)E[g++]=this.g[d]>>>_&255;return E};function o(E,d){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=d(E)}function l(E,d){this.h=d;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new l([d|0],0>d?-1:0)}):new l([E|0],0>E?-1:0)}function p(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(p(-E));for(var d=[],g=1,_=0;E>=g;_++)d[_]=E/g|0,g*=4294967296;return new l(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),m=parseInt(E.substring(y,y+T),d);8>T?(T=p(Math.pow(d,T)),_=_.j(T).add(p(m))):(_=_.j(g),_=_.add(p(m)))}return _}var w=f(0),S=f(1),C=f(16777216);n=l.prototype,n.m=function(){if(k(this))return-N(this).m();for(var E=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(k(this))return"-"+N(this).toString(E);for(var d=p(Math.pow(E,6)),g=this,_="";;){var y=lt(g,d).g;g=K(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=K(this,E),k(E)?-1:D(E)?0:1};function N(E){for(var d=E.g.length,g=[],_=0;_<d;_++)g[_]=~E.g[_];return new l(g,~E.h).add(S)}n.abs=function(){return k(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,g[y]=m<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function K(E,d){return E.add(N(d))}n.j=function(E){if(D(this)||D(E))return w;if(k(this))return k(E)?N(this).j(N(E)):N(N(this).j(E));if(k(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return p(this.m()*E.m());for(var d=this.g.length+E.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,Dt=E.i(y)>>>16,Pe=E.i(y)&65535;g[2*_+2*y]+=m*Pe,H(g,2*_+2*y),g[2*_+2*y+1]+=T*Pe,H(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Dt,H(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Dt,H(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new l(g,0)};function H(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function W(E,d){this.g=E,this.h=d}function lt(E,d){if(D(d))throw Error("division by zero");if(D(E))return new W(w,w);if(k(E))return d=lt(N(E),d),new W(N(d.g),N(d.h));if(k(d))return d=lt(E,N(d)),new W(N(d.g),d.h);if(30<E.g.length){if(k(E)||k(d))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=d;0>=_.l(E);)g=Qt(g),_=Qt(_);var y=yt(g,1),T=yt(_,1);for(_=yt(_,2),g=yt(g,2);!D(_);){var m=T.add(_);0>=m.l(E)&&(y=y.add(g),T=m),_=yt(_,1),g=yt(g,1)}return d=K(E,y.j(d)),new W(y,d)}for(y=w;0<=E.l(d);){for(g=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=p(g),m=T.j(d);k(m)||0<m.l(E);)g-=_,T=p(g),m=T.j(d);D(T)&&(T=S),y=y.add(T),E=K(E,m)}return new W(y,E)}n.A=function(E){return lt(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&E.i(_);return new l(g,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|E.i(_);return new l(g,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^E.i(_);return new l(g,this.h^E.h)};function Qt(E){for(var d=E.g.length+1,g=[],_=0;_<d;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(g,E.h)}function yt(E,d){var g=d>>5;d%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+g)>>>d|E.i(T+g+1)<<32-d:E.i(T+g);return new l(y,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=I,ci=l}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Go,He,zo,Fn,Qr,Ho,Ko,Wo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,u){return i==Array.prototype||i==Object.prototype||(i[a]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof On=="object"&&On];for(var a=0;a<i.length;++a){var u=i[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var u=r;i=i.split(".");for(var h=0;h<i.length-1;h++){var v=i[h];if(!(v in u))break t;u=u[v]}i=i[i.length-1],h=u[i],a=a(h),a!=h&&a!=null&&t(u,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var u=0,h=!1,v={next:function(){if(!h&&u<i.length){var A=u++;return{value:a(A,i[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function p(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function I(i,a,u){return i.call.apply(i.bind,arguments)}function w(i,a,u){if(!i)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function S(i,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function C(i,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function D(i,a){function u(){}u.prototype=a.prototype,i.aa=a.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(h,v,A){for(var P=Array(arguments.length-2),$=2;$<arguments.length;$++)P[$-2]=arguments[$];return a.prototype[v].apply(h,P)}}function k(i){const a=i.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=i[h];return u}return[]}function N(i,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(f(h)){const v=i.length||0,A=h.length||0;i.length=v+A;for(let P=0;P<A;P++)i[v+P]=h[P]}else i.push(h)}}class K{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function lt(i){return lt[" "](i),i}lt[" "]=function(){};var Qt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function yt(i,a,u){for(const h in i)a.call(u,i[h],h,i)}function E(i,a){for(const u in i)a.call(void 0,i[u],u,i)}function d(i){const a={};for(const u in i)a[u]=i[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let u,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(u in h)i[u]=h[u];for(let A=0;A<g.length;A++)u=g[A],Object.prototype.hasOwnProperty.call(h,u)&&(i[u]=h[u])}}function y(i){var a=1;i=i.split(":");const u=[];for(;0<a&&i.length;)u.push(i.shift()),a--;return i.length&&u.push(i.join(":")),u}function T(i){c.setTimeout(()=>{throw i},0)}function m(){var i=dr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,u){const h=Pe.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var Pe=new K(()=>new tl,i=>i.reset());class tl{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Ve=!1,dr=new Dt,xi=()=>{const i=c.Promise.resolve(void 0);Ce=()=>{i.then(el)}};var el=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(u){T(u)}var a=Pe;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Ve=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var nl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return i}();function De(i,a){if(ut.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Qt){t:{try{lt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else u=="mouseover"?a=i.fromElement:u=="mouseout"&&(a=i.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:rl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&De.aa.h.call(this)}}D(De,ut);var rl={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),il=0;function sl(i,a,u,h,v){this.listener=i,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=v,this.key=++il,this.da=this.fa=!1}function mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function gn(i){this.src=i,this.g={},this.h=0}gn.prototype.add=function(i,a,u,h,v){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var P=mr(i,a,h,v);return-1<P?(a=i[P],u||(a.fa=!1)):(a=new sl(a,this.src,A,!!h,v),a.fa=u,i.push(a)),a};function pr(i,a){var u=a.type;if(u in i.g){var h=i.g[u],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(mn(a),i.g[u].length==0&&(delete i.g[u],i.h--))}}function mr(i,a,u,h){for(var v=0;v<i.length;++v){var A=i[v];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==h)return v}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),_r={};function ki(i,a,u,h,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)ki(i,a[A],u,h,v);return null}return u=Fi(u),i&&i[pn]?i.K(a,u,p(h)?!!h.capture:!1,v):ol(i,a,u,!1,h,v)}function ol(i,a,u,h,v,A){if(!a)throw Error("Invalid event type");var P=p(v)?!!v.capture:!!v,$=Er(i);if($||(i[gr]=$=new gn(i)),u=$.add(a,u,h,P,A),u.proxy)return u;if(h=al(),u.proxy=h,h.src=i,h.listener=u,i.addEventListener)nl||(v=P),v===void 0&&(v=!1),i.addEventListener(a.toString(),h,v);else if(i.attachEvent)i.attachEvent(Li(a.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function al(){function i(u){return a.call(i.src,i.listener,u)}const a=ll;return i}function Mi(i,a,u,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)Mi(i,a[A],u,h,v);else h=p(h)?!!h.capture:!!h,u=Fi(u),i&&i[pn]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],u=mr(A,u,h,v),-1<u&&(mn(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=Er(i))&&(a=i.g[a.toString()],i=-1,a&&(i=mr(a,u,h,v)),(u=-1<i?a[i]:null)&&yr(u))}function yr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[pn])pr(a.i,i);else{var u=i.type,h=i.proxy;a.removeEventListener?a.removeEventListener(u,h,i.capture):a.detachEvent?a.detachEvent(Li(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=Er(a))?(pr(u,i),u.h==0&&(u.src=null,a[gr]=null)):mn(i)}}}function Li(i){return i in _r?_r[i]:_r[i]="on"+i}function ll(i,a){if(i.da)i=!0;else{a=new De(a,this);var u=i.listener,h=i.ha||i.src;i.fa&&yr(i),i=u.call(h,a)}return i}function Er(i){return i=i[gr],i instanceof gn?i:null}var vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(i){return typeof i=="function"?i:(i[vr]||(i[vr]=function(a){return i.handleEvent(a)}),i[vr])}function ct(){Ft.call(this),this.i=new gn(this),this.M=this,this.F=null}D(ct,Ft),ct.prototype[pn]=!0,ct.prototype.removeEventListener=function(i,a,u,h){Mi(this,i,a,u,h)};function gt(i,a){var u,h=i.F;if(h)for(u=[];h;h=h.F)u.push(h);if(i=i.M,h=a.type||a,typeof a=="string")a=new ut(a,i);else if(a instanceof ut)a.target=a.target||i;else{var v=a;a=new ut(h,i),_(a,v)}if(v=!0,u)for(var A=u.length-1;0<=A;A--){var P=a.g=u[A];v=_n(P,h,!0,a)&&v}if(P=a.g=i,v=_n(P,h,!0,a)&&v,v=_n(P,h,!1,a)&&v,u)for(A=0;A<u.length;A++)P=a.g=u[A],v=_n(P,h,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var u=i.g[a],h=0;h<u.length;h++)mn(u[h]);delete i.g[a],i.h--}}this.F=null},ct.prototype.K=function(i,a,u,h){return this.i.add(String(i),a,!1,u,h)},ct.prototype.L=function(i,a,u,h){return this.i.add(String(i),a,!0,u,h)};function _n(i,a,u,h){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==u){var $=P.listener,rt=P.ha||P.src;P.fa&&pr(i.i,P),v=$.call(rt,h)!==!1&&v}}return v&&!h.defaultPrevented}function Ui(i,a,u){if(typeof i=="function")u&&(i=S(i,u));else if(i&&typeof i.handleEvent=="function")i=S(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Bi(i){i.g=Ui(()=>{i.g=null,i.i&&(i.i=!1,Bi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class ul extends Ft{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Bi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(i){Ft.call(this),this.h=i,this.g={}}D(Ne,Ft);var ji=[];function $i(i){yt(i.g,function(a,u){this.g.hasOwnProperty(u)&&yr(a)},i),i.g={}}Ne.prototype.N=function(){Ne.aa.N.call(this),$i(this)},Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=c.JSON.stringify,cl=c.JSON.parse,hl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Ir(){}Ir.prototype.h=null;function qi(i){return i.h||(i.h=i.i())}function Gi(){}var Oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ar(){ut.call(this,"d")}D(Ar,ut);function wr(){ut.call(this,"c")}D(wr,ut);var Xt={},zi=null;function yn(){return zi=zi||new ct}Xt.La="serverreachability";function Hi(i){ut.call(this,Xt.La,i)}D(Hi,ut);function xe(i){const a=yn();gt(a,new Hi(a))}Xt.STAT_EVENT="statevent";function Ki(i,a){ut.call(this,Xt.STAT_EVENT,i),this.stat=a}D(Ki,ut);function _t(i){const a=yn();gt(a,new Ki(a,i))}Xt.Ma="timingevent";function Wi(i,a){ut.call(this,Xt.Ma,i),this.size=a}D(Wi,ut);function ke(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Me(){this.g=!0}Me.prototype.xa=function(){this.g=!1};function fl(i,a,u,h,v,A){i.info(function(){if(i.g)if(A)for(var P="",$=A.split("&"),rt=0;rt<$.length;rt++){var B=$[rt].split("=");if(1<B.length){var ht=B[0];B=B[1];var ft=ht.split("_");P=2<=ft.length&&ft[1]=="type"?P+(ht+"="+B+"&"):P+(ht+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+u+`
`+P})}function dl(i,a,u,h,v,A,P){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+u+`
`+A+" "+P})}function he(i,a,u,h){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+ml(i,u)+(h?" "+h:"")})}function pl(i,a){i.info(function(){return"TIMEOUT: "+a})}Me.prototype.info=function(){};function ml(i,a){if(!i.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var h=u[i];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<v.length;P++)v[P]=""}}}}return Tr(u)}catch{return a}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rr;function vn(){}D(vn,Ir),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Rr=new vn;function Ut(i,a,u,h){this.j=i,this.i=a,this.l=u,this.R=h||1,this.U=new Ne(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xi}function Xi(){this.i=null,this.g="",this.h=!1}var Yi={},br={};function Sr(i,a,u){i.L=1,i.v=wn(Nt(a)),i.m=u,i.P=!0,Ji(i,null)}function Ji(i,a){i.F=Date.now(),Tn(i),i.A=Nt(i.v);var u=i.A,h=i.R;Array.isArray(h)||(h=[String(h)]),fs(u.i,"t",h),i.C=0,u=i.j.J,i.h=new Xi,i.g=Vs(i.j,u?a:null,!i.m),0<i.O&&(i.M=new ul(S(i.Y,i,i.g),i.O)),a=i.U,u=i.g,h=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(ji[0]=v.toString()),v=ji);for(var A=0;A<v.length;A++){var P=ki(u,v[A],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=i.H?d(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),xe(),fl(i.i,i.u,i.A,i.l,i.R,i.m)}Ut.prototype.ca=function(i){i=i.target;const a=this.M;a&&Ot(i)==3?a.j():this.Y(i)},Ut.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Ot(this.g);var a=this.g.Ba();const pe=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Es(this.g)))){this.J||ft!=4||a==7||(a==8||0>=pe?xe(3):xe(2)),Pr(this);var u=this.g.Z();this.X=u;e:if(Zi(this)){var h=Es(this.g);i="";var v=h.length,A=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Le(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(h[a],{stream:!(A&&a==v-1)});h.length=0,this.h.g+=i,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,dl(this.i,this.u,this.A,this.l,this.R,ft,u),this.o){if(this.T&&!this.K){e:{if(this.g){var $,rt=this.g;if(($=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H($)){var B=$;break e}}B=null}if(u=B)he(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cr(this,u);else{this.o=!1,this.s=3,_t(12),Yt(this),Le(this);break t}}if(this.P){u=!0;let It;for(;!this.J&&this.C<P.length;)if(It=gl(this,P),It==br){ft==4&&(this.s=4,_t(14),u=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Yi){this.s=4,_t(15),he(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else he(this.i,this.l,It,null),Cr(this,It);if(Zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||P.length!=0||this.h.h||(this.s=1,_t(16),u=!1),this.o=this.o&&u,!u)he(this.i,this.l,P,"[Invalid Chunked Response]"),Yt(this),Le(this);else if(0<P.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),kr(ht),ht.M=!0,_t(11))}}else he(this.i,this.l,P,null),Cr(this,P);ft==4&&Yt(this),this.o&&!this.J&&(ft==4?bs(this.j,this):(this.o=!1,Tn(this)))}else Ol(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Yt(this),Le(this)}}}catch{}finally{}};function Zi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function gl(i,a){var u=i.C,h=a.indexOf(`
`,u);return h==-1?br:(u=Number(a.substring(u,h)),isNaN(u)?Yi:(h+=1,h+u>a.length?br:(a=a.slice(h,h+u),i.C=h+u,a)))}Ut.prototype.cancel=function(){this.J=!0,Yt(this)};function Tn(i){i.S=Date.now()+i.I,ts(i,i.I)}function ts(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ke(S(i.ba,i),a)}function Pr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ut.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(pl(this.i,this.A),this.L!=2&&(xe(),_t(17)),Yt(this),this.s=2,Le(this)):ts(this,this.S-i)};function Le(i){i.j.G==0||i.J||bs(i.j,i)}function Yt(i){Pr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,$i(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Cr(i,a){try{var u=i.j;if(u.G!=0&&(u.g==i||Vr(u.h,i))){if(!i.K&&Vr(u.h,i)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Vn(u),Pn(u);else break t;xr(u),_t(18)}}else u.za=v[1],0<u.za-u.T&&37500>v[2]&&u.F&&u.v==0&&!u.C&&(u.C=ke(S(u.Za,u),6e3));if(1>=rs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Zt(u,11)}else if((i.K||u.g==i)&&Vn(u),!H(a))for(v=u.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(u.T=B[0],B=B[1],u.G==2)if(B[0]=="c"){u.K=B[1],u.ia=B[2];const ht=B[3];ht!=null&&(u.la=ht,u.j.info("VER="+u.la));const ft=B[4];ft!=null&&(u.Aa=ft,u.j.info("SVER="+u.Aa));const pe=B[5];pe!=null&&typeof pe=="number"&&0<pe&&(h=1.5*pe,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const It=i.g;if(It){const Nn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nn){var A=h.h;A.g||Nn.indexOf("spdy")==-1&&Nn.indexOf("quic")==-1&&Nn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Dr(A,A.h),A.h=null))}if(h.D){const Mr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Mr&&(h.ya=Mr,G(h.I,h.D,Mr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var P=i;if(h.qa=Cs(h,h.J?h.ia:null,h.W),P.K){is(h.h,P);var $=P,rt=h.L;rt&&($.I=rt),$.B&&(Pr($),Tn($)),h.g=P}else ws(h);0<u.i.length&&Cn(u)}else B[0]!="stop"&&B[0]!="close"||Zt(u,7);else u.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Zt(u,7):Or(u):B[0]!="noop"&&u.l&&u.l.ta(B),u.v=0)}}xe(4)}catch{}}var _l=class{constructor(i,a){this.g=i,this.map=a}};function es(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ns(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function rs(i){return i.h?1:i.g?i.g.size:0}function Vr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Dr(i,a){i.g?i.g.add(a):i.h=a}function is(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}es.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ss(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const u of i.g.values())a=a.concat(u.D);return a}return k(i.i)}function yl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(f(i)){for(var a=[],u=i.length,h=0;h<u;h++)a.push(i[h]);return a}a=[],u=0;for(h in i)a[u++]=i[h];return a}function El(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(f(i)||typeof i=="string"){var a=[];i=i.length;for(var u=0;u<i;u++)a.push(u);return a}a=[],u=0;for(const h in i)a[u++]=h;return a}}}function os(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(f(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var u=El(i),h=yl(i),v=h.length,A=0;A<v;A++)a.call(void 0,h[A],u&&u[A],i)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vl(i,a){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var h=i[u].indexOf("="),v=null;if(0<=h){var A=i[u].substring(0,h);v=i[u].substring(h+1)}else A=i[u];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Jt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Jt){this.h=i.h,In(this,i.j),this.o=i.o,this.g=i.g,An(this,i.s),this.l=i.l;var a=i.i,u=new Be;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ls(this,u),this.m=i.m}else i&&(a=String(i).match(as))?(this.h=!1,In(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),An(this,a[4]),this.l=Fe(a[5]||"",!0),ls(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}Jt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ue(a,us,!0),":");var u=this.g;return(u||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ue(a,us,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Ue(u,u.charAt(0)=="/"?Al:Il,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Ue(u,Rl)),i.join("")};function Nt(i){return new Jt(i)}function In(i,a,u){i.j=u?Fe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function An(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ls(i,a,u){a instanceof Be?(i.i=a,bl(i.i,i.h)):(u||(a=Ue(a,wl)),i.i=new Be(a,i.h))}function G(i,a,u){i.i.set(a,u)}function wn(i){return G(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Fe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ue(i,a,u){return typeof i=="string"?(i=encodeURI(i).replace(a,Tl),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Tl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var us=/[#\/\?@]/g,Il=/[#\?:]/g,Al=/[#\?]/g,wl=/[#\?@]/g,Rl=/#/g;function Be(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Bt(i){i.g||(i.g=new Map,i.h=0,i.i&&vl(i.i,function(a,u){i.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Be.prototype,n.add=function(i,a){Bt(this),this.i=null,i=fe(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(a),this.h+=1,this};function cs(i,a){Bt(i),a=fe(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function hs(i,a){return Bt(i),a=fe(i,a),i.g.has(a)}n.forEach=function(i,a){Bt(this),this.g.forEach(function(u,h){u.forEach(function(v){i.call(a,v,h,this)},this)},this)},n.na=function(){Bt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const v=i[h];for(let A=0;A<v.length;A++)u.push(a[h])}return u},n.V=function(i){Bt(this);let a=[];if(typeof i=="string")hs(this,i)&&(a=a.concat(this.g.get(fe(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)a=a.concat(i[u])}return a},n.set=function(i,a){return Bt(this),this.i=null,i=fe(this,i),hs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function fs(i,a,u){cs(i,a),0<u.length&&(i.i=null,i.g.set(fe(i,a),k(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const A=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var v=A;P[h]!==""&&(v+="="+encodeURIComponent(String(P[h]))),i.push(v)}}return this.i=i.join("&")};function fe(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function bl(i,a){a&&!i.j&&(Bt(i),i.i=null,i.g.forEach(function(u,h){var v=h.toLowerCase();h!=v&&(cs(this,h),fs(this,v,u))},i)),i.j=a}function Sl(i,a){const u=new Me;if(c.Image){const h=new Image;h.onload=C(jt,u,"TestLoadImage: loaded",!0,a,h),h.onerror=C(jt,u,"TestLoadImage: error",!1,a,h),h.onabort=C(jt,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(jt,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else a(!1)}function Pl(i,a){const u=new Me,h=new AbortController,v=setTimeout(()=>{h.abort(),jt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?jt(u,"TestPingServer: ok",!0,a):jt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),jt(u,"TestPingServer: error",!1,a)})}function jt(i,a,u,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(u)}catch{}}function Cl(){this.g=new hl}function Vl(i,a,u){const h=u||"";try{os(i,function(v,A){let P=v;p(v)&&(P=Tr(v)),a.push(h+A+"="+encodeURIComponent(P))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function Rn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(Rn,Ir),Rn.prototype.g=function(){return new bn(this.l,this.j)},Rn.prototype.i=function(i){return function(){return i}}({});function bn(i,a){ct.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(bn,ct),n=bn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,$e(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ds(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ds(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?je(this):$e(this),this.readyState==3&&ds(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,je(this))},n.Qa=function(i){this.g&&(this.response=i,je(this))},n.ga=function(){this.g&&je(this)};function je(i){i.readyState=4,i.l=null,i.j=null,i.v=null,$e(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=a.next();return i.join(`\r
`)};function $e(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ps(i){let a="";return yt(i,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Nr(i,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=ps(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):G(i,a,u))}function Q(i){ct.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Q,ct);var Dl=/^https?$/i,Nl=["POST","PUT"];n=Q.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rr.g(),this.v=this.o?qi(this.o):qi(Rr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){ms(this,A);return}if(i=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)u.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())u.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Nl,a,void 0))||h||v||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ys(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){ms(this,A)}};function ms(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,gs(i),Sn(i)}function gs(i){i.A||(i.A=!0,gt(i,"complete"),gt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,gt(this,"complete"),gt(this,"abort"),Sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_s(this):this.bb())},n.bb=function(){_s(this)};function _s(i){if(i.h&&typeof l<"u"&&(!i.v[1]||Ot(i)!=4||i.Z()!=2)){if(i.u&&Ot(i)==4)Ui(i.Ea,0,i);else if(gt(i,"readystatechange"),Ot(i)==4){i.h=!1;try{const P=i.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=P===0){var v=String(i.D).match(as)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!Dl.test(v?v.toLowerCase():"")}u=h}if(u)gt(i,"complete"),gt(i,"success");else{i.m=6;try{var A=2<Ot(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",gs(i)}}finally{Sn(i)}}}}function Sn(i,a){if(i.g){ys(i);const u=i.g,h=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||gt(i,"ready");try{u.onreadystatechange=h}catch{}}}function ys(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ot(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),cl(a)}};function Es(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ol(i){const a={};i=(i.g&&2<=Ot(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(H(i[h]))continue;var u=y(i[h]);const v=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[v]||[];a[v]=A,A.push(u)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qe(i,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||a}function vs(i){this.Aa=0,this.i=[],this.j=new Me,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qe("baseRetryDelayMs",5e3,i),this.cb=qe("retryDelaySeedMs",1e4,i),this.Wa=qe("forwardChannelMaxRetries",2,i),this.wa=qe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new es(i&&i.concurrentRequestLimit),this.Da=new Cl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vs.prototype,n.la=8,n.G=1,n.connect=function(i,a,u,h){_t(0),this.W=i,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=Cs(this,null,this.W),Cn(this)};function Or(i){if(Ts(i),i.G==3){var a=i.U++,u=Nt(i.I);if(G(u,"SID",i.K),G(u,"RID",a),G(u,"TYPE","terminate"),Ge(i,u),a=new Ut(i,i.j,a),a.L=2,a.v=wn(Nt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Vs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Ps(i)}function Pn(i){i.g&&(kr(i),i.g.cancel(),i.g=null)}function Ts(i){Pn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Vn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Cn(i){if(!ns(i.h)&&!i.s){i.s=!0;var a=i.Ga;Ce||xi(),Ve||(Ce(),Ve=!0),dr.add(a,i),i.B=0}}function xl(i,a){return rs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ke(S(i.Ga,i,a),Ss(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Ut(this,this.j,i);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=As(this,v,a),u=Nt(this.I),G(u,"RID",i),G(u,"CVER",22),this.D&&G(u,"X-HTTP-Session-Id",this.D),Ge(this,u),A&&(this.O?a="headers="+encodeURIComponent(String(ps(A)))+"&"+a:this.m&&Nr(u,this.m,A)),Dr(this.h,v),this.Ua&&G(u,"TYPE","init"),this.P?(G(u,"$req",a),G(u,"SID","null"),v.T=!0,Sr(v,u,null)):Sr(v,u,a),this.G=2}}else this.G==3&&(i?Is(this,i):this.i.length==0||ns(this.h)||Is(this))};function Is(i,a){var u;a?u=a.l:u=i.U++;const h=Nt(i.I);G(h,"SID",i.K),G(h,"RID",u),G(h,"AID",i.T),Ge(i,h),i.m&&i.o&&Nr(h,i.m,i.o),u=new Ut(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),a&&(i.i=a.D.concat(i.i)),a=As(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Dr(i.h,u),Sr(u,h,a)}function Ge(i,a){i.H&&yt(i.H,function(u,h){G(a,h,u)}),i.l&&os({},function(u,h){G(a,h,u)})}function As(i,a,u){u=Math.min(i.i.length,u);var h=i.l?S(i.l.Na,i.l,i):null;t:{var v=i.i;let A=-1;for(;;){const P=["count="+u];A==-1?0<u?(A=v[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let $=!0;for(let rt=0;rt<u;rt++){let B=v[rt].g;const ht=v[rt].map;if(B-=A,0>B)A=Math.max(0,v[rt].g-100),$=!1;else try{Vl(ht,P,"req"+B+"_")}catch{h&&h(ht)}}if($){h=P.join("&");break t}}}return i=i.i.splice(0,u),a.D=i,h}function ws(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Ce||xi(),Ve||(Ce(),Ve=!0),dr.add(a,i),i.v=0}}function xr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ke(S(i.Fa,i),Ss(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Rs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ke(S(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Pn(this),Rs(this))};function kr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Rs(i){i.g=new Ut(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Nt(i.qa);G(a,"RID","rpc"),G(a,"SID",i.K),G(a,"AID",i.T),G(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&G(a,"TO",i.ja),G(a,"TYPE","xmlhttp"),Ge(i,a),i.m&&i.o&&Nr(a,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=wn(Nt(a)),u.m=null,u.P=!0,Ji(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Pn(this),xr(this),_t(19))};function Vn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function bs(i,a){var u=null;if(i.g==a){Vn(i),kr(i),i.g=null;var h=2}else if(Vr(i.h,a))u=a.D,is(i.h,a),h=1;else return;if(i.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;h=yn(),gt(h,new Wi(h,u)),Cn(i)}else ws(i);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&xl(i,a)||h==2&&xr(i)))switch(u&&0<u.length&&(a=i.h,a.i=a.i.concat(u)),v){case 1:Zt(i,5);break;case 4:Zt(i,10);break;case 3:Zt(i,6);break;default:Zt(i,2)}}}function Ss(i,a){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*a}function Zt(i,a){if(i.j.info("Error code "+a),a==2){var u=S(i.fb,i),h=i.Xa;const v=!h;h=new Jt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||In(h,"https"),wn(h),v?Sl(h.toString(),u):Pl(h.toString(),u)}else _t(2);i.G=0,i.l&&i.l.sa(a),Ps(i),Ts(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ps(i){if(i.G=0,i.ka=[],i.l){const a=ss(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ka,a),N(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Cs(i,a,u){var h=u instanceof Jt?Nt(u):new Jt(u);if(h.g!="")a&&(h.g=a+"."+h.g),An(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Jt(null);h&&In(A,h),a&&(A.g=a),v&&An(A,v),u&&(A.l=u),h=A}return u=i.D,a=i.ya,u&&a&&G(h,u,a),G(h,"VER",i.la),Ge(i,h),h}function Vs(i,a,u){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Q(new Rn({eb:u})):new Q(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ds(){}n=Ds.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Dn(){}Dn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ct.call(this),this.g=new vs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new de(this)}D(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Or(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Tr(i),i=u);a.i.push(new _l(a.Ya++,i)),a.G==3&&Cn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,Tt.aa.N.call(this)};function Ns(i){Ar.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const u in a){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}D(Ns,Ar);function Os(){wr.call(this),this.status=1}D(Os,wr);function de(i){this.g=i}D(de,Ds),de.prototype.ua=function(){gt(this.g,"a")},de.prototype.ta=function(i){gt(this.g,new Ns(i))},de.prototype.sa=function(i){gt(this.g,new Os)},de.prototype.ra=function(){gt(this.g,"b")},Dn.prototype.createWebChannel=Dn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Wo=function(){return new Dn},Ko=function(){return yn()},Ho=Xt,Qr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Fn=En,Qi.COMPLETE="complete",zo=Qi,Gi.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",ct.prototype.listen=ct.prototype.K,He=Gi,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,Go=Q}).apply(typeof On<"u"?On:typeof self<"u"?self:typeof window<"u"?window:{});const zs="@firebase/firestore",Hs="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new Fo("@firebase/firestore");function me(){return se.logLevel}function V(n,...t){if(se.logLevel<=F.DEBUG){const e=t.map(hi);se.debug(`Firestore (${Re}): ${n}`,...e)}}function oe(n,...t){if(se.logLevel<=F.ERROR){const e=t.map(hi);se.error(`Firestore (${Re}): ${n}`,...e)}}function rr(n,...t){if(se.logLevel<=F.WARN){const e=t.map(hi);se.warn(`Firestore (${Re}): ${n}`,...e)}}function hi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: `+n;throw oe(t),new Error(t)}function Y(n,t){n||M()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends we{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Tc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Ic{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ac{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new Qo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new pt(t)}}class wc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Rc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new wc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ks{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bc{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ic(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ks(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Ks(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Sc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function Xr(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=Pc(),l=Cc(o.encode(Ws(n,e)),o.encode(Ws(t,e)));return l!==0?l:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function Ws(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Cc(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Ee(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-62135596800,Xs=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Xs);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Qs)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xs}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Qs;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new nt(0,0))}static max(){return new z(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=bt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),s=bt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?bt.extractNumericId(t).compare(bt.extractNumericId(e)):Xr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ci.fromString(t.substring(4,t.length-2))}}class X extends bt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Vc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends bt{construct(t,e,r){return new ot(t,e,r)}static isValidIdentifier(t){return Vc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ys}static keyField(){return new ot([Ys])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(r+=c,s++):(o(),s++)}if(o(),l)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function Dc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new zt(s,x.empty(),t)}function Nc(n){return new zt(n.readTime,n.key,en)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(z.min(),x.empty(),en)}static max(){return new zt(z.max(),x.empty(),en)}}function Oc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==xc)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},f=>r(f))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const o=t.length,l=new Array(o);let c=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(I=>{l[p]=I,++c,c===o&&r(l)},I=>s(I))}})}static doWhile(t,e){return new R((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Mc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}di.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=-1;function mi(n){return n==null}function Hn(n){return n===0&&1/n==-1/0}function Lc(n){return typeof n=="number"&&Number.isInteger(n)&&!Hn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="";function Fc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Js(t)),t=Uc(n.get(e),t);return Js(t)}function Uc(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Yo:e+="";break;default:e+=o}}return e}function Js(n){return n+Yo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function be(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Jo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xn(this.root,t,this.comparator,!0)}}class xn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new it(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,o){return this}insert(t,e,r){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new at(ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Bc("Invalid base64 string: "+o):o}}(t);return new Pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const jc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(Y(!!n),typeof n=="string"){let t=0;const e=jc.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="server_timestamp",ta="__type__",ea="__previous_value__",na="__local_write_time__";function gi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[ta])===null||e===void 0?void 0:e.stringValue)===Zo}function _i(n){const t=n.mapValue.fields[ea];return gi(t)?_i(t):t}function Kn(n){const t=ae(n.mapValue.fields[na].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,r,s,o,l,c,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p}}const Wn="(default)";class Qn{constructor(t,e){this.projectId=t,this.database=e||Wn}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database===Wn}isEqual(t){return t instanceof Qn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="__type__",qc="__max__",kn={mapValue:{}},ia="__vector__",Yr="value";function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gi(n)?4:zc(n)?9007199254740991:Gc(n)?10:11:M()}function Ct(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Kn(n).isEqual(Kn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ae(s.timestampValue),c=ae(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ve(s.bytesValue).isEqual(ve(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=st(s.doubleValue),c=st(o.doubleValue);return l===c?Hn(l)===Hn(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return Ee(n.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Zs(l)!==Zs(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!Ct(l[f],c[f])))return!1;return!0}(n,t);default:return M()}}function nn(n,t){return(n.values||[]).find(e=>Ct(e,t))!==void 0}function Te(n,t){if(n===t)return 0;const e=le(n),r=le(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=st(o.integerValue||o.doubleValue),f=st(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return eo(n.timestampValue,t.timestampValue);case 4:return eo(Kn(n),Kn(t));case 5:return Xr(n.stringValue,t.stringValue);case 6:return function(o,l){const c=ve(o),f=ve(l);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),f=l.split("/");for(let p=0;p<c.length&&p<f.length;p++){const I=U(c[p],f[p]);if(I!==0)return I}return U(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=U(st(o.latitude),st(l.latitude));return c!==0?c:U(st(o.longitude),st(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return no(n.arrayValue,t.arrayValue);case 10:return function(o,l){var c,f,p,I;const w=o.fields||{},S=l.fields||{},C=(c=w[Yr])===null||c===void 0?void 0:c.arrayValue,D=(f=S[Yr])===null||f===void 0?void 0:f.arrayValue,k=U(((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0,((I=D==null?void 0:D.values)===null||I===void 0?void 0:I.length)||0);return k!==0?k:no(C,D)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===kn.mapValue&&l===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(l===kn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),p=l.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const S=Xr(f[w],I[w]);if(S!==0)return S;const C=Te(c[f[w]],p[I[w]]);if(C!==0)return C}return U(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function eo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ae(n),r=ae(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function no(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Te(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function Ie(n){return Jr(n)}function Jr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ve(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Jr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of r)o?o=!1:s+=",",s+=`${l}:${Jr(e.fields[l])}`;return s+"}"}(n.mapValue):M()}function Un(n){switch(le(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_i(n);return t?16+Un(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Un(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return be(r.fields,(o,l)=>{s+=o.length+Un(l)}),s}(n.mapValue);default:throw M()}}function Zr(n){return!!n&&"integerValue"in n}function yi(n){return!!n&&"arrayValue"in n}function Bn(n){return!!n&&"mapValue"in n}function Gc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[ra])===null||e===void 0?void 0:e.stringValue)===ia}function Ke(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return be(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ke(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ke(n.arrayValue.values[e]);return t}return Object.assign({},n)}function zc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ke(e)}setAll(t){let e=ot.emptyPath(),r={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,r,s),r={},s=[],e=c.popLast()}l?r[c.lastSegment()]=Ke(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){be(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(Ke(this.value))}}function sa(n){const t=[];return be(n.fields,(e,r)=>{const s=new ot([e]);if(Bn(r)){const o=sa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,o,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new At(t,0,z.min(),z.min(),z.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,z.min(),z.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,z.min(),z.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.position=t,this.inclusive=e}}function ro(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(l.referenceValue),e.key):r=Te(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function io(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ct(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Hc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{}class et extends oa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Wc(t,e,r):e==="array-contains"?new Yc(t,r):e==="in"?new Jc(t,r):e==="not-in"?new Zc(t,r):e==="array-contains-any"?new th(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Qc(t,r):new Xc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Te(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends oa{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ht(t,e)}matches(t){return aa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function aa(n){return n.op==="and"}function la(n){return Kc(n)&&aa(n)}function Kc(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function ti(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ie(n.value);if(la(n))return n.filters.map(t=>ti(t)).join(",");{const t=n.filters.map(e=>ti(e)).join(",");return`${n.op}(${t})`}}function ua(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Ct(r.value,s.value)}(n,t):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,l,c)=>o&&ua(l,s.filters[c]),!0):!1}(n,t):void M()}function ca(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(ca).join(" ,")+"}"}(n):"Filter"}class Wc extends et{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qc extends et{constructor(t,e){super(t,"in",e),this.keys=ha("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xc extends et{constructor(t,e){super(t,"not-in",e),this.keys=ha("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ha(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class Yc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yi(e)&&nn(e.arrayValue,this.value)}}class Jc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class Zc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!nn(this.value.arrayValue,e)}}class th extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e=null,r=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.le=null}}function so(n,t=null,e=[],r=[],s=null,o=null,l=null){return new eh(n,t,e,r,s,o,l)}function Ei(n){const t=q(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ti(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),mi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ie(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ie(r)).join(",")),t.le=e}return t.le}function vi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Hc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ua(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!io(n.startAt,t.startAt)&&io(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e=null,r=[],s=[],o=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function nh(n,t,e,r,s,o,l,c){return new ir(n,t,e,r,s,o,l,c)}function rh(n){return new ir(n)}function oo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ih(n){return n.collectionGroup!==null}function We(n){const t=q(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new at(ot.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Yn(o,r))}),e.has(ot.keyField().canonicalString())||t.he.push(new Yn(ot.keyField(),r))}return t.he}function ie(n){const t=q(n);return t.Pe||(t.Pe=sh(t,We(n))),t.Pe}function sh(n,t){if(n.limitType==="F")return so(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Yn(s.field,o)});const e=n.endAt?new Xn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xn(n.startAt.position,n.startAt.inclusive):null;return so(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ei(n,t,e){return new ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function fa(n,t){return vi(ie(n),ie(t))&&n.limitType===t.limitType}function da(n){return`${Ei(ie(n))}|lt:${n.limitType}`}function ze(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ca(s)).join(", ")}]`),mi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ie(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ie(s)).join(",")),`Target(${r})`}(ie(n))}; limitType=${n.limitType})`}function Ti(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of We(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(l,c,f){const p=ro(l,c,f);return l.inclusive?p<=0:p<0}(r.startAt,We(r),s)||r.endAt&&!function(l,c,f){const p=ro(l,c,f);return l.inclusive?p>=0:p>0}(r.endAt,We(r),s))}(n,t)}function oh(n){return(t,e)=>{let r=!1;for(const s of We(n)){const o=ah(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ah(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,l,c){const f=l.data.field(o),p=c.data.field(o);return f!==null&&p!==null?Te(f,p):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){be(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Jo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new vt(x.comparator);function Jn(){return lh}const pa=new vt(x.comparator);function Mn(...n){let t=pa;for(const e of n)t=t.insert(e.key,e);return t}function ma(n){let t=pa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ne(){return Qe()}function ga(){return Qe()}function Qe(){return new ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const uh=new vt(x.comparator),ch=new at(x.comparator);function mt(...n){let t=ch;for(const e of n)t=t.add(e);return t}const hh=new at(U);function fh(){return hh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(t)?"-0":t}}function _a(n){return{integerValue:""+n}}function dh(n,t){return Lc(t)?_a(t):Ii(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this._=void 0}}function ph(n,t,e){return n instanceof rn?function(s,o){const l={fields:{[ta]:{stringValue:Zo},[na]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&gi(o)&&(o=_i(o)),o&&(l.fields[ea]=o),{mapValue:l}}(e,t):n instanceof sn?Ea(n,t):n instanceof on?va(n,t):function(s,o){const l=ya(s,o),c=ao(l)+ao(s.Ie);return Zr(l)&&Zr(s.Ie)?_a(c):Ii(s.serializer,c)}(n,t)}function mh(n,t,e){return n instanceof sn?Ea(n,t):n instanceof on?va(n,t):e}function ya(n,t){return n instanceof Zn?function(r){return Zr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rn extends sr{}class sn extends sr{constructor(t){super(),this.elements=t}}function Ea(n,t){const e=Ta(t);for(const r of n.elements)e.some(s=>Ct(s,r))||e.push(r);return{arrayValue:{values:e}}}class on extends sr{constructor(t){super(),this.elements=t}}function va(n,t){let e=Ta(t);for(const r of n.elements)e=e.filter(s=>!Ct(s,r));return{arrayValue:{values:e}}}class Zn extends sr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ao(n){return st(n.integerValue||n.doubleValue)}function Ta(n){return yi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e){this.field=t,this.transform=e}}function _h(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof sn&&s instanceof sn||r instanceof on&&s instanceof on?Ee(r.elements,s.elements,Ct):r instanceof Zn&&s instanceof Zn?Ct(r.Ie,s.Ie):r instanceof rn&&s instanceof rn}(n.transform,t.transform)}class yh{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class or{}function Ia(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new wa(n.key,xt.none()):new cn(n.key,n.data,xt.none());{const e=n.data,r=wt.empty();let s=new at(ot.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),s=s.add(o)}return new ce(n.key,r,new Rt(s.toArray()),xt.none())}}function Eh(n,t,e){n instanceof cn?function(s,o,l){const c=s.value.clone(),f=uo(s.fieldTransforms,o,l.transformResults);c.setAll(f),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(s,o,l){if(!jn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=uo(s.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Aa(s)),f.setAll(c),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Xe(n,t,e,r){return n instanceof cn?function(o,l,c,f){if(!jn(o.precondition,l))return c;const p=o.value.clone(),I=co(o.fieldTransforms,f,l);return p.setAll(I),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,t,e,r):n instanceof ce?function(o,l,c,f){if(!jn(o.precondition,l))return c;const p=co(o.fieldTransforms,f,l),I=l.data;return I.setAll(Aa(o)),I.setAll(p),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,l,c){return jn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function vh(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ya(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function lo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ee(r,s,(o,l)=>_h(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cn extends or{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ce extends or{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Aa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function uo(n,t,e){const r=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);r.set(o.field,mh(l,c,e[s]))}return r}function co(n,t,e){const r=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);r.set(s.field,ph(o,l,t))}return r}class wa extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Th extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Eh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ga();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const f=Ia(l,c);f!==null&&r.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),mt())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(e,r)=>lo(e,r))&&Ee(this.baseMutations,t.baseMutations,(e,r)=>lo(e,r))}}class Ai{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length);let s=function(){return uh}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,r[l].version);return new Ai(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,L;function wh(n){switch(n){case b.OK:return M();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return M()}}function Rh(n){if(n===void 0)return oe("GRPC error has no .code"),b.UNKNOWN;switch(n){case J.OK:return b.OK;case J.CANCELLED:return b.CANCELLED;case J.UNKNOWN:return b.UNKNOWN;case J.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case J.INTERNAL:return b.INTERNAL;case J.UNAVAILABLE:return b.UNAVAILABLE;case J.UNAUTHENTICATED:return b.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case J.NOT_FOUND:return b.NOT_FOUND;case J.ALREADY_EXISTS:return b.ALREADY_EXISTS;case J.PERMISSION_DENIED:return b.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case J.ABORTED:return b.ABORTED;case J.OUT_OF_RANGE:return b.OUT_OF_RANGE;case J.UNIMPLEMENTED:return b.UNIMPLEMENTED;case J.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(L=J||(J={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ci([4294967295,4294967295],0);class bh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ni(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Sh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ph(n,t){return ni(n,t.toTimestamp())}function ye(n){return Y(!!n),z.fromTimestamp(function(e){const r=ae(e);return new nt(r.seconds,r.nanos)}(n))}function Ra(n,t){return ri(n,t).canonicalString()}function ri(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ch(n){const t=X.fromString(n);return Y(Lh(t)),t}function ii(n,t){return Ra(n.databaseId,t.path)}function Vh(n){const t=Ch(n);return t.length===4?X.emptyPath():Nh(t)}function Dh(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nh(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ho(n,t,e){return{name:ii(n,t),fields:e.value.mapValue.fields}}function Oh(n,t){let e;if(t instanceof cn)e={update:ho(n,t.key,t.value)};else if(t instanceof wa)e={delete:ii(n,t.key)};else if(t instanceof ce)e={update:ho(n,t.key,t.data),updateMask:Mh(t.fieldMask)};else{if(!(t instanceof Th))return M();e={verify:ii(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof rn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof sn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof on)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zn)return{fieldPath:l.field.canonicalString(),increment:c.Ie};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ph(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function xh(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?ye(s.updateTime):ye(o);return l.isEqual(z.min())&&(l=ye(o)),new yh(l,s.transformResults||[])}(e,t))):[]}function kh(n){let t=Vh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const S=ba(w);return S instanceof Ht&&la(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(S=>function(D){return new Yn(ge(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,mi(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,C=w.values||[];return new Xn(C,S)}(e.startAt));let p=null;return e.endAt&&(p=function(w){const S=!w.before,C=w.values||[];return new Xn(C,S)}(e.endAt)),nh(t,s,l,o,c,"F",f,p)}function ba(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ge(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ge(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ge(e.unaryFilter.field);return et.create(l,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ge(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>ba(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function ge(n){return ot.fromServerFormat(n.fieldPath)}function Mh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Lh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t){this.Tt=t}}function Uh(n){const t=kh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ei(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.Tn=new jh}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class jh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new at(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new at(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sa=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Sa,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ae(0)}static Kn(){return new Ae(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="LruGarbageCollector",$h=1048576;function mo([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class qh{constructor(t){this.Hn=t,this.buffer=new at(mo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();mo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Gh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){V(po,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){un(e)?V(po,"Ignoring IndexedDB error during garbage collection: ",e):await fi(e)}await this.er(3e5)})}}class zh{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(di.ae);const r=new qh(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(fo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fo):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,l,c,f,p;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,l=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,c=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(p=Date.now(),me()<=F.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${s} in `+(c-l)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${w} documents in `+(p-f)+`ms
Total Duration: ${p-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function Hh(n,t){return new zh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.changes=new ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Xe(r.mutation,s,Rt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,mt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=mt()){const s=ne();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let l=Mn();return o.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,mt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,r,s){let o=Jn();const l=Qe(),c=function(){return Qe()}();return e.forEach((f,p)=>{const I=r.get(p.key);s.has(p.key)&&(I===void 0||I.mutation instanceof ce)?o=o.insert(p.key,p):I!==void 0?(l.set(p.key,I.mutation.getFieldMask()),Xe(I.mutation,p,I.mutation.getFieldMask(),nt.now())):l.set(p.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,I)=>l.set(p,I)),e.forEach((p,I)=>{var w;return c.set(p,new Wh(I,(w=l.get(p))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Qe();let s=new vt((l,c)=>l-c),o=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let I=r.get(f)||Rt.empty();I=c.applyToLocalView(p,I),r.set(f,I);const w=(s.get(c.batchId)||mt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,I=f.value,w=ga();I.forEach(S=>{if(!o.has(S)){const C=Ia(e.get(S),r.get(S));C!==null&&w.set(S,C),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,p,w))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(l){return x.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ih(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(ne());let c=en,f=o;return l.next(p=>R.forEach(p,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,mt())).next(I=>({batchId:c,changes:ma(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=Mn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let l=Mn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const p=function(w,S){return new ir(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,s).next(I=>{I.forEach((w,S)=>{l=l.insert(w,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(l=>{o.forEach((f,p)=>{const I=p.getKey();l.get(I)===null&&(l=l.insert(I,At.newInvalidDocument(I)))});let c=Mn();return l.forEach((f,p)=>{const I=o.get(f);I!==void 0&&Xe(I.mutation,p,Rt.empty(),nt.now()),Ti(e,p)&&(c=c.insert(f,p))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ye(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:Uh(s.bundledQuery),readTime:ye(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.overlays=new vt(x.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=ne(),o=e.length+1,l=new x(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new vt((p,I)=>p-I);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let I=o.get(p.largestBatchId);I===null&&(I=ne(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const c=ne(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,I)=>c.set(p,I)),!(c.size()>=s)););return R.resolve(c)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Ah(e,r));let o=this.Rr.get(e);o===void 0&&(o=mt(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.Vr=new at(tt.mr),this.gr=new at(tt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new tt(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new tt(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new x(new X([])),r=new tt(e,t),s=new tt(e,t+1),o=[];return this.gr.forEachInRange([r,s],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new x(new X([])),r=new tt(e,t),s=new tt(e,t+1);let o=mt();return this.gr.forEachInRange([r,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new tt(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class tt{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return x.comparator(t.key,e.key)||U(t.Cr,e.Cr)}static pr(t,e){return U(t.Cr,e.Cr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new at(tt.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Ih(o,e,r,s);this.mutationQueue.push(l);for(const c of s)this.Mr=this.Mr.add(new tt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?pi:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],l=>{const c=this.Or(l.Cr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(U);return e.forEach(s=>{const o=new tt(s,0),l=new tt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],c=>{r=r.add(c.Cr)})}),R.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const l=new tt(new x(o),0);let c=new at(U);return this.Mr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(c=c.add(f.Cr)),!0)},l),R.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return R.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new tt(e,0),s=this.Mr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.kr=t,this.docs=function(){return new vt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,l=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Jn();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Jn();const l=e.path,c=new x(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Oc(Nc(I),r)<=0||(s.has(I.key)||Ti(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M()}qr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new ef(this)}getSize(t){return R.resolve(this.size)}}class ef extends Kh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.persistence=t,this.Qr=new ue(e=>Ei(e),vi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.$r=0,this.Ur=new wi,this.targetCount=0,this.Kr=Ae.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Ae(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new di(0),this.zr=!1,this.zr=!0,this.jr=new Jh,this.referenceDelegate=t(this),this.Hr=new nf(this),this.indexManager=new Bh,this.remoteDocumentCache=function(s){return new tf(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Fh(e),this.Yr=new Xh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Yh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Zh(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const s=new rf(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class rf extends kc{constructor(t){super(),this.currentSequenceNumber=t}}class Ri{constructor(t){this.persistence=t,this.ti=new wi,this.ni=null}static ri(t){return new Ri(t)}get ii(){if(this.ni)return this.ni;throw M()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,r=>{const s=x.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class tr{constructor(t,e){this.persistence=t,this.oi=new ue(r=>Fc(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Hh(this,e)}static ri(t,e){return new tr(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,l=>this.ar(t,l,e).next(c=>{c||(r++,o.removeEntry(l,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Un(t.data.value)),e}ar(t,e,r){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=mt(),s=mt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new bi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return eu()?8:Mc(Zl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new sf;return this._s(t,e,l).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,l,c.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(me()<=F.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(me()<=F.DEBUG&&V("QueryEngine","Query:",ze(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(me()<=F.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ie(e))):R.resolve())}rs(t,e){if(oo(e))return R.resolve(null);let r=ie(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ei(e,null,"F"),r=ie(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=mt(...o);return this.ns.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,r).next(f=>{const p=this.cs(e,c);return this.ls(e,p,l,f.readTime)?this.rs(t,ei(e,null,"F")):this.hs(t,p,e,f)}))})))}ss(t,e,r,s){return oo(e)||s.isEqual(z.min())?R.resolve(null):this.ns.getDocuments(t,r).next(o=>{const l=this.cs(e,o);return this.ls(e,l,r,s)?R.resolve(null):(me()<=F.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ze(e)),this.hs(t,l,e,Dc(s,en)).next(c=>c))})}cs(t,e){let r=new at(oh(t));return e.forEach((s,o)=>{Ti(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return me()<=F.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ze(e)),this.ns.getDocumentsMatchingQuery(t,e,zt.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="LocalStore";class lf{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new vt(U),this.Is=new ue(o=>Ei(o),vi),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function uf(n,t,e,r){return new lf(n,t,e,r)}async function Ca(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let f=mt();for(const p of s){l.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){c.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next(p=>({Rs:p,removedBatchIds:l,addedBatchIds:c}))})})}function cf(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,f,p,I){const w=p.batch,S=w.keys();let C=R.resolve();return S.forEach(D=>{C=C.next(()=>I.getEntry(f,D)).next(k=>{const N=p.docVersions.get(D);Y(N!==null),k.version.compareTo(N)<0&&(w.applyToRemoteDocument(k,p),k.isValidDocument()&&(k.setReadTime(p.commitVersion),I.addEntry(k)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let f=mt();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function hf(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function ff(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=pi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class go{constructor(){this.activeTargetIds=fh()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class df{constructor(){this.ho=new go,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new go,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="ConnectivityMonitor";class yo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(_o,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){V(_o,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=null;function si(){return Ln===null?Ln=function(){return 268435456+Math.round(2147483648*Math.random())}():Ln++,"0x"+Ln.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="RestConnection",mf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gf{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Wn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const l=si(),c=this.bo(t,e.toUriEncodedString());V(jr,`Sending RPC '${t}' ${l}:`,c,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,s,o),this.vo(t,c,f,r).then(p=>(V(jr,`Received RPC '${t}' ${l}: `,p),p),p=>{throw rr(jr,`RPC '${t}' ${l} failed with error: `,p,"url: ",c,"request:",r),p})}Co(t,e,r,s,o,l){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Re}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=mf[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class yf extends gf{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=si();return new Promise((l,c)=>{const f=new Go;f.setWithCredentials(!0),f.listenOnce(zo.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Fn.NO_ERROR:const I=f.getResponseJson();V(dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case Fn.TIMEOUT:V(dt,`RPC '${t}' ${o} timed out`),c(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fn.HTTP_ERROR:const w=f.getStatus();if(V(dt,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const D=function(N){const K=N.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(K)>=0?K:b.UNKNOWN}(C.status);c(new O(D,C.message))}else c(new O(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new O(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(dt,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(s);V(dt,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",p,r,15)})}Wo(t,e,r){const s=si(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Wo(),c=Ko(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");V(dt,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=l.createWebChannel(I,f);let S=!1,C=!1;const D=new _f({Fo:N=>{C?V(dt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(V(dt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),V(dt,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},Mo:()=>w.close()}),k=(N,K,H)=>{N.listen(K,W=>{try{H(W)}catch(lt){setTimeout(()=>{throw lt},0)}})};return k(w,He.EventType.OPEN,()=>{C||(V(dt,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),k(w,He.EventType.CLOSE,()=>{C||(C=!0,V(dt,`RPC '${t}' stream ${s} transport closed`),D.Uo())}),k(w,He.EventType.ERROR,N=>{C||(C=!0,rr(dt,`RPC '${t}' stream ${s} transport errored:`,N),D.Uo(new O(b.UNAVAILABLE,"The operation could not be completed")))}),k(w,He.EventType.MESSAGE,N=>{var K;if(!C){const H=N.data[0];Y(!!H);const W=H,lt=(W==null?void 0:W.error)||((K=W[0])===null||K===void 0?void 0:K.error);if(lt){V(dt,`RPC '${t}' stream ${s} received error:`,lt);const Qt=lt.status;let yt=function(g){const _=J[g];if(_!==void 0)return Rh(_)}(Qt),E=lt.message;yt===void 0&&(yt=b.INTERNAL,E="Unknown error status: "+Qt+" with message "+lt.message),C=!0,D.Uo(new O(yt,E)),w.close()}else V(dt,`RPC '${t}' stream ${s} received:`,H),D.Ko(H)}}),k(c,Ho.STAT_EVENT,N=>{N.stat===Qr.PROXY?V(dt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Qr.NOPROXY&&V(dt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){return new bh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="PersistentStream";class Ef{constructor(t,e,r,s,o,l,c,f){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Va(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return V(Eo,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(V(Eo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vf extends Ef{constructor(t,e,r,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=xh(t.writeResults,t.commitTime),r=ye(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Dh(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Oh(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{}class If extends Tf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(t,ri(e,r),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(b.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Co(t,ri(e,r),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new O(b.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Af{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(oe(e),this.N_=!1):V("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="RemoteStore";class wf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{r.enqueueAndForget(async()=>{dn(this)&&(V(hn,"Restarting streams for network reachability change."),await async function(f){const p=q(f);p.W_.add(4),await fn(p),p.j_.set("Unknown"),p.W_.delete(4),await lr(p)}(this))})}),this.j_=new Af(r,s)}}async function lr(n){if(dn(n))for(const t of n.G_)await t(!0)}async function fn(n){for(const t of n.G_)await t(!1)}function dn(n){return q(n).W_.size===0}async function Da(n,t,e){if(!un(t))throw t;n.W_.add(1),await fn(n),n.j_.set("Offline"),e||(e=()=>hf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(hn,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await lr(n)})}function Na(n,t){return t().catch(e=>Da(n,e,t))}async function ur(n){const t=q(n),e=Kt(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:pi;for(;Rf(t);)try{const s=await ff(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,bf(t,s)}catch(s){await Da(t,s)}Oa(t)&&xa(t)}function Rf(n){return dn(n)&&n.U_.length<10}function bf(n,t){n.U_.push(t);const e=Kt(n);e.c_()&&e.S_&&e.b_(t.mutations)}function Oa(n){return dn(n)&&!Kt(n).u_()&&n.U_.length>0}function xa(n){Kt(n).start()}async function Sf(n){Kt(n).C_()}async function Pf(n){const t=Kt(n);for(const e of n.U_)t.b_(e.mutations)}async function Cf(n,t,e){const r=n.U_.shift(),s=Ai.from(r,t,e);await Na(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ur(n)}async function Vf(n,t){t&&Kt(n).S_&&await async function(r,s){if(function(l){return wh(l)&&l!==b.ABORTED}(s.code)){const o=r.U_.shift();Kt(r).h_(),await Na(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ur(r)}}(n,t),Oa(n)&&xa(n)}async function vo(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V(hn,"RemoteStore received new credentials");const r=dn(e);e.W_.add(3),await fn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await lr(e)}async function Df(n,t){const e=q(n);t?(e.W_.delete(2),await lr(e)):t||(e.W_.add(2),await fn(e),e.j_.set("Unknown"))}function Kt(n){return n.Y_||(n.Y_=function(e,r,s){const o=q(e);return o.M_(),new vf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Sf.bind(null,n),Lo:Vf.bind(null,n),D_:Pf.bind(null,n),v_:Cf.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await ur(n)):(await n.Y_.stop(),n.U_.length>0&&(V(hn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const l=Date.now()+r,c=new Si(t,e,l,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ka(n,t){if(oe("AsyncQueue",`${t}: ${n}`),un(n))return new O(b.UNAVAILABLE,`${t}: ${n}`);throw n}class Nf{constructor(){this.queries=To(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=q(e),o=s.queries;s.queries=To(),o.forEach((l,c)=>{for(const f of c.ta)f.onError(r)})})(this,new O(b.ABORTED,"Firestore shutting down"))}}function To(){return new ue(n=>da(n),fa)}function Of(n){n.ia.forEach(t=>{t.next()})}var Io,Ao;(Ao=Io||(Io={}))._a="default",Ao.Cache="cache";const xf="SyncEngine";class kf{constructor(t,e,r,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new ue(c=>da(c),fa),this.qa=new Map,this.Qa=new Set,this.$a=new vt(x.comparator),this.Ua=new Map,this.Ka=new wi,this.Wa={},this.Ga=new Map,this.za=Ae.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Mf(n,t,e){const r=Bf(n);try{const s=await function(l,c){const f=q(l),p=nt.now(),I=c.reduce((C,D)=>C.add(D.key),mt());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Jn(),k=mt();return f.ds.getEntries(C,I).next(N=>{D=N,D.forEach((K,H)=>{H.isValidDocument()||(k=k.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,D)).next(N=>{w=N;const K=[];for(const H of c){const W=vh(H,w.get(H.key).overlayedDocument);W!=null&&K.push(new ce(H.key,W,sa(W.value.mapValue),xt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,p,K,c)}).next(N=>{S=N;const K=N.applyToLocalDocumentSet(w,k);return f.documentOverlayCache.saveOverlays(C,N.batchId,K)})}).then(()=>({batchId:S.batchId,changes:ma(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(l,c,f){let p=l.Wa[l.currentUser.toKey()];p||(p=new vt(U)),p=p.insert(c,f),l.Wa[l.currentUser.toKey()]=p}(r,s.batchId,e),await cr(r,s.changes),await ur(r.remoteStore)}catch(s){const o=ka(s,"Failed to persist write");e.reject(o)}}function wo(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,l)=>{const c=l.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const f=q(l);f.onlineState=c;let p=!1;f.queries.forEach((I,w)=>{for(const S of w.ta)S.sa(c)&&(p=!0)}),p&&Of(f)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Lf(n,t){const e=q(n),r=t.batch.batchId;try{const s=await cf(e.localStore,t);La(e,r,null),Ma(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await cr(e,s)}catch(s){await fi(s)}}async function Ff(n,t,e){const r=q(n);try{const s=await function(l,c){const f=q(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let I;return f.mutationQueue.lookupMutationBatch(p,c).next(w=>(Y(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(p,w))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I)).next(()=>f.localDocuments.getDocuments(p,I))})}(r.localStore,t);La(r,t,e),Ma(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await cr(r,s)}catch(s){await fi(s)}}function Ma(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function La(n,t,e){const r=q(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}async function cr(n,t,e){const r=q(n),s=[],o=[],l=[];r.ka.isEmpty()||(r.ka.forEach((c,f)=>{l.push(r.Ha(f,t,e).then(p=>{var I;if((p||e)&&r.isPrimaryClient){const w=p?!p.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){s.push(p);const w=bi.Yi(f.targetId,p);o.push(w)}}))}),await Promise.all(l),r.La.p_(s),await async function(f,p){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(p,S=>R.forEach(S.Hi,C=>I.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>R.forEach(S.Ji,C=>I.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!un(w))throw w;V(af,"Failed to update sequence numbers: "+w)}for(const w of p){const S=w.targetId;if(!w.fromCache){const C=I.Ts.get(S),D=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(D);I.Ts=I.Ts.insert(S,k)}}}(r.localStore,o))}async function Uf(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V(xf,"User change. New user:",t.toKey());const r=await Ca(e.localStore,t);e.currentUser=t,function(o,l){o.Ga.forEach(c=>{c.forEach(f=>{f.reject(new O(b.CANCELLED,l))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cr(e,r.Rs)}}function Bf(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ff.bind(null,t),t}class er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ar(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return uf(this.persistence,new of,t.initialUser,this.serializer)}Xa(t){return new Pa(Ri.ri,this.serializer)}Za(t){return new df}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}er.provider={build:()=>new er};class jf extends er{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){Y(this.persistence.referenceDelegate instanceof tr);const r=this.persistence.referenceDelegate.garbageCollector;return new Gh(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Pa(r=>tr.ri(r,e),this.serializer)}}class oi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uf.bind(null,this.syncEngine),await Df(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Nf}()}createDatastore(t){const e=ar(t.databaseInfo.databaseId),r=function(o){return new yf(o)}(t.databaseInfo);return function(o,l,c,f){return new If(o,l,c,f)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,l,c){return new wf(r,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>wo(this.syncEngine,e,0),function(){return yo.D()?new yo:new pf}())}createSyncEngine(t,e){return function(s,o,l,c,f,p,I){const w=new kf(s,o,l,c,f,p);return I&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=q(s);V(hn,"RemoteStore shutting down."),o.W_.add(5),await fn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}oi.provider={build:()=>new oi};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirestoreClient";class $f{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Xo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{V(Wt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(V(Wt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ka(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qr(n,t){n.asyncQueue.verifyOperationInProgress(),V(Wt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ca(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ro(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qf(n);V(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>vo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>vo(t.remoteStore,s)),n._onlineComponents=t}async function qf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Wt,"Using user provided OfflineComponentProvider");try{await qr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;rr("Error using user provided cache. Falling back to memory cache: "+e),await qr(n,new er)}}else V(Wt,"Using default OfflineComponentProvider"),await qr(n,new jf(void 0));return n._offlineComponents}async function Gf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Wt,"Using user provided OnlineComponentProvider"),await Ro(n,n._uninitializedComponentsProvider._online)):(V(Wt,"Using default OnlineComponentProvider"),await Ro(n,new oi))),n._onlineComponents}function zf(n){return Gf(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,t,e){if(!e)throw new O(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hf(n,t,e,r){if(t===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function So(n){if(!x.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Po(n){if(x.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Ba(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Pi(n);throw new O(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="firestore.googleapis.com",Co=!0;class Vo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ja,this.ssl=Co}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Co;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Sa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<$h)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tc;switch(r.type){case"firstParty":return new Rc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=bo.get(e);r&&(V("ComponentProvider","Removing Datastore"),bo.delete(e),r.terminate())}(this),Promise.resolve()}}function Kf(n,t,e,r={}){var s;const o=(n=Ba(n,hr))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==ja&&o.host!==c&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!qn(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,I;if(typeof r.mockUserToken=="string")p=r.mockUserToken,I=pt.MOCK_USER;else{p=Jl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new pt(w)}n._authCredentials=new Ic(new Qo(p,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ci(this.firestore,t,this._query)}}class kt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class Gt extends Ci{constructor(t,e,r){super(t,e,rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new x(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function Wf(n,t,...e){if(n=Je(n),Ua("collection","path",t),n instanceof hr){const r=X.fromString(t,...e);return Po(r),new Gt(n,null,r)}{if(!(n instanceof kt||n instanceof Gt))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Po(r),new Gt(n.firestore,null,r)}}function Qf(n,t,...e){if(n=Je(n),arguments.length===1&&(t=Xo.newId()),Ua("doc","path",t),n instanceof hr){const r=X.fromString(t,...e);return So(r),new kt(n,null,new x(r))}{if(!(n instanceof kt||n instanceof Gt))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return So(r),new kt(n.firestore,n instanceof Gt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="AsyncQueue";class No{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Va(this,"async_queue_retry"),this.Su=()=>{const r=$r();r&&V(Do,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=$r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new re;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!un(t))throw t;V(Do,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw oe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Si.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&M()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class $a extends hr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new No,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new No(t),this._firestoreClient=void 0,await t}}}function Xf(n,t){const e=typeof n=="object"?n:lc(),r=typeof n=="string"?n:Wn,s=rc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Xl("firestore");o&&Kf(s,...o)}return s}function Yf(n){if(n._terminated)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Jf(n),n._firestoreClient}function Jf(n){var t,e,r;const s=n._freezeSettings(),o=function(c,f,p,I){return new $c(c,f,p,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Fa(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $f(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this._byteString=t}static fromBase64String(t){try{return new an(Pt.fromBase64String(t))}catch(e){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new an(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^__.*__$/;class td{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new cn(t,this.data,e,this.fieldTransforms)}}function Ha(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Di{constructor(t,e,r,s,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Di(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return nr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Ha(this.Lu)&&Zf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class ed{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ar(t)}ju(t,e,r,s=!1){return new Di({Lu:t,methodName:e,zu:r,path:ot.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nd(n){const t=n._freezeSettings(),e=ar(n._databaseId);return new ed(n._databaseId,!!t.ignoreUndefinedProperties,e)}function rd(n,t,e,r,s,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,t,e,s);Xa("Data must be an object, but it was:",l,r);const c=Wa(r,l);let f,p;if(o.merge)f=new Rt(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const S=id(t,w,e);if(!l.contains(S))throw new O(b.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);ad(I,S)||I.push(S)}f=new Rt(I),p=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=l.fieldTransforms;return new td(new wt(c),f,p)}class Ni extends Vi{_toFieldTransform(t){return new gh(t.path,new rn)}isEqual(t){return t instanceof Ni}}function Ka(n,t){if(Qa(n=Je(n)))return Xa("Unsupported field value:",t,n),Wa(n,t);if(n instanceof Vi)return function(r,s){if(!Ha(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let l=0;for(const c of r){let f=Ka(c,s.Ku(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:ni(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ni(s.serializer,o)}}if(r instanceof Ga)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof an)return{bytesValue:Sh(s.serializer,r._byteString)};if(r instanceof kt){const o=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw s.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof za)return function(l,c){return{mapValue:{fields:{[ra]:{stringValue:ia},[Yr]:{arrayValue:{values:l.toArray().map(p=>{if(typeof p!="number")throw c.Wu("VectorValues must only contain numeric values.");return Ii(c.serializer,p)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Pi(r)}`)}(n,t)}function Wa(n,t){const e={};return Jo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(n,(r,s)=>{const o=Ka(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Qa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Ga||n instanceof an||n instanceof kt||n instanceof Vi||n instanceof za)}function Xa(n,t,e){if(!Qa(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Pi(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function id(n,t,e){if((t=Je(t))instanceof qa)return t._internalPath;if(typeof t=="string")return od(n,t);throw nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const sd=new RegExp("[~\\*/\\[\\]]");function od(n,t,e){if(t.search(sd)>=0)throw nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new qa(...t.split("."))._internalPath}catch{throw nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function nr(n,t,e,r,s){const o=r&&!r.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${s}`),f+=")"),new O(b.INVALID_ARGUMENT,c+n+f)}function ad(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function ud(n,t){const e=Ba(n.firestore,$a),r=Qf(n),s=ld(n.converter,t);return cd(e,[rd(nd(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function cd(n,t){return function(r,s){const o=new re;return r.asyncQueue.enqueueAndForget(async()=>Mf(await zf(r),s,o)),o.promise}(Yf(n),t)}function hd(){return new Ni("serverTimestamp")}(function(t,e=!0){(function(s){Re=s})(ac),zn(new Ze("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new $a(new Ac(r.getProvider("auth-internal")),new bc(l,r.getProvider("app-check-internal")),function(p,I){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(p.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),_e(zs,Hs,t),_e(zs,Hs,"esm2017")})();const ee={},fd=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));var Lt={exports:{}};const fr=Ll(fd),dd="16.5.0",pd={version:dd};var Ye={};const ai=fr,Oi=fr,md=fr,gd=fr,_d=pd,Ya=_d.version,yd=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function Ed(n){const t={};let e=n.toString();e=e.replace(/\r\n?/mg,`
`);let r;for(;(r=yd.exec(e))!=null;){const s=r[1];let o=r[2]||"";o=o.trim();const l=o[0];o=o.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),l==='"'&&(o=o.replace(/\\n/g,`
`),o=o.replace(/\\r/g,"\r")),t[s]=o}return t}function vd(n){const t=Za(n),e=Z.configDotenv({path:t});if(!e.parsed){const l=new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);throw l.code="MISSING_DATA",l}const r=Ja(n).split(","),s=r.length;let o;for(let l=0;l<s;l++)try{const c=r[l].trim(),f=Id(e,c);o=Z.decrypt(f.ciphertext,f.key);break}catch(c){if(l+1>=s)throw c}return Z.parse(o)}function Td(n){console.log(`[dotenv@${Ya}][WARN] ${n}`)}function ln(n){console.log(`[dotenv@${Ya}][DEBUG] ${n}`)}function Ja(n){return n&&n.DOTENV_KEY&&n.DOTENV_KEY.length>0?n.DOTENV_KEY:Ye.DOTENV_KEY&&Ye.DOTENV_KEY.length>0?Ye.DOTENV_KEY:""}function Id(n,t){let e;try{e=new URL(t)}catch(c){if(c.code==="ERR_INVALID_URL"){const f=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw f.code="INVALID_DOTENV_KEY",f}throw c}const r=e.password;if(!r){const c=new Error("INVALID_DOTENV_KEY: Missing key part");throw c.code="INVALID_DOTENV_KEY",c}const s=e.searchParams.get("environment");if(!s){const c=new Error("INVALID_DOTENV_KEY: Missing environment part");throw c.code="INVALID_DOTENV_KEY",c}const o=`DOTENV_VAULT_${s.toUpperCase()}`,l=n.parsed[o];if(!l){const c=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);throw c.code="NOT_FOUND_DOTENV_ENVIRONMENT",c}return{ciphertext:l,key:r}}function Za(n){let t=null;if(n&&n.path&&n.path.length>0)if(Array.isArray(n.path))for(const e of n.path)ai.existsSync(e)&&(t=e.endsWith(".vault")?e:`${e}.vault`);else t=n.path.endsWith(".vault")?n.path:`${n.path}.vault`;else t=Oi.resolve(process.cwd(),".env.vault");return ai.existsSync(t)?t:null}function Oo(n){return n[0]==="~"?Oi.join(md.homedir(),n.slice(1)):n}function Ad(n){!!(n&&n.debug)&&ln("Loading env from encrypted .env.vault");const e=Z._parseVault(n);let r=Ye;return n&&n.processEnv!=null&&(r=n.processEnv),Z.populate(r,e,n),{parsed:e}}function wd(n){const t=Oi.resolve(process.cwd(),".env");let e="utf8";const r=!!(n&&n.debug);n&&n.encoding?e=n.encoding:r&&ln("No encoding is specified. UTF-8 is used by default");let s=[t];if(n&&n.path)if(!Array.isArray(n.path))s=[Oo(n.path)];else{s=[];for(const f of n.path)s.push(Oo(f))}let o;const l={};for(const f of s)try{const p=Z.parse(ai.readFileSync(f,{encoding:e}));Z.populate(l,p,n)}catch(p){r&&ln(`Failed to load ${f} ${p.message}`),o=p}let c=Ye;return n&&n.processEnv!=null&&(c=n.processEnv),Z.populate(c,l,n),o?{parsed:l,error:o}:{parsed:l}}function Rd(n){if(Ja(n).length===0)return Z.configDotenv(n);const t=Za(n);return t?Z._configVault(n):(Td(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`),Z.configDotenv(n))}function bd(n,t){const e=Buffer.from(t.slice(-64),"hex");let r=Buffer.from(n,"base64");const s=r.subarray(0,12),o=r.subarray(-16);r=r.subarray(12,-16);try{const l=gd.createDecipheriv("aes-256-gcm",e,s);return l.setAuthTag(o),`${l.update(r)}${l.final()}`}catch(l){const c=l instanceof RangeError,f=l.message==="Invalid key length",p=l.message==="Unsupported state or unable to authenticate data";if(c||f){const I=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw I.code="INVALID_DOTENV_KEY",I}else if(p){const I=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw I.code="DECRYPTION_FAILED",I}else throw l}}function Sd(n,t,e={}){const r=!!(e&&e.debug),s=!!(e&&e.override);if(typeof t!="object"){const o=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw o.code="OBJECT_REQUIRED",o}for(const o of Object.keys(t))Object.prototype.hasOwnProperty.call(n,o)?(s===!0&&(n[o]=t[o]),r&&ln(s===!0?`"${o}" is already defined and WAS overwritten`:`"${o}" is already defined and was NOT overwritten`)):n[o]=t[o]}const Z={configDotenv:wd,_configVault:Ad,_parseVault:vd,config:Rd,decrypt:bd,parse:Ed,populate:Sd};Lt.exports.configDotenv=Z.configDotenv;Lt.exports._configVault=Z._configVault;Lt.exports._parseVault=Z._parseVault;Lt.exports.config=Z.config;Lt.exports.decrypt=Z.decrypt;Lt.exports.parse=Z.parse;Lt.exports.populate=Z.populate;Lt.exports=Z;var Pd=Lt.exports,Vt={};const Se={};Vt.DOTENV_CONFIG_ENCODING!=null&&(Se.encoding=Vt.DOTENV_CONFIG_ENCODING);Vt.DOTENV_CONFIG_PATH!=null&&(Se.path=Vt.DOTENV_CONFIG_PATH);Vt.DOTENV_CONFIG_DEBUG!=null&&(Se.debug=Vt.DOTENV_CONFIG_DEBUG);Vt.DOTENV_CONFIG_OVERRIDE!=null&&(Se.override=Vt.DOTENV_CONFIG_OVERRIDE);Vt.DOTENV_CONFIG_DOTENV_KEY!=null&&(Se.DOTENV_KEY=Vt.DOTENV_CONFIG_DOTENV_KEY);var Cd=Se;const Vd=/^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;var Dd=function(t){return t.reduce(function(e,r){const s=r.match(Vd);return s&&(e[s[1]]=s[2]),e},{})};(function(){Pd.config(Object.assign({},Cd,Dd(process.argv)))})();const Nd={apiKey:ee.env.API_KEY,authDomain:ee.env.AUTH_DOMAIN,projectId:ee.env.PROJECT_ID,storageBucket:ee.env.STORAGE_BUCKET,messagingSenderId:ee.env.MESSAGING_SENDER_ID,appId:ee.env.APP_ID},Od=jo(Nd),xd=Xf(Od),Fd=kl(function(){const[t,e]=St.useState(null),[r,s]=St.useState(null),[o,l]=St.useState(""),[c,f]=St.useState(!1),p=()=>{f(!0)},I=C=>{e("countdown"),s(C)},w=()=>{e("countup"),s(null)},S=async()=>{await ud(Wf(xd,"sessions"),{activity:o,mode:t,duration:r,endedAt:hd()}),f(!1),e(null),l("")};return j.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:j.jsxs("div",{className:"text-center py-5 px-10 w-fit bg-white rounded-xl shadow-lg",children:[j.jsx("h1",{className:"text-2xl text-indigo-400 font-bold",children:"TimeKontrol"}),j.jsxs("p",{children:["by ",j.jsx(Ml,{className:"underline",target:"_blank",to:"https://github.com/nin0dev",children:"Nino Berber"})]}),j.jsxs("div",{className:"my-4",children:[j.jsx("label",{htmlFor:"activity",className:"block text-gray-700 font-semibold mb-2",children:"What would you like to focus on?"}),j.jsx("input",{id:"activity",type:"text",value:o,onChange:C=>l(C.target.value),placeholder:"Ex: Learn maths lesson",className:"w-full max-w-md mx-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400"})]}),j.jsxs("div",{className:"flex flex-wrap gap-4 mb-6",children:[j.jsx("button",{onClick:()=>I(.5*60),className:"h-30 w-30 bg-gray-100 text-black font-bold rounded-lg hover:cursor-pointer",children:"30s"}),j.jsx("button",{onClick:()=>I(1*60),className:"h-30 w-30 bg-gray-100 text-black font-bold rounded-lg hover:cursor-pointer",children:"1m"}),j.jsx("button",{onClick:()=>I(60*60),className:"h-30 w-30 bg-gray-100 text-black font-bold rounded-lg hover:cursor-pointer",children:"1h"}),j.jsx("button",{onClick:w,className:"h-30 w-30 bg-indigo-400 text-white font-bold rounded-lg hover:cursor-pointer",children:"Free mode"})]}),t==="countdown"&&r!==null&&j.jsx(Fl,{duration:r,activity:o,onStop:p},r),t==="countup"&&j.jsx(Ul,{activity:o,onStop:p}),o&&j.jsxs("p",{className:"mt-4 text-gray-500 italic",children:["Current activity: ",o]}),c&&j.jsx("div",{className:"mt-6",children:j.jsx("button",{onClick:S,className:"bg-indigo-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600",children:"Save session"})})]})})});export{Fd as default};
