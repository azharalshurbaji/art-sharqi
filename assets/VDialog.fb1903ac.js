import{i as Ie,c as C,h as V,T as ae,X as Ne,p as W,Z as B,r as A,b as P,l as ke,x as D,ae as Z,G as j,aB as qe,q as ce,aC as ue,aj as $,as as We,a4 as je,aD as ze,e as _,aw as ve,F as Ye,A as Ue,a7 as Pe,n as Xe,ay as Ae,B as Ge,m as Je,g as Ce,u as De,a as Ke,D as Ze,t as Qe,aE as Q,aF as et,w as tt,v as nt,y as ot,J as at,f as it}from"./index.1e3c5ab9.js";import{j as X,k as rt,s as ie,l as lt,n as Le,B as ee,o as de,g as st}from"./VTextField.60da7d8f.js";import{J as me,K as te,N as ne,O as ye,P as ge,q as ct,k as ut,d as ft,x as vt,z as dt,Q as mt,u as Te,M as yt,V as gt}from"./VBtn.fe0aceae.js";function Be(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ht(e){for(;e;){if(fe(e))return e;e=e.parentElement}return document.scrollingElement}function J(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const bt=Ie({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,l){var r;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:i,y:c,sx:f,sy:u,speed:v}=pe(e.target,a),d=X(a,[{transform:`translate(${i}px, ${c}px) scale(${f}, ${u})`,opacity:0},{}],{duration:225*v,easing:rt});(r=he(a))==null||r.forEach(y=>{X(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*v,easing:ie})}),d.finished.then(()=>l())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,l){var r;await new Promise(y=>requestAnimationFrame(y));const{x:i,y:c,sx:f,sy:u,speed:v}=pe(e.target,a);X(a,[{},{transform:`translate(${i}px, ${c}px) scale(${f}, ${u})`,opacity:0}],{duration:125*v,easing:lt}).finished.then(()=>l()),(r=he(a))==null||r.forEach(y=>{X(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*v,easing:ie})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?C(ae,V({name:"dialog-transition"},o,{css:!1}),n):C(ae,{name:"dialog-transition"},n)}});function he(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function pe(e,t){const n=e.getBoundingClientRect(),o=Le(t),[a,l]=getComputedStyle(t).transformOrigin.split(" ").map(x=>parseFloat(x)),[r,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=n.left+n.width/2;r==="left"||i==="left"?c-=n.width/2:(r==="right"||i==="right")&&(c+=n.width/2);let f=n.top+n.height/2;r==="top"||i==="top"?f-=n.height/2:(r==="bottom"||i==="bottom")&&(f+=n.height/2);const u=n.width/o.width,v=n.height/o.height,d=Math.max(1,u,v),y=u/d||0,g=v/d||0,m=o.width*o.height/(window.innerWidth*window.innerHeight),k=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:c-(a+o.left),y:f-(l+o.top),sx:y,sy:g,speed:k}}const Kt=Ne("Accessorais",{persist:!0,state:()=>({accessoriesDetails:[]}),getters:{},actions:{accessoriesDetailsEarring(e){this.accessoriesDetails=e},accessoriesDetailsNecklace(e){this.accessoriesDetails=e},accessoriesDetailsRing(e){this.accessoriesDetails=e},ShowArtBoardDetails(e){this.accessoriesDetails=e},accessoriesDetails(e,t,n){this.accessoriesDetails=e,this.accessoriesDetails=t,this.accessoriesDetails=n}}});const wt=W({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Et(e,t){const n={},o=a=>()=>{if(!B)return Promise.resolve(!0);const l=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(r=>{var c;const i=parseInt((c=e[a])!=null?c:0,10);n[a]=window.setTimeout(()=>{t==null||t(l),r(l)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const xt=Symbol.for("vuetify:v-menu"),St=W({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...wt()},"v-overlay-activator");function Ot(e,t){let{isActive:n,isTop:o}=t;const a=A();let l=!1,r=!1,i=!0;const c=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:v}=Et(e,s=>{s===(e.openOnHover&&l||c.value&&r)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(i=!0),n.value=s)}),d={click:s=>{s.stopPropagation(),a.value=s.currentTarget||s.target,n.value=!n.value},mouseenter:s=>{l=!0,a.value=s.currentTarget||s.target,u()},mouseleave:s=>{l=!1,v()},focus:s=>{We&&!s.target.matches(":focus-visible")||(r=!0,s.stopPropagation(),a.value=s.currentTarget||s.target,u())},blur:s=>{r=!1,s.stopPropagation(),v()}},y=P(()=>{const s={};return f.value&&(s.click=d.click),e.openOnHover&&(s.mouseenter=d.mouseenter,s.mouseleave=d.mouseleave),c.value&&(s.focus=d.focus,s.blur=d.blur),s}),g=P(()=>{const s={};if(e.openOnHover&&(s.mouseenter=()=>{l=!0,u()},s.mouseleave=()=>{l=!1,v()}),e.closeOnContentClick){const M=ke(xt,null);s.click=()=>{n.value=!1,M==null||M.closeParents()}}return s}),m=P(()=>{const s={};return e.openOnHover&&(s.mouseenter=()=>{i&&(l=!0,i=!1,u())},s.mouseleave=()=>{l=!1,v()}),s});D(o,s=>{s&&(e.openOnHover&&!l&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!l))&&(n.value=!1)});const k=A();Z(()=>{!k.value||j(()=>{const s=k.value;a.value=qe(s)?s.$el:s})});const x=ce("useActivator");let E;return D(()=>!!e.activator,s=>{s&&B?(E=ue(),E.run(()=>{kt(e,x,{activatorEl:a,activatorEvents:y})})):E&&E.stop()},{flush:"post",immediate:!0}),$(()=>{var s;(s=E)==null||s.stop()}),{activatorEl:a,activatorRef:k,activatorEvents:y,contentEvents:g,scrimEvents:m}}function kt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;D(()=>e.activator,(c,f)=>{if(f&&c!==f){const u=i(f);u&&r(u)}c&&j(()=>l())},{immediate:!0}),D(()=>e.activatorProps,()=>{l()}),$(()=>{r()});function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(u=>{let[v,d]=u;c.addEventListener(v,d)}),Object.keys(f).forEach(u=>{f[u]==null?c.removeAttribute(u):c.setAttribute(u,f[u])}))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(u=>{let[v,d]=u;c.removeEventListener(v,d)}),Object.keys(f).forEach(u=>{c.removeAttribute(u)}))}function i(){var c;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(f)if(f==="parent"){var v,d;let y=t==null||(v=t.proxy)==null||(d=v.$el)==null?void 0:d.parentNode;for(;y.hasAttribute("data-no-activator");)y=y.parentNode;u=y}else typeof f=="string"?u=document.querySelector(f):"$el"in f?u=f.$el:u=f;return o.value=((c=u)==null?void 0:c.nodeType)===Node.ELEMENT_NODE?u:null,o.value}}const Pt=W({eager:Boolean},"lazy");function At(e,t){const n=A(!1),o=P(()=>n.value||e.eager||t.value);D(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function oe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ct(e,t){return{x:e.x-t.x,y:e.y-t.y}}function be(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return oe({x:a,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return oe({x:a,y:l},t)}return oe({x:t.width/2,y:t.height/2},t)}const Fe={static:Tt,connected:Ft},Dt=W({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Fe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function Lt(e,t){const n=A({}),o=A();let a;Z(async()=>{var r;(r=a)==null||r.stop(),o.value=void 0,B&&t.isActive.value&&e.locationStrategy&&(a=ue(),e.locationStrategy!=="connected"&&await j(),a.run(()=>{if(typeof e.locationStrategy=="function"){var i;o.value=(i=e.locationStrategy(t,e,n))==null?void 0:i.updateLocation}else{var c;o.value=(c=Fe[e.locationStrategy](t,e,n))==null?void 0:c.updateLocation}}))}),B&&window.addEventListener("resize",l,{passive:!0}),$(()=>{var r;B&&window.removeEventListener("resize",l),o.value=void 0,(r=a)==null||r.stop()});function l(r){var i;(i=o.value)==null||i.call(o,r)}return{contentStyles:n,updateLocation:o}}function Tt(){}function Bt(e){const t=Le(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ft(e,t,n){const o=pt(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:l}=je(()=>{const g=me(t.location,e.isRtl.value),m=t.origin==="overlap"?g:t.origin==="auto"?te(g):me(t.origin,e.isRtl.value);return g.side===m.side&&g.align===ne(m).align?{preferredAnchor:ye(g),preferredOrigin:ye(m)}:{preferredAnchor:g,preferredOrigin:m}}),[r,i,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>P(()=>{const m=parseFloat(t[g]);return isNaN(m)?1/0:m})),u=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const g=t.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let v=!1;const d=new ResizeObserver(()=>{v&&y()});D([e.activatorEl,e.contentEl],(g,m)=>{let[k,x]=g,[E,s]=m;E&&d.unobserve(E),k&&d.observe(k),s&&d.unobserve(s),x&&d.observe(x)},{immediate:!0}),$(()=>{d.disconnect()});function y(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const g=e.activatorEl.value.getBoundingClientRect(),m=Bt(e.contentEl.value),k=J(e.contentEl.value),x=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=k.reduce((S,w)=>{const h=w.getBoundingClientRect(),b=new ee({x:w===document.documentElement?0:h.x,y:w===document.documentElement?0:h.y,width:w.clientWidth,height:w.clientHeight});return S?new ee({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);E.x+=x,E.y+=x,E.width-=x*2,E.height-=x*2;let s={anchor:a.value,origin:l.value};function M(S){const w=new ee(m),h=be(S.anchor,g),b=be(S.origin,w);let{x:L,y:T}=Ct(h,b);switch(S.anchor.side){case"top":T-=u.value[0];break;case"bottom":T+=u.value[0];break;case"left":L-=u.value[0];break;case"right":L+=u.value[0];break}switch(S.anchor.align){case"top":T-=u.value[1];break;case"bottom":T+=u.value[1];break;case"left":L-=u.value[1];break;case"right":L+=u.value[1];break}return w.x+=L,w.y+=T,w.width=Math.min(w.width,c.value),w.height=Math.min(w.height,f.value),{overflows:de(w,E),x:L,y:T}}let H=0,I=0;const N={x:0,y:0},z={x:!1,y:!1};let Y=-1;for(;;){if(Y++>10){ze("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:w,overflows:h}=M(s);H+=S,I+=w,m.x+=S,m.y+=w;{const b=ge(s.anchor),L=h.x.before||h.x.after,T=h.y.before||h.y.after;let q=!1;if(["x","y"].forEach(O=>{if(O==="x"&&L&&!z.x||O==="y"&&T&&!z.y){const p={anchor:{...s.anchor},origin:{...s.origin}},F=O==="x"?b==="y"?ne:te:b==="y"?te:ne;p.anchor=F(p.anchor),p.origin=F(p.origin);const{overflows:G}=M(p);(G[O].before<=h[O].before&&G[O].after<=h[O].after||G[O].before+G[O].after<(h[O].before+h[O].after)/2)&&(s=p,q=z[O]=!0)}}),q)continue}h.x.before&&(H+=h.x.before,m.x+=h.x.before),h.x.after&&(H-=h.x.after,m.x-=h.x.after),h.y.before&&(I+=h.y.before,m.y+=h.y.before),h.y.after&&(I-=h.y.after,m.y-=h.y.after);{const b=de(m,E);N.x=E.width-b.x.before-b.x.after,N.y=E.height-b.y.before-b.y.after,H+=b.x.before,m.x+=b.x.before,I+=b.y.before,m.y+=b.y.before}break}const R=ge(s.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${s.anchor.side} ${s.anchor.align}`,transformOrigin:`${s.origin.side} ${s.origin.align}`,top:_(we(I)),left:_(we(H)),minWidth:_(R==="y"?Math.min(r.value,g.width):r.value),maxWidth:_(Ee(ve(N.x,r.value===1/0?0:r.value,c.value))),maxHeight:_(Ee(ve(N.y,i.value===1/0?0:i.value,f.value)))})}return D(()=>[a.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>y(),{immediate:!o}),o&&j(()=>y()),requestAnimationFrame(()=>{n.value.maxHeight&&y()}),{updateLocation:y}}function we(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let re=!0;const K=[];function _t(e){!re||K.length?(K.push(e),le()):(re=!1,e(),le())}let xe=-1;function le(){cancelAnimationFrame(xe),xe=requestAnimationFrame(()=>{const e=K.shift();e&&e(),K.length?le():re=!0})}const se={none:null,close:$t,block:Mt,reposition:Ht},Rt=W({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in se}},"v-overlay-scroll-strategies");function Vt(e,t){if(!B)return;let n;Z(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=ue(),await j(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var a;(a=se[e.scrollStrategy])==null||a.call(se,t,e)}}))}),$(()=>{var o;(o=n)==null||o.stop()})}function $t(e){var n;function t(o){e.isActive.value=!1}_e((n=e.activatorEl.value)!=null?n:e.contentEl.value,t)}function Mt(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...J(e.activatorEl.value,t.contained?o:void 0),...J(e.contentEl.value,t.contained?o:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),l=window.innerWidth-document.documentElement.offsetWidth,r=(i=>fe(i)&&i)(o||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,c)=>{i.style.setProperty("--v-body-scroll-x",_(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",_(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",_(l)),i.classList.add("v-overlay-scroll-blocked")}),$(()=>{a.forEach((i,c)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-u}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Ht(e){var a;let t=!1,n=-1;function o(l){_t(()=>{var r,i;const c=performance.now();(r=(i=e.updateLocation).value)==null||r.call(i,l),t=(performance.now()-c)/(1e3/60)>2})}_e((a=e.activatorEl.value)!=null?a:e.contentEl.value,l=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{o(l)})})):o(l)})}function _e(e,t){const n=[document,...J(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),$(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function It(){if(!B)return A(!1);const{ssr:e}=Ye();if(e){const t=A(!1);return Ue(()=>{t.value=!0}),t}else return A(!0)}function Re(){const t=ce("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Se=Symbol.for("vuetify:stack"),U=Pe([]);function Nt(e,t,n){const o=ce("useStack"),a=!n,l=ke(Se,void 0),r=Pe({activeChildren:new Set});Xe(Se,r);const i=A(+t.value);Ae(e,()=>{var u;const v=(u=U.at(-1))==null?void 0:u[1];i.value=v?v+10:+t.value,a&&U.push([o.uid,i.value]),l==null||l.activeChildren.add(o.uid),$(()=>{if(a){const d=U.findIndex(y=>y[0]===o.uid);U.splice(d,1)}l==null||l.activeChildren.delete(o.uid)})});const c=A(!0);a&&Z(()=>{var u;const v=((u=U.at(-1))==null?void 0:u[0])===o.uid;setTimeout(()=>c.value=v)});const f=P(()=>!r.activeChildren.size);return{globalTop:Ge(c),localTop:f,stackStyles:P(()=>({zIndex:i.value}))}}function qt(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!B)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(".v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Wt(){return!0}function Ve(e,t,n){if(!e||$e(e,n)===!1)return!1;const o=Be(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(l=>l==null?void 0:l.contains(e.target))}function $e(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Wt)(e)}function jt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ve(e,t,n)&&setTimeout(()=>{$e(e,n)&&o&&o(e)},0)}function Oe(e,t){const n=Be(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const zt={mounted(e,t){const n=a=>jt(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Ve(a,e,t)};Oe(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){!e._clickOutside||(Oe(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:l}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",l,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Yt(e){const{modelValue:t,color:n,...o}=e;return C(ae,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&C("div",V({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Me=W({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...St(),...ct(),...Pt(),...Dt(),...Rt(),...Je(),...ut()},"v-overlay"),He=Ce()({name:"VOverlay",directives:{ClickOutside:zt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Me()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const l=De(e,"modelValue"),r=P({get:()=>l.value,set:p=>{p&&e.disabled||(l.value=p)}}),{teleportTarget:i}=qt(P(()=>e.attach||e.contained)),{themeClasses:c}=Ke(e),{rtlClasses:f,isRtl:u}=Ze(),{hasContent:v,onAfterLeave:d}=At(e,r),y=ft(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:m,stackStyles:k}=Nt(r,Qe(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:E,activatorEvents:s,contentEvents:M,scrimEvents:H}=Ot(e,{isActive:r,isTop:m}),{dimensionStyles:I}=vt(e),N=It(),{scopeId:z}=Re();D(()=>e.disabled,p=>{p&&(r.value=!1)});const Y=A(),R=A(),{contentStyles:S,updateLocation:w}=Lt(e,{isRtl:u,contentEl:R,activatorEl:x,isActive:r});Vt(e,{root:Y,contentEl:R,activatorEl:x,isActive:r,updateLocation:w});function h(p){a("click:outside",p),e.persistent?O():r.value=!1}function b(){return r.value&&g.value}B&&D(r,p=>{p?window.addEventListener("keydown",L):window.removeEventListener("keydown",L)},{immediate:!0});function L(p){p.key==="Escape"&&g.value&&(e.persistent?O():r.value=!1)}const T=dt();Ae(()=>e.closeOnBack,()=>{mt(T,p=>{g.value&&r.value?(p(!1),e.persistent?O():r.value=!1):p()})});const q=A();D(()=>r.value&&(e.absolute||e.contained)&&i.value==null,p=>{if(p){const F=ht(Y.value);F&&F!==document.scrollingElement&&(q.value=F.scrollTop)}});function O(){e.noClickAnimation||R.value&&X(R.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ie})}return Te(()=>{var p,F;return C(at,null,[(p=n.activator)==null?void 0:p.call(n,{isActive:r.value,props:V({ref:E},Q(s.value),e.activatorProps)}),N.value&&C(et,{disabled:!i.value,to:i.value},{default:()=>[v.value&&C("div",V({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},c.value,f.value],style:[k.value,{top:_(q.value)}],ref:Y},z,o),[C(Yt,V({color:y,modelValue:r.value&&!!e.scrim},Q(H.value)),null),C(yt,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{d(),a("afterLeave")}},{default:()=>[tt(C("div",V({ref:R,class:["v-overlay__content",e.contentClass],style:[I.value,S.value]},Q(M.value),e.contentProps),[(F=n.default)==null?void 0:F.call(n,{isActive:r})]),[[nt,r.value],[ot("click-outside"),{handler:h,closeConditional:b,include:()=>[x.value]}]])]})])]})])}),{activatorEl:x,animateClick:O,contentEl:R,globalTop:g,localTop:m,updateLocation:w}}});function Ut(e){return it(e,Object.keys(He.props))}const Zt=Ce()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Me({origin:"center center",scrollStrategy:"block",transition:{component:bt},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const o=De(e,"modelValue"),{scopeId:a}=Re(),l=A();function r(i){var c,f;const u=i.relatedTarget,v=i.target;if(u!==v&&(c=l.value)!=null&&c.contentEl&&(f=l.value)!=null&&f.globalTop&&![document,l.value.contentEl].includes(v)&&!l.value.contentEl.contains(v)){const d=[...l.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(m=>!m.hasAttribute("disabled")&&!m.matches('[tabindex="-1"]'));if(!d.length)return;const y=d[0],g=d[d.length-1];u===y?g.focus():y.focus()}}return B&&D(()=>o.value&&e.retainFocus,i=>{i?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0}),D(o,async i=>{if(await j(),i){var c;(c=l.value.contentEl)==null||c.focus({preventScroll:!0})}else{var f;(f=l.value.activatorEl)==null||f.focus({preventScroll:!0})}}),Te(()=>{const[i]=Ut(e);return C(He,V({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},i,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,"aria-role":"dialog","aria-modal":"true",activatorProps:V({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps)},a),{activator:n.activator,default:function(){for(var c,f=arguments.length,u=new Array(f),v=0;v<f;v++)u[v]=arguments[v];return C(gt,{root:!0},{default:()=>[(c=n.default)==null?void 0:c.call(n,...u)]})}})}),st({},l)}});export{Kt as A,Zt as V,He as a,Ut as f,Me as m,Re as u};