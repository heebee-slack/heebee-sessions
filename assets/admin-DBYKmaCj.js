import{L as si,g as yt,i as ri,a as ai,_ as Ke,C as Ge,r as Je,b as oi,S as ie,E as Ne,c as S,d as x,e as li,f as bt,h as w,F as Me,j as ci,q as ne,k as _t,l as di,m as ui,n as hi,o as pi,p as fi,s as gi,t as X,u as Q,v as se,w as $,x as _,y as fe,z as _e,A as mi,B as vi,D as yi}from"./helpers-DbYsWB8w.js";function De(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t}function wt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bi=wt,It=new Ne("auth","Firebase",wt());/**
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
 */const ge=new si("@firebase/auth");function _i(i,...e){ge.logLevel<=bt.WARN&&ge.warn(`Auth (${ie}): ${i}`,...e)}function de(i,...e){ge.logLevel<=bt.ERROR&&ge.error(`Auth (${ie}): ${i}`,...e)}/**
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
 */function k(i,...e){throw Ue(i,...e)}function E(i,...e){return Ue(i,...e)}function kt(i,e,t){const n=Object.assign(Object.assign({},bi()),{[e]:t});return new Ne("auth","Firebase",n).create(e,{appName:i.name})}function B(i){return kt(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ue(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return It.create(i,...e)}function h(i,e,...t){if(!i)throw Ue(e,...t)}function A(i){const e="INTERNAL ASSERTION FAILED: "+i;throw de(e),new Error(e)}function C(i,e){i||A(e)}/**
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
 */function Ce(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function wi(){return Ye()==="http:"||Ye()==="https:"}function Ye(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Ii(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wi()||oi()||"connection"in navigator)?navigator.onLine:!0}function ki(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class re{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=ri()||ai()}get(){return Ii()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $e(i,e){C(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Et{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ei={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ti=new re(3e4,6e4);function F(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function q(i,e,t,n,s={}){return Tt(i,s,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const l=ne(Object.assign({key:i.config.apiKey},a)).slice(1),o=await i._getAdditionalHeaders();o["Content-Type"]="application/json",i.languageCode&&(o["X-Firebase-Locale"]=i.languageCode);const c=Object.assign({method:e,headers:o},r);return gi()||(c.referrerPolicy="no-referrer"),Et.fetch()(St(i,i.config.apiHost,t,l),c)})}async function Tt(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ei),e);try{const s=new Ai(i),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw ce(i,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[o,c]=l.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw ce(i,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw ce(i,"email-already-in-use",a);if(o==="USER_DISABLED")throw ce(i,"user-disabled",a);const d=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kt(i,d,c);k(i,d)}}catch(s){if(s instanceof Me)throw s;k(i,"network-request-failed",{message:String(s)})}}async function we(i,e,t,n,s={}){const r=await q(i,e,t,n,s);return"mfaPendingCredential"in r&&k(i,"multi-factor-auth-required",{_serverResponse:r}),r}function St(i,e,t,n){const s=`${e}${t}?${n}`;return i.config.emulator?$e(i.config,s):`${i.config.apiScheme}://${s}`}function Si(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ai{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(E(this.auth,"network-request-failed")),Ti.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ce(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=E(i,e,n);return s.customData._tokenResponse=t,s}function Xe(i){return i!==void 0&&i.enterprise!==void 0}class Ri{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Si(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Pi(i,e){return q(i,"GET","/v2/recaptchaConfig",F(i,e))}/**
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
 */async function Ci(i,e){return q(i,"POST","/v1/accounts:delete",e)}async function At(i,e){return q(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Z(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xi(i,e=!1){const t=x(i),n=await t.getIdToken(e),s=Be(n);h(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:n,authTime:Z(Re(s.auth_time)),issuedAtTime:Z(Re(s.iat)),expirationTime:Z(Re(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Re(i){return Number(i)*1e3}function Be(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return de("JWT malformed, contained fewer than 3 sections"),null;try{const s=ci(t);return s?JSON.parse(s):(de("Failed to decode base64 JWT payload"),null)}catch(s){return de("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qe(i){const e=Be(i);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ee(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Me&&Oi(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function Oi({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Li{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function me(i){var e;const t=i.auth,n=await i.getIdToken(),s=await ee(i,At(t,{idToken:n}));h(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];i._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Rt(r.providerUserInfo):[],l=Mi(i.providerData,a),o=i.isAnonymous,c=!(i.email&&r.passwordHash)&&!(l!=null&&l.length),d=o?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new xe(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(i,u)}async function Ni(i){const e=x(i);await me(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mi(i,e){return[...i.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Rt(i){return i.map(e=>{var{providerId:t}=e,n=De(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Di(i,e){const t=await Tt(i,{},async()=>{const n=ne({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=i.config,a=St(i,s,"/v1/token",`key=${r}`),l=await i._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Et.fetch()(a,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ui(i,e){return q(i,"POST","/v2/accounts:revokeToken",F(i,e))}/**
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
 */class V{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qe(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){h(e.length!==0,"internal-error");const t=Qe(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(h(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await Di(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,a=new V;return n&&(h(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(h(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(h(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new V,this.toJSON())}_performRefresh(){return A("not implemented")}}/**
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
 */function L(i,e){h(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class R{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=De(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Li(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xe(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return h(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xi(this,e)}reload(){return Ni(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new R(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(S(this.auth.app))return Promise.reject(B(this.auth));const e=await this.getIdToken();return await ee(this,Ci(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,a,l,o,c,d;const u=(n=t.displayName)!==null&&n!==void 0?n:void 0,p=(s=t.email)!==null&&s!==void 0?s:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(a=t.photoURL)!==null&&a!==void 0?a:void 0,f=(l=t.tenantId)!==null&&l!==void 0?l:void 0,b=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,I=(c=t.createdAt)!==null&&c!==void 0?c:void 0,m=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:O,isAnonymous:Ve,providerData:Se,stsTokenManager:ze}=t;h(y&&ze,e,"internal-error");const ii=V.fromJSON(this.name,ze);h(typeof y=="string",e,"internal-error"),L(u,e.name),L(p,e.name),h(typeof O=="boolean",e,"internal-error"),h(typeof Ve=="boolean",e,"internal-error"),L(v,e.name),L(g,e.name),L(f,e.name),L(b,e.name),L(I,e.name),L(m,e.name);const Ae=new R({uid:y,auth:e,email:p,emailVerified:O,displayName:u,isAnonymous:Ve,photoURL:g,phoneNumber:v,tenantId:f,stsTokenManager:ii,createdAt:I,lastLoginAt:m});return Se&&Array.isArray(Se)&&(Ae.providerData=Se.map(ni=>Object.assign({},ni))),b&&(Ae._redirectEventId=b),Ae}static async _fromIdTokenResponse(e,t,n=!1){const s=new V;s.updateFromServerResponse(t);const r=new R({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await me(r),r}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];h(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Rt(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new V;l.updateFromIdToken(n);const o=new R({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new xe(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(o,c),o}}/**
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
 */const Ze=new Map;function P(i){C(i instanceof Function,"Expected a class definition");let e=Ze.get(i);return e?(C(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ze.set(i,e),e)}/**
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
 */class Pt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pt.type="NONE";const et=Pt;/**
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
 */function ue(i,e,t){return`firebase:${i}:${e}:${t}`}class z{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=ue(this.userKey,s.apiKey,r),this.fullPersistenceKey=ue("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?R._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new z(P(et),e,n);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||P(et);const a=ue(n,e.config.apiKey,e.name);let l=null;for(const c of t)try{const d=await c._get(a);if(d){const u=R._fromJSON(e,d);c!==r&&(l=u),r=c;break}}catch{}const o=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new z(r,e,n):(r=o[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new z(r,e,n))}}/**
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
 */function tt(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ct(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mt(e))return"Blackberry";if(Dt(e))return"Webos";if(xt(e))return"Safari";if((e.includes("chrome/")||Ot(e))&&!e.includes("edge/"))return"Chrome";if(Nt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ct(i=w()){return/firefox\//i.test(i)}function xt(i=w()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ot(i=w()){return/crios\//i.test(i)}function Lt(i=w()){return/iemobile/i.test(i)}function Nt(i=w()){return/android/i.test(i)}function Mt(i=w()){return/blackberry/i.test(i)}function Dt(i=w()){return/webos/i.test(i)}function qe(i=w()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function $i(i=w()){var e;return qe(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bi(){return pi()&&document.documentMode===10}function Ut(i=w()){return qe(i)||Nt(i)||Dt(i)||Mt(i)||/windows phone/i.test(i)||Lt(i)}/**
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
 */function $t(i,e=[]){let t;switch(i){case"Browser":t=tt(w());break;case"Worker":t=`${tt(w())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ie}/${n}`}/**
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
 */class qi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((a,l)=>{try{const o=e(r);a(o)}catch(o){l(o)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Hi(i,e={}){return q(i,"GET","/v2/passwordPolicy",F(i,e))}/**
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
 */const Fi=6;class ji{constructor(e){var t,n,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Fi,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,r,a,l;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(t=o.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(n=o.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(s=o.containsLowercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(r=o.containsUppercaseLetter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(l=o.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Wi{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new it(this),this.idTokenSubscription=new it(this),this.beforeStateQueue=new qi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=It,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=P(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await z.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await At(this,{idToken:e}),n=await R._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(S(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===l)&&(o!=null&&o.user)&&(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await me(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ki()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(S(this.app))return Promise.reject(B(this));const t=e?x(e):null;return t&&h(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return S(this.app)?Promise.reject(B(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return S(this.app)?Promise.reject(B(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(P(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hi(this),t=new ji(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ne("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ui(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&P(e)||this._popupRedirectResolver;h(t,this,"argument-error"),this.redirectPersistenceManager=await z.create(this,[P(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const o=e.addObserver(t,n,s);return()=>{a=!0,o()}}else{const o=e.addObserver(t);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$t(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_i(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function J(i){return x(i)}class it{constructor(e){this.auth=e,this.observer=null,this.addObserver=li(t=>this.observer=t)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ie={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vi(i){Ie=i}function Bt(i){return Ie.loadJS(i)}function zi(){return Ie.recaptchaEnterpriseScript}function Ki(){return Ie.gapiScript}function Gi(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const Ji="recaptcha-enterprise",Yi="NO_RECAPTCHA";class Xi{constructor(e){this.type=Ji,this.auth=J(e)}async verify(e="verify",t=!1){async function n(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{Pi(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ri(o);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,a(c.siteKey)}}).catch(o=>{l(o)})})}function s(r,a,l){const o=window.grecaptcha;Xe(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(c=>{a(c)}).catch(()=>{a(Yi)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,a)=>{n(this.auth).then(l=>{if(!t&&Xe(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let o=zi();o.length!==0&&(o+=l),Bt(o).then(()=>{s(l,r,a)}).catch(c=>{a(c)})}}).catch(l=>{a(l)})})}}async function nt(i,e,t,n=!1){const s=new Xi(i);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function st(i,e,t,n){var s;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await nt(i,e,t,t==="getOobCode");return n(i,r)}else return n(i,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nt(i,e,t,t==="getOobCode");return n(i,a)}else return Promise.reject(r)})}/**
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
 */function Qi(i,e){const t=_t(i,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(hi(r,e??{}))return s;k(s,"already-initialized")}return t.initialize({options:e})}function Zi(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(P);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function en(i,e,t){const n=J(i);h(n._canInitEmulator,n,"emulator-config-failed"),h(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,r=qt(e),{host:a,port:l}=tn(e),o=l===null?"":`:${l}`;n.config.emulator={url:`${r}//${a}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),nn()}function qt(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function tn(i){const e=qt(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const r=s[1];return{host:r,port:rt(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:rt(a)}}}function rt(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function nn(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class He{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return A("not implemented")}_getIdTokenResponse(e){return A("not implemented")}_linkToIdToken(e,t){return A("not implemented")}_getReauthenticationResolver(e){return A("not implemented")}}async function sn(i,e){return q(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rn(i,e){return we(i,"POST","/v1/accounts:signInWithPassword",F(i,e))}/**
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
 */async function an(i,e){return we(i,"POST","/v1/accounts:signInWithEmailLink",F(i,e))}async function on(i,e){return we(i,"POST","/v1/accounts:signInWithEmailLink",F(i,e))}/**
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
 */class te extends He{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new te(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new te(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return st(e,t,"signInWithPassword",rn);case"emailLink":return an(e,{email:this._email,oobCode:this._password});default:k(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return st(e,n,"signUpPassword",sn);case"emailLink":return on(e,{idToken:t,email:this._email,oobCode:this._password});default:k(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function K(i,e){return we(i,"POST","/v1/accounts:signInWithIdp",F(i,e))}/**
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
 */const ln="http://localhost";class H extends He{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new H(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):k("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=De(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new H(n,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return K(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,K(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,K(e,t)}buildRequest(){const e={requestUri:ln,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ne(t)}return e}}/**
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
 */function cn(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dn(i){const e=X(Q(i)).link,t=e?X(Q(e)).deep_link_id:null,n=X(Q(i)).deep_link_id;return(n?X(Q(n)).link:null)||n||t||e||i}class Fe{constructor(e){var t,n,s,r,a,l;const o=X(Q(e)),c=(t=o.apiKey)!==null&&t!==void 0?t:null,d=(n=o.oobCode)!==null&&n!==void 0?n:null,u=cn((s=o.mode)!==null&&s!==void 0?s:null);h(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=o.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=dn(e);try{return new Fe(t)}catch{return null}}}/**
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
 */class Y{constructor(){this.providerId=Y.PROVIDER_ID}static credential(e,t){return te._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Fe.parseLink(t);return h(n,"argument-error"),te._fromEmailAndCode(e,n.code,n.tenantId)}}Y.PROVIDER_ID="password";Y.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Y.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ae extends Ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class N extends ae{constructor(){super("facebook.com")}static credential(e){return H._fromParams({providerId:N.PROVIDER_ID,signInMethod:N.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return N.credentialFromTaggedObject(e)}static credentialFromError(e){return N.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return N.credential(e.oauthAccessToken)}catch{return null}}}N.FACEBOOK_SIGN_IN_METHOD="facebook.com";N.PROVIDER_ID="facebook.com";/**
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
 */class M extends ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return H._fromParams({providerId:M.PROVIDER_ID,signInMethod:M.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return M.credentialFromTaggedObject(e)}static credentialFromError(e){return M.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return M.credential(t,n)}catch{return null}}}M.GOOGLE_SIGN_IN_METHOD="google.com";M.PROVIDER_ID="google.com";/**
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
 */class D extends ae{constructor(){super("github.com")}static credential(e){return H._fromParams({providerId:D.PROVIDER_ID,signInMethod:D.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return D.credential(e.oauthAccessToken)}catch{return null}}}D.GITHUB_SIGN_IN_METHOD="github.com";D.PROVIDER_ID="github.com";/**
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
 */class U extends ae{constructor(){super("twitter.com")}static credential(e,t){return H._fromParams({providerId:U.PROVIDER_ID,signInMethod:U.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return U.credentialFromTaggedObject(e)}static credentialFromError(e){return U.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return U.credential(t,n)}catch{return null}}}U.TWITTER_SIGN_IN_METHOD="twitter.com";U.PROVIDER_ID="twitter.com";/**
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
 */class G{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await R._fromIdTokenResponse(e,n,s),a=at(n);return new G({user:r,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=at(n);return new G({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function at(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ve extends Me{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ve.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ve(e,t,n,s)}}function Ft(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ve._fromErrorAndOperation(i,r,e,n):r})}async function un(i,e,t=!1){const n=await ee(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return G._forOperation(i,"link",n)}/**
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
 */async function hn(i,e,t=!1){const{auth:n}=i;if(S(n.app))return Promise.reject(B(n));const s="reauthenticate";try{const r=await ee(i,Ft(n,s,e,i),t);h(r.idToken,n,"internal-error");const a=Be(r.idToken);h(a,n,"internal-error");const{sub:l}=a;return h(i.uid===l,n,"user-mismatch"),G._forOperation(i,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&k(n,"user-mismatch"),r}}/**
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
 */async function jt(i,e,t=!1){if(S(i.app))return Promise.reject(B(i));const n="signIn",s=await Ft(i,n,e),r=await G._fromIdTokenResponse(i,n,s);return t||await i._updateCurrentUser(r.user),r}async function pn(i,e){return jt(J(i),e)}/**
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
 */async function fn(i){const e=J(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function gn(i,e,t){return S(i.app)?Promise.reject(B(i)):pn(x(i),Y.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&fn(i),n})}function mn(i,e,t,n){return x(i).onIdTokenChanged(e,t,n)}function vn(i,e,t){return x(i).beforeAuthStateChanged(e,t)}function yn(i,e,t,n){return x(i).onAuthStateChanged(e,t,n)}function bn(i){return x(i).signOut()}const ye="__sak";/**
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
 */class Wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ye,"1"),this.storage.removeItem(ye),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _n=1e3,wn=10;class Vt extends Wt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ut(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,o)=>{this.notifyListeners(a,o)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);Bi()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wn):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},_n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vt.type="LOCAL";const In=Vt;/**
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
 */class zt extends Wt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zt.type="SESSION";const Kt=zt;/**
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
 */function kn(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ke{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ke(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(a).map(async c=>c(t.origin,r)),o=await kn(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ke.receivers=[];/**
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
 */function je(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class En{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,o)=>{const c=je("",20);s.port1.start();const d=setTimeout(()=>{o(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(p.data.response);break;default:clearTimeout(d),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function T(){return window}function Tn(i){T().location.href=i}/**
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
 */function Gt(){return typeof T().WorkerGlobalScope<"u"&&typeof T().importScripts=="function"}async function Sn(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function An(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Rn(){return Gt()?self:null}/**
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
 */const Jt="firebaseLocalStorageDb",Pn=1,be="firebaseLocalStorage",Yt="fbase_key";class oe{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ee(i,e){return i.transaction([be],e?"readwrite":"readonly").objectStore(be)}function Cn(){const i=indexedDB.deleteDatabase(Jt);return new oe(i).toPromise()}function Oe(){const i=indexedDB.open(Jt,Pn);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(be,{keyPath:Yt})}catch(s){t(s)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(be)?e(n):(n.close(),await Cn(),e(await Oe()))})})}async function ot(i,e,t){const n=Ee(i,!0).put({[Yt]:e,value:t});return new oe(n).toPromise()}async function xn(i,e){const t=Ee(i,!1).get(e),n=await new oe(t).toPromise();return n===void 0?null:n.value}function lt(i,e){const t=Ee(i,!0).delete(e);return new oe(t).toPromise()}const On=800,Ln=3;class Xt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oe(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ln)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ke._getInstance(Rn()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sn(),!this.activeServiceWorker)return;this.sender=new En(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||An()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oe();return await ot(e,ye,"1"),await lt(e,ye),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ot(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>xn(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ee(s,!1).getAll();return new oe(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),On)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xt.type="LOCAL";const Nn=Xt;new re(3e4,6e4);/**
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
 */function Mn(i,e){return e?P(e):(h(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class We extends He{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return K(e,this._buildIdpRequest())}_linkToIdToken(e,t){return K(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return K(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dn(i){return jt(i.auth,new We(i),i.bypassAuthState)}function Un(i){const{auth:e,user:t}=i;return h(t,e,"internal-error"),hn(t,new We(i),i.bypassAuthState)}async function $n(i){const{auth:e,user:t}=i;return h(t,e,"internal-error"),un(t,new We(i),i.bypassAuthState)}/**
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
 */class Qt{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dn;case"linkViaPopup":case"linkViaRedirect":return $n;case"reauthViaPopup":case"reauthViaRedirect":return Un;default:k(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bn=new re(2e3,1e4);class W extends Qt{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,W.currentPopupAction&&W.currentPopupAction.cancel(),W.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){C(this.filter.length===1,"Popup operations only handle one event");const e=je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(E(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(E(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,W.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(E(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bn.get())};e()}}W.currentPopupAction=null;/**
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
 */const qn="pendingRedirect",he=new Map;class Hn extends Qt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=he.get(this.auth._key());if(!e){try{const n=await Fn(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}he.set(this.auth._key(),e)}return this.bypassAuthState||he.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fn(i,e){const t=Vn(e),n=Wn(i);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function jn(i,e){he.set(i._key(),e)}function Wn(i){return P(i._redirectPersistence)}function Vn(i){return ue(qn,i.config.apiKey,i.name)}async function zn(i,e,t=!1){if(S(i.app))return Promise.reject(B(i));const n=J(i),s=Mn(n,e),a=await new Hn(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Kn=10*60*1e3;class Gn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Zt(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(E(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(ct(e))}saveEventToCache(e){this.cachedEventUids.add(ct(e)),this.lastProcessedEventTime=Date.now()}}function ct(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Zt({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jn(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zt(i);default:return!1}}/**
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
 */async function Yn(i,e={}){return q(i,"GET","/v1/projects",e)}/**
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
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qn=/^https?/;async function Zn(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Yn(i);for(const t of e)try{if(es(t))return}catch{}k(i,"unauthorized-domain")}function es(i){const e=Ce(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const a=new URL(i);return a.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Qn.test(t))return!1;if(Xn.test(i))return n===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const ts=new re(3e4,6e4);function dt(){const i=T().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function is(i){return new Promise((e,t)=>{var n,s,r;function a(){dt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dt(),t(E(i,"network-request-failed"))},timeout:ts.get()})}if(!((s=(n=T().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=T().gapi)===null||r===void 0)&&r.load)a();else{const l=Gi("iframefcb");return T()[l]=()=>{gapi.load?a():t(E(i,"network-request-failed"))},Bt(`${Ki()}?onload=${l}`).catch(o=>t(o))}}).catch(e=>{throw pe=null,e})}let pe=null;function ns(i){return pe=pe||is(i),pe}/**
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
 */const ss=new re(5e3,15e3),rs="__/auth/iframe",as="emulator/auth/iframe",os={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ls=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cs(i){const e=i.config;h(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?$e(e,as):`https://${i.config.authDomain}/${rs}`,n={apiKey:e.apiKey,appName:i.name,v:ie},s=ls.get(i.config.apiHost);s&&(n.eid=s);const r=i._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${ne(n).slice(1)}`}async function ds(i){const e=await ns(i),t=T().gapi;return h(t,i,"internal-error"),e.open({where:document.body,url:cs(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:os,dontclear:!0},n=>new Promise(async(s,r)=>{await n.restyle({setHideOnLeave:!1});const a=E(i,"network-request-failed"),l=T().setTimeout(()=>{r(a)},ss.get());function o(){T().clearTimeout(l),s(n)}n.ping(o).then(o,()=>{r(a)})}))}/**
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
 */const us={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hs=500,ps=600,fs="_blank",gs="http://localhost";class ut{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ms(i,e,t,n=hs,s=ps){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const o=Object.assign(Object.assign({},us),{width:n.toString(),height:s.toString(),top:r,left:a}),c=w().toLowerCase();t&&(l=Ot(c)?fs:t),Ct(c)&&(e=e||gs,o.scrollbars="yes");const d=Object.entries(o).reduce((p,[v,g])=>`${p}${v}=${g},`,"");if($i(c)&&l!=="_self")return vs(e||"",l),new ut(null);const u=window.open(e||"",l,d);h(u,i,"popup-blocked");try{u.focus()}catch{}return new ut(u)}function vs(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const ys="__/auth/handler",bs="emulator/auth/handler",_s=encodeURIComponent("fac");async function ht(i,e,t,n,s,r){h(i.config.authDomain,i,"auth-domain-config-required"),h(i.config.apiKey,i,"invalid-api-key");const a={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:ie,eventId:s};if(e instanceof Ht){e.setDefaultLanguage(i.languageCode),a.providerId=e.providerId||"",fi(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))a[d]=u}if(e instanceof ae){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(a.scopes=d.join(","))}i.tenantId&&(a.tid=i.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const o=await i._getAppCheckToken(),c=o?`#${_s}=${encodeURIComponent(o)}`:"";return`${ws(i)}?${ne(l).slice(1)}${c}`}function ws({config:i}){return i.emulator?$e(i,bs):`https://${i.authDomain}/${ys}`}/**
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
 */const Pe="webStorageSupport";class Is{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kt,this._completeRedirectFn=zn,this._overrideRedirectResult=jn}async _openPopup(e,t,n,s){var r;C((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await ht(e,t,n,Ce(),s);return ms(e,a,je())}async _openRedirect(e,t,n,s){await this._originValidation(e);const r=await ht(e,t,n,Ce(),s);return Tn(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(C(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ds(e),n=new Gn(e);return t.register("authEvent",s=>(h(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pe,{type:Pe},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Pe];a!==void 0&&t(!!a),k(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ut()||xt()||qe()}}const ks=Is;var pt="@firebase/auth",ft="1.7.9";/**
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
 */class Es{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ts(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ss(i){Ke(new Ge("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;h(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:a,authDomain:l,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$t(i)},c=new Wi(n,s,r,o);return Zi(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ke(new Ge("auth-internal",e=>{const t=J(e.getProvider("auth").getImmediate());return(n=>new Es(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(pt,ft,Ts(i)),Je(pt,ft,"esm2017")}/**
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
 */const As=5*60,Rs=yt("authIdTokenMaxAge")||As;let gt=null;const Ps=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Rs)return;const s=t==null?void 0:t.token;gt!==s&&(gt=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ei(i=ui()){const e=_t(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Qi(i,{popupRedirectResolver:ks,persistence:[Nn,In,Kt]}),n=yt("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=Ps(r.toString());vn(t,a,()=>a(t.currentUser)),mn(t,l=>a(l))}}const s=di("auth");return s&&en(t,`http://${s}`),t}function Cs(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Vi({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=s=>{const r=E("internal-error");r.customData=s,t(r)},n.type="text/javascript",n.charset="UTF-8",Cs().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ss("Browser");function xs(i){i.innerHTML=`
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
  `;const e=ei(),t=document.getElementById("login-btn"),n=document.getElementById("login-error");document.getElementById("l-pass").addEventListener("keydown",s=>{s.key==="Enter"&&t.click()}),t.addEventListener("click",async()=>{const s=document.getElementById("l-email").value.trim(),r=document.getElementById("l-pass").value;if(!s||!r){n.textContent="Please enter your email and password.",n.style.display="block";return}t.textContent="Signing in...",t.disabled=!0,n.style.display="none";try{await gn(e,s,r)}catch(a){t.textContent="Sign in",t.disabled=!1,n.textContent=a.code==="auth/invalid-credential"?"Incorrect email or password.":"Something went wrong. Try again.",n.style.display="block"}})}async function Os(i,e,t){i.innerHTML=le("/",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Dashboard</div>
        <div class="admin-topbar-sub">Overview of Heebee Sessions</div>
      </div>
      <button class="btn-primary" onclick="adminNavigate('/workshop-form')">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New Workshop
      </button>
    </div>
    <div class="admin-body">
      <div class="stat-grid" id="stats">
        <div class="stat-card"><div class="stat-label">Live Workshops</div><div class="stat-value" style="color:var(--text-faint);">—</div></div>
        <div class="stat-card"><div class="stat-label">Total Bookings</div><div class="stat-value" style="color:var(--text-faint);">—</div></div>
        <div class="stat-card"><div class="stat-label">Total Revenue</div><div class="stat-value" style="color:var(--text-faint);">—</div></div>
        <div class="stat-card"><div class="stat-label">Pending Requests</div><div class="stat-value" style="color:var(--text-faint);">—</div></div>
      </div>
      <div class="dash-two-col">
        <div class="admin-table-wrap">
          <div class="admin-table-header">
            <div class="admin-table-title">Recent Bookings</div>
            <button class="btn-ghost" style="font-size:11px;padding:5px 10px;" onclick="adminNavigate('/bookings')">View all →</button>
          </div>
          <div id="recent-bookings"><div class="empty-state">Loading…</div></div>
        </div>
        <div class="admin-table-wrap">
          <div class="admin-table-header">
            <div class="admin-table-title">Host Requests</div>
            <button class="btn-ghost" style="font-size:11px;padding:5px 10px;" onclick="adminNavigate('/host-requests')">View all →</button>
          </div>
          <div id="recent-requests"><div class="empty-state">Loading…</div></div>
        </div>
      </div>
    </div>
  `);const n=se(),[s,r,a]=await Promise.all([$(_(n,"workshops")),$(_(n,"bookings")),$(_(n,"host_requests"))]);if(Te()!==t)return;const l=s.exists()?Object.values(s.val()):[],o=r.exists()?Object.values(r.val()):[],c=a.exists()?Object.values(a.val()):[],d=l.filter(m=>m.status==="live").length,u=o.reduce((m,y)=>m+(y.totalAmount||0),0),p=c.filter(m=>(m.status||"pending")==="pending").length,v=document.getElementById("stats");v&&(v.innerHTML=`
    <div class="stat-card">
      <div class="stat-label">Live Workshops</div>
      <div class="stat-value">${d}</div>
      <div class="stat-sub">${l.length} total</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Total Bookings</div>
      <div class="stat-value">${o.length}</div>
      <div class="stat-sub">All time</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Total Revenue</div>
      <div class="stat-value" style="font-size:22px;">${fe(u)}</div>
      <div class="stat-sub">All bookings</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Pending Requests</div>
      <div class="stat-value" style="${p>0?"color:#7A5A10;":""}">${p}</div>
      <div class="stat-sub">Host requests</div>
    </div>
  `);const g=[...o].sort((m,y)=>(y.createdAt||"")>(m.createdAt||"")?1:-1).slice(0,5),f=document.getElementById("recent-bookings");f&&(f.innerHTML=g.length?`
    <div class="table-scroll">
      <table>
        <thead><tr><th>Name</th><th>Workshop</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          ${g.map(m=>{var y;return`
            <tr style="cursor:pointer;" onclick="adminNavigate('/bookings')">
              <td>${((y=m.primaryAttendee)==null?void 0:y.name)||"—"}</td>
              <td style="color:var(--text-muted);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${m.workshopTitle||"—"}</td>
              <td class="mono">${fe(m.totalAmount||0)}</td>
              <td><span class="badge badge-${m.status||"pending"}">${m.status||"pending"}</span></td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="empty-state">No bookings yet</div>');const b=[...c].sort((m,y)=>(y.submittedAt||y.createdAt||"")>(m.submittedAt||m.createdAt||"")?1:-1).slice(0,5),I=document.getElementById("recent-requests");I&&(I.innerHTML=b.length?`
    <div class="table-scroll">
      <table>
        <thead><tr><th>Name</th><th>Topic</th><th>Status</th></tr></thead>
        <tbody>
          ${b.map(m=>`
            <tr style="cursor:pointer;" onclick="adminNavigate('/host-requests')">
              <td>${m.name||"—"}</td>
              <td style="color:var(--text-muted);">${m.topic||"—"}</td>
              <td><span class="badge badge-${m.status||"pending"}">${m.status||"pending"}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="empty-state">No host requests yet</div>')}async function Ls(i,e,t){i.innerHTML=le("/workshops",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Workshops</div>
        <div class="admin-topbar-sub">Manage all sessions</div>
      </div>
      <button class="btn-primary" onclick="adminNavigate('/workshop-form')">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
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
        <div class="table-scroll">
          <div id="ws-table"><div class="empty-state">Loading…</div></div>
        </div>
      </div>
    </div>
  `);const n=se(),s=await $(_(n,"workshops"));if(Te()!==t)return;if(!s.exists()){const l=document.getElementById("ws-table");l&&(l.innerHTML=`<div class="empty-state">No workshops yet. <span style="color:var(--accent);cursor:pointer;" onclick="adminNavigate('/workshop-form')">Create one →</span></div>`);return}const r=Object.entries(s.val()).map(([l,o])=>({id:l,...o})).sort((l,o)=>(o.createdAt||"")>(l.createdAt||"")?1:-1);function a(l){const o=document.getElementById("ws-table");if(!o)return;const c=l==="all"?r:r.filter(d=>d.status===l);if(!c.length){o.innerHTML='<div class="empty-state">No workshops in this category.</div>';return}o.innerHTML=`
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
          ${c.map(d=>`
            <tr>
              <td style="min-width:180px;">
                <div style="font-weight:500;">${d.title||"—"}</div>
                <div style="font-size:10px;color:var(--text-faint);margin-top:2px;">${d.hostName||""}</div>
              </td>
              <td style="white-space:nowrap;color:var(--text-muted);">${d.date?mi(d.date):"TBC"}</td>
              <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${d.outlet?d.outlet.split(",")[0]:"—"}</td>
              <td class="mono" style="white-space:nowrap;">${d.slotsRemaining??"—"} / ${d.maxSlots??"—"}</td>
              <td class="mono">${d.price?fe(d.price):"—"}</td>
              <td style="white-space:nowrap;">
                <select onchange="updateWorkshopStatus('${d.id}', this.value)"
                  style="font-family:'Outfit',sans-serif;font-size:11px;padding:4px 28px 4px 8px;border-radius:5px;border:0.5px solid var(--border);background:var(--white);color:var(--text);cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23B8A99A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 6px center;">
                  <option value="live" ${d.status==="live"?"selected":""}>Live</option>
                  <option value="coming_soon" ${d.status==="coming_soon"?"selected":""}>Coming Soon</option>
                  <option value="draft" ${d.status==="draft"?"selected":""}>Draft</option>
                  <option value="past" ${d.status==="past"?"selected":""}>Past</option>
                </select>
              </td>
              <td style="white-space:nowrap;">
                <div class="action-btns">
                  <div class="tip-wrap">
                    <div class="tip">Bookings</div>
                    <button class="action-btn action-btn-default" onclick="adminNavigate('/bookings',{workshopId:'${d.id}'})">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                  </div>
                  <div class="tip-wrap">
                    <div class="tip">Edit</div>
                    <button class="action-btn action-btn-default" onclick="adminNavigate('/workshop-form',{id:'${d.id}'})">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}a("all"),document.querySelectorAll("#ws-filters .filter-pill").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#ws-filters .filter-pill").forEach(o=>o.classList.remove("active")),l.classList.add("active"),a(l.dataset.status)})}),window.updateWorkshopStatus=async(l,o)=>{try{await _e(_(n,`workshops/${l}`),{status:o});const c=r.find(d=>d.id===l);c&&(c.status=o)}catch(c){console.error("Status update failed:",c),alert("Failed to update status. Check Firebase rules.")}}}async function Ns(i,e,t){var c,d,u,p,v;const n=se();let s=null;if(t){const g=await $(_(n,`workshops/${t}`));g.exists()&&(s=g.val())}const r=!!s,a=s||{};i.innerHTML=le("/workshop-form",e,`
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
              ${["Coffee","Art & Design","Wellness","Business","Food","Music","Photography"].map(g=>`<option value="${g}" ${a.category===g?"selected":""}>${g}</option>`).join("")}
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
            <option value="Heebee GHB, Ghumar Mandi, Ludhiana" ${(d=a.outlet)!=null&&d.includes("GHB")?"selected":""}>Heebee GHB — Ghumar Mandi, Ludhiana</option>
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
          ${(a.thingsToKnow||["All ages welcome","Indoor · Seated"]).map((g,f)=>`
            <div class="form-grid" style="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;" id="thing-${f}">
              <input class="field-input thing-input" type="text" value="${g}" placeholder="e.g. All ages welcome">
              <button onclick="removeThing(${f})" style="padding:0 10px;border-radius:6px;border:0.5px solid var(--border);background:var(--white);color:var(--text-muted);cursor:pointer;font-size:16px;height:38px;">×</button>
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
  `),document.getElementById("f-payment-mode").addEventListener("change",g=>{document.getElementById("razorpay-field").style.display=g.target.value==="razorpay"?"block":"none",document.getElementById("qr-field").style.display=g.target.value==="qr"?"block":"none"});let l=(a.thingsToKnow||["",""]).length;window.addThing=()=>{const g=document.getElementById("things-list"),f=document.createElement("div");f.className="form-grid",f.style.cssText="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;",f.id=`thing-${l}`,f.innerHTML=`
      <input class="field-input thing-input" type="text" placeholder="e.g. All ages welcome">
      <button onclick="removeThing(${l})" style="padding:0 10px;border-radius:6px;border:0.5px solid var(--border);background:var(--white);color:var(--text-muted);cursor:pointer;font-size:16px;height:38px;">×</button>
    `,g.appendChild(f),l++},window.removeThing=g=>{const f=document.getElementById(`thing-${g}`);f&&f.remove()};async function o(){const g=document.getElementById("form-error");g.style.display="none";const f={title:document.getElementById("f-title").value.trim(),category:document.getElementById("f-category").value,description:document.getElementById("f-description").value.trim(),date:document.getElementById("f-date").value,time:document.getElementById("f-time").value,duration:document.getElementById("f-duration").value.trim(),language:document.getElementById("f-language").value.trim(),outlet:document.getElementById("f-outlet").value,maxSlots:parseInt(document.getElementById("f-max-slots").value)||0,slotsRemaining:parseInt(document.getElementById("f-slots-remaining").value)||0,price:parseInt(document.getElementById("f-price").value)||0,status:document.getElementById("f-status").value,paymentMode:document.getElementById("f-payment-mode").value,razorpayLink:document.getElementById("f-razorpay-link").value.trim()||null,qrImage:document.getElementById("f-qr-image").value.trim()||null,hostName:document.getElementById("f-host-name").value.trim(),hostRole:document.getElementById("f-host-role").value.trim(),hostType:document.getElementById("f-host-type").value,hostInstagram:document.getElementById("f-host-instagram").value.trim(),hostBio:document.getElementById("f-host-bio").value.trim(),hostPhoto:document.getElementById("f-host-photo").value.trim()||null,coverImage:document.getElementById("f-cover-image").value.trim()||null,thingsToKnow:Array.from(document.querySelectorAll(".thing-input")).map(O=>O.value.trim()).filter(Boolean)},I=["title","category","description","date","time","outlet","hostName"].filter(O=>!f[O]);if(I.length){g.textContent=`Please fill in: ${I.join(", ")}`,g.style.display="block",window.scrollTo({top:0,behavior:"smooth"});return}const m=document.getElementById("save-btn"),y=document.getElementById("save-btn-bottom");m&&(m.textContent="Saving..."),y&&(y.textContent="Saving...");try{r?await _e(_(n,`workshops/${t}`),f):(f.createdAt=new Date().toISOString(),f.additionalImages=[],await vi(_(n,"workshops"),f)),adminNavigate("/workshops")}catch(O){console.error(O),g.textContent="Save failed. Check your Firebase rules and try again.",g.style.display="block",m&&(m.textContent="Save Workshop"),y&&(y.textContent="Save Workshop")}}(p=document.getElementById("save-btn"))==null||p.addEventListener("click",o),(v=document.getElementById("save-btn-bottom"))==null||v.addEventListener("click",o)}async function Ms(i,e,t,n){var u;i.innerHTML=le("/bookings",e,`
    <div class="admin-topbar">
      <div>
        <div class="admin-topbar-title">Bookings</div>
        <div class="admin-topbar-sub" id="bookings-sub">All workshop registrations</div>
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
        <div class="table-scroll">
          <div id="bookings-table"><div class="empty-state">Loading…</div></div>
        </div>
      </div>
    </div>
  `);const s=se(),[r,a]=await Promise.all([$(_(s,"bookings")),$(_(s,"workshops"))]);if(Te()!==n)return;if(!r.exists()){const p=document.getElementById("bookings-table");p&&(p.innerHTML='<div class="empty-state">No bookings yet. They will appear here once customers book.</div>');return}const l=a.exists()?a.val():{};let o=Object.entries(r.val()).map(([p,v])=>({id:p,...v})).sort((p,v)=>(v.createdAt||"")>(p.createdAt||"")?1:-1);if(t){o=o.filter(v=>v.workshopId===t);const p=document.getElementById("bookings-sub");if(p){const v=((u=l[t])==null?void 0:u.title)||"this workshop";p.textContent=`Filtered: ${v}`}}function c(p){return p?new Date(p).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function d(p){const v=document.getElementById("bookings-table");if(!v)return;const g=p==="all"?o:o.filter(f=>(f.status||"pending")===p);if(!g.length){v.innerHTML='<div class="empty-state">No bookings in this category.</div>';return}v.innerHTML=`
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
          ${g.map(f=>{var y;const b=f.primaryAttendee||{},I=f.workshopTitle||((y=l[f.workshopId])==null?void 0:y.title)||"—",m=f.status||"pending";return`
              <tr>
                <td style="min-width:160px;">
                  <div style="font-weight:500;">${b.name||"—"}</div>
                  ${b.email?`<div style="font-size:10px;color:var(--text-faint);">${b.email}</div>`:""}
                  ${b.phone?`<div style="font-size:10px;color:var(--text-faint);">${b.phone}</div>`:""}
                </td>
                <td style="color:var(--text-muted);font-size:12px;min-width:160px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${I}</td>
                <td class="mono">${f.tickets||1}</td>
                <td class="mono" style="white-space:nowrap;">${fe(f.totalAmount||0)}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${c(f.createdAt)}</td>
                <td><span class="badge badge-${m}">${m}</span></td>
                <td style="white-space:nowrap;">
                  <div class="action-btns">
                    ${m==="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Mark Paid</div>
                        <button class="action-btn action-btn-success" onclick="markBookingStatus('${f.id}','paid')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>`:""}
                    ${m==="paid"?`
                      <div class="tip-wrap">
                        <div class="tip">Confirm</div>
                        <button class="action-btn action-btn-success" onclick="markBookingStatus('${f.id}','confirmed')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>`:""}
                    ${m!=="cancelled"?`
                      <div class="tip-wrap">
                        <div class="tip">Cancel</div>
                        <button class="action-btn action-btn-danger" onclick="markBookingStatus('${f.id}','cancelled')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>`:""}
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `}d("all"),document.querySelectorAll("#booking-filters .filter-pill").forEach(p=>{p.addEventListener("click",()=>{document.querySelectorAll("#booking-filters .filter-pill").forEach(v=>v.classList.remove("active")),p.classList.add("active"),d(p.dataset.status)})}),window.markBookingStatus=async(p,v)=>{var g;try{await _e(_(s,`bookings/${p}`),{status:v,updatedAt:new Date().toISOString()});const f=o.find(I=>I.id===p);f&&(f.status=v);const b=((g=document.querySelector("#booking-filters .filter-pill.active"))==null?void 0:g.dataset.status)||"all";d(b)}catch(f){console.error("Update failed:",f),alert("Failed to update booking. Check Firebase rules.")}}}async function Ds(i,e,t){i.innerHTML=le("/host-requests",e,`
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
        <div class="table-scroll">
          <div id="req-table"><div class="empty-state">Loading…</div></div>
        </div>
      </div>
    </div>

    <!-- Detail modal -->
    <div id="req-modal" style="display:none;position:fixed;inset:0;background:rgba(26,20,16,0.45);z-index:200;align-items:center;justify-content:center;">
      <div style="background:var(--white);border-radius:12px;border:0.5px solid var(--border);width:560px;max-width:95vw;max-height:88vh;overflow-y:auto;padding:28px;box-shadow:0 24px 60px rgba(26,20,16,0.18);" id="req-modal-body"></div>
    </div>
  `);const n=se(),s=await $(_(n,"host_requests"));if(Te()!==t)return;if(!s.exists()){const o=document.getElementById("req-table");o&&(o.innerHTML='<div class="empty-state">No host requests yet. They will appear here when someone fills the Host Request form.</div>');return}let r=Object.entries(s.val()).map(([o,c])=>({id:o,...c})).sort((o,c)=>(c.submittedAt||c.createdAt||"")>(o.submittedAt||o.createdAt||"")?1:-1);function a(o){return o?new Date(o).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function l(o){const c=document.getElementById("req-table");if(!c)return;const d=o==="all"?r:r.filter(u=>(u.status||"pending")===o);if(!d.length){c.innerHTML='<div class="empty-state">No requests in this category.</div>';return}c.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Topic</th>
            <th>Category</th>
            <th>Outlet</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${d.map(u=>{const p=u.status||"pending";return`
              <tr style="cursor:pointer;" onclick="openReqDetail('${u.id}')">
                <td style="min-width:140px;">
                  <div style="font-weight:500;">${u.name||"—"}</div>
                  ${u.email?`<div style="font-size:10px;color:var(--text-faint);">${u.email}</div>`:""}
                </td>
                <td style="font-size:12px;min-width:160px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${u.topic||"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${u.category||"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${u.preferredOutlet?u.preferredOutlet.split(",")[0]:"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${a(u.submittedAt||u.createdAt)}</td>
                <td onclick="event.stopPropagation()"><span class="badge badge-${p}">${p}</span></td>
                <td onclick="event.stopPropagation()" style="white-space:nowrap;">
                  <div class="action-btns">
                    ${p==="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Approve</div>
                        <button class="action-btn action-btn-success" onclick="updateReqStatus('${u.id}','approved')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>
                      <div class="tip-wrap">
                        <div class="tip">Reject</div>
                        <button class="action-btn action-btn-danger" onclick="updateReqStatus('${u.id}','rejected')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>`:`
                      <div class="tip-wrap">
                        <div class="tip">Reset</div>
                        <button class="action-btn action-btn-default" onclick="updateReqStatus('${u.id}','pending')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2" stroke-linecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg>
                        </button>
                      </div>`}
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `}l("all"),document.querySelectorAll("#req-filters .filter-pill").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll("#req-filters .filter-pill").forEach(c=>c.classList.remove("active")),o.classList.add("active"),l(o.dataset.status)})}),window.updateReqStatus=async(o,c)=>{var d;try{await _e(_(n,`host_requests/${o}`),{status:c,reviewedAt:new Date().toISOString()});const u=r.find(g=>g.id===o);u&&(u.status=c);const p=((d=document.querySelector("#req-filters .filter-pill.active"))==null?void 0:d.dataset.status)||"all";l(p);const v=document.getElementById("req-modal");v&&(v.style.display="none")}catch(u){console.error(u),alert("Failed to update. Check Firebase rules.")}},window.openReqDetail=o=>{const c=r.find(v=>v.id===o);if(!c)return;const d=c.status||"pending",u=document.getElementById("req-modal"),p=document.getElementById("req-modal-body");!u||!p||(p.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
        <div>
          <div style="font-size:16px;font-weight:600;">${c.name||"—"}</div>
          <div style="font-size:11px;color:var(--text-faint);margin-top:3px;">${c.email||""} ${c.phone?"· "+c.phone:""}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="badge badge-${d}">${d}</span>
          <button onclick="document.getElementById('req-modal').style.display='none'"
            style="border:none;background:none;cursor:pointer;color:var(--text-muted);font-size:22px;line-height:1;padding:0;margin-top:-2px;">×</button>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px 24px;margin-bottom:20px;">
        ${[["Topic",c.topic],["Category",c.category],["Preferred Outlet",c.preferredOutlet],["Duration",c.preferredDuration],["Instagram",c.instagram],["Submitted",c.submittedAt||c.createdAt?new Date(c.submittedAt||c.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"]].map(([v,g])=>`
          <div>
            <div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">${v}</div>
            <div style="font-size:12px;color:var(--text);">${g||"—"}</div>
          </div>
        `).join("")}
      </div>

      ${c.bio?`<div style="margin-bottom:14px;"><div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">About / Bio</div><div style="font-size:12px;color:var(--text);line-height:1.75;">${c.bio}</div></div>`:""}
      ${c.sessionDescription?`<div style="margin-bottom:14px;"><div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Session Description</div><div style="font-size:12px;color:var(--text);line-height:1.75;">${c.sessionDescription}</div></div>`:""}
      ${c.message?`<div style="margin-bottom:20px;"><div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Message</div><div style="font-size:12px;color:var(--text);line-height:1.75;">${c.message}</div></div>`:""}

      <div style="display:flex;gap:8px;padding-top:14px;border-top:0.5px solid var(--border);">
        ${d==="pending"?`
          <button class="btn-primary" style="flex:1;justify-content:center;background:#2A5A3A;" onclick="updateReqStatus('${c.id}','approved')">✓ Approve</button>
          <button class="btn-primary" style="flex:1;justify-content:center;background:var(--danger);" onclick="updateReqStatus('${c.id}','rejected')">✕ Reject</button>
        `:`
          <button class="btn-ghost" style="flex:1;justify-content:center;" onclick="updateReqStatus('${c.id}','pending')">Reset to Pending</button>
        `}
      </div>
    `,u.style.display="flex")},document.getElementById("req-modal").addEventListener("click",o=>{o.target.id==="req-modal"&&(o.target.style.display="none")})}yi();const ti=ei(),j=document.getElementById("app");function Us(){const i=window.location.hash.replace("#","")||"/",[e,...t]=i.split("?"),n={};return t.join("?").split("&").forEach(s=>{const[r,a]=s.split("=");r&&(n[r]=decodeURIComponent(a||""))}),{path:e,params:n}}function $s(i,e={}){const t=Object.entries(e).map(([n,s])=>`${n}=${encodeURIComponent(s)}`).join("&");window.location.hash=i+(t?"?"+t:"")}window.adminNavigate=$s;let Le=0;function Te(){return Le}let mt=!1;yn(ti,i=>{if(!i){xs(j);return}vt(i),mt||(window.addEventListener("hashchange",()=>vt(i)),mt=!0)});async function vt(i){Le++;const e=Le,{path:t,params:n}=Us();try{switch(t){case"/workshops":await Ls(j,i,e);break;case"/workshop-form":await Ns(j,i,n.id,e);break;case"/bookings":await Ms(j,i,n.workshopId,e);break;case"/host-requests":await Ds(j,i,e);break;default:await Os(j,i,e)}}catch(s){console.error("[admin render error]",s)}}function le(i,e,t){const n=((e==null?void 0:e.email)||"A").charAt(0).toUpperCase(),s=(e==null?void 0:e.email)||"";return`
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-logo">
          <div class="sidebar-logo-name">Heebee Coffee</div>
          <div class="sidebar-logo-sub">Admin Panel</div>
        </div>
        <nav class="sidebar-nav">
          <div class="sidebar-section">Navigation</div>
          ${[{path:"/",label:"Dashboard",icon:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'},{path:"/workshops",label:"Workshops",icon:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'},{path:"/bookings",label:"Bookings",icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'},{path:"/host-requests",label:"Host Requests",icon:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'}].map(a=>`
            <div class="sidebar-link ${i===a.path||a.path==="/workshops"&&i==="/workshop-form"?"active":""}"
              onclick="adminNavigate('${a.path}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${a.icon}</svg>
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
  `}window.adminSignOut=async()=>{await bn(ti),window.location.hash="/"};
