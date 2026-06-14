import{L as ti,g as gt,i as ii,a as ni,_ as Ve,C as ze,r as Ke,b as si,S as ie,E as Oe,c as k,d as A,e as ri,f as mt,h as y,F as Le,j as ai,q as ne,k as vt,l as oi,m as li,n as ci,o as di,p as ui,s as hi,t as X,u as Q,v as se,w as U,x as v,y as fe,z as _e,A as pi,B as fi,D as gi}from"./helpers-DbYsWB8w.js";function Ne(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t}function yt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mi=yt,bt=new Oe("auth","Firebase",yt());/**
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
 */const ge=new ti("@firebase/auth");function vi(i,...e){ge.logLevel<=mt.WARN&&ge.warn(`Auth (${ie}): ${i}`,...e)}function de(i,...e){ge.logLevel<=mt.ERROR&&ge.error(`Auth (${ie}): ${i}`,...e)}/**
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
 */function _(i,...e){throw De(i,...e)}function w(i,...e){return De(i,...e)}function _t(i,e,t){const n=Object.assign(Object.assign({},mi()),{[e]:t});return new Oe("auth","Firebase",n).create(e,{appName:i.name})}function $(i){return _t(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function De(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return bt.create(i,...e)}function p(i,e,...t){if(!i)throw De(e,...t)}function E(i){const e="INTERNAL ASSERTION FAILED: "+i;throw de(e),new Error(e)}function R(i,e){i||E(e)}/**
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
 */function Pe(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function yi(){return Ge()==="http:"||Ge()==="https:"}function Ge(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function bi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yi()||si()||"connection"in navigator)?navigator.onLine:!0}function _i(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class re{constructor(e,t){this.shortDelay=e,this.longDelay=t,R(t>e,"Short delay should be less than long delay!"),this.isMobile=ii()||ni()}get(){return bi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Me(i,e){R(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ii=new re(3e4,6e4);function H(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function B(i,e,t,n,s={}){return It(i,s,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const l=ne(Object.assign({key:i.config.apiKey},a)).slice(1),o=await i._getAdditionalHeaders();o["Content-Type"]="application/json",i.languageCode&&(o["X-Firebase-Locale"]=i.languageCode);const c=Object.assign({method:e,headers:o},r);return hi()||(c.referrerPolicy="no-referrer"),wt.fetch()(kt(i,i.config.apiHost,t,l),c)})}async function It(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},wi),e);try{const s=new Ei(i),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw ce(i,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[o,c]=l.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw ce(i,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw ce(i,"email-already-in-use",a);if(o==="USER_DISABLED")throw ce(i,"user-disabled",a);const h=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _t(i,h,c);_(i,h)}}catch(s){if(s instanceof Le)throw s;_(i,"network-request-failed",{message:String(s)})}}async function we(i,e,t,n,s={}){const r=await B(i,e,t,n,s);return"mfaPendingCredential"in r&&_(i,"multi-factor-auth-required",{_serverResponse:r}),r}function kt(i,e,t,n){const s=`${e}${t}?${n}`;return i.config.emulator?Me(i.config,s):`${i.config.apiScheme}://${s}`}function ki(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ei{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(w(this.auth,"network-request-failed")),Ii.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ce(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=w(i,e,n);return s.customData._tokenResponse=t,s}function Je(i){return i!==void 0&&i.enterprise!==void 0}class Ti{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ki(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Si(i,e){return B(i,"GET","/v2/recaptchaConfig",H(i,e))}/**
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
 */async function Ri(i,e){return B(i,"POST","/v1/accounts:delete",e)}async function Et(i,e){return B(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Z(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ai(i,e=!1){const t=A(i),n=await t.getIdToken(e),s=Ue(n);p(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:n,authTime:Z(Re(s.auth_time)),issuedAtTime:Z(Re(s.iat)),expirationTime:Z(Re(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Re(i){return Number(i)*1e3}function Ue(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return de("JWT malformed, contained fewer than 3 sections"),null;try{const s=ai(t);return s?JSON.parse(s):(de("Failed to decode base64 JWT payload"),null)}catch(s){return de("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ye(i){const e=Ue(i);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ee(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Le&&Pi(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function Pi({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Ci{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ce{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function me(i){var e;const t=i.auth,n=await i.getIdToken(),s=await ee(i,Et(t,{idToken:n}));p(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];i._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Tt(r.providerUserInfo):[],l=Oi(i.providerData,a),o=i.isAnonymous,c=!(i.email&&r.passwordHash)&&!(l!=null&&l.length),h=o?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Ce(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(i,u)}async function xi(i){const e=A(i);await me(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oi(i,e){return[...i.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Tt(i){return i.map(e=>{var{providerId:t}=e,n=Ne(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Li(i,e){const t=await It(i,{},async()=>{const n=ne({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=i.config,a=kt(i,s,"/v1/token",`key=${r}`),l=await i._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",wt.fetch()(a,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ni(i,e){return B(i,"POST","/v2/accounts:revokeToken",H(i,e))}/**
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
 */class V{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ye(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){p(e.length!==0,"internal-error");const t=Ye(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await Li(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,a=new V;return n&&(p(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(p(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(p(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new V,this.toJSON())}_performRefresh(){return E("not implemented")}}/**
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
 */function O(i,e){p(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class T{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Ne(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ci(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ce(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return p(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ai(this,e)}reload(){return xi(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new T(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(k(this.auth.app))return Promise.reject($(this.auth));const e=await this.getIdToken();return await ee(this,Ri(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,a,l,o,c,h;const u=(n=t.displayName)!==null&&n!==void 0?n:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,m=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,d=(a=t.photoURL)!==null&&a!==void 0?a:void 0,g=(l=t.tenantId)!==null&&l!==void 0?l:void 0,b=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,P=(c=t.createdAt)!==null&&c!==void 0?c:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:x,isAnonymous:je,providerData:Te,stsTokenManager:We}=t;p(C&&We,e,"internal-error");const Zt=V.fromJSON(this.name,We);p(typeof C=="string",e,"internal-error"),O(u,e.name),O(f,e.name),p(typeof x=="boolean",e,"internal-error"),p(typeof je=="boolean",e,"internal-error"),O(m,e.name),O(d,e.name),O(g,e.name),O(b,e.name),O(P,e.name),O(F,e.name);const Se=new T({uid:C,auth:e,email:f,emailVerified:x,displayName:u,isAnonymous:je,photoURL:d,phoneNumber:m,tenantId:g,stsTokenManager:Zt,createdAt:P,lastLoginAt:F});return Te&&Array.isArray(Te)&&(Se.providerData=Te.map(ei=>Object.assign({},ei))),b&&(Se._redirectEventId=b),Se}static async _fromIdTokenResponse(e,t,n=!1){const s=new V;s.updateFromServerResponse(t);const r=new T({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await me(r),r}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];p(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Tt(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new V;l.updateFromIdToken(n);const o=new T({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ce(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(o,c),o}}/**
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
 */const Xe=new Map;function S(i){R(i instanceof Function,"Expected a class definition");let e=Xe.get(i);return e?(R(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Xe.set(i,e),e)}/**
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
 */class St{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}St.type="NONE";const Qe=St;/**
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
 */function ue(i,e,t){return`firebase:${i}:${e}:${t}`}class z{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=ue(this.userKey,s.apiKey,r),this.fullPersistenceKey=ue("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?T._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new z(S(Qe),e,n);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||S(Qe);const a=ue(n,e.config.apiKey,e.name);let l=null;for(const c of t)try{const h=await c._get(a);if(h){const u=T._fromJSON(e,h);c!==r&&(l=u),r=c;break}}catch{}const o=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new z(r,e,n):(r=o[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new z(r,e,n))}}/**
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
 */function Ze(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ct(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ot(e))return"Blackberry";if(Lt(e))return"Webos";if(At(e))return"Safari";if((e.includes("chrome/")||Pt(e))&&!e.includes("edge/"))return"Chrome";if(xt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Rt(i=y()){return/firefox\//i.test(i)}function At(i=y()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pt(i=y()){return/crios\//i.test(i)}function Ct(i=y()){return/iemobile/i.test(i)}function xt(i=y()){return/android/i.test(i)}function Ot(i=y()){return/blackberry/i.test(i)}function Lt(i=y()){return/webos/i.test(i)}function $e(i=y()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Di(i=y()){var e;return $e(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mi(){return di()&&document.documentMode===10}function Nt(i=y()){return $e(i)||xt(i)||Lt(i)||Ot(i)||/windows phone/i.test(i)||Ct(i)}/**
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
 */function Dt(i,e=[]){let t;switch(i){case"Browser":t=Ze(y());break;case"Worker":t=`${Ze(y())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ie}/${n}`}/**
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
 */class Ui{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((a,l)=>{try{const o=e(r);a(o)}catch(o){l(o)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function $i(i,e={}){return B(i,"GET","/v2/passwordPolicy",H(i,e))}/**
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
 */const Bi=6;class Fi{constructor(e){var t,n,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Bi,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,r,a,l;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(t=o.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(n=o.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(s=o.containsLowercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(r=o.containsUppercaseLetter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(l=o.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class qi{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new et(this),this.idTokenSubscription=new et(this),this.beforeStateQueue=new Ui(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=S(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await z.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Et(this,{idToken:e}),n=await T._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(k(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===l)&&(o!=null&&o.user)&&(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await me(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_i()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(k(this.app))return Promise.reject($(this));const t=e?A(e):null;return t&&p(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return k(this.app)?Promise.reject($(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return k(this.app)?Promise.reject($(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(S(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $i(this),t=new Fi(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oe("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ni(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&S(e)||this._popupRedirectResolver;p(t,this,"argument-error"),this.redirectPersistenceManager=await z.create(this,[S(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const o=e.addObserver(t,n,s);return()=>{a=!0,o()}}else{const o=e.addObserver(t);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vi(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function J(i){return A(i)}class et{constructor(e){this.auth=e,this.observer=null,this.addObserver=ri(t=>this.observer=t)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ie={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hi(i){Ie=i}function Mt(i){return Ie.loadJS(i)}function ji(){return Ie.recaptchaEnterpriseScript}function Wi(){return Ie.gapiScript}function Vi(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const zi="recaptcha-enterprise",Ki="NO_RECAPTCHA";class Gi{constructor(e){this.type=zi,this.auth=J(e)}async verify(e="verify",t=!1){async function n(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{Si(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ti(o);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,a(c.siteKey)}}).catch(o=>{l(o)})})}function s(r,a,l){const o=window.grecaptcha;Je(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(c=>{a(c)}).catch(()=>{a(Ki)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,a)=>{n(this.auth).then(l=>{if(!t&&Je(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let o=ji();o.length!==0&&(o+=l),Mt(o).then(()=>{s(l,r,a)}).catch(c=>{a(c)})}}).catch(l=>{a(l)})})}}async function tt(i,e,t,n=!1){const s=new Gi(i);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function it(i,e,t,n){var s;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await tt(i,e,t,t==="getOobCode");return n(i,r)}else return n(i,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await tt(i,e,t,t==="getOobCode");return n(i,a)}else return Promise.reject(r)})}/**
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
 */function Ji(i,e){const t=vt(i,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ci(r,e??{}))return s;_(s,"already-initialized")}return t.initialize({options:e})}function Yi(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(S);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Xi(i,e,t){const n=J(i);p(n._canInitEmulator,n,"emulator-config-failed"),p(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,r=Ut(e),{host:a,port:l}=Qi(e),o=l===null?"":`:${l}`;n.config.emulator={url:`${r}//${a}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Zi()}function Ut(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Qi(i){const e=Ut(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const r=s[1];return{host:r,port:nt(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:nt(a)}}}function nt(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Zi(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}async function en(i,e){return B(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tn(i,e){return we(i,"POST","/v1/accounts:signInWithPassword",H(i,e))}/**
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
 */async function nn(i,e){return we(i,"POST","/v1/accounts:signInWithEmailLink",H(i,e))}async function sn(i,e){return we(i,"POST","/v1/accounts:signInWithEmailLink",H(i,e))}/**
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
 */class te extends Be{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new te(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new te(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return it(e,t,"signInWithPassword",tn);case"emailLink":return nn(e,{email:this._email,oobCode:this._password});default:_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return it(e,n,"signUpPassword",en);case"emailLink":return sn(e,{idToken:t,email:this._email,oobCode:this._password});default:_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function K(i,e){return we(i,"POST","/v1/accounts:signInWithIdp",H(i,e))}/**
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
 */const rn="http://localhost";class q extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new q(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Ne(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new q(n,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return K(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,K(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,K(e,t)}buildRequest(){const e={requestUri:rn,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ne(t)}return e}}/**
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
 */function an(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function on(i){const e=X(Q(i)).link,t=e?X(Q(e)).deep_link_id:null,n=X(Q(i)).deep_link_id;return(n?X(Q(n)).link:null)||n||t||e||i}class Fe{constructor(e){var t,n,s,r,a,l;const o=X(Q(e)),c=(t=o.apiKey)!==null&&t!==void 0?t:null,h=(n=o.oobCode)!==null&&n!==void 0?n:null,u=an((s=o.mode)!==null&&s!==void 0?s:null);p(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=o.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=on(e);try{return new Fe(t)}catch{return null}}}/**
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
 */class Y{constructor(){this.providerId=Y.PROVIDER_ID}static credential(e,t){return te._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Fe.parseLink(t);return p(n,"argument-error"),te._fromEmailAndCode(e,n.code,n.tenantId)}}Y.PROVIDER_ID="password";Y.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Y.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $t{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ae extends $t{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class L extends ae{constructor(){super("facebook.com")}static credential(e){return q._fromParams({providerId:L.PROVIDER_ID,signInMethod:L.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return L.credentialFromTaggedObject(e)}static credentialFromError(e){return L.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return L.credential(e.oauthAccessToken)}catch{return null}}}L.FACEBOOK_SIGN_IN_METHOD="facebook.com";L.PROVIDER_ID="facebook.com";/**
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
 */class N extends ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return q._fromParams({providerId:N.PROVIDER_ID,signInMethod:N.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return N.credentialFromTaggedObject(e)}static credentialFromError(e){return N.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return N.credential(t,n)}catch{return null}}}N.GOOGLE_SIGN_IN_METHOD="google.com";N.PROVIDER_ID="google.com";/**
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
 */class D extends ae{constructor(){super("github.com")}static credential(e){return q._fromParams({providerId:D.PROVIDER_ID,signInMethod:D.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return D.credential(e.oauthAccessToken)}catch{return null}}}D.GITHUB_SIGN_IN_METHOD="github.com";D.PROVIDER_ID="github.com";/**
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
 */class M extends ae{constructor(){super("twitter.com")}static credential(e,t){return q._fromParams({providerId:M.PROVIDER_ID,signInMethod:M.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return M.credentialFromTaggedObject(e)}static credentialFromError(e){return M.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return M.credential(t,n)}catch{return null}}}M.TWITTER_SIGN_IN_METHOD="twitter.com";M.PROVIDER_ID="twitter.com";/**
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
 */class G{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await T._fromIdTokenResponse(e,n,s),a=st(n);return new G({user:r,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=st(n);return new G({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function st(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ve extends Le{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ve.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ve(e,t,n,s)}}function Bt(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ve._fromErrorAndOperation(i,r,e,n):r})}async function ln(i,e,t=!1){const n=await ee(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return G._forOperation(i,"link",n)}/**
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
 */async function cn(i,e,t=!1){const{auth:n}=i;if(k(n.app))return Promise.reject($(n));const s="reauthenticate";try{const r=await ee(i,Bt(n,s,e,i),t);p(r.idToken,n,"internal-error");const a=Ue(r.idToken);p(a,n,"internal-error");const{sub:l}=a;return p(i.uid===l,n,"user-mismatch"),G._forOperation(i,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_(n,"user-mismatch"),r}}/**
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
 */async function Ft(i,e,t=!1){if(k(i.app))return Promise.reject($(i));const n="signIn",s=await Bt(i,n,e),r=await G._fromIdTokenResponse(i,n,s);return t||await i._updateCurrentUser(r.user),r}async function dn(i,e){return Ft(J(i),e)}/**
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
 */async function un(i){const e=J(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hn(i,e,t){return k(i.app)?Promise.reject($(i)):dn(A(i),Y.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&un(i),n})}function pn(i,e,t,n){return A(i).onIdTokenChanged(e,t,n)}function fn(i,e,t){return A(i).beforeAuthStateChanged(e,t)}function gn(i,e,t,n){return A(i).onAuthStateChanged(e,t,n)}function mn(i){return A(i).signOut()}const ye="__sak";/**
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
 */class qt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ye,"1"),this.storage.removeItem(ye),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vn=1e3,yn=10;class Ht extends qt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nt(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,o)=>{this.notifyListeners(a,o)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);Mi()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yn):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},vn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ht.type="LOCAL";const bn=Ht;/**
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
 */class jt extends qt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jt.type="SESSION";const Wt=jt;/**
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
 */function _n(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ke{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ke(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(a).map(async c=>c(t.origin,r)),o=await _n(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ke.receivers=[];/**
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
 */function qe(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class wn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,o)=>{const c=qe("",20);s.port1.start();const h=setTimeout(()=>{o(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(f.data.response);break;default:clearTimeout(h),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function I(){return window}function In(i){I().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Vt(){return typeof I().WorkerGlobalScope<"u"&&typeof I().importScripts=="function"}async function kn(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function En(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Tn(){return Vt()?self:null}/**
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
 */const zt="firebaseLocalStorageDb",Sn=1,be="firebaseLocalStorage",Kt="fbase_key";class oe{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ee(i,e){return i.transaction([be],e?"readwrite":"readonly").objectStore(be)}function Rn(){const i=indexedDB.deleteDatabase(zt);return new oe(i).toPromise()}function xe(){const i=indexedDB.open(zt,Sn);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(be,{keyPath:Kt})}catch(s){t(s)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(be)?e(n):(n.close(),await Rn(),e(await xe()))})})}async function rt(i,e,t){const n=Ee(i,!0).put({[Kt]:e,value:t});return new oe(n).toPromise()}async function An(i,e){const t=Ee(i,!1).get(e),n=await new oe(t).toPromise();return n===void 0?null:n.value}function at(i,e){const t=Ee(i,!0).delete(e);return new oe(t).toPromise()}const Pn=800,Cn=3;class Gt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xe(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Cn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ke._getInstance(Tn()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kn(),!this.activeServiceWorker)return;this.sender=new wn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||En()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xe();return await rt(e,ye,"1"),await at(e,ye),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>An(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>at(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ee(s,!1).getAll();return new oe(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gt.type="LOCAL";const xn=Gt;new re(3e4,6e4);/**
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
 */function On(i,e){return e?S(e):(p(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class He extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return K(e,this._buildIdpRequest())}_linkToIdToken(e,t){return K(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return K(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(i){return Ft(i.auth,new He(i),i.bypassAuthState)}function Nn(i){const{auth:e,user:t}=i;return p(t,e,"internal-error"),cn(t,new He(i),i.bypassAuthState)}async function Dn(i){const{auth:e,user:t}=i;return p(t,e,"internal-error"),ln(t,new He(i),i.bypassAuthState)}/**
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
 */class Jt{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return Nn;default:_(this.auth,"internal-error")}}resolve(e){R(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){R(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mn=new re(2e3,1e4);class W extends Jt{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,W.currentPopupAction&&W.currentPopupAction.cancel(),W.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){R(this.filter.length===1,"Popup operations only handle one event");const e=qe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(w(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,W.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mn.get())};e()}}W.currentPopupAction=null;/**
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
 */const Un="pendingRedirect",he=new Map;class $n extends Jt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=he.get(this.auth._key());if(!e){try{const n=await Bn(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}he.set(this.auth._key(),e)}return this.bypassAuthState||he.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bn(i,e){const t=Hn(e),n=qn(i);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Fn(i,e){he.set(i._key(),e)}function qn(i){return S(i._redirectPersistence)}function Hn(i){return ue(Un,i.config.apiKey,i.name)}async function jn(i,e,t=!1){if(k(i.app))return Promise.reject($(i));const n=J(i),s=On(n,e),a=await new $n(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Wn=10*60*1e3;class Vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yt(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(ot(e))}saveEventToCache(e){this.cachedEventUids.add(ot(e)),this.lastProcessedEventTime=Date.now()}}function ot(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Yt({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zn(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yt(i);default:return!1}}/**
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
 */async function Kn(i,e={}){return B(i,"GET","/v1/projects",e)}/**
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
 */const Gn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jn=/^https?/;async function Yn(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Kn(i);for(const t of e)try{if(Xn(t))return}catch{}_(i,"unauthorized-domain")}function Xn(i){const e=Pe(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const a=new URL(i);return a.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Jn.test(t))return!1;if(Gn.test(i))return n===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Qn=new re(3e4,6e4);function lt(){const i=I().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Zn(i){return new Promise((e,t)=>{var n,s,r;function a(){lt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lt(),t(w(i,"network-request-failed"))},timeout:Qn.get()})}if(!((s=(n=I().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=I().gapi)===null||r===void 0)&&r.load)a();else{const l=Vi("iframefcb");return I()[l]=()=>{gapi.load?a():t(w(i,"network-request-failed"))},Mt(`${Wi()}?onload=${l}`).catch(o=>t(o))}}).catch(e=>{throw pe=null,e})}let pe=null;function es(i){return pe=pe||Zn(i),pe}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ts=new re(5e3,15e3),is="__/auth/iframe",ns="emulator/auth/iframe",ss={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function as(i){const e=i.config;p(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Me(e,ns):`https://${i.config.authDomain}/${is}`,n={apiKey:e.apiKey,appName:i.name,v:ie},s=rs.get(i.config.apiHost);s&&(n.eid=s);const r=i._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${ne(n).slice(1)}`}async function os(i){const e=await es(i),t=I().gapi;return p(t,i,"internal-error"),e.open({where:document.body,url:as(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ss,dontclear:!0},n=>new Promise(async(s,r)=>{await n.restyle({setHideOnLeave:!1});const a=w(i,"network-request-failed"),l=I().setTimeout(()=>{r(a)},ts.get());function o(){I().clearTimeout(l),s(n)}n.ping(o).then(o,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ls={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cs=500,ds=600,us="_blank",hs="http://localhost";class ct{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ps(i,e,t,n=cs,s=ds){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const o=Object.assign(Object.assign({},ls),{width:n.toString(),height:s.toString(),top:r,left:a}),c=y().toLowerCase();t&&(l=Pt(c)?us:t),Rt(c)&&(e=e||hs,o.scrollbars="yes");const h=Object.entries(o).reduce((f,[m,d])=>`${f}${m}=${d},`,"");if(Di(c)&&l!=="_self")return fs(e||"",l),new ct(null);const u=window.open(e||"",l,h);p(u,i,"popup-blocked");try{u.focus()}catch{}return new ct(u)}function fs(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const gs="__/auth/handler",ms="emulator/auth/handler",vs=encodeURIComponent("fac");async function dt(i,e,t,n,s,r){p(i.config.authDomain,i,"auth-domain-config-required"),p(i.config.apiKey,i,"invalid-api-key");const a={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:ie,eventId:s};if(e instanceof $t){e.setDefaultLanguage(i.languageCode),a.providerId=e.providerId||"",ui(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))a[h]=u}if(e instanceof ae){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(a.scopes=h.join(","))}i.tenantId&&(a.tid=i.tenantId);const l=a;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const o=await i._getAppCheckToken(),c=o?`#${vs}=${encodeURIComponent(o)}`:"";return`${ys(i)}?${ne(l).slice(1)}${c}`}function ys({config:i}){return i.emulator?Me(i,ms):`https://${i.authDomain}/${gs}`}/**
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
 */const Ae="webStorageSupport";class bs{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wt,this._completeRedirectFn=jn,this._overrideRedirectResult=Fn}async _openPopup(e,t,n,s){var r;R((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await dt(e,t,n,Pe(),s);return ps(e,a,qe())}async _openRedirect(e,t,n,s){await this._originValidation(e);const r=await dt(e,t,n,Pe(),s);return In(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(R(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await os(e),n=new Vn(e);return t.register("authEvent",s=>(p(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ae,{type:Ae},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ae];a!==void 0&&t(!!a),_(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nt()||At()||$e()}}const _s=bs;var ut="@firebase/auth",ht="1.7.9";/**
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
 */class ws{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Is(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ks(i){Ve(new ze("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;p(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:a,authDomain:l,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dt(i)},c=new qi(n,s,r,o);return Yi(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ve(new ze("auth-internal",e=>{const t=J(e.getProvider("auth").getImmediate());return(n=>new ws(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(ut,ht,Is(i)),Ke(ut,ht,"esm2017")}/**
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
 */const Es=5*60,Ts=gt("authIdTokenMaxAge")||Es;let pt=null;const Ss=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ts)return;const s=t==null?void 0:t.token;pt!==s&&(pt=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Xt(i=li()){const e=vt(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Ji(i,{popupRedirectResolver:_s,persistence:[xn,bn,Wt]}),n=gt("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=Ss(r.toString());fn(t,a,()=>a(t.currentUser)),pn(t,l=>a(l))}}const s=oi("auth");return s&&Xi(t,`http://${s}`),t}function Rs(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Hi({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=s=>{const r=w("internal-error");r.customData=s,t(r)},n.type="text/javascript",n.charset="UTF-8",Rs().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ks("Browser");function As(i){i.innerHTML=`
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-logo">Heebee Coffee</div>
        <div class="login-sub">Admin Panel</div>
        <div class="login-error" id="login-error"></div>
        <div class="field">
          <label class="field-label">Email</label>
          <input class="field-input" id="l-email" type="email" placeholder="you@heebeecoffee.com" autocomplete="email">
        </div>
        <div class="field">
          <label class="field-label">Password</label>
          <input class="field-input" id="l-pass" type="password" placeholder="••••••••" autocomplete="current-password">
        </div>
        <button id="login-btn" style="display:block;width:100%;padding:11px;border-radius:6px;border:none;background:#1A1410;color:#F2EDE6;font-family:'Outfit',sans-serif;font-size:13px;font-weight:500;cursor:pointer;margin-top:4px;transition:opacity 0.15s;"
          onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='1'">
          Sign in
        </button>
        <p style="font-size:10px;color:#B8A99A;text-align:center;margin-top:14px;line-height:1.6;">Access restricted to Heebee team members only.</p>
      </div>
    </div>
  `;const e=Xt(),t=document.getElementById("login-btn"),n=document.getElementById("login-error");document.getElementById("l-pass").addEventListener("keydown",s=>{s.key==="Enter"&&t.click()}),t.addEventListener("click",async()=>{const s=document.getElementById("l-email").value.trim(),r=document.getElementById("l-pass").value;if(!s||!r){n.textContent="Please enter your email and password.",n.style.display="block";return}t.textContent="Signing in...",t.disabled=!0,n.style.display="none";try{await hn(e,s,r)}catch(a){t.textContent="Sign in",t.disabled=!1,n.textContent=a.code==="auth/invalid-credential"?"Incorrect email or password.":"Something went wrong. Try again.",n.style.display="block"}})}async function Ps(i,e){i.innerHTML=le("/",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Dashboard</div>
        <div class="admin-topbar-sub">Overview of Heebee Sessions</div>
      </div>
      <button class="btn-primary" onclick="adminNavigate('/workshop-form')">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New Workshop
      </button>
    </div>
    <div class="admin-body">
      <div class="stat-grid" id="stats">
        ${[1,2,3,4].map(()=>'<div class="stat-card"><div class="stat-label">Loading...</div><div class="stat-value" style="color:#E8E0D5;">—</div></div>').join("")}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="admin-table-wrap">
          <div class="admin-table-header">
            <div class="admin-table-title">Recent Bookings</div>
            <button class="btn-ghost" style="font-size:11px;padding:5px 10px;" onclick="adminNavigate('/bookings')">View all</button>
          </div>
          <div id="recent-bookings"><div class="empty-state">Loading...</div></div>
        </div>
        <div class="admin-table-wrap">
          <div class="admin-table-header">
            <div class="admin-table-title">Host Requests</div>
            <button class="btn-ghost" style="font-size:11px;padding:5px 10px;" onclick="adminNavigate('/host-requests')">View all</button>
          </div>
          <div id="recent-requests"><div class="empty-state">Loading...</div></div>
        </div>
      </div>
    </div>
  `);const t=se(),[n,s,r]=await Promise.all([U(v(t,"workshops")),U(v(t,"bookings")),U(v(t,"host_requests"))]),a=n.exists()?Object.values(n.val()):[],l=s.exists()?Object.values(s.val()):[],o=r.exists()?Object.values(r.val()):[],c=a.filter(d=>d.status==="live").length,h=l.reduce((d,g)=>d+(g.totalAmount||0),0),u=o.filter(d=>d.status==="pending").length;document.getElementById("stats").innerHTML=`
    <div class="stat-card">
      <div class="stat-label">Live Workshops</div>
      <div class="stat-value">${c}</div>
      <div class="stat-sub">${a.length} total</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Total Bookings</div>
      <div class="stat-value">${l.length}</div>
      <div class="stat-sub">All time</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Total Revenue</div>
      <div class="stat-value" style="font-size:20px;">${fe(h)}</div>
      <div class="stat-sub">All bookings</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Pending Requests</div>
      <div class="stat-value" style="color:${u>0?"#8A6A1A":"var(--text)"};">${u}</div>
      <div class="stat-sub">Host requests</div>
    </div>
  `;const f=l.slice(-5).reverse();document.getElementById("recent-bookings").innerHTML=f.length?`
    <table>
      <thead><tr><th>Name</th><th>Workshop</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        ${f.map(d=>{var g;return`
          <tr>
            <td>${((g=d.primaryAttendee)==null?void 0:g.name)||"—"}</td>
            <td style="color:var(--text-muted);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${d.workshopTitle||"—"}</td>
            <td class="mono">${fe(d.totalAmount)}</td>
            <td><span class="badge badge-${d.status||"pending"}">${d.status||"pending"}</span></td>
          </tr>
        `}).join("")}
      </tbody>
    </table>
  `:'<div class="empty-state">No bookings yet</div>';const m=o.slice(-5).reverse();document.getElementById("recent-requests").innerHTML=m.length?`
    <table>
      <thead><tr><th>Name</th><th>Topic</th><th>Status</th></tr></thead>
      <tbody>
        ${m.map(d=>`
          <tr>
            <td>${d.name||"—"}</td>
            <td style="color:var(--text-muted);">${d.topic||"—"}</td>
            <td><span class="badge badge-${d.status||"pending"}">${d.status||"pending"}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `:'<div class="empty-state">No host requests yet</div>'}async function Cs(i,e){i.innerHTML=le("/workshops",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Workshops</div>
        <div class="admin-topbar-sub">Manage all sessions</div>
      </div>
      <button class="btn-primary" onclick="adminNavigate('/workshop-form')">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New Workshop
      </button>
    </div>
    <div class="admin-body">
      <div class="filter-row" id="ws-filters">
        <button class="filter-pill active" data-status="all">All</button>
        <button class="filter-pill" data-status="live">Live</button>
        <button class="filter-pill" data-status="coming_soon">Coming Soon</button>
        <button class="filter-pill" data-status="draft">Draft</button>
        <button class="filter-pill" data-status="past">Past</button>
      </div>
      <div class="admin-table-wrap">
        <div id="ws-table"><div class="empty-state">Loading...</div></div>
      </div>
    </div>
  `);const t=se(),n=await U(v(t,"workshops"));if(!n.exists()){document.getElementById("ws-table").innerHTML=`<div class="empty-state">No workshops yet. <span style="color:var(--accent);cursor:pointer;" onclick="adminNavigate('/workshop-form')">Create one →</span></div>`;return}const s=Object.entries(n.val()).map(([a,l])=>({id:a,...l})).sort((a,l)=>new Date(l.createdAt)-new Date(a.createdAt));function r(a){const l=a==="all"?s:s.filter(o=>o.status===a);if(!l.length){document.getElementById("ws-table").innerHTML='<div class="empty-state">No workshops in this category.</div>';return}document.getElementById("ws-table").innerHTML=`
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Outlet</th>
            <th>Slots</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${l.map(o=>`
            <tr>
              <td style="font-weight:500;max-width:200px;">
                <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${o.title}</div>
                <div style="font-size:10px;color:var(--text-faint);margin-top:1px;">${o.hostName||"—"}</div>
              </td>
              <td style="color:var(--text-muted);white-space:nowrap;">${o.date?pi(o.date):"TBC"}</td>
              <td style="color:var(--text-muted);font-size:11px;">${o.outlet?o.outlet.split(",")[0]:"—"}</td>
              <td>
                <span class="mono">${o.slotsRemaining??"—"}/${o.maxSlots??"—"}</span>
              </td>
              <td class="mono">${o.price?fe(o.price):"—"}</td>
              <td>
                <select onchange="updateWorkshopStatus('${o.id}', this.value)"
                  style="font-family:'Outfit',sans-serif;font-size:11px;padding:3px 8px;border-radius:4px;border:0.5px solid var(--border);background:var(--white);color:var(--text);cursor:pointer;">
                  <option value="live" ${o.status==="live"?"selected":""}>Live</option>
                  <option value="coming_soon" ${o.status==="coming_soon"?"selected":""}>Coming Soon</option>
                  <option value="draft" ${o.status==="draft"?"selected":""}>Draft</option>
                  <option value="past" ${o.status==="past"?"selected":""}>Past</option>
                </select>
              </td>
              <td>
                <div class="action-btns">
                  <div class="tip-wrap">
                    <div class="tip">View Bookings</div>
                    <button class="action-btn action-btn-default" onclick="adminNavigate('/bookings',{workshopId:'${o.id}'})">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                  </div>
                  <div class="tip-wrap">
                    <div class="tip">Edit</div>
                    <button class="action-btn action-btn-default" onclick="adminNavigate('/workshop-form',{id:'${o.id}'})">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}r("all"),document.querySelectorAll(".filter-pill").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll(".filter-pill").forEach(l=>l.classList.remove("active")),a.classList.add("active"),r(a.dataset.status)})}),window.updateWorkshopStatus=async(a,l)=>{await _e(v(t,`workshops/${a}`),{status:l})}}async function xs(i,e,t){var c,h,u,f,m;const n=se();let s=null;if(t){const d=await U(v(n,`workshops/${t}`));d.exists()&&(s=d.val())}const r=!!s,a=s||{};i.innerHTML=le("/workshop-form",e,`
    <div class="admin-topbar">
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="btn-ghost" style="padding:6px 10px;" onclick="adminNavigate('/workshops')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <div>
          <div class="admin-topbar-title">${r?"Edit Workshop":"New Workshop"}</div>
          <div class="admin-topbar-sub">${r?a.title:"Create a new session"}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn-ghost" onclick="adminNavigate('/workshops')">Cancel</button>
        <button class="btn-primary" id="save-btn">Save Workshop</button>
      </div>
    </div>
    <div class="admin-body">
      <div id="form-error" style="display:none;background:rgba(90,40,40,0.08);border:0.5px solid rgba(90,40,40,0.2);border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#5A2828;"></div>

      <!-- BASICS -->
      <div class="form-section">
        <div class="form-section-title">Workshop Details</div>
        <div class="field">
          <label class="field-label">Title <span class="req">*</span></label>
          <input class="field-input" id="f-title" type="text" placeholder="e.g. Manual Brew Fundamentals" value="${a.title||""}">
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Category <span class="req">*</span></label>
            <select class="field-input" id="f-category">
              <option value="" disabled ${a.category?"":"selected"}>Select</option>
              ${["Coffee","Art & Design","Wellness","Business","Food","Music","Photography"].map(d=>`<option value="${d}" ${a.category===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label class="field-label">Status <span class="req">*</span></label>
            <select class="field-input" id="f-status">
              <option value="draft" ${a.status==="draft"||!a.status?"selected":""}>Draft</option>
              <option value="coming_soon" ${a.status==="coming_soon"?"selected":""}>Coming Soon</option>
              <option value="live" ${a.status==="live"?"selected":""}>Live</option>
              <option value="past" ${a.status==="past"?"selected":""}>Past</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Description <span class="req">*</span></label>
          <textarea class="field-input" id="f-description" placeholder="What will attendees learn? What should they expect?" style="min-height:100px;">${a.description||""}</textarea>
        </div>
      </div>

      <!-- DATE & LOGISTICS -->
      <div class="form-section">
        <div class="form-section-title">Date & Logistics</div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Date <span class="req">*</span></label>
            <input class="field-input" id="f-date" type="date" value="${a.date||""}">
          </div>
          <div class="field">
            <label class="field-label">Time <span class="req">*</span></label>
            <input class="field-input" id="f-time" type="time" value="${a.time||""}">
          </div>
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Duration</label>
            <input class="field-input" id="f-duration" type="text" placeholder="e.g. 2 hours" value="${a.duration||""}">
          </div>
          <div class="field">
            <label class="field-label">Language</label>
            <input class="field-input" id="f-language" type="text" placeholder="e.g. English + Hindi" value="${a.language||"English + Hindi"}">
          </div>
        </div>
        <div class="field">
          <label class="field-label">Outlet <span class="req">*</span></label>
          <select class="field-input" id="f-outlet">
            <option value="" disabled ${a.outlet?"":"selected"}>Select outlet</option>
            <option value="Heebee SHB, Sarabha Nagar, Ludhiana" ${(c=a.outlet)!=null&&c.includes("SHB")?"selected":""}>Heebee SHB — Sarabha Nagar, Ludhiana</option>
            <option value="Heebee GHB, Ghumar Mandi, Ludhiana" ${(h=a.outlet)!=null&&h.includes("GHB")?"selected":""}>Heebee GHB — Ghumar Mandi, Ludhiana</option>
            <option value="Heebee JLD, Model Town, Jalandhar" ${(u=a.outlet)!=null&&u.includes("JLD")?"selected":""}>Heebee JLD — Model Town, Jalandhar</option>
          </select>
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Max Slots <span class="req">*</span></label>
            <input class="field-input" id="f-max-slots" type="number" placeholder="e.g. 12" value="${a.maxSlots||""}">
          </div>
          <div class="field">
            <label class="field-label">Slots Remaining <span class="req">*</span></label>
            <input class="field-input" id="f-slots-remaining" type="number" placeholder="e.g. 12" value="${a.slotsRemaining??a.maxSlots??""}">
          </div>
        </div>
      </div>

      <!-- PAYMENT -->
      <div class="form-section">
        <div class="form-section-title">Pricing & Payment</div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Price per person (₹) <span class="req">*</span></label>
            <input class="field-input" id="f-price" type="number" placeholder="e.g. 500" value="${a.price||""}">
          </div>
          <div class="field">
            <label class="field-label">Payment Mode <span class="req">*</span></label>
            <select class="field-input" id="f-payment-mode">
              <option value="razorpay" ${a.paymentMode==="razorpay"?"selected":""}>Razorpay Link</option>
              <option value="qr" ${a.paymentMode==="qr"||!a.paymentMode?"selected":""}>UPI QR</option>
            </select>
          </div>
        </div>
        <div class="field" id="razorpay-field" style="${a.paymentMode==="qr"?"display:none":""}">
          <label class="field-label">Razorpay Link</label>
          <input class="field-input" id="f-razorpay-link" type="url" placeholder="https://rzp.io/l/your-link" value="${a.razorpayLink||""}">
        </div>
        <div class="field" id="qr-field" style="${a.paymentMode!=="qr"&&a.paymentMode?"display:none":""}">
          <label class="field-label">UPI QR Image URL</label>
          <input class="field-input" id="f-qr-image" type="url" placeholder="https://... (Firebase Storage URL)" value="${a.qrImage||""}">
        </div>
      </div>

      <!-- HOST -->
      <div class="form-section">
        <div class="form-section-title">Host Information</div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Host Name <span class="req">*</span></label>
            <input class="field-input" id="f-host-name" type="text" placeholder="e.g. Shamjeet Singh" value="${a.hostName||""}">
          </div>
          <div class="field">
            <label class="field-label">Host Role</label>
            <input class="field-input" id="f-host-role" type="text" placeholder="e.g. Head Barista, Heebee SHB" value="${a.hostRole||""}">
          </div>
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Host Type</label>
            <select class="field-input" id="f-host-type">
              <option value="heebee" ${a.hostType==="heebee"||!a.hostType?"selected":""}>Heebee Team</option>
              <option value="external" ${a.hostType==="external"?"selected":""}>External Host</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Instagram Handle</label>
            <input class="field-input" id="f-host-instagram" type="text" placeholder="@handle" value="${a.hostInstagram||""}">
          </div>
        </div>
        <div class="field">
          <label class="field-label">Host Bio</label>
          <textarea class="field-input" id="f-host-bio" placeholder="Brief bio...">${a.hostBio||""}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Host Photo URL</label>
          <input class="field-input" id="f-host-photo" type="url" placeholder="https://... (Firebase Storage URL)" value="${a.hostPhoto||""}">
        </div>
      </div>

      <!-- MEDIA -->
      <div class="form-section">
        <div class="form-section-title">Media</div>
        <div class="field">
          <label class="field-label">Cover Image URL</label>
          <input class="field-input" id="f-cover-image" type="url" placeholder="https://... (Firebase Storage URL)" value="${a.coverImage||""}">
        </div>
      </div>

      <!-- THINGS TO KNOW -->
      <div class="form-section">
        <div class="form-section-title">Things to Know</div>
        <div id="things-list">
          ${(a.thingsToKnow||["All ages welcome","Indoor · Seated"]).map((d,g)=>`
            <div class="form-grid" style="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;" id="thing-${g}">
              <input class="field-input thing-input" type="text" value="${d}" placeholder="e.g. All ages welcome">
              <button onclick="removeThing(${g})" style="padding:0 10px;border-radius:6px;border:0.5px solid var(--border);background:var(--white);color:var(--text-muted);cursor:pointer;font-size:16px;height:38px;">×</button>
            </div>
          `).join("")}
        </div>
        <button onclick="addThing()" class="btn-ghost" style="margin-top:4px;font-size:11px;">+ Add item</button>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:10px;padding-top:8px;padding-bottom:32px;">
        <button class="btn-ghost" onclick="adminNavigate('/workshops')">Cancel</button>
        <button class="btn-primary" id="save-btn-bottom">Save Workshop</button>
      </div>
    </div>
  `),document.getElementById("f-payment-mode").addEventListener("change",d=>{document.getElementById("razorpay-field").style.display=d.target.value==="razorpay"?"block":"none",document.getElementById("qr-field").style.display=d.target.value==="qr"?"block":"none"});let l=(a.thingsToKnow||["",""]).length;window.addThing=()=>{const d=document.getElementById("things-list"),g=document.createElement("div");g.className="form-grid",g.style.cssText="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;",g.id=`thing-${l}`,g.innerHTML=`
      <input class="field-input thing-input" type="text" placeholder="e.g. All ages welcome">
      <button onclick="removeThing(${l})" style="padding:0 10px;border-radius:6px;border:0.5px solid var(--border);background:var(--white);color:var(--text-muted);cursor:pointer;font-size:16px;height:38px;">×</button>
    `,d.appendChild(g),l++},window.removeThing=d=>{const g=document.getElementById(`thing-${d}`);g&&g.remove()};async function o(){const d=document.getElementById("form-error");d.style.display="none";const g={title:document.getElementById("f-title").value.trim(),category:document.getElementById("f-category").value,description:document.getElementById("f-description").value.trim(),date:document.getElementById("f-date").value,time:document.getElementById("f-time").value,duration:document.getElementById("f-duration").value.trim(),language:document.getElementById("f-language").value.trim(),outlet:document.getElementById("f-outlet").value,maxSlots:parseInt(document.getElementById("f-max-slots").value)||0,slotsRemaining:parseInt(document.getElementById("f-slots-remaining").value)||0,price:parseInt(document.getElementById("f-price").value)||0,status:document.getElementById("f-status").value,paymentMode:document.getElementById("f-payment-mode").value,razorpayLink:document.getElementById("f-razorpay-link").value.trim()||null,qrImage:document.getElementById("f-qr-image").value.trim()||null,hostName:document.getElementById("f-host-name").value.trim(),hostRole:document.getElementById("f-host-role").value.trim(),hostType:document.getElementById("f-host-type").value,hostInstagram:document.getElementById("f-host-instagram").value.trim(),hostBio:document.getElementById("f-host-bio").value.trim(),hostPhoto:document.getElementById("f-host-photo").value.trim()||null,coverImage:document.getElementById("f-cover-image").value.trim()||null,thingsToKnow:Array.from(document.querySelectorAll(".thing-input")).map(x=>x.value.trim()).filter(Boolean)},P=["title","category","description","date","time","outlet","hostName"].filter(x=>!g[x]);if(P.length){d.textContent=`Please fill in: ${P.join(", ")}`,d.style.display="block",window.scrollTo({top:0,behavior:"smooth"});return}const F=document.getElementById("save-btn"),C=document.getElementById("save-btn-bottom");F&&(F.textContent="Saving..."),C&&(C.textContent="Saving...");try{r?await _e(v(n,`workshops/${t}`),g):(g.createdAt=new Date().toISOString(),g.additionalImages=[],await fi(v(n,"workshops"),g)),adminNavigate("/workshops")}catch(x){console.error(x),d.textContent="Save failed. Check your Firebase rules and try again.",d.style.display="block",F&&(F.textContent="Save Workshop"),C&&(C.textContent="Save Workshop")}}(f=document.getElementById("save-btn"))==null||f.addEventListener("click",o),(m=document.getElementById("save-btn-bottom"))==null||m.addEventListener("click",o)}async function Os(i,e,t){var h;i.innerHTML=le("/bookings",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Bookings</div>
        <div class="admin-topbar-sub">All workshop registrations</div>
      </div>
    </div>
    <div class="admin-body">
      <div class="filter-row" id="booking-filters">
        <button class="filter-pill active" data-status="all">All</button>
        <button class="filter-pill" data-status="pending">Pending</button>
        <button class="filter-pill" data-status="paid">Paid</button>
        <button class="filter-pill" data-status="confirmed">Confirmed</button>
        <button class="filter-pill" data-status="cancelled">Cancelled</button>
      </div>
      <div class="admin-table-wrap">
        <div id="bookings-table"><div class="empty-state">Loading...</div></div>
      </div>
    </div>
  `);const n=se(),[s,r]=await Promise.all([U(v(n,"bookings")),U(v(n,"workshops"))]);if(!s.exists()){document.getElementById("bookings-table").innerHTML='<div class="empty-state">No bookings yet.</div>';return}const a=r.exists()?r.val():{};let l=Object.entries(s.val()).map(([u,f])=>({id:u,...f})).sort((u,f)=>new Date(f.createdAt||0)-new Date(u.createdAt||0));if(t){l=l.filter(f=>f.workshopId===t);const u=((h=a[t])==null?void 0:h.title)||t;document.querySelector(".admin-topbar-sub").textContent=`Showing: ${u}`}function o(u){return u?new Date(u).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function c(u){const f=u==="all"?l:l.filter(m=>(m.status||"pending")===u);if(!f.length){document.getElementById("bookings-table").innerHTML='<div class="empty-state">No bookings in this category.</div>';return}document.getElementById("bookings-table").innerHTML=`
      <table>
        <thead>
          <tr>
            <th>Attendee</th>
            <th>Workshop</th>
            <th>Tickets</th>
            <th>Amount</th>
            <th>Booked On</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${f.map(m=>{var P;const d=m.primaryAttendee||{},g=m.workshopTitle||((P=a[m.workshopId])==null?void 0:P.title)||"—",b=m.status||"pending";return`
              <tr>
                <td>
                  <div style="font-weight:500;">${d.name||"—"}</div>
                  <div style="font-size:10px;color:var(--text-faint);">${d.email||""}</div>
                  ${d.phone?`<div style="font-size:10px;color:var(--text-faint);">${d.phone}</div>`:""}
                </td>
                <td style="color:var(--text-muted);font-size:12px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${g}</td>
                <td class="mono">${m.tickets||1}</td>
                <td class="mono">${fe(m.totalAmount||0)}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${o(m.createdAt)}</td>
                <td><span class="badge badge-${b}">${b}</span></td>
                <td>
                  <div class="action-btns">
                    ${b==="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Mark Paid</div>
                        <button class="action-btn action-btn-success" onclick="markBookingStatus('${m.id}', 'paid')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>
                    `:""}
                    ${b==="paid"?`
                      <div class="tip-wrap">
                        <div class="tip">Confirm</div>
                        <button class="action-btn action-btn-success" onclick="markBookingStatus('${m.id}', 'confirmed')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>
                    `:""}
                    ${b!=="cancelled"?`
                      <div class="tip-wrap">
                        <div class="tip">Cancel</div>
                        <button class="action-btn action-btn-danger" onclick="markBookingStatus('${m.id}', 'cancelled')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                    `:""}
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `}c("all"),document.querySelectorAll(".filter-pill").forEach(u=>{u.addEventListener("click",()=>{document.querySelectorAll(".filter-pill").forEach(f=>f.classList.remove("active")),u.classList.add("active"),c(u.dataset.status)})}),window.markBookingStatus=async(u,f)=>{var m;try{await _e(v(n,`bookings/${u}`),{status:f,updatedAt:new Date().toISOString()});const d=((m=document.querySelector(".filter-pill.active"))==null?void 0:m.dataset.status)||"all",g=l.find(b=>b.id===u);g&&(g.status=f),c(d)}catch(d){console.error("Update failed:",d),alert("Failed to update status. Check Firebase rules.")}}}async function Ls(i,e){i.innerHTML=le("/host-requests",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Host Requests</div>
        <div class="admin-topbar-sub">Incoming requests to host a session</div>
      </div>
    </div>
    <div class="admin-body">
      <div class="filter-row" id="req-filters">
        <button class="filter-pill active" data-status="all">All</button>
        <button class="filter-pill" data-status="pending">Pending</button>
        <button class="filter-pill" data-status="approved">Approved</button>
        <button class="filter-pill" data-status="rejected">Rejected</button>
      </div>
      <div class="admin-table-wrap">
        <div id="req-table"><div class="empty-state">Loading...</div></div>
      </div>
    </div>

    <!-- Detail modal -->
    <div id="req-modal" style="display:none;position:fixed;inset:0;background:rgba(26,20,16,0.5);z-index:100;align-items:center;justify-content:center;">
      <div style="background:var(--white);border-radius:10px;border:0.5px solid var(--border);width:540px;max-width:95vw;max-height:90vh;overflow-y:auto;padding:28px;" id="req-modal-body"></div>
    </div>
  `);const t=se(),n=await U(v(t,"host_requests"));if(!n.exists()){document.getElementById("req-table").innerHTML='<div class="empty-state">No host requests yet.</div>';return}let s=Object.entries(n.val()).map(([l,o])=>({id:l,...o})).sort((l,o)=>new Date(o.submittedAt||0)-new Date(l.submittedAt||0));function r(l){return l?new Date(l).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function a(l){const o=l==="all"?s:s.filter(c=>(c.status||"pending")===l);if(!o.length){document.getElementById("req-table").innerHTML='<div class="empty-state">No requests in this category.</div>';return}document.getElementById("req-table").innerHTML=`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Topic</th>
            <th>Category</th>
            <th>Preferred Outlet</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${o.map(c=>{const h=c.status||"pending";return`
              <tr style="cursor:pointer;" onclick="openReqDetail('${c.id}')">
                <td>
                  <div style="font-weight:500;">${c.name||"—"}</div>
                  <div style="font-size:10px;color:var(--text-faint);">${c.email||""}</div>
                  ${c.instagram?`<div style="font-size:10px;color:var(--text-faint);">${c.instagram}</div>`:""}
                </td>
                <td style="font-size:12px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.topic||"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;">${c.category||"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;">${c.preferredOutlet?c.preferredOutlet.split(",")[0]:"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${r(c.submittedAt)}</td>
                <td onclick="event.stopPropagation()"><span class="badge badge-${h}">${h}</span></td>
                <td onclick="event.stopPropagation()">
                  <div class="action-btns">
                    ${h==="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Approve</div>
                        <button class="action-btn action-btn-success" onclick="updateReqStatus('${c.id}','approved')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>
                      <div class="tip-wrap">
                        <div class="tip">Reject</div>
                        <button class="action-btn action-btn-danger" onclick="updateReqStatus('${c.id}','rejected')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                    `:""}
                    ${h!=="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Reset to Pending</div>
                        <button class="action-btn action-btn-default" onclick="updateReqStatus('${c.id}','pending')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg>
                        </button>
                      </div>
                    `:""}
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `}a("all"),document.querySelectorAll("#req-filters .filter-pill").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#req-filters .filter-pill").forEach(o=>o.classList.remove("active")),l.classList.add("active"),a(l.dataset.status)})}),window.updateReqStatus=async(l,o)=>{var c;try{await _e(v(t,`host_requests/${l}`),{status:o,reviewedAt:new Date().toISOString()});const h=s.find(m=>m.id===l);h&&(h.status=o);const u=((c=document.querySelector("#req-filters .filter-pill.active"))==null?void 0:c.dataset.status)||"all";a(u);const f=document.getElementById("req-modal");f&&(f.style.display="none")}catch(h){console.error(h),alert("Failed to update. Check Firebase rules.")}},window.openReqDetail=l=>{const o=s.find(u=>u.id===l);if(!o)return;const c=o.status||"pending",h=document.getElementById("req-modal");document.getElementById("req-modal-body").innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
        <div>
          <div style="font-size:16px;font-weight:600;color:var(--text);">${o.name||"—"}</div>
          <div style="font-size:11px;color:var(--text-faint);margin-top:2px;">${o.email||""} ${o.phone?"· "+o.phone:""}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="badge badge-${c}">${c}</span>
          <button onclick="document.getElementById('req-modal').style.display='none'"
            style="border:none;background:none;cursor:pointer;color:var(--text-muted);font-size:20px;line-height:1;padding:0 4px;">×</button>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;margin-bottom:20px;">
        ${[["Topic",o.topic],["Category",o.category],["Preferred Outlet",o.preferredOutlet],["Duration",o.preferredDuration],["Instagram",o.instagram],["Submitted",o.submittedAt?new Date(o.submittedAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]].map(([u,f])=>`
          <div>
            <div style="font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:2px;">${u}</div>
            <div style="font-size:12px;color:var(--text);">${f||"—"}</div>
          </div>
        `).join("")}
      </div>

      ${o.bio?`
        <div style="margin-bottom:16px;">
          <div style="font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">About / Bio</div>
          <div style="font-size:12px;color:var(--text);line-height:1.7;">${o.bio}</div>
        </div>
      `:""}

      ${o.sessionDescription?`
        <div style="margin-bottom:16px;">
          <div style="font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">Session Description</div>
          <div style="font-size:12px;color:var(--text);line-height:1.7;">${o.sessionDescription}</div>
        </div>
      `:""}

      ${o.message?`
        <div style="margin-bottom:20px;">
          <div style="font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">Message</div>
          <div style="font-size:12px;color:var(--text);line-height:1.7;">${o.message}</div>
        </div>
      `:""}

      ${c==="pending"?`
        <div style="display:flex;gap:8px;padding-top:12px;border-top:0.5px solid var(--border);">
          <button class="btn-primary" style="flex:1;background:#2D5A27;" onclick="updateReqStatus('${o.id}','approved')">Approve</button>
          <button class="btn-primary" style="flex:1;background:#5A2828;" onclick="updateReqStatus('${o.id}','rejected')">Reject</button>
        </div>
      `:`
        <div style="display:flex;gap:8px;padding-top:12px;border-top:0.5px solid var(--border);">
          <button class="btn-ghost" style="flex:1;" onclick="updateReqStatus('${o.id}','pending')">Reset to Pending</button>
        </div>
      `}
    `,h.style.display="flex"},document.getElementById("req-modal").addEventListener("click",l=>{l.target.id==="req-modal"&&(l.target.style.display="none")})}gi();const Qt=Xt(),j=document.getElementById("app");function Ns(){const i=window.location.hash.replace("#","")||"/",[e,...t]=i.split("?"),n={};return t.join("?").split("&").forEach(s=>{const[r,a]=s.split("=");r&&(n[r]=decodeURIComponent(a||""))}),{path:e,params:n}}function Ds(i,e={}){const t=Object.entries(e).map(([n,s])=>`${n}=${encodeURIComponent(s)}`).join("&");window.location.hash=i+(t?"?"+t:"")}window.adminNavigate=Ds;gn(Qt,i=>{if(!i){As(j);return}ft(i),window.addEventListener("hashchange",()=>ft(i))});async function ft(i){const{path:e,params:t}=Ns();switch(e){case"/workshops":await Cs(j,i);break;case"/workshop-form":await xs(j,i,t.id);break;case"/bookings":await Os(j,i,t.workshopId);break;case"/host-requests":await Ls(j,i);break;default:await Ps(j,i)}}function le(i,e,t){const n=((e==null?void 0:e.email)||"A").charAt(0).toUpperCase(),s=(e==null?void 0:e.email)||"";return`
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-logo">
          <div class="sidebar-logo-name">Heebee Coffee</div>
          <div class="sidebar-logo-sub">Admin Panel</div>
        </div>
        <nav class="sidebar-nav">
          <div class="sidebar-section">Navigation</div>
          ${[{path:"/",label:"Dashboard",icon:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'},{path:"/workshops",label:"Workshops",icon:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'},{path:"/bookings",label:"Bookings",icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'},{path:"/host-requests",label:"Host Requests",icon:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'}].map(a=>`
            <div class="sidebar-link ${i===a.path||a.path==="/workshops"&&i==="/workshop-form"?"active":""}"
              onclick="adminNavigate('${a.path}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${a.icon}</svg>
              ${a.label}
            </div>
          `).join("")}
        </nav>
        <div class="sidebar-bottom">
          <div class="sidebar-user">
            <div class="sidebar-avatar">${n}</div>
            <div class="sidebar-email">${s}</div>
          </div>
          <button class="btn-signout" onclick="adminSignOut()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign out
          </button>
        </div>
      </aside>
      <main class="admin-main">
        ${t}
      </main>
    </div>
  `}window.adminSignOut=async()=>{await mn(Qt),window.location.hash="/"};
