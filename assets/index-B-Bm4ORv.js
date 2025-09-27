function Q0(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ov(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fd={exports:{}},Da={},pd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function G0(){if(fg)return Pe;fg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,q={};function M(V,W,fe){this.props=V,this.context=W,this.refs=q,this.updater=fe||F}M.prototype.isReactComponent={},M.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},M.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function re(){}re.prototype=M.prototype;function Y(V,W,fe){this.props=V,this.context=W,this.refs=q,this.updater=fe||F}var te=Y.prototype=new re;te.constructor=Y,j(te,M.prototype),te.isPureReactComponent=!0;var le=Array.isArray,Se=Object.prototype.hasOwnProperty,Ee={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(V,W,fe){var Ae,Re={},De=null,Me=null;if(W!=null)for(Ae in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(De=""+W.key),W)Se.call(W,Ae)&&!k.hasOwnProperty(Ae)&&(Re[Ae]=W[Ae]);var Fe=arguments.length-2;if(Fe===1)Re.children=fe;else if(1<Fe){for(var $e=Array(Fe),_t=0;_t<Fe;_t++)$e[_t]=arguments[_t+2];Re.children=$e}if(V&&V.defaultProps)for(Ae in Fe=V.defaultProps,Fe)Re[Ae]===void 0&&(Re[Ae]=Fe[Ae]);return{$$typeof:r,type:V,key:De,ref:Me,props:Re,_owner:Ee.current}}function R(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function D(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return W[fe]})}var b=/\/+/g;function C(V,W){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):W.toString(36)}function nt(V,W,fe,Ae,Re){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case r:case e:Me=!0}}if(Me)return Me=V,Re=Re(Me),V=Ae===""?"."+C(Me,0):Ae,le(Re)?(fe="",V!=null&&(fe=V.replace(b,"$&/")+"/"),nt(Re,W,fe,"",function(_t){return _t})):Re!=null&&(x(Re)&&(Re=R(Re,fe+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(b,"$&/")+"/")+V)),W.push(Re)),1;if(Me=0,Ae=Ae===""?".":Ae+":",le(V))for(var Fe=0;Fe<V.length;Fe++){De=V[Fe];var $e=Ae+C(De,Fe);Me+=nt(De,W,fe,$e,Re)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(De=V.next()).done;)De=De.value,$e=Ae+C(De,Fe++),Me+=nt(De,W,fe,$e,Re);else if(De==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function Dt(V,W,fe){if(V==null)return V;var Ae=[],Re=0;return nt(V,Ae,"","",function(De){return W.call(fe,De,Re++)}),Ae}function Vt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},ee={transition:null},pe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ee};function se(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Dt,forEach:function(V,W,fe){Dt(V,function(){W.apply(this,arguments)},fe)},count:function(V){var W=0;return Dt(V,function(){W++}),W},toArray:function(V){return Dt(V,function(W){return W})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Pe.Component=M,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=Y,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Pe.act=se,Pe.cloneElement=function(V,W,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=j({},V.props),Re=V.key,De=V.ref,Me=V._owner;if(W!=null){if(W.ref!==void 0&&(De=W.ref,Me=Ee.current),W.key!==void 0&&(Re=""+W.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in W)Se.call(W,$e)&&!k.hasOwnProperty($e)&&(Ae[$e]=W[$e]===void 0&&Fe!==void 0?Fe[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Ae.children=fe;else if(1<$e){Fe=Array($e);for(var _t=0;_t<$e;_t++)Fe[_t]=arguments[_t+2];Ae.children=Fe}return{$$typeof:r,type:V.type,key:Re,ref:De,props:Ae,_owner:Me}},Pe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Pe.createElement=S,Pe.createFactory=function(V){var W=S.bind(null,V);return W.type=V,W},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(V){return{$$typeof:p,render:V}},Pe.isValidElement=x,Pe.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Vt}},Pe.memo=function(V,W){return{$$typeof:v,type:V,compare:W===void 0?null:W}},Pe.startTransition=function(V){var W=ee.transition;ee.transition={};try{V()}finally{ee.transition=W}},Pe.unstable_act=se,Pe.useCallback=function(V,W){return ze.current.useCallback(V,W)},Pe.useContext=function(V){return ze.current.useContext(V)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},Pe.useEffect=function(V,W){return ze.current.useEffect(V,W)},Pe.useId=function(){return ze.current.useId()},Pe.useImperativeHandle=function(V,W,fe){return ze.current.useImperativeHandle(V,W,fe)},Pe.useInsertionEffect=function(V,W){return ze.current.useInsertionEffect(V,W)},Pe.useLayoutEffect=function(V,W){return ze.current.useLayoutEffect(V,W)},Pe.useMemo=function(V,W){return ze.current.useMemo(V,W)},Pe.useReducer=function(V,W,fe){return ze.current.useReducer(V,W,fe)},Pe.useRef=function(V){return ze.current.useRef(V)},Pe.useState=function(V){return ze.current.useState(V)},Pe.useSyncExternalStore=function(V,W,fe){return ze.current.useSyncExternalStore(V,W,fe)},Pe.useTransition=function(){return ze.current.useTransition()},Pe.version="18.3.1",Pe}var pg;function sf(){return pg||(pg=1,pd.exports=G0()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function K0(){if(mg)return Da;mg=1;var r=sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,v){var w,T={},I=null,F=null;v!==void 0&&(I=""+v),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(F=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(p&&p.defaultProps)for(w in g=p.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:p,key:I,ref:F,props:T,_owner:o.current}}return Da.Fragment=t,Da.jsx=h,Da.jsxs=h,Da}var gg;function X0(){return gg||(gg=1,fd.exports=K0()),fd.exports}var $=X0(),Ru={},md={exports:{}},tn={},gd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Y0(){return yg||(yg=1,(function(r){function e(ee,pe){var se=ee.length;ee.push(pe);e:for(;0<se;){var V=se-1>>>1,W=ee[V];if(0<o(W,pe))ee[V]=pe,ee[se]=W,se=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var pe=ee[0],se=ee.pop();if(se!==pe){ee[0]=se;e:for(var V=0,W=ee.length,fe=W>>>1;V<fe;){var Ae=2*(V+1)-1,Re=ee[Ae],De=Ae+1,Me=ee[De];if(0>o(Re,se))De<W&&0>o(Me,Re)?(ee[V]=Me,ee[De]=se,V=De):(ee[V]=Re,ee[Ae]=se,V=Ae);else if(De<W&&0>o(Me,se))ee[V]=Me,ee[De]=se,V=De;else break e}}return pe}function o(ee,pe){var se=ee.sortIndex-pe.sortIndex;return se!==0?se:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],v=[],w=1,T=null,I=3,F=!1,j=!1,q=!1,M=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ee){for(var pe=t(v);pe!==null;){if(pe.callback===null)s(v);else if(pe.startTime<=ee)s(v),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(v)}}function le(ee){if(q=!1,te(ee),!j)if(t(g)!==null)j=!0,Vt(Se);else{var pe=t(v);pe!==null&&ze(le,pe.startTime-ee)}}function Se(ee,pe){j=!1,q&&(q=!1,re(S),S=-1),F=!0;var se=I;try{for(te(pe),T=t(g);T!==null&&(!(T.expirationTime>pe)||ee&&!D());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var W=V(T.expirationTime<=pe);pe=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&s(g),te(pe)}else s(g);T=t(g)}if(T!==null)var fe=!0;else{var Ae=t(v);Ae!==null&&ze(le,Ae.startTime-pe),fe=!1}return fe}finally{T=null,I=se,F=!1}}var Ee=!1,k=null,S=-1,R=5,x=-1;function D(){return!(r.unstable_now()-x<R)}function b(){if(k!==null){var ee=r.unstable_now();x=ee;var pe=!0;try{pe=k(!0,ee)}finally{pe?C():(Ee=!1,k=null)}}else Ee=!1}var C;if(typeof Y=="function")C=function(){Y(b)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=b,C=function(){Dt.postMessage(null)}}else C=function(){M(b,0)};function Vt(ee){k=ee,Ee||(Ee=!0,C())}function ze(ee,pe){S=M(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){j||F||(j=!0,Vt(Se))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var se=I;I=pe;try{return ee()}finally{I=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=I;I=ee;try{return pe()}finally{I=se}},r.unstable_scheduleCallback=function(ee,pe,se){var V=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=se+W,ee={id:w++,callback:pe,priorityLevel:ee,startTime:se,expirationTime:W,sortIndex:-1},se>V?(ee.sortIndex=se,e(v,ee),t(g)===null&&ee===t(v)&&(q?(re(S),S=-1):q=!0,ze(le,se-V))):(ee.sortIndex=W,e(g,ee),j||F||(j=!0,Vt(Se))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var pe=I;return function(){var se=I;I=pe;try{return ee.apply(this,arguments)}finally{I=se}}}})(yd)),yd}var vg;function J0(){return vg||(vg=1,gd.exports=Y0()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Z0(){if(_g)return tn;_g=1;var r=sf(),e=J0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(n){return g.call(T,n)?!0:g.call(w,n)?!1:v.test(n)?T[n]=!0:(w[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function j(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,a,c,d,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function Y(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(re,Y);M[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(re,Y);M[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(re,Y);M[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,i,a,c){var d=M.hasOwnProperty(i)?M[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(j(i,a,d,c)&&(a=null),c||d===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var fe=!1;function Ae(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,A=m.length-1;1<=_&&0<=A&&d[_]!==m[A];)A--;for(;1<=_&&0<=A;_--,A--)if(d[_]!==m[A]){if(_!==1||A!==1)do if(_--,A--,0>A||d[_]!==m[A]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ee:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return i=n.displayName||null,i!==null?i:De(n.type)||"Memo";case Vt:i=n._payload,n=n._init;try{return De(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _t(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mr(n){n._valueTracker||(n._valueTracker=_t(n))}function Ts(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Li(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Is(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Fo(n,i){i=i.checked,i!=null&&te(n,"checked",i,!1)}function Uo(n,i){Fo(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ss(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ss(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function dl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ss(n,i,a){(i!=="number"||zr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gr=Array.isArray;function yr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function jo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function As(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function Cs(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var vr,Bo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Br(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fi=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(n){Fi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Mi[i]=Mi[n]})});function $o(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Mi.hasOwnProperty(n)&&Mi[n]?(""+i).trim():i+"px"}function qo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=$o(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ho=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(n,i){if(i){if(Ho[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Qo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ps=null,pn=null,Wn=null;function ks(n){if(n=ya(n)){if(typeof Ps!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Bl(i),Ps(n.stateNode,n.type,i))}}function Qn(n){pn?Wn?Wn.push(n):Wn=[n]:pn=n}function Go(){if(pn){var n=pn,i=Wn;if(Wn=pn=null,ks(n),i)for(n=0;n<i.length;n++)ks(i[n])}}function ji(n,i){return n(i)}function Ko(){}var _r=!1;function Xo(n,i,a){if(_r)return n(i,a);_r=!0;try{return ji(n,i,a)}finally{_r=!1,(pn!==null||Wn!==null)&&(Ko(),Go())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Bl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var xs=!1;if(p)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{xs=!1}function zi(n,i,a,c,d,m,_,A,P){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(K){this.onError(K)}}var Bi=!1,Ns=null,Rn=!1,Yo=null,zc={onError:function(n){Bi=!0,Ns=n}};function Ds(n,i,a,c,d,m,_,A,P){Bi=!1,Ns=null,zi.apply(zc,arguments)}function fl(n,i,a,c,d,m,_,A,P){if(Ds.apply(this,arguments),Bi){if(Bi){var z=Ns;Bi=!1,Ns=null}else throw Error(t(198));Rn||(Rn=!0,Yo=z)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function $i(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function kn(n){if(Pn(n)!==n)throw Error(t(188))}function pl(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return kn(d),n;if(m===c)return kn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,A=d.child;A;){if(A===a){_=!0,a=d,c=m;break}if(A===c){_=!0,c=d,a=m;break}A=A.sibling}if(!_){for(A=m.child;A;){if(A===a){_=!0,a=m,c=d;break}if(A===c){_=!0,c=m,a=d;break}A=A.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Jo(n){return n=pl(n),n!==null?Vs(n):null}function Vs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Vs(n);if(i!==null)return i;n=n.sibling}return null}var bs=e.unstable_scheduleCallback,Zo=e.unstable_cancelCallback,ml=e.unstable_shouldYield,Bc=e.unstable_requestPaint,qe=e.unstable_now,gl=e.unstable_getCurrentPriorityLevel,qi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ea=e.unstable_LowPriority,yl=e.unstable_IdlePriority,Hi=null,on=null;function vl(n){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Hi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:wl,ta=Math.log,_l=Math.LN2;function wl(n){return n>>>=0,n===0?32:31-(ta(n)/_l|0)|0}var Os=64,Ls=4194304;function qr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var A=_&~d;A!==0?c=qr(A):(m&=_,m!==0&&(c=qr(m)))}else _=a&~d,_!==0?c=qr(_):m!==0&&(c=qr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function $c(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-Bt(m),A=1<<_,P=d[_];P===-1?((A&a)===0||(A&c)!==0)&&(d[_]=$c(A,i)):P<=i&&(n.expiredLanes|=A),m&=~A}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qi(){var n=Os;return Os<<=1,(Os&4194240)===0&&(Os=64),n}function Hr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Wr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Qr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ne=0;function Gr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var El,Ms,Tl,Il,Sl,na=!1,Gn=[],At=null,xn=null,Nn=null,Kr=new Map,gn=new Map,Kn=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(n,i){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Kr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(i.pointerId)}}function Gt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&Ms(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Hc(n,i,a,c,d){switch(i){case"focusin":return At=Gt(At,n,i,a,c,d),!0;case"dragenter":return xn=Gt(xn,n,i,a,c,d),!0;case"mouseover":return Nn=Gt(Nn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Kr.set(m,Gt(Kr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,gn.set(m,Gt(gn.get(m)||null,n,i,a,c,d)),!0}return!1}function Cl(n){var i=Ji(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=$i(a),i!==null){n.blockedOn=i,Sl(n.priority,function(){Tl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Er(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Fs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ui=c,a.target.dispatchEvent(c),Ui=null}else return i=ya(a),i!==null&&Ms(i),n.blockedOn=a,!1;i.shift()}return!0}function Gi(n,i,a){Er(n)&&a.delete(i)}function Rl(){na=!1,At!==null&&Er(At)&&(At=null),xn!==null&&Er(xn)&&(xn=null),Nn!==null&&Er(Nn)&&(Nn=null),Kr.forEach(Gi),gn.forEach(Gi)}function Dn(n,i){n.blockedOn===i&&(n.blockedOn=null,na||(na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rl)))}function Vn(n){function i(d){return Dn(d,n)}if(0<Gn.length){Dn(Gn[0],n);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&Dn(At,n),xn!==null&&Dn(xn,n),Nn!==null&&Dn(Nn,n),Kr.forEach(i),gn.forEach(i),a=0;a<Kn.length;a++)c=Kn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Kn.length&&(a=Kn[0],a.blockedOn===null);)Cl(a),a.blockedOn===null&&Kn.shift()}var Tr=le.ReactCurrentBatchConfig,Xr=!0;function Xe(n,i,a,c){var d=Ne,m=Tr.transition;Tr.transition=null;try{Ne=1,ra(n,i,a,c)}finally{Ne=d,Tr.transition=m}}function Wc(n,i,a,c){var d=Ne,m=Tr.transition;Tr.transition=null;try{Ne=4,ra(n,i,a,c)}finally{Ne=d,Tr.transition=m}}function ra(n,i,a,c){if(Xr){var d=Fs(n,i,a,c);if(d===null)rh(n,i,c,Ki,a),Al(n,c);else if(Hc(d,n,i,a,c))c.stopPropagation();else if(Al(n,c),i&4&&-1<qc.indexOf(n)){for(;d!==null;){var m=ya(d);if(m!==null&&El(m),m=Fs(n,i,a,c),m===null&&rh(n,i,c,Ki,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else rh(n,i,c,null,a)}}var Ki=null;function Fs(n,i,a,c){if(Ki=null,n=Rs(c),n=Ji(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=$i(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ki=n,null}function ia(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gl()){case qi:return 1;case $r:return 4;case mn:case ea:return 16;case yl:return 536870912;default:return 16}default:return 16}}var ln=null,Us=null,Kt=null;function sa(){if(Kt)return Kt;var n,i=Us,a=i.length,c,d="value"in ln?ln.value:ln.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[m-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function js(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function oa(){return!1}function Ct(n){function i(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:oa,this.isPropagationStopped=oa,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Ct(bn),Yn=se({},bn,{view:0,detail:0}),Qc=Ct(Yn),Bs,Ir,Yr,Xi=se({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Yr&&(Yr&&n.type==="mousemove"?(Bs=n.screenX-Yr.screenX,Ir=n.screenY-Yr.screenY):Ir=Bs=0,Yr=n),Bs)},movementY:function(n){return"movementY"in n?n.movementY:Ir}}),$s=Ct(Xi),aa=se({},Xi,{dataTransfer:0}),Pl=Ct(aa),qs=se({},Yn,{relatedTarget:0}),Hs=Ct(qs),kl=se({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Ct(kl),xl=se({},bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nl=Ct(xl),Dl=se({},bn,{data:0}),la=Ct(Dl),Ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vl[n])?!!i[n]:!1}function Jn(){return bl}var u=se({},Yn,{key:function(n){if(n.key){var i=Ws[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=js(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(n){return n.type==="keypress"?js(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?js(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(u),y=se({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(y),O=se({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),B=Ct(O),Z=se({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Ct(Z),ft=se({},Xi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Ct(ft),wt=[9,13,27,32],at=p&&"CompositionEvent"in window,yn=null;p&&"documentMode"in document&&(yn=document.documentMode);var un=p&&"TextEvent"in window&&!yn,Yi=p&&(!at||yn&&8<yn&&11>=yn),Qs=" ",ap=!1;function lp(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function qw(n,i){switch(n){case"compositionend":return up(i);case"keypress":return i.which!==32?null:(ap=!0,Qs);case"textInput":return n=i.data,n===Qs&&ap?null:n;default:return null}}function Hw(n,i){if(Gs)return n==="compositionend"||!at&&lp(n,i)?(n=sa(),Kt=Us=ln=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yi&&i.locale!=="ko"?null:i.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ww[n.type]:i==="textarea"}function hp(n,i,a,c){Qn(c),i=Ul(i,"onChange"),0<i.length&&(a=new zs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ua=null,ca=null;function Qw(n){kp(n,0)}function Ol(n){var i=Zs(n);if(Ts(i))return n}function Gw(n,i){if(n==="change")return i}var dp=!1;if(p){var Gc;if(p){var Kc="oninput"in document;if(!Kc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Kc=typeof fp.oninput=="function"}Gc=Kc}else Gc=!1;dp=Gc&&(!document.documentMode||9<document.documentMode)}function pp(){ua&&(ua.detachEvent("onpropertychange",mp),ca=ua=null)}function mp(n){if(n.propertyName==="value"&&Ol(ca)){var i=[];hp(i,ca,n,Rs(n)),Xo(Qw,i)}}function Kw(n,i,a){n==="focusin"?(pp(),ua=i,ca=a,ua.attachEvent("onpropertychange",mp)):n==="focusout"&&pp()}function Xw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ol(ca)}function Yw(n,i){if(n==="click")return Ol(i)}function Jw(n,i){if(n==="input"||n==="change")return Ol(i)}function Zw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var On=typeof Object.is=="function"?Object.is:Zw;function ha(n,i){if(On(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!On(n[d],i[d]))return!1}return!0}function gp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yp(n,i){var a=gp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gp(a)}}function vp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function _p(){for(var n=window,i=zr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zr(n.document)}return i}function Xc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function e0(n){var i=_p(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&vp(a.ownerDocument.documentElement,a)){if(c!==null&&Xc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=yp(a,m);var _=yp(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var t0=p&&"documentMode"in document&&11>=document.documentMode,Ks=null,Yc=null,da=null,Jc=!1;function wp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Ks==null||Ks!==zr(c)||(c=Ks,"selectionStart"in c&&Xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ha(da,c)||(da=c,c=Ul(Yc,"onSelect"),0<c.length&&(i=new zs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ks)))}function Ll(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Xs={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Zc={},Ep={};p&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Ml(n){if(Zc[n])return Zc[n];if(!Xs[n])return n;var i=Xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ep)return Zc[n]=i[a];return n}var Tp=Ml("animationend"),Ip=Ml("animationiteration"),Sp=Ml("animationstart"),Ap=Ml("transitionend"),Cp=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,i){Cp.set(n,i),l(i,[n])}for(var eh=0;eh<Rp.length;eh++){var th=Rp[eh],n0=th.toLowerCase(),r0=th[0].toUpperCase()+th.slice(1);Jr(n0,"on"+r0)}Jr(Tp,"onAnimationEnd"),Jr(Ip,"onAnimationIteration"),Jr(Sp,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(Ap,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Pp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,fl(c,i,void 0,n),n.currentTarget=null}function kp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var A=c[_],P=A.instance,z=A.currentTarget;if(A=A.listener,P!==m&&d.isPropagationStopped())break e;Pp(d,A,z),m=P}else for(_=0;_<c.length;_++){if(A=c[_],P=A.instance,z=A.currentTarget,A=A.listener,P!==m&&d.isPropagationStopped())break e;Pp(d,A,z),m=P}}}if(Rn)throw n=Yo,Rn=!1,Yo=null,n}function We(n,i){var a=i[uh];a===void 0&&(a=i[uh]=new Set);var c=n+"__bubble";a.has(c)||(xp(i,n,2,!1),a.add(c))}function nh(n,i,a){var c=0;i&&(c|=4),xp(a,n,c,i)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Fl]){n[Fl]=!0,s.forEach(function(a){a!=="selectionchange"&&(i0.has(a)||nh(a,!1,n),nh(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Fl]||(i[Fl]=!0,nh("selectionchange",!1,i))}}function xp(n,i,a,c){switch(ia(i)){case 1:var d=Xe;break;case 4:d=Wc;break;default:d=ra}a=d.bind(null,i,a,n),d=void 0,!xs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function rh(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;A!==null;){if(_=Ji(A),_===null)return;if(P=_.tag,P===5||P===6){c=m=_;continue e}A=A.parentNode}}c=c.return}Xo(function(){var z=m,K=Rs(a),X=[];e:{var G=Cp.get(n);if(G!==void 0){var ne=zs,ue=n;switch(n){case"keypress":if(js(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":ue="focus",ne=Hs;break;case"focusout":ue="blur",ne=Hs;break;case"beforeblur":case"afterblur":ne=Hs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=B;break;case Tp:case Ip:case Sp:ne=Sr;break;case Ap:ne=je;break;case"scroll":ne=Qc;break;case"wheel":ne=Ve;break;case"copy":case"cut":case"paste":ne=Nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var he=(i&4)!==0,it=!he&&n==="scroll",L=he?G!==null?G+"Capture":null:G;he=[];for(var N=z,U;N!==null;){U=N;var J=U.stateNode;if(U.tag===5&&J!==null&&(U=J,L!==null&&(J=rt(N,L),J!=null&&he.push(ma(N,J,U)))),it)break;N=N.return}0<he.length&&(G=new ne(G,ue,null,a,K),X.push({event:G,listeners:he}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==Ui&&(ue=a.relatedTarget||a.fromElement)&&(Ji(ue)||ue[Ar]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(ue=a.relatedTarget||a.toElement,ne=z,ue=ue?Ji(ue):null,ue!==null&&(it=Pn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ne=null,ue=z),ne!==ue)){if(he=$s,J="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(he=E,J="onPointerLeave",L="onPointerEnter",N="pointer"),it=ne==null?G:Zs(ne),U=ue==null?G:Zs(ue),G=new he(J,N+"leave",ne,a,K),G.target=it,G.relatedTarget=U,J=null,Ji(K)===z&&(he=new he(L,N+"enter",ue,a,K),he.target=U,he.relatedTarget=it,J=he),it=J,ne&&ue)t:{for(he=ne,L=ue,N=0,U=he;U;U=Ys(U))N++;for(U=0,J=L;J;J=Ys(J))U++;for(;0<N-U;)he=Ys(he),N--;for(;0<U-N;)L=Ys(L),U--;for(;N--;){if(he===L||L!==null&&he===L.alternate)break t;he=Ys(he),L=Ys(L)}he=null}else he=null;ne!==null&&Np(X,G,ne,he,!1),ue!==null&&it!==null&&Np(X,it,ue,he,!0)}}e:{if(G=z?Zs(z):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var de=Gw;else if(cp(G))if(dp)de=Jw;else{de=Xw;var ge=Kw}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=Yw);if(de&&(de=de(n,z))){hp(X,de,a,K);break e}ge&&ge(n,G,z),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Ss(G,"number",G.value)}switch(ge=z?Zs(z):window,n){case"focusin":(cp(ge)||ge.contentEditable==="true")&&(Ks=ge,Yc=z,da=null);break;case"focusout":da=Yc=Ks=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,wp(X,a,K);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":wp(X,a,K)}var ye;if(at)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Gs?lp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Yi&&a.locale!=="ko"&&(Gs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Gs&&(ye=sa()):(ln=K,Us="value"in ln?ln.value:ln.textContent,Gs=!0)),ge=Ul(z,_e),0<ge.length&&(_e=new la(_e,n,null,a,K),X.push({event:_e,listeners:ge}),ye?_e.data=ye:(ye=up(a),ye!==null&&(_e.data=ye)))),(ye=un?qw(n,a):Hw(n,a))&&(z=Ul(z,"onBeforeInput"),0<z.length&&(K=new la("onBeforeInput","beforeinput",null,a,K),X.push({event:K,listeners:z}),K.data=ye))}kp(X,i)})}function ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ul(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(n,a),m!=null&&c.unshift(ma(n,m,d)),m=rt(n,i),m!=null&&c.push(ma(n,m,d))),n=n.return}return c}function Ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Np(n,i,a,c,d){for(var m=i._reactName,_=[];a!==null&&a!==c;){var A=a,P=A.alternate,z=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&z!==null&&(A=z,d?(P=rt(a,m),P!=null&&_.unshift(ma(a,P,A))):d||(P=rt(a,m),P!=null&&_.push(ma(a,P,A)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var s0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Dp(n){return(typeof n=="string"?n:""+n).replace(s0,`
`).replace(o0,"")}function jl(n,i,a){if(i=Dp(i),Dp(n)!==i&&a)throw Error(t(425))}function zl(){}var ih=null,sh=null;function oh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(u0)}:ah;function u0(n){setTimeout(function(){throw n})}function lh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function bp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Js,ga="__reactProps$"+Js,Ar="__reactContainer$"+Js,uh="__reactEvents$"+Js,c0="__reactListeners$"+Js,h0="__reactHandles$"+Js;function Ji(n){var i=n[Zn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ar]||a[Zn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=bp(n);n!==null;){if(a=n[Zn])return a;n=bp(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[Zn]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bl(n){return n[ga]||null}var ch=[],eo=-1;function ei(n){return{current:n}}function Qe(n){0>eo||(n.current=ch[eo],ch[eo]=null,eo--)}function He(n,i){eo++,ch[eo]=n.current,n.current=i}var ti={},bt=ei(ti),Xt=ei(!1),Zi=ti;function to(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function $l(){Qe(Xt),Qe(bt)}function Op(n,i,a){if(bt.current!==ti)throw Error(t(168));He(bt,i),He(Xt,a)}function Lp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return se({},a,c)}function ql(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Zi=bt.current,He(bt,n),He(Xt,Xt.current),!0}function Mp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Lp(n,i,Zi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Xt),Qe(bt),He(bt,n)):Qe(Xt),He(Xt,a)}var Cr=null,Hl=!1,hh=!1;function Fp(n){Cr===null?Cr=[n]:Cr.push(n)}function d0(n){Hl=!0,Fp(n)}function ni(){if(!hh&&Cr!==null){hh=!0;var n=0,i=Ne;try{var a=Cr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,Hl=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),bs(qi,ni),d}finally{Ne=i,hh=!1}}return null}var no=[],ro=0,Wl=null,Ql=0,vn=[],_n=0,es=null,Rr=1,Pr="";function ts(n,i){no[ro++]=Ql,no[ro++]=Wl,Wl=n,Ql=i}function Up(n,i,a){vn[_n++]=Rr,vn[_n++]=Pr,vn[_n++]=es,es=n;var c=Rr;n=Pr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Rr=1<<32-Bt(i)+d|a<<d|c,Pr=m+n}else Rr=1<<m|a<<d|c,Pr=n}function dh(n){n.return!==null&&(ts(n,1),Up(n,1,0))}function fh(n){for(;n===Wl;)Wl=no[--ro],no[ro]=null,Ql=no[--ro],no[ro]=null;for(;n===es;)es=vn[--_n],vn[_n]=null,Pr=vn[--_n],vn[_n]=null,Rr=vn[--_n],vn[_n]=null}var cn=null,hn=null,Ye=!1,Ln=null;function jp(n,i){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function zp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,cn=n,hn=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,cn=n,hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=es!==null?{id:Rr,overflow:Pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,cn=n,hn=null,!0):!1;default:return!1}}function ph(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mh(n){if(Ye){var i=hn;if(i){var a=i;if(!zp(n,i)){if(ph(n))throw Error(t(418));i=Zr(a.nextSibling);var c=cn;i&&zp(n,i)?jp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,cn=n)}}else{if(ph(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,cn=n}}}function Bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;cn=n}function Gl(n){if(n!==cn)return!1;if(!Ye)return Bp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!oh(n.type,n.memoizedProps)),i&&(i=hn)){if(ph(n))throw $p(),Error(t(418));for(;i;)jp(n,i),i=Zr(i.nextSibling)}if(Bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hn=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hn=null}}else hn=cn?Zr(n.stateNode.nextSibling):null;return!0}function $p(){for(var n=hn;n;)n=Zr(n.nextSibling)}function io(){hn=cn=null,Ye=!1}function gh(n){Ln===null?Ln=[n]:Ln.push(n)}var f0=le.ReactCurrentBatchConfig;function va(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var A=d.refs;_===null?delete A[m]:A[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Kl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qp(n){var i=n._init;return i(n._payload)}function Hp(n){function i(L,N){if(n){var U=L.deletions;U===null?(L.deletions=[N],L.flags|=16):U.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=ci(L,N),L.index=0,L.sibling=null,L}function m(L,N,U){return L.index=U,n?(U=L.alternate,U!==null?(U=U.index,U<N?(L.flags|=2,N):U):(L.flags|=2,N)):(L.flags|=1048576,N)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function A(L,N,U,J){return N===null||N.tag!==6?(N=ad(U,L.mode,J),N.return=L,N):(N=d(N,U),N.return=L,N)}function P(L,N,U,J){var de=U.type;return de===k?K(L,N,U.props.children,J,U.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&qp(de)===N.type)?(J=d(N,U.props),J.ref=va(L,N,U),J.return=L,J):(J=_u(U.type,U.key,U.props,null,L.mode,J),J.ref=va(L,N,U),J.return=L,J)}function z(L,N,U,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=ld(U,L.mode,J),N.return=L,N):(N=d(N,U.children||[]),N.return=L,N)}function K(L,N,U,J,de){return N===null||N.tag!==7?(N=us(U,L.mode,J,de),N.return=L,N):(N=d(N,U),N.return=L,N)}function X(L,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=ad(""+N,L.mode,U),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Se:return U=_u(N.type,N.key,N.props,null,L.mode,U),U.ref=va(L,null,N),U.return=L,U;case Ee:return N=ld(N,L.mode,U),N.return=L,N;case Vt:var J=N._init;return X(L,J(N._payload),U)}if(gr(N)||pe(N))return N=us(N,L.mode,U,null),N.return=L,N;Kl(L,N)}return null}function G(L,N,U,J){var de=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:A(L,N,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Se:return U.key===de?P(L,N,U,J):null;case Ee:return U.key===de?z(L,N,U,J):null;case Vt:return de=U._init,G(L,N,de(U._payload),J)}if(gr(U)||pe(U))return de!==null?null:K(L,N,U,J,null);Kl(L,U)}return null}function ne(L,N,U,J,de){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(U)||null,A(N,L,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Se:return L=L.get(J.key===null?U:J.key)||null,P(N,L,J,de);case Ee:return L=L.get(J.key===null?U:J.key)||null,z(N,L,J,de);case Vt:var ge=J._init;return ne(L,N,U,ge(J._payload),de)}if(gr(J)||pe(J))return L=L.get(U)||null,K(N,L,J,de,null);Kl(N,J)}return null}function ue(L,N,U,J){for(var de=null,ge=null,ye=N,_e=N=0,It=null;ye!==null&&_e<U.length;_e++){ye.index>_e?(It=ye,ye=null):It=ye.sibling;var Le=G(L,ye,U[_e],J);if(Le===null){ye===null&&(ye=It);break}n&&ye&&Le.alternate===null&&i(L,ye),N=m(Le,N,_e),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=It}if(_e===U.length)return a(L,ye),Ye&&ts(L,_e),de;if(ye===null){for(;_e<U.length;_e++)ye=X(L,U[_e],J),ye!==null&&(N=m(ye,N,_e),ge===null?de=ye:ge.sibling=ye,ge=ye);return Ye&&ts(L,_e),de}for(ye=c(L,ye);_e<U.length;_e++)It=ne(ye,L,_e,U[_e],J),It!==null&&(n&&It.alternate!==null&&ye.delete(It.key===null?_e:It.key),N=m(It,N,_e),ge===null?de=It:ge.sibling=It,ge=It);return n&&ye.forEach(function(hi){return i(L,hi)}),Ye&&ts(L,_e),de}function he(L,N,U,J){var de=pe(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var ge=de=null,ye=N,_e=N=0,It=null,Le=U.next();ye!==null&&!Le.done;_e++,Le=U.next()){ye.index>_e?(It=ye,ye=null):It=ye.sibling;var hi=G(L,ye,Le.value,J);if(hi===null){ye===null&&(ye=It);break}n&&ye&&hi.alternate===null&&i(L,ye),N=m(hi,N,_e),ge===null?de=hi:ge.sibling=hi,ge=hi,ye=It}if(Le.done)return a(L,ye),Ye&&ts(L,_e),de;if(ye===null){for(;!Le.done;_e++,Le=U.next())Le=X(L,Le.value,J),Le!==null&&(N=m(Le,N,_e),ge===null?de=Le:ge.sibling=Le,ge=Le);return Ye&&ts(L,_e),de}for(ye=c(L,ye);!Le.done;_e++,Le=U.next())Le=ne(ye,L,_e,Le.value,J),Le!==null&&(n&&Le.alternate!==null&&ye.delete(Le.key===null?_e:Le.key),N=m(Le,N,_e),ge===null?de=Le:ge.sibling=Le,ge=Le);return n&&ye.forEach(function(W0){return i(L,W0)}),Ye&&ts(L,_e),de}function it(L,N,U,J){if(typeof U=="object"&&U!==null&&U.type===k&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Se:e:{for(var de=U.key,ge=N;ge!==null;){if(ge.key===de){if(de=U.type,de===k){if(ge.tag===7){a(L,ge.sibling),N=d(ge,U.props.children),N.return=L,L=N;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&qp(de)===ge.type){a(L,ge.sibling),N=d(ge,U.props),N.ref=va(L,ge,U),N.return=L,L=N;break e}a(L,ge);break}else i(L,ge);ge=ge.sibling}U.type===k?(N=us(U.props.children,L.mode,J,U.key),N.return=L,L=N):(J=_u(U.type,U.key,U.props,null,L.mode,J),J.ref=va(L,N,U),J.return=L,L=J)}return _(L);case Ee:e:{for(ge=U.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(L,N.sibling),N=d(N,U.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else i(L,N);N=N.sibling}N=ld(U,L.mode,J),N.return=L,L=N}return _(L);case Vt:return ge=U._init,it(L,N,ge(U._payload),J)}if(gr(U))return ue(L,N,U,J);if(pe(U))return he(L,N,U,J);Kl(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,U),N.return=L,L=N):(a(L,N),N=ad(U,L.mode,J),N.return=L,L=N),_(L)):a(L,N)}return it}var so=Hp(!0),Wp=Hp(!1),Xl=ei(null),Yl=null,oo=null,yh=null;function vh(){yh=oo=Yl=null}function _h(n){var i=Xl.current;Qe(Xl),n._currentValue=i}function wh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ao(n,i){Yl=n,yh=oo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jt=!0),n.firstContext=null)}function wn(n){var i=n._currentValue;if(yh!==n)if(n={context:n,memoizedValue:i,next:null},oo===null){if(Yl===null)throw Error(t(308));oo=n,Yl.dependencies={lanes:0,firstContext:n}}else oo=oo.next=n;return i}var ns=null;function Eh(n){ns===null?ns=[n]:ns.push(n)}function Qp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Eh(i)):(a.next=d.next,d.next=a),i.interleaved=a,kr(n,c)}function kr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function Th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,kr(n,a)}return d=c.interleaved,d===null?(i.next=i,Eh(c)):(i.next=d.next,d.next=i),c.interleaved=i,kr(n,a)}function Jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qr(n,a)}}function Kp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Zl(n,i,a,c){var d=n.updateQueue;ri=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,z=P.next;P.next=null,_===null?m=z:_.next=z,_=P;var K=n.alternate;K!==null&&(K=K.updateQueue,A=K.lastBaseUpdate,A!==_&&(A===null?K.firstBaseUpdate=z:A.next=z,K.lastBaseUpdate=P))}if(m!==null){var X=d.baseState;_=0,K=z=P=null,A=m;do{var G=A.lane,ne=A.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=n,he=A;switch(G=i,ne=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){X=ue.call(ne,X,G);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,G=typeof ue=="function"?ue.call(ne,X,G):ue,G==null)break e;X=se({},X,G);break e;case 2:ri=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[A]:G.push(A))}else ne={eventTime:ne,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},K===null?(z=K=ne,P=X):K=K.next=ne,_|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;G=A,A=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=X),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ss|=_,n.lanes=_,n.memoizedState=X}}function Xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var _a={},er=ei(_a),wa=ei(_a),Ea=ei(_a);function rs(n){if(n===_a)throw Error(t(174));return n}function Ih(n,i){switch(He(Ea,i),He(wa,n),He(er,_a),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:dt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=dt(i,n)}Qe(er),He(er,i)}function lo(){Qe(er),Qe(wa),Qe(Ea)}function Yp(n){rs(Ea.current);var i=rs(er.current),a=dt(i,n.type);i!==a&&(He(wa,n),He(er,a))}function Sh(n){wa.current===n&&(Qe(er),Qe(wa))}var Je=ei(0);function eu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ah=[];function Ch(){for(var n=0;n<Ah.length;n++)Ah[n]._workInProgressVersionPrimary=null;Ah.length=0}var tu=le.ReactCurrentDispatcher,Rh=le.ReactCurrentBatchConfig,is=0,Ze=null,pt=null,Et=null,nu=!1,Ta=!1,Ia=0,p0=0;function Ot(){throw Error(t(321))}function Ph(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!On(n[a],i[a]))return!1;return!0}function kh(n,i,a,c,d,m){if(is=m,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tu.current=n===null||n.memoizedState===null?v0:_0,n=a(c,d),Ta){m=0;do{if(Ta=!1,Ia=0,25<=m)throw Error(t(301));m+=1,Et=pt=null,i.updateQueue=null,tu.current=w0,n=a(c,d)}while(Ta)}if(tu.current=su,i=pt!==null&&pt.next!==null,is=0,Et=pt=Ze=null,nu=!1,i)throw Error(t(300));return n}function xh(){var n=Ia!==0;return Ia=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function En(){if(pt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function Sa(n,i){return typeof i=="function"?i(n):i}function Nh(n){var i=En(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var A=_=null,P=null,z=m;do{var K=z.lane;if((is&K)===K)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var X={lane:K,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(A=P=X,_=c):P=P.next=X,Ze.lanes|=K,ss|=K}z=z.next}while(z!==null&&z!==m);P===null?_=c:P.next=A,On(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,ss|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Dh(n){var i=En(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);On(m,i.memoizedState)||(Jt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Jp(){}function Zp(n,i){var a=Ze,c=En(),d=i(),m=!On(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,Vh(nm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Aa(9,tm.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(is&30)!==0||em(a,i,d)}return d}function em(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function tm(n,i,a,c){i.value=a,i.getSnapshot=c,rm(i)&&im(n)}function nm(n,i,a){return a(function(){rm(i)&&im(n)})}function rm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!On(n,a)}catch{return!0}}function im(n){var i=kr(n,1);i!==null&&jn(i,n,1,-1)}function sm(n){var i=tr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=y0.bind(null,Ze,n),[i.memoizedState,n]}function Aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function om(){return En().memoizedState}function ru(n,i,a,c){var d=tr();Ze.flags|=n,d.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function iu(n,i,a,c){var d=En();c=c===void 0?null:c;var m=void 0;if(pt!==null){var _=pt.memoizedState;if(m=_.destroy,c!==null&&Ph(c,_.deps)){d.memoizedState=Aa(i,a,m,c);return}}Ze.flags|=n,d.memoizedState=Aa(1|i,a,m,c)}function am(n,i){return ru(8390656,8,n,i)}function Vh(n,i){return iu(2048,8,n,i)}function lm(n,i){return iu(4,2,n,i)}function um(n,i){return iu(4,4,n,i)}function cm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hm(n,i,a){return a=a!=null?a.concat([n]):null,iu(4,4,cm.bind(null,i,n),a)}function bh(){}function dm(n,i){var a=En();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ph(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function fm(n,i){var a=En();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ph(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function pm(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(On(a,i)||(a=Qi(),Ze.lanes|=a,ss|=a,n.baseState=!0),i)}function m0(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=Rh.transition;Rh.transition={};try{n(!1),i()}finally{Ne=a,Rh.transition=c}}function mm(){return En().memoizedState}function g0(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},gm(n))ym(i,a);else if(a=Qp(n,i,a,c),a!==null){var d=Ht();jn(a,n,c,d),vm(a,i,c)}}function y0(n,i,a){var c=li(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(gm(n))ym(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,A=m(_,a);if(d.hasEagerState=!0,d.eagerState=A,On(A,_)){var P=i.interleaved;P===null?(d.next=d,Eh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Qp(n,i,d,c),a!==null&&(d=Ht(),jn(a,n,c,d),vm(a,i,c))}}function gm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function ym(n,i){Ta=nu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function vm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qr(n,a)}}var su={readContext:wn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},v0={readContext:wn,useCallback:function(n,i){return tr().memoizedState=[n,i===void 0?null:i],n},useContext:wn,useEffect:am,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ru(4194308,4,cm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ru(4194308,4,n,i)},useInsertionEffect:function(n,i){return ru(4,2,n,i)},useMemo:function(n,i){var a=tr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=tr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=g0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=tr();return n={current:n},i.memoizedState=n},useState:sm,useDebugValue:bh,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=sm(!1),i=n[0];return n=m0.bind(null,n[1]),tr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=tr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(is&30)!==0||em(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,am(nm.bind(null,c,m,n),[n]),c.flags|=2048,Aa(9,tm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=tr(),i=Tt.identifierPrefix;if(Ye){var a=Pr,c=Rr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=p0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},_0={readContext:wn,useCallback:dm,useContext:wn,useEffect:Vh,useImperativeHandle:hm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:fm,useReducer:Nh,useRef:om,useState:function(){return Nh(Sa)},useDebugValue:bh,useDeferredValue:function(n){var i=En();return pm(i,pt.memoizedState,n)},useTransition:function(){var n=Nh(Sa)[0],i=En().memoizedState;return[n,i]},useMutableSource:Jp,useSyncExternalStore:Zp,useId:mm,unstable_isNewReconciler:!1},w0={readContext:wn,useCallback:dm,useContext:wn,useEffect:Vh,useImperativeHandle:hm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:fm,useReducer:Dh,useRef:om,useState:function(){return Dh(Sa)},useDebugValue:bh,useDeferredValue:function(n){var i=En();return pt===null?i.memoizedState=n:pm(i,pt.memoizedState,n)},useTransition:function(){var n=Dh(Sa)[0],i=En().memoizedState;return[n,i]},useMutableSource:Jp,useSyncExternalStore:Zp,useId:mm,unstable_isNewReconciler:!1};function Mn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Oh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ou={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=li(n),m=xr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ii(n,m,d),i!==null&&(jn(i,n,d,c),Jl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=li(n),m=xr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ii(n,m,d),i!==null&&(jn(i,n,d,c),Jl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=li(n),d=xr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ii(n,d,c),i!==null&&(jn(i,n,c,a),Jl(i,n,c))}};function _m(n,i,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!ha(a,c)||!ha(d,m):!0}function wm(n,i,a){var c=!1,d=ti,m=i.contextType;return typeof m=="object"&&m!==null?m=wn(m):(d=Yt(i)?Zi:bt.current,c=i.contextTypes,m=(c=c!=null)?to(n,d):ti),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Em(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ou.enqueueReplaceState(i,i.state,null)}function Lh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Th(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=wn(m):(m=Yt(i)?Zi:bt.current,d.context=to(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Oh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ou.enqueueReplaceState(d,d.state,null),Zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function uo(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Mh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Fh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var E0=typeof WeakMap=="function"?WeakMap:Map;function Tm(n,i,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){fu||(fu=!0,Zh=c),Fh(n,i)},a}function Im(n,i,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Fh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Fh(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Sm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new E0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=O0.bind(null,n,i,a),i.then(n,n))}function Am(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var T0=le.ReactCurrentOwner,Jt=!1;function qt(n,i,a,c){i.child=n===null?Wp(i,null,a,c):so(i,n.child,a,c)}function Rm(n,i,a,c,d){a=a.render;var m=i.ref;return ao(i,d),c=kh(n,i,a,c,m,d),a=xh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Nr(n,i,d)):(Ye&&a&&dh(i),i.flags|=1,qt(n,i,c,d),i.child)}function Pm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!od(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,km(n,i,m,c,d)):(n=_u(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(_,c)&&n.ref===i.ref)return Nr(n,i,d)}return i.flags|=1,n=ci(m,c),n.ref=i.ref,n.return=i,i.child=n}function km(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ha(m,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return i.lanes=n.lanes,Nr(n,i,d)}return Uh(n,i,a,c,d)}function xm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(ho,dn),dn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(ho,dn),dn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(ho,dn),dn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,He(ho,dn),dn|=c;return qt(n,i,d,a),i.child}function Nm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Uh(n,i,a,c,d){var m=Yt(a)?Zi:bt.current;return m=to(i,m),ao(i,d),a=kh(n,i,a,c,m,d),c=xh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Nr(n,i,d)):(Ye&&c&&dh(i),i.flags|=1,qt(n,i,a,d),i.child)}function Dm(n,i,a,c,d){if(Yt(a)){var m=!0;ql(i)}else m=!1;if(ao(i,d),i.stateNode===null)lu(n,i),wm(i,a,c),Lh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,A=i.memoizedProps;_.props=A;var P=_.context,z=a.contextType;typeof z=="object"&&z!==null?z=wn(z):(z=Yt(a)?Zi:bt.current,z=to(i,z));var K=a.getDerivedStateFromProps,X=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==c||P!==z)&&Em(i,_,c,z),ri=!1;var G=i.memoizedState;_.state=G,Zl(i,c,_,d),P=i.memoizedState,A!==c||G!==P||Xt.current||ri?(typeof K=="function"&&(Oh(i,a,K,c),P=i.memoizedState),(A=ri||_m(i,a,A,c,G,P,z))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),_.props=c,_.state=P,_.context=z,c=A):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,Gp(n,i),A=i.memoizedProps,z=i.type===i.elementType?A:Mn(i.type,A),_.props=z,X=i.pendingProps,G=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=wn(P):(P=Yt(a)?Zi:bt.current,P=to(i,P));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==X||G!==P)&&Em(i,_,c,P),ri=!1,G=i.memoizedState,_.state=G,Zl(i,c,_,d);var ue=i.memoizedState;A!==X||G!==ue||Xt.current||ri?(typeof ne=="function"&&(Oh(i,a,ne,c),ue=i.memoizedState),(z=ri||_m(i,a,z,c,G,ue,P)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ue,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ue,P)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),_.props=c,_.state=ue,_.context=P,c=z):(typeof _.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return jh(n,i,a,c,m,d)}function jh(n,i,a,c,d,m){Nm(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&Mp(i,a,!1),Nr(n,i,m);c=i.stateNode,T0.current=i;var A=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=so(i,n.child,null,m),i.child=so(i,null,A,m)):qt(n,i,A,m),i.memoizedState=c.state,d&&Mp(i,a,!0),i.child}function Vm(n){var i=n.stateNode;i.pendingContext?Op(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Op(n,i.context,!1),Ih(n,i.containerInfo)}function bm(n,i,a,c,d){return io(),gh(d),i.flags|=256,qt(n,i,a,c),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Om(n,i,a){var c=i.pendingProps,d=Je.current,m=!1,_=(i.flags&128)!==0,A;if((A=_)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return mh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=wu(_,c,0,null),n=us(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Bh(a),i.memoizedState=zh,n):$h(i,_));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return I0(n,i,_,c,A,d,a);if(m){m=c.fallback,_=i.mode,d=n.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?m=ci(A,m):(m=us(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?Bh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=zh,c}return m=n.child,n=m.sibling,c=ci(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function $h(n,i){return i=wu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function au(n,i,a,c){return c!==null&&gh(c),so(i,n.child,null,a),n=$h(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function I0(n,i,a,c,d,m,_){if(a)return i.flags&256?(i.flags&=-257,c=Mh(Error(t(422))),au(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=wu({mode:"visible",children:c.children},d,0,null),m=us(m,d,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&so(i,n.child,null,_),i.child.memoizedState=Bh(_),i.memoizedState=zh,m);if((i.mode&1)===0)return au(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Mh(m,c,void 0),au(n,i,_,c)}if(A=(_&n.childLanes)!==0,Jt||A){if(c=Tt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,kr(n,d),jn(c,n,d,-1))}return sd(),c=Mh(Error(t(421))),au(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=L0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,hn=Zr(d.nextSibling),cn=i,Ye=!0,Ln=null,n!==null&&(vn[_n++]=Rr,vn[_n++]=Pr,vn[_n++]=es,Rr=n.id,Pr=n.overflow,es=i),i=$h(i,c.children),i.flags|=4096,i)}function Lm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),wh(n.return,i,a)}function qh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Mm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lm(n,a,i);else if(n.tag===19)Lm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&eu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),qh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&eu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}qh(i,!0,a,null,m);break;case"together":qh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function lu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Nr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ss|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function S0(n,i,a){switch(i.tag){case 3:Vm(i),io();break;case 5:Yp(i);break;case 1:Yt(i.type)&&ql(i);break;case 4:Ih(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Xl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Om(n,i,a):(He(Je,Je.current&1),n=Nr(n,i,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Mm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,xm(n,i,a)}return Nr(n,i,a)}var Fm,Hh,Um,jm;Fm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Hh=function(){},Um=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,rs(er.current);var m=null;switch(a){case"input":d=Li(n,d),c=Li(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=jo(n,d),c=jo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=zl)}Wo(a,c);var _;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(_ in A)A.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in c){var P=c[z];if(A=d?.[z],c.hasOwnProperty(z)&&P!==A&&(P!=null||A!=null))if(z==="style")if(A){for(_ in A)!A.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&A[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(m||(m=[]),m.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(m=m||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&We("scroll",n),m||A===P||(m=[])):(m=m||[]).push(z,P))}a&&(m=m||[]).push("style",a);var z=m;(i.updateQueue=z)&&(i.flags|=4)}},jm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ca(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function A0(n,i,a){var c=i.pendingProps;switch(fh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Yt(i.type)&&$l(),Lt(i),null;case 3:return c=i.stateNode,lo(),Qe(Xt),Qe(bt),Ch(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ln!==null&&(nd(Ln),Ln=null))),Hh(n,i),Lt(i),null;case 5:Sh(i);var d=rs(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)Um(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=rs(er.current),Gl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Zn]=i,c[ga]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<fa.length;d++)We(fa[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Is(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":As(c,m),We("invalid",c)}Wo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var A=m[_];_==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&jl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&jl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(_)&&A!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":mr(c),dl(c,m,!0);break;case"textarea":mr(c),zo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=zl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Zn]=i,n[ga]=c,Fm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Qo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<fa.length;d++)We(fa[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Is(n,c),d=Li(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),We("invalid",n);break;case"textarea":As(n,c),d=jo(n,c),We("invalid",n);break;default:d=c}Wo(a,d),A=d;for(m in A)if(A.hasOwnProperty(m)){var P=A[m];m==="style"?qo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Bo(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Br(n,P):typeof P=="number"&&Br(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&We("scroll",n):P!=null&&te(n,m,P,_))}switch(a){case"input":mr(n),dl(n,c,!1);break;case"textarea":mr(n),zo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?yr(n,!!c.multiple,m,!1):c.defaultValue!=null&&yr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=zl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)jm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(Ea.current),rs(er.current),Gl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Zn]=i,(m=c.nodeValue!==a)&&(n=cn,n!==null))switch(n.tag){case 3:jl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Qe(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$p(),io(),i.flags|=98560,m=!1;else if(m=Gl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Zn]=i}else io(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else Ln!==null&&(nd(Ln),Ln=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?mt===0&&(mt=3):sd())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return lo(),Hh(n,i),n===null&&pa(i.stateNode.containerInfo),Lt(i),null;case 10:return _h(i.type._context),Lt(i),null;case 17:return Yt(i.type)&&$l(),Lt(i),null;case 19:if(Qe(Je),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)Ca(m,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=eu(n),_!==null){for(i.flags|=128,Ca(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),i.child}n=n.sibling}m.tail!==null&&qe()>fo&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304)}else{if(!c)if(n=eu(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Ye)return Lt(i),null}else 2*qe()-m.renderingStartTime>fo&&a!==1073741824&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qe(),i.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return id(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(dn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function C0(n,i){switch(fh(i),i.tag){case 1:return Yt(i.type)&&$l(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return lo(),Qe(Xt),Qe(bt),Ch(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Sh(i),null;case 13:if(Qe(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));io()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(Je),null;case 4:return lo(),null;case 10:return _h(i.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var uu=!1,Mt=!1,R0=typeof WeakSet=="function"?WeakSet:Set,oe=null;function co(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Wh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var zm=!1;function P0(n,i){if(ih=Xr,n=_p(),Xc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,A=-1,P=-1,z=0,K=0,X=n,G=null;t:for(;;){for(var ne;X!==a||d!==0&&X.nodeType!==3||(A=_+d),X!==m||c!==0&&X.nodeType!==3||(P=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(ne=X.firstChild)!==null;)G=X,X=ne;for(;;){if(X===n)break t;if(G===a&&++z===d&&(A=_),G===m&&++K===c&&(P=_),(ne=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=ne}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:n,selectionRange:a},Xr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,it=ue.memoizedState,L=i.stateNode,N=L.getSnapshotBeforeUpdate(i.elementType===i.type?he:Mn(i.type,he),it);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){tt(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ue=zm,zm=!1,ue}function Ra(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Wh(i,a,m)}d=d.next}while(d!==c)}}function cu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Qh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Bm(n){var i=n.alternate;i!==null&&(n.alternate=null,Bm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Zn],delete i[ga],delete i[uh],delete i[c0],delete i[h0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $m(n){return n.tag===5||n.tag===3||n.tag===4}function qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=zl));else if(c!==4&&(n=n.child,n!==null))for(Gh(n,i,a),n=n.sibling;n!==null;)Gh(n,i,a),n=n.sibling}function Kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Kh(n,i,a),n=n.sibling;n!==null;)Kh(n,i,a),n=n.sibling}var Rt=null,Fn=!1;function si(n,i,a){for(a=a.child;a!==null;)Hm(n,i,a),a=a.sibling}function Hm(n,i,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Mt||co(a,i);case 6:var c=Rt,d=Fn;Rt=null,si(n,i,a),Rt=c,Fn=d,Rt!==null&&(Fn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Fn?(n=Rt,a=a.stateNode,n.nodeType===8?lh(n.parentNode,a):n.nodeType===1&&lh(n,a),Vn(n)):lh(Rt,a.stateNode));break;case 4:c=Rt,d=Fn,Rt=a.stateNode.containerInfo,Fn=!0,si(n,i,a),Rt=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&Wh(a,i,_),d=d.next}while(d!==c)}si(n,i,a);break;case 1:if(!Mt&&(co(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,i,A)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,si(n,i,a),Mt=c):si(n,i,a);break;default:si(n,i,a)}}function Wm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new R0),i.forEach(function(c){var d=M0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=i,A=_;e:for(;A!==null;){switch(A.tag){case 5:Rt=A.stateNode,Fn=!1;break e;case 3:Rt=A.stateNode.containerInfo,Fn=!0;break e;case 4:Rt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Rt===null)throw Error(t(160));Hm(m,_,d),Rt=null,Fn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){tt(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qm(i,n),i=i.sibling}function Qm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(i,n),nr(n),c&4){try{Ra(3,n,n.return),cu(3,n)}catch(he){tt(n,n.return,he)}try{Ra(5,n,n.return)}catch(he){tt(n,n.return,he)}}break;case 1:Un(i,n),nr(n),c&512&&a!==null&&co(a,a.return);break;case 5:if(Un(i,n),nr(n),c&512&&a!==null&&co(a,a.return),n.flags&32){var d=n.stateNode;try{Br(d,"")}catch(he){tt(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,A=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Fo(d,m),Qo(A,_);var z=Qo(A,m);for(_=0;_<P.length;_+=2){var K=P[_],X=P[_+1];K==="style"?qo(d,X):K==="dangerouslySetInnerHTML"?Bo(d,X):K==="children"?Br(d,X):te(d,K,X,z)}switch(A){case"input":Uo(d,m);break;case"textarea":Cs(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?yr(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?yr(d,!!m.multiple,m.defaultValue,!0):yr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ga]=m}catch(he){tt(n,n.return,he)}}break;case 6:if(Un(i,n),nr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(he){tt(n,n.return,he)}}break;case 3:if(Un(i,n),nr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(i.containerInfo)}catch(he){tt(n,n.return,he)}break;case 4:Un(i,n),nr(n);break;case 13:Un(i,n),nr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Jh=qe())),c&4&&Wm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(z=Mt)||K,Un(i,n),Mt=z):Un(i,n),nr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!K&&(n.mode&1)!==0)for(oe=n,K=n.child;K!==null;){for(X=oe=K;oe!==null;){switch(G=oe,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Ra(4,G,G.return);break;case 1:co(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(he){tt(c,a,he)}}break;case 5:co(G,G.return);break;case 22:if(G.memoizedState!==null){Xm(X);continue}}ne!==null?(ne.return=G,oe=ne):Xm(X)}K=K.sibling}e:for(K=null,X=n;;){if(X.tag===5){if(K===null){K=X;try{d=X.stateNode,z?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=X.stateNode,P=X.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=$o("display",_))}catch(he){tt(n,n.return,he)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(he){tt(n,n.return,he)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Un(i,n),nr(n),c&4&&Wm(n);break;case 21:break;default:Un(i,n),nr(n)}}function nr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if($m(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Br(d,""),c.flags&=-33);var m=qm(n);Kh(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,A=qm(n);Gh(n,A,_);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function k0(n,i,a){oe=n,Gm(n)}function Gm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||uu;if(!_){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Mt;A=uu;var z=Mt;if(uu=_,(Mt=P)&&!z)for(oe=d;oe!==null;)_=oe,P=_.child,_.tag===22&&_.memoizedState!==null?Ym(d):P!==null?(P.return=_,oe=P):Ym(d);for(;m!==null;)oe=m,Gm(m),m=m.sibling;oe=d,uu=A,Mt=z}Km(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,oe=m):Km(n)}}function Km(n){for(;oe!==null;){var i=oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||cu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xp(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xp(i,_,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var K=z.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&Vn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Qh(i)}catch(G){tt(i,i.return,G)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Xm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Ym(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{cu(4,i)}catch(P){tt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){tt(i,d,P)}}var m=i.return;try{Qh(i)}catch(P){tt(i,m,P)}break;case 5:var _=i.return;try{Qh(i)}catch(P){tt(i,_,P)}}}catch(P){tt(i,i.return,P)}if(i===n){oe=null;break}var A=i.sibling;if(A!==null){A.return=i.return,oe=A;break}oe=i.return}}var x0=Math.ceil,hu=le.ReactCurrentDispatcher,Xh=le.ReactCurrentOwner,Tn=le.ReactCurrentBatchConfig,Oe=0,Tt=null,lt=null,Pt=0,dn=0,ho=ei(0),mt=0,Pa=null,ss=0,du=0,Yh=0,ka=null,Zt=null,Jh=0,fo=1/0,Dr=null,fu=!1,Zh=null,oi=null,pu=!1,ai=null,mu=0,xa=0,ed=null,gu=-1,yu=0;function Ht(){return(Oe&6)!==0?qe():gu!==-1?gu:gu=qe()}function li(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Pt!==0?Pt&-Pt:f0.transition!==null?(yu===0&&(yu=Qi()),yu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ia(n.type)),n)}function jn(n,i,a,c){if(50<xa)throw xa=0,ed=null,Error(t(185));Wr(n,a,c),((Oe&2)===0||n!==Tt)&&(n===Tt&&((Oe&2)===0&&(du|=a),mt===4&&ui(n,Pt)),en(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(fo=qe()+500,Hl&&ni()))}function en(n,i){var a=n.callbackNode;wr(n,i);var c=Wi(n,n===Tt?Pt:0);if(c===0)a!==null&&Zo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Zo(a),i===1)n.tag===0?d0(Zm.bind(null,n)):Fp(Zm.bind(null,n)),l0(function(){(Oe&6)===0&&ni()}),a=null;else{switch(Gr(c)){case 1:a=qi;break;case 4:a=$r;break;case 16:a=mn;break;case 536870912:a=yl;break;default:a=mn}a=ag(a,Jm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Jm(n,i){if(gu=-1,yu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(po()&&n.callbackNode!==a)return null;var c=Wi(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=vu(n,c);else{i=c;var d=Oe;Oe|=2;var m=tg();(Tt!==n||Pt!==i)&&(Dr=null,fo=qe()+500,as(n,i));do try{V0();break}catch(A){eg(n,A)}while(!0);vh(),hu.current=m,Oe=d,lt!==null?i=0:(Tt=null,Pt=0,i=mt)}if(i!==0){if(i===2&&(d=an(n),d!==0&&(c=d,i=td(n,d))),i===1)throw a=Pa,as(n,0),ui(n,c),en(n,qe()),a;if(i===6)ui(n,c);else{if(d=n.current.alternate,(c&30)===0&&!N0(d)&&(i=vu(n,c),i===2&&(m=an(n),m!==0&&(c=m,i=td(n,m))),i===1))throw a=Pa,as(n,0),ui(n,c),en(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ls(n,Zt,Dr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=Jh+500-qe(),10<i)){if(Wi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ah(ls.bind(null,n,Zt,Dr),i);break}ls(n,Zt,Dr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Bt(c);m=1<<_,_=i[_],_>d&&(d=_),c&=~m}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*x0(c/1960))-c,10<c){n.timeoutHandle=ah(ls.bind(null,n,Zt,Dr),c);break}ls(n,Zt,Dr);break;case 5:ls(n,Zt,Dr);break;default:throw Error(t(329))}}}return en(n,qe()),n.callbackNode===a?Jm.bind(null,n):null}function td(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(as(n,i).flags|=256),n=vu(n,i),n!==2&&(i=Zt,Zt=a,i!==null&&nd(i)),n}function nd(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function N0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!On(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~Yh,i&=~du,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function Zm(n){if((Oe&6)!==0)throw Error(t(327));po();var i=Wi(n,0);if((i&1)===0)return en(n,qe()),null;var a=vu(n,i);if(n.tag!==0&&a===2){var c=an(n);c!==0&&(i=c,a=td(n,c))}if(a===1)throw a=Pa,as(n,0),ui(n,i),en(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ls(n,Zt,Dr),en(n,qe()),null}function rd(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(fo=qe()+500,Hl&&ni())}}function os(n){ai!==null&&ai.tag===0&&(Oe&6)===0&&po();var i=Oe;Oe|=1;var a=Tn.transition,c=Ne;try{if(Tn.transition=null,Ne=1,n)return n()}finally{Ne=c,Tn.transition=a,Oe=i,(Oe&6)===0&&ni()}}function id(){dn=ho.current,Qe(ho)}function as(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,a0(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(fh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&$l();break;case 3:lo(),Qe(Xt),Qe(bt),Ch();break;case 5:Sh(c);break;case 4:lo();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:_h(c.type._context);break;case 22:case 23:id()}a=a.return}if(Tt=n,lt=n=ci(n.current,null),Pt=dn=i,mt=0,Pa=null,Yh=du=ss=0,Zt=ka=null,ns!==null){for(i=0;i<ns.length;i++)if(a=ns[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}ns=null}return n}function eg(n,i){do{var a=lt;try{if(vh(),tu.current=su,nu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}nu=!1}if(is=0,Et=pt=Ze=null,Ta=!1,Ia=0,Xh.current=null,a===null||a.return===null){mt=1,Pa=i,lt=null;break}e:{var m=n,_=a.return,A=a,P=i;if(i=Pt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,K=A,X=K.tag;if((K.mode&1)===0&&(X===0||X===11||X===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Am(_);if(ne!==null){ne.flags&=-257,Cm(ne,_,A,m,i),ne.mode&1&&Sm(m,z,i),i=ne,P=z;var ue=i.updateQueue;if(ue===null){var he=new Set;he.add(P),i.updateQueue=he}else ue.add(P);break e}else{if((i&1)===0){Sm(m,z,i),sd();break e}P=Error(t(426))}}else if(Ye&&A.mode&1){var it=Am(_);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Cm(it,_,A,m,i),gh(uo(P,A));break e}}m=P=uo(P,A),mt!==4&&(mt=2),ka===null?ka=[m]:ka.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var L=Tm(m,P,i);Kp(m,L);break e;case 1:A=P;var N=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(oi===null||!oi.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var J=Im(m,A,i);Kp(m,J);break e}}m=m.return}while(m!==null)}rg(a)}catch(de){i=de,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function tg(){var n=hu.current;return hu.current=su,n===null?su:n}function sd(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||(ss&268435455)===0&&(du&268435455)===0||ui(Tt,Pt)}function vu(n,i){var a=Oe;Oe|=2;var c=tg();(Tt!==n||Pt!==i)&&(Dr=null,as(n,i));do try{D0();break}catch(d){eg(n,d)}while(!0);if(vh(),Oe=a,hu.current=c,lt!==null)throw Error(t(261));return Tt=null,Pt=0,mt}function D0(){for(;lt!==null;)ng(lt)}function V0(){for(;lt!==null&&!ml();)ng(lt)}function ng(n){var i=og(n.alternate,n,dn);n.memoizedProps=n.pendingProps,i===null?rg(n):lt=i,Xh.current=null}function rg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=A0(a,i,dn),a!==null){lt=a;return}}else{if(a=C0(a,i),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,lt=null;return}}if(i=i.sibling,i!==null){lt=i;return}lt=i=n}while(i!==null);mt===0&&(mt=5)}function ls(n,i,a){var c=Ne,d=Tn.transition;try{Tn.transition=null,Ne=1,b0(n,i,a,c)}finally{Tn.transition=d,Ne=c}return null}function b0(n,i,a,c){do po();while(ai!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Be(n,m),n===Tt&&(lt=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pu||(pu=!0,ag(mn,function(){return po(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Tn.transition,Tn.transition=null;var _=Ne;Ne=1;var A=Oe;Oe|=4,Xh.current=null,P0(n,a),Qm(a,n),e0(sh),Xr=!!ih,sh=ih=null,n.current=a,k0(a),Bc(),Oe=A,Ne=_,Tn.transition=m}else n.current=a;if(pu&&(pu=!1,ai=n,mu=d),m=n.pendingLanes,m===0&&(oi=null),vl(a.stateNode),en(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(fu)throw fu=!1,n=Zh,Zh=null,n;return(mu&1)!==0&&n.tag!==0&&po(),m=n.pendingLanes,(m&1)!==0?n===ed?xa++:(xa=0,ed=n):xa=0,ni(),null}function po(){if(ai!==null){var n=Gr(mu),i=Tn.transition,a=Ne;try{if(Tn.transition=null,Ne=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,mu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,oe=n.current;oe!==null;){var m=oe,_=m.child;if((oe.flags&16)!==0){var A=m.deletions;if(A!==null){for(var P=0;P<A.length;P++){var z=A[P];for(oe=z;oe!==null;){var K=oe;switch(K.tag){case 0:case 11:case 15:Ra(8,K,m)}var X=K.child;if(X!==null)X.return=K,oe=X;else for(;oe!==null;){K=oe;var G=K.sibling,ne=K.return;if(Bm(K),K===z){oe=null;break}if(G!==null){G.return=ne,oe=G;break}oe=ne}}}var ue=m.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var it=he.sibling;he.sibling=null,he=it}while(he!==null)}}oe=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,oe=_;else e:for(;oe!==null;){if(m=oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ra(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,oe=L;break e}oe=m.return}}var N=n.current;for(oe=N;oe!==null;){_=oe;var U=_.child;if((_.subtreeFlags&2064)!==0&&U!==null)U.return=_,oe=U;else e:for(_=N;oe!==null;){if(A=oe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:cu(9,A)}}catch(de){tt(A,A.return,de)}if(A===_){oe=null;break e}var J=A.sibling;if(J!==null){J.return=A.return,oe=J;break e}oe=A.return}}if(Oe=d,ni(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Hi,n)}catch{}c=!0}return c}finally{Ne=a,Tn.transition=i}}return!1}function ig(n,i,a){i=uo(a,i),i=Tm(n,i,1),n=ii(n,i,1),i=Ht(),n!==null&&(Wr(n,1,i),en(n,i))}function tt(n,i,a){if(n.tag===3)ig(n,n,a);else for(;i!==null;){if(i.tag===3){ig(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=uo(a,n),n=Im(i,n,1),i=ii(i,n,1),n=Ht(),i!==null&&(Wr(i,1,n),en(i,n));break}}i=i.return}}function O0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>qe()-Jh?as(n,0):Yh|=a),en(n,i)}function sg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ls,Ls<<=1,(Ls&130023424)===0&&(Ls=4194304)));var a=Ht();n=kr(n,i),n!==null&&(Wr(n,i,a),en(n,a))}function L0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),sg(n,a)}function M0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),sg(n,a)}var og;og=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Xt.current)Jt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jt=!1,S0(n,i,a);Jt=(n.flags&131072)!==0}else Jt=!1,Ye&&(i.flags&1048576)!==0&&Up(i,Ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;lu(n,i),n=i.pendingProps;var d=to(i,bt.current);ao(i,a),d=kh(null,i,c,n,d,a);var m=xh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(m=!0,ql(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Th(i),d.updater=ou,i.stateNode=d,d._reactInternals=i,Lh(i,c,n,a),i=jh(null,i,c,!0,m,a)):(i.tag=0,Ye&&m&&dh(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(lu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=U0(c),n=Mn(c,n),d){case 0:i=Uh(null,i,c,n,a);break e;case 1:i=Dm(null,i,c,n,a);break e;case 11:i=Rm(null,i,c,n,a);break e;case 14:i=Pm(null,i,c,Mn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Uh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Dm(n,i,c,d,a);case 3:e:{if(Vm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Gp(n,i),Zl(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=uo(Error(t(423)),i),i=bm(n,i,c,a,d);break e}else if(c!==d){d=uo(Error(t(424)),i),i=bm(n,i,c,a,d);break e}else for(hn=Zr(i.stateNode.containerInfo.firstChild),cn=i,Ye=!0,Ln=null,a=Wp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),c===d){i=Nr(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Yp(i),n===null&&mh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,oh(c,d)?_=null:m!==null&&oh(c,m)&&(i.flags|=32),Nm(n,i),qt(n,i,_,a),i.child;case 6:return n===null&&mh(i),null;case 13:return Om(n,i,a);case 4:return Ih(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=so(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),Rm(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,_=d.value,He(Xl,c._currentValue),c._currentValue=_,m!==null)if(On(m.value,_)){if(m.children===d.children&&!Xt.current){i=Nr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var A=m.dependencies;if(A!==null){_=m.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=xr(-1,a&-a),P.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var K=z.pending;K===null?P.next=P:(P.next=K.next,K.next=P),z.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),wh(m.return,a,i),A.lanes|=a;break}P=P.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,A=_.alternate,A!==null&&(A.lanes|=a),wh(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ao(i,a),d=wn(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=Mn(c,i.pendingProps),d=Mn(c.type,d),Pm(n,i,c,d,a);case 15:return km(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),lu(n,i),i.tag=1,Yt(c)?(n=!0,ql(i)):n=!1,ao(i,a),wm(i,c,d),Lh(i,c,d,a),jh(null,i,c,!0,n,a);case 19:return Mm(n,i,a);case 22:return xm(n,i,a)}throw Error(t(156,i.tag))};function ag(n,i){return bs(n,i)}function F0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,i,a,c){return new F0(n,i,a,c)}function od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function U0(n){if(typeof n=="function")return od(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===Dt)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=In(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,i,a,c,d,m){var _=2;if(c=n,typeof n=="function")od(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return us(a.children,d,m,i);case S:_=8,d|=8;break;case R:return n=In(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case C:return n=In(13,a,i,d),n.elementType=C,n.lanes=m,n;case nt:return n=In(19,a,i,d),n.elementType=nt,n.lanes=m,n;case ze:return wu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case D:_=9;break e;case b:_=11;break e;case Dt:_=14;break e;case Vt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=In(_,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function us(n,i,a,c){return n=In(7,n,c,i),n.lanes=a,n}function wu(n,i,a,c){return n=In(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function ad(n,i,a){return n=In(6,n,null,i),n.lanes=a,n}function ld(n,i,a){return i=In(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function j0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ud(n,i,a,c,d,m,_,A,P){return n=new j0(n,i,a,A,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=In(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(m),n}function z0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function lg(n){if(!n)return ti;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Lp(n,a,i)}return i}function ug(n,i,a,c,d,m,_,A,P){return n=ud(a,c,!0,n,d,m,_,A,P),n.context=lg(null),a=n.current,c=Ht(),d=li(a),m=xr(c,d),m.callback=i??null,ii(a,m,d),n.current.lanes=d,Wr(n,d,c),en(n,c),n}function Eu(n,i,a,c){var d=i.current,m=Ht(),_=li(d);return a=lg(a),i.context===null?i.context=a:i.pendingContext=a,i=xr(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(d,i,_),n!==null&&(jn(n,d,_,m),Jl(n,d,_)),_}function Tu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function cd(n,i){cg(n,i),(n=n.alternate)&&cg(n,i)}function B0(){return null}var hg=typeof reportError=="function"?reportError:function(n){console.error(n)};function hd(n){this._internalRoot=n}Iu.prototype.render=hd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Eu(n,i,null,null)},Iu.prototype.unmount=hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){Eu(null,n,null,null)}),i[Ar]=null}};function Iu(n){this._internalRoot=n}Iu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Il();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Kn.length&&i!==0&&i<Kn[a].priority;a++);Kn.splice(a,0,n),a===0&&Cl(n)}};function dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dg(){}function $0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var z=Tu(_);m.call(z)}}var _=ug(i,c,n,0,null,!1,!1,"",dg);return n._reactRootContainer=_,n[Ar]=_.current,pa(n.nodeType===8?n.parentNode:n),os(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=Tu(P);A.call(z)}}var P=ud(n,0,!1,null,null,!1,!1,"",dg);return n._reactRootContainer=P,n[Ar]=P.current,pa(n.nodeType===8?n.parentNode:n),os(function(){Eu(i,P,a,c)}),P}function Au(n,i,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var A=d;d=function(){var P=Tu(_);A.call(P)}}Eu(i,_,n,d)}else _=$0(a,i,n,d,c);return Tu(_)}El=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=qr(i.pendingLanes);a!==0&&(Qr(i,a|1),en(i,qe()),(Oe&6)===0&&(fo=qe()+500,ni()))}break;case 13:os(function(){var c=kr(n,1);if(c!==null){var d=Ht();jn(c,n,1,d)}}),cd(n,1)}},Ms=function(n){if(n.tag===13){var i=kr(n,134217728);if(i!==null){var a=Ht();jn(i,n,134217728,a)}cd(n,134217728)}},Tl=function(n){if(n.tag===13){var i=li(n),a=kr(n,i);if(a!==null){var c=Ht();jn(a,n,i,c)}cd(n,i)}},Il=function(){return Ne},Sl=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},Ps=function(n,i,a){switch(i){case"input":if(Uo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Bl(c);if(!d)throw Error(t(90));Ts(c),Uo(c,d)}}}break;case"textarea":Cs(n,a);break;case"select":i=a.value,i!=null&&yr(n,!!a.multiple,i,!1)}},ji=rd,Ko=os;var q0={usingClientEntryPoint:!1,Events:[ya,Zs,Bl,Qn,Go,rd]},Na={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H0={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jo(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Hi=Cu.inject(H0),on=Cu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0,tn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(i))throw Error(t(200));return z0(n,i,null,a)},tn.createRoot=function(n,i){if(!dd(n))throw Error(t(299));var a=!1,c="",d=hg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ud(n,1,!1,null,null,a,!1,c,d),n[Ar]=i.current,pa(n.nodeType===8?n.parentNode:n),new hd(i)},tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jo(i),n=n===null?null:n.stateNode,n},tn.flushSync=function(n){return os(n)},tn.hydrate=function(n,i,a){if(!Su(i))throw Error(t(200));return Au(null,n,i,!0,a)},tn.hydrateRoot=function(n,i,a){if(!dd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=hg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=ug(i,null,n,1,a??null,d,!1,m,_),n[Ar]=i.current,pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Iu(i)},tn.render=function(n,i,a){if(!Su(i))throw Error(t(200));return Au(null,n,i,!1,a)},tn.unmountComponentAtNode=function(n){if(!Su(n))throw Error(t(40));return n._reactRootContainer?(os(function(){Au(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},tn.unstable_batchedUpdates=rd,tn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Su(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Au(n,i,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var wg;function av(){if(wg)return md.exports;wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),md.exports=Z0(),md.exports}var Eg;function eE(){if(Eg)return Ru;Eg=1;var r=av();return Ru.createRoot=r.createRoot,Ru.hydrateRoot=r.hydrateRoot,Ru}var tE=eE();const nE=ov(tE);var ae=sf();const rE=ov(ae),iE=Q0({__proto__:null,default:rE},[ae]);av();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Hu.apply(this,arguments)}var gi;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(gi||(gi={}));const Tg="popstate";function sE(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:h,hash:p}=s.location;return Nd("",{pathname:l,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:uv(o)}return aE(e,t,null,r)}function sn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function lv(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oE(){return Math.random().toString(36).substr(2,8)}function Ig(r,e){return{usr:r.state,key:r.key,idx:e}}function Nd(r,e,t,s){return t===void 0&&(t=null),Hu({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?fc(e):e,{state:t,key:e&&e.key||s||oE()})}function uv(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function fc(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function aE(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,p=gi.Pop,g=null,v=w();v==null&&(v=0,h.replaceState(Hu({},h.state,{idx:v}),""));function w(){return(h.state||{idx:null}).idx}function T(){p=gi.Pop;let M=w(),re=M==null?null:M-v;v=M,g&&g({action:p,location:q.location,delta:re})}function I(M,re){p=gi.Push;let Y=Nd(q.location,M,re);v=w()+1;let te=Ig(Y,v),le=q.createHref(Y);try{h.pushState(te,"",le)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(le)}l&&g&&g({action:p,location:q.location,delta:1})}function F(M,re){p=gi.Replace;let Y=Nd(q.location,M,re);v=w();let te=Ig(Y,v),le=q.createHref(Y);h.replaceState(te,"",le),l&&g&&g({action:p,location:q.location,delta:0})}function j(M){let re=o.location.origin!=="null"?o.location.origin:o.location.href,Y=typeof M=="string"?M:uv(M);return Y=Y.replace(/ $/,"%20"),sn(re,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,re)}let q={get action(){return p},get location(){return r(o,h)},listen(M){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Tg,T),g=M,()=>{o.removeEventListener(Tg,T),g=null}},createHref(M){return e(o,M)},createURL:j,encodeLocation(M){let re=j(M);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:I,replace:F,go(M){return h.go(M)}};return q}var Sg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Sg||(Sg={}));function lE(r,e,t){return t===void 0&&(t="/"),uE(r,e,t)}function uE(r,e,t,s){let o=typeof e=="string"?fc(e):e,l=dv(o.pathname||"/",t);if(l==null)return null;let h=cv(r);cE(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let v=TE(l);p=_E(h[g],v)}return p}function cv(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,p)=>{let g={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(sn(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let v=_o([s,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(sn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),cv(l.children,e,w,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:yE(v,l.index),routesMeta:w})};return r.forEach((l,h)=>{var p;if(l.path===""||!((p=l.path)!=null&&p.includes("?")))o(l,h);else for(let g of hv(l.path))o(l,h,g)}),e}function hv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=hv(s.join("/")),p=[];return p.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&p.push(...h),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function cE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:vE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const hE=/^:[\w-]+$/,dE=3,fE=2,pE=1,mE=10,gE=-2,Ag=r=>r==="*";function yE(r,e){let t=r.split("/"),s=t.length;return t.some(Ag)&&(s+=gE),e&&(s+=fE),t.filter(o=>!Ag(o)).reduce((o,l)=>o+(hE.test(l)?dE:l===""?pE:mE),s)}function vE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function _E(r,e,t){let{routesMeta:s}=r,o={},l="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],v=p===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=wE({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},w),I=g.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:_o([l,T.pathname]),pathnameBase:IE(_o([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=_o([l,T.pathnameBase]))}return h}function wE(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=EE(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((v,w,T)=>{let{paramName:I,isOptional:F}=w;if(I==="*"){let q=p[T]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const j=p[T];return F&&!j?v[I]=void 0:v[I]=(j||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:r}}function EE(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),lv(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function TE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lv(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function dv(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}const _o=r=>r.join("/").replace(/\/\/+/g,"/"),IE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/");function SE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const fv=["post","put","patch","delete"];new Set(fv);const AE=["get",...fv];new Set(AE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Wu.apply(this,arguments)}const CE=ae.createContext(null),RE=ae.createContext(null),pv=ae.createContext(null),pc=ae.createContext(null),mc=ae.createContext({outlet:null,matches:[],isDataRoute:!1}),mv=ae.createContext(null);function of(){return ae.useContext(pc)!=null}function PE(){return of()||sn(!1),ae.useContext(pc).location}function kE(r,e){return xE(r,e)}function xE(r,e,t,s){of()||sn(!1);let{navigator:o}=ae.useContext(pv),{matches:l}=ae.useContext(mc),h=l[l.length-1],p=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let v=PE(),w;if(e){var T;let M=typeof e=="string"?fc(e):e;g==="/"||(T=M.pathname)!=null&&T.startsWith(g)||sn(!1),w=M}else w=v;let I=w.pathname||"/",F=I;if(g!=="/"){let M=g.replace(/^\//,"").split("/");F="/"+I.replace(/^\//,"").split("/").slice(M.length).join("/")}let j=lE(r,{pathname:F}),q=OE(j&&j.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:_o([g,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:_o([g,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,t,s);return e&&q?ae.createElement(pc.Provider,{value:{location:Wu({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:gi.Pop}},q):q}function NE(){let r=UE(),e=SE(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?ae.createElement("pre",{style:o},t):null,null)}const DE=ae.createElement(NE,null);class VE extends ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ae.createElement(mc.Provider,{value:this.props.routeContext},ae.createElement(mv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bE(r){let{routeContext:e,match:t,children:s}=r,o=ae.useContext(CE);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ae.createElement(mc.Provider,{value:e},s)}function OE(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,p=(o=t)==null?void 0:o.errors;if(p!=null){let w=h.findIndex(T=>T.route.id&&p?.[T.route.id]!==void 0);w>=0||sn(!1),h=h.slice(0,Math.min(h.length,w+1))}let g=!1,v=-1;if(t&&s&&s.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=w),T.route.id){let{loaderData:I,errors:F}=t,j=T.route.loader&&I[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||j){g=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((w,T,I)=>{let F,j=!1,q=null,M=null;t&&(F=p&&T.route.id?p[T.route.id]:void 0,q=T.route.errorElement||DE,g&&(v<0&&I===0?(jE("route-fallback"),j=!0,M=null):v===I&&(j=!0,M=T.route.hydrateFallbackElement||null)));let re=e.concat(h.slice(0,I+1)),Y=()=>{let te;return F?te=q:j?te=M:T.route.Component?te=ae.createElement(T.route.Component,null):T.route.element?te=T.route.element:te=w,ae.createElement(bE,{match:T,routeContext:{outlet:w,matches:re,isDataRoute:t!=null},children:te})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?ae.createElement(VE,{location:t.location,revalidation:t.revalidation,component:q,error:F,children:Y(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):Y()},null)}var gv=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(gv||{});function LE(r){let e=ae.useContext(RE);return e||sn(!1),e}function ME(r){let e=ae.useContext(mc);return e||sn(!1),e}function FE(r){let e=ME(),t=e.matches[e.matches.length-1];return t.route.id||sn(!1),t.route.id}function UE(){var r;let e=ae.useContext(mv),t=LE(gv.UseRouteError),s=FE();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}const Cg={};function jE(r,e,t){Cg[r]||(Cg[r]=!0)}function zE(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function bu(r){sn(!1)}function BE(r){let{basename:e="/",children:t=null,location:s,navigationType:o=gi.Pop,navigator:l,static:h=!1,future:p}=r;of()&&sn(!1);let g=e.replace(/^\/*/,"/"),v=ae.useMemo(()=>({basename:g,navigator:l,static:h,future:Wu({v7_relativeSplatPath:!1},p)}),[g,p,l,h]);typeof s=="string"&&(s=fc(s));let{pathname:w="/",search:T="",hash:I="",state:F=null,key:j="default"}=s,q=ae.useMemo(()=>{let M=dv(w,g);return M==null?null:{location:{pathname:M,search:T,hash:I,state:F,key:j},navigationType:o}},[g,w,T,I,F,j,o]);return q==null?null:ae.createElement(pv.Provider,{value:v},ae.createElement(pc.Provider,{children:t,value:q}))}function $E(r){let{children:e,location:t}=r;return kE(Dd(e),t)}new Promise(()=>{});function Dd(r,e){e===void 0&&(e=[]);let t=[];return ae.Children.forEach(r,(s,o)=>{if(!ae.isValidElement(s))return;let l=[...e,o];if(s.type===ae.Fragment){t.push.apply(t,Dd(s.props.children,l));return}s.type!==bu&&sn(!1),!s.props.index||!s.props.children||sn(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Dd(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const qE="6";try{window.__reactRouterVersion=qE}catch{}const HE="startTransition",Rg=iE[HE];function WE(r){let{basename:e,children:t,future:s,window:o}=r,l=ae.useRef();l.current==null&&(l.current=sE({window:o,v5Compat:!0}));let h=l.current,[p,g]=ae.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},w=ae.useCallback(T=>{v&&Rg?Rg(()=>g(T)):g(T)},[g,v]);return ae.useLayoutEffect(()=>h.listen(w),[h,w]),ae.useEffect(()=>zE(s),[s]),ae.createElement(BE,{basename:e,children:t,location:p.location,navigationType:p.action,navigator:h,future:s})}var Pg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Pg||(Pg={}));var kg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));const QE=()=>{};var xg={};/**
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
 */const yv=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},GE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},vv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|p>>4;let I=(p&15)<<2|v>>6,F=v&63;g||(F=64,h||(I=64)),s.push(t[w],t[T],t[I],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(yv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):GE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||v==null||T==null)throw new KE;const I=l<<2|p>>4;if(s.push(I),v!==64){const F=p<<4&240|v>>2;if(s.push(F),T!==64){const j=v<<6&192|T;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class KE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XE=function(r){const e=yv(r);return vv.encodeByteArray(e,!0)},Qu=function(r){return XE(r).replace(/\./g,"")},_v=function(r){try{return vv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JE=()=>YE().__FIREBASE_DEFAULTS__,ZE=()=>{if(typeof process>"u"||typeof xg>"u")return;const r=xg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},eT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&_v(r[1]);return e&&JSON.parse(e)},gc=()=>{try{return QE()||JE()||ZE()||eT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},wv=r=>{var e,t;return(t=(e=gc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},tT=r=>{const e=wv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ev=()=>{var r;return(r=gc())===null||r===void 0?void 0:r.config},Tv=r=>{var e;return(e=gc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class nT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Iv(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function rT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Qu(JSON.stringify(t)),Qu(JSON.stringify(h)),""].join(".")}const Ma={};function iT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ma))Ma[e]?r.emulator.push(e):r.prod.push(e);return r}function sT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ng=!1;function Sv(r,e){if(typeof window>"u"||typeof document>"u"||!xo(window.location.host)||Ma[r]===e||Ma[r]||Ng)return;Ma[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",l=iT().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function p(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,F){I.setAttribute("width","24"),I.setAttribute("id",F),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function v(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ng=!0,h()},I}function w(I,F){I.setAttribute("id",F),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=sT(s),F=t("text"),j=document.getElementById(F)||document.createElement("span"),q=t("learnmore"),M=document.getElementById(q)||document.createElement("a"),re=t("preprendIcon"),Y=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const te=I.element;p(te),w(M,q);const le=v();g(Y,re),te.append(Y,j,M,le),document.body.appendChild(te)}l?(j.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function aT(){var r;const e=(r=gc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function cT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function dT(){return!aT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fT(){try{return typeof indexedDB=="object"}catch{return!1}}function pT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const mT="FirebaseError";class jr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mT,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?gT(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new jr(o,p,s)}}function gT(r,e){return r.replace(yT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const yT=/\{\$([^}]+)}/g;function vT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ps(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Dg(l)&&Dg(h)){if(!ps(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Dg(r){return r!==null&&typeof r=="object"}/**
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
 */function Za(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _T(r,e){const t=new wT(r,e);return t.subscribe.bind(t)}class wT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ET(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ET(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
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
 */function vt(r){return r&&r._delegate?r._delegate:r}class ms{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cs="[DEFAULT]";/**
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
 */class TT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new nT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ST(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:IT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IT(r){return r===cs?void 0:r}function ST(r){return r.instantiationMode==="EAGER"}/**
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
 */class AT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new TT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const CT={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},RT=ke.INFO,PT={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},kT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=PT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=RT,this._logHandler=kT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const xT=(r,e)=>e.some(t=>r instanceof t);let Vg,bg;function NT(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,Vd=new WeakMap,Cv=new WeakMap,_d=new WeakMap,lf=new WeakMap;function VT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(_i(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Av.set(t,r)}).catch(()=>{}),lf.set(e,r),e}function bT(r){if(Vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Vd.set(r,e)}let bd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Cv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function OT(r){bd=r(bd)}function LT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wd(this),e,...t);return Cv.set(s,e.sort?e.sort():[e]),_i(s)}:DT().includes(r)?function(...e){return r.apply(wd(this),e),_i(Av.get(this))}:function(...e){return _i(r.apply(wd(this),e))}}function MT(r){return typeof r=="function"?LT(r):(r instanceof IDBTransaction&&bT(r),xT(r,NT())?new Proxy(r,bd):r)}function _i(r){if(r instanceof IDBRequest)return VT(r);if(_d.has(r))return _d.get(r);const e=MT(r);return e!==r&&(_d.set(r,e),lf.set(e,r)),e}const wd=r=>lf.get(r);function FT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),p=_i(h);return s&&h.addEventListener("upgradeneeded",g=>{s(_i(h.result),g.oldVersion,g.newVersion,_i(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const UT=["get","getKey","getAll","getAllKeys","count"],jT=["put","add","delete","clear"],Ed=new Map;function Og(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=jT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||UT.includes(t)))return;const l=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&g.done]))[0]};return Ed.set(e,l),l}OT(r=>({...r,get:(e,t,s)=>Og(e,t)||r.get(e,t,s),has:(e,t)=>!!Og(e,t)||r.has(e,t)}));/**
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
 */class zT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(BT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function BT(r){const e=r.getComponent();return e?.type==="VERSION"}const Od="@firebase/app",Lg="0.13.2";/**
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
 */const Lr=new af("@firebase/app"),$T="@firebase/app-compat",qT="@firebase/analytics-compat",HT="@firebase/analytics",WT="@firebase/app-check-compat",QT="@firebase/app-check",GT="@firebase/auth",KT="@firebase/auth-compat",XT="@firebase/database",YT="@firebase/data-connect",JT="@firebase/database-compat",ZT="@firebase/functions",eI="@firebase/functions-compat",tI="@firebase/installations",nI="@firebase/installations-compat",rI="@firebase/messaging",iI="@firebase/messaging-compat",sI="@firebase/performance",oI="@firebase/performance-compat",aI="@firebase/remote-config",lI="@firebase/remote-config-compat",uI="@firebase/storage",cI="@firebase/storage-compat",hI="@firebase/firestore",dI="@firebase/ai",fI="@firebase/firestore-compat",pI="firebase",mI="11.10.0";/**
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
 */const Ld="[DEFAULT]",gI={[Od]:"fire-core",[$T]:"fire-core-compat",[HT]:"fire-analytics",[qT]:"fire-analytics-compat",[QT]:"fire-app-check",[WT]:"fire-app-check-compat",[GT]:"fire-auth",[KT]:"fire-auth-compat",[XT]:"fire-rtdb",[YT]:"fire-data-connect",[JT]:"fire-rtdb-compat",[ZT]:"fire-fn",[eI]:"fire-fn-compat",[tI]:"fire-iid",[nI]:"fire-iid-compat",[rI]:"fire-fcm",[iI]:"fire-fcm-compat",[sI]:"fire-perf",[oI]:"fire-perf-compat",[aI]:"fire-rc",[lI]:"fire-rc-compat",[uI]:"fire-gcs",[cI]:"fire-gcs-compat",[hI]:"fire-fst",[fI]:"fire-fst-compat",[dI]:"fire-vertex","fire-js":"fire-js",[pI]:"fire-js-all"};/**
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
 */const Gu=new Map,yI=new Map,Md=new Map;function Mg(r,e){try{r.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function So(r){const e=r.name;if(Md.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,r);for(const t of Gu.values())Mg(t,r);for(const t of yI.values())Mg(t,r);return!0}function uf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Sn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const vI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new Ja("app","Firebase",vI);/**
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
 */class _I{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const No=mI;function Rv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ld,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw wi.create("bad-app-name",{appName:String(o)});if(t||(t=Ev()),!t)throw wi.create("no-options");const l=Gu.get(o);if(l){if(ps(t,l.options)&&ps(s,l.config))return l;throw wi.create("duplicate-app",{appName:o})}const h=new AT(o);for(const g of Md.values())h.addComponent(g);const p=new _I(t,s,h);return Gu.set(o,p),p}function Pv(r=Ld){const e=Gu.get(r);if(!e&&r===Ld&&Ev())return Rv();if(!e)throw wi.create("no-app",{appName:r});return e}function Ei(r,e,t){var s;let o=(s=gI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${o}" with version "${e}":`];l&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(p.join(" "));return}So(new ms(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const wI="firebase-heartbeat-database",EI=1,$a="firebase-heartbeat-store";let Td=null;function kv(){return Td||(Td=FT(wI,EI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw wi.create("idb-open",{originalErrorMessage:r.message})})),Td}async function TI(r){try{const t=(await kv()).transaction($a),s=await t.objectStore($a).get(xv(r));return await t.done,s}catch(e){if(e instanceof jr)Lr.warn(e.message);else{const t=wi.create("idb-get",{originalErrorMessage:e?.message});Lr.warn(t.message)}}}async function Fg(r,e){try{const s=(await kv()).transaction($a,"readwrite");await s.objectStore($a).put(e,xv(r)),await s.done}catch(t){if(t instanceof jr)Lr.warn(t.message);else{const s=wi.create("idb-set",{originalErrorMessage:t?.message});Lr.warn(s.message)}}}function xv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const II=1024,SI=30;class AI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new RI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ug();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>SI){const h=PI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Lr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ug(),{heartbeatsToSend:s,unsentEntries:o}=CI(this._heartbeatsCache.heartbeats),l=Qu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Lr.warn(t),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function CI(r,e=II){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),jg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fT()?pT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await TI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function jg(r){return Qu(JSON.stringify({version:2,heartbeats:r})).length}function PI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function kI(r){So(new ms("platform-logger",e=>new zT(e),"PRIVATE")),So(new ms("heartbeat",e=>new AI(e),"PRIVATE")),Ei(Od,Lg,r),Ei(Od,Lg,"esm2017"),Ei("fire-js","")}kI("");var xI="firebase",NI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei(xI,NI,"app");function cf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Nv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DI=Nv,Dv=new Ja("auth","Firebase",Nv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new af("@firebase/auth");function VI(r,...e){Ku.logLevel<=ke.WARN&&Ku.warn(`Auth (${No}): ${r}`,...e)}function Ou(r,...e){Ku.logLevel<=ke.ERROR&&Ku.error(`Auth (${No}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(r,...e){throw df(r,...e)}function $n(r,...e){return df(r,...e)}function hf(r,e,t){const s=Object.assign(Object.assign({},DI()),{[e]:t});return new Ja("auth","Firebase",s).create(e,{appName:r.name})}function Ti(r){return hf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vv(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&cr(r,"argument-error"),hf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Dv.create(r,...e)}function we(r,e,...t){if(!r)throw df(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ou(e),new Error(e)}function Mr(r,e){r||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function bI(){return zg()==="http:"||zg()==="https:"}function zg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bI()||uT()||"connection"in navigator)?navigator.onLine:!0}function LI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=oT()||cT()}get(){return OI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(r,e){Mr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UI=new el(3e4,6e4);function yc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Do(r,e,t,s,o={}){return Ov(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=Za(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return lT()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&xo(r.emulatorConfig.host)&&(v.credentials="include"),bv.fetch()(await Mv(r,r.config.apiHost,t,p),v)})}async function Ov(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},MI),e);try{const o=new jI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Pu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[g,v]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Pu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Pu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw hf(r,w,v);cr(r,w)}}catch(o){if(o instanceof jr)throw o;cr(r,"network-request-failed",{message:String(o)})}}async function Lv(r,e,t,s,o={}){const l=await Do(r,e,t,s,o);return"mfaPendingCredential"in l&&cr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Mv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?ff(r.config,o):`${r.config.apiScheme}://${o}`;return FI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class jI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s($n(this.auth,"network-request-failed")),UI.get())})}}function Pu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=$n(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(r,e){return Do(r,"POST","/v1/accounts:delete",e)}async function Xu(r,e){return Do(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BI(r,e=!1){const t=vt(r),s=await t.getIdToken(e),o=pf(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:Fa(Id(o.auth_time)),issuedAtTime:Fa(Id(o.iat)),expirationTime:Fa(Id(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Id(r){return Number(r)*1e3}function pf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ou("JWT malformed, contained fewer than 3 sections"),null;try{const o=_v(t);return o?JSON.parse(o):(Ou("Failed to decode base64 JWT payload"),null)}catch(o){return Ou("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Bg(r){const e=pf(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof jr&&$I(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function $I({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await qa(r,Xu(t,{idToken:s}));we(o?.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Fv(l.providerUserInfo):[],p=WI(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!p?.length,w=g?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new Ud(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,T)}async function HI(r){const e=vt(r);await Yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Fv(r){return r.map(e=>{var{providerId:t}=e,s=cf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(r,e){const t=await Ov(r,{},async()=>{const s=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Mv(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&xo(r.emulatorConfig.host)&&(g.credentials="include"),bv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GI(r,e){return Do(r,"POST","/v2/accounts:revokeToken",yc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Bg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await QI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new wo;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ud(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await qa(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BI(this,e)}reload(){return HI(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Yu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await qa(this,zI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,p,g,v,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,j=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(p=t.tenantId)!==null&&p!==void 0?p:void 0,M=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,re=(v=t.createdAt)!==null&&v!==void 0?v:void 0,Y=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:te,emailVerified:le,isAnonymous:Se,providerData:Ee,stsTokenManager:k}=t;we(te&&k,e,"internal-error");const S=wo.fromJSON(this.name,k);we(typeof te=="string",e,"internal-error"),di(T,e.name),di(I,e.name),we(typeof le=="boolean",e,"internal-error"),we(typeof Se=="boolean",e,"internal-error"),di(F,e.name),di(j,e.name),di(q,e.name),di(M,e.name),di(re,e.name),di(Y,e.name);const R=new zn({uid:te,auth:e,email:I,emailVerified:le,displayName:T,isAnonymous:Se,photoURL:j,phoneNumber:F,tenantId:q,stsTokenManager:S,createdAt:re,lastLoginAt:Y});return Ee&&Array.isArray(Ee)&&(R.providerData=Ee.map(x=>Object.assign({},x))),M&&(R._redirectEventId=M),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new wo;o.updateFromServerResponse(t);const l=new zn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Yu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Fv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,p=new wo;p.updateFromIdToken(s);const g=new zn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ud(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function br(r){Mr(r instanceof Function,"Expected a class definition");let e=$g.get(r);return e?(Mr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,$g.set(r,e),e)}/**
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
 */class Uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uv.type="NONE";const qg=Uv;/**
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
 */function Lu(r,e,t){return`firebase:${r}:${e}:${t}`}class Eo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Lu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Lu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xu(this.auth,{idToken:e}).catch(()=>{});return t?zn._fromGetAccountInfoResponse(this.auth,t,e):null}return zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Eo(br(qg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||br(qg);const h=Lu(s,e.config.apiKey,e.name);let p=null;for(const v of t)try{const w=await v._get(h);if(w){let T;if(typeof w=="string"){const I=await Xu(e,{idToken:w}).catch(()=>{});if(!I)break;T=await zn._fromGetAccountInfoResponse(e,I,w)}else T=zn._fromJSON(e,w);v!==l&&(p=T),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Eo(l,e,s):(l=g[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new Eo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(Wv(e))return"Webos";if(zv(e))return"Safari";if((e.includes("chrome/")||Bv(e))&&!e.includes("edge/"))return"Chrome";if(qv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function jv(r=zt()){return/firefox\//i.test(r)}function zv(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bv(r=zt()){return/crios\//i.test(r)}function $v(r=zt()){return/iemobile/i.test(r)}function qv(r=zt()){return/android/i.test(r)}function Hv(r=zt()){return/blackberry/i.test(r)}function Wv(r=zt()){return/webos/i.test(r)}function mf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function KI(r=zt()){var e;return mf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XI(){return hT()&&document.documentMode===10}function Qv(r=zt()){return mf(r)||qv(r)||Wv(r)||Hv(r)||/windows phone/i.test(r)||$v(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(r,e=[]){let t;switch(r){case"Browser":t=Hg(zt());break;case"Worker":t=`${Hg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${No}/${s}`}/**
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
 */class YI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const g=e(l);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function JI(r,e={}){return Do(r,"GET","/v2/passwordPolicy",yc(r,e))}/**
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
 */const ZI=6;class eS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:ZI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xu(this,{idToken:e}),s=await zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Ti(this));const t=e?vt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JI(this),t=new eS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ja("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await GI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&VI(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Vo(r){return vt(r)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=_T(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nS(r){gf=r}function rS(r){return gf.loadJS(r)}function iS(){return gf.gapiScript}function sS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(r,e){const t=uf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ps(l,e??{}))return o;cr(o,"already-initialized")}return t.initialize({options:e})}function aS(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(br);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function lS(r,e,t){const s=Vo(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Kv(e),{host:h,port:p}=uS(e),g=p===null?"":`:${p}`,v={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(ps(v,s.config.emulator)&&ps(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,xo(h)?(Iv(`${l}//${h}${g}`),Sv("Auth",!0)):cS()}function Kv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function uS(r){const e=Kv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Qg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Qg(h)}}}function Qg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function cS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(r,e){return Lv(r,"POST","/v1/accounts:signInWithIdp",yc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="http://localhost";class gs extends Xv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=cf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new gs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return To(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,To(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,To(e,t)}buildRequest(){const e={requestUri:hS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Za(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends tl{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends tl{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends tl{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(r,e){return Lv(r,"POST","/v1/accounts:signUp",yc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await zn._fromIdTokenResponse(e,s,o),h=Gg(s);return new Ai({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Gg(s);return new Ai({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Gg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(r){var e;if(Sn(r.app))return Promise.reject(Ti(r));const t=Vo(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ai({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await dS(t,{returnSecureToken:!0}),o=await Ai._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends jr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ju(e,t,s,o)}}function Yv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(r,l,e,s):l})}async function pS(r,e,t=!1){const s=await qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ai._forOperation(r,"link",s)}/**
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
 */async function mS(r,e,t=!1){const{auth:s}=r;if(Sn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const l=await qa(r,Yv(s,o,e,r),t);we(l.idToken,s,"internal-error");const h=pf(l.idToken);we(h,s,"internal-error");const{sub:p}=h;return we(r.uid===p,s,"user-mismatch"),Ai._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&cr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(r,e,t=!1){if(Sn(r.app))return Promise.reject(Ti(r));const s="signIn",o=await Yv(r,s,e),l=await Ai._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function gS(r,e){return Jv(Vo(r),e)}function yS(r,e,t,s){return vt(r).onIdTokenChanged(e,t,s)}function vS(r,e,t){return vt(r).beforeAuthStateChanged(e,t)}function _S(r,e,t,s){return vt(r).onAuthStateChanged(e,t,s)}const Zu="__sak";/**
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
 */class Zv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=1e3,ES=10;class e_ extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);XI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ES):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},wS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const TS=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t_.type="SESSION";const n_=t_;/**
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
 */function IS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async v=>v(t.origin,l)),g=await IS(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class SS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,g)=>{const v=yf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(I.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function AS(r){sr().location.href=r}/**
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
 */function r_(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function CS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RS(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function PS(){return r_()?self:null}/**
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
 */const i_="firebaseLocalStorageDb",kS=1,ec="firebaseLocalStorage",s_="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wc(r,e){return r.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function xS(){const r=indexedDB.deleteDatabase(i_);return new nl(r).toPromise()}function jd(){const r=indexedDB.open(i_,kS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ec,{keyPath:s_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ec)?e(s):(s.close(),await xS(),e(await jd()))})})}async function Kg(r,e,t){const s=wc(r,!0).put({[s_]:e,value:t});return new nl(s).toPromise()}async function NS(r,e){const t=wc(r,!1).get(e),s=await new nl(t).toPromise();return s===void 0?null:s.value}function Xg(r,e){const t=wc(r,!0).delete(e);return new nl(t).toPromise()}const DS=800,VS=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(PS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await CS(),!this.activeServiceWorker)return;this.sender=new SS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Kg(e,Zu,"1"),await Xg(e,Zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>NS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=wc(o,!1).getAll();return new nl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const bS=o_;new el(3e4,6e4);/**
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
 */function vf(r,e){return e?br(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class _f extends Xv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,t){return To(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OS(r){return Jv(r.auth,new _f(r),r.bypassAuthState)}function LS(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),mS(t,new _f(r),r.bypassAuthState)}async function MS(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),pS(t,new _f(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OS;case"linkViaPopup":case"linkViaRedirect":return MS;case"reauthViaPopup":case"reauthViaRedirect":return LS;default:cr(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new el(2e3,1e4);async function Yg(r,e,t){if(Sn(r.app))return Promise.reject($n(r,"operation-not-supported-in-this-environment"));const s=Vo(r);Vv(r,e,vc);const o=vf(s,t);return new yi(s,"signInViaPopup",e,o).executeNotNull()}async function US(r,e,t){const s=vt(r);Vv(s.auth,e,vc);const o=vf(s.auth,t);return new yi(s.auth,"linkViaPopup",e,o,s).executeNotNull()}class yi extends a_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FS.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="pendingRedirect",Mu=new Map;class zS extends a_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const s=await BS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BS(r,e){const t=HS(e),s=qS(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function $S(r,e){Mu.set(r._key(),e)}function qS(r){return br(r._redirectPersistence)}function HS(r){return Lu(jS,r.config.apiKey,r.name)}async function WS(r,e,t=!1){if(Sn(r.app))return Promise.reject(Ti(r));const s=Vo(r),o=vf(s,e),h=await new zS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=600*1e3;class GS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!l_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError($n(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function l_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function KS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(r,e={}){return Do(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JS=/^https?/;async function ZS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await XS(r);for(const t of e)try{if(e1(t))return}catch{}cr(r,"unauthorized-domain")}function e1(r){const e=Fd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!JS.test(t))return!1;if(YS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const t1=new el(3e4,6e4);function Zg(){const r=sr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function n1(r){return new Promise((e,t)=>{var s,o,l;function h(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),t($n(r,"network-request-failed"))},timeout:t1.get()})}if(!((o=(s=sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const p=sS("iframefcb");return sr()[p]=()=>{gapi.load?h():t($n(r,"network-request-failed"))},rS(`${iS()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw Fu=null,e})}let Fu=null;function r1(r){return Fu=Fu||n1(r),Fu}/**
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
 */const i1=new el(5e3,15e3),s1="__/auth/iframe",o1="emulator/auth/iframe",a1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u1(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ff(e,o1):`https://${r.config.authDomain}/${s1}`,s={apiKey:e.apiKey,appName:r.name,v:No},o=l1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Za(s).slice(1)}`}async function c1(r){const e=await r1(r),t=sr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:u1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=$n(r,"network-request-failed"),p=sr().setTimeout(()=>{l(h)},i1.get());function g(){sr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const h1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d1=500,f1=600,p1="_blank",m1="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g1(r,e,t,s=d1,o=f1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},h1),{width:s.toString(),height:o.toString(),top:l,left:h}),v=zt().toLowerCase();t&&(p=Bv(v)?p1:t),jv(v)&&(e=e||m1,g.scrollbars="yes");const w=Object.entries(g).reduce((I,[F,j])=>`${I}${F}=${j},`,"");if(KI(v)&&p!=="_self")return y1(e||"",p),new ey(null);const T=window.open(e||"",p,w);we(T,r,"popup-blocked");try{T.focus()}catch{}return new ey(T)}function y1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const v1="__/auth/handler",_1="emulator/auth/handler",w1=encodeURIComponent("fac");async function ty(r,e,t,s,o,l){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:No,eventId:o};if(e instanceof vc){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",vT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof tl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const g=await r._getAppCheckToken(),v=g?`#${w1}=${encodeURIComponent(g)}`:"";return`${E1(r)}?${Za(p).slice(1)}${v}`}function E1({config:r}){return r.emulator?ff(r,_1):`https://${r.authDomain}/${v1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="webStorageSupport";class T1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=WS,this._overrideRedirectResult=$S}async _openPopup(e,t,s,o){var l;Mr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ty(e,t,s,Fd(),o);return g1(e,h,yf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await ty(e,t,s,Fd(),o);return AS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await c1(e),s=new GS(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sd,{type:Sd},o=>{var l;const h=(l=o?.[0])===null||l===void 0?void 0:l[Sd];h!==void 0&&t(!!h),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qv()||zv()||mf()}}const I1=T1;var ny="@firebase/auth",ry="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C1(r){So(new ms("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gv(r)},v=new tS(s,o,l,g);return aS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),So(new ms("auth-internal",e=>{const t=Vo(e.getProvider("auth").getImmediate());return(s=>new S1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ei(ny,ry,A1(r)),Ei(ny,ry,"esm2017")}/**
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
 */const R1=300,P1=Tv("authIdTokenMaxAge")||R1;let iy=null;const k1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>P1)return;const o=t?.token;iy!==o&&(iy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function x1(r=Pv()){const e=uf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=oS(r,{popupRedirectResolver:I1,persistence:[bS,TS,n_]}),s=Tv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=k1(l.toString());vS(t,h,()=>h(t.currentUser)),yS(t,p=>h(p))}}const o=wv("auth");return o&&lS(t,`http://${o}`),t}function N1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}nS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=$n("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",N1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C1("Browser");var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,u_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function R(){}R.prototype=S.prototype,k.D=S.prototype,k.prototype=new R,k.prototype.constructor=k,k.C=function(x,D,b){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return S.prototype[D].apply(x,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,R){R||(R=0);var x=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)x[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;16>D;++D)x[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=k.g[0],R=k.g[1],D=k.g[2];var b=k.g[3],C=S+(b^R&(D^b))+x[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=b+(D^S&(R^D))+x[1]+3905402710&4294967295,b=S+(C<<12&4294967295|C>>>20),C=D+(R^b&(S^R))+x[2]+606105819&4294967295,D=b+(C<<17&4294967295|C>>>15),C=R+(S^D&(b^S))+x[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(b^R&(D^b))+x[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(D^S&(R^D))+x[5]+1200080426&4294967295,b=S+(C<<12&4294967295|C>>>20),C=D+(R^b&(S^R))+x[6]+2821735955&4294967295,D=b+(C<<17&4294967295|C>>>15),C=R+(S^D&(b^S))+x[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(b^R&(D^b))+x[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(D^S&(R^D))+x[9]+2336552879&4294967295,b=S+(C<<12&4294967295|C>>>20),C=D+(R^b&(S^R))+x[10]+4294925233&4294967295,D=b+(C<<17&4294967295|C>>>15),C=R+(S^D&(b^S))+x[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(b^R&(D^b))+x[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=b+(D^S&(R^D))+x[13]+4254626195&4294967295,b=S+(C<<12&4294967295|C>>>20),C=D+(R^b&(S^R))+x[14]+2792965006&4294967295,D=b+(C<<17&4294967295|C>>>15),C=R+(S^D&(b^S))+x[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(D^b&(R^D))+x[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^D&(S^R))+x[6]+3225465664&4294967295,b=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(b^S))+x[11]+643717713&4294967295,D=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(D^b))+x[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^b&(R^D))+x[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^D&(S^R))+x[10]+38016083&4294967295,b=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(b^S))+x[15]+3634488961&4294967295,D=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(D^b))+x[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^b&(R^D))+x[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^D&(S^R))+x[14]+3275163606&4294967295,b=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(b^S))+x[3]+4107603335&4294967295,D=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(D^b))+x[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^b&(R^D))+x[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=b+(R^D&(S^R))+x[2]+4243563512&4294967295,b=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(b^S))+x[7]+1735328473&4294967295,D=b+(C<<14&4294967295|C>>>18),C=R+(b^S&(D^b))+x[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(R^D^b)+x[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^D)+x[8]+2272392833&4294967295,b=S+(C<<11&4294967295|C>>>21),C=D+(b^S^R)+x[11]+1839030562&4294967295,D=b+(C<<16&4294967295|C>>>16),C=R+(D^b^S)+x[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^b)+x[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^D)+x[4]+1272893353&4294967295,b=S+(C<<11&4294967295|C>>>21),C=D+(b^S^R)+x[7]+4139469664&4294967295,D=b+(C<<16&4294967295|C>>>16),C=R+(D^b^S)+x[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^b)+x[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^D)+x[0]+3936430074&4294967295,b=S+(C<<11&4294967295|C>>>21),C=D+(b^S^R)+x[3]+3572445317&4294967295,D=b+(C<<16&4294967295|C>>>16),C=R+(D^b^S)+x[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^b)+x[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=b+(S^R^D)+x[12]+3873151461&4294967295,b=S+(C<<11&4294967295|C>>>21),C=D+(b^S^R)+x[15]+530742520&4294967295,D=b+(C<<16&4294967295|C>>>16),C=R+(D^b^S)+x[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(D^(R|~b))+x[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~D))+x[7]+1126891415&4294967295,b=S+(C<<10&4294967295|C>>>22),C=D+(S^(b|~R))+x[14]+2878612391&4294967295,D=b+(C<<15&4294967295|C>>>17),C=R+(b^(D|~S))+x[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~b))+x[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~D))+x[3]+2399980690&4294967295,b=S+(C<<10&4294967295|C>>>22),C=D+(S^(b|~R))+x[10]+4293915773&4294967295,D=b+(C<<15&4294967295|C>>>17),C=R+(b^(D|~S))+x[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~b))+x[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~D))+x[15]+4264355552&4294967295,b=S+(C<<10&4294967295|C>>>22),C=D+(S^(b|~R))+x[6]+2734768916&4294967295,D=b+(C<<15&4294967295|C>>>17),C=R+(b^(D|~S))+x[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~b))+x[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=b+(R^(S|~D))+x[11]+3174756917&4294967295,b=S+(C<<10&4294967295|C>>>22),C=D+(S^(b|~R))+x[2]+718787259&4294967295,D=b+(C<<15&4294967295|C>>>17),C=R+(b^(D|~S))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+D&4294967295,k.g[3]=k.g[3]+b&4294967295}s.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var R=S-this.blockSize,x=this.B,D=this.h,b=0;b<S;){if(D==0)for(;b<=R;)o(this,k,b),b+=this.blockSize;if(typeof k=="string"){for(;b<S;)if(x[D++]=k.charCodeAt(b++),D==this.blockSize){o(this,x),D=0;break}}else for(;b<S;)if(x[D++]=k[b++],D==this.blockSize){o(this,x),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var R=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=R&255,R/=256;for(this.u(k),k=Array(16),S=R=0;4>S;++S)for(var x=0;32>x;x+=8)k[R++]=this.g[S]>>>x&255;return k};function l(k,S){var R=p;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=S(k)}function h(k,S){this.h=S;for(var R=[],x=!0,D=k.length-1;0<=D;D--){var b=k[D]|0;x&&b==S||(R[D]=b,x=!1)}this.g=R}var p={};function g(k){return-128<=k&&128>k?l(k,function(S){return new h([S|0],0>S?-1:0)}):new h([k|0],0>k?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return M(v(-k));for(var S=[],R=1,x=0;k>=R;x++)S[x]=k/R|0,R*=4294967296;return new h(S,0)}function w(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return M(w(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(S,8)),x=T,D=0;D<k.length;D+=8){var b=Math.min(8,k.length-D),C=parseInt(k.substring(D,D+b),S);8>b?(b=v(Math.pow(S,b)),x=x.j(b).add(v(C))):(x=x.j(R),x=x.add(v(C)))}return x}var T=g(0),I=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-M(this).m();for(var k=0,S=1,R=0;R<this.g.length;R++){var x=this.i(R);k+=(0<=x?x:4294967296+x)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(j(this))return"0";if(q(this))return"-"+M(this).toString(k);for(var S=v(Math.pow(k,6)),R=this,x="";;){var D=le(R,S).g;R=re(R,D.j(S));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(k);if(R=D,j(R))return b+x;for(;6>b.length;)b="0"+b;x=b+x}},r.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function j(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function q(k){return k.h==-1}r.l=function(k){return k=re(this,k),q(k)?-1:j(k)?0:1};function M(k){for(var S=k.g.length,R=[],x=0;x<S;x++)R[x]=~k.g[x];return new h(R,~k.h).add(I)}r.abs=function(){return q(this)?M(this):this},r.add=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],x=0,D=0;D<=S;D++){var b=x+(this.i(D)&65535)+(k.i(D)&65535),C=(b>>>16)+(this.i(D)>>>16)+(k.i(D)>>>16);x=C>>>16,b&=65535,C&=65535,R[D]=C<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function re(k,S){return k.add(M(S))}r.j=function(k){if(j(this)||j(k))return T;if(q(this))return q(k)?M(this).j(M(k)):M(M(this).j(k));if(q(k))return M(this.j(M(k)));if(0>this.l(F)&&0>k.l(F))return v(this.m()*k.m());for(var S=this.g.length+k.g.length,R=[],x=0;x<2*S;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(var D=0;D<k.g.length;D++){var b=this.i(x)>>>16,C=this.i(x)&65535,nt=k.i(D)>>>16,Dt=k.i(D)&65535;R[2*x+2*D]+=C*Dt,Y(R,2*x+2*D),R[2*x+2*D+1]+=b*Dt,Y(R,2*x+2*D+1),R[2*x+2*D+1]+=C*nt,Y(R,2*x+2*D+1),R[2*x+2*D+2]+=b*nt,Y(R,2*x+2*D+2)}for(x=0;x<S;x++)R[x]=R[2*x+1]<<16|R[2*x];for(x=S;x<2*S;x++)R[x]=0;return new h(R,0)};function Y(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function te(k,S){this.g=k,this.h=S}function le(k,S){if(j(S))throw Error("division by zero");if(j(k))return new te(T,T);if(q(k))return S=le(M(k),S),new te(M(S.g),M(S.h));if(q(S))return S=le(k,M(S)),new te(M(S.g),S.h);if(30<k.g.length){if(q(k)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,x=S;0>=x.l(k);)R=Se(R),x=Se(x);var D=Ee(R,1),b=Ee(x,1);for(x=Ee(x,2),R=Ee(R,2);!j(x);){var C=b.add(x);0>=C.l(k)&&(D=D.add(R),b=C),x=Ee(x,1),R=Ee(R,1)}return S=re(k,D.j(S)),new te(D,S)}for(D=T;0<=k.l(S);){for(R=Math.max(1,Math.floor(k.m()/S.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),b=v(R),C=b.j(S);q(C)||0<C.l(k);)R-=x,b=v(R),C=b.j(S);j(b)&&(b=I),D=D.add(b),k=re(k,C)}return new te(D,k)}r.A=function(k){return le(this,k).h},r.and=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],x=0;x<S;x++)R[x]=this.i(x)&k.i(x);return new h(R,this.h&k.h)},r.or=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],x=0;x<S;x++)R[x]=this.i(x)|k.i(x);return new h(R,this.h|k.h)},r.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),R=[],x=0;x<S;x++)R[x]=this.i(x)^k.i(x);return new h(R,this.h^k.h)};function Se(k){for(var S=k.g.length+1,R=[],x=0;x<S;x++)R[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(R,k.h)}function Ee(k,S){var R=S>>5;S%=32;for(var x=k.g.length-R,D=[],b=0;b<x;b++)D[b]=0<S?k.i(b+R)>>>S|k.i(b+R+1)<<32-S:k.i(b+R);return new h(D,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,u_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Ii=h}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c_,Va,h_,Uu,zd,d_,f_,p_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var O=u[E];if(!(O in y))break e;y=y[O]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,O={next:function(){if(!E&&y<u.length){var B=y++;return{value:f(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function v(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function w(u,f,y){return u.call.apply(u.bind,arguments)}function T(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),u.apply(f,O)}}return function(){return u.apply(f,arguments)}}function I(u,f,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,I.apply(null,arguments)}function F(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function j(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,O,B){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return f.prototype[O].apply(E,Z)}}function q(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function M(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const O=u.length||0,B=E.length||0;u.length=O+B;for(let Z=0;Z<B;Z++)u[O+Z]=E[Z]}else u.push(E)}}class re{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Y(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var Se=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ee(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function k(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function S(u){const f={};for(const y in u)f[y]=u[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,f){let y,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(y in E)u[y]=E[y];for(let B=0;B<R.length;B++)y=R[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function b(u){p.setTimeout(()=>{throw u},0)}function C(){var u=pe;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class nt{constructor(){this.h=this.g=null}add(f,y){const E=Dt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new re(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ee=!1,pe=new nt,se=()=>{const u=p.Promise.resolve(void 0);ze=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){b(y)}var f=Dt;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}ee=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return u})();function Re(u,f){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(Se){e:{try{le(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}j(Re,fe);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,f,y,E,O){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=O,this.key=++Fe,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,f,y,E,O){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=zr(u,f,E,O);return-1<Z?(f=u[Z],y||(f.fa=!1)):(f=new $e(f,this.src,B,!!E,O),f.fa=y,u.push(f)),f};function Ts(u,f){var y=f.type;if(y in u.g){var E=u.g[y],O=Array.prototype.indexOf.call(E,f,void 0),B;(B=0<=O)&&Array.prototype.splice.call(E,O,1),B&&(_t(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function zr(u,f,y,E){for(var O=0;O<u.length;++O){var B=u[O];if(!B.da&&B.listener==f&&B.capture==!!y&&B.ha==E)return O}return-1}var Li="closure_lm_"+(1e6*Math.random()|0),Is={};function Fo(u,f,y,E,O){if(Array.isArray(f)){for(var B=0;B<f.length;B++)Fo(u,f[B],y,E,O);return null}return y=zo(y),u&&u[Me]?u.K(f,y,v(E)?!!E.capture:!1,O):Uo(u,f,y,!1,E,O)}function Uo(u,f,y,E,O,B){if(!f)throw Error("Invalid event type");var Z=v(O)?!!O.capture:!!O,je=As(u);if(je||(u[Li]=je=new mr(u)),y=je.add(f,y,E,Z,B),y.proxy)return y;if(E=dl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ae||(O=Z),O===void 0&&(O=!1),u.addEventListener(f.toString(),E,O);else if(u.attachEvent)u.attachEvent(yr(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function dl(){function u(y){return f.call(u.src,u.listener,y)}const f=jo;return u}function Ss(u,f,y,E,O){if(Array.isArray(f))for(var B=0;B<f.length;B++)Ss(u,f[B],y,E,O);else E=v(E)?!!E.capture:!!E,y=zo(y),u&&u[Me]?(u=u.i,f=String(f).toString(),f in u.g&&(B=u.g[f],y=zr(B,y,E,O),-1<y&&(_t(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[f],u.h--)))):u&&(u=As(u))&&(f=u.g[f.toString()],u=-1,f&&(u=zr(f,y,E,O)),(y=-1<u?f[u]:null)&&gr(y))}function gr(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Me])Ts(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(yr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=As(f))?(Ts(y,u),y.h==0&&(y.src=null,f[Li]=null)):_t(u)}}}function yr(u){return u in Is?Is[u]:Is[u]="on"+u}function jo(u,f){if(u.da)u=!0;else{f=new Re(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&gr(u),u=y.call(E,f)}return u}function As(u){return u=u[Li],u instanceof mr?u:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(u){return typeof u=="function"?u:(u[Cs]||(u[Cs]=function(f){return u.handleEvent(f)}),u[Cs])}function ht(){W.call(this),this.i=new mr(this),this.M=this,this.F=null}j(ht,W),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,f,y,E){Ss(this,u,f,y,E)};function dt(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new fe(f,u);else if(f instanceof fe)f.target=f.target||u;else{var O=f;f=new fe(E,u),x(f,O)}if(O=!0,y)for(var B=y.length-1;0<=B;B--){var Z=f.g=y[B];O=vr(Z,E,!0,f)&&O}if(Z=f.g=u,O=vr(Z,E,!0,f)&&O,O=vr(Z,E,!1,f)&&O,y)for(B=0;B<y.length;B++)Z=f.g=y[B],O=vr(Z,E,!1,f)&&O}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)_t(y[E]);delete u.g[f],u.h--}}this.F=null},ht.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},ht.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function vr(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,B=0;B<f.length;++B){var Z=f[B];if(Z&&!Z.da&&Z.capture==y){var je=Z.listener,ft=Z.ha||Z.src;Z.fa&&Ts(u.i,Z),O=je.call(ft,E)!==!1&&O}}return O&&!E.defaultPrevented}function Bo(u,f,y){if(typeof u=="function")y&&(u=I(u,y));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(u,f||0)}function Br(u){u.g=Bo(()=>{u.g=null,u.i&&(u.i=!1,Br(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Mi extends W{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Br(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(u){W.call(this),this.h=u,this.g={}}j(Fi,W);var $o=[];function qo(u){Ee(u.g,function(f,y){this.g.hasOwnProperty(y)&&gr(f)},u),u.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),qo(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ho=p.JSON.stringify,Wo=p.JSON.parse,Qo=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Ui(){}Ui.prototype.h=null;function Rs(u){return u.h||(u.h=u.i())}function Ps(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){fe.call(this,"d")}j(Wn,fe);function ks(){fe.call(this,"c")}j(ks,fe);var Qn={},Go=null;function ji(){return Go=Go||new ht}Qn.La="serverreachability";function Ko(u){fe.call(this,Qn.La,u)}j(Ko,fe);function _r(u){const f=ji();dt(f,new Ko(f))}Qn.STAT_EVENT="statevent";function Xo(u,f){fe.call(this,Qn.STAT_EVENT,u),this.stat=f}j(Xo,fe);function rt(u){const f=ji();dt(f,new Xo(f,u))}Qn.Ma="timingevent";function xs(u,f){fe.call(this,Qn.Ma,u),this.size=f}j(xs,fe);function Cn(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},f)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function Bi(u,f,y,E,O,B){u.info(function(){if(u.g)if(B)for(var Z="",je=B.split("&"),ft=0;ft<je.length;ft++){var Ve=je[ft].split("=");if(1<Ve.length){var wt=Ve[0];Ve=Ve[1];var at=wt.split("_");Z=2<=at.length&&at[1]=="type"?Z+(wt+"="+Ve+"&"):Z+(wt+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+y+`
`+Z})}function Ns(u,f,y,E,O,B,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+y+`
`+B+" "+Z})}function Rn(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+zc(u,y)+(E?" "+E:"")})}function Yo(u,f){u.info(function(){return"TIMEOUT: "+f})}zi.prototype.info=function(){};function zc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var B=O[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<O.length;Z++)O[Z]=""}}}}return Ho(y)}catch{return f}}var Ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function $i(){}j($i,Ui),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Pn=new $i;function kn(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var Jo={},Vs={};function bs(u,f,y){u.L=1,u.v=Qr(an(f)),u.m=y,u.P=!0,Zo(u,null)}function Zo(u,f){u.F=Date.now(),qe(u),u.A=an(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Kr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new pl,u.g=Dl(u.j,y?f:null,!u.m),0<u.O&&(u.M=new Mi(I(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var O="readystatechange";Array.isArray(O)||(O&&($o[0]=O.toString()),O=$o);for(var B=0;B<O.length;B++){var Z=Fo(y,O[B],E||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),_r(),Bi(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const f=this.M;f&&Kt(u)==3?f.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const at=Kt(this.g);var f=this.g.Ba();const yn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||sa(this.g)))){this.J||at!=4||f==7||(f==8||0>=yn?_r(3):_r(2)),qi(this);var y=this.g.Z();this.X=y;t:if(ml(this)){var E=sa(this.g);u="";var O=E.length,B=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),$r(this);var Z="";break t}this.h.i=new p.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(B&&f==O-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Ns(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(je)){var Ve=je;break t}}Ve=null}if(y=Ve)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,y);else{this.o=!1,this.s=3,rt(12),mn(this),$r(this);break e}}if(this.P){y=!0;let un;for(;!this.J&&this.C<Z.length;)if(un=Bc(this,Z),un==Vs){at==4&&(this.s=4,rt(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Jo){this.s=4,rt(15),Rn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,un,null),ea(this,un);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Z.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,Z,"[Invalid Chunked Response]"),mn(this),$r(this);else if(0<Z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),aa(wt),wt.M=!0,rt(11))}}else Rn(this.i,this.l,Z,null),ea(this,Z);at==4&&mn(this),this.o&&!this.J&&(at==4?Hs(this.j,this):(this.o=!1,qe(this)))}else js(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mn(this),$r(this)}}}catch{}finally{}};function ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Bc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Vs:(y=Number(f.substring(y,E)),isNaN(y)?Jo:(E+=1,E+y>f.length?Vs:(f=f.slice(E,E+y),u.C=E+y,f)))}kn.prototype.cancel=function(){this.J=!0,mn(this)};function qe(u){u.S=Date.now()+u.I,gl(u,u.I)}function gl(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(I(u.ba,u),f)}function qi(u){u.B&&(p.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yo(this.i,this.A),this.L!=2&&(_r(),rt(17)),mn(this),this.s=2,$r(this)):gl(this,this.S-u)};function $r(u){u.j.G==0||u.J||Hs(u.j,u)}function mn(u){qi(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,qo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function ea(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)qs(y),bn(y);else break e;$s(y),rt(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(I(y.Za,y),6e3));if(1>=vl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Sr(y,11)}else if((u.K||y.g==u)&&qs(y),!Y(f))for(O=y.Da.g.parse(f),f=0;f<O.length;f++){let Ve=O[f];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const wt=Ve[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=Ve[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const yn=Ve[5];yn!=null&&typeof yn=="number"&&0<yn&&(E=1.5*yn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const un=u.g;if(un){const Yi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var B=E.h;B.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ta(B,B.h),B.h=null))}if(E.D){const Qs=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(E.ya=Qs,Be(E.I,E.D,Qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=u;if(E.qa=Nl(E,E.J?E.ia:null,E.W),Z.K){_l(E.h,Z);var je=Z,ft=E.L;ft&&(je.I=ft),je.B&&(qi(je),qe(je)),E.g=Z}else Xi(E);0<y.i.length&&Yn(y)}else Ve[0]!="stop"&&Ve[0]!="close"||Sr(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Sr(y,7):Ct(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}_r(4)}catch{}}var yl=class{constructor(u,f){this.g=u,this.map=f}};function Hi(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function vl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function ta(u,f){u.g?u.g.add(f):u.h=f}function _l(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Hi.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function wl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return q(u.i)}function Os(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Ls(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function qr(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Ls(u),E=Os(u),O=E.length,B=0;B<O;B++)f.call(void 0,E[B],y&&y[B],u)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),O=null;if(0<=E){var B=u[y].substring(0,E);O=u[y].substring(E+1)}else B=u[y];f(B,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function wr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof wr){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var f=u.i,y=new Gn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Wr(this,y),this.m=u.m}else u&&(f=String(u).match(Wi))?(this.h=!1,Qi(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),Hr(this,f[4]),this.l=Ne(f[5]||"",!0),Wr(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}wr.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Gr(f,Ms,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Gr(f,Ms,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Gr(y,y.charAt(0)=="/"?Il:Tl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Gr(y,na)),u.join("")};function an(u){return new wr(u)}function Qi(u,f,y){u.j=y?Ne(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function Wr(u,f,y){f instanceof Gn?(u.i=f,Kn(u.i,u.h)):(y||(f=Gr(f,Sl)),u.i=new Gn(f,u.h))}function Be(u,f,y){u.i.set(f,y)}function Qr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,El),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function El(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ms=/[#\/\?@]/g,Tl=/[#\?:]/g,Il=/[#\?]/g,Sl=/[#\?@]/g,na=/#/g;function Gn(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&$c(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Gn.prototype,r.add=function(u,f){At(this),this.i=null,u=gn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function xn(u,f){At(u),f=gn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Nn(u,f){return At(u),f=gn(u,f),u.g.has(f)}r.forEach=function(u,f){At(this),this.g.forEach(function(y,E){y.forEach(function(O){u.call(f,O,E,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const O=u[E];for(let B=0;B<O.length;B++)y.push(f[E])}return y},r.V=function(u){At(this);let f=[];if(typeof u=="string")Nn(this,u)&&(f=f.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return At(this),this.i=null,u=gn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function Kr(u,f,y){xn(u,f),0<y.length&&(u.i=null,u.g.set(gn(u,f),q(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const B=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var O=B;Z[E]!==""&&(O+="="+encodeURIComponent(String(Z[E]))),u.push(O)}}return this.i=u.join("&")};function gn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function Kn(u,f){f&&!u.j&&(At(u),u.i=null,u.g.forEach(function(y,E){var O=E.toLowerCase();E!=O&&(xn(this,E),Kr(this,O,y))},u)),u.j=f}function qc(u,f){const y=new zi;if(p.Image){const E=new Image;E.onload=F(Gt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=F(Gt,y,"TestLoadImage: error",!1,f,E),E.onabort=F(Gt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=F(Gt,y,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function Al(u,f){const y=new zi,E=new AbortController,O=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(O),B.ok?Gt(y,"TestPingServer: ok",!0,f):Gt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Gt(y,"TestPingServer: error",!1,f)})}function Gt(u,f,y,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(y)}catch{}}function Hc(){this.g=new Qo}function Cl(u,f,y){const E=y||"";try{qr(u,function(O,B){let Z=O;v(O)&&(Z=Ho(O)),f.push(E+B+"="+encodeURIComponent(Z))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}j(Er,Ui),Er.prototype.g=function(){return new Gi(this.l,this.j)},Er.prototype.i=(function(u){return function(){return u}})({});function Gi(u,f){ht.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Gi,ht),r=Gi.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Vn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Dn(this):Vn(this),this.readyState==3&&Rl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},r.Qa=function(u){this.g&&(this.response=u,Dn(this))},r.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let f="";return Ee(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Xr(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Tr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Be(u,f,y))}function Xe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Xe,ht);var Wc=/^https?$/i,ra=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Rs(this.o):Rs(Pn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(B){Ki(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)y.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),O=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ra,f,void 0))||E||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Us(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Ki(this,B)}};function Ki(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Fs(u),ln(u)}function Fs(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},r.bb=function(){ia(this)};function ia(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Bo(u.Ea,0,u);else if(dt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=Z===0){var O=String(u.D).match(Wi)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),E=!Wc.test(O?O.toLowerCase():"")}y=E}if(y)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var B=2<Kt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Fs(u)}}finally{ln(u)}}}}function ln(u,f){if(u.g){Us(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||dt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Us(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Wo(f)}};function sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function js(u){const f={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(Y(u[E]))continue;var y=D(u[E]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=f[O]||[];f[O]=B,B.push(y)}k(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function oa(u){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(u&&u.concurrentRequestLimit),this.Da=new Hc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,E){rt(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Nl(this,null,this.W),Yn(this)};function Ct(u){if(zs(u),u.G==3){var f=u.U++,y=an(u.I);if(Be(y,"SID",u.K),Be(y,"RID",f),Be(y,"TYPE","terminate"),Ir(u,y),f=new kn(u,u.j,f),f.L=2,f.v=Qr(an(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=Dl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),qe(f)}xl(u)}function bn(u){u.g&&(aa(u),u.g.cancel(),u.g=null)}function zs(u){bn(u),u.u&&(p.clearTimeout(u.u),u.u=null),qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Yn(u){if(!on(u.h)&&!u.s){u.s=!0;var f=u.Ga;ze||se(),ee||(ze(),ee=!0),pe.add(f,u),u.B=0}}function Qc(u,f){return vl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(I(u.Ga,u,f),kl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new kn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),x(B,this.S)):B=this.S),this.m!==null||this.O||(O.H=B,B=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Yr(this,O,f),y=an(this.I),Be(y,"RID",u),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),Ir(this,y),B&&(this.O?f="headers="+encodeURIComponent(String(Tr(B)))+"&"+f:this.m&&Xr(y,this.m,B)),ta(this.h,O),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",f),Be(y,"SID","null"),O.T=!0,bs(O,y,null)):bs(O,y,f),this.G=2}}else this.G==3&&(u?Bs(this,u):this.i.length==0||on(this.h)||Bs(this))};function Bs(u,f){var y;f?y=f.l:y=u.U++;const E=an(u.I);Be(E,"SID",u.K),Be(E,"RID",y),Be(E,"AID",u.T),Ir(u,E),u.m&&u.o&&Xr(E,u.m,u.o),y=new kn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=Yr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,y),bs(y,E,f)}function Ir(u,f){u.H&&Ee(u.H,function(y,E){Be(f,E,y)}),u.l&&qr({},function(y,E){Be(f,E,y)})}function Yr(u,f,y){y=Math.min(u.i.length,y);var E=u.l?I(u.l.Na,u.l,u):null;e:{var O=u.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=O[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let je=!0;for(let ft=0;ft<y;ft++){let Ve=O[ft].g;const wt=O[ft].map;if(Ve-=B,0>Ve)B=Math.max(0,O[ft].g-100),je=!1;else try{Cl(wt,Z,"req"+Ve+"_")}catch{E&&E(wt)}}if(je){E=Z.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function Xi(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;ze||se(),ee||(ze(),ee=!0),pe.add(f,u),u.v=0}}function $s(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(I(u.Fa,u),kl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),bn(this),Pl(this))};function aa(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Pl(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=an(u.qa);Be(f,"RID","rpc"),Be(f,"SID",u.K),Be(f,"AID",u.T),Be(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(f,"TO",u.ja),Be(f,"TYPE","xmlhttp"),Ir(u,f),u.m&&u.o&&Xr(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Qr(an(f)),y.m=null,y.P=!0,Zo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),$s(this),rt(19))};function qs(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Hs(u,f){var y=null;if(u.g==f){qs(u),aa(u),u.g=null;var E=2}else if(Bt(u.h,f))y=f.D,_l(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var O=u.B;E=ji(),dt(E,new xs(E,y)),Yn(u)}else Xi(u);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&Qc(u,f)||E==2&&$s(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),O){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function kl(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function Sr(u,f){if(u.j.info("Error code "+f),f==2){var y=I(u.fb,u),E=u.Xa;const O=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Qi(E,"https"),Qr(E),O?qc(E.toString(),y):Al(E.toString(),y)}else rt(2);u.G=0,u.l&&u.l.sa(f),xl(u),zs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function xl(u){if(u.G=0,u.ka=[],u.l){const f=wl(u.h);(f.length!=0||u.i.length!=0)&&(M(u.ka,f),M(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Nl(u,f,y){var E=y instanceof wr?an(y):new wr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Hr(E,E.s);else{var O=p.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var B=new wr(null);E&&Qi(B,E),f&&(B.g=f),O&&Hr(B,O),y&&(B.l=y),E=B}return y=u.D,f=u.ya,y&&f&&Be(E,y,f),Be(E,"VER",u.la),Ir(u,E),E}function Dl(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Xe(new Er({eb:y})):new Xe(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function la(){}r=la.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ws(){}Ws.prototype.g=function(u,f){return new $t(u,f)};function $t(u,f){ht.call(this),this.g=new oa(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!Y(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!Y(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Jn(this)}j($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Ct(this.g)},$t.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ho(u),u=y);f.i.push(new yl(f.Ya++,u)),f.G==3&&Yn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,$t.aa.N.call(this)};function Vl(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}j(Vl,Wn);function bl(){ks.call(this),this.status=1}j(bl,ks);function Jn(u){this.g=u}j(Jn,la),Jn.prototype.ua=function(){dt(this.g,"a")},Jn.prototype.ta=function(u){dt(this.g,new Vl(u))},Jn.prototype.sa=function(u){dt(this.g,new bl)},Jn.prototype.ra=function(){dt(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,p_=function(){return new Ws},f_=function(){return ji()},d_=Qn,zd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,Uu=Ds,fl.COMPLETE="complete",h_=fl,Ps.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Va=Ps,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,c_=Xe}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const oy="@firebase/firestore",ay="4.8.0";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let bo="11.10.0";/**
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
 */const ys=new af("@firebase/firestore");function mo(){return ys.logLevel}function ie(r,...e){if(ys.logLevel<=ke.DEBUG){const t=e.map(wf);ys.debug(`Firestore (${bo}): ${r}`,...t)}}function Fr(r,...e){if(ys.logLevel<=ke.ERROR){const t=e.map(wf);ys.error(`Firestore (${bo}): ${r}`,...t)}}function Ci(r,...e){if(ys.logLevel<=ke.WARN){const t=e.map(wf);ys.warn(`Firestore (${bo}): ${r}`,...t)}}function wf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ve(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,m_(r,s,t)}function m_(r,e,t){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||m_(e,o,s)}function Ie(r,e){return r}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends jr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class g_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class V1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class b1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Or,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Or)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new g_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class O1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class L1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new O1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ly(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ly(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function y_(){return new TextEncoder}/**
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
 */class Ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=F1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function Bd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ce(s,o);{const l=y_(),h=U1(l.encode(uy(r,t)),l.encode(uy(e,t)));return h!==0?h:Ce(s,o)}}t+=s>65535?2:1}return Ce(r.length,e.length)}function uy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function U1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ce(r[t],e[t]);return Ce(r.length,e.length)}function Ao(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const cy="__name__";class rr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=rr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const s=rr.isNumericId(e),o=rr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?rr.extractNumericId(e).compare(rr.extractNumericId(t)):Bd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ii.fromString(e.substring(4,e.length-2))}}class Ge extends rr{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const j1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends rr{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return j1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cy}static keyField(){return new xt([cy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ce(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ce(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ce(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new ce(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ge.fromString(e))}static fromName(e){return new me(Ge.fromString(e).popFirst(5))}static empty(){return new me(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ge(e.slice()))}}/**
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
 */function v_(r,e,t){if(!t)throw new ce(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function z1(r,e,t,s){if(e===!0&&s===!0)throw new ce(Q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function hy(r){if(!me.isDocumentKey(r))throw new ce(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function dy(r){if(me.isDocumentKey(r))throw new ce(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function __(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Tf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Wt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Tf(r);throw new ce(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ct(r,e){const t={typeString:r};return e&&(t.value=e),t}function rl(r,e){if(!__(r))throw new ce(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ce(Q.INVALID_ARGUMENT,t);return!0}/**
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
 */const fy=-62135596800,py=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*py);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fy)throw new ce(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/py}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rl(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ct("string",Ke._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ke(0,0))}static max(){return new Te(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ha=-1;function B1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new Ri(o,me.empty(),e)}function $1(r){return new Ri(r.readTime,r.key,Ha)}class Ri{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ri(Te.min(),me.empty(),Ha)}static max(){return new Ri(Te.max(),me.empty(),Ha)}}function q1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Oo(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==H1)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,l=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((w=>{h[v]=w,++p,p===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Q1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Lo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ec.ue=-1;/**
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
 */const If=-1;function Tc(r){return r==null}function tc(r){return r===0&&1/r==-1/0}function G1(r){return typeof r=="number"&&Number.isInteger(r)&&!tc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const w_="";function K1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=my(e)),e=X1(r.get(t),e);return my(e)}function X1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case w_:t+="";break;default:t+=l}}return t}function my(r){return r+w_+""}/**
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
 */function gy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Vi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function E_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new kt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new yt(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new T_("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Y1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=Y1.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ki(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="server_timestamp",S_="__type__",A_="__previous_value__",C_="__local_write_time__";function Sf(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[S_])===null||t===void 0?void 0:t.stringValue)===I_}function Ic(r){const e=r.mapValue.fields[A_];return Sf(e)?Ic(e):e}function Wa(r){const e=Pi(r.mapValue.fields[C_].timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class J1{constructor(e,t,s,o,l,h,p,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const nc="(default)";class Qa{constructor(e,t){this.projectId=e,this.database=t||nc}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database===nc}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="__type__",Z1="__max__",Nu={mapValue:{}},P_="__vector__",rc="value";function xi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Sf(r)?4:tA(r)?9007199254740991:eA(r)?10:11:ve(28295,{value:r})}function hr(r,e){if(r===e)return!0;const t=xi(r);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Pi(o.timestampValue),p=Pi(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return ki(o.bytesValue).isEqual(ki(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),p=st(l.doubleValue);return h===p?tc(h)===tc(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Ao(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(gy(h)!==gy(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!hr(h[g],p[g])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Ga(r,e){return(r.values||[]).find((t=>hr(t,e)))!==void 0}function Co(r,e){if(r===e)return 0;const t=xi(r),s=xi(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const p=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return vy(r.timestampValue,e.timestampValue);case 4:return vy(Wa(r),Wa(e));case 5:return Bd(r.stringValue,e.stringValue);case 6:return(function(l,h){const p=ki(l),g=ki(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const p=l.split("/"),g=h.split("/");for(let v=0;v<p.length&&v<g.length;v++){const w=Ce(p[v],g[v]);if(w!==0)return w}return Ce(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const p=Ce(st(l.latitude),st(h.latitude));return p!==0?p:Ce(st(l.longitude),st(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return _y(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var p,g,v,w;const T=l.fields||{},I=h.fields||{},F=(p=T[rc])===null||p===void 0?void 0:p.arrayValue,j=(g=I[rc])===null||g===void 0?void 0:g.arrayValue,q=Ce(((v=F?.values)===null||v===void 0?void 0:v.length)||0,((w=j?.values)===null||w===void 0?void 0:w.length)||0);return q!==0?q:_y(F,j)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Nu.mapValue&&h===Nu.mapValue)return 0;if(l===Nu.mapValue)return 1;if(h===Nu.mapValue)return-1;const p=l.fields||{},g=Object.keys(p),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const I=Bd(g[T],w[T]);if(I!==0)return I;const F=Co(p[g[T]],v[w[T]]);if(F!==0)return F}return Ce(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function vy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=Pi(r),s=Pi(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function _y(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Co(t[o],s[o]);if(l)return l}return Ce(t.length,s.length)}function Ro(r){return $d(r)}function $d(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Pi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ki(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return me.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=$d(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${$d(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function ju(r){switch(xi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ic(r);return e?16+ju(e):16;case 5:return 2*r.stringValue.length;case 6:return ki(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+ju(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Vi(s.fields,((l,h)=>{o+=l.length+ju(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function qd(r){return!!r&&"integerValue"in r}function Af(r){return!!r&&"arrayValue"in r}function wy(r){return!!r&&"nullValue"in r}function Ey(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zu(r){return!!r&&"mapValue"in r}function eA(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[R_])===null||t===void 0?void 0:t.stringValue)===P_}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Vi(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ua(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function tA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Z1}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ua(h):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Vi(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new rn(Ua(this.value))}}function k_(r){const e=[];return Vi(r.fields,((t,s)=>{const o=new xt([t]);if(zu(s)){const l=k_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new fn(e)}/**
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
 */class jt{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new jt(e,0,Te.min(),Te.min(),Te.min(),rn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Te.min(),Te.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Te.min(),Te.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ic{constructor(e,t){this.position=e,this.inclusive=t}}function Ty(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Iy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class sc{constructor(e,t="asc"){this.field=e,this.dir=t}}function nA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class x_{}class gt extends x_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new iA(e,t,s):t==="array-contains"?new aA(e,s):t==="in"?new lA(e,s):t==="not-in"?new uA(e,s):t==="array-contains-any"?new cA(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new sA(e,s):new oA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends x_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new dr(e,t)}matches(e){return N_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function N_(r){return r.op==="and"}function D_(r){return rA(r)&&N_(r)}function rA(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function Hd(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+Ro(r.value);if(D_(r))return r.filters.map((e=>Hd(e))).join(",");{const e=r.filters.map((t=>Hd(t))).join(",");return`${r.op}(${e})`}}function V_(r,e){return r instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(r,e):r instanceof dr?(function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,p)=>l&&V_(h,o.filters[p])),!0):!1})(r,e):void ve(19439)}function b_(r){return r instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ro(t.value)}`})(r):r instanceof dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(b_).join(" ,")+"}"})(r):"Filter"}class iA extends gt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class sA extends gt{constructor(e,t){super(e,"in",t),this.keys=O_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class oA extends gt{constructor(e,t){super(e,"not-in",t),this.keys=O_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function O_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>me.fromName(s.referenceValue)))}class aA extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Af(t)&&Ga(t.arrayValue,this.value)}}class lA extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ga(this.value.arrayValue,t)}}class uA extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ga(this.value.arrayValue,t)}}class cA extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Af(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ga(this.value.arrayValue,s)))}}/**
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
 */class hA{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.Pe=null}}function Sy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new hA(r,e,t,s,o,l,h)}function Cf(r){const e=Ie(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Hd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Tc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ro(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ro(s))).join(",")),e.Pe=t}return e.Pe}function Rf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!nA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!V_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Iy(r.startAt,e.startAt)&&Iy(r.endAt,e.endAt)}function Wd(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Sc{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function dA(r,e,t,s,o,l,h,p){return new Sc(r,e,t,s,o,l,h,p)}function Ac(r){return new Sc(r)}function Ay(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fA(r){return r.collectionGroup!==null}function ja(r){const e=Ie(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new yt(xt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new sc(l,s))})),t.has(xt.keyField().canonicalString())||e.Te.push(new sc(xt.keyField(),s))}return e.Te}function or(r){const e=Ie(r);return e.Ie||(e.Ie=pA(e,ja(r))),e.Ie}function pA(r,e){if(r.limitType==="F")return Sy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new sc(o.field,l)}));const t=r.endAt?new ic(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ic(r.startAt.position,r.startAt.inclusive):null;return Sy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Qd(r,e,t){return new Sc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Cc(r,e){return Rf(or(r),or(e))&&r.limitType===e.limitType}function L_(r){return`${Cf(or(r))}|lt:${r.limitType}`}function go(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>b_(o))).join(", ")}]`),Tc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Ro(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Ro(o))).join(",")),`Target(${s})`})(or(r))}; limitType=${r.limitType})`}function Rc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of ja(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const v=Ty(h,p,g);return h.inclusive?v<=0:v<0})(s.startAt,ja(s),o)||s.endAt&&!(function(h,p,g){const v=Ty(h,p,g);return h.inclusive?v>=0:v>0})(s.endAt,ja(s),o))})(r,e)}function mA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function M_(r){return(e,t)=>{let s=!1;for(const o of ja(r)){const l=gA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function gA(r,e,t){const s=r.field.isKeyField()?me.comparator(e.key,t.key):(function(l,h,p){const g=h.data.field(l),v=p.data.field(l);return g!==null&&v!==null?Co(g,v):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
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
 */class _s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Vi(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return E_(this.inner)}size(){return this.innerSize}}/**
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
 */const yA=new et(me.comparator);function Ur(){return yA}const F_=new et(me.comparator);function ba(...r){let e=F_;for(const t of r)e=e.insert(t.key,t);return e}function U_(r){let e=F_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function hs(){return za()}function j_(){return za()}function za(){return new _s((r=>r.toString()),((r,e)=>r.isEqual(e)))}const vA=new et(me.comparator),_A=new yt(me.comparator);function xe(...r){let e=_A;for(const t of r)e=e.add(t);return e}const wA=new yt(Ce);function EA(){return wA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function z_(r){return{integerValue:""+r}}function TA(r,e){return G1(e)?z_(e):Pf(r,e)}/**
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
 */class Pc{constructor(){this._=void 0}}function IA(r,e,t){return r instanceof Ka?(function(o,l){const h={fields:{[S_]:{stringValue:I_},[C_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Sf(l)&&(l=Ic(l)),l&&(h.fields[A_]=l),{mapValue:h}})(t,e):r instanceof Xa?$_(r,e):r instanceof Ya?q_(r,e):(function(o,l){const h=B_(o,l),p=Cy(h)+Cy(o.Ee);return qd(h)&&qd(o.Ee)?z_(p):Pf(o.serializer,p)})(r,e)}function SA(r,e,t){return r instanceof Xa?$_(r,e):r instanceof Ya?q_(r,e):t}function B_(r,e){return r instanceof oc?(function(s){return qd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ka extends Pc{}class Xa extends Pc{constructor(e){super(),this.elements=e}}function $_(r,e){const t=H_(e);for(const s of r.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ya extends Pc{constructor(e){super(),this.elements=e}}function q_(r,e){let t=H_(e);for(const s of r.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class oc extends Pc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Cy(r){return st(r.integerValue||r.doubleValue)}function H_(r){return Af(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class AA{constructor(e,t){this.field=e,this.transform=t}}function CA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Xa&&o instanceof Xa||s instanceof Ya&&o instanceof Ya?Ao(s.elements,o.elements,hr):s instanceof oc&&o instanceof oc?hr(s.Ee,o.Ee):s instanceof Ka&&o instanceof Ka})(r.transform,e.transform)}class RA{constructor(e,t){this.version=e,this.transformResults=t}}class Qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class kc{}function W_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new xc(r.key,Qt.none()):new il(r.key,r.data,Qt.none());{const t=r.data,s=rn.empty();let o=new yt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new bi(r.key,s,new fn(o.toArray()),Qt.none())}}function PA(r,e,t){r instanceof il?(function(o,l,h){const p=o.value.clone(),g=Py(o.fieldTransforms,l,h.transformResults);p.setAll(g),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof bi?(function(o,l,h){if(!Bu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=Py(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Q_(o)),g.setAll(p),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ba(r,e,t,s){return r instanceof il?(function(l,h,p,g){if(!Bu(l.precondition,h))return p;const v=l.value.clone(),w=ky(l.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof bi?(function(l,h,p,g){if(!Bu(l.precondition,h))return p;const v=ky(l.fieldTransforms,g,h),w=h.data;return w.setAll(Q_(l)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,p){return Bu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function kA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=B_(s.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(s.field,l))}return t||null}function Ry(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,((l,h)=>CA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class il extends kc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class bi extends kc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Q_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Py(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,SA(h,p,t[o]))}return s}function ky(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,IA(l,h,e))}return s}class xc extends kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xA extends kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&PA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=j_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const g=W_(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,((t,s)=>Ry(t,s)))&&Ao(this.baseMutations,e.baseMutations,((t,s)=>Ry(t,s)))}}class kf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return vA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new kf(e,t,s,o)}}/**
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
 */class DA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ut,be;function bA(r){switch(r){case Q.OK:return ve(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function G_(r){if(r===void 0)return Fr("GRPC error has no .code"),Q.UNKNOWN;switch(r){case ut.OK:return Q.OK;case ut.CANCELLED:return Q.CANCELLED;case ut.UNKNOWN:return Q.UNKNOWN;case ut.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ut.INTERNAL:return Q.INTERNAL;case ut.UNAVAILABLE:return Q.UNAVAILABLE;case ut.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ut.NOT_FOUND:return Q.NOT_FOUND;case ut.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ut.ABORTED:return Q.ABORTED;case ut.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ut.DATA_LOSS:return Q.DATA_LOSS;default:return ve(39323,{code:r})}}(be=ut||(ut={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const OA=new Ii([4294967295,4294967295],0);function xy(r){const e=y_().encode(r),t=new u_;return t.update(e),new Uint8Array(t.digest())}function Ny(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ii([t,s],0),new Ii([o,l],0)]}class xf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ii.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Ii.fromNumber(s)));return o.compare(OA)===1&&(o=new Ii([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=xy(e),[s,o]=Ny(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new xf(l,o,t);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.fe===0)return;const t=xy(e),[s,o]=Ny(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,sl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Nc(Te.min(),o,new et(Ce),Ur(),xe())}}class sl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new sl(s,t,xe(),xe(),xe())}}/**
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
 */class $u{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class K_{constructor(e,t){this.targetId=e,this.De=t}}class X_{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Dy{constructor(){this.ve=0,this.Ce=Vy(),this.Fe=Nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=xe(),t=xe(),s=xe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:l})}})),new sl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Vy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class LA{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ur(),this.je=Du(),this.Je=Du(),this.He=new et(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Wd(l))if(s===0){const h=new me(l.path);this.Xe(t,h,jt.newNoDocument(h,Te.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const p=this._t(e),g=p?this.ut(p,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,p;try{h=ki(s).toUint8Array()}catch(g){if(g instanceof T_)return Ci("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new xf(h,o,l)}catch(g){return Ci(g instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.fe===0?null:p}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const p=this.st(h);if(p){if(l.current&&Wd(p.target)){const g=new me(p.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=xe();this.Je.forEach(((l,h)=>{let p=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Nc(e,t,this.He,this.ze,s);return this.ze=Ur(),this.je=Du(),this.Je=Du(),this.He=new et(Ce),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Dy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Dy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Du(){return new et(me.comparator)}function Vy(){return new et(me.comparator)}const MA={asc:"ASCENDING",desc:"DESCENDING"},FA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UA={and:"AND",or:"OR"};class jA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gd(r,e){return r.useProto3Json||Tc(e)?e:{value:e}}function ac(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function zA(r,e){return ac(r,e.toTimestamp())}function ar(r){return Ue(!!r,49232),Te.fromTimestamp((function(t){const s=Pi(t);return new Ke(s.seconds,s.nanos)})(r))}function Nf(r,e){return Kd(r,e).canonicalString()}function Kd(r,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function J_(r){const e=Ge.fromString(r);return Ue(rw(e),10190,{key:e.toString()}),e}function Xd(r,e){return Nf(r.databaseId,e.path)}function Ad(r,e){const t=J_(e);if(t.get(1)!==r.databaseId.projectId)throw new ce(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ce(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new me(ew(t))}function Z_(r,e){return Nf(r.databaseId,e)}function BA(r){const e=J_(r);return e.length===4?Ge.emptyPath():ew(e)}function Yd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ew(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function by(r,e,t){return{name:Xd(r,e),fields:t.value.mapValue.fields}}function $A(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,w){return v.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(v){const w=v.code===void 0?Q.UNKNOWN:G_(v.code);return new ce(w,v.message||"")})(h);t=new X_(s,o,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Ad(r,s.document.name),l=ar(s.document.updateTime),h=s.document.createTime?ar(s.document.createTime):Te.min(),p=new rn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,p),v=s.targetIds||[],w=s.removedTargetIds||[];t=new $u(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Ad(r,s.document),l=s.readTime?ar(s.readTime):Te.min(),h=jt.newNoDocument(o,l),p=s.removedTargetIds||[];t=new $u([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Ad(r,s.document),l=s.removedTargetIds||[];t=new $u([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new VA(o,l),p=s.targetId;t=new K_(p,h)}}return t}function qA(r,e){let t;if(e instanceof il)t={update:by(r,e.key,e.value)};else if(e instanceof xc)t={delete:Xd(r,e.key)};else if(e instanceof bi)t={update:by(r,e.key,e.data),updateMask:ZA(e.fieldMask)};else{if(!(e instanceof xA))return ve(16599,{Rt:e.type});t={verify:Xd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const p=h.transform;if(p instanceof Ka)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ya)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof oc)return{fieldPath:h.field.canonicalString(),increment:p.Ee};throw ve(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:zA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(r,e.precondition)),t}function HA(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(Te.min())&&(h=ar(l)),new RA(h,o.transformResults||[])})(t,e)))):[]}function WA(r,e){return{documents:[Z_(r,e.path)]}}function QA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Z_(r,o);const l=(function(v){if(v.length!==0)return nw(dr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((w=>(function(I){return{field:yo(I.field),direction:XA(I.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Gd(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function GA(r){let e=BA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const I=tw(T);return I instanceof dr&&D_(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(j){return new sc(vo(j.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(I)))})(t.orderBy));let p=null;t.limit&&(p=(function(T){let I;return I=typeof T=="object"?T.value:T,Tc(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(T){const I=!!T.before,F=T.values||[];return new ic(F,I)})(t.startAt));let v=null;return t.endAt&&(v=(function(T){const I=!T.before,F=T.values||[];return new ic(F,I)})(t.endAt)),dA(e,o,h,l,p,"F",g,v)}function KA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=vo(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=vo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=vo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return gt.create(vo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return dr.create(t.compositeFilter.filters.map((s=>tw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function XA(r){return MA[r]}function YA(r){return FA[r]}function JA(r){return UA[r]}function yo(r){return{fieldPath:r.canonicalString()}}function vo(r){return xt.fromServerFormat(r.fieldPath)}function nw(r){return r instanceof gt?(function(t){if(t.op==="=="){if(Ey(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NAN"}};if(wy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ey(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NAN"}};if(wy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(t.field),op:YA(t.op),value:t.value}}})(r):r instanceof dr?(function(t){const s=t.getFilters().map((o=>nw(o)));return s.length===1?s[0]:{compositeFilter:{op:JA(t.op),filters:s}}})(r):ve(54877,{filter:r})}function ZA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function rw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class vi{constructor(e,t,s,o,l=Te.min(),h=Te.min(),p=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eC{constructor(e){this.gt=e}}function tC(r){const e=GA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Qd(e,e.limit,"L"):e}/**
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
 */class nC{constructor(){this.Dn=new rC}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ri.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class rC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ge.comparator)).toArray()}}/**
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
 */const Oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iw=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(iw,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */class Po{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Po(0)}static ur(){return new Po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="LruGarbageCollector",iC=1048576;function My([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class sC{constructor(e){this.Tr=e,this.buffer=new yt(My),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();My(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Ly,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lo(t)?ie(Ly,"Ignoring IndexedDB error during garbage collection: ",t):await Oo(t)}await this.Rr(3e5)}))}}class aC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Ec.ue);const s=new sC(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Oy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,p,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,p=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(v=Date.now(),mo()<=ke.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${l} targets in `+(g-p)+`ms
	Removed ${T} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function lC(r,e){return new aC(r,e)}/**
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
 */class uC{constructor(){this.changes=new _s((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class hC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ba(s.mutation,o,fn.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=hs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=ba();return l.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=hs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,s,o){let l=Ur();const h=za(),p=(function(){return za()})();return t.forEach(((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof bi)?l=l.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ba(w.mutation,v,w.mutation.getFieldMask(),Ke.now())):h.set(v.key,fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>{var T;return p.set(v,new cC(w,(T=h.get(v))!==null&&T!==void 0?T:null))})),p)))}recalculateAndSaveOverlays(e,t){const s=za();let o=new et(((h,p)=>h-p)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||fn.empty();w=p.applyToLocalView(v,w),s.set(g,w);const T=(o.get(p.batchId)||xe()).add(g);o=o.insert(p.batchId,T)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),v=g.key,w=g.value,T=j_();w.forEach((I=>{if(!l.has(I)){const F=W_(t.get(I),s.get(I));F!==null&&T.set(I,F),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,T))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):H.resolve(hs());let p=Ha,g=l;return h.next((v=>H.forEach(v,((w,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{g=g.insert(w,I)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,xe()))).next((w=>({batchId:p,changes:U_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let o=ba();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=ba();return this.indexManager.getCollectionParents(e,l).next((p=>H.forEach(p,(g=>{const v=(function(T,I){return new Sc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,jt.newInvalidDocument(w)))}));let p=ba();return h.forEach(((g,v)=>{const w=l.get(g);w!==void 0&&Ba(w.mutation,v,fn.empty(),Ke.now()),Rc(t,v)&&(p=p.insert(g,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:tC(o.bundledQuery),readTime:ar(o.readTime)}})(t)),H.resolve()}}/**
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
 */class fC{constructor(){this.overlays=new et(me.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=hs();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=hs(),l=t.length+1,h=new me(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=l.get(v.largestBatchId);w===null&&(w=hs(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=hs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,w)=>p.set(v,w))),!(p.size()>=o)););return H.resolve(p)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new DA(t,s));let l=this.kr.get(t);l===void 0&&(l=xe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class pC{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class Df{constructor(){this.qr=new yt(St.Qr),this.$r=new yt(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new me(new Ge([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new me(new Ge([])),s=new St(t,e),o=new St(t,e+1);let l=xe();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return me.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||me.comparator(e.key,t.key)}}/**
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
 */class mC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(St.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new NA(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Yr=this.Yr.add(new St(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?If:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const p=this.Zr(h.Hr);l.push(p)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ce);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(p=>{s=s.add(p.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const h=new St(new me(l),0);let p=new yt(Ce);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(p=p.add(g.Hr)),!0)}),h),H.resolve(this.ei(p))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new St(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gC{constructor(e){this.ni=e,this.docs=(function(){return new et(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=Ur();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Ur();const h=t.path,p=new me(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||q1($1(w),s)<=0||(o.has(w.key)||Rc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new yC(this)}getSize(e){return H.resolve(this.size)}}class yC extends uC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class vC{constructor(e){this.persistence=e,this.ii=new _s((t=>Cf(t)),Rf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new Df,this.targetCount=0,this._i=Po.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Po(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
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
 */class sw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ec(0),this.ci=!1,this.ci=!0,this.li=new pC,this.referenceDelegate=e(this),this.hi=new vC(this),this.indexManager=new nC,this.remoteDocumentCache=(function(o){return new gC(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new eC(t),this.Ti=new dC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new mC(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new _C(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class _C extends W1{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Ai=new Df,this.Ri=null}static Vi(e){return new Vf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=me.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class lc{constructor(e,t){this.persistence=e,this.gi=new _s((s=>K1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=lC(this,t)}static Vi(e,t){return new lc(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((p=>{p||(s++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new bf(e,t.fromCache,s,o)}}/**
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
 */class wC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return dT()?8:Q1(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new wC;return this.ws(e,t,h).next((p=>{if(l.result=p,this.Rs)return this.Ss(e,t,h,p.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(mo()<=ke.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(mo()<=ke.DEBUG&&ie("QueryEngine","Query:",go(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(mo()<=ke.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):H.resolve())}ps(e,t){if(Ay(t))return H.resolve(null);let s=or(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Qd(t,null,"F"),s=or(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=xe(...l);return this.gs.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,p);return this.Ds(t,v,h,g.readTime)?this.ps(e,Qd(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return Ay(t)||o.isEqual(Te.min())?H.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?H.resolve(null):(mo()<=ke.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),go(t)),this.vs(e,h,t,B1(o,Ha)).next((p=>p)))}))}bs(e,t){let s=new yt(M_(e));return t.forEach(((o,l)=>{Rc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return mo()<=ke.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",go(t)),this.gs.getDocumentsMatchingQuery(e,t,Ri.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="LocalStore",TC=3e8;class IC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ce),this.Ms=new _s((l=>Cf(l)),Rf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function SC(r,e,t,s){return new IC(r,e,t,s)}async function ow(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],p=[];let g=xe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of l){p.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:p})))}))}))}function AC(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(p,g,v,w){const T=v.batch,I=T.keys();let F=H.resolve();return I.forEach((j=>{F=F.next((()=>w.getEntry(g,j))).next((q=>{const M=v.docVersions.get(j);Ue(M!==null,48541),q.version.compareTo(M)<0&&(T.applyToRemoteDocument(q,v),q.isValidDocument()&&(q.setReadTime(v.commitVersion),w.addEntry(q)))}))})),F.next((()=>p.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=xe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(g=g.add(p.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function aw(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function CC(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const p=[];e.targetChanges.forEach(((w,T)=>{const I=o.get(T);if(!I)return;p.push(t.hi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,T))));let F=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Nt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,s)),o=o.insert(T,F),(function(q,M,re){return q.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=TC?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(I,F,w)&&p.push(t.hi.updateTargetData(l,F))}));let g=Ur(),v=xe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),p.push(RC(l,h,e.documentUpdates).next((w=>{g=w.Ls,v=w.ks}))),!s.isEqual(Te.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));p.push(w)}return H.waitFor(p).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function RC(r,e,t){let s=xe(),o=xe();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Ur();return t.forEach(((p,g)=>{const v=l.get(p);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):ie(Of,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function PC(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=If),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function kC(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new vi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Jd(r,e,t){const s=Ie(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Lo(h))throw h;ie(Of,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Fy(r,e,t){const s=Ie(r);let o=Te.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,w){const T=Ie(g),I=T.Ms.get(w);return I!==void 0?H.resolve(T.Fs.get(I)):T.hi.getTargetData(v,w)})(s,h,or(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:xe()))).next((p=>(xC(s,mA(e),p),{documents:p,qs:l})))))}function xC(r,e,t){let s=r.xs.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Uy{constructor(){this.activeTargetIds=EA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NC{constructor(){this.Fo=new Uy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Uy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DC{xo(e){}shutdown(){}}/**
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
 */const jy="ConnectivityMonitor";class zy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(jy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(jy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vu=null;function Zd(){return Vu===null?Vu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vu++,"0x"+Vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="RestConnection",VC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===nc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Zd(),p=this.Go(e,t.toUriEncodedString());ie(Cd,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:v}=new URL(p),w=xo(v);return this.jo(e,p,g,s,w).then((T=>(ie(Cd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Ci(Cd,`RPC '${e}' ${h} failed with error: `,T,"url: ",p,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=VC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class OC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ft="WebChannelConnection";class LC extends bC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=Zd();return new Promise(((p,g)=>{const v=new c_;v.setWithCredentials(!0),v.listenOnce(h_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Uu.NO_ERROR:const T=v.getResponseJson();ie(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),p(T);break;case Uu.TIMEOUT:ie(Ft,`RPC '${e}' ${h} timed out`),g(new ce(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const I=v.getStatus();if(ie(Ft,`RPC '${e}' ${h} failed with status:`,I,"response text:",v.getResponseText()),I>0){let F=v.getResponseJson();Array.isArray(F)&&(F=F[0]);const j=F?.error;if(j&&j.status&&j.message){const q=(function(re){const Y=re.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(Y)>=0?Y:Q.UNKNOWN})(j.status);g(new ce(q,j.message))}else g(new ce(Q.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ce(Q.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{ie(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ie(Ft,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Zd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=p_(),p=f_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ie(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.T_(T);let I=!1,F=!1;const j=new OC({Ho:M=>{F?ie(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(I||(ie(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ie(Ft,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},Yo:()=>T.close()}),q=(M,re,Y)=>{M.listen(re,(te=>{try{Y(te)}catch(le){setTimeout((()=>{throw le}),0)}}))};return q(T,Va.EventType.OPEN,(()=>{F||(ie(Ft,`RPC '${e}' stream ${o} transport opened.`),j.s_())})),q(T,Va.EventType.CLOSE,(()=>{F||(F=!0,ie(Ft,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(T))})),q(T,Va.EventType.ERROR,(M=>{F||(F=!0,Ci(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),j.__(new ce(Q.UNAVAILABLE,"The operation could not be completed")))})),q(T,Va.EventType.MESSAGE,(M=>{var re;if(!F){const Y=M.data[0];Ue(!!Y,16349);const te=Y,le=te?.error||((re=te[0])===null||re===void 0?void 0:re.error);if(le){ie(Ft,`RPC '${e}' stream ${o} received error:`,le);const Se=le.status;let Ee=(function(R){const x=ut[R];if(x!==void 0)return G_(x)})(Se),k=le.message;Ee===void 0&&(Ee=Q.INTERNAL,k="Unknown error status: "+Se+" with message "+le.message),F=!0,j.__(new ce(Ee,k)),T.close()}else ie(Ft,`RPC '${e}' stream ${o} received:`,Y),j.a_(Y)}})),q(p,d_.STAT_EVENT,(M=>{M.stat===zd.PROXY?ie(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===zd.NOPROXY&&ie(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.o_()}),0),j}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Rd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(r){return new jA(r,!0)}/**
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
 */class lw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const By="PersistentStream";class uw{constructor(e,t,s,o,l,h,p,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new lw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ce(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(By,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ie(By,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class MC extends uw{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=$A(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?ar(h.readTime):Te.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Yd(this.serializer),t.addTarget=(function(l,h){let p;const g=h.target;if(p=Wd(g)?{documents:WA(l,g)}:{query:QA(l,g).Vt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Y_(l,h.resumeToken);const v=Gd(l,h.expectedCount);v!==null&&(p.expectedCount=v)}else if(h.snapshotVersion.compareTo(Te.min())>0){p.readTime=ac(l,h.snapshotVersion.toTimestamp());const v=Gd(l,h.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const s=KA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Yd(this.serializer),t.removeTarget=e,this.k_(t)}}class FC extends uw{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=HA(e.writeResults,e.commitTime),s=ar(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Yd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>qA(this.serializer,s)))};this.k_(t)}}/**
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
 */class UC{}class jC extends UC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,Kd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(Q.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Jo(e,Kd(t,s),o,h,p,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(Q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class zC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Fr(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const vs="RemoteStore";class BC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{ws(this)&&(ie(vs,"Restarting streams for network reachability change."),await(async function(g){const v=Ie(g);v.Ia.add(4),await ol(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Vc(v)})(this))}))})),this.Aa=new zC(s,o)}}async function Vc(r){if(ws(r))for(const e of r.da)await e(!0)}async function ol(r){for(const e of r.da)await e(!1)}function cw(r,e){const t=Ie(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Uf(t)?Ff(t):Mo(t).x_()&&Mf(t,e))}function Lf(r,e){const t=Ie(r),s=Mo(t);t.Ta.delete(e),s.x_()&&hw(t,e),t.Ta.size===0&&(s.x_()?s.B_():ws(t)&&t.Aa.set("Unknown"))}function Mf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mo(r).H_(e)}function hw(r,e){r.Ra.$e(e),Mo(r).Y_(e)}function Ff(r){r.Ra=new LA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Mo(r).start(),r.Aa.aa()}function Uf(r){return ws(r)&&!Mo(r).M_()&&r.Ta.size>0}function ws(r){return Ie(r).Ia.size===0}function dw(r){r.Ra=void 0}async function $C(r){r.Aa.set("Online")}async function qC(r){r.Ta.forEach(((e,t)=>{Mf(r,e)}))}async function HC(r,e){dw(r),Uf(r)?(r.Aa.la(e),Ff(r)):r.Aa.set("Unknown")}async function WC(r,e,t){if(r.Aa.set("Online"),e instanceof X_&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const p of l.targetIds)o.Ta.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ta.delete(p),o.Ra.removeTarget(p))})(r,e)}catch(s){ie(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uc(r,s)}else if(e instanceof $u?r.Ra.Ye(e):e instanceof K_?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Te.min()))try{const s=await aw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const p=l.Ra.Pt(h);return p.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(v);w&&l.Ta.set(v,w.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,v)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),hw(l,g);const T=new vi(w.target,g,v,w.sequenceNumber);Mf(l,T)})),l.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(s){ie(vs,"Failed to raise snapshot:",s),await uc(r,s)}}async function uc(r,e,t){if(!Lo(e))throw e;r.Ia.add(1),await ol(r),r.Aa.set("Offline"),t||(t=()=>aw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(vs,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Vc(r)}))}function fw(r,e){return e().catch((t=>uc(r,t,e)))}async function bc(r){const e=Ie(r),t=Ni(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:If;for(;QC(e);)try{const o=await PC(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,GC(e,o)}catch(o){await uc(e,o)}pw(e)&&mw(e)}function QC(r){return ws(r)&&r.Pa.length<10}function GC(r,e){r.Pa.push(e);const t=Ni(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function pw(r){return ws(r)&&!Ni(r).M_()&&r.Pa.length>0}function mw(r){Ni(r).start()}async function KC(r){Ni(r).na()}async function XC(r){const e=Ni(r);for(const t of r.Pa)e.X_(t.mutations)}async function YC(r,e,t){const s=r.Pa.shift(),o=kf.from(s,e,t);await fw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await bc(r)}async function JC(r,e){e&&Ni(r).Z_&&await(async function(s,o){if((function(h){return bA(h)&&h!==Q.ABORTED})(o.code)){const l=s.Pa.shift();Ni(s).N_(),await fw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await bc(s)}})(r,e),pw(r)&&mw(r)}async function $y(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ie(vs,"RemoteStore received new credentials");const s=ws(t);t.Ia.add(3),await ol(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Vc(t)}async function ZC(r,e){const t=Ie(r);e?(t.Ia.delete(2),await Vc(t)):e||(t.Ia.add(2),await ol(t),t.Aa.set("Unknown"))}function Mo(r){return r.Va||(r.Va=(function(t,s,o){const l=Ie(t);return l.ia(),new MC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:$C.bind(null,r),e_:qC.bind(null,r),n_:HC.bind(null,r),J_:WC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Uf(r)?Ff(r):r.Aa.set("Unknown")):(await r.Va.stop(),dw(r))}))),r.Va}function Ni(r){return r.ma||(r.ma=(function(t,s,o){const l=Ie(t);return l.ia(),new FC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:KC.bind(null,r),n_:JC.bind(null,r),ea:XC.bind(null,r),ta:YC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await bc(r)):(await r.ma.stop(),r.Pa.length>0&&(ie(vs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class jf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new jf(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zf(r,e){if(Fr("AsyncQueue",`${e}: ${r}`),Lo(r))return new ce(Q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Io{static emptySet(e){return new Io(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=ba(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Io;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class qy{constructor(){this.fa=new et(me.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ko{constructor(e,t,s,o,l,h,p,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new ko(e,t,Io.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class eR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class tR{constructor(){this.queries=Hy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=Hy(),l.forEach(((h,p)=>{for(const g of p.wa)g.onError(s)}))})(this,new ce(Q.ABORTED,"Firestore shutting down"))}}function Hy(){return new _s((r=>L_(r)),Cc)}async function Bf(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new eR,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=zf(h,`Initialization of query '${go(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&qf(t)}async function $f(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function nR(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const p of h.wa)p.Ca(o)&&(s=!0);h.ya=o}}s&&qf(t)}function rR(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function qf(r){r.Da.forEach((e=>{e.next()}))}var ef,Wy;(Wy=ef||(ef={})).Fa="default",Wy.Cache="cache";class Hf{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ef.Cache}}/**
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
 */class gw{constructor(e){this.key=e}}class yw{constructor(e){this.key=e}}class iR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=xe(),this.mutatedKeys=xe(),this.Xa=M_(e),this.eu=new Io(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new qy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const I=o.get(w),F=Rc(this.query,T)?T:null,j=!!I&&this.mutatedKeys.has(I.key),q=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let M=!1;I&&F?I.data.isEqual(F.data)?j!==q&&(s.track({type:3,doc:F}),M=!0):this.iu(I,F)||(s.track({type:2,doc:F}),M=!0,(g&&this.Xa(F,g)>0||v&&this.Xa(F,v)<0)&&(p=!0)):!I&&F?(s.track({type:0,doc:F}),M=!0):I&&!F&&(s.track({type:1,doc:I}),M=!0,(g||v)&&(p=!0)),M&&(F?(h=h.add(F),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:p,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,T)=>(function(F,j){const q=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:M})}};return q(F)-q(j)})(w.type,T.type)||this.Xa(w.doc,T.doc))),this.su(s),o=o!=null&&o;const p=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new ko(this.query,e.eu,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=xe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new yw(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new gw(s))})),t}uu(e){this.Ha=e.qs,this.Za=xe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ko.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Wf="SyncEngine";class sR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class oR{constructor(e){this.key=e,this.lu=!1}}class aR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new _s((p=>L_(p)),Cc),this.Tu=new Map,this.Iu=new Set,this.du=new et(me.comparator),this.Eu=new Map,this.Au=new Df,this.Ru={},this.Vu=new Map,this.mu=Po.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function lR(r,e,t=!0){const s=Iw(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await vw(s,e,t,!0),o}async function uR(r,e){const t=Iw(r);await vw(t,e,!0,!1)}async function vw(r,e,t,s){const o=await kC(r.localStore,or(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await cR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&cw(r.remoteStore,o),p}async function cR(r,e,t,s,o){r.gu=(T,I,F)=>(async function(q,M,re,Y){let te=M.view.nu(re);te.Ds&&(te=await Fy(q.localStore,M.query,!1).then((({documents:k})=>M.view.nu(k,te))));const le=Y&&Y.targetChanges.get(M.targetId),Se=Y&&Y.targetMismatches.get(M.targetId)!=null,Ee=M.view.applyChanges(te,q.isPrimaryClient,le,Se);return Gy(q,M.targetId,Ee._u),Ee.snapshot})(r,T,I,F);const l=await Fy(r.localStore,e,!0),h=new iR(e,l.qs),p=h.nu(l.documents),g=sl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(p,r.isPrimaryClient,g);Gy(r,t,v._u);const w=new sR(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function hR(r,e,t){const s=Ie(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Cc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Jd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Lf(s.remoteStore,o.targetId),tf(s,o.targetId)})).catch(Oo)):(tf(s,o.targetId),await Jd(s.localStore,o.targetId,!0))}async function dR(r,e){const t=Ie(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Lf(t.remoteStore,s.targetId))}async function fR(r,e,t){const s=wR(r);try{const o=await(function(h,p){const g=Ie(h),v=Ke.now(),w=p.reduce(((F,j)=>F.add(j.key)),xe());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let j=Ur(),q=xe();return g.Os.getEntries(F,w).next((M=>{j=M,j.forEach(((re,Y)=>{Y.isValidDocument()||(q=q.add(re))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,j))).next((M=>{T=M;const re=[];for(const Y of p){const te=kA(Y,T.get(Y.key).overlayedDocument);te!=null&&re.push(new bi(Y.key,te,k_(te.value.mapValue),Qt.exists(!0)))}return g.mutationQueue.addMutationBatch(F,v,re,p)})).next((M=>{I=M;const re=M.applyToLocalDocumentSet(T,q);return g.documentOverlayCache.saveOverlays(F,M.batchId,re)}))})).then((()=>({batchId:I.batchId,changes:U_(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new et(Ce)),v=v.insert(p,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await al(s,o.changes),await bc(s.remoteStore)}catch(o){const l=zf(o,"Failed to persist write");t.reject(l)}}async function _w(r,e){const t=Ie(r);try{const s=await CC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await al(t,s,e)}catch(s){await Oo(s)}}function Qy(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=Ie(h);g.onlineState=p;let v=!1;g.queries.forEach(((w,T)=>{for(const I of T.wa)I.va(p)&&(v=!0)})),v&&qf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function pR(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new et(me.comparator);h=h.insert(l,jt.newNoDocument(l,Te.min()));const p=xe().add(l),g=new Nc(Te.min(),new Map,new et(Ce),h,p);await _w(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Qf(s)}else await Jd(s.localStore,e,!1).then((()=>tf(s,e,t))).catch(Oo)}async function mR(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await AC(t.localStore,e);Ew(t,s,null),ww(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await al(t,o)}catch(o){await Oo(o)}}async function gR(r,e,t){const s=Ie(r);try{const o=await(function(h,p){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return g.mutationQueue.lookupMutationBatch(v,p).next((T=>(Ue(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(v,T)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>g.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);Ew(s,e,t),ww(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await al(s,o)}catch(o){await Oo(o)}}function ww(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Ew(r,e,t){const s=Ie(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function tf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Tw(r,s)}))}function Tw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Lf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Qf(r))}function Gy(r,e,t){for(const s of t)s instanceof gw?(r.Au.addReference(s.key,e),yR(r,s)):s instanceof yw?(ie(Wf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Tw(r,s.key)):ve(19791,{yu:s})}function yR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ie(Wf,"New document in limbo: "+t),r.Iu.add(s),Qf(r))}function Qf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new me(Ge.fromString(e)),s=r.mu.next();r.Eu.set(s,new oR(t)),r.du=r.du.insert(t,s),cw(r.remoteStore,new vi(or(Ac(t.path)),s,"TargetPurposeLimboResolution",Ec.ue))}}async function al(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((p,g)=>{h.push(s.gu(g,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:(w=t?.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(v){o.push(v);const T=bf.Es(g.targetId,v);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const w=Ie(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(v,(I=>H.forEach(I.Is,(F=>w.persistence.referenceDelegate.addReference(T,I.targetId,F))).next((()=>H.forEach(I.ds,(F=>w.persistence.referenceDelegate.removeReference(T,I.targetId,F)))))))))}catch(T){if(!Lo(T))throw T;ie(Of,"Failed to update sequence numbers: "+T)}for(const T of v){const I=T.targetId;if(!T.fromCache){const F=w.Fs.get(I),j=F.snapshotVersion,q=F.withLastLimboFreeSnapshotVersion(j);w.Fs=w.Fs.insert(I,q)}}})(s.localStore,l))}async function vR(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ie(Wf,"User change. New user:",e.toKey());const s=await ow(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((p=>{p.forEach((g=>{g.reject(new ce(Q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await al(t,s.Bs)}}function _R(r,e){const t=Ie(r),s=t.Eu.get(e);if(s&&s.lu)return xe().add(s.key);{let o=xe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const p=t.Pu.get(h);o=o.unionWith(p.view.tu)}return o}}function Iw(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=_w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_R.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pR.bind(null,e),e.hu.J_=nR.bind(null,e.eventManager),e.hu.pu=rR.bind(null,e.eventManager),e}function wR(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gR.bind(null,e),e}class cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return SC(this.persistence,new EC,e.initialUser,this.serializer)}Du(e){return new sw(Vf.Vi,this.serializer)}bu(e){return new NC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cc.provider={build:()=>new cc};class ER extends cc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof lc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new oC(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new sw((s=>lc.Vi(s,t)),this.serializer)}}class nf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vR.bind(null,this.syncEngine),await ZC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new tR})()}createDatastore(e){const t=Dc(e.databaseInfo.databaseId),s=(function(l){return new LC(l)})(e.databaseInfo);return(function(l,h,p,g){return new jC(l,h,p,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,p){return new BC(s,o,l,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Qy(this.syncEngine,t,0)),(function(){return zy.C()?new zy:new DC})())}createSyncEngine(e,t){return(function(o,l,h,p,g,v,w){const T=new aR(o,l,h,p,g,v);return w&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);ie(vs,"RemoteStore shutting down."),l.Ia.add(5),await ol(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nf.provider={build:()=>new nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Di="FirestoreClient";class TR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ie(Di,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Di,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=zf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Pd(r,e){r.asyncQueue.verifyOperationInProgress(),ie(Di,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await ow(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ci("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ci("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Ky(r,e){r.asyncQueue.verifyOperationInProgress();const t=await IR(r);ie(Di,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>$y(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>$y(e.remoteStore,o))),r._onlineComponents=e}async function IR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(Di,"Using user provided OfflineComponentProvider");try{await Pd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ci("Error using user provided cache. Falling back to memory cache: "+t),await Pd(r,new cc)}}else ie(Di,"Using default OfflineComponentProvider"),await Pd(r,new ER(void 0));return r._offlineComponents}async function Sw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(Di,"Using user provided OnlineComponentProvider"),await Ky(r,r._uninitializedComponentsProvider._online)):(ie(Di,"Using default OnlineComponentProvider"),await Ky(r,new nf))),r._onlineComponents}function SR(r){return Sw(r).then((e=>e.syncEngine))}async function hc(r){const e=await Sw(r),t=e.eventManager;return t.onListen=lR.bind(null,e.syncEngine),t.onUnlisten=hR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dR.bind(null,e.syncEngine),t}function AR(r,e,t={}){const s=new Or;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,g,v){const w=new Gf({next:I=>{w.Ou(),h.enqueueAndForget((()=>$f(l,T)));const F=I.docs.has(p);!F&&I.fromCache?v.reject(new ce(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&I.fromCache&&g&&g.source==="server"?v.reject(new ce(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(I)},error:I=>v.reject(I)}),T=new Hf(Ac(p.path),w,{includeMetadataChanges:!0,ka:!0});return Bf(l,T)})(await hc(r),r.asyncQueue,e,t,s))),s.promise}function CR(r,e,t={}){const s=new Or;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,g,v){const w=new Gf({next:I=>{w.Ou(),h.enqueueAndForget((()=>$f(l,T))),I.fromCache&&g.source==="server"?v.reject(new ce(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(I)},error:I=>v.reject(I)}),T=new Hf(p,w,{includeMetadataChanges:!0,ka:!0});return Bf(l,T)})(await hc(r),r.asyncQueue,e,t,s))),s.promise}/**
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
 */function Aw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firestore.googleapis.com",Yy=!0;class Jy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cw,this.ssl=Yy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Yy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iC)throw new ce(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Aw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new D1;switch(s.type){case"firstParty":return new L1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Xy.get(t);s&&(ie("ComponentProvider","Removing Datastore"),Xy.delete(t),s.terminate())})(this),Promise.resolve()}}function RR(r,e,t,s={}){var o;r=Wt(r,Oc);const l=xo(e),h=r._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(Iv(`https://${g}`),Sv("Firestore",!0)),h.host!==Cw&&h.host!==g&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!ps(v,p)&&(r._setSettings(v),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ut.MOCK_USER;else{w=rT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new ce(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(I)}r._authCredentials=new V1(new g_(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ll(this.firestore,e,this._query)}}class ot{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rl(t,ot._jsonSchema))return new ot(e,s||null,new me(Ge.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ct("string",ot._jsonSchemaVersion),referencePath:ct("string")};class Si extends ll{constructor(e,t,s){super(e,t,Ac(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new me(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function Kf(r,e,...t){if(r=vt(r),v_("collection","path",e),r instanceof Oc){const s=Ge.fromString(e,...t);return dy(s),new Si(r,null,s)}{if(!(r instanceof ot||r instanceof Si))throw new ce(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return dy(s),new Si(r.firestore,null,s)}}function Es(r,e,...t){if(r=vt(r),arguments.length===1&&(e=Ef.newId()),v_("doc","path",e),r instanceof Oc){const s=Ge.fromString(e,...t);return hy(s),new ot(r,null,new me(s))}{if(!(r instanceof ot||r instanceof Si))throw new ce(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return hy(s),new ot(r.firestore,r instanceof Si?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="AsyncQueue";class ev{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new lw(this,"async_queue_retry"),this.oc=()=>{const s=Rd();s&&ie(Zy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Rd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Rd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Or;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Lo(e))throw e;ie(Zy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Fr("INTERNAL UNHANDLED ERROR: ",tv(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=jf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:tv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function tv(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function nv(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class fr extends Oc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ev,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ev(e),this._firestoreClient=void 0,await e}}}function PR(r,e){const t=typeof r=="object"?r:Pv(),s=typeof r=="string"?r:nc,o=uf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=tT("firestore");l&&RR(o,...l)}return o}function ul(r){if(r._terminated)throw new ce(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||kR(r),r._firestoreClient}function kR(r){var e,t,s;const o=r._freezeSettings(),l=(function(p,g,v,w){return new J1(p,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Aw(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new TR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(p){const g=p?._online.build();return{_offline:p?._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Nt.fromBase64String(e))}catch(t){throw new ce(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rl(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:ct("string",An._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this._methodName=e}}/**
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
 */class lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lr._jsonSchemaVersion}}static fromJSON(e){if(rl(e,lr._jsonSchema))return new lr(e.latitude,e.longitude)}}lr._jsonSchemaVersion="firestore/geoPoint/1.0",lr._jsonSchema={type:ct("string",lr._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class ur{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rl(e,ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ur(e.vectorValues);throw new ce(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ur._jsonSchemaVersion="firestore/vectorValue/1.0",ur._jsonSchema={type:ct("string",ur._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const xR=/^__.*__$/;class NR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new bi(e,this.data,this.fieldMask,t,this.fieldTransforms):new il(e,this.data,t,this.fieldTransforms)}}class Rw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new bi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class Xf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return dc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Pw(this.Ec)&&xR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class DR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Dc(e)}Dc(e,t,s,o=!1){return new Xf({Ec:e,methodName:t,bc:s,path:xt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(r){const e=r._freezeSettings(),t=Dc(r._databaseId);return new DR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Yf(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);Zf("Data must be an object, but it was:",h,s);const p=Nw(s,h);let g,v;if(l.merge)g=new fn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const I=rf(e,T,t);if(!h.contains(I))throw new ce(Q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Vw(w,I)||w.push(I)}g=new fn(w),v=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,v=h.fieldTransforms;return new NR(new rn(p),g,v)}class Fc extends Lc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fc}}class Jf extends Lc{_toFieldTransform(e){return new AA(e.path,new Ka)}isEqual(e){return e instanceof Jf}}function kw(r,e,t,s){const o=r.Dc(1,e,t);Zf("Data must be an object, but it was:",o,s);const l=[],h=rn.empty();Vi(s,((g,v)=>{const w=ep(e,g,t);v=vt(v);const T=o.gc(w);if(v instanceof Fc)l.push(w);else{const I=Uc(v,T);I!=null&&(l.push(w),h.set(w,I))}}));const p=new fn(l);return new Rw(h,p,o.fieldTransforms)}function xw(r,e,t,s,o,l){const h=r.Dc(1,e,t),p=[rf(e,s,t)],g=[o];if(l.length%2!=0)throw new ce(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)p.push(rf(e,l[I])),g.push(l[I+1]);const v=[],w=rn.empty();for(let I=p.length-1;I>=0;--I)if(!Vw(v,p[I])){const F=p[I];let j=g[I];j=vt(j);const q=h.gc(F);if(j instanceof Fc)v.push(F);else{const M=Uc(j,q);M!=null&&(v.push(F),w.set(F,M))}}const T=new fn(v);return new Rw(w,T,h.fieldTransforms)}function Uc(r,e){if(Dw(r=vt(r)))return Zf("Unsupported field value:",e,r),Nw(r,e);if(r instanceof Lc)return(function(s,o){if(!Pw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const p of s){let g=Uc(p,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=vt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return TA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ke.fromDate(s);return{timestampValue:ac(o.serializer,l)}}if(s instanceof Ke){const l=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ac(o.serializer,l)}}if(s instanceof lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof An)return{bytesValue:Y_(o.serializer,s._byteString)};if(s instanceof ot){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Nf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ur)return(function(h,p){return{mapValue:{fields:{[R_]:{stringValue:P_},[rc]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw p.wc("VectorValues must only contain numeric values.");return Pf(p.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Tf(s)}`)})(r,e)}function Nw(r,e){const t={};return E_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vi(r,((s,o)=>{const l=Uc(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Dw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ke||r instanceof lr||r instanceof An||r instanceof ot||r instanceof Lc||r instanceof ur)}function Zf(r,e,t){if(!Dw(t)||!__(t)){const s=Tf(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function rf(r,e,t){if((e=vt(e))instanceof cl)return e._internalPath;if(typeof e=="string")return ep(r,e);throw dc("Field path arguments must be of type string or ",r,!1,void 0,t)}const VR=new RegExp("[~\\*/\\[\\]]");function ep(r,e,t){if(e.search(VR)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new cl(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function dc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ce(Q.INVALID_ARGUMENT,p+r+g)}function Vw(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ow("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bR extends bw{data(){return super.data()}}function Ow(r,e){return typeof e=="string"?ep(r,e):e instanceof cl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ce(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class OR{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Vi(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[rc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new ur(l)}convertGeoPoint(e){return new lr(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Pi(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(rw(s),9688,{name:e});const o=new Qa(s.get(1),s.get(3)),l=new me(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends bw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ow("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ds._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:ct("string",ds._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class qu extends ds{data(e={}){return super.data(e)}}class fs{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qu(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new qu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new La(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const g=new qu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new La(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return p.type!==0&&(v=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),w=h.indexOf(p.doc.key)),{type:LR(p.type),doc:g,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(r){r=Wt(r,ot);const e=Wt(r.firestore,fr);return AR(ul(e),r._key).then((t=>Uw(e,r,t)))}fs._jsonSchemaVersion="firestore/querySnapshot/1.0",fs._jsonSchema={type:ct("string",fs._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class np extends OR{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function Mw(r){r=Wt(r,ll);const e=Wt(r.firestore,fr),t=ul(e),s=new np(e);return Lw(r._query),CR(t,r._query).then((o=>new fs(e,s,r,o)))}function Fw(r,e,t){r=Wt(r,ot);const s=Wt(r.firestore,fr),o=tp(r.converter,e,t);return hl(s,[Yf(Mc(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Qt.none())])}function Oi(r,e,t,...s){r=Wt(r,ot);const o=Wt(r.firestore,fr),l=Mc(o);let h;return h=typeof(e=vt(e))=="string"||e instanceof cl?xw(l,"updateDoc",r._key,e,t,s):kw(l,"updateDoc",r._key,e),hl(o,[h.toMutation(r._key,Qt.exists(!0))])}function MR(r){return hl(Wt(r.firestore,fr),[new xc(r._key,Qt.none())])}function FR(r,e){const t=Wt(r.firestore,fr),s=Es(r),o=tp(r.converter,e);return hl(t,[Yf(Mc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Qt.exists(!1))]).then((()=>s))}function rp(r,...e){var t,s,o;r=vt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||nv(e[h])||(l=e[h++]);const p={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(nv(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,v,w;if(r instanceof ot)v=Wt(r.firestore,fr),w=Ac(r._key.path),g={next:T=>{e[h]&&e[h](Uw(v,r,T))},error:e[h+1],complete:e[h+2]};else{const T=Wt(r,ll);v=Wt(T.firestore,fr),w=T._query;const I=new np(v);g={next:F=>{e[h]&&e[h](new fs(v,I,T,F))},error:e[h+1],complete:e[h+2]},Lw(r._query)}return(function(I,F,j,q){const M=new Gf(q),re=new Hf(F,M,j);return I.asyncQueue.enqueueAndForget((async()=>Bf(await hc(I),re))),()=>{M.Ou(),I.asyncQueue.enqueueAndForget((async()=>$f(await hc(I),re)))}})(ul(v),w,p,g)}function hl(r,e){return(function(s,o){const l=new Or;return s.asyncQueue.enqueueAndForget((async()=>fR(await SR(s),o,l))),l.promise})(ul(r),e)}function Uw(r,e,t){const s=t.docs.get(e._key),o=new np(r);return new ds(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Mc(e)}set(e,t,s){this._verifyNotCommitted();const o=kd(e,this._firestore),l=tp(o.converter,t,s),h=Yf(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,Qt.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const l=kd(e,this._firestore);let h;return h=typeof(t=vt(t))=="string"||t instanceof cl?xw(this._dataReader,"WriteBatch.update",l._key,t,s,o):kw(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,Qt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kd(e,this._firestore);return this._mutations=this._mutations.concat(new xc(t._key,Qt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce(Q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kd(r,e){if((r=vt(r)).firestore!==e)throw new ce(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function qn(){return new Jf("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(r){return ul(r=Wt(r,fr)),new UR(r,(e=>hl(r,e)))}(function(e,t=!0){(function(o){bo=o})(No),So(new ms("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new fr(new b1(s.getProvider("auth-internal")),new M1(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ce(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(v.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),Ei(oy,ay,e),Ei(oy,ay,"esm2017")})();const zR={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},jw=Rv(zR),Bn=x1(jw),pr=PR(jw),BR=new ir;function zw(){return Bn.currentUser?Promise.resolve(Bn.currentUser):fS(Bn)}async function $R(){const r=BR,e=Bn.currentUser;if(e&&e.isAnonymous)try{return await US(e,r)}catch(t){if(t.code==="auth/credential-already-in-use"){const s=ir.credentialFromError(t);return s?await gS(Bn,s):await Yg(Bn,r)}throw t}return Yg(Bn,r)}const ip=ae.createContext(void 0);function qR({children:r}){const[e,t]=ae.useState(Bn.currentUser),[s,o]=ae.useState(!0);ae.useEffect(()=>{Bn.currentUser||zw().catch(()=>{});const p=_S(Bn,g=>{t(g),o(!1)});return()=>p()},[]);const l=!!e&&e.providerData.some(p=>p.providerId==="github.com"),h={user:e,loading:s,isInstructor:l};return $.jsx(ip.Provider,{value:h,children:r})}function HR(){const r=ae.useContext(ip);if(!r)throw new Error("useAuthContext must be used inside AuthProvider");return r}const Bw=Kf(pr,"quizzes"),Hn=Es(pr,"quizState","global");async function WR(r,e=[]){const t={name:r,questions:Array.isArray(e)?e:[],createdAt:qn(),updatedAt:qn()};return(await FR(Bw,t)).id}async function QR(){return(await Mw(Bw)).docs.map(e=>({id:e.id,...e.data()}))}async function sp(r){const e=Es(pr,"quizzes",r),t=await jc(e);if(!t.exists())throw new Error("Quiz not found");return{id:t.id,...t.data()}}async function GR(r,e){const t=Es(pr,"quizzes",r);await Oi(t,{...e,updatedAt:qn()})}async function KR(r){const e=await jc(Hn);if(e.exists()&&e.data().activeQuizId===r)throw new Error("Cannot delete the active quiz");await MR(Es(pr,"quizzes",r))}function op(r){return rp(Hn,e=>r(e.exists()?e.data():null))}async function XR(){(await jc(Hn)).exists()||await Fw(Hn,{activeQuizId:null,currentQuestion:0,open:!1,reveal:!1,ended:!1,scoreboardVisible:!1,updatedAt:qn()})}async function xd(r){await Oi(Hn,{activeQuizId:r,currentQuestion:0,open:!1,reveal:!1,ended:!1,scoreboardVisible:!1,updatedAt:qn()})}async function rv(r){await Oi(Hn,{currentQuestion:r,open:!1,reveal:!1,updatedAt:qn()})}async function iv(r){await Oi(Hn,{open:r,updatedAt:qn()})}async function sv(r){await Oi(Hn,{reveal:r,updatedAt:qn()})}async function YR(){await Oi(Hn,{currentQuestion:0,open:!1,reveal:!1,ended:!1,scoreboardVisible:!1,updatedAt:qn()}),await $w()}async function JR(){await Oi(Hn,{open:!1,reveal:!0,ended:!0,updatedAt:qn()})}async function ZR(r,e){const t=Bn.currentUser;if(!t)throw new Error("Not authenticated");const s=Es(pr,"answers",t.uid),o=await jc(s),l=o.exists()?o.data():{},h=l.answers||{};h[r]={answer:e,ts:Date.now()},await Fw(s,{name:l.name||t.displayName||t.uid.slice(0,6),answers:h},{merge:!0})}function eP(r){return rp(Kf(pr,"answers"),e=>r(e.docs.map(t=>({id:t.id,...t.data()}))))}async function $w(){const r=await Mw(Kf(pr,"answers")),e=jR(pr);r.docs.forEach(t=>e.delete(t.ref)),r.docs.length&&await e.commit()}function tP(r,e,t){const s=t||r?.questions||[],o=Object.fromEntries(s.map(l=>[l.id,l.correct]));return e.map(l=>{const h=l.answers||{};let p=0;return Object.entries(h).forEach(([g,v])=>{o[g]&&o[g]===v.answer&&p++}),{id:l.id,name:l.name||l.id,correct:p,total:Object.keys(h).length}}).sort((l,h)=>h.correct-l.correct||l.name.localeCompare(h.name))}async function nP(r){await Oi(Hn,{scoreboardVisible:r,updatedAt:qn()})}const rP=({onRegister:r})=>{const[e,t]=ae.useState(""),s=o=>{o.preventDefault(),e.trim()&&(r(e.trim()),t(""))};return $.jsxs("form",{onSubmit:s,className:"flex flex-col items-center",children:[$.jsx("label",{htmlFor:"name",className:"mb-2 text-lg font-semibold",children:"Enter your name:"}),$.jsx("input",{type:"text",id:"name",value:e,onChange:o=>t(o.target.value),className:"border border-gray-300 rounded p-2 mb-4",required:!0}),$.jsx("button",{type:"submit",className:"bg-blue-500 text-white rounded p-2",children:"Register"})]})},iP=()=>{const{user:r}=ae.useContext(ip),[e,t]=ae.useState(null),[s,o]=ae.useState(null),[l,h]=ae.useState(),[p,g]=ae.useState({});if(ae.useEffect(()=>{let Y;zw().then(le=>{const Se=Es(pr,"answers",le.uid);Y=rp(Se,Ee=>{if(Ee.exists()){const k=Ee.data();g(k.answers||{});const S=e?.currentQuestion;if(s&&typeof S=="number"){const R=s.questions[S];R&&k.answers?.[R.id]?.answer&&h(k.answers[R.id].answer)}}})}).catch(()=>{});const te=op(async le=>{if(t(le),le?.activeQuizId){const Se=await sp(le.activeQuizId).catch(()=>null);o(Se),h(void 0)}else o(null)});return()=>{te&&te(),Y&&Y()}},[]),!e||!e.activeQuizId)return $.jsx("div",{className:"p-4",children:"Waiting for quiz..."});if(!s)return $.jsx("div",{className:"p-4",children:"Loading quiz…"});const v=e.currentQuestion,w=s.questions[v];if(!w)return $.jsx("div",{className:"p-4",children:"No question."});const T=p[w.id]?.answer,I=l??T,F=e.open&&!e.ended,j=!F||e.ended;async function q(Y){j||(h(Y),await ZR(w.id,Y).catch(te=>{console.error(te),h(I)}))}const M=s.questions.reduce((Y,te,le)=>le<v||le===v&&e.reveal?Y+1:Y,0),re=s.questions.reduce((Y,te,le)=>{if(le<v||le===v&&e.reveal){const Se=p[te.id];if(Se&&Se.answer===te.correct)return Y+1}return Y},0);return $.jsxs($.Fragment,{children:[$.jsx("header",{children:$.jsx("h1",{children:s.name})}),$.jsx("div",{className:"p-4 pb-6 space-y-5 max-w-xl mt-auto mb-auto",children:r?$.jsxs($.Fragment,{children:[$.jsx("div",{className:"flex items-baseline gap-3",children:$.jsxs("span",{className:"text-sm font-semibold text-gray-500 tabular-nums",children:["Q",v+1," / ",s.questions.length]})}),$.jsxs("div",{children:[$.jsx("p",{className:"font-medium text-lg mb-3",children:w.text}),$.jsx("div",{className:"grid gap-2 text-lg",children:w.options.map(Y=>{const te=I===Y,le=e.reveal&&w.correct===Y,Se=e.reveal&&te&&w.correct!==Y;return $.jsxs("button",{disabled:j,onClick:()=>q(Y),className:["border rounded pl-3 pr-8 py-2 text-left transition relative",F&&"cursor-pointer",!e.reveal&&!te&&F&&"bg-white dark:bg-blue-700 dark:text-white hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-200",!e.reveal&&"hover:border-blue-500",te&&!e.reveal&&"bg-blue-700 border-transparent text-white dark:bg-white dark:text-blue-700",le&&"opacity-100 bg-green-500 border-green-700 dark:border-green-300 text-white",Se&&"opacity-100 bg-red-500 border-red-700 dark:border-red-300 text-white",!F&&"opacity-50 pointer-events-none",j&&!te&&"cursor-not-allowed"].filter(Boolean).join(" "),children:[Y,le&&$.jsx("span",{className:"absolute top-2 right-2 leading-none","aria-label":"Correct answer",children:"✔"}),Se&&$.jsx("span",{className:"absolute top-2 right-2 leading-none","aria-label":"Your (incorrect) answer",children:"✖"})]},Y)})})]}),$.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[$.jsxs("div",{className:"rounded p-3 bg-gray-500 text-white text-sm md:col-span-2",children:[$.jsx("div",{className:"font-medium mb-1",children:"Status"}),e.ended&&"Quiz ended.",!e.ended&&F&&!I&&"Select an answer...",!e.ended&&F&&I&&"Answer selected",!e.ended&&!F&&!e.reveal&&"Round closed",!e.ended&&e.reveal&&"Answer revealed"]}),M>0&&$.jsxs("div",{className:"rounded p-3 bg-blue-500 text-white text-sm grid grid-cols-2 gap-2",children:[$.jsx("div",{className:"font-medium mb-1 col-span-2",children:"Your score"}),$.jsxs("div",{className:"col-span-2 text-2xl leading-none tabular-nums",children:[$.jsx("strong",{children:re})," / ",M]}),M<v+1&&!e.reveal&&$.jsx("div",{className:"text-xs text-blue-200 col-span-2",children:"Score updates after this answer is revealed."})]})]})]}):$.jsx(rP,{})}),$.jsxs("footer",{children:[$.jsx("a",{href:"https://www.sdu.dk/en/om-sdu/institutter-centre/oekonomiskinstitut",title:"SDU: University of Southern Denmark",className:"sdu"}),$.jsx("a",{href:"https://www.nickford.com",title:"Nick Ford",className:"nf"})]})]})};function sP({state:r}){const[e,t]=ae.useState([]),[s,o]=ae.useState(null),[l,h]=ae.useState(null),[p,g]=ae.useState(!1),v=r?.activeQuizId;async function w(){if(t(await QR()),v){const j=await sp(v);o(j)}else o(null)}ae.useEffect(()=>{w()},[v]);function T(j){return j.split(/\n\s*\n/).map(M=>M.trim()).filter(Boolean).map((M,re)=>{const Y=M.split(`
`).map(Ee=>Ee.trim()).filter(Boolean),te=Y[0],le=[];let Se="";return Y.slice(1).forEach(Ee=>{const k=Ee.startsWith("*"),S=Ee.replace(/^\*/,"").trim();S&&(le.push(S),k&&(Se=S))}),!Se&&le.length&&(Se=le[0]),{id:"q"+(re+1),text:te,options:le.slice(0,4),correct:Se}})}async function I(){if(l){g(!0);try{const j=T(l.questionsText);if(l.id)await GR(l.id,{name:l.name,questions:j});else{const q=await WR(l.name,j);r.activeQuizId||await xd(q)}h(null),await w()}finally{g(!1)}}}function F(j){const q=Array.isArray(j?.questions)?j.questions:[];return q.length?q.map(M=>{const re=(M.options||[]).map(Y=>Y===M.correct?"*"+Y:Y).join(`
`);return M.text+`
`+re}).join(`

`):`Sample question?
*Option A
Option B`}return $.jsxs("div",{className:"space-y-4 max-w-4xl ml-auto mr-auto",children:[$.jsxs("div",{className:"flex gap-2 flex-wrap items-center justify-between",children:[$.jsx("h2",{className:"text-xl font-semibold mr-auto",children:"Quizzes"}),$.jsx("button",{className:"px-3 py-1 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white border border-transparent",onClick:()=>h({name:"New Quiz",questionsText:`Question 1?
*Option A
Option B

Question 2?
*Yes
No`,id:void 0}),children:"New quiz"}),$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer",onClick:w,children:"Refresh"})]}),$.jsxs("div",{className:"grid gap-2 w-full",children:[e.map(j=>$.jsxs("div",{className:`rounded p-4 py-3 flex flex-col gap-2 ${j.id===v?"bg-white dark:bg-blue-700 dark:text-white":"bg-grey-400 dark:bg-blue-800 dark:text-white"}`,children:[$.jsxs("div",{className:"flex justify-between gap-4",children:[$.jsx("span",{className:"font-medium",children:j.name}),$.jsxs("div",{className:"flex gap-2",children:[$.jsx("button",{className:"text-sm px-2 py-1 border rounded cursor-pointer hover:bg-blue-600 hover:text-white hover:border-transparent",onClick:()=>h({id:j.id,name:j.name||"Untitled",questionsText:F(j)}),children:"Edit"}),$.jsx("button",{className:"text-sm px-2 py-1 border rounded cursor-pointer hover:bg-alert hover:text-black hover:border-transparent",disabled:j.id===v,onClick:()=>KR(j.id).then(w).catch(q=>alert(q.message)),children:"Delete"}),j.id!==v&&$.jsx("button",{className:"text-sm px-2 py-1 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white border border-transparent",onClick:()=>xd(j.id),children:"Activate"})]})]}),$.jsxs("div",{className:"text-xs text-grey-600 dark:text-blue-300",children:[j.questions?.length||0," questions"]})]},j.id)),!e.length&&$.jsx("div",{className:"text-sm italic",children:"No quizzes yet."})]}),l&&$.jsxs("div",{className:"bg-white dark:bg-blue-700 dark:text-white rounded p-4 space-y-2",children:[$.jsx("h3",{className:"font-semibold",children:l.id?"Edit quiz":"Create quiz"}),$.jsx("input",{className:"border border-grey-500 hover:border-blue-600 w-full px-2 py-1 rounded",value:l.name,onChange:j=>h({...l,name:j.target.value}),placeholder:"Quiz name"}),$.jsx("textarea",{className:"border border-grey-500 hover:border-blue-600 w-full p-2 rounded h-56 font-mono text-xs",value:l.questionsText,onChange:j=>h({...l,questionsText:j.target.value})}),$.jsxs("div",{className:"flex gap-2",children:[$.jsx("button",{className:"px-3 py-1 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white border border-transparent disabled:bg-grey-500 disabled:text-grey-200 disabled:cursor-not-allowed",disabled:p,onClick:I,children:"Save"}),$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer",onClick:()=>h(null),children:"Cancel"})]}),$.jsx("p",{className:"text-xs text-gray-500",children:"Format: Question line, then each option line (prefix * for correct). Separate questions with a blank line."})]}),s&&$.jsxs("div",{className:"bg-grey-500 text-white rounded p-4 space-y-2",children:[$.jsxs("h3",{className:"text-white",children:["Active quiz: ",s.name]}),$.jsxs("div",{className:"flex flex-wrap gap-2",children:[$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:text-grey-300",disabled:r.currentQuestion<=0,onClick:()=>rv(r.currentQuestion-1),children:"Prev"}),$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:text-grey-300",disabled:r.currentQuestion>=s.questions.length-1,onClick:()=>rv(r.currentQuestion+1),children:"Next"}),!r.open&&!r.ended&&$.jsx("button",{className:"px-3 py-1 bg-blue-700 hover:bg-blue-600 text-white rounded border border-transparent cursor-pointer",onClick:()=>iv(!0),children:"Open Round"}),r.open&&$.jsx("button",{className:"px-3 py-1 bg-white text-cyan-600 rounded border border-transparent hover:bg-blue-600 hover:text-white cursor-pointer",onClick:()=>iv(!1),children:"Close Round"}),!r.reveal&&!r.open&&!r.ended&&$.jsx("button",{className:"px-3 py-1 bg-blue-700 hover:bg-blue-600 text-white rounded border border-transparent cursor-pointer",onClick:()=>sv(!0),children:"Reveal Answers"}),r.reveal&&!r.ended&&$.jsx("button",{className:"px-3 py-1 bg-white text-cyan-600 rounded border border-transparent hover:bg-blue-600 hover:text-white cursor-pointer",onClick:()=>sv(!1),children:"Hide Answers"}),$.jsx("button",{onClick:()=>nP(!r.scoreboardVisible),className:["px-3 py-1 rounded cursor-pointer transition border border-transparent hover:bg-blue-600 hover:text-white",r.scoreboardVisible?"bg-white text-cyan-600":"bg-blue-700 text-white"].join(" "),children:r.scoreboardVisible?"Hide Scoreboard":"Show Scoreboard"}),!r.ended&&$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-orange-400 hover:text-black hover:border-transparent cursor-pointer",onClick:()=>YR(),children:"Restart Quiz"}),!r.ended&&$.jsx("button",{className:"px-3 py-1 bg-red-600 text-white hover:bg-red-400 hover:text-black rounded border border-transparent cursor-pointer",onClick:()=>{confirm("End quiz?")&&JR()},children:"End Quiz"}),r.ended&&$.jsx("div",{className:"px-3 py-1 bg-red-200 text-red-500 rounded border border-transparent",children:"Quiz ended"}),$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-orange-400 hover:text-black hover:border-transparent cursor-pointer",onClick:()=>{confirm("Clear all student answers?")&&$w()},children:"Clear Users"}),$.jsx("button",{className:"px-3 py-1 border rounded hover:bg-blue-600 hover:text-white hover:border-transparent cursor-pointer",onClick:()=>xd(null),children:"Deactivate"})]}),$.jsxs("div",{className:"text-xs",children:["Q",r.currentQuestion+1,"/",s.questions.length," | Open: ",r.open?"Yes":"No"," | Reveal: ",r.reveal?"Yes":"No"]})]})]})}function oP(){const{user:r,isInstructor:e,loading:t}=HR(),[s,o]=ae.useState(null);return ae.useEffect(()=>{const l=op(o);return XR().catch(()=>{}),()=>l()},[]),t?$.jsx("div",{className:"p-6",children:"Authenticating..."}):e?s?$.jsxs($.Fragment,{children:[$.jsxs("header",{children:[$.jsx("h1",{children:"Quiz dashboard"}),$.jsx("div",{class:"menu",children:$.jsx("a",{href:"/screen",target:"_blank",children:"Screen"})})]}),$.jsxs("div",{className:"p-6 space-y-6 w-screen",children:[$.jsx(sP,{state:s}),$.jsxs("details",{className:"text-xs max-w-4xl ml-auto mr-auto",children:[$.jsx("summary",{children:"Raw state"}),$.jsx("pre",{className:"bg-cyan-800 dark:bg-blue-600 text-white p-2 rounded max-h-64 overflow-auto",children:JSON.stringify(s,null,2)})]})]}),$.jsxs("footer",{children:[$.jsx("a",{href:"https://www.sdu.dk/en/om-sdu/institutter-centre/oekonomiskinstitut",title:"SDU: University of Southern Denmark",className:"sdu"}),$.jsx("a",{href:"https://www.nickford.com",title:"Nick Ford",className:"nf"})]})]}):$.jsx("div",{className:"p-6",children:"Loading state..."}):$.jsxs($.Fragment,{children:[$.jsxs("header",{children:[$.jsx("h1",{children:"Pulse check"}),$.jsx("div",{class:"menu",children:$.jsx("a",{href:"/",target:"_blank",children:"Start"})})]}),$.jsxs("div",{className:"p-6 space-y-4 max-w-md text-center flex flex-col flex-1 align-center justify-center",children:[$.jsx("h2",{className:"text-2xl font-bold",children:"Login"}),$.jsx("button",{className:"px-4 py-3 bg-blue-700 text-white dark:bg-blue-200 dark:text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white",onClick:()=>$R(),children:r?.isAnonymous?"Authenticate with GitHub":"Log in with GitHub"})]}),$.jsxs("footer",{children:[$.jsx("a",{href:"https://www.sdu.dk/en/om-sdu/institutter-centre/oekonomiskinstitut",title:"SDU: University of Southern Denmark",className:"sdu"}),$.jsx("a",{href:"https://www.nickford.com",title:"Nick Ford",className:"nf"})]})]})}function aP(){const[r,e]=ae.useState(null),[t,s]=ae.useState(null),[o,l]=ae.useState([]);if(ae.useEffect(()=>{const T=op(async F=>{if(e(F),F?.activeQuizId){const j=await sp(F.activeQuizId).catch(()=>null);s(j)}else s(null)}),I=eP(l);return()=>{T(),I()}},[]),!r||!t)return $.jsx("div",{className:"p-8 text-2xl",children:"Waiting for quiz..."});const h=t.questions[r.currentQuestion];if(!h)return $.jsx("div",{className:"p-8",children:"No question."});const p=h.options.reduce((T,I)=>(T[I]=0,T),{});r.open||o.forEach(T=>{const I=T.answers?.[h.id];I&&p[I.answer]!==void 0&&(p[I.answer]+=1)});const g=tP(r,o,t.questions),v=!r.open,w=!!r.scoreboardVisible;return $.jsxs("div",{className:"space-y-8 h-screen fullscreen",children:[$.jsxs("div",{className:"space-y-4 h-full flex flex-col justify-between",children:[$.jsxs("div",{className:"flex flex-row justify-between text-sm font-semibold text-gray-500",children:[$.jsxs("span",{children:["Q",r.currentQuestion+1," / ",t.questions.length]}),t.name]}),$.jsx("h2",{className:"font-bold mt-auto",children:h.text}),$.jsx("div",{className:"grid gap-4 md:grid-cols-2 auto-rows-fr mb-auto",children:h.options.map(T=>{const I=p[T],F=r.reveal&&h.correct===T;return $.jsxs("div",{className:["p-4 pr-12 rounded border relative",!F&&r.reveal&&"text-grey-500",F&&"border-green-700 bg-green-500 text-white"].filter(Boolean).join(" "),children:[$.jsx("div",{className:"font-semibold min-h-8 text-lg",children:T}),$.jsx("div",{className:"text-3xl font-bold absolute top-4 right-4 leading-none tabular-nums",children:v?I:r.open?"":I})]},T)})}),$.jsxs("div",{className:"text-sm font-semibold text-gray-500",children:[r.ended&&"Quiz ended.",!r.ended&&r.open&&"Accepting answers...",!r.ended&&!r.open&&!r.reveal&&"Round closed.",!r.ended&&r.reveal&&"Answers revealed."]})]}),w&&$.jsxs("div",{className:"absolute top-0 left-0 w-screen h-screen p-8 bg-white/50 dark:bg-black/50 backdrop-blur overflow-auto",children:[$.jsx("h2",{className:"mb-4 icon",children:"Scoreboard"}),$.jsxs("div",{className:"grid gap-2",children:[g.map((T,I)=>$.jsxs("div",{className:"flex justify-between items-stretch bg-grey-500 text-white rounded px-3 py-2",children:[$.jsxs("span",{className:"tabular-nums text-right w-[3em] mr-2 text-blue-800 border border-transparent",children:[I+1," |"]}),$.jsx("span",{className:"flex-1 font-semibold border border-transparent",children:T.name}),$.jsx("span",{className:"tabular-nums text-right border rounded w-[4em] px-1",children:T.correct})]},T.id)),g.length===0&&$.jsx("div",{children:"No answers yet."})]})]})]})}nE.createRoot(document.getElementById("root")).render($.jsx(qR,{children:$.jsx(WE,{basename:"/quiz/",children:$.jsxs($E,{children:[$.jsx(bu,{path:"/",element:$.jsx(iP,{})}),$.jsx(bu,{path:"/instructor",element:$.jsx(oP,{})}),$.jsx(bu,{path:"/screen",element:$.jsx(aP,{})})]})})}));
