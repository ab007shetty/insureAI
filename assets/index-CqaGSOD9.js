(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function E0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mp={exports:{}},rl={},Ep={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),w0=Symbol.for("react.portal"),T0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),L0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),jd=Symbol.iterator;function U0(t){return t===null||typeof t!="object"?null:(t=jd&&t[jd]||t["@@iterator"],typeof t=="function"?t:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,bp={};function Es(t,e,n){this.props=t,this.context=e,this.refs=bp,this.updater=n||wp}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ap(){}Ap.prototype=Es.prototype;function Iu(t,e,n){this.props=t,this.context=e,this.refs=bp,this.updater=n||wp}var Fu=Iu.prototype=new Ap;Fu.constructor=Iu;Tp(Fu,Es.prototype);Fu.isPureReactComponent=!0;var Gd=Array.isArray,Cp=Object.prototype.hasOwnProperty,ku={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Np(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cp.call(e,i)&&!Rp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bo,type:t,key:s,ref:o,props:r,_owner:ku.current}}function I0(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ou(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function F0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hd=/\/+/g;function Cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F0(""+t.key):e.toString(36)}function ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case w0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Cl(o,0):i,Gd(r)?(n="",t!=null&&(n=t.replace(Hd,"$&/")+"/"),ya(r,e,n,"",function(c){return c})):r!=null&&(Ou(r)&&(r=I0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Cl(s,a);o+=ya(s,e,n,l,r)}else if(l=U0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Cl(s,a++),o+=ya(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fo(t,e,n){if(t==null)return t;var i=[],r=0;return ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function k0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Sa={transition:null},O0={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:ku};function Lp(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:Fo,forEach:function(t,e,n){Fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fo(t,function(){e++}),e},toArray:function(t){return Fo(t,function(e){return e})||[]},only:function(t){if(!Ou(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Es;Fe.Fragment=T0;Fe.Profiler=A0;Fe.PureComponent=Iu;Fe.StrictMode=b0;Fe.Suspense=L0;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;Fe.act=Lp;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ku.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cp.call(e,l)&&!Rp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:bo,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:R0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C0,_context:t},t.Consumer=t};Fe.createElement=Np;Fe.createFactory=function(t){var e=Np.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:N0,render:t}};Fe.isValidElement=Ou;Fe.lazy=function(t){return{$$typeof:D0,_payload:{_status:-1,_result:t},_init:k0}};Fe.memo=function(t,e){return{$$typeof:P0,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};Fe.unstable_act=Lp;Fe.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Fe.useContext=function(t){return Wt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Fe.useId=function(){return Wt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Wt.current.useRef(t)};Fe.useState=function(t){return Wt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Wt.current.useTransition()};Fe.version="18.3.1";Ep.exports=Fe;var xe=Ep.exports;const Pp=E0(xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=xe,B0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,H0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V0={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)G0.call(e,i)&&!V0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B0,type:t,key:s,ref:o,props:r,_owner:H0.current}}rl.Fragment=j0;rl.jsx=Dp;rl.jsxs=Dp;Mp.exports=rl;var u=Mp.exports,Pc={},Up={exports:{}},hn={},Ip={exports:{}},Fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var k=D.length;D.push(B);e:for(;0<k;){var le=k-1>>>1,J=D[le];if(0<r(J,B))D[le]=B,D[k]=J,k=le;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var B=D[0],k=D.pop();if(k!==B){D[0]=k;e:for(var le=0,J=D.length,j=J>>>1;le<j;){var Y=2*(le+1)-1,re=D[Y],se=Y+1,N=D[se];if(0>r(re,k))se<J&&0>r(N,re)?(D[le]=N,D[se]=k,le=se):(D[le]=re,D[Y]=k,le=Y);else if(se<J&&0>r(N,k))D[le]=N,D[se]=k,le=se;else break e}}return B}function r(D,B){var k=D.sortIndex-B.sortIndex;return k!==0?k:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,p=null,h=3,m=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=D)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function M(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,Q(E);else{var B=n(c);B!==null&&Z(M,B.startTime-D)}}function E(D,B){_=!1,y&&(y=!1,d(P),P=-1),m=!0;var k=h;try{for(v(B),p=n(l);p!==null&&(!(p.expirationTime>B)||D&&!$());){var le=p.callback;if(typeof le=="function"){p.callback=null,h=p.priorityLevel;var J=le(p.expirationTime<=B);B=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&i(l),v(B)}else i(l);p=n(l)}if(p!==null)var j=!0;else{var Y=n(c);Y!==null&&Z(M,Y.startTime-B),j=!1}return j}finally{p=null,h=k,m=!1}}var A=!1,R=null,P=-1,S=5,b=-1;function $(){return!(t.unstable_now()-b<S)}function G(){if(R!==null){var D=t.unstable_now();b=D;var B=!0;try{B=R(!0,D)}finally{B?U():(A=!1,R=null)}}else A=!1}var U;if(typeof x=="function")U=function(){x(G)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=G,U=function(){H.postMessage(null)}}else U=function(){g(G,0)};function Q(D){R=D,A||(A=!0,U())}function Z(D,B){P=g(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Q(E))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var k=h;h=B;try{return D()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var k=h;h=D;try{return B()}finally{h=k}},t.unstable_scheduleCallback=function(D,B,k){var le=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?le+k:le):k=le,D){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=k+J,D={id:f++,callback:B,priorityLevel:D,startTime:k,expirationTime:J,sortIndex:-1},k>le?(D.sortIndex=k,e(c,D),n(l)===null&&D===n(c)&&(y?(d(P),P=-1):y=!0,Z(M,k-le))):(D.sortIndex=J,e(l,D),_||m||(_=!0,Q(E))),D},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(D){var B=h;return function(){var k=h;h=B;try{return D.apply(this,arguments)}finally{h=k}}}})(Fp);Ip.exports=Fp;var W0=Ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=xe,fn=W0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,ro={};function Sr(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(ro[t]=e,t=0;t<e.length;t++)kp.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vd={},Wd={};function q0(t){return Dc.call(Wd,t)?!0:Dc.call(Vd,t)?!1:$0.test(t)?Wd[t]=!0:(Vd[t]=!0,!1)}function Y0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K0(t,e,n,i){if(e===null||typeof e>"u"||Y0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zu=/[\-:]([a-z])/g;function Bu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zu,Bu);Nt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zu,Bu);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zu,Bu);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ju(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K0(e,n,r,i)&&(n=null),i||r===null?q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),zp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),Bp=Symbol.for("react.offscreen"),Xd=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,Rl;function Hs(t){if(Rl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+t}var Nl=!1;function Ll(t,e){if(!t||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function Z0(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case Gr:return"Portal";case Uc:return"Profiler";case Gu:return"StrictMode";case Ic:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zp:return(t.displayName||"Context")+".Consumer";case Op:return(t._context.displayName||"Context")+".Provider";case Hu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vu:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function Q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J0(t){var e=jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=J0(t))}function Gp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oc(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $d(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hp(t,e){e=e.checked,e!=null&&ju(t,"checked",e,!1)}function zc(t,e){Hp(t,e);var n=Bi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Vs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function Vp(t,e){var n=Bi(e.value),i=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,Xp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){ex.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function $p(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$p(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tx=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(t,e){if(e){if(tx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xc=null,ns=null,is=null;function Zd(t){if(t=Ro(t)){if(typeof Xc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=cl(e),Xc(t.stateNode,t.type,e))}}function Yp(t){ns?is?is.push(t):is=[t]:ns=t}function Kp(){if(ns){var t=ns,e=is;if(is=ns=null,Zd(t),e)for(t=0;t<e.length;t++)Zd(e[t])}}function Zp(t,e){return t(e)}function Qp(){}var Pl=!1;function Jp(t,e,n){if(Pl)return t(e,n);Pl=!0;try{return Zp(t,e,n)}finally{Pl=!1,(ns!==null||is!==null)&&(Qp(),Kp())}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var i=cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var $c=!1;if(fi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{$c=!1}function nx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ys=!1,Ua=null,Ia=!1,qc=null,ix={onError:function(t){Ys=!0,Ua=t}};function rx(t,e,n,i,r,s,o,a,l){Ys=!1,Ua=null,nx.apply(ix,arguments)}function sx(t,e,n,i,r,s,o,a,l){if(rx.apply(this,arguments),Ys){if(Ys){var c=Ua;Ys=!1,Ua=null}else throw Error(ne(198));Ia||(Ia=!0,qc=c)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qd(t){if(Mr(t)!==t)throw Error(ne(188))}function ox(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Qd(r),t;if(s===i)return Qd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function tm(t){return t=ox(t),t!==null?nm(t):null}function nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nm(t);if(e!==null)return e;t=t.sibling}return null}var im=fn.unstable_scheduleCallback,Jd=fn.unstable_cancelCallback,ax=fn.unstable_shouldYield,lx=fn.unstable_requestPaint,ft=fn.unstable_now,cx=fn.unstable_getCurrentPriorityLevel,Xu=fn.unstable_ImmediatePriority,rm=fn.unstable_UserBlockingPriority,Fa=fn.unstable_NormalPriority,ux=fn.unstable_LowPriority,sm=fn.unstable_IdlePriority,sl=null,qn=null;function dx(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(sl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:px,fx=Math.log,hx=Math.LN2;function px(t){return t>>>=0,t===0?32:31-(fx(t)/hx|0)|0}var Bo=64,jo=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ws(a):(s&=o,s!==0&&(i=Ws(s)))}else o=n&~r,o!==0?i=Ws(o):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function mx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function om(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function Dl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function xx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $u(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Xe=0;function am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lm,qu,cm,um,dm,Kc=!1,Go=[],Li=null,Pi=null,Di=null,ao=new Map,lo=new Map,bi=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ds(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&qu(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return Li=Ds(Li,t,e,n,i,r),!0;case"dragenter":return Pi=Ds(Pi,t,e,n,i,r),!0;case"mouseover":return Di=Ds(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Ds(ao.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ds(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function fm(t){var e=ir(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=em(n),e!==null){t.blockedOn=e,dm(t.priority,function(){cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wc=i,n.target.dispatchEvent(i),Wc=null}else return e=Ro(n),e!==null&&qu(e),t.blockedOn=n,!1;e.shift()}return!0}function tf(t,e,n){Ma(t)&&n.delete(e)}function yx(){Kc=!1,Li!==null&&Ma(Li)&&(Li=null),Pi!==null&&Ma(Pi)&&(Pi=null),Di!==null&&Ma(Di)&&(Di=null),ao.forEach(tf),lo.forEach(tf)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,yx)))}function co(t){function e(r){return Us(r,t)}if(0<Go.length){Us(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Us(Li,t),Pi!==null&&Us(Pi,t),Di!==null&&Us(Di,t),ao.forEach(e),lo.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)fm(n),n.blockedOn===null&&bi.shift()}var rs=gi.ReactCurrentBatchConfig,Oa=!0;function Sx(t,e,n,i){var r=Xe,s=rs.transition;rs.transition=null;try{Xe=1,Yu(t,e,n,i)}finally{Xe=r,rs.transition=s}}function Mx(t,e,n,i){var r=Xe,s=rs.transition;rs.transition=null;try{Xe=4,Yu(t,e,n,i)}finally{Xe=r,rs.transition=s}}function Yu(t,e,n,i){if(Oa){var r=Zc(t,e,n,i);if(r===null)Hl(t,e,i,za,n),ef(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if(ef(t,i),e&4&&-1<vx.indexOf(t)){for(;r!==null;){var s=Ro(r);if(s!==null&&lm(s),s=Zc(t,e,n,i),s===null&&Hl(t,e,i,za,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hl(t,e,i,null,n)}}var za=null;function Zc(t,e,n,i){if(za=null,t=Wu(i),t=ir(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function hm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cx()){case Xu:return 1;case rm:return 4;case Fa:case ux:return 16;case sm:return 536870912;default:return 16}default:return 16}}var Ci=null,Ku=null,Ea=null;function pm(){if(Ea)return Ea;var t,e=Ku,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ea=r.slice(t,1<i?1-i:void 0)}function wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function nf(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:nf,this.isPropagationStopped=nf,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=pn(ws),Co=lt({},ws,{view:0,detail:0}),Ex=pn(Co),Ul,Il,Is,ol=lt({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Ul=t.screenX-Is.screenX,Il=t.screenY-Is.screenY):Il=Ul=0,Is=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:Il}}),rf=pn(ol),wx=lt({},ol,{dataTransfer:0}),Tx=pn(wx),bx=lt({},Co,{relatedTarget:0}),Fl=pn(bx),Ax=lt({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=pn(Ax),Rx=lt({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nx=pn(Rx),Lx=lt({},ws,{data:0}),sf=pn(Lx),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function Qu(){return Ix}var Fx=lt({},Co,{key:function(t){if(t.key){var e=Px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(t){return t.type==="keypress"?wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=pn(Fx),Ox=lt({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=pn(Ox),zx=lt({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),Bx=pn(zx),jx=lt({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=pn(jx),Hx=lt({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=pn(Hx),Wx=[9,13,27,32],Ju=fi&&"CompositionEvent"in window,Ks=null;fi&&"documentMode"in document&&(Ks=document.documentMode);var Xx=fi&&"TextEvent"in window&&!Ks,mm=fi&&(!Ju||Ks&&8<Ks&&11>=Ks),af=" ",lf=!1;function gm(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function $x(t,e){switch(t){case"compositionend":return xm(e);case"keypress":return e.which!==32?null:(lf=!0,af);case"textInput":return t=e.data,t===af&&lf?null:t;default:return null}}function qx(t,e){if(Vr)return t==="compositionend"||!Ju&&gm(t,e)?(t=pm(),Ea=Ku=Ci=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mm&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function vm(t,e,n,i){Yp(i),e=Ba(e,"onChange"),0<e.length&&(n=new Zu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,uo=null;function Kx(t){Rm(t,0)}function al(t){var e=$r(t);if(Gp(e))return t}function Zx(t,e){if(t==="change")return e}var _m=!1;if(fi){var kl;if(fi){var Ol="oninput"in document;if(!Ol){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),Ol=typeof uf.oninput=="function"}kl=Ol}else kl=!1;_m=kl&&(!document.documentMode||9<document.documentMode)}function df(){Zs&&(Zs.detachEvent("onpropertychange",ym),uo=Zs=null)}function ym(t){if(t.propertyName==="value"&&al(uo)){var e=[];vm(e,uo,t,Wu(t)),Jp(Kx,e)}}function Qx(t,e,n){t==="focusin"?(df(),Zs=e,uo=n,Zs.attachEvent("onpropertychange",ym)):t==="focusout"&&df()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(uo)}function ev(t,e){if(t==="click")return al(e)}function tv(t,e){if(t==="input"||t==="change")return al(e)}function nv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:nv;function fo(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Dc.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function ff(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hf(t,e){var n=ff(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ff(n)}}function Sm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mm(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iv(t){var e=Mm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sm(n.ownerDocument.documentElement,n)){if(i!==null&&ed(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hf(n,s);var o=hf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rv=fi&&"documentMode"in document&&11>=document.documentMode,Wr=null,Qc=null,Qs=null,Jc=!1;function pf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||Wr==null||Wr!==Da(i)||(i=Wr,"selectionStart"in i&&ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&fo(Qs,i)||(Qs=i,i=Ba(Qc,"onSelect"),0<i.length&&(e=new Zu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wr)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},zl={},Em={};fi&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function ll(t){if(zl[t])return zl[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Em)return zl[t]=e[n];return t}var wm=ll("animationend"),Tm=ll("animationiteration"),bm=ll("animationstart"),Am=ll("transitionend"),Cm=new Map,mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(t,e){Cm.set(t,e),Sr(e,[t])}for(var Bl=0;Bl<mf.length;Bl++){var jl=mf[Bl],sv=jl.toLowerCase(),ov=jl[0].toUpperCase()+jl.slice(1);Hi(sv,"on"+ov)}Hi(wm,"onAnimationEnd");Hi(Tm,"onAnimationIteration");Hi(bm,"onAnimationStart");Hi("dblclick","onDoubleClick");Hi("focusin","onFocus");Hi("focusout","onBlur");Hi(Am,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function gf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sx(i,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gf(r,a,c),s=l}}}if(Ia)throw t=qc,Ia=!1,qc=null,t}function tt(t,e){var n=e[ru];n===void 0&&(n=e[ru]=new Set);var i=t+"__bubble";n.has(i)||(Nm(e,t,2,!1),n.add(i))}function Gl(t,e,n){var i=0;e&&(i|=4),Nm(n,t,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[Wo]){t[Wo]=!0,kp.forEach(function(n){n!=="selectionchange"&&(av.has(n)||Gl(n,!1,t),Gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,Gl("selectionchange",!1,e))}}function Nm(t,e,n,i){switch(hm(e)){case 1:var r=Sx;break;case 4:r=Mx;break;default:r=Yu}n=r.bind(null,e,n,t),r=void 0,!$c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jp(function(){var c=s,f=Wu(n),p=[];e:{var h=Cm.get(t);if(h!==void 0){var m=Zu,_=t;switch(t){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":m=kx;break;case"focusin":_="focus",m=Fl;break;case"focusout":_="blur",m=Fl;break;case"beforeblur":case"afterblur":m=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Bx;break;case wm:case Tm:case bm:m=Cx;break;case Am:m=Gx;break;case"scroll":m=Ex;break;case"wheel":m=Vx;break;case"copy":case"cut":case"paste":m=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=of}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var x=c,v;x!==null;){v=x;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=oo(x,d),M!=null&&y.push(po(x,M,v)))),g)break;x=x.return}0<y.length&&(h=new m(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Wc&&(_=n.relatedTarget||n.fromElement)&&(ir(_)||_[hi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?ir(_):null,_!==null&&(g=Mr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=rf,M="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=of,M="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?h:$r(m),v=_==null?h:$r(_),h=new y(M,x+"leave",m,n,f),h.target=g,h.relatedTarget=v,M=null,ir(f)===c&&(y=new y(d,x+"enter",_,n,f),y.target=v,y.relatedTarget=g,M=y),g=M,m&&_)t:{for(y=m,d=_,x=0,v=y;v;v=Er(v))x++;for(v=0,M=d;M;M=Er(M))v++;for(;0<x-v;)y=Er(y),x--;for(;0<v-x;)d=Er(d),v--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=Er(y),d=Er(d)}y=null}else y=null;m!==null&&xf(p,h,m,y,!1),_!==null&&g!==null&&xf(p,g,_,y,!0)}}e:{if(h=c?$r(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var E=Zx;else if(cf(h))if(_m)E=tv;else{E=Jx;var A=Qx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=ev);if(E&&(E=E(t,c))){vm(p,E,n,f);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Bc(h,"number",h.value)}switch(A=c?$r(c):window,t){case"focusin":(cf(A)||A.contentEditable==="true")&&(Wr=A,Qc=c,Qs=null);break;case"focusout":Qs=Qc=Wr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,pf(p,n,f);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":pf(p,n,f)}var R;if(Ju)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vr?gm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(mm&&n.locale!=="ko"&&(Vr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vr&&(R=pm()):(Ci=f,Ku="value"in Ci?Ci.value:Ci.textContent,Vr=!0)),A=Ba(c,P),0<A.length&&(P=new sf(P,t,null,n,f),p.push({event:P,listeners:A}),R?P.data=R:(R=xm(n),R!==null&&(P.data=R)))),(R=Xx?$x(t,n):qx(t,n))&&(c=Ba(c,"onBeforeInput"),0<c.length&&(f=new sf("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=R))}Rm(p,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ba(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(t,n),s!=null&&i.unshift(po(t,s,r)),s=oo(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=oo(n,s),l!=null&&o.unshift(po(n,l,a))):r||(l=oo(n,s),l!=null&&o.push(po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function vf(t){return(typeof t=="string"?t:""+t).replace(lv,`
`).replace(cv,"")}function Xo(t,e,n){if(e=vf(e),vf(t)!==e&&n)throw Error(ne(425))}function ja(){}var eu=null,tu=null;function nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,dv=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(t){return _f.resolve(null).then(t).catch(fv)}:iu;function fv(t){setTimeout(function(){throw t})}function Vl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ts,mo="__reactProps$"+Ts,hi="__reactContainer$"+Ts,ru="__reactEvents$"+Ts,hv="__reactListeners$"+Ts,pv="__reactHandles$"+Ts;function ir(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yf(t);t!==null;){if(n=t[$n])return n;t=yf(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[$n]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function cl(t){return t[mo]||null}var su=[],qr=-1;function Vi(t){return{current:t}}function nt(t){0>qr||(t.current=su[qr],su[qr]=null,qr--)}function et(t,e){qr++,su[qr]=t.current,t.current=e}var ji={},Ot=Vi(ji),Kt=Vi(!1),hr=ji;function ds(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function Ga(){nt(Kt),nt(Ot)}function Sf(t,e,n){if(Ot.current!==ji)throw Error(ne(168));et(Ot,e),et(Kt,n)}function Lm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Q0(t)||"Unknown",r));return lt({},n,i)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,hr=Ot.current,et(Ot,t),et(Kt,Kt.current),!0}function Mf(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Lm(t,e,hr),i.__reactInternalMemoizedMergedChildContext=t,nt(Kt),nt(Ot),et(Ot,t)):nt(Kt),et(Kt,n)}var oi=null,ul=!1,Wl=!1;function Pm(t){oi===null?oi=[t]:oi.push(t)}function mv(t){ul=!0,Pm(t)}function Wi(){if(!Wl&&oi!==null){Wl=!0;var t=0,e=Xe;try{var n=oi;for(Xe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,ul=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),im(Xu,Wi),r}finally{Xe=e,Wl=!1}}return null}var Yr=[],Kr=0,Va=null,Wa=0,vn=[],_n=0,pr=null,li=1,ci="";function Qi(t,e){Yr[Kr++]=Wa,Yr[Kr++]=Va,Va=t,Wa=e}function Dm(t,e,n){vn[_n++]=li,vn[_n++]=ci,vn[_n++]=pr,pr=t;var i=li;t=ci;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-On(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function td(t){t.return!==null&&(Qi(t,1),Dm(t,1,0))}function nd(t){for(;t===Va;)Va=Yr[--Kr],Yr[Kr]=null,Wa=Yr[--Kr],Yr[Kr]=null;for(;t===pr;)pr=vn[--_n],vn[_n]=null,ci=vn[--_n],vn[_n]=null,li=vn[--_n],vn[_n]=null}var cn=null,ln=null,rt=!1,Un=null;function Um(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ef(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(rt){var e=ln;if(e){var n=e;if(!Ef(t,e)){if(ou(t))throw Error(ne(418));e=Ui(n.nextSibling);var i=cn;e&&Ef(t,e)?Um(i,n):(t.flags=t.flags&-4097|2,rt=!1,cn=t)}}else{if(ou(t))throw Error(ne(418));t.flags=t.flags&-4097|2,rt=!1,cn=t}}}function wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function $o(t){if(t!==cn)return!1;if(!rt)return wf(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nu(t.type,t.memoizedProps)),e&&(e=ln)){if(ou(t))throw Im(),Error(ne(418));for(;e;)Um(t,e),e=Ui(e.nextSibling)}if(wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?Ui(t.stateNode.nextSibling):null;return!0}function Im(){for(var t=ln;t;)t=Ui(t.nextSibling)}function fs(){ln=cn=null,rt=!1}function id(t){Un===null?Un=[t]:Un.push(t)}var gv=gi.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tf(t){var e=t._init;return e(t._payload)}function Fm(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Oi(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,M){return x===null||x.tag!==6?(x=Ql(v,d.mode,M),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,M){var E=v.type;return E===Hr?f(d,x,v.props.children,M,v.key):x!==null&&(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===wi&&Tf(E)===x.type)?(M=r(x,v.props),M.ref=Fs(d,x,v),M.return=d,M):(M=La(v.type,v.key,v.props,null,d.mode,M),M.ref=Fs(d,x,v),M.return=d,M)}function c(d,x,v,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Jl(v,d.mode,M),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function f(d,x,v,M,E){return x===null||x.tag!==7?(x=cr(v,d.mode,M,E),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ql(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:return v=La(x.type,x.key,x.props,null,d.mode,v),v.ref=Fs(d,null,x),v.return=d,v;case Gr:return x=Jl(x,d.mode,v),x.return=d,x;case wi:var M=x._init;return p(d,M(x._payload),v)}if(Vs(x)||Ls(x))return x=cr(x,d.mode,v,null),x.return=d,x;qo(d,x)}return null}function h(d,x,v,M){var E=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(d,x,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ko:return v.key===E?l(d,x,v,M):null;case Gr:return v.key===E?c(d,x,v,M):null;case wi:return E=v._init,h(d,x,E(v._payload),M)}if(Vs(v)||Ls(v))return E!==null?null:f(d,x,v,M,null);qo(d,v)}return null}function m(d,x,v,M,E){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,a(x,d,""+M,E);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ko:return d=d.get(M.key===null?v:M.key)||null,l(x,d,M,E);case Gr:return d=d.get(M.key===null?v:M.key)||null,c(x,d,M,E);case wi:var A=M._init;return m(d,x,v,A(M._payload),E)}if(Vs(M)||Ls(M))return d=d.get(v)||null,f(x,d,M,E,null);qo(x,M)}return null}function _(d,x,v,M){for(var E=null,A=null,R=x,P=x=0,S=null;R!==null&&P<v.length;P++){R.index>P?(S=R,R=null):S=R.sibling;var b=h(d,R,v[P],M);if(b===null){R===null&&(R=S);break}t&&R&&b.alternate===null&&e(d,R),x=s(b,x,P),A===null?E=b:A.sibling=b,A=b,R=S}if(P===v.length)return n(d,R),rt&&Qi(d,P),E;if(R===null){for(;P<v.length;P++)R=p(d,v[P],M),R!==null&&(x=s(R,x,P),A===null?E=R:A.sibling=R,A=R);return rt&&Qi(d,P),E}for(R=i(d,R);P<v.length;P++)S=m(R,d,P,v[P],M),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?P:S.key),x=s(S,x,P),A===null?E=S:A.sibling=S,A=S);return t&&R.forEach(function($){return e(d,$)}),rt&&Qi(d,P),E}function y(d,x,v,M){var E=Ls(v);if(typeof E!="function")throw Error(ne(150));if(v=E.call(v),v==null)throw Error(ne(151));for(var A=E=null,R=x,P=x=0,S=null,b=v.next();R!==null&&!b.done;P++,b=v.next()){R.index>P?(S=R,R=null):S=R.sibling;var $=h(d,R,b.value,M);if($===null){R===null&&(R=S);break}t&&R&&$.alternate===null&&e(d,R),x=s($,x,P),A===null?E=$:A.sibling=$,A=$,R=S}if(b.done)return n(d,R),rt&&Qi(d,P),E;if(R===null){for(;!b.done;P++,b=v.next())b=p(d,b.value,M),b!==null&&(x=s(b,x,P),A===null?E=b:A.sibling=b,A=b);return rt&&Qi(d,P),E}for(R=i(d,R);!b.done;P++,b=v.next())b=m(R,d,P,b.value,M),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?P:b.key),x=s(b,x,P),A===null?E=b:A.sibling=b,A=b);return t&&R.forEach(function(G){return e(d,G)}),rt&&Qi(d,P),E}function g(d,x,v,M){if(typeof v=="object"&&v!==null&&v.type===Hr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ko:e:{for(var E=v.key,A=x;A!==null;){if(A.key===E){if(E=v.type,E===Hr){if(A.tag===7){n(d,A.sibling),x=r(A,v.props.children),x.return=d,d=x;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===wi&&Tf(E)===A.type){n(d,A.sibling),x=r(A,v.props),x.ref=Fs(d,A,v),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===Hr?(x=cr(v.props.children,d.mode,M,v.key),x.return=d,d=x):(M=La(v.type,v.key,v.props,null,d.mode,M),M.ref=Fs(d,x,v),M.return=d,d=M)}return o(d);case Gr:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Jl(v,d.mode,M),x.return=d,d=x}return o(d);case wi:return A=v._init,g(d,x,A(v._payload),M)}if(Vs(v))return _(d,x,v,M);if(Ls(v))return y(d,x,v,M);qo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Ql(v,d.mode,M),x.return=d,d=x),o(d)):n(d,x)}return g}var hs=Fm(!0),km=Fm(!1),Xa=Vi(null),$a=null,Zr=null,rd=null;function sd(){rd=Zr=$a=null}function od(t){var e=Xa.current;nt(Xa),t._currentValue=e}function lu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){$a=t,rd=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if($a===null)throw Error(ne(308));Zr=t,$a.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var rr=null;function ad(t){rr===null?rr=[t]:rr.push(t)}function Om(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ad(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,ad(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$u(t,n)}}function bf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qa(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(m,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,p,h):_,h==null)break e;p=lt({},p,h);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=p}}function Af(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var No={},Yn=Vi(No),go=Vi(No),xo=Vi(No);function sr(t){if(t===No)throw Error(ne(174));return t}function cd(t,e){switch(et(xo,e),et(go,t),et(Yn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}nt(Yn),et(Yn,e)}function ps(){nt(Yn),nt(go),nt(xo)}function Bm(t){sr(xo.current);var e=sr(Yn.current),n=Gc(e,t.type);e!==n&&(et(go,t),et(Yn,n))}function ud(t){go.current===t&&(nt(Yn),nt(go))}var ot=Vi(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xl=[];function dd(){for(var t=0;t<Xl.length;t++)Xl[t]._workInProgressVersionPrimary=null;Xl.length=0}var ba=gi.ReactCurrentDispatcher,$l=gi.ReactCurrentBatchConfig,mr=0,at=null,vt=null,Tt=null,Ka=!1,Js=!1,vo=0,xv=0;function Pt(){throw Error(ne(321))}function fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function hd(t,e,n,i,r,s){if(mr=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?Sv:Mv,t=n(i,r),Js){s=0;do{if(Js=!1,vo=0,25<=s)throw Error(ne(301));s+=1,Tt=vt=null,e.updateQueue=null,ba.current=Ev,t=n(i,r)}while(Js)}if(ba.current=Za,e=vt!==null&&vt.next!==null,mr=0,Tt=vt=at=null,Ka=!1,e)throw Error(ne(300));return t}function pd(){var t=vo!==0;return vo=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?at.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function wn(){if(vt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=Tt===null?at.memoizedState:Tt.next;if(e!==null)Tt=e,vt=t;else{if(t===null)throw Error(ne(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?at.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function _o(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((mr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,at.lanes|=f,gr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Bn(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,at.lanes|=s,gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yl(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jm(){}function Gm(t,e){var n=at,i=wn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,md(Wm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,yo(9,Vm.bind(null,n,i,r,e),void 0,null),At===null)throw Error(ne(349));mr&30||Hm(n,e,r)}return r}function Hm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vm(t,e,n,i){e.value=n,e.getSnapshot=i,Xm(e)&&$m(t)}function Wm(t,e,n){return n(function(){Xm(e)&&$m(t)})}function Xm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function $m(t){var e=pi(t,1);e!==null&&zn(e,t,1,-1)}function Cf(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=yv.bind(null,at,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qm(){return wn().memoizedState}function Aa(t,e,n,i){var r=Wn();at.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function dl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&fd(i,o.deps)){r.memoizedState=yo(e,n,s,i);return}}at.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function Rf(t,e){return Aa(8390656,8,t,e)}function md(t,e){return dl(2048,8,t,e)}function Ym(t,e){return dl(4,2,t,e)}function Km(t,e){return dl(4,4,t,e)}function Zm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qm(t,e,n){return n=n!=null?n.concat([t]):null,dl(4,4,Zm.bind(null,e,t),n)}function gd(){}function Jm(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function tg(t,e,n){return mr&21?(Bn(n,e)||(n=om(),at.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function vv(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var i=$l.transition;$l.transition={};try{t(!1),e()}finally{Xe=n,$l.transition=i}}function ng(){return wn().memoizedState}function _v(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ig(t))rg(e,n);else if(n=Om(t,e,n,i),n!==null){var r=Vt();zn(n,t,i,r),sg(n,e,i)}}function yv(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ig(t))rg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(r.next=r,ad(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Om(t,e,r,i),n!==null&&(r=Vt(),zn(n,t,i,r),sg(n,e,i))}}function ig(t){var e=t.alternate;return t===at||e!==null&&e===at}function rg(t,e){Js=Ka=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$u(t,n)}}var Za={readContext:En,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},Sv={readContext:En,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Rf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,Zm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_v.bind(null,at,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Cf,useDebugValue:gd,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Cf(!1),e=t[0];return t=vv.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=at,r=Wn();if(rt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),At===null)throw Error(ne(349));mr&30||Hm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rf(Wm.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,Vm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=At.identifierPrefix;if(rt){var n=ci,i=li;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mv={readContext:En,useCallback:Jm,useContext:En,useEffect:md,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Km,useMemo:eg,useReducer:ql,useRef:qm,useState:function(){return ql(_o)},useDebugValue:gd,useDeferredValue:function(t){var e=wn();return tg(e,vt.memoizedState,t)},useTransition:function(){var t=ql(_o)[0],e=wn().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:Gm,useId:ng,unstable_isNewReconciler:!1},Ev={readContext:En,useCallback:Jm,useContext:En,useEffect:md,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Km,useMemo:eg,useReducer:Yl,useRef:qm,useState:function(){return Yl(_o)},useDebugValue:gd,useDeferredValue:function(t){var e=wn();return vt===null?e.memoizedState=t:tg(e,vt.memoizedState,t)},useTransition:function(){var t=Yl(_o)[0],e=wn().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:Gm,useId:ng,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fl={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=ki(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(zn(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=ki(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(zn(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=ki(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(zn(e,t,i,n),Ta(e,t,i))}};function Nf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,s):!0}function og(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Zt(e)?hr:Ot.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Zt(e)?hr:Ot.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fl.enqueueReplaceState(r,r.state,null),qa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",i=e;do n+=Z0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wv=typeof WeakMap=="function"?WeakMap:Map;function ag(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ja||(Ja=!0,Su=i),du(t,e)},n}function lg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){du(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ov.bind(null,t,e,n),e.then(t,t))}function Df(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var Tv=gi.ReactCurrentOwner,Yt=!1;function Gt(t,e,n,i){e.child=t===null?km(e,null,n,i):hs(e,t.child,n,i)}function If(t,e,n,i,r){n=n.render;var s=e.ref;return ss(e,r),i=hd(t,e,n,i,s,r),n=pd(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(rt&&n&&td(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Ff(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cg(t,e,s,i,r)):(t=La(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function cg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fo(s,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return fu(t,e,n,i,r)}function ug(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Jr,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Jr,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Jr,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Jr,on),on|=i;return Gt(t,e,r,n),e.child}function dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fu(t,e,n,i,r){var s=Zt(n)?hr:Ot.current;return s=ds(e,s),ss(e,r),n=hd(t,e,n,i,s,r),i=pd(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(rt&&i&&td(e),e.flags|=1,Gt(t,e,n,r),e.child)}function kf(t,e,n,i,r){if(Zt(n)){var s=!0;Ha(e)}else s=!1;if(ss(e,r),e.stateNode===null)Ca(t,e),og(e,n,i),uu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Zt(n)?hr:Ot.current,c=ds(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Lf(e,o,i,c),Ti=!1;var h=e.memoizedState;o.state=h,qa(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Kt.current||Ti?(typeof f=="function"&&(cu(e,n,f,i),l=e.memoizedState),(a=Ti||Nf(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,zm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Zt(n)?hr:Ot.current,l=ds(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Lf(e,o,i,l),Ti=!1,h=e.memoizedState,o.state=h,qa(e,i,o,r);var _=e.memoizedState;a!==p||h!==_||Kt.current||Ti?(typeof m=="function"&&(cu(e,n,m,i),_=e.memoizedState),(c=Ti||Nf(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return hu(t,e,n,i,s,r)}function hu(t,e,n,i,r,s){dg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mf(e,n,!1),mi(t,e,s);i=e.stateNode,Tv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&Mf(e,n,!0),e.child}function fg(t){var e=t.stateNode;e.pendingContext?Sf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sf(t,e.context,!1),cd(t,e.containerInfo)}function Of(t,e,n,i,r){return fs(),id(r),e.flags|=256,Gt(t,e,n,i),e.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function hg(t,e,n){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ot,r&1),t===null)return au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ml(o,i,0,null),t=cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mu(n),e.memoizedState=pu,t):xd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Oi(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pu,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xd(t,e){return e=ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,n,i){return i!==null&&id(i),hs(e,t.child,null,n),t=xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kl(Error(ne(422))),Yo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ml({mode:"visible",children:i.children},r,0,null),s=cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=mu(o),e.memoizedState=pu,s);if(!(e.mode&1))return Yo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Kl(s,i,void 0),Yo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Yt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),zn(i,t,r,-1))}return Ed(),i=Kl(Error(ne(421))),Yo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zv.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Ui(r.nextSibling),cn=e,rt=!0,Un=null,t!==null&&(vn[_n++]=li,vn[_n++]=ci,vn[_n++]=pr,li=t.id,ci=t.overflow,pr=e),e=xd(e,i.children),e.flags|=4096,e)}function zf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lu(t.return,e,n)}function Zl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function pg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zf(t,n,e);else if(t.tag===19)zf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ya(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zl(e,!0,n,null,s);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Av(t,e,n){switch(e.tag){case 3:fg(e),fs();break;case 5:Bm(e);break;case 1:Zt(e.type)&&Ha(e);break;case 4:cd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?hg(t,e,n):(et(ot,ot.current&1),t=mi(t,e,n),t!==null?t.sibling:null);et(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return pg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,ug(t,e,n)}return mi(t,e,n)}var mg,gu,gg,xg;mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gu=function(){};gg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,sr(Yn.current);var s=null;switch(n){case"input":r=Oc(t,r),i=Oc(t,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=jc(t,r),i=jc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}Hc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ks(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cv(t,e,n){var i=e.pendingProps;switch(nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Zt(e.type)&&Ga(),Dt(e),null;case 3:return i=e.stateNode,ps(),nt(Kt),nt(Ot),dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(wu(Un),Un=null))),gu(t,e),Dt(e),null;case 5:ud(e);var r=sr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Dt(e),null}if(t=sr(Yn.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)tt(Xs[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":$d(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":Yd(i,s),tt("invalid",i)}Hc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,a,t),r=["children",""+a]):ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Oo(i),qd(i,s,!0);break;case"textarea":Oo(i),Kd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[mo]=i,mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vc(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)tt(Xs[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":$d(t,i),r=Oc(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),tt("invalid",t);break;case"textarea":Yd(t,i),r=jc(t,i),tt("invalid",t);break;default:r=i}Hc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&ju(t,s,l,o))}switch(n){case"input":Oo(t),qd(t,i,!1);break;case"textarea":Oo(t),Kd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Bi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)xg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=sr(xo.current),sr(Yn.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Xo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Dt(e),null;case 13:if(nt(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&ln!==null&&e.mode&1&&!(e.flags&128))Im(),fs(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[$n]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Un!==null&&(wu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?_t===0&&(_t=3):Ed())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return ps(),gu(t,e),t===null&&ho(e.stateNode.containerInfo),Dt(e),null;case 10:return od(e.type._context),Dt(e),null;case 17:return Zt(e.type)&&Ga(),Dt(e),null;case 19:if(nt(ot),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ks(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&ft()>gs&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ya(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return Dt(e),null}else 2*ft()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ft(),e.sibling=null,n=ot.current,et(ot,i?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Md(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Rv(t,e){switch(nd(e),e.tag){case 1:return Zt(e.type)&&Ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),nt(Kt),nt(Ot),dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(nt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ot),null;case 4:return ps(),null;case 10:return od(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Ko=!1,Ft=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,he=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function xu(t,e,n){try{n()}catch(i){ut(t,e,i)}}var Bf=!1;function Lv(t,e){if(eu=Oa,t=Mm(),ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:t,selectionRange:n},Oa=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){ut(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=Bf,Bf=!1,_}function eo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xu(e,n,s)}r=r.next}while(r!==i)}}function hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vg(t){var e=t.alternate;e!==null&&(t.alternate=null,vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[mo],delete e[ru],delete e[hv],delete e[pv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _g(t){return t.tag===5||t.tag===3||t.tag===4}function jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}var Ct=null,Dn=!1;function _i(t,e,n){for(n=n.child;n!==null;)yg(t,e,n),n=n.sibling}function yg(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Ft||Qr(n,e);case 6:var i=Ct,r=Dn;Ct=null,_i(t,e,n),Ct=i,Dn=r,Ct!==null&&(Dn?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(Dn?(t=Ct,n=n.stateNode,t.nodeType===8?Vl(t.parentNode,n):t.nodeType===1&&Vl(t,n),co(t)):Vl(Ct,n.stateNode));break;case 4:i=Ct,r=Dn,Ct=n.stateNode.containerInfo,Dn=!0,_i(t,e,n),Ct=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Ft&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xu(n,e,o),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Ft&&(Qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Ft=(i=Ft)||n.memoizedState!==null,_i(t,e,n),Ft=i):_i(t,e,n);break;default:_i(t,e,n)}}function Gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nv),e.forEach(function(i){var r=Bv.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,Dn=!1;break e;case 3:Ct=a.stateNode.containerInfo,Dn=!0;break e;case 4:Ct=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Ct===null)throw Error(ne(160));yg(s,o,r),Ct=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sg(e,t),e=e.sibling}function Sg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Gn(t),i&4){try{eo(3,t,t.return),hl(3,t)}catch(y){ut(t,t.return,y)}try{eo(5,t,t.return)}catch(y){ut(t,t.return,y)}}break;case 1:An(e,t),Gn(t),i&512&&n!==null&&Qr(n,n.return);break;case 5:if(An(e,t),Gn(t),i&512&&n!==null&&Qr(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(y){ut(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hp(r,s),Vc(a,o);var c=Vc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?qp(r,p):f==="dangerouslySetInnerHTML"?Xp(r,p):f==="children"?so(r,p):ju(r,f,p,c)}switch(a){case"input":zc(r,s);break;case"textarea":Vp(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ts(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ts(r,!!s.multiple,s.defaultValue,!0):ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(y){ut(t,t.return,y)}}break;case 6:if(An(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ut(t,t.return,y)}}break;case 3:if(An(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(y){ut(t,t.return,y)}break;case 4:An(e,t),Gn(t);break;case 13:An(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yd=ft())),i&4&&Gf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||f,An(e,t),Ft=c):An(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(p=he=f;he!==null;){switch(h=he,m=h.child,h.tag){case 0:case 11:case 14:case 15:eo(4,h,h.return);break;case 1:Qr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ut(i,n,y)}}break;case 5:Qr(h,h.return);break;case 22:if(h.memoizedState!==null){Vf(p);continue}}m!==null?(m.return=h,he=m):Vf(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$p("display",o))}catch(y){ut(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){ut(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:An(e,t),Gn(t),i&4&&Gf(t);break;case 21:break;default:An(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_g(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=jf(t);yu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=jf(t);_u(t,a,o);break;default:throw Error(ne(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pv(t,e,n){he=t,Mg(t)}function Mg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Ko;var c=Ft;if(Ko=o,(Ft=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Wf(r):l!==null?(l.return=o,he=l):Wf(r);for(;s!==null;)he=s,Mg(s),s=s.sibling;he=r,Ko=a,Ft=c}Hf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Hf(t)}}function Hf(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ft)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Af(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Af(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&co(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Ft||e.flags&512&&vu(e)}catch(h){ut(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Vf(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Wf(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hl(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{vu(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{vu(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Dv=Math.ceil,Qa=gi.ReactCurrentDispatcher,vd=gi.ReactCurrentOwner,Mn=gi.ReactCurrentBatchConfig,Ge=0,At=null,gt=null,Rt=0,on=0,Jr=Vi(0),_t=0,So=null,gr=0,pl=0,_d=0,to=null,$t=null,yd=0,gs=1/0,si=null,Ja=!1,Su=null,Fi=null,Zo=!1,Ri=null,el=0,no=0,Mu=null,Ra=-1,Na=0;function Vt(){return Ge&6?ft():Ra!==-1?Ra:Ra=ft()}function ki(t){return t.mode&1?Ge&2&&Rt!==0?Rt&-Rt:gv.transition!==null?(Na===0&&(Na=om()),Na):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:hm(t.type)),t):1}function zn(t,e,n,i){if(50<no)throw no=0,Mu=null,Error(ne(185));Ao(t,n,i),(!(Ge&2)||t!==At)&&(t===At&&(!(Ge&2)&&(pl|=n),_t===4&&Ai(t,Rt)),Qt(t,i),n===1&&Ge===0&&!(e.mode&1)&&(gs=ft()+500,ul&&Wi()))}function Qt(t,e){var n=t.callbackNode;gx(t,e);var i=ka(t,t===At?Rt:0);if(i===0)n!==null&&Jd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jd(n),e===1)t.tag===0?mv(Xf.bind(null,t)):Pm(Xf.bind(null,t)),dv(function(){!(Ge&6)&&Wi()}),n=null;else{switch(am(i)){case 1:n=Xu;break;case 4:n=rm;break;case 16:n=Fa;break;case 536870912:n=sm;break;default:n=Fa}n=Ng(n,Eg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Eg(t,e){if(Ra=-1,Na=0,Ge&6)throw Error(ne(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var i=ka(t,t===At?Rt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tl(t,i);else{e=i;var r=Ge;Ge|=2;var s=Tg();(At!==t||Rt!==e)&&(si=null,gs=ft()+500,lr(t,e));do try{Fv();break}catch(a){wg(t,a)}while(!0);sd(),Qa.current=s,Ge=r,gt!==null?e=0:(At=null,Rt=0,e=_t)}if(e!==0){if(e===2&&(r=Yc(t),r!==0&&(i=r,e=Eu(t,r))),e===1)throw n=So,lr(t,0),Ai(t,i),Qt(t,ft()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!Uv(r)&&(e=tl(t,i),e===2&&(s=Yc(t),s!==0&&(i=s,e=Eu(t,s))),e===1))throw n=So,lr(t,0),Ai(t,i),Qt(t,ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Ji(t,$t,si);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=yd+500-ft(),10<e)){if(ka(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=iu(Ji.bind(null,t,$t,si),e);break}Ji(t,$t,si);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dv(i/1960))-i,10<i){t.timeoutHandle=iu(Ji.bind(null,t,$t,si),i);break}Ji(t,$t,si);break;case 5:Ji(t,$t,si);break;default:throw Error(ne(329))}}}return Qt(t,ft()),t.callbackNode===n?Eg.bind(null,t):null}function Eu(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=tl(t,e),t!==2&&(e=$t,$t=n,e!==null&&wu(e)),t}function wu(t){$t===null?$t=t:$t.push.apply($t,t)}function Uv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~_d,e&=~pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Xf(t){if(Ge&6)throw Error(ne(327));os();var e=ka(t,0);if(!(e&1))return Qt(t,ft()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var i=Yc(t);i!==0&&(e=i,n=Eu(t,i))}if(n===1)throw n=So,lr(t,0),Ai(t,e),Qt(t,ft()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,$t,si),Qt(t,ft()),null}function Sd(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(gs=ft()+500,ul&&Wi())}}function xr(t){Ri!==null&&Ri.tag===0&&!(Ge&6)&&os();var e=Ge;Ge|=1;var n=Mn.transition,i=Xe;try{if(Mn.transition=null,Xe=1,t)return t()}finally{Xe=i,Mn.transition=n,Ge=e,!(Ge&6)&&Wi()}}function Md(){on=Jr.current,nt(Jr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uv(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(nd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ga();break;case 3:ps(),nt(Kt),nt(Ot),dd();break;case 5:ud(i);break;case 4:ps();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:od(i.type._context);break;case 22:case 23:Md()}n=n.return}if(At=t,gt=t=Oi(t.current,null),Rt=on=e,_t=0,So=null,_d=pl=gr=0,$t=to=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rr=null}return t}function wg(t,e){do{var n=gt;try{if(sd(),ba.current=Za,Ka){for(var i=at.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ka=!1}if(mr=0,Tt=vt=at=null,Js=!1,vo=0,vd.current=null,n===null||n.return===null){_t=1,So=e,gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Df(o);if(m!==null){m.flags&=-257,Uf(m,o,a,s,e),m.mode&1&&Pf(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Pf(s,c,e),Ed();break e}l=Error(ne(426))}}else if(rt&&a.mode&1){var g=Df(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Uf(g,o,a,s,e),id(ms(l,a));break e}}s=l=ms(l,a),_t!==4&&(_t=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ag(s,l,e);bf(s,d);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=lg(s,a,e);bf(s,M);break e}}s=s.return}while(s!==null)}Ag(n)}catch(E){e=E,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(!0)}function Tg(){var t=Qa.current;return Qa.current=Za,t===null?Za:t}function Ed(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||!(gr&268435455)&&!(pl&268435455)||Ai(At,Rt)}function tl(t,e){var n=Ge;Ge|=2;var i=Tg();(At!==t||Rt!==e)&&(si=null,lr(t,e));do try{Iv();break}catch(r){wg(t,r)}while(!0);if(sd(),Ge=n,Qa.current=i,gt!==null)throw Error(ne(261));return At=null,Rt=0,_t}function Iv(){for(;gt!==null;)bg(gt)}function Fv(){for(;gt!==null&&!ax();)bg(gt)}function bg(t){var e=Rg(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Ag(t):gt=e,vd.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rv(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,gt=null;return}}else if(n=Cv(n,e,on),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);_t===0&&(_t=5)}function Ji(t,e,n){var i=Xe,r=Mn.transition;try{Mn.transition=null,Xe=1,kv(t,e,n,i)}finally{Mn.transition=r,Xe=i}return null}function kv(t,e,n,i){do os();while(Ri!==null);if(Ge&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xx(t,s),t===At&&(gt=At=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,Ng(Fa,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Xe;Xe=1;var a=Ge;Ge|=4,vd.current=null,Lv(t,n),Sg(n,t),iv(tu),Oa=!!eu,tu=eu=null,t.current=n,Pv(n),lx(),Ge=a,Xe=o,Mn.transition=s}else t.current=n;if(Zo&&(Zo=!1,Ri=t,el=r),s=t.pendingLanes,s===0&&(Fi=null),dx(n.stateNode),Qt(t,ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ja)throw Ja=!1,t=Su,Su=null,t;return el&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===Mu?no++:(no=0,Mu=t):no=0,Wi(),null}function os(){if(Ri!==null){var t=am(el),e=Mn.transition,n=Xe;try{if(Mn.transition=null,Xe=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,el=0,Ge&6)throw Error(ne(331));var r=Ge;for(Ge|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:eo(8,f,s)}var p=f.child;if(p!==null)p.return=f,he=p;else for(;he!==null;){f=he;var h=f.sibling,m=f.return;if(vg(f),f===c){he=null;break}if(h!==null){h.return=m,he=h;break}he=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,he=d;break e}he=s.return}}var x=t.current;for(he=x;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=x;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(E){ut(a,a.return,E)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(Ge=r,Wi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(sl,t)}catch{}i=!0}return i}finally{Xe=n,Mn.transition=e}}return!1}function $f(t,e,n){e=ms(n,e),e=ag(t,e,1),t=Ii(t,e,1),e=Vt(),t!==null&&(Ao(t,1,e),Qt(t,e))}function ut(t,e,n){if(t.tag===3)$f(t,t,n);else for(;e!==null;){if(e.tag===3){$f(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=ms(n,t),t=lg(e,t,1),e=Ii(e,t,1),t=Vt(),e!==null&&(Ao(e,1,t),Qt(e,t));break}}e=e.return}}function Ov(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Rt&n)===n&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>ft()-yd?lr(t,0):_d|=n),Qt(t,e)}function Cg(t,e){e===0&&(t.mode&1?(e=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):e=1);var n=Vt();t=pi(t,e),t!==null&&(Ao(t,e,n),Qt(t,n))}function zv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cg(t,n)}function Bv(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Cg(t,n)}var Rg;Rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,Av(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,rt&&e.flags&1048576&&Dm(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(t,e),t=e.pendingProps;var r=ds(e,Ot.current);ss(e,n),r=hd(null,e,i,t,r,n);var s=pd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ld(e),r.updater=fl,e.stateNode=r,r._reactInternals=e,uu(e,i,t,n),e=hu(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&td(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Gv(i),t=Pn(i,t),r){case 0:e=fu(null,e,i,t,n);break e;case 1:e=kf(null,e,i,t,n);break e;case 11:e=If(null,e,i,t,n);break e;case 14:e=Ff(null,e,i,Pn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),kf(t,e,i,r,n);case 3:e:{if(fg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,zm(t,e),qa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(ne(423)),e),e=Of(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(ne(424)),e),e=Of(t,e,i,n,r);break e}else for(ln=Ui(e.stateNode.containerInfo.firstChild),cn=e,rt=!0,Un=null,n=km(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){e=mi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Bm(e),t===null&&au(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,nu(i,r)?o=null:s!==null&&nu(i,s)&&(e.flags|=32),dg(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&au(e),null;case 13:return hg(t,e,n);case 4:return cd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),If(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Xa,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!Kt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ss(e,n),r=En(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Ff(t,e,i,r,n);case 15:return cg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ca(t,e),e.tag=1,Zt(i)?(t=!0,Ha(e)):t=!1,ss(e,n),og(e,i,r),uu(e,i,r,n),hu(null,e,i,!0,t,n);case 19:return pg(t,e,n);case 22:return ug(t,e,n)}throw Error(ne(156,e.tag))};function Ng(t,e){return im(t,e)}function jv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new jv(t,e,n,i)}function wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gv(t){if(typeof t=="function")return wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hu)return 11;if(t===Vu)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hr:return cr(n.children,r,s,e);case Gu:o=8,r|=8;break;case Uc:return t=Sn(12,n,e,r|2),t.elementType=Uc,t.lanes=s,t;case Ic:return t=Sn(13,n,e,r),t.elementType=Ic,t.lanes=s,t;case Fc:return t=Sn(19,n,e,r),t.elementType=Fc,t.lanes=s,t;case Bp:return ml(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Op:o=10;break e;case zp:o=9;break e;case Hu:o=11;break e;case Vu:o=14;break e;case wi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function cr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function ml(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Bp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ql(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Jl(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hv(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Td(t,e,n,i,r,s,o,a,l){return t=new Hv(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(s),t}function Vv(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lg(t){if(!t)return ji;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Zt(n))return Lm(t,n,e)}return e}function Pg(t,e,n,i,r,s,o,a,l){return t=Td(n,i,!0,t,r,s,o,a,l),t.context=Lg(null),n=t.current,i=Vt(),r=ki(n),s=ui(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,Ao(t,r,i),Qt(t,i),t}function gl(t,e,n,i){var r=e.current,s=Vt(),o=ki(r);return n=Lg(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,o),t!==null&&(zn(t,r,o,s),Ta(t,r,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bd(t,e){qf(t,e),(t=t.alternate)&&qf(t,e)}function Wv(){return null}var Dg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}xl.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));gl(t,e,null,null)};xl.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){gl(null,t,null,null)}),e[hi]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&fm(t)}};function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function Xv(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nl(o);s.call(c)}}var o=Pg(e,i,t,0,null,!1,!1,"",Yf);return t._reactRootContainer=o,t[hi]=o.current,ho(t.nodeType===8?t.parentNode:t),xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nl(l);a.call(c)}}var l=Td(t,0,!1,null,null,!1,!1,"",Yf);return t._reactRootContainer=l,t[hi]=l.current,ho(t.nodeType===8?t.parentNode:t),xr(function(){gl(e,l,n,i)}),l}function _l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nl(o);a.call(l)}}gl(e,o,t,r)}else o=Xv(n,e,t,r,i);return nl(o)}lm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&($u(e,n|1),Qt(e,ft()),!(Ge&6)&&(gs=ft()+500,Wi()))}break;case 13:xr(function(){var i=pi(t,1);if(i!==null){var r=Vt();zn(i,t,1,r)}}),bd(t,1)}};qu=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Vt();zn(e,t,134217728,n)}bd(t,134217728)}};cm=function(t){if(t.tag===13){var e=ki(t),n=pi(t,e);if(n!==null){var i=Vt();zn(n,t,e,i)}bd(t,e)}};um=function(){return Xe};dm=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};Xc=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cl(i);if(!r)throw Error(ne(90));Gp(i),zc(i,r)}}}break;case"textarea":Vp(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};Zp=Sd;Qp=xr;var $v={usingClientEntryPoint:!1,Events:[Ro,$r,cl,Yp,Kp,Sd]},Os={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qv={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tm(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||Wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{sl=Qo.inject(qv),qn=Qo}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(e))throw Error(ne(200));return Vv(t,e,null,n)};hn.createRoot=function(t,e){if(!Cd(t))throw Error(ne(299));var n=!1,i="",r=Dg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Td(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,ho(t.nodeType===8?t.parentNode:t),new Ad(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=tm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return xr(t)};hn.hydrate=function(t,e,n){if(!vl(e))throw Error(ne(200));return _l(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Cd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Dg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pg(e,null,t,1,n??null,r,!1,s,o),t[hi]=e.current,ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xl(e)};hn.render=function(t,e,n){if(!vl(e))throw Error(ne(200));return _l(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!vl(t))throw Error(ne(40));return t._reactRootContainer?(xr(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};hn.unstable_batchedUpdates=Sd;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return _l(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),Up.exports=hn;var Yv=Up.exports,Kf=Yv;Pc.createRoot=Kf.createRoot,Pc.hydrateRoot=Kf.hydrateRoot;/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Zf=t=>{const e=Zv(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ig=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),Qv=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=xe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>xe.createElement("svg",{ref:l,...Jv,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Ig("lucide",r),...!s&&!Qv(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,f])=>xe.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(t,e)=>{const n=xe.forwardRef(({className:i,...r},s)=>xe.createElement(e_,{ref:s,iconNode:e,className:Ig(`lucide-${Kv(Zf(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Zf(t),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Tn=$e("arrow-left",t_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],en=$e("arrow-right",n_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],r_=$e("award",i_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],o_=$e("building",s_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],l_=$e("camera",a_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],u_=$e("chart-column",c_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],f_=$e("check",d_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],p_=$e("circle-alert",h_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Mo=$e("circle-check-big",m_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fg=$e("clock",g_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],v_=$e("dollar-sign",x_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kg=$e("eye",__);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Tu=$e("file-text",y_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],M_=$e("house",S_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],w_=$e("lock",E_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],b_=$e("map-pin",T_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],C_=$e("maximize-2",A_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],N_=$e("menu",R_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M5 12h14",key:"1ays0h"}]],Qf=$e("minus",L_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],D_=$e("navigation",P_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],I_=$e("phone",U_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Jf=$e("plus",F_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],bs=$e("shield",k_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Og=$e("star",O_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Rd=$e("trending-up",z_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],zg=$e("upload",B_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Bg=$e("user",j_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Nd=$e("x",G_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],jg=$e("zap",H_);function Gg({onLogoClick:t,className:e="z-50"}){const[n,i]=xe.useState(!1),r=()=>{i(!n)},s=()=>{i(!1)};return u.jsxs("header",{className:`bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 fixed top-0 left-0 right-0 transition-all duration-300 ${e}`,children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",children:[u.jsxs("button",{type:"button",className:"flex items-center space-x-2 focus:outline-none group transition-all duration-300 hover:scale-105",onClick:t,"aria-label":"Go to Landing Page",children:[u.jsxs("div",{className:"relative",children:[u.jsx(bs,{className:"h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"}),u.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse group-hover:bg-green-400"})]}),u.jsx("span",{className:"text-2xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-300",children:"InsureAI"}),u.jsx("span",{className:"text-sm bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full font-medium group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 shadow-md",children:"Home"})]}),u.jsxs("nav",{className:"hidden md:flex items-center space-x-2",children:[u.jsxs("a",{href:"#features",className:"relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 group",children:["Coverage",u.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"})]}),u.jsxs("a",{href:"#stats",className:"relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 group",children:["Claims",u.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"})]}),u.jsxs("a",{href:"#testimonials",className:"relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 group",children:["Reviews",u.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"})]}),u.jsx("button",{className:"ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Login"})]}),u.jsx("button",{type:"button",className:"md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",onClick:r,"aria-label":"Toggle mobile menu",children:n?u.jsx(Nd,{className:"h-6 w-6 transform rotate-180 transition-transform duration-300"}):u.jsx(N_,{className:"h-6 w-6 transform rotate-0 transition-transform duration-300"})})]}),u.jsx("div",{className:`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 transition-all duration-300 ease-in-out ${n?"max-h-96 opacity-100 visible":"max-h-0 opacity-0 invisible overflow-hidden"}`,children:u.jsxs("nav",{className:"px-4 py-6 space-y-4",children:[u.jsx("a",{href:"#features",className:"block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 border-l-4 border-transparent hover:border-blue-600",onClick:s,children:"Coverage"}),u.jsx("a",{href:"#stats",className:"block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 border-l-4 border-transparent hover:border-blue-600",onClick:s,children:"Claims"}),u.jsx("a",{href:"#testimonials",className:"block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 border-l-4 border-transparent hover:border-blue-600",onClick:s,children:"Reviews"}),u.jsx("button",{className:"w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",onClick:s,children:"Login"})]})})]})}function V_({currentStep:t,steps:e,labels:n,onStepClick:i,onLogoClick:r}){const s=e.indexOf(t),o=e.slice(1,-1);return u.jsx("div",{className:"w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 fixed top-0 left-0 right-0 z-50",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("button",{type:"button",className:"flex items-center space-x-2 focus:outline-none group transition-all duration-300 hover:scale-105",onClick:r,"aria-label":"Go to Landing Page",children:[u.jsxs("div",{className:"relative",children:[u.jsx(bs,{className:"h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"}),u.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse group-hover:bg-green-400"})]}),u.jsx("span",{className:"text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-300",children:"InsureAI"}),u.jsx("span",{className:"text-xs bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded-full font-medium group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 shadow-md",children:"Home"})]}),u.jsxs("div",{className:"text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full",children:["Step ",Math.max(1,s)," of ",o.length]})]}),u.jsx("div",{className:"mb-3",children:u.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5 shadow-inner",children:u.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 h-2.5 rounded-full transition-all duration-500 shadow-sm",style:{width:`${o.length>1?Math.max(s-1,0)/(o.length-1)*100:0}%`}})})}),u.jsx("div",{className:"hidden md:flex justify-between text-xs text-gray-600",children:o.map((a,l)=>u.jsx("span",{className:`cursor-pointer px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 ${t===a?"text-blue-800 font-semibold bg-blue-50 border border-blue-200":l<s?"text-blue-600 hover:text-blue-800":"text-gray-400 cursor-not-allowed"}`,onClick:()=>l<s&&i(a),children:n[a]},a))}),u.jsx("div",{className:"md:hidden flex justify-center",children:u.jsx("span",{className:"text-sm text-gray-700 font-medium",children:n[t]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="152",W_=0,eh=1,X_=2,Hg=1,Pd=2,ri=3,Gi=0,Jt=1,ai=2,zi=0,as=1,th=2,nh=3,ih=4,$_=5,jr=100,q_=101,Y_=102,rh=103,sh=104,K_=200,Z_=201,Q_=202,J_=203,Vg=204,Wg=205,ey=206,ty=207,ny=208,iy=209,ry=210,sy=0,oy=1,ay=2,bu=3,ly=4,cy=5,uy=6,dy=7,yl=0,fy=1,hy=2,di=0,py=1,my=2,gy=3,Xg=4,xy=5,$g=300,xs=301,vs=302,Au=303,Cu=304,Sl=306,Ru=1e3,Fn=1001,Nu=1002,Ht=1003,oh=1004,ec=1005,yn=1006,vy=1007,Eo=1008,vr=1009,_y=1010,yy=1011,qg=1012,Sy=1013,or=1014,ar=1015,wo=1016,My=1017,Ey=1018,ls=1020,wy=1021,kn=1023,Ty=1024,by=1025,ur=1026,_s=1027,Ay=1028,Cy=1029,Ry=1030,Ny=1031,Ly=1033,tc=33776,nc=33777,ic=33778,rc=33779,ah=35840,lh=35841,ch=35842,uh=35843,Py=36196,dh=37492,fh=37496,hh=37808,ph=37809,mh=37810,gh=37811,xh=37812,vh=37813,_h=37814,yh=37815,Sh=37816,Mh=37817,Eh=37818,wh=37819,Th=37820,bh=37821,sc=36492,Dy=36283,Ah=36284,Ch=36285,Rh=36286,Yg=3e3,dr=3001,Uy=3200,Iy=3201,Dd=0,Fy=1,fr="",Ne="srgb",Zn="srgb-linear",Kg="display-p3",oc=7680,ky=519,Nh=35044,Lh="300 es",Lu=1035;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,Pu=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Oy(t,e){return(t%e+e)%e}function lc(t,e,n){return(1-n)*t+n*e}function Ph(t){return(t&t-1)===0&&t!==0}function zy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Jo(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],_=i[8],y=r[0],g=r[3],d=r[6],x=r[1],v=r[4],M=r[7],E=r[2],A=r[5],R=r[8];return s[0]=o*y+a*x+l*E,s[3]=o*g+a*v+l*A,s[6]=o*d+a*M+l*R,s[1]=c*y+f*x+p*E,s[4]=c*g+f*v+p*A,s[7]=c*d+f*M+p*R,s[2]=h*y+m*x+_*E,s[5]=h*g+m*v+_*A,s[8]=h*d+m*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=n*p+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cc.makeScale(e,n)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(cc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new ze;function Zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Dh={};function io(t){t in Dh||(Dh[t]=!0,console.warn(t))}function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const By=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jy=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gy(t){return t.convertSRGBToLinear().applyMatrix3(jy)}function Hy(t){return t.applyMatrix3(By).convertLinearToSRGB()}const Vy={[Zn]:t=>t,[Ne]:t=>t.convertSRGBToLinear(),[Kg]:Gy},Wy={[Zn]:t=>t,[Ne]:t=>t.convertLinearToSRGB(),[Kg]:Hy},Cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Zn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Vy[e],r=Wy[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let wr;class Qg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=il("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jg{constructor(e=null){this.isSource=!0,this.uuid=Lo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xy=0;class un extends As{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Fn,r=Fn,s=yn,o=Eo,a=kn,l=vr,c=un.DEFAULT_ANISOTROPY,f=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Lo(),this.name="",this.source=new Jg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===dr?Ne:fr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?dr:Yg}set encoding(e){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?Ne:fr}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=$g;un.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],m=l[5],_=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(m+1)/2,E=(d+1)/2,A=(f+h)/4,R=(p+y)/4,P=(_+g)/4;return v>M&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(p-y)/x,this.z=(h-f)/x,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends As{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===dr?Ne:fr),this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Jg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class e0 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $y extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||c!==m||f!==_){let g=1-a;const d=l*h+c*m+f*_+p*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,d*x);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}const M=a*x;if(l=l*g+h*M,c=c*g+m*M,f=f*g+_*M,p=p*g+y*M,g===1-a){const E=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=E,c*=E,f*=E,p*=E}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*p+l*m-c*h,e[n+1]=l*_+f*h+c*p-a*m,e[n+2]=c*_+f*m+a*h-l*p,e[n+3]=f*_-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*p+c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p-h*m*_;break;case"YXZ":this._x=h*f*p+c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p+h*m*_;break;case"ZXY":this._x=h*f*p-c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p-h*m*_;break;case"ZYX":this._x=h*f*p-c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p+h*m*_;break;case"YZX":this._x=h*f*p+c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p-h*m*_;break;case"XZY":this._x=h*f*p-c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,f=l*i+a*n-s*r,p=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+f*-a-p*-o,this.y=f*l+h*-o+p*-s-c*-a,this.z=p*l+h*-a+c*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new O,Uh=new Po;class Do{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Jn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else r.boundingBox===null&&r.computeBoundingBox(),Tr.copy(r.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),ea.subVectors(this.max,zs),br.subVectors(e.a,zs),Ar.subVectors(e.b,zs),Cr.subVectors(e.c,zs),yi.subVectors(Ar,br),Si.subVectors(Cr,Ar),Yi.subVectors(br,Cr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Yi.z,Yi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Yi.z,0,-Yi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Yi.y,Yi.x,0];return!hc(n,br,Ar,Cr,ea)||(n=[1,0,0,0,1,0,0,0,1],!hc(n,br,Ar,Cr,ea))?!1:(ta.crossVectors(yi,Si),n=[ta.x,ta.y,ta.z],hc(n,br,Ar,Cr,ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,Tr=new Do,br=new O,Ar=new O,Cr=new O,yi=new O,Si=new O,Yi=new O,zs=new O,ea=new O,ta=new O,Ki=new O;function hc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ki.fromArray(t,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),f=i.dot(Ki);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const qy=new Do,Bs=new O,pc=new O;class Ud{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const n=Bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(pc)),this.expandByPoint(Bs.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new O,mc=new O,na=new O,Mi=new O,gc=new O,ia=new O,xc=new O;class Yy{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mc.copy(e).add(n).multiplyScalar(.5),na.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(mc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(na),a=Mi.dot(this.direction),l=-Mi.dot(na),c=Mi.lengthSq(),f=Math.abs(1-o*o);let p,h,m,_;if(f>0)if(p=o*l-a,h=o*a-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(mc).addScaledVector(na,h),m}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){gc.subVectors(n,e),ia.subVectors(i,e),xc.crossVectors(gc,ia);let o=this.direction.dot(xc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(Mi,ia));if(l<0)return null;const c=a*this.direction.dot(gc.cross(Mi));if(c<0||l+c>o)return null;const f=-a*Mi.dot(xc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,f,p,h,m,_,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=h,d[3]=m,d[7]=_,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*p,_=a*f,y=a*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*p,_=c*f,y=c*p;n[0]=h+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*p,_=c*f,y=c*p;n[0]=h-y*a,n[4]=-o*p,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*p,_=a*f,y=a*p;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*p,n[8]=_*p+m,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+y,n[5]=o*f,n[9]=m*p-_,n[2]=_*p-m,n[6]=a*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Zy)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ei.crossVectors(i,rn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ei.crossVectors(i,rn)),Ei.normalize(),ra.crossVectors(rn,Ei),r[0]=Ei.x,r[4]=ra.x,r[8]=rn.x,r[1]=Ei.y,r[5]=ra.y,r[9]=rn.y,r[2]=Ei.z,r[6]=ra.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],_=i[2],y=i[6],g=i[10],d=i[14],x=i[3],v=i[7],M=i[11],E=i[15],A=r[0],R=r[4],P=r[8],S=r[12],b=r[1],$=r[5],G=r[9],U=r[13],z=r[2],H=r[6],Q=r[10],Z=r[14],D=r[3],B=r[7],k=r[11],le=r[15];return s[0]=o*A+a*b+l*z+c*D,s[4]=o*R+a*$+l*H+c*B,s[8]=o*P+a*G+l*Q+c*k,s[12]=o*S+a*U+l*Z+c*le,s[1]=f*A+p*b+h*z+m*D,s[5]=f*R+p*$+h*H+m*B,s[9]=f*P+p*G+h*Q+m*k,s[13]=f*S+p*U+h*Z+m*le,s[2]=_*A+y*b+g*z+d*D,s[6]=_*R+y*$+g*H+d*B,s[10]=_*P+y*G+g*Q+d*k,s[14]=_*S+y*U+g*Z+d*le,s[3]=x*A+v*b+M*z+E*D,s[7]=x*R+v*$+M*H+E*B,s[11]=x*P+v*G+M*Q+E*k,s[15]=x*S+v*U+M*Z+E*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],_=e[3],y=e[7],g=e[11],d=e[15];return _*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+g*(+n*c*p-n*a*m-s*o*p+i*o*m+s*a*f-i*c*f)+d*(-r*a*f-n*l*p+n*a*h+r*o*p-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],_=e[12],y=e[13],g=e[14],d=e[15],x=p*g*c-y*h*c+y*l*m-a*g*m-p*l*d+a*h*d,v=_*h*c-f*g*c-_*l*m+o*g*m+f*l*d-o*h*d,M=f*y*c-_*p*c+_*a*m-o*y*m-f*a*d+o*p*d,E=_*p*l-f*y*l-_*a*h+o*y*h+f*a*g-o*p*g,A=n*x+i*v+r*M+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(y*h*s-p*g*s-y*r*m+i*g*m+p*r*d-i*h*d)*R,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*d+i*l*d)*R,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*m-i*l*m)*R,e[4]=v*R,e[5]=(f*g*s-_*h*s+_*r*m-n*g*m-f*r*d+n*h*d)*R,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*d-n*l*d)*R,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*R,e[8]=M*R,e[9]=(_*p*s-f*y*s-_*i*m+n*y*m+f*i*d-n*p*d)*R,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*d+n*a*d)*R,e[11]=(f*a*s-o*p*s-f*i*c+n*p*c+o*i*m-n*a*m)*R,e[12]=E*R,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*g+n*p*g)*R,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*R,e[15]=(o*p*r-f*a*r+f*i*l-n*p*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,p=a+a,h=s*c,m=s*f,_=s*p,y=o*f,g=o*p,d=a*p,x=l*c,v=l*f,M=l*p,E=i.x,A=i.y,R=i.z;return r[0]=(1-(y+d))*E,r[1]=(m+M)*E,r[2]=(_-v)*E,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(h+d))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(_+v)*R,r[9]=(g-x)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,f=1/o,p=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=p,Rn.elements[9]*=p,Rn.elements[10]*=p,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=c,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),f=1/(o-s),p=(n+e)*l,h=(i+r)*c,m=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new O,Rn=new yt,Ky=new O(0,0,0),Zy=new O(1,1,1),Ei=new O,ra=new O,rn=new O,Ih=new yt,Fh=new Po;class Ml{constructor(e=0,n=0,i=0,r=Ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ml.DEFAULT_ORDER="XYZ";class t0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qy=0;const kh=new O,Nr=new Po,ti=new yt,sa=new O,js=new O,Jy=new O,eS=new Po,Oh=new O(1,0,0),zh=new O(0,1,0),Bh=new O(0,0,1),tS={type:"added"},jh={type:"removed"};class kt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new O,n=new Ml,i=new Po,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new t0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,n){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sa.copy(e):sa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(js,sa,this.up):ti.lookAt(sa,js,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ti),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(jh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,eS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new O(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new O,ni=new O,vc=new O,ii=new O,Lr=new O,Pr=new O,Gh=new O,_c=new O,yc=new O,Sc=new O;let oa=!1;class In{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ni.subVectors(i,n),vc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(ni),l=Nn.dot(vc),c=ni.dot(ni),f=ni.dot(vc),p=o*c-a*a;if(p===0)return s.set(-2,-1,-1);const h=1/p,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,n,i,r,s,o,a,l){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ii),l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ni.subVectors(e,n),Nn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Pr.subVectors(s,i),_c.subVectors(e,i);const l=Lr.dot(_c),c=Pr.dot(_c);if(l<=0&&c<=0)return n.copy(i);yc.subVectors(e,r);const f=Lr.dot(yc),p=Pr.dot(yc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Lr,o);Sc.subVectors(e,s);const m=Lr.dot(Sc),_=Pr.dot(Sc);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Pr,a);const g=f*_-m*p;if(g<=0&&p-f>=0&&m-_>=0)return Gh.subVectors(s,r),a=(p-f)/(p-f+(m-_)),n.copy(r).addScaledVector(Gh,a);const d=1/(g+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(Lr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nS=0;class Cs extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=as,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Vg,this.blendDst=Wg,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ky,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Mc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Cn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Cn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Cn.workingColorSpace){if(e=Oy(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mc(o,s,e+1/3),this.g=Mc(o,s,e),this.b=Mc(o,s,e-1/3)}return Cn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ne){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ne){const i=n0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return Cn.fromWorkingColorSpace(It.copy(this),e),Math.round(qt(It.r*255,0,255))*65536+Math.round(qt(It.g*255,0,255))*256+Math.round(qt(It.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Cn.workingColorSpace){Cn.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Cn.workingColorSpace){return Cn.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ne){Cn.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==Ne?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ln),Ln.h+=e,Ln.s+=n,Ln.l+=i,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ln),e.getHSL(aa);const i=lc(Ln.h,aa.h,n),r=lc(Ln.s,aa.s,n),s=lc(Ln.l,aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ve;Ve.NAMES=n0;class i0 extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new O,la=new We;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)la.fromBufferAttribute(this,n),la.applyMatrix3(e),this.setXY(n,la.x,la.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class r0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s0 extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iS=0;const gn=new yt,Ec=new kt,Dr=new O,sn=new Do,Gs=new Do,wt=new O;class xi extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?s0:r0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(sn.min,Gs.min),sn.expandByPoint(wt),wt.addVectors(sn.max,Gs.max),sn.expandByPoint(wt)):(sn.expandByPoint(Gs.min),sn.expandByPoint(Gs.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)wt.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),wt.add(Dr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let b=0;b<a;b++)c[b]=new O,f[b]=new O;const p=new O,h=new O,m=new O,_=new We,y=new We,g=new We,d=new O,x=new O;function v(b,$,G){p.fromArray(r,b*3),h.fromArray(r,$*3),m.fromArray(r,G*3),_.fromArray(o,b*2),y.fromArray(o,$*2),g.fromArray(o,G*2),h.sub(p),m.sub(p),y.sub(_),g.sub(_);const U=1/(y.x*g.y-g.x*y.y);isFinite(U)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(m,-y.y).multiplyScalar(U),x.copy(m).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(U),c[b].add(d),c[$].add(d),c[G].add(d),f[b].add(x),f[$].add(x),f[G].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let b=0,$=M.length;b<$;++b){const G=M[b],U=G.start,z=G.count;for(let H=U,Q=U+z;H<Q;H+=3)v(i[H+0],i[H+1],i[H+2])}const E=new O,A=new O,R=new O,P=new O;function S(b){R.fromArray(s,b*3),P.copy(R);const $=c[b];E.copy($),E.sub(R.multiplyScalar(R.dot($))).normalize(),A.crossVectors(P,$);const U=A.dot(f[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=U}for(let b=0,$=M.length;b<$;++b){const G=M[b],U=G.start,z=G.count;for(let H=U,Q=U+z;H<Q;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,p=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let d=0;d<f;d++)h[_++]=c[m++]}return new Kn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new yt,Hn=new Yy,ca=new Ud,Vh=new O,Ur=new O,Ir=new O,Fr=new O,wc=new O,ua=new O,da=new We,fa=new We,ha=new We,Wh=new O,Xh=new O,$h=new O,pa=new O,ma=new O;class Re extends kt{constructor(e=new xi,n=new i0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],p=s[l];f!==0&&(wc.fromBufferAttribute(p,e),o?ua.addScaledVector(wc,f):ua.addScaledVector(wc.sub(n),f))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),Hn.copy(e.ray).recast(e.near),!(ca.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ca,Vh)===null||Hn.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Hh.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,p=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=p.length;m<_;m++){const y=p[m],g=s[y.materialIndex],d=Math.max(y.start,h.start),x=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let v=d,M=x;v<M;v+=3){const E=o.getX(v),A=o.getX(v+1),R=o.getX(v+2);i=ga(this,g,e,Hn,l,c,f,E,A,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=y.materialIndex,n.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let y=m,g=_;y<g;y+=3){const d=o.getX(y),x=o.getX(y+1),v=o.getX(y+2);i=ga(this,s,e,Hn,l,c,f,d,x,v),i&&(i.faceIndex=Math.floor(y/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,_=p.length;m<_;m++){const y=p[m],g=s[y.materialIndex],d=Math.max(y.start,h.start),x=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let v=d,M=x;v<M;v+=3){const E=v,A=v+1,R=v+2;i=ga(this,g,e,Hn,l,c,f,E,A,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=y.materialIndex,n.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let y=m,g=_;y<g;y+=3){const d=y,x=y+1,v=y+2;i=ga(this,s,e,Hn,l,c,f,d,x,v),i&&(i.faceIndex=Math.floor(y/3),n.push(i))}}}}function rS(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ma);return c<n.near||c>n.far?null:{distance:c,point:ma.clone(),object:t}}function ga(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ur),t.getVertexPosition(l,Ir),t.getVertexPosition(c,Fr);const f=rS(t,e,n,i,Ur,Ir,Fr,pa);if(f){r&&(da.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),f.uv=In.getInterpolation(pa,Ur,Ir,Fr,da,fa,ha,new We)),s&&(da.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),ha.fromBufferAttribute(s,c),f.uv1=In.getInterpolation(pa,Ur,Ir,Fr,da,fa,ha,new We),f.uv2=f.uv1),o&&(Wh.fromBufferAttribute(o,a),Xh.fromBufferAttribute(o,l),$h.fromBufferAttribute(o,c),f.normal=In.getInterpolation(pa,Ur,Ir,Fr,Wh,Xh,$h,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new O,materialIndex:0};In.getNormal(Ur,Ir,Fr,p.normal),f.face=p}return f}class xt extends xi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(p,2));function _(y,g,d,x,v,M,E,A,R,P,S){const b=M/R,$=E/P,G=M/2,U=E/2,z=A/2,H=R+1,Q=P+1;let Z=0,D=0;const B=new O;for(let k=0;k<Q;k++){const le=k*$-U;for(let J=0;J<H;J++){const j=J*b-G;B[y]=j*x,B[g]=le*v,B[d]=z,c.push(B.x,B.y,B.z),B[y]=0,B[g]=0,B[d]=A>0?1:-1,f.push(B.x,B.y,B.z),p.push(J/R),p.push(1-k/P),Z+=1}}for(let k=0;k<P;k++)for(let le=0;le<R;le++){const J=h+le+H*k,j=h+le+H*(k+1),Y=h+(le+1)+H*(k+1),re=h+(le+1)+H*k;l.push(J,j,re),l.push(j,Y,re),D+=6}a.addGroup(m,D,S),m+=D,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=ys(t[n]);for(const r in i)e[r]=i[r]}return e}function sS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o0(t){return t.getRenderTarget()===null?t.outputColorSpace:Zn}const oS={clone:ys,merge:jt};var aS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aS,this.fragmentShader=lS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class a0 extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends a0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pu*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,Or=1;class cS extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new an(kr,Or,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new an(kr,Or,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new an(kr,Or,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new an(kr,Or,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new an(kr,Or,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new an(kr,Or,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,f=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=di,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(f),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class l0 extends un{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:xs,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uS extends _r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?Ne:fr),this.texture=new l0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xt(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:zi});s.uniforms.tEquirect.value=n;const o=new Re(r,s),a=n.minFilter;return n.minFilter===Eo&&(n.minFilter=yn),new cS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tc=new O,dS=new O,fS=new ze;class er{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tc.subVectors(i,n).cross(dS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fS.getNormalMatrix(e),r=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Ud,xa=new O;class Id{constructor(e=new er,n=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],f=i[6],p=i[7],h=i[8],m=i[9],_=i[10],y=i[11],g=i[12],d=i[13],x=i[14],v=i[15];return n[0].setComponents(a-r,p-l,y-h,v-g).normalize(),n[1].setComponents(a+r,p+l,y+h,v+g).normalize(),n[2].setComponents(a+s,p+c,y+m,v+d).normalize(),n[3].setComponents(a-s,p-c,y-m,v-d).normalize(),n[4].setComponents(a-o,p-f,y-_,v-x).normalize(),n[5].setComponents(a+o,p+f,y+_,v+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const p=c.array,h=c.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,p,h),c.onUploadCallback();let _;if(p instanceof Float32Array)_=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=t.SHORT;else if(p instanceof Uint32Array)_=t.UNSIGNED_INT;else if(p instanceof Int32Array)_=t.INT;else if(p instanceof Int8Array)_=t.BYTE;else if(p instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,p){const h=f.array,m=f.updateRange;t.bindBuffer(p,c),m.count===-1?t.bufferSubData(p,0,h):(n?t.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,f)):p.version<c.version&&(s(p.buffer,c,f),p.version=c.version)}return{get:o,remove:a,update:l}}class Uo extends xi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,p=e/a,h=n/l,m=[],_=[],y=[],g=[];for(let d=0;d<f;d++){const x=d*h-o;for(let v=0;v<c;v++){const M=v*p-s;_.push(M,-x,0),y.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+c*d,M=x+c*(d+1),E=x+1+c*(d+1),A=x+1+c*d;m.push(v,M,A),m.push(M,E,A)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS="vec3 transformed = vec3( position );",SS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ES=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,DS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",jS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,TM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,UM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,SE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:xS,aomap_fragment:vS,aomap_pars_fragment:_S,begin_vertex:yS,beginnormal_vertex:SS,bsdfs:MS,iridescence_fragment:ES,bumpmap_pars_fragment:wS,clipping_planes_fragment:TS,clipping_planes_pars_fragment:bS,clipping_planes_pars_vertex:AS,clipping_planes_vertex:CS,color_fragment:RS,color_pars_fragment:NS,color_pars_vertex:LS,color_vertex:PS,common:DS,cube_uv_reflection_fragment:US,defaultnormal_vertex:IS,displacementmap_pars_vertex:FS,displacementmap_vertex:kS,emissivemap_fragment:OS,emissivemap_pars_fragment:zS,encodings_fragment:BS,encodings_pars_fragment:jS,envmap_fragment:GS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:iM,envmap_vertex:XS,fog_vertex:$S,fog_pars_vertex:qS,fog_fragment:YS,fog_pars_fragment:KS,gradientmap_pars_fragment:ZS,lightmap_fragment:QS,lightmap_pars_fragment:JS,lights_lambert_fragment:eM,lights_lambert_pars_fragment:tM,lights_pars_begin:nM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:oM,lights_phong_pars_fragment:aM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:dM,lights_fragment_end:fM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:xM,map_pars_fragment:vM,map_particle_fragment:_M,map_particle_pars_fragment:yM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:MM,morphcolor_vertex:EM,morphnormal_vertex:wM,morphtarget_pars_vertex:TM,morphtarget_vertex:bM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:NM,normal_vertex:LM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:UM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:FM,output_fragment:kM,packing:OM,premultiplied_alpha_fragment:zM,project_vertex:BM,dithering_fragment:jM,dithering_pars_fragment:GM,roughnessmap_fragment:HM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:XM,shadowmap_vertex:$M,shadowmask_pars_fragment:qM,skinbase_vertex:YM,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:QM,specularmap_fragment:JM,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:aE,worldpos_vertex:lE,background_vert:cE,background_frag:uE,backgroundCube_vert:dE,backgroundCube_frag:fE,cube_vert:hE,cube_frag:pE,depth_vert:mE,depth_frag:gE,distanceRGBA_vert:xE,distanceRGBA_frag:vE,equirect_vert:_E,equirect_frag:yE,linedashed_vert:SE,linedashed_frag:ME,meshbasic_vert:EE,meshbasic_frag:wE,meshlambert_vert:TE,meshlambert_frag:bE,meshmatcap_vert:AE,meshmatcap_frag:CE,meshnormal_vert:RE,meshnormal_frag:NE,meshphong_vert:LE,meshphong_frag:PE,meshphysical_vert:DE,meshphysical_frag:UE,meshtoon_vert:IE,meshtoon_frag:FE,points_vert:kE,points_frag:OE,shadow_vert:zE,shadow_frag:BE,sprite_vert:jE,sprite_frag:GE},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},Xn={basic:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:jt([ce.points,ce.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:jt([ce.common,ce.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:jt([ce.sprite,ce.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:jt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:jt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Xn.physical={uniforms:jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const va={r:0,b:0,g:0};function HE(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,f,p=null,h=0,m=null;function _(g,d){let x=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0),t.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),x=!0;break}(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sl)?(f===void 0&&(f=new Re(new xt(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:ys(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=v.colorSpace!==Ne,(p!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Re(new Uo(2,2),new yr({name:"BackgroundMaterial",uniforms:ys(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,d){g.getRGB(va,o0(t)),i.buffers.color.setClear(va.r,va.g,va.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:_}}function VE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,f=!1;function p(z,H,Q,Z,D){let B=!1;if(o){const k=y(Z,Q,H);c!==k&&(c=k,m(c.object)),B=d(z,Z,Q,D),B&&x(z,Z,Q,D)}else{const k=H.wireframe===!0;(c.geometry!==Z.id||c.program!==Q.id||c.wireframe!==k)&&(c.geometry=Z.id,c.program=Q.id,c.wireframe=k,B=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,P(z,H,Q,Z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function y(z,H,Q){const Z=Q.wireframe===!0;let D=a[z.id];D===void 0&&(D={},a[z.id]=D);let B=D[H.id];B===void 0&&(B={},D[H.id]=B);let k=B[Z];return k===void 0&&(k=g(h()),B[Z]=k),k}function g(z){const H=[],Q=[],Z=[];for(let D=0;D<r;D++)H[D]=0,Q[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:Z,object:z,attributes:{},index:null}}function d(z,H,Q,Z){const D=c.attributes,B=H.attributes;let k=0;const le=Q.getAttributes();for(const J in le)if(le[J].location>=0){const Y=D[J];let re=B[J];if(re===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;k++}return c.attributesNum!==k||c.index!==Z}function x(z,H,Q,Z){const D={},B=H.attributes;let k=0;const le=Q.getAttributes();for(const J in le)if(le[J].location>=0){let Y=B[J];Y===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),D[J]=re,k++}c.attributes=D,c.attributesNum=k,c.index=Z}function v(){const z=c.newAttributes;for(let H=0,Q=z.length;H<Q;H++)z[H]=0}function M(z){E(z,0)}function E(z,H){const Q=c.newAttributes,Z=c.enabledAttributes,D=c.attributeDivisors;Q[z]=1,Z[z]===0&&(t.enableVertexAttribArray(z),Z[z]=1),D[z]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,H),D[z]=H)}function A(){const z=c.newAttributes,H=c.enabledAttributes;for(let Q=0,Z=H.length;Q<Z;Q++)H[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),H[Q]=0)}function R(z,H,Q,Z,D,B){i.isWebGL2===!0&&(Q===t.INT||Q===t.UNSIGNED_INT)?t.vertexAttribIPointer(z,H,Q,D,B):t.vertexAttribPointer(z,H,Q,Z,D,B)}function P(z,H,Q,Z){if(i.isWebGL2===!1&&(z.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=Z.attributes,B=Q.getAttributes(),k=H.defaultAttributeValues;for(const le in B){const J=B[le];if(J.location>=0){let j=D[le];if(j===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),j!==void 0){const Y=j.normalized,re=j.itemSize,se=n.get(j);if(se===void 0)continue;const N=se.buffer,Ae=se.type,Ee=se.bytesPerElement;if(j.isInterleavedBufferAttribute){const oe=j.data,ye=oe.stride,ke=j.offset;if(oe.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)E(J.location+me,oe.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<J.locationSize;me++)M(J.location+me);t.bindBuffer(t.ARRAY_BUFFER,N);for(let me=0;me<J.locationSize;me++)R(J.location+me,re/J.locationSize,Ae,Y,ye*Ee,(ke+re/J.locationSize*me)*Ee)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<J.locationSize;oe++)E(J.location+oe,j.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<J.locationSize;oe++)M(J.location+oe);t.bindBuffer(t.ARRAY_BUFFER,N);for(let oe=0;oe<J.locationSize;oe++)R(J.location+oe,re/J.locationSize,Ae,Y,re*Ee,re/J.locationSize*oe*Ee)}}else if(k!==void 0){const Y=k[le];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(J.location,Y);break;case 3:t.vertexAttrib3fv(J.location,Y);break;case 4:t.vertexAttrib4fv(J.location,Y);break;default:t.vertexAttrib1fv(J.location,Y)}}}}A()}function S(){G();for(const z in a){const H=a[z];for(const Q in H){const Z=H[Q];for(const D in Z)_(Z[D].object),delete Z[D];delete H[Q]}delete a[z]}}function b(z){if(a[z.id]===void 0)return;const H=a[z.id];for(const Q in H){const Z=H[Q];for(const D in Z)_(Z[D].object),delete Z[D];delete H[Q]}delete a[z.id]}function $(z){for(const H in a){const Q=a[H];if(Q[z.id]===void 0)continue;const Z=Q[z.id];for(const D in Z)_(Z[D].object),delete Z[D];delete Q[z.id]}}function G(){U(),f=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function WE(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,p){if(p===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,f,p),n.update(f,s,p)}this.setMode=o,this.render=a,this.renderInstances=l}function XE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),E=v&&M,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:A}}function $E(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new er,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const x=s?0:i,v=x*4;let M=d.clippingState||null;l.value=M,M=f(_,h,v,m);for(let E=0;E!==v;++E)M[E]=n[E];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,_){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const d=m+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,M=m;v!==y;++v,M+=4)o.copy(p[v]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function qE(t){let e=new WeakMap;function n(o,a){return a===Au?o.mapping=xs:a===Cu&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Au||a===Cu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class u0 extends a0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,qh=[.125,.215,.35,.446,.526,.582],nr=20,bc=new u0,Yh=new Ve;let Ac=null;const tr=(1+Math.sqrt(5))/2,zr=1/tr,Kh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,tr,zr),new O(0,tr,-zr),new O(zr,0,tr),new O(-zr,0,tr),new O(tr,zr,0),new O(-tr,zr,0)];class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ac=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:wo,format:kn,colorSpace:Zn,depthBuffer:!1},r=Qh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(s)),this._blurMaterial=KE(s,e,n)}return r}_compileMaterial(e){const n=new Re(this._lodPlanes[0],e);this._renderer.compile(n,bc)}_sceneToCubeUV(e,n,i,r){const a=new an(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Yh),f.toneMapping=di,f.autoClear=!1;const m=new i0({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Re(new xt,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Yh),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;_a(r,x*v,d>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kh[(r-1)%Kh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Re(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nr-1),y=s/_,g=isFinite(s)?1+Math.floor(f*y):nr;g>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${nr}`);const d=[];let x=0;for(let R=0;R<nr;++R){const P=R/y,S=Math.exp(-P*P/2);d.push(S),R===0?x+=S:R<g&&(x+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const M=this._sizeLods[r],E=3*M*(r>v-es?r-v+es:0),A=4*(this._cubeSize-M);_a(n,E,A,3*M,2*M),l.setRenderTarget(n),l.render(p,bc)}}function YE(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-es?l=qh[o-t+es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,y=3,g=2,d=1,x=new Float32Array(y*_*m),v=new Float32Array(g*_*m),M=new Float32Array(d*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,P=A>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(S,y*_*A),v.set(h,g*_*A);const b=[A,A,A,A,A,A];M.set(b,d*_*A)}const E=new xi;E.setAttribute("position",new Kn(x,y)),E.setAttribute("uv",new Kn(v,g)),E.setAttribute("faceIndex",new Kn(M,d)),e.push(E),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qh(t,e,n){const i=new _r(t,e,n);return i.texture.mapping=Sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KE(t,e,n){const i=new Float32Array(nr),r=new O(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Jh(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ep(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Au||l===Cu,f=l===xs||l===vs;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new Zh(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||f&&p&&r(p)){n===null&&(n=new Zh(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function QE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JE(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const y=m[_];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,_=p.attributes.position;let y=0;if(m!==null){const x=m.array;y=m.version;for(let v=0,M=x.length;v<M;v+=3){const E=x[v+0],A=x[v+1],R=x[v+2];h.push(E,A,A,R,R,E)}}else{const x=_.array;y=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const E=v+0,A=v+1,R=v+2;h.push(E,A,A,R,R,E)}}const g=new(Zg(h)?s0:r0)(h,1);g.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function ew(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function f(h,m){t.drawElements(s,m,a,h*l),n.update(m,s,1)}function p(h,m,_){if(_===0)return;let y,g;if(r)y=t,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,m,a,h*l,_),n.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=p}function tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nw(t,e){return t[0]-e[0]}function iw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function rw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let g=s.get(f);if(g===void 0||g.count!==y){let H=function(){U.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var m=H;g!==void 0&&g.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let S=0;v===!0&&(S=1),M===!0&&(S=2),E===!0&&(S=3);let b=f.attributes.position.count*S,$=1;b>e.maxTextureSize&&($=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*$*4*y),U=new e0(G,b,$,y);U.type=ar,U.needsUpdate=!0;const z=S*4;for(let Q=0;Q<y;Q++){const Z=A[Q],D=R[Q],B=P[Q],k=b*$*4*Q;for(let le=0;le<Z.count;le++){const J=le*z;v===!0&&(o.fromBufferAttribute(Z,le),G[k+J+0]=o.x,G[k+J+1]=o.y,G[k+J+2]=o.z,G[k+J+3]=0),M===!0&&(o.fromBufferAttribute(D,le),G[k+J+4]=o.x,G[k+J+5]=o.y,G[k+J+6]=o.z,G[k+J+7]=0),E===!0&&(o.fromBufferAttribute(B,le),G[k+J+8]=o.x,G[k+J+9]=o.y,G[k+J+10]=o.z,G[k+J+11]=B.itemSize===4?o.w:1)}}g={count:y,texture:U,size:new We(b,$)},s.set(f,g),f.addEventListener("dispose",H)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const x=f.morphTargetsRelative?1:1-d;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let M=0;M<_;M++)y[M]=[M,0];i[f.id]=y}for(let M=0;M<_;M++){const E=y[M];E[0]=M,E[1]=h[M]}y.sort(iw);for(let M=0;M<8;M++)M<_&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(nw);const g=f.morphAttributes.position,d=f.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const E=a[M],A=E[0],R=E[1];A!==Number.MAX_SAFE_INTEGER&&R?(g&&f.getAttribute("morphTarget"+M)!==g[A]&&f.setAttribute("morphTarget"+M,g[A]),d&&f.getAttribute("morphNormal"+M)!==d[A]&&f.setAttribute("morphNormal"+M,d[A]),r[M]=R,x+=R):(g&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),d&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const v=f.morphTargetsRelative?1:1-x;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function sw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);return r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const d0=new un,f0=new e0,h0=new $y,p0=new l0,tp=[],np=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function Rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tp[r];if(s===void 0&&(s=new Float32Array(r),tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function El(t,e){let n=np[e];n===void 0&&(n=new Int32Array(e),np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;sp.set(i),t.uniformMatrix2fv(this.addr,!1,sp),Mt(n,i)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;rp.set(i),t.uniformMatrix3fv(this.addr,!1,rp),Mt(n,i)}}function fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;ip.set(i),t.uniformMatrix4fv(this.addr,!1,ip),Mt(n,i)}}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||d0,r)}function Mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||h0,r)}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||p0,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||f0,r)}function Tw(t){switch(t){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return xw;case 36294:return vw;case 36295:return _w;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return ww}}function bw(t,e){t.uniform1fv(this.addr,e)}function Aw(t,e){const n=Rs(e,this.size,2);t.uniform2fv(this.addr,n)}function Cw(t,e){const n=Rs(e,this.size,3);t.uniform3fv(this.addr,n)}function Rw(t,e){const n=Rs(e,this.size,4);t.uniform4fv(this.addr,n)}function Nw(t,e){const n=Rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lw(t,e){const n=Rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dw(t,e){t.uniform1iv(this.addr,e)}function Uw(t,e){t.uniform2iv(this.addr,e)}function Iw(t,e){t.uniform3iv(this.addr,e)}function Fw(t,e){t.uniform4iv(this.addr,e)}function kw(t,e){t.uniform1uiv(this.addr,e)}function Ow(t,e){t.uniform2uiv(this.addr,e)}function zw(t,e){t.uniform3uiv(this.addr,e)}function Bw(t,e){t.uniform4uiv(this.addr,e)}function jw(t,e,n){const i=this.cache,r=e.length,s=El(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d0,s[o])}function Gw(t,e,n){const i=this.cache,r=e.length,s=El(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||h0,s[o])}function Hw(t,e,n){const i=this.cache,r=e.length,s=El(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||p0,s[o])}function Vw(t,e,n){const i=this.cache,r=e.length,s=El(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||f0,s[o])}function Ww(t){switch(t){case 5126:return bw;case 35664:return Aw;case 35665:return Cw;case 35666:return Rw;case 35674:return Nw;case 35675:return Lw;case 35676:return Pw;case 5124:case 35670:return Dw;case 35667:case 35671:return Uw;case 35668:case 35672:return Iw;case 35669:case 35673:return Fw;case 5125:return kw;case 36294:return Ow;case 36295:return zw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Tw(n.type)}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Ww(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function op(t,e){t.seq.push(e),t.map[e.id]=e}function Yw(t,e,n){const i=t.name,r=i.length;for(Cc.lastIndex=0;;){const s=Cc.exec(i),o=Cc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){op(n,c===void 0?new Xw(a,t,e):new $w(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new qw(a),op(n,p)),n=p}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Yw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ap(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Kw=0;function Zw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Qw(t){switch(t){case Zn:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function lp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Zw(t.getShaderSource(e),o)}else return r}function Jw(t,e){const n=Qw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function e1(t,e){let n;switch(e){case py:n="Linear";break;case my:n="Reinhard";break;case gy:n="OptimizedCineon";break;case Xg:n="ACESFilmic";break;case xy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function t1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function n1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function i1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $s(t){return t!==""}function cp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(t){return t.replace(r1,s1)}function s1(t,e){const n=Pe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Du(n)}const o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(t){return t.replace(o1,a1)}function a1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function c1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case Sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function d1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case fy:e="ENVMAP_BLENDING_MIX";break;case hy:e="ENVMAP_BLENDING_ADD";break}return e}function f1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=l1(n),c=c1(n),f=u1(n),p=d1(n),h=f1(n),m=n.isWebGL2?"":t1(n),_=n1(s),y=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=[_].filter($s).join(`
`),g.length>0&&(g+=`
`),d=[m,_].filter($s).join(`
`),d.length>0&&(d+=`
`)):(g=[fp(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[m,fp(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?Pe.tonemapping_pars_fragment:"",n.toneMapping!==di?e1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Jw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),o=Du(o),o=cp(o,n),o=up(o,n),a=Du(a),a=cp(a,n),a=up(a,n),o=dp(o),a=dp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+o,M=x+d+a,E=ap(r,r.VERTEX_SHADER,v),A=ap(r,r.FRAGMENT_SHADER,M);if(r.attachShader(y,E),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(y).trim(),b=r.getShaderInfoLog(E).trim(),$=r.getShaderInfoLog(A).trim();let G=!0,U=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,A);else{const z=lp(r,E,"vertex"),H=lp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+z+`
`+H)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(b===""||$==="")&&(U=!1);U&&(this.diagnostics={runnable:G,programLog:S,vertexShader:{log:b,prefix:g},fragmentShader:{log:$,prefix:d}})}r.deleteShader(E),r.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Pa(r,y)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=i1(r,y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}let p1=0;class m1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new g1(e),n.set(e,i)),i}}class g1{constructor(e){this.id=p1++,this.code=e,this.usedTimes=0}}function x1(t,e,n,i,r,s,o){const a=new t0,l=new m1,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===1?"uv1":S===2?"uv2":S===3?"uv3":"uv"}function g(S,b,$,G,U){const z=G.fog,H=U.geometry,Q=S.isMeshStandardMaterial?G.environment:null,Z=(S.isMeshStandardMaterial?n:e).get(S.envMap||Q),D=Z&&Z.mapping===Sl?Z.image.height:null,B=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=k!==void 0?k.length:0;let J=0;H.morphAttributes.position!==void 0&&(J=1),H.morphAttributes.normal!==void 0&&(J=2),H.morphAttributes.color!==void 0&&(J=3);let j,Y,re,se;if(B){const Ke=Xn[B];j=Ke.vertexShader,Y=Ke.fragmentShader}else j=S.vertexShader,Y=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const N=t.getRenderTarget(),Ae=U.isInstancedMesh===!0,Ee=!!S.map,oe=!!S.matcap,ye=!!Z,ke=!!S.aoMap,me=!!S.lightMap,be=!!S.bumpMap,Qe=!!S.normalMap,ct=!!S.displacementMap,it=!!S.emissiveMap,Ye=!!S.metalnessMap,je=!!S.roughnessMap,Je=S.clearcoat>0,ht=S.iridescence>0,C=S.sheen>0,w=S.transmission>0,V=Je&&!!S.clearcoatMap,ee=Je&&!!S.clearcoatNormalMap,ie=Je&&!!S.clearcoatRoughnessMap,ue=ht&&!!S.iridescenceMap,we=ht&&!!S.iridescenceThicknessMap,pe=C&&!!S.sheenColorMap,q=C&&!!S.sheenRoughnessMap,ge=!!S.specularMap,_e=!!S.specularColorMap,Se=!!S.specularIntensityMap,ae=w&&!!S.transmissionMap,fe=w&&!!S.thicknessMap,De=!!S.gradientMap,He=!!S.alphaMap,st=S.alphaTest>0,L=!!S.extensions,W=!!H.attributes.uv1,te=!!H.attributes.uv2,de=!!H.attributes.uv3;return{isWebGL2:f,shaderID:B,shaderName:S.type,vertexShader:j,fragmentShader:Y,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Zn,map:Ee,matcap:oe,envMap:ye,envMapMode:ye&&Z.mapping,envMapCubeUVHeight:D,aoMap:ke,lightMap:me,bumpMap:be,normalMap:Qe,displacementMap:h&&ct,emissiveMap:it,normalMapObjectSpace:Qe&&S.normalMapType===Fy,normalMapTangentSpace:Qe&&S.normalMapType===Dd,metalnessMap:Ye,roughnessMap:je,clearcoat:Je,clearcoatMap:V,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:ht,iridescenceMap:ue,iridescenceThicknessMap:we,sheen:C,sheenColorMap:pe,sheenRoughnessMap:q,specularMap:ge,specularColorMap:_e,specularIntensityMap:Se,transmission:w,transmissionMap:ae,thicknessMap:fe,gradientMap:De,opaque:S.transparent===!1&&S.blending===as,alphaMap:He,alphaTest:st,combine:S.combine,mapUv:Ee&&y(S.map.channel),aoMapUv:ke&&y(S.aoMap.channel),lightMapUv:me&&y(S.lightMap.channel),bumpMapUv:be&&y(S.bumpMap.channel),normalMapUv:Qe&&y(S.normalMap.channel),displacementMapUv:ct&&y(S.displacementMap.channel),emissiveMapUv:it&&y(S.emissiveMap.channel),metalnessMapUv:Ye&&y(S.metalnessMap.channel),roughnessMapUv:je&&y(S.roughnessMap.channel),clearcoatMapUv:V&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:q&&y(S.sheenRoughnessMap.channel),specularMapUv:ge&&y(S.specularMap.channel),specularColorMapUv:_e&&y(S.specularColorMap.channel),specularIntensityMapUv:Se&&y(S.specularIntensityMap.channel),transmissionMapUv:ae&&y(S.transmissionMap.channel),thicknessMapUv:fe&&y(S.thicknessMap.channel),alphaMapUv:He&&y(S.alphaMap.channel),vertexTangents:Qe&&!!H.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:W,vertexUv2s:te,vertexUv3s:de,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ee||He),fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:di,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:L&&S.extensions.derivatives===!0,extensionFragDepth:L&&S.extensions.fragDepth===!0,extensionDrawBuffers:L&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)b.push($),b.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(x(b,S),v(b,S),b.push(t.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const b=_[S.type];let $;if(b){const G=Xn[b];$=oS.clone(G.uniforms)}else $=S.uniforms;return $}function E(S,b){let $;for(let G=0,U=c.length;G<U;G++){const z=c[G];if(z.cacheKey===b){$=z,++$.usedTimes;break}}return $===void 0&&($=new h1(t,b,S,s),c.push($)),$}function A(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:P}}function v1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,m,_,y,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:m,groupOrder:_,renderOrder:p.renderOrder,z:y,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=y,d.group=g),e++,d}function a(p,h,m,_,y,g){const d=o(p,h,m,_,y,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,h,m,_,y,g){const d=o(p,h,m,_,y,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,h){n.length>1&&n.sort(p||_1),i.length>1&&i.sort(h||hp),r.length>1&&r.sort(h||hp)}function f(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function y1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new pp,t.set(i,[o])):r>=s.length?(o=new pp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function S1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ve};break;case"SpotLight":n={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function M1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let E1=0;function w1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T1(t,e){const n=new S1,i=M1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new O);const s=new O,o=new yt,a=new yt;function l(f,p){let h=0,m=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,g=0,d=0,x=0,v=0,M=0,E=0,A=0,R=0,P=0;f.sort(w1);const S=p===!0?Math.PI:1;for(let $=0,G=f.length;$<G;$++){const U=f[$],z=U.color,H=U.intensity,Q=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*H*S,m+=z.g*H*S,_+=z.b*H*S;else if(U.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(U.sh.coefficients[D],H);else if(U.isDirectionalLight){const D=n.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const B=U.shadow,k=i.get(U);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=Z,r.directionalShadowMatrix[y]=U.shadow.matrix,M++}r.directional[y]=D,y++}else if(U.isSpotLight){const D=n.get(U);D.position.setFromMatrixPosition(U.matrixWorld),D.color.copy(z).multiplyScalar(H*S),D.distance=Q,D.coneCos=Math.cos(U.angle),D.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),D.decay=U.decay,r.spot[d]=D;const B=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,B.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[d]=B.matrix,U.castShadow){const k=i.get(U);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,r.spotShadow[d]=k,r.spotShadowMap[d]=Z,A++}d++}else if(U.isRectAreaLight){const D=n.get(U);D.color.copy(z).multiplyScalar(H),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=D,x++}else if(U.isPointLight){const D=n.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*S),D.distance=U.distance,D.decay=U.decay,U.castShadow){const B=U.shadow,k=i.get(U);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,r.pointShadow[g]=k,r.pointShadowMap[g]=Z,r.pointShadowMatrix[g]=U.shadow.matrix,E++}r.point[g]=D,g++}else if(U.isHemisphereLight){const D=n.get(U);D.skyColor.copy(U.color).multiplyScalar(H*S),D.groundColor.copy(U.groundColor).multiplyScalar(H*S),r.hemi[v]=D,v++}}x>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==y||b.pointLength!==g||b.spotLength!==d||b.rectAreaLength!==x||b.hemiLength!==v||b.numDirectionalShadows!==M||b.numPointShadows!==E||b.numSpotShadows!==A||b.numSpotMaps!==R)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+R-P,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=P,b.directionalLength=y,b.pointLength=g,b.spotLength=d,b.rectAreaLength=x,b.hemiLength=v,b.numDirectionalShadows=M,b.numPointShadows=E,b.numSpotShadows=A,b.numSpotMaps=R,r.version=E1++)}function c(f,p){let h=0,m=0,_=0,y=0,g=0;const d=p.matrixWorldInverse;for(let x=0,v=f.length;x<v;x++){const M=f[x];if(M.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(M.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const E=r.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function mp(t,e){const n=new T1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function b1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new mp(t,e),n.set(s,[l])):o>=a.length?(l=new mp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class A1 extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C1 extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L1(t,e,n){let i=new Id;const r=new We,s=new We,o=new bt,a=new A1({depthPacking:Iy}),l=new C1,c={},f=n.maxTextureSize,p={[Gi]:Jt,[Jt]:Gi,[ai]:ai},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:R1,fragmentShader:N1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new xi;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Re(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hg;let d=this.type;this.render=function(E,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),$=t.state;$.setBlending(zi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const G=d!==ri&&this.type===ri,U=d===ri&&this.type!==ri;for(let z=0,H=E.length;z<H;z++){const Q=E[z],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const D=Z.getFrameExtents();if(r.multiply(D),s.copy(Z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,Z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,Z.mapSize.y=s.y)),Z.map===null||G===!0||U===!0){const k=this.type!==ri?{minFilter:Ht,magFilter:Ht}:{};Z.map!==null&&Z.map.dispose(),Z.map=new _r(r.x,r.y,k),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();const B=Z.getViewportCount();for(let k=0;k<B;k++){const le=Z.getViewport(k);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),$.viewport(o),Z.updateMatrices(Q,k),i=Z.getFrustum(),M(A,R,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ri&&x(Z,R),Z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(P,S,b)};function x(E,A){const R=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _r(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,R,m,y,null)}function v(E,A,R,P){let S=null;const b=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)S=b;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=S.uuid,G=A.uuid;let U=c[$];U===void 0&&(U={},c[$]=U);let z=U[G];z===void 0&&(z=S.clone(),U[G]=z),S=z}if(S.visible=A.visible,S.wireframe=A.wireframe,P===ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:p[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=t.properties.get(S);$.light=R}return S}function M(E,A,R,P,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const G=e.update(E),U=E.material;if(Array.isArray(U)){const z=G.groups;for(let H=0,Q=z.length;H<Q;H++){const Z=z[H],D=U[Z.materialIndex];if(D&&D.visible){const B=v(E,D,P,S);t.renderBufferDirect(R,null,G,B,E,Z)}}}else if(U.visible){const z=v(E,U,P,S);t.renderBufferDirect(R,null,G,z,E,null)}}const $=E.children;for(let G=0,U=$.length;G<U;G++)M($[G],A,R,P,S)}}function P1(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const W=new bt;let te=null;const de=new bt(0,0,0,0);return{setMask:function(ve){te!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ke,Ze,Lt,vi){vi===!0&&(ve*=Lt,Ke*=Lt,Ze*=Lt),W.set(ve,Ke,Ze,Lt),de.equals(W)===!1&&(t.clearColor(ve,Ke,Ze,Lt),de.copy(W))},reset:function(){L=!1,te=null,de.set(-1,0,0,0)}}}function s(){let L=!1,W=null,te=null,de=null;return{setTest:function(ve){ve?N(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(ve){W!==ve&&!L&&(t.depthMask(ve),W=ve)},setFunc:function(ve){if(te!==ve){switch(ve){case sy:t.depthFunc(t.NEVER);break;case oy:t.depthFunc(t.ALWAYS);break;case ay:t.depthFunc(t.LESS);break;case bu:t.depthFunc(t.LEQUAL);break;case ly:t.depthFunc(t.EQUAL);break;case cy:t.depthFunc(t.GEQUAL);break;case uy:t.depthFunc(t.GREATER);break;case dy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){L=ve},setClear:function(ve){de!==ve&&(t.clearDepth(ve),de=ve)},reset:function(){L=!1,W=null,te=null,de=null}}}function o(){let L=!1,W=null,te=null,de=null,ve=null,Ke=null,Ze=null,Lt=null,vi=null;return{setTest:function(dt){L||(dt?N(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(dt){W!==dt&&!L&&(t.stencilMask(dt),W=dt)},setFunc:function(dt,mn,jn){(te!==dt||de!==mn||ve!==jn)&&(t.stencilFunc(dt,mn,jn),te=dt,de=mn,ve=jn)},setOp:function(dt,mn,jn){(Ke!==dt||Ze!==mn||Lt!==jn)&&(t.stencilOp(dt,mn,jn),Ke=dt,Ze=mn,Lt=jn)},setLocked:function(dt){L=dt},setClear:function(dt){vi!==dt&&(t.clearStencil(dt),vi=dt)},reset:function(){L=!1,W=null,te=null,de=null,ve=null,Ke=null,Ze=null,Lt=null,vi=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,p=new WeakMap;let h={},m={},_=new WeakMap,y=[],g=null,d=!1,x=null,v=null,M=null,E=null,A=null,R=null,P=null,S=!1,b=null,$=null,G=null,U=null,z=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Z=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(D)[1]),Q=Z>=1):D.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Q=Z>=2);let B=null,k={};const le=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),j=new bt().fromArray(le),Y=new bt().fromArray(J);function re(L,W,te,de){const ve=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(L,Ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<te;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(W,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(W+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Ke}const se={};se[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(t.DEPTH_TEST),l.setFunc(bu),ct(!1),it(eh),N(t.CULL_FACE),be(zi);function N(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ee(L,W){return m[L]!==W?(t.bindFramebuffer(L,W),m[L]=W,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=W),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=W)),!0):!1}function oe(L,W){let te=y,de=!1;if(L)if(te=_.get(W),te===void 0&&(te=[],_.set(W,te)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(te.length!==ve.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=ve.length;Ke<Ze;Ke++)te[Ke]=t.COLOR_ATTACHMENT0+Ke;te.length=ve.length,de=!0}}else te[0]!==t.COLOR_ATTACHMENT0&&(te[0]=t.COLOR_ATTACHMENT0,de=!0);else te[0]!==t.BACK&&(te[0]=t.BACK,de=!0);de&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ye(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const ke={[jr]:t.FUNC_ADD,[q_]:t.FUNC_SUBTRACT,[Y_]:t.FUNC_REVERSE_SUBTRACT};if(i)ke[rh]=t.MIN,ke[sh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ke[rh]=L.MIN_EXT,ke[sh]=L.MAX_EXT)}const me={[K_]:t.ZERO,[Z_]:t.ONE,[Q_]:t.SRC_COLOR,[Vg]:t.SRC_ALPHA,[ry]:t.SRC_ALPHA_SATURATE,[ny]:t.DST_COLOR,[ey]:t.DST_ALPHA,[J_]:t.ONE_MINUS_SRC_COLOR,[Wg]:t.ONE_MINUS_SRC_ALPHA,[iy]:t.ONE_MINUS_DST_COLOR,[ty]:t.ONE_MINUS_DST_ALPHA};function be(L,W,te,de,ve,Ke,Ze,Lt){if(L===zi){d===!0&&(Ae(t.BLEND),d=!1);return}if(d===!1&&(N(t.BLEND),d=!0),L!==$_){if(L!==x||Lt!==S){if((v!==jr||A!==jr)&&(t.blendEquation(t.FUNC_ADD),v=jr,A=jr),Lt)switch(L){case as:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,E=null,R=null,P=null,x=L,S=Lt}return}ve=ve||W,Ke=Ke||te,Ze=Ze||de,(W!==v||ve!==A)&&(t.blendEquationSeparate(ke[W],ke[ve]),v=W,A=ve),(te!==M||de!==E||Ke!==R||Ze!==P)&&(t.blendFuncSeparate(me[te],me[de],me[Ke],me[Ze]),M=te,E=de,R=Ke,P=Ze),x=L,S=!1}function Qe(L,W){L.side===ai?Ae(t.CULL_FACE):N(t.CULL_FACE);let te=L.side===Jt;W&&(te=!te),ct(te),L.blending===as&&L.transparent===!1?be(zi):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ct(L){b!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),b=L)}function it(L){L!==W_?(N(t.CULL_FACE),L!==$&&(L===eh?t.cullFace(t.BACK):L===X_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),$=L}function Ye(L){L!==G&&(Q&&t.lineWidth(L),G=L)}function je(L,W,te){L?(N(t.POLYGON_OFFSET_FILL),(U!==W||z!==te)&&(t.polygonOffset(W,te),U=W,z=te)):Ae(t.POLYGON_OFFSET_FILL)}function Je(L){L?N(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ht(L){L===void 0&&(L=t.TEXTURE0+H-1),B!==L&&(t.activeTexture(L),B=L)}function C(L,W,te){te===void 0&&(B===null?te=t.TEXTURE0+H-1:te=B);let de=k[te];de===void 0&&(de={type:void 0,texture:void 0},k[te]=de),(de.type!==L||de.texture!==W)&&(B!==te&&(t.activeTexture(te),B=te),t.bindTexture(L,W||se[L]),de.type=L,de.texture=W)}function w(){const L=k[B];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(L){j.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),j.copy(L))}function fe(L){Y.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function De(L,W){let te=p.get(W);te===void 0&&(te=new WeakMap,p.set(W,te));let de=te.get(L);de===void 0&&(de=t.getUniformBlockIndex(W,L.name),te.set(L,de))}function He(L,W){const de=p.get(W).get(L);f.get(W)!==de&&(t.uniformBlockBinding(W,de,L.__bindingPointIndex),f.set(W,de))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,k={},m={},_=new WeakMap,y=[],g=null,d=!1,x=null,v=null,M=null,E=null,A=null,R=null,P=null,S=!1,b=null,$=null,G=null,U=null,z=null,j.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:Ae,bindFramebuffer:Ee,drawBuffers:oe,useProgram:ye,setBlending:be,setMaterial:Qe,setFlipSided:ct,setCullFace:it,setLineWidth:Ye,setPolygonOffset:je,setScissorTest:Je,activeTexture:ht,bindTexture:C,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Se,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:q,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:ue,compressedTexSubImage2D:we,compressedTexSubImage3D:pe,scissor:ae,viewport:fe,reset:st}}function D1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,f=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return d?new OffscreenCanvas(C,w):il("canvas")}function v(C,w,V,ee){let ie=1;if((C.width>ee||C.height>ee)&&(ie=ee/Math.max(C.width,C.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ue=w?zy:Math.floor,we=ue(ie*C.width),pe=ue(ie*C.height);y===void 0&&(y=x(we,pe));const q=V?x(we,pe):y;return q.width=we,q.height=pe,q.getContext("2d").drawImage(C,0,0,we,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+pe+")."),q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return Ph(C.width)&&Ph(C.height)}function E(C){return a?!1:C.wrapS!==Fn||C.wrapT!==Fn||C.minFilter!==Ht&&C.minFilter!==yn}function A(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ht&&C.minFilter!==yn}function R(C){t.generateMipmap(C)}function P(C,w,V,ee,ie=!1){if(a===!1)return w;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue=w;return w===t.RED&&(V===t.FLOAT&&(ue=t.R32F),V===t.HALF_FLOAT&&(ue=t.R16F),V===t.UNSIGNED_BYTE&&(ue=t.R8)),w===t.RG&&(V===t.FLOAT&&(ue=t.RG32F),V===t.HALF_FLOAT&&(ue=t.RG16F),V===t.UNSIGNED_BYTE&&(ue=t.RG8)),w===t.RGBA&&(V===t.FLOAT&&(ue=t.RGBA32F),V===t.HALF_FLOAT&&(ue=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ue=ee===Ne&&ie===!1?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)),(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(C,w,V){return A(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===Ht||C===oh||C===ec?t.NEAREST:t.LINEAR}function $(C){const w=C.target;w.removeEventListener("dispose",$),U(w),w.isVideoTexture&&_.delete(w)}function G(C){const w=C.target;w.removeEventListener("dispose",G),H(w)}function U(C){const w=i.get(C);if(w.__webglInit===void 0)return;const V=C.source,ee=g.get(V);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&z(C),Object.keys(ee).length===0&&g.delete(V)}i.remove(C)}function z(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const V=C.source,ee=g.get(V);delete ee[w.__cacheKey],o.memory.textures--}function H(C){const w=C.texture,V=i.get(C),ee=i.get(w);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,ue=w.length;ie<ue;ie++){const we=i.get(w[ie]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(w[ie])}i.remove(w),i.remove(C)}let Q=0;function Z(){Q=0}function D(){const C=Q;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Q+=1,C}function B(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function k(C,w){const V=i.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,C,w);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function le(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ae(V,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function J(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ae(V,C,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function j(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ee(V,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const Y={[Ru]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[Nu]:t.MIRRORED_REPEAT},re={[Ht]:t.NEAREST,[oh]:t.NEAREST_MIPMAP_NEAREST,[ec]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[vy]:t.LINEAR_MIPMAP_NEAREST,[Eo]:t.LINEAR_MIPMAP_LINEAR};function se(C,w,V){if(V?(t.texParameteri(C,t.TEXTURE_WRAP_S,Y[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Y[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Y[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,re[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,re[w.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==Fn||w.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,b(w.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Ht&&w.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ht||w.minFilter!==ec&&w.minFilter!==Eo||w.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function N(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",$));const ee=w.source;let ie=g.get(ee);ie===void 0&&(ie={},g.set(ee,ie));const ue=B(w);if(ue!==C.__cacheKey){ie[ue]===void 0&&(ie[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[ue].usedTimes++;const we=ie[C.__cacheKey];we!==void 0&&(ie[C.__cacheKey].usedTimes--,we.usedTimes===0&&z(w)),C.__cacheKey=ue,C.__webglTexture=ie[ue].texture}return V}function Ae(C,w,V){let ee=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=N(C,w),ue=w.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+V);const we=i.get(ue);if(ue.version!==we.__version||ie===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const pe=E(w)&&M(w.image)===!1;let q=v(w.image,pe,!1,f);q=ht(w,q);const ge=M(q)||a,_e=s.convert(w.format,w.colorSpace);let Se=s.convert(w.type),ae=P(w.internalFormat,_e,Se,w.colorSpace);se(ee,w,ge);let fe;const De=w.mipmaps,He=a&&w.isVideoTexture!==!0,st=we.__version===void 0||ie===!0,L=S(w,q,ge);if(w.isDepthTexture)ae=t.DEPTH_COMPONENT,a?w.type===ar?ae=t.DEPTH_COMPONENT32F:w.type===or?ae=t.DEPTH_COMPONENT24:w.type===ls?ae=t.DEPTH24_STENCIL8:ae=t.DEPTH_COMPONENT16:w.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ur&&ae===t.DEPTH_COMPONENT&&w.type!==qg&&w.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=or,Se=s.convert(w.type)),w.format===_s&&ae===t.DEPTH_COMPONENT&&(ae=t.DEPTH_STENCIL,w.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ls,Se=s.convert(w.type))),st&&(He?n.texStorage2D(t.TEXTURE_2D,1,ae,q.width,q.height):n.texImage2D(t.TEXTURE_2D,0,ae,q.width,q.height,0,_e,Se,null));else if(w.isDataTexture)if(De.length>0&&ge){He&&st&&n.texStorage2D(t.TEXTURE_2D,L,ae,De[0].width,De[0].height);for(let W=0,te=De.length;W<te;W++)fe=De[W],He?n.texSubImage2D(t.TEXTURE_2D,W,0,0,fe.width,fe.height,_e,Se,fe.data):n.texImage2D(t.TEXTURE_2D,W,ae,fe.width,fe.height,0,_e,Se,fe.data);w.generateMipmaps=!1}else He?(st&&n.texStorage2D(t.TEXTURE_2D,L,ae,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,q.width,q.height,_e,Se,q.data)):n.texImage2D(t.TEXTURE_2D,0,ae,q.width,q.height,0,_e,Se,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,ae,De[0].width,De[0].height,q.depth);for(let W=0,te=De.length;W<te;W++)fe=De[W],w.format!==kn?_e!==null?He?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,q.depth,_e,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,ae,fe.width,fe.height,q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,q.depth,_e,Se,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,ae,fe.width,fe.height,q.depth,0,_e,Se,fe.data)}else{He&&st&&n.texStorage2D(t.TEXTURE_2D,L,ae,De[0].width,De[0].height);for(let W=0,te=De.length;W<te;W++)fe=De[W],w.format!==kn?_e!==null?He?n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,fe.width,fe.height,_e,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,W,ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage2D(t.TEXTURE_2D,W,0,0,fe.width,fe.height,_e,Se,fe.data):n.texImage2D(t.TEXTURE_2D,W,ae,fe.width,fe.height,0,_e,Se,fe.data)}else if(w.isDataArrayTexture)He?(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,ae,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,_e,Se,q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ae,q.width,q.height,q.depth,0,_e,Se,q.data);else if(w.isData3DTexture)He?(st&&n.texStorage3D(t.TEXTURE_3D,L,ae,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,_e,Se,q.data)):n.texImage3D(t.TEXTURE_3D,0,ae,q.width,q.height,q.depth,0,_e,Se,q.data);else if(w.isFramebufferTexture){if(st)if(He)n.texStorage2D(t.TEXTURE_2D,L,ae,q.width,q.height);else{let W=q.width,te=q.height;for(let de=0;de<L;de++)n.texImage2D(t.TEXTURE_2D,de,ae,W,te,0,_e,Se,null),W>>=1,te>>=1}}else if(De.length>0&&ge){He&&st&&n.texStorage2D(t.TEXTURE_2D,L,ae,De[0].width,De[0].height);for(let W=0,te=De.length;W<te;W++)fe=De[W],He?n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e,Se,fe):n.texImage2D(t.TEXTURE_2D,W,ae,_e,Se,fe);w.generateMipmaps=!1}else He?(st&&n.texStorage2D(t.TEXTURE_2D,L,ae,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,q)):n.texImage2D(t.TEXTURE_2D,0,ae,_e,Se,q);A(w,ge)&&R(ee),we.__version=ue.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ee(C,w,V){if(w.image.length!==6)return;const ee=N(C,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const ue=i.get(ie);if(ie.version!==ue.__version||ee===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!we&&!pe?q[W]=v(w.image[W],!1,!0,c):q[W]=pe?w.image[W].image:w.image[W],q[W]=ht(w,q[W]);const ge=q[0],_e=M(ge)||a,Se=s.convert(w.format,w.colorSpace),ae=s.convert(w.type),fe=P(w.internalFormat,Se,ae,w.colorSpace),De=a&&w.isVideoTexture!==!0,He=ue.__version===void 0||ee===!0;let st=S(w,ge,_e);se(t.TEXTURE_CUBE_MAP,w,_e);let L;if(we){De&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,st,fe,ge.width,ge.height);for(let W=0;W<6;W++){L=q[W].mipmaps;for(let te=0;te<L.length;te++){const de=L[te];w.format!==kn?Se!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,de.width,de.height,Se,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,fe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,de.width,de.height,Se,ae,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,fe,de.width,de.height,0,Se,ae,de.data)}}}else{L=w.mipmaps,De&&He&&(L.length>0&&st++,n.texStorage2D(t.TEXTURE_CUBE_MAP,st,fe,q[0].width,q[0].height));for(let W=0;W<6;W++)if(pe){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,q[W].width,q[W].height,Se,ae,q[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,q[W].width,q[W].height,0,Se,ae,q[W].data);for(let te=0;te<L.length;te++){const ve=L[te].image[W].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,ve.width,ve.height,Se,ae,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,fe,ve.width,ve.height,0,Se,ae,ve.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Se,ae,q[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,Se,ae,q[W]);for(let te=0;te<L.length;te++){const de=L[te];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,Se,ae,de.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,fe,Se,ae,de.image[W])}}}A(w,_e)&&R(t.TEXTURE_CUBE_MAP),ue.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function oe(C,w,V,ee,ie){const ue=s.convert(V.format,V.colorSpace),we=s.convert(V.type),pe=P(V.internalFormat,ue,we,V.colorSpace);i.get(w).__hasExternalTextures||(ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,pe,w.width,w.height,w.depth,0,ue,we,null):n.texImage2D(ie,0,pe,w.width,w.height,0,ue,we,null)),n.bindFramebuffer(t.FRAMEBUFFER,C),je(w)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(V).__webglTexture,0,Ye(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(V).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(C,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if(V||je(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ar?ee=t.DEPTH_COMPONENT32F:ie.type===or&&(ee=t.DEPTH_COMPONENT24));const ue=Ye(w);je(w)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ee,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ee,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const ee=Ye(w);V&&je(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,w.width,w.height):je(w)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<ee.length;ie++){const ue=ee[ie],we=s.convert(ue.format,ue.colorSpace),pe=s.convert(ue.type),q=P(ue.internalFormat,we,pe,ue.colorSpace),ge=Ye(w);V&&je(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,q,w.width,w.height):je(w)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,q,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ke(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ie=Ye(w);if(w.depthTexture.format===ur)je(w)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(w.depthTexture.format===_s)je(w)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function me(C){const w=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ke(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=t.createRenderbuffer(),ye(w.__webglDepthbuffer[ee],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),ye(w.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(C,w,V){const ee=i.get(C);w!==void 0&&oe(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),V!==void 0&&me(C)}function Qe(C){const w=C.texture,V=i.get(C),ee=i.get(w);C.addEventListener("dispose",G),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,o.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,ue=C.isWebGLMultipleRenderTargets===!0,we=M(C)||a;if(ie){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(V.__webglFramebuffer=t.createFramebuffer(),ue)if(r.drawBuffers){const pe=C.texture;for(let q=0,ge=pe.length;q<ge;q++){const _e=i.get(pe[q]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&je(C)===!1){const pe=ue?w:[w];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let q=0;q<pe.length;q++){const ge=pe[q];V.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[q]);const _e=s.convert(ge.format,ge.colorSpace),Se=s.convert(ge.type),ae=P(ge.internalFormat,_e,Se,ge.colorSpace,C.isXRRenderTarget===!0),fe=Ye(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ae,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,V.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),se(t.TEXTURE_CUBE_MAP,w,we);for(let pe=0;pe<6;pe++)oe(V.__webglFramebuffer[pe],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe);A(w,we)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const pe=C.texture;for(let q=0,ge=pe.length;q<ge;q++){const _e=pe[q],Se=i.get(_e);n.bindTexture(t.TEXTURE_2D,Se.__webglTexture),se(t.TEXTURE_2D,_e,we),oe(V.__webglFramebuffer,C,_e,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D),A(_e,we)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?pe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ee.__webglTexture),se(pe,w,we),oe(V.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,pe),A(w,we)&&R(pe),n.unbindTexture()}C.depthBuffer&&me(C)}function ct(C){const w=M(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ie=V.length;ee<ie;ee++){const ue=V[ee];if(A(ue,w)){const we=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(ue).__webglTexture;n.bindTexture(we,pe),R(we),n.unbindTexture()}}}function it(C){if(a&&C.samples>0&&je(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ee=C.height;let ie=t.COLOR_BUFFER_BIT;const ue=[],we=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),q=C.isWebGLMultipleRenderTargets===!0;if(q)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){ue.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&ue.push(we);const _e=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(_e===!1&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),q&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),q){const Se=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const _e=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ye(C){return Math.min(p,C.samples)}function je(C){const w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(C){const w=o.render.frame;_.get(C)!==w&&(_.set(C,w),C.update())}function ht(C,w){const V=C.colorSpace,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.format===Lu||V!==Zn&&V!==fr&&(V===Ne?a===!1?e.has("EXT_sRGB")===!0&&ee===kn?(C.format=Lu,C.minFilter=yn,C.generateMipmaps=!1):w=Qg.sRGBToLinear(w):(ee!==kn||ie!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=le,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=be,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=je}function U1(t,e,n){const i=n.isWebGL2;function r(s,o=fr){let a;if(s===vr)return t.UNSIGNED_BYTE;if(s===My)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ey)return t.UNSIGNED_SHORT_5_5_5_1;if(s===_y)return t.BYTE;if(s===yy)return t.SHORT;if(s===qg)return t.UNSIGNED_SHORT;if(s===Sy)return t.INT;if(s===or)return t.UNSIGNED_INT;if(s===ar)return t.FLOAT;if(s===wo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wy)return t.ALPHA;if(s===kn)return t.RGBA;if(s===Ty)return t.LUMINANCE;if(s===by)return t.LUMINANCE_ALPHA;if(s===ur)return t.DEPTH_COMPONENT;if(s===_s)return t.DEPTH_STENCIL;if(s===Lu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ay)return t.RED;if(s===Cy)return t.RED_INTEGER;if(s===Ry)return t.RG;if(s===Ny)return t.RG_INTEGER;if(s===Ly)return t.RGBA_INTEGER;if(s===tc||s===nc||s===ic||s===rc)if(o===Ne)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ah||s===lh||s===ch||s===uh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Py)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dh||s===fh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dh)return o===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===fh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hh||s===ph||s===mh||s===gh||s===xh||s===vh||s===_h||s===yh||s===Sh||s===Mh||s===Eh||s===wh||s===Th||s===bh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===hh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Eh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bh)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===sc)return o===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Dy||s===Ah||s===Ch||s===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===sc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class I1 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ni extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ni;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class k1 extends un{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:ur,f!==ur&&f!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ur&&(i=or),i===void 0&&f===_s&&(i=ls),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class O1 extends As{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,h=null,m=null,_=null;const y=n.getContextAttributes();let g=null,d=null;const x=[],v=[],M=new Set,E=new Map,A=new an;A.layers.enable(1),A.viewport=new bt;const R=new an;R.layers.enable(2),R.viewport=new bt;const P=[A,R],S=new I1;S.layers.enable(1),S.layers.enable(2);let b=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=x[j];return Y===void 0&&(Y=new Rc,x[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=x[j];return Y===void 0&&(Y=new Rc,x[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=x[j];return Y===void 0&&(Y=new Rc,x[j]=Y),Y.getHandSpace()};function G(j){const Y=v.indexOf(j.inputSource);if(Y===-1)return;const re=x[Y];re!==void 0&&(re.update(j.inputSource,j.frame,c||o),re.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",z);for(let j=0;j<x.length;j++){const Y=v[j];Y!==null&&(v[j]=null,x[j].disconnect(Y))}b=null,$=null,e.setRenderTarget(g),m=null,h=null,p=null,r=null,d=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",U),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:m}),d=new _r(m.framebufferWidth,m.framebufferHeight,{format:kn,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,re=null,se=null;y.depth&&(se=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=y.stencil?_s:ur,re=y.stencil?ls:or);const N={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(N),r.updateRenderState({layers:[h]}),d=new _r(h.textureWidth,h.textureHeight,{format:kn,type:vr,depthTexture:new k1(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ae=e.properties.get(d);Ae.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(j){for(let Y=0;Y<j.removed.length;Y++){const re=j.removed[Y],se=v.indexOf(re);se>=0&&(v[se]=null,x[se].disconnect(re))}for(let Y=0;Y<j.added.length;Y++){const re=j.added[Y];let se=v.indexOf(re);if(se===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=v.length){v.push(re),se=Ae;break}else if(v[Ae]===null){v[Ae]=re,se=Ae;break}if(se===-1)break}const N=x[se];N&&N.connect(re)}}const H=new O,Q=new O;function Z(j,Y,re){H.setFromMatrixPosition(Y.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const se=H.distanceTo(Q),N=Y.projectionMatrix.elements,Ae=re.projectionMatrix.elements,Ee=N[14]/(N[10]-1),oe=N[14]/(N[10]+1),ye=(N[9]+1)/N[5],ke=(N[9]-1)/N[5],me=(N[8]-1)/N[0],be=(Ae[8]+1)/Ae[0],Qe=Ee*me,ct=Ee*be,it=se/(-me+be),Ye=it*-me;Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ye),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const je=Ee+it,Je=oe+it,ht=Qe-Ye,C=ct+(se-Ye),w=ye*oe/Je*je,V=ke*oe/Je*je;j.projectionMatrix.makePerspective(ht,C,w,V,je,Je),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function D(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=R.near=A.near=j.near,S.far=R.far=A.far=j.far,(b!==S.near||$!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,$=S.far);const Y=j.parent,re=S.cameras;D(S,Y);for(let se=0;se<re.length;se++)D(re[se],Y);re.length===2?Z(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),B(j,S,Y)};function B(j,Y,re){re===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const se=j.children;for(let N=0,Ae=se.length;N<Ae;N++)se[N].updateMatrixWorld(!0);j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.getPlanes=function(){return M};let k=null;function le(j,Y){if(f=Y.getViewerPose(c||o),_=Y,f!==null){const re=f.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let se=!1;re.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let N=0;N<re.length;N++){const Ae=re[N];let Ee=null;if(m!==null)Ee=m.getViewport(Ae);else{const ye=p.getViewSubImage(h,Ae);Ee=ye.viewport,N===0&&(e.setRenderTargetTextures(d,ye.colorTexture,h.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(d))}let oe=P[N];oe===void 0&&(oe=new an,oe.layers.enable(N),oe.viewport=new bt,P[N]=oe),oe.matrix.fromArray(Ae.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ae.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),N===0&&(S.matrix.copy(oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(oe)}}for(let re=0;re<x.length;re++){const se=v[re],N=x[re];se!==null&&N!==void 0&&N.update(se,Y,c||o)}if(k&&k(j,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let re=null;for(const se of M)Y.detectedPlanes.has(se)||(re===null&&(re=[]),re.push(se));if(re!==null)for(const se of re)M.delete(se),E.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of Y.detectedPlanes)if(!M.has(se))M.add(se),E.set(se,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const N=E.get(se);se.lastChangedTime>N&&(E.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}_=null}const J=new c0;J.setAnimationLoop(le),this.setAnimationLoop=function(j){k=j},this.dispose=function(){}}}function z1(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,o0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Jt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Jt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=t.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;i.uniformBlockBinding(x,M)}function c(x,v){let M=r[x.id];M===void 0&&(_(x),M=f(x),r[x.id]=M,x.addEventListener("dispose",g));const E=v.program;i.updateUBOMapping(x,E);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function f(x){const v=p();x.__bindingPointIndex=v;const M=t.createBuffer(),E=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],M=x.uniforms,E=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,R=M.length;A<R;A++){const P=M[A];if(m(P,A,E)===!0){const S=P.__offset,b=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let G=0;G<b.length;G++){const U=b[G],z=y(U);typeof U=="number"?(P.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,S+$,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,$),$+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,v,M){const E=x.value;if(M[v]===void 0){if(typeof E=="number")M[v]=E;else{const A=Array.isArray(E)?E:[E],R=[];for(let P=0;P<A.length;P++)R.push(A[P].clone());M[v]=R}return!0}else if(typeof E=="number"){if(M[v]!==E)return M[v]=E,!0}else{const A=Array.isArray(M[v])?M[v]:[M[v]],R=Array.isArray(E)?E:[E];for(let P=0;P<A.length;P++){const S=A[P];if(S.equals(R[P])===!1)return S.copy(R[P]),!0}}return!1}function _(x){const v=x.uniforms;let M=0;const E=16;let A=0;for(let R=0,P=v.length;R<P;R++){const S=v[R],b={boundary:0,storage:0},$=Array.isArray(S.value)?S.value:[S.value];for(let G=0,U=$.length;G<U;G++){const z=$[G],H=y(z);b.boundary+=H.boundary,b.storage+=H.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,R>0){A=M%E;const G=E-A;A!==0&&G-b.boundary<0&&(M+=E-A,S.__offset=M)}M+=b.storage}return A=M%E,A>0&&(M+=E-A),x.__size=M,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function j1(){const t=il("canvas");return t.style.display="block",t}class kd{constructor(e={}){const{canvas:n=j1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=null,_=null;const y=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this.useLegacyLights=!0,this.toneMapping=di,this.toneMappingExposure=1;const d=this;let x=!1,v=0,M=0,E=null,A=-1,R=null;const P=new bt,S=new bt;let b=null,$=n.width,G=n.height,U=1,z=null,H=null;const Q=new bt(0,0,$,G),Z=new bt(0,0,$,G);let D=!1;const B=new Id;let k=!1,le=!1,J=null;const j=new yt,Y=new O,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return E===null?U:1}let N=i;function Ae(T,F){for(let X=0;X<T.length;X++){const I=T[X],K=n.getContext(I,F);if(K!==null)return K}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ld}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",He,!1),N===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),N=Ae(F,T),N===null)throw Ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,oe,ye,ke,me,be,Qe,ct,it,Ye,je,Je,ht,C,w,V,ee,ie,ue,we,pe,q,ge,_e;function Se(){Ee=new QE(N),oe=new XE(N,Ee,e),Ee.init(oe),q=new U1(N,Ee,oe),ye=new P1(N,Ee,oe),ke=new tw(N),me=new v1,be=new D1(N,Ee,ye,me,oe,q,ke),Qe=new qE(d),ct=new ZE(d),it=new hS(N,oe),ge=new VE(N,Ee,it,oe),Ye=new JE(N,it,ke,ge),je=new sw(N,Ye,it,ke),ue=new rw(N,oe,be),V=new $E(me),Je=new x1(d,Qe,ct,Ee,oe,ge,V),ht=new z1(d,me),C=new y1,w=new b1(Ee,oe),ie=new HE(d,Qe,ct,ye,je,h,l),ee=new L1(d,je,oe),_e=new B1(N,ke,oe,ye),we=new WE(N,Ee,ke,oe),pe=new ew(N,Ee,ke,oe),ke.programs=Je.programs,d.capabilities=oe,d.extensions=Ee,d.properties=me,d.renderLists=C,d.shadowMap=ee,d.state=ye,d.info=ke}Se();const ae=new O1(d,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize($,G,!1))},this.getSize=function(T){return T.set($,G)},this.setSize=function(T,F,X=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,G=F,n.width=Math.floor(T*U),n.height=Math.floor(F*U),X===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set($*U,G*U).floor()},this.setDrawingBufferSize=function(T,F,X){$=T,G=F,U=X,n.width=Math.floor(T*X),n.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,F,X,I){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,F,X,I),ye.viewport(P.copy(Q).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,F,X,I){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,X,I),ye.scissor(S.copy(Z).multiplyScalar(U).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(T){ye.setScissorTest(D=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(T=!0,F=!0,X=!0){let I=0;T&&(I|=N.COLOR_BUFFER_BIT),F&&(I|=N.DEPTH_BUFFER_BIT),X&&(I|=N.STENCIL_BUFFER_BIT),N.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",He,!1),C.dispose(),w.dispose(),me.dispose(),Qe.dispose(),ct.dispose(),je.dispose(),ge.dispose(),_e.dispose(),Je.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ve),ae.removeEventListener("sessionend",Ke),J&&(J.dispose(),J=null),Ze.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=ke.autoReset,F=ee.enabled,X=ee.autoUpdate,I=ee.needsUpdate,K=ee.type;Se(),ke.autoReset=T,ee.enabled=F,ee.autoUpdate=X,ee.needsUpdate=I,ee.type=K}function He(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const F=T.target;F.removeEventListener("dispose",st),L(F)}function L(T){W(T),me.remove(T)}function W(T){const F=me.get(T).programs;F!==void 0&&(F.forEach(function(X){Je.releaseProgram(X)}),T.isShaderMaterial&&Je.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,I,K,Me){F===null&&(F=re);const Te=K.isMesh&&K.matrixWorld.determinant()<0,Ce=_0(T,F,X,I,K);ye.setMaterial(I,Te);let Le=X.index,Ue=1;I.wireframe===!0&&(Le=Ye.getWireframeAttribute(X),Ue=2);const Ie=X.drawRange,Oe=X.attributes.position;let qe=Ie.start*Ue,zt=(Ie.start+Ie.count)*Ue;Me!==null&&(qe=Math.max(qe,Me.start*Ue),zt=Math.min(zt,(Me.start+Me.count)*Ue)),Le!==null?(qe=Math.max(qe,0),zt=Math.min(zt,Le.count)):Oe!=null&&(qe=Math.max(qe,0),zt=Math.min(zt,Oe.count));const bn=zt-qe;if(bn<0||bn===1/0)return;ge.setup(K,I,Ce,X,Le);let Xi,pt=we;if(Le!==null&&(Xi=it.get(Le),pt=pe,pt.setIndex(Xi)),K.isMesh)I.wireframe===!0?(ye.setLineWidth(I.wireframeLinewidth*se()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(K.isLine){let Be=I.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*se()),K.isLineSegments?pt.setMode(N.LINES):K.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else K.isPoints?pt.setMode(N.POINTS):K.isSprite&&pt.setMode(N.TRIANGLES);if(K.isInstancedMesh)pt.renderInstances(qe,bn,K.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wl=Math.min(X.instanceCount,Be);pt.renderInstances(qe,bn,wl)}else pt.render(qe,bn)},this.compile=function(T,F){function X(I,K,Me){I.transparent===!0&&I.side===ai&&I.forceSinglePass===!1?(I.side=Jt,I.needsUpdate=!0,Io(I,K,Me),I.side=Gi,I.needsUpdate=!0,Io(I,K,Me),I.side=ai):Io(I,K,Me)}_=w.get(T),_.init(),g.push(_),T.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(_.pushLight(I),I.castShadow&&_.pushShadow(I))}),_.setupLights(d.useLegacyLights),T.traverse(function(I){const K=I.material;if(K)if(Array.isArray(K))for(let Me=0;Me<K.length;Me++){const Te=K[Me];X(Te,T,I)}else X(K,T,I)}),g.pop(),_=null};let te=null;function de(T){te&&te(T)}function ve(){Ze.stop()}function Ke(){Ze.start()}const Ze=new c0;Ze.setAnimationLoop(de),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(T){te=T,ae.setAnimationLoop(T),T===null?Ze.stop():Ze.start()},ae.addEventListener("sessionstart",ve),ae.addEventListener("sessionend",Ke),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,F,E),_=w.get(T,g.length),_.init(),g.push(_),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(j),le=this.localClippingEnabled,k=V.init(this.clippingPlanes,le),m=C.get(T,y.length),m.init(),y.push(m),Lt(T,F,0,d.sortObjects),m.finish(),d.sortObjects===!0&&m.sort(z,H),k===!0&&V.beginShadows();const X=_.state.shadowsArray;if(ee.render(X,T,F),k===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(m,T),_.setupLights(d.useLegacyLights),F.isArrayCamera){const I=F.cameras;for(let K=0,Me=I.length;K<Me;K++){const Te=I[K];vi(m,T,Te,Te.viewport)}}else vi(m,T,F);E!==null&&(be.updateMultisampleRenderTarget(E),be.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(d,T,F),ge.resetDefaultState(),A=-1,R=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Lt(T,F,X,I){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){I&&Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const Te=je.update(T),Ce=T.material;Ce.visible&&m.push(T,Te,Ce,X,Y.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==ke.render.frame&&(T.skeleton.update(),T.skeleton.frame=ke.render.frame);const Te=je.update(T),Ce=T.material;if(I&&(Te.boundingSphere===null&&Te.computeBoundingSphere(),Y.copy(Te.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(j)),Array.isArray(Ce)){const Le=Te.groups;for(let Ue=0,Ie=Le.length;Ue<Ie;Ue++){const Oe=Le[Ue],qe=Ce[Oe.materialIndex];qe&&qe.visible&&m.push(T,Te,qe,X,Y.z,Oe)}}else Ce.visible&&m.push(T,Te,Ce,X,Y.z,null)}}const Me=T.children;for(let Te=0,Ce=Me.length;Te<Ce;Te++)Lt(Me[Te],F,X,I)}function vi(T,F,X,I){const K=T.opaque,Me=T.transmissive,Te=T.transparent;_.setupLightsView(X),k===!0&&V.setGlobalState(d.clippingPlanes,X),Me.length>0&&dt(K,Me,F,X),I&&ye.viewport(P.copy(I)),K.length>0&&mn(K,F,X),Me.length>0&&mn(Me,F,X),Te.length>0&&mn(Te,F,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function dt(T,F,X,I){if(J===null){const Ce=oe.isWebGL2;J=new _r(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?wo:vr,minFilter:Eo,samples:Ce&&a===!0?4:0})}const K=d.getRenderTarget();d.setRenderTarget(J),d.clear();const Me=d.toneMapping;d.toneMapping=di,mn(T,X,I),be.updateMultisampleRenderTarget(J),be.updateRenderTargetMipmap(J);let Te=!1;for(let Ce=0,Le=F.length;Ce<Le;Ce++){const Ue=F[Ce],Ie=Ue.object,Oe=Ue.geometry,qe=Ue.material,zt=Ue.group;if(qe.side===ai&&Ie.layers.test(I.layers)){const bn=qe.side;qe.side=Jt,qe.needsUpdate=!0,jn(Ie,X,I,Oe,qe,zt),qe.side=bn,qe.needsUpdate=!0,Te=!0}}Te===!0&&(be.updateMultisampleRenderTarget(J),be.updateRenderTargetMipmap(J)),d.setRenderTarget(K),d.toneMapping=Me}function mn(T,F,X){const I=F.isScene===!0?F.overrideMaterial:null;for(let K=0,Me=T.length;K<Me;K++){const Te=T[K],Ce=Te.object,Le=Te.geometry,Ue=I===null?Te.material:I,Ie=Te.group;Ce.layers.test(X.layers)&&jn(Ce,F,X,Le,Ue,Ie)}}function jn(T,F,X,I,K,Me){T.onBeforeRender(d,F,X,I,K,Me),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(d,F,X,I,T,Me),K.transparent===!0&&K.side===ai&&K.forceSinglePass===!1?(K.side=Jt,K.needsUpdate=!0,d.renderBufferDirect(X,F,I,K,T,Me),K.side=Gi,K.needsUpdate=!0,d.renderBufferDirect(X,F,I,K,T,Me),K.side=ai):d.renderBufferDirect(X,F,I,K,T,Me),T.onAfterRender(d,F,X,I,K,Me)}function Io(T,F,X){F.isScene!==!0&&(F=re);const I=me.get(T),K=_.state.lights,Me=_.state.shadowsArray,Te=K.state.version,Ce=Je.getParameters(T,K.state,Me,F,X),Le=Je.getProgramCacheKey(Ce);let Ue=I.programs;I.environment=T.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(T.isMeshStandardMaterial?ct:Qe).get(T.envMap||I.environment),Ue===void 0&&(T.addEventListener("dispose",st),Ue=new Map,I.programs=Ue);let Ie=Ue.get(Le);if(Ie!==void 0){if(I.currentProgram===Ie&&I.lightsStateVersion===Te)return Od(T,Ce),Ie}else Ce.uniforms=Je.getUniforms(T),T.onBuild(X,Ce,d),T.onBeforeCompile(Ce,d),Ie=Je.acquireProgram(Ce,Le),Ue.set(Le,Ie),I.uniforms=Ce.uniforms;const Oe=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=V.uniform),Od(T,Ce),I.needsLights=S0(T),I.lightsStateVersion=Te,I.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotLightMatrix.value=K.state.spotLightMatrix,Oe.spotLightMap.value=K.state.spotLightMap,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const qe=Ie.getUniforms(),zt=Pa.seqWithValue(qe.seq,Oe);return I.currentProgram=Ie,I.uniformsList=zt,Ie}function Od(T,F){const X=me.get(T);X.outputColorSpace=F.outputColorSpace,X.instancing=F.instancing,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function _0(T,F,X,I,K){F.isScene!==!0&&(F=re),be.resetTextureUnits();const Me=F.fog,Te=I.isMeshStandardMaterial?F.environment:null,Ce=E===null?d.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zn,Le=(I.isMeshStandardMaterial?ct:Qe).get(I.envMap||Te),Ue=I.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!I.normalMap&&!!X.attributes.tangent,Oe=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color,bn=I.toneMapped?d.toneMapping:di,Xi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=Xi!==void 0?Xi.length:0,Be=me.get(I),wl=_.state.lights;if(k===!0&&(le===!0||T!==R)){const tn=T===R&&I.id===A;V.setState(I,T,tn)}let Et=!1;I.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wl.state.version||Be.outputColorSpace!==Ce||K.isInstancedMesh&&Be.instancing===!1||!K.isInstancedMesh&&Be.instancing===!0||K.isSkinnedMesh&&Be.skinning===!1||!K.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Le||I.fog===!0&&Be.fog!==Me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==V.numPlanes||Be.numIntersection!==V.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Ie||Be.morphTargets!==Oe||Be.morphNormals!==qe||Be.morphColors!==zt||Be.toneMapping!==bn||oe.isWebGL2===!0&&Be.morphTargetsCount!==pt)&&(Et=!0):(Et=!0,Be.__version=I.version);let $i=Be.currentProgram;Et===!0&&($i=Io(I,F,K));let zd=!1,Ns=!1,Tl=!1;const Bt=$i.getUniforms(),qi=Be.uniforms;if(ye.useProgram($i.program)&&(zd=!0,Ns=!0,Tl=!0),I.id!==A&&(A=I.id,Ns=!0),zd||R!==T){if(Bt.setValue(N,"projectionMatrix",T.projectionMatrix),oe.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),R!==T&&(R=T,Ns=!0,Tl=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const tn=Bt.map.cameraPosition;tn!==void 0&&tn.setValue(N,Y.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||K.isSkinnedMesh)&&Bt.setValue(N,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){Bt.setOptional(N,K,"bindMatrix"),Bt.setOptional(N,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(oe.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Bt.setValue(N,"boneTexture",tn.boneTexture,be),Bt.setValue(N,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bl=X.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0&&oe.isWebGL2===!0)&&ue.update(K,X,$i),(Ns||Be.receiveShadow!==K.receiveShadow)&&(Be.receiveShadow=K.receiveShadow,Bt.setValue(N,"receiveShadow",K.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(qi.envMap.value=Le,qi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ns&&(Bt.setValue(N,"toneMappingExposure",d.toneMappingExposure),Be.needsLights&&y0(qi,Tl),Me&&I.fog===!0&&ht.refreshFogUniforms(qi,Me),ht.refreshMaterialUniforms(qi,I,U,G,J),Pa.upload(N,Be.uniformsList,qi,be)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Pa.upload(N,Be.uniformsList,qi,be),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Bt.setValue(N,"center",K.center),Bt.setValue(N,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(N,"normalMatrix",K.normalMatrix),Bt.setValue(N,"modelMatrix",K.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const tn=I.uniformsGroups;for(let Al=0,M0=tn.length;Al<M0;Al++)if(oe.isWebGL2){const Bd=tn[Al];_e.update(Bd,$i),_e.bind(Bd,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function y0(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function S0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,F,X){me.get(T.texture).__webglTexture=F,me.get(T.depthTexture).__webglTexture=X;const I=me.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=X===void 0,I.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const X=me.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){E=T,v=F,M=X;let I=!0,K=null,Me=!1,Te=!1;if(T){const Le=me.get(T);Le.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(N.FRAMEBUFFER,null),I=!1):Le.__webglFramebuffer===void 0?be.setupRenderTarget(T):Le.__hasExternalTextures&&be.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Ie=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Ie[F],Me=!0):oe.isWebGL2&&T.samples>0&&be.useMultisampledRTT(T)===!1?K=me.get(T).__webglMultisampledFramebuffer:K=Ie,P.copy(T.viewport),S.copy(T.scissor),b=T.scissorTest}else P.copy(Q).multiplyScalar(U).floor(),S.copy(Z).multiplyScalar(U).floor(),b=D;if(ye.bindFramebuffer(N.FRAMEBUFFER,K)&&oe.drawBuffers&&I&&ye.drawBuffers(T,K),ye.viewport(P),ye.scissor(S),ye.setScissorTest(b),Me){const Le=me.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Le.__webglTexture,X)}else if(Te){const Le=me.get(T.texture),Ue=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,X||0,Ue)}A=-1},this.readRenderTargetPixels=function(T,F,X,I,K,Me,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){ye.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const Le=T.texture,Ue=Le.format,Ie=Le.type;if(Ue!==kn&&q.convert(Ue)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===wo&&(Ee.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==vr&&q.convert(Ie)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===ar&&(oe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-I&&X>=0&&X<=T.height-K&&N.readPixels(F,X,I,K,q.convert(Ue),q.convert(Ie),Me)}finally{const Le=E!==null?me.get(E).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(T,F,X=0){const I=Math.pow(2,-X),K=Math.floor(F.image.width*I),Me=Math.floor(F.image.height*I);be.setTexture2D(F,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,T.x,T.y,K,Me),ye.unbindTexture()},this.copyTextureToTexture=function(T,F,X,I=0){const K=F.image.width,Me=F.image.height,Te=q.convert(X.format),Ce=q.convert(X.type);be.setTexture2D(X,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,T.x,T.y,K,Me,Te,Ce,F.image.data):F.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,I,T.x,T.y,Te,Ce,F.image),I===0&&X.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,F,X,I,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Le=q.convert(I.format),Ue=q.convert(I.type);let Ie;if(I.isData3DTexture)be.setTexture3D(I,0),Ie=N.TEXTURE_3D;else if(I.isDataArrayTexture)be.setTexture2DArray(I,0),Ie=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Oe=N.getParameter(N.UNPACK_ROW_LENGTH),qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),bn=N.getParameter(N.UNPACK_SKIP_ROWS),Xi=N.getParameter(N.UNPACK_SKIP_IMAGES),pt=X.isCompressedTexture?X.mipmaps[0]:X.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?N.texSubImage3D(Ie,K,F.x,F.y,F.z,Me,Te,Ce,Le,Ue,pt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ie,K,F.x,F.y,F.z,Me,Te,Ce,Le,pt.data)):N.texSubImage3D(Ie,K,F.x,F.y,F.z,Me,Te,Ce,Le,Ue,pt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,bn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xi),K===0&&I.generateMipmaps&&N.generateMipmap(Ie),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){v=0,M=0,E=null,ye.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?dr:Yg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?Ne:Zn}}class G1 extends kd{}G1.prototype.isWebGL1Renderer=!0;class m0 extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ss extends xi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],m=[];let _=0;const y=[],g=i/2;let d=0;x(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(m,2));function x(){const M=new O,E=new O;let A=0;const R=(n-e)/i;for(let P=0;P<=s;P++){const S=[],b=P/s,$=b*(n-e)+e;for(let G=0;G<=r;G++){const U=G/r,z=U*l+a,H=Math.sin(z),Q=Math.cos(z);E.x=$*H,E.y=-b*i+g,E.z=$*Q,p.push(E.x,E.y,E.z),M.set(H,R,Q).normalize(),h.push(M.x,M.y,M.z),m.push(U,1-b),S.push(_++)}y.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const b=y[S][P],$=y[S+1][P],G=y[S+1][P+1],U=y[S][P+1];f.push(b,$,U),f.push($,G,U),A+=6}c.addGroup(d,A,0),d+=A}function v(M){const E=_,A=new We,R=new O;let P=0;const S=M===!0?e:n,b=M===!0?1:-1;for(let G=1;G<=r;G++)p.push(0,g*b,0),h.push(0,b,0),m.push(.5,.5),_++;const $=_;for(let G=0;G<=r;G++){const z=G/r*l+a,H=Math.cos(z),Q=Math.sin(z);R.x=S*Q,R.y=g*b,R.z=S*H,p.push(R.x,R.y,R.z),h.push(0,b,0),A.x=H*.5+.5,A.y=Q*.5*b+.5,m.push(A.x,A.y),_++}for(let G=0;G<r;G++){const U=E+G,z=$+G;M===!0?f.push(z,z+1,U):f.push(z+1,z,U),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends Ss{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new To(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ms extends xi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new O,h=new O,m=[],_=[],y=[],g=[];for(let d=0;d<=i;d++){const x=[],v=d/i;let M=0;d===0&&o===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let E=0;E<=n;E++){const A=E/n;p.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),p.y=e*Math.cos(o+v*a),p.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),g.push(A+M,1-v),x.push(c++)}f.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const v=f[d][x+1],M=f[d][x],E=f[d+1][x],A=f[d+1][x+1];(d!==0||o>0)&&m.push(v,M,A),(d!==i-1||l<Math.PI)&&m.push(M,E,A)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xn extends Cs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends Cs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g0 extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Nc=new yt,gp=new O,xp=new O;class H1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;gp.setFromMatrixPosition(e.matrixWorld),n.position.copy(gp),xp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xp),n.updateMatrixWorld(),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class V1 extends H1{constructor(){super(new u0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uu extends g0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new V1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x0 extends g0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);const v0=({width:t=400,height:e=400,autoRotate:n=!1,className:i="",style:r={}})=>{const s=xe.useRef(null),o=xe.useRef(null),a=xe.useRef(null),l=xe.useRef(null),c=xe.useRef(null),f=xe.useRef(null),p=xe.useRef({x:0,y:0}),[h,m]=xe.useState(!1),[_,y]=xe.useState({width:t,height:e});return xe.useEffect(()=>{const g=()=>{if(s.current){const d=s.current.getBoundingClientRect(),x=d.width||t,v=d.height||e;y({width:x,height:v})}};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[t,e]),xe.useEffect(()=>{if(!s.current)return;const g=new m0;g.background=new Ve(15792383),o.current=g;const d=new an(75,_.width/_.height,.1,1e3);d.position.set(8,6,8),l.current=d;const x=new kd({antialias:!0,alpha:!0});x.setSize(_.width,_.height),x.shadowMap.enabled=!0,x.shadowMap.type=Pd,a.current=x;const v=new x0(4210752,.4);g.add(v);const M=new Uu(16777215,.8);M.position.set(10,10,5),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,g.add(M);const E=new Ni;c.current=E;const A=new Vn({color:15127459}),R=new Vn({color:9127187}),P=new Vn({color:6636321}),S=new Vn({color:8900331}),b=new Vn({color:9109504}),$=new xt(4,3,4),G=new Re($,A);G.position.y=1.5,G.castShadow=!0,G.receiveShadow=!0,E.add(G);const U=new To(3.5,2,4),z=new Re(U,R);z.position.y=4,z.rotation.y=Math.PI/4,z.castShadow=!0,E.add(z);const H=new xt(.8,1.8,.1),Q=new Re(H,P);Q.position.set(0,.9,2.05),E.add(Q);const Z=new Ms(.05),D=new Vn({color:16766720}),B=new Re(Z,D);B.position.set(.3,.9,2.1),E.add(B);const k=new xt(.8,.8,.1),le=new Re(k,S);le.position.set(-1.2,2,2.05),E.add(le);const J=new Re(k,S);J.position.set(1.2,2,2.05),E.add(J);const j=new Re(k,S);j.position.set(2.05,2,0),E.add(j);const Y=new Re(k,S);Y.position.set(-2.05,2,0),E.add(Y);const re=new xt(.5,1.5,.5),se=new Re(re,b);se.position.set(1.5,4.5,1.5),se.castShadow=!0,E.add(se);const N=new Uo(12,12),Ae=new Vn({color:9498256}),Ee=new Re(N,Ae);Ee.rotation.x=-Math.PI/2,Ee.receiveShadow=!0,E.add(Ee);const oe=(me,be)=>{const Qe=new Ni,ct=new Ss(.1,.15,1),it=new Vn({color:9127187}),Ye=new Re(ct,it);Ye.position.y=.5,Ye.castShadow=!0,Qe.add(Ye);const je=new Ms(.8),Je=new Vn({color:2263842}),ht=new Re(je,Je);return ht.position.y=1.3,ht.castShadow=!0,Qe.add(ht),Qe.position.set(me,0,be),Qe};E.add(oe(-4,-3)),E.add(oe(4,-4)),E.add(oe(-3,4)),g.add(E);const ye=me=>{if(!s.current)return;const be=s.current.getBoundingClientRect();p.current={x:(me.clientX-be.left)/be.width*2-1,y:-((me.clientY-be.top)/be.height)*2+1}},ke=()=>{if(f.current=requestAnimationFrame(ke),c.current)if(n)c.current.rotation.y+=.005;else{const me=p.current.x*.3,be=p.current.y*.1;c.current.rotation.y+=(me-c.current.rotation.y)*.05,c.current.rotation.x+=(be-c.current.rotation.x)*.05}l.current&&l.current.lookAt(0,2,0),a.current&&o.current&&l.current&&a.current.render(o.current,l.current)};return s.current.appendChild(x.domElement),s.current.addEventListener("mousemove",ye),ke(),m(!0),()=>{f.current&&cancelAnimationFrame(f.current),s.current&&x.domElement&&(s.current.removeChild(x.domElement),s.current.removeEventListener("mousemove",ye)),x&&x.dispose()}},[_,n]),xe.useEffect(()=>{(()=>{l.current&&a.current&&(l.current.aspect=_.width/_.height,l.current.updateProjectionMatrix(),a.current.setSize(_.width,_.height))})()},[_]),u.jsxs("div",{className:`relative ${i}`,style:r,children:[u.jsx("div",{ref:s,className:"w-full h-full rounded-lg overflow-hidden",style:{minHeight:"200px"}}),!h&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"}),u.jsx("p",{className:"text-gray-600 text-sm",children:"Loading 3D Model..."})]})}),u.jsx("div",{className:"absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-80 px-2 py-1 rounded",children:n?"Auto-rotating":"Move mouse to interact"})]})};function W1({onGetStarted:t}){const[e,n]=xe.useState(!1);return xe.useEffect(()=>{n(!0)},[]),u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:[u.jsx(X1,{onGetStarted:t,isVisible:e}),u.jsx($1,{}),u.jsx(Y1,{}),u.jsx(Z1,{}),u.jsx(J1,{onGetStarted:t})]})}function X1({onGetStarted:t,isVisible:e}){return u.jsxs("section",{className:"relative overflow-hidden",children:[u.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[u.jsx("div",{className:"absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"}),u.jsx("div",{className:"absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"})]}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 py-8 sm:py-12 relative",children:u.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:[u.jsxs("div",{className:`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${e?"translate-x-0 opacity-100":"-translate-x-10 opacity-0"}`,children:[u.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium",children:[u.jsx(jg,{className:"h-3 w-3 sm:h-4 sm:w-4"}),u.jsx("span",{children:"AI-Powered Insurance Revolution"})]}),u.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight",children:["Protect Your",u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 block",children:"Dream Home"}),"with Smart Insurance"]}),u.jsx("p",{className:"text-lg sm:text-xl text-gray-600 leading-relaxed",children:"Get instant quotes, 3D property modeling, and comprehensive coverage tailored to your home. Smart insurance for the modern homeowner."})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:t,className:"group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2",children:[u.jsx("span",{children:"Get Insured Now"}),u.jsx(en,{className:"h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"})]}),u.jsx("button",{className:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105",children:"View Sample Quote"})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-gray-500",children:[u.jsx(Lc,{icon:Fg,text:"5 min application"}),u.jsx(Lc,{icon:bs,text:"Instant quotes"}),u.jsx(Lc,{icon:w_,text:"100% secure"})]})]}),u.jsx("div",{className:`relative transform transition-all duration-1000 delay-300 ${e?"translate-x-0 opacity-100":"translate-x-10 opacity-0"}`,children:u.jsxs("div",{className:"relative w-full max-w-md mx-auto lg:max-w-none",children:[u.jsx("div",{className:"w-full aspect-[4/3] lg:aspect-[5/4]",children:u.jsx(v0,{width:typeof window<"u"?Math.min(window.innerWidth-32,500):500,height:typeof window<"u"?Math.min((window.innerWidth-32)*.8,400):400,autoRotate:!1,className:"shadow-2xl rounded-3xl overflow-hidden w-full h-full",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}})}),u.jsx("div",{className:"hidden sm:block absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce animation-delay-500",children:u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),u.jsx("span",{className:"text-sm font-medium text-gray-700",children:"AI Protected"})]})}),u.jsx("div",{className:"hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce animation-delay-1000",children:u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),u.jsx("span",{className:"text-sm font-medium text-gray-700",children:"3D Modeled"})]})})]})})]})})]})}function Lc({icon:t,text:e}){return u.jsxs("div",{className:"flex items-center space-x-2 hover:text-blue-600 transition-colors",children:[u.jsx(t,{className:"h-4 w-4"}),u.jsx("span",{children:e})]})}function $1(){const t=[{icon:u.jsx(kg,{className:"h-8 w-8 text-blue-600"}),title:"3D Property Modeling",description:"Upload photos and our AI creates a detailed 3D model of your home for accurate coverage assessment.",color:"from-blue-50 to-blue-100"},{icon:u.jsx(Rd,{className:"h-8 w-8 text-green-600"}),title:"Real-Time Market Analysis",description:"AI analyzes current market trends and local data to provide the most accurate quotes.",color:"from-green-50 to-green-100"},{icon:u.jsx(jg,{className:"h-8 w-8 text-purple-600"}),title:"Instant Processing",description:"Get quotes in minutes. Our streamlined process makes insurance simple and fast.",color:"from-purple-50 to-purple-100"}];return u.jsx("section",{id:"features",className:"py-20 bg-white",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Why Choose InsureAI?"}),u.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Advanced technology meets personalized protection. Experience the future of home insurance."})]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.map((e,n)=>u.jsx(q1,{...e,index:n},n))}),u.jsxs("div",{className:"mt-16 text-center",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-8",children:"See Your Home in 3D"}),u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"w-full max-w-4xl aspect-[2/1] sm:aspect-[3/1]",children:u.jsx(v0,{width:typeof window<"u"?Math.min(window.innerWidth-32,600):600,height:typeof window<"u"?Math.min((window.innerWidth-32)/2,300):300,autoRotate:!0,className:"rounded-xl shadow-lg w-full h-full"})})})]})]})})}function q1({icon:t,title:e,description:n,color:i,index:r}){const[s,o]=xe.useState(!1);return u.jsxs("div",{className:`text-center p-8 rounded-2xl bg-gradient-to-br ${i} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{animationDelay:`${r*200}ms`},children:[u.jsx("div",{className:`flex justify-center mb-6 transform transition-transform duration-300 ${s?"scale-110 rotate-6":""}`,children:t}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:e}),u.jsx("p",{className:"text-gray-600 leading-relaxed",children:n})]})}function Y1(){const t=[{number:"50K+",label:"Homes Protected",icon:bs},{number:"$2B+",label:"Claims Paid",icon:Rd},{number:"4.9★",label:"Customer Rating",icon:Og},{number:"24/7",label:"Support Available",icon:Fg}];return u.jsx("section",{id:"stats",className:"py-20 bg-gradient-to-r from-blue-50 to-green-50",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[u.jsxs("div",{className:"text-center mb-12",children:[u.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Trusted by Thousands"}),u.jsx("p",{className:"text-xl text-gray-600",children:"Numbers that speak for themselves"})]}),u.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:t.map((e,n)=>u.jsx(K1,{...e,index:n},n))})]})})}function K1({number:t,label:e,icon:n,index:i}){return u.jsxs("div",{className:"text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",style:{animationDelay:`${i*150}ms`},children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(n,{className:"h-8 w-8 text-blue-600"})}),u.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:t}),u.jsx("div",{className:"text-gray-600 font-medium",children:e})]})}function Z1(){const t=[{name:"Sarah Johnson",role:"Homeowner",content:"InsureAI made getting home insurance incredibly easy. The 3D modeling feature gave me confidence in my coverage.",rating:5},{name:"Mike Chen",role:"Property Owner",content:"Best insurance experience I've ever had. Quick, transparent, and great customer service.",rating:5},{name:"Emily Rodriguez",role:"First-time Buyer",content:"The AI-powered quotes were spot-on and saved me hundreds compared to traditional insurers.",rating:5}];return u.jsx("section",{id:"testimonials",className:"py-20 bg-white",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"What Our Customers Say"}),u.jsx("p",{className:"text-xl text-gray-600",children:"Real stories from real homeowners"})]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.map((e,n)=>u.jsx(Q1,{...e,index:n},n))})]})})}function Q1({name:t,role:e,content:n,rating:i,index:r}){return u.jsxs("div",{className:"bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",style:{animationDelay:`${r*200}ms`},children:[u.jsx("div",{className:"flex mb-4",children:[...Array(i)].map((s,o)=>u.jsx(Og,{className:"h-5 w-5 text-yellow-400 fill-current"},o))}),u.jsxs("p",{className:"text-gray-600 mb-6 leading-relaxed",children:['"',n,'"']}),u.jsxs("div",{children:[u.jsx("p",{className:"font-semibold text-gray-900",children:t}),u.jsx("p",{className:"text-gray-500 text-sm",children:e})]})]})}function J1({onGetStarted:t}){return u.jsxs("section",{className:"py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-black opacity-10"}),u.jsxs("div",{className:"max-w-4xl mx-auto px-4 text-center relative",children:[u.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Ready to Protect Your Home?"}),u.jsx("p",{className:"text-xl text-blue-100 mb-8 max-w-2xl mx-auto",children:"Join thousands of homeowners who trust InsureAI with their most valuable asset. Get started in minutes with our AI-powered platform."}),u.jsxs("button",{onClick:t,className:"group bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto",children:[u.jsx("span",{children:"Get Your Quote Now"}),u.jsx(en,{className:"h-5 w-5 group-hover:translate-x-1 transition-transform"})]})]})]})}function eT({data:t,onSubmit:e,onBack:n}){const[i,r]=xe.useState({firstName:"",lastName:"",email:"",phone:"",ssn:"",dateOfBirth:"",...t}),[s,o]=xe.useState({}),a=(f,p)=>{r(h=>({...h,[f]:p})),s[f]&&o(h=>({...h,[f]:""}))},l=()=>{const f={};return i.firstName.trim()||(f.firstName="First name is required"),i.lastName.trim()||(f.lastName="Last name is required"),i.email.trim()||(f.email="Email is required"),i.phone.trim()||(f.phone="Phone number is required"),i.ssn.trim()||(f.ssn="SSN is required"),i.dateOfBirth||(f.dateOfBirth="Date of birth is required"),o(f),Object.keys(f).length===0},c=f=>{f.preventDefault(),l()&&e(i)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 flex justify-center items-center",children:u.jsx("div",{className:"w-full max-w-5xl mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(Bg,{className:"h-12 w-12 text-blue-600"})}),u.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Personal Information"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Let's start with your basic information"})]}),u.jsxs("form",{onSubmit:c,className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"First Name *"}),u.jsx("input",{type:"text",value:i.firstName,onChange:f=>a("firstName",f.target.value),className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.firstName?"border-red-500":"border-gray-300"}`,placeholder:"John"}),s.firstName&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.firstName})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Last Name *"}),u.jsx("input",{type:"text",value:i.lastName,onChange:f=>a("lastName",f.target.value),className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.lastName?"border-red-500":"border-gray-300"}`,placeholder:"Doe"}),s.lastName&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.lastName})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),u.jsx("input",{type:"email",value:i.email,onChange:f=>a("email",f.target.value),className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.email?"border-red-500":"border-gray-300"}`,placeholder:"john.doe@example.com"}),s.email&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.email})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),u.jsx("input",{type:"tel",value:i.phone,onChange:f=>a("phone",f.target.value),className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.phone?"border-red-500":"border-gray-300"}`,placeholder:"(555) 123-4567"}),s.phone&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.phone})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Date of Birth *"}),u.jsx("input",{type:"date",value:i.dateOfBirth,onChange:f=>a("dateOfBirth",f.target.value),className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.dateOfBirth?"border-red-500":"border-gray-300"}`}),s.dateOfBirth&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.dateOfBirth})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Social Security Number *"}),u.jsx("input",{type:"password",value:i.ssn,onChange:f=>a("ssn",f.target.value),className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${s.ssn?"border-red-500":"border-gray-300"}`,placeholder:"XXX-XX-XXXX"}),s.ssn&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:s.ssn}),u.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Required for identity verification and credit check"})]}),u.jsxs("div",{className:"col-span-1 md:col-span-2 flex justify-between pt-6",children:[u.jsxs("button",{type:"button",onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{type:"submit",className:"flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})]})})})}function tT({data:t,onSubmit:e,onBack:n}){const[i,r]=xe.useState({address:"",city:"",state:"",zipCode:"",coordinates:null,...t}),[s,o]=xe.useState(!1),[a,l]=xe.useState(""),c=(h,m)=>{r(_=>({..._,[h]:m}))},f=async()=>{o(!0),l("Requesting location permission...");try{const h=await new Promise((y,g)=>{navigator.geolocation.getCurrentPosition(y,g,{enableHighAccuracy:!0,timeout:1e4})}),{latitude:m,longitude:_}=h.coords;l("Location found! Fetching address..."),setTimeout(()=>{r(y=>({...y,coordinates:{latitude:m,longitude:_},address:"123 Main Street",city:"Anytown",state:"CA",zipCode:"12345"})),l("Address found successfully!"),o(!1)},2e3)}catch{l("Unable to get location. Please enter manually."),o(!1)}},p=h=>{h.preventDefault(),e(i)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8 flex justify-center items-center",children:u.jsx("div",{className:"w-full max-w-5xl mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(b_,{className:"h-12 w-12 text-green-600"})}),u.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Property Location"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Where is your property located?"})]}),u.jsxs("div",{className:"mb-8",children:[u.jsx("button",{onClick:f,disabled:s,className:"w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2",children:s?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"}),u.jsx("span",{children:"Getting Location..."})]}):u.jsxs(u.Fragment,{children:[u.jsx(D_,{className:"h-5 w-5"}),u.jsx("span",{children:"Use Current Location"})]})}),a&&u.jsx("p",{className:`text-center mt-2 text-sm ${a.includes("Unable")?"text-red-600":"text-green-600"}`,children:a})]}),u.jsx("div",{className:"text-center text-gray-500 mb-8",children:u.jsx("span",{children:"Or enter manually"})}),u.jsxs("form",{onSubmit:p,className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Street Address *"}),u.jsx("input",{type:"text",value:i.address,onChange:h=>c("address",h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"123 Main Street",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"City *"}),u.jsx("input",{type:"text",value:i.city,onChange:h=>c("city",h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Anytown",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"State *"}),u.jsxs("select",{value:i.state,onChange:h=>c("state",h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",required:!0,children:[u.jsx("option",{value:"",children:"Select State"}),u.jsx("option",{value:"CA",children:"California"}),u.jsx("option",{value:"NY",children:"New York"}),u.jsx("option",{value:"TX",children:"Texas"}),u.jsx("option",{value:"FL",children:"Florida"}),u.jsx("option",{value:"IL",children:"Illinois"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"ZIP Code *"}),u.jsx("input",{type:"text",value:i.zipCode,onChange:h=>c("zipCode",h.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"12345",required:!0})]}),u.jsxs("div",{className:"col-span-1 md:col-span-2 flex justify-between pt-6",children:[u.jsxs("button",{type:"button",onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{type:"submit",className:"flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})]})})})}function nT({data:t,onSubmit:e,onBack:n}){const[i,r]=xe.useState({propertyType:"",yearBuilt:"",squareFootage:"",bedrooms:"",bathrooms:"",roofType:"",heatingType:"",foundationType:"",...t}),s=(a,l)=>{r(c=>({...c,[a]:l}))},o=a=>{a.preventDefault(),e(i)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-8 flex justify-center items-center",children:u.jsx("div",{className:"w-full max-w-6xl mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(o_,{className:"h-12 w-12 text-purple-600"})}),u.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Property Details"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Tell us about your property"})]}),u.jsxs("form",{onSubmit:o,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Property Type *"}),u.jsxs("select",{value:i.propertyType,onChange:a=>s("propertyType",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Property Type"}),u.jsx("option",{value:"single-family",children:"Single Family Home"}),u.jsx("option",{value:"condo",children:"Condominium"}),u.jsx("option",{value:"townhouse",children:"Townhouse"}),u.jsx("option",{value:"duplex",children:"Duplex"}),u.jsx("option",{value:"manufactured",children:"Manufactured Home"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Year Built *"}),u.jsx("input",{type:"number",value:i.yearBuilt,onChange:a=>s("yearBuilt",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"2010",min:"1800",max:"2024",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Square Footage *"}),u.jsx("input",{type:"number",value:i.squareFootage,onChange:a=>s("squareFootage",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"2500",min:"100",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Bedrooms *"}),u.jsxs("select",{value:i.bedrooms,onChange:a=>s("bedrooms",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0,children:[u.jsx("option",{value:"",children:"Select"}),u.jsx("option",{value:"1",children:"1 Bedroom"}),u.jsx("option",{value:"2",children:"2 Bedrooms"}),u.jsx("option",{value:"3",children:"3 Bedrooms"}),u.jsx("option",{value:"4",children:"4 Bedrooms"}),u.jsx("option",{value:"5+",children:"5+ Bedrooms"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Bathrooms *"}),u.jsxs("select",{value:i.bathrooms,onChange:a=>s("bathrooms",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0,children:[u.jsx("option",{value:"",children:"Select"}),u.jsx("option",{value:"1",children:"1 Bathroom"}),u.jsx("option",{value:"1.5",children:"1.5 Bathrooms"}),u.jsx("option",{value:"2",children:"2 Bathrooms"}),u.jsx("option",{value:"2.5",children:"2.5 Bathrooms"}),u.jsx("option",{value:"3",children:"3 Bathrooms"}),u.jsx("option",{value:"3.5",children:"3.5 Bathrooms"}),u.jsx("option",{value:"4+",children:"4+ Bathrooms"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Roof Type *"}),u.jsxs("select",{value:i.roofType,onChange:a=>s("roofType",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Roof Type"}),u.jsx("option",{value:"asphalt",children:"Asphalt Shingles"}),u.jsx("option",{value:"tile",children:"Tile"}),u.jsx("option",{value:"metal",children:"Metal"}),u.jsx("option",{value:"slate",children:"Slate"}),u.jsx("option",{value:"wood",children:"Wood"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Heating Type *"}),u.jsxs("select",{value:i.heatingType,onChange:a=>s("heatingType",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Heating Type"}),u.jsx("option",{value:"central",children:"Central Gas"}),u.jsx("option",{value:"electric",children:"Electric"}),u.jsx("option",{value:"oil",children:"Oil"}),u.jsx("option",{value:"heat-pump",children:"Heat Pump"}),u.jsx("option",{value:"radiant",children:"Radiant"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Foundation Type *"}),u.jsxs("select",{value:i.foundationType,onChange:a=>s("foundationType",a.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Foundation Type"}),u.jsx("option",{value:"slab",children:"Slab"}),u.jsx("option",{value:"crawl",children:"Crawl Space"}),u.jsx("option",{value:"basement",children:"Basement"}),u.jsx("option",{value:"pier",children:"Pier & Beam"})]})]}),u.jsxs("div",{className:"col-span-1 lg:col-span-3 flex justify-between pt-6",children:[u.jsxs("button",{type:"button",onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{type:"submit",className:"flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})]})})})}function iT({data:t,onSubmit:e,onBack:n}){const[i,r]=xe.useState(t||[]),[s,o]=xe.useState(!1),[a,l]=xe.useState(!1),c=g=>{o(!0);const d=Array.from(g).map((x,v)=>({id:`img_${Date.now()}_${v}`,file:x,url:URL.createObjectURL(x),name:x.name,size:x.size,type:x.type,category:"exterior"}));setTimeout(()=>{r(x=>[...x,...d]),o(!1)},1500)},f=g=>{g.preventDefault(),l(!1);const d=g.dataTransfer.files;c(d)},p=g=>{g.preventDefault(),l(!0)},h=g=>{g.preventDefault(),l(!1)},m=g=>{r(d=>d.filter(x=>x.id!==g))},_=(g,d)=>{r(x=>x.map(v=>v.id===g?{...v,category:d}:v))},y=()=>{e(i)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 flex justify-center items-center",children:u.jsx("div",{className:"w-full max-w-5xl mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(l_,{className:"h-12 w-12 text-indigo-600"})}),u.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Property Photos"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Upload photos of your property for accurate assessment"})]}),u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${a?"border-indigo-500 bg-indigo-50":"border-gray-300"}`,onDrop:f,onDragOver:p,onDragLeave:h,children:[u.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:g=>c(g.target.files),className:"hidden",id:"file-upload"}),u.jsx("label",{htmlFor:"file-upload",className:"cursor-pointer",children:u.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx(zg,{className:"h-12 w-12 text-indigo-600"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xl font-semibold text-gray-900",children:"Upload Property Photos"}),u.jsx("p",{className:"text-gray-600",children:"Drag and drop files here or click to browse"})]}),u.jsxs("div",{className:"flex space-x-4 text-sm text-gray-500",children:[u.jsx("span",{children:"Exterior photos"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Interior photos"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Room photos"})]})]})})]})}),s&&u.jsx("div",{className:"mb-8",children:u.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"animate-spin h-5 w-5 border-2 border-indigo-600 border-t-transparent rounded-full"}),u.jsx("span",{className:"text-indigo-700",children:"Uploading photos..."})]})})}),i.length>0&&u.jsxs("div",{className:"mb-8",children:[u.jsxs("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:["Uploaded Photos (",i.length,")"]}),u.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:i.map(g=>u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"aspect-square bg-gray-100 rounded-lg overflow-hidden",children:u.jsx("img",{src:g.url,alt:g.name,className:"w-full h-full object-cover"})}),u.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg flex items-center justify-center",children:u.jsx("button",{onClick:()=>m(g.id),className:"opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all",children:u.jsx(Nd,{className:"h-4 w-4"})})}),u.jsx("div",{className:"mt-2",children:u.jsxs("select",{value:g.category,onChange:d=>_(g.id,d.target.value),className:"w-full text-xs px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500",children:[u.jsx("option",{value:"exterior",children:"Exterior"}),u.jsx("option",{value:"interior",children:"Interior"}),u.jsx("option",{value:"kitchen",children:"Kitchen"}),u.jsx("option",{value:"bathroom",children:"Bathroom"}),u.jsx("option",{value:"bedroom",children:"Bedroom"}),u.jsx("option",{value:"living",children:"Living Room"}),u.jsx("option",{value:"garage",children:"Garage"}),u.jsx("option",{value:"other",children:"Other"})]})})]},g.id))})]}),u.jsxs("div",{className:"col-span-1 md:col-span-2 flex justify-between pt-6",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:y,disabled:i.length===0,className:"flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}function rT({containerRef:t}){const e=xe.useRef(null),n=xe.useRef(null),i=xe.useRef(null),r=xe.useRef(null);return xe.useEffect(()=>{if(!e.current)return;const s=new m0;s.background=new Ve(8900331),n.current=s;const o=new an(75,e.current.clientWidth/e.current.clientHeight,.1,1e3);o.position.set(15,8,15),o.lookAt(0,0,0);const a=new kd({antialias:!0,alpha:!0});a.setSize(e.current.clientWidth,e.current.clientHeight),a.shadowMap.enabled=!0,a.shadowMap.type=Pd,a.outputColorSpace=Ne,a.toneMapping=Xg,a.toneMappingExposure=1.2,i.current=a,e.current.appendChild(a.domElement);const l=new x0(4210752,.6);s.add(l);const c=new Uu(16777215,1.2);c.position.set(20,20,10),c.castShadow=!0,c.shadow.mapSize.width=2048,c.shadow.mapSize.height=2048,c.shadow.camera.near=.5,c.shadow.camera.far=50,c.shadow.camera.left=-20,c.shadow.camera.right=20,c.shadow.camera.top=20,c.shadow.camera.bottom=-20,s.add(c);const f=new Uu(16753920,.5);f.position.set(-10,15,5),s.add(f);const p=new Uo(50,50),h=new Vn({color:4873507,transparent:!0,opacity:.8}),m=new Re(p,h);m.rotation.x=-Math.PI/2,m.receiveShadow=!0,s.add(m);const _=new Ni,y=new xn({color:16119260,shininess:30,specular:1118481}),g=new xn({color:9127187,shininess:50,specular:2236962}),d=new xn({color:8900331,transparent:!0,opacity:.8,shininess:100,specular:16777215}),x=new xn({color:6636321,shininess:60,specular:3355443}),v=new xn({color:16777215,shininess:40}),M=new xt(12,4,10),E=new Re(M,y);E.position.y=2,E.castShadow=!0,E.receiveShadow=!0,_.add(E);const A=new xt(10,3.5,8),R=new Re(A,y);R.position.y=5.75,R.castShadow=!0,R.receiveShadow=!0,_.add(R);const P=new To(8,3,4),S=new Re(P,g);S.position.y=8.5,S.rotation.y=Math.PI/4,S.castShadow=!0,_.add(S);const b=new To(6,2,4),$=new Re(b,g);$.position.set(0,6,0),$.rotation.y=Math.PI/4,$.castShadow=!0,_.add($);const G=new xt(1,2,1),U=new xn({color:9127187}),z=new Re(G,U);z.position.set(3,9,2),z.castShadow=!0,_.add(z);const H=new xt(.1,3,1.8),Q=new Re(H,x);Q.position.set(6.05,1.5,0),_.add(Q);const Z=new Ms(.08),D=new xn({color:16766720,shininess:100}),B=new Re(Z,D);B.position.set(6.1,1.5,.5),_.add(B);const k=new xt(.1,1.5,2),le=new Re(k,d);le.position.set(6.05,2.5,3),_.add(le);const J=new Re(k,d);J.position.set(6.05,2.5,-3),_.add(J);const j=new xt(2,1.5,.1),Y=new Re(j,d);Y.position.set(3,2.5,5.05),_.add(Y);const re=new Re(j,d);re.position.set(-3,2.5,5.05),_.add(re);const se=new Re(k,d);se.position.set(5.05,6,2),_.add(se);const N=new Re(k,d);N.position.set(5.05,6,-2),_.add(N);const Ae=new xt(.15,1.8,2.3),Ee=new xn({color:6636321});[{pos:[6.02,2.5,3]},{pos:[6.02,2.5,-3]},{pos:[5.02,6,2]},{pos:[5.02,6,-2]}].forEach(ae=>{const fe=new Re(Ae,Ee);fe.position.set(...ae.pos),_.add(fe)});const ye=new xt(4,.2,2),ke=new Re(ye,v);ke.position.set(6.5,5,0),ke.castShadow=!0,_.add(ke);const me=new xt(4,1,.1),be=new Re(me,v);be.position.set(6.5,5.5,1),_.add(be);const Qe=new Ss(.3,.3,4),ct=new xn({color:16777215,shininess:50}),it=new Re(Qe,ct);it.position.set(4,2,5.5),it.castShadow=!0,_.add(it);const Ye=new Re(Qe,ct);Ye.position.set(-4,2,5.5),Ye.castShadow=!0,_.add(Ye);const je=new Ss(.5,.5,4),Je=new xn({color:9127187}),ht=new Ms(2),C=new xn({color:2263842});for(let ae=0;ae<3;ae++){const fe=new Ni,De=new Re(je,Je);De.position.y=2,De.castShadow=!0,fe.add(De);const He=new Re(ht,C);He.position.y=5,He.castShadow=!0,fe.add(He);const st=[[15,0,10],[-15,0,15],[20,0,-10]];fe.position.set(...st[ae]),s.add(fe)}const w=new xt(3,.1,20),V=new xn({color:7372944}),ee=new Re(w,V);ee.position.set(8,.05,0),ee.receiveShadow=!0,s.add(ee),s.add(_);let ie=0,ue=0,we=0,pe=0;const q=ae=>{ae.buttons===1&&(ie=ae.clientX/window.innerWidth*2-1,ue=-(ae.clientY/window.innerHeight)*2+1,pe=ie*Math.PI,we=ue*Math.PI*.5)},ge=ae=>{o.position.multiplyScalar(1+ae.deltaY*.001),o.position.clampLength(5,50)};a.domElement.addEventListener("mousemove",q),a.domElement.addEventListener("wheel",ge);const _e=()=>{r.current=requestAnimationFrame(_e),_.rotation.y+=(pe-_.rotation.y)*.02,_.rotation.x+=(we-_.rotation.x)*.02,!ie&&!ue&&(_.rotation.y+=.002),a.render(s,o)};_e();const Se=()=>{if(e.current&&a&&o){const ae=e.current.clientWidth,fe=e.current.clientHeight;o.aspect=ae/fe,o.updateProjectionMatrix(),a.setSize(ae,fe)}};return window.addEventListener("resize",Se),()=>{r.current&&cancelAnimationFrame(r.current),e.current&&a&&e.current.removeChild(a.domElement),a&&a.dispose(),window.removeEventListener("resize",Se),a.domElement.removeEventListener("mousemove",q),a.domElement.removeEventListener("wheel",ge)}},[]),u.jsx("div",{ref:e,style:{width:"100%",height:"100%"}})}function sT({images:t,onComplete:e,onBack:n}){var _;const[i,r]=xe.useState(0),[s,o]=xe.useState("analyzing"),[a,l]=xe.useState(!1),[c,f]=xe.useState(!1),p=xe.useRef(null),h=[{key:"analyzing",label:"Analyzing uploaded photos",duration:1300},{key:"processing",label:"Processing architectural structure",duration:1100},{key:"generating",label:"Generating detailed 3D model",duration:1200},{key:"rendering",label:"Applying realistic textures",duration:900},{key:"complete",label:"Beautiful model ready!",duration:500}];xe.useEffect(()=>{let y=0,g;function d(){const x=h[y];o(x.key);let v=0;g=setInterval(()=>{v+=2;const M=y/h.length*100,E=v/100*(100/h.length);r(Math.min(M+E,100)),v>=100&&(clearInterval(g),y++,y<h.length?setTimeout(d,300):l(!0))},x.duration/50)}return d(),()=>clearInterval(g)},[]);const m=()=>{f(!c)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8",children:u.jsx("div",{className:"w-full max-w-7xl mx-auto px-4",children:u.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("div",{className:"flex justify-center mb-6",children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"h-20 w-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg",children:u.jsx(M_,{className:"h-10 w-10 text-white"})}),u.jsx("div",{className:"absolute -top-3 -right-3 h-8 w-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg",children:u.jsx(kg,{className:"h-4 w-4 text-white"})})]})}),u.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent",children:"3D Model Generator"}),u.jsx("p",{className:"text-gray-600 mt-3 text-lg",children:"Creating a beautiful, detailed model of your property"})]}),u.jsxs("div",{className:"space-y-8",children:[u.jsx("div",{className:`relative ${c?"fixed inset-0 z-50 bg-black":""}`,children:u.jsxs("div",{className:`${c?"w-full h-full":"w-full h-[500px]"} bg-gradient-to-br from-sky-100 to-blue-200 rounded-xl overflow-hidden shadow-inner border-2 border-white/50`,children:[u.jsx(rT,{containerRef:p}),u.jsx("button",{onClick:m,className:"absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105",children:u.jsx(C_,{className:"h-5 w-5"})}),u.jsx("div",{className:"absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm",children:"🖱️ Click & drag to rotate • 🔄 Scroll to zoom"})]})}),u.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 rounded-xl p-6 shadow-inner",children:[u.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:`h-4 w-4 rounded-full transition-all duration-300 ${a?"bg-emerald-500":"bg-blue-500 animate-pulse"}`}),!a&&u.jsx("div",{className:"absolute inset-0 h-4 w-4 bg-blue-500 rounded-full animate-ping opacity-20"})]}),u.jsx("span",{className:"text-blue-800 font-semibold text-lg",children:((_=h.find(y=>y.key===s))==null?void 0:_.label)||"Processing..."})]}),u.jsx("div",{className:"w-full bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full h-3 mb-4 shadow-inner",children:u.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-500 shadow-sm relative overflow-hidden",style:{width:`${i}%`},children:u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"})})}),u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsxs("div",{className:"text-sm text-blue-700 font-medium",children:[Math.round(i),"% Complete"]}),u.jsxs("div",{className:"text-xs text-blue-600",children:[(t==null?void 0:t.length)||0," photos processed"]})]})]}),a&&u.jsxs("div",{className:"bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200/50 rounded-xl p-6 text-center shadow-inner",children:[u.jsxs("div",{className:"flex items-center justify-center space-x-3 mb-4",children:[u.jsx(Mo,{className:"h-8 w-8 text-emerald-600"}),u.jsx("span",{className:"text-emerald-800 font-bold text-xl",children:"Stunning 3D Model Generated!"})]}),u.jsx("p",{className:"text-emerald-700 mb-4",children:"Your property has been transformed into a beautiful, interactive 3D model with realistic textures and lighting."}),u.jsxs("div",{className:"flex justify-center space-x-4 text-sm text-emerald-600",children:[u.jsx("span",{children:"✨ Realistic materials"}),u.jsx("span",{children:"🏠 Detailed architecture"}),u.jsx("span",{children:"🌳 Environmental elements"})]})]})]}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-8 py-4 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl",children:[u.jsx(Tn,{className:"h-5 w-5"}),u.jsx("span",{className:"font-medium",children:"Back to Photos"})]}),u.jsxs("button",{onClick:e,disabled:!a,className:"flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 font-medium",children:[u.jsx("span",{children:"Continue to Documents"}),u.jsx(en,{className:"h-5 w-5"})]})]})]})})})}function oT({data:t,onSubmit:e,onBack:n}){const[i,r]=xe.useState(t||[]),[s,o]=xe.useState(!1),a=[{type:"deed",label:"Property Deed",required:!0},{type:"purchase",label:"Purchase Agreement",required:!0},{type:"previous_insurance",label:"Previous Insurance",required:!1},{type:"renovation",label:"Renovation Records",required:!1},{type:"inspection",label:"Inspection Reports",required:!1},{type:"permits",label:"Building Permits",required:!1}],l=(p,h)=>{o(!0);const m=Array.from(p).map((_,y)=>({id:`doc_${Date.now()}_${y}`,file:_,name:_.name,size:_.size,type:h,uploadDate:new Date().toISOString()}));setTimeout(()=>{r(_=>[..._,...m]),o(!1)},1e3)},c=p=>{r(h=>h.filter(m=>m.id!==p))},f=()=>{e(i)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-8 flex justify-center items-center",children:u.jsx("div",{className:"w-full max-w-5xl mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(Tu,{className:"h-12 w-12 text-green-600"})}),u.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Document Upload"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Upload required documents for your property"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[a.map(p=>u.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 mb-2",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{children:[u.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center space-x-2",children:[u.jsx("span",{children:p.label}),p.required&&u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsx("p",{className:"text-sm text-gray-600",children:p.required?"Required document":"Optional document"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.jpg,.jpeg,.png",onChange:h=>l(h.target.files,p.type),className:"hidden",id:`upload-${p.type}`}),u.jsxs("label",{htmlFor:`upload-${p.type}`,className:"bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer flex items-center space-x-2",children:[u.jsx(zg,{className:"h-4 w-4"}),u.jsx("span",{children:"Upload"})]})]})]}),u.jsx("div",{className:"space-y-2",children:i.filter(h=>h.type===p.type).map(h=>u.jsxs("div",{className:"flex items-center justify-between bg-gray-50 p-3 rounded-lg",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(Tu,{className:"h-5 w-5 text-gray-500"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-gray-900",children:h.name}),u.jsxs("p",{className:"text-xs text-gray-500",children:[(h.size/1024/1024).toFixed(2)," MB"]})]})]}),u.jsx("button",{onClick:()=>c(h.id),className:"text-red-500 hover:text-red-700",children:u.jsx(Nd,{className:"h-4 w-4"})})]},h.id))})]},p.type)),s&&u.jsxs("div",{className:"col-span-1 md:col-span-2 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3 mt-4",children:[u.jsx("div",{className:"animate-spin h-5 w-5 border-2 border-green-600 border-t-transparent rounded-full"}),u.jsx("span",{className:"text-green-700",children:"Uploading document..."})]})]}),u.jsxs("div",{className:"col-span-1 md:col-span-2 flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:f,disabled:a.some(p=>p.required&&!i.find(h=>h.type===p.type)),className:"flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}function aT({applicationData:t,onComplete:e,onBack:n}){const[i,r]=xe.useState(null),[s,o]=xe.useState(!1);return Pp.useEffect(()=>{o(!0),setTimeout(()=>{r({risk:"Low",notes:["Property is in a low-risk flood zone.","Roof recently replaced (less than 5 years old).","Proximity to fire station: Good."],flags:["No recent insurance claims found.","No major renovations flagged."]}),o(!1)},2e3)},[]),u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 flex flex-col items-center",children:u.jsx("div",{className:"max-w-4xl w-full mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(u_,{className:"h-10 w-10 text-blue-600 mr-3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"AI Risk Analysis"})]}),u.jsx("p",{className:"text-gray-600 mb-6",children:"Our AI analyzes your property and neighborhood to determine risk and highlight important notes."}),s&&u.jsxs("div",{className:"py-10 flex flex-col items-center",children:[u.jsx("div",{className:"animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mb-4"}),u.jsx("div",{className:"text-blue-700",children:"Analyzing data, please wait..."})]}),!s&&i&&u.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[u.jsxs("div",{className:"flex-1 bg-blue-50 rounded-lg p-4 mb-4 md:mb-0",children:[u.jsxs("div",{className:"flex items-center mb-2",children:[u.jsx(Mo,{className:"h-6 w-6 text-green-600 mr-2"}),u.jsxs("span",{className:"text-lg font-semibold text-blue-800",children:["Risk Level: ",u.jsx("span",{className:"font-bold",children:i.risk})]})]}),u.jsx("ul",{className:"list-disc pl-6 text-blue-900 mt-4",children:i.notes.map((a,l)=>u.jsx("li",{className:"mb-1",children:a},l))})]}),u.jsxs("div",{className:"flex-1 bg-yellow-50 rounded-lg p-4",children:[u.jsxs("div",{className:"flex items-center mb-2",children:[u.jsx(p_,{className:"h-6 w-6 text-yellow-600 mr-2"}),u.jsx("span",{className:"text-lg font-semibold text-yellow-800",children:"AI Flags"})]}),u.jsx("ul",{className:"list-disc pl-6 text-yellow-900 mt-4",children:i.flags.map((a,l)=>u.jsx("li",{className:"mb-1",children:a},l))})]})]}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:e,disabled:s,className:"flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}function lT({data:t,onSubmit:e,onBack:n}){const[i,r]=xe.useState({dwelling:3e5,personalProperty:75e3,liability:3e5,deductible:1e3,flood:!1,earthquake:!1,...t}),s=(c,f)=>{r(p=>({...p,[c]:f}))},o=(c,f=5e3)=>s(c,i[c]+f),a=(c,f=5e3)=>s(c,Math.max(f,i[c]-f)),l=c=>{c.preventDefault(),e(i)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 flex flex-col items-center",children:u.jsx("div",{className:"max-w-4xl w-full mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(bs,{className:"h-10 w-10 text-blue-600 mr-3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Coverage Preferences"})]}),u.jsx("p",{className:"text-gray-600 mb-6",children:"Choose the coverage limits and options that fit your needs."}),u.jsxs("form",{onSubmit:l,children:[u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-medium mb-2",children:"Dwelling Coverage"}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("button",{type:"button",onClick:()=>a("dwelling"),className:"bg-blue-50 p-2 rounded hover:bg-blue-100",children:u.jsx(Qf,{className:"h-4 w-4"})}),u.jsx("input",{type:"number",min:5e4,max:2e6,step:5e3,value:i.dwelling,onChange:c=>s("dwelling",Number(c.target.value)),className:"w-full mx-2 px-3 py-2 border rounded text-right"}),u.jsx("button",{type:"button",onClick:()=>o("dwelling"),className:"bg-blue-50 p-2 rounded hover:bg-blue-100",children:u.jsx(Jf,{className:"h-4 w-4"})})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-medium mb-2",children:"Personal Property"}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("button",{type:"button",onClick:()=>a("personalProperty",2500),className:"bg-blue-50 p-2 rounded hover:bg-blue-100",children:u.jsx(Qf,{className:"h-4 w-4"})}),u.jsx("input",{type:"number",min:1e4,max:5e5,step:2500,value:i.personalProperty,onChange:c=>s("personalProperty",Number(c.target.value)),className:"w-full mx-2 px-3 py-2 border rounded text-right"}),u.jsx("button",{type:"button",onClick:()=>o("personalProperty",2500),className:"bg-blue-50 p-2 rounded hover:bg-blue-100",children:u.jsx(Jf,{className:"h-4 w-4"})})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-medium mb-2",children:"Liability"}),u.jsx("input",{type:"number",min:1e5,max:1e6,step:5e4,value:i.liability,onChange:c=>s("liability",Number(c.target.value)),className:"w-full px-3 py-2 border rounded text-right"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-medium mb-2",children:"Deductible"}),u.jsx("input",{type:"number",min:500,max:1e4,step:500,value:i.deductible,onChange:c=>s("deductible",Number(c.target.value)),className:"w-full px-3 py-2 border rounded text-right"})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{type:"checkbox",checked:i.flood,onChange:c=>s("flood",c.target.checked),id:"flood",className:"mr-2"}),u.jsx("label",{htmlFor:"flood",className:"font-medium",children:"Add Flood Coverage"})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{type:"checkbox",checked:i.earthquake,onChange:c=>s("earthquake",c.target.checked),id:"earthquake",className:"mr-2"}),u.jsx("label",{htmlFor:"earthquake",className:"font-medium",children:"Add Earthquake Coverage"})]})]}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{type:"button",onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{type:"submit",className:"flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})]})})})}const vp=[{id:1,company:"SafeHome Insurance",price:1050,coverage:"Standard",highlights:["Low Deductible","Fast Claims","Flood Coverage Included"],best:!1},{id:2,company:"AI Protect",price:890,coverage:"AI Enhanced",highlights:["Smart Discounts","Earthquake Protection","24/7 Support"],best:!0},{id:3,company:"ValueGuard",price:970,coverage:"Value Plus",highlights:["Affordable","Flexible Payments","Loyalty Rewards"],best:!1}];function cT({applicationData:t,onComplete:e,onBack:n}){const[i,r]=xe.useState(null),s=a=>r(a),o=()=>{i&&e(vp.find(a=>a.id===i))};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 flex flex-col items-center",children:u.jsx("div",{className:"max-w-4xl w-full mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(v_,{className:"h-10 w-10 text-green-600 mr-3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Generated Quotes"})]}),u.jsx("p",{className:"text-gray-600 mb-6",children:"Select the quote that fits your needs and budget."}),u.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:vp.map(a=>u.jsxs("div",{className:`rounded-lg p-5 border-2 cursor-pointer relative transition-all ${i===a.id?"border-blue-600 bg-blue-50 shadow-xl":a.best?"border-green-400 bg-green-50":"border-gray-200 bg-white"}`,onClick:()=>s(a.id),children:[a.best&&u.jsxs("div",{className:"absolute top-2 right-2 flex items-center text-green-700 font-bold text-xs",children:[u.jsx(r_,{className:"h-4 w-4 mr-1"})," Best Value"]}),u.jsx("h3",{className:"text-lg font-bold mb-1",children:a.company}),u.jsxs("div",{className:"font-bold text-2xl mb-2",children:["$",a.price,"/yr"]}),u.jsx("div",{className:"mb-2 text-blue-700",children:a.coverage}),u.jsx("ul",{className:"list-disc list-inside text-gray-700 text-sm mb-2",children:a.highlights.map((l,c)=>u.jsx("li",{children:l},c))}),u.jsx("div",{className:"flex items-center",children:i===a.id&&u.jsx("span",{className:"inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold mt-2",children:"Selected"})})]},a.id))}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:o,disabled:!i,className:"flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}const _p=[{id:1,company:"SafeHome Insurance",price:1050,dwelling:3e5,deductible:1e3,personalProperty:75e3,flood:!0},{id:2,company:"AI Protect",price:890,dwelling:31e4,deductible:1250,personalProperty:7e4,flood:!1},{id:3,company:"ValueGuard",price:970,dwelling:295e3,deductible:1e3,personalProperty:8e4,flood:!1}];function uT({applicationData:t,onSelectQuote:e,onBack:n}){const[i,r]=xe.useState(null);return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 flex flex-col items-center",children:u.jsx("div",{className:"max-w-5xl w-full mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(Rd,{className:"h-10 w-10 text-indigo-600 mr-3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Compare Policies"})]}),u.jsx("p",{className:"text-gray-600 mb-6",children:"Compare coverage and choose the best policy for your needs."}),u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"min-w-full border rounded-lg bg-white shadow",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-4 py-2",children:"Company"}),u.jsx("th",{className:"px-4 py-2 text-right",children:"Annual Price"}),u.jsx("th",{className:"px-4 py-2 text-right",children:"Dwelling"}),u.jsx("th",{className:"px-4 py-2 text-right",children:"Deductible"}),u.jsx("th",{className:"px-4 py-2 text-right",children:"Personal Property"}),u.jsx("th",{className:"px-4 py-2 text-center",children:"Flood"}),u.jsx("th",{className:"px-4 py-2 text-center",children:"Select"})]})}),u.jsx("tbody",{children:_p.map(s=>u.jsxs("tr",{className:i===s.id?"bg-blue-50":"",children:[u.jsx("td",{className:"px-4 py-2 font-bold",children:s.company}),u.jsxs("td",{className:"px-4 py-2 text-right",children:["$",s.price]}),u.jsxs("td",{className:"px-4 py-2 text-right",children:["$",s.dwelling]}),u.jsxs("td",{className:"px-4 py-2 text-right",children:["$",s.deductible]}),u.jsxs("td",{className:"px-4 py-2 text-right",children:["$",s.personalProperty]}),u.jsx("td",{className:"px-4 py-2 text-center",children:s.flood?u.jsx(f_,{className:"inline h-5 w-5 text-green-600"}):u.jsx("span",{className:"inline-block w-5"})}),u.jsx("td",{className:"px-4 py-2 text-center",children:u.jsx("button",{className:`px-4 py-2 rounded ${i===s.id?"bg-blue-600 text-white":"bg-gray-100 hover:bg-blue-100"}`,onClick:()=>r(s.id),children:i===s.id?"Selected":"Select"})})]},s.id))})]})}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:()=>e(_p.find(s=>s.id===i)),disabled:!i,className:"flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition-colors",children:[u.jsx("span",{children:"Continue"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}const yp=[{id:1,name:"Lisa Carter",phone:"555-123-4567",rating:4.9},{id:2,name:"James Smith",phone:"555-234-5678",rating:4.8},{id:3,name:"Priya Patel",phone:"555-345-6789",rating:4.9},{id:4,name:"Diego Alvarez",phone:"555-456-7890",rating:4.7}];function dT({selectedQuote:t,onBooking:e,onBack:n}){const[i,r]=xe.useState(null),[s,o]=xe.useState(""),[a,l]=xe.useState(!1),c=()=>{l(!0),setTimeout(()=>{e({agent:yp.find(f=>f.id===i),date:s})},800)};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 flex flex-col items-center",children:u.jsx("div",{className:"max-w-5xl w-full mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(Bg,{className:"h-10 w-10 text-green-700 mr-3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Book a Call with an Agent"})]}),u.jsx("p",{className:"text-gray-600 mb-6",children:"Have questions? Book a call with a licensed agent for a free consultation."}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:yp.map(f=>u.jsxs("div",{className:`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${i===f.id?"border-blue-600 bg-blue-50":"border-gray-200 bg-gray-50"}`,onClick:()=>r(f.id),children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-lg text-blue-900",children:f.name}),u.jsxs("div",{className:"text-gray-700 flex items-center",children:[u.jsx(I_,{className:"h-4 w-4 mr-1"})," ",f.phone]}),u.jsxs("div",{className:"text-yellow-700 flex items-center text-sm",children:[u.jsx("span",{className:"mr-1",children:"★"}),f.rating," rating"]})]}),i===f.id&&u.jsx(Mo,{className:"h-6 w-6 text-green-600"})]},f.id))}),u.jsxs("div",{className:"mb-6 max-w-xs",children:[u.jsx("label",{className:"block font-medium mb-2",children:"Preferred Call Date"}),u.jsx("input",{type:"date",value:s,onChange:f=>o(f.target.value),className:"w-full px-3 py-2 border rounded"})]}),a&&u.jsxs("div",{className:"flex items-center space-x-2 bg-green-50 border border-green-200 rounded p-3 mb-4 max-w-xs",children:[u.jsx(Mo,{className:"h-6 w-6 text-green-700"}),u.jsx("span",{className:"text-green-700 font-semibold",children:"Booking successful!"})]}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:c,disabled:!i||!s||a,className:"flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",children:[u.jsx("span",{children:"Book Agent"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}function fT({applicationData:t,onSubmit:e,onBack:n}){var i,r;return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 flex flex-col items-center",children:u.jsx("div",{className:"max-w-3xl w-full mx-auto px-4",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(Tu,{className:"h-10 w-10 text-blue-600 mr-3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Review & Submit Application"})]}),u.jsx("p",{className:"text-gray-600 mb-6",children:"Please review the details below before submitting your application."}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-blue-800 mb-1",children:"Personal Info"}),u.jsxs("ul",{className:"text-gray-700 text-sm",children:[u.jsxs("li",{children:[u.jsx("b",{children:"Name: "}),t.personalInfo.firstName," ",t.personalInfo.lastName]}),u.jsxs("li",{children:[u.jsx("b",{children:"Email: "}),t.personalInfo.email]}),u.jsxs("li",{children:[u.jsx("b",{children:"Phone: "}),t.personalInfo.phone]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-blue-800 mb-1",children:"Property"}),u.jsxs("ul",{className:"text-gray-700 text-sm",children:[u.jsxs("li",{children:[u.jsx("b",{children:"Address: "}),t.location.address,", ",t.location.city,", ",t.location.state," ",t.location.zipCode]}),u.jsxs("li",{children:[u.jsx("b",{children:"Type: "}),t.propertyDetails.propertyType]}),u.jsxs("li",{children:[u.jsx("b",{children:"Year Built: "}),t.propertyDetails.yearBuilt]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-blue-800 mb-1",children:"Coverage"}),u.jsxs("ul",{className:"text-gray-700 text-sm",children:[u.jsxs("li",{children:[u.jsx("b",{children:"Dwelling: "}),"$",t.coveragePreferences.dwelling]}),u.jsxs("li",{children:[u.jsx("b",{children:"Personal Property: "}),"$",t.coveragePreferences.personalProperty]}),u.jsxs("li",{children:[u.jsx("b",{children:"Liability: "}),"$",t.coveragePreferences.liability]}),u.jsxs("li",{children:[u.jsx("b",{children:"Deductible: "}),"$",t.coveragePreferences.deductible]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-blue-800 mb-1",children:"Quote"}),u.jsxs("ul",{className:"text-gray-700 text-sm",children:[u.jsxs("li",{children:[u.jsx("b",{children:"Company: "}),(i=t.selectedQuote)==null?void 0:i.company]}),u.jsxs("li",{children:[u.jsx("b",{children:"Annual Price: "}),"$",(r=t.selectedQuote)==null?void 0:r.price]})]})]})]}),u.jsxs("div",{className:"flex justify-between pt-8",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx(Tn,{className:"h-4 w-4"}),u.jsx("span",{children:"Back"})]}),u.jsxs("button",{onClick:e,className:"flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:[u.jsx("span",{children:"Submit Application"}),u.jsx(en,{className:"h-4 w-4"})]})]})]})})})}function hT({applicationData:t}){return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-16 flex flex-col items-center justify-center",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-10 flex flex-col items-center",children:[u.jsx(Mo,{className:"h-16 w-16 text-green-600 mb-4"}),u.jsx("h2",{className:"text-4xl font-bold text-green-700 mb-2",children:"Application Submitted!"}),u.jsxs("p",{className:"text-lg text-gray-700 mb-6",children:["Thank you, ",t.personalInfo.firstName,"! Your home insurance application is being reviewed."]}),u.jsxs("div",{className:"text-sm text-gray-500",children:["Expect a response from our team within 1 business day.",u.jsx("br",{}),"Confirmation sent to: ",u.jsx("span",{className:"font-bold",children:t.personalInfo.email})]})]})})}const Br=["landing","personal-info","location","property-details","photo-upload","model-generation","document-upload","ai-analysis","coverage-preferences","quote-generation","policy-comparison","agent-booking","application-summary","confirmation"],pT={"personal-info":"Personal Info",location:"Location","property-details":"Property Details","photo-upload":"Photos","model-generation":"3D Model","document-upload":"Documents","ai-analysis":"AI Analysis","coverage-preferences":"Coverage","quote-generation":"Quotes","policy-comparison":"Compare","agent-booking":"Agent","application-summary":"Review",confirmation:"Complete"};function Sp(){const[t,e]=xe.useState("landing"),[n,i]=xe.useState({personalInfo:{},location:{},propertyDetails:{},propertyImages:[],documents:[],coveragePreferences:{},selectedQuote:null,agentBooking:null});xe.useEffect(()=>{if(t==="confirmation"){const c=setTimeout(()=>e("landing"),2500);return()=>clearTimeout(c)}},[t]);const r=(c,f)=>{i(p=>({...p,[c]:Array.isArray(f)?f:{...p[c],...f}}))},s=()=>{const c=Br.indexOf(t);c<Br.length-1&&e(Br[c+1])},o=()=>{const c=Br.indexOf(t);c>0&&e(Br[c-1])},a=c=>e(c),l=t!=="landing"&&t!=="confirmation";return u.jsxs("div",{className:"min-h-screen bg-gray-50",children:[t==="landing"&&u.jsxs(u.Fragment,{children:[u.jsx(Gg,{onLogoClick:()=>e("landing"),className:"z-50"}),u.jsx("div",{className:"pt-[80px]",children:u.jsx(W1,{onGetStarted:()=>e("personal-info")})})]}),l&&u.jsxs(u.Fragment,{children:[u.jsx(V_,{currentStep:t,steps:Br,labels:pT,onStepClick:a,onLogoClick:()=>e("landing")}),u.jsx("div",{className:"pt-[110px]",children:(()=>{switch(t){case"personal-info":return u.jsx(eT,{data:n.personalInfo,onSubmit:c=>{r("personalInfo",c),s()},onBack:o});case"location":return u.jsx(tT,{data:n.location,onSubmit:c=>{r("location",c),s()},onBack:o});case"property-details":return u.jsx(nT,{data:n.propertyDetails,onSubmit:c=>{r("propertyDetails",c),s()},onBack:o});case"photo-upload":return u.jsx(iT,{data:n.propertyImages,onSubmit:c=>{r("propertyImages",c),s()},onBack:o});case"model-generation":return u.jsx(sT,{images:n.propertyImages,onComplete:s,onBack:o});case"document-upload":return u.jsx(oT,{data:n.documents,onSubmit:c=>{r("documents",c),s()},onBack:o});case"ai-analysis":return u.jsx(aT,{applicationData:n,onComplete:s,onBack:o});case"coverage-preferences":return u.jsx(lT,{data:n.coveragePreferences,onSubmit:c=>{r("coveragePreferences",c),s()},onBack:o});case"quote-generation":return u.jsx(cT,{applicationData:n,onComplete:s,onBack:o});case"policy-comparison":return u.jsx(uT,{applicationData:n,onSelectQuote:c=>{r("selectedQuote",c),s()},onBack:o});case"agent-booking":return u.jsx(dT,{selectedQuote:n.selectedQuote,onBooking:c=>{r("agentBooking",c),s()},onBack:o});case"application-summary":return u.jsx(fT,{applicationData:n,onSubmit:s,onBack:o});default:return null}})()})]}),t==="confirmation"&&u.jsx(hT,{applicationData:n})]})}function mT(){return u.jsx("footer",{className:"bg-gray-900 text-white py-12",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[u.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[u.jsx(bs,{className:"h-6 w-6 text-blue-400"}),u.jsx("span",{className:"text-xl font-bold",children:"InsureAI"})]}),u.jsx("p",{className:"text-gray-400",children:"Smart insurance for the modern homeowner. Powered by AI, trusted by thousands."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold mb-4",children:"Coverage"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",children:[u.jsx("li",{children:"Home Insurance"}),u.jsx("li",{children:"Property Protection"}),u.jsx("li",{children:"Liability Coverage"}),u.jsx("li",{children:"Natural Disasters"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold mb-4",children:"Support"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",children:[u.jsx("li",{children:"Claims"}),u.jsx("li",{children:"Customer Service"}),u.jsx("li",{children:"FAQ"}),u.jsx("li",{children:"Contact Us"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold mb-4",children:"Company"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",children:[u.jsx("li",{children:"About Us"}),u.jsx("li",{children:"Careers"}),u.jsx("li",{children:"Privacy Policy"}),u.jsx("li",{children:"Terms of Service"})]})]})]}),u.jsx("div",{className:"border-t border-gray-800 mt-12 pt-8 text-center text-gray-400",children:u.jsx("p",{children:"© 2025 InsureAI. All rights reserved."})})]})})}function gT(){const[t,e]=xe.useState(!0),n=()=>e(!0),i=()=>e(!1);return u.jsxs("div",{className:"min-h-screen flex flex-col",children:[u.jsx(Gg,{onLogoClick:n}),u.jsx("div",{className:"flex-1",children:t?u.jsx(Sp,{showLanding:!0,onGetStarted:i}):u.jsx(Sp,{showLanding:!1})}),u.jsx(mT,{})]})}Pc.createRoot(document.getElementById("root")).render(u.jsx(Pp.StrictMode,{children:u.jsx(gT,{})}));
