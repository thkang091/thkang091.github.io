(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5715:function(e,t,n){Promise.resolve().then(n.bind(n,3098)),Promise.resolve().then(n.bind(n,6073)),Promise.resolve().then(n.bind(n,1050)),Promise.resolve().then(n.t.bind(n,4983,23)),Promise.resolve().then(n.t.bind(n,8877,23))},3098:function(e,t,n){"use strict";let i,r;n.d(t,{default:function(){return $}});var o=n(7437),s=n(2265),a=n(7138),l=n(804),c=n(458),d=n(9047);let f=new WeakMap;function u({target:e,contentRect:t,borderBoxSize:n}){var i;null===(i=f.get(e))||void 0===i||i.forEach(i=>{i({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function h(e){e.forEach(u)}let p=new Set;var m=n(3217),g=n(3476);let x=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:x(),y:x()}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function y(e,t,n,i){let r=n[t],{length:o,position:s}=w[t],a=r.current,l=n.time;r.current=e[`scroll${s}`],r.scrollLength=e[`scroll${o}`]-e[`client${o}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=(0,m.Y)(0,r.scrollLength,r.current);let c=i-l;r.velocity=c>50?0:(0,g.R)(r.current-a,c)}let b=[[0,0],[1,1]],E={start:0,center:.5,end:1};function j(e,t,n=0){let i=0;if(e in E&&(e=E[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?i=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?i=t/100*document.documentElement.clientWidth:e.endsWith("vh")?i=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(i=t*e),n+i}let N=[0,0];var P=n(2548),L=n(839);let C={x:0,y:0};var W=n(6219);let k=new WeakMap,M=new WeakMap,_=new WeakMap,B=e=>e===document.documentElement?window:e;var S=n(9033);function z(e,t){(0,d.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let H=()=>({scrollX:(0,l.BX)(0),scrollY:(0,l.BX)(0),scrollXProgress:(0,l.BX)(0),scrollYProgress:(0,l.BX)(0)});var O=n(9321),R=n(4446),T=n(6463);let I=[{name:"Home",path:"/"},{name:"About",path:"/About"},{name:"Work",path:"/work"},{name:"Contact",path:"/contact"}];var $=()=>{var e,t;let[n,l]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1),[m,g]=(0,s.useState)(!1),{scrollY:x}=function({container:e,target:t,layoutEffect:n=!0,...o}={}){let a=(0,c.h)(H);return(n?S.L:s.useEffect)(()=>(z("target",t),z("container",e),function(e,{container:t=document.documentElement,...n}={}){let o=_.get(t);o||(o=new Set,_.set(t,o));let s=function(e,t,n,i={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,i.target,n),update:t=>{y(e,"x",n,t),y(e,"y",n,t),n.time=t,(i.offset||i.target)&&function(e,t,n){let{offset:i=b}=n,{target:r=e,axis:o="y"}=n,s="y"===o?"height":"width",a=r!==e?function(e,t){let n={x:0,y:0},i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if("svg"===i.tagName){let e=i.getBoundingClientRect(),t=(i=i.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(i instanceof SVGGraphicsElement){let{x:e,y:t}=i.getBBox();n.x+=e,n.y+=t;let r=null,o=i.parentNode;for(;!r;)"svg"===o.tagName&&(r=o),o=i.parentNode;i=r}else break;return n}(r,e):C,l=r===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in r&&"svg"!==r.tagName?r.getBBox():{width:r.clientWidth,height:r.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate,f=i.length;for(let e=0;e<f;e++){let n=function(e,t,n,i){let r=Array.isArray(e)?e:N,o=0;return"number"==typeof e?r=[e,e]:"string"==typeof e&&(r=(e=e.trim()).includes(" ")?e.split(" "):[e,E[e]?e:"0"]),j(r[0],n,i)-j(r[1],t)}(i[e],c[s],l[s],a[o]);d||n===t[o].interpolatorOffsets[e]||(d=!0),t[o].offset[e]=n}d&&(t[o].interpolate=(0,P.s)(t[o].offset,(0,L.Y)(i)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,i)},notify:()=>t(n)}}(t,e,v(),n);if(o.add(s),!k.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(W.frameData.timestamp)},s=()=>{for(let e of o)e.notify()},a=()=>{W.Wi.read(e,!1,!0),W.Wi.read(n,!1,!0),W.Wi.update(s,!1,!0)};k.set(t,a);let l=B(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&M.set(t,"function"==typeof t?(p.add(t),r||(r=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};p.forEach(e=>e(t))},window.addEventListener("resize",r)),()=>{p.delete(t),!p.size&&r&&(r=void 0)}):function(e,t){var n;i||"undefined"==typeof ResizeObserver||(i=new ResizeObserver(h));let r=("string"==typeof(n=e)?n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[]));return r.forEach(e=>{let n=f.get(e);n||(n=new Set,f.set(e,n)),n.add(t),null==i||i.observe(e)}),()=>{r.forEach(e=>{let n=f.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==i||i.unobserve(e)})}}(t,a)),l.addEventListener("scroll",a,{passive:!0})}let a=k.get(t);return W.Wi.read(a,!1,!0),()=>{var e;(0,W.Pn)(a);let n=_.get(t);if(!n||(n.delete(s),n.size))return;let i=k.get(t);k.delete(t),i&&(B(t).removeEventListener("scroll",i),null===(e=M.get(t))||void 0===e||e(),window.removeEventListener("resize",i))}}(({x:e,y:t})=>{a.scrollX.set(e.current),a.scrollXProgress.set(e.progress),a.scrollY.set(t.current),a.scrollYProgress.set(t.progress)},{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(o.offset)]),a}(),w=(0,T.usePathname)();return e="change",t=e=>{e>x.getPrevious()&&e>150?l(!0):l(!1),u(e>20)},(0,s.useInsertionEffect)(()=>x.on(e,t),[x,e,t]),(0,s.useEffect)(()=>{g(!1)},[w]),(0,o.jsx)(O.E.header,{className:"fixed top-0 left-0 w-full z-50 transition-all duration-300 ".concat(d?"bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md shadow-lg":"bg-transparent"),initial:!1,animate:{y:n?"-100%":"0%"},transition:{duration:.3},children:(0,o.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,o.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,o.jsx)(O.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},whileHover:{scale:1.05},children:(0,o.jsx)(a.default,{href:"/",children:(0,o.jsx)("h1",{className:"text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]",children:"Taehoon"})})}),(0,o.jsx)("nav",{className:"hidden md:flex space-x-8",children:I.map((e,t)=>(0,o.jsx)(a.default,{href:e.path,children:(0,o.jsxs)(O.E.span,{className:"relative text-lg font-medium ".concat(e.path===w?"text-[#854CE6]":"text-white hover:text-[#854CE6]"," transition-colors duration-300"),whileHover:{y:-2},transition:{duration:.2},children:[e.name,e.path===w&&(0,o.jsx)(O.E.span,{className:"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]",layoutId:"underline",initial:{width:0},animate:{width:"100%"},transition:{duration:.3}})]})},e.path))}),(0,o.jsx)(O.E.div,{className:"hidden md:block",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5},children:(0,o.jsx)(a.default,{href:"/contact",children:(0,o.jsx)(O.E.button,{className:"bg-gradient-to-r from-[#854CE6] to-[#6e9bf0] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300",whileHover:{scale:1.05,boxShadow:"0 0 15px rgba(133, 76, 230, 0.5)"},whileTap:{scale:.95},children:"Get in Touch"})})}),(0,o.jsx)(O.E.button,{className:"md:hidden text-white z-50",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>g(!m),children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:m?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})}),(0,o.jsx)(R.M,{children:m&&(0,o.jsx)(O.E.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"tween",duration:.3},className:"fixed top-0 right-0 bottom-0 w-64 bg-[#1a1a1a] bg-opacity-95 backdrop-blur-md z-40 p-6",children:(0,o.jsxs)("div",{className:"flex flex-col space-y-4 mt-16",children:[I.map(e=>(0,o.jsx)(a.default,{href:e.path,className:"text-white text-lg ".concat(w===e.path?"text-[#854CE6] font-bold":""),onClick:()=>g(!1),children:e.name},e.path)),(0,o.jsx)(a.default,{href:"/contact",className:"mt-4",children:(0,o.jsx)(O.E.button,{className:"bg-gradient-to-r from-[#854CE6] to-[#6e9bf0] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 w-full",whileHover:{scale:1.05,boxShadow:"0 0 15px rgba(133, 76, 230, 0.5)"},whileTap:{scale:.95},children:"Get in Touch"})})]})})})]})})})}},6073:function(e,t,n){"use strict";var i=n(7437),r=n(4446),o=n(9321),s=n(6463);t.default=e=>{let{children:t}=e,n=(0,s.usePathname)();return(0,i.jsx)(r.M,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(o.E.div,{initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}},className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none"}),t]},n)})}},1050:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var i=n(7437),r=n(4446),o=n(9321),s=n(6463);let a={initial:{top:"0%"},animate:{top:"100%"},exit:{top:["100%","0%"]}},l=e=>6-e-1;var c=()=>(0,i.jsx)(i.Fragment,{children:[...Array(6)].map((e,t)=>(0,i.jsx)(o.E.div,{variants:a,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.4,ease:"easeInOut",delay:.1*l(t)},className:"h-full w-full bg-white relative"},t))}),d=()=>{let e=(0,s.usePathname)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.M,{mode:"wait",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex",children:(0,i.jsx)(c,{})}),(0,i.jsx)(o.E.div,{className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none",inital:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}}})]},e)})})}},6463:function(e,t,n){"use strict";var i=n(1169);n.o(i,"usePathname")&&n.d(t,{usePathname:function(){return i.usePathname}})},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=n(9920)._(n(2265)).default.createContext(null)},8877:function(){},4983:function(e){e.exports={style:{fontFamily:"'__Poppins_a6f35b', '__Poppins_Fallback_a6f35b'",fontStyle:"normal"},className:"__className_a6f35b"}},4446:function(e,t,n){"use strict";n.d(t,{M:function(){return x}});var i=n(7437),r=n(2265),o=n(7797),s=n(458),a=n(9791);class l extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),s=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,r.useContext)(a._);return(0,r.useInsertionEffect)(()=>{let{width:e,height:i,top:r,left:a}=s.current;if(t||!o.current||!e||!i)return;o.current.dataset.motionPopId=n;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${r}px !important;
            left: ${a}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),(0,i.jsx)(l,{isPresent:t,childRef:o,sizeRef:s,children:r.cloneElement(e,{ref:o})})}let d=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:l,presenceAffectsLayout:d,mode:u})=>{let h=(0,s.h)(f),p=(0,r.useId)(),m=(0,r.useMemo)(()=>({id:p,initial:t,isPresent:n,custom:l,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;a&&a()},register:e=>(h.set(e,!1),()=>h.delete(e))}),d?[Math.random()]:[n]);return(0,r.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[n]),r.useEffect(()=>{n||h.size||!a||a()},[n]),"popLayout"===u&&(e=(0,i.jsx)(c,{isPresent:n,children:e})),(0,i.jsx)(o.O.Provider,{value:m,children:e})};function f(){return new Map}var u=n(5050),h=n(9047);let p=e=>e.key||"";function m(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var g=n(9033);let x=({children:e,exitBeforeEnter:t,custom:n,initial:o=!0,onExitComplete:a,presenceAffectsLayout:l=!0,mode:c="sync"})=>{(0,h.k)(!t,"Replace exitBeforeEnter with mode='wait'");let f=(0,r.useMemo)(()=>m(e),[e]),x=f.map(p),v=(0,r.useRef)(!0),w=(0,r.useRef)(f),y=(0,s.h)(()=>new Map),[b,E]=(0,r.useState)(f),[j,N]=(0,r.useState)(f);(0,g.L)(()=>{v.current=!1,w.current=f;for(let e=0;e<j.length;e++){let t=p(j[e]);x.includes(t)?y.delete(t):!0!==y.get(t)&&y.set(t,!1)}},[j,x.length,x.join("-")]);let P=[];if(f!==b){let e=[...f];for(let t=0;t<j.length;t++){let n=j[t],i=p(n);x.includes(i)||(e.splice(t,0,n),P.push(n))}"wait"===c&&P.length&&(e=P),N(m(e)),E(f);return}let{forceRender:L}=(0,r.useContext)(u.p);return(0,i.jsx)(i.Fragment,{children:j.map(e=>{let t=p(e),r=f===j||x.includes(t);return(0,i.jsx)(d,{isPresent:r,initial:(!v.current||!!o)&&void 0,custom:r?void 0:n,presenceAffectsLayout:l,mode:c,onExitComplete:r?void 0:()=>{if(!y.has(t))return;y.set(t,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(null==L||L(),N(w.current),a&&a())},children:e},t)})})}}},function(e){e.O(0,[613,321,138,971,23,744],function(){return e(e.s=5715)}),_N_E=e.O()}]);