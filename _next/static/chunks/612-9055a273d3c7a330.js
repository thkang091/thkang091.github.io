"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{3938:function(e,t,n){n.d(t,{XB:function(){return d}});var r,i=n(2265),o=n(8149),l=n(5171),a=n(1584),s=n(5137),u=n(7437),f="dismissableLayer.update",c=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=i.forwardRef((e,t)=>{var n,d;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:w,onDismiss:x,...b}=e,E=i.useContext(c),[R,A]=i.useState(null),L=null!==(d=null==R?void 0:R.ownerDocument)&&void 0!==d?d:null===(n=globalThis)||void 0===n?void 0:n.document,[,C]=i.useState({}),P=(0,a.e)(t,e=>A(e)),O=Array.from(E.layers),[T]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),S=O.indexOf(T),D=R?O.indexOf(R):-1,W=E.layersWithOutsidePointerEventsDisabled.size>0,k=D>=S,H=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.W)(e),o=i.useRef(!1),l=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){h("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",l.current),l.current=t,n.addEventListener("click",l.current,{once:!0})):t()}else n.removeEventListener("click",l.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",l.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!k||n||(null==g||g(e),null==w||w(e),e.defaultPrevented||null==x||x())},L),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.W)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&h("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(null==y||y(e),null==w||w(e),e.defaultPrevented||null==x||x())},L);return!function(e,t=globalThis?.document){let n=(0,s.W)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{D!==E.layers.size-1||(null==v||v(e),!e.defaultPrevented&&x&&(e.preventDefault(),x()))},L),i.useEffect(()=>{if(R)return m&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(R)),E.layers.add(R),p(),()=>{m&&1===E.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[R,L,m,E]),i.useEffect(()=>()=>{R&&(E.layers.delete(R),E.layersWithOutsidePointerEventsDisabled.delete(R),p())},[R,E]),i.useEffect(()=>{let e=()=>C({});return document.addEventListener(f,e),()=>document.removeEventListener(f,e)},[]),(0,u.jsx)(l.WV.div,{...b,ref:P,style:{pointerEvents:W?k?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.M)(e.onFocusCapture,j.onFocusCapture),onBlurCapture:(0,o.M)(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:(0,o.M)(e.onPointerDownCapture,H.onPointerDownCapture)})});function p(){let e=new CustomEvent(f);document.dispatchEvent(e)}function h(e,t,n,r){let{discrete:i}=r,o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),i?(0,l.jH)(o,a):o.dispatchEvent(a)}d.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(c),r=i.useRef(null),o=(0,a.e)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,u.jsx)(l.WV.div,{...e,ref:o})}).displayName="DismissableLayerBranch"},7683:function(e,t,n){n.d(t,{ee:function(){return e$},Eh:function(){return eG},VY:function(){return eq},fC:function(){return eX},D7:function(){return eT}});var r=n(2265);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,s=Math.floor,u=e=>({x:e,y:e}),f={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function h(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function g(e){return["top","bottom"].includes(p(e))?"y":"x"}function y(e){return e.replace(/start|end/g,e=>c[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>f[e])}function x(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function E(e,t,n){let r,{reference:i,floating:o}=e,l=g(t),a=m(g(t)),s=v(a),u=p(t),f="y"===l,c=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,y=i[s]/2-o[s]/2;switch(u){case"top":r={x:c,y:i.y-o.height};break;case"bottom":r={x:c,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(t)){case"start":r[a]-=y*(n&&f?-1:1);break;case"end":r[a]+=y*(n&&f?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),s=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:c}=E(u,r,s),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:v,y:g,data:y,reset:w}=await m({x:f,y:c,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:l,elements:{reference:e,floating:t}});f=null!=v?v:f,c=null!=g?g:c,p={...p,[o]:{...p[o],...y}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(u=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:f,y:c}=E(u,d,s)),n=-1)}return{x:f,y:c,placement:d,strategy:i,middlewareData:p}};async function A(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:p=!1,padding:h=0}=d(t,e),m=x(h),v=a[p?"floating"===c?"reference":"floating":c],g=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(v)))||n?v:v.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:s})),y="floating"===c?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),E=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:s}):y);return{top:(g.top-R.top+m.top)/E.y,bottom:(R.bottom-g.bottom+m.bottom)/E.y,left:(g.left-R.left+m.left)/E.x,right:(R.right-g.right+m.right)/E.x}}function L(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function C(e){return i.some(t=>e[t]>=0)}async function P(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),s="y"===g(n),u=["left","top"].includes(l)?-1:1,f=o&&s?-1:1,c=d(t,e),{mainAxis:m,crossAxis:v,alignmentAxis:y}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof y&&(v="end"===a?-1*y:y),s?{x:v*f,y:m*u}:{x:m*u,y:v*f}}function O(e){return D(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function S(e){var t;return null==(t=(D(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function D(e){return e instanceof Node||e instanceof T(e).Node}function W(e){return e instanceof Element||e instanceof T(e).Element}function k(e){return e instanceof HTMLElement||e instanceof T(e).HTMLElement}function H(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof T(e).ShadowRoot)}function j(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=N(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function F(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function V(e){let t=z(),n=W(e)?N(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function z(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function M(e){return["html","body","#document"].includes(O(e))}function N(e){return T(e).getComputedStyle(e)}function B(e){return W(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function _(e){if("html"===O(e))return e;let t=e.assignedSlot||e.parentNode||H(e)&&e.host||S(e);return H(t)?t.host:t}function Y(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=_(t);return M(n)?t.ownerDocument?t.ownerDocument.body:t.body:k(n)&&j(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=T(i);if(o){let e=I(l);return t.concat(l,l.visualViewport||[],j(i)?i:[],e&&n?Y(e):[])}return t.concat(i,Y(i,[],n))}function I(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function X(e){let t=N(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=k(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,s=a(n)!==o||a(r)!==l;return s&&(n=o,r=l),{width:n,height:r,$:s}}function $(e){return W(e)?e:e.contextElement}function q(e){let t=$(e);if(!k(t))return u(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=X(t),l=(o?a(n.width):n.width)/r,s=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}let G=u(0);function J(e){let t=T(e);return z()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:G}function K(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=$(e),a=u(1);t&&(r?W(r)&&(a=q(r)):a=q(e));let s=(void 0===(i=n)&&(i=!1),r&&(!i||r===T(l))&&i)?J(l):u(0),f=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=T(l),t=r&&W(r)?T(r):r,n=e,i=I(n);for(;i&&r&&t!==n;){let e=q(i),t=i.getBoundingClientRect(),r=N(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;f*=e.x,c*=e.y,d*=e.x,p*=e.y,f+=o,c+=l,i=I(n=T(i))}}return b({width:d,height:p,x:f,y:c})}function Q(e){return K(S(e)).left+B(e).scrollLeft}function U(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=T(e),r=S(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,s=0;if(i){o=i.width,l=i.height;let e=z();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,s=i.offsetTop)}return{width:o,height:l,x:a,y:s}}(e,n);else if("document"===t)r=function(e){let t=S(e),n=B(e),r=e.ownerDocument.body,i=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+Q(e),s=-n.scrollTop;return"rtl"===N(r).direction&&(a+=l(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:s}}(S(e));else if(W(t))r=function(e,t){let n=K(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=k(e)?q(e):u(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=J(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return b(r)}function Z(e){return"static"===N(e).position}function ee(e,t){return k(e)&&"fixed"!==N(e).position?t?t(e):e.offsetParent:null}function et(e,t){let n=T(e);if(F(e))return n;if(!k(e)){let t=_(e);for(;t&&!M(t);){if(W(t)&&!Z(t))return t;t=_(t)}return n}let r=ee(e,t);for(;r&&["table","td","th"].includes(O(r))&&Z(r);)r=ee(r,t);return r&&M(r)&&Z(r)&&!V(r)?n:r||function(e){let t=_(e);for(;k(t)&&!M(t);){if(V(t))return t;if(F(t))break;t=_(t)}return null}(e)||n}let en=async function(e){let t=this.getOffsetParent||et,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=k(t),i=S(t),o="fixed"===n,l=K(e,!0,o,t),a={scrollLeft:0,scrollTop:0},s=u(0);if(r||!r&&!o){if(("body"!==O(t)||j(i))&&(a=B(t)),r){let e=K(t,!0,o,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else i&&(s.x=Q(i))}return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},er={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=S(r),a=!!t&&F(t.floating);if(r===l||a&&o)return n;let s={scrollLeft:0,scrollTop:0},f=u(1),c=u(0),d=k(r);if((d||!d&&!o)&&(("body"!==O(r)||j(l))&&(s=B(r)),k(r))){let e=K(r);f=q(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-s.scrollLeft*f.x+c.x,y:n.y*f.y-s.scrollTop*f.y+c.y}},getDocumentElement:S,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[..."clippingAncestors"===n?F(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=Y(e,[],!1).filter(e=>W(e)&&"body"!==O(e)),i=null,o="fixed"===N(e).position,l=o?_(e):e;for(;W(l)&&!M(l);){let t=N(l),n=V(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&function e(t,n){let r=_(t);return!(r===n||!W(r)||M(r))&&("fixed"===N(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=_(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],s=a[0],u=a.reduce((e,n)=>{let r=U(t,n,i);return e.top=l(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=l(r.left,e.left),e},U(t,s,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:et,getElementRects:en,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=X(e);return{width:t,height:n}},getScale:q,isElement:W,isRTL:function(e){return"rtl"===N(e).direction}},ei=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:s,elements:u,middlewareData:f}=t,{element:c,padding:p=0}=d(e,t)||{};if(null==c)return{};let y=x(p),w={x:n,y:r},b=m(g(i)),E=v(b),R=await s.getDimensions(c),A="y"===b,L=A?"clientHeight":"clientWidth",C=a.reference[E]+a.reference[b]-w[b]-a.floating[E],P=w[b]-a.reference[b],O=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c)),T=O?O[L]:0;T&&await (null==s.isElement?void 0:s.isElement(O))||(T=u.floating[L]||a.floating[E]);let S=T/2-R[E]/2-1,D=o(y[A?"top":"left"],S),W=o(y[A?"bottom":"right"],S),k=T-R[E]-W,H=T/2-R[E]/2+(C/2-P/2),j=l(D,o(H,k)),F=!f.arrow&&null!=h(i)&&H!==j&&a.reference[E]/2-(H<D?D:W)-R[E]/2<0,V=F?H<D?H-D:H-k:0;return{[b]:w[b]+V,data:{[b]:j,centerOffset:H-j-V,...F&&{alignmentOffset:V}},reset:F}}}),eo=(e,t,n)=>{let r=new Map,i={platform:er,...n},o={...i.platform,_c:r};return R(e,t,{...i,platform:o})};var el=n(4887),ea="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function es(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!es(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!es(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function eu(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ef(e,t){let n=eu(e);return Math.round(t*n)/n}function ec(e){let t=r.useRef(e);return ea(()=>{t.current=e}),t}let ed=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?ei({element:n.current,padding:r}).fn(t):{}:n?ei({element:n,padding:r}).fn(t):{}}}),ep=(e,t)=>{var n;return{...(void 0===(n=e)&&(n=0),{name:"offset",options:n,async fn(e){var t,r;let{x:i,y:o,placement:l,middlewareData:a}=e,s=await P(e,n);return l===(null==(t=a.offset)?void 0:t.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+s.x,y:o+s.y,data:{...s,placement:l}}}}),options:[e,t]}},eh=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"shift",options:n,async fn(e){let{x:t,y:r,placement:i}=e,{mainAxis:a=!0,crossAxis:s=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...f}=d(n,e),c={x:t,y:r},h=await A(e,f),v=g(p(i)),y=m(v),w=c[y],x=c[v];if(a){let e="y"===y?"top":"left",t="y"===y?"bottom":"right",n=w+h[e],r=w-h[t];w=l(n,o(w,r))}if(s){let e="y"===v?"top":"left",t="y"===v?"bottom":"right",n=x+h[e],r=x-h[t];x=l(n,o(x,r))}let b=u.fn({...e,[y]:w,[v]:x});return{...b,data:{x:b.x-t,y:b.y-r}}}}),options:[e,t]}},em=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{options:n,fn(e){let{x:t,y:r,placement:i,rects:o,middlewareData:l}=e,{offset:a=0,mainAxis:s=!0,crossAxis:u=!0}=d(n,e),f={x:t,y:r},c=g(i),h=m(c),v=f[h],y=f[c],w=d(a,e),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(s){let e="y"===h?"height":"width",t=o.reference[h]-o.floating[e]+x.mainAxis,n=o.reference[h]+o.reference[e]-x.mainAxis;v<t?v=t:v>n&&(v=n)}if(u){var b,E;let e="y"===h?"width":"height",t=["top","left"].includes(p(i)),n=o.reference[c]-o.floating[e]+(t&&(null==(b=l.offset)?void 0:b[c])||0)+(t?0:x.crossAxis),r=o.reference[c]+o.reference[e]+(t?0:(null==(E=l.offset)?void 0:E[c])||0)-(t?x.crossAxis:0);y<n?y=n:y>r&&(y=r)}return{[h]:v,[c]:y}}}),options:[e,t]}},ev=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"flip",options:n,async fn(e){var t,r,i,o,l;let{placement:a,middlewareData:s,rects:u,initialPlacement:f,platform:c,elements:x}=e,{mainAxis:b=!0,crossAxis:E=!0,fallbackPlacements:R,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:P=!0,...O}=d(n,e);if(null!=(t=s.arrow)&&t.alignmentOffset)return{};let T=p(a),S=g(f),D=p(f)===f,W=await (null==c.isRTL?void 0:c.isRTL(x.floating)),k=R||(D||!P?[w(f)]:function(e){let t=w(e);return[y(e),t,y(t)]}(f)),H="none"!==C;!R&&H&&k.push(...function(e,t,n,r){let i=h(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(y)))),o}(f,P,C,W));let j=[f,...k],F=await A(e,O),V=[],z=(null==(r=s.flip)?void 0:r.overflows)||[];if(b&&V.push(F[T]),E){let e=function(e,t,n){void 0===n&&(n=!1);let r=h(e),i=m(g(e)),o=v(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=w(l)),[l,w(l)]}(a,u,W);V.push(F[e[0]],F[e[1]])}if(z=[...z,{placement:a,overflows:V}],!V.every(e=>e<=0)){let e=((null==(i=s.flip)?void 0:i.index)||0)+1,t=j[e];if(t)return{data:{index:e,overflows:z},reset:{placement:t}};let n=null==(o=z.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(L){case"bestFit":{let e=null==(l=z.filter(e=>{if(H){let t=g(e.placement);return t===S||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=f}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[e,t]}},eg=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"size",options:n,async fn(e){let t,r;let{placement:i,rects:a,platform:s,elements:u}=e,{apply:f=()=>{},...c}=d(n,e),m=await A(e,c),v=p(i),y=h(i),w="y"===g(i),{width:x,height:b}=a.floating;"top"===v||"bottom"===v?(t=v,r=y===(await (null==s.isRTL?void 0:s.isRTL(u.floating))?"start":"end")?"left":"right"):(r=v,t="end"===y?"top":"bottom");let E=b-m.top-m.bottom,R=x-m.left-m.right,L=o(b-m[t],E),C=o(x-m[r],R),P=!e.middlewareData.shift,O=L,T=C;if(w?T=y||P?o(C,R):R:O=y||P?o(L,E):E,P&&!y){let e=l(m.left,0),t=l(m.right,0),n=l(m.top,0),r=l(m.bottom,0);w?T=x-2*(0!==e||0!==t?e+t:l(m.left,m.right)):O=b-2*(0!==n||0!==r?n+r:l(m.top,m.bottom))}await f({...e,availableWidth:T,availableHeight:O});let S=await s.getDimensions(u.floating);return x!==S.width||b!==S.height?{reset:{rects:!0}}:{}}}),options:[e,t]}},ey=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"hide",options:n,async fn(e){let{rects:t}=e,{strategy:r="referenceHidden",...i}=d(n,e);switch(r){case"referenceHidden":{let n=L(await A(e,{...i,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:C(n)}}}case"escaped":{let n=L(await A(e,{...i,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:C(n)}}}default:return{}}}}),options:[e,t]}},ew=(e,t)=>({...ed(e),options:[e,t]});var ex=n(5171),eb=n(7437),eE=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,eb.jsx)(ex.WV.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eb.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eE.displayName="Arrow";var eR=n(1584),eA=n(8324),eL=n(5137),eC=n(1336),eP="Popper",[eO,eT]=(0,eA.b)(eP),[eS,eD]=eO(eP),eW=e=>{let{__scopePopper:t,children:n}=e,[i,o]=r.useState(null);return(0,eb.jsx)(eS,{scope:t,anchor:i,onAnchorChange:o,children:n})};eW.displayName=eP;var ek="PopperAnchor",eH=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:i,...o}=e,l=eD(ek,n),a=r.useRef(null),s=(0,eR.e)(t,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,eb.jsx)(ex.WV.div,{...o,ref:s})});eH.displayName=ek;var ej="PopperContent",[eF,eV]=eO(ej),ez=r.forwardRef((e,t)=>{var n,i,a,u,f,c,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:v=0,align:g="center",alignOffset:y=0,arrowPadding:w=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:E=0,sticky:R="partial",hideWhenDetached:A=!1,updatePositionStrategy:L="optimized",onPlaced:C,...P}=e,O=eD(ej,h),[T,D]=r.useState(null),W=(0,eR.e)(t,e=>D(e)),[k,H]=r.useState(null),j=function(e){let[t,n]=r.useState(void 0);return(0,eC.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(k),F=null!==(d=null==j?void 0:j.width)&&void 0!==d?d:0,V=null!==(p=null==j?void 0:j.height)&&void 0!==p?p:0,z="number"==typeof E?E:{top:0,right:0,bottom:0,left:0,...E},M=Array.isArray(b)?b:[b],N=M.length>0,B={padding:z,boundary:M.filter(e_),altBoundary:N},{refs:_,floatingStyles:I,placement:X,isPositioned:q,middlewareData:G}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:s=!0,whileElementsMounted:u,open:f}=e,[c,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);es(p,i)||h(i);let[m,v]=r.useState(null),[g,y]=r.useState(null),w=r.useCallback(e=>{e!==R.current&&(R.current=e,v(e))},[]),x=r.useCallback(e=>{e!==A.current&&(A.current=e,y(e))},[]),b=l||m,E=a||g,R=r.useRef(null),A=r.useRef(null),L=r.useRef(c),C=null!=u,P=ec(u),O=ec(o),T=r.useCallback(()=>{if(!R.current||!A.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),eo(R.current,A.current,e).then(e=>{let t={...e,isPositioned:!0};S.current&&!es(L.current,t)&&(L.current=t,el.flushSync(()=>{d(t)}))})},[p,t,n,O]);ea(()=>{!1===f&&L.current.isPositioned&&(L.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[f]);let S=r.useRef(!1);ea(()=>(S.current=!0,()=>{S.current=!1}),[]),ea(()=>{if(b&&(R.current=b),E&&(A.current=E),b&&E){if(P.current)return P.current(b,E,T);T()}},[b,E,T,P,C]);let D=r.useMemo(()=>({reference:R,floating:A,setReference:w,setFloating:x}),[w,x]),W=r.useMemo(()=>({reference:b,floating:E}),[b,E]),k=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!W.floating)return e;let t=ef(W.floating,c.x),r=ef(W.floating,c.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...eu(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,s,W.floating,c.x,c.y]);return r.useMemo(()=>({...c,update:T,refs:D,elements:W,floatingStyles:k}),[c,T,D,W,k])}({strategy:"fixed",placement:m+("center"!==g?"-"+g:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:f="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=$(e),h=a||u?[...p?Y(p):[],...Y(t)]:[];h.forEach(e=>{a&&e.addEventListener("scroll",n,{passive:!0}),u&&e.addEventListener("resize",n)});let m=p&&c?function(e,t){let n,r=null,i=S(e);function a(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function u(f,c){void 0===f&&(f=!1),void 0===c&&(c=1),a();let{left:d,top:p,width:h,height:m}=e.getBoundingClientRect();if(f||t(),!h||!m)return;let v=s(p),g=s(i.clientWidth-(d+h)),y={rootMargin:-v+"px "+-g+"px "+-s(i.clientHeight-(p+m))+"px "+-s(d)+"px",threshold:l(0,o(1,c))||1},w=!0;function x(e){let t=e[0].intersectionRatio;if(t!==c){if(!w)return u();t?u(!1,t):n=setTimeout(()=>{u(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...y,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,y)}r.observe(e)}(!0),a}(p,n):null,v=-1,g=null;f&&(g=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&g&&(g.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),n()}),p&&!d&&g.observe(p),g.observe(t));let y=d?K(e):null;return d&&function t(){let r=K(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;h.forEach(e=>{a&&e.removeEventListener("scroll",n),u&&e.removeEventListener("resize",n)}),null==m||m(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(i)}}(...t,{animationFrame:"always"===L})},elements:{reference:O.anchor},middleware:[ep({mainAxis:v+V,alignmentAxis:y}),x&&eh({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?em():void 0,...B}),x&&ev({...B}),eg({...B,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:i}=e,{width:o,height:l}=n.reference,a=t.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),k&&ew({element:k,padding:w}),eY({arrowWidth:F,arrowHeight:V}),A&&ey({strategy:"referenceHidden",...B})]}),[J,Q]=eI(X),U=(0,eL.W)(C);(0,eC.b)(()=>{q&&(null==U||U())},[q,U]);let Z=null===(n=G.arrow)||void 0===n?void 0:n.x,ee=null===(i=G.arrow)||void 0===i?void 0:i.y,et=(null===(a=G.arrow)||void 0===a?void 0:a.centerOffset)!==0,[en,er]=r.useState();return(0,eC.b)(()=>{T&&er(window.getComputedStyle(T).zIndex)},[T]),(0,eb.jsx)("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...I,transform:q?I.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,"--radix-popper-transform-origin":[null===(u=G.transformOrigin)||void 0===u?void 0:u.x,null===(f=G.transformOrigin)||void 0===f?void 0:f.y].join(" "),...(null===(c=G.hide)||void 0===c?void 0:c.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eb.jsx)(eF,{scope:h,placedSide:J,onArrowChange:H,arrowX:Z,arrowY:ee,shouldHideArrow:et,children:(0,eb.jsx)(ex.WV.div,{"data-side":J,"data-align":Q,...P,ref:W,style:{...P.style,animation:q?void 0:"none"}})})})});ez.displayName=ej;var eM="PopperArrow",eN={top:"bottom",right:"left",bottom:"top",left:"right"},eB=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=eV(eM,n),o=eN[i.placedSide];return(0,eb.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,eb.jsx)(eE,{...r,ref:t,style:{...r.style,display:"block"}})})});function e_(e){return null!==e}eB.displayName=eM;var eY=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:s,middlewareData:u}=t,f=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[p,h]=eI(a),m={start:"0%",center:"50%",end:"100%"}[h],v=(null!==(o=null===(r=u.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+c/2,g=(null!==(l=null===(i=u.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,y="",w="";return"bottom"===p?(y=f?m:"".concat(v,"px"),w="".concat(-d,"px")):"top"===p?(y=f?m:"".concat(v,"px"),w="".concat(s.floating.height+d,"px")):"right"===p?(y="".concat(-d,"px"),w=f?m:"".concat(g,"px")):"left"===p&&(y="".concat(s.floating.width+d,"px"),w=f?m:"".concat(g,"px")),{data:{x:y,y:w}}}});function eI(e){let[t,n="center"]=e.split("-");return[t,n]}var eX=eW,e$=eH,eq=ez,eG=eB},6935:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(2265),i=n(4887),o=n(5171),l=n(1336),a=n(7437),s=r.forwardRef((e,t)=>{var n,s;let{container:u,...f}=e,[c,d]=r.useState(!1);(0,l.b)(()=>d(!0),[]);let p=u||c&&(null===(s=globalThis)||void 0===s?void 0:null===(n=s.document)||void 0===n?void 0:n.body);return p?i.createPortal((0,a.jsx)(o.WV.div,{...f,ref:t}),p):null});s.displayName="Portal"},1725:function(e,t,n){n.d(t,{T:function(){return l},f:function(){return a}});var r=n(2265),i=n(5171),o=n(7437),l=r.forwardRef((e,t)=>(0,o.jsx)(i.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));l.displayName="VisuallyHidden";var a=l}}]);