"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{687:function(n,t,e){e.d(t,{Hx:function(){return p},Mc:function(){return u},WK:function(){return d},uV:function(){return f},vw:function(){return s}});var r=e(861),a=e(757),o=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org";var c="da0b91f90e02f4caf38d6a44980d2829",s=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("3/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/search/movie?query=".concat(t,"&api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},684:function(n,t,e){e.r(t),e.d(t,{default:function(){return Pn}});var r=e(861),a=e(439),o=e(757),i=e.n(o),c=e(689),s=e(87),u=e(184),f=function(n){var t=n.movies,e=(0,c.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:t&&t.map((function(n){var t=n.id,r=n.title;return(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"".concat(t),state:{from:e},children:r})},t)}))})})},p=e(791),d=e(687);function l(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var m=e(433);function v(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function b(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function h(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?b(Object(e),!0).forEach((function(t){v(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var y={data:""},g=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||y},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,k=function n(t,e){var r="",a="",o="",i=function(i){var s=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?n(s,i):i+"{"+n(s,"k"==i[1]?"":e)+"}":"object"==typeof s?a+=n(s,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=n.p?n.p(i,s):i+":"+s+";"),c=i};for(var c in t)i(c);return r+(e&&o?e+"{"+o+"}":o)+a},O={},Z=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},E=function(n,t,e,r,a){var o=Z(n),i=O[o]||(O[o]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(o));if(!O[i]){var c=o!==n?n:function(n){for(var t,e,r=[{}];t=x.exec(n.replace(w,""));)t[4]?r.shift():t[3]?(e=t[3].replace(j," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(j," ").trim();return r[0]}(n);O[i]=k(a?v({},"@keyframes "+i,c):c,e?"":"."+i)}var s=e&&O.g?O.g:null;return e&&(O.g=O[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(O[i],t,r,s),i},P=function(n,t,e){return n.reduce((function(n,r,a){var o=t[a];if(o&&o.call){var i=o(e),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=c?"."+c:i&&"object"==typeof i?i.props?"":k(i,""):!1===i?"":i}return n+r+(null==o?"":o)}),"")};function _(n){var t=this||{},e=n.call?n(t.p):n;return E(e.unshift?e.raw?P(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,g(t.target),t.g,t.o,t.k)}_.bind({g:1});var z,D,S,q,A,C,F,I,N,M,T,L,H,K,U,W,R,V,$,B=_.bind({k:1});function G(n,t){var e=this||{};return function(){var r=arguments;function a(o,i){var c=Object.assign({},o),s=c.className||a.className;e.p=Object.assign({theme:D&&D()},c),e.o=/ *go\d+/.test(s),c.className=_.apply(e,r)+(s?" "+s:""),t&&(c.ref=i);var u=n;return n[0]&&(u=c.as||n,delete c.as),S&&u[0]&&S(c),z(u,c)}return t?t(a):a}}var J=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},Q=function(){var n=0;return function(){return(++n).toString()}}(),X=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),Y=new Map,nn=function(n){if(!Y.has(n)){var t=setTimeout((function(){Y.delete(n),an({type:4,toastId:n})}),1e3);Y.set(n,t)}},tn=function n(t,e){switch(e.type){case 0:return h(h({},t),{},{toasts:[e.toast].concat((0,m.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=Y.get(n);t&&clearTimeout(t)}(e.toast.id),h(h({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?h(h({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var a=e.toastId;return a?nn(a):t.toasts.forEach((function(n){nn(n.id)})),h(h({},t),{},{toasts:t.toasts.map((function(n){return n.id===a||void 0===a?h(h({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?h(h({},t),{},{toasts:[]}):h(h({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return h(h({},t),{},{pausedAt:e.time});case 6:var o=e.time-(t.pausedAt||0);return h(h({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return h(h({},n),{},{pauseDuration:n.pauseDuration+o})}))})}},en=[],rn={toasts:[],pausedAt:void 0},an=function(n){rn=tn(rn,n),en.forEach((function(n){n(rn)}))},on=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return h(h({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||Q()})}(t,n,e);return an({type:2,toast:r}),r.id}},cn=function(n,t){return on("blank")(n,t)};cn.error=on("error"),cn.success=on("success"),cn.loading=on("loading"),cn.custom=on("custom"),cn.dismiss=function(n){an({type:3,toastId:n})},cn.remove=function(n){return an({type:4,toastId:n})},cn.promise=function(n,t,e){var r=cn.loading(t.loading,h(h({},e),null==e?void 0:e.loading));return n.then((function(n){return cn.success(J(t.success,n),h(h({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){cn.error(J(t.error,n),h(h({id:r},e),null==e?void 0:e.error))})),n};var sn=B(q||(q=l(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),un=B(A||(A=l(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),fn=B(C||(C=l(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),pn=G("div")(F||(F=l(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),sn,un,(function(n){return n.secondary||"#fff"}),fn),dn=B(I||(I=l(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ln=G("div")(N||(N=l(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),dn),mn=B(M||(M=l(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),vn=B(T||(T=l(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),bn=G("div")(L||(L=l(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),mn,vn,(function(n){return n.secondary||"#fff"})),hn=G("div")(H||(H=l(["\n  position: absolute;\n"]))),yn=G("div")(K||(K=l(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),gn=B(U||(U=l(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),xn=G("div")(W||(W=l(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),gn),wn=function(n){var t=n.toast,e=t.icon,r=t.type,a=t.iconTheme;return void 0!==e?"string"==typeof e?p.createElement(xn,null,e):e:"blank"===r?null:p.createElement(yn,null,p.createElement(ln,h({},a)),"loading"!==r&&p.createElement(hn,null,"error"===r?p.createElement(pn,h({},a)):p.createElement(bn,h({},a))))},jn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},kn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},On=G("div")(R||(R=l(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Zn=G("div")(V||(V=l(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"])));p.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,i=t.height?function(n,t){var e=n.includes("top")?1:-1,r=X()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[jn(e),kn(e)],o=(0,a.Z)(r,2),i=o[0],c=o[1];return{animation:t?"".concat(B(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(B(c)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},c=p.createElement(wn,{toast:t}),s=p.createElement(Zn,h({},t.ariaProps),J(t.message,t));return p.createElement(On,{className:t.className,style:h(h(h({},i),r),t.style)},"function"==typeof o?o({icon:c,message:s}):p.createElement(p.Fragment,null,c,s))}));!function(n,t,e,r){k.p=t,z=n,D=e,S=r}(p.createElement);_($||($=l(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])));var En=cn,Pn=function(){var n,t=(0,s.lr)(),e=(0,a.Z)(t,2),o=e[0],c=e[1],l=(0,p.useState)(""),m=(0,a.Z)(l,2),v=m[0],b=m[1],h=(0,p.useState)(!0),y=(0,a.Z)(h,2),g=y[0],x=y[1],w=null!==(n=o.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.WK)(w);case 3:(t=n.sent).length||En.error("Sorry, nothing was found!",{duration:2e3}),b(t),x(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[w]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;""!==t.trim()?(c({query:t}),n.target.reset()):En.error("Fill in the search bar")},action:"",children:[(0,u.jsx)("input",{type:"text",name:"query",placeholder:"Movie",required:!0}),(0,u.jsx)("button",{type:"submit",children:"Submit"})]}),g?(0,u.jsx)("div",{children:"Loading..."}):(0,u.jsx)(f,{movies:v})]})}}}]);
//# sourceMappingURL=684.5c25d2e9.chunk.js.map