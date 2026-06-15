import{L as ri,g as bt,i as oi,a as ai,_ as Ge,C as Je,r as Ye,b as li,S as oe,E as Ue,c as S,d as O,e as ci,f as wt,h as I,F as $e,j as di,q as ae,k as _t,l as ui,m as hi,n as pi,o as fi,p as gi,s as vi,t as te,u as ie,v as le,w as P,x as _,y as ye,z as Ee,A as mi,B as yi,D as bi}from"./helpers-DbYsWB8w.js";function Be(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t}function It(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wi=It,kt=new Ue("auth","Firebase",It());/**
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
 */const be=new ri("@firebase/auth");function _i(i,...e){be.logLevel<=wt.WARN&&be.warn(`Auth (${oe}): ${i}`,...e)}function fe(i,...e){be.logLevel<=wt.ERROR&&be.error(`Auth (${oe}): ${i}`,...e)}/**
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
 */function k(i,...e){throw qe(i,...e)}function E(i,...e){return qe(i,...e)}function Et(i,e,t){const n=Object.assign(Object.assign({},wi()),{[e]:t});return new Ue("auth","Firebase",n).create(e,{appName:i.name})}function q(i){return Et(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qe(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return kt.create(i,...e)}function f(i,e,...t){if(!i)throw qe(e,...t)}function A(i){const e="INTERNAL ASSERTION FAILED: "+i;throw fe(e),new Error(e)}function C(i,e){i||A(e)}/**
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
 */function Ne(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ii(){return Xe()==="http:"||Xe()==="https:"}function Xe(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function ki(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ii()||li()||"connection"in navigator)?navigator.onLine:!0}function Ei(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ce{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=oi()||ai()}get(){return ki()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fe(i,e){C(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Tt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ti={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Si=new ce(3e4,6e4);function W(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function F(i,e,t,n,s={}){return St(i,s,async()=>{let r={},o={};n&&(e==="GET"?o=n:r={body:JSON.stringify(n)});const c=ae(Object.assign({key:i.config.apiKey},o)).slice(1),a=await i._getAdditionalHeaders();a["Content-Type"]="application/json",i.languageCode&&(a["X-Firebase-Locale"]=i.languageCode);const l=Object.assign({method:e,headers:a},r);return vi()||(l.referrerPolicy="no-referrer"),Tt.fetch()(At(i,i.config.apiHost,t,c),l)})}async function St(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ti),e);try{const s=new Ri(i),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pe(i,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw pe(i,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw pe(i,"email-already-in-use",o);if(a==="USER_DISABLED")throw pe(i,"user-disabled",o);const d=n[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Et(i,d,l);k(i,d)}}catch(s){if(s instanceof $e)throw s;k(i,"network-request-failed",{message:String(s)})}}async function Te(i,e,t,n,s={}){const r=await F(i,e,t,n,s);return"mfaPendingCredential"in r&&k(i,"multi-factor-auth-required",{_serverResponse:r}),r}function At(i,e,t,n){const s=`${e}${t}?${n}`;return i.config.emulator?Fe(i.config,s):`${i.config.apiScheme}://${s}`}function Ai(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ri{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(E(this.auth,"network-request-failed")),Si.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pe(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=E(i,e,n);return s.customData._tokenResponse=t,s}function Qe(i){return i!==void 0&&i.enterprise!==void 0}class xi{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ai(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Pi(i,e){return F(i,"GET","/v2/recaptchaConfig",W(i,e))}/**
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
 */async function Ci(i,e){return F(i,"POST","/v1/accounts:delete",e)}async function Rt(i,e){return F(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ne(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Oi(i,e=!1){const t=O(i),n=await t.getIdToken(e),s=He(n);f(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:n,authTime:ne(Ce(s.auth_time)),issuedAtTime:ne(Ce(s.iat)),expirationTime:ne(Ce(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ce(i){return Number(i)*1e3}function He(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return fe("JWT malformed, contained fewer than 3 sections"),null;try{const s=di(t);return s?JSON.parse(s):(fe("Failed to decode base64 JWT payload"),null)}catch(s){return fe("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ze(i){const e=He(i);return f(e,"internal-error"),f(typeof e.exp<"u","internal-error"),f(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function se(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof $e&&Ni(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function Ni({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Le{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ne(this.lastLoginAt),this.creationTime=ne(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function we(i){var e;const t=i.auth,n=await i.getIdToken(),s=await se(i,Rt(t,{idToken:n}));f(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];i._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xt(r.providerUserInfo):[],c=Di(i.providerData,o),a=i.isAnonymous,l=!(i.email&&r.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Le(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(i,u)}async function Mi(i){const e=O(i);await we(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Di(i,e){return[...i.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function xt(i){return i.map(e=>{var{providerId:t}=e,n=Be(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Ui(i,e){const t=await St(i,{},async()=>{const n=ae({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=i.config,o=At(i,s,"/v1/token",`key=${r}`),c=await i._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Tt.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $i(i,e){return F(i,"POST","/v2/accounts:revokeToken",W(i,e))}/**
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
 */class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken<"u","internal-error"),f(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ze(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){f(e.length!==0,"internal-error");const t=Ze(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(f(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await Ui(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,o=new G;return n&&(f(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(f(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(f(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return A("not implemented")}}/**
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
 */function M(i,e){f(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class R{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Be(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Li(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Le(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await se(this,this.stsTokenManager.getToken(this.auth,e));return f(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Oi(this,e)}reload(){return Mi(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new R(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await we(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(S(this.auth.app))return Promise.reject(q(this.auth));const e=await this.getIdToken();return await se(this,Ci(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,o,c,a,l,d;const u=(n=t.displayName)!==null&&n!==void 0?n:void 0,p=(s=t.email)!==null&&s!==void 0?s:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(c=t.tenantId)!==null&&c!==void 0?c:void 0,b=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,g=(l=t.createdAt)!==null&&l!==void 0?l:void 0,h=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:ee,isAnonymous:H,providerData:N,stsTokenManager:L}=t;f(w&&L,e,"internal-error");const ni=G.fromJSON(this.name,L);f(typeof w=="string",e,"internal-error"),M(u,e.name),M(p,e.name),f(typeof ee=="boolean",e,"internal-error"),f(typeof H=="boolean",e,"internal-error"),M(v,e.name),M(y,e.name),M(m,e.name),M(b,e.name),M(g,e.name),M(h,e.name);const Pe=new R({uid:w,auth:e,email:p,emailVerified:ee,displayName:u,isAnonymous:H,photoURL:y,phoneNumber:v,tenantId:m,stsTokenManager:ni,createdAt:g,lastLoginAt:h});return N&&Array.isArray(N)&&(Pe.providerData=N.map(si=>Object.assign({},si))),b&&(Pe._redirectEventId=b),Pe}static async _fromIdTokenResponse(e,t,n=!1){const s=new G;s.updateFromServerResponse(t);const r=new R({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await we(r),r}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];f(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?xt(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new G;c.updateFromIdToken(n);const a=new R({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Le(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(a,l),a}}/**
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
 */const et=new Map;function x(i){C(i instanceof Function,"Expected a class definition");let e=et.get(i);return e?(C(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,et.set(i,e),e)}/**
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
 */class Pt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pt.type="NONE";const tt=Pt;/**
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
 */function ge(i,e,t){return`firebase:${i}:${e}:${t}`}class J{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=ge(this.userKey,s.apiKey,r),this.fullPersistenceKey=ge("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?R._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new J(x(tt),e,n);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||x(tt);const o=ge(n,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){const u=R._fromJSON(e,d);l!==r&&(c=u),r=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new J(r,e,n):(r=a[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new J(r,e,n))}}/**
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
 */function it(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ct(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dt(e))return"Blackberry";if(Ut(e))return"Webos";if(Ot(e))return"Safari";if((e.includes("chrome/")||Nt(e))&&!e.includes("edge/"))return"Chrome";if(Mt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ct(i=I()){return/firefox\//i.test(i)}function Ot(i=I()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nt(i=I()){return/crios\//i.test(i)}function Lt(i=I()){return/iemobile/i.test(i)}function Mt(i=I()){return/android/i.test(i)}function Dt(i=I()){return/blackberry/i.test(i)}function Ut(i=I()){return/webos/i.test(i)}function je(i=I()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Bi(i=I()){var e;return je(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qi(){return fi()&&document.documentMode===10}function $t(i=I()){return je(i)||Mt(i)||Ut(i)||Dt(i)||/windows phone/i.test(i)||Lt(i)}/**
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
 */function Bt(i,e=[]){let t;switch(i){case"Browser":t=it(I());break;case"Worker":t=`${it(I())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oe}/${n}`}/**
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
 */class Fi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((o,c)=>{try{const a=e(r);o(a)}catch(a){c(a)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Hi(i,e={}){return F(i,"GET","/v2/passwordPolicy",W(i,e))}/**
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
 */const ji=6;class Wi{constructor(e){var t,n,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ji,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,r,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(t=a.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),a.isValid&&(a.isValid=(n=a.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class zi{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nt(this),this.idTokenSubscription=new nt(this),this.beforeStateQueue=new Fi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await J.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rt(this,{idToken:e}),n=await R._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(S(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await we(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ei()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(S(this.app))return Promise.reject(q(this));const t=e?O(e):null;return t&&f(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return S(this.app)?Promise.reject(q(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return S(this.app)?Promise.reject(q(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(x(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hi(this),t=new Wi(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await $i(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;f(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(f(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const a=e.addObserver(t,n,s);return()=>{o=!0,a()}}else{const a=e.addObserver(t);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_i(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Q(i){return O(i)}class nt{constructor(e){this.auth=e,this.observer=null,this.addObserver=ci(t=>this.observer=t)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Se={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vi(i){Se=i}function qt(i){return Se.loadJS(i)}function Ki(){return Se.recaptchaEnterpriseScript}function Gi(){return Se.gapiScript}function Ji(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const Yi="recaptcha-enterprise",Xi="NO_RECAPTCHA";class Qi{constructor(e){this.type=Yi,this.auth=Q(e)}async verify(e="verify",t=!1){async function n(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Pi(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new xi(a);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(r,o,c){const a=window.grecaptcha;Qe(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(Xi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{n(this.auth).then(c=>{if(!t&&Qe(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Ki();a.length!==0&&(a+=c),qt(a).then(()=>{s(c,r,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function st(i,e,t,n=!1){const s=new Qi(i);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rt(i,e,t,n){var s;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await st(i,e,t,t==="getOobCode");return n(i,r)}else return n(i,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await st(i,e,t,t==="getOobCode");return n(i,o)}else return Promise.reject(r)})}/**
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
 */function Zi(i,e){const t=_t(i,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(pi(r,e??{}))return s;k(s,"already-initialized")}return t.initialize({options:e})}function en(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(x);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tn(i,e,t){const n=Q(i);f(n._canInitEmulator,n,"emulator-config-failed"),f(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,r=Ft(e),{host:o,port:c}=nn(e),a=c===null?"":`:${c}`;n.config.emulator={url:`${r}//${o}${a}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),sn()}function Ft(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function nn(i){const e=Ft(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const r=s[1];return{host:r,port:ot(n.substr(r.length+1))}}else{const[r,o]=n.split(":");return{host:r,port:ot(o)}}}function ot(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function sn(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class We{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return A("not implemented")}_getIdTokenResponse(e){return A("not implemented")}_linkToIdToken(e,t){return A("not implemented")}_getReauthenticationResolver(e){return A("not implemented")}}async function rn(i,e){return F(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function on(i,e){return Te(i,"POST","/v1/accounts:signInWithPassword",W(i,e))}/**
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
 */async function an(i,e){return Te(i,"POST","/v1/accounts:signInWithEmailLink",W(i,e))}async function ln(i,e){return Te(i,"POST","/v1/accounts:signInWithEmailLink",W(i,e))}/**
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
 */class re extends We{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new re(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new re(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rt(e,t,"signInWithPassword",on);case"emailLink":return an(e,{email:this._email,oobCode:this._password});default:k(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rt(e,n,"signUpPassword",rn);case"emailLink":return ln(e,{idToken:t,email:this._email,oobCode:this._password});default:k(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Y(i,e){return Te(i,"POST","/v1/accounts:signInWithIdp",W(i,e))}/**
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
 */const cn="http://localhost";class j extends We{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new j(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):k("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Be(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new j(n,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Y(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Y(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Y(e,t)}buildRequest(){const e={requestUri:cn,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ae(t)}return e}}/**
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
 */function dn(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function un(i){const e=te(ie(i)).link,t=e?te(ie(e)).deep_link_id:null,n=te(ie(i)).deep_link_id;return(n?te(ie(n)).link:null)||n||t||e||i}class ze{constructor(e){var t,n,s,r,o,c;const a=te(ie(e)),l=(t=a.apiKey)!==null&&t!==void 0?t:null,d=(n=a.oobCode)!==null&&n!==void 0?n:null,u=dn((s=a.mode)!==null&&s!==void 0?s:null);f(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(r=a.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=un(e);try{return new ze(t)}catch{return null}}}/**
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
 */class Z{constructor(){this.providerId=Z.PROVIDER_ID}static credential(e,t){return re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return f(n,"argument-error"),re._fromEmailAndCode(e,n.code,n.tenantId)}}Z.PROVIDER_ID="password";Z.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Z.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class de extends Ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class D extends de{constructor(){super("facebook.com")}static credential(e){return j._fromParams({providerId:D.PROVIDER_ID,signInMethod:D.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return D.credential(e.oauthAccessToken)}catch{return null}}}D.FACEBOOK_SIGN_IN_METHOD="facebook.com";D.PROVIDER_ID="facebook.com";/**
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
 */class U extends de{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return j._fromParams({providerId:U.PROVIDER_ID,signInMethod:U.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return U.credentialFromTaggedObject(e)}static credentialFromError(e){return U.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return U.credential(t,n)}catch{return null}}}U.GOOGLE_SIGN_IN_METHOD="google.com";U.PROVIDER_ID="google.com";/**
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
 */class $ extends de{constructor(){super("github.com")}static credential(e){return j._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $.credential(e.oauthAccessToken)}catch{return null}}}$.GITHUB_SIGN_IN_METHOD="github.com";$.PROVIDER_ID="github.com";/**
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
 */class B extends de{constructor(){super("twitter.com")}static credential(e,t){return j._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return B.credential(t,n)}catch{return null}}}B.TWITTER_SIGN_IN_METHOD="twitter.com";B.PROVIDER_ID="twitter.com";/**
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
 */class X{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await R._fromIdTokenResponse(e,n,s),o=at(n);return new X({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=at(n);return new X({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function at(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class _e extends $e{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,_e.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new _e(e,t,n,s)}}function jt(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?_e._fromErrorAndOperation(i,r,e,n):r})}async function hn(i,e,t=!1){const n=await se(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return X._forOperation(i,"link",n)}/**
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
 */async function pn(i,e,t=!1){const{auth:n}=i;if(S(n.app))return Promise.reject(q(n));const s="reauthenticate";try{const r=await se(i,jt(n,s,e,i),t);f(r.idToken,n,"internal-error");const o=He(r.idToken);f(o,n,"internal-error");const{sub:c}=o;return f(i.uid===c,n,"user-mismatch"),X._forOperation(i,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&k(n,"user-mismatch"),r}}/**
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
 */async function Wt(i,e,t=!1){if(S(i.app))return Promise.reject(q(i));const n="signIn",s=await jt(i,n,e),r=await X._fromIdTokenResponse(i,n,s);return t||await i._updateCurrentUser(r.user),r}async function fn(i,e){return Wt(Q(i),e)}/**
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
 */async function gn(i){const e=Q(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vn(i,e,t){return S(i.app)?Promise.reject(q(i)):fn(O(i),Z.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&gn(i),n})}function mn(i,e,t,n){return O(i).onIdTokenChanged(e,t,n)}function yn(i,e,t){return O(i).beforeAuthStateChanged(e,t)}function bn(i,e,t,n){return O(i).onAuthStateChanged(e,t,n)}function wn(i){return O(i).signOut()}const Ie="__sak";/**
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
 */class zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ie,"1"),this.storage.removeItem(Ie),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _n=1e3,In=10;class Vt extends zt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$t(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},r=this.storage.getItem(n);qi()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,In):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},_n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vt.type="LOCAL";const kn=Vt;/**
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
 */class Kt extends zt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kt.type="SESSION";const Gt=Kt;/**
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
 */function En(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ae{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Ae(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async l=>l(t.origin,r)),a=await En(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ae.receivers=[];/**
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
 */function Ve(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class Tn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,a)=>{const l=Ve("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(p.data.response);break;default:clearTimeout(d),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function T(){return window}function Sn(i){T().location.href=i}/**
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
 */function Jt(){return typeof T().WorkerGlobalScope<"u"&&typeof T().importScripts=="function"}async function An(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rn(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function xn(){return Jt()?self:null}/**
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
 */const Yt="firebaseLocalStorageDb",Pn=1,ke="firebaseLocalStorage",Xt="fbase_key";class ue{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Re(i,e){return i.transaction([ke],e?"readwrite":"readonly").objectStore(ke)}function Cn(){const i=indexedDB.deleteDatabase(Yt);return new ue(i).toPromise()}function Me(){const i=indexedDB.open(Yt,Pn);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(ke,{keyPath:Xt})}catch(s){t(s)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(ke)?e(n):(n.close(),await Cn(),e(await Me()))})})}async function lt(i,e,t){const n=Re(i,!0).put({[Xt]:e,value:t});return new ue(n).toPromise()}async function On(i,e){const t=Re(i,!1).get(e),n=await new ue(t).toPromise();return n===void 0?null:n.value}function ct(i,e){const t=Re(i,!0).delete(e);return new ue(t).toPromise()}const Nn=800,Ln=3;class Qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Me(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ln)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ae._getInstance(xn()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await An(),!this.activeServiceWorker)return;this.sender=new Tn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rn()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Me();return await lt(e,Ie,"1"),await ct(e,Ie),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>On(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ct(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Re(s,!1).getAll();return new ue(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qt.type="LOCAL";const Mn=Qt;new ce(3e4,6e4);/**
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
 */function Dn(i,e){return e?x(e):(f(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ke extends We{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Y(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Y(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Y(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Un(i){return Wt(i.auth,new Ke(i),i.bypassAuthState)}function $n(i){const{auth:e,user:t}=i;return f(t,e,"internal-error"),pn(t,new Ke(i),i.bypassAuthState)}async function Bn(i){const{auth:e,user:t}=i;return f(t,e,"internal-error"),hn(t,new Ke(i),i.bypassAuthState)}/**
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
 */class Zt{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Un;case"linkViaPopup":case"linkViaRedirect":return Bn;case"reauthViaPopup":case"reauthViaRedirect":return $n;default:k(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qn=new ce(2e3,1e4);class K extends Zt{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,K.currentPopupAction&&K.currentPopupAction.cancel(),K.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){C(this.filter.length===1,"Popup operations only handle one event");const e=Ve();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(E(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(E(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,K.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(E(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qn.get())};e()}}K.currentPopupAction=null;/**
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
 */const Fn="pendingRedirect",ve=new Map;class Hn extends Zt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ve.get(this.auth._key());if(!e){try{const n=await jn(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ve.set(this.auth._key(),e)}return this.bypassAuthState||ve.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jn(i,e){const t=Vn(e),n=zn(i);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Wn(i,e){ve.set(i._key(),e)}function zn(i){return x(i._redirectPersistence)}function Vn(i){return ge(Fn,i.config.apiKey,i.name)}async function Kn(i,e,t=!1){if(S(i.app))return Promise.reject(q(i));const n=Q(i),s=Dn(n,e),o=await new Hn(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const Gn=10*60*1e3;class Jn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ei(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(E(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gn&&this.cachedEventUids.clear(),this.cachedEventUids.has(dt(e))}saveEventToCache(e){this.cachedEventUids.add(dt(e)),this.lastProcessedEventTime=Date.now()}}function dt(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ei({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yn(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ei(i);default:return!1}}/**
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
 */async function Xn(i,e={}){return F(i,"GET","/v1/projects",e)}/**
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
 */const Qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zn=/^https?/;async function es(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Xn(i);for(const t of e)try{if(ts(t))return}catch{}k(i,"unauthorized-domain")}function ts(i){const e=Ne(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const o=new URL(i);return o.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Zn.test(t))return!1;if(Qn.test(i))return n===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const is=new ce(3e4,6e4);function ut(){const i=T().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function ns(i){return new Promise((e,t)=>{var n,s,r;function o(){ut(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ut(),t(E(i,"network-request-failed"))},timeout:is.get()})}if(!((s=(n=T().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=T().gapi)===null||r===void 0)&&r.load)o();else{const c=Ji("iframefcb");return T()[c]=()=>{gapi.load?o():t(E(i,"network-request-failed"))},qt(`${Gi()}?onload=${c}`).catch(a=>t(a))}}).catch(e=>{throw me=null,e})}let me=null;function ss(i){return me=me||ns(i),me}/**
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
 */const rs=new ce(5e3,15e3),os="__/auth/iframe",as="emulator/auth/iframe",ls={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ds(i){const e=i.config;f(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Fe(e,as):`https://${i.config.authDomain}/${os}`,n={apiKey:e.apiKey,appName:i.name,v:oe},s=cs.get(i.config.apiHost);s&&(n.eid=s);const r=i._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${ae(n).slice(1)}`}async function us(i){const e=await ss(i),t=T().gapi;return f(t,i,"internal-error"),e.open({where:document.body,url:ds(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ls,dontclear:!0},n=>new Promise(async(s,r)=>{await n.restyle({setHideOnLeave:!1});const o=E(i,"network-request-failed"),c=T().setTimeout(()=>{r(o)},rs.get());function a(){T().clearTimeout(c),s(n)}n.ping(a).then(a,()=>{r(o)})}))}/**
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
 */const hs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ps=500,fs=600,gs="_blank",vs="http://localhost";class ht{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ms(i,e,t,n=ps,s=fs){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const a=Object.assign(Object.assign({},hs),{width:n.toString(),height:s.toString(),top:r,left:o}),l=I().toLowerCase();t&&(c=Nt(l)?gs:t),Ct(l)&&(e=e||vs,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[v,y])=>`${p}${v}=${y},`,"");if(Bi(l)&&c!=="_self")return ys(e||"",c),new ht(null);const u=window.open(e||"",c,d);f(u,i,"popup-blocked");try{u.focus()}catch{}return new ht(u)}function ys(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const bs="__/auth/handler",ws="emulator/auth/handler",_s=encodeURIComponent("fac");async function pt(i,e,t,n,s,r){f(i.config.authDomain,i,"auth-domain-config-required"),f(i.config.apiKey,i,"invalid-api-key");const o={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:oe,eventId:s};if(e instanceof Ht){e.setDefaultLanguage(i.languageCode),o.providerId=e.providerId||"",gi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof de){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}i.tenantId&&(o.tid=i.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await i._getAppCheckToken(),l=a?`#${_s}=${encodeURIComponent(a)}`:"";return`${Is(i)}?${ae(c).slice(1)}${l}`}function Is({config:i}){return i.emulator?Fe(i,ws):`https://${i.authDomain}/${bs}`}/**
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
 */const Oe="webStorageSupport";class ks{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gt,this._completeRedirectFn=Kn,this._overrideRedirectResult=Wn}async _openPopup(e,t,n,s){var r;C((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await pt(e,t,n,Ne(),s);return ms(e,o,Ve())}async _openRedirect(e,t,n,s){await this._originValidation(e);const r=await pt(e,t,n,Ne(),s);return Sn(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(C(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await us(e),n=new Jn(e);return t.register("authEvent",s=>(f(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oe,{type:Oe},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Oe];o!==void 0&&t(!!o),k(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=es(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $t()||Ot()||je()}}const Es=ks;var ft="@firebase/auth",gt="1.7.9";/**
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
 */class Ts{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ss(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function As(i){Ge(new Je("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;f(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:c,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bt(i)},l=new zi(n,s,r,a);return en(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ge(new Je("auth-internal",e=>{const t=Q(e.getProvider("auth").getImmediate());return(n=>new Ts(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(ft,gt,Ss(i)),Ye(ft,gt,"esm2017")}/**
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
 */const Rs=5*60,xs=bt("authIdTokenMaxAge")||Rs;let vt=null;const Ps=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>xs)return;const s=t==null?void 0:t.token;vt!==s&&(vt=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ti(i=hi()){const e=_t(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Zi(i,{popupRedirectResolver:Es,persistence:[Mn,kn,Gt]}),n=bt("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const o=Ps(r.toString());yn(t,o,()=>o(t.currentUser)),mn(t,c=>o(c))}}const s=ui("auth");return s&&tn(t,`http://${s}`),t}function Cs(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Vi({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=s=>{const r=E("internal-error");r.customData=s,t(r)},n.type="text/javascript",n.charset="UTF-8",Cs().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});As("Browser");function Os(i){i.innerHTML=`
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
  `;const e=ti(),t=document.getElementById("login-btn"),n=document.getElementById("login-error");document.getElementById("l-pass").addEventListener("keydown",s=>{s.key==="Enter"&&t.click()}),t.addEventListener("click",async()=>{const s=document.getElementById("l-email").value.trim(),r=document.getElementById("l-pass").value;if(!s||!r){n.textContent="Please enter your email and password.",n.style.display="block";return}t.textContent="Signing in...",t.disabled=!0,n.style.display="none";try{await vn(e,s,r)}catch(o){t.textContent="Sign in",t.disabled=!1,n.textContent=o.code==="auth/invalid-credential"?"Incorrect email or password.":"Something went wrong. Try again.",n.style.display="block"}})}async function Ns(i,e,t){i.innerHTML=he("/",e,`
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
  `);const n=le(),[s,r,o]=await Promise.all([P(_(n,"workshops")),P(_(n,"bookings")),P(_(n,"host_requests"))]);if(xe()!==t)return;const c=s.exists()?Object.values(s.val()):[],a=r.exists()?Object.values(r.val()):[],l=o.exists()?Object.values(o.val()):[],d=c.filter(h=>h.status==="live").length,u=a.reduce((h,w)=>h+(w.totalAmount||0),0),p=l.filter(h=>(h.status||"pending")==="pending").length,v=document.getElementById("stats");v&&(v.innerHTML=`
    <div class="stat-card">
      <div class="stat-label">Live Workshops</div>
      <div class="stat-value">${d}</div>
      <div class="stat-sub">${c.length} total</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Total Bookings</div>
      <div class="stat-value">${a.length}</div>
      <div class="stat-sub">All time</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Total Revenue</div>
      <div class="stat-value" style="font-size:22px;">${ye(u)}</div>
      <div class="stat-sub">All bookings</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Pending Requests</div>
      <div class="stat-value" style="${p>0?"color:#7A5A10;":""}">${p}</div>
      <div class="stat-sub">Host requests</div>
    </div>
  `);const y=[...a].sort((h,w)=>(w.createdAt||"")>(h.createdAt||"")?1:-1).slice(0,5),m=document.getElementById("recent-bookings");m&&(m.innerHTML=y.length?`
    <div class="table-scroll">
      <table>
        <thead><tr><th>Name</th><th>Workshop</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          ${y.map(h=>{var w;return`
            <tr style="cursor:pointer;" onclick="adminNavigate('/bookings')">
              <td>${((w=h.primaryAttendee)==null?void 0:w.name)||"—"}</td>
              <td style="color:var(--text-muted);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${h.workshopTitle||"—"}</td>
              <td class="mono">${ye(h.totalAmount||0)}</td>
              <td><span class="badge badge-${h.status||"pending"}">${h.status||"pending"}</span></td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="empty-state">No bookings yet</div>');const b=[...l].sort((h,w)=>(w.submittedAt||w.createdAt||"")>(h.submittedAt||h.createdAt||"")?1:-1).slice(0,5),g=document.getElementById("recent-requests");g&&(g.innerHTML=b.length?`
    <div class="table-scroll">
      <table>
        <thead><tr><th>Name</th><th>Topic</th><th>Status</th></tr></thead>
        <tbody>
          ${b.map(h=>`
            <tr style="cursor:pointer;" onclick="adminNavigate('/host-requests')">
              <td>${h.name||"—"}</td>
              <td style="color:var(--text-muted);">${h.topic||"—"}</td>
              <td><span class="badge badge-${h.status||"pending"}">${h.status||"pending"}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="empty-state">No host requests yet</div>')}async function Ls(i,e,t){i.innerHTML=he("/workshops",e,`
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
  `);const n=le(),s=await P(_(n,"workshops"));if(xe()!==t)return;if(!s.exists()){const c=document.getElementById("ws-table");c&&(c.innerHTML=`<div class="empty-state">No workshops yet. <span style="color:var(--accent);cursor:pointer;" onclick="adminNavigate('/workshop-form')">Create one →</span></div>`);return}const r=Object.entries(s.val()).map(([c,a])=>({id:c,...a})).sort((c,a)=>(a.createdAt||"")>(c.createdAt||"")?1:-1);function o(c){const a=document.getElementById("ws-table");if(!a)return;const l=c==="all"?r:r.filter(d=>d.status===c);if(!l.length){a.innerHTML='<div class="empty-state">No workshops in this category.</div>';return}a.innerHTML=`
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
          ${l.map(d=>`
            <tr>
              <td style="min-width:180px;">
                <div style="font-weight:500;">${d.title||"—"}</div>
                <div style="font-size:10px;color:var(--text-faint);margin-top:2px;">${d.hostName||""}</div>
              </td>
              <td style="white-space:nowrap;color:var(--text-muted);">${d.date?mi(d.date):"TBC"}</td>
              <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${d.outlet?d.outlet.split(",")[0]:"—"}</td>
              <td class="mono" style="white-space:nowrap;">${d.slotsRemaining??"—"} / ${d.maxSlots??"—"}</td>
              <td class="mono">${d.price?ye(d.price):"—"}</td>
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
    `}o("all"),document.querySelectorAll("#ws-filters .filter-pill").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll("#ws-filters .filter-pill").forEach(a=>a.classList.remove("active")),c.classList.add("active"),o(c.dataset.status)})}),window.updateWorkshopStatus=async(c,a)=>{try{await Ee(_(n,`workshops/${c}`),{status:a});const l=r.find(d=>d.id===c);l&&(l.status=a)}catch(l){console.error("Status update failed:",l),alert("Failed to update status. Check Firebase rules.")}}}async function Ms(i,e,t,n,s){var p,v,y,m,b;const r=le();let o=null,c=null;if(t){const g=await P(_(r,`workshops/${t}`));g.exists()&&(o=g.val())}if(!t&&s){const g=await P(_(r,`host_requests/${s}`));g.exists()&&(c=g.val())}const a=!!o,l=o||(c?{title:c.topic||"",category:c.category||"",description:c.description||c.sessionDescription||"",outlet:c.outlet||c.preferredOutlet||"",hostName:c.name||"",hostInstagram:c.instagram||"",hostBio:c.background||c.bio||"",price:c.price||"",hostType:"external"}:{});i.innerHTML=he("/workshop-form",e,`
    <div class="admin-topbar">
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="btn-ghost" style="padding:6px 10px;" onclick="adminNavigate('/workshops')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <div>
          <div class="admin-topbar-title">${a?"Edit Workshop":"New Workshop"}</div>
          <div class="admin-topbar-sub">${a?l.title:"Create a new session"}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn-ghost" onclick="adminNavigate('/workshops')">Cancel</button>
        <button class="btn-primary" id="save-btn">Save Workshop</button>
      </div>
    </div>
    <div class="admin-body">
      ${c?`
        <div style="background:rgba(42,90,58,0.07);border:0.5px solid rgba(42,90,58,0.22);border-radius:8px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A5A3A" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          <div>
            <span style="font-size:12px;font-weight:500;color:#2A5A3A;">Pre-filled from host request</span>
            <span style="font-size:11px;color:var(--text-muted);margin-left:8px;">by ${c.name||""}. Review all fields before saving.</span>
          </div>
        </div>
      `:""}
      <div id="form-error" style="display:none;background:rgba(90,40,40,0.08);border:0.5px solid rgba(90,40,40,0.2);border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#5A2828;"></div>

      <!-- BASICS -->
      <div class="form-section">
        <div class="form-section-title">Workshop Details</div>
        <div class="field">
          <label class="field-label">Title <span class="req">*</span></label>
          <input class="field-input" id="f-title" type="text" placeholder="e.g. Manual Brew Fundamentals" value="${l.title||""}">
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Category <span class="req">*</span></label>
            <select class="field-input" id="f-category">
              <option value="" disabled ${l.category?"":"selected"}>Select</option>
              ${["Coffee","Art & Design","Wellness","Business","Food","Music","Photography"].map(g=>`<option value="${g}" ${l.category===g?"selected":""}>${g}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label class="field-label">Status <span class="req">*</span></label>
            <select class="field-input" id="f-status">
              <option value="draft" ${l.status==="draft"||!l.status?"selected":""}>Draft</option>
              <option value="coming_soon" ${l.status==="coming_soon"?"selected":""}>Coming Soon</option>
              <option value="live" ${l.status==="live"?"selected":""}>Live</option>
              <option value="past" ${l.status==="past"?"selected":""}>Past</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Description <span class="req">*</span></label>
          <textarea class="field-input" id="f-description" placeholder="What will attendees learn? What should they expect?" style="min-height:100px;">${l.description||""}</textarea>
        </div>
      </div>

      <!-- DATE & LOGISTICS -->
      <div class="form-section">
        <div class="form-section-title">Date & Logistics</div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Date <span class="req">*</span></label>
            <input class="field-input" id="f-date" type="date" value="${l.date||""}">
          </div>
          <div class="field">
            <label class="field-label">Time <span class="req">*</span></label>
            <input class="field-input" id="f-time" type="time" value="${l.time||""}">
          </div>
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Duration</label>
            <input class="field-input" id="f-duration" type="text" placeholder="e.g. 2 hours" value="${l.duration||""}">
          </div>
          <div class="field">
            <label class="field-label">Language</label>
            <input class="field-input" id="f-language" type="text" placeholder="e.g. English + Hindi" value="${l.language||"English + Hindi"}">
          </div>
        </div>
        <div class="field">
          <label class="field-label">Outlet <span class="req">*</span></label>
          <select class="field-input" id="f-outlet">
            <option value="" disabled ${l.outlet?"":"selected"}>Select outlet</option>
            <option value="Heebee SHB, Sarabha Nagar, Ludhiana" ${(p=l.outlet)!=null&&p.includes("SHB")?"selected":""}>Heebee SHB — Sarabha Nagar, Ludhiana</option>
            <option value="Heebee GHB, Ghumar Mandi, Ludhiana" ${(v=l.outlet)!=null&&v.includes("GHB")?"selected":""}>Heebee GHB — Ghumar Mandi, Ludhiana</option>
            <option value="Heebee JLD, Model Town, Jalandhar" ${(y=l.outlet)!=null&&y.includes("JLD")?"selected":""}>Heebee JLD — Model Town, Jalandhar</option>
          </select>
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Max Slots <span class="req">*</span></label>
            <input class="field-input" id="f-max-slots" type="number" placeholder="e.g. 12" value="${l.maxSlots||""}">
          </div>
          <div class="field">
            <label class="field-label">Slots Remaining <span class="req">*</span></label>
            <input class="field-input" id="f-slots-remaining" type="number" placeholder="e.g. 12" value="${l.slotsRemaining??l.maxSlots??""}">
          </div>
        </div>
      </div>

      <!-- PAYMENT -->
      <div class="form-section">
        <div class="form-section-title">Pricing & Payment</div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Price per person (₹) <span class="req">*</span></label>
            <input class="field-input" id="f-price" type="number" placeholder="e.g. 500" value="${l.price||""}">
          </div>
          <div class="field">
            <label class="field-label">Payment Mode <span class="req">*</span></label>
            <select class="field-input" id="f-payment-mode">
              <option value="razorpay" ${l.paymentMode==="razorpay"?"selected":""}>Razorpay Checkout</option>
              <option value="qr" ${l.paymentMode==="qr"||!l.paymentMode?"selected":""}>UPI QR Code</option>
            </select>
          </div>
        </div>

        <!-- Razorpay info banner (no link needed) -->
        <div id="razorpay-field" style="${l.paymentMode==="qr"?"display:none":""}">
          <div style="background:rgba(42,90,58,0.06);border:0.5px solid rgba(42,90,58,0.2);border-radius:7px;padding:10px 14px;font-size:11px;color:var(--text-muted);line-height:1.6;">
            ✓ &nbsp;<strong style="color:#2A5A3A;">Razorpay Checkout is active.</strong> The payment modal opens directly on the booking page using your API key — no link needed here.
          </div>
        </div>

        <!-- UPI QR: just needs the UPI ID set in .env — no image upload needed -->
        <div id="qr-field" style="${l.paymentMode!=="qr"&&l.paymentMode?"display:none":""}">
          <div style="background:rgba(124,111,62,0.06);border:0.5px solid rgba(124,111,62,0.2);border-radius:7px;padding:10px 14px;font-size:11px;color:var(--text-muted);line-height:1.6;">
            ✓ &nbsp;<strong style="color:var(--accent);">Dynamic UPI QR is active.</strong> A QR code is auto-generated on the booking page with the exact amount and UPI ID (9841400070@hdfc). No image upload needed.
          </div>
        </div>
      </div>

      <!-- HOST -->
      <div class="form-section">
        <div class="form-section-title">Host Information</div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Host Name <span class="req">*</span></label>
            <input class="field-input" id="f-host-name" type="text" placeholder="e.g. Shamjeet Singh" value="${l.hostName||""}">
          </div>
          <div class="field">
            <label class="field-label">Host Role</label>
            <input class="field-input" id="f-host-role" type="text" placeholder="e.g. Head Barista, Heebee SHB" value="${l.hostRole||""}">
          </div>
        </div>
        <div class="form-grid">
          <div class="field">
            <label class="field-label">Host Type</label>
            <select class="field-input" id="f-host-type">
              <option value="heebee" ${l.hostType==="heebee"||!l.hostType?"selected":""}>Heebee Team</option>
              <option value="external" ${l.hostType==="external"?"selected":""}>External Host</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Instagram Handle</label>
            <input class="field-input" id="f-host-instagram" type="text" placeholder="@handle" value="${l.hostInstagram||""}">
          </div>
        </div>
        <div class="field">
          <label class="field-label">Host Bio</label>
          <textarea class="field-input" id="f-host-bio" placeholder="Brief bio...">${l.hostBio||""}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Host Photo URL</label>
          <input class="field-input" id="f-host-photo" type="url" placeholder="https://... (Firebase Storage URL)" value="${l.hostPhoto||""}">
        </div>
      </div>

      <!-- MEDIA -->
      <div class="form-section">
        <div class="form-section-title">Media</div>
        <div class="field">
          <label class="field-label">Cover Image URL</label>
          <input class="field-input" id="f-cover-image" type="url" placeholder="https://... (Firebase Storage URL)" value="${l.coverImage||""}">
        </div>
      </div>

      <!-- THINGS TO KNOW -->
      <div class="form-section">
        <div class="form-section-title">Things to Know</div>
        <div id="things-list">
          ${(l.thingsToKnow||["All ages welcome","Indoor · Seated"]).map((g,h)=>`
            <div class="form-grid" style="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;" id="thing-${h}">
              <input class="field-input thing-input" type="text" value="${g}" placeholder="e.g. All ages welcome">
              <button onclick="removeThing(${h})" style="padding:0 10px;border-radius:6px;border:0.5px solid var(--border);background:var(--white);color:var(--text-muted);cursor:pointer;font-size:16px;height:38px;">×</button>
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
  `),document.getElementById("f-payment-mode").addEventListener("change",g=>{document.getElementById("razorpay-field").style.display=g.target.value==="razorpay"?"block":"none",document.getElementById("qr-field").style.display=g.target.value==="qr"?"block":"none"});let d=(l.thingsToKnow||["",""]).length;window.addThing=()=>{const g=document.getElementById("things-list"),h=document.createElement("div");h.className="form-grid",h.style.cssText="grid-template-columns:1fr auto;gap:8px;margin-bottom:8px;",h.id=`thing-${d}`,h.innerHTML=`
      <input class="field-input thing-input" type="text" placeholder="e.g. All ages welcome">
      <button onclick="removeThing(${d})" style="padding:0 10px;border-radius:6px;border:0.5px solid var(--border);background:var(--white);color:var(--text-muted);cursor:pointer;font-size:16px;height:38px;">×</button>
    `,g.appendChild(h),d++},window.removeThing=g=>{const h=document.getElementById(`thing-${g}`);h&&h.remove()};async function u(){const g=document.getElementById("form-error");g.style.display="none";const h={title:document.getElementById("f-title").value.trim(),category:document.getElementById("f-category").value,description:document.getElementById("f-description").value.trim(),date:document.getElementById("f-date").value,time:document.getElementById("f-time").value,duration:document.getElementById("f-duration").value.trim(),language:document.getElementById("f-language").value.trim(),outlet:document.getElementById("f-outlet").value,maxSlots:parseInt(document.getElementById("f-max-slots").value)||0,slotsRemaining:parseInt(document.getElementById("f-slots-remaining").value)||0,price:parseInt(document.getElementById("f-price").value)||0,status:document.getElementById("f-status").value,paymentMode:document.getElementById("f-payment-mode").value,hostName:document.getElementById("f-host-name").value.trim(),hostRole:document.getElementById("f-host-role").value.trim(),hostType:document.getElementById("f-host-type").value,hostInstagram:document.getElementById("f-host-instagram").value.trim(),hostBio:document.getElementById("f-host-bio").value.trim(),hostPhoto:document.getElementById("f-host-photo").value.trim()||null,coverImage:document.getElementById("f-cover-image").value.trim()||null,thingsToKnow:Array.from(document.querySelectorAll(".thing-input")).map(L=>L.value.trim()).filter(Boolean)},ee=["title","category","description","date","time","outlet","hostName"].filter(L=>!h[L]);if(ee.length){g.textContent=`Please fill in: ${ee.join(", ")}`,g.style.display="block",window.scrollTo({top:0,behavior:"smooth"});return}const H=document.getElementById("save-btn"),N=document.getElementById("save-btn-bottom");H&&(H.textContent="Saving..."),N&&(N.textContent="Saving...");try{a?await Ee(_(r,`workshops/${t}`),h):(h.createdAt=new Date().toISOString(),h.additionalImages=[],await yi(_(r,"workshops"),h)),adminNavigate("/workshops")}catch(L){console.error(L),g.textContent="Save failed. Check your Firebase rules and try again.",g.style.display="block",H&&(H.textContent="Save Workshop"),N&&(N.textContent="Save Workshop")}}(m=document.getElementById("save-btn"))==null||m.addEventListener("click",u),(b=document.getElementById("save-btn-bottom"))==null||b.addEventListener("click",u)}async function Ds(i,e,t,n){var u;i.innerHTML=he("/bookings",e,`
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
  `);const s=le(),[r,o]=await Promise.all([P(_(s,"bookings")),P(_(s,"workshops"))]);if(xe()!==n)return;if(!r.exists()){const p=document.getElementById("bookings-table");p&&(p.innerHTML='<div class="empty-state">No bookings yet. They will appear here once customers book.</div>');return}const c=o.exists()?o.val():{};let a=Object.entries(r.val()).map(([p,v])=>({id:p,...v})).sort((p,v)=>(v.createdAt||"")>(p.createdAt||"")?1:-1);if(t){a=a.filter(v=>v.workshopId===t);const p=document.getElementById("bookings-sub");if(p){const v=((u=c[t])==null?void 0:u.title)||"this workshop";p.textContent=`Filtered: ${v}`}}function l(p){return p?new Date(p).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function d(p){const v=document.getElementById("bookings-table");if(!v)return;const y=p==="all"?a:a.filter(m=>(m.status||"pending")===p);if(!y.length){v.innerHTML='<div class="empty-state">No bookings in this category.</div>';return}v.innerHTML=`
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
          ${y.map(m=>{var w;const b=m.primaryAttendee||{},g=m.workshopTitle||((w=c[m.workshopId])==null?void 0:w.title)||"—",h=m.status||"pending";return`
              <tr>
                <td style="min-width:160px;">
                  <div style="font-weight:500;">${b.name||"—"}</div>
                  ${b.email?`<div style="font-size:10px;color:var(--text-faint);">${b.email}</div>`:""}
                  ${b.phone?`<div style="font-size:10px;color:var(--text-faint);">${b.phone}</div>`:""}
                </td>
                <td style="color:var(--text-muted);font-size:12px;min-width:160px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${g}</td>
                <td class="mono">${m.tickets||1}</td>
                <td class="mono" style="white-space:nowrap;">${ye(m.totalAmount||0)}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${l(m.createdAt)}</td>
                <td><span class="badge badge-${h}">${h}</span></td>
                <td style="white-space:nowrap;">
                  <div class="action-btns">
                    ${h==="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Mark Paid</div>
                        <button class="action-btn action-btn-success" onclick="markBookingStatus('${m.id}','paid')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>`:""}
                    ${h==="paid"?`
                      <div class="tip-wrap">
                        <div class="tip">Confirm</div>
                        <button class="action-btn action-btn-success" onclick="markBookingStatus('${m.id}','confirmed')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </button>
                      </div>`:""}
                    ${h!=="cancelled"?`
                      <div class="tip-wrap">
                        <div class="tip">Cancel</div>
                        <button class="action-btn action-btn-danger" onclick="markBookingStatus('${m.id}','cancelled')">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>`:""}
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `}d("all"),document.querySelectorAll("#booking-filters .filter-pill").forEach(p=>{p.addEventListener("click",()=>{document.querySelectorAll("#booking-filters .filter-pill").forEach(v=>v.classList.remove("active")),p.classList.add("active"),d(p.dataset.status)})}),window.markBookingStatus=async(p,v)=>{var y;try{await Ee(_(s,`bookings/${p}`),{status:v,updatedAt:new Date().toISOString()});const m=a.find(g=>g.id===p);m&&(m.status=v);const b=((y=document.querySelector("#booking-filters .filter-pill.active"))==null?void 0:y.dataset.status)||"all";d(b)}catch(m){console.error("Update failed:",m),alert("Failed to update booking. Check Firebase rules.")}}}function z(i,...e){for(const t of e)if(i[t])return i[t];return"—"}async function Us(i,e,t){i.innerHTML=he("/host-requests",e,`
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
      <div style="background:var(--white);border-radius:12px;border:0.5px solid var(--border);width:580px;max-width:96vw;max-height:90vh;overflow-y:auto;padding:28px;box-shadow:0 24px 60px rgba(26,20,16,0.18);" id="req-modal-body"></div>
    </div>
  `);const n=le(),s=await P(_(n,"host_requests"));if(xe()!==t)return;if(!s.exists()){const a=document.getElementById("req-table");a&&(a.innerHTML='<div class="empty-state">No host requests yet. They appear here when someone submits the Request to Host form on the public site.</div>');return}let r=Object.entries(s.val()).map(([a,l])=>({id:a,...l})).sort((a,l)=>{const d=a.submittedAt||a.createdAt||"";return(l.submittedAt||l.createdAt||"")>d?1:-1});function o(a){const l=a.submittedAt||a.createdAt;return l?new Date(l).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function c(a){const l=document.getElementById("req-table");if(!l)return;const d=a==="all"?r:r.filter(u=>(u.status||"pending")===a);if(!d.length){l.innerHTML='<div class="empty-state">No requests in this category.</div>';return}l.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Topic</th>
            <th>Category</th>
            <th>Outlet</th>
            <th>Price Idea</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${d.map(u=>{const p=u.status||"pending",v=z(u,"outlet","preferredOutlet"),y=v!=="—"?v.split("—")[0].trim():"—";return`
              <tr style="cursor:pointer;" onclick="openReqDetail('${u.id}')">
                <td style="min-width:140px;">
                  <div style="font-weight:500;">${u.name||"—"}</div>
                  ${u.email?`<div style="font-size:10px;color:var(--text-faint);">${u.email}</div>`:""}
                </td>
                <td style="font-size:12px;min-width:180px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${u.topic||"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${u.category||"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${y}</td>
                <td class="mono" style="white-space:nowrap;">${u.price?"₹ "+u.price:"—"}</td>
                <td style="color:var(--text-muted);font-size:11px;white-space:nowrap;">${o(u)}</td>
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
                      </div>`:""}
                    ${p==="approved"?`
                      <div class="tip-wrap">
                        <div class="tip">Create Workshop</div>
                        <button class="action-btn action-btn-success" onclick="createFromRequest('${u.id}');event.stopPropagation()">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        </button>
                      </div>`:""}
                    ${p!=="pending"?`
                      <div class="tip-wrap">
                        <div class="tip">Reset to Pending</div>
                        <button class="action-btn action-btn-default" onclick="updateReqStatus('${u.id}','pending');event.stopPropagation()">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F2EDE6" stroke-width="2" stroke-linecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg>
                        </button>
                      </div>`:""}
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `}c("all"),document.querySelectorAll("#req-filters .filter-pill").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll("#req-filters .filter-pill").forEach(l=>l.classList.remove("active")),a.classList.add("active"),c(a.dataset.status)})}),window.updateReqStatus=async(a,l)=>{var d;try{await Ee(_(n,`host_requests/${a}`),{status:l,reviewedAt:new Date().toISOString()});const u=r.find(y=>y.id===a);u&&(u.status=l);const p=((d=document.querySelector("#req-filters .filter-pill.active"))==null?void 0:d.dataset.status)||"all";c(p);const v=document.getElementById("req-modal");v&&v.style.display!=="none"&&window.openReqDetail(a)}catch(u){console.error(u),alert("Failed to update. Check Firebase rules.")}},window.createFromRequest=a=>{adminNavigate("/workshop-form",{fromRequest:a})},window.openReqDetail=a=>{const l=r.find(h=>h.id===a);if(!l)return;const d=l.status||"pending",u=z(l,"background","bio"),p=z(l,"description","sessionDescription"),v=z(l,"outlet","preferredOutlet"),y=z(l,"notes","message"),m=z(l,"date","preferredDate"),b=document.getElementById("req-modal"),g=document.getElementById("req-modal-body");!b||!g||(g.innerHTML=`
      <!-- Header -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
        <div>
          <div style="font-size:17px;font-weight:600;color:var(--text);">${l.name||"—"}</div>
          <div style="font-size:11px;color:var(--text-faint);margin-top:3px;">
            ${l.email||""} ${l.phone?" · "+l.phone:""}
            ${l.instagram?" · "+l.instagram:""}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="badge badge-${d}">${d}</span>
          <button onclick="document.getElementById('req-modal').style.display='none'"
            style="border:none;background:none;cursor:pointer;color:var(--text-muted);font-size:24px;line-height:1;padding:0;">×</button>
        </div>
      </div>

      <!-- Workshop idea -->
      <div style="background:var(--bg);border-radius:8px;padding:16px;margin-bottom:16px;">
        <div style="font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Workshop Idea</div>
        <div style="font-size:15px;font-weight:500;color:var(--text);margin-bottom:4px;">${l.topic||"—"}</div>
        <div style="font-size:11px;color:var(--text-muted);">${l.category||""} ${l.price?" · ₹ "+l.price+" per slot":""}</div>
        ${p!=="—"?`<div style="font-size:12px;color:var(--text-muted);line-height:1.75;margin-top:10px;border-top:0.5px solid var(--border);padding-top:10px;">${p}</div>`:""}
      </div>

      <!-- Grid details -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 24px;margin-bottom:16px;">
        ${[["Preferred Outlet",v],["Preferred Date",m],["Category",l.category||"—"],["Price Idea",l.price?"₹ "+l.price+" per slot":"—"],["Instagram",l.instagram||"—"],["Submitted",o(l)]].map(([h,w])=>`
          <div>
            <div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">${h}</div>
            <div style="font-size:12px;color:var(--text);">${w}</div>
          </div>
        `).join("")}
      </div>

      <!-- Background -->
      ${u!=="—"?`
        <div style="margin-bottom:14px;">
          <div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:5px;">Background / Experience</div>
          <div style="font-size:12px;color:var(--text);line-height:1.75;">${u}</div>
        </div>`:""}

      <!-- Notes -->
      ${y!=="—"?`
        <div style="margin-bottom:14px;">
          <div style="font-size:9px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:5px;">Additional Notes</div>
          <div style="font-size:12px;color:var(--text);line-height:1.75;">${y}</div>
        </div>`:""}

      <!-- ─── ACTION FOOTER ─── -->
      <div style="border-top:0.5px solid var(--border);padding-top:16px;margin-top:4px;">

        ${d==="pending"?`
          <div style="display:flex;gap:8px;">
            <button class="btn-primary" style="flex:1;justify-content:center;background:#2A5A3A;" onclick="updateReqStatus('${l.id}','approved')">
              ✓ &nbsp;Approve
            </button>
            <button class="btn-primary" style="flex:1;justify-content:center;background:var(--danger);" onclick="updateReqStatus('${l.id}','rejected')">
              ✕ &nbsp;Reject
            </button>
          </div>
        `:""}

        ${d==="approved"?`
          <div style="background:rgba(42,90,58,0.06);border:0.5px solid rgba(42,90,58,0.2);border-radius:8px;padding:14px;margin-bottom:12px;">
            <div style="font-size:11px;font-weight:500;color:#2A5A3A;margin-bottom:4px;">✓ Request approved</div>
            <div style="font-size:11px;color:var(--text-muted);line-height:1.6;">Next step: create the workshop listing. The host's details will be pre-filled for you.</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn-primary" style="flex:1;justify-content:center;" onclick="createFromRequest('${l.id}')">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Create Workshop Listing
            </button>
            <button class="btn-ghost" onclick="updateReqStatus('${l.id}','pending')">Reset</button>
          </div>
        `:""}

        ${d==="rejected"?`
          <div style="background:rgba(90,40,40,0.05);border:0.5px solid rgba(90,40,40,0.15);border-radius:8px;padding:14px;margin-bottom:12px;">
            <div style="font-size:11px;font-weight:500;color:var(--danger);margin-bottom:4px;">✕ Request rejected</div>
            <div style="font-size:11px;color:var(--text-muted);line-height:1.6;">Changed your mind? You can reset it to pending and approve instead.</div>
          </div>
          <button class="btn-ghost" style="width:100%;justify-content:center;" onclick="updateReqStatus('${l.id}','pending')">Reset to Pending</button>
        `:""}

      </div>
    `,b.style.display="flex")},document.getElementById("req-modal").addEventListener("click",a=>{a.target.id==="req-modal"&&(a.target.style.display="none")})}bi();const ii=ti(),V=document.getElementById("app");function $s(){const i=window.location.hash.replace("#","")||"/",[e,...t]=i.split("?"),n={};return t.join("?").split("&").forEach(s=>{const[r,o]=s.split("=");r&&(n[r]=decodeURIComponent(o||""))}),{path:e,params:n}}function Bs(i,e={}){const t=Object.entries(e).map(([n,s])=>`${n}=${encodeURIComponent(s)}`).join("&");window.location.hash=i+(t?"?"+t:"")}window.adminNavigate=Bs;let De=0;function xe(){return De}let mt=!1;bn(ii,i=>{if(!i){Os(V);return}yt(i),mt||(window.addEventListener("hashchange",()=>yt(i)),mt=!0)});async function yt(i){De++;const e=De,{path:t,params:n}=$s();try{switch(t){case"/workshops":await Ls(V,i,e);break;case"/workshop-form":await Ms(V,i,n.id,e,n.fromRequest);break;case"/bookings":await Ds(V,i,n.workshopId,e);break;case"/host-requests":await Us(V,i,e);break;default:await Ns(V,i,e)}}catch(s){console.error("[admin render error]",s)}}function he(i,e,t){const n=((e==null?void 0:e.email)||"A").charAt(0).toUpperCase(),s=(e==null?void 0:e.email)||"";return`
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-logo">
          <div class="sidebar-logo-name">Heebee Coffee</div>
          <div class="sidebar-logo-sub">Admin Panel</div>
        </div>
        <nav class="sidebar-nav">
          <div class="sidebar-section">Navigation</div>
          ${[{path:"/",label:"Dashboard",icon:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'},{path:"/workshops",label:"Workshops",icon:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'},{path:"/bookings",label:"Bookings",icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'},{path:"/host-requests",label:"Host Requests",icon:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'}].map(o=>`
            <div class="sidebar-link ${i===o.path||o.path==="/workshops"&&i==="/workshop-form"?"active":""}"
              onclick="adminNavigate('${o.path}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${o.icon}</svg>
              ${o.label}
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
  `}window.adminSignOut=async()=>{await wn(ii),window.location.hash="/"};
