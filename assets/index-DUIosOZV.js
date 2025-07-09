(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function DS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var up={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function NS(){if(d_)return Nl;d_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Nl.Fragment=e,Nl.jsx=n,Nl.jsxs=n,Nl}var p_;function xS(){return p_||(p_=1,up.exports=NS()),up.exports}var Z=xS(),cp={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function MS(){if(m_)return Ae;m_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.iterator;function A(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,G={};function $(D,J,se){this.props=D,this.context=J,this.refs=G,this.updater=se||L}$.prototype.isReactComponent={},$.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},$.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function q(){}q.prototype=$.prototype;function ne(D,J,se){this.props=D,this.context=J,this.refs=G,this.updater=se||L}var te=ne.prototype=new q;te.constructor=ne,M(te,$.prototype),te.isPureReactComponent=!0;var ue=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},ce=Object.prototype.hasOwnProperty;function I(D,J,se,re,pe,be){return se=be.ref,{$$typeof:r,type:D,key:J,ref:se!==void 0?se:null,props:be}}function w(D,J){return I(D.type,J,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(se){return J[se]})}var k=/\/+/g;function V(D,J){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):J.toString(36)}function O(){}function wt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function et(D,J,se,re,pe){var be=typeof D;(be==="undefined"||be==="boolean")&&(D=null);var ge=!1;if(D===null)ge=!0;else switch(be){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(D.$$typeof){case r:case e:ge=!0;break;case T:return ge=D._init,et(ge(D._payload),J,se,re,pe)}}if(ge)return pe=pe(D),ge=re===""?"."+V(D,0):re,ue(pe)?(se="",ge!=null&&(se=ge.replace(k,"$&/")+"/"),et(pe,J,se,"",function(Nt){return Nt})):pe!=null&&(R(pe)&&(pe=w(pe,se+(pe.key==null||D&&D.key===pe.key?"":(""+pe.key).replace(k,"$&/")+"/")+ge)),J.push(pe)),1;ge=0;var st=re===""?".":re+":";if(ue(D))for(var Le=0;Le<D.length;Le++)re=D[Le],be=st+V(re,Le),ge+=et(re,J,se,be,pe);else if(Le=A(D),typeof Le=="function")for(D=Le.call(D),Le=0;!(re=D.next()).done;)re=re.value,be=st+V(re,Le++),ge+=et(re,J,se,be,pe);else if(be==="object"){if(typeof D.then=="function")return et(wt(D),J,se,re,pe);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ge}function K(D,J,se){if(D==null)return D;var re=[],pe=0;return et(D,re,"","",function(be){return J.call(se,be,pe++)}),re}function oe(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(se){(D._status===0||D._status===-1)&&(D._status=1,D._result=se)},function(se){(D._status===0||D._status===-1)&&(D._status=2,D._result=se)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Se(){}return Ae.Children={map:K,forEach:function(D,J,se){K(D,function(){J.apply(this,arguments)},se)},count:function(D){var J=0;return K(D,function(){J++}),J},toArray:function(D){return K(D,function(J){return J})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ae.Component=$,Ae.Fragment=n,Ae.Profiler=o,Ae.PureComponent=ne,Ae.StrictMode=s,Ae.Suspense=g,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(D){return le.H.useMemoCache(D)}},Ae.cache=function(D){return function(){return D.apply(null,arguments)}},Ae.cloneElement=function(D,J,se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var re=M({},D.props),pe=D.key,be=void 0;if(J!=null)for(ge in J.ref!==void 0&&(be=void 0),J.key!==void 0&&(pe=""+J.key),J)!ce.call(J,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&J.ref===void 0||(re[ge]=J[ge]);var ge=arguments.length-2;if(ge===1)re.children=se;else if(1<ge){for(var st=Array(ge),Le=0;Le<ge;Le++)st[Le]=arguments[Le+2];re.children=st}return I(D.type,pe,void 0,void 0,be,re)},Ae.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Ae.createElement=function(D,J,se){var re,pe={},be=null;if(J!=null)for(re in J.key!==void 0&&(be=""+J.key),J)ce.call(J,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(pe[re]=J[re]);var ge=arguments.length-2;if(ge===1)pe.children=se;else if(1<ge){for(var st=Array(ge),Le=0;Le<ge;Le++)st[Le]=arguments[Le+2];pe.children=st}if(D&&D.defaultProps)for(re in ge=D.defaultProps,ge)pe[re]===void 0&&(pe[re]=ge[re]);return I(D,be,void 0,void 0,null,pe)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(D){return{$$typeof:m,render:D}},Ae.isValidElement=R,Ae.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:oe}},Ae.memo=function(D,J){return{$$typeof:y,type:D,compare:J===void 0?null:J}},Ae.startTransition=function(D){var J=le.T,se={};le.T=se;try{var re=D(),pe=le.S;pe!==null&&pe(se,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(Se,de)}catch(be){de(be)}finally{le.T=J}},Ae.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ae.use=function(D){return le.H.use(D)},Ae.useActionState=function(D,J,se){return le.H.useActionState(D,J,se)},Ae.useCallback=function(D,J){return le.H.useCallback(D,J)},Ae.useContext=function(D){return le.H.useContext(D)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(D,J){return le.H.useDeferredValue(D,J)},Ae.useEffect=function(D,J,se){var re=le.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(D,J)},Ae.useId=function(){return le.H.useId()},Ae.useImperativeHandle=function(D,J,se){return le.H.useImperativeHandle(D,J,se)},Ae.useInsertionEffect=function(D,J){return le.H.useInsertionEffect(D,J)},Ae.useLayoutEffect=function(D,J){return le.H.useLayoutEffect(D,J)},Ae.useMemo=function(D,J){return le.H.useMemo(D,J)},Ae.useOptimistic=function(D,J){return le.H.useOptimistic(D,J)},Ae.useReducer=function(D,J,se){return le.H.useReducer(D,J,se)},Ae.useRef=function(D){return le.H.useRef(D)},Ae.useState=function(D){return le.H.useState(D)},Ae.useSyncExternalStore=function(D,J,se){return le.H.useSyncExternalStore(D,J,se)},Ae.useTransition=function(){return le.H.useTransition()},Ae.version="19.1.0",Ae}var g_;function um(){return g_||(g_=1,cp.exports=MS()),cp.exports}var Y=um();const Kl=DS(Y);var hp={exports:{}},xl={},fp={exports:{}},dp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function kS(){return y_||(y_=1,function(r){function e(K,oe){var de=K.length;K.push(oe);e:for(;0<de;){var Se=de-1>>>1,D=K[Se];if(0<o(D,oe))K[Se]=oe,K[de]=D,de=Se;else break e}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var oe=K[0],de=K.pop();if(de!==oe){K[0]=de;e:for(var Se=0,D=K.length,J=D>>>1;Se<J;){var se=2*(Se+1)-1,re=K[se],pe=se+1,be=K[pe];if(0>o(re,de))pe<D&&0>o(be,re)?(K[Se]=be,K[pe]=de,Se=pe):(K[Se]=re,K[se]=de,Se=se);else if(pe<D&&0>o(be,de))K[Se]=be,K[pe]=de,Se=pe;else break e}}return oe}function o(K,oe){var de=K.sortIndex-oe.sortIndex;return de!==0?de:K.id-oe.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],T=1,S=null,A=3,L=!1,M=!1,G=!1,$=!1,q=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ue(K){for(var oe=n(y);oe!==null;){if(oe.callback===null)s(y);else if(oe.startTime<=K)s(y),oe.sortIndex=oe.expirationTime,e(g,oe);else break;oe=n(y)}}function le(K){if(G=!1,ue(K),!M)if(n(g)!==null)M=!0,ce||(ce=!0,V());else{var oe=n(y);oe!==null&&et(le,oe.startTime-K)}}var ce=!1,I=-1,w=5,R=-1;function N(){return $?!0:!(r.unstable_now()-R<w)}function k(){if($=!1,ce){var K=r.unstable_now();R=K;var oe=!0;try{e:{M=!1,G&&(G=!1,ne(I),I=-1),L=!0;var de=A;try{t:{for(ue(K),S=n(g);S!==null&&!(S.expirationTime>K&&N());){var Se=S.callback;if(typeof Se=="function"){S.callback=null,A=S.priorityLevel;var D=Se(S.expirationTime<=K);if(K=r.unstable_now(),typeof D=="function"){S.callback=D,ue(K),oe=!0;break t}S===n(g)&&s(g),ue(K)}else s(g);S=n(g)}if(S!==null)oe=!0;else{var J=n(y);J!==null&&et(le,J.startTime-K),oe=!1}}break e}finally{S=null,A=de,L=!1}oe=void 0}}finally{oe?V():ce=!1}}}var V;if(typeof te=="function")V=function(){te(k)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,wt=O.port2;O.port1.onmessage=k,V=function(){wt.postMessage(null)}}else V=function(){q(k,0)};function et(K,oe){I=q(function(){K(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(K){switch(A){case 1:case 2:case 3:var oe=3;break;default:oe=A}var de=A;A=oe;try{return K()}finally{A=de}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(K,oe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var de=A;A=K;try{return oe()}finally{A=de}},r.unstable_scheduleCallback=function(K,oe,de){var Se=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Se+de:Se):de=Se,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,K={id:T++,callback:oe,priorityLevel:K,startTime:de,expirationTime:D,sortIndex:-1},de>Se?(K.sortIndex=de,e(y,K),n(g)===null&&K===n(y)&&(G?(ne(I),I=-1):G=!0,et(le,de-Se))):(K.sortIndex=D,e(g,K),M||L||(M=!0,ce||(ce=!0,V()))),K},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(K){var oe=A;return function(){var de=A;A=oe;try{return K.apply(this,arguments)}finally{A=de}}}}(dp)),dp}var v_;function PS(){return v_||(v_=1,fp.exports=kS()),fp.exports}var pp={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function VS(){if(__)return Wt;__=1;var r=um();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:g,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wt.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,T)},Wt.flushSync=function(g){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=T,s.d.f()}},Wt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Wt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Wt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,S=m(T,y.crossOrigin),A=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:L}):T==="script"&&s.d.X(g,{crossOrigin:S,integrity:A,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Wt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Wt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,S=m(T,y.crossOrigin);s.d.L(g,T,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Wt.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Wt.requestFormReset=function(g){s.d.r(g)},Wt.unstable_batchedUpdates=function(g,y){return g(y)},Wt.useFormState=function(g,y,T){return f.H.useFormState(g,y,T)},Wt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var E_;function US(){if(E_)return pp.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pp.exports=VS(),pp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function LS(){if(T_)return xl;T_=1;var r=PS(),e=um(),n=US();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,l=d;break}if(E===l){_=!0,l=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,l=h;break}if(E===l){_=!0,l=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var T=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var O=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===O?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case $:return"Profiler";case G:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case te:return(t.displayName||"Context")+".Provider";case ne:return(t._context.displayName||"Context")+".Consumer";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:wt(t.type)||"Memo";case w:i=t._payload,t=t._init;try{return wt(t(i))}catch{}}return null}var et=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Se=[],D=-1;function J(t){return{current:t}}function se(t){0>D||(t.current=Se[D],Se[D]=null,D--)}function re(t,i){D++,Se[D]=t.current,t.current=i}var pe=J(null),be=J(null),ge=J(null),st=J(null);function Le(t,i){switch(re(ge,i),re(be,t),re(pe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Bv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Bv(i),t=Hv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(pe),re(pe,t)}function Nt(){se(pe),se(be),se(ge)}function Rn(t){t.memoizedState!==null&&re(st,t);var i=pe.current,a=Hv(i,t.type);i!==a&&(re(be,t),re(pe,a))}function un(t){be.current===t&&(se(pe),se(be)),st.current===t&&(se(st),Rl._currentValue=de)}var Qt=Object.prototype.hasOwnProperty,es=r.unstable_scheduleCallback,ts=r.unstable_cancelCallback,So=r.unstable_shouldYield,bu=r.unstable_requestPaint,Cn=r.unstable_now,uf=r.unstable_getCurrentPriorityLevel,Ao=r.unstable_ImmediatePriority,ea=r.unstable_UserBlockingPriority,ns=r.unstable_NormalPriority,cf=r.unstable_LowPriority,ta=r.unstable_IdlePriority,wo=r.log,Su=r.unstable_setDisableYieldValue,lt=null,qe=null;function gn(t){if(typeof wo=="function"&&Su(t),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(lt,t)}catch{}}var Xt=Math.clz32?Math.clz32:is,Au=Math.log,hf=Math.LN2;function is(t){return t>>>=0,t===0?32:31-(Au(t)/hf|0)|0}var rs=256,ss=4194304;function Hn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function na(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Hn(l):(_&=E,_!==0?h=Hn(_):a||(a=E&~t,a!==0&&(h=Hn(a))))):(E=l&~d,E!==0?h=Hn(E):_!==0?h=Hn(_):a||(a=l&~t,a!==0&&(h=Hn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function as(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ro(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Co(){var t=rs;return rs<<=1,(rs&4194048)===0&&(rs=256),t}function Io(){var t=ss;return ss<<=1,(ss&62914560)===0&&(ss=4194304),t}function Ci(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Ii(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Oo(t,i,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,C=t.expirationTimes,z=t.hiddenUpdates;for(a=_&~a;0<a;){var Q=31-Xt(a),W=1<<Q;E[Q]=0,C[Q]=-1;var B=z[Q];if(B!==null)for(z[Q]=null,Q=0;Q<B.length;Q++){var H=B[Q];H!==null&&(H.lane&=-536870913)}a&=~W}l!==0&&ni(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~i))}function ni(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Xt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Do(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Xt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function cr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ia(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function hr(){var t=oe.p;return t!==0?t:(t=window.event,t===void 0?32:o_(t.type))}function wu(t,i){var a=oe.p;try{return oe.p=t,i()}finally{oe.p=a}}var tt=Math.random().toString(36).slice(2),Rt="__reactFiber$"+tt,yt="__reactProps$"+tt,In="__reactContainer$"+tt,No="__reactEvents$"+tt,ff="__reactListeners$"+tt,fr="__reactHandles$"+tt,Ru="__reactResources$"+tt,os="__reactMarker$"+tt;function dr(t){delete t[Rt],delete t[yt],delete t[No],delete t[ff],delete t[fr]}function Oi(t){var i=t[Rt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[In]||a[Rt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=$v(t);t!==null;){if(a=t[Rt])return a;t=$v(t)}return i}t=a,a=t.parentNode}return null}function ii(t){if(t=t[Rt]||t[In]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ri(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function sn(t){var i=t[Ru];return i||(i=t[Ru]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function dt(t){t[os]=!0}var xo=new Set,ra={};function qn(t,i){Di(t,i),Di(t+"Capture",i)}function Di(t,i){for(ra[t]=i,t=0;t<i.length;t++)xo.add(i[t])}var Cu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Iu={},ls={};function Ou(t){return Qt.call(ls,t)?!0:Qt.call(Iu,t)?!1:Cu.test(t)?ls[t]=!0:(Iu[t]=!0,!1)}function pr(t,i,a){if(Ou(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function si(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function zt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var us,Du;function Ni(t){if(us===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);us=i&&i[1]||"",Du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+us+t+Du}var sa=!1;function aa(t,i){if(!t||sa)return"";sa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var B=H}Reflect.construct(t,[],W)}else{try{W.call()}catch(H){B=H}t.call(W.prototype)}}else{try{throw Error()}catch(H){B=H}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var C=_.split(`
`),z=E.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===z.length)for(l=C.length-1,h=z.length-1;1<=l&&0<=h&&C[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==z[h]){var Q=`
`+C[l].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=l&&0<=h);break}}}finally{sa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ni(a):""}function Mo(t){switch(t.tag){case 26:case 27:case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return aa(t.type,!1);case 11:return aa(t.type.render,!1);case 1:return aa(t.type,!0);case 31:return Ni("Activity");default:return""}}function oa(t){try{var i="";do i+=Mo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function an(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ko(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function df(t){var i=ko(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function la(t){t._valueTracker||(t._valueTracker=df(t))}function Po(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ko(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function cs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pf=/[\n"\\]/g;function vt(t){return t.replace(pf,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function yn(t,i,a,l,h,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+an(i)):t.value!==""+an(i)&&(t.value=""+an(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?mr(t,_,an(i)):a!=null?mr(t,_,an(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+an(E):t.removeAttribute("name")}function hs(t,i,a,l,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+an(a):"",i=i!=null?""+an(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function mr(t,i,a){i==="number"&&cs(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xi(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+an(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function $e(t,i,a){if(i!=null&&(i=""+an(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+an(a):""}function fs(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(et(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=an(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function On(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ds=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||ds.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Vo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Nu(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Nu(t,d,i[d])}function Uo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ua(t){return gf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Mi=null;function Dn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ki=null,Pi=null;function Lo(t){var i=ii(t);if(i&&(t=i.stateNode)){var a=t[yt]||null;e:switch(t=i.stateNode,i.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[yt]||null;if(!h)throw Error(s(90));yn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Po(l)}break e;case"textarea":$e(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&xi(t,!!a.multiple,i,!1)}}}var ai=!1;function xu(t,i,a){if(ai)return t(i,a);ai=!0;try{var l=t(i);return l}finally{if(ai=!1,(ki!==null||Pi!==null)&&(wc(),ki&&(i=ki,t=Pi,Pi=ki=null,Lo(i),t)))for(i=0;i<t.length;i++)Lo(t[i])}}function ps(t,i){var a=t.stateNode;if(a===null)return null;var l=a[yt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nn=!1;if(Fn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Nn=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Nn=!1}var oi=null,gr=null,Vi=null;function jo(){if(Vi)return Vi;var t,i=gr,a=i.length,l,h="value"in oi?oi.value:oi.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return Vi=h.slice(t,1<l?1-l:void 0)}function li(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ui(){return!0}function zo(){return!1}function xt(t){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ui:zo,this.isPropagationStopped=zo,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),i}var Be={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=xt(Be),gs=T({},Be,{view:0,detail:0}),Mu=xt(gs),ha,fa,ci,ys=T({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?(ha=t.screenX-ci.screenX,fa=t.screenY-ci.screenY):fa=ha=0,ci=t),ha)},movementY:function(t){return"movementY"in t?t.movementY:fa}}),xn=xt(ys),ku=T({},ys,{dataTransfer:0}),yf=xt(ku),vs=T({},gs,{relatedTarget:0}),da=xt(vs),Bo=T({},Be,{animationName:0,elapsedTime:0,pseudoElement:0}),pa=xt(Bo),Pu=T({},Be,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ma=xt(Pu),vf=T({},Be,{data:0}),Ho=xt(vf),_s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Uu[t])?!!i[t]:!1}function Es(){return qo}var Lu=T({},gs,{key:function(t){if(t.key){var i=_s[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(t){return t.type==="keypress"?li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ga=xt(Lu),ju=T({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=xt(ju),Ui=T({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),zu=xt(Ui),Bu=T({},Be,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hu=xt(Bu),qu=T({},ys,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ya=xt(qu),on=T({},Be,{newState:0,oldState:0}),Fu=xt(on),Gu=[9,13,27,32],hi=Fn&&"CompositionEvent"in window,c=null;Fn&&"documentMode"in document&&(c=document.documentMode);var p=Fn&&"TextEvent"in window&&!c,v=Fn&&(!hi||c&&8<c&&11>=c),b=" ",U=!1;function F(t,i){switch(t){case"keyup":return Gu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Me=!1;function Ct(t,i){switch(t){case"compositionend":return ae(i);case"keypress":return i.which!==32?null:(U=!0,b);case"textInput":return t=i.data,t===b&&U?null:t;default:return null}}function ke(t,i){if(Me)return t==="compositionend"||!hi&&F(t,i)?(t=jo(),Vi=gr=oi=null,Me=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function It(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Mt[t.type]:i==="textarea"}function Li(t,i,a,l){ki?Pi?Pi.push(l):Pi=[l]:ki=l,i=Nc(i,"onChange"),0<i.length&&(a=new ca("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Bt=null,fi=null;function Go(t){Vv(t,0)}function $u(t){var i=ri(t);if(Po(i))return t}function ig(t,i){if(t==="change")return i}var rg=!1;if(Fn){var _f;if(Fn){var Ef="oninput"in document;if(!Ef){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Ef=typeof sg.oninput=="function"}_f=Ef}else _f=!1;rg=_f&&(!document.documentMode||9<document.documentMode)}function ag(){Bt&&(Bt.detachEvent("onpropertychange",og),fi=Bt=null)}function og(t){if(t.propertyName==="value"&&$u(fi)){var i=[];Li(i,fi,t,Dn(t)),xu(Go,i)}}function ab(t,i,a){t==="focusin"?(ag(),Bt=i,fi=a,Bt.attachEvent("onpropertychange",og)):t==="focusout"&&ag()}function ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(fi)}function lb(t,i){if(t==="click")return $u(i)}function ub(t,i){if(t==="input"||t==="change")return $u(i)}function cb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var vn=typeof Object.is=="function"?Object.is:cb;function $o(t,i){if(vn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Qt.call(i,h)||!vn(t[h],i[h]))return!1}return!0}function lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,i){var a=lg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lg(a)}}function cg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?cg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function hg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=cs(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=cs(t.document)}return i}function Tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var hb=Fn&&"documentMode"in document&&11>=document.documentMode,va=null,bf=null,Yo=null,Sf=!1;function fg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sf||va==null||va!==cs(l)||(l=va,"selectionStart"in l&&Tf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&$o(Yo,l)||(Yo=l,l=Nc(bf,"onSelect"),0<l.length&&(i=new ca("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=va)))}function Ts(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var _a={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Af={},dg={};Fn&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function bs(t){if(Af[t])return Af[t];if(!_a[t])return t;var i=_a[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in dg)return Af[t]=i[a];return t}var pg=bs("animationend"),mg=bs("animationiteration"),gg=bs("animationstart"),fb=bs("transitionrun"),db=bs("transitionstart"),pb=bs("transitioncancel"),yg=bs("transitionend"),vg=new Map,wf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wf.push("scrollEnd");function Gn(t,i){vg.set(t,i),qn(i,[t])}var _g=new WeakMap;function Mn(t,i){if(typeof t=="object"&&t!==null){var a=_g.get(t);return a!==void 0?a:(i={value:t,source:i,stack:oa(i)},_g.set(t,i),i)}return{value:t,source:i,stack:oa(i)}}var kn=[],Ea=0,Rf=0;function Yu(){for(var t=Ea,i=Rf=Ea=0;i<t;){var a=kn[i];kn[i++]=null;var l=kn[i];kn[i++]=null;var h=kn[i];kn[i++]=null;var d=kn[i];if(kn[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&Eg(a,h,d)}}function Ku(t,i,a,l){kn[Ea++]=t,kn[Ea++]=i,kn[Ea++]=a,kn[Ea++]=l,Rf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cf(t,i,a,l){return Ku(t,i,a,l),Qu(t)}function Ta(t,i){return Ku(t,null,null,i),Qu(t)}function Eg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Xt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Qu(t){if(50<vl)throw vl=0,Md=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ba={};function mb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,i,a,l){return new mb(t,i,a,l)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,i){var a=t.alternate;return a===null?(a=_n(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Xu(t,i,a,l,h,d){var _=0;if(l=t,typeof t=="function")If(t)&&(_=1);else if(typeof t=="string")_=yS(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=_n(31,a,i,h),t.elementType=R,t.lanes=d,t;case M:return Ss(a.children,h,d,i);case G:_=8,h|=24;break;case $:return t=_n(12,a,i,h|2),t.elementType=$,t.lanes=d,t;case le:return t=_n(13,a,i,h),t.elementType=le,t.lanes=d,t;case ce:return t=_n(19,a,i,h),t.elementType=ce,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:case te:_=10;break e;case ne:_=9;break e;case ue:_=11;break e;case I:_=14;break e;case w:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=_n(_,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ss(t,i,a,l){return t=_n(7,t,l,i),t.lanes=a,t}function Of(t,i,a){return t=_n(6,t,null,i),t.lanes=a,t}function Df(t,i,a){return i=_n(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Sa=[],Aa=0,Zu=null,Wu=0,Pn=[],Vn=0,As=null,zi=1,Bi="";function ws(t,i){Sa[Aa++]=Wu,Sa[Aa++]=Zu,Zu=t,Wu=i}function bg(t,i,a){Pn[Vn++]=zi,Pn[Vn++]=Bi,Pn[Vn++]=As,As=t;var l=zi;t=Bi;var h=32-Xt(l)-1;l&=~(1<<h),a+=1;var d=32-Xt(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,zi=1<<32-Xt(i)+h|a<<h|l,Bi=d+t}else zi=1<<d|a<<h|l,Bi=t}function Nf(t){t.return!==null&&(ws(t,1),bg(t,1,0))}function xf(t){for(;t===Zu;)Zu=Sa[--Aa],Sa[Aa]=null,Wu=Sa[--Aa],Sa[Aa]=null;for(;t===As;)As=Pn[--Vn],Pn[Vn]=null,Bi=Pn[--Vn],Pn[Vn]=null,zi=Pn[--Vn],Pn[Vn]=null}var ln=null,ut=null,ze=!1,Rs=null,di=!1,Mf=Error(s(519));function Cs(t){var i=Error(s(418,""));throw Xo(Mn(i,t)),Mf}function Sg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Rt]=t,i[yt]=l,a){case"dialog":Ne("cancel",i),Ne("close",i);break;case"iframe":case"object":case"embed":Ne("load",i);break;case"video":case"audio":for(a=0;a<El.length;a++)Ne(El[a],i);break;case"source":Ne("error",i);break;case"img":case"image":case"link":Ne("error",i),Ne("load",i);break;case"details":Ne("toggle",i);break;case"input":Ne("invalid",i),hs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),la(i);break;case"select":Ne("invalid",i);break;case"textarea":Ne("invalid",i),fs(i,l.value,l.defaultValue,l.children),la(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||zv(i.textContent,a)?(l.popover!=null&&(Ne("beforetoggle",i),Ne("toggle",i)),l.onScroll!=null&&Ne("scroll",i),l.onScrollEnd!=null&&Ne("scrollend",i),l.onClick!=null&&(i.onclick=xc),i=!0):i=!1,i||Cs(t)}function Ag(t){for(ln=t.return;ln;)switch(ln.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:ln=ln.return}}function Ko(t){if(t!==ln)return!1;if(!ze)return Ag(t),ze=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qd(t.type,t.memoizedProps)),a=!a),a&&ut&&Cs(t),Ag(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ut=Yn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ut=null}}else i===27?(i=ut,xr(t.type)?(t=Jd,Jd=null,ut=t):ut=i):ut=ln?Yn(t.stateNode.nextSibling):null;return!0}function Qo(){ut=ln=null,ze=!1}function wg(){var t=Rs;return t!==null&&(fn===null?fn=t:fn.push.apply(fn,t),Rs=null),t}function Xo(t){Rs===null?Rs=[t]:Rs.push(t)}var kf=J(null),Is=null,Hi=null;function yr(t,i,a){re(kf,i._currentValue),i._currentValue=a}function qi(t){t._currentValue=kf.current,se(kf)}function Pf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Vf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var C=0;C<i.length;C++)if(E.context===i[C]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Pf(d.return,a,t),l||(_=null);break e}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Pf(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Zo(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;vn(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===st.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Rl):t=[Rl])}h=h.return}t!==null&&Vf(i,t,a,l),i.flags|=262144}function Ju(t){for(t=t.firstContext;t!==null;){if(!vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Is=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zt(t){return Rg(Is,t)}function ec(t,i){return Is===null&&Os(t),Rg(t,i)}function Rg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(s(308));Hi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Hi=Hi.next=i;return a}var gb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},yb=r.unstable_scheduleCallback,vb=r.unstable_NormalPriority,Ot={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new gb,data:new Map,refCount:0}}function Wo(t){t.refCount--,t.refCount===0&&yb(vb,function(){t.controller.abort()})}var Jo=null,Lf=0,wa=0,Ra=null;function _b(t,i){if(Jo===null){var a=Jo=[];Lf=0,wa=zd(),Ra={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lf++,i.then(Cg,Cg),i}function Cg(){if(--Lf===0&&Jo!==null){Ra!==null&&(Ra.status="fulfilled");var t=Jo;Jo=null,wa=0,Ra=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Eb(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Ig=K.S;K.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&_b(t,i),Ig!==null&&Ig(t,i)};var Ds=J(null);function jf(){var t=Ds.current;return t!==null?t:Ze.pooledCache}function tc(t,i){i===null?re(Ds,Ds.current):re(Ds,i.pool)}function Og(){var t=jf();return t===null?null:{parent:Ot._currentValue,pool:t}}var el=Error(s(460)),Dg=Error(s(474)),nc=Error(s(542)),zf={then:function(){}};function Ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ic(){}function xg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(ic,ic),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,kg(t),t;default:if(typeof i.status=="string")i.then(ic,ic);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,kg(t),t}throw tl=i,el}}var tl=null;function Mg(){if(tl===null)throw Error(s(459));var t=tl;return tl=null,t}function kg(t){if(t===el||t===nc)throw Error(s(483))}var vr=!1;function Bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _r(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Er(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Qu(t),Eg(t,null,a),i}return Ku(t,l,i,a),Qu(t)}function nl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Do(t,a)}}function qf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Ff=!1;function il(){if(Ff){var t=Ra;if(t!==null)throw t}}function rl(t,i,a,l){Ff=!1;var h=t.updateQueue;vr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var C=E,z=C.next;C.next=null,_===null?d=z:_.next=z,_=C;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==_&&(E===null?Q.firstBaseUpdate=z:E.next=z,Q.lastBaseUpdate=C))}if(d!==null){var W=h.baseState;_=0,Q=z=C=null,E=d;do{var B=E.lane&-536870913,H=B!==E.lane;if(H?(Pe&B)===B:(l&B)===B){B!==0&&B===wa&&(Ff=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Te=t,ve=E;B=i;var Qe=a;switch(ve.tag){case 1:if(Te=ve.payload,typeof Te=="function"){W=Te.call(Qe,W,B);break e}W=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=ve.payload,B=typeof Te=="function"?Te.call(Qe,W,B):Te,B==null)break e;W=T({},W,B);break e;case 2:vr=!0}}B=E.callback,B!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[B]:H.push(B))}else H={lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(z=Q=H,C=W):Q=Q.next=H,_|=B;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);Q===null&&(C=W),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=Q,d===null&&(h.shared.lanes=0),Ir|=_,t.lanes=_,t.memoizedState=W}}function Pg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Vg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pg(a[t],i)}var Ca=J(null),rc=J(0);function Ug(t,i){t=Xi,re(rc,t),re(Ca,i),Xi=t|i.baseLanes}function Gf(){re(rc,Xi),re(Ca,Ca.current)}function $f(){Xi=rc.current,se(Ca),se(rc)}var Tr=0,Ce=null,Ye=null,_t=null,sc=!1,Ia=!1,Ns=!1,ac=0,sl=0,Oa=null,Tb=0;function pt(){throw Error(s(321))}function Yf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!vn(t[a],i[a]))return!1;return!0}function Kf(t,i,a,l,h,d){return Tr=d,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=t===null||t.memoizedState===null?Ey:Ty,Ns=!1,d=a(l,h),Ns=!1,Ia&&(d=jg(i,a,l,h)),Lg(t),d}function Lg(t){K.H=fc;var i=Ye!==null&&Ye.next!==null;if(Tr=0,_t=Ye=Ce=null,sc=!1,sl=0,Oa=null,i)throw Error(s(300));t===null||kt||(t=t.dependencies,t!==null&&Ju(t)&&(kt=!0))}function jg(t,i,a,l){Ce=t;var h=0;do{if(Ia&&(Oa=null),sl=0,Ia=!1,25<=h)throw Error(s(301));if(h+=1,_t=Ye=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=Ib,d=i(a,l)}while(Ia);return d}function bb(){var t=K.H,i=t.useState()[0];return i=typeof i.then=="function"?al(i):i,t=t.useState()[0],(Ye!==null?Ye.memoizedState:null)!==t&&(Ce.flags|=1024),i}function Qf(){var t=ac!==0;return ac=0,t}function Xf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Zf(t){if(sc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}sc=!1}Tr=0,_t=Ye=Ce=null,Ia=!1,sl=ac=0,Oa=null}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ce.memoizedState=_t=t:_t=_t.next=t,_t}function Et(){if(Ye===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var i=_t===null?Ce.memoizedState:_t.next;if(i!==null)_t=i,Ye=t;else{if(t===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},_t===null?Ce.memoizedState=_t=t:_t=_t.next=t}return _t}function Wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(t){var i=sl;return sl+=1,Oa===null&&(Oa=[]),t=xg(Oa,t,i),i=Ce,(_t===null?i.memoizedState:_t.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?Ey:Ty),t}function oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return al(t);if(t.$$typeof===te)return Zt(t)}throw Error(s(438,String(t)))}function Jf(t){var i=null,a=Ce.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Wf(),Ce.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=N;return i.index++,a}function Fi(t,i){return typeof i=="function"?i(t):i}function lc(t){var i=Et();return ed(i,Ye,t)}function ed(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var E=_=null,C=null,z=i,Q=!1;do{var W=z.lane&-536870913;if(W!==z.lane?(Pe&W)===W:(Tr&W)===W){var B=z.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),W===wa&&(Q=!0);else if((Tr&B)===B){z=z.next,B===wa&&(Q=!0);continue}else W={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(E=C=W,_=d):C=C.next=W,Ce.lanes|=B,Ir|=B;W=z.action,Ns&&a(d,W),d=z.hasEagerState?z.eagerState:a(d,W)}else B={lane:W,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(E=C=B,_=d):C=C.next=B,Ce.lanes|=W,Ir|=W;z=z.next}while(z!==null&&z!==i);if(C===null?_=d:C.next=E,!vn(d,t.memoizedState)&&(kt=!0,Q&&(a=Ra,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function td(t){var i=Et(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);vn(d,i.memoizedState)||(kt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function zg(t,i,a){var l=Ce,h=Et(),d=ze;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!vn((Ye||h).memoizedState,a);_&&(h.memoizedState=a,kt=!0),h=h.queue;var E=qg.bind(null,l,h,t);if(ol(2048,8,E,[t]),h.getSnapshot!==i||_||_t!==null&&_t.memoizedState.tag&1){if(l.flags|=2048,Da(9,uc(),Hg.bind(null,l,h,a,i),null),Ze===null)throw Error(s(349));d||(Tr&124)!==0||Bg(l,i,a)}return a}function Bg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ce.updateQueue,i===null?(i=Wf(),Ce.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Hg(t,i,a,l){i.value=a,i.getSnapshot=l,Fg(i)&&Gg(t)}function qg(t,i,a){return a(function(){Fg(i)&&Gg(t)})}function Fg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!vn(t,a)}catch{return!0}}function Gg(t){var i=Ta(t,2);i!==null&&An(i,t,2)}function nd(t){var i=cn();if(typeof t=="function"){var a=t;if(t=a(),Ns){gn(!0);try{a()}finally{gn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},i}function $g(t,i,a,l){return t.baseState=a,ed(t,Ye,typeof l=="function"?l:Fi)}function Sb(t,i,a,l,h){if(hc(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Yg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Yg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=K.T,_={};K.T=_;try{var E=a(h,l),C=K.S;C!==null&&C(_,E),Kg(t,i,E)}catch(z){id(t,i,z)}finally{K.T=d}}else try{d=a(h,l),Kg(t,i,d)}catch(z){id(t,i,z)}}function Kg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Qg(t,i,l)},function(l){return id(t,i,l)}):Qg(t,i,a)}function Qg(t,i,a){i.status="fulfilled",i.value=a,Xg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Yg(t,a)))}function id(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Xg(i),i=i.next;while(i!==l)}t.action=null}function Xg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Zg(t,i){return i}function Wg(t,i){if(ze){var a=Ze.formState;if(a!==null){e:{var l=Ce;if(ze){if(ut){t:{for(var h=ut,d=di;h.nodeType!==8;){if(!d){h=null;break t}if(h=Yn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ut=Yn(h.nextSibling),l=h.data==="F!";break e}}Cs(l)}l=!1}l&&(i=a[0])}}return a=cn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zg,lastRenderedState:i},a.queue=l,a=yy.bind(null,Ce,l),l.dispatch=a,l=nd(!1),d=ld.bind(null,Ce,!1,l.queue),l=cn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=Sb.bind(null,Ce,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Jg(t){var i=Et();return ey(i,Ye,t)}function ey(t,i,a){if(i=ed(t,i,Zg)[0],t=lc(Fi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=al(i)}catch(_){throw _===el?nc:_}else l=i;i=Et();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ce.flags|=2048,Da(9,uc(),Ab.bind(null,h,a),null)),[l,d,t]}function Ab(t,i){t.action=i}function ty(t){var i=Et(),a=Ye;if(a!==null)return ey(i,a,t);Et(),i=i.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Da(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Ce.updateQueue,i===null&&(i=Wf(),Ce.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function uc(){return{destroy:void 0,resource:void 0}}function ny(){return Et().memoizedState}function cc(t,i,a,l){var h=cn();l=l===void 0?null:l,Ce.flags|=t,h.memoizedState=Da(1|i,uc(),a,l)}function ol(t,i,a,l){var h=Et();l=l===void 0?null:l;var d=h.memoizedState.inst;Ye!==null&&l!==null&&Yf(l,Ye.memoizedState.deps)?h.memoizedState=Da(i,d,a,l):(Ce.flags|=t,h.memoizedState=Da(1|i,d,a,l))}function iy(t,i){cc(8390656,8,t,i)}function ry(t,i){ol(2048,8,t,i)}function sy(t,i){return ol(4,2,t,i)}function ay(t,i){return ol(4,4,t,i)}function oy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ly(t,i,a){a=a!=null?a.concat([t]):null,ol(4,4,oy.bind(null,i,t),a)}function rd(){}function uy(t,i){var a=Et();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Yf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function cy(t,i){var a=Et();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Yf(i,l[1]))return l[0];if(l=t(),Ns){gn(!0);try{t()}finally{gn(!1)}}return a.memoizedState=[l,i],l}function sd(t,i,a){return a===void 0||(Tr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=dv(),Ce.lanes|=t,Ir|=t,a)}function hy(t,i,a,l){return vn(a,i)?a:Ca.current!==null?(t=sd(t,a,l),vn(t,i)||(kt=!0),t):(Tr&42)===0?(kt=!0,t.memoizedState=a):(t=dv(),Ce.lanes|=t,Ir|=t,i)}function fy(t,i,a,l,h){var d=oe.p;oe.p=d!==0&&8>d?d:8;var _=K.T,E={};K.T=E,ld(t,!1,i,a);try{var C=h(),z=K.S;if(z!==null&&z(E,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=Eb(C,l);ll(t,i,Q,Sn(t))}else ll(t,i,l,Sn(t))}catch(W){ll(t,i,{then:function(){},status:"rejected",reason:W},Sn())}finally{oe.p=d,K.T=_}}function wb(){}function ad(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=dy(t).queue;fy(t,h,i,de,a===null?wb:function(){return py(t),a(l)})}function dy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:de},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function py(t){var i=dy(t).next.queue;ll(t,i,{},Sn())}function od(){return Zt(Rl)}function my(){return Et().memoizedState}function gy(){return Et().memoizedState}function Rb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();t=_r(a);var l=Er(i,t,a);l!==null&&(An(l,i,a),nl(l,i,a)),i={cache:Uf()},t.payload=i;return}i=i.return}}function Cb(t,i,a){var l=Sn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hc(t)?vy(i,a):(a=Cf(t,i,a,l),a!==null&&(An(a,t,l),_y(a,i,l)))}function yy(t,i,a){var l=Sn();ll(t,i,a,l)}function ll(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hc(t))vy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,vn(E,_))return Ku(t,i,h,0),Ze===null&&Yu(),!1}catch{}finally{}if(a=Cf(t,i,h,l),a!==null)return An(a,t,l),_y(a,i,l),!0}return!1}function ld(t,i,a,l){if(l={lane:2,revertLane:zd(),action:l,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(i)throw Error(s(479))}else i=Cf(t,a,l,2),i!==null&&An(i,t,2)}function hc(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function vy(t,i){Ia=sc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function _y(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Do(t,a)}}var fc={readContext:Zt,use:oc,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},Ey={readContext:Zt,use:oc,useCallback:function(t,i){return cn().memoizedState=[t,i===void 0?null:i],t},useContext:Zt,useEffect:iy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,cc(4194308,4,oy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return cc(4194308,4,t,i)},useInsertionEffect:function(t,i){cc(4,2,t,i)},useMemo:function(t,i){var a=cn();i=i===void 0?null:i;var l=t();if(Ns){gn(!0);try{t()}finally{gn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=cn();if(a!==void 0){var h=a(i);if(Ns){gn(!0);try{a(i)}finally{gn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Cb.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var i=cn();return t={current:t},i.memoizedState=t},useState:function(t){t=nd(t);var i=t.queue,a=yy.bind(null,Ce,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:rd,useDeferredValue:function(t,i){var a=cn();return sd(a,t,i)},useTransition:function(){var t=nd(!1);return t=fy.bind(null,Ce,t.queue,!0,!1),cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ce,h=cn();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ze===null)throw Error(s(349));(Pe&124)!==0||Bg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,iy(qg.bind(null,l,d,t),[t]),l.flags|=2048,Da(9,uc(),Hg.bind(null,l,d,a,i),null),a},useId:function(){var t=cn(),i=Ze.identifierPrefix;if(ze){var a=Bi,l=zi;a=(l&~(1<<32-Xt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=ac++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Tb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:od,useFormState:Wg,useActionState:Wg,useOptimistic:function(t){var i=cn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=ld.bind(null,Ce,!0,a),a.dispatch=i,[t,i]},useMemoCache:Jf,useCacheRefresh:function(){return cn().memoizedState=Rb.bind(null,Ce)}},Ty={readContext:Zt,use:oc,useCallback:uy,useContext:Zt,useEffect:ry,useImperativeHandle:ly,useInsertionEffect:sy,useLayoutEffect:ay,useMemo:cy,useReducer:lc,useRef:ny,useState:function(){return lc(Fi)},useDebugValue:rd,useDeferredValue:function(t,i){var a=Et();return hy(a,Ye.memoizedState,t,i)},useTransition:function(){var t=lc(Fi)[0],i=Et().memoizedState;return[typeof t=="boolean"?t:al(t),i]},useSyncExternalStore:zg,useId:my,useHostTransitionStatus:od,useFormState:Jg,useActionState:Jg,useOptimistic:function(t,i){var a=Et();return $g(a,Ye,t,i)},useMemoCache:Jf,useCacheRefresh:gy},Ib={readContext:Zt,use:oc,useCallback:uy,useContext:Zt,useEffect:ry,useImperativeHandle:ly,useInsertionEffect:sy,useLayoutEffect:ay,useMemo:cy,useReducer:td,useRef:ny,useState:function(){return td(Fi)},useDebugValue:rd,useDeferredValue:function(t,i){var a=Et();return Ye===null?sd(a,t,i):hy(a,Ye.memoizedState,t,i)},useTransition:function(){var t=td(Fi)[0],i=Et().memoizedState;return[typeof t=="boolean"?t:al(t),i]},useSyncExternalStore:zg,useId:my,useHostTransitionStatus:od,useFormState:ty,useActionState:ty,useOptimistic:function(t,i){var a=Et();return Ye!==null?$g(a,Ye,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Jf,useCacheRefresh:gy},Na=null,ul=0;function dc(t){var i=ul;return ul+=1,Na===null&&(Na=[]),xg(Na,t,i)}function cl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function pc(t,i){throw i.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function by(t){var i=t._init;return i(t._payload)}function Sy(t){function i(P,x){if(t){var j=P.deletions;j===null?(P.deletions=[x],P.flags|=16):j.push(x)}}function a(P,x){if(!t)return null;for(;x!==null;)i(P,x),x=x.sibling;return null}function l(P){for(var x=new Map;P!==null;)P.key!==null?x.set(P.key,P):x.set(P.index,P),P=P.sibling;return x}function h(P,x){return P=ji(P,x),P.index=0,P.sibling=null,P}function d(P,x,j){return P.index=j,t?(j=P.alternate,j!==null?(j=j.index,j<x?(P.flags|=67108866,x):j):(P.flags|=67108866,x)):(P.flags|=1048576,x)}function _(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function E(P,x,j,X){return x===null||x.tag!==6?(x=Of(j,P.mode,X),x.return=P,x):(x=h(x,j),x.return=P,x)}function C(P,x,j,X){var he=j.type;return he===M?Q(P,x,j.props.children,X,j.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&by(he)===x.type)?(x=h(x,j.props),cl(x,j),x.return=P,x):(x=Xu(j.type,j.key,j.props,null,P.mode,X),cl(x,j),x.return=P,x)}function z(P,x,j,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Df(j,P.mode,X),x.return=P,x):(x=h(x,j.children||[]),x.return=P,x)}function Q(P,x,j,X,he){return x===null||x.tag!==7?(x=Ss(j,P.mode,X,he),x.return=P,x):(x=h(x,j),x.return=P,x)}function W(P,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Of(""+x,P.mode,j),x.return=P,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case A:return j=Xu(x.type,x.key,x.props,null,P.mode,j),cl(j,x),j.return=P,j;case L:return x=Df(x,P.mode,j),x.return=P,x;case w:var X=x._init;return x=X(x._payload),W(P,x,j)}if(et(x)||V(x))return x=Ss(x,P.mode,j,null),x.return=P,x;if(typeof x.then=="function")return W(P,dc(x),j);if(x.$$typeof===te)return W(P,ec(P,x),j);pc(P,x)}return null}function B(P,x,j,X){var he=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return he!==null?null:E(P,x,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case A:return j.key===he?C(P,x,j,X):null;case L:return j.key===he?z(P,x,j,X):null;case w:return he=j._init,j=he(j._payload),B(P,x,j,X)}if(et(j)||V(j))return he!==null?null:Q(P,x,j,X,null);if(typeof j.then=="function")return B(P,x,dc(j),X);if(j.$$typeof===te)return B(P,x,ec(P,j),X);pc(P,j)}return null}function H(P,x,j,X,he){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return P=P.get(j)||null,E(x,P,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case A:return P=P.get(X.key===null?j:X.key)||null,C(x,P,X,he);case L:return P=P.get(X.key===null?j:X.key)||null,z(x,P,X,he);case w:var Oe=X._init;return X=Oe(X._payload),H(P,x,j,X,he)}if(et(X)||V(X))return P=P.get(j)||null,Q(x,P,X,he,null);if(typeof X.then=="function")return H(P,x,j,dc(X),he);if(X.$$typeof===te)return H(P,x,j,ec(x,X),he);pc(x,X)}return null}function Te(P,x,j,X){for(var he=null,Oe=null,me=x,_e=x=0,Vt=null;me!==null&&_e<j.length;_e++){me.index>_e?(Vt=me,me=null):Vt=me.sibling;var je=B(P,me,j[_e],X);if(je===null){me===null&&(me=Vt);break}t&&me&&je.alternate===null&&i(P,me),x=d(je,x,_e),Oe===null?he=je:Oe.sibling=je,Oe=je,me=Vt}if(_e===j.length)return a(P,me),ze&&ws(P,_e),he;if(me===null){for(;_e<j.length;_e++)me=W(P,j[_e],X),me!==null&&(x=d(me,x,_e),Oe===null?he=me:Oe.sibling=me,Oe=me);return ze&&ws(P,_e),he}for(me=l(me);_e<j.length;_e++)Vt=H(me,P,_e,j[_e],X),Vt!==null&&(t&&Vt.alternate!==null&&me.delete(Vt.key===null?_e:Vt.key),x=d(Vt,x,_e),Oe===null?he=Vt:Oe.sibling=Vt,Oe=Vt);return t&&me.forEach(function(Ur){return i(P,Ur)}),ze&&ws(P,_e),he}function ve(P,x,j,X){if(j==null)throw Error(s(151));for(var he=null,Oe=null,me=x,_e=x=0,Vt=null,je=j.next();me!==null&&!je.done;_e++,je=j.next()){me.index>_e?(Vt=me,me=null):Vt=me.sibling;var Ur=B(P,me,je.value,X);if(Ur===null){me===null&&(me=Vt);break}t&&me&&Ur.alternate===null&&i(P,me),x=d(Ur,x,_e),Oe===null?he=Ur:Oe.sibling=Ur,Oe=Ur,me=Vt}if(je.done)return a(P,me),ze&&ws(P,_e),he;if(me===null){for(;!je.done;_e++,je=j.next())je=W(P,je.value,X),je!==null&&(x=d(je,x,_e),Oe===null?he=je:Oe.sibling=je,Oe=je);return ze&&ws(P,_e),he}for(me=l(me);!je.done;_e++,je=j.next())je=H(me,P,_e,je.value,X),je!==null&&(t&&je.alternate!==null&&me.delete(je.key===null?_e:je.key),x=d(je,x,_e),Oe===null?he=je:Oe.sibling=je,Oe=je);return t&&me.forEach(function(OS){return i(P,OS)}),ze&&ws(P,_e),he}function Qe(P,x,j,X){if(typeof j=="object"&&j!==null&&j.type===M&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case A:e:{for(var he=j.key;x!==null;){if(x.key===he){if(he=j.type,he===M){if(x.tag===7){a(P,x.sibling),X=h(x,j.props.children),X.return=P,P=X;break e}}else if(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&by(he)===x.type){a(P,x.sibling),X=h(x,j.props),cl(X,j),X.return=P,P=X;break e}a(P,x);break}else i(P,x);x=x.sibling}j.type===M?(X=Ss(j.props.children,P.mode,X,j.key),X.return=P,P=X):(X=Xu(j.type,j.key,j.props,null,P.mode,X),cl(X,j),X.return=P,P=X)}return _(P);case L:e:{for(he=j.key;x!==null;){if(x.key===he)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(P,x.sibling),X=h(x,j.children||[]),X.return=P,P=X;break e}else{a(P,x);break}else i(P,x);x=x.sibling}X=Df(j,P.mode,X),X.return=P,P=X}return _(P);case w:return he=j._init,j=he(j._payload),Qe(P,x,j,X)}if(et(j))return Te(P,x,j,X);if(V(j)){if(he=V(j),typeof he!="function")throw Error(s(150));return j=he.call(j),ve(P,x,j,X)}if(typeof j.then=="function")return Qe(P,x,dc(j),X);if(j.$$typeof===te)return Qe(P,x,ec(P,j),X);pc(P,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(a(P,x.sibling),X=h(x,j),X.return=P,P=X):(a(P,x),X=Of(j,P.mode,X),X.return=P,P=X),_(P)):a(P,x)}return function(P,x,j,X){try{ul=0;var he=Qe(P,x,j,X);return Na=null,he}catch(me){if(me===el||me===nc)throw me;var Oe=_n(29,me,null,P.mode);return Oe.lanes=X,Oe.return=P,Oe}finally{}}}var xa=Sy(!0),Ay=Sy(!1),Un=J(null),pi=null;function br(t){var i=t.alternate;re(Dt,Dt.current&1),re(Un,t),pi===null&&(i===null||Ca.current!==null||i.memoizedState!==null)&&(pi=t)}function wy(t){if(t.tag===22){if(re(Dt,Dt.current),re(Un,t),pi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(pi=t)}}else Sr()}function Sr(){re(Dt,Dt.current),re(Un,Un.current)}function Gi(t){se(Un),pi===t&&(pi=null),se(Dt)}var Dt=J(0);function mc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ud(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cd={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=_r(l);h.payload=i,a!=null&&(h.callback=a),i=Er(t,h,l),i!==null&&(An(i,t,l),nl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Sn(),h=_r(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Er(t,h,l),i!==null&&(An(i,t,l),nl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Sn(),l=_r(a);l.tag=2,i!=null&&(l.callback=i),i=Er(t,l,a),i!==null&&(An(i,t,a),nl(i,t,a))}};function Ry(t,i,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!$o(a,l)||!$o(h,d):!0}function Cy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&cd.enqueueReplaceState(i,i.state,null)}function xs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var gc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Iy(t){gc(t)}function Oy(t){console.error(t)}function Dy(t){gc(t)}function yc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ny(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function hd(t,i,a){return a=_r(a),a.tag=3,a.payload={element:null},a.callback=function(){yc(t,i)},a}function xy(t){return t=_r(t),t.tag=3,t}function My(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Ny(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ny(i,a,l),typeof h!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function Ob(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Zo(i,a,h,!0),a=Un.current,a!==null){switch(a.tag){case 13:return pi===null?Pd():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===zf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Ud(t,l,h)),!1;case 22:return a.flags|=65536,l===zf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Ud(t,l,h)),!1}throw Error(s(435,a.tag))}return Ud(t,l,h),Pd(),!1}if(ze)return i=Un.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Mf&&(t=Error(s(422),{cause:l}),Xo(Mn(t,a)))):(l!==Mf&&(i=Error(s(423),{cause:l}),Xo(Mn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Mn(l,a),h=hd(t.stateNode,l,h),qf(t,h),ct!==4&&(ct=2)),!1;var d=Error(s(520),{cause:l});if(d=Mn(d,a),yl===null?yl=[d]:yl.push(d),ct!==4&&(ct=2),i===null)return!0;l=Mn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=hd(a.stateNode,l,t),qf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Or===null||!Or.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=xy(h),My(h,t,a,l),qf(a,h),!1}a=a.return}while(a!==null);return!1}var ky=Error(s(461)),kt=!1;function Ht(t,i,a,l){i.child=t===null?Ay(i,null,a,l):xa(i,t.child,a,l)}function Py(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Os(i),l=Kf(t,i,a,_,d,h),E=Qf(),t!==null&&!kt?(Xf(t,i,h),$i(t,i,h)):(ze&&E&&Nf(i),i.flags|=1,Ht(t,i,l,h),i.child)}function Vy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!If(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Uy(t,i,d,l,h)):(t=Xu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!_d(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(_,l)&&t.ref===i.ref)return $i(t,i,h)}return i.flags|=1,t=ji(d,l),t.ref=i.ref,t.return=i,i.child=t}function Uy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if($o(d,l)&&t.ref===i.ref)if(kt=!1,i.pendingProps=l=d,_d(t,h))(t.flags&131072)!==0&&(kt=!0);else return i.lanes=t.lanes,$i(t,i,h)}return fd(t,i,a,l,h)}function Ly(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return jy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&tc(i,d!==null?d.cachePool:null),d!==null?Ug(i,d):Gf(),wy(i);else return i.lanes=i.childLanes=536870912,jy(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(tc(i,d.cachePool),Ug(i,d),Sr(),i.memoizedState=null):(t!==null&&tc(i,null),Gf(),Sr());return Ht(t,i,h,a),i.child}function jy(t,i,a,l){var h=jf();return h=h===null?null:{parent:Ot._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&tc(i,null),Gf(),wy(i),t!==null&&Zo(t,i,l,!0),null}function vc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function fd(t,i,a,l,h){return Os(i),a=Kf(t,i,a,l,void 0,h),l=Qf(),t!==null&&!kt?(Xf(t,i,h),$i(t,i,h)):(ze&&l&&Nf(i),i.flags|=1,Ht(t,i,a,h),i.child)}function zy(t,i,a,l,h,d){return Os(i),i.updateQueue=null,a=jg(i,l,a,h),Lg(t),l=Qf(),t!==null&&!kt?(Xf(t,i,d),$i(t,i,d)):(ze&&l&&Nf(i),i.flags|=1,Ht(t,i,a,d),i.child)}function By(t,i,a,l,h){if(Os(i),i.stateNode===null){var d=ba,_=a.contextType;typeof _=="object"&&_!==null&&(d=Zt(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Bf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?Zt(_):ba,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ud(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&cd.enqueueReplaceState(d,d.state,null),rl(i,l,d,h),il(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var E=i.memoizedProps,C=xs(a,E);d.props=C;var z=d.context,Q=a.contextType;_=ba,typeof Q=="object"&&Q!==null&&(_=Zt(Q));var W=a.getDerivedStateFromProps;Q=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||z!==_)&&Cy(i,d,l,_),vr=!1;var B=i.memoizedState;d.state=B,rl(i,l,d,h),il(),z=i.memoizedState,E||B!==z||vr?(typeof W=="function"&&(ud(i,a,W,l),z=i.memoizedState),(C=vr||Ry(i,a,C,l,B,z,_))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=_,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Hf(t,i),_=i.memoizedProps,Q=xs(a,_),d.props=Q,W=i.pendingProps,B=d.context,z=a.contextType,C=ba,typeof z=="object"&&z!==null&&(C=Zt(z)),E=a.getDerivedStateFromProps,(z=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==W||B!==C)&&Cy(i,d,l,C),vr=!1,B=i.memoizedState,d.state=B,rl(i,l,d,h),il();var H=i.memoizedState;_!==W||B!==H||vr||t!==null&&t.dependencies!==null&&Ju(t.dependencies)?(typeof E=="function"&&(ud(i,a,E,l),H=i.memoizedState),(Q=vr||Ry(i,a,Q,l,B,H,C)||t!==null&&t.dependencies!==null&&Ju(t.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=C,l=Q):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,vc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=xa(i,t.child,null,h),i.child=xa(i,null,a,h)):Ht(t,i,a,h),i.memoizedState=d.state,t=i.child):t=$i(t,i,h),t}function Hy(t,i,a,l){return Qo(),i.flags|=256,Ht(t,i,a,l),i.child}var dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(t){return{baseLanes:t,cachePool:Og()}}function md(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Ln),t}function qy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Dt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(ze){if(h?br(i):Sr(),ze){var E=ut,C;if(C=E){e:{for(C=E,E=di;C.nodeType!==8;){if(!E){E=null;break e}if(C=Yn(C.nextSibling),C===null){E=null;break e}}E=C}E!==null?(i.memoizedState={dehydrated:E,treeContext:As!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},C=_n(18,null,null,0),C.stateNode=E,C.return=i,i.child=C,ln=i,ut=null,C=!0):C=!1}C||Cs(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Wd(E)?i.lanes=32:i.lanes=536870912,null;Gi(i)}return E=l.children,l=l.fallback,h?(Sr(),h=i.mode,E=_c({mode:"hidden",children:E},h),l=Ss(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=pd(a),h.childLanes=md(t,_,a),i.memoizedState=dd,l):(br(i),gd(i,E))}if(C=t.memoizedState,C!==null&&(E=C.dehydrated,E!==null)){if(d)i.flags&256?(br(i),i.flags&=-257,i=yd(t,i,a)):i.memoizedState!==null?(Sr(),i.child=t.child,i.flags|=128,i=null):(Sr(),h=l.fallback,E=i.mode,l=_c({mode:"visible",children:l.children},E),h=Ss(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,xa(i,t.child,null,a),l=i.child,l.memoizedState=pd(a),l.childLanes=md(t,_,a),i.memoizedState=dd,i=h);else if(br(i),Wd(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var z=_.dgst;_=z,l=Error(s(419)),l.stack="",l.digest=_,Xo({value:l,source:null,stack:null}),i=yd(t,i,a)}else if(kt||Zo(t,i,a,!1),_=(a&t.childLanes)!==0,kt||_){if(_=Ze,_!==null&&(l=a&-a,l=(l&42)!==0?1:cr(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ta(t,l),An(_,t,l),ky;E.data==="$?"||Pd(),i=yd(t,i,a)}else E.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,ut=Yn(E.nextSibling),ln=i,ze=!0,Rs=null,di=!1,t!==null&&(Pn[Vn++]=zi,Pn[Vn++]=Bi,Pn[Vn++]=As,zi=t.id,Bi=t.overflow,As=i),i=gd(i,l.children),i.flags|=4096);return i}return h?(Sr(),h=l.fallback,E=i.mode,C=t.child,z=C.sibling,l=ji(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,z!==null?h=ji(z,h):(h=Ss(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E===null?E=pd(a):(C=E.cachePool,C!==null?(z=Ot._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=Og(),E={baseLanes:E.baseLanes|a,cachePool:C}),h.memoizedState=E,h.childLanes=md(t,_,a),i.memoizedState=dd,l):(br(i),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function gd(t,i){return i=_c({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function _c(t,i){return t=_n(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function yd(t,i,a){return xa(i,t.child,null,a),t=gd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Fy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Pf(t.return,i,a)}function vd(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Gy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ht(t,i,l.children,a),l=Dt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,a,i);else if(t.tag===19)Fy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(re(Dt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&mc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),vd(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&mc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}vd(i,!0,a,null,d);break;case"together":vd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Zo(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=ji(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function _d(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ju(t)))}function Db(t,i,a){switch(i.tag){case 3:Le(i,i.stateNode.containerInfo),yr(i,Ot,t.memoizedState.cache),Qo();break;case 27:case 5:Rn(i);break;case 4:Le(i,i.stateNode.containerInfo);break;case 10:yr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(br(i),i.flags|=128,null):(a&i.child.childLanes)!==0?qy(t,i,a):(br(i),t=$i(t,i,a),t!==null?t.sibling:null);br(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Zo(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Gy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(Dt,Dt.current),l)break;return null;case 22:case 23:return i.lanes=0,Ly(t,i,a);case 24:yr(i,Ot,t.memoizedState.cache)}return $i(t,i,a)}function $y(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)kt=!0;else{if(!_d(t,a)&&(i.flags&128)===0)return kt=!1,Db(t,i,a);kt=(t.flags&131072)!==0}else kt=!1,ze&&(i.flags&1048576)!==0&&bg(i,Wu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")If(l)?(t=xs(l,t),i.tag=1,i=By(null,i,l,t,a)):(i.tag=0,i=fd(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===ue){i.tag=11,i=Py(null,i,l,t,a);break e}else if(h===I){i.tag=14,i=Vy(null,i,l,t,a);break e}}throw i=wt(l)||l,Error(s(306,i,""))}}return i;case 0:return fd(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=xs(l,i.pendingProps),By(t,i,l,h,a);case 3:e:{if(Le(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Hf(t,i),rl(i,l,null,a);var _=i.memoizedState;if(l=_.cache,yr(i,Ot,l),l!==d.cache&&Vf(i,[Ot],a,!0),il(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Hy(t,i,l,a);break e}else if(l!==h){h=Mn(Error(s(424)),i),Xo(h),i=Hy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ut=Yn(t.firstChild),ln=i,ze=!0,Rs=null,di=!0,a=Ay(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qo(),l===h){i=$i(t,i,a);break e}Ht(t,i,l,a)}i=i.child}return i;case 26:return vc(t,i),t===null?(a=Xv(i.type,null,i.pendingProps,null))?i.memoizedState=a:ze||(a=i.type,t=i.pendingProps,l=Mc(ge.current).createElement(a),l[Rt]=i,l[yt]=t,Ft(l,a,t),dt(l),i.stateNode=l):i.memoizedState=Xv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Rn(i),t===null&&ze&&(l=i.stateNode=Yv(i.type,i.pendingProps,ge.current),ln=i,di=!0,h=ut,xr(i.type)?(Jd=h,ut=Yn(l.firstChild)):ut=h),Ht(t,i,i.pendingProps.children,a),vc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&ze&&((h=l=ut)&&(l=rS(l,i.type,i.pendingProps,di),l!==null?(i.stateNode=l,ln=i,ut=Yn(l.firstChild),di=!1,h=!0):h=!1),h||Cs(i)),Rn(i),h=i.type,d=i.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,Qd(h,d)?l=null:_!==null&&Qd(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Kf(t,i,bb,null,null,a),Rl._currentValue=h),vc(t,i),Ht(t,i,l,a),i.child;case 6:return t===null&&ze&&((t=a=ut)&&(a=sS(a,i.pendingProps,di),a!==null?(i.stateNode=a,ln=i,ut=null,t=!0):t=!1),t||Cs(i)),null;case 13:return qy(t,i,a);case 4:return Le(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=xa(i,null,l,a):Ht(t,i,l,a),i.child;case 11:return Py(t,i,i.type,i.pendingProps,a);case 7:return Ht(t,i,i.pendingProps,a),i.child;case 8:return Ht(t,i,i.pendingProps.children,a),i.child;case 12:return Ht(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,yr(i,i.type,l.value),Ht(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Os(i),h=Zt(h),l=l(h),i.flags|=1,Ht(t,i,l,a),i.child;case 14:return Vy(t,i,i.type,i.pendingProps,a);case 15:return Uy(t,i,i.type,i.pendingProps,a);case 19:return Gy(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=_c(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ji(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Ly(t,i,a);case 24:return Os(i),l=Zt(Ot),t===null?(h=jf(),h===null&&(h=Ze,d=Uf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Bf(i),yr(i,Ot,h)):((t.lanes&a)!==0&&(Hf(t,i),rl(i,null,null,a),il()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),yr(i,Ot,l)):(l=d.cache,yr(i,Ot,l),l!==h.cache&&Vf(i,[Ot],a,!0))),Ht(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Yi(t){t.flags|=4}function Yy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!t_(i)){if(i=Un.current,i!==null&&((Pe&4194048)===Pe?pi!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||i!==pi))throw tl=zf,Dg;t.flags|=8192}}function Ec(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Io():536870912,t.lanes|=i,Va|=i)}function hl(t,i){if(!ze)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function at(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Nb(t,i,a){var l=i.pendingProps;switch(xf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(i),null;case 1:return at(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qi(Ot),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ko(i)?Yi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,wg())),at(i),null;case 26:return a=i.memoizedState,t===null?(Yi(i),a!==null?(at(i),Yy(i,a)):(at(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Yi(i),at(i),Yy(i,a)):(at(i),i.flags&=-16777217):(t.memoizedProps!==l&&Yi(i),at(i),i.flags&=-16777217),null;case 27:un(i),a=ge.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return at(i),null}t=pe.current,Ko(i)?Sg(i):(t=Yv(h,l,a),i.stateNode=t,Yi(i))}return at(i),null;case 5:if(un(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return at(i),null}if(t=pe.current,Ko(i))Sg(i);else{switch(h=Mc(ge.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Rt]=i,t[yt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Ft(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Yi(i)}}return at(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=ge.current,Ko(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Rt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||zv(t.nodeValue,a)),t||Cs(i)}else t=Mc(t).createTextNode(l),t[Rt]=i,i.stateNode=t}return at(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ko(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Rt]=i}else Qo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;at(i),h=!1}else h=wg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Gi(i),i):(Gi(i),null)}if(Gi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Ec(i,i.updateQueue),at(i),null;case 4:return Nt(),t===null&&Fd(i.stateNode.containerInfo),at(i),null;case 10:return qi(i.type),at(i),null;case 19:if(se(Dt),h=i.memoizedState,h===null)return at(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)hl(h,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=mc(t),d!==null){for(i.flags|=128,hl(h,!1),t=d.updateQueue,i.updateQueue=t,Ec(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Tg(a,t),a=a.sibling;return re(Dt,Dt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Cn()>Sc&&(i.flags|=128,l=!0,hl(h,!1),i.lanes=4194304)}else{if(!l)if(t=mc(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Ec(i,t),hl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!ze)return at(i),null}else 2*Cn()-h.renderingStartTime>Sc&&a!==536870912&&(i.flags|=128,l=!0,hl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Cn(),i.sibling=null,t=Dt.current,re(Dt,l?t&1|2:t&1),i):(at(i),null);case 22:case 23:return Gi(i),$f(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(at(i),i.subtreeFlags&6&&(i.flags|=8192)):at(i),a=i.updateQueue,a!==null&&Ec(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&se(Ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),qi(Ot),at(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function xb(t,i){switch(xf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return qi(Ot),Nt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return un(i),null;case 13:if(Gi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Qo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(Dt),null;case 4:return Nt(),null;case 10:return qi(i.type),null;case 22:case 23:return Gi(i),$f(),t!==null&&se(Ds),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return qi(Ot),null;case 25:return null;default:return null}}function Ky(t,i){switch(xf(i),i.tag){case 3:qi(Ot),Nt();break;case 26:case 27:case 5:un(i);break;case 4:Nt();break;case 13:Gi(i);break;case 19:se(Dt);break;case 10:qi(i.type);break;case 22:case 23:Gi(i),$f(),t!==null&&se(Ds);break;case 24:qi(Ot)}}function fl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(E){Xe(i,i.return,E)}}function Ar(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=i;var C=a,z=E;try{z()}catch(Q){Xe(h,C,Q)}}}l=l.next}while(l!==d)}}catch(Q){Xe(i,i.return,Q)}}function Qy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Vg(i,a)}catch(l){Xe(t,t.return,l)}}}function Xy(t,i,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Xe(t,i,l)}}function dl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Xe(t,i,h)}}function mi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xe(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xe(t,i,h)}else a.current=null}function Zy(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xe(t,t.return,h)}}function Ed(t,i,a){try{var l=t.stateNode;Jb(l,t.type,a,i),l[yt]=i}catch(h){Xe(t,t.return,h)}}function Wy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xr(t.type)||t.tag===4}function Td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=xc));else if(l!==4&&(l===27&&xr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(bd(t,i,a),t=t.sibling;t!==null;)bd(t,i,a),t=t.sibling}function Tc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&xr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tc(t,i,a),t=t.sibling;t!==null;)Tc(t,i,a),t=t.sibling}function Jy(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,l,a),i[Rt]=t,i[yt]=a}catch(d){Xe(t,t.return,d)}}var Ki=!1,mt=!1,Sd=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function Mb(t,i){if(t=t.containerInfo,Yd=jc,t=hg(t),Tf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,E=-1,C=-1,z=0,Q=0,W=t,B=null;t:for(;;){for(var H;W!==a||h!==0&&W.nodeType!==3||(E=_+h),W!==d||l!==0&&W.nodeType!==3||(C=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(H=W.firstChild)!==null;)B=W,W=H;for(;;){if(W===t)break t;if(B===a&&++z===h&&(E=_),B===d&&++Q===l&&(C=_),(H=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=H}a=E===-1||C===-1?null:{start:E,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kd={focusedElem:t,selectionRange:a},jc=!1,Pt=i;Pt!==null;)if(i=Pt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Pt=t;else for(;Pt!==null;){switch(i=Pt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Te=xs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Te,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ve){Xe(a,a.return,ve)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Zd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Pt=t;break}Pt=i.return}}function tv(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:wr(t,a),l&4&&fl(5,a);break;case 1:if(wr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){Xe(a,a.return,_)}else{var h=xs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Xe(a,a.return,_)}}l&64&&Qy(a),l&512&&dl(a,a.return);break;case 3:if(wr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Vg(t,i)}catch(_){Xe(a,a.return,_)}}break;case 27:i===null&&l&4&&Jy(a);case 26:case 5:wr(t,a),i===null&&l&4&&Zy(a),l&512&&dl(a,a.return);break;case 12:wr(t,a);break;case 13:wr(t,a),l&4&&rv(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hb.bind(null,a),aS(t,a))));break;case 22:if(l=a.memoizedState!==null||Ki,!l){i=i!==null&&i.memoizedState!==null||mt,h=Ki;var d=mt;Ki=l,(mt=i)&&!d?Rr(t,a,(a.subtreeFlags&8772)!==0):wr(t,a),Ki=h,mt=d}break;case 30:break;default:wr(t,a)}}function nv(t){var i=t.alternate;i!==null&&(t.alternate=null,nv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&dr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nt=null,hn=!1;function Qi(t,i,a){for(a=a.child;a!==null;)iv(t,i,a),a=a.sibling}function iv(t,i,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:mt||mi(a,i),Qi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mt||mi(a,i);var l=nt,h=hn;xr(a.type)&&(nt=a.stateNode,hn=!1),Qi(t,i,a),bl(a.stateNode),nt=l,hn=h;break;case 5:mt||mi(a,i);case 6:if(l=nt,h=hn,nt=null,Qi(t,i,a),nt=l,hn=h,nt!==null)if(hn)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(a.stateNode)}catch(d){Xe(a,i,d)}else try{nt.removeChild(a.stateNode)}catch(d){Xe(a,i,d)}break;case 18:nt!==null&&(hn?(t=nt,Gv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Dl(t)):Gv(nt,a.stateNode));break;case 4:l=nt,h=hn,nt=a.stateNode.containerInfo,hn=!0,Qi(t,i,a),nt=l,hn=h;break;case 0:case 11:case 14:case 15:mt||Ar(2,a,i),mt||Ar(4,a,i),Qi(t,i,a);break;case 1:mt||(mi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Xy(a,i,l)),Qi(t,i,a);break;case 21:Qi(t,i,a);break;case 22:mt=(l=mt)||a.memoizedState!==null,Qi(t,i,a),mt=l;break;default:Qi(t,i,a)}}function rv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Dl(t)}catch(a){Xe(i,i.return,a)}}function kb(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ev),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ev),i;default:throw Error(s(435,t.tag))}}function Ad(t,i){var a=kb(t);i.forEach(function(l){var h=qb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function En(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=i,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(xr(E.type)){nt=E.stateNode,hn=!1;break e}break;case 5:nt=E.stateNode,hn=!1;break e;case 3:case 4:nt=E.stateNode.containerInfo,hn=!0;break e}E=E.return}if(nt===null)throw Error(s(160));iv(d,_,h),nt=null,hn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)sv(i,t),i=i.sibling}var $n=null;function sv(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:En(i,t),Tn(t),l&4&&(Ar(3,t,t.return),fl(3,t),Ar(5,t,t.return));break;case 1:En(i,t),Tn(t),l&512&&(mt||a===null||mi(a,a.return)),l&64&&Ki&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=$n;if(En(i,t),Tn(t),l&512&&(mt||a===null||mi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[os]||d[Rt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ft(d,l,a),d[Rt]=t,dt(d),l=d;break e;case"link":var _=Jv("link","href",h).get(l+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;case"meta":if(_=Jv("meta","content",h).get(l+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Rt]=t,dt(d),l=d}t.stateNode=l}else e_(h,t.type,t.stateNode);else t.stateNode=Wv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?e_(h,t.type,t.stateNode):Wv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,a.memoizedProps)}break;case 27:En(i,t),Tn(t),l&512&&(mt||a===null||mi(a,a.return)),a!==null&&l&4&&Ed(t,t.memoizedProps,a.memoizedProps);break;case 5:if(En(i,t),Tn(t),l&512&&(mt||a===null||mi(a,a.return)),t.flags&32){h=t.stateNode;try{On(h,"")}catch(H){Xe(t,t.return,H)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Ed(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Sd=!0);break;case 6:if(En(i,t),Tn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(H){Xe(t,t.return,H)}}break;case 3:if(Vc=null,h=$n,$n=kc(i.containerInfo),En(i,t),$n=h,Tn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Dl(i.containerInfo)}catch(H){Xe(t,t.return,H)}Sd&&(Sd=!1,av(t));break;case 4:l=$n,$n=kc(t.stateNode.containerInfo),En(i,t),Tn(t),$n=l;break;case 12:En(i,t),Tn(t);break;case 13:En(i,t),Tn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dd=Cn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ad(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,z=Ki,Q=mt;if(Ki=z||h,mt=Q||C,En(i,t),mt=Q,Ki=z,Tn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||C||Ki||mt||Ms(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=C.stateNode;var W=C.memoizedProps.style,B=W!=null&&W.hasOwnProperty("display")?W.display:null;E.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){Xe(C,C.return,H)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(H){Xe(C,C.return,H)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ad(t,a))));break;case 19:En(i,t),Tn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ad(t,l)));break;case 30:break;case 21:break;default:En(i,t),Tn(t)}}function Tn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(Wy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Td(t);Tc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(On(_,""),a.flags&=-33);var E=Td(t);Tc(t,E,_);break;case 3:case 4:var C=a.stateNode.containerInfo,z=Td(t);bd(t,z,C);break;default:throw Error(s(161))}}catch(Q){Xe(t,t.return,Q)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function av(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;av(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function wr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)tv(t,i.alternate,i),i=i.sibling}function Ms(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ar(4,i,i.return),Ms(i);break;case 1:mi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Xy(i,i.return,a),Ms(i);break;case 27:bl(i.stateNode);case 26:case 5:mi(i,i.return),Ms(i);break;case 22:i.memoizedState===null&&Ms(i);break;case 30:Ms(i);break;default:Ms(i)}t=t.sibling}}function Rr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Rr(h,d,a),fl(4,d);break;case 1:if(Rr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Xe(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Pg(C[h],E)}catch(z){Xe(l,l.return,z)}}a&&_&64&&Qy(d),dl(d,d.return);break;case 27:Jy(d);case 26:case 5:Rr(h,d,a),a&&l===null&&_&4&&Zy(d),dl(d,d.return);break;case 12:Rr(h,d,a);break;case 13:Rr(h,d,a),a&&_&4&&rv(h,d);break;case 22:d.memoizedState===null&&Rr(h,d,a),dl(d,d.return);break;case 30:break;default:Rr(h,d,a)}i=i.sibling}}function wd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wo(a))}function Rd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t))}function gi(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ov(t,i,a,l),i=i.sibling}function ov(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:gi(t,i,a,l),h&2048&&fl(9,i);break;case 1:gi(t,i,a,l);break;case 3:gi(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t)));break;case 12:if(h&2048){gi(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Xe(i,i.return,C)}}else gi(t,i,a,l);break;case 13:gi(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?gi(t,i,a,l):pl(t,i):d._visibility&2?gi(t,i,a,l):(d._visibility|=2,Ma(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&wd(_,i);break;case 24:gi(t,i,a,l),h&2048&&Rd(i.alternate,i);break;default:gi(t,i,a,l)}}function Ma(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,_=i,E=a,C=l,z=_.flags;switch(_.tag){case 0:case 11:case 15:Ma(d,_,E,C,h),fl(8,_);break;case 23:break;case 22:var Q=_.stateNode;_.memoizedState!==null?Q._visibility&2?Ma(d,_,E,C,h):pl(d,_):(Q._visibility|=2,Ma(d,_,E,C,h)),h&&z&2048&&wd(_.alternate,_);break;case 24:Ma(d,_,E,C,h),h&&z&2048&&Rd(_.alternate,_);break;default:Ma(d,_,E,C,h)}i=i.sibling}}function pl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:pl(a,l),h&2048&&wd(l.alternate,l);break;case 24:pl(a,l),h&2048&&Rd(l.alternate,l);break;default:pl(a,l)}i=i.sibling}}var ml=8192;function ka(t){if(t.subtreeFlags&ml)for(t=t.child;t!==null;)lv(t),t=t.sibling}function lv(t){switch(t.tag){case 26:ka(t),t.flags&ml&&t.memoizedState!==null&&_S($n,t.memoizedState,t.memoizedProps);break;case 5:ka(t);break;case 3:case 4:var i=$n;$n=kc(t.stateNode.containerInfo),ka(t),$n=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ml,ml=16777216,ka(t),ml=i):ka(t));break;default:ka(t)}}function uv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function gl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pt=l,hv(l,t)}uv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cv(t),t=t.sibling}function cv(t){switch(t.tag){case 0:case 11:case 15:gl(t),t.flags&2048&&Ar(9,t,t.return);break;case 3:gl(t);break;case 12:gl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,bc(t)):gl(t);break;default:gl(t)}}function bc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pt=l,hv(l,t)}uv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ar(8,i,i.return),bc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,bc(i));break;default:bc(i)}t=t.sibling}}function hv(t,i){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:Ar(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else e:for(a=t;Pt!==null;){l=Pt;var h=l.sibling,d=l.return;if(nv(l),l===a){Pt=null;break e}if(h!==null){h.return=d,Pt=h;break e}Pt=d}}}var Pb={getCacheForType:function(t){var i=Zt(Ot),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},Vb=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,De=null,Pe=0,Ge=0,bn=null,Cr=!1,Pa=!1,Cd=!1,Xi=0,ct=0,Ir=0,ks=0,Id=0,Ln=0,Va=0,yl=null,fn=null,Od=!1,Dd=0,Sc=1/0,Ac=null,Or=null,qt=0,Dr=null,Ua=null,La=0,Nd=0,xd=null,fv=null,vl=0,Md=null;function Sn(){if((Fe&2)!==0&&Pe!==0)return Pe&-Pe;if(K.T!==null){var t=wa;return t!==0?t:zd()}return hr()}function dv(){Ln===0&&(Ln=(Pe&536870912)===0||ze?Co():536870912);var t=Un.current;return t!==null&&(t.flags|=32),Ln}function An(t,i,a){(t===Ze&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(ja(t,0),Nr(t,Pe,Ln,!1)),Ii(t,a),((Fe&2)===0||t!==Ze)&&(t===Ze&&((Fe&2)===0&&(ks|=a),ct===4&&Nr(t,Pe,Ln,!1)),yi(t))}function pv(t,i,a){if((Fe&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||as(t,i),h=l?jb(t,i):Vd(t,i,!0),d=l;do{if(h===0){Pa&&!l&&Nr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!Ub(a)){h=Vd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var E=t;h=yl;var C=E.current.memoizedState.isDehydrated;if(C&&(ja(E,_).flags|=256),_=Vd(E,_,!1),_!==2){if(Cd&&!C){E.errorRecoveryDisabledLanes|=d,ks|=d,h=4;break e}d=fn,fn=h,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){ja(t,0),Nr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Nr(l,i,Ln,!Cr);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Dd+300-Cn(),10<h)){if(Nr(l,i,Ln,!Cr),na(l,0,!0)!==0)break e;l.timeoutHandle=qv(mv.bind(null,l,a,fn,Ac,Od,i,Ln,ks,Va,Cr,d,2,-0,0),h);break e}mv(l,a,fn,Ac,Od,i,Ln,ks,Va,Cr,d,0,-0,0)}}break}while(!0);yi(t)}function mv(t,i,a,l,h,d,_,E,C,z,Q,W,B,H){if(t.timeoutHandle=-1,W=i.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(wl={stylesheets:null,count:0,unsuspend:vS},lv(i),W=ES(),W!==null)){t.cancelPendingCommit=W(bv.bind(null,t,i,d,a,l,h,_,E,C,Q,1,B,H)),Nr(t,d,_,!z);return}bv(t,i,d,a,l,h,_,E,C)}function Ub(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!vn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(t,i,a,l){i&=~Id,i&=~ks,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Xt(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&ni(t,a,i)}function wc(){return(Fe&6)===0?(_l(0),!1):!0}function kd(){if(De!==null){if(Ge===0)var t=De.return;else t=De,Hi=Is=null,Zf(t),Na=null,ul=0,t=De;for(;t!==null;)Ky(t.alternate,t),t=t.return;De=null}}function ja(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),kd(),Ze=t,De=a=ji(t.current,null),Pe=i,Ge=0,bn=null,Cr=!1,Pa=as(t,i),Cd=!1,Va=Ln=Id=ks=Ir=ct=0,fn=yl=null,Od=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Xt(l),d=1<<h;i|=t[h],l&=~d}return Xi=i,Yu(),a}function gv(t,i){Ce=null,K.H=fc,i===el||i===nc?(i=Mg(),Ge=3):i===Dg?(i=Mg(),Ge=4):Ge=i===ky?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bn=i,De===null&&(ct=1,yc(t,Mn(i,t.current)))}function yv(){var t=K.H;return K.H=fc,t===null?fc:t}function vv(){var t=K.A;return K.A=Pb,t}function Pd(){ct=4,Cr||(Pe&4194048)!==Pe&&Un.current!==null||(Pa=!0),(Ir&134217727)===0&&(ks&134217727)===0||Ze===null||Nr(Ze,Pe,Ln,!1)}function Vd(t,i,a){var l=Fe;Fe|=2;var h=yv(),d=vv();(Ze!==t||Pe!==i)&&(Ac=null,ja(t,i)),i=!1;var _=ct;e:do try{if(Ge!==0&&De!==null){var E=De,C=bn;switch(Ge){case 8:kd(),_=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(i=!0);var z=Ge;if(Ge=0,bn=null,za(t,E,C,z),a&&Pa){_=0;break e}break;default:z=Ge,Ge=0,bn=null,za(t,E,C,z)}}Lb(),_=ct;break}catch(Q){gv(t,Q)}while(!0);return i&&t.shellSuspendCounter++,Hi=Is=null,Fe=l,K.H=h,K.A=d,De===null&&(Ze=null,Pe=0,Yu()),_}function Lb(){for(;De!==null;)_v(De)}function jb(t,i){var a=Fe;Fe|=2;var l=yv(),h=vv();Ze!==t||Pe!==i?(Ac=null,Sc=Cn()+500,ja(t,i)):Pa=as(t,i);e:do try{if(Ge!==0&&De!==null){i=De;var d=bn;t:switch(Ge){case 1:Ge=0,bn=null,za(t,i,d,1);break;case 2:case 9:if(Ng(d)){Ge=0,bn=null,Ev(i);break}i=function(){Ge!==2&&Ge!==9||Ze!==t||(Ge=7),yi(t)},d.then(i,i);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Ng(d)?(Ge=0,bn=null,Ev(i)):(Ge=0,bn=null,za(t,i,d,7));break;case 5:var _=null;switch(De.tag){case 26:_=De.memoizedState;case 5:case 27:var E=De;if(!_||t_(_)){Ge=0,bn=null;var C=E.sibling;if(C!==null)De=C;else{var z=E.return;z!==null?(De=z,Rc(z)):De=null}break t}}Ge=0,bn=null,za(t,i,d,5);break;case 6:Ge=0,bn=null,za(t,i,d,6);break;case 8:kd(),ct=6;break e;default:throw Error(s(462))}}zb();break}catch(Q){gv(t,Q)}while(!0);return Hi=Is=null,K.H=l,K.A=h,Fe=a,De!==null?0:(Ze=null,Pe=0,Yu(),ct)}function zb(){for(;De!==null&&!So();)_v(De)}function _v(t){var i=$y(t.alternate,t,Xi);t.memoizedProps=t.pendingProps,i===null?Rc(t):De=i}function Ev(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=zy(a,i,i.pendingProps,i.type,void 0,Pe);break;case 11:i=zy(a,i,i.pendingProps,i.type.render,i.ref,Pe);break;case 5:Zf(i);default:Ky(a,i),i=De=Tg(i,Xi),i=$y(a,i,Xi)}t.memoizedProps=t.pendingProps,i===null?Rc(t):De=i}function za(t,i,a,l){Hi=Is=null,Zf(i),Na=null,ul=0;var h=i.return;try{if(Ob(t,h,i,a,Pe)){ct=1,yc(t,Mn(a,t.current)),De=null;return}}catch(d){if(h!==null)throw De=h,d;ct=1,yc(t,Mn(a,t.current)),De=null;return}i.flags&32768?(ze||l===1?t=!0:Pa||(Pe&536870912)!==0?t=!1:(Cr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Un.current,l!==null&&l.tag===13&&(l.flags|=16384))),Tv(i,t)):Rc(i)}function Rc(t){var i=t;do{if((i.flags&32768)!==0){Tv(i,Cr);return}t=i.return;var a=Nb(i.alternate,i,Xi);if(a!==null){De=a;return}if(i=i.sibling,i!==null){De=i;return}De=i=t}while(i!==null);ct===0&&(ct=5)}function Tv(t,i){do{var a=xb(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);ct=6,De=null}function bv(t,i,a,l,h,d,_,E,C){t.cancelPendingCommit=null;do Cc();while(qt!==0);if((Fe&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Rf,Oo(t,a,d,_,E,C),t===Ze&&(De=Ze=null,Pe=0),Ua=i,Dr=t,La=a,Nd=d,xd=h,fv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fb(ns,function(){return Cv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,h=oe.p,oe.p=2,_=Fe,Fe|=4;try{Mb(t,i,a)}finally{Fe=_,oe.p=h,K.T=l}}qt=1,Sv(),Av(),wv()}}function Sv(){if(qt===1){qt=0;var t=Dr,i=Ua,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=oe.p;oe.p=2;var h=Fe;Fe|=4;try{sv(i,t);var d=Kd,_=hg(t.containerInfo),E=d.focusedElem,C=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&cg(E.ownerDocument.documentElement,E)){if(C!==null&&Tf(E)){var z=C.start,Q=C.end;if(Q===void 0&&(Q=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(Q,E.value.length);else{var W=E.ownerDocument||document,B=W&&W.defaultView||window;if(B.getSelection){var H=B.getSelection(),Te=E.textContent.length,ve=Math.min(C.start,Te),Qe=C.end===void 0?ve:Math.min(C.end,Te);!H.extend&&ve>Qe&&(_=Qe,Qe=ve,ve=_);var P=ug(E,ve),x=ug(E,Qe);if(P&&x&&(H.rangeCount!==1||H.anchorNode!==P.node||H.anchorOffset!==P.offset||H.focusNode!==x.node||H.focusOffset!==x.offset)){var j=W.createRange();j.setStart(P.node,P.offset),H.removeAllRanges(),ve>Qe?(H.addRange(j),H.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),H.addRange(j))}}}}for(W=[],H=E;H=H.parentNode;)H.nodeType===1&&W.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<W.length;E++){var X=W[E];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}jc=!!Yd,Kd=Yd=null}finally{Fe=h,oe.p=l,K.T=a}}t.current=i,qt=2}}function Av(){if(qt===2){qt=0;var t=Dr,i=Ua,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=oe.p;oe.p=2;var h=Fe;Fe|=4;try{tv(t,i.alternate,i)}finally{Fe=h,oe.p=l,K.T=a}}qt=3}}function wv(){if(qt===4||qt===3){qt=0,bu();var t=Dr,i=Ua,a=La,l=fv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qt=5:(qt=0,Ua=Dr=null,Rv(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Or=null),ia(a),i=i.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(lt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,h=oe.p,oe.p=2,K.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var E=l[_];d(E.value,{componentStack:E.stack})}}finally{K.T=i,oe.p=h}}(La&3)!==0&&Cc(),yi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===Md?vl++:(vl=0,Md=t):vl=0,_l(0)}}function Rv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Wo(i)))}function Cc(t){return Sv(),Av(),wv(),Cv()}function Cv(){if(qt!==5)return!1;var t=Dr,i=Nd;Nd=0;var a=ia(La),l=K.T,h=oe.p;try{oe.p=32>a?32:a,K.T=null,a=xd,xd=null;var d=Dr,_=La;if(qt=0,Ua=Dr=null,La=0,(Fe&6)!==0)throw Error(s(331));var E=Fe;if(Fe|=4,cv(d.current),ov(d,d.current,_,a),Fe=E,_l(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(lt,d)}catch{}return!0}finally{oe.p=h,K.T=l,Rv(t,i)}}function Iv(t,i,a){i=Mn(a,i),i=hd(t.stateNode,i,2),t=Er(t,i,2),t!==null&&(Ii(t,2),yi(t))}function Xe(t,i,a){if(t.tag===3)Iv(t,t,a);else for(;i!==null;){if(i.tag===3){Iv(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Or===null||!Or.has(l))){t=Mn(a,t),a=xy(2),l=Er(i,a,2),l!==null&&(My(a,l,i,t),Ii(l,2),yi(l));break}}i=i.return}}function Ud(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Vb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Cd=!0,h.add(a),t=Bb.bind(null,t,i,a),i.then(t,t))}function Bb(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Pe&a)===a&&(ct===4||ct===3&&(Pe&62914560)===Pe&&300>Cn()-Dd?(Fe&2)===0&&ja(t,0):Id|=a,Va===Pe&&(Va=0)),yi(t)}function Ov(t,i){i===0&&(i=Io()),t=Ta(t,i),t!==null&&(Ii(t,i),yi(t))}function Hb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Ov(t,a)}function qb(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Ov(t,a)}function Fb(t,i){return es(t,i)}var Ic=null,Ba=null,Ld=!1,Oc=!1,jd=!1,Ps=0;function yi(t){t!==Ba&&t.next===null&&(Ba===null?Ic=Ba=t:Ba=Ba.next=t),Oc=!0,Ld||(Ld=!0,$b())}function _l(t,i){if(!jd&&Oc){jd=!0;do for(var a=!1,l=Ic;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Xt(42|t)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Mv(l,d))}else d=Pe,d=na(l,l===Ze?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||as(l,d)||(a=!0,Mv(l,d));l=l.next}while(a);jd=!1}}function Gb(){Dv()}function Dv(){Oc=Ld=!1;var t=0;Ps!==0&&(eS()&&(t=Ps),Ps=0);for(var i=Cn(),a=null,l=Ic;l!==null;){var h=l.next,d=Nv(l,i);d===0?(l.next=null,a===null?Ic=h:a.next=h,h===null&&(Ba=a)):(a=l,(t!==0||(d&3)!==0)&&(Oc=!0)),l=h}_l(t)}function Nv(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-Xt(d),E=1<<_,C=h[_];C===-1?((E&a)===0||(E&l)!==0)&&(h[_]=Ro(E,i)):C<=i&&(t.expiredLanes|=E),d&=~E}if(i=Ze,a=Pe,a=na(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ts(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||as(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ts(l),ia(a)){case 2:case 8:a=ea;break;case 32:a=ns;break;case 268435456:a=ta;break;default:a=ns}return l=xv.bind(null,t),a=es(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ts(l),t.callbackPriority=2,t.callbackNode=null,2}function xv(t,i){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cc()&&t.callbackNode!==a)return null;var l=Pe;return l=na(t,t===Ze?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(pv(t,l,i),Nv(t,Cn()),t.callbackNode!=null&&t.callbackNode===a?xv.bind(null,t):null)}function Mv(t,i){if(Cc())return null;pv(t,i,!0)}function $b(){nS(function(){(Fe&6)!==0?es(Ao,Gb):Dv()})}function zd(){return Ps===0&&(Ps=Co()),Ps}function kv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ua(""+t)}function Pv(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Yb(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=kv((h[yt]||null).action),_=l.submitter;_&&(i=(i=_[yt]||null)?kv(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var E=new ca("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ps!==0){var C=_?Pv(h,_):new FormData(h);ad(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(E.preventDefault(),C=_?Pv(h,_):new FormData(h),ad(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var Bd=0;Bd<wf.length;Bd++){var Hd=wf[Bd],Kb=Hd.toLowerCase(),Qb=Hd[0].toUpperCase()+Hd.slice(1);Gn(Kb,"on"+Qb)}Gn(pg,"onAnimationEnd"),Gn(mg,"onAnimationIteration"),Gn(gg,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(fb,"onTransitionRun"),Gn(db,"onTransitionStart"),Gn(pb,"onTransitionCancel"),Gn(yg,"onTransitionEnd"),Di("onMouseEnter",["mouseout","mouseover"]),Di("onMouseLeave",["mouseout","mouseover"]),Di("onPointerEnter",["pointerout","pointerover"]),Di("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function Vv(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var E=l[_],C=E.instance,z=E.currentTarget;if(E=E.listener,C!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=z;try{d(h)}catch(Q){gc(Q)}h.currentTarget=null,d=C}else for(_=0;_<l.length;_++){if(E=l[_],C=E.instance,z=E.currentTarget,E=E.listener,C!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=z;try{d(h)}catch(Q){gc(Q)}h.currentTarget=null,d=C}}}}function Ne(t,i){var a=i[No];a===void 0&&(a=i[No]=new Set);var l=t+"__bubble";a.has(l)||(Uv(i,t,2,!1),a.add(l))}function qd(t,i,a){var l=0;i&&(l|=4),Uv(a,t,l,i)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Fd(t){if(!t[Dc]){t[Dc]=!0,xo.forEach(function(a){a!=="selectionchange"&&(Xb.has(a)||qd(a,!1,t),qd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Dc]||(i[Dc]=!0,qd("selectionchange",!1,i))}}function Uv(t,i,a,l){switch(o_(i)){case 2:var h=SS;break;case 8:h=AS;break;default:h=rp}a=h.bind(null,i,a,t),h=void 0,!Nn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Gd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=l.return;_!==null;){var C=_.tag;if((C===3||C===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=Oi(E),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){l=d=_;continue e}E=E.parentNode}}l=l.return}xu(function(){var z=d,Q=Dn(a),W=[];e:{var B=vg.get(t);if(B!==void 0){var H=ca,Te=t;switch(t){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":H=ga;break;case"focusin":Te="focus",H=da;break;case"focusout":Te="blur",H=da;break;case"beforeblur":case"afterblur":H=da;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=xn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=zu;break;case pg:case mg:case gg:H=pa;break;case yg:H=Hu;break;case"scroll":case"scrollend":H=Mu;break;case"wheel":H=ya;break;case"copy":case"cut":case"paste":H=ma;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Fo;break;case"toggle":case"beforetoggle":H=Fu}var ve=(i&4)!==0,Qe=!ve&&(t==="scroll"||t==="scrollend"),P=ve?B!==null?B+"Capture":null:B;ve=[];for(var x=z,j;x!==null;){var X=x;if(j=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||j===null||P===null||(X=ps(x,P),X!=null&&ve.push(Tl(x,X,j))),Qe)break;x=x.return}0<ve.length&&(B=new H(B,Te,null,a,Q),W.push({event:B,listeners:ve}))}}if((i&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",B&&a!==Mi&&(Te=a.relatedTarget||a.fromElement)&&(Oi(Te)||Te[In]))break e;if((H||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,H?(Te=a.relatedTarget||a.toElement,H=z,Te=Te?Oi(Te):null,Te!==null&&(Qe=u(Te),ve=Te.tag,Te!==Qe||ve!==5&&ve!==27&&ve!==6)&&(Te=null)):(H=null,Te=z),H!==Te)){if(ve=xn,X="onMouseLeave",P="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(ve=Fo,X="onPointerLeave",P="onPointerEnter",x="pointer"),Qe=H==null?B:ri(H),j=Te==null?B:ri(Te),B=new ve(X,x+"leave",H,a,Q),B.target=Qe,B.relatedTarget=j,X=null,Oi(Q)===z&&(ve=new ve(P,x+"enter",Te,a,Q),ve.target=j,ve.relatedTarget=Qe,X=ve),Qe=X,H&&Te)t:{for(ve=H,P=Te,x=0,j=ve;j;j=Ha(j))x++;for(j=0,X=P;X;X=Ha(X))j++;for(;0<x-j;)ve=Ha(ve),x--;for(;0<j-x;)P=Ha(P),j--;for(;x--;){if(ve===P||P!==null&&ve===P.alternate)break t;ve=Ha(ve),P=Ha(P)}ve=null}else ve=null;H!==null&&Lv(W,B,H,ve,!1),Te!==null&&Qe!==null&&Lv(W,Qe,Te,ve,!0)}}e:{if(B=z?ri(z):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var he=ig;else if(It(B))if(rg)he=ub;else{he=ob;var Oe=ab}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Uo(z.elementType)&&(he=ig):he=lb;if(he&&(he=he(t,z))){Li(W,he,a,Q);break e}Oe&&Oe(t,B,z),t==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&mr(B,"number",B.value)}switch(Oe=z?ri(z):window,t){case"focusin":(It(Oe)||Oe.contentEditable==="true")&&(va=Oe,bf=z,Yo=null);break;case"focusout":Yo=bf=va=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,fg(W,a,Q);break;case"selectionchange":if(hb)break;case"keydown":case"keyup":fg(W,a,Q)}var me;if(hi)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Me?F(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(v&&a.locale!=="ko"&&(Me||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Me&&(me=jo()):(oi=Q,gr="value"in oi?oi.value:oi.textContent,Me=!0)),Oe=Nc(z,_e),0<Oe.length&&(_e=new Ho(_e,t,null,a,Q),W.push({event:_e,listeners:Oe}),me?_e.data=me:(me=ae(a),me!==null&&(_e.data=me)))),(me=p?Ct(t,a):ke(t,a))&&(_e=Nc(z,"onBeforeInput"),0<_e.length&&(Oe=new Ho("onBeforeInput","beforeinput",null,a,Q),W.push({event:Oe,listeners:_e}),Oe.data=me)),Yb(W,t,z,a,Q)}Vv(W,i)})}function Tl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Nc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ps(t,a),h!=null&&l.unshift(Tl(t,h,d)),h=ps(t,i),h!=null&&l.push(Tl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Ha(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lv(t,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var E=a,C=E.alternate,z=E.stateNode;if(E=E.tag,C!==null&&C===l)break;E!==5&&E!==26&&E!==27||z===null||(C=z,h?(z=ps(a,d),z!=null&&_.unshift(Tl(a,z,C))):h||(z=ps(a,d),z!=null&&_.push(Tl(a,z,C)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var Zb=/\r\n?/g,Wb=/\u0000|\uFFFD/g;function jv(t){return(typeof t=="string"?t:""+t).replace(Zb,`
`).replace(Wb,"")}function zv(t,i){return i=jv(i),jv(t)===i}function xc(){}function Ke(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||On(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&On(t,""+l);break;case"className":si(t,"class",l);break;case"tabIndex":si(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":si(t,a,l);break;case"style":Vo(t,l,d);break;case"data":if(i!=="object"){si(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ua(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Ke(t,i,"name",h.name,h,null),Ke(t,i,"formEncType",h.formEncType,h,null),Ke(t,i,"formMethod",h.formMethod,h,null),Ke(t,i,"formTarget",h.formTarget,h,null)):(Ke(t,i,"encType",h.encType,h,null),Ke(t,i,"method",h.method,h,null),Ke(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ua(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=xc);break;case"onScroll":l!=null&&Ne("scroll",t);break;case"onScrollEnd":l!=null&&Ne("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ua(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),pr(t,"popover",l);break;case"xlinkActuate":zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":zt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":zt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":zt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":zt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mf.get(a)||a,pr(t,a,l))}}function $d(t,i,a,l,h,d){switch(a){case"style":Vo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?On(t,l):(typeof l=="number"||typeof l=="bigint")&&On(t,""+l);break;case"onScroll":l!=null&&Ne("scroll",t);break;case"onScrollEnd":l!=null&&Ne("scrollend",t);break;case"onClick":l!=null&&(t.onclick=xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ra.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[yt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):pr(t,a,l)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ke(t,i,d,_,a,null)}}h&&Ke(t,i,"srcSet",a.srcSet,a,null),l&&Ke(t,i,"src",a.src,a,null);return;case"input":Ne("invalid",t);var E=d=_=h=null,C=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":h=Q;break;case"type":_=Q;break;case"checked":C=Q;break;case"defaultChecked":z=Q;break;case"value":d=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Ke(t,i,l,Q,a,null)}}hs(t,d,E,C,z,_,h,!1),la(t);return;case"select":Ne("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:Ke(t,i,h,E,a,null)}i=d,a=_,t.multiple=!!l,i!=null?xi(t,!!l,i,!1):a!=null&&xi(t,!!l,a,!0);return;case"textarea":Ne("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ke(t,i,_,E,a,null)}fs(t,l,h,d),la(t);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ke(t,i,C,l,a,null)}return;case"dialog":Ne("beforetoggle",t),Ne("toggle",t),Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(l=0;l<El.length;l++)Ne(El[l],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ke(t,i,z,l,a,null)}return;default:if(Uo(i)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&$d(t,i,Q,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Ke(t,i,E,l,a,null))}function Jb(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,C=null,z=null,Q=null;for(H in a){var W=a[H];if(a.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=W;default:l.hasOwnProperty(H)||Ke(t,i,H,null,l,W)}}for(var B in l){var H=l[B];if(W=a[B],l.hasOwnProperty(B)&&(H!=null||W!=null))switch(B){case"type":d=H;break;case"name":h=H;break;case"checked":z=H;break;case"defaultChecked":Q=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==W&&Ke(t,i,B,H,l,W)}}yn(t,_,E,C,z,Q,d,h);return;case"select":H=_=E=B=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":H=C;default:l.hasOwnProperty(d)||Ke(t,i,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":B=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==C&&Ke(t,i,h,d,l,C)}i=E,a=_,l=H,B!=null?xi(t,!!a,B,!1):!!l!=!!a&&(i!=null?xi(t,!!a,i,!0):xi(t,!!a,a?[]:"",!1));return;case"textarea":H=B=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ke(t,i,E,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":B=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Ke(t,i,_,h,l,d)}$e(t,B,H);return;case"option":for(var Te in a)if(B=a[Te],a.hasOwnProperty(Te)&&B!=null&&!l.hasOwnProperty(Te))switch(Te){case"selected":t.selected=!1;break;default:Ke(t,i,Te,null,l,B)}for(C in l)if(B=l[C],H=a[C],l.hasOwnProperty(C)&&B!==H&&(B!=null||H!=null))switch(C){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ke(t,i,C,B,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)B=a[ve],a.hasOwnProperty(ve)&&B!=null&&!l.hasOwnProperty(ve)&&Ke(t,i,ve,null,l,B);for(z in l)if(B=l[z],H=a[z],l.hasOwnProperty(z)&&B!==H&&(B!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Ke(t,i,z,B,l,H)}return;default:if(Uo(i)){for(var Qe in a)B=a[Qe],a.hasOwnProperty(Qe)&&B!==void 0&&!l.hasOwnProperty(Qe)&&$d(t,i,Qe,void 0,l,B);for(Q in l)B=l[Q],H=a[Q],!l.hasOwnProperty(Q)||B===H||B===void 0&&H===void 0||$d(t,i,Q,B,l,H);return}}for(var P in a)B=a[P],a.hasOwnProperty(P)&&B!=null&&!l.hasOwnProperty(P)&&Ke(t,i,P,null,l,B);for(W in l)B=l[W],H=a[W],!l.hasOwnProperty(W)||B===H||B==null&&H==null||Ke(t,i,W,B,l,H)}var Yd=null,Kd=null;function Mc(t){return t.nodeType===9?t:t.ownerDocument}function Bv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Qd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xd=null;function eS(){var t=window.event;return t&&t.type==="popstate"?t===Xd?!1:(Xd=t,!0):(Xd=null,!1)}var qv=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(iS)}:qv;function iS(t){setTimeout(function(){throw t})}function xr(t){return t==="head"}function Gv(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&bl(_.documentElement),a&2&&bl(_.body),a&4)for(a=_.head,bl(a),_=a.firstChild;_;){var E=_.nextSibling,C=_.nodeName;_[os]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=E}}if(h===0){t.removeChild(d),Dl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Dl(i)}function Zd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zd(a),dr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rS(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[os])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Yn(t.nextSibling),t===null)break}return null}function sS(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Yn(t.nextSibling),t===null))return null;return t}function Wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function aS(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Yn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Jd=null;function $v(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function Yv(t,i,a){switch(i=Mc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);dr(t)}var jn=new Map,Kv=new Set;function kc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Zi=oe.d;oe.d={f:oS,r:lS,D:uS,C:cS,L:hS,m:fS,X:pS,S:dS,M:mS};function oS(){var t=Zi.f(),i=wc();return t||i}function lS(t){var i=ii(t);i!==null&&i.tag===5&&i.type==="form"?py(i):Zi.r(t)}var qa=typeof document>"u"?null:document;function Qv(t,i,a){var l=qa;if(l&&typeof i=="string"&&i){var h=vt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Kv.has(h)||(Kv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ft(i,"link",t),dt(i),l.head.appendChild(i)))}}function uS(t){Zi.D(t),Qv("dns-prefetch",t,null)}function cS(t,i){Zi.C(t,i),Qv("preconnect",t,i)}function hS(t,i,a){Zi.L(t,i,a);var l=qa;if(l&&t&&i){var h='link[rel="preload"][as="'+vt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+vt(a.imageSizes)+'"]')):h+='[href="'+vt(t)+'"]';var d=h;switch(i){case"style":d=Fa(t);break;case"script":d=Ga(t)}jn.has(d)||(t=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),jn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Sl(d))||i==="script"&&l.querySelector(Al(d))||(i=l.createElement("link"),Ft(i,"link",t),dt(i),l.head.appendChild(i)))}}function fS(t,i){Zi.m(t,i);var a=qa;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ga(t)}if(!jn.has(d)&&(t=T({rel:"modulepreload",href:t},i),jn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(d)))return}l=a.createElement("link"),Ft(l,"link",t),dt(l),a.head.appendChild(l)}}}function dS(t,i,a){Zi.S(t,i,a);var l=qa;if(l&&t){var h=sn(l).hoistableStyles,d=Fa(t);i=i||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(Sl(d)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":i},a),(a=jn.get(d))&&ep(t,a);var C=_=l.createElement("link");dt(C),Ft(C,"link",t),C._p=new Promise(function(z,Q){C.onload=z,C.onerror=Q}),C.addEventListener("load",function(){E.loading|=1}),C.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Pc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function pS(t,i){Zi.X(t,i);var a=qa;if(a&&t){var l=sn(a).hoistableScripts,h=Ga(t),d=l.get(h);d||(d=a.querySelector(Al(h)),d||(t=T({src:t,async:!0},i),(i=jn.get(h))&&tp(t,i),d=a.createElement("script"),dt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function mS(t,i){Zi.M(t,i);var a=qa;if(a&&t){var l=sn(a).hoistableScripts,h=Ga(t),d=l.get(h);d||(d=a.querySelector(Al(h)),d||(t=T({src:t,async:!0,type:"module"},i),(i=jn.get(h))&&tp(t,i),d=a.createElement("script"),dt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Xv(t,i,a,l){var h=(h=ge.current)?kc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Fa(a.href),a=sn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fa(a.href);var d=sn(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(Sl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),jn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jn.set(t,a),d||gS(h,t,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ga(a),a=sn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fa(t){return'href="'+vt(t)+'"'}function Sl(t){return'link[rel="stylesheet"]['+t+"]"}function Zv(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),dt(i),t.head.appendChild(i))}function Ga(t){return'[src="'+vt(t)+'"]'}function Al(t){return"script[async]"+t}function Wv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return i.instance=l,dt(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),dt(l),Ft(l,"style",h),Pc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Fa(a.href);var d=t.querySelector(Sl(h));if(d)return i.state.loading|=4,i.instance=d,dt(d),d;l=Zv(a),(h=jn.get(h))&&ep(l,h),d=(t.ownerDocument||t).createElement("link"),dt(d);var _=d;return _._p=new Promise(function(E,C){_.onload=E,_.onerror=C}),Ft(d,"link",l),i.state.loading|=4,Pc(d,a.precedence,t),i.instance=d;case"script":return d=Ga(a.src),(h=t.querySelector(Al(d)))?(i.instance=h,dt(h),h):(l=a,(h=jn.get(d))&&(l=T({},a),tp(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),dt(h),Ft(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,a.precedence,t));return i.instance}function Pc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function ep(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function tp(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Vc=null;function Jv(t,i,a){if(Vc===null){var l=new Map,h=Vc=new Map;h.set(a,l)}else h=Vc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[os]||d[Rt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=t+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function e_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function yS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function t_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wl=null;function vS(){}function _S(t,i,a){if(wl===null)throw Error(s(475));var l=wl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Fa(a.href),d=t.querySelector(Sl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,dt(d);return}d=t.ownerDocument||t,a=Zv(a),(h=jn.get(h))&&ep(a,h),d=d.createElement("link"),dt(d);var _=d;_._p=new Promise(function(E,C){_.onload=E,_.onerror=C}),Ft(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Uc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function ES(){if(wl===null)throw Error(s(475));var t=wl;return t.stylesheets&&t.count===0&&np(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&np(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Uc(){if(this.count--,this.count===0){if(this.stylesheets)np(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lc=null;function np(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lc=new Map,i.forEach(TS,t),Lc=null,Uc.call(t))}function TS(t,i){if(!(i.state.loading&4)){var a=Lc.get(t);if(a)var l=a.get(null);else{a=new Map,Lc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Uc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Rl={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function bS(t,i,a,l,h,d,_,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.hiddenUpdates=Ci(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function n_(t,i,a,l,h,d,_,E,C,z,Q,W){return t=new bS(t,i,a,_,E,C,z,W),i=1,d===!0&&(i|=24),d=_n(3,null,null,i),t.current=d,d.stateNode=t,i=Uf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Bf(d),t}function i_(t){return t?(t=ba,t):ba}function r_(t,i,a,l,h,d){h=i_(h),l.context===null?l.context=h:l.pendingContext=h,l=_r(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Er(t,l,i),a!==null&&(An(a,t,i),nl(a,t,i))}function s_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function ip(t,i){s_(t,i),(t=t.alternate)&&s_(t,i)}function a_(t){if(t.tag===13){var i=Ta(t,67108864);i!==null&&An(i,t,67108864),ip(t,67108864)}}var jc=!0;function SS(t,i,a,l){var h=K.T;K.T=null;var d=oe.p;try{oe.p=2,rp(t,i,a,l)}finally{oe.p=d,K.T=h}}function AS(t,i,a,l){var h=K.T;K.T=null;var d=oe.p;try{oe.p=8,rp(t,i,a,l)}finally{oe.p=d,K.T=h}}function rp(t,i,a,l){if(jc){var h=sp(l);if(h===null)Gd(t,i,l,zc,a),l_(t,l);else if(RS(h,t,i,a,l))l.stopPropagation();else if(l_(t,l),i&4&&-1<wS.indexOf(t)){for(;h!==null;){var d=ii(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Hn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var C=1<<31-Xt(_);E.entanglements[1]|=C,_&=~C}yi(d),(Fe&6)===0&&(Sc=Cn()+500,_l(0))}}break;case 13:E=Ta(d,2),E!==null&&An(E,d,2),wc(),ip(d,2)}if(d=sp(l),d===null&&Gd(t,i,l,zc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Gd(t,i,l,null,a)}}function sp(t){return t=Dn(t),ap(t)}var zc=null;function ap(t){if(zc=null,t=Oi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return zc=t,null}function o_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(uf()){case Ao:return 2;case ea:return 8;case ns:case cf:return 32;case ta:return 268435456;default:return 32}default:return 32}}var op=!1,Mr=null,kr=null,Pr=null,Cl=new Map,Il=new Map,Vr=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(t,i){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Cl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Ol(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ii(i),i!==null&&a_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function RS(t,i,a,l,h){switch(i){case"focusin":return Mr=Ol(Mr,t,i,a,l,h),!0;case"dragenter":return kr=Ol(kr,t,i,a,l,h),!0;case"mouseover":return Pr=Ol(Pr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Cl.set(d,Ol(Cl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Il.set(d,Ol(Il.get(d)||null,t,i,a,l,h)),!0}return!1}function u_(t){var i=Oi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,wu(t.priority,function(){if(a.tag===13){var l=Sn();l=cr(l);var h=Ta(a,l);h!==null&&An(h,a,l),ip(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=sp(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Mi=l,a.target.dispatchEvent(l),Mi=null}else return i=ii(a),i!==null&&a_(i),t.blockedOn=a,!1;i.shift()}return!0}function c_(t,i,a){Bc(t)&&a.delete(i)}function CS(){op=!1,Mr!==null&&Bc(Mr)&&(Mr=null),kr!==null&&Bc(kr)&&(kr=null),Pr!==null&&Bc(Pr)&&(Pr=null),Cl.forEach(c_),Il.forEach(c_)}function Hc(t,i){t.blockedOn===i&&(t.blockedOn=null,op||(op=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,CS)))}var qc=null;function h_(t){qc!==t&&(qc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(ap(l||a)===null)continue;break}var d=ii(a);d!==null&&(t.splice(i,3),i-=3,ad(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Dl(t){function i(C){return Hc(C,t)}Mr!==null&&Hc(Mr,t),kr!==null&&Hc(kr,t),Pr!==null&&Hc(Pr,t),Cl.forEach(i),Il.forEach(i);for(var a=0;a<Vr.length;a++){var l=Vr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Vr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[yt]||null;if(typeof d=="function")_||h_(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[yt]||null)E=_.formAction;else if(ap(h)!==null)continue}else E=_.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),h_(a)}}}function lp(t){this._internalRoot=t}Fc.prototype.render=lp.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Sn();r_(a,l,t,i,null,null)},Fc.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;r_(t.current,2,null,t,null,null),wc(),i[In]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var i=hr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Vr.length&&i!==0&&i<Vr[a].priority;a++);Vr.splice(a,0,t),a===0&&u_(t)}};var f_=e.version;if(f_!=="19.1.0")throw Error(s(527,f_,"19.1.0"));oe.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var IS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{lt=Gc.inject(IS),qe=Gc}catch{}}return xl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Iy,d=Oy,_=Dy,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=n_(t,1,!1,null,null,a,l,h,d,_,E,null),t[In]=i.current,Fd(t),new lp(i)},xl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Iy,_=Oy,E=Dy,C=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),i=n_(t,1,!0,i,a??null,l,h,d,_,E,C,z),i.context=i_(null),a=i.current,l=Sn(),l=cr(l),h=_r(l),h.callback=null,Er(a,h,l),a=l,i.current.lanes=a,Ii(i,a),yi(i),t[In]=i.current,Fd(t),new Fc(i)},xl.version="19.1.0",xl}var b_;function jS(){if(b_)return hp.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hp.exports=LS(),hp.exports}var zS=jS(),Ml={},S_;function BS(){if(S_)return Ml;S_=1,Object.defineProperty(Ml,"__esModule",{value:!0}),Ml.parse=f,Ml.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function f(A,L){const M=new u,G=A.length;if(G<2)return M;const $=L?.decode||T;let q=0;do{const ne=A.indexOf("=",q);if(ne===-1)break;const te=A.indexOf(";",q),ue=te===-1?G:te;if(ne>ue){q=A.lastIndexOf(";",ne-1)+1;continue}const le=m(A,q,ne),ce=g(A,ne,le),I=A.slice(le,ce);if(M[I]===void 0){let w=m(A,ne+1,ue),R=g(A,ue,w);const N=$(A.slice(w,R));M[I]=N}q=ue+1}while(q<G);return M}function m(A,L,M){do{const G=A.charCodeAt(L);if(G!==32&&G!==9)return L}while(++L<M);return M}function g(A,L,M){for(;L>M;){const G=A.charCodeAt(--L);if(G!==32&&G!==9)return L+1}return M}function y(A,L,M){const G=M?.encode||encodeURIComponent;if(!r.test(A))throw new TypeError(`argument name is invalid: ${A}`);const $=G(L);if(!e.test($))throw new TypeError(`argument val is invalid: ${L}`);let q=A+"="+$;if(!M)return q;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);q+="; Max-Age="+M.maxAge}if(M.domain){if(!n.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);q+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);q+="; Path="+M.path}if(M.expires){if(!S(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);q+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(q+="; HttpOnly"),M.secure&&(q+="; Secure"),M.partitioned&&(q+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return q}function T(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function S(A){return o.call(A)==="[object Date]"}return Ml}BS();var A_="popstate";function HS(r={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return Np("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Ql(o)}return FS(e,n,null,r)}function ot(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function bi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qS(){return Math.random().toString(36).substring(2,10)}function w_(r,e){return{usr:r.state,key:r.key,idx:e}}function Np(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?mo(e):e,state:n,key:e&&e.key||s||qS()}}function Ql({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function mo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function FS(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",g=null,y=T();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function T(){return(f.state||{idx:null}).idx}function S(){m="POP";let $=T(),q=$==null?null:$-y;y=$,g&&g({action:m,location:G.location,delta:q})}function A($,q){m="PUSH";let ne=Np(G.location,$,q);y=T()+1;let te=w_(ne,y),ue=G.createHref(ne);try{f.pushState(te,"",ue)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(ue)}u&&g&&g({action:m,location:G.location,delta:1})}function L($,q){m="REPLACE";let ne=Np(G.location,$,q);y=T();let te=w_(ne,y),ue=G.createHref(ne);f.replaceState(te,"",ue),u&&g&&g({action:m,location:G.location,delta:0})}function M($){return GS($)}let G={get action(){return m},get location(){return r(o,f)},listen($){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(A_,S),g=$,()=>{o.removeEventListener(A_,S),g=null}},createHref($){return e(o,$)},createURL:M,encodeLocation($){let q=M($);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:A,replace:L,go($){return f.go($)}};return G}function GS(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ot(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ql(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function oE(r,e,n="/"){return $S(r,e,n,!1)}function $S(r,e,n,s){let o=typeof e=="string"?mo(e):e,u=ar(o.pathname||"/",n);if(u==null)return null;let f=lE(r);YS(f);let m=null;for(let g=0;m==null&&g<f.length;++g){let y=rA(u);m=nA(f[g],y,s)}return m}function lE(r,e=[],n=[],s=""){let o=(u,f,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};g.relativePath.startsWith("/")&&(ot(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let y=tr([s,g.relativePath]),T=n.concat(g);u.children&&u.children.length>0&&(ot(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),lE(u.children,e,T,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:eA(y,u.index),routesMeta:T})};return r.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))o(u,f);else for(let m of uE(u.path))o(u,f,m)}),e}function uE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=uE(s.join("/")),m=[];return m.push(...f.map(g=>g===""?u:[u,g].join("/"))),o&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function YS(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:tA(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var KS=/^:[\w-]+$/,QS=3,XS=2,ZS=1,WS=10,JS=-2,R_=r=>r==="*";function eA(r,e){let n=r.split("/"),s=n.length;return n.some(R_)&&(s+=JS),e&&(s+=XS),n.filter(o=>!R_(o)).reduce((o,u)=>o+(KS.test(u)?QS:u===""?ZS:WS),s)}function tA(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function nA(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let g=s[m],y=m===s.length-1,T=u==="/"?e:e.slice(u.length)||"/",S=_h({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},T),A=g.route;if(!S&&y&&n&&!s[s.length-1].route.index&&(S=_h({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},T)),!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:tr([u,S.pathname]),pathnameBase:lA(tr([u,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(u=tr([u,S.pathnameBase]))}return f}function _h(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=iA(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:T,isOptional:S},A)=>{if(T==="*"){let M=m[A]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const L=m[A];return S&&!L?y[T]=void 0:y[T]=(L||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function iA(r,e=!1,n=!0){bi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function rA(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ar(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function sA(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?mo(r):r;return{pathname:n?n.startsWith("/")?n:aA(n,e):e,search:uA(s),hash:cA(o)}}function aA(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function mp(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oA(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cE(r){let e=oA(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function hE(r,e,n,s=!1){let o;typeof r=="string"?o=mo(r):(o={...r},ot(!o.pathname||!o.pathname.includes("?"),mp("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),mp("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),mp("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let S=e.length-1;if(!s&&f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),S-=1;o.pathname=A.join("/")}m=S>=0?e[S]:"/"}let g=sA(o,m),y=f&&f!=="/"&&f.endsWith("/"),T=(u||f===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||T)&&(g.pathname+="/"),g}var tr=r=>r.join("/").replace(/\/\/+/g,"/"),lA=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),uA=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,cA=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function hA(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var fE=["POST","PUT","PATCH","DELETE"];new Set(fE);var fA=["GET",...fE];new Set(fA);var go=Y.createContext(null);go.displayName="DataRouter";var qh=Y.createContext(null);qh.displayName="DataRouterState";var dE=Y.createContext({isTransitioning:!1});dE.displayName="ViewTransition";var dA=Y.createContext(new Map);dA.displayName="Fetchers";var pA=Y.createContext(null);pA.displayName="Await";var wi=Y.createContext(null);wi.displayName="Navigation";var au=Y.createContext(null);au.displayName="Location";var Ri=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Ri.displayName="Route";var cm=Y.createContext(null);cm.displayName="RouteError";function mA(r,{relative:e}={}){ot(ou(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=Y.useContext(wi),{hash:o,pathname:u,search:f}=lu(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:tr([n,u])),s.createHref({pathname:m,search:f,hash:o})}function ou(){return Y.useContext(au)!=null}function Zr(){return ot(ou(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(au).location}var pE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mE(r){Y.useContext(wi).static||Y.useLayoutEffect(r)}function gE(){let{isDataRoute:r}=Y.useContext(Ri);return r?OA():gA()}function gA(){ot(ou(),"useNavigate() may be used only in the context of a <Router> component.");let r=Y.useContext(go),{basename:e,navigator:n}=Y.useContext(wi),{matches:s}=Y.useContext(Ri),{pathname:o}=Zr(),u=JSON.stringify(cE(s)),f=Y.useRef(!1);return mE(()=>{f.current=!0}),Y.useCallback((g,y={})=>{if(bi(f.current,pE),!f.current)return;if(typeof g=="number"){n.go(g);return}let T=hE(g,JSON.parse(u),o,y.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:tr([e,T.pathname])),(y.replace?n.replace:n.push)(T,y.state,y)},[e,n,u,o,r])}Y.createContext(null);function yA(){let{matches:r}=Y.useContext(Ri),e=r[r.length-1];return e?e.params:{}}function lu(r,{relative:e}={}){let{matches:n}=Y.useContext(Ri),{pathname:s}=Zr(),o=JSON.stringify(cE(n));return Y.useMemo(()=>hE(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function vA(r,e){return yE(r,e)}function yE(r,e,n,s){ot(ou(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Y.useContext(wi),{matches:u}=Y.useContext(Ri),f=u[u.length-1],m=f?f.params:{},g=f?f.pathname:"/",y=f?f.pathnameBase:"/",T=f&&f.route;{let q=T&&T.path||"";vE(g,!T||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let S=Zr(),A;if(e){let q=typeof e=="string"?mo(e):e;ot(y==="/"||q.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),A=q}else A=S;let L=A.pathname||"/",M=L;if(y!=="/"){let q=y.replace(/^\//,"").split("/");M="/"+L.replace(/^\//,"").split("/").slice(q.length).join("/")}let G=oE(r,{pathname:M});bi(T||G!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),bi(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=SA(G&&G.map(q=>Object.assign({},q,{params:Object.assign({},m,q.params),pathname:tr([y,o.encodeLocation?o.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:tr([y,o.encodeLocation?o.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),u,n,s);return e&&$?Y.createElement(au.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},$):$}function _A(){let r=IA(),e=hA(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:u},"ErrorBoundary")," or"," ",Y.createElement("code",{style:u},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),n?Y.createElement("pre",{style:o},n):null,f)}var EA=Y.createElement(_A,null),TA=class extends Y.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?Y.createElement(Ri.Provider,{value:this.props.routeContext},Y.createElement(cm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bA({routeContext:r,match:e,children:n}){let s=Y.useContext(go);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Ri.Provider,{value:r},n)}function SA(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n?.errors;if(u!=null){let g=o.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);ot(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,m=-1;if(n)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:T,errors:S}=n,A=y.route.loader&&!T.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||A){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((g,y,T)=>{let S,A=!1,L=null,M=null;n&&(S=u&&y.route.id?u[y.route.id]:void 0,L=y.route.errorElement||EA,f&&(m<0&&T===0?(vE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,M=null):m===T&&(A=!0,M=y.route.hydrateFallbackElement||null)));let G=e.concat(o.slice(0,T+1)),$=()=>{let q;return S?q=L:A?q=M:y.route.Component?q=Y.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=g,Y.createElement(bA,{match:y,routeContext:{outlet:g,matches:G,isDataRoute:n!=null},children:q})};return n&&(y.route.ErrorBoundary||y.route.errorElement||T===0)?Y.createElement(TA,{location:n.location,revalidation:n.revalidation,component:L,error:S,children:$(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):$()},null)}function hm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AA(r){let e=Y.useContext(go);return ot(e,hm(r)),e}function wA(r){let e=Y.useContext(qh);return ot(e,hm(r)),e}function RA(r){let e=Y.useContext(Ri);return ot(e,hm(r)),e}function fm(r){let e=RA(r),n=e.matches[e.matches.length-1];return ot(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function CA(){return fm("useRouteId")}function IA(){let r=Y.useContext(cm),e=wA("useRouteError"),n=fm("useRouteError");return r!==void 0?r:e.errors?.[n]}function OA(){let{router:r}=AA("useNavigate"),e=fm("useNavigate"),n=Y.useRef(!1);return mE(()=>{n.current=!0}),Y.useCallback(async(o,u={})=>{bi(n.current,pE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var C_={};function vE(r,e,n){!e&&!C_[r]&&(C_[r]=!0,bi(!1,n))}Y.memo(DA);function DA({routes:r,future:e,state:n}){return yE(r,void 0,n,e)}function nh(r){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NA({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){ot(!ou(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=Y.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=mo(n));let{pathname:g="/",search:y="",hash:T="",state:S=null,key:A="default"}=n,L=Y.useMemo(()=>{let M=ar(g,f);return M==null?null:{location:{pathname:M,search:y,hash:T,state:S,key:A},navigationType:s}},[f,g,y,T,S,A,s]);return bi(L!=null,`<Router basename="${f}"> is not able to match the URL "${g}${y}${T}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:Y.createElement(wi.Provider,{value:m},Y.createElement(au.Provider,{children:e,value:L}))}function xA({children:r,location:e}){return vA(xp(r),e)}function xp(r,e=[]){let n=[];return Y.Children.forEach(r,(s,o)=>{if(!Y.isValidElement(s))return;let u=[...e,o];if(s.type===Y.Fragment){n.push.apply(n,xp(s.props.children,u));return}ot(s.type===nh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=xp(s.props.children,u)),n.push(f)}),n}var ih="get",rh="application/x-www-form-urlencoded";function Fh(r){return r!=null&&typeof r.tagName=="string"}function MA(r){return Fh(r)&&r.tagName.toLowerCase()==="button"}function kA(r){return Fh(r)&&r.tagName.toLowerCase()==="form"}function PA(r){return Fh(r)&&r.tagName.toLowerCase()==="input"}function VA(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function UA(r,e){return r.button===0&&(!e||e==="_self")&&!VA(r)}var $c=null;function LA(){if($c===null)try{new FormData(document.createElement("form"),0),$c=!1}catch{$c=!0}return $c}var jA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gp(r){return r!=null&&!jA.has(r)?(bi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rh}"`),null):r}function zA(r,e){let n,s,o,u,f;if(kA(r)){let m=r.getAttribute("action");s=m?ar(m,e):null,n=r.getAttribute("method")||ih,o=gp(r.getAttribute("enctype"))||rh,u=new FormData(r)}else if(MA(r)||PA(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(s=g?ar(g,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||ih,o=gp(r.getAttribute("formenctype"))||gp(m.getAttribute("enctype"))||rh,u=new FormData(m,r),!LA()){let{name:y,type:T,value:S}=r;if(T==="image"){let A=y?`${y}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else y&&u.append(y,S)}}else{if(Fh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ih,s=null,o=rh,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}function dm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function BA(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HA(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qA(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await BA(u,n);return f.links?f.links():[]}return[]}));return YA(s.flat(1).filter(HA).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function I_(r,e,n,s,o,u){let f=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,m=(g,y)=>n[y].pathname!==g.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==g.params["*"];return u==="assets"?e.filter((g,y)=>f(g,y)||m(g,y)):u==="data"?e.filter((g,y)=>{let T=s.routes[g.route.id];if(!T||!T.hasLoader)return!1;if(f(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function FA(r,e,{includeHydrateFallback:n}={}){return GA(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function GA(r){return[...new Set(r)]}function $A(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function YA(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify($A(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var KA=new Set([100,101,204,205]);function QA(r,e){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname="_root.data":e&&ar(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function _E(){let r=Y.useContext(go);return dm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function XA(){let r=Y.useContext(qh);return dm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var pm=Y.createContext(void 0);pm.displayName="FrameworkContext";function EE(){let r=Y.useContext(pm);return dm(r,"You must render this element inside a <HydratedRouter> element"),r}function ZA(r,e){let n=Y.useContext(pm),[s,o]=Y.useState(!1),[u,f]=Y.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:T,onTouchStart:S}=e,A=Y.useRef(null);Y.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let G=q=>{q.forEach(ne=>{f(ne.isIntersecting)})},$=new IntersectionObserver(G,{threshold:.5});return A.current&&$.observe(A.current),()=>{$.disconnect()}}},[r]),Y.useEffect(()=>{if(s){let G=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(G)}}},[s]);let L=()=>{o(!0)},M=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,A,{}]:[u,A,{onFocus:kl(m,L),onBlur:kl(g,M),onMouseEnter:kl(y,L),onMouseLeave:kl(T,M),onTouchStart:kl(S,L)}]:[!1,A,{}]}function kl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function WA({page:r,...e}){let{router:n}=_E(),s=Y.useMemo(()=>oE(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?Y.createElement(ew,{page:r,matches:s,...e}):null}function JA(r){let{manifest:e,routeModules:n}=EE(),[s,o]=Y.useState([]);return Y.useEffect(()=>{let u=!1;return qA(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function ew({page:r,matches:e,...n}){let s=Zr(),{manifest:o,routeModules:u}=EE(),{basename:f}=_E(),{loaderData:m,matches:g}=XA(),y=Y.useMemo(()=>I_(r,e,g,o,s,"data"),[r,e,g,o,s]),T=Y.useMemo(()=>I_(r,e,g,o,s,"assets"),[r,e,g,o,s]),S=Y.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,G=!1;if(e.forEach(q=>{let ne=o.routes[q.route.id];!ne||!ne.hasLoader||(!y.some(te=>te.route.id===q.route.id)&&q.route.id in m&&u[q.route.id]?.shouldRevalidate||ne.hasClientLoader?G=!0:M.add(q.route.id))}),M.size===0)return[];let $=QA(r,f);return G&&M.size>0&&$.searchParams.set("_routes",e.filter(q=>M.has(q.route.id)).map(q=>q.route.id).join(",")),[$.pathname+$.search]},[f,m,s,o,y,e,r,u]),A=Y.useMemo(()=>FA(T,o),[T,o]),L=JA(T);return Y.createElement(Y.Fragment,null,S.map(M=>Y.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),A.map(M=>Y.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),L.map(({key:M,link:G})=>Y.createElement("link",{key:M,...G})))}function tw(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var TE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{TE&&(window.__reactRouterVersion="7.6.3")}catch{}function nw({basename:r,children:e,window:n}){let s=Y.useRef();s.current==null&&(s.current=HS({window:n,v5Compat:!0}));let o=s.current,[u,f]=Y.useState({action:o.action,location:o.location}),m=Y.useCallback(g=>{Y.startTransition(()=>f(g))},[f]);return Y.useLayoutEffect(()=>o.listen(m),[o,m]),Y.createElement(NA,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var bE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mm=Y.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:g,to:y,preventScrollReset:T,viewTransition:S,...A},L){let{basename:M}=Y.useContext(wi),G=typeof y=="string"&&bE.test(y),$,q=!1;if(typeof y=="string"&&G&&($=y,TE))try{let R=new URL(window.location.href),N=y.startsWith("//")?new URL(R.protocol+y):new URL(y),k=ar(N.pathname,M);N.origin===R.origin&&k!=null?y=k+N.search+N.hash:q=!0}catch{bi(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=mA(y,{relative:o}),[te,ue,le]=ZA(s,A),ce=aw(y,{replace:f,state:m,target:g,preventScrollReset:T,relative:o,viewTransition:S});function I(R){e&&e(R),R.defaultPrevented||ce(R)}let w=Y.createElement("a",{...A,...le,href:$||ne,onClick:q||u?e:I,ref:tw(L,ue),target:g,"data-discover":!G&&n==="render"?"true":void 0});return te&&!G?Y.createElement(Y.Fragment,null,w,Y.createElement(WA,{page:ne})):w});mm.displayName="Link";var iw=Y.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:g,...y},T){let S=lu(f,{relative:y.relative}),A=Zr(),L=Y.useContext(qh),{navigator:M,basename:G}=Y.useContext(wi),$=L!=null&&hw(S)&&m===!0,q=M.encodeLocation?M.encodeLocation(S).pathname:S.pathname,ne=A.pathname,te=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;n||(ne=ne.toLowerCase(),te=te?te.toLowerCase():null,q=q.toLowerCase()),te&&G&&(te=ar(te,G)||te);const ue=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let le=ne===q||!o&&ne.startsWith(q)&&ne.charAt(ue)==="/",ce=te!=null&&(te===q||!o&&te.startsWith(q)&&te.charAt(q.length)==="/"),I={isActive:le,isPending:ce,isTransitioning:$},w=le?e:void 0,R;typeof s=="function"?R=s(I):R=[s,le?"active":null,ce?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(I):u;return Y.createElement(mm,{...y,"aria-current":w,className:R,ref:T,style:N,to:f,viewTransition:m},typeof g=="function"?g(I):g)});iw.displayName="NavLink";var rw=Y.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=ih,action:m,onSubmit:g,relative:y,preventScrollReset:T,viewTransition:S,...A},L)=>{let M=uw(),G=cw(m,{relative:y}),$=f.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&bE.test(m),ne=te=>{if(g&&g(te),te.defaultPrevented)return;te.preventDefault();let ue=te.nativeEvent.submitter,le=ue?.getAttribute("formmethod")||f;M(ue||te.currentTarget,{fetcherKey:e,method:le,navigate:n,replace:o,state:u,relative:y,preventScrollReset:T,viewTransition:S})};return Y.createElement("form",{ref:L,method:$,action:G,onSubmit:s?g:ne,...A,"data-discover":!q&&r==="render"?"true":void 0})});rw.displayName="Form";function sw(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SE(r){let e=Y.useContext(go);return ot(e,sw(r)),e}function aw(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=gE(),g=Zr(),y=lu(r,{relative:u});return Y.useCallback(T=>{if(UA(T,e)){T.preventDefault();let S=n!==void 0?n:Ql(g)===Ql(y);m(r,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[g,m,y,n,s,e,r,o,u,f])}var ow=0,lw=()=>`__${String(++ow)}__`;function uw(){let{router:r}=SE("useSubmit"),{basename:e}=Y.useContext(wi),n=CA();return Y.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:g,body:y}=zA(s,e);if(o.navigate===!1){let T=o.fetcherKey||lw();await r.fetch(T,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function cw(r,{relative:e}={}){let{basename:n}=Y.useContext(wi),s=Y.useContext(Ri);ot(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...lu(r||".",{relative:e})},f=Zr();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),g=m.getAll("index");if(g.some(T=>T==="")){m.delete("index"),g.filter(S=>S).forEach(S=>m.append("index",S));let T=m.toString();u.search=T?`?${T}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:tr([n,u.pathname])),Ql(u)}function hw(r,e={}){let n=Y.useContext(dE);ot(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=SE("useViewTransitionState"),o=lu(r,{relative:e.relative});if(!n.isTransitioning)return!1;let u=ar(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=ar(n.nextLocation.pathname,s)||n.nextLocation.pathname;return _h(o.pathname,f)!=null||_h(o.pathname,u)!=null}[...KA];const AE=Y.createContext(void 0);function fw({children:r}){const[e,n]=Y.useState(!1);function s(){n(u=>!u)}function o(){n(!1)}return Z.jsx(AE.Provider,{value:{isSidebarOpen:e,toggleSidebar:s,closeSidebar:o},children:r})}function wE(){const r=Y.useContext(AE);if(!r)throw new Error("useSidebar must be used within a SidebarProvider");return r}var pn=function(){return pn=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},pn.apply(this,arguments)};function Xl(r,e,n){if(n||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var Je="-ms-",zl="-moz-",He="-webkit-",RE="comm",Gh="rule",gm="decl",dw="@import",CE="@keyframes",pw="@layer",IE=Math.abs,ym=String.fromCharCode,Mp=Object.assign;function mw(r,e){return Lt(r,0)^45?(((e<<2^Lt(r,0))<<2^Lt(r,1))<<2^Lt(r,2))<<2^Lt(r,3):0}function OE(r){return r.trim()}function Wi(r,e){return(r=e.exec(r))?r[0]:r}function we(r,e,n){return r.replace(e,n)}function sh(r,e,n){return r.indexOf(e,n)}function Lt(r,e){return r.charCodeAt(e)|0}function no(r,e,n){return r.slice(e,n)}function _i(r){return r.length}function DE(r){return r.length}function Vl(r,e){return e.push(r),r}function gw(r,e){return r.map(e).join("")}function O_(r,e){return r.filter(function(n){return!Wi(n,e)})}var $h=1,io=1,NE=0,Bn=0,bt=0,yo="";function Yh(r,e,n,s,o,u,f,m){return{value:r,root:e,parent:n,type:s,props:o,children:u,line:$h,column:io,length:f,return:"",siblings:m}}function jr(r,e){return Mp(Yh("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function $a(r){for(;r.root;)r=jr(r.root,{children:[r]});Vl(r,r.siblings)}function yw(){return bt}function vw(){return bt=Bn>0?Lt(yo,--Bn):0,io--,bt===10&&(io=1,$h--),bt}function Jn(){return bt=Bn<NE?Lt(yo,Bn++):0,io++,bt===10&&(io=1,$h++),bt}function js(){return Lt(yo,Bn)}function ah(){return Bn}function Kh(r,e){return no(yo,r,e)}function kp(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _w(r){return $h=io=1,NE=_i(yo=r),Bn=0,[]}function Ew(r){return yo="",r}function yp(r){return OE(Kh(Bn-1,Pp(r===91?r+2:r===40?r+1:r)))}function Tw(r){for(;(bt=js())&&bt<33;)Jn();return kp(r)>2||kp(bt)>3?"":" "}function bw(r,e){for(;--e&&Jn()&&!(bt<48||bt>102||bt>57&&bt<65||bt>70&&bt<97););return Kh(r,ah()+(e<6&&js()==32&&Jn()==32))}function Pp(r){for(;Jn();)switch(bt){case r:return Bn;case 34:case 39:r!==34&&r!==39&&Pp(bt);break;case 40:r===41&&Pp(r);break;case 92:Jn();break}return Bn}function Sw(r,e){for(;Jn()&&r+bt!==57;)if(r+bt===84&&js()===47)break;return"/*"+Kh(e,Bn-1)+"*"+ym(r===47?r:Jn())}function Aw(r){for(;!kp(js());)Jn();return Kh(r,Bn)}function ww(r){return Ew(oh("",null,null,null,[""],r=_w(r),0,[0],r))}function oh(r,e,n,s,o,u,f,m,g){for(var y=0,T=0,S=f,A=0,L=0,M=0,G=1,$=1,q=1,ne=0,te="",ue=o,le=u,ce=s,I=te;$;)switch(M=ne,ne=Jn()){case 40:if(M!=108&&Lt(I,S-1)==58){sh(I+=we(yp(ne),"&","&\f"),"&\f",IE(y?m[y-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:I+=yp(ne);break;case 9:case 10:case 13:case 32:I+=Tw(M);break;case 92:I+=bw(ah()-1,7);continue;case 47:switch(js()){case 42:case 47:Vl(Rw(Sw(Jn(),ah()),e,n,g),g);break;default:I+="/"}break;case 123*G:m[y++]=_i(I)*q;case 125*G:case 59:case 0:switch(ne){case 0:case 125:$=0;case 59+T:q==-1&&(I=we(I,/\f/g,"")),L>0&&_i(I)-S&&Vl(L>32?N_(I+";",s,n,S-1,g):N_(we(I," ","")+";",s,n,S-2,g),g);break;case 59:I+=";";default:if(Vl(ce=D_(I,e,n,y,T,o,m,te,ue=[],le=[],S,u),u),ne===123)if(T===0)oh(I,e,ce,ce,ue,u,S,m,le);else switch(A===99&&Lt(I,3)===110?100:A){case 100:case 108:case 109:case 115:oh(r,ce,ce,s&&Vl(D_(r,ce,ce,0,0,o,m,te,o,ue=[],S,le),le),o,le,S,m,s?ue:le);break;default:oh(I,ce,ce,ce,[""],le,0,m,le)}}y=T=L=0,G=q=1,te=I="",S=f;break;case 58:S=1+_i(I),L=M;default:if(G<1){if(ne==123)--G;else if(ne==125&&G++==0&&vw()==125)continue}switch(I+=ym(ne),ne*G){case 38:q=T>0?1:(I+="\f",-1);break;case 44:m[y++]=(_i(I)-1)*q,q=1;break;case 64:js()===45&&(I+=yp(Jn())),A=js(),T=S=_i(te=I+=Aw(ah())),ne++;break;case 45:M===45&&_i(I)==2&&(G=0)}}return u}function D_(r,e,n,s,o,u,f,m,g,y,T,S){for(var A=o-1,L=o===0?u:[""],M=DE(L),G=0,$=0,q=0;G<s;++G)for(var ne=0,te=no(r,A+1,A=IE($=f[G])),ue=r;ne<M;++ne)(ue=OE($>0?L[ne]+" "+te:we(te,/&\f/g,L[ne])))&&(g[q++]=ue);return Yh(r,e,n,o===0?Gh:m,g,y,T,S)}function Rw(r,e,n,s){return Yh(r,e,n,RE,ym(yw()),no(r,2,-2),0,s)}function N_(r,e,n,s,o){return Yh(r,e,n,gm,no(r,0,s),no(r,s+1,-1),s,o)}function xE(r,e,n){switch(mw(r,e)){case 5103:return He+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+r+r;case 4789:return zl+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return He+r+zl+r+Je+r+r;case 5936:switch(Lt(r,e+11)){case 114:return He+r+Je+we(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return He+r+Je+we(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return He+r+Je+we(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return He+r+Je+r+r;case 6165:return He+r+Je+"flex-"+r+r;case 5187:return He+r+we(r,/(\w+).+(:[^]+)/,He+"box-$1$2"+Je+"flex-$1$2")+r;case 5443:return He+r+Je+"flex-item-"+we(r,/flex-|-self/g,"")+(Wi(r,/flex-|baseline/)?"":Je+"grid-row-"+we(r,/flex-|-self/g,""))+r;case 4675:return He+r+Je+"flex-line-pack"+we(r,/align-content|flex-|-self/g,"")+r;case 5548:return He+r+Je+we(r,"shrink","negative")+r;case 5292:return He+r+Je+we(r,"basis","preferred-size")+r;case 6060:return He+"box-"+we(r,"-grow","")+He+r+Je+we(r,"grow","positive")+r;case 4554:return He+we(r,/([^-])(transform)/g,"$1"+He+"$2")+r;case 6187:return we(we(we(r,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),r,"")+r;case 5495:case 3959:return we(r,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return we(we(r,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+r+r;case 4200:if(!Wi(r,/flex-|baseline/))return Je+"grid-column-align"+no(r,e)+r;break;case 2592:case 3360:return Je+we(r,"template-","")+r;case 4384:case 3616:return n&&n.some(function(s,o){return e=o,Wi(s.props,/grid-\w+-end/)})?~sh(r+(n=n[e].value),"span",0)?r:Je+we(r,"-start","")+r+Je+"grid-row-span:"+(~sh(n,"span",0)?Wi(n,/\d+/):+Wi(n,/\d+/)-+Wi(r,/\d+/))+";":Je+we(r,"-start","")+r;case 4896:case 4128:return n&&n.some(function(s){return Wi(s.props,/grid-\w+-start/)})?r:Je+we(we(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return we(r,/(.+)-inline(.+)/,He+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_i(r)-1-e>6)switch(Lt(r,e+1)){case 109:if(Lt(r,e+4)!==45)break;case 102:return we(r,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+zl+(Lt(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~sh(r,"stretch",0)?xE(we(r,"stretch","fill-available"),e,n)+r:r}break;case 5152:case 5920:return we(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,f,m,g,y){return Je+o+":"+u+y+(f?Je+o+"-span:"+(m?g:+g-+u)+y:"")+r});case 4949:if(Lt(r,e+6)===121)return we(r,":",":"+He)+r;break;case 6444:switch(Lt(r,Lt(r,14)===45?18:11)){case 120:return we(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+He+(Lt(r,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Je+"$2box$3")+r;case 100:return we(r,":",":"+Je)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(r,"scroll-","scroll-snap-")+r}return r}function Eh(r,e){for(var n="",s=0;s<r.length;s++)n+=e(r[s],s,r,e)||"";return n}function Cw(r,e,n,s){switch(r.type){case pw:if(r.children.length)break;case dw:case gm:return r.return=r.return||r.value;case RE:return"";case CE:return r.return=r.value+"{"+Eh(r.children,s)+"}";case Gh:if(!_i(r.value=r.props.join(",")))return""}return _i(n=Eh(r.children,s))?r.return=r.value+"{"+n+"}":""}function Iw(r){var e=DE(r);return function(n,s,o,u){for(var f="",m=0;m<e;m++)f+=r[m](n,s,o,u)||"";return f}}function Ow(r){return function(e){e.root||(e=e.return)&&r(e)}}function Dw(r,e,n,s){if(r.length>-1&&!r.return)switch(r.type){case gm:r.return=xE(r.value,r.length,n);return;case CE:return Eh([jr(r,{value:we(r.value,"@","@"+He)})],s);case Gh:if(r.length)return gw(n=r.props,function(o){switch(Wi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$a(jr(r,{props:[we(o,/:(read-\w+)/,":"+zl+"$1")]})),$a(jr(r,{props:[o]})),Mp(r,{props:O_(n,s)});break;case"::placeholder":$a(jr(r,{props:[we(o,/:(plac\w+)/,":"+He+"input-$1")]})),$a(jr(r,{props:[we(o,/:(plac\w+)/,":"+zl+"$1")]})),$a(jr(r,{props:[we(o,/:(plac\w+)/,Je+"input-$1")]})),$a(jr(r,{props:[o]})),Mp(r,{props:O_(n,s)});break}return""})}}var Nw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wn={},ro=typeof process<"u"&&wn!==void 0&&(wn.REACT_APP_SC_ATTR||wn.SC_ATTR)||"data-styled",ME="active",kE="data-styled-version",Qh="6.1.19",vm=`/*!sc*/
`,Th=typeof window<"u"&&typeof document<"u",xw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wn!==void 0&&wn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wn.REACT_APP_SC_DISABLE_SPEEDY!==""?wn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wn!==void 0&&wn.SC_DISABLE_SPEEDY!==void 0&&wn.SC_DISABLE_SPEEDY!==""&&wn.SC_DISABLE_SPEEDY!=="false"&&wn.SC_DISABLE_SPEEDY),Xh=Object.freeze([]),so=Object.freeze({});function Mw(r,e,n){return n===void 0&&(n=so),r.theme!==n.theme&&r.theme||e||n.theme}var PE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pw=/(^-|-$)/g;function x_(r){return r.replace(kw,"-").replace(Pw,"")}var Vw=/(a)(d)/gi,Yc=52,M_=function(r){return String.fromCharCode(r+(r>25?39:97))};function Vp(r){var e,n="";for(e=Math.abs(r);e>Yc;e=e/Yc|0)n=M_(e%Yc)+n;return(M_(e%Yc)+n).replace(Vw,"$1-$2")}var vp,VE=5381,Qa=function(r,e){for(var n=e.length;n;)r=33*r^e.charCodeAt(--n);return r},UE=function(r){return Qa(VE,r)};function LE(r){return Vp(UE(r)>>>0)}function Uw(r){return r.displayName||r.name||"Component"}function _p(r){return typeof r=="string"&&!0}var jE=typeof Symbol=="function"&&Symbol.for,zE=jE?Symbol.for("react.memo"):60115,Lw=jE?Symbol.for("react.forward_ref"):60112,jw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bw=((vp={})[Lw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vp[zE]=BE,vp);function k_(r){return("type"in(e=r)&&e.type.$$typeof)===zE?BE:"$$typeof"in r?Bw[r.$$typeof]:jw;var e}var Hw=Object.defineProperty,qw=Object.getOwnPropertyNames,P_=Object.getOwnPropertySymbols,Fw=Object.getOwnPropertyDescriptor,Gw=Object.getPrototypeOf,V_=Object.prototype;function HE(r,e,n){if(typeof e!="string"){if(V_){var s=Gw(e);s&&s!==V_&&HE(r,s,n)}var o=qw(e);P_&&(o=o.concat(P_(e)));for(var u=k_(r),f=k_(e),m=0;m<o.length;++m){var g=o[m];if(!(g in zw||n&&n[g]||f&&g in f||u&&g in u)){var y=Fw(e,g);try{Hw(r,g,y)}catch{}}}}return r}function ao(r){return typeof r=="function"}function _m(r){return typeof r=="object"&&"styledComponentId"in r}function Us(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Up(r,e){if(r.length===0)return"";for(var n=r[0],s=1;s<r.length;s++)n+=r[s];return n}function Zl(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Lp(r,e,n){if(n===void 0&&(n=!1),!n&&!Zl(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=Lp(r[s],e[s]);else if(Zl(e))for(var s in e)r[s]=Lp(r[s],e[s]);return r}function Em(r,e){Object.defineProperty(r,"toString",{value:e})}function uu(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var $w=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var n=0,s=0;s<e;s++)n+=this.groupSizes[s];return n},r.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw uu(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=o;f<u;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(e+1),g=(f=0,n.length);f<g;f++)this.tag.insertRule(m,n[f])&&(this.groupSizes[e]++,m++)},r.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,f=o;f<u;f++)n+="".concat(this.tag.getRule(f)).concat(vm);return n},r}(),lh=new Map,bh=new Map,uh=1,Kc=function(r){if(lh.has(r))return lh.get(r);for(;bh.has(uh);)uh++;var e=uh++;return lh.set(r,e),bh.set(e,r),e},Yw=function(r,e){uh=e+1,lh.set(r,e),bh.set(e,r)},Kw="style[".concat(ro,"][").concat(kE,'="').concat(Qh,'"]'),Qw=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xw=function(r,e,n){for(var s,o=n.split(","),u=0,f=o.length;u<f;u++)(s=o[u])&&r.registerName(e,s)},Zw=function(r,e){for(var n,s=((n=e.textContent)!==null&&n!==void 0?n:"").split(vm),o=[],u=0,f=s.length;u<f;u++){var m=s[u].trim();if(m){var g=m.match(Qw);if(g){var y=0|parseInt(g[1],10),T=g[2];y!==0&&(Yw(T,y),Xw(r,T,g[3]),r.getTag().insertRules(y,o)),o.length=0}else o.push(m)}}},U_=function(r){for(var e=document.querySelectorAll(Kw),n=0,s=e.length;n<s;n++){var o=e[n];o&&o.getAttribute(ro)!==ME&&(Zw(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ww(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qE=function(r){var e=document.head,n=r||e,s=document.createElement("style"),o=function(m){var g=Array.from(m.querySelectorAll("style[".concat(ro,"]")));return g[g.length-1]}(n),u=o!==void 0?o.nextSibling:null;s.setAttribute(ro,ME),s.setAttribute(kE,Qh);var f=Ww();return f&&s.setAttribute("nonce",f),n.insertBefore(s,u),s},Jw=function(){function r(e){this.element=qE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var f=s[o];if(f.ownerNode===n)return f}throw uu(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},r}(),eR=function(){function r(e){this.element=qE(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var s=document.createTextNode(n);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),tR=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),L_=Th,nR={isServer:!Th,useCSSOMInjection:!xw},FE=function(){function r(e,n,s){e===void 0&&(e=so),n===void 0&&(n={});var o=this;this.options=pn(pn({},nR),e),this.gs=n,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Th&&L_&&(L_=!1,U_(this)),Em(this,function(){return function(u){for(var f=u.getTag(),m=f.length,g="",y=function(S){var A=function(q){return bh.get(q)}(S);if(A===void 0)return"continue";var L=u.names.get(A),M=f.getGroup(S);if(L===void 0||!L.size||M.length===0)return"continue";var G="".concat(ro,".g").concat(S,'[id="').concat(A,'"]'),$="";L!==void 0&&L.forEach(function(q){q.length>0&&($+="".concat(q,","))}),g+="".concat(M).concat(G,'{content:"').concat($,'"}').concat(vm)},T=0;T<m;T++)y(T);return g}(o)})}return r.registerId=function(e){return Kc(e)},r.prototype.rehydrate=function(){!this.server&&Th&&U_(this)},r.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new r(pn(pn({},this.options),e),this.gs,n&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var s=n.useCSSOMInjection,o=n.target;return n.isServer?new tR(o):s?new Jw(o):new eR(o)}(this.options),new $w(e)));var e},r.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},r.prototype.registerName=function(e,n){if(Kc(e),this.names.has(e))this.names.get(e).add(n);else{var s=new Set;s.add(n),this.names.set(e,s)}},r.prototype.insertRules=function(e,n,s){this.registerName(e,n),this.getTag().insertRules(Kc(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Kc(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),iR=/&/g,rR=/^\s*\/\/.*$/gm;function GE(r,e){return r.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=GE(n.children,e)),n})}function sR(r){var e,n,s,o=so,u=o.options,f=u===void 0?so:u,m=o.plugins,g=m===void 0?Xh:m,y=function(A,L,M){return M.startsWith(n)&&M.endsWith(n)&&M.replaceAll(n,"").length>0?".".concat(e):A},T=g.slice();T.push(function(A){A.type===Gh&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(iR,n).replace(s,y))}),f.prefix&&T.push(Dw),T.push(Cw);var S=function(A,L,M,G){L===void 0&&(L=""),M===void 0&&(M=""),G===void 0&&(G="&"),e=G,n=L,s=new RegExp("\\".concat(n,"\\b"),"g");var $=A.replace(rR,""),q=ww(M||L?"".concat(M," ").concat(L," { ").concat($," }"):$);f.namespace&&(q=GE(q,f.namespace));var ne=[];return Eh(q,Iw(T.concat(Ow(function(te){return ne.push(te)})))),ne};return S.hash=g.length?g.reduce(function(A,L){return L.name||uu(15),Qa(A,L.name)},VE).toString():"",S}var aR=new FE,jp=sR(),$E=Kl.createContext({shouldForwardProp:void 0,styleSheet:aR,stylis:jp});$E.Consumer;Kl.createContext(void 0);function j_(){return Y.useContext($E)}var YE=function(){function r(e,n){var s=this;this.inject=function(o,u){u===void 0&&(u=jp);var f=s.name+u.hash;o.hasNameForId(s.id,f)||o.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Em(this,function(){throw uu(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=jp),this.name+e.hash},r}(),oR=function(r){return r>="A"&&r<="Z"};function z_(r){for(var e="",n=0;n<r.length;n++){var s=r[n];if(n===1&&s==="-"&&r[0]==="-")return r;oR(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var KE=function(r){return r==null||r===!1||r===""},QE=function(r){var e,n,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!KE(u)&&(Array.isArray(u)&&u.isCss||ao(u)?s.push("".concat(z_(o),":"),u,";"):Zl(u)?s.push.apply(s,Xl(Xl(["".concat(o," {")],QE(u),!1),["}"],!1)):s.push("".concat(z_(o),": ").concat((e=o,(n=u)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Nw||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return s};function zs(r,e,n,s){if(KE(r))return[];if(_m(r))return[".".concat(r.styledComponentId)];if(ao(r)){if(!ao(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return zs(o,e,n,s)}var u;return r instanceof YE?n?(r.inject(n,s),[r.getName(s)]):[r]:Zl(r)?QE(r):Array.isArray(r)?Array.prototype.concat.apply(Xh,r.map(function(f){return zs(f,e,n,s)})):[r.toString()]}function lR(r){for(var e=0;e<r.length;e+=1){var n=r[e];if(ao(n)&&!_m(n))return!1}return!0}var uR=UE(Qh),cR=function(){function r(e,n,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&lR(e),this.componentId=n,this.baseHash=Qa(uR,n),this.baseStyle=s,FE.registerId(n)}return r.prototype.generateAndInjectStyles=function(e,n,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Us(o,this.staticRulesId);else{var u=Up(zs(this.rules,e,n,s)),f=Vp(Qa(this.baseHash,u)>>>0);if(!n.hasNameForId(this.componentId,f)){var m=s(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,m)}o=Us(o,f),this.staticRulesId=f}else{for(var g=Qa(this.baseHash,s.hash),y="",T=0;T<this.rules.length;T++){var S=this.rules[T];if(typeof S=="string")y+=S;else if(S){var A=Up(zs(S,e,n,s));g=Qa(g,A+T),y+=A}}if(y){var L=Vp(g>>>0);n.hasNameForId(this.componentId,L)||n.insertRules(this.componentId,L,s(y,".".concat(L),void 0,this.componentId)),o=Us(o,L)}}return o},r}(),XE=Kl.createContext(void 0);XE.Consumer;var Ep={};function hR(r,e,n){var s=_m(r),o=r,u=!_p(r),f=e.attrs,m=f===void 0?Xh:f,g=e.componentId,y=g===void 0?function(ue,le){var ce=typeof ue!="string"?"sc":x_(ue);Ep[ce]=(Ep[ce]||0)+1;var I="".concat(ce,"-").concat(LE(Qh+ce+Ep[ce]));return le?"".concat(le,"-").concat(I):I}(e.displayName,e.parentComponentId):g,T=e.displayName,S=T===void 0?function(ue){return _p(ue)?"styled.".concat(ue):"Styled(".concat(Uw(ue),")")}(r):T,A=e.displayName&&e.componentId?"".concat(x_(e.displayName),"-").concat(e.componentId):e.componentId||y,L=s&&o.attrs?o.attrs.concat(m).filter(Boolean):m,M=e.shouldForwardProp;if(s&&o.shouldForwardProp){var G=o.shouldForwardProp;if(e.shouldForwardProp){var $=e.shouldForwardProp;M=function(ue,le){return G(ue,le)&&$(ue,le)}}else M=G}var q=new cR(n,A,s?o.componentStyle:void 0);function ne(ue,le){return function(ce,I,w){var R=ce.attrs,N=ce.componentStyle,k=ce.defaultProps,V=ce.foldedComponentIds,O=ce.styledComponentId,wt=ce.target,et=Kl.useContext(XE),K=j_(),oe=ce.shouldForwardProp||K.shouldForwardProp,de=Mw(I,et,k)||so,Se=function(be,ge,st){for(var Le,Nt=pn(pn({},ge),{className:void 0,theme:st}),Rn=0;Rn<be.length;Rn+=1){var un=ao(Le=be[Rn])?Le(Nt):Le;for(var Qt in un)Nt[Qt]=Qt==="className"?Us(Nt[Qt],un[Qt]):Qt==="style"?pn(pn({},Nt[Qt]),un[Qt]):un[Qt]}return ge.className&&(Nt.className=Us(Nt.className,ge.className)),Nt}(R,I,de),D=Se.as||wt,J={};for(var se in Se)Se[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&Se.theme===de||(se==="forwardedAs"?J.as=Se.forwardedAs:oe&&!oe(se,D)||(J[se]=Se[se]));var re=function(be,ge){var st=j_(),Le=be.generateAndInjectStyles(ge,st.styleSheet,st.stylis);return Le}(N,Se),pe=Us(V,O);return re&&(pe+=" "+re),Se.className&&(pe+=" "+Se.className),J[_p(D)&&!PE.has(D)?"class":"className"]=pe,w&&(J.ref=w),Y.createElement(D,J)}(te,ue,le)}ne.displayName=S;var te=Kl.forwardRef(ne);return te.attrs=L,te.componentStyle=q,te.displayName=S,te.shouldForwardProp=M,te.foldedComponentIds=s?Us(o.foldedComponentIds,o.styledComponentId):"",te.styledComponentId=A,te.target=s?o.target:r,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ue){this._foldedDefaultProps=s?function(le){for(var ce=[],I=1;I<arguments.length;I++)ce[I-1]=arguments[I];for(var w=0,R=ce;w<R.length;w++)Lp(le,R[w],!0);return le}({},o.defaultProps,ue):ue}}),Em(te,function(){return".".concat(te.styledComponentId)}),u&&HE(te,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function B_(r,e){for(var n=[r[0]],s=0,o=e.length;s<o;s+=1)n.push(e[s],r[s+1]);return n}var H_=function(r){return Object.assign(r,{isCss:!0})};function ZE(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ao(r)||Zl(r))return H_(zs(B_(Xh,Xl([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?zs(s):H_(zs(B_(s,e)))}function zp(r,e,n){if(n===void 0&&(n=so),!e)throw uu(1,e);var s=function(o){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return r(e,n,ZE.apply(void 0,Xl([o],u,!1)))};return s.attrs=function(o){return zp(r,e,pn(pn({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return zp(r,e,pn(pn({},n),o))},s}var WE=function(r){return zp(hR,r)},At=WE;PE.forEach(function(r){At[r]=WE(r)});function fR(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var s=Up(ZE.apply(void 0,Xl([r],e,!1))),o=LE(s);return new YE(o,s)}const ht={primary:"#1F1F1F",secondary:"#E5E5E5",accent:"#007ACC"},dR=At.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  
  height: 3.75rem;
  background-color: ${ht.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  color: ${ht.secondary};

  .left {
    display: flex;
    align-items: center;
    

    .icon-button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: ${ht.secondary};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.1875rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: ${ht.accent};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .center {
   
    text-align: center;
   

    h1 {
      font-size: 1.875rem;
      font-weight: 700;

      .highlight {
        color: gold;
        font-weight: 900;
      }
    }
  }

  .right {
    display: flex;
    gap: 0.75rem;
    margin-right: 2rem;
    flex-shrink: 0;

    button {
      padding: 0.5rem 1rem;
      background-color: ${ht.secondary};
      color: ${ht.primary};
      font-weight: bold;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: ${ht.accent};
        transform: scale(1.05);
      }
    }
  }
`;function pR(){const{toggleSidebar:r}=wE(),e=Zr();function n(){e.pathname==="/"?r():alert("debe deslogarte y cambiar la apariencia , NavbarShared linea 15")}return Z.jsxs(dR,{children:[Z.jsx("div",{className:"left",children:Z.jsx("button",{className:"icon-button",children:Z.jsx("img",{src:"icon.svg",alt:"Botón"})})}),Z.jsx("div",{className:"center",children:Z.jsxs("h1",{children:["WELCOME TO ",Z.jsx("span",{className:"highlight",children:"LAZYFETCH®"})]})}),Z.jsx("div",{className:"right",children:Z.jsx("button",{onClick:n,children:"START"})})]})}const mR=At.div`
  width: 40vw;
  background-color: ${ht.secondary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;

  .highligth {
    color: ${ht.accent};
    font-weight: 900;
  }

  h2 {
    font-size: 1.8rem;
    color: black;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`,gR=At.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  img {
    width: 37.5rem;
    height: 21.125rem;
    border-radius: 0.5rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    background-color: black;
    color: ${ht.secondary};
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;function yR(){return Z.jsxs(mR,{children:[Z.jsxs("h2",{children:["HOW IT ",Z.jsx("span",{className:"highligth",children:"WORKS"})]}),Z.jsxs(gR,{children:[Z.jsx("img",{src:"GifHome.gif",alt:"Demo gif"}),Z.jsx("button",{children:"TRY NOW"})]})]})}const vR=At.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 40vw;
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${ht.accent};
    color: ${ht.secondary};
    padding: 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    img {
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 2;
      
    }

    h2 {
      font-size: 1.25rem;
      margin: 0;
    }

    p {
      font-size: 1rem;
      margin: 0.25rem 0 0;
      color: ${ht.secondary};
      text-align: justify;
    }

    &:hover {
      transform: translateY(-0.375rem);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    }
  }
`,_R=[{id:1,icon:"featuresIconEasy.png",title:"Easy to Use",description:"One line of code and you have your One line of code and you have your One line of code and you have yourOne line of code and you have yourOne line of code and you have your"},{id:2,icon:"featuresIconAssembly.png",title:"100% React",description:"Hooks designed to integrate seamlessly Hooks designed to integrate seamlessly Hooks designed to integrate seamlessly Hooks designed to integrate seamlessly Hooks designed to integrate seamlessly."},{id:3,icon:"featuresIconPopular.png",title:"Popular APIs",description:"Instant access to the most used APIs. Instant access to the most used APIs. Instant access to the most used APIs. Instant access to the most used APIs. Instant access to the most used APIs. Instant access to the most used APIs."}];function ER(){return Z.jsx(vR,{children:_R.map(r=>Z.jsxs("div",{children:[Z.jsx("img",{src:r.icon,alt:r.title}),Z.jsxs("div",{children:[Z.jsx("h2",{children:r.title}),Z.jsx("p",{children:r.description})]})]},r.id))})}const TR=fR`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bR=At.div`
  width: 100%;
  text-align: center;
  padding: 9rem 1rem 1rem;
  background-color: ${ht.secondary};

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: ${ht.primary};
    letter-spacing: 0.05em;
    animation: ${TR} 2s ease-out;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;function SR(){return Z.jsx(bR,{children:Z.jsx("h1",{children:`"THE WORLD'S FASTEST AND EASIEST WAY TO FETCH" `})})}const JE=At.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .success-message {
  color: #28a745;
  font-weight: bold;
  margin-top: 8px;
}

.error-message {
  color: #dc3545;
  font-weight: bold;
  margin-top: 8px;
}



  p.form-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p.intro-text {
    font-size: 0.9rem;
    font-style: italic;
    color: #ccc;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #888;
      font-size: 1rem;
    }

    button {
      padding: 10px;
      background-color: #1e90ff;
      border: none;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1c86ee;
      }
    }
  }
`,AR=()=>{};var q_={};/**
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
 */const eT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},wR=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},tT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,T=u>>2,S=(u&3)<<4|m>>4;let A=(m&15)<<2|y>>6,L=y&63;g||(L=64,f||(A=64)),s.push(n[T],n[S],n[A],n[L])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(eT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):wR(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new RR;const A=u<<2|m>>4;if(s.push(A),y!==64){const L=m<<4&240|y>>2;if(s.push(L),S!==64){const M=y<<6&192|S;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class RR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CR=function(r){const e=eT(r);return tT.encodeByteArray(e,!0)},Sh=function(r){return CR(r).replace(/\./g,"")},nT=function(r){try{return tT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OR=()=>IR().__FIREBASE_DEFAULTS__,DR=()=>{if(typeof process>"u"||typeof q_>"u")return;const r=q_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},NR=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&nT(r[1]);return e&&JSON.parse(e)},Zh=()=>{try{return AR()||OR()||DR()||NR()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},iT=r=>{var e,n;return(n=(e=Zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},xR=r=>{const e=iT(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rT=()=>{var r;return(r=Zh())===null||r===void 0?void 0:r.config},sT=r=>{var e;return(e=Zh())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class MR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aT(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function kR(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Sh(JSON.stringify(n)),Sh(JSON.stringify(f)),""].join(".")}const Bl={};function PR(){const r={prod:[],emulator:[]};for(const e of Object.keys(Bl))Bl[e]?r.emulator.push(e):r.prod.push(e);return r}function VR(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let F_=!1;function oT(r,e){if(typeof window>"u"||typeof document>"u"||!vo(window.location.host)||Bl[r]===e||Bl[r]||F_)return;Bl[r]=e;function n(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=PR().prod.length>0;function f(){const A=document.getElementById(s);A&&A.remove()}function m(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,L){A.setAttribute("width","24"),A.setAttribute("id",L),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{F_=!0,f()},A}function T(A,L){A.setAttribute("id",L),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=VR(s),L=n("text"),M=document.getElementById(L)||document.createElement("span"),G=n("learnmore"),$=document.getElementById(G)||document.createElement("a"),q=n("preprendIcon"),ne=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const te=A.element;m(te),T($,G);const ue=y();g(ne,q),te.append(ne,M,$,ue),document.body.appendChild(te)}u?(M.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function LR(){var r;const e=(r=Zh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zR(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function BR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HR(){const r=rn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function qR(){return!LR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FR(){try{return typeof indexedDB=="object"}catch{return!1}}function GR(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const $R="FirebaseError";class ur extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$R,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cu.prototype.create)}}class cu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?YR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new ur(o,m,s)}}function YR(r,e){return r.replace(KR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const KR=/\{\$([^}]+)}/g;function QR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function qs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(G_(u)&&G_(f)){if(!qs(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function G_(r){return r!==null&&typeof r=="object"}/**
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
 */function hu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ul(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ll(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function XR(r,e){const n=new ZR(r,e);return n.subscribe.bind(n)}class ZR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");WR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Tp),o.error===void 0&&(o.error=Tp),o.complete===void 0&&(o.complete=Tp);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WR(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Tp(){}/**
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
 */function ei(r){return r&&r._delegate?r._delegate:r}class Fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class JR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new MR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tC(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eC(r){return r===Vs?void 0:r}function tC(r){return r.instantiationMode==="EAGER"}/**
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
 */class nC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const iC={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},rC=xe.INFO,sC={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},aC=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=sC[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tm{constructor(e){this.name=e,this._logLevel=rC,this._logHandler=aC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const oC=(r,e)=>e.some(n=>r instanceof n);let $_,Y_;function lC(){return $_||($_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uC(){return Y_||(Y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lT=new WeakMap,Bp=new WeakMap,uT=new WeakMap,bp=new WeakMap,bm=new WeakMap;function cC(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Fr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&lT.set(n,r)}).catch(()=>{}),bm.set(e,r),e}function hC(r){if(Bp.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Bp.set(r,e)}let Hp={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Bp.get(r);if(e==="objectStoreNames")return r.objectStoreNames||uT.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function fC(r){Hp=r(Hp)}function dC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Sp(this),e,...n);return uT.set(s,e.sort?e.sort():[e]),Fr(s)}:uC().includes(r)?function(...e){return r.apply(Sp(this),e),Fr(lT.get(this))}:function(...e){return Fr(r.apply(Sp(this),e))}}function pC(r){return typeof r=="function"?dC(r):(r instanceof IDBTransaction&&hC(r),oC(r,lC())?new Proxy(r,Hp):r)}function Fr(r){if(r instanceof IDBRequest)return cC(r);if(bp.has(r))return bp.get(r);const e=pC(r);return e!==r&&(bp.set(r,e),bm.set(e,r)),e}const Sp=r=>bm.get(r);function mC(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Fr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Fr(f.result),g.oldVersion,g.newVersion,Fr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const gC=["get","getKey","getAll","getAllKeys","count"],yC=["put","add","delete","clear"],Ap=new Map;function K_(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ap.get(e))return Ap.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=yC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gC.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Ap.set(e,u),u}fC(r=>({...r,get:(e,n,s)=>K_(e,n)||r.get(e,n,s),has:(e,n)=>!!K_(e,n)||r.has(e,n)}));/**
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
 */class vC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_C(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _C(r){const e=r.getComponent();return e?.type==="VERSION"}const qp="@firebase/app",Q_="0.13.2";/**
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
 */const or=new Tm("@firebase/app"),EC="@firebase/app-compat",TC="@firebase/analytics-compat",bC="@firebase/analytics",SC="@firebase/app-check-compat",AC="@firebase/app-check",wC="@firebase/auth",RC="@firebase/auth-compat",CC="@firebase/database",IC="@firebase/data-connect",OC="@firebase/database-compat",DC="@firebase/functions",NC="@firebase/functions-compat",xC="@firebase/installations",MC="@firebase/installations-compat",kC="@firebase/messaging",PC="@firebase/messaging-compat",VC="@firebase/performance",UC="@firebase/performance-compat",LC="@firebase/remote-config",jC="@firebase/remote-config-compat",zC="@firebase/storage",BC="@firebase/storage-compat",HC="@firebase/firestore",qC="@firebase/ai",FC="@firebase/firestore-compat",GC="firebase",$C="11.10.0";/**
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
 */const Fp="[DEFAULT]",YC={[qp]:"fire-core",[EC]:"fire-core-compat",[bC]:"fire-analytics",[TC]:"fire-analytics-compat",[AC]:"fire-app-check",[SC]:"fire-app-check-compat",[wC]:"fire-auth",[RC]:"fire-auth-compat",[CC]:"fire-rtdb",[IC]:"fire-data-connect",[OC]:"fire-rtdb-compat",[DC]:"fire-fn",[NC]:"fire-fn-compat",[xC]:"fire-iid",[MC]:"fire-iid-compat",[kC]:"fire-fcm",[PC]:"fire-fcm-compat",[VC]:"fire-perf",[UC]:"fire-perf-compat",[LC]:"fire-rc",[jC]:"fire-rc-compat",[zC]:"fire-gcs",[BC]:"fire-gcs-compat",[HC]:"fire-fst",[FC]:"fire-fst-compat",[qC]:"fire-vertex","fire-js":"fire-js",[GC]:"fire-js-all"};/**
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
 */const Ah=new Map,KC=new Map,Gp=new Map;function X_(r,e){try{r.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function oo(r){const e=r.name;if(Gp.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Gp.set(e,r);for(const n of Ah.values())X_(n,r);for(const n of KC.values())X_(n,r);return!0}function Sm(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function zn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const QC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new cu("app","Firebase",QC);/**
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
 */class XC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const _o=$C;function cT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fp,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Gr.create("bad-app-name",{appName:String(o)});if(n||(n=rT()),!n)throw Gr.create("no-options");const u=Ah.get(o);if(u){if(qs(n,u.options)&&qs(s,u.config))return u;throw Gr.create("duplicate-app",{appName:o})}const f=new nC(o);for(const g of Gp.values())f.addComponent(g);const m=new XC(n,s,f);return Ah.set(o,m),m}function hT(r=Fp){const e=Ah.get(r);if(!e&&r===Fp&&rT())return cT();if(!e)throw Gr.create("no-app",{appName:r});return e}function $r(r,e,n){var s;let o=(s=YC[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(m.join(" "));return}oo(new Fs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const ZC="firebase-heartbeat-database",WC=1,Wl="firebase-heartbeat-store";let wp=null;function fT(){return wp||(wp=mC(ZC,WC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Gr.create("idb-open",{originalErrorMessage:r.message})})),wp}async function JC(r){try{const n=(await fT()).transaction(Wl),s=await n.objectStore(Wl).get(dT(r));return await n.done,s}catch(e){if(e instanceof ur)or.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e?.message});or.warn(n.message)}}}async function Z_(r,e){try{const s=(await fT()).transaction(Wl,"readwrite");await s.objectStore(Wl).put(e,dT(r)),await s.done}catch(n){if(n instanceof ur)or.warn(n.message);else{const s=Gr.create("idb-set",{originalErrorMessage:n?.message});or.warn(s.message)}}}function dT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const eI=1024,tI=30;class nI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=W_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>tI){const f=sI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){or.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=W_(),{heartbeatsToSend:s,unsentEntries:o}=iI(this._heartbeatsCache.heartbeats),u=Sh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return or.warn(n),""}}}function W_(){return new Date().toISOString().substring(0,10)}function iI(r,e=eI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),J_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),J_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FR()?GR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JC(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Z_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Z_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function J_(r){return Sh(JSON.stringify({version:2,heartbeats:r})).length}function sI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function aI(r){oo(new Fs("platform-logger",e=>new vC(e),"PRIVATE")),oo(new Fs("heartbeat",e=>new nI(e),"PRIVATE")),$r(qp,Q_,r),$r(qp,Q_,"esm2017"),$r("fire-js","")}aI("");var oI="firebase",lI="11.10.0";/**
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
 */$r(oI,lI,"app");function Am(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function pT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uI=pT,mT=new cu("auth","Firebase",pT());/**
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
 */const wh=new Tm("@firebase/auth");function cI(r,...e){wh.logLevel<=xe.WARN&&wh.warn(`Auth (${_o}): ${r}`,...e)}function ch(r,...e){wh.logLevel<=xe.ERROR&&wh.error(`Auth (${_o}): ${r}`,...e)}/**
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
 */function ti(r,...e){throw wm(r,...e)}function Ei(r,...e){return wm(r,...e)}function gT(r,e,n){const s=Object.assign(Object.assign({},uI()),{[e]:n});return new cu("auth","Firebase",s).create(e,{appName:r.name})}function nr(r){return gT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return mT.create(r,...e)}function Ee(r,e,...n){if(!r)throw wm(e,...n)}function Ji(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ch(e),new Error(e)}function lr(r,e){r||Ji(e)}/**
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
 */function $p(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function hI(){return e0()==="http:"||e0()==="https:"}function e0(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hI()||zR()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class fu{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=UR()||BR()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rm(r,e){lr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gI=new fu(3e4,6e4);function Wr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Jr(r,e,n,s,o={}){return vT(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=hu(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:g},u);return jR()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&vo(r.emulatorConfig.host)&&(y.credentials="include"),yT.fetch()(await _T(r,r.config.apiHost,n,m),y)})}async function vT(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},pI),e);try{const o=new vI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Qc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Qc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw Qc(r,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw gT(r,T,y);ti(r,T)}}catch(o){if(o instanceof ur)throw o;ti(r,"network-request-failed",{message:String(o)})}}async function du(r,e,n,s,o={}){const u=await Jr(r,e,n,s,o);return"mfaPendingCredential"in u&&ti(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function _T(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?Rm(r.config,o):`${r.config.apiScheme}://${o}`;return mI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function yI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ei(this.auth,"network-request-failed")),gI.get())})}}function Qc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ei(r,e,s);return o.customData._tokenResponse=n,o}function t0(r){return r!==void 0&&r.enterprise!==void 0}class _I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EI(r,e){return Jr(r,"GET","/v2/recaptchaConfig",Wr(r,e))}/**
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
 */async function TI(r,e){return Jr(r,"POST","/v1/accounts:delete",e)}async function Rh(r,e){return Jr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(r,e=!1){const n=ei(r),s=await n.getIdToken(e),o=Cm(s);Ee(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Hl(Rp(o.auth_time)),issuedAtTime:Hl(Rp(o.iat)),expirationTime:Hl(Rp(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Rp(r){return Number(r)*1e3}function Cm(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ch("JWT malformed, contained fewer than 3 sections"),null;try{const o=nT(n);return o?JSON.parse(o):(ch("Failed to decode base64 JWT payload"),null)}catch(o){return ch("Caught error parsing JWT payload as JSON",o?.toString()),null}}function n0(r){const e=Cm(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ur&&SI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function SI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class AI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hl(this.lastLoginAt),this.creationTime=Hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ch(r){var e;const n=r.auth,s=await r.getIdToken(),o=await Jl(r,Rh(n,{idToken:s}));Ee(o?.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?ET(u.providerUserInfo):[],m=RI(r.providerData,f),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!m?.length,T=g?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Yp(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,S)}async function wI(r){const e=ei(r);await Ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function ET(r){return r.map(e=>{var{providerId:n}=e,s=Am(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function CI(r,e){const n=await vT(r,{},async()=>{const s=hu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await _T(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&vo(r.emulatorConfig.host)&&(g.credentials="include"),yT.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function II(r,e){return Jr(r,"POST","/v2/accounts:revokeToken",Wr(r,e))}/**
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
 */class Za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):n0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=n0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await CI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Za;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ee(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Za,this.toJSON())}_performRefresh(){return Ji("not implemented")}}/**
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
 */function Lr(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=Am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Yp(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bI(this,e)}reload(){return wI(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ch(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Jl(this,TI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,g,y,T;const S=(s=n.displayName)!==null&&s!==void 0?s:void 0,A=(o=n.email)!==null&&o!==void 0?o:void 0,L=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,M=(f=n.photoURL)!==null&&f!==void 0?f:void 0,G=(m=n.tenantId)!==null&&m!==void 0?m:void 0,$=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,q=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ne=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:te,emailVerified:ue,isAnonymous:le,providerData:ce,stsTokenManager:I}=n;Ee(te&&I,e,"internal-error");const w=Za.fromJSON(this.name,I);Ee(typeof te=="string",e,"internal-error"),Lr(S,e.name),Lr(A,e.name),Ee(typeof ue=="boolean",e,"internal-error"),Ee(typeof le=="boolean",e,"internal-error"),Lr(L,e.name),Lr(M,e.name),Lr(G,e.name),Lr($,e.name),Lr(q,e.name),Lr(ne,e.name);const R=new Zn({uid:te,auth:e,email:A,emailVerified:ue,displayName:S,isAnonymous:le,photoURL:M,phoneNumber:L,tenantId:G,stsTokenManager:w,createdAt:q,lastLoginAt:ne});return ce&&Array.isArray(ce)&&(R.providerData=ce.map(N=>Object.assign({},N))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(e,n,s=!1){const o=new Za;o.updateFromServerResponse(n);const u=new Zn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ch(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?ET(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Za;m.updateFromIdToken(s);const g=new Zn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Yp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,y),g}}/**
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
 */const i0=new Map;function er(r){lr(r instanceof Function,"Expected a class definition");let e=i0.get(r);return e?(lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,i0.set(r,e),e)}/**
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
 */class TT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TT.type="NONE";const r0=TT;/**
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
 */function hh(r,e,n){return`firebase:${r}:${e}:${n}`}class Wa{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=hh(this.userKey,o.apiKey,u),this.fullPersistenceKey=hh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Rh(this.auth,{idToken:e}).catch(()=>{});return n?Zn._fromGetAccountInfoResponse(this.auth,n,e):null}return Zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wa(er(r0),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||er(r0);const f=hh(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const T=await y._get(f);if(T){let S;if(typeof T=="string"){const A=await Rh(e,{idToken:T}).catch(()=>{});if(!A)break;S=await Zn._fromGetAccountInfoResponse(e,A,T)}else S=Zn._fromJSON(e,T);y!==u&&(m=S),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Wa(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Wa(u,e,s))}}/**
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
 */function s0(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(IT(e))return"Webos";if(ST(e))return"Safari";if((e.includes("chrome/")||AT(e))&&!e.includes("edge/"))return"Chrome";if(RT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function bT(r=rn()){return/firefox\//i.test(r)}function ST(r=rn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AT(r=rn()){return/crios\//i.test(r)}function wT(r=rn()){return/iemobile/i.test(r)}function RT(r=rn()){return/android/i.test(r)}function CT(r=rn()){return/blackberry/i.test(r)}function IT(r=rn()){return/webos/i.test(r)}function Im(r=rn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function OI(r=rn()){var e;return Im(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DI(){return HR()&&document.documentMode===10}function OT(r=rn()){return Im(r)||RT(r)||IT(r)||CT(r)||/windows phone/i.test(r)||wT(r)}/**
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
 */function DT(r,e=[]){let n;switch(r){case"Browser":n=s0(rn());break;case"Worker":n=`${s0(rn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${s}`}/**
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
 */class NI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function xI(r,e={}){return Jr(r,"GET","/v2/passwordPolicy",Wr(r,e))}/**
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
 */const MI=6;class kI{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:MI,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class PI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a0(this),this.idTokenSubscription=new a0(this),this.beforeStateQueue=new NI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Wa.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rh(this,{idToken:e}),s=await Zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&g?.user&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ch(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(nr(this));const n=e?ei(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xI(this),n=new kI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cu("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await II(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await Wa.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&cI(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Zs(r){return ei(r)}class a0{constructor(e){this.auth=e,this.observer=null,this.addObserver=XR(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(r){Wh=r}function NT(r){return Wh.loadJS(r)}function UI(){return Wh.recaptchaEnterpriseScript}function LI(){return Wh.gapiScript}function jI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class zI{constructor(){this.enterprise=new BI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const HI="recaptcha-enterprise",xT="NO_RECAPTCHA";class qI{constructor(e){this.type=HI,this.auth=Zs(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{EI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new _I(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;t0(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(xT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&t0(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=UI();g.length!==0&&(g+=m),NT(g).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function o0(r,e,n,s=!1,o=!1){const u=new qI(r);let f;if(o)f=xT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Kp(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await o0(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await o0(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function FI(r,e){const n=Sm(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(qs(u,e??{}))return o;ti(o,"already-initialized")}return n.initialize({options:e})}function GI(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(er);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function $I(r,e,n){const s=Zs(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=MT(e),{host:f,port:m}=YI(e),g=m===null?"":`:${m}`,y={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(qs(y,s.config.emulator)&&qs(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,vo(f)?(aT(`${u}//${f}${g}`),oT("Auth",!0)):KI()}function MT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function YI(r){const e=MT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:l0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:l0(f)}}}function l0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function KI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Om{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ji("not implemented")}_getIdTokenResponse(e){return Ji("not implemented")}_linkToIdToken(e,n){return Ji("not implemented")}_getReauthenticationResolver(e){return Ji("not implemented")}}async function QI(r,e){return Jr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XI(r,e){return du(r,"POST","/v1/accounts:signInWithPassword",Wr(r,e))}/**
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
 */async function ZI(r,e){return du(r,"POST","/v1/accounts:signInWithEmailLink",Wr(r,e))}async function WI(r,e){return du(r,"POST","/v1/accounts:signInWithEmailLink",Wr(r,e))}/**
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
 */class eu extends Om{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new eu(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new eu(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kp(e,n,"signInWithPassword",XI);case"emailLink":return ZI(e,{email:this._email,oobCode:this._password});default:ti(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kp(e,s,"signUpPassword",QI);case"emailLink":return WI(e,{idToken:n,email:this._email,oobCode:this._password});default:ti(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ja(r,e){return du(r,"POST","/v1/accounts:signInWithIdp",Wr(r,e))}/**
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
 */const JI="http://localhost";class Gs extends Om{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ti("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=Am(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Gs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Ja(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ja(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ja(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hu(n)}return e}}/**
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
 */function eO(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tO(r){const e=Ul(Ll(r)).link,n=e?Ul(Ll(e)).deep_link_id:null,s=Ul(Ll(r)).deep_link_id;return(s?Ul(Ll(s)).link:null)||s||n||e||r}class Dm{constructor(e){var n,s,o,u,f,m;const g=Ul(Ll(e)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,S=eO((o=g.mode)!==null&&o!==void 0?o:null);Ee(y&&T&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=tO(e);try{return new Dm(n)}catch{return null}}}/**
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
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,n){return eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Dm.parseLink(n);return Ee(s,"argument-error"),eu._fromEmailAndCode(e,s.code,s.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pu extends kT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zr extends pu{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
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
 */class Br extends pu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Br.credential(n,s)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
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
 */class Hr extends pu{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
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
 */class qr extends pu{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return qr.credential(n,s)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
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
 */async function nO(r,e){return du(r,"POST","/v1/accounts:signUp",Wr(r,e))}/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Zn._fromIdTokenResponse(e,s,o),f=u0(s);return new $s({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=u0(s);return new $s({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function u0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ih extends ur{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ih.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Ih(e,n,s,o)}}function PT(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ih._fromErrorAndOperation(r,u,e,s):u})}async function iO(r,e,n=!1){const s=await Jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return $s._forOperation(r,"link",s)}/**
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
 */async function rO(r,e,n=!1){const{auth:s}=r;if(zn(s.app))return Promise.reject(nr(s));const o="reauthenticate";try{const u=await Jl(r,PT(s,o,e,r),n);Ee(u.idToken,s,"internal-error");const f=Cm(u.idToken);Ee(f,s,"internal-error");const{sub:m}=f;return Ee(r.uid===m,s,"user-mismatch"),$s._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&ti(s,"user-mismatch"),u}}/**
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
 */async function VT(r,e,n=!1){if(zn(r.app))return Promise.reject(nr(r));const s="signIn",o=await PT(r,s,e),u=await $s._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function sO(r,e){return VT(Zs(r),e)}/**
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
 */async function UT(r){const e=Zs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aO(r,e,n){if(zn(r.app))return Promise.reject(nr(r));const s=Zs(r),f=await Kp(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nO).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&UT(r),g}),m=await $s._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function oO(r,e,n){return zn(r.app)?Promise.reject(nr(r)):sO(ei(r),Eo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&UT(r),s})}function lO(r,e,n,s){return ei(r).onIdTokenChanged(e,n,s)}function uO(r,e,n){return ei(r).beforeAuthStateChanged(e,n)}const Oh="__sak";/**
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
 */class LT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oh,"1"),this.storage.removeItem(Oh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cO=1e3,hO=10;class jT extends LT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);DI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,hO):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jT.type="LOCAL";const fO=jT;/**
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
 */class zT extends LT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zT.type="SESSION";const BT=zT;/**
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
 */function dO(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Jh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),g=await dO(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jh.receivers=[];/**
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
 */function Nm(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class pO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const y=Nm("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(A.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Ti(){return window}function mO(r){Ti().location.href=r}/**
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
 */function HT(){return typeof Ti().WorkerGlobalScope<"u"&&typeof Ti().importScripts=="function"}async function gO(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yO(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function vO(){return HT()?self:null}/**
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
 */const qT="firebaseLocalStorageDb",_O=1,Dh="firebaseLocalStorage",FT="fbase_key";class mu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ef(r,e){return r.transaction([Dh],e?"readwrite":"readonly").objectStore(Dh)}function EO(){const r=indexedDB.deleteDatabase(qT);return new mu(r).toPromise()}function Qp(){const r=indexedDB.open(qT,_O);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Dh,{keyPath:FT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Dh)?e(s):(s.close(),await EO(),e(await Qp()))})})}async function c0(r,e,n){const s=ef(r,!0).put({[FT]:e,value:n});return new mu(s).toPromise()}async function TO(r,e){const n=ef(r,!1).get(e),s=await new mu(n).toPromise();return s===void 0?null:s.value}function h0(r,e){const n=ef(r,!0).delete(e);return new mu(n).toPromise()}const bO=800,SO=3;class GT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>SO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jh._getInstance(vO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gO(),!this.activeServiceWorker)return;this.sender=new pO(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qp();return await c0(e,Oh,"1"),await h0(e,Oh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>c0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TO(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ef(o,!1).getAll();return new mu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GT.type="LOCAL";const AO=GT;new fu(3e4,6e4);/**
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
 */function wO(r,e){return e?er(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class xm extends Om{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ja(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ja(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ja(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RO(r){return VT(r.auth,new xm(r),r.bypassAuthState)}function CO(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),rO(n,new xm(r),r.bypassAuthState)}async function IO(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),iO(n,new xm(r),r.bypassAuthState)}/**
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
 */class $T{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RO;case"linkViaPopup":case"linkViaRedirect":return IO;case"reauthViaPopup":case"reauthViaRedirect":return CO;default:ti(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OO=new fu(2e3,1e4);class Xa extends $T{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xa.currentPopupAction&&Xa.currentPopupAction.cancel(),Xa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ei(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ei(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ei(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OO.get())};e()}}Xa.currentPopupAction=null;/**
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
 */const DO="pendingRedirect",fh=new Map;class NO extends $T{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fh.get(this.auth._key());if(!e){try{const s=await xO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fh.set(this.auth._key(),e)}return this.bypassAuthState||fh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xO(r,e){const n=PO(e),s=kO(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function MO(r,e){fh.set(r._key(),e)}function kO(r){return er(r._redirectPersistence)}function PO(r){return hh(DO,r.config.apiKey,r.name)}async function VO(r,e,n=!1){if(zn(r.app))return Promise.reject(nr(r));const s=Zs(r),o=wO(s,e),f=await new NO(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const UO=10*60*1e3;class LO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!YT(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ei(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UO&&this.cachedEventUids.clear(),this.cachedEventUids.has(f0(e))}saveEventToCache(e){this.cachedEventUids.add(f0(e)),this.lastProcessedEventTime=Date.now()}}function f0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function YT({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function jO(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YT(r);default:return!1}}/**
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
 */async function zO(r,e={}){return Jr(r,"GET","/v1/projects",e)}/**
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
 */const BO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HO=/^https?/;async function qO(r){if(r.config.emulator)return;const{authorizedDomains:e}=await zO(r);for(const n of e)try{if(FO(n))return}catch{}ti(r,"unauthorized-domain")}function FO(r){const e=$p(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!HO.test(n))return!1;if(BO.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const GO=new fu(3e4,6e4);function d0(){const r=Ti().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function $O(r){return new Promise((e,n)=>{var s,o,u;function f(){d0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{d0(),n(Ei(r,"network-request-failed"))},timeout:GO.get()})}if(!((o=(s=Ti().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Ti().gapi)===null||u===void 0)&&u.load)f();else{const m=jI("iframefcb");return Ti()[m]=()=>{gapi.load?f():n(Ei(r,"network-request-failed"))},NT(`${LI()}?onload=${m}`).catch(g=>n(g))}}).catch(e=>{throw dh=null,e})}let dh=null;function YO(r){return dh=dh||$O(r),dh}/**
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
 */const KO=new fu(5e3,15e3),QO="__/auth/iframe",XO="emulator/auth/iframe",ZO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JO(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Rm(e,XO):`https://${r.config.authDomain}/${QO}`,s={apiKey:e.apiKey,appName:r.name,v:_o},o=WO.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${hu(s).slice(1)}`}async function eD(r){const e=await YO(r),n=Ti().gapi;return Ee(n,r,"internal-error"),e.open({where:document.body,url:JO(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ei(r,"network-request-failed"),m=Ti().setTimeout(()=>{u(f)},KO.get());function g(){Ti().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
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
 */const tD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nD=500,iD=600,rD="_blank",sD="http://localhost";class p0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aD(r,e,n,s=nD,o=iD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},tD),{width:s.toString(),height:o.toString(),top:u,left:f}),y=rn().toLowerCase();n&&(m=AT(y)?rD:n),bT(y)&&(e=e||sD,g.scrollbars="yes");const T=Object.entries(g).reduce((A,[L,M])=>`${A}${L}=${M},`,"");if(OI(y)&&m!=="_self")return oD(e||"",m),new p0(null);const S=window.open(e||"",m,T);Ee(S,r,"popup-blocked");try{S.focus()}catch{}return new p0(S)}function oD(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const lD="__/auth/handler",uD="emulator/auth/handler",cD=encodeURIComponent("fac");async function m0(r,e,n,s,o,u){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:_o,eventId:o};if(e instanceof kT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",QR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(e instanceof pu){const T=e.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),y=g?`#${cD}=${encodeURIComponent(g)}`:"";return`${hD(r)}?${hu(m).slice(1)}${y}`}function hD({config:r}){return r.emulator?Rm(r,uD):`https://${r.authDomain}/${lD}`}/**
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
 */const Cp="webStorageSupport";class fD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BT,this._completeRedirectFn=VO,this._overrideRedirectResult=MO}async _openPopup(e,n,s,o){var u;lr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await m0(e,n,s,$p(),o);return aD(e,f,Nm())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await m0(e,n,s,$p(),o);return mO(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(lr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await eD(e),s=new LO(e);return n.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cp,{type:Cp},o=>{var u;const f=(u=o?.[0])===null||u===void 0?void 0:u[Cp];f!==void 0&&n(!!f),ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OT()||ST()||Im()}}const dD=fD;var g0="@firebase/auth",y0="1.10.8";/**
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
 */class pD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gD(r){oo(new Fs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Ee(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DT(r)},y=new PI(s,o,u,g);return GI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),oo(new Fs("auth-internal",e=>{const n=Zs(e.getProvider("auth").getImmediate());return(s=>new pD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$r(g0,y0,mD(r)),$r(g0,y0,"esm2017")}/**
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
 */const yD=5*60,vD=sT("authIdTokenMaxAge")||yD;let v0=null;const _D=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vD)return;const o=n?.token;v0!==o&&(v0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ED(r=hT()){const e=Sm(r,"auth");if(e.isInitialized())return e.getImmediate();const n=FI(r,{popupRedirectResolver:dD,persistence:[AO,fO,BT]}),s=sT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=_D(u.toString());uO(n,f,()=>f(n.currentUser)),lO(n,m=>f(m))}}const o=iT("auth");return o&&$I(n,`http://${o}`),n}function TD(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}VI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Ei("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",TD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gD("Browser");var _0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,w){function R(){}R.prototype=w.prototype,I.D=w.prototype,I.prototype=new R,I.prototype.constructor=I,I.C=function(N,k,V){for(var O=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)O[wt-2]=arguments[wt];return w.prototype[k].apply(N,O)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,w,R){R||(R=0);var N=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)N[k]=w.charCodeAt(R++)|w.charCodeAt(R++)<<8|w.charCodeAt(R++)<<16|w.charCodeAt(R++)<<24;else for(k=0;16>k;++k)N[k]=w[R++]|w[R++]<<8|w[R++]<<16|w[R++]<<24;w=I.g[0],R=I.g[1],k=I.g[2];var V=I.g[3],O=w+(V^R&(k^V))+N[0]+3614090360&4294967295;w=R+(O<<7&4294967295|O>>>25),O=V+(k^w&(R^k))+N[1]+3905402710&4294967295,V=w+(O<<12&4294967295|O>>>20),O=k+(R^V&(w^R))+N[2]+606105819&4294967295,k=V+(O<<17&4294967295|O>>>15),O=R+(w^k&(V^w))+N[3]+3250441966&4294967295,R=k+(O<<22&4294967295|O>>>10),O=w+(V^R&(k^V))+N[4]+4118548399&4294967295,w=R+(O<<7&4294967295|O>>>25),O=V+(k^w&(R^k))+N[5]+1200080426&4294967295,V=w+(O<<12&4294967295|O>>>20),O=k+(R^V&(w^R))+N[6]+2821735955&4294967295,k=V+(O<<17&4294967295|O>>>15),O=R+(w^k&(V^w))+N[7]+4249261313&4294967295,R=k+(O<<22&4294967295|O>>>10),O=w+(V^R&(k^V))+N[8]+1770035416&4294967295,w=R+(O<<7&4294967295|O>>>25),O=V+(k^w&(R^k))+N[9]+2336552879&4294967295,V=w+(O<<12&4294967295|O>>>20),O=k+(R^V&(w^R))+N[10]+4294925233&4294967295,k=V+(O<<17&4294967295|O>>>15),O=R+(w^k&(V^w))+N[11]+2304563134&4294967295,R=k+(O<<22&4294967295|O>>>10),O=w+(V^R&(k^V))+N[12]+1804603682&4294967295,w=R+(O<<7&4294967295|O>>>25),O=V+(k^w&(R^k))+N[13]+4254626195&4294967295,V=w+(O<<12&4294967295|O>>>20),O=k+(R^V&(w^R))+N[14]+2792965006&4294967295,k=V+(O<<17&4294967295|O>>>15),O=R+(w^k&(V^w))+N[15]+1236535329&4294967295,R=k+(O<<22&4294967295|O>>>10),O=w+(k^V&(R^k))+N[1]+4129170786&4294967295,w=R+(O<<5&4294967295|O>>>27),O=V+(R^k&(w^R))+N[6]+3225465664&4294967295,V=w+(O<<9&4294967295|O>>>23),O=k+(w^R&(V^w))+N[11]+643717713&4294967295,k=V+(O<<14&4294967295|O>>>18),O=R+(V^w&(k^V))+N[0]+3921069994&4294967295,R=k+(O<<20&4294967295|O>>>12),O=w+(k^V&(R^k))+N[5]+3593408605&4294967295,w=R+(O<<5&4294967295|O>>>27),O=V+(R^k&(w^R))+N[10]+38016083&4294967295,V=w+(O<<9&4294967295|O>>>23),O=k+(w^R&(V^w))+N[15]+3634488961&4294967295,k=V+(O<<14&4294967295|O>>>18),O=R+(V^w&(k^V))+N[4]+3889429448&4294967295,R=k+(O<<20&4294967295|O>>>12),O=w+(k^V&(R^k))+N[9]+568446438&4294967295,w=R+(O<<5&4294967295|O>>>27),O=V+(R^k&(w^R))+N[14]+3275163606&4294967295,V=w+(O<<9&4294967295|O>>>23),O=k+(w^R&(V^w))+N[3]+4107603335&4294967295,k=V+(O<<14&4294967295|O>>>18),O=R+(V^w&(k^V))+N[8]+1163531501&4294967295,R=k+(O<<20&4294967295|O>>>12),O=w+(k^V&(R^k))+N[13]+2850285829&4294967295,w=R+(O<<5&4294967295|O>>>27),O=V+(R^k&(w^R))+N[2]+4243563512&4294967295,V=w+(O<<9&4294967295|O>>>23),O=k+(w^R&(V^w))+N[7]+1735328473&4294967295,k=V+(O<<14&4294967295|O>>>18),O=R+(V^w&(k^V))+N[12]+2368359562&4294967295,R=k+(O<<20&4294967295|O>>>12),O=w+(R^k^V)+N[5]+4294588738&4294967295,w=R+(O<<4&4294967295|O>>>28),O=V+(w^R^k)+N[8]+2272392833&4294967295,V=w+(O<<11&4294967295|O>>>21),O=k+(V^w^R)+N[11]+1839030562&4294967295,k=V+(O<<16&4294967295|O>>>16),O=R+(k^V^w)+N[14]+4259657740&4294967295,R=k+(O<<23&4294967295|O>>>9),O=w+(R^k^V)+N[1]+2763975236&4294967295,w=R+(O<<4&4294967295|O>>>28),O=V+(w^R^k)+N[4]+1272893353&4294967295,V=w+(O<<11&4294967295|O>>>21),O=k+(V^w^R)+N[7]+4139469664&4294967295,k=V+(O<<16&4294967295|O>>>16),O=R+(k^V^w)+N[10]+3200236656&4294967295,R=k+(O<<23&4294967295|O>>>9),O=w+(R^k^V)+N[13]+681279174&4294967295,w=R+(O<<4&4294967295|O>>>28),O=V+(w^R^k)+N[0]+3936430074&4294967295,V=w+(O<<11&4294967295|O>>>21),O=k+(V^w^R)+N[3]+3572445317&4294967295,k=V+(O<<16&4294967295|O>>>16),O=R+(k^V^w)+N[6]+76029189&4294967295,R=k+(O<<23&4294967295|O>>>9),O=w+(R^k^V)+N[9]+3654602809&4294967295,w=R+(O<<4&4294967295|O>>>28),O=V+(w^R^k)+N[12]+3873151461&4294967295,V=w+(O<<11&4294967295|O>>>21),O=k+(V^w^R)+N[15]+530742520&4294967295,k=V+(O<<16&4294967295|O>>>16),O=R+(k^V^w)+N[2]+3299628645&4294967295,R=k+(O<<23&4294967295|O>>>9),O=w+(k^(R|~V))+N[0]+4096336452&4294967295,w=R+(O<<6&4294967295|O>>>26),O=V+(R^(w|~k))+N[7]+1126891415&4294967295,V=w+(O<<10&4294967295|O>>>22),O=k+(w^(V|~R))+N[14]+2878612391&4294967295,k=V+(O<<15&4294967295|O>>>17),O=R+(V^(k|~w))+N[5]+4237533241&4294967295,R=k+(O<<21&4294967295|O>>>11),O=w+(k^(R|~V))+N[12]+1700485571&4294967295,w=R+(O<<6&4294967295|O>>>26),O=V+(R^(w|~k))+N[3]+2399980690&4294967295,V=w+(O<<10&4294967295|O>>>22),O=k+(w^(V|~R))+N[10]+4293915773&4294967295,k=V+(O<<15&4294967295|O>>>17),O=R+(V^(k|~w))+N[1]+2240044497&4294967295,R=k+(O<<21&4294967295|O>>>11),O=w+(k^(R|~V))+N[8]+1873313359&4294967295,w=R+(O<<6&4294967295|O>>>26),O=V+(R^(w|~k))+N[15]+4264355552&4294967295,V=w+(O<<10&4294967295|O>>>22),O=k+(w^(V|~R))+N[6]+2734768916&4294967295,k=V+(O<<15&4294967295|O>>>17),O=R+(V^(k|~w))+N[13]+1309151649&4294967295,R=k+(O<<21&4294967295|O>>>11),O=w+(k^(R|~V))+N[4]+4149444226&4294967295,w=R+(O<<6&4294967295|O>>>26),O=V+(R^(w|~k))+N[11]+3174756917&4294967295,V=w+(O<<10&4294967295|O>>>22),O=k+(w^(V|~R))+N[2]+718787259&4294967295,k=V+(O<<15&4294967295|O>>>17),O=R+(V^(k|~w))+N[9]+3951481745&4294967295,I.g[0]=I.g[0]+w&4294967295,I.g[1]=I.g[1]+(k+(O<<21&4294967295|O>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+V&4294967295}s.prototype.u=function(I,w){w===void 0&&(w=I.length);for(var R=w-this.blockSize,N=this.B,k=this.h,V=0;V<w;){if(k==0)for(;V<=R;)o(this,I,V),V+=this.blockSize;if(typeof I=="string"){for(;V<w;)if(N[k++]=I.charCodeAt(V++),k==this.blockSize){o(this,N),k=0;break}}else for(;V<w;)if(N[k++]=I[V++],k==this.blockSize){o(this,N),k=0;break}}this.h=k,this.o+=w},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var w=1;w<I.length-8;++w)I[w]=0;var R=8*this.o;for(w=I.length-8;w<I.length;++w)I[w]=R&255,R/=256;for(this.u(I),I=Array(16),w=R=0;4>w;++w)for(var N=0;32>N;N+=8)I[R++]=this.g[w]>>>N&255;return I};function u(I,w){var R=m;return Object.prototype.hasOwnProperty.call(R,I)?R[I]:R[I]=w(I)}function f(I,w){this.h=w;for(var R=[],N=!0,k=I.length-1;0<=k;k--){var V=I[k]|0;N&&V==w||(R[k]=V,N=!1)}this.g=R}var m={};function g(I){return-128<=I&&128>I?u(I,function(w){return new f([w|0],0>w?-1:0)}):new f([I|0],0>I?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return S;if(0>I)return $(y(-I));for(var w=[],R=1,N=0;I>=R;N++)w[N]=I/R|0,R*=4294967296;return new f(w,0)}function T(I,w){if(I.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I.charAt(0)=="-")return $(T(I.substring(1),w));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(w,8)),N=S,k=0;k<I.length;k+=8){var V=Math.min(8,I.length-k),O=parseInt(I.substring(k,k+V),w);8>V?(V=y(Math.pow(w,V)),N=N.j(V).add(y(O))):(N=N.j(R),N=N.add(y(O)))}return N}var S=g(0),A=g(1),L=g(16777216);r=f.prototype,r.m=function(){if(G(this))return-$(this).m();for(var I=0,w=1,R=0;R<this.g.length;R++){var N=this.i(R);I+=(0<=N?N:4294967296+N)*w,w*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(M(this))return"0";if(G(this))return"-"+$(this).toString(I);for(var w=y(Math.pow(I,6)),R=this,N="";;){var k=ue(R,w).g;R=q(R,k.j(w));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(I);if(R=k,M(R))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function M(I){if(I.h!=0)return!1;for(var w=0;w<I.g.length;w++)if(I.g[w]!=0)return!1;return!0}function G(I){return I.h==-1}r.l=function(I){return I=q(this,I),G(I)?-1:M(I)?0:1};function $(I){for(var w=I.g.length,R=[],N=0;N<w;N++)R[N]=~I.g[N];return new f(R,~I.h).add(A)}r.abs=function(){return G(this)?$(this):this},r.add=function(I){for(var w=Math.max(this.g.length,I.g.length),R=[],N=0,k=0;k<=w;k++){var V=N+(this.i(k)&65535)+(I.i(k)&65535),O=(V>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);N=O>>>16,V&=65535,O&=65535,R[k]=O<<16|V}return new f(R,R[R.length-1]&-2147483648?-1:0)};function q(I,w){return I.add($(w))}r.j=function(I){if(M(this)||M(I))return S;if(G(this))return G(I)?$(this).j($(I)):$($(this).j(I));if(G(I))return $(this.j($(I)));if(0>this.l(L)&&0>I.l(L))return y(this.m()*I.m());for(var w=this.g.length+I.g.length,R=[],N=0;N<2*w;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<I.g.length;k++){var V=this.i(N)>>>16,O=this.i(N)&65535,wt=I.i(k)>>>16,et=I.i(k)&65535;R[2*N+2*k]+=O*et,ne(R,2*N+2*k),R[2*N+2*k+1]+=V*et,ne(R,2*N+2*k+1),R[2*N+2*k+1]+=O*wt,ne(R,2*N+2*k+1),R[2*N+2*k+2]+=V*wt,ne(R,2*N+2*k+2)}for(N=0;N<w;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=w;N<2*w;N++)R[N]=0;return new f(R,0)};function ne(I,w){for(;(I[w]&65535)!=I[w];)I[w+1]+=I[w]>>>16,I[w]&=65535,w++}function te(I,w){this.g=I,this.h=w}function ue(I,w){if(M(w))throw Error("division by zero");if(M(I))return new te(S,S);if(G(I))return w=ue($(I),w),new te($(w.g),$(w.h));if(G(w))return w=ue(I,$(w)),new te($(w.g),w.h);if(30<I.g.length){if(G(I)||G(w))throw Error("slowDivide_ only works with positive integers.");for(var R=A,N=w;0>=N.l(I);)R=le(R),N=le(N);var k=ce(R,1),V=ce(N,1);for(N=ce(N,2),R=ce(R,2);!M(N);){var O=V.add(N);0>=O.l(I)&&(k=k.add(R),V=O),N=ce(N,1),R=ce(R,1)}return w=q(I,k.j(w)),new te(k,w)}for(k=S;0<=I.l(w);){for(R=Math.max(1,Math.floor(I.m()/w.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=y(R),O=V.j(w);G(O)||0<O.l(I);)R-=N,V=y(R),O=V.j(w);M(V)&&(V=A),k=k.add(V),I=q(I,O)}return new te(k,I)}r.A=function(I){return ue(this,I).h},r.and=function(I){for(var w=Math.max(this.g.length,I.g.length),R=[],N=0;N<w;N++)R[N]=this.i(N)&I.i(N);return new f(R,this.h&I.h)},r.or=function(I){for(var w=Math.max(this.g.length,I.g.length),R=[],N=0;N<w;N++)R[N]=this.i(N)|I.i(N);return new f(R,this.h|I.h)},r.xor=function(I){for(var w=Math.max(this.g.length,I.g.length),R=[],N=0;N<w;N++)R[N]=this.i(N)^I.i(N);return new f(R,this.h^I.h)};function le(I){for(var w=I.g.length+1,R=[],N=0;N<w;N++)R[N]=I.i(N)<<1|I.i(N-1)>>>31;return new f(R,I.h)}function ce(I,w){var R=w>>5;w%=32;for(var N=I.g.length-R,k=[],V=0;V<N;V++)k[V]=0<w?I.i(V+R)>>>w|I.i(V+R+1)<<32-w:I.i(V+R);return new f(k,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Mm=f}).apply(typeof _0<"u"?_0:typeof self<"u"?self:typeof window<"u"?window:{});var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KT,jl,QT,ph,Xp,XT,ZT,WT;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xc=="object"&&Xc];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)e:{var v=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var U=c[b];if(!(U in v))break e;v=v[U]}c=c[c.length-1],b=v[c],p=p(b),p!=b&&p!=null&&e(v,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var v=0,b=!1,U={next:function(){if(!b&&v<c.length){var F=v++;return{value:p(F,c[F]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function T(c,p,v){return c.call.apply(c.bind,arguments)}function S(c,p,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),c.apply(p,U)}}return function(){return c.apply(p,arguments)}}function A(c,p,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:S,A.apply(null,arguments)}function L(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function M(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,U,F){for(var ae=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)ae[Me-2]=arguments[Me];return p.prototype[U].apply(b,ae)}}function G(c){const p=c.length;if(0<p){const v=Array(p);for(let b=0;b<p;b++)v[b]=c[b];return v}return[]}function $(c,p){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(g(b)){const U=c.length||0,F=b.length||0;c.length=U+F;for(let ae=0;ae<F;ae++)c[U+ae]=b[ae]}else c.push(b)}}class q{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ne(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ue(c){return ue[" "](c),c}ue[" "]=function(){};var le=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ce(c,p,v){for(const b in c)p.call(v,c[b],b,c)}function I(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function w(c){const p={};for(const v in c)p[v]=c[v];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,p){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)c[v]=b[v];for(let F=0;F<R.length;F++)v=R[F],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function k(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function V(c){m.setTimeout(()=>{throw c},0)}function O(){var c=Se;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class wt{constructor(){this.h=this.g=null}add(p,v){const b=et.get();b.set(p,v),this.h?this.h.next=b:this.g=b,this.h=b}}var et=new q(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,de=!1,Se=new wt,D=()=>{const c=m.Promise.resolve(void 0);oe=()=>{c.then(J)}};var J=()=>{for(var c;c=O();){try{c.h.call(c.g)}catch(v){V(v)}var p=et;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}de=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return c}();function be(c,p){if(re.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(le){e:{try{ue(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ge[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}M(be,re);var ge={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),Le=0;function Nt(c,p,v,b,U){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!b,this.ha=U,this.key=++Le,this.da=this.fa=!1}function Rn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function un(c){this.src=c,this.g={},this.h=0}un.prototype.add=function(c,p,v,b,U){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var ae=es(c,p,b,U);return-1<ae?(p=c[ae],v||(p.fa=!1)):(p=new Nt(p,this.src,F,!!b,U),p.fa=v,c.push(p)),p};function Qt(c,p){var v=p.type;if(v in c.g){var b=c.g[v],U=Array.prototype.indexOf.call(b,p,void 0),F;(F=0<=U)&&Array.prototype.splice.call(b,U,1),F&&(Rn(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function es(c,p,v,b){for(var U=0;U<c.length;++U){var F=c[U];if(!F.da&&F.listener==p&&F.capture==!!v&&F.ha==b)return U}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),So={};function bu(c,p,v,b,U){if(Array.isArray(p)){for(var F=0;F<p.length;F++)bu(c,p[F],v,b,U);return null}return v=Su(v),c&&c[st]?c.K(p,v,y(b)?!!b.capture:!1,U):Cn(c,p,v,!1,b,U)}function Cn(c,p,v,b,U,F){if(!p)throw Error("Invalid event type");var ae=y(U)?!!U.capture:!!U,Me=ta(c);if(Me||(c[ts]=Me=new un(c)),v=Me.add(p,v,b,ae,F),v.proxy)return v;if(b=uf(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)pe||(U=ae),U===void 0&&(U=!1),c.addEventListener(p.toString(),b,U);else if(c.attachEvent)c.attachEvent(ns(p.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function uf(){function c(v){return p.call(c.src,c.listener,v)}const p=cf;return c}function Ao(c,p,v,b,U){if(Array.isArray(p))for(var F=0;F<p.length;F++)Ao(c,p[F],v,b,U);else b=y(b)?!!b.capture:!!b,v=Su(v),c&&c[st]?(c=c.i,p=String(p).toString(),p in c.g&&(F=c.g[p],v=es(F,v,b,U),-1<v&&(Rn(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete c.g[p],c.h--)))):c&&(c=ta(c))&&(p=c.g[p.toString()],c=-1,p&&(c=es(p,v,b,U)),(v=-1<c?p[c]:null)&&ea(v))}function ea(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[st])Qt(p.i,c);else{var v=c.type,b=c.proxy;p.removeEventListener?p.removeEventListener(v,b,c.capture):p.detachEvent?p.detachEvent(ns(v),b):p.addListener&&p.removeListener&&p.removeListener(b),(v=ta(p))?(Qt(v,c),v.h==0&&(v.src=null,p[ts]=null)):Rn(c)}}}function ns(c){return c in So?So[c]:So[c]="on"+c}function cf(c,p){if(c.da)c=!0;else{p=new be(p,this);var v=c.listener,b=c.ha||c.src;c.fa&&ea(c),c=v.call(b,p)}return c}function ta(c){return c=c[ts],c instanceof un?c:null}var wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Su(c){return typeof c=="function"?c:(c[wo]||(c[wo]=function(p){return c.handleEvent(p)}),c[wo])}function lt(){se.call(this),this.i=new un(this),this.M=this,this.F=null}M(lt,se),lt.prototype[st]=!0,lt.prototype.removeEventListener=function(c,p,v,b){Ao(this,c,p,v,b)};function qe(c,p){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=p.type||p,typeof p=="string")p=new re(p,c);else if(p instanceof re)p.target=p.target||c;else{var U=p;p=new re(b,c),N(p,U)}if(U=!0,v)for(var F=v.length-1;0<=F;F--){var ae=p.g=v[F];U=gn(ae,b,!0,p)&&U}if(ae=p.g=c,U=gn(ae,b,!0,p)&&U,U=gn(ae,b,!1,p)&&U,v)for(F=0;F<v.length;F++)ae=p.g=v[F],U=gn(ae,b,!1,p)&&U}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],b=0;b<v.length;b++)Rn(v[b]);delete c.g[p],c.h--}}this.F=null},lt.prototype.K=function(c,p,v,b){return this.i.add(String(c),p,!1,v,b)},lt.prototype.L=function(c,p,v,b){return this.i.add(String(c),p,!0,v,b)};function gn(c,p,v,b){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,F=0;F<p.length;++F){var ae=p[F];if(ae&&!ae.da&&ae.capture==v){var Me=ae.listener,Ct=ae.ha||ae.src;ae.fa&&Qt(c.i,ae),U=Me.call(Ct,b)!==!1&&U}}return U&&!b.defaultPrevented}function Xt(c,p,v){if(typeof c=="function")v&&(c=A(c,v));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function Au(c){c.g=Xt(()=>{c.g=null,c.i&&(c.i=!1,Au(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class hf extends se{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Au(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(c){se.call(this),this.h=c,this.g={}}M(is,se);var rs=[];function ss(c){ce(c.g,function(p,v){this.g.hasOwnProperty(v)&&ea(p)},c),c.g={}}is.prototype.N=function(){is.aa.N.call(this),ss(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hn=m.JSON.stringify,na=m.JSON.parse,as=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Ro(){}Ro.prototype.h=null;function Co(c){return c.h||(c.h=c.i())}function Io(){}var Ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ii(){re.call(this,"d")}M(Ii,re);function Oo(){re.call(this,"c")}M(Oo,re);var ni={},Do=null;function cr(){return Do=Do||new lt}ni.La="serverreachability";function ia(c){re.call(this,ni.La,c)}M(ia,re);function hr(c){const p=cr();qe(p,new ia(p))}ni.STAT_EVENT="statevent";function wu(c,p){re.call(this,ni.STAT_EVENT,c),this.stat=p}M(wu,re);function tt(c){const p=cr();qe(p,new wu(p,c))}ni.Ma="timingevent";function Rt(c,p){re.call(this,ni.Ma,c),this.size=p}M(Rt,re);function yt(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function No(c,p,v,b,U,F){c.info(function(){if(c.g)if(F)for(var ae="",Me=F.split("&"),Ct=0;Ct<Me.length;Ct++){var ke=Me[Ct].split("=");if(1<ke.length){var Mt=ke[0];ke=ke[1];var It=Mt.split("_");ae=2<=It.length&&It[1]=="type"?ae+(Mt+"="+ke+"&"):ae+(Mt+"=redacted&")}}else ae=null;else ae=F;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+p+`
`+v+`
`+ae})}function ff(c,p,v,b,U,F,ae){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+p+`
`+v+`
`+F+" "+ae})}function fr(c,p,v,b){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+os(c,v)+(b?" "+b:"")})}function Ru(c,p){c.info(function(){return"TIMEOUT: "+p})}In.prototype.info=function(){};function os(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var F=U[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ae=1;ae<U.length;ae++)U[ae]=""}}}}return Hn(v)}catch{return p}}var dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function ri(){}M(ri,Ro),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},ii=new ri;function sn(c,p,v,b){this.j=c,this.i=p,this.l=v,this.R=b||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dt}function dt(){this.i=null,this.g="",this.h=!1}var xo={},ra={};function qn(c,p,v){c.L=1,c.v=fs(yn(p)),c.m=v,c.P=!0,Di(c,null)}function Di(c,p){c.F=Date.now(),ls(c),c.A=yn(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Lo(v.i,"t",b),c.C=0,v=c.j.J,c.h=new dt,c.g=Hu(c.j,v?p:null,!c.m),0<c.O&&(c.M=new hf(A(c.Y,c,c.g),c.O)),p=c.U,v=c.g,b=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(rs[0]=U.toString()),U=rs);for(var F=0;F<U.length;F++){var ae=bu(v,U[F],b||p.handleEvent,!1,p.h||p);if(!ae)break;p.g[ae.key]=ae}p=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),hr(),No(c.i,c.u,c.A,c.l,c.R,c.m)}sn.prototype.ca=function(c){c=c.target;const p=this.M;p&&xn(c)==3?p.j():this.Y(c)},sn.prototype.Y=function(c){try{if(c==this.g)e:{const It=xn(this.g);var p=this.g.Ba();const Li=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||ku(this.g)))){this.J||It!=4||p==7||(p==8||0>=Li?hr(3):hr(2)),pr(this);var v=this.g.Z();this.X=v;t:if(Cu(this)){var b=ku(this.g);c="";var U=b.length,F=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),si(this);var ae="";break t}this.h.i=new m.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,c+=this.h.i.decode(b[p],{stream:!(F&&p==U-1)});b.length=0,this.h.g+=c,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,ff(this.i,this.u,this.A,this.l,this.R,It,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,Ct=this.g;if((Me=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Me)){var ke=Me;break t}}ke=null}if(v=ke)fr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,us(this,v);else{this.o=!1,this.s=3,tt(12),zt(this),si(this);break e}}if(this.P){v=!0;let Bt;for(;!this.J&&this.C<ae.length;)if(Bt=Iu(this,ae),Bt==ra){It==4&&(this.s=4,tt(14),v=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==xo){this.s=4,tt(15),fr(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else fr(this.i,this.l,Bt,null),us(this,Bt);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||ae.length!=0||this.h.h||(this.s=1,tt(16),v=!1),this.o=this.o&&v,!v)fr(this.i,this.l,ae,"[Invalid Chunked Response]"),zt(this),si(this);else if(0<ae.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Es(Mt),Mt.M=!0,tt(11))}}else fr(this.i,this.l,ae,null),us(this,ae);It==4&&zt(this),this.o&&!this.J&&(It==4?ju(this.j,this):(this.o=!1,ls(this)))}else yf(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),zt(this),si(this)}}}catch{}finally{}};function Cu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Iu(c,p){var v=c.C,b=p.indexOf(`
`,v);return b==-1?ra:(v=Number(p.substring(v,b)),isNaN(v)?xo:(b+=1,b+v>p.length?ra:(p=p.slice(b,b+v),c.C=b+v,p)))}sn.prototype.cancel=function(){this.J=!0,zt(this)};function ls(c){c.S=Date.now()+c.I,Ou(c,c.I)}function Ou(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=yt(A(c.ba,c),p)}function pr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}sn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ru(this.i,this.A),this.L!=2&&(hr(),tt(17)),zt(this),this.s=2,si(this)):Ou(this,this.S-c)};function si(c){c.j.G==0||c.J||ju(c.j,c)}function zt(c){pr(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,ss(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function us(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Mo(v.h,c))){if(!c.K&&Mo(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ga(v),pa(v);else break e;qo(v),tt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=yt(A(v.Za,v),6e3));if(1>=aa(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ui(v,11)}else if((c.K||v.g==c)&&ga(v),!ne(p))for(U=v.Da.g.parse(p),p=0;p<U.length;p++){let ke=U[p];if(v.T=ke[0],ke=ke[1],v.G==2)if(ke[0]=="c"){v.K=ke[1],v.ia=ke[2];const Mt=ke[3];Mt!=null&&(v.la=Mt,v.j.info("VER="+v.la));const It=ke[4];It!=null&&(v.Aa=It,v.j.info("SVER="+v.Aa));const Li=ke[5];Li!=null&&typeof Li=="number"&&0<Li&&(b=1.5*Li,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Bt=c.g;if(Bt){const fi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var F=b.h;F.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(oa(F,F.h),F.h=null))}if(b.D){const Go=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(b.ya=Go,$e(b.I,b.D,Go))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var ae=c;if(b.qa=Bu(b,b.J?b.ia:null,b.W),ae.K){an(b.h,ae);var Me=ae,Ct=b.L;Ct&&(Me.I=Ct),Me.B&&(pr(Me),ls(Me)),b.g=ae}else Uu(b);0<v.i.length&&ma(v)}else ke[0]!="stop"&&ke[0]!="close"||Ui(v,7);else v.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Ui(v,7):Bo(v):ke[0]!="noop"&&v.l&&v.l.ta(ke),v.v=0)}}hr(4)}catch{}}var Du=class{constructor(c,p){this.g=c,this.map=p}};function Ni(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function aa(c){return c.h?1:c.g?c.g.size:0}function Mo(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function oa(c,p){c.g?c.g.add(p):c.h=p}function an(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ni.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ko(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return G(c.i)}function df(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],v=c.length,b=0;b<v;b++)p.push(c[b]);return p}p=[],v=0;for(b in c)p[v++]=c[b];return p}function la(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const b in c)p[v++]=b;return p}}}function Po(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=la(c),b=df(c),U=b.length,F=0;F<U;F++)p.call(void 0,b[F],v&&v[F],c)}var cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),U=null;if(0<=b){var F=c[v].substring(0,b);U=c[v].substring(b+1)}else F=c[v];p(F,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function vt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof vt){this.h=c.h,hs(this,c.j),this.o=c.o,this.g=c.g,mr(this,c.s),this.l=c.l;var p=c.i,v=new Mi;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),xi(this,v),this.m=c.m}else c&&(p=String(c).match(cs))?(this.h=!1,hs(this,p[1]||"",!0),this.o=On(p[2]||""),this.g=On(p[3]||"",!0),mr(this,p[4]),this.l=On(p[5]||"",!0),xi(this,p[6]||"",!0),this.m=On(p[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}vt.prototype.toString=function(){var c=[],p=this.j;p&&c.push(ds(p,Vo,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ds(p,Vo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ds(v,v.charAt(0)=="/"?mf:Uo,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ds(v,ua)),c.join("")};function yn(c){return new vt(c)}function hs(c,p,v){c.j=v?On(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function mr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function xi(c,p,v){p instanceof Mi?(c.i=p,xu(c.i,c.h)):(v||(p=ds(p,gf)),c.i=new Mi(p,c.h))}function $e(c,p,v){c.i.set(p,v)}function fs(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function On(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ds(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,Nu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Nu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,Uo=/[#\?:]/g,mf=/[#\?]/g,gf=/[#\?@]/g,ua=/#/g;function Mi(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Dn(c){c.g||(c.g=new Map,c.h=0,c.i&&pf(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=Mi.prototype,r.add=function(c,p){Dn(this),this.i=null,c=ai(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function ki(c,p){Dn(c),p=ai(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Pi(c,p){return Dn(c),p=ai(c,p),c.g.has(p)}r.forEach=function(c,p){Dn(this),this.g.forEach(function(v,b){v.forEach(function(U){c.call(p,U,b,this)},this)},this)},r.na=function(){Dn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let b=0;b<p.length;b++){const U=c[b];for(let F=0;F<U.length;F++)v.push(p[b])}return v},r.V=function(c){Dn(this);let p=[];if(typeof c=="string")Pi(this,c)&&(p=p.concat(this.g.get(ai(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},r.set=function(c,p){return Dn(this),this.i=null,c=ai(this,c),Pi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Lo(c,p,v){ki(c,p),0<v.length&&(c.i=null,c.g.set(ai(c,p),G(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var b=p[v];const F=encodeURIComponent(String(b)),ae=this.V(b);for(b=0;b<ae.length;b++){var U=F;ae[b]!==""&&(U+="="+encodeURIComponent(String(ae[b]))),c.push(U)}}return this.i=c.join("&")};function ai(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function xu(c,p){p&&!c.j&&(Dn(c),c.i=null,c.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(ki(this,b),Lo(this,U,v))},c)),c.j=p}function ps(c,p){const v=new In;if(m.Image){const b=new Image;b.onload=L(Nn,v,"TestLoadImage: loaded",!0,p,b),b.onerror=L(Nn,v,"TestLoadImage: error",!1,p,b),b.onabort=L(Nn,v,"TestLoadImage: abort",!1,p,b),b.ontimeout=L(Nn,v,"TestLoadImage: timeout",!1,p,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else p(!1)}function Fn(c,p){const v=new In,b=new AbortController,U=setTimeout(()=>{b.abort(),Nn(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:b.signal}).then(F=>{clearTimeout(U),F.ok?Nn(v,"TestPingServer: ok",!0,p):Nn(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),Nn(v,"TestPingServer: error",!1,p)})}function Nn(c,p,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function ms(){this.g=new as}function oi(c,p,v){const b=v||"";try{Po(c,function(U,F){let ae=U;y(U)&&(ae=Hn(U)),p.push(b+F+"="+encodeURIComponent(ae))})}catch(U){throw p.push(b+"type="+encodeURIComponent("_badmap")),U}}function gr(c){this.l=c.Ub||null,this.j=c.eb||!1}M(gr,Ro),gr.prototype.g=function(){return new Vi(this.l,this.j)},gr.prototype.i=function(c){return function(){return c}}({});function Vi(c,p){lt.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Vi,lt),r=Vi.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,ui(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function jo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?li(this):ui(this),this.readyState==3&&jo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,li(this))},r.Qa=function(c){this.g&&(this.response=c,li(this))},r.ga=function(){this.g&&li(this)};function li(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ui(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function zo(c){let p="";return ce(c,function(v,b){p+=b,p+=":",p+=v,p+=`\r
`}),p}function xt(c,p,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=zo(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):$e(c,p,v))}function Be(c){lt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(Be,lt);var ca=/^https?$/i,gs=["POST","PUT"];r=Be.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?Co(this.o):Co(ii),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(F){Mu(this,F);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const F of b.keys())v.set(F,b.get(F));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(gs,p,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ae]of v)this.g.setRequestHeader(F,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ys(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Mu(this,F)}};function Mu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,ha(c),ci(c)}function ha(c){c.A||(c.A=!0,qe(c,"complete"),qe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,qe(this,"complete"),qe(this,"abort"),ci(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),Be.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?fa(this):this.bb())},r.bb=function(){fa(this)};function fa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||xn(c)!=4||c.Z()!=2)){if(c.u&&xn(c)==4)Xt(c.Ea,0,c);else if(qe(c,"readystatechange"),xn(c)==4){c.h=!1;try{const ae=c.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var b;if(b=ae===0){var U=String(c.D).match(cs)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),b=!ca.test(U?U.toLowerCase():"")}v=b}if(v)qe(c,"complete"),qe(c,"success");else{c.m=6;try{var F=2<xn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",ha(c)}}finally{ci(c)}}}}function ci(c,p){if(c.g){ys(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||qe(c,"ready");try{v.onreadystatechange=b}catch{}}}function ys(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function xn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),na(p)}};function ku(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yf(c){const p={};c=(c.g&&2<=xn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(ne(c[b]))continue;var v=k(c[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=p[U]||[];p[U]=F,F.push(v)}I(p,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function da(c){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,c),this.cb=vs("retryDelaySeedMs",1e4,c),this.Wa=vs("forwardChannelMaxRetries",2,c),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(c&&c.concurrentRequestLimit),this.Da=new ms,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(c,p,v,b){tt(0),this.W=c,this.H=p||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=Bu(this,null,this.W),ma(this)};function Bo(c){if(Pu(c),c.G==3){var p=c.U++,v=yn(c.I);if($e(v,"SID",c.K),$e(v,"RID",p),$e(v,"TYPE","terminate"),_s(c,v),p=new sn(c,c.j,p),p.L=2,p.v=fs(yn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=Hu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),ls(p)}zu(c)}function pa(c){c.g&&(Es(c),c.g.cancel(),c.g=null)}function Pu(c){pa(c),c.u&&(m.clearTimeout(c.u),c.u=null),ga(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ma(c){if(!sa(c.h)&&!c.s){c.s=!0;var p=c.Ga;oe||D(),de||(oe(),de=!0),Se.add(p,c),c.B=0}}function vf(c,p){return aa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=yt(A(c.Ga,c,p),Fo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new sn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=w(F),N(F,this.S)):F=this.S),this.m!==null||this.O||(U.H=F,F=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(p+=b,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Vu(this,U,p),v=yn(this.I),$e(v,"RID",c),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),_s(this,v),F&&(this.O?p="headers="+encodeURIComponent(String(zo(F)))+"&"+p:this.m&&xt(v,this.m,F)),oa(this.h,U),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",p),$e(v,"SID","null"),U.T=!0,qn(U,v,null)):qn(U,v,p),this.G=2}}else this.G==3&&(c?Ho(this,c):this.i.length==0||sa(this.h)||Ho(this))};function Ho(c,p){var v;p?v=p.l:v=c.U++;const b=yn(c.I);$e(b,"SID",c.K),$e(b,"RID",v),$e(b,"AID",c.T),_s(c,b),c.m&&c.o&&xt(b,c.m,c.o),v=new sn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=Vu(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),oa(c.h,v),qn(v,b,p)}function _s(c,p){c.H&&ce(c.H,function(v,b){$e(p,b,v)}),c.l&&Po({},function(v,b){$e(p,b,v)})}function Vu(c,p,v){v=Math.min(c.i.length,v);var b=c.l?A(c.l.Na,c.l,c):null;e:{var U=c.i;let F=-1;for(;;){const ae=["count="+v];F==-1?0<v?(F=U[0].g,ae.push("ofs="+F)):F=0:ae.push("ofs="+F);let Me=!0;for(let Ct=0;Ct<v;Ct++){let ke=U[Ct].g;const Mt=U[Ct].map;if(ke-=F,0>ke)F=Math.max(0,U[Ct].g-100),Me=!1;else try{oi(Mt,ae,"req"+ke+"_")}catch{b&&b(Mt)}}if(Me){b=ae.join("&");break e}}}return c=c.i.splice(0,v),p.D=c,b}function Uu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;oe||D(),de||(oe(),de=!0),Se.add(p,c),c.v=0}}function qo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=yt(A(c.Fa,c),Fo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=yt(A(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),pa(this),Lu(this))};function Es(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Lu(c){c.g=new sn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=yn(c.qa);$e(p,"RID","rpc"),$e(p,"SID",c.K),$e(p,"AID",c.T),$e(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(p,"TO",c.ja),$e(p,"TYPE","xmlhttp"),_s(c,p),c.m&&c.o&&xt(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=fs(yn(p)),v.m=null,v.P=!0,Di(v,c)}r.Za=function(){this.C!=null&&(this.C=null,pa(this),qo(this),tt(19))};function ga(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function ju(c,p){var v=null;if(c.g==p){ga(c),Es(c),c.g=null;var b=2}else if(Mo(c.h,p))v=p.D,an(c.h,p),b=1;else return;if(c.G!=0){if(p.o)if(b==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var U=c.B;b=cr(),qe(b,new Rt(b,v)),ma(c)}else Uu(c);else if(U=p.s,U==3||U==0&&0<p.X||!(b==1&&vf(c,p)||b==2&&qo(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),U){case 1:Ui(c,5);break;case 4:Ui(c,10);break;case 3:Ui(c,6);break;default:Ui(c,2)}}}function Fo(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function Ui(c,p){if(c.j.info("Error code "+p),p==2){var v=A(c.fb,c),b=c.Xa;const U=!b;b=new vt(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||hs(b,"https"),fs(b),U?ps(b.toString(),v):Fn(b.toString(),v)}else tt(2);c.G=0,c.l&&c.l.sa(p),zu(c),Pu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function zu(c){if(c.G=0,c.ka=[],c.l){const p=ko(c.h);(p.length!=0||c.i.length!=0)&&($(c.ka,p),$(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function Bu(c,p,v){var b=v instanceof vt?yn(v):new vt(v);if(b.g!="")p&&(b.g=p+"."+b.g),mr(b,b.s);else{var U=m.location;b=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var F=new vt(null);b&&hs(F,b),p&&(F.g=p),U&&mr(F,U),v&&(F.l=v),b=F}return v=c.D,p=c.ya,v&&p&&$e(b,v,p),$e(b,"VER",c.la),_s(c,b),b}function Hu(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Be(new gr({eb:v})):new Be(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}r=qu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ya(){}ya.prototype.g=function(c,p){return new on(c,p)};function on(c,p){lt.call(this),this.g=new da(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!ne(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ne(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new hi(this)}M(on,lt),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Bo(this.g)},on.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Hn(c),c=v);p.i.push(new Du(p.Ya++,c)),p.G==3&&ma(p)},on.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,on.aa.N.call(this)};function Fu(c){Ii.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const v in p){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}M(Fu,Ii);function Gu(){Oo.call(this),this.status=1}M(Gu,Oo);function hi(c){this.g=c}M(hi,qu),hi.prototype.ua=function(){qe(this.g,"a")},hi.prototype.ta=function(c){qe(this.g,new Fu(c))},hi.prototype.sa=function(c){qe(this.g,new Gu)},hi.prototype.ra=function(){qe(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,WT=function(){return new ya},ZT=function(){return cr()},XT=ni,Xp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,ph=dr,Oi.COMPLETE="complete",QT=Oi,Io.EventType=Ci,Ci.OPEN="a",Ci.CLOSE="b",Ci.ERROR="c",Ci.MESSAGE="d",lt.prototype.listen=lt.prototype.K,jl=Io,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,KT=Be}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});const E0="@firebase/firestore",T0="4.8.0";/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let To="11.10.0";/**
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
 */const Ys=new Tm("@firebase/firestore");function Ya(){return Ys.logLevel}function fe(r,...e){if(Ys.logLevel<=xe.DEBUG){const n=e.map(km);Ys.debug(`Firestore (${To}): ${r}`,...n)}}function Ks(r,...e){if(Ys.logLevel<=xe.ERROR){const n=e.map(km);Ys.error(`Firestore (${To}): ${r}`,...n)}}function lo(r,...e){if(Ys.logLevel<=xe.WARN){const n=e.map(km);Ys.warn(`Firestore (${To}): ${r}`,...n)}}function km(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function Ie(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,JT(r,s,n)}function JT(r,e,n){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ks(s),new Error(s)}function ft(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||JT(e,o,s)}function We(r,e){return r}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class e1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(en.UNAUTHENTICATED))}shutdown(){}}class SD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AD{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ft(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Bs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Bs,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Bs)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ft(typeof s.accessToken=="string",31837,{l:s}),new e1(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class wD{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RD{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new wD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ft(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new b0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new b0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ID(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function OD(){return new TextEncoder}/**
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
 */class Pm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=ID(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Ue(r,e){return r<e?-1:r>e?1:0}function Zp(r,e){let n=0;for(;n<r.length&&n<e.length;){const s=r.codePointAt(n),o=e.codePointAt(n);if(s!==o){if(s<128&&o<128)return Ue(s,o);{const u=OD(),f=DD(u.encode(S0(r,n)),u.encode(S0(e,n)));return f!==0?f:Ue(s,o)}}n+=s>65535?2:1}return Ue(r.length,e.length)}function S0(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function DD(r,e){for(let n=0;n<r.length&&n<e.length;++n)if(r[n]!==e[n])return Ue(r[n],e[n]);return Ue(r.length,e.length)}function uo(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
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
 */const A0="__name__";class vi{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ie(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=vi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Ue(e.length,n.length)}static compareSegments(e,n){const s=vi.isNumericId(e),o=vi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?vi.extractNumericId(e).compare(vi.extractNumericId(n)):Zp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mm.fromString(e.substring(4,e.length-2))}}class gt extends vi{construct(e,n,s){return new gt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(ie.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const ND=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends vi{construct(e,n,s){return new Yt(e,n,s)}static isValidIdentifier(e){return ND.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===A0}static keyField(){return new Yt([A0])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ye(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ye(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ye(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(n)}static emptyPath(){return new Yt([])}}/**
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
 */class Re{constructor(e){this.path=e}static fromPath(e){return new Re(gt.fromString(e))}static fromName(e){return new Re(gt.fromString(e).popFirst(5))}static empty(){return new Re(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return gt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Re(new gt(e.slice()))}}/**
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
 */function xD(r,e,n){if(!n)throw new ye(ie.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function MD(r,e,n,s){if(e===!0&&s===!0)throw new ye(ie.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function w0(r){if(!Re.isDocumentKey(r))throw new ye(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function t1(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Vm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ie(12329,{type:typeof r})}function Wp(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ye(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vm(r);throw new ye(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,e){const n={typeString:r};return e&&(n.value=e),n}function gu(r,e){if(!t1(r))throw new ye(ie.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ye(ie.INVALID_ARGUMENT,n);return!0}/**
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
 */const R0=-62135596800,C0=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*C0);return new rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<R0)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/C0}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gu(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-R0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:St("string",rt._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class it{static fromTimestamp(e){return new it(e)}static min(){return new it(new rt(0,0))}static max(){return new it(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tu=-1;function kD(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=it.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new Yr(o,Re.empty(),e)}function PD(r){return new Yr(r.readTime,r.key,tu)}class Yr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yr(it.min(),Re.empty(),tu)}static max(){return new Yr(it.max(),Re.empty(),tu)}}function VD(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=Re.comparator(r.documentKey,e.documentKey),n!==0?n:Ue(r.largestBatchId,e.largestBatchId))}/**
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
 */const UD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Um(r){if(r.code!==ie.FAILED_PRECONDITION||r.message!==UD)throw r;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.reject(n)}static resolve(e){return new ee((n,s)=>{n(e)})}static reject(e){return new ee((n,s)=>{s(e)})}static waitFor(e){return new ee((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(e){let n=ee.resolve(!1);for(const s of e)n=n.next(o=>o?ee.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new ee((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next(T=>{f[y]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(e,n){return new ee((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function jD(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yu(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Lm.ue=-1;/**
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
 */const jm=-1;function zm(r){return r==null}function Nh(r){return r===0&&1/r==-1/0}function zD(r){return typeof r=="number"&&Number.isInteger(r)&&!Nh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const n1="";function BD(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=I0(e)),e=HD(r.get(n),e);return I0(e)}function HD(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case n1:n+="";break;default:n+=u}}return n}function I0(r){return r+n1+""}/**
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
 */function O0(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function bo(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function i1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class mn{constructor(e,n){this.comparator=e,this.root=n||Gt.EMPTY}insert(e,n){return new mn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new mn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zc(this.root,e,this.comparator,!0)}}class Zc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Gt.RED,this.left=o??Gt.EMPTY,this.right=u??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Gt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Gt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Kt{constructor(e){this.comparator=e,this.data=new mn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D0(this.data.getIterator())}getIteratorFrom(e){return new D0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Kt(this.comparator);return n.data=e,n}}class D0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new Wn([])}unionWith(e){let n=new Kt(Yt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class qD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Si{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new qD("Invalid base64 string: "+u):u}}(e);return new Si(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Si(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Si.EMPTY_BYTE_STRING=new Si("");const FD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qs(r){if(ft(!!r,39018),typeof r=="string"){let e=0;const n=FD.exec(r);if(ft(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$t(r.seconds),nanos:$t(r.nanos)}}function $t(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function co(r){return typeof r=="string"?Si.fromBase64String(r):Si.fromUint8Array(r)}/**
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
 */const r1="server_timestamp",s1="__type__",a1="__previous_value__",o1="__local_write_time__";function Bm(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[s1])===null||n===void 0?void 0:n.stringValue)===r1}function Hm(r){const e=r.mapValue.fields[a1];return Bm(e)?Hm(e):e}function xh(r){const e=Qs(r.mapValue.fields[o1].timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class GD{constructor(e,n,s,o,u,f,m,g,y,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const Mh="(default)";class kh{constructor(e,n){this.projectId=e,this.database=n||Mh}static empty(){return new kh("","")}get isDefaultDatabase(){return this.database===Mh}isEqual(e){return e instanceof kh&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const l1="__type__",$D="__max__",Wc={mapValue:{}},u1="__vector__",Jp="value";function Xs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Bm(r)?4:KD(r)?9007199254740991:YD(r)?10:11:Ie(28295,{value:r})}function Ai(r,e){if(r===e)return!0;const n=Xs(r);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return xh(r).isEqual(xh(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Qs(o.timestampValue),m=Qs(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return co(o.bytesValue).isEqual(co(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return $t(o.geoPointValue.latitude)===$t(u.geoPointValue.latitude)&&$t(o.geoPointValue.longitude)===$t(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return $t(o.integerValue)===$t(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=$t(o.doubleValue),m=$t(u.doubleValue);return f===m?Nh(f)===Nh(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return uo(r.arrayValue.values||[],e.arrayValue.values||[],Ai);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(O0(f)!==O0(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!Ai(f[g],m[g])))return!1;return!0}(r,e);default:return Ie(52216,{left:r})}}function nu(r,e){return(r.values||[]).find(n=>Ai(n,e))!==void 0}function ho(r,e){if(r===e)return 0;const n=Xs(r),s=Xs(e);if(n!==s)return Ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ue(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=$t(u.integerValue||u.doubleValue),g=$t(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return N0(r.timestampValue,e.timestampValue);case 4:return N0(xh(r),xh(e));case 5:return Zp(r.stringValue,e.stringValue);case 6:return function(u,f){const m=co(u),g=co(f);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const T=Ue(m[y],g[y]);if(T!==0)return T}return Ue(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Ue($t(u.latitude),$t(f.latitude));return m!==0?m:Ue($t(u.longitude),$t(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return x0(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,g,y,T;const S=u.fields||{},A=f.fields||{},L=(m=S[Jp])===null||m===void 0?void 0:m.arrayValue,M=(g=A[Jp])===null||g===void 0?void 0:g.arrayValue,G=Ue(((y=L?.values)===null||y===void 0?void 0:y.length)||0,((T=M?.values)===null||T===void 0?void 0:T.length)||0);return G!==0?G:x0(L,M)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===Wc.mapValue&&f===Wc.mapValue)return 0;if(u===Wc.mapValue)return 1;if(f===Wc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=f.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let S=0;S<g.length&&S<T.length;++S){const A=Zp(g[S],T[S]);if(A!==0)return A;const L=ho(m[g[S]],y[T[S]]);if(L!==0)return L}return Ue(g.length,T.length)}(r.mapValue,e.mapValue);default:throw Ie(23264,{le:n})}}function N0(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ue(r,e);const n=Qs(r),s=Qs(e),o=Ue(n.seconds,s.seconds);return o!==0?o:Ue(n.nanos,s.nanos)}function x0(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ho(n[o],s[o]);if(u)return u}return Ue(n.length,s.length)}function fo(r){return em(r)}function em(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Qs(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return co(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return Re.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=em(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${em(n.fields[f])}`;return o+"}"}(r.mapValue):Ie(61005,{value:r})}function mh(r){switch(Xs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hm(r);return e?16+mh(e):16;case 5:return 2*r.stringValue.length;case 6:return co(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+mh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return bo(s.fields,(u,f)=>{o+=u.length+mh(f)}),o}(r.mapValue);default:throw Ie(13486,{value:r})}}function tm(r){return!!r&&"integerValue"in r}function qm(r){return!!r&&"arrayValue"in r}function gh(r){return!!r&&"mapValue"in r}function YD(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[l1])===null||n===void 0?void 0:n.stringValue)===u1}function ql(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return bo(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ql(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ql(r.arrayValue.values[n]);return e}return Object.assign({},r)}function KD(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===$D}/**
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
 */class Qn{constructor(e){this.value=e}static empty(){return new Qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ql(n)}setAll(e){let n=Yt.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=ql(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());gh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ai(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];gh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){bo(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Qn(ql(this.value))}}function c1(r){const e=[];return bo(r.fields,(n,s)=>{const o=new Yt([n]);if(gh(s)){const u=c1(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new Wn(e)}/**
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
 */class Kn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Kn(e,0,it.min(),it.min(),it.min(),Qn.empty(),0)}static newFoundDocument(e,n,s,o){return new Kn(e,1,n,it.min(),s,o,0)}static newNoDocument(e,n){return new Kn(e,2,n,it.min(),it.min(),Qn.empty(),0)}static newUnknownDocument(e,n){return new Kn(e,3,n,it.min(),it.min(),Qn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ph{constructor(e,n){this.position=e,this.inclusive=n}}function M0(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=Re.comparator(Re.fromName(f.referenceValue),n.key):s=ho(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function k0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ai(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vh{constructor(e,n="asc"){this.field=e,this.dir=n}}function QD(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class h1{}class jt extends h1{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ZD(e,n,s):n==="array-contains"?new e2(e,s):n==="in"?new t2(e,s):n==="not-in"?new n2(e,s):n==="array-contains-any"?new i2(e,s):new jt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new WD(e,s):new JD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kr extends h1{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Kr(e,n)}matches(e){return f1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function f1(r){return r.op==="and"}function d1(r){return XD(r)&&f1(r)}function XD(r){for(const e of r.filters)if(e instanceof Kr)return!1;return!0}function nm(r){if(r instanceof jt)return r.field.canonicalString()+r.op.toString()+fo(r.value);if(d1(r))return r.filters.map(e=>nm(e)).join(",");{const e=r.filters.map(n=>nm(n)).join(",");return`${r.op}(${e})`}}function p1(r,e){return r instanceof jt?function(s,o){return o instanceof jt&&s.op===o.op&&s.field.isEqual(o.field)&&Ai(s.value,o.value)}(r,e):r instanceof Kr?function(s,o){return o instanceof Kr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&p1(f,o.filters[m]),!0):!1}(r,e):void Ie(19439)}function m1(r){return r instanceof jt?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(r):r instanceof Kr?function(n){return n.op.toString()+" {"+n.getFilters().map(m1).join(" ,")+"}"}(r):"Filter"}class ZD extends jt{constructor(e,n,s){super(e,n,s),this.key=Re.fromName(s.referenceValue)}matches(e){const n=Re.comparator(e.key,this.key);return this.matchesComparison(n)}}class WD extends jt{constructor(e,n){super(e,"in",n),this.keys=g1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JD extends jt{constructor(e,n){super(e,"not-in",n),this.keys=g1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g1(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Re.fromName(s.referenceValue))}class e2 extends jt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qm(n)&&nu(n.arrayValue,this.value)}}class t2 extends jt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nu(this.value.arrayValue,n)}}class n2 extends jt{constructor(e,n){super(e,"not-in",n)}matches(e){if(nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!nu(this.value.arrayValue,n)}}class i2 extends jt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>nu(this.value.arrayValue,s))}}/**
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
 */class r2{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Pe=null}}function P0(r,e=null,n=[],s=[],o=null,u=null,f=null){return new r2(r,e,n,s,o,u,f)}function Fm(r){const e=We(r);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>nm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),zm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fo(s)).join(",")),e.Pe=n}return e.Pe}function Gm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!QD(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!p1(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!k0(r.startAt,e.startAt)&&k0(r.endAt,e.endAt)}/**
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
 */class tf{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function s2(r,e,n,s,o,u,f,m){return new tf(r,e,n,s,o,u,f,m)}function a2(r){return new tf(r)}function V0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function o2(r){return r.collectionGroup!==null}function Fl(r){const e=We(r);if(e.Te===null){e.Te=[];const n=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Kt(Yt.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Vh(u,s))}),n.has(Yt.keyField().canonicalString())||e.Te.push(new Vh(Yt.keyField(),s))}return e.Te}function Hs(r){const e=We(r);return e.Ie||(e.Ie=l2(e,Fl(r))),e.Ie}function l2(r,e){if(r.limitType==="F")return P0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Vh(o.field,u)});const n=r.endAt?new Ph(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ph(r.startAt.position,r.startAt.inclusive):null;return P0(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function im(r,e,n){return new tf(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function y1(r,e){return Gm(Hs(r),Hs(e))&&r.limitType===e.limitType}function v1(r){return`${Fm(Hs(r))}|lt:${r.limitType}`}function Pl(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>m1(o)).join(", ")}]`),zm(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>fo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>fo(o)).join(",")),`Target(${s})`}(Hs(r))}; limitType=${r.limitType})`}function $m(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Re.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Fl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,g){const y=M0(f,m,g);return f.inclusive?y<=0:y<0}(s.startAt,Fl(s),o)||s.endAt&&!function(f,m,g){const y=M0(f,m,g);return f.inclusive?y>=0:y>0}(s.endAt,Fl(s),o))}(r,e)}function u2(r){return(e,n)=>{let s=!1;for(const o of Fl(r)){const u=c2(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function c2(r,e,n){const s=r.field.isKeyField()?Re.comparator(e.key,n.key):function(u,f,m){const g=f.data.field(u),y=m.data.field(u);return g!==null&&y!==null?ho(g,y):Ie(42886)}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:r.dir})}}/**
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
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bo(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return i1(this.inner)}size(){return this.innerSize}}/**
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
 */const h2=new mn(Re.comparator);function Uh(){return h2}const _1=new mn(Re.comparator);function Jc(...r){let e=_1;for(const n of r)e=e.insert(n.key,n);return e}function E1(r){let e=_1;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ls(){return Gl()}function T1(){return Gl()}function Gl(){return new Ws(r=>r.toString(),(r,e)=>r.isEqual(e))}const f2=new mn(Re.comparator),d2=new Kt(Re.comparator);function tn(...r){let e=d2;for(const n of r)e=e.add(n);return e}const p2=new Kt(Ue);function m2(){return p2}/**
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
 */function Ym(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nh(e)?"-0":e}}function b1(r){return{integerValue:""+r}}function g2(r,e){return zD(e)?b1(e):Ym(r,e)}/**
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
 */class nf{constructor(){this._=void 0}}function y2(r,e,n){return r instanceof Lh?function(o,u){const f={fields:{[s1]:{stringValue:r1},[o1]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Bm(u)&&(u=Hm(u)),u&&(f.fields[a1]=u),{mapValue:f}}(n,e):r instanceof iu?A1(r,e):r instanceof ru?w1(r,e):function(o,u){const f=S1(o,u),m=U0(f)+U0(o.Ee);return tm(f)&&tm(o.Ee)?b1(m):Ym(o.serializer,m)}(r,e)}function v2(r,e,n){return r instanceof iu?A1(r,e):r instanceof ru?w1(r,e):n}function S1(r,e){return r instanceof jh?function(s){return tm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Lh extends nf{}class iu extends nf{constructor(e){super(),this.elements=e}}function A1(r,e){const n=R1(e);for(const s of r.elements)n.some(o=>Ai(o,s))||n.push(s);return{arrayValue:{values:n}}}class ru extends nf{constructor(e){super(),this.elements=e}}function w1(r,e){let n=R1(e);for(const s of r.elements)n=n.filter(o=>!Ai(o,s));return{arrayValue:{values:n}}}class jh extends nf{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function U0(r){return $t(r.integerValue||r.doubleValue)}function R1(r){return qm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function _2(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof iu&&o instanceof iu||s instanceof ru&&o instanceof ru?uo(s.elements,o.elements,Ai):s instanceof jh&&o instanceof jh?Ai(s.Ee,o.Ee):s instanceof Lh&&o instanceof Lh}(r.transform,e.transform)}class E2{constructor(e,n){this.version=e,this.transformResults=n}}class ir{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ir}static exists(e){return new ir(void 0,e)}static updateTime(e){return new ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class rf{}function C1(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new O1(r.key,ir.none()):new vu(r.key,r.data,ir.none());{const n=r.data,s=Qn.empty();let o=new Kt(Yt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Js(r.key,s,new Wn(o.toArray()),ir.none())}}function T2(r,e,n){r instanceof vu?function(o,u,f){const m=o.value.clone(),g=j0(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof Js?function(o,u,f){if(!yh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=j0(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(I1(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function $l(r,e,n,s){return r instanceof vu?function(u,f,m,g){if(!yh(u.precondition,f))return m;const y=u.value.clone(),T=z0(u.fieldTransforms,g,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof Js?function(u,f,m,g){if(!yh(u.precondition,f))return m;const y=z0(u.fieldTransforms,g,f),T=f.data;return T.setAll(I1(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,e,n,s):function(u,f,m){return yh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function b2(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=S1(s.transform,o||null);u!=null&&(n===null&&(n=Qn.empty()),n.set(s.field,u))}return n||null}function L0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&uo(s,o,(u,f)=>_2(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class vu extends rf{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Js extends rf{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function I1(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function j0(r,e,n){const s=new Map;ft(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,v2(f,m,n[o]))}return s}function z0(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,y2(u,f,e))}return s}class O1 extends rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S2 extends rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A2{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&T2(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=T1();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=C1(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(it.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),tn())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,s)=>L0(n,s))&&uo(this.baseMutations,e.baseMutations,(n,s)=>L0(n,s))}}class Km{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){ft(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return f2}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Km(e,n,s,o)}}/**
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
 */class w2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Tt,Ve;function R2(r){switch(r){case ie.OK:return Ie(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Ie(15467,{code:r})}}function C2(r){if(r===void 0)return Ks("GRPC error has no .code"),ie.UNKNOWN;switch(r){case Tt.OK:return ie.OK;case Tt.CANCELLED:return ie.CANCELLED;case Tt.UNKNOWN:return ie.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return ie.INTERNAL;case Tt.UNAVAILABLE:return ie.UNAVAILABLE;case Tt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Tt.NOT_FOUND:return ie.NOT_FOUND;case Tt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Tt.ABORTED:return ie.ABORTED;case Tt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Tt.DATA_LOSS:return ie.DATA_LOSS;default:return Ie(39323,{code:r})}}(Ve=Tt||(Tt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Mm([4294967295,4294967295],0);class I2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O2(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function D2(r,e){return rm(r,e.toTimestamp())}function eo(r){return ft(!!r,49232),it.fromTimestamp(function(n){const s=Qs(n);return new rt(s.seconds,s.nanos)}(r))}function D1(r,e){return sm(r,e).canonicalString()}function sm(r,e){const n=function(o){return new gt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function N2(r){const e=gt.fromString(r);return ft(j2(e),10190,{key:e.toString()}),e}function am(r,e){return D1(r.databaseId,e.path)}function x2(r){const e=N2(r);return e.length===4?gt.emptyPath():k2(e)}function M2(r){return new gt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function k2(r){return ft(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function B0(r,e,n){return{name:am(r,e),fields:n.value.mapValue.fields}}function P2(r,e){let n;if(e instanceof vu)n={update:B0(r,e.key,e.value)};else if(e instanceof O1)n={delete:am(r,e.key)};else if(e instanceof Js)n={update:B0(r,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof S2))return Ie(16599,{Rt:e.type});n={verify:am(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof Lh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof iu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ru)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof jh)return{fieldPath:f.field.canonicalString(),increment:m.Ee};throw Ie(20930,{transform:f.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:D2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ie(27497)}(r,e.precondition)),n}function V2(r,e){return r&&r.length>0?(ft(e!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?eo(o.updateTime):eo(u);return f.isEqual(it.min())&&(f=eo(u)),new E2(f,o.transformResults||[])}(n,e))):[]}function U2(r){let e=x2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){ft(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=function(S){const A=N1(S);return A instanceof Kr&&d1(A)?A.getFilters():[A]}(n.where));let f=[];n.orderBy&&(f=function(S){return S.map(A=>function(M){return new Vh(Ka(M.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(A))}(n.orderBy));let m=null;n.limit&&(m=function(S){let A;return A=typeof S=="object"?S.value:S,zm(A)?null:A}(n.limit));let g=null;n.startAt&&(g=function(S){const A=!!S.before,L=S.values||[];return new Ph(L,A)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const A=!S.before,L=S.values||[];return new Ph(L,A)}(n.endAt)),s2(e,o,f,u,m,"F",g,y)}function N1(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ka(n.unaryFilter.field);return jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ka(n.unaryFilter.field);return jt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ka(n.unaryFilter.field);return jt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ka(n.unaryFilter.field);return jt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(r):r.fieldFilter!==void 0?function(n){return jt.create(Ka(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Kr.create(n.compositeFilter.filters.map(s=>N1(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(n.compositeFilter.op))}(r):Ie(30097,{filter:r})}function Ka(r){return Yt.fromServerFormat(r.fieldPath)}function L2(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function j2(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class z2{constructor(e){this.gt=e}}function B2(r){const e=U2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?im(e,e.limit,"L"):e}/**
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
 */class H2{constructor(){this.Dn=new q2}addToCollectionParentIndex(e,n){return this.Dn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(Yr.min())}updateCollectionGroup(e,n,s){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class q2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Kt(gt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Kt(gt.comparator)).toArray()}}/**
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
 */const H0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},x1=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(x1,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class po{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new po(0)}static ur(){return new po(-1)}}/**
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
 */const q0="LruGarbageCollector",F2=1048576;function F0([r,e],[n,s]){const o=Ue(r,n);return o===0?Ue(e,s):o}class G2{constructor(e){this.Tr=e,this.buffer=new Kt(F0),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();F0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(q0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yu(n)?fe(q0,"Ignoring IndexedDB error during garbage collection: ",n):await Um(n)}await this.Rr(3e5)})}}class Y2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(Lm.ue);const s=new G2(n);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(H0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),H0):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,o,u,f,m,g,y;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(e,s,n))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(y=Date.now(),Ya()<=xe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function K2(r,e){return new Y2(r,e)}/**
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
 */class Q2{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ee.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class X2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Z2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&$l(s.mutation,o,Wn.empty(),rt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,tn()).next(()=>s))}getLocalViewOfDocuments(e,n,s=tn()){const o=Ls();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Jc();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,tn()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=Uh();const f=Gl(),m=function(){return Gl()}();return n.forEach((g,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof Js)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),$l(T.mutation,y,T.mutation.getFieldMask(),rt.now())):f.set(y.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var S;return m.set(y,new X2(T,(S=f.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(e,n){const s=Gl();let o=new mn((f,m)=>f-m),u=tn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let T=s.get(g)||Wn.empty();T=m.applyToLocalView(y,T),s.set(g,T);const S=(o.get(m.batchId)||tn()).add(g);o=o.insert(m.batchId,S)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,T=g.value,S=T1();T.forEach(A=>{if(!u.has(A)){const L=C1(n.get(A),s.get(A));L!==null&&S.set(A,L),u=u.add(A)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,S))}return ee.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return Re.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):o2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):ee.resolve(Ls());let m=tu,g=u;return f.next(y=>ee.forEach(y,(T,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(T)?ee.resolve():this.remoteDocumentCache.getEntry(e,T).next(A=>{g=g.insert(T,A)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,g,y,tn())).next(T=>({batchId:m,changes:E1(T)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Re(n)).next(s=>{let o=Jc();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Jc();return this.indexManager.getCollectionParents(e,u).next(m=>ee.forEach(m,g=>{const y=function(S,A){return new tf(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(T=>{T.forEach((S,A)=>{f=f.insert(S,A)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((g,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,Kn.newInvalidDocument(T)))});let m=Jc();return f.forEach((g,y)=>{const T=u.get(g);T!==void 0&&$l(T.mutation,y,Wn.empty(),rt.now()),$m(n,y)&&(m=m.insert(g,y))}),m})}}/**
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
 */class W2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:eo(o.createTime)}}(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:B2(o.bundledQuery),readTime:eo(o.readTime)}}(n)),ee.resolve()}}/**
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
 */class J2{constructor(){this.overlays=new mn(Re.comparator),this.kr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ls();return ee.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.wt(e,n,u)}),ee.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),ee.resolve()}getOverlaysForCollection(e,n,s){const o=Ls(),u=n.length+1,f=new Re(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new mn((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=Ls(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=Ls(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,T)=>m.set(y,T)),!(m.size()>=o)););return ee.resolve(m)}wt(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new w2(n,s));let u=this.kr.get(n);u===void 0&&(u=tn(),this.kr.set(n,u)),this.kr.set(n,u.add(s.key))}}/**
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
 */class eN{constructor(){this.sessionToken=Si.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class Qm{constructor(){this.qr=new Kt(Ut.Qr),this.$r=new Kt(Ut.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new Ut(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Wr(new Ut(e,n))}Gr(e,n){e.forEach(s=>this.removeReference(s,n))}zr(e){const n=new Re(new gt([])),s=new Ut(n,e),o=new Ut(n,e+1),u=[];return this.$r.forEachInRange([s,o],f=>{this.Wr(f),u.push(f.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Re(new gt([])),s=new Ut(n,e),o=new Ut(n,e+1);let u=tn();return this.$r.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Ut(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ut{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Re.comparator(e.key,n.key)||Ue(e.Hr,n.Hr)}static Ur(e,n){return Ue(e.Hr,n.Hr)||Re.comparator(e.key,n.key)}}/**
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
 */class tN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Kt(Ut.Qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new A2(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Yr=this.Yr.add(new Ut(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ee.resolve(f)}lookupMutationBatch(e,n){return ee.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return ee.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?jm:this.er-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ut(n,0),o=new Ut(n,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],f=>{const m=this.Zr(f.Hr);u.push(m)}),ee.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Kt(Ue);return n.forEach(o=>{const u=new Ut(o,0),f=new Ut(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,f],m=>{s=s.add(m.Hr)})}),ee.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;Re.isDocumentKey(u)||(u=u.child(""));const f=new Ut(new Re(u),0);let m=new Kt(Ue);return this.Yr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Hr)),!0)},f),ee.resolve(this.ei(m))}ei(e){const n=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){ft(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return ee.forEach(n.mutations,o=>{const u=new Ut(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,n){const s=new Ut(n,0),o=this.Yr.firstAfterOrEqual(s);return ee.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nN{constructor(e){this.ni=e,this.docs=function(){return new mn(Re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ee.resolve(s?s.document.mutableCopy():Kn.newInvalidDocument(n))}getEntries(e,n){let s=Uh();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Kn.newInvalidDocument(o))}),ee.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=Uh();const f=n.path,m=new Re(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||VD(PD(T),s)<=0||(o.has(T.key)||$m(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return ee.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ie(9500)}ri(e,n){return ee.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new iN(this)}getSize(e){return ee.resolve(this.size)}}class iN extends Q2{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),ee.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class rN{constructor(e){this.persistence=e,this.ii=new Ws(n=>Fm(n),Gm),this.lastRemoteSnapshotVersion=it.min(),this.highestTargetId=0,this.si=0,this.oi=new Qm,this.targetCount=0,this._i=po.ar()}forEachTarget(e,n){return this.ii.forEach((s,o)=>n(o)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),ee.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new po(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.hr(n),ee.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.ii.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ii.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),ee.waitFor(u).next(()=>o)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return ee.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),ee.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),ee.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return ee.resolve(s)}containsKey(e,n){return ee.resolve(this.oi.containsKey(n))}}/**
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
 */class M1{constructor(e,n){this.ai={},this.overlays={},this.ui=new Lm(0),this.ci=!1,this.ci=!0,this.li=new eN,this.referenceDelegate=e(this),this.hi=new rN(this),this.indexManager=new H2,this.remoteDocumentCache=function(o){return new nN(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new z2(n),this.Ti=new W2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new J2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new tN(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){fe("MemoryPersistence","Starting transaction:",e);const o=new sN(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,n){return ee.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,n)))}}class sN extends LD{constructor(e){super(),this.currentSequenceNumber=e}}class Xm{constructor(e){this.persistence=e,this.Ai=new Qm,this.Ri=null}static Vi(e){return new Xm(e)}get mi(){if(this.Ri)return this.Ri;throw Ie(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),ee.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.mi,s=>{const o=Re.fromPath(s);return this.fi(e,o).next(u=>{u||n.removeEntry(o,it.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return ee.or([()=>ee.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class zh{constructor(e,n){this.persistence=e,this.gi=new Ws(s=>BD(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=K2(this,n)}static Vi(e,n){return new zh(e,n)}Ii(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}yr(e){let n=0;return this.gr(e,s=>{n++}).next(()=>n)}gr(e,n){return ee.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?ee.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,f=>this.Sr(e,f,n).next(m=>{m||(s++,u.removeEntry(f,it.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),ee.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mh(e.data.value)),n}Sr(e,n,s){return ee.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.gi.get(n);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zm{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=o}static Es(e,n){let s=tn(),o=tn();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Zm(e,n.fromCache,s,o)}}/**
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
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oN{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return qR()?8:jD(rn())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ps(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ys(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new aN;return this.ws(e,n,f).next(m=>{if(u.result=m,this.Rs)return this.Ss(e,n,f,m.size)})}).next(()=>u.result)}Ss(e,n,s,o){return s.documentReadCount<this.Vs?(Ya()<=xe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Pl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Ya()<=xe.DEBUG&&fe("QueryEngine","Query:",Pl(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(Ya()<=xe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Pl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hs(n))):ee.resolve())}ps(e,n){if(V0(n))return ee.resolve(null);let s=Hs(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=im(n,null,"F"),s=Hs(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=tn(...u);return this.gs.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const y=this.bs(n,m);return this.Ds(n,y,f,g.readTime)?this.ps(e,im(n,null,"F")):this.vs(e,y,n,g)}))})))}ys(e,n,s,o){return V0(n)||o.isEqual(it.min())?ee.resolve(null):this.gs.getDocuments(e,s).next(u=>{const f=this.bs(n,u);return this.Ds(n,f,s,o)?ee.resolve(null):(Ya()<=xe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Pl(n)),this.vs(e,f,n,kD(o,tu)).next(m=>m))})}bs(e,n){let s=new Kt(u2(e));return n.forEach((o,u)=>{$m(e,u)&&(s=s.add(u))}),s}Ds(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,n,s){return Ya()<=xe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Pl(n)),this.gs.getDocumentsMatchingQuery(e,n,Yr.min(),s)}vs(e,n,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const lN="LocalStore";class uN{constructor(e,n,s,o){this.persistence=e,this.Cs=n,this.serializer=o,this.Fs=new mn(Ue),this.Ms=new Ws(u=>Fm(u),Gm),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function cN(r,e,n,s){return new uN(r,e,n,s)}async function k1(r,e){const n=We(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ns(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=tn();for(const y of o){f.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of u){m.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Bs:y,removedBatchIds:f,addedBatchIds:m}))})})}function hN(r,e){const n=We(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.Os.newChangeBuffer({trackRemovals:!0});return function(m,g,y,T){const S=y.batch,A=S.keys();let L=ee.resolve();return A.forEach(M=>{L=L.next(()=>T.getEntry(g,M)).next(G=>{const $=y.docVersions.get(M);ft($!==null,48541),G.version.compareTo($)<0&&(S.applyToRemoteDocument(G,y),G.isValidDocument()&&(G.setReadTime(y.commitVersion),T.addEntry(G)))})}),L.next(()=>m.mutationQueue.removeMutationBatch(g,S))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=tn();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function fN(r){const e=We(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function dN(r,e){const n=We(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=jm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class G0{constructor(){this.activeTargetIds=m2()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pN{constructor(){this.Fo=new G0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new G0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mN{xo(e){}shutdown(){}}/**
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
 */const $0="ConnectivityMonitor";class Y0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe($0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe($0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eh=null;function om(){return eh===null?eh=function(){return 268435456+Math.round(2147483648*Math.random())}():eh++,"0x"+eh.toString(16)}/**
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
 */const Ip="RestConnection",gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Mh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,n,s,o,u){const f=om(),m=this.Go(e,n.toUriEncodedString());fe(Ip,`Sending RPC '${e}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:y}=new URL(m),T=vo(y);return this.jo(e,m,g,s,T).then(S=>(fe(Ip,`Received RPC '${e}' ${f}: `,S),S),S=>{throw lo(Ip,`RPC '${e}' ${f} failed with error: `,S,"url: ",m,"request:",s),S})}Jo(e,n,s,o,u,f){return this.Wo(e,n,s,o,u)}zo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,n){const s=gN[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
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
 */class vN{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Jt="WebChannelConnection";class _N extends yN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,o,u){const f=om();return new Promise((m,g)=>{const y=new KT;y.setWithCredentials(!0),y.listenOnce(QT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case ph.NO_ERROR:const S=y.getResponseJson();fe(Jt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),m(S);break;case ph.TIMEOUT:fe(Jt,`RPC '${e}' ${f} timed out`),g(new ye(ie.DEADLINE_EXCEEDED,"Request time out"));break;case ph.HTTP_ERROR:const A=y.getStatus();if(fe(Jt,`RPC '${e}' ${f} failed with status:`,A,"response text:",y.getResponseText()),A>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const M=L?.error;if(M&&M.status&&M.message){const G=function(q){const ne=q.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(ne)>=0?ne:ie.UNKNOWN}(M.status);g(new ye(G,M.message))}else g(new ye(ie.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ye(ie.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{c_:e,streamId:f,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{fe(Jt,`RPC '${e}' ${f} completed.`)}});const T=JSON.stringify(o);fe(Jt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}P_(e,n,s){const o=om(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=WT(),m=ZT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");fe(Jt,`Creating RPC '${e}' stream ${o}: ${T}`,g);const S=f.createWebChannel(T,g);this.T_(S);let A=!1,L=!1;const M=new vN({Ho:$=>{L?fe(Jt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(A||(fe(Jt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),fe(Jt,`RPC '${e}' stream ${o} sending:`,$),S.send($))},Yo:()=>S.close()}),G=($,q,ne)=>{$.listen(q,te=>{try{ne(te)}catch(ue){setTimeout(()=>{throw ue},0)}})};return G(S,jl.EventType.OPEN,()=>{L||(fe(Jt,`RPC '${e}' stream ${o} transport opened.`),M.s_())}),G(S,jl.EventType.CLOSE,()=>{L||(L=!0,fe(Jt,`RPC '${e}' stream ${o} transport closed`),M.__(),this.I_(S))}),G(S,jl.EventType.ERROR,$=>{L||(L=!0,lo(Jt,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),M.__(new ye(ie.UNAVAILABLE,"The operation could not be completed")))}),G(S,jl.EventType.MESSAGE,$=>{var q;if(!L){const ne=$.data[0];ft(!!ne,16349);const te=ne,ue=te?.error||((q=te[0])===null||q===void 0?void 0:q.error);if(ue){fe(Jt,`RPC '${e}' stream ${o} received error:`,ue);const le=ue.status;let ce=function(R){const N=Tt[R];if(N!==void 0)return C2(N)}(le),I=ue.message;ce===void 0&&(ce=ie.INTERNAL,I="Unknown error status: "+le+" with message "+ue.message),L=!0,M.__(new ye(ce,I)),S.close()}else fe(Jt,`RPC '${e}' stream ${o} received:`,ne),M.a_(ne)}}),G(m,XT.STAT_EVENT,$=>{$.stat===Xp.PROXY?fe(Jt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Xp.NOPROXY&&fe(Jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{M.o_()},0),M}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Op(){return typeof document<"u"?document:null}/**
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
 */function sf(r){return new I2(r,!0)}/**
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
 */class P1{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const K0="PersistentStream";class EN{constructor(e,n,s,o,u,f,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new P1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(Ks(n.toString()),Ks("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===n&&this.W_(s,o)},s=>{e(()=>{const o=new ye(ie.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return fe(K0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(fe(K0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TN extends EN{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ft(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ft(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ft(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=V2(e.writeResults,e.commitTime),s=eo(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=M2(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>P2(this.serializer,s))};this.k_(n)}}/**
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
 */class bN{}class SN extends bN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(e,sm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(ie.UNKNOWN,u.toString())})}Jo(e,n,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Jo(e,sm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ye(ie.UNKNOWN,f.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class AN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ks(n),this._a=!1):fe("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const _u="RemoteStore";class wN{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(f=>{s.enqueueAndForget(async()=>{Tu(this)&&(fe(_u,"Restarting streams for network reachability change."),await async function(g){const y=We(g);y.Ia.add(4),await Eu(y),y.Aa.set("Unknown"),y.Ia.delete(4),await af(y)}(this))})}),this.Aa=new AN(s,o)}}async function af(r){if(Tu(r))for(const e of r.da)await e(!0)}async function Eu(r){for(const e of r.da)await e(!1)}function Tu(r){return We(r).Ia.size===0}async function V1(r,e,n){if(!yu(e))throw e;r.Ia.add(1),await Eu(r),r.Aa.set("Offline"),n||(n=()=>fN(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{fe(_u,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await af(r)})}function U1(r,e){return e().catch(n=>V1(r,n,e))}async function of(r){const e=We(r),n=Qr(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:jm;for(;RN(e);)try{const o=await dN(e.localStore,s);if(o===null){e.Pa.length===0&&n.B_();break}s=o.batchId,CN(e,o)}catch(o){await V1(e,o)}L1(e)&&j1(e)}function RN(r){return Tu(r)&&r.Pa.length<10}function CN(r,e){r.Pa.push(e);const n=Qr(r);n.x_()&&n.Z_&&n.X_(e.mutations)}function L1(r){return Tu(r)&&!Qr(r).M_()&&r.Pa.length>0}function j1(r){Qr(r).start()}async function IN(r){Qr(r).na()}async function ON(r){const e=Qr(r);for(const n of r.Pa)e.X_(n.mutations)}async function DN(r,e,n){const s=r.Pa.shift(),o=Km.from(s,e,n);await U1(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await of(r)}async function NN(r,e){e&&Qr(r).Z_&&await async function(s,o){if(function(f){return R2(f)&&f!==ie.ABORTED}(o.code)){const u=s.Pa.shift();Qr(s).N_(),await U1(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await of(s)}}(r,e),L1(r)&&j1(r)}async function Q0(r,e){const n=We(r);n.asyncQueue.verifyOperationInProgress(),fe(_u,"RemoteStore received new credentials");const s=Tu(n);n.Ia.add(3),await Eu(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await af(n)}async function xN(r,e){const n=We(r);e?(n.Ia.delete(2),await af(n)):e||(n.Ia.add(2),await Eu(n),n.Aa.set("Unknown"))}function Qr(r){return r.ma||(r.ma=function(n,s,o){const u=We(n);return u.ia(),new TN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:IN.bind(null,r),n_:NN.bind(null,r),ea:ON.bind(null,r),ta:DN.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await of(r)):(await r.ma.stop(),r.Pa.length>0&&(fe(_u,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
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
 */class Wm{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Bs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Wm(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function z1(r,e){if(Ks("AsyncQueue",`${e}: ${r}`),yu(r))return new ye(ie.UNAVAILABLE,`${e}: ${r}`);throw r}class MN{constructor(){this.queries=X0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const o=We(n),u=o.queries;o.queries=X0(),u.forEach((f,m)=>{for(const g of m.wa)g.onError(s)})})(this,new ye(ie.ABORTED,"Firestore shutting down"))}}function X0(){return new Ws(r=>v1(r),y1)}function kN(r){r.Da.forEach(e=>{e.next()})}var Z0,W0;(W0=Z0||(Z0={})).Fa="default",W0.Cache="cache";const PN="SyncEngine";class VN{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new Ws(m=>v1(m),y1),this.Tu=new Map,this.Iu=new Set,this.du=new mn(Re.comparator),this.Eu=new Map,this.Au=new Qm,this.Ru={},this.Vu=new Map,this.mu=po.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function UN(r,e,n){const s=BN(r);try{const o=await function(f,m){const g=We(f),y=rt.now(),T=m.reduce((L,M)=>L.add(M.key),tn());let S,A;return g.persistence.runTransaction("Locally write mutations","readwrite",L=>{let M=Uh(),G=tn();return g.Os.getEntries(L,T).next($=>{M=$,M.forEach((q,ne)=>{ne.isValidDocument()||(G=G.add(q))})}).next(()=>g.localDocuments.getOverlayedDocuments(L,M)).next($=>{S=$;const q=[];for(const ne of m){const te=b2(ne,S.get(ne.key).overlayedDocument);te!=null&&q.push(new Js(ne.key,te,c1(te.value.mapValue),ir.exists(!0)))}return g.mutationQueue.addMutationBatch(L,y,q,m)}).next($=>{A=$;const q=$.applyToLocalDocumentSet(S,G);return g.documentOverlayCache.saveOverlays(L,$.batchId,q)})}).then(()=>({batchId:A.batchId,changes:E1(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let y=f.Ru[f.currentUser.toKey()];y||(y=new mn(Ue)),y=y.insert(m,g),f.Ru[f.currentUser.toKey()]=y}(s,o.batchId,n),await lf(s,o.changes),await of(s.remoteStore)}catch(o){const u=z1(o,"Failed to persist write");n.reject(u)}}function J0(r,e,n){const s=We(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Pu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=We(f);g.onlineState=m;let y=!1;g.queries.forEach((T,S)=>{for(const A of S.wa)A.va(m)&&(y=!0)}),y&&kN(g)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LN(r,e){const n=We(r),s=e.batch.batchId;try{const o=await hN(n.localStore,e);H1(n,s,null),B1(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await lf(n,o)}catch(o){await Um(o)}}async function jN(r,e,n){const s=We(r);try{const o=await function(f,m){const g=We(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return g.mutationQueue.lookupMutationBatch(y,m).next(S=>(ft(S!==null,37113),T=S.keys(),g.mutationQueue.removeMutationBatch(y,S))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,T,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>g.localDocuments.getDocuments(y,T))})}(s.localStore,e);H1(s,e,n),B1(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await lf(s,o)}catch(o){await Um(o)}}function B1(r,e){(r.Vu.get(e)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(e)}function H1(r,e,n){const s=We(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}async function lf(r,e,n){const s=We(r),o=[],u=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach((m,g)=>{f.push(s.gu(g,e,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(T=void 0)===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){o.push(y);const S=Zm.Es(g.targetId,y);u.push(S)}}))}),await Promise.all(f),s.hu.J_(o),await async function(g,y){const T=We(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>ee.forEach(y,A=>ee.forEach(A.Is,L=>T.persistence.referenceDelegate.addReference(S,A.targetId,L)).next(()=>ee.forEach(A.ds,L=>T.persistence.referenceDelegate.removeReference(S,A.targetId,L)))))}catch(S){if(!yu(S))throw S;fe(lN,"Failed to update sequence numbers: "+S)}for(const S of y){const A=S.targetId;if(!S.fromCache){const L=T.Fs.get(A),M=L.snapshotVersion,G=L.withLastLimboFreeSnapshotVersion(M);T.Fs=T.Fs.insert(A,G)}}}(s.localStore,u))}async function zN(r,e){const n=We(r);if(!n.currentUser.isEqual(e)){fe(PN,"User change. New user:",e.toKey());const s=await k1(n.localStore,e);n.currentUser=e,function(u,f){u.Vu.forEach(m=>{m.forEach(g=>{g.reject(new ye(ie.CANCELLED,f))})}),u.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lf(n,s.Bs)}}function BN(r){const e=We(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jN.bind(null,e),e}class Bh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return cN(this.persistence,new oN,e.initialUser,this.serializer)}Du(e){return new M1(Xm.Vi,this.serializer)}bu(e){return new pN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bh.provider={build:()=>new Bh};class HN extends Bh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ft(this.persistence.referenceDelegate instanceof zh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new $2(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new M1(s=>zh.Vi(s,n),this.serializer)}}class lm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>J0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zN.bind(null,this.syncEngine),await xN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MN}()}createDatastore(e){const n=sf(e.databaseInfo.databaseId),s=function(u){return new _N(u)}(e.databaseInfo);return function(u,f,m,g){return new SN(u,f,m,g)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new wN(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>J0(this.syncEngine,n,0),function(){return Y0.C()?new Y0:new mN}())}createSyncEngine(e,n){return function(o,u,f,m,g,y,T){const S=new VN(o,u,f,m,g,y);return T&&(S.fu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=We(o);fe(_u,"RemoteStore shutting down."),u.Ia.add(5),await Eu(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lm.provider={build:()=>new lm};/**
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
 */const Xr="FirestoreClient";class qN{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=en.UNAUTHENTICATED,this.clientId=Pm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{fe(Xr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(fe(Xr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=z1(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Dp(r,e){r.asyncQueue.verifyOperationInProgress(),fe(Xr,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await k1(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{lo("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{lo("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=e}async function eE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await FN(r);fe(Xr,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Q0(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Q0(e.remoteStore,o)),r._onlineComponents=e}async function FN(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){fe(Xr,"Using user provided OfflineComponentProvider");try{await Dp(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await Dp(r,new Bh)}}else fe(Xr,"Using default OfflineComponentProvider"),await Dp(r,new HN(void 0));return r._offlineComponents}async function GN(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(fe(Xr,"Using user provided OnlineComponentProvider"),await eE(r,r._uninitializedComponentsProvider._online)):(fe(Xr,"Using default OnlineComponentProvider"),await eE(r,new lm))),r._onlineComponents}function $N(r){return GN(r).then(e=>e.syncEngine)}/**
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
 */function q1(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const tE=new Map;/**
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
 */const F1="firestore.googleapis.com",nE=!0;class iE{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F1,this.ssl=nE}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:nE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=x1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F2)throw new ye(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q1((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jm{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new bD;switch(s.type){case"firstParty":return new RD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=tE.get(n);s&&(fe("ComponentProvider","Removing Datastore"),tE.delete(n),s.terminate())}(this),Promise.resolve()}}function YN(r,e,n,s={}){var o;r=Wp(r,Jm);const u=vo(e),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${n}`;u&&(aT(`https://${g}`),oT("Firestore",!0)),f.host!==F1&&f.host!==g&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:g,ssl:u,emulatorOptions:s});if(!qs(y,m)&&(r._setSettings(y),s.mockUserToken)){let T,S;if(typeof s.mockUserToken=="string")T=s.mockUserToken,S=en.MOCK_USER;else{T=kR(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ye(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new en(A)}r._authCredentials=new SD(new e1(T,S))}}/**
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
 */class eg{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new eg(this.firestore,e,this._query)}}class nn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new su(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}toJSON(){return{type:nn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(gu(n,nn._jsonSchema))return new nn(e,s||null,new Re(gt.fromString(n.referencePath)))}}nn._jsonSchemaVersion="firestore/documentReference/1.0",nn._jsonSchema={type:St("string",nn._jsonSchemaVersion),referencePath:St("string")};class su extends eg{constructor(e,n,s){super(e,n,a2(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new Re(e))}withConverter(e){return new su(this.firestore,e,this._path)}}function KN(r,e,...n){if(r=ei(r),arguments.length===1&&(e=Pm.newId()),xD("doc","path",e),r instanceof Jm){const s=gt.fromString(e,...n);return w0(s),new nn(r,null,new Re(s))}{if(!(r instanceof nn||r instanceof su))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(gt.fromString(e,...n));return w0(s),new nn(r.firestore,r instanceof su?r.converter:null,new Re(s))}}/**
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
 */const rE="AsyncQueue";class sE{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new P1(this,"async_queue_retry"),this.oc=()=>{const s=Op();s&&fe(rE,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Op();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Op();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Bs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!yu(e))throw e;fe(rE,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Ks("INTERNAL UNHANDLED ERROR: ",aE(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const o=Wm.createAndSchedule(this,e,n,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&Ie(47125,{hc:aE(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function aE(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class G1 extends Jm{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new sE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sE(e),this._firestoreClient=void 0,await e}}}function QN(r,e){const n=typeof r=="object"?r:hT(),s=typeof r=="string"?r:Mh,o=Sm(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=xR("firestore");u&&YN(o,...u)}return o}function XN(r){if(r._terminated)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ZN(r),r._firestoreClient}function ZN(r){var e,n,s;const o=r._freezeSettings(),u=function(m,g,y,T){return new GD(m,g,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,q1(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new qN(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m?._online.build();return{_offline:m?._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Si.fromBase64String(e))}catch(n){throw new ye(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(Si.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gu(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:St("string",Xn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class tg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $1{constructor(e){this._methodName=e}}/**
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
 */class rr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(gu(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:St("string",rr._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class sr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gu(e,sr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sr(e.vectorValues);throw new ye(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sr._jsonSchemaVersion="firestore/vectorValue/1.0",sr._jsonSchema={type:St("string",sr._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const WN=/^__.*__$/;class JN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Js(e,this.data,this.fieldMask,n,this.fieldTransforms):new vu(e,this.data,n,this.fieldTransforms)}}function Y1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ec:r})}}class ng{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ng(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Hh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Y1(this.Ec)&&WN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ex{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||sf(e)}Dc(e,n,s,o=!1){return new ng({Ec:e,methodName:n,bc:s,path:Yt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tx(r){const e=r._freezeSettings(),n=sf(r._databaseId);return new ex(r._databaseId,!!e.ignoreUndefinedProperties,n)}function nx(r,e,n,s,o,u={}){const f=r.Dc(u.merge||u.mergeFields?2:0,e,n,o);Z1("Data must be an object, but it was:",f,s);const m=Q1(s,f);let g,y;if(u.merge)g=new Wn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const A=ix(e,S,n);if(!f.contains(A))throw new ye(ie.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);sx(T,A)||T.push(A)}g=new Wn(T),y=f.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,y=f.fieldTransforms;return new JN(new Qn(m),g,y)}function K1(r,e){if(X1(r=ei(r)))return Z1("Unsupported field value:",e,r),Q1(r,e);if(r instanceof $1)return function(s,o){if(!Y1(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=K1(m,o.yc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=ei(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return g2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=rt.fromDate(s);return{timestampValue:rm(o.serializer,u)}}if(s instanceof rt){const u=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:rm(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xn)return{bytesValue:O2(o.serializer,s._byteString)};if(s instanceof nn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:D1(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sr)return function(f,m){return{mapValue:{fields:{[l1]:{stringValue:u1},[Jp]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.wc("VectorValues must only contain numeric values.");return Ym(m.serializer,y)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${Vm(s)}`)}(r,e)}function Q1(r,e){const n={};return i1(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bo(r,(s,o)=>{const u=K1(o,e.Vc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function X1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof rt||r instanceof rr||r instanceof Xn||r instanceof nn||r instanceof $1||r instanceof sr)}function Z1(r,e,n){if(!X1(n)||!t1(n)){const s=Vm(n);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function ix(r,e,n){if((e=ei(e))instanceof tg)return e._internalPath;if(typeof e=="string")return W1(r,e);throw Hh("Field path arguments must be of type string or ",r,!1,void 0,n)}const rx=new RegExp("[~\\*/\\[\\]]");function W1(r,e,n){if(e.search(rx)>=0)throw Hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new tg(...e.split("."))._internalPath}catch{throw Hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Hh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new ye(ie.INVALID_ARGUMENT,m+r+g)}function sx(r,e){return r.some(n=>n.isEqual(e))}/**
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
 */class J1{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ax(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ax extends J1{data(){return super.data()}}function eb(r,e){return typeof e=="string"?W1(r,e):e instanceof tg?e._internalPath:e._delegate._internalPath}/**
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
 */function ox(r,e,n){let s;return s=r?r.toFirestore(e):e,s}class th{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class to extends J1{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(eb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=to._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}to._jsonSchemaVersion="firestore/documentSnapshot/1.0",to._jsonSchema={type:St("string",to._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class vh extends to{data(e={}){return super.data(e)}}class Yl{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new th(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vh(this._firestore,this._userDataWriter,s.key,s,new th(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new vh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new th(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new vh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new th(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:lx(m.type),doc:g,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lx(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:r})}}Yl._jsonSchemaVersion="firestore/querySnapshot/1.0",Yl._jsonSchema={type:St("string",Yl._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};function ux(r,e,n){r=Wp(r,nn);const s=Wp(r.firestore,G1),o=ox(r.converter,e);return cx(s,[nx(tx(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,ir.none())])}function cx(r,e){return function(s,o){const u=new Bs;return s.asyncQueue.enqueueAndForget(async()=>UN(await $N(s),o,u)),u.promise}(XN(r),e)}(function(e,n=!0){(function(o){To=o})(_o),oo(new Fs("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new G1(new AD(s.getProvider("auth-internal")),new CD(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ye(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kh(y.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),$r(E0,T0,e),$r(E0,T0,"esm2017")})();const hx={apiKey:"AIzaSyANdjndOuLBoIYrxEUrd37cAdBssA_3nE0",authDomain:"lazyfetch.firebaseapp.com",projectId:"lazyfetch",storageBucket:"lazyfetch.firebasestorage.app",messagingSenderId:"579439349693",appId:"1:579439349693:web:1e5032b61048a7ee8b8cd4"},tb=cT(hx),nb=ED(tb),fx=QN(tb);async function dx(r,e,n){try{console.log("👉 Registrando usuario...");const o=(await aO(nb,e,n)).user.uid;return console.log("✅ Usuario creado con UID:",o),console.log("👉 Escribiendo documento en Firestore..."),await ux(KN(fx,"users",o),{username:r,email:e,apiKeys:{}}),console.log("✅ Documento en Firestore creado con éxito"),o}catch(s){throw console.error("❌ Error en registerUser:",s),s}}async function px(r,e){try{return(await oO(nb,r,e)).user.uid}catch(n){throw n}}const mx=At.div`
 position: fixed;
  bottom: 50px; 
  right: 20px;
  max-width: 320px; 
  padding: 14px 22px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);
  font-weight: 600;
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${r=>r.type==="success"?"rgba(40, 167, 69, 0.65)":"rgba(220, 53, 69, 0.65)"};
  animation: fadeInOut 4s forwards;
  z-index: 9999;

  .close-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 1;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;function ib({type:r,message:e,onClose:n}){return Y.useEffect(()=>{const s=setTimeout(()=>{n()},4e3);return()=>clearTimeout(s)},[n]),Z.jsxs(mx,{type:r,children:[e,Z.jsx("button",{className:"close-btn",onClick:n,"aria-label":"Close message",children:"×"})]})}function gx(){const[r,e]=Y.useState(""),[n,s]=Y.useState(""),[o,u]=Y.useState(null),f=gE();async function m(g){g.preventDefault(),u(null);try{await px(r,n),u({type:"success",message:"Login successful"}),setTimeout(()=>{f("/core")},1500)}catch(y){u({type:"error",message:"Login error: "+y.message})}}return Z.jsxs(JE,{children:[Z.jsx("h3",{children:"Sign in"}),Z.jsxs("form",{onSubmit:m,children:[Z.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:g=>e(g.target.value),required:!0}),Z.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:g=>s(g.target.value),required:!0}),Z.jsx("button",{type:"submit",children:"Login"})]}),o&&Z.jsx(ib,{type:o.type,message:o.message,onClose:()=>u(null)})]})}function yx(){const[r,e]=Y.useState(""),[n,s]=Y.useState(""),[o,u]=Y.useState(""),[f,m]=Y.useState(""),[g,y]=Y.useState(null);async function T(S){if(S.preventDefault(),y(null),o!==f){y({type:"error",message:"Passwords do not match."});return}try{await dx(r,n,o),y({type:"success",message:"Account created successfully."}),e(""),s(""),u(""),m("")}catch(A){y({type:"error",message:"Register error: "+A.message})}}return Z.jsxs(JE,{children:[Z.jsx("p",{className:"intro-text",children:"You need an account to use the fastest fetch in the world. It only takes one minute."}),Z.jsx("p",{className:"form-title",children:"Create Account"}),Z.jsxs("form",{onSubmit:T,children:[Z.jsx("input",{type:"text",placeholder:"Username",value:r,onChange:S=>e(S.target.value),required:!0}),Z.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:S=>s(S.target.value),required:!0}),Z.jsx("input",{type:"password",placeholder:"Password",value:o,onChange:S=>u(S.target.value),required:!0}),Z.jsx("input",{type:"password",placeholder:"Confirm Password",value:f,onChange:S=>m(S.target.value),required:!0}),Z.jsx("button",{type:"submit",children:"Register"})]}),g&&Z.jsx(ib,{type:g.type,message:g.message,onClose:()=>y(null)})]})}const vx=At.div`
  position: fixed;
  top: 70px; /* Ajusta esto según la altura de tu navbar */
  right: 0;
  width: 300px;
  height: calc(100vh - 70px); /* Para no tapar la navbar */
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(50px);
  color: #fff;
  border-radius: 15px;

  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transform: ${({$open:r})=>r?"translateX(0)":"translateX(100%)"};
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 999; /* Debajo de la navbar */
  padding: 20px;
`;function _x(){const{isSidebarOpen:r}=wE();return Z.jsxs(vx,{$open:r,children:[Z.jsx(gx,{}),Z.jsx(yx,{})]})}const Ex=At.main`
  min-height: 100vh;
  display: flex;
  flex-direction: row; /* Cambiamos de column a row */
  justify-content: space-between;
  padding-top: 5.75rem;
  width: 90%;
  margin: 0 auto;
`;function Tx(){return Z.jsxs(Z.Fragment,{children:[Z.jsx(_x,{}),Z.jsx(SR,{}),Z.jsxs(Ex,{children:[Z.jsx(yR,{}),Z.jsx(ER,{})]})]})}const bx=At.div`
  display: flex;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 4rem;
  justify-content: space-between;
`,Sx=At.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`,Ax=At.div`
  padding: 16px 20px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: white;
   border-bottom: 1px solid rgba(0, 0, 0, 0.5); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);   
`,wx=At.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 1.5rem;
    color: ${ht.accent};
  }
`,Rx=At.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  overflow-y: auto;
`,rb=[{id:"1",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"1. You get a toke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!1},{id:"2",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"2. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!1,hasParams:!1},{id:"3",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"3. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!1},{id:"4",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"4. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!1,hasParams:!1},{id:"5",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"5. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!0},{id:"6",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"6. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!1},{id:"7",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"7. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!1},{id:"8",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"8. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!1,hasParams:!1},{id:"9",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"9. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!0},{id:"10",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"10. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!1,hasParams:!0},{id:"11",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"11. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!1},{id:"12",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"12. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!0},{id:"13",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"13. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!0,hasParams:!1},{id:"14",image:"cards/chuck.jpg",baseUrl:"https://api.chucknorris.io",endpoint:"/jokes/random",description:"14. You get a joke inspired in Chuck Norris:",exampleData:'"dylan hallmark beat Chuck Norris up"',requiresApiKey:!1,hasParams:!1}],Cx=At.div`
  background-color: ${ht.primary};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
  transition: transform 0.2s ease;
  padding: 16px;
  gap: 12px;
  color: white;

  &:hover {
    transform: scale(1.02);
  }

  .link {
    font-weight: bold;
    color: #4fc3f7;
    text-decoration: none;
    font-size: 0.95rem;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }

  .image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 8px;
  }

  .description-box {
    padding: 12px;
    background-color: ${ht.secondary};
    border-radius: 8px;
  }

  .description {
    margin: 0;
    font-size: 0.95rem;
    color: black;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .icons {
    display: flex;
    gap: 8px;
    margin-top: 4px;
    flex-wrap: wrap;
  }

  .icon {
    background-color: #fff;
    color: #1e1e1e;
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
  }

 
    
   
`;function sb({id:r,image:e,baseUrl:n,description:s,exampleData:o,requiresApiKey:u,hasParams:f}){const m=!u&&!f;return Z.jsx(mm,{to:`/utils/${r}`,style:{textDecoration:"none"},children:Z.jsxs(Cx,{children:[Z.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"link",onClick:g=>g.stopPropagation(),children:n}),Z.jsx("img",{src:e,alt:"Endpoint thumbnail",className:"image"}),Z.jsx("div",{className:"description-box",children:Z.jsxs("p",{className:"description",children:[s," ",o]})}),(u||f)&&Z.jsxs("div",{className:"icons",children:[u&&Z.jsx("span",{className:"icon",title:"API key required",children:"🔑 API KEY"}),f&&Z.jsx("span",{className:"icon",title:"Params required",children:"📎 PARAMS"})]}),m&&Z.jsx("div",{className:"icon",title:"Fastest Fetch, don't need config",style:{backgroundColor:"#007ACC"},children:"⭐ LAZYFETCH SELECTION"})]})})}const Ix=At.div`
  display: flex;
  align-items: center;
  background-color: ${ht.secondary};
  border-radius: 999px;
  padding: 6px 12px;
  gap: 8px;

  .icon {
    background-color: white;
    color: ${ht.secondary};
    border-radius: 50%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .input {
    border: none;
    background: transparent;
    color: black;
    outline: none;
    font-size: 0.9rem;
    width: 180px;

    &::placeholder {
      color: #ccc;
    }
  }
`;function Ox({value:r,onChange:e}){return Z.jsxs(Ix,{children:[Z.jsx("div",{className:"icon",children:"🔍"}),Z.jsx("input",{type:"text",placeholder:"Search endpoints...",value:r,onChange:e,className:"input"})]})}function Dx(){const[r,e]=Y.useState(""),n=rb.filter(s=>s.description.toLowerCase().includes(r.toLowerCase()));return Z.jsxs(Sx,{children:[Z.jsx(Ax,{children:Z.jsxs(wx,{children:[Z.jsx("h1",{children:"SELECT ONE OF +100 ENDPOINTS"}),Z.jsx(Ox,{value:r,onChange:s=>e(s.target.value)})]})}),Z.jsx(Rx,{children:n.map(s=>Z.jsx(sb,{id:String(s.id),image:s.image,baseUrl:s.baseUrl,description:s.description,exampleData:s.exampleData,requiresApiKey:s.requiresApiKey,hasParams:s.hasParams},s.id))})]})}function Nx(){return Z.jsx(bx,{children:Z.jsx(Dx,{})})}function xx(){const{id:r}=yA(),e=rb.find(n=>String(n.id)===r);return e?Z.jsx("div",{children:Z.jsx(sb,{...e})}):Z.jsxs("p",{children:["No se encontró ninguna card con el ID: ",r]})}function Mx(){return Z.jsx("div",{style:{border:"1px solid blue"},children:"HeaderUtilsComponents"})}const kx=At.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .tabs {
    display: flex;
    gap: 1rem;

    button {
      background: none;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-weight: bold;
      color: #555;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;

      &.active {
      
         border-color: ${ht.accent};
    }
   

      &:hover {
        color: #000;
      }
    }
  }

  .content {
    border: 1px solid #ddd;
    background: #1e1e1e;
    padding: 1rem;
    border-radius: 6px;
    color:white;
    p {
      margin: 0;
    }
  }
`;function Px(){const[r,e]=Y.useState("js");function n(s){e(s)}return Z.jsxs(kx,{children:[Z.jsxs("div",{className:"tabs",children:[Z.jsx("button",{onClick:()=>n("js"),className:r==="js"?"active":"",children:"JavaScript"}),Z.jsx("button",{onClick:()=>n("react"),className:r==="react"?"active":"",children:"React"}),Z.jsx("button",{onClick:()=>n("tsx"),className:r==="cdn"?"active":"",children:"CDN"})]}),Z.jsxs("div",{className:"content",children:[r==="js"&&Z.jsx("p",{children:"Contenido para JavaScript"}),r==="react"&&Z.jsx("p",{children:"Contenido para React"}),r==="tsx"&&Z.jsx("p",{children:"Contenido para TSX"})]})]})}const Vx=At.div`
padding-top: 3.75rem;
height: 100vh;


.selected{
    border: 1px solid red;
  width: 30%;
 // height: 90vh;

}

.utils{
    width: 65%;
   // height: 90vh;
}

section{ //la chicha a la izq el div con el endpoint selected y a derecha utils
    display: flex;
    justify-content: space-between;
    height: 95%;
}



`;function Ux(){return Z.jsxs(Vx,{style:{border:"5px dotted red"},children:[Z.jsx(Mx,{}),Z.jsxs("section",{style:{border:"solid 5px black"},children:[Z.jsx("div",{className:"selected",style:{border:"5px solid yellow"},children:Z.jsx(xx,{})}),Z.jsx("div",{style:{border:"5px solid yellow"},className:"utils",children:Z.jsx(Px,{})})]})]})}function Lx(){return Z.jsxs(xA,{children:[Z.jsx(nh,{path:"/",element:Z.jsx(Tx,{})}),Z.jsx(nh,{path:"/core",element:Z.jsx(Nx,{})}),Z.jsx(nh,{path:"/utils/:id",element:Z.jsx(Ux,{})})]})}const jx=At.footer`
  width: 100%;
  height: 5rem;
  background-color: ${ht.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    height: 2.5rem;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1); /* Por si son logos oscuros */
    opacity: 0.8;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: scale(1.3);
      opacity: 1;
    }
  }
`;function zx(){return Z.jsxs(jx,{children:[Z.jsx("img",{src:"icon.svg",alt:"Icon 1"}),Z.jsx("img",{src:"githubIcon.svg",alt:"Icon 2"}),Z.jsx("img",{src:"AESicon.svg",alt:"Icon 3"}),Z.jsx("img",{src:"icon4.svg",alt:"Icon 4"})]})}function Bx(){return Z.jsx(Z.Fragment,{children:Z.jsxs(fw,{children:[Z.jsx(pR,{}),Z.jsx(Lx,{}),Z.jsx(zx,{})]})})}zS.createRoot(document.getElementById("root")).render(Z.jsx(Y.StrictMode,{children:Z.jsx(nw,{basename:"/LazyFetch/",children:Z.jsx(Bx,{})})}));
