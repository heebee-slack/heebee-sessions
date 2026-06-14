(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function ve(t){return new Date(t).toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"long",year:"numeric"})}function Me(t){const[e,n]=t.split(":"),i=parseInt(e);return`${i>12?i-12:i}:${n} ${i>=12?"PM":"AM"}`}function W(t){return"₹ "+Number(t).toLocaleString("en-IN")}function fr(t){return t===0?"Fully booked":t<=3?`${t} slots left`:`${t} slots left`}function pr(t,e=200,n=90){document.querySelectorAll(t).forEach((i,s)=>{i.style.opacity=0,i.style.transform="translateY(20px)",i.style.transition="none",setTimeout(()=>{i.style.transition="opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",i.style.opacity=1,i.style.transform="translateY(0)"},e+s*n)})}function gr(){const t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add("drawn")})},{threshold:.1});document.querySelectorAll(".draw-line").forEach(e=>t.observe(e))}function mr(){document.querySelectorAll(".btn-ink").forEach(t=>{const e=t.querySelector(".ink"),n=t.querySelector("span");e&&(t.addEventListener("mouseenter",()=>{e.style.left="0",n&&(n.style.color="#F2EDE6")}),t.addEventListener("mouseleave",()=>{e.style.left="-100%",n&&(n.style.color="")}))})}function _r(){const t=window.location.hash.replace("#","")||"/",[e,...n]=t.split("?"),i={};return n.join("?").split("&").forEach(s=>{const[o,r]=s.split("=");o&&(i[o]=decodeURIComponent(r||""))}),{path:e,params:i}}function st(t,e={}){const n=Object.entries(e).map(([i,s])=>`${i}=${encodeURIComponent(s)}`).join("&");window.location.hash=t+(n?"?"+n:"")}function yr(){return"#HB-"+new Date().getFullYear()+"-"+String(Math.floor(Math.random()*9e3)+1e3)}var Ii={};/**
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
 */const Is={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(t,e){if(!t)throw He(e)},He=function(t){return new Error("Firebase Database ("+Is.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ks=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vr=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],a=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,a=r?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=o>>2,d=(o&3)<<4|a>>4;let u=(a&15)<<2|c>>6,p=c&63;l||(p=64,r||(u=64)),i.push(n[h],n[d],n[u],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ks(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||c==null||d==null)throw new br;const u=o<<2|a>>4;if(i.push(u),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ss=function(t){const e=ks(t);return Hn.encodeByteArray(e,!0)},Rt=function(t){return Ss(t).replace(/\./g,"")},Cn=function(t){try{return Hn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Er(t){return Ts(void 0,t)}function Ts(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xr(n)||(t[n]=Ts(t[n],e[n]));return t}function xr(t){return t!=="__proto__"}/**
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
 */function Cr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wr=()=>Cr().__FIREBASE_DEFAULTS__,Ir=()=>{if(typeof process>"u"||typeof Ii>"u")return;const t=Ii.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cn(t[1]);return e&&JSON.parse(e)},As=()=>{try{return wr()||Ir()||kr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sr=t=>{var e,n;return(n=(e=As())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rs=t=>{const e=Sr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ns=()=>{var t;return(t=As())===null||t===void 0?void 0:t.config};/**
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
 */class _t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ds(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rt(JSON.stringify(n)),Rt(JSON.stringify(r)),""].join(".")}/**
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
 */function Tr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ps(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tr())}function Ar(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rr(){return Is.NODE_ADMIN===!0}function Nr(){try{return typeof indexedDB=="object"}catch{return!1}}function Dr(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pr="FirebaseError";class qe extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Pr,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?Or(o,i):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new qe(s,a,i)}}function Or(t,e){return t.replace(Mr,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Mr=/\{\$([^}]+)}/g;/**
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
 */function ot(t){return JSON.parse(t)}function D(t){return JSON.stringify(t)}/**
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
 */const Ms=function(t){let e={},n={},i={},s="";try{const o=t.split(".");e=ot(Cn(o[0])||""),n=ot(Cn(o[1])||""),s=o[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Br=function(t){const e=Ms(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Fr=function(t){const e=Ms(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function X(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Be(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ki(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nt(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function wn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],r=e[s];if(Si(o)&&Si(r)){if(!wn(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Si(t){return t!==null&&typeof t=="object"}/**
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
 */function Lr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class $r{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],r=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^o&(r^a),h=1518500249):(c=o^r^a,h=1859775393):d<60?(c=o&r|a&(o|r),h=2400959708):(c=o^r^a,h=3395469782);const u=(s<<5|s>>>27)+c+l+h+i[d]&4294967295;l=a,a=r,r=(o<<30|o>>>2)&4294967295,o=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+r&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const o=this.buf_;let r=this.inbuf_;for(;s<n;){if(r===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(o[r]=e.charCodeAt(s),++r,++s,r===this.blockSize){this.compress_(o),r=0;break}}else for(;s<n;)if(o[r]=e[s],++r,++s,r===this.blockSize){this.compress_(o),r=0;break}}this.inbuf_=r,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function Yt(t,e){return`${t} failed: ${e} argument `}/**
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
 */const zr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const r=t.charCodeAt(i)-56320;s=65536+(o<<10)+r}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kt=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pe(t){return t&&t._delegate?t._delegate:t}class Fe{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class Ur{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new _t;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hr(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&r.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const r=this.instances.get(s);return r&&e(r,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Wr(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wr(t){return t===me?void 0:t}function Hr(t){return t.instantiationMode==="EAGER"}/**
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
 */class qr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ur(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const Vr={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},jr=k.INFO,Gr={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Yr=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Gr[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=jr,this._logHandler=Yr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Kr=(t,e)=>e.some(n=>t instanceof n);let Ti,Ai;function Qr(){return Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xr(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fs=new WeakMap,In=new WeakMap,Ls=new WeakMap,dn=new WeakMap,qn=new WeakMap;function Jr(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(re(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&Fs.set(n,t)}).catch(()=>{}),qn.set(e,t),e}function Zr(t){if(In.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});In.set(t,e)}let kn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return In.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ls.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return re(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ea(t){kn=t(kn)}function ta(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(hn(this),e,...n);return Ls.set(i,e.sort?e.sort():[e]),re(i)}:Xr().includes(t)?function(...e){return t.apply(hn(this),e),re(Fs.get(this))}:function(...e){return re(t.apply(hn(this),e))}}function na(t){return typeof t=="function"?ta(t):(t instanceof IDBTransaction&&Zr(t),Kr(t,Qr())?new Proxy(t,kn):t)}function re(t){if(t instanceof IDBRequest)return Jr(t);if(dn.has(t))return dn.get(t);const e=na(t);return e!==t&&(dn.set(t,e),qn.set(e,t)),e}const hn=t=>qn.get(t);function ia(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),a=re(r);return i&&r.addEventListener("upgradeneeded",l=>{i(re(r.result),l.oldVersion,l.newVersion,re(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sa=["get","getKey","getAll","getAllKeys","count"],oa=["put","add","delete","clear"],un=new Map;function Ri(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(un.get(e))return un.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=oa.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||sa.includes(n)))return;const o=async function(r,...a){const l=this.transaction(r,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return un.set(e,o),o}ea(t=>({...t,get:(e,n,i)=>Ri(e,n)||t.get(e,n,i),has:(e,n)=>!!Ri(e,n)||t.has(e,n)}));/**
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
 */class ra{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aa(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function aa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sn="@firebase/app",Ni="0.10.13";/**
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
 */const ne=new Bs("@firebase/app"),la="@firebase/app-compat",ca="@firebase/analytics-compat",da="@firebase/analytics",ha="@firebase/app-check-compat",ua="@firebase/app-check",fa="@firebase/auth",pa="@firebase/auth-compat",ga="@firebase/database",ma="@firebase/data-connect",_a="@firebase/database-compat",ya="@firebase/functions",va="@firebase/functions-compat",ba="@firebase/installations",Ea="@firebase/installations-compat",xa="@firebase/messaging",Ca="@firebase/messaging-compat",wa="@firebase/performance",Ia="@firebase/performance-compat",ka="@firebase/remote-config",Sa="@firebase/remote-config-compat",Ta="@firebase/storage",Aa="@firebase/storage-compat",Ra="@firebase/firestore",Na="@firebase/vertexai-preview",Da="@firebase/firestore-compat",Pa="firebase",Oa="10.14.1";/**
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
 */const Tn="[DEFAULT]",Ma={[Sn]:"fire-core",[la]:"fire-core-compat",[da]:"fire-analytics",[ca]:"fire-analytics-compat",[ua]:"fire-app-check",[ha]:"fire-app-check-compat",[fa]:"fire-auth",[pa]:"fire-auth-compat",[ga]:"fire-rtdb",[ma]:"fire-data-connect",[_a]:"fire-rtdb-compat",[ya]:"fire-fn",[va]:"fire-fn-compat",[ba]:"fire-iid",[Ea]:"fire-iid-compat",[xa]:"fire-fcm",[Ca]:"fire-fcm-compat",[wa]:"fire-perf",[Ia]:"fire-perf-compat",[ka]:"fire-rc",[Sa]:"fire-rc-compat",[Ta]:"fire-gcs",[Aa]:"fire-gcs-compat",[Ra]:"fire-fst",[Da]:"fire-fst-compat",[Na]:"fire-vertex","fire-js":"fire-js",[Pa]:"fire-js-all"};/**
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
 */const Dt=new Map,Ba=new Map,An=new Map;function Di(t,e){try{t.container.addComponent(e)}catch(n){ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rt(t){const e=t.name;if(An.has(e))return ne.debug(`There were multiple attempts to register component ${e}.`),!1;An.set(e,t);for(const n of Dt.values())Di(n,t);for(const n of Ba.values())Di(n,t);return!0}function $s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Fa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new Os("app","Firebase",Fa);/**
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
 */class La{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=Oa;function Us(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Tn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ae.create("bad-app-name",{appName:String(s)});if(n||(n=Ns()),!n)throw ae.create("no-options");const o=Dt.get(s);if(o){if(wn(n,o.options)&&wn(i,o.config))return o;throw ae.create("duplicate-app",{appName:s})}const r=new qr(s);for(const l of An.values())r.addComponent(l);const a=new La(n,i,r);return Dt.set(s,a),a}function Ws(t=Tn){const e=Dt.get(t);if(!e&&t===Tn&&Ns())return Us();if(!e)throw ae.create("no-app",{appName:t});return e}function le(t,e,n){var i;let s=(i=Ma[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),r=e.match(/\s|\//);if(o||r){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ne.warn(a.join(" "));return}rt(new Fe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $a="firebase-heartbeat-database",za=1,at="firebase-heartbeat-store";let fn=null;function Hs(){return fn||(fn=ia($a,za,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(at)}catch(n){console.warn(n)}}}}).catch(t=>{throw ae.create("idb-open",{originalErrorMessage:t.message})})),fn}async function Ua(t){try{const n=(await Hs()).transaction(at),i=await n.objectStore(at).get(qs(t));return await n.done,i}catch(e){if(e instanceof qe)ne.warn(e.message);else{const n=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ne.warn(n.message)}}}async function Pi(t,e){try{const i=(await Hs()).transaction(at,"readwrite");await i.objectStore(at).put(e,qs(t)),await i.done}catch(n){if(n instanceof qe)ne.warn(n.message);else{const i=ae.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ne.warn(i.message)}}}function qs(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wa=1024,Ha=30*24*60*60*1e3;class qa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ja(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const a=new Date(r.date).valueOf();return Date.now()-a<=Ha}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ne.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oi(),{heartbeatsToSend:i,unsentEntries:s}=Va(this._heartbeatsCache.heartbeats),o=Rt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return ne.warn(n),""}}}function Oi(){return new Date().toISOString().substring(0,10)}function Va(t,e=Wa){const n=[];let i=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),Mi(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ja{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nr()?Dr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ua(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mi(t){return Rt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ga(t){rt(new Fe("platform-logger",e=>new ra(e),"PRIVATE")),rt(new Fe("heartbeat",e=>new qa(e),"PRIVATE")),le(Sn,Ni,t),le(Sn,Ni,"esm2017"),le("fire-js","")}Ga("");var Ya="firebase",Ka="10.14.1";/**
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
 */le(Ya,Ka,"app");var Bi={};const Fi="@firebase/database",Li="1.0.8";/**
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
 */let Vs="";function Qa(t){Vs=t}/**
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
 */class Xa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),D(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ot(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ja{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return X(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const js=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xa(e)}}catch{}return new Ja},ye=js("localStorage"),Za=js("sessionStorage");/**
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
 */const Pe=new Bs("@firebase/database"),el=function(){let t=1;return function(){return t++}}(),Gs=function(t){const e=zr(t),n=new $r;n.update(e);const i=n.digest();return Hn.encodeByteArray(i)},yt=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=yt.apply(null,i):typeof i=="object"?e+=D(i):e+=i,e+=" "}return e};let Ze=null,$i=!0;const tl=function(t,e){f(!0,"Can't turn on custom loggers persistently."),Pe.logLevel=k.VERBOSE,Ze=Pe.log.bind(Pe)},M=function(...t){if($i===!0&&($i=!1,Ze===null&&Za.get("logging_enabled")===!0&&tl()),Ze){const e=yt.apply(null,t);Ze(e)}},vt=function(t){return function(...e){M(t,...e)}},Rn=function(...t){const e="FIREBASE INTERNAL ERROR: "+yt(...t);Pe.error(e)},ie=function(...t){const e=`FIREBASE FATAL ERROR: ${yt(...t)}`;throw Pe.error(e),new Error(e)},$=function(...t){const e="FIREBASE WARNING: "+yt(...t);Pe.warn(e)},nl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vn=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},il=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Le="[MIN_NAME]",be="[MAX_NAME]",Ie=function(t,e){if(t===e)return 0;if(t===Le||e===be)return-1;if(e===Le||t===be)return 1;{const n=zi(t),i=zi(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},sl=function(t,e){return t===e?0:t<e?-1:1},Ke=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+D(e))},jn=function(t){if(typeof t!="object"||t===null)return D(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=D(e[i]),n+=":",n+=jn(t[e[i]]);return n+="}",n},Ys=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function B(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ks=function(t){f(!Vn(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,o,r,a,l;t===0?(o=0,r=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),o=a+i,r=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,r=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);for(l=e;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(s?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},ol=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function al(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const ll=new RegExp("^-?(0*)\\d{1,10}$"),cl=-2147483648,dl=2147483647,zi=function(t){if(ll.test(t)){const e=Number(t);if(e>=cl&&e<=dl)return e}return null},Ve=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $("Exception was thrown by user callback.",n),e},Math.floor(0))}},hl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},et=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ul{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){$(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class fl{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";/**
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
 */const Gn="5",Qs="v",Xs="s",Js="r",Zs="f",eo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,to="ls",no="p",Nn="ac",io="websocket",so="long_polling";/**
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
 */class oo{constructor(e,n,i,s,o=!1,r="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=r,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ye.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ye.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pl(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ro(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===io)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===so)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pl(t)&&(n.ns=t.namespace);const s=[];return B(n,(o,r)=>{s.push(o+"="+r)}),i+s.join("&")}/**
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
 */class gl{constructor(){this.counters_={}}incrementCounter(e,n=1){X(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Er(this.counters_)}}/**
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
 */const pn={},gn={};function Yn(t){const e=t.toString();return pn[e]||(pn[e]=new gl),pn[e]}function ml(t,e){const n=t.toString();return gn[n]||(gn[n]=e()),gn[n]}/**
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
 */class _l{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ve(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ui="start",yl="close",vl="pLPCommand",bl="pRTLPCB",ao="id",lo="pw",co="ser",El="cb",xl="seg",Cl="ts",wl="d",Il="dframe",ho=1870,uo=30,kl=ho-uo,Sl=25e3,Tl=3e4;class De{constructor(e,n,i,s,o,r,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=r,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vt(e),this.stats_=Yn(n),this.urlFn=l=>(this.appCheckToken&&(l[Nn]=this.appCheckToken),ro(n,so,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _l(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Tl)),il(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kn((...o)=>{const[r,a,l,c,h]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===Ui)this.id=a,this.password=l;else if(r===yl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+r)},(...o)=>{const[r,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(r,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ui]="t",i[co]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[El]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Qs]=Gn,this.transportSessionId&&(i[Xs]=this.transportSessionId),this.lastSessionId&&(i[to]=this.lastSessionId),this.applicationId&&(i[no]=this.applicationId),this.appCheckToken&&(i[Nn]=this.appCheckToken),typeof location<"u"&&location.hostname&&eo.test(location.hostname)&&(i[Js]=Zs);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return De.forceAllow_?!0:!De.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ol()&&!rl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=D(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ss(n),s=Ys(i,kl);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Il]="t",i[ao]=e,i[lo]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=D(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kn{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=el(),window[vl+this.uniqueCallbackIdentifier]=e,window[bl+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kn.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const r="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(a){M("frame writing exception"),a.stack&&M(a.stack),M(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||M("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ao]=this.myID,e[lo]=this.myPW,e[co]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uo+i.length<=ho;){const r=this.pendingSegs.shift();i=i+"&"+xl+s+"="+r.seg+"&"+Cl+s+"="+r.ts+"&"+wl+s+"="+r.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Sl)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{M("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Al=16384,Rl=45e3;let Pt=null;typeof MozWebSocket<"u"?Pt=MozWebSocket:typeof WebSocket<"u"&&(Pt=WebSocket);class j{constructor(e,n,i,s,o,r,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vt(this.connId),this.stats_=Yn(n),this.connURL=j.connectionURL_(n,r,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,o){const r={};return r[Qs]=Gn,typeof location<"u"&&location.hostname&&eo.test(location.hostname)&&(r[Js]=Zs),n&&(r[Xs]=n),i&&(r[to]=i),s&&(r[Nn]=s),o&&(r[no]=o),ro(e,io,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ye.set("previous_websocket_failure",!0);try{let i;Rr(),this.mySock=new Pt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){j.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Pt!==null&&!j.forceDisallow_}static previouslyFailed(){return ye.isInMemoryStorage||ye.get("previous_websocket_failure")===!0}markConnectionHealthy(){ye.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ot(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=D(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ys(n,Al);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rl))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}j.responsesRequiredToBeHealthy=2;j.healthyTimeout=3e4;/**
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
 */class lt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,j]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=j&&j.isAvailable();let i=n&&!j.previouslyFailed();if(e.webSocketOnly&&(n||$("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[j];else{const s=this.transports_=[];for(const o of lt.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);lt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lt.globalTransportInitialized_=!1;/**
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
 */const Nl=6e4,Dl=5e3,Pl=10*1024,Ol=100*1024,mn="t",Wi="d",Ml="s",Hi="r",Bl="e",qi="o",Vi="a",ji="n",Gi="p",Fl="h";class Ll{constructor(e,n,i,s,o,r,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=r,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vt("c:"+this.id+":"),this.transportManager_=new lt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=et(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ol?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mn in e){const n=e[mn];n===Vi?this.upgradeIfSecondaryHealthy_():n===Hi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ke("t",e),i=Ke("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ji,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ke("t",e),i=Ke("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ke(mn,e);if(Wi in e){const i=e[Wi];if(n===Fl){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ji){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ml?this.onConnectionShutdown_(i):n===Hi?this.onReset_(i):n===Bl?Rn("Server Error: "+i):n===qi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gn!==i&&$("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),et(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Nl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):et(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ye.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class fo{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class po{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===n&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ot extends po{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ps()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ot}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Yi=32,Ki=768;class w{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function C(){return new w("")}function y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function he(t){return t.pieces_.length-t.pieceNum_}function S(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new w(t.pieces_,e)}function Qn(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $l(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ct(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function go(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new w(e,0)}function T(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof w)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new w(n,0)}function b(t){return t.pieceNum_>=t.pieces_.length}function L(t,e){const n=y(t),i=y(e);if(n===null)return e;if(n===i)return L(S(t),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zl(t,e){const n=ct(t,0),i=ct(e,0);for(let s=0;s<n.length&&s<i.length;s++){const o=Ie(n[s],i[s]);if(o!==0)return o}return n.length===i.length?0:n.length<i.length?-1:1}function Xn(t,e){if(he(t)!==he(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function q(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(he(t)>he(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Ul{constructor(e,n){this.errorPrefix_=n,this.parts_=ct(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Kt(this.parts_[i]);mo(this)}}function Wl(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kt(e),mo(t)}function Hl(t){const e=t.parts_.pop();t.byteLength_-=Kt(e),t.parts_.length>0&&(t.byteLength_-=1)}function mo(t){if(t.byteLength_>Ki)throw new Error(t.errorPrefix_+"has a key path longer than "+Ki+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yi)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yi+") or object contains a cycle "+_e(t))}function _e(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Jn extends po{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Jn}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qe=1e3,ql=60*5*1e3,Qi=30*1e3,Vl=1.3,jl=3e4,Gl="server_kill",Xi=3;class te extends fo{constructor(e,n,i,s,o,r,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=te.nextPersistentConnectionId_++,this.log_=vt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qe,this.maxReconnectDelay_=ql,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,o={r:s,a:e,b:n};this.log_(D(o)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new _t,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:r=>{const a=r.d;r.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,i,s){this.initConnection_();const o=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+o),this.listens.has(r)||this.listens.set(r,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(r).has(o),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(r).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},r="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(r,o,a=>{const l=a.d,c=a.s;te.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&X(e,"w")){const i=Be(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();$(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Br(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const o=s.s,r=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const o={p:e},r="n";s&&(o.q=i,o.t=s),this.sendRequest(r,o)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const o={p:n,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,r=>{s&&setTimeout(()=>{s(r.s,r.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,o){this.initConnection_();const r={p:n,d:i};o!==void 0&&(r.h=o),this.outstandingPuts_.push({action:e,request:r,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+D(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rn("Unrecognized action received from server: "+D(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jl&&(this.reconnectDelay_=Qe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+te.nextConnectionId_++,o=this.lastSessionId;let r=!1,a=null;const l=function(){a?a.close():(r=!0,i())},c=function(d){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new Ll(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{$(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gl)},o))}catch(d){this.log_("Failed to get token: "+d),r||(this.repoInfo_.nodeAdmin&&$(d),l())}}}interrupt(e){M("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){M("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ki(this.interruptReasons_)&&(this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(o=>jn(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new w(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(n),o.delete(n),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){M("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xi&&(this.reconnectDelay_=Qi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){M("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vs.replace(/\./g,"-")]=1,Ps()?e["framework.cordova"]=1:Ar()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ot.getInstance().currentlyOnline();return ki(this.interruptReasons_)&&e}}te.nextPersistentConnectionId_=0;te.nextConnectionId_=0;/**
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
 */class v{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new v(e,n)}}/**
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
 */class Qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new v(Le,e),s=new v(Le,n);return this.compare(i,s)!==0}minPost(){return v.MIN}}/**
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
 */let kt;class _o extends Qt{static get __EMPTY_NODE(){return kt}static set __EMPTY_NODE(e){kt=e}compare(e,n){return Ie(e.name,n.name)}isDefinedOn(e){throw He("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return v.MIN}maxPost(){return new v(be,kt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new v(e,kt)}toString(){return".key"}}const Oe=new _o;/**
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
 */class St{constructor(e,n,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=n?i(e.key,n):1,s&&(r*=-1),r<0)this.isReverse_?e=e.left:e=e.right;else if(r===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class O{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??O.RED,this.left=s??U.EMPTY_NODE,this.right=o??U.EMPTY_NODE}copy(e,n,i,s,o){return new O(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return U.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return U.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,O.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,O.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}O.RED=!0;O.BLACK=!1;class Yl{copy(e,n,i,s,o){return this}insert(e,n,i){return new O(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class U{constructor(e,n=U.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new U(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,O.BLACK,null,null))}remove(e){return new U(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,O.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new St(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new St(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new St(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new St(this.root_,null,this.comparator_,!0,e)}}U.EMPTY_NODE=new Yl;/**
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
 */function Kl(t,e){return Ie(t.name,e.name)}function Zn(t,e){return Ie(t,e)}/**
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
 */let Dn;function Ql(t){Dn=t}const yo=function(t){return typeof t=="number"?"number:"+Ks(t):"string:"+t},vo=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&X(e,".sv"),"Priority must be a string or number.")}else f(t===Dn||t.isEmpty(),"priority of unexpected type.");f(t===Dn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ji;class P{constructor(e,n=P.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vo(this.priorityNode_)}static set __childrenNodeConstructor(e){Ji=e}static get __childrenNodeConstructor(){return Ji}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new P(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:P.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:y(e)===".priority"?this.priorityNode_:P.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:P.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||he(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,P.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yo(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ks(this.value_):e+=this.value_,this.lazyHash_=Gs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===P.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof P.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=P.VALUE_TYPE_ORDER.indexOf(n),o=P.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}P.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bo,Eo;function Xl(t){bo=t}function Jl(t){Eo=t}class Zl extends Qt{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),o=i.compareTo(s);return o===0?Ie(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return v.MIN}maxPost(){return new v(be,new P("[PRIORITY-POST]",Eo))}makePost(e,n){const i=bo(e);return new v(n,new P("[PRIORITY-POST]",i))}toString(){return".priority"}}const A=new Zl;/**
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
 */const ec=Math.log(2);class tc{constructor(e){const n=o=>parseInt(Math.log(o)/ec,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mt=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=t[l],u=n?n(d):d,new O(u,d.node,O.BLACK,null,null);{const p=parseInt(h/2,10)+l,g=s(l,p),E=s(p+1,c);return d=t[p],u=n?n(d):d,new O(u,d.node,O.BLACK,g,E)}},o=function(l){let c=null,h=null,d=t.length;const u=function(g,E){const x=d-g,z=d;d-=g;const Z=s(x+1,z),H=t[x],F=n?n(H):H;p(new O(F,H.node,E,null,Z))},p=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const E=l.nextBitIsOne(),x=Math.pow(2,l.count-(g+1));E?u(x,O.BLACK):(u(x,O.BLACK),u(x,O.RED))}return h},r=new tc(t.length),a=o(r);return new U(i||e,a)};/**
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
 */let _n;const Ae={};class ee{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(Ae&&A,"ChildrenNode.ts has not been loaded"),_n=_n||new ee({".priority":Ae},{".priority":A}),_n}get(e){const n=Be(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof U?n:null}hasIndex(e){return X(this.indexSet_,e.toString())}addIndex(e,n){f(e!==Oe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=n.getIterator(v.Wrap);let r=o.getNext();for(;r;)s=s||e.isDefinedOn(r.node),i.push(r),r=o.getNext();let a;s?a=Mt(i,e.getCompare()):a=Ae;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ee(h,c)}addToIndexes(e,n){const i=Nt(this.indexes_,(s,o)=>{const r=Be(this.indexSet_,o);if(f(r,"Missing index implementation for "+o),s===Ae)if(r.isDefinedOn(e.node)){const a=[],l=n.getIterator(v.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mt(a,r.getCompare())}else return Ae;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new v(e.name,a))),l.insert(e,e.node)}});return new ee(i,this.indexSet_)}removeFromIndexes(e,n){const i=Nt(this.indexes_,s=>{if(s===Ae)return s;{const o=n.get(e.name);return o?s.remove(new v(e.name,o)):s}});return new ee(i,this.indexSet_)}}/**
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
 */let Xe;class m{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&vo(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xe||(Xe=new m(new U(Zn),null,ee.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xe}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xe:n}}getChild(e){const n=y(e);return n===null?this:this.getImmediateChild(n).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new v(e,n);let s,o;n.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(i,this.children_));const r=s.isEmpty()?Xe:this.priorityNode_;return new m(s,r,o)}}updateChild(e,n){const i=y(e);if(i===null)return n;{f(y(e)!==".priority"||he(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(S(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,o=!0;if(this.forEachChild(A,(r,a)=>{n[r]=a.val(e),i++,o&&m.INTEGER_REGEXP_.test(r)?s=Math.max(s,Number(r)):o=!1}),!e&&o&&s<2*i){const r=[];for(const a in n)r[a]=n[a];return r}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yo(this.getPriority().val())+":"),this.forEachChild(A,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Gs(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new v(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new v(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new v(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,v.Wrap);let o=s.peek();for(;o!=null&&n.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,v.Wrap);let o=s.peek();for(;o!=null&&n.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bt?-1:0}withIndex(e){if(e===Oe||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Oe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(A),s=n.getIterator(A);let o=i.getNext(),r=s.getNext();for(;o&&r;){if(o.name!==r.name||!o.node.equals(r.node))return!1;o=i.getNext(),r=s.getNext()}return o===null&&r===null}else return!1;else return!1}}resolveIndex_(e){return e===Oe?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nc extends m{constructor(){super(new U(Zn),m.EMPTY_NODE,ee.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const bt=new nc;Object.defineProperties(v,{MIN:{value:new v(Le,m.EMPTY_NODE)},MAX:{value:new v(be,bt)}});_o.__EMPTY_NODE=m.EMPTY_NODE;P.__childrenNodeConstructor=m;Ql(bt);Jl(bt);/**
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
 */const ic=!0;function R(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new P(n,R(e))}if(!(t instanceof Array)&&ic){const n=[];let i=!1;if(B(t,(r,a)=>{if(r.substring(0,1)!=="."){const l=R(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new v(r,l)))}}),n.length===0)return m.EMPTY_NODE;const o=Mt(n,Kl,r=>r.name,Zn);if(i){const r=Mt(n,A.getCompare());return new m(o,R(e),new ee({".priority":r},{".priority":A}))}else return new m(o,R(e),ee.Default)}else{let n=m.EMPTY_NODE;return B(t,(i,s)=>{if(X(t,i)&&i.substring(0,1)!=="."){const o=R(s);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(i,o))}}),n.updatePriority(R(e))}}Xl(R);/**
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
 */class sc extends Qt{constructor(e){super(),this.indexPath_=e,f(!b(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),o=i.compareTo(s);return o===0?Ie(e.name,n.name):o}makePost(e,n){const i=R(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new v(n,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,bt);return new v(be,e)}toString(){return ct(this.indexPath_,0).join("/")}}/**
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
 */class oc extends Qt{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ie(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return v.MIN}maxPost(){return v.MAX}makePost(e,n){const i=R(e);return new v(n,i)}toString(){return".value"}}const rc=new oc;/**
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
 */function xo(t){return{type:"value",snapshotNode:t}}function $e(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ht(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ac(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ei{constructor(e){this.index_=e}updateChild(e,n,i,s,o,r){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(r!=null&&(i.isEmpty()?e.hasChild(n)?r.trackChildChange(dt(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?r.trackChildChange($e(n,i)):r.trackChildChange(ht(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(A,(s,o)=>{n.hasChild(s)||i.trackChildChange(dt(s,o))}),n.isLeafNode()||n.forEachChild(A,(s,o)=>{if(e.hasChild(s)){const r=e.getImmediateChild(s);r.equals(o)||i.trackChildChange(ht(s,o,r))}else i.trackChildChange($e(s,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ut{constructor(e){this.indexedFilter_=new ei(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ut.getStartPost_(e),this.endPost_=ut.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,o,r){return this.matches(new v(n,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,o,r)}updateFullNode(e,n,i){n.isLeafNode()&&(n=m.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const o=this;return n.forEachChild(A,(r,a)=>{o.matches(new v(r,a))||(s=s.updateImmediateChild(r,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class lc{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ut(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,o,r){return this.rangedFilter_.matches(new v(n,i))||(i=m.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,o,r):this.fullLimitUpdateChild_(e,n,i,o,r)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let r=0;for(;o.hasNext()&&r<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),r++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let r=0;for(;o.hasNext();){const a=o.getNext();r<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?r++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,o){let r;if(this.reverse_){const d=this.index_.getCompare();r=(u,p)=>d(p,u)}else r=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new v(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:r(u,l);if(h&&!i.isEmpty()&&p>=0)return o!=null&&o.trackChildChange(ht(n,i,d)),a.updateImmediateChild(n,i);{o!=null&&o.trackChildChange(dt(n,d));const E=a.updateImmediateChild(n,m.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(o!=null&&o.trackChildChange($e(u.name,u.node)),E.updateImmediateChild(u.name,u.node)):E}}else return i.isEmpty()?e:h&&r(c,l)>=0?(o!=null&&(o.trackChildChange(dt(c.name,c.node)),o.trackChildChange($e(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class ti{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=A}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Le}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===A}copy(){const e=new ti;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cc(t){return t.loadsAllData()?new ei(t.getIndex()):t.hasLimit()?new lc(t):new ut(t)}function Zi(t){const e={};if(t.isDefault())return e;let n;if(t.index_===A?n="$priority":t.index_===rc?n="$value":t.index_===Oe?n="$key":(f(t.index_ instanceof sc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=D(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=D(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+D(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=D(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+D(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function es(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==A&&(e.i=t.index_.toString()),e}/**
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
 */class Bt extends fo{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=vt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const r=Bt.getListenId_(e,i),a={};this.listens_[r]=a;const l=Zi(e._queryParams);this.restRequest_(o+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(o,d,!1,i),Be(this.listens_,r)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,n){const i=Bt.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Zi(e._queryParams),i=e._path.toString(),s=new _t;return this.restRequest_(i+".json",n,(o,r)=>{let a=r;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(n.auth=s.accessToken),o&&o.token&&(n.ac=o.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Lr(n);this.log_("Sending REST request for "+r);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+r+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ot(a.responseText)}catch{$("Failed to parse JSON response for "+r+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&$("Got unsuccessful REST response for "+r+" Status: "+a.status),i(a.status);i=null}},a.open("GET",r,!0),a.send()})}}/**
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
 */class dc{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ft(){return{value:null,children:new Map}}function Co(t,e,n){if(b(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=y(e);t.children.has(i)||t.children.set(i,Ft());const s=t.children.get(i);e=S(e),Co(s,e,n)}}function Pn(t,e,n){t.value!==null?n(e,t.value):hc(t,(i,s)=>{const o=new w(e.toString()+"/"+i);Pn(s,o,n)})}function hc(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class uc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&B(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const ts=10*1e3,fc=30*1e3,pc=5*60*1e3;class gc{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uc(e);const i=ts+(fc-ts)*Math.random();et(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;B(e,(s,o)=>{o>0&&X(this.statsToReport_,s)&&(n[s]=o,i=!0)}),i&&this.server_.reportStats(n),et(this.reportStats_.bind(this),Math.floor(Math.random()*2*pc))}}/**
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
 */var G;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(G||(G={}));function ni(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ii(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function si(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Lt{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=G.ACK_USER_WRITE,this.source=ni()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new w(e));return new Lt(C(),n,this.revert)}}else return f(y(this.path)===e,"operationForChild called for unrelated child."),new Lt(S(this.path),this.affectedTree,this.revert)}}/**
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
 */class ft{constructor(e,n){this.source=e,this.path=n,this.type=G.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new ft(this.source,C()):new ft(this.source,S(this.path))}}/**
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
 */class Ee{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=G.OVERWRITE}operationForChild(e){return b(this.path)?new Ee(this.source,C(),this.snap.getImmediateChild(e)):new Ee(this.source,S(this.path),this.snap)}}/**
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
 */class ze{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=G.MERGE}operationForChild(e){if(b(this.path)){const n=this.children.subtree(new w(e));return n.isEmpty()?null:n.value?new Ee(this.source,C(),n.value):new ze(this.source,C(),n)}else return f(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ze(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ue{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const n=y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _c(t,e,n,i){const s=[],o=[];return e.forEach(r=>{r.type==="child_changed"&&t.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)&&o.push(ac(r.childName,r.snapshotNode))}),Je(t,s,"child_removed",e,i,n),Je(t,s,"child_added",e,i,n),Je(t,s,"child_moved",o,i,n),Je(t,s,"child_changed",e,i,n),Je(t,s,"value",e,i,n),s}function Je(t,e,n,i,s,o){const r=i.filter(a=>a.type===n);r.sort((a,l)=>vc(t,a,l)),r.forEach(a=>{const l=yc(t,a,o);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function yc(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vc(t,e,n){if(e.childName==null||n.childName==null)throw He("Should only compare child_ events.");const i=new v(e.childName,e.snapshotNode),s=new v(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Xt(t,e){return{eventCache:t,serverCache:e}}function tt(t,e,n,i){return Xt(new ue(e,n,i),t.serverCache)}function wo(t,e,n,i){return Xt(t.eventCache,new ue(e,n,i))}function $t(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xe(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yn;const bc=()=>(yn||(yn=new U(sl)),yn);class I{constructor(e,n=bc()){this.value=e,this.children=n}static fromObject(e){let n=new I(null);return B(e,(i,s)=>{n=n.set(new w(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:C(),value:this.value};if(b(e))return null;{const i=y(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(S(e),n);return o!=null?{path:T(new w(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const n=y(e),i=this.children.get(n);return i!==null?i.subtree(S(e)):new I(null)}}set(e,n){if(b(e))return new I(n,this.children);{const i=y(e),o=(this.children.get(i)||new I(null)).set(S(e),n),r=this.children.insert(i,o);return new I(this.value,r)}}remove(e){if(b(e))return this.children.isEmpty()?new I(null):new I(null,this.children);{const n=y(e),i=this.children.get(n);if(i){const s=i.remove(S(e));let o;return s.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,s),this.value===null&&o.isEmpty()?new I(null):new I(this.value,o)}else return this}}get(e){if(b(e))return this.value;{const n=y(e),i=this.children.get(n);return i?i.get(S(e)):null}}setTree(e,n){if(b(e))return n;{const i=y(e),o=(this.children.get(i)||new I(null)).setTree(S(e),n);let r;return o.isEmpty()?r=this.children.remove(i):r=this.children.insert(i,o),new I(this.value,r)}}fold(e){return this.fold_(C(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(T(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,C(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(b(e))return null;{const o=y(e),r=this.children.get(o);return r?r.findOnPath_(S(e),T(n,o),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,C(),n)}foreachOnPath_(e,n,i){if(b(e))return this;{this.value&&i(n,this.value);const s=y(e),o=this.children.get(s);return o?o.foreachOnPath_(S(e),T(n,s),i):new I(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(T(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class K{constructor(e){this.writeTree_=e}static empty(){return new K(new I(null))}}function nt(t,e,n){if(b(e))return new K(new I(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const r=L(s,e);return o=o.updateChild(r,n),new K(t.writeTree_.set(s,o))}else{const s=new I(n),o=t.writeTree_.setTree(e,s);return new K(o)}}}function On(t,e,n){let i=t;return B(n,(s,o)=>{i=nt(i,T(e,s),o)}),i}function ns(t,e){if(b(e))return K.empty();{const n=t.writeTree_.setTree(e,new I(null));return new K(n)}}function Mn(t,e){return ke(t,e)!=null}function ke(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(L(n.path,e)):null}function is(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(A,(i,s)=>{e.push(new v(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new v(i,s.value))}),e}function ce(t,e){if(b(e))return t;{const n=ke(t,e);return n!=null?new K(new I(n)):new K(t.writeTree_.subtree(e))}}function Bn(t){return t.writeTree_.isEmpty()}function Ue(t,e){return Io(C(),t.writeTree_,e)}function Io(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(f(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):n=Io(T(t,s),o,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(T(t,".priority"),i)),n}}/**
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
 */function Jt(t,e){return Ao(e,t)}function Ec(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=nt(t.visibleWrites,e,n)),t.lastWriteId=i}function xc(t,e,n,i){f(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=On(t.visibleWrites,e,n),t.lastWriteId=i}function Cc(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function wc(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,o=!1,r=t.allWrites.length-1;for(;s&&r>=0;){const a=t.allWrites[r];a.visible&&(r>=n&&Ic(a,i.path)?s=!1:q(i.path,a.path)&&(o=!0)),r--}if(s){if(o)return kc(t),!0;if(i.snap)t.visibleWrites=ns(t.visibleWrites,i.path);else{const a=i.children;B(a,l=>{t.visibleWrites=ns(t.visibleWrites,T(i.path,l))})}return!0}else return!1}function Ic(t,e){if(t.snap)return q(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&q(T(t.path,n),e))return!0;return!1}function kc(t){t.visibleWrites=ko(t.allWrites,Sc,C()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sc(t){return t.visible}function ko(t,e,n){let i=K.empty();for(let s=0;s<t.length;++s){const o=t[s];if(e(o)){const r=o.path;let a;if(o.snap)q(n,r)?(a=L(n,r),i=nt(i,a,o.snap)):q(r,n)&&(a=L(r,n),i=nt(i,C(),o.snap.getChild(a)));else if(o.children){if(q(n,r))a=L(n,r),i=On(i,a,o.children);else if(q(r,n))if(a=L(r,n),b(a))i=On(i,C(),o.children);else{const l=Be(o.children,y(a));if(l){const c=l.getChild(S(a));i=nt(i,C(),c)}}}else throw He("WriteRecord should have .snap or .children")}}return i}function So(t,e,n,i,s){if(!i&&!s){const o=ke(t.visibleWrites,e);if(o!=null)return o;{const r=ce(t.visibleWrites,e);if(Bn(r))return n;if(n==null&&!Mn(r,C()))return null;{const a=n||m.EMPTY_NODE;return Ue(r,a)}}}else{const o=ce(t.visibleWrites,e);if(!s&&Bn(o))return n;if(!s&&n==null&&!Mn(o,C()))return null;{const r=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(q(c.path,e)||q(e,c.path))},a=ko(t.allWrites,r,e),l=n||m.EMPTY_NODE;return Ue(a,l)}}}function Tc(t,e,n){let i=m.EMPTY_NODE;const s=ke(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(A,(o,r)=>{i=i.updateImmediateChild(o,r)}),i;if(n){const o=ce(t.visibleWrites,e);return n.forEachChild(A,(r,a)=>{const l=Ue(ce(o,new w(r)),a);i=i.updateImmediateChild(r,l)}),is(o).forEach(r=>{i=i.updateImmediateChild(r.name,r.node)}),i}else{const o=ce(t.visibleWrites,e);return is(o).forEach(r=>{i=i.updateImmediateChild(r.name,r.node)}),i}}function Ac(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=T(e,n);if(Mn(t.visibleWrites,o))return null;{const r=ce(t.visibleWrites,o);return Bn(r)?s.getChild(n):Ue(r,s.getChild(n))}}function Rc(t,e,n,i){const s=T(e,n),o=ke(t.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(n)){const r=ce(t.visibleWrites,s);return Ue(r,i.getNode().getImmediateChild(n))}else return null}function Nc(t,e){return ke(t.visibleWrites,e)}function Dc(t,e,n,i,s,o,r){let a;const l=ce(t.visibleWrites,e),c=ke(l,C());if(c!=null)a=c;else if(n!=null)a=Ue(l,n);else return[];if(a=a.withIndex(r),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=r.getCompare(),u=o?a.getReverseIteratorFrom(i,r):a.getIteratorFrom(i,r);let p=u.getNext();for(;p&&h.length<s;)d(p,i)!==0&&h.push(p),p=u.getNext();return h}else return[]}function Pc(){return{visibleWrites:K.empty(),allWrites:[],lastWriteId:-1}}function zt(t,e,n,i){return So(t.writeTree,t.treePath,e,n,i)}function oi(t,e){return Tc(t.writeTree,t.treePath,e)}function ss(t,e,n,i){return Ac(t.writeTree,t.treePath,e,n,i)}function Ut(t,e){return Nc(t.writeTree,T(t.treePath,e))}function Oc(t,e,n,i,s,o){return Dc(t.writeTree,t.treePath,e,n,i,s,o)}function ri(t,e,n){return Rc(t.writeTree,t.treePath,e,n)}function To(t,e){return Ao(T(t.treePath,e),t.writeTree)}function Ao(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Mc{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(i,ht(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(i,dt(i,s.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(i,$e(i,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(i,ht(i,e.snapshotNode,s.oldSnap));else throw He("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Bc{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ro=new Bc;class ai{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ue(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ri(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xe(this.viewCache_),o=Oc(this.writes_,s,n,1,i,e);return o.length===0?null:o[0]}}/**
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
 */function Fc(t){return{filter:t}}function Lc(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $c(t,e,n,i,s){const o=new Mc;let r,a;if(n.type===G.OVERWRITE){const c=n;c.source.fromUser?r=Fn(t,e,c.path,c.snap,i,s,o):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!b(c.path),r=Wt(t,e,c.path,c.snap,i,s,a,o))}else if(n.type===G.MERGE){const c=n;c.source.fromUser?r=Uc(t,e,c.path,c.children,i,s,o):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),r=Ln(t,e,c.path,c.children,i,s,a,o))}else if(n.type===G.ACK_USER_WRITE){const c=n;c.revert?r=qc(t,e,c.path,i,s,o):r=Wc(t,e,c.path,c.affectedTree,i,s,o)}else if(n.type===G.LISTEN_COMPLETE)r=Hc(t,e,n.path,i,o);else throw He("Unknown operation type: "+n.type);const l=o.getChanges();return zc(e,r,l),{viewCache:r,changes:l}}function zc(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=$t(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(xo($t(e)))}}function No(t,e,n,i,s,o){const r=e.eventCache;if(Ut(i,n)!=null)return e;{let a,l;if(b(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xe(e),h=c instanceof m?c:m.EMPTY_NODE,d=oi(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,o)}else{const c=zt(i,xe(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const c=y(n);if(c===".priority"){f(he(n)===1,"Can't have a priority with additional path components");const h=r.getNode();l=e.serverCache.getNode();const d=ss(i,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=r.getNode()}else{const h=S(n);let d;if(r.isCompleteForChild(c)){l=e.serverCache.getNode();const u=ss(i,n,r.getNode(),l);u!=null?d=r.getNode().getImmediateChild(c).updateChild(h,u):d=r.getNode().getImmediateChild(c)}else d=ri(i,c,e.serverCache);d!=null?a=t.filter.updateChild(r.getNode(),c,d,h,s,o):a=r.getNode()}}return tt(e,a,r.isFullyInitialized()||b(n),t.filter.filtersNodes())}}function Wt(t,e,n,i,s,o,r,a){const l=e.serverCache;let c;const h=r?t.filter:t.filter.getIndexedFilter();if(b(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=y(n);if(!l.isCompleteForPath(n)&&he(n)>1)return e;const g=S(n),x=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=h.updatePriority(l.getNode(),x):c=h.updateChild(l.getNode(),p,x,g,Ro,null)}const d=wo(e,c,l.isFullyInitialized()||b(n),h.filtersNodes()),u=new ai(s,d,o);return No(t,d,n,s,u,a)}function Fn(t,e,n,i,s,o,r){const a=e.eventCache;let l,c;const h=new ai(s,e,o);if(b(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,r),l=tt(e,c,!0,t.filter.filtersNodes());else{const d=y(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=tt(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=S(n),p=a.getNode().getImmediateChild(d);let g;if(b(u))g=i;else{const E=h.getCompleteChild(d);E!=null?Qn(u)===".priority"&&E.getChild(go(u)).isEmpty()?g=E:g=E.updateChild(u,i):g=m.EMPTY_NODE}if(p.equals(g))l=e;else{const E=t.filter.updateChild(a.getNode(),d,g,u,h,r);l=tt(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function os(t,e){return t.eventCache.isCompleteForChild(e)}function Uc(t,e,n,i,s,o,r){let a=e;return i.foreach((l,c)=>{const h=T(n,l);os(e,y(h))&&(a=Fn(t,a,h,c,s,o,r))}),i.foreach((l,c)=>{const h=T(n,l);os(e,y(h))||(a=Fn(t,a,h,c,s,o,r))}),a}function rs(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ln(t,e,n,i,s,o,r,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;b(n)?c=i:c=new I(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=rs(t,p,u);l=Wt(t,l,new w(d),g,s,o,r,a)}}),c.children.inorderTraversal((d,u)=>{const p=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),E=rs(t,g,u);l=Wt(t,l,new w(d),E,s,o,r,a)}}),l}function Wc(t,e,n,i,s,o,r){if(Ut(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(b(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wt(t,e,n,l.getNode().getChild(n),s,o,a,r);if(b(n)){let c=new I(null);return l.getNode().forEachChild(Oe,(h,d)=>{c=c.set(new w(h),d)}),Ln(t,e,n,c,s,o,a,r)}else return e}else{let c=new I(null);return i.foreach((h,d)=>{const u=T(n,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),Ln(t,e,n,c,s,o,a,r)}}function Hc(t,e,n,i,s){const o=e.serverCache,r=wo(e,o.getNode(),o.isFullyInitialized()||b(n),o.isFiltered());return No(t,r,n,i,Ro,s)}function qc(t,e,n,i,s,o){let r;if(Ut(i,n)!=null)return e;{const a=new ai(i,e,s),l=e.eventCache.getNode();let c;if(b(n)||y(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=zt(i,xe(e));else{const d=e.serverCache.getNode();f(d instanceof m,"serverChildren would be complete if leaf node"),h=oi(i,d)}h=h,c=t.filter.updateFullNode(l,h,o)}else{const h=y(n);let d=ri(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,S(n),a,o):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,m.EMPTY_NODE,S(n),a,o):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=zt(i,xe(e)),r.isLeafNode()&&(c=t.filter.updateFullNode(c,r,o)))}return r=e.serverCache.isFullyInitialized()||Ut(i,C())!=null,tt(e,c,r,t.filter.filtersNodes())}}/**
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
 */class Vc{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ei(i.getIndex()),o=cc(i);this.processor_=Fc(o);const r=n.serverCache,a=n.eventCache,l=s.updateFullNode(m.EMPTY_NODE,r.getNode(),null),c=o.updateFullNode(m.EMPTY_NODE,a.getNode(),null),h=new ue(l,r.isFullyInitialized(),s.filtersNodes()),d=new ue(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Xt(d,h),this.eventGenerator_=new mc(this.query_)}get query(){return this.query_}}function jc(t){return t.viewCache_.serverCache.getNode()}function Gc(t){return $t(t.viewCache_)}function Yc(t,e){const n=xe(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!b(e)&&!n.getImmediateChild(y(e)).isEmpty())?n.getChild(e):null}function as(t){return t.eventRegistrations_.length===0}function Kc(t,e){t.eventRegistrations_.push(e)}function ls(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(o=>{const r=o.createCancelEvent(n,s);r&&i.push(r)})}if(e){let s=[];for(let o=0;o<t.eventRegistrations_.length;++o){const r=t.eventRegistrations_[o];if(!r.matches(e))s.push(r);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function cs(t,e,n,i){e.type===G.MERGE&&e.source.queryId!==null&&(f(xe(t.viewCache_),"We should always have a full cache before handling merges"),f($t(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,o=$c(t.processor_,s,e,n,i);return Lc(t.processor_,o.viewCache),f(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,Do(t,o.changes,o.viewCache.eventCache.getNode(),null)}function Qc(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(A,(o,r)=>{i.push($e(o,r))}),n.isFullyInitialized()&&i.push(xo(n.getNode())),Do(t,i,n.getNode(),e)}function Do(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return _c(t.eventGenerator_,e,n,s)}/**
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
 */let Ht;class Po{constructor(){this.views=new Map}}function Xc(t){f(!Ht,"__referenceConstructor has already been defined"),Ht=t}function Jc(){return f(Ht,"Reference.ts has not been loaded"),Ht}function Zc(t){return t.views.size===0}function li(t,e,n,i){const s=e.source.queryId;if(s!==null){const o=t.views.get(s);return f(o!=null,"SyncTree gave us an op for an invalid query."),cs(o,e,n,i)}else{let o=[];for(const r of t.views.values())o=o.concat(cs(r,e,n,i));return o}}function Oo(t,e,n,i,s){const o=e._queryIdentifier,r=t.views.get(o);if(!r){let a=zt(n,s?i:null),l=!1;a?l=!0:i instanceof m?(a=oi(n,i),l=!1):(a=m.EMPTY_NODE,l=!1);const c=Xt(new ue(a,l,!1),new ue(i,s,!1));return new Vc(e,c)}return r}function ed(t,e,n,i,s,o){const r=Oo(t,e,i,s,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,r),Kc(r,n),Qc(r,n)}function td(t,e,n,i){const s=e._queryIdentifier,o=[];let r=[];const a=fe(t);if(s==="default")for(const[l,c]of t.views.entries())r=r.concat(ls(c,n,i)),as(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const l=t.views.get(s);l&&(r=r.concat(ls(l,n,i)),as(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!fe(t)&&o.push(new(Jc())(e._repo,e._path)),{removed:o,events:r}}function Mo(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function de(t,e){let n=null;for(const i of t.views.values())n=n||Yc(i,e);return n}function Bo(t,e){if(e._queryParams.loadsAllData())return Zt(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Fo(t,e){return Bo(t,e)!=null}function fe(t){return Zt(t)!=null}function Zt(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qt;function nd(t){f(!qt,"__referenceConstructor has already been defined"),qt=t}function id(){return f(qt,"Reference.ts has not been loaded"),qt}let sd=1;class ds{constructor(e){this.listenProvider_=e,this.syncPointTree_=new I(null),this.pendingWriteTree_=Pc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lo(t,e,n,i,s){return Ec(t.pendingWriteTree_,e,n,i,s),s?je(t,new Ee(ni(),e,n)):[]}function od(t,e,n,i){xc(t.pendingWriteTree_,e,n,i);const s=I.fromObject(n);return je(t,new ze(ni(),e,s))}function oe(t,e,n=!1){const i=Cc(t.pendingWriteTree_,e);if(wc(t.pendingWriteTree_,e)){let o=new I(null);return i.snap!=null?o=o.set(C(),!0):B(i.children,r=>{o=o.set(new w(r),!0)}),je(t,new Lt(i.path,o,n))}else return[]}function Et(t,e,n){return je(t,new Ee(ii(),e,n))}function rd(t,e,n){const i=I.fromObject(n);return je(t,new ze(ii(),e,i))}function ad(t,e){return je(t,new ft(ii(),e))}function ld(t,e,n){const i=di(t,n);if(i){const s=hi(i),o=s.path,r=s.queryId,a=L(o,e),l=new ft(si(r),a);return ui(t,o,l)}else return[]}function Vt(t,e,n,i,s=!1){const o=e._path,r=t.syncPointTree_.get(o);let a=[];if(r&&(e._queryIdentifier==="default"||Fo(r,e))){const l=td(r,e,n,i);Zc(r)&&(t.syncPointTree_=t.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(o,(u,p)=>fe(p));if(h&&!d){const u=t.syncPointTree_.subtree(o);if(!u.isEmpty()){const p=hd(u);for(let g=0;g<p.length;++g){const E=p[g],x=E.query,z=Wo(t,E);t.listenProvider_.startListening(it(x),pt(t,x),z.hashFn,z.onComplete)}}}!d&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(it(e),null):c.forEach(u=>{const p=t.queryToTagMap.get(en(u));t.listenProvider_.stopListening(it(u),p)}))}ud(t,c)}return a}function $o(t,e,n,i){const s=di(t,i);if(s!=null){const o=hi(s),r=o.path,a=o.queryId,l=L(r,e),c=new Ee(si(a),l,n);return ui(t,r,c)}else return[]}function cd(t,e,n,i){const s=di(t,i);if(s){const o=hi(s),r=o.path,a=o.queryId,l=L(r,e),c=I.fromObject(n),h=new ze(si(a),l,c);return ui(t,r,h)}else return[]}function $n(t,e,n,i=!1){const s=e._path;let o=null,r=!1;t.syncPointTree_.foreachOnPath(s,(u,p)=>{const g=L(u,s);o=o||de(p,g),r=r||fe(p)});let a=t.syncPointTree_.get(s);a?(r=r||fe(a),o=o||de(a,C())):(a=new Po,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;o!=null?l=!0:(l=!1,o=m.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const E=de(g,C());E&&(o=o.updateImmediateChild(p,E))}));const c=Fo(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=en(e);f(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=fd();t.queryToTagMap.set(u,p),t.tagToQueryMap.set(p,u)}const h=Jt(t.pendingWriteTree_,s);let d=ed(a,e,n,h,o,l);if(!c&&!r&&!i){const u=Bo(a,e);d=d.concat(pd(t,e,u))}return d}function ci(t,e,n){const s=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(r,a)=>{const l=L(r,e),c=de(a,l);if(c)return c});return So(s,e,o,n,!0)}function dd(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const d=L(c,n);i=i||de(h,d)});let s=t.syncPointTree_.get(n);s?i=i||de(s,C()):(s=new Po,t.syncPointTree_=t.syncPointTree_.set(n,s));const o=i!=null,r=o?new ue(i,!0,!1):null,a=Jt(t.pendingWriteTree_,e._path),l=Oo(s,e,a,o?r.getNode():m.EMPTY_NODE,o);return Gc(l)}function je(t,e){return zo(e,t.syncPointTree_,null,Jt(t.pendingWriteTree_,C()))}function zo(t,e,n,i){if(b(t.path))return Uo(t,e,n,i);{const s=e.get(C());n==null&&s!=null&&(n=de(s,C()));let o=[];const r=y(t.path),a=t.operationForChild(r),l=e.children.get(r);if(l&&a){const c=n?n.getImmediateChild(r):null,h=To(i,r);o=o.concat(zo(a,l,c,h))}return s&&(o=o.concat(li(s,t,i,n))),o}}function Uo(t,e,n,i){const s=e.get(C());n==null&&s!=null&&(n=de(s,C()));let o=[];return e.children.inorderTraversal((r,a)=>{const l=n?n.getImmediateChild(r):null,c=To(i,r),h=t.operationForChild(r);h&&(o=o.concat(Uo(h,a,l,c)))}),s&&(o=o.concat(li(s,t,i,n))),o}function Wo(t,e){const n=e.query,i=pt(t,n);return{hashFn:()=>(jc(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?ld(t,n._path,i):ad(t,n._path);{const o=al(s,n);return Vt(t,n,null,o)}}}}function pt(t,e){const n=en(e);return t.queryToTagMap.get(n)}function en(t){return t._path.toString()+"$"+t._queryIdentifier}function di(t,e){return t.tagToQueryMap.get(e)}function hi(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new w(t.substr(0,e))}}function ui(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Jt(t.pendingWriteTree_,e);return li(i,n,s,null)}function hd(t){return t.fold((e,n,i)=>{if(n&&fe(n))return[Zt(n)];{let s=[];return n&&(s=Mo(n)),B(i,(o,r)=>{s=s.concat(r)}),s}})}function it(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(id())(t._repo,t._path):t}function ud(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=en(i),o=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(o)}}}function fd(){return sd++}function pd(t,e,n){const i=e._path,s=pt(t,e),o=Wo(t,n),r=t.listenProvider_.startListening(it(e),s,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(i);if(s)f(!fe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!b(c)&&h&&fe(h))return[Zt(h).query];{let u=[];return h&&(u=u.concat(Mo(h).map(p=>p.query))),B(d,(p,g)=>{u=u.concat(g)}),u}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(it(h),pt(t,h))}}return r}/**
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
 */class fi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fi(n)}node(){return this.node_}}class pi{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=T(this.path_,e);return new pi(this.syncTree_,n)}node(){return ci(this.syncTree_,this.path_)}}const gd=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hs=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return md(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _d(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},md=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},_d=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return typeof r!="number"?i:r+i},Ho=function(t,e,n,i){return gi(e,new pi(n,t),i)},qo=function(t,e,n){return gi(t,new fi(e),n)};function gi(t,e,n){const i=t.getPriority().val(),s=hs(i,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const r=t,a=hs(r.getValue(),e,n);return a!==r.getValue()||s!==r.getPriority().val()?new P(a,R(s)):t}else{const r=t;return o=r,s!==r.getPriority().val()&&(o=o.updatePriority(new P(s))),r.forEachChild(A,(a,l)=>{const c=gi(l,e.getImmediateChild(a),n);c!==l&&(o=o.updateImmediateChild(a,c))}),o}}/**
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
 */class mi{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function _i(t,e){let n=e instanceof w?e:new w(e),i=t,s=y(n);for(;s!==null;){const o=Be(i.node.children,s)||{children:{},childCount:0};i=new mi(s,i,o),n=S(n),s=y(n)}return i}function Ge(t){return t.node.value}function Vo(t,e){t.node.value=e,zn(t)}function jo(t){return t.node.childCount>0}function yd(t){return Ge(t)===void 0&&!jo(t)}function tn(t,e){B(t.node.children,(n,i)=>{e(new mi(n,t,i))})}function Go(t,e,n,i){n&&e(t),tn(t,s=>{Go(s,e,!0)})}function vd(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xt(t){return new w(t.parent===null?t.name:xt(t.parent)+"/"+t.name)}function zn(t){t.parent!==null&&bd(t.parent,t.name,t)}function bd(t,e,n){const i=yd(n),s=X(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,zn(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,zn(t))}/**
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
 */const Ed=/[\[\].#$\/\u0000-\u001F\u007F]/,xd=/[\[\].#$\u0000-\u001F\u007F]/,vn=10*1024*1024,yi=function(t){return typeof t=="string"&&t.length!==0&&!Ed.test(t)},Yo=function(t){return typeof t=="string"&&t.length!==0&&!xd.test(t)},Cd=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yo(t)},wd=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vn(t)||t&&typeof t=="object"&&X(t,".sv")},Ko=function(t,e,n,i){i&&e===void 0||nn(Yt(t,"value"),e,n)},nn=function(t,e,n){const i=n instanceof w?new Ul(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_e(i));if(typeof e=="function")throw new Error(t+"contains a function "+_e(i)+" with contents = "+e.toString());if(Vn(e))throw new Error(t+"contains "+e.toString()+" "+_e(i));if(typeof e=="string"&&e.length>vn/3&&Kt(e)>vn)throw new Error(t+"contains a string greater than "+vn+" utf8 bytes "+_e(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(B(e,(r,a)=>{if(r===".value")s=!0;else if(r!==".priority"&&r!==".sv"&&(o=!0,!yi(r)))throw new Error(t+" contains an invalid key ("+r+") "+_e(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wl(i,r),nn(t,a,i),Hl(i)}),s&&o)throw new Error(t+' contains ".value" child '+_e(i)+" in addition to actual children.")}},Id=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const o=ct(i);for(let r=0;r<o.length;r++)if(!(o[r]===".priority"&&r===o.length-1)){if(!yi(o[r]))throw new Error(t+"contains an invalid key ("+o[r]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zl);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&q(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},kd=function(t,e,n,i){const s=Yt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const o=[];B(e,(r,a)=>{const l=new w(r);if(nn(s,a,T(n,l)),Qn(l)===".priority"&&!wd(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),Id(s,o)},Qo=function(t,e,n,i){if(!Yo(n))throw new Error(Yt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sd=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qo(t,e,n)},Xo=function(t,e){if(y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Td=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Cd(n))throw new Error(Yt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ad{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sn(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();n!==null&&!Xn(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(s)}n&&t.eventLists_.push(n)}function Jo(t,e,n){sn(t,n),Zo(t,i=>Xn(i,e))}function V(t,e,n){sn(t,n),Zo(t,i=>q(i,e)||q(e,i))}function Zo(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const o=s.path;e(o)?(Rd(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Rd(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ze&&M("event: "+n.toString()),Ve(i)}}}/**
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
 */const Nd="repo_interrupt",Dd=25;class Pd{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ad,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ft(),this.transactionQueueTree_=new mi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Od(t,e,n){if(t.stats_=Yn(t.repoInfo_),t.forceRestClient_||hl())t.server_=new Bt(t.repoInfo_,(i,s,o,r)=>{us(t,i,s,o,r)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fs(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{D(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new te(t.repoInfo_,e,(i,s,o,r)=>{us(t,i,s,o,r)},i=>{fs(t,i)},i=>{Md(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=ml(t.repoInfo_,()=>new gc(t.stats_,t.server_)),t.infoData_=new dc,t.infoSyncTree_=new ds({startListening:(i,s,o,r)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Et(t.infoSyncTree_,i._path,l),setTimeout(()=>{r("ok")},0)),a},stopListening:()=>{}}),vi(t,"connected",!1),t.serverSyncTree_=new ds({startListening:(i,s,o,r)=>(t.server_.listen(i,o,s,(a,l)=>{const c=r(a,l);V(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function er(t){const n=t.infoData_.getNode(new w(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function on(t){return gd({timestamp:er(t)})}function us(t,e,n,i,s){t.dataUpdateCount++;const o=new w(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let r=[];if(s)if(i){const l=Nt(n,c=>R(c));r=cd(t.serverSyncTree_,o,l,s)}else{const l=R(n);r=$o(t.serverSyncTree_,o,l,s)}else if(i){const l=Nt(n,c=>R(c));r=rd(t.serverSyncTree_,o,l)}else{const l=R(n);r=Et(t.serverSyncTree_,o,l)}let a=o;r.length>0&&(a=We(t,o)),V(t.eventQueue_,a,r)}function fs(t,e){vi(t,"connected",e),e===!1&&$d(t)}function Md(t,e){B(e,(n,i)=>{vi(t,n,i)})}function vi(t,e,n){const i=new w("/.info/"+e),s=R(n);t.infoData_.updateSnapshot(i,s);const o=Et(t.infoSyncTree_,i,s);V(t.eventQueue_,i,o)}function bi(t){return t.nextWriteId_++}function Bd(t,e,n){const i=dd(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const o=R(s).withIndex(e._queryParams.getIndex());$n(t.serverSyncTree_,e,n,!0);let r;if(e._queryParams.loadsAllData())r=Et(t.serverSyncTree_,e._path,o);else{const a=pt(t.serverSyncTree_,e);r=$o(t.serverSyncTree_,e._path,o,a)}return V(t.eventQueue_,e._path,r),Vt(t.serverSyncTree_,e,n,null,!0),o},s=>(Ct(t,"get for query "+D(e)+" failed: "+s),Promise.reject(new Error(s))))}function Fd(t,e,n,i,s){Ct(t,"set",{path:e.toString(),value:n,priority:i});const o=on(t),r=R(n,i),a=ci(t.serverSyncTree_,e),l=qo(r,a,o),c=bi(t),h=Lo(t.serverSyncTree_,e,l,c,!0);sn(t.eventQueue_,h),t.server_.put(e.toString(),r.val(!0),(u,p)=>{const g=u==="ok";g||$("set at "+e+" failed: "+u);const E=oe(t.serverSyncTree_,c,!g);V(t.eventQueue_,e,E),Un(t,s,u,p)});const d=xi(t,e);We(t,d),V(t.eventQueue_,d,[])}function Ld(t,e,n,i){Ct(t,"update",{path:e.toString(),value:n});let s=!0;const o=on(t),r={};if(B(n,(a,l)=>{s=!1,r[a]=Ho(T(e,a),R(l),t.serverSyncTree_,o)}),s)M("update() called with empty data.  Don't do anything."),Un(t,i,"ok",void 0);else{const a=bi(t),l=od(t.serverSyncTree_,e,r,a);sn(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const d=c==="ok";d||$("update at "+e+" failed: "+c);const u=oe(t.serverSyncTree_,a,!d),p=u.length>0?We(t,e):e;V(t.eventQueue_,p,u),Un(t,i,c,h)}),B(n,c=>{const h=xi(t,T(e,c));We(t,h)}),V(t.eventQueue_,e,[])}}function $d(t){Ct(t,"onDisconnectEvents");const e=on(t),n=Ft();Pn(t.onDisconnect_,C(),(s,o)=>{const r=Ho(s,o,t.serverSyncTree_,e);Co(n,s,r)});let i=[];Pn(n,C(),(s,o)=>{i=i.concat(Et(t.serverSyncTree_,s,o));const r=xi(t,s);We(t,r)}),t.onDisconnect_=Ft(),V(t.eventQueue_,C(),i)}function zd(t,e,n){let i;y(e._path)===".info"?i=$n(t.infoSyncTree_,e,n):i=$n(t.serverSyncTree_,e,n),Jo(t.eventQueue_,e._path,i)}function Ud(t,e,n){let i;y(e._path)===".info"?i=Vt(t.infoSyncTree_,e,n):i=Vt(t.serverSyncTree_,e,n),Jo(t.eventQueue_,e._path,i)}function Wd(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Nd)}function Ct(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),M(n,...e)}function Un(t,e,n,i){e&&Ve(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let o=s;i&&(o+=": "+i);const r=new Error(o);r.code=s,e(r)}})}function tr(t,e,n){return ci(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function Ei(t,e=t.transactionQueueTree_){if(e||rn(t,e),Ge(e)){const n=ir(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Hd(t,xt(e),n)}else jo(e)&&tn(e,n=>{Ei(t,n)})}function Hd(t,e,n){const i=n.map(c=>c.currentWriteId),s=tr(t,e,i);let o=s;const r=s.hash();for(let c=0;c<n.length;c++){const h=n[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=L(e,h.path);o=o.updateChild(d,h.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ct(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<n.length;u++)n[u].status=2,h=h.concat(oe(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&d.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();rn(t,_i(t.transactionQueueTree_,e)),Ei(t,t.transactionQueueTree_),V(t.eventQueue_,e,h);for(let u=0;u<d.length;u++)Ve(d[u])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}We(t,e)}},r)}function We(t,e){const n=nr(t,e),i=xt(n),s=ir(t,n);return qd(t,s,i),i}function qd(t,e,n){if(e.length===0)return;const i=[];let s=[];const r=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=L(n,l.path);let h=!1,d;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(oe(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Dd)h=!0,d="maxretry",s=s.concat(oe(t.serverSyncTree_,l.currentWriteId,!0));else{const u=tr(t,l.path,r);l.currentInputSnapshot=u;const p=e[a].update(u.val());if(p!==void 0){nn("transaction failed: Data returned ",p,l.path);let g=R(p);typeof p=="object"&&p!=null&&X(p,".priority")||(g=g.updatePriority(u.getPriority()));const x=l.currentWriteId,z=on(t),Z=qo(g,u,z);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=Z,l.currentWriteId=bi(t),r.splice(r.indexOf(x),1),s=s.concat(Lo(t.serverSyncTree_,l.path,Z,l.currentWriteId,l.applyLocally)),s=s.concat(oe(t.serverSyncTree_,x,!0))}else h=!0,d="nodata",s=s.concat(oe(t.serverSyncTree_,l.currentWriteId,!0))}V(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}rn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ve(i[a]);Ei(t,t.transactionQueueTree_)}function nr(t,e){let n,i=t.transactionQueueTree_;for(n=y(e);n!==null&&Ge(i)===void 0;)i=_i(i,n),e=S(e),n=y(e);return i}function ir(t,e){const n=[];return sr(t,e,n),n.sort((i,s)=>i.order-s.order),n}function sr(t,e,n){const i=Ge(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);tn(e,s=>{sr(t,s,n)})}function rn(t,e){const n=Ge(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Vo(e,n.length>0?n:void 0)}tn(e,i=>{rn(t,i)})}function xi(t,e){const n=xt(nr(t,e)),i=_i(t.transactionQueueTree_,e);return vd(i,s=>{bn(t,s)}),bn(t,i),Go(i,s=>{bn(t,s)}),n}function bn(t,e){const n=Ge(e);if(n){const i=[];let s=[],o=-1;for(let r=0;r<n.length;r++)n[r].status===3||(n[r].status===1?(f(o===r-1,"All SENT items should be at beginning of queue."),o=r,n[r].status=3,n[r].abortReason="set"):(f(n[r].status===0,"Unexpected transaction status in abort"),n[r].unwatcher(),s=s.concat(oe(t.serverSyncTree_,n[r].currentWriteId,!0)),n[r].onComplete&&i.push(n[r].onComplete.bind(null,new Error("set"),!1,null))));o===-1?Vo(e,void 0):n.length=o+1,V(t.eventQueue_,xt(e),s);for(let r=0;r<i.length;r++)Ve(i[r])}}/**
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
 */function Vd(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jd(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$(`Invalid query segment '${n}' in query '${t}'`)}return e}const ps=function(t,e){const n=Gd(t),i=n.namespace;n.domain==="firebase.com"&&ie(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nl();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oo(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new w(n.pathString)}},Gd=function(t){let e="",n="",i="",s="",o="",r=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=Vd(t.substring(h,d)));const u=jd(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(r=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),o=i}"ns"in u&&(o=u.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:r,scheme:a,pathString:s,namespace:o}};/**
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
 */const gs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Yd=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const o=new Array(8);for(s=7;s>=0;s--)o[s]=gs.charAt(n%64),n=Math.floor(n/64);f(n===0,"Cannot push at time == 0");let r=o.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)r+=gs.charAt(e[s]);return f(r.length===20,"nextPushId: Length should be 20."),r}}();/**
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
 */class Kd{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+D(this.snapshot.exportVal())}}class Qd{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class or{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ci{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return b(this._path)?null:Qn(this._path)}get ref(){return new se(this._repo,this._path)}get _queryIdentifier(){const e=es(this._queryParams),n=jn(e);return n==="{}"?"default":n}get _queryObject(){return es(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof Ci))return!1;const n=this._repo===e._repo,i=Xn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+$l(this._path)}}class se extends Ci{constructor(e,n){super(e,n,new ti,!1)}get parent(){const e=go(this._path);return e===null?null:new se(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new w(e),i=mt(this.ref,e);return new gt(this._node.getChild(n),i,A)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new gt(s,mt(this.ref,i),A)))}hasChild(e){const n=new w(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ce(t,e){return t=pe(t),t._checkNotDeleted("ref"),e!==void 0?mt(t._root,e):t._root}function mt(t,e){return t=pe(t),y(t._path)===null?Sd("child","path",e):Qo("child","path",e),new se(t._repo,T(t._path,e))}function rr(t,e){t=pe(t),Xo("push",t._path),Ko("push",e,t._path,!0);const n=er(t._repo),i=Yd(n),s=mt(t,i),o=mt(t,i);let r;return e!=null?r=Xd(o,e).then(()=>o):r=Promise.resolve(o),s.then=r.then.bind(r),s.catch=r.then.bind(r,void 0),s}function Xd(t,e){t=pe(t),Xo("set",t._path),Ko("set",e,t._path,!1);const n=new _t;return Fd(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Jd(t,e){kd("update",e,t._path);const n=new _t;return Ld(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function an(t){t=pe(t);const e=new or(()=>{}),n=new ln(e);return Bd(t._repo,t,n).then(i=>new gt(i,new se(t._repo,t._path),t._queryParams.getIndex()))}class ln{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Kd("value",this,new gt(e.snapshotNode,new se(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qd(this,e,n):null}matches(e){return e instanceof ln?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zd(t,e,n,i,s){const o=new or(n,void 0),r=new ln(o);return zd(t._repo,t,r),()=>Ud(t._repo,t,r)}function eh(t,e,n,i){return Zd(t,"value",e)}Xc(se);nd(se);/**
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
 */const th="FIREBASE_DATABASE_EMULATOR_HOST",Wn={};let nh=!1;function ih(t,e,n,i){t.repoInfo_=new oo(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function sh(t,e,n,i,s){let o=i||t.options.databaseURL;o===void 0&&(t.options.projectId||ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let r=ps(o,s),a=r.repoInfo,l;typeof process<"u"&&Bi&&(l=Bi[th]),l?(o=`http://${l}?ns=${a.namespace}`,r=ps(o,s),a=r.repoInfo):r.repoInfo.secure;const c=new fl(t.name,t.options,e);Td("Invalid Firebase Database URL",r),b(r.path)||ie("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rh(a,t,c,new ul(t.name,n));return new ah(h,t)}function oh(t,e){const n=Wn[e];(!n||n[t.key]!==t)&&ie(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Wd(t),delete n[t.key]}function rh(t,e,n,i){let s=Wn[e.name];s||(s={},Wn[e.name]=s);let o=s[t.toURLString()];return o&&ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Pd(t,nh,n,i),s[t.toURLString()]=o,o}class ah{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Od(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new se(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ie("Cannot call "+e+" on a deleted database.")}}function lh(t=Ws(),e){const n=$s(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Rs("database");i&&ch(n,...i)}return n}function ch(t,e,n,i={}){t=pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ie("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new At(At.OWNER);else if(i.mockUserToken){const r=typeof i.mockUserToken=="string"?i.mockUserToken:Ds(i.mockUserToken,t.app.options.projectId);o=new At(r)}ih(s,e,n,o)}/**
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
 */function dh(t){Qa(zs),rt(new Fe("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return sh(i,s,o,n)},"PUBLIC").setMultipleInstances(!0)),le(Fi,Li,t),le(Fi,Li,"esm2017")}te.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};te.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dh();/**
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
 */const ar="firebasestorage.googleapis.com",hh="storageBucket",uh=2*60*1e3,fh=10*60*1e3;/**
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
 */class J extends qe{constructor(e,n,i=0){super(En(e),`Firebase Storage: ${n} (${En(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,J.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return En(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function En(t){return"storage/"+t}function ph(){const t="An unknown error occurred, please check the error payload for server response.";return new J(Q.UNKNOWN,t)}function gh(){return new J(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mh(){return new J(Q.CANCELED,"User canceled the upload/download.")}function _h(t){return new J(Q.INVALID_URL,"Invalid URL '"+t+"'.")}function yh(t){return new J(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ms(t){return new J(Q.INVALID_ARGUMENT,t)}function lr(){return new J(Q.APP_DELETED,"The Firebase app was deleted.")}function vh(t){return new J(Q.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Y{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Y.makeFromUrl(e,n)}catch{return new Y(e,"")}if(i.path==="")return i;throw yh(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function c(F){F.path_=decodeURIComponent(F.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${h}/b/${s}/o${u}`,"i"),g={bucket:1,path:3},E=n===ar?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",z=new RegExp(`^https?://${E}/${s}/${x}`,"i"),H=[{regex:a,indices:l,postModify:o},{regex:p,indices:g,postModify:c},{regex:z,indices:{bucket:1,path:2},postModify:c}];for(let F=0;F<H.length;F++){const ge=H[F],Se=ge.regex.exec(e);if(Se){const It=Se[ge.indices.bucket];let Te=Se[ge.indices.path];Te||(Te=""),i=new Y(It,Te),ge.postModify(i);break}}if(i==null)throw _h(e);return i}}class bh{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Eh(t,e,n){let i=1,s=null,o=null,r=!1,a=0;function l(){return a===2}let c=!1;function h(...x){c||(c=!0,e.apply(null,x))}function d(x){s=setTimeout(()=>{s=null,t(p,l())},x)}function u(){o&&clearTimeout(o)}function p(x,...z){if(c){u();return}if(x){u(),h.call(null,x,...z);return}if(l()||r){u(),h.call(null,x,...z);return}i<64&&(i*=2);let H;a===1?(a=2,H=0):H=(i+Math.random())*1e3,d(H)}let g=!1;function E(x){g||(g=!0,u(),!c&&(s!==null?(x||(a=2),clearTimeout(s),d(0)):x||(a=1)))}return d(0),o=setTimeout(()=>{r=!0,E(!0)},n),E}function xh(t){t(!1)}/**
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
 */function Ch(t){return t!==void 0}function _s(t,e,n,i){if(i<e)throw ms(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ms(`Invalid value for '${t}'. Expected ${n} or less.`)}function wh(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var jt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jt||(jt={}));/**
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
 */function Ih(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class kh{constructor(e,n,i,s,o,r,a,l,c,h,d,u=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Tt(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const a=o.getErrorCode()===jt.NO_ERROR,l=o.getStatus();if(!a||Ih(l,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===jt.ABORT;i(!1,new Tt(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Tt(c,o))})},n=(i,s)=>{const o=this.resolve_,r=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Ch(l)?o(l):o()}catch(l){r(l)}else if(a!==null){const l=ph();l.serverResponse=a.getErrorText(),this.errorCallback_?r(this.errorCallback_(a,l)):r(l)}else if(s.canceled){const l=this.appDelete_?lr():mh();r(l)}else{const l=gh();r(l)}};this.canceled_?n(!1,new Tt(!1,null,!0)):this.backoffId_=Eh(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xh(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tt{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Sh(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Th(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ah(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Rh(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Nh(t,e,n,i,s,o,r=!0){const a=wh(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Ah(c,e),Sh(c,n),Th(c,o),Rh(c,i),new kh(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r)}/**
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
 */function Dh(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ph(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Gt{constructor(e,n){this._service=e,n instanceof Y?this._location=n:this._location=Y.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gt(e,n)}get root(){const e=new Y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ph(this._location.path)}get storage(){return this._service}get parent(){const e=Dh(this._location.path);if(e===null)return null;const n=new Y(this._location.bucket,e);return new Gt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vh(e)}}function ys(t,e){const n=e==null?void 0:e[hh];return n==null?null:Y.makeFromBucketSpec(n,t)}function Oh(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:Ds(s,t.app.options.projectId))}class Mh{constructor(e,n,i,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=ar,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uh,this._maxUploadRetryTime=fh,this._requests=new Set,s!=null?this._bucket=Y.makeFromBucketSpec(s,this._host):this._bucket=ys(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Y.makeFromBucketSpec(this._url,e):this._bucket=ys(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_s("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_s("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gt(this,e)}_makeRequest(e,n,i,s,o=!0){if(this._deleted)return new bh(lr());{const r=Nh(e,this._appId,i,s,n,this._firebaseVersion,o);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const vs="@firebase/storage",bs="0.13.2";/**
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
 */const cr="storage";function Bh(t=Ws(),e){t=pe(t);const i=$s(t,cr).getImmediate({identifier:e}),s=Rs("storage");return s&&Fh(i,...s),i}function Fh(t,e,n,i={}){Oh(t,e,n,i)}function Lh(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Mh(n,i,s,e,zs)}function $h(){rt(new Fe(cr,Lh,"PUBLIC").setMultipleInstances(!0)),le(vs,bs,""),le(vs,bs,"esm2017")}$h();const zh={apiKey:"AIzaSyAe_h_9d0y9kz795D23xljbpF0zkC3WEm4",authDomain:"heebee-sessions.firebaseapp.com",databaseURL:"https://heebee-sessions-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"heebee-sessions",storageBucket:"heebee-sessions.firebasestorage.app",messagingSenderId:"119109065962",appId:"1:119109065962:web:b843f57bcdf8e658d70b93"},dr=Us(zh),we=lh(dr);Bh(dr);async function Uh(t={}){const e=await an(Ce(we,"workshops"));return e.exists()?Object.entries(e.val()).map(([i,s])=>({id:i,...s})).filter(i=>i.status==="live"||i.status==="coming_soon").filter(i=>!t.category||t.category==="all"||i.category===t.category).sort((i,s)=>new Date(i.date)-new Date(s.date)):[]}async function hr(t){const e=await an(Ce(we,`workshops/${t}`));return e.exists()?{id:t,...e.val()}:null}async function Wh(t){const e="HB-"+Date.now(),n={...t,bookingId:e,status:"pending",createdAt:new Date().toISOString()};await rr(Ce(we,"bookings"),n);const i=Ce(we,`workshops/${t.workshopId}`),s=await an(i);if(s.exists()){const r=s.val().slotsRemaining-t.tickets;await Jd(i,{slotsRemaining:Math.max(0,r)})}return n}async function Hh(t){const e={...t,status:"pending",createdAt:new Date().toISOString()};return await rr(Ce(we,"host_requests"),e),e}async function qh(){const t=await an(Ce(we,"categories"));return t.exists()?Object.values(t.val()):["Coffee","Art & Design","Wellness","Business","Food","Music","Photography"]}function Vh(t,e){const n=Ce(we,`workshops/${t}/slotsRemaining`);return eh(n,i=>e(i.val()))}async function jh(t){t.innerHTML=Gh();const[e,n]=await Promise.all([Uh(),qh()]);t.innerHTML=Yh(e,n),Xh(t),Jh()}function Gh(){return`
    <div style="min-height:100vh;">
      <div style="padding:18px 48px;border-bottom:0.5px solid #D4C9BC;display:flex;align-items:center;justify-content:space-between;">
        <div style="font-size:17px;font-weight:500;color:#1A1410;">Heebee Coffee</div>
      </div>
      <div style="padding:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:200px;">
        ${[1,2,3].map(()=>'<div style="height:260px;background:#E8E0D5;border-radius:14px;animation:pulse 1.5s ease infinite;"></div>').join("")}
      </div>
    </div>
    <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>
  `}function Yh(t,e){const n=["All",...e];return`
    ${wt("sessions")}

    <!-- HERO -->
    <div class="hero-grid" style="display:grid;grid-template-columns:1fr 1fr;min-height:280px;">
      <div class="hero-left" style="padding:52px 48px;display:flex;flex-direction:column;justify-content:center;">
        <p class="hero-child section-eyebrow" style="margin-bottom:14px;">Workshops · Talks · Experiences</p>
        <h1 class="hero-child" style="font-size:42px;font-weight:200;color:#1A1410;line-height:1.05;letter-spacing:-0.02em;margin-bottom:14px;">
          Learn something<br><em style="font-style:italic;font-weight:300;color:#7C6F3E;">new</em> at Heebee
        </h1>
        <p class="hero-child" style="font-size:13px;font-weight:300;color:#6B5B4E;line-height:1.75;max-width:300px;margin-bottom:26px;">
          Curated sessions by experts, creators & professionals — hosted inside our cafés across Punjab.
        </p>
        <div class="hero-child" style="display:flex;gap:14px;">
          <button class="btn-primary" onclick="document.getElementById('sessions').scrollIntoView({behavior:'smooth'})">
            <div class="ink"></div><span>Browse Sessions</span>
          </button>
          <button class="btn-ghost" onclick="navigate('/host')">
            <div class="ink"></div><span>Become a Host</span>
          </button>
        </div>
      </div>
      <div class="hero-right textured" style="background:#E8E0D5;display:flex;align-items:center;justify-content:center;gap:40px;">
        <div style="text-align:center;">
          <div id="stat-sessions" style="font-size:44px;font-weight:200;color:#1A1410;letter-spacing:-0.03em;line-height:1;">0</div>
          <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#6B5B4E;margin-top:5px;">Sessions hosted</div>
        </div>
        <div style="width:0.5px;height:40px;background:#D4C9BC;"></div>
        <div style="text-align:center;">
          <div id="stat-hosts" style="font-size:44px;font-weight:200;color:#1A1410;letter-spacing:-0.03em;line-height:1;">0</div>
          <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#6B5B4E;margin-top:5px;">Unique hosts</div>
        </div>
        <div style="width:0.5px;height:40px;background:#D4C9BC;"></div>
        <div style="text-align:center;">
          <div style="font-size:44px;font-weight:200;color:#1A1410;letter-spacing:-0.03em;line-height:1;">2</div>
          <div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#6B5B4E;margin-top:5px;">Cities</div>
        </div>
      </div>
    </div>

    <!-- SESSIONS SECTION -->
    <div class="section" id="sessions">
      <p class="section-eyebrow">Upcoming</p>
      <h2 class="section-title">Sessions & Workshops</h2>
      <p class="section-sub">Any skill, any passion — find your next experience.</p>
      <div class="draw-line"></div>

      <!-- FILTERS -->
      <div class="filter-pills" style="margin-bottom:28px;" id="filters">
        ${n.map((i,s)=>`
          <button class="filter-pill ${s===0?"active":""}" data-cat="${i==="All"?"all":i}">
            ${i}
          </button>
        `).join("")}
      </div>

      <!-- CARDS GRID -->
      <div class="cards-grid" id="cards-grid">
        ${t.length>0?t.map(i=>Kh(i)).join(""):Qh()}
      </div>
    </div>

    <!-- HOST CTA STRIP -->
    <div class="cta-strip" style="background:#1A1410;padding:48px;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Open to everyone</p>
        <h2 style="font-size:28px;font-weight:200;color:#F2EDE6;letter-spacing:-0.01em;margin-bottom:8px;">Got something worth sharing?</h2>
        <p style="font-size:13px;color:#6B5B4E;font-weight:300;max-width:400px;line-height:1.7;">Host a session at Heebee. Any skill, any passion — if it's worth learning, there's an audience for it.</p>
      </div>
      <button class="btn-cta" style="flex-shrink:0;" onclick="navigate('/host')">
        <div class="ink"></div><span>Request to Host</span>
      </button>
    </div>

    ${cn()}
  `}function Kh(t){var i;const e=t.status==="coming_soon",n=t.slotsRemaining<=0;return`
    <div class="workshop-card" data-category="${t.category}" onclick="${e?"":`navigate('/workshop?id=${t.id}')`}">
      <div class="card-cover" style="${t.coverImage?"":"background:#E8E0D5"}">
        ${t.coverImage?`<img src="${t.coverImage}" alt="${t.title}" loading="lazy">`:`<div class="card-cover-placeholder">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>`}
        ${e?'<div class="coming-soon-overlay"><span class="coming-soon-badge">Coming Soon</span></div>':""}
        ${n&&!e?'<div style="position:absolute;top:10px;right:10px;"><span class="badge badge-full">Fully Booked</span></div>':""}
      </div>
      <div class="card-body">
        <span class="badge badge-category">${t.category}</span>
        <p class="card-title">${t.title}</p>
        <p class="card-meta">
          ${t.date?ve(t.date):"Date TBC"} · ${t.time?Me(t.time):""}<br>
          ${t.outlet}
        </p>
        <div class="card-host-row">
          <div class="card-host-avatar">
            ${t.hostPhoto?`<img src="${t.hostPhoto}" alt="${t.hostName}">`:((i=t.hostName)==null?void 0:i.charAt(0))||"H"}
          </div>
          <span class="card-host-name">${t.hostName} · ${t.hostRole||"Host"}</span>
        </div>
        <div class="card-footer">
          <div>
            <p class="card-price">${W(t.price)}</p>
            <p class="card-slots">${e?"Registration opening soon":n?"Join waitlist":fr(t.slotsRemaining)}</p>
          </div>
          ${e?"":`
            <button class="btn-cta btn-sm" onclick="event.stopPropagation();navigate('/workshop?id=${t.id}')">
              <div class="ink"></div>
              <span>${n?"Waitlist":"Book"}</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `}function Qh(){return`
    <div style="grid-column:1/-1;padding:60px;text-align:center;">
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;">No sessions found. Check back soon or <span style="color:#7C6F3E;cursor:pointer;" onclick="navigate('/host')">request to host one</span>.</p>
    </div>
  `}function Xh(t,e,n){t.querySelectorAll(".filter-pill").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll(".filter-pill").forEach(o=>o.classList.remove("active")),i.classList.add("active");const s=i.dataset.cat;t.querySelectorAll(".workshop-card").forEach(o=>{const r=s==="all"||o.dataset.category===s;o.style.display=r?"":"none"})})})}function Jh(){pr(".hero-child",200,90);const t=document.getElementById("stat-sessions"),e=document.getElementById("stat-hosts");t&&Es(t,48,1400),e&&Es(e,23,1200),setTimeout(()=>{document.querySelectorAll(".workshop-card").forEach((n,i)=>{setTimeout(()=>n.classList.add("visible"),i*100)})},600)}function Es(t,e,n){const i=performance.now();function s(o){const r=Math.min((o-i)/n,1);t.textContent=Math.round((1-Math.pow(1-r,3))*e),r<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}async function Zh(t,e){if(!e){st("/");return}t.innerHTML=tu();const n=await hr(e);if(!n){t.innerHTML=nu();return}t.innerHTML=eu(n),iu(t,n),Vh(e,i=>{const s=document.getElementById("slot-count"),o=document.getElementById("slot-fill"),r=document.getElementById("slot-sub");s&&(s.textContent=i),o&&(o.style.width=`${Math.round((n.maxSlots-i)/n.maxSlots*100)}%`),r&&(r.textContent=`${i} of ${n.maxSlots} remaining`)})}function eu(t){var r,a;const e=t.slotsRemaining<=0,n=t.status==="coming_soon",i="919876543210",s=encodeURIComponent(`Hi! I'd like to join the waitlist for ${t.title} on ${t.date}. Please let me know if a slot opens up.`),o=`https://wa.me/${i}?text=${s}`;return`
    ${wt()}

    <!-- BACK -->
    <div class="back-bar" style="padding:14px 48px;border-bottom:0.5px solid #D4C9BC;">
      <span style="font-size:11px;color:#6B5B4E;cursor:pointer;display:inline-flex;align-items:center;gap:6px;" onclick="navigate('/')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        All Sessions
      </span>
    </div>

    <!-- HERO IMAGE -->
    <div class="detail-hero" style="height:280px;background:#E0D8CE;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      ${t.coverImage?`<img src="${t.coverImage}" alt="${t.title}" style="width:100%;height:100%;object-fit:cover;">`:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'}
      <span style="position:absolute;top:16px;left:48px;" class="badge badge-category">${t.category}</span>
      ${!n&&!e?`<span style="position:absolute;top:16px;right:48px;" class="badge badge-live">${t.slotsRemaining} slots left</span>`:""}
      ${e?'<span style="position:absolute;top:16px;right:48px;" class="badge badge-full">Fully Booked</span>':""}
    </div>

    <!-- MAIN LAYOUT -->
    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;">

      <!-- LEFT CONTENT -->
      <div class="page-content" style="padding:32px 40px 40px 0;">
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Workshop</p>
        <h1 style="font-size:32px;font-weight:200;color:#1A1410;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px;">${t.title}</h1>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:22px;">
          <div class="card-host-avatar">${t.hostPhoto?`<img src="${t.hostPhoto}" alt="${t.hostName}" style="width:100%;height:100%;object-fit:cover;">`:((r=t.hostName)==null?void 0:r.charAt(0))||"H"}</div>
          <span style="font-size:12px;color:#6B5B4E;">Hosted by ${t.hostName}${t.hostRole?" · "+t.hostRole:""}</span>
        </div>
        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- META GRID -->
        <div class="meta-grid-cols" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
          ${Re("Calendar",ve(t.date))}
          ${Re("Clock",`${Me(t.time)}${t.duration?" — "+t.duration:""}`)}
          ${Re("Map-pin",t.outlet)}
          ${Re("Users",`Max ${t.maxSlots} attendees`)}
          ${t.language?Re("Language",t.language):""}
          ${t.duration?Re("Clock-hour-3",t.duration):""}
        </div>

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- ABOUT -->
        <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">About this session</p>
        <p style="font-size:13px;color:#6B5B4E;line-height:1.75;font-weight:300;margin-bottom:22px;">${t.description}</p>

        <!-- THINGS TO KNOW -->
        ${t.thingsToKnow&&t.thingsToKnow.length?`
          <p style="font-size:12px;font-weight:500;color:#1A1410;margin-bottom:10px;letter-spacing:0.02em;">Things to know</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;">
            ${t.thingsToKnow.map(l=>`<span class="badge badge-category" style="padding:4px 10px;font-size:10px;">${l}</span>`).join("")}
          </div>
        `:""}

        <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

        <!-- HOST PROFILE -->
        <div class="host-block">
          <p class="host-block-label">Your host</p>
          <div style="display:flex;align-items:flex-start;gap:16px;">
            <div class="host-avatar">
              ${t.hostPhoto?`<img src="${t.hostPhoto}" alt="${t.hostName}">`:((a=t.hostName)==null?void 0:a.charAt(0))||"H"}
            </div>
            <div>
              <span class="host-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${t.hostType==="heebee"?"Heebee Team":"External Host"}
              </span>
              <p style="font-size:15px;font-weight:400;color:#1A1410;margin-bottom:2px;">${t.hostName}</p>
              ${t.hostRole?`<p style="font-size:11px;color:#6B5B4E;margin-bottom:6px;">${t.hostRole}</p>`:""}
              ${t.hostBio?`<p style="font-size:12px;color:#6B5B4E;line-height:1.65;margin-bottom:10px;font-weight:300;">${t.hostBio}</p>`:""}
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${t.hostInstagram?`<a href="https://instagram.com/${t.hostInstagram.replace("@","")}" target="_blank" class="btn-ghost btn-sm"><div class="ink"></div><span>@ ${t.hostInstagram}</span></a>`:""}
                <button class="btn-ghost btn-sm" onclick="navigate('/')"><div class="ink"></div><span>Heebee Coffee</span></button>
              </div>
            </div>
          </div>
        </div>

        <!-- HEEBEE STRIP -->
        <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:#F2EDE6;border:0.5px solid #D4C9BC;border-radius:10px;">
          <span style="font-size:13px;font-weight:500;color:#1A1410;letter-spacing:0.03em;">Heebee Coffee</span>
          <div style="width:0.5px;height:16px;background:#D4C9BC;"></div>
          <a href="https://instagram.com/heebeecoffee" target="_blank" style="font-size:10px;color:#7C6F3E;cursor:pointer;">@ heebee.coffee</a>
          <div style="width:0.5px;height:16px;background:#D4C9BC;"></div>
          <span style="font-size:10px;color:#6B5B4E;">Ludhiana · Jalandhar</span>
        </div>
      </div>

      <!-- SIDEBAR -->
      <div class="page-sidebar" style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <!-- PRICE -->
          <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:6px;">
            <span style="font-family:'DM Mono',monospace;font-size:28px;color:#7C6F3E;">${W(t.price)}</span>
            <span style="font-size:11px;color:#6B5B4E;">per slot</span>
          </div>

          <!-- SLOT BAR -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:5px;">
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;" id="slot-count">${t.slotsRemaining}</span>
              <span style="font-size:10px;color:#6B5B4E;text-transform:uppercase;letter-spacing:0.08em;">slots left</span>
            </div>
            <div class="slot-bar-bg">
              <div class="slot-bar-fill" id="slot-fill" style="width:${Math.round((t.maxSlots-t.slotsRemaining)/t.maxSlots*100)}%;"></div>
            </div>
            <span style="font-size:9px;color:#B8A99A;" id="slot-sub">${t.slotsRemaining} of ${t.maxSlots} remaining</span>
          </div>

          <div style="height:0.5px;background:#E8E0D5;margin-bottom:14px;"></div>

          <!-- PAYMENT MODE -->
          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Pay via</p>
          <div style="display:flex;gap:8px;margin-bottom:14px;">
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${t.paymentMode==="razorpay"?"#7C6F3E":"#D4C9BC"};background:${t.paymentMode==="razorpay"?"#F2EDE6":"#fff"};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.paymentMode==="razorpay"?"#7C6F3E":"#6B5B4E"}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <p style="font-size:10px;font-weight:500;color:${t.paymentMode==="razorpay"?"#1A1410":"#6B5B4E"};">Razorpay</p>
            </div>
            <div style="flex:1;padding:10px;border-radius:8px;border:0.5px solid ${t.paymentMode==="qr"?"#7C6F3E":"#D4C9BC"};background:${t.paymentMode==="qr"?"#F2EDE6":"#fff"};text-align:center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.paymentMode==="qr"?"#7C6F3E":"#6B5B4E"}" stroke-width="1.5" stroke-linecap="round" style="display:block;margin:0 auto 4px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>
              <p style="font-size:10px;font-weight:500;color:${t.paymentMode==="qr"?"#1A1410":"#6B5B4E"};">UPI QR</p>
            </div>
          </div>

          ${n?`
            <div style="padding:12px;background:#F2EDE6;border-radius:6px;text-align:center;margin-bottom:8px;">
              <p style="font-size:12px;color:#D4A84B;font-weight:500;">Coming Soon</p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:3px;">Registration opens soon</p>
            </div>
          `:e?`
            <a href="${o}" target="_blank" class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;text-decoration:none;">
              <div class="ink"></div><span>Join Waitlist</span>
            </a>
          `:`
            <button class="btn-cta" style="width:100%;justify-content:center;margin-bottom:8px;" onclick="navigate('/book?id=${t.id}')">
              <div class="ink"></div><span>Book Your Slot</span>
            </button>
          `}

          <p style="font-size:10px;color:#B8A99A;text-align:center;line-height:1.5;margin-bottom:14px;">Confirmation sent via WhatsApp after booking.</p>

          <div style="height:0.5px;background:#E8E0D5;margin-bottom:12px;"></div>

          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5B4E;">
              <div style="width:4px;height:4px;border-radius:50%;background:#7C6F3E;flex-shrink:0;"></div>
              Free cancellation before 48 hrs
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5B4E;">
              <div style="width:4px;height:4px;border-radius:50%;background:#7C6F3E;flex-shrink:0;"></div>
              All ages welcome
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5B4E;">
              <div style="width:4px;height:4px;border-radius:50%;background:#7C6F3E;flex-shrink:0;"></div>
              Indoor · Seated
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- MOBILE BOOK BAR -->
    ${n?"":`
    <div class="mobile-book-bar">
      <div>
        <div class="mobile-book-bar-price">${W(t.price)}</div>
        <div class="mobile-book-bar-slots">${e?"Fully booked":`${t.slotsRemaining} slots left`}</div>
      </div>
      ${e?`<a href="${o}" target="_blank" class="btn-cta btn-sm" style="text-decoration:none;"><div class="ink"></div><span>Join Waitlist</span></a>`:`<button class="btn-cta btn-sm" onclick="navigate('/book?id=${t.id}')"><div class="ink"></div><span>Book Your Slot</span></button>`}
    </div>`}

    ${cn()}
  `}function Re(t,e){return`
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <div style="width:28px;height:28px;border-radius:6px;background:#E8E0D5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C6F3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${{Calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',Clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',"Map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',Users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',Language:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',"Clock-hour-3":'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16.5 12"/>'}[t]||""}</svg>
      </div>
      <div>
        <p style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;margin-bottom:2px;">${t.replace("-"," ")}</p>
        <p style="font-size:12px;color:#1A1410;">${e}</p>
      </div>
    </div>
  `}function tu(){return'<div style="min-height:100vh;padding:48px;"><div style="height:280px;background:#E8E0D5;border-radius:14px;margin-top:100px;animation:pulse 1.5s ease infinite;"></div></div><style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}</style>'}function nu(){return`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;"><p style="font-size:22px;font-weight:200;color:#1A1410;">Workshop not found</p><button class="btn-primary" onclick="navigate('/')"><div class="ink"></div><span>Back to sessions</span></button></div>`}function iu(t,e){e.additionalImages&&e.additionalImages.length}let _=null,N=1;async function su(t,e){if(!e){st("/");return}if(_=await hr(e),!_){st("/");return}N=1,t.innerHTML=ou(),du()}function ou(){return`
    ${wt()}

    <!-- STEPS -->
    <div class="steps">
      <div class="step">
        <div class="step-num active" id="sn1">1</div>
        <span class="step-label active" id="sl1">Your Details</span>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-num idle" id="sn2">2</div>
        <span class="step-label" id="sl2">Payment</span>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-num idle" id="sn3">3</div>
        <span class="step-label" id="sl3">Confirmation</span>
      </div>
    </div>

    <!-- MAIN LAYOUT -->
    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:70vh;">

      <!-- STEP PANELS -->
      <div class="page-content" style="padding:32px 40px 40px 0;">

        <!-- STEP 1: DETAILS -->
        <div id="panel1">
          <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:6px;">Step 1 of 3</p>
          <h2 style="font-size:24px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:4px;">Your details</h2>
          <p style="font-size:12px;color:#6B5B4E;font-weight:300;margin-bottom:22px;">Fill in details for each attendee. All fields required except Instagram.</p>
          <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

          <!-- TICKET COUNT -->
          <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:8px;">Tickets</p>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#fff;border:0.5px solid #D4C9BC;border-radius:8px;margin-bottom:20px;">
            <div>
              <p style="font-size:12px;font-weight:500;color:#1A1410;">Ticket for <span id="tcount-lbl">1</span></p>
              <p style="font-size:10px;color:#6B5B4E;margin-top:2px;">${W(_.price)} per person</p>
            </div>
            <div style="display:flex;align-items:center;gap:14px;">
              <button id="btn-minus" style="width:28px;height:28px;border-radius:50%;border:0.5px solid #D4C9BC;background:#F2EDE6;font-size:16px;color:#1A1410;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;transition:all 0.2s;" onmouseenter="this.style.background='#1A1410';this.style.color='#F2EDE6';" onmouseleave="this.style.background='#F2EDE6';this.style.color='#1A1410';">−</button>
              <span style="font-family:'DM Mono',monospace;font-size:20px;color:#1A1410;min-width:20px;text-align:center;" id="tcount">1</span>
              <button id="btn-plus" style="width:28px;height:28px;border-radius:50%;border:0.5px solid #D4C9BC;background:#F2EDE6;font-size:16px;color:#1A1410;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:300;transition:all 0.2s;" onmouseenter="this.style.background='#1A1410';this.style.color='#F2EDE6';" onmouseleave="this.style.background='#F2EDE6';this.style.color='#1A1410';">+</button>
            </div>
          </div>

          <!-- ATTENDEE FORMS -->
          <div id="attendee-forms"></div>

          <button id="to-step2" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;margin-top:8px;"
            onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
            onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
            <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
            <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Continue to Payment →</span>
          </button>
        </div>

        <!-- STEP 2: PAYMENT -->
        <div id="panel2" style="display:none;">
          <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:6px;">Step 2 of 3</p>
          <h2 style="font-size:24px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:4px;">Choose payment</h2>
          <p style="font-size:12px;color:#6B5B4E;font-weight:300;margin-bottom:22px;">Select how you'd like to pay for your slot.</p>
          <div style="height:0.5px;background:#D4C9BC;margin-bottom:22px;"></div>

          ${_.paymentMode==="razorpay"?ru():au()}
        </div>

        <!-- STEP 3: CONFIRMATION -->
        <div id="panel3" style="display:none;">
          ${lu()}
        </div>

      </div>

      <!-- SIDEBAR SUMMARY -->
      <div class="page-sidebar" style="padding:32px 0 40px;">
        <div class="summary-card" style="position:sticky;top:80px;">
          <!-- WS IMAGE -->
          <div style="height:80px;background:#E8E0D5;border-radius:8px;margin-bottom:14px;overflow:hidden;display:flex;align-items:center;justify-content:center;">
            ${_.coverImage?`<img src="${_.coverImage}" alt="${_.title}" style="width:100%;height:100%;object-fit:cover;">`:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8A99A" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'}
          </div>
          <span class="badge badge-category" style="margin-bottom:6px;display:inline-block;">${_.category}</span>
          <p style="font-size:13px;font-weight:500;color:#1A1410;margin-bottom:4px;">${_.title}</p>
          <p style="font-size:10px;color:#6B5B4E;line-height:1.6;margin-bottom:14px;">
            ${ve(_.date)} · ${Me(_.time)}<br>
            ${_.outlet}
          </p>
          <div style="height:0.5px;background:#E8E0D5;margin-bottom:12px;"></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Price per ticket</span>
            <span style="font-size:11px;color:#1A1410;">${W(_.price)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Tickets</span>
            <span style="font-size:11px;color:#1A1410;" id="sum-tickets">1</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:10px;color:#B8A99A;">Host</span>
            <span style="font-size:11px;color:#1A1410;">${_.hostName}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:12px;border-top:0.5px solid #E8E0D5;">
            <span style="font-size:12px;font-weight:500;color:#1A1410;">Total</span>
            <span style="font-family:'DM Mono',monospace;font-size:20px;color:#7C6F3E;" id="sum-total">${W(_.price)}</span>
          </div>
        </div>
      </div>

    </div>
  `}function ru(){return`
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:20px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;margin-bottom:12px;">Secure payment via Razorpay</p>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:36px;height:36px;border-radius:8px;background:#072654;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div>
          <p style="font-size:12px;font-weight:500;color:#1A1410;">Heebee Coffee</p>
          <p style="font-size:10px;color:#6B5B4E;">${_.title} · ${ve(_.date)}</p>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-top:0.5px solid #F2EDE6;">
        <span style="font-size:11px;color:#6B5B4E;" id="rp-ticket-line">1 ticket × ${W(_.price)}</span>
        <span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;" id="rp-total">${W(_.price)}</span>
      </div>
    </div>
    <button id="pay-btn" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;"
      onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
      onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
      <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
      <span class="lbl" id="pay-btn-label" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Pay ${W(_.price)} via Razorpay →</span>
    </button>
  `}function au(){return`
    <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:24px;display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:16px;">
      <p style="font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B8A99A;align-self:flex-start;">Scan to pay</p>
      <div style="width:160px;height:160px;border:0.5px dashed #D4C9BC;border-radius:8px;background:#F2EDE6;display:flex;align-items:center;justify-content:center;">
        ${_.qrImage?`<img src="${_.qrImage}" alt="UPI QR" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">`:'<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D4C9BC" stroke-width="1" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/></svg>'}
      </div>
      <p style="font-size:11px;color:#6B5B4E;text-align:center;line-height:1.6;">
        Pay <strong style="color:#7C6F3E;" id="qr-total">${W(_.price)}</strong> to complete booking.
      </p>
      <p style="font-size:10px;color:#B8A99A;text-align:center;">After payment, tap the button below to confirm.</p>
    </div>
    <button id="pay-btn" style="display:block;width:100%;padding:12px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;"
      onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
      onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
      <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
      <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">I've paid — Confirm Booking →</span>
    </button>
  `}function lu(){return`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 0;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:26px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:8px;">You're booked!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.7;margin-bottom:24px;max-width:380px;">
        Your slot for <strong style="color:#1A1410;">${_.title}</strong> is confirmed.
        See you at ${_.outlet} on ${ve(_.date)} at ${Me(_.time)}.
      </p>
      <div class="summary-card" style="width:100%;max-width:440px;margin-bottom:22px;text-align:left;" id="confirm-card">
        <!-- Filled by JS after booking -->
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;" id="confirm-actions">
        <!-- Filled by JS -->
      </div>
    </div>
  `}function cu(t,e){return`
    <div class="attendee-block">
      <div class="attendee-label">
        <div class="attendee-num">${t}</div>
        Attendee ${t}${e===1?" (you)":""}
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Full name <span class="req">*</span></label>
          <input class="field-input attendee-name" data-idx="${t}" type="text" placeholder="Full name" required>
        </div>
        <div class="field">
          <label class="field-label">Phone number <span class="req">*</span></label>
          <input class="field-input attendee-phone" data-idx="${t}" type="tel" placeholder="+91 XXXXX XXXXX" required>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Email address <span class="req">*</span></label>
        <input class="field-input attendee-email" data-idx="${t}" type="email" placeholder="name@email.com" required>
      </div>
      <div class="field" style="margin-bottom:0;">
        <label class="field-label">Instagram handle <span class="opt">optional</span></label>
        <input class="field-input attendee-instagram" data-idx="${t}" type="text" placeholder="@handle">
      </div>
    </div>
  `}function xn(){const t=document.getElementById("attendee-forms");t&&(t.innerHTML=Array.from({length:N},(e,n)=>cu(n+1,N)).join(""))}function xs(){const t=N*_.price,e=W(t),n=i=>document.getElementById(i);n("tcount")&&(n("tcount").textContent=N),n("tcount-lbl")&&(n("tcount-lbl").textContent=N),n("sum-tickets")&&(n("sum-tickets").textContent=N),n("sum-total")&&(n("sum-total").textContent=e),n("rp-ticket-line")&&(n("rp-ticket-line").textContent=`${N} ticket${N>1?"s":""} × ${W(_.price)}`),n("rp-total")&&(n("rp-total").textContent=e),n("qr-total")&&(n("qr-total").textContent=e),n("pay-btn-label")&&(n("pay-btn-label").textContent=`Pay ${e} via Razorpay →`)}function Cs(t){[1,2,3].forEach(e=>{const n=document.getElementById(`panel${e}`),i=document.getElementById(`sn${e}`),s=document.getElementById(`sl${e}`);n&&(n.style.display=e===t?"block":"none"),i&&(i.className=`step-num ${e<t?"done":e===t?"active":"idle"}`,i.innerHTML=e<t?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':e),s&&(s.className=`step-label ${e===t?"active":""}`)})}function ws(){var e,n,i,s,o,r,a,l;const t=[];for(let c=1;c<=N;c++){const h=(n=(e=document.querySelector(`.attendee-name[data-idx="${c}"]`))==null?void 0:e.value)==null?void 0:n.trim(),d=(s=(i=document.querySelector(`.attendee-phone[data-idx="${c}"]`))==null?void 0:i.value)==null?void 0:s.trim(),u=(r=(o=document.querySelector(`.attendee-email[data-idx="${c}"]`))==null?void 0:o.value)==null?void 0:r.trim(),p=(l=(a=document.querySelector(`.attendee-instagram[data-idx="${c}"]`))==null?void 0:a.value)==null?void 0:l.trim();if(!h||!d||!u)return null;t.push({name:h,phone:d,email:u,instagram:p})}return t}function du(t){var e,n,i;xn(),(e=document.getElementById("btn-plus"))==null||e.addEventListener("click",()=>{N<_.slotsRemaining&&(N++,xs(),xn())}),(n=document.getElementById("btn-minus"))==null||n.addEventListener("click",()=>{N>1&&(N--,xs(),xn())}),(i=document.getElementById("to-step2"))==null||i.addEventListener("click",()=>{if(!ws()){alert("Please fill in all required fields for each attendee.");return}Cs(2),window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("click",async s=>{if(s.target.closest("#pay-btn")||s.target.id==="pay-btn"){const o=ws();if(!o)return;const r=yr(),a=N*_.price,l={workshopId:_.id,workshopTitle:_.title,workshopDate:_.date,workshopTime:_.time,outlet:_.outlet,hostName:_.hostName,tickets:N,totalAmount:a,paymentMode:_.paymentMode,bookingId:r,attendees:o,primaryAttendee:o[0]};try{const c=await Wh(l);_.paymentMode==="razorpay"&&_.razorpayLink&&window.open(_.razorpayLink,"_blank"),Cs(3),hu(c,a,r),window.scrollTo({top:0,behavior:"smooth"})}catch(c){alert("Something went wrong. Please try again."),console.error(c)}}})}function hu(t,e,n){const i=document.getElementById("confirm-card"),s=document.getElementById("confirm-actions"),o=_;if(i&&(i.innerHTML=`
      <div class="summary-row"><span class="summary-key">Workshop</span><span class="summary-val">${o.title}</span></div>
      <div class="summary-row"><span class="summary-key">Date & Time</span><span class="summary-val">${ve(o.date)} · ${Me(o.time)}</span></div>
      <div class="summary-row"><span class="summary-key">Venue</span><span class="summary-val">${o.outlet}</span></div>
      <div class="summary-row"><span class="summary-key">Tickets</span><span class="summary-val">${N} slot${N>1?"s":""}</span></div>
      <div class="summary-row"><span class="summary-key">Amount paid</span><span class="summary-val mono">${W(e)}</span></div>
      <div class="summary-row"><span class="summary-key">Booking ID</span><span class="summary-val id">${n}</span></div>
    `),s){const r=encodeURIComponent(`✅ Booking Confirmed — Heebee Sessions

Workshop: ${o.title}
Date: ${ve(o.date)} · ${Me(o.time)}
Venue: ${o.outlet}
Tickets: ${N}
Amount: ${W(e)}
Booking ID: ${n}

See you there! ☕`),a="919876543210",l=`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(o.title+" — Heebee Sessions")}&dates=${o.date.replace(/-/g,"")}T${o.time.replace(":","")}00/${o.date.replace(/-/g,"")}T${o.time.replace(":","")}00&location=${encodeURIComponent(o.outlet)}`;s.innerHTML=`
      <a href="https://wa.me/${a}?text=${r}" target="_blank" class="btn-wa">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L0 24l6.335-1.503A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.373l-.361-.214-3.741.981.999-3.648-.235-.374A9.859 9.859 0 0 1 2.118 12C2.118 6.535 6.535 2.118 12 2.118c5.464 0 9.882 4.417 9.882 9.882 0 5.464-4.418 9.882-9.882 9.882z"/></svg>
        WhatsApp confirmation
      </a>
      <a href="${l}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;font-weight:500;color:#1A1410;cursor:pointer;text-decoration:none;">
        + Add to calendar
      </a>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:12px;color:#6B5B4E;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    `}}async function uu(t,e){if(!e.bookingId){st("/");return}t.innerHTML=`
    ${wt()}
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 48px;min-height:70vh;justify-content:center;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:32px;font-weight:200;color:#1A1410;letter-spacing:-0.02em;margin-bottom:10px;">You're booked!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.75;max-width:380px;margin-bottom:28px;">
        Your booking is confirmed. Check your WhatsApp for confirmation details.
      </p>
      <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:18px 24px;max-width:380px;margin-bottom:24px;text-align:left;">
        <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #F2EDE6;">
          <span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Booking ID</span>
          <span style="font-family:'DM Mono',monospace;font-size:11px;color:#6B5B4E;">${e.bookingId}</span>
        </div>
        ${e.workshop?`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #F2EDE6;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Workshop</span><span style="font-size:12px;color:#1A1410;">${decodeURIComponent(e.workshop)}</span></div>`:""}
        ${e.amount?`<div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:#B8A99A;">Amount</span><span style="font-family:'DM Mono',monospace;font-size:13px;color:#7C6F3E;">₹ ${e.amount}</span></div>`:""}
      </div>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:13px;color:#1A1410;cursor:pointer;" onclick="navigate('/')">
        Browse more sessions
      </button>
    </div>
    ${cn()}
  `}async function fu(t){t.innerHTML=pu(),gu()}function pu(){return`
    ${wt()}

    <div class="page-layout" style="display:grid;grid-template-columns:1fr 300px;gap:0;padding:0 48px;min-height:80vh;">

      <!-- FORM -->
      <div class="page-content" style="padding:40px 40px 48px 0;" id="form-col">
        <p style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:8px;">Host a session</p>
        <h1 style="font-size:32px;font-weight:200;color:#1A1410;letter-spacing:-0.02em;margin-bottom:8px;">Request to host<br>at Heebee</h1>
        <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.75;max-width:440px;margin-bottom:28px;">
          Got something worth sharing? Tell us about your idea. We'll review your request and reach out to discuss dates, terms and logistics.
        </p>
        <div style="height:0.5px;background:#D4C9BC;margin-bottom:28px;"></div>

        <!-- ABOUT YOU -->
        <p style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">About you</p>
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:18px;margin-bottom:20px;">
          <div class="field-row">
            <div class="field">
              <label class="field-label">Full name <span class="req">*</span></label>
              <input class="field-input" id="f-name" type="text" placeholder="Your full name" required>
            </div>
            <div class="field">
              <label class="field-label">Phone number <span class="req">*</span></label>
              <input class="field-input" id="f-phone" type="tel" placeholder="+91 XXXXX XXXXX" required>
            </div>
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label">Email address <span class="req">*</span></label>
              <input class="field-input" id="f-email" type="email" placeholder="you@email.com" required>
            </div>
            <div class="field">
              <label class="field-label">Instagram handle <span class="opt">optional</span></label>
              <input class="field-input" id="f-instagram" type="text" placeholder="@yourhandle">
            </div>
          </div>
          <div class="field" style="margin-bottom:0;">
            <label class="field-label">Your background / experience <span class="req">*</span></label>
            <textarea class="field-input" id="f-background" placeholder="Tell us about yourself — your expertise, what you do, past workshops or talks if any..." style="min-height:90px;" required></textarea>
          </div>
        </div>

        <!-- WORKSHOP IDEA -->
        <p style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Your workshop idea</p>
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:18px;margin-bottom:20px;">
          <div class="field">
            <label class="field-label">Workshop title / topic <span class="req">*</span></label>
            <input class="field-input" id="f-topic" type="text" placeholder="e.g. Watercolour for Beginners, Brand Identity 101" required>
          </div>
          <div class="field">
            <label class="field-label">What will attendees learn? <span class="req">*</span></label>
            <textarea class="field-input" id="f-description" placeholder="Describe your session — what you'll cover, format, duration, and what people take away..." style="min-height:90px;" required></textarea>
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label">Category <span class="req">*</span></label>
              <select class="field-input" id="f-category" required>
                <option value="" disabled selected>Select category</option>
                <option>Coffee</option>
                <option>Art & Design</option>
                <option>Wellness</option>
                <option>Business</option>
                <option>Food</option>
                <option>Music</option>
                <option>Photography</option>
                <option>Other</option>
              </select>
            </div>
            <div class="field">
              <label class="field-label">Price per slot (₹) <span class="req">*</span></label>
              <input class="field-input" id="f-price" type="number" placeholder="e.g. 500" min="0" required>
            </div>
          </div>
        </div>

        <!-- LOGISTICS -->
        <p style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Preferred logistics</p>
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:10px;padding:18px;margin-bottom:20px;">
          <div class="field-row">
            <div class="field">
              <label class="field-label">Preferred outlet <span class="req">*</span></label>
              <select class="field-input" id="f-outlet" required>
                <option value="" disabled selected>Select outlet</option>
                <option>Heebee SHB — Sarabha Nagar, Ludhiana</option>
                <option>Heebee GHB — Ghumar Mandi, Ludhiana</option>
                <option>Heebee JLD — Model Town, Jalandhar</option>
                <option>No preference</option>
              </select>
            </div>
            <div class="field">
              <label class="field-label">Preferred date <span class="opt">optional</span></label>
              <input class="field-input" id="f-date" type="date">
            </div>
          </div>
          <div class="field" style="margin-bottom:0;">
            <label class="field-label">Anything else? <span class="opt">optional</span></label>
            <textarea class="field-input" id="f-notes" placeholder="Equipment needed, special setup, co-hosts, links to past work..." style="min-height:60px;"></textarea>
          </div>
        </div>

        <!-- SUBMIT -->
        <button id="submit-btn" style="display:block;width:100%;padding:13px;border-radius:6px;border:0.5px solid #D4C9BC;background:#ffffff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.02em;cursor:pointer;position:relative;overflow:hidden;margin-bottom:10px;"
          onmouseenter="this.querySelector('.ink').style.left='0';this.querySelector('.lbl').style.color='#F2EDE6';"
          onmouseleave="this.querySelector('.ink').style.left='-100%';this.querySelector('.lbl').style.color='#1A1410';">
          <div class="ink" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7C6F3E;transition:left 0.35s cubic-bezier(0.77,0,0.175,1);z-index:1;"></div>
          <span class="lbl" style="position:relative;z-index:2;color:#1A1410;transition:color 0.15s ease 0.15s;">Submit Host Request →</span>
        </button>
        <p style="font-size:10px;color:#B8A99A;line-height:1.6;">We review every request personally. You'll hear from us within 3–5 working days.</p>
      </div>

      <!-- SIDEBAR -->
      <div class="page-sidebar" style="padding:40px 0 48px;">
        <!-- HOW IT WORKS -->
        <div style="background:#E8E0D5;border-radius:12px;padding:20px;margin-bottom:14px;position:relative;overflow:hidden;">
          <div style="position:absolute;inset:0;opacity:0.04;pointer-events:none;background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');background-size:200px;"></div>
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:14px;position:relative;">How it works</p>
          ${["Submit your request with your idea and background.","We review and get back within 3–5 working days.","If it's a fit, we discuss date, terms and logistics.","We publish the workshop and handle all bookings.","You show up and host. We take care of the rest."].map(t=>`
            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;position:relative;">
              <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
              <p style="font-size:11px;color:#6B5B4E;line-height:1.6;font-weight:300;">${t}</p>
            </div>
          `).join("")}
        </div>

        <!-- OUTLETS -->
        <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:16px;">
          <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#7C6F3E;margin-bottom:12px;">Our outlets</p>
          ${[{name:"Heebee SHB",loc:"Sarabha Nagar, Ludhiana · 120 seats"},{name:"Heebee GHB",loc:"Ghumar Mandi, Ludhiana · 20 seats"},{name:"Heebee JLD",loc:"Model Town, Jalandhar · 60 seats"}].map(t=>`
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:0.5px solid #F2EDE6;">
              <div style="width:8px;height:8px;border-radius:50%;background:#E8E0D5;border:0.5px solid #7C6F3E;flex-shrink:0;"></div>
              <div>
                <p style="font-size:12px;color:#1A1410;font-weight:400;">${t.name}</p>
                <p style="font-size:10px;color:#6B5B4E;">${t.loc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

    </div>

    <!-- SUCCESS STATE (hidden) -->
    <div id="success-screen" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:80px 48px;min-height:60vh;justify-content:center;">
      <div class="success-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 style="font-size:28px;font-weight:200;color:#1A1410;letter-spacing:-0.01em;margin-bottom:10px;">Request received!</h2>
      <p style="font-size:13px;color:#6B5B4E;font-weight:300;line-height:1.75;max-width:380px;margin-bottom:28px;">
        Thanks for reaching out. We've received your hosting request and will review it personally. Expect to hear from us within 3–5 working days.
      </p>
      <div style="background:#fff;border:0.5px solid #D4C9BC;border-radius:12px;padding:18px 22px;max-width:380px;text-align:left;margin-bottom:24px;">
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
          <p style="font-size:12px;color:#6B5B4E;line-height:1.6;font-weight:300;">Your request is under review — no approval yet.</p>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
          <p style="font-size:12px;color:#6B5B4E;line-height:1.6;font-weight:300;">We'll reach out to discuss terms and finalise details.</p>
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#7C6F3E;flex-shrink:0;margin-top:5px;"></div>
          <p style="font-size:12px;color:#6B5B4E;line-height:1.6;font-weight:300;">Questions? Reach us at <span style="color:#7C6F3E;">heebee.in</span></p>
        </div>
      </div>
      <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:6px;border:0.5px solid #D4C9BC;background:#fff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;color:#1A1410;cursor:pointer;" onclick="navigate('/')">
        Back to sessions
      </button>
    </div>

    ${cn()}
  `}function gu(t){var e;(e=document.getElementById("submit-btn"))==null||e.addEventListener("click",async()=>{var r,a,l,c,h,d,u,p,g,E,x,z,Z,H,F,ge,Se,It,Te,wi;const n={name:(a=(r=document.getElementById("f-name"))==null?void 0:r.value)==null?void 0:a.trim(),phone:(c=(l=document.getElementById("f-phone"))==null?void 0:l.value)==null?void 0:c.trim(),email:(d=(h=document.getElementById("f-email"))==null?void 0:h.value)==null?void 0:d.trim(),instagram:(p=(u=document.getElementById("f-instagram"))==null?void 0:u.value)==null?void 0:p.trim(),background:(E=(g=document.getElementById("f-background"))==null?void 0:g.value)==null?void 0:E.trim(),topic:(z=(x=document.getElementById("f-topic"))==null?void 0:x.value)==null?void 0:z.trim(),description:(H=(Z=document.getElementById("f-description"))==null?void 0:Z.value)==null?void 0:H.trim(),category:(F=document.getElementById("f-category"))==null?void 0:F.value,price:(ge=document.getElementById("f-price"))==null?void 0:ge.value,outlet:(Se=document.getElementById("f-outlet"))==null?void 0:Se.value,date:(It=document.getElementById("f-date"))==null?void 0:It.value,notes:(wi=(Te=document.getElementById("f-notes"))==null?void 0:Te.value)==null?void 0:wi.trim()};if(["name","phone","email","background","topic","description","category","price","outlet"].filter(Ye=>!n[Ye]).length){alert("Please fill in all required fields.");return}const o=document.getElementById("submit-btn");o.querySelector(".lbl").textContent="Submitting...",o.disabled=!0;try{await Hh(n),document.getElementById("form-col").style.display="none";const Ye=document.getElementById("success-screen");Ye.style.display="flex"}catch(Ye){console.error(Ye),alert("Something went wrong. Please try again."),o.querySelector(".lbl").textContent="Submit Host Request →",o.disabled=!1}})}const Ne=document.getElementById("app"),mu=document.getElementById("loader");async function ur(){const{path:t,params:e}=_r();switch(Ne.innerHTML="",t){case"/workshop":await Zh(Ne,e.id);break;case"/book":await su(Ne,e.id);break;case"/confirmation":await uu(Ne,e);break;case"/host":await fu(Ne);break;default:await jh(Ne)}requestAnimationFrame(()=>{mr(),gr()})}function wt(t=""){return`
    <nav class="nav">
      <div class="nav-logo" onclick="navigate('/')" style="cursor:pointer;">Heebee Coffee</div>
      <div class="nav-links">
        <span class="nav-link ${t==="sessions"?"active":""}" onclick="navigate('/')">Sessions</span>
        <span class="nav-link" onclick="window.open('https://instagram.com/heebeecoffee','_blank')">Instagram</span>
        <span class="nav-link" onclick="navigate('/')">Outlets</span>
      </div>
      <button class="btn-primary btn-sm" onclick="navigate('/host')">
        <div class="ink"></div><span>Host a Session</span>
      </button>
    </nav>`}function cn(){return`
    <footer class="footer">
      <div class="footer-logo">Heebee Coffee</div>
      <div class="footer-links">
        <span class="footer-link" onclick="navigate('/')">Sessions</span>
        <span class="footer-link" onclick="navigate('/host')">Host with us</span>
        <span class="footer-link" onclick="window.open('https://instagram.com/heebeecoffee','_blank')">@ Instagram</span>
      </div>
      <div style="font-size:10px;color:#6B5B4E;">Sarabha Nagar · Ghumar Mandi · Model Town Jalandhar</div>
    </footer>`}window.navigate=st;window.addEventListener("hashchange",ur);window.addEventListener("load",async()=>{await ur(),setTimeout(()=>mu.classList.add("hidden"),1800)});
