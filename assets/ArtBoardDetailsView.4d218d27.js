import{d as U,f as le,S as ie,a as oe,P as re,b as ne}from"./artBoards.2845c995.js";import{i as J,a8 as de,m as Q,a as Z,d as ce,t as O,c as t,I as G,E as X,u as ue,b as H,w as K,y as fe,v as me,K as pe,N,O as he,P as ve,Q as s,J as ge,W as g,V as I,R as _e}from"./index.1e3c5ab9.js";import{F as we}from"./FooterSection.38636d91.js";import{S as ye,m as ee,s as te,T as be,u as Ve,R as ke,a as Ce,p as Se,b as Be,U as Ae,c as De,r as $e,C as Ee,e as Ie,v as Pe,w as ze,f as xe,g as Te,D as Me,W as Oe,t as je,y as qe,V as j,o as q,_ as Re,h as R,i as Fe}from"./VBtn.fe0aceae.js";import{V as Ge}from"./VContainer.24370676.js";import{V as C,a as S}from"./VRow.f6092520.js";import{V as Ne}from"./VSheet.51d52ebb.js";import{V as Le}from"./VCard.c614462f.js";import{b as Ue}from"./index.a10aac74.js";import{V as W}from"./VAvatar.79e382d0.js";import"./VDivider.3ab474ff.js";import"./layout.1a1cd3e1.js";import"./createSimpleFunctional.74b90087.js";import"./VCardText.166e5afb.js";function Xe(e){const{effect:r,swiper:a,on:f,setTranslate:l,setTransition:n,overwriteParams:m,perspective:d,recreateShadows:h,getEffectParams:o}=e;f("beforeInit",()=>{if(a.params.effect!==r)return;a.classNames.push(`${a.params.containerModifierClass}${r}`),d&&d()&&a.classNames.push(`${a.params.containerModifierClass}3d`);const _=m?m():{};Object.assign(a.params,_),Object.assign(a.originalParams,_)}),f("setTranslate",()=>{a.params.effect===r&&l()}),f("setTransition",(_,V)=>{a.params.effect===r&&n(V)}),f("transitionEnd",()=>{if(a.params.effect===r&&h){if(!o||!o().slideShadows)return;a.slides.forEach(_=>{_.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(V=>V.remove())}),h()}});let c;f("virtualUpdate",()=>{a.params.effect===r&&(a.slides.length||(c=!0),requestAnimationFrame(()=>{c&&a.slides&&a.slides.length&&(l(),c=!1)}))})}function He(e,r){const a=U(r);return a!==r&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function Y(e,r,a){const f=`swiper-slide-shadow${a?`-${a}`:""}`,l=U(r);let n=l.querySelector(`.${f}`);return n||(n=le("div",`swiper-slide-shadow${a?`-${a}`:""}`),l.append(n)),n}function Ke({swiper:e,extendParams:r,on:a}){r({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Xe({effect:"coverflow",swiper:e,on:a,setTranslate:()=>{const{width:n,height:m,slides:d,slidesSizesGrid:h}=e,o=e.params.coverflowEffect,c=e.isHorizontal(),_=e.translate,V=c?-_+n/2:-_+m/2,P=c?o.rotate:-o.rotate,z=o.depth;for(let i=0,y=d.length;i<y;i+=1){const v=d[i],w=h[i],F=v.swiperSlideOffset,D=(V-F-w/2)/w,p=typeof o.modifier=="function"?o.modifier(D):D*o.modifier;let u=c?P*p:0,b=c?0:P*p,$=-z*Math.abs(p),k=o.stretch;typeof k=="string"&&k.indexOf("%")!==-1&&(k=parseFloat(o.stretch)/100*w);let B=c?0:k*p,E=c?k*p:0,A=1-(1-o.scale)*Math.abs(p);Math.abs(E)<.001&&(E=0),Math.abs(B)<.001&&(B=0),Math.abs($)<.001&&($=0),Math.abs(u)<.001&&(u=0),Math.abs(b)<.001&&(b=0),Math.abs(A)<.001&&(A=0);const x=`translate3d(${E}px,${B}px,${$}px)  rotateX(${b}deg) rotateY(${u}deg) scale(${A})`,se=He(o,v);if(se.style.transform=x,v.style.zIndex=-Math.abs(Math.round(p))+1,o.slideShadows){let T=c?v.querySelector(".swiper-slide-shadow-left"):v.querySelector(".swiper-slide-shadow-top"),M=c?v.querySelector(".swiper-slide-shadow-right"):v.querySelector(".swiper-slide-shadow-bottom");T||(T=Y(o,v,c?"left":"top")),M||(M=Y(o,v,c?"right":"bottom")),T&&(T.style.opacity=p>0?p:0),M&&(M.style.opacity=-p>0?-p:0)}}},setTransition:n=>{e.slides.map(d=>U(d)).forEach(d=>{d.style.transitionDuration=`${n}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>{h.style.transitionDuration=`${n}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ae=Symbol.for("vuetify:v-chip-group"),We=J({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:de},...ye({selectedClass:"v-chip--selected"}),...ee(),...Q(),...te({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const{themeClasses:f}=Z(e),{isSelected:l,select:n,next:m,prev:d,selected:h}=be(e,ae);return ce({VChip:{color:O(e,"color"),disabled:O(e,"disabled"),filter:O(e,"filter"),variant:O(e,"variant")}}),Ve(()=>{var o;return t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},f.value]},{default:()=>[(o=a.default)==null?void 0:o.call(a,{isSelected:l,select:n,next:m,prev:d,selected:h.value})]})}),{}}}),L=J({name:"VChip",directives:{Ripple:ke},props:{activeClass:String,appendAvatar:String,appendIcon:G,closable:Boolean,closeIcon:{type:G,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:G,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:X,onClickOnce:X,...Ce(),...Se(),...Be(),...Ae(),...De(),...$e(),...Ee(),...ee({tag:"span"}),...Q(),...te({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,r){let{attrs:a,emit:f,slots:l}=r;const{borderClasses:n}=Ie(e),{colorClasses:m,colorStyles:d,variantClasses:h}=Pe(e),{densityClasses:o}=ze(e),{elevationClasses:c}=xe(e),{roundedClasses:_}=Te(e),{sizeClasses:V}=Me(e),{themeClasses:P}=Z(e),z=ue(e,"modelValue"),i=Oe(e,ae,!1),y=je(e,a),v=H(()=>e.link!==!1&&y.isLink.value),w=H(()=>!e.disabled&&e.link!==!1&&(!!i||e.link||y.isClickable.value));function F(u){z.value=!1,f("click:close",u)}function D(u){var b;f("click",u),w.value&&((b=y.navigate)==null||b.call(y,u),i==null||i.toggle())}function p(u){(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),D(u))}return()=>{var u;const b=y.isLink.value?"a":e.tag,$=!!(l.append||e.appendIcon||e.appendAvatar),k=!!(l.close||e.closable),B=!!(l.filter||e.filter)&&i,E=!!(l.prepend||e.prependIcon||e.prependAvatar),A=!i||i.isSelected.value;return z.value&&K(t(b,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":w.value,"v-chip--filter":B,"v-chip--pill":e.pill},P.value,n.value,A?m.value:void 0,o.value,c.value,_.value,V.value,h.value,i==null?void 0:i.selectedClass.value],style:[A?d.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:w.value?0:void 0,onClick:D,onKeydown:w.value&&!v.value&&p},{default:()=>{var x;return[qe(w.value,"v-chip"),B&&t(j,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[t(Ue,null,{default:()=>[K(t("div",{class:"v-chip__filter"},[l.filter?l.filter():t(q,null,null)]),[[me,i.isSelected.value]])]})]}),E&&t(j,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[l.prepend?t("div",{class:"v-chip__prepend"},[l.prepend()]):e.prependAvatar?t(W,{start:!0},null):e.prependIcon?t(q,{start:!0},null):void 0]}),(x=(u=l.default)==null?void 0:u.call(l,{isSelected:i==null?void 0:i.isSelected.value,selectedClass:i==null?void 0:i.selectedClass.value,select:i==null?void 0:i.select,toggle:i==null?void 0:i.toggle,value:i==null?void 0:i.value.value,disabled:e.disabled}))!=null?x:e.text,$&&t(j,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[l.append?t("div",{class:"v-chip__append"},[l.append()]):e.appendAvatar?t(W,{end:!0},null):e.appendIcon?t(q,{end:!0},null):void 0]}),k&&t(j,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[t("div",{class:"v-chip__close",onClick:F},[l.close?l.close():t(q,null,null)])]})]}}),[[fe("ripple"),w.value&&e.ripple,null]])}}}),Ye={components:{Swiper:ie,SwiperSlide:oe,FooterSection:we},setup(){return{modules:[Ke,re]}},computed:{thumbnail(){return this.ArtBoardDetails.thumbnail},images(){return this.ArtBoardDetails.images[0],this.ArtBoardDetails.images[1],this.ArtBoardDetails.images[2]},measuring(){return this.ArtBoardDetails.size1,this.ArtBoardDetails.size2,this.ArtBoardDetails.size3},...pe(ne,["ArtBoardDetails"])},data:()=>({selection:"",tab:""}),methods:{}},Je=g("h1",{class:"text-center text-h3"},"OverView",-1),Qe=g("p",{class:"text-center text-black text-subtitle-2"}," _____ .\uFF61. o \u2605 o \u2605 .\uFF61. _____ ",-1),Ze={class:"text-center text-black"},et=g("p",{class:"text-center text-black text-subtitle-2"}," _____ .\uFF61. .\uFF61. _____ ",-1),tt=g("h1",{class:"text-h5 font-weight-bold mt-5"},"\u2A33 Avilibale Measuring:",-1),at={class:"text-center"},st={class:"text-center"},lt={class:"text-center"},it=g("h1",{class:"text-h5 font-weight-bold mt-5"},"\u2A33 Description Board:",-1),ot={class:"text-center"},rt={class:"d-sm-flex justify-space-between my-5"};function nt(e,r,a,f,l,n){const m=N("swiper-slide"),d=N("swiper"),h=N("FooterSection");return he(),ve(ge,null,[t(Ge,null,{default:s(()=>[t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"6",sm:"12"},{default:s(()=>[Je,Qe]),_:1})]),_:1}),t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"6",sm:"12"},{default:s(()=>[t(Ne,{border:"",class:"px-3"},{default:s(()=>[t(d,{effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1},loop:!0,pagination:!0,modules:f.modules,class:"mySwiper"},{default:s(()=>[t(m,null,{default:s(()=>[t(R,{src:e.ArtBoardDetails.thumbnail,"lazy-src":e.ArtBoardDetails.thumbnail},null,8,["src","lazy-src"])]),_:1}),t(m,null,{default:s(()=>[t(R,{src:e.ArtBoardDetails.images[0],"lazy-src":e.ArtBoardDetails.images[0]},null,8,["src","lazy-src"])]),_:1}),t(m,null,{default:s(()=>[t(R,{src:e.ArtBoardDetails.images[1],"lazy-src":e.ArtBoardDetails.images[1]},null,8,["src","lazy-src"])]),_:1}),t(m,null,{default:s(()=>[t(R,{src:e.ArtBoardDetails.images[2],"lazy-src":e.ArtBoardDetails.images[2]},null,8,["src","lazy-src"])]),_:1})]),_:1},8,["modules"])]),_:1}),g("h1",Ze,I(e.ArtBoardDetails.title),1),et]),_:1})]),_:1}),t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"6",sm:"12"},{default:s(()=>[tt]),_:1})]),_:1}),t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"4",sm:"12"},{default:s(()=>[t(Le,{flat:""},{default:s(()=>[t(We,{modelValue:e.tab,"onUpdate:modelValue":r[0]||(r[0]=o=>e.tab=o),"selected-class":" ",mandatory:""},{default:s(()=>[t(L,{value:"one",variant:"outlined",color:"orange"},{default:s(()=>[g("span",at,I(e.ArtBoardDetails.measuring.size1),1)]),_:1}),t(L,{value:"two",variant:"outlined",color:"orange"},{default:s(()=>[g("span",st,I(e.ArtBoardDetails.measuring.size2),1)]),_:1}),t(L,{value:"three",variant:"outlined",color:"orange"},{default:s(()=>[g("span",lt,I(e.ArtBoardDetails.measuring.size3),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"6",sm:"12"},{default:s(()=>[it]),_:1})]),_:1}),t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"6",sm:"12"},{default:s(()=>[g("p",ot,I(e.ArtBoardDetails.description),1)]),_:1})]),_:1}),t(C,{justify:"center",align:"center"},{default:s(()=>[t(S,{cols:"12",lg:"8",sm:"12"},{default:s(()=>[g("div",rt,[t(Fe,{block:"",rounded:"","append-icon":"mdi-arrow-right",color:"brown"},{default:s(()=>[_e(" Buy Naw ")]),_:1})])]),_:1})]),_:1})]),_:1}),t(h)],64)}const kt=Re(Ye,[["render",nt]]);export{kt as default};
