import{c as aa,e as ta,g as N,S as ea,a as na,P as oa,b as la}from"./artBoards.c3fa8d9e.js";import{_ as J,h as sa,i as H,o as ia}from"./VBtn.c7f0ab13.js";import{a as q,V as Z}from"./VRow.1ccba76c.js";import{N as R,O as P,S as V,Q as g,c as m,R as C,aH as ra,aI as ua,W as E,L as da,P as U,J as W,aq as ca,V as G}from"./index.062f8331.js";import{V as B}from"./VSheet.55feb953.js";import{V as fa}from"./VContainer.e5a2d5ec.js";import{F as pa}from"./FooterSection.1f8be8b0.js";import"./VDivider.58da90e9.js";import"./layout.3a78b24b.js";function ma({swiper:a,extendParams:L,on:f,emit:p}){L({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};const d=t=>(Array.isArray(t)||(t=[t].filter(e=>!!e)),t);function x(t){let e;return t&&typeof t=="string"&&a.isElement&&(e=a.el.shadowRoot.querySelector(t),e)?e:(t&&(typeof t=="string"&&(e=[...document.querySelectorAll(t)]),a.params.uniqueNavElements&&typeof t=="string"&&e.length>1&&a.el.querySelectorAll(t).length===1&&(e=a.el.querySelector(t))),t&&!e?t:e)}function n(t,e){const o=a.params.navigation;t=d(t),t.forEach(l=>{l&&(l.classList[e?"add":"remove"](o.disabledClass),l.tagName==="BUTTON"&&(l.disabled=e),a.params.watchOverflow&&a.enabled&&l.classList[a.isLocked?"add":"remove"](o.lockClass))})}function i(){const{nextEl:t,prevEl:e}=a.navigation;if(a.params.loop){n(e,!1),n(t,!1);return}n(e,a.isBeginning&&!a.params.rewind),n(t,a.isEnd&&!a.params.rewind)}function b(t){t.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),p("navigationPrev"))}function u(t){t.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),p("navigationNext"))}function v(){const t=a.params.navigation;if(a.params.navigation=aa(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(t.nextEl||t.prevEl))return;let e=x(t.nextEl),o=x(t.prevEl);Object.assign(a.navigation,{nextEl:e,prevEl:o}),e=d(e),o=d(o);const l=(y,A)=>{y&&y.addEventListener("click",A==="next"?u:b),!a.enabled&&y&&y.classList.add(t.lockClass)};e.forEach(y=>l(y,"next")),o.forEach(y=>l(y,"prev"))}function c(){let{nextEl:t,prevEl:e}=a.navigation;t=d(t),e=d(e);const o=(l,y)=>{l.removeEventListener("click",y==="next"?u:b),l.classList.remove(a.params.navigation.disabledClass)};t.forEach(l=>o(l,"next")),e.forEach(l=>o(l,"prev"))}f("init",()=>{a.params.navigation.enabled===!1?h():(v(),i())}),f("toEdge fromEdge lock unlock",()=>{i()}),f("destroy",()=>{c()}),f("enable disable",()=>{let{nextEl:t,prevEl:e}=a.navigation;t=d(t),e=d(e),[...t,...e].filter(o=>!!o).forEach(o=>o.classList[a.enabled?"remove":"add"](a.params.navigation.lockClass))}),f("click",(t,e)=>{let{nextEl:o,prevEl:l}=a.navigation;o=d(o),l=d(l);const y=e.target;if(a.params.navigation.hideOnClick&&!l.includes(y)&&!o.includes(y)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===y||a.pagination.el.contains(y)))return;let A;o.length?A=o[0].classList.contains(a.params.navigation.hiddenClass):l.length&&(A=l[0].classList.contains(a.params.navigation.hiddenClass)),p(A===!0?"navigationShow":"navigationHide"),[...o,...l].filter(T=>!!T).forEach(T=>T.classList.toggle(a.params.navigation.hiddenClass))}});const r=()=>{a.el.classList.remove(a.params.navigation.navigationDisabledClass),v(),i()},h=()=>{a.el.classList.add(a.params.navigation.navigationDisabledClass),c()};Object.assign(a.navigation,{enable:r,disable:h,update:i,init:v,destroy:c})}function ga({swiper:a,extendParams:L,on:f}){L({parallax:{enabled:!1}});const p=(n,i)=>{const{rtl:b}=a,u=b?-1:1,v=n.getAttribute("data-swiper-parallax")||"0";let c=n.getAttribute("data-swiper-parallax-x"),r=n.getAttribute("data-swiper-parallax-y");const h=n.getAttribute("data-swiper-parallax-scale"),t=n.getAttribute("data-swiper-parallax-opacity"),e=n.getAttribute("data-swiper-parallax-rotate");if(c||r?(c=c||"0",r=r||"0"):a.isHorizontal()?(c=v,r="0"):(r=v,c="0"),c.indexOf("%")>=0?c=`${parseInt(c,10)*i*u}%`:c=`${c*i*u}px`,r.indexOf("%")>=0?r=`${parseInt(r,10)*i}%`:r=`${r*i}px`,typeof t<"u"&&t!==null){const l=t-(t-1)*(1-Math.abs(i));n.style.opacity=l}let o=`translate3d(${c}, ${r}, 0px)`;if(typeof h<"u"&&h!==null){const l=h-(h-1)*(1-Math.abs(i));o+=` scale(${l})`}if(e&&typeof e<"u"&&e!==null){const l=e*i*-1;o+=` rotate(${l}deg)`}n.style.transform=o},d=()=>{const{el:n,slides:i,progress:b,snapGrid:u}=a;ta(n,"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(v=>{p(v,b)}),i.forEach((v,c)=>{let r=v.progress;a.params.slidesPerGroup>1&&a.params.slidesPerView!=="auto"&&(r+=Math.ceil(c/2)-b*(u.length-1)),r=Math.min(Math.max(r,-1),1),v.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach(h=>{p(h,r)})})},x=(n=a.params.speed)=>{const{el:i}=a;i.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(b=>{let u=parseInt(b.getAttribute("data-swiper-parallax-duration"),10)||n;n===0&&(u=0),b.style.transitionDuration=`${u}ms`})};f("beforeInit",()=>{!a.params.parallax.enabled||(a.params.watchSlidesProgress=!0,a.originalParams.watchSlidesProgress=!0)}),f("init",()=>{!a.params.parallax.enabled||d()}),f("setTranslate",()=>{!a.params.parallax.enabled||d()}),f("setTransition",(n,i)=>{!a.params.parallax.enabled||x(i)})}function ya({swiper:a,extendParams:L,on:f,emit:p,params:d}){a.autoplay={running:!1,paused:!1,timeLeft:0},L({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let x,n,i=d&&d.autoplay?d.autoplay.delay:3e3,b=d&&d.autoplay?d.autoplay.delay:3e3,u,v=new Date().getTime,c,r,h,t,e,o;function l(s){!a||a.destroyed||!a.wrapperEl||s.target===a.wrapperEl&&(a.wrapperEl.removeEventListener("transitionend",l),D())}const y=()=>{if(a.destroyed||!a.autoplay.running)return;a.autoplay.paused?c=!0:c&&(b=u,c=!1);const s=a.autoplay.paused?u:v+b-new Date().getTime();a.autoplay.timeLeft=s,p("autoplayTimeLeft",s,s/i),n=requestAnimationFrame(()=>{y()})},A=()=>{let s;return a.virtual&&a.params.virtual.enabled?s=a.slides.filter(_=>_.classList.contains("swiper-slide-active"))[0]:s=a.slides[a.activeIndex],s?parseInt(s.getAttribute("data-swiper-autoplay"),10):void 0},T=s=>{if(a.destroyed||!a.autoplay.running)return;cancelAnimationFrame(n),y();let S=typeof s>"u"?a.params.autoplay.delay:s;i=a.params.autoplay.delay,b=a.params.autoplay.delay;const _=A();!Number.isNaN(_)&&_>0&&typeof s>"u"&&(S=_,i=_,b=_),u=S;const O=a.params.speed,j=()=>{a.params.autoplay.reverseDirection?!a.isBeginning||a.params.loop||a.params.rewind?(a.slidePrev(O,!0,!0),p("autoplay")):a.params.autoplay.stopOnLastSlide||(a.slideTo(a.slides.length-1,O,!0,!0),p("autoplay")):!a.isEnd||a.params.loop||a.params.rewind?(a.slideNext(O,!0,!0),p("autoplay")):a.params.autoplay.stopOnLastSlide||(a.slideTo(0,O,!0,!0),p("autoplay")),a.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{T()}))};return S>0?(clearTimeout(x),x=setTimeout(()=>{j()},S)):requestAnimationFrame(()=>{j()}),S},M=()=>{a.autoplay.running=!0,T(),p("autoplayStart")},$=()=>{a.autoplay.running=!1,clearTimeout(x),cancelAnimationFrame(n),p("autoplayStop")},k=(s,S)=>{if(a.destroyed||!a.autoplay.running)return;clearTimeout(x),s||(o=!0);const _=()=>{p("autoplayPause"),a.params.autoplay.waitForTransition?a.wrapperEl.addEventListener("transitionend",l):D()};if(a.autoplay.paused=!0,S){e&&(u=a.params.autoplay.delay),e=!1,_();return}u=(u||a.params.autoplay.delay)-(new Date().getTime()-v),!(a.isEnd&&u<0&&!a.params.loop)&&(u<0&&(u=0),_())},D=()=>{a.isEnd&&u<0&&!a.params.loop||a.destroyed||!a.autoplay.running||(v=new Date().getTime(),o?(o=!1,T(u)):T(),a.autoplay.paused=!1,p("autoplayResume"))},F=()=>{if(a.destroyed||!a.autoplay.running)return;const s=N();s.visibilityState==="hidden"&&(o=!0,k(!0)),s.visibilityState==="visible"&&D()},Q=s=>{s.pointerType==="mouse"&&(o=!0,k(!0))},z=s=>{s.pointerType==="mouse"&&a.autoplay.paused&&D()},Y=()=>{a.params.autoplay.pauseOnMouseEnter&&(a.el.addEventListener("pointerenter",Q),a.el.addEventListener("pointerleave",z))},K=()=>{a.el.removeEventListener("pointerenter",Q),a.el.removeEventListener("pointerleave",z)},X=()=>{N().addEventListener("visibilitychange",F)},w=()=>{N().removeEventListener("visibilitychange",F)};f("init",()=>{a.params.autoplay.enabled&&(Y(),X(),v=new Date().getTime(),M())}),f("destroy",()=>{K(),w(),a.autoplay.running&&$()}),f("beforeTransitionStart",(s,S,_)=>{a.destroyed||!a.autoplay.running||(_||!a.params.autoplay.disableOnInteraction?k(!0,!0):$())}),f("sliderFirstMove",()=>{if(!(a.destroyed||!a.autoplay.running)){if(a.params.autoplay.disableOnInteraction){$();return}r=!0,h=!1,o=!1,t=setTimeout(()=>{o=!0,h=!0,k(!0)},200)}}),f("touchEnd",()=>{if(!(a.destroyed||!a.autoplay.running||!r)){if(clearTimeout(t),clearTimeout(x),a.params.autoplay.disableOnInteraction){h=!1,r=!1;return}h&&a.params.cssMode&&D(),h=!1,r=!1}}),f("slideChange",()=>{a.destroyed||!a.autoplay.running||(e=!0)}),Object.assign(a.autoplay,{start:M,stop:$,pause:k,resume:D})}const va={components:{Swiper:ea,SwiperSlide:na},setup(){return{modules:[ya,ga,oa,ma]}}},I=a=>(ra("data-v-cb881ed5"),a=a(),ua(),a),ba=I(()=>E("div",{class:"parallax-bg offset-1 background-parallax","data-swiper-parallax":"-15%"},null,-1)),ha=I(()=>E("div",{class:"text","data-swiper-parallax":"-100"},[E("p",{class:"text-h5 offset-1"}," 1- Paint Art "),E("p",{class:"text-h5 offset-1"}," 2- line panels ")],-1)),xa=I(()=>E("div",{class:"text","data-swiper-parallax":"-100"},[E("p",{class:"text-h5 offset-1"}," 3- Drawing characters "),E("p",{class:"text-h5 offset-1"}," 4- Quranic verses ")],-1)),_a=I(()=>E("div",{class:"text","data-swiper-parallax":"-100"},[E("p",{class:"text-h5 offset-1"}," 5- phrases of poetry "),E("p",{class:"text-h5 offset-1"}," 6- Digital, oily or lead ")],-1));function Ea(a,L,f,p,d,x){const n=R("swiper-slide"),i=R("swiper");return P(),V(Z,null,{default:g(()=>[m(q,{cols:"12",lg:"12",sm:"122"},{default:g(()=>[m(i,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},speed:600,parallax:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:p.modules,class:"mySwiper"},{default:g(()=>[ba,m(n,null,{default:g(()=>[m(q,{lg:"6",class:"title text-h4 font-weight-bold","data-swiper-parallax":"-300"},{default:g(()=>[C(" Art Sharqi offers custom paintings for you or your loved ones: ")]),_:1}),ha]),_:1}),m(n,null,{default:g(()=>[m(q,{lg:"6",class:"title text-h4 font-weight-bold","data-swiper-parallax":"-300"},{default:g(()=>[C(" Art Sharqi offers custom paintings for you or your loved ones: ")]),_:1}),xa]),_:1}),m(n,null,{default:g(()=>[m(q,{lg:"6",class:"title text-h4 font-weight-bold","data-swiper-parallax":"-300"},{default:g(()=>[C(" Art Sharqi offers custom paintings for you or your loved ones: ")]),_:1}),_a]),_:1})]),_:1},8,["modules"])]),_:1})]),_:1})}const Sa=J(va,[["render",Ea],["__scopeId","data-v-cb881ed5"]]);const La={data:()=>({artBoards:[{id:"1",title:"3D carved from pine wood",thumbnail:"bw-1",images:["bw-2","bw-3","bw-4","bw-5"],measuring:{size1:"65 cm",size2:"75 cm",size3:"90 cm"},description:"Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."},{id:"2",title:"Yellow roses palette with Oil colors",thumbnail:"by-2",images:["by-1","by-2","by-3"],measuring:{size1:"4 * 7 cm"},description:"Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."},{id:"3",title:"Necklace in the name of (Zana)",thumbnail:"b-3.",images:["b-3","b-3","b-3","b-3"],measuring:{size1:"50 * 70 cm"},description:"((Zana)) This is one unique piece in the world made with love just for you , 925 sterling silver on American walnut wood."},{id:"4",title:"New neighborhood  palette with oil colors",thumbnail:"b-4.",images:["b-4","b-4","b-4","b-4"],measuring:{size1:"50 * 70 cm"},description:"This painting is inspired by the old neighborhoods of Aleppo ,From a neighborhood called the new neighborhood."},{id:"5",thumbnail:"bg-5",title:"Galaxy palette..",images:["bg-1","bg-2","bg-1","bg-2"],measuring:{size1:"50 * 40 cm"},description:"Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."},{id:"6",title:"A village painting in oil colors",thumbnail:"bv-1",images:["bv-1","bv-1","bv-1","bv-1"],measuring:{size1:"50 * 40 cm"},description:"Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."}]}),created(){this.loadArtBoards()},methods:{loadArtBoards(){this.axios.get("/AccessoraisJSON/db.json").then(a=>{this.artBoards=a.data.artBoards}).catch(a=>{a&&console.log("Loading failed Earrings API")})},...da(la,["ShowArtBoardDetails"])}},Ta={class:"text-center my-4"},Aa={class:"ma-5"};function Da(a,L,f,p,d,x){return P(),V(fa,null,{default:g(()=>[m(Z,{align:"start",justify:"center"},{default:g(()=>[(P(!0),U(W,null,ca(a.artBoards,n=>(P(),V(q,{key:n.id,cols:"12",lg:"4",sm:"12",class:"my-6"},{default:g(()=>[m(B,{border:""},{default:g(()=>[m(B,{class:"pa-5",align:"center",height:"750"},{default:g(()=>[m(sa,{cover:"",src:"/src/assets/art-board/"+n.thumbnail+".jpg",width:"400",class:""},null,8,["src"]),m(B,{class:"mt-1"},{default:g(()=>[E("h1",Ta,G(n.title),1),E("p",Aa,G(n.description),1)]),_:2},1024)]),_:2},1024),m(q,{cols:"12",lg:"12",sm:"12",align:"center",class:"py-3"},{default:g(()=>[m(H,{color:"brown",class:""},{default:g(()=>[m(ia,{class:"mr-3"},{default:g(()=>[C("mdi-shopping")]),_:1}),C(" Buy Naw ")]),_:1}),m(H,{class:"my-2 offset-1",color:"brown",variant:"outlined",to:{name:"art-board-details",params:{id:n.id}},onClick:i=>a.ShowArtBoardDetails(n)},{default:g(()=>[C(" Show Details ")]),_:2},1032,["to","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const qa=J(La,[["render",Da]]),Ma={__name:"BoardsView",setup(a){return(L,f)=>(P(),U(W,null,[m(Sa),m(qa),m(pa)],64))}};export{Ma as default};
