import{r,j as e,C as pe,T as te,B as m,s as N,a as I,t as w,l,d as T,b as A,A as D,c as M,e as ie,L as ye,f as le,D as J,g as O}from"./index-WRXkegBf.js";import{a as xe,g as fe}from"./vendor-N--QU9DW.js";const je="animal-wrapper-IRrhj",ve="animal-wrapper-disabled-MWwHK",ge="animal-input-12WUn",be="animal-wrapper-no-shadow-WP9Gk",Ce="animal-wrapper-small-mWvja",we="animal-wrapper-middle-zXqMR",ke="animal-wrapper-large-RrYM4",Se="animal-wrapper-error-W-VRo",Ne="animal-wrapper-warning-miO7A",Ie="animal-prefix-g8f1R",Ae="animal-suffix-o7ywP",De="animal-clear-HuR2N",F={wrapper:je,"wrapper-disabled":"animal-wrapper-disabled-MWwHK",wrapperDisabled:ve,input:ge,"wrapper-no-shadow":"animal-wrapper-no-shadow-WP9Gk",wrapperNoShadow:be,"wrapper-small":"animal-wrapper-small-mWvja",wrapperSmall:Ce,"wrapper-middle":"animal-wrapper-middle-zXqMR",wrapperMiddle:we,"wrapper-large":"animal-wrapper-large-RrYM4",wrapperLarge:ke,"wrapper-error":"animal-wrapper-error-W-VRo",wrapperError:Se,"wrapper-warning":"animal-wrapper-warning-miO7A",wrapperWarning:Ne,prefix:Ie,suffix:Ae,clear:De},P=({size:t="middle",prefix:a,suffix:n,allowClear:i=!1,status:d,shadow:s=!1,disabled:o=!1,className:p,value:u,defaultValue:k,onChange:v,onClear:g,...j})=>{const[V,h]=r.useState(k??""),f=u!==void 0,y=f?u:V,c=r.useCallback(x=>{f||h(x.target.value),v?.(x)},[f,v]),b=r.useCallback(()=>{f||h(""),g?.();const x=new Event("input",{bubbles:!0}),G={value:""};v?.({target:G,currentTarget:G,nativeEvent:x})},[f,v,g]),B=[F.wrapper,F[`wrapper-${t}`],d&&F[`wrapper-${d}`],o&&F["wrapper-disabled"],!s&&F["wrapper-no-shadow"],p].filter(Boolean).join(" ");return e.jsxs("span",{className:B,children:[a&&e.jsx("span",{className:F.prefix,children:a}),e.jsx("input",{className:F.input,disabled:o,value:y,onChange:c,...j}),i&&y&&!o&&e.jsx("span",{className:F.clear,onClick:b,role:"button",tabIndex:-1,children:"×"}),n&&e.jsx("span",{className:F.suffix,children:n})]})};P.displayName="Input";const Ve="animal-switch-disabled-U5tjL",Be="animal-switch-checked-6HKL4",Le="animal-switch-small-jkWtD",Te="animal-handle-KgZ7M",Me="animal-inner-5x97M",Re="animal-switch-loading--3JYL",ze="animal-spinner-QK4sP",Pe="animal-animal-spin-P6YYa",K={switch:"animal-switch-NQPLj","switch-disabled":"animal-switch-disabled-U5tjL",switchDisabled:Ve,"switch-checked":"animal-switch-checked-6HKL4",switchChecked:Be,"switch-small":"animal-switch-small-jkWtD",switchSmall:Le,handle:Te,inner:Me,"switch-loading":"animal-switch-loading--3JYL",switchLoading:Re,spinner:ze,"animal-spin":"animal-animal-spin-P6YYa",animalSpin:Pe},Y=({checked:t,defaultChecked:a=!1,size:n="default",disabled:i=!1,loading:d=!1,checkedChildren:s,unCheckedChildren:o,onChange:p,className:u})=>{const[k,v]=r.useState(a),g=t!==void 0,j=g?t:k,V=r.useCallback(()=>{if(i||d)return;const f=!j;g||v(f),p?.(f)},[i,d,j,g,p]),h=[K.switch,K[`switch-${n}`],j&&K["switch-checked"],i&&K["switch-disabled"],d&&K["switch-loading"],u].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",role:"switch","aria-checked":j,className:h,onClick:V,disabled:i,children:[e.jsx("span",{className:K.handle,children:d&&e.jsx("span",{className:K.spinner})}),e.jsx("span",{className:K.inner,children:j?s:o})]})};Y.displayName="Switch";var We=xe();const Oe="animal-mask-hAWeP",Ee="animal-modal-d0zyM",Fe="animal-modalClipped-7IuAw",He="animal-header-udOSi",Ke="animal-title-s6pv3",Ue="animal-body--aiyx",Ye="animal-footer-9Ib-a",U={mask:Oe,modal:Ee,modalClipped:Fe,header:He,title:Ke,body:Ue,footer:Ye},qe=()=>e.jsx("svg",{style:{position:"absolute",width:0,height:0},"aria-hidden":!0,children:e.jsx("clipPath",{id:"animal-modal-clip",clipPathUnits:"objectBoundingBox",children:e.jsx("path",{d:"M0.501,0.005 L0.501,0.005 L0.523,0.005 L0.549,0.006 C0.704,0.01,0.796,0.017,0.825,0.027 L0.827,0.028 C0.872,0.045,0.939,0.044,0.978,0.17 C1,0.254,1,0.365,0.99,0.505 L0.988,0.513 C0.979,0.558,0.971,0.598,0.965,0.633 C0.956,0.689,0.979,0.77,0.964,0.865 C0.953,0.928,0.921,0.966,0.869,0.979 C0.821,0.986,0.773,0.992,0.726,0.995 L0.712,0.996 L0.694,0.997 C0.648,1,0.586,1,0.507,1 L0.501,1 L0.464,1 C0.385,1,0.325,0.998,0.283,0.995 C0.234,0.992,0.184,0.987,0.133,0.979 C0.081,0.966,0.05,0.928,0.039,0.865 C0.023,0.77,0.047,0.689,0.037,0.633 C0.031,0.595,0.023,0.552,0.013,0.505 C-0.006,0.365,-0.002,0.254,0.024,0.17 C0.064,0.045,0.13,0.045,0.174,0.028 L0.175,0.028 C0.204,0.017,0.303,0.009,0.474,0.005 L0.501,0.005"})})}),$=({open:t,title:a,width:n=520,maskClosable:i=!0,footer:d,onClose:s,onOk:o,children:p,className:u,typeSpeed:k=80,typewriter:v=!0})=>{const[g,j]=r.useState(0);r.useEffect(()=>{t&&j(c=>c+1)},[t]),r.useEffect(()=>{if(!t)return;const c=b=>{b.key==="Escape"&&s?.()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,s]),r.useEffect(()=>(t&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[t]);const V=r.useCallback(()=>{i&&s?.()},[i,s]),h=r.useCallback(c=>{c.stopPropagation()},[]);if(!t)return null;const f=e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"primary",onClick:s,children:"取消"}),e.jsx(m,{type:"primary",onClick:o,children:"确定"})]}),y=e.jsx(pe,{children:e.jsx("div",{className:U.mask,onClick:V,children:e.jsxs("div",{className:[U.modal,u].filter(Boolean).join(" "),style:{width:n},onClick:h,role:"dialog","aria-modal":"true",children:[e.jsx(qe,{}),e.jsxs("div",{className:U.modalClipped,children:[a&&e.jsx("div",{className:U.header,children:a&&e.jsx("div",{className:U.title,children:a})}),e.jsx("div",{className:U.body,children:v?e.jsx(te,{speed:k,trigger:g,children:p}):p}),d!==null&&e.jsx("div",{className:U.footer,children:d===void 0?f:d})]})]})})});return We.createPortal(y,document.body)};$.displayName="Modal";const Qe="animal-footer-5DMOR",Ge="animal-tree-KZ8hX",oe={footer:Qe,tree:Ge},ne=({type:t="tree",className:a,style:n})=>{const i=[oe.footer,oe[t],a].filter(Boolean).join(" ");return e.jsx("div",{className:i,style:n})};ne.displayName="Footer";const Ze="animal-faqCard-5jlOE",Xe="animal-disabled-9DAjm",Je="animal-questionHeader-iqP87",$e="animal-questionIcon-xRkdp",_e="animal-expanded-a8Eze",et="animal-questionText-jVpUv",tt="animal-leafDecoration-RoK4H",at="animal-answerWrapper-tzFtx",st="animal-answerContent-ppsk-",H={faqCard:Ze,disabled:Xe,questionHeader:Je,questionIcon:$e,expanded:_e,questionText:et,leafDecoration:tt,answerWrapper:at,answerContent:st},_=({question:t,answer:a,defaultExpanded:n=!1,disabled:i=!1,className:d,style:s})=>{const[o,p]=r.useState(n),u=()=>{i||p(!o)},k=[H.faqCard,o&&H.expanded,i&&H.disabled,d].filter(Boolean).join(" ");return e.jsxs("div",{className:k,style:s,children:[e.jsxs("button",{className:H.questionHeader,onClick:u,disabled:i,"aria-expanded":o,children:[e.jsx("span",{className:H.questionIcon,children:o?"−":"+"}),e.jsx("span",{className:H.questionText,children:t}),e.jsx("span",{className:H.leafDecoration,children:e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:e.jsx("path",{fill:"currentColor",d:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"})})})]}),e.jsx("div",{className:H.answerWrapper,children:e.jsx("div",{className:H.answerContent,children:a})})]})};_.displayName="Collapse";const lt="animal-acDatetime-hVKh7",nt="animal-acDate-rhO3k",it="animal-acWeekday-bxDHR",ot="animal-acMonthday-1jUmX",rt="animal-acTime-S-twb",dt="animal-acColon-g4vuJ",Z={acDatetime:lt,acDate:nt,acWeekday:it,acMonthday:ot,acTime:rt,acColon:dt},ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],he=({className:t})=>{const[a,n]=r.useState(new Date);return r.useEffect(()=>{const i=setInterval(()=>n(new Date),1e3);return()=>clearInterval(i)},[]),e.jsx(pe,{children:e.jsxs("div",{className:`${Z.acDatetime} ${t||""}`,children:[e.jsxs("div",{className:Z.acDate,children:[e.jsx("span",{className:Z.acWeekday,children:ct[a.getDay()]}),e.jsxs("span",{className:Z.acMonthday,children:[pt[a.getMonth()]," ",a.getDate()]})]}),e.jsxs("div",{className:Z.acTime,children:[a.getHours().toString().padStart(2,"0"),e.jsx("span",{className:Z.acColon,children:":"}),a.getMinutes().toString().padStart(2,"0")]})]})})};he.displayName="Time";const ht="animal-phoneContainer-49yKw",mt="animal-phone-bXgSa",ut="animal-statusBar-Vb96q",yt="animal-time-cokU-",xt="animal-signalIcons-TuL3l",ft="animal-screenContent-oyJF-",jt="animal-homeScreen-no2yS",vt="animal-grasswave-l6cyA",gt="animal-dateDisplay-cnvu8",bt="animal-dateDisplayHeader-32i0J",Ct="animal-blink--R0wf",wt="animal-dayText-7NEMb",kt="animal-appsGrid-opTs8",St="animal-appItem-1NmDt",Nt="animal-appIcon-tTPIg",It="animal-iconBounce-n4Boc",At="animal-appIconOffset-b5SZG",Dt="animal-iconBounceOffset-XfsXI",Vt="animal-appItemOffset-FEStg",Bt="animal-iconCamera-c-grH",Lt="animal-iconMiles-L9Cow",Tt="animal-iconCritterpedia-okU95",Mt="animal-iconDiy-gZgxn",Rt="animal-iconDesign-YvE9z",zt="animal-iconMap-xmfHe",Pt="animal-iconVariant-k-kkB",Wt="animal-iconHelicopter-HV-TH",Ot="animal-iconChat-TVZXY",Et="animal-iconWifi-RoLJH",Ft="animal-iconLocation-YfhoK",Ht="animal-iconPage-wMmBC",Kt="animal-badge-drGmk",Ut="animal-pageIndicator-mQ-Pg",S={phoneContainer:ht,phone:mt,statusBar:ut,time:yt,signalIcons:xt,screenContent:ft,homeScreen:jt,grasswave:vt,dateDisplay:gt,dateDisplayHeader:bt,blink:Ct,dayText:wt,appsGrid:kt,appItem:St,appIcon:Nt,iconBounce:It,appIconOffset:At,iconBounceOffset:Dt,appItemOffset:Vt,iconCamera:Bt,iconMiles:Lt,iconCritterpedia:Tt,iconDiy:Mt,iconDesign:Rt,iconMap:zt,iconVariant:Pt,iconHelicopter:Wt,iconChat:Ot,iconWifi:Et,iconLocation:Ft,iconPage:Ht,badge:Kt,pageIndicator:Ut},Yt=[{id:"camera",iconClass:"iconCamera",color:"#B77DEE",hasNewMessage:!0},{id:"app",iconClass:"iconMiles",color:"#889DF0",offset:!0},{id:"critterpedia",iconClass:"iconCritterpedia",color:"#F7CD67"},{id:"diy",iconClass:"iconDiy",color:"#E59266"},{id:"shopping",iconClass:"iconDesign",color:"#F8A6B2"},{id:"variant",iconClass:"iconMap",color:"#82D5BB",hasNewMessage:!0},{id:"design",iconClass:"iconVariant",color:"#8AC68A"},{id:"map",iconClass:"iconHelicopter",color:"#FC736D"},{id:"chat",iconClass:"iconChat",color:"#D1DA49"}],qt=({className:t})=>{const[a,n]=r.useState(new Date);r.useEffect(()=>{const u=setInterval(()=>{n(new Date)},1e3);return()=>clearInterval(u)},[]);const i=a.getHours(),d=a.getMinutes(),s=i>=12?"PM":"AM",o=i%12||12,p=d.toString().padStart(2,"0");return e.jsx("div",{className:`${S.phoneContainer} ${t||""}`,children:e.jsx("div",{className:S.phone,children:e.jsx("div",{className:S.screenContent,children:e.jsxs("div",{className:S.homeScreen,children:[e.jsxs("div",{className:S.dateDisplay,children:[e.jsxs("div",{className:S.dateDisplayHeader,children:[e.jsx("span",{className:S.iconWifi}),e.jsxs("div",{children:[o,e.jsx("span",{className:S.blink,children:":"}),p,s]}),e.jsx("span",{className:S.iconLocation})]}),e.jsx("div",{className:S.dayText,children:"Welcome!"})]}),e.jsx("div",{className:S.appsGrid,children:Yt.map(u=>e.jsxs("div",{className:`${S.appItem} ${u.offset?S.appItemOffset:""}`,style:{backgroundColor:u.color},children:[u.hasNewMessage&&e.jsx("span",{className:S.badge}),e.jsx("span",{className:`${S.appIcon} ${S[u.iconClass]} ${u.offset?S.appIconOffset:""}`})]},u.id))}),e.jsx("div",{className:S.pageIndicator,children:e.jsx("span",{className:S.iconPage})})]})})})})},Qt="animal-icon-wUFR-",Gt="animal-iconBounce-Q1e3X",Zt="animal-icon-miles-oVFnM",Xt="animal-icon-camera-W9x4U",Jt="animal-icon-chat-dfYOk",$t="animal-icon-critterpedia-vDPSY",_t="animal-icon-design-8gBms",ea="animal-icon-diy-AwPHs",ta="animal-icon-helicopter-w6ZL6",aa="animal-icon-map-ogQk4",sa="animal-icon-shopping-TSh2U",la="animal-icon-variant-E6wqy",na="animal-iconList-MRyTC",ia="animal-iconListItem-nTF3l",oa="animal-iconListLabel-t2M3-",ae={icon:Qt,"icon-bounce":"animal-icon-bounce-1MvWH",iconBounce:Gt,"icon-miles":"animal-icon-miles-oVFnM",iconMiles:Zt,"icon-camera":"animal-icon-camera-W9x4U",iconCamera:Xt,"icon-chat":"animal-icon-chat-dfYOk",iconChat:Jt,"icon-critterpedia":"animal-icon-critterpedia-vDPSY",iconCritterpedia:$t,"icon-design":"animal-icon-design-8gBms",iconDesign:_t,"icon-diy":"animal-icon-diy-AwPHs",iconDiy:ea,"icon-helicopter":"animal-icon-helicopter-w6ZL6",iconHelicopter:ta,"icon-map":"animal-icon-map-ogQk4",iconMap:aa,"icon-shopping":"animal-icon-shopping-TSh2U",iconShopping:sa,"icon-variant":"animal-icon-variant-E6wqy",iconVariant:la,iconList:na,iconListItem:ia,iconListLabel:oa},R=({name:t,size:a=24,className:n,style:i,bounce:d=!1,...s})=>e.jsx("span",{className:`${ae.icon} ${ae[t]} ${d?ae["icon-bounce"]:""} ${n||""}`,style:{width:a,height:a,...i},...s}),re=[{name:"icon-miles",label:"NookMiles"},{name:"icon-camera",label:"Camera"},{name:"icon-chat",label:"Chat"},{name:"icon-critterpedia",label:"Critterpedia"},{name:"icon-design",label:"Design"},{name:"icon-diy",label:"DIY"},{name:"icon-helicopter",label:"Helicopter"},{name:"icon-map",label:"Map"},{name:"icon-shopping",label:"Shopping"},{name:"icon-variant",label:"Variant"}],ra="animal-wrapper-pbOTq",da="animal-trigger-2-Ahh",ca="animal-open-867xo",pa="animal-value-623RB",ha="animal-placeholder-vpC8E",ma="animal-arrow-xNbxA",ua="animal-dropdown-0l6jF",ya="animal-option-GEkLI",xa="animal-active-jtSpt",fa="animal-hovered-N-cco",ja="animal-pillBar-O9cTb",va="animal-optionDot-FQtyw",ga="animal-disabled-Oy12C",z={wrapper:ra,trigger:da,open:ca,value:pa,placeholder:ha,arrow:ma,dropdown:ua,option:ya,active:xa,hovered:fa,pillBar:ja,optionDot:va,disabled:ga},ee=({options:t,value:a,onChange:n,placeholder:i="请选择",disabled:d=!1})=>{const[s,o]=r.useState(!1),[p,u]=r.useState(null),[k,v]=r.useState({}),[g,j]=r.useState(!1),V=r.useRef(null),h=t.find(y=>y.key===a)?.label||i;r.useEffect(()=>{const y=c=>{V.current&&!V.current.contains(c.target)&&(o(!1),j(!1))};return s&&document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[s]),r.useEffect(()=>{if(s&&V.current){const y=V.current.getBoundingClientRect(),c=window.innerWidth,b=window.innerHeight,B=t.length*44+24,x={position:"absolute"};y.right+200>c?(x.right="100%",x.marginRight="6px",x.left="auto"):(x.left="100%",x.marginLeft="6px",x.right="auto");const G=b-y.bottom,ue=y.top;G<B&&ue>G?(x.top="auto",x.bottom="100%",x.marginBottom="6px",delete x.transform):G<B||y.top<B?(x.top="100%",x.marginTop="6px",x.bottom="auto",delete x.transform):(x.top="50%",x.transform="translateY(-50%)",x.bottom="auto"),v(x),requestAnimationFrame(()=>{j(!0)})}else s||j(!1)},[s,t.length]);const f=y=>{n(y),o(!1),j(!1)};return e.jsxs("div",{ref:V,className:`${z.wrapper} ${d?z.disabled:""}`,children:[e.jsxs("div",{className:`${z.trigger} ${s?z.open:""}`,onClick:()=>!d&&o(!s),children:[e.jsx("span",{className:a?z.value:z.placeholder,children:h}),e.jsx("span",{className:z.arrow,children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),s&&g&&e.jsx("div",{className:z.dropdown,style:k,children:t.map(y=>e.jsxs("div",{className:`${z.option} ${a===y.key?z.active:""} ${p===y.key?z.hovered:""}`,onClick:()=>f(y.key),onMouseEnter:()=>u(y.key),onMouseLeave:()=>u(null),children:[e.jsx("span",{className:z.optionDot}),y.label,a===y.key&&e.jsx("div",{className:z.pillBar})]},y.key))})]})};ee.displayName="Select";const ba="animal-tabs-I3QAo",Ca="animal-tabList--fYUP",wa="animal-tabItem-Ehph4",ka="animal-active-AoX4Y",Sa="animal-tabIcon-Aiu-T",Na="animal-tabLabel-bCauA",Ia="animal-tabLeaf-1ud9k",Aa="animal-tabLeafStatic-52CX9",Da="animal-tabContent-zDlRq",Va="animal-tabContentInner-Y5kRC",W={tabs:ba,tabList:Ca,tabItem:wa,active:ka,"active-shadow":"animal-active-shadow-vEKIu",tabIcon:Sa,tabLabel:Na,tabLeaf:Ia,tabLeafStatic:Aa,tabContent:Da,tabContentInner:Va},Ba="data:image/png;base64,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",q=({items:t,defaultActiveKey:a,activeKey:n,onChange:i,className:d,style:s,leafAnimation:o=!0,shadow:p=!0})=>{const[u,k]=r.useState(a||t[0]?.key),v=n!==void 0?n:u,g=h=>{n===void 0&&k(h),i?.(h)},j=t.find(h=>h.key===v),V=[W.tabs,d].filter(Boolean).join(" ");return e.jsxs("div",{className:V,style:s,children:[e.jsx("div",{className:W.tabList,children:t.map(h=>{const f=h.key===v;return e.jsxs("button",{className:`${W.tabItem} ${f?W.active:""} ${f&&p?W["active-shadow"]:""}`,onClick:()=>g(h.key),children:[e.jsx("span",{className:W.tabIcon,children:f?"●":"○"}),e.jsx("span",{className:W.tabLabel,children:h.label}),f&&e.jsx("img",{src:Ba,alt:"",className:`${W.tabLeaf} ${o?"":W.tabLeafStatic}`})]},h.key)})}),e.jsx("div",{className:W.tabContent,children:e.jsx("div",{className:W.tabContentInner,children:j?.children})})]})};q.displayName="Tabs";const La="animal-checkboxGroup-q3P6l",Ta="animal-horizontal-fBBSw",Ma="animal-vertical-klL45",Ra="animal-checkboxItem-DxKFM",za="animal-small-2wCHI",Pa="animal-box-bIDkg",Wa="animal-checkmark-Ub21Y",Oa="animal-label-L0ila",Ea="animal-middle-VUB-E",Fa="animal-large-QQxPe",Ha="animal-checked-S7gPe",Ka="animal-animal-checkbox-pop-0cWeC",Ua="animal-disabled-zDC-1",Ya="animal-groupDisabled-LvBFd",E={checkboxGroup:La,horizontal:Ta,vertical:Ma,checkboxItem:Ra,small:za,box:Pa,checkmark:Wa,label:Oa,middle:Ea,large:Fa,checked:Ha,"animal-checkbox-pop":"animal-animal-checkbox-pop-0cWeC",animalCheckboxPop:Ka,disabled:Ua,groupDisabled:Ya};var se={exports:{}};var de;function qa(){return de||(de=1,(function(t){(function(){var a={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var p=arguments[o];p&&(s=d(s,i(p)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var p in s)a.call(s,p)&&s[p]&&(o=d(o,p));return o}function d(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(se)),se.exports}var Qa=qa();const ce=fe(Qa),Q=({value:t,defaultValue:a=[],options:n,size:i="middle",disabled:d=!1,direction:s="horizontal",onChange:o,className:p,style:u})=>{const[k,v]=r.useState(a),g=t!==void 0,j=g?t:k,V=r.useCallback((h,f)=>{if(d||f)return;const y=j.includes(h)?j.filter(c=>c!==h):[...j,h];g||v(y),o?.(y)},[d,j,g,o]);return e.jsx("div",{className:ce(E.checkboxGroup,E[s],{[E.groupDisabled]:d},p),style:u,children:n.map(h=>{const f=j.includes(h.value),y=d||h.disabled;return e.jsxs("label",{className:ce(E.checkboxItem,E[i],{[E.checked]:f,[E.disabled]:y}),onClick:()=>V(h.value,h.disabled),children:[e.jsx("span",{className:E.box,role:"checkbox","aria-checked":f,tabIndex:y?-1:0,onKeyDown:c=>{(c.key===" "||c.key==="Enter")&&(c.preventDefault(),V(h.value,h.disabled))},children:f&&e.jsx("span",{className:E.checkmark,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 8L6 12L14 4",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),e.jsx("span",{className:E.label,children:h.label})]},String(h.value))})})};Q.displayName="Checkbox";const Ga="animal-wrapper-LJBly",Za="animal-scrollable-5Wnhh",Xa="animal-table-Os4fM",Ja="animal-thead-2ge5M",$a="animal-headerRow-sAsWX",_a="animal-headerCell-LhL6h",es="animal-tbody-3RGsp",ts="animal-row-iDOMw",as="animal-cell-4PAU2",ss="animal-striped-8Ih-N",ls="animal-emptyCell--stiv",ns="animal-emptyContent-JrC1j",is="animal-emptyIcon-SNcRm",os="animal-loading-mPt0l",rs="animal-loadingOverlay-PMW6Z",ds="animal-loadingSpinner-KZEsv",L={wrapper:Ga,scrollable:Za,table:Xa,thead:Ja,headerRow:$a,headerCell:_a,tbody:es,row:ts,cell:as,striped:ss,emptyCell:ls,emptyContent:ns,emptyIcon:is,loading:os,loadingOverlay:rs,loadingSpinner:ds},me=({columns:t=[],dataSource:a=[],rowKey:n="key",striped:i=!0,showHeader:d=!0,rowClassName:s,onRow:o,loading:p=!1,emptyText:u="暂无数据",scroll:k,className:v,style:g})=>{const j=(c,b)=>typeof n=="function"?n(c):c[n]||String(b),V=(c,b)=>{const B=[L.row];return i&&b%2===1&&B.push(L.striped),s&&(typeof s=="function"?B.push(s(c,b)):B.push(s)),B.join(" ")},h=(c,b,B)=>{const x=c.dataIndex?b[c.dataIndex]:void 0;return c.render?c.render(x,b,B):x},f=[L.table,p&&L.loading,v].filter(Boolean).join(" "),y=[L.wrapper,k&&L.scrollable].filter(Boolean).join(" ");return e.jsxs("div",{className:y,style:g,children:[e.jsxs("table",{className:f,children:[d&&e.jsx("thead",{className:L.thead,children:e.jsx("tr",{className:L.headerRow,children:t.map((c,b)=>e.jsx("th",{className:L.headerCell,style:{width:c.width,textAlign:c.align||"left",...c.style},children:c.title},b))})}),e.jsx("tbody",{className:L.tbody,children:a.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length,className:L.emptyCell,children:e.jsxs("div",{className:L.emptyContent,children:[e.jsx("svg",{className:L.emptyIcon,viewBox:"0 0 24 24",width:"48",height:"48",children:e.jsx("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"})}),e.jsx("span",{children:u})]})})}):a.map((c,b)=>e.jsx("tr",{className:V(c,b),...o?.(c,b),children:t.map((B,x)=>e.jsx("td",{className:L.cell,style:{textAlign:B.align||"left",...B.style},children:h(B,c,b)},x))},j(c,b)))})]}),p&&e.jsx("div",{className:L.loadingOverlay,children:e.jsx("div",{className:L.loadingSpinner,children:e.jsx("svg",{viewBox:"0 0 50 50",width:"40",height:"40",children:e.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"31.4 31.4"})})})})]})};me.displayName="Table";const cs=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Time ",e.jsx("span",{style:w,children:"时间"})]}),e.jsx("div",{style:l,children:"Time 组件 — 动森经典 HUD 风格的时间显示组件，实时更新时间，支持星期、日期和时间显示。"}),e.jsx("div",{style:T,children:e.jsx(he,{})}),e.jsx(A,{code:`import React from 'react';
import { Time } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 时间显示 */}
            <Time />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:ps})]}),ps=[{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],hs=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Phone ",e.jsx("span",{style:w,children:"手机"})]}),e.jsx("div",{style:l,children:"Phone 组件 — 手机界面组件。"}),e.jsx("div",{style:{...T,transform:"scale(0.6)",transformOrigin:"top left",height:473},children:e.jsx(qt,{})}),e.jsx(A,{code:`import React from 'react';
import { Phone } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 手机界面 */}
            <Phone />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:ms})]}),ms=[{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],us=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Footer ",e.jsx("span",{style:w,children:"底部装饰"})]}),e.jsx("div",{style:l,children:"Footer 组件 — 页面底部装饰图片，支持 sea（海）和 tree（树）两种类型。"}),e.jsxs("div",{style:{...T,padding:"40px 0"},children:[e.jsx("div",{style:l,children:"tree 类型（默认）"}),e.jsx(ne,{})]}),e.jsxs("div",{style:{...T,padding:"40px 0"},children:[e.jsx("div",{style:l,children:"sea 类型"}),e.jsx(ne,{type:"sea"})]}),e.jsx(A,{code:`import React from 'react';
import { Footer } from 'animal-island-ui';

const App = () => (
    <div>
        <Footer />
        <Footer type="sea" />
    </div>
);`}),e.jsx(D,{rows:ys})]}),ys=[{prop:"type",desc:"Footer 类型",type:"'sea' | 'tree'",defaultVal:"'tree'"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],xs=[{prop:"name",desc:"图标名称",type:"IconName",defaultVal:"-",required:!0},{prop:"size",desc:"图标尺寸",type:"number | string",defaultVal:"24"},{prop:"bounce",desc:"弹跳动画",type:"boolean",defaultVal:"false"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],fs=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Icon ",e.jsx("span",{style:w,children:"10 icons"})]}),e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{display:"flex",gap:20,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(R,{name:"icon-miles",size:32}),e.jsx(R,{name:"icon-camera",size:32}),e.jsx(R,{name:"icon-chat",size:32}),e.jsx(R,{name:"icon-design",size:32}),e.jsx(R,{name:"icon-map",size:32})]}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[e.jsx(R,{name:"icon-miles",size:16}),e.jsx(R,{name:"icon-miles",size:24}),e.jsx(R,{name:"icon-miles",size:32}),e.jsx(R,{name:"icon-miles",size:48})]}),e.jsx("div",{style:l,children:"bounce 弹跳动画（鼠标悬停查看效果）"}),e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[e.jsx(R,{name:"icon-miles",size:32,bounce:!0}),e.jsx(R,{name:"icon-camera",size:32,bounce:!0}),e.jsx(R,{name:"icon-chat",size:32,bounce:!0})]}),e.jsx("div",{style:l,children:"图标列表"}),e.jsx("div",{style:{border:"1px solid #e8e2d6",borderRadius:12,overflow:"hidden",padding:"5px 16px"},children:re.map((t,a)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,padding:"12px 5px",borderBottom:a<re.length-1?"1px dashed #f0e8d8":"none",background:"#fff"},children:[e.jsx(R,{name:t.name,size:32}),e.jsx("span",{style:{fontSize:14,color:"#725d42",fontFamily:"inherit"},children:t.label}),e.jsx("span",{style:{marginLeft:"auto",fontSize:12,color:"#a0936e",fontFamily:"'SF Mono', 'Fira Code', Consolas, monospace"},children:t.name})]},t.name))}),e.jsx(A,{code:`import React from 'react';
import { Icon } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 基础用法 */}
            <Icon name="icon-miles" size={32} />
            {/* 弹跳动画 */}
            <Icon name="icon-camera" size={48} bounce />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:xs})]}),js=[{prop:"items",desc:"标签页配置列表",type:"TabItem[]",defaultVal:"-",required:!0},{prop:"defaultActiveKey",desc:"默认激活的标签",type:"string",defaultVal:"第一个标签"},{prop:"activeKey",desc:"受控模式当前激活标签",type:"string",defaultVal:"-"},{prop:"onChange",desc:"标签切换回调",type:"(key: string) => void",defaultVal:"-"},{prop:"shadow",desc:"是否显示选中状态阴影",type:"boolean",defaultVal:"true"},{prop:"leafAnimation",desc:"是否启用叶子动画",type:"boolean",defaultVal:"true"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],vs=()=>{const[t,a]=r.useState("tab1"),n=[{key:"tab1",label:"岛屿概况",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12},children:"这里是一座无人岛，环境优美，气候宜人。"}),e.jsx("p",{children:"可以钓鱼、捉虫、种植各种植物。"})]})},{key:"tab2",label:"商店",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12},children:"狸然超市营业中！"}),e.jsx("p",{children:"各种商品应有尽有，价格实惠。"})]})},{key:"tab3",label:"服务台",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12},children:"欢迎来到服务台！"}),e.jsx("p",{children:"可以办理各种服务业务。"})]})}];return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Tab ",e.jsx("span",{style:w,children:"基础用法"})]}),e.jsx("div",{style:l,children:"shadow 阴影控制"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx("div",{style:M,children:e.jsx(q,{items:[{key:"a",label:"鱼类",children:e.jsx("p",{children:"鲈鱼、鲷鱼..."})},{key:"b",label:"昆虫",children:e.jsx("p",{children:"蝴蝶、瓢虫..."})}],defaultActiveKey:"a"})}),e.jsx("div",{style:M,children:e.jsx(q,{items:[{key:"a",label:"鱼类",children:e.jsx("p",{children:"鲈鱼、鲷鱼..."})},{key:"b",label:"昆虫",children:e.jsx("p",{children:"蝴蝶、瓢虫..."})}],defaultActiveKey:"a",shadow:!1})})]}),e.jsx("div",{style:l,children:"非受控模式"}),e.jsx("div",{style:M,children:e.jsx(q,{items:[{key:"a",label:"鱼类",children:e.jsx("p",{children:"鲈鱼、鲷鱼、河童..."})},{key:"b",label:"昆虫",children:e.jsx("p",{children:"蝴蝶、瓢虫、蜻蜓..."})},{key:"c",label:"海洋生物",children:e.jsx("p",{children:"海星、珊瑚、小丑鱼..."})}],defaultActiveKey:"a"})}),e.jsx("div",{style:l,children:"受控模式"}),e.jsx("div",{style:M,children:e.jsx(q,{items:n,activeKey:t,onChange:a})}),e.jsxs("div",{style:{marginTop:16,fontSize:13,color:"#a08060"},children:["当前选中: ",e.jsx("span",{style:{color:"#19c8b9",fontWeight:600},children:n.find(i=>i.key===t)?.label})]}),e.jsx("div",{style:l,children:"leafAnimation 叶子动画控制"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsxs("div",{style:M,children:[e.jsx(q,{items:[{key:"a",label:"鱼类",children:e.jsx("p",{children:"鲈鱼、鲷鱼..."})},{key:"b",label:"昆虫",children:e.jsx("p",{children:"蝴蝶、瓢虫..."})}],defaultActiveKey:"a",leafAnimation:!0}),e.jsx("div",{style:{fontSize:12,color:"#a0936e",marginTop:8},children:"leafAnimation=true (默认)"})]}),e.jsxs("div",{style:M,children:[e.jsx(q,{items:[{key:"a",label:"鱼类",children:e.jsx("p",{children:"鲈鱼、鲷鱼..."})},{key:"b",label:"昆虫",children:e.jsx("p",{children:"蝴蝶、瓢虫..."})}],defaultActiveKey:"a",leafAnimation:!1}),e.jsx("div",{style:{fontSize:12,color:"#a0936e",marginTop:8},children:"leafAnimation=false"})]})]}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Tabs } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 非受控模式 */}
            <Tabs
                items={[
                    { key: 'tab1', label: '标签一', children: <p>内容一</p> },
                    { key: 'tab2', label: '标签二', children: <p>内容二</p> },
                ]}
                defaultActiveKey="tab1"
            />
            {/* 受控模式 */}
            <Tabs items={items} activeKey={activeKey} onChange={setActiveKey} />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:js})]})},gs=[{prop:"options",desc:"选项列表",type:"CheckboxOption[]",defaultVal:"-",required:!0},{prop:"value",desc:"受控选中值列表",type:"Array<string | number>",defaultVal:"-"},{prop:"defaultValue",desc:"默认选中值列表",type:"Array<string | number>",defaultVal:"[]"},{prop:"size",desc:"尺寸",type:"'small' | 'middle' | 'large'",defaultVal:"'middle'"},{prop:"disabled",desc:"禁用全部选项",type:"boolean",defaultVal:"false"},{prop:"direction",desc:"排列方向",type:"'horizontal' | 'vertical'",defaultVal:"'horizontal'"},{prop:"onChange",desc:"选中值变化回调",type:"(values: Array<string | number>) => void",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"React.CSSProperties",defaultVal:"-"}],X=[{label:"🌊 海滩",value:"beach"},{label:"🌳 森林",value:"forest"},{label:"🌸 花园",value:"garden"},{label:"🏡 村庄",value:"village"}],bs=[{label:"🦋 蝴蝶",value:"butterfly"},{label:"🐟 鲈鱼",value:"bass"},{label:"🦀 螃蟹",value:"crab",disabled:!0},{label:"🐛 毛毛虫",value:"caterpillar"},{label:"🌊 水母",value:"jellyfish"}],Cs=()=>{const[t,a]=r.useState(["beach","garden"]),[n,i]=r.useState([]);return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Checkbox ",e.jsx("span",{style:w,children:"基础用法"})]}),e.jsx("div",{style:l,children:"默认水平排列（受控）"}),e.jsxs("div",{style:{marginBottom:8,fontSize:13,color:"#a08060"},children:["已选中:"," ",e.jsx("span",{style:{color:"#19c8b9",fontWeight:600},children:t.length>0?X.filter(d=>t.includes(d.value)).map(d=>d.label).join("、"):"无"})]}),e.jsx("div",{style:M,children:e.jsx(Q,{options:X,value:t,onChange:a,style:{gap:20}})}),e.jsx("div",{style:l,children:"垂直排列 + 含禁用选项"}),e.jsx("div",{style:M,children:e.jsx(Q,{options:bs,value:n,onChange:i,direction:"vertical",style:{gap:12}})}),e.jsx("div",{style:l,children:"小尺寸"}),e.jsx("div",{style:M,children:e.jsx(Q,{options:X,defaultValue:["forest"],size:"small"})}),e.jsx("div",{style:l,children:"中尺寸（默认）"}),e.jsx("div",{style:M,children:e.jsx(Q,{options:X,defaultValue:["beach"],size:"middle"})}),e.jsx("div",{style:l,children:"大尺寸"}),e.jsx("div",{style:M,children:e.jsx(Q,{options:X.slice(0,3),defaultValue:["beach"],size:"large"})}),e.jsx("div",{style:l,children:"全部禁用"}),e.jsx("div",{style:M,children:e.jsx(Q,{options:X,defaultValue:["garden","village"],disabled:!0})}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Checkbox } from 'animal-island-ui';

const options = [
    { label: '🌊 海滩', value: 'beach' },
    { label: '🌳 森林', value: 'forest' },
    { label: '🌸 花园', value: 'garden' },
];

const App = () => {
    return (
        <div>
            {/* 非受控 */}
            <Checkbox options={options} defaultValue={['beach']} />
            {/* 受控 */}
            <Checkbox options={options} value={values} onChange={setValues} />
            {/* 垂直排列 */}
            <Checkbox options={options} direction="vertical" />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:gs})]})},ws=[{prop:"code",desc:"代码字符串",type:"string",defaultVal:"-",required:!0},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],ks=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["CodeBlock ",e.jsx("span",{style:w,children:"代码高亮"})]}),e.jsx("div",{style:l,children:"基础用法"}),e.jsx("div",{style:M,children:e.jsx(ie,{code:`import React from 'react';
import { Button } from 'animal-island-ui';

const App = () => (
    <Button type="primary">按钮</Button>
);

export default App;`})}),e.jsx("div",{style:l,children:"自定义样式"}),e.jsx("div",{style:M,children:e.jsx(ie,{code:`import React from 'react';
import { CodeBlock } from 'animal-island-ui';

<CodeBlock
    code={codeString}
    style={{ borderRadius: 5, backgroundColor: '#242c46ff' }}
    className="custom-code"
/>`,style:{borderRadius:5,backgroundColor:"#242c46ff"}})}),e.jsx(A,{code:`import React from 'react';
import { CodeBlock } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 基础用法 */}
            <CodeBlock code={'
                import React from 'react';
                import { Footer } from 'animal-island-ui';

                const App = () => {
                    return (
                        <div>
                            {/* sea 类型（默认） */}
                            <Footer type="sea" />
                            {/* tree 类型 */}
                            <Footer type="tree" />
                        </div>
                    );
                };

                export default App;'}
            />
            {/* 自定义样式 */}
            <CodeBlock
                code={codeString}
                style={{ borderRadius: 5, backgroundColor: '#242c46ff' }}
                className="custom-code"
            />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:ws})]}),Ss=()=>{const[t,a]=r.useState(!0);return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Loading ",e.jsx("span",{style:w,children:"加载动画"})]}),e.jsx("div",{style:l,children:"动森风格小岛 Loading 动画组件，带有漂浮的小岛、摇曳的树叶和游动的鱼。关闭时会从中间圆形透明扩散，露出底层内容。"}),e.jsx("div",{style:{marginBottom:16},children:e.jsx(m,{type:t?"default":"primary",onClick:()=>a(!t),children:t?"关闭 Loading":"开启 Loading"})}),e.jsxs("div",{style:{...T,position:"relative",height:800,padding:0,overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #ffd6a5 0%, #fdffb6 25%, #caffbf 50%, #9bf6ff 75%, #a0c4ff 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:600,color:"#333"},children:"底层内容 · Underlying Content"}),e.jsx(ye,{active:t,style:{height:"100%",position:"absolute",inset:0}})]}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Loading } from 'animal-island-ui';

const App = () => {
    const [active, setActive] = useState(true);
    return (
        <div style={{ position: 'relative', height: 800 }}>
            {/* 底层内容 */}
            <div style={{ position: 'absolute', inset: 0 }}>Underlying Content</div>
            {/* Loading 覆盖层，关闭时透明圆形扩散露出底层 */}
            <Loading
                active={active}
                style={{ position: 'absolute', inset: 0, height: '100%' }}
            />
            <button onClick={() => setActive(!active)}>
                {active ? '关闭 Loading' : '开启 Loading'}
            </button>
        </div>
    );
};`}),e.jsx(D,{rows:Ns})]})},Ns=[{prop:"active",desc:"是否显示加载动画",type:"boolean",defaultVal:"true"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],Is=()=>{const[t,a]=r.useState(!0),[n,i]=r.useState(!1),d=[{title:"岛民",dataIndex:"name",width:120},{title:"年龄",dataIndex:"age",width:80,align:"center"},{title:"岛屿",dataIndex:"island"},{title:"喜欢的水果",dataIndex:"fruit"},{title:"爱好",dataIndex:"hobby",render:p=>{const u=p,v={音乐:{bg:"rgba(147, 112, 219, 0.15)",color:"#9370db"},运动:{bg:"rgba(255, 140, 0, 0.15)",color:"#ff8c00"},唱歌:{bg:"rgba(255, 99, 71, 0.15)",color:"#ff6347"},钓鱼:{bg:"rgba(30, 144, 255, 0.15)",color:"#1e90ff"},画画:{bg:"rgba(255, 105, 180, 0.15)",color:"#ff69b4"}}[u]||{bg:"rgba(25, 200, 185, 0.15)",color:"#19c8b9"};return e.jsx("span",{style:{padding:"4px 12px",background:v.bg,borderRadius:20,color:v.color,fontWeight:600,fontSize:12},children:u})}}],s=[{key:"1",name:"豆狸",age:26,island:"彩虹岛",fruit:"苹果",hobby:"音乐"},{key:"2",name:"粒狸",age:24,island:"彩虹岛",fruit:"橘子",hobby:"运动"},{key:"3",name:"西施惠",age:28,island:"好评岛",fruit:"樱桃",hobby:"唱歌"},{key:"4",name:"喻哥",age:30,island:"无人岛",fruit:"梨",hobby:"钓鱼"},{key:"5",name:"小润",age:22,island:"摸鱼岛",fruit:"桃子",hobby:"画画"}],o=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Table ",e.jsx("span",{style:w,children:"表格"})]}),e.jsx("div",{style:l,children:"数据表格组件，支持斑马纹、边框、加载状态等常用功能。"}),e.jsxs("div",{style:{marginBottom:16,display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsxs(m,{type:t?"primary":"default",onClick:()=>a(!t),children:["斑马纹 ",t?"✓":"✗"]}),e.jsx(m,{type:"primary",onClick:o,disabled:n,children:n?"加载中...":"模拟加载"})]}),e.jsx("div",{style:{...T,padding:0,overflow:"hidden"},children:e.jsx(me,{columns:d,dataSource:s,striped:t,loading:n})}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Table } from 'animal-island-ui';

interface Person {
    key: string;
    name: string;
    age: number;
    island: string;
    fruit: string;
    hobby: string;
}

const columns = [
    {
        title: '岛民',
        dataIndex: 'name',
        width: 120,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 80,
        align: 'center',
    },
    {
        title: '岛屿',
        dataIndex: 'island',
    },
    {
        title: '喜欢的水果',
        dataIndex: 'fruit',
    },
    {
        title: '爱好',
        dataIndex: 'hobby',
        render: (value) => (
            <span style={{
                padding: '4px 12px',
                background: 'rgba(25, 200, 185, 0.15)',
                borderRadius: 20,
                color: '#19c8b9',
            }}>
                {value}
            </span>
        ),
    },
];

const data = [
    { key: '1', name: '豆狸', age: 26, island: '彩虹岛', fruit: '苹果', hobby: '音乐' },
    { key: '2', name: '粒狸', age: 24, island: '彩虹岛', fruit: '橘子', hobby: '运动' },
    { key: '3', name: '西施惠', age: 28, island: '好评岛', fruit: '樱桃', hobby: '唱歌' },
];

const App = () => {
    const [striped, setStriped] = useState(true);

    return (
        <Table
            columns={columns}
            dataSource={data}
            striped={striped}
        />
    );
};`}),e.jsx(D,{rows:As})]})},As=[{prop:"columns",desc:"表格列配置",type:"TableColumn[]",defaultVal:"[]"},{prop:"dataSource",desc:"表格数据源",type:"T[]",defaultVal:"[]"},{prop:"rowKey",desc:"行唯一标识字段名或函数",type:"string | (record) => string",defaultVal:"key"},{prop:"striped",desc:"是否显示斑马纹",type:"boolean",defaultVal:"true"},{prop:"showHeader",desc:"是否显示表头",type:"boolean",defaultVal:"true"},{prop:"loading",desc:"加载状态",type:"boolean",defaultVal:"false"},{prop:"emptyText",desc:"空数据显示文本",type:"ReactNode",defaultVal:"暂无数据"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],C={pageDesc:{fontSize:14,color:"#794f27",marginBottom:20},row:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-start"},col:{display:"flex",flexDirection:"column",gap:12},demoBox:{padding:16,borderRadius:18,fontWeight:500,marginBottom:20}},Ds=[{prop:"type",desc:"按钮类型",type:"'primary' | 'default' | 'dashed' | 'text' | 'link'",defaultVal:"'default'"},{prop:"size",desc:"按钮尺寸",type:"'small' | 'middle' | 'large'",defaultVal:"'middle'"},{prop:"danger",desc:"是否危险按钮",type:"boolean",defaultVal:"false"},{prop:"ghost",desc:"是否幽灵按钮（透明背景）",type:"boolean",defaultVal:"false"},{prop:"block",desc:"是否块级按钮",type:"boolean",defaultVal:"false"},{prop:"loading",desc:"加载状态",type:"boolean",defaultVal:"false"},{prop:"disabled",desc:"禁用状态",type:"boolean",defaultVal:"false"},{prop:"icon",desc:"图标",type:"ReactNode",defaultVal:"-"},{prop:"htmlType",desc:"原生 button type",type:"'submit' | 'reset' | 'button'",defaultVal:"'button'"},{prop:"children",desc:"按钮内容",type:"ReactNode",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"...",desc:"继承 React.ButtonHTMLAttributes",type:"HTMLButtonElement",defaultVal:"-"}],Vs=[{prop:"size",desc:"输入框尺寸",type:"'small' | 'middle' | 'large'",defaultVal:"'middle'"},{prop:"prefix",desc:"前缀图标",type:"ReactNode",defaultVal:"-"},{prop:"suffix",desc:"后缀图标",type:"ReactNode",defaultVal:"-"},{prop:"allowClear",desc:"允许清除",type:"boolean",defaultVal:"false"},{prop:"status",desc:"校验状态",type:"'error' | 'warning'",defaultVal:"-"},{prop:"shadow",desc:"是否显示阴影",type:"boolean",defaultVal:"false"},{prop:"onChange",desc:"值变化回调",type:"ChangeEventHandler<HTMLInputElement>",defaultVal:"-"},{prop:"onClear",desc:"清除回调",type:"() => void",defaultVal:"-"},{prop:"...",desc:"继承 React.InputHTMLAttributes",type:"HTMLInputElement",defaultVal:"-"}],Bs=[{prop:"checked",desc:"是否选中（受控）",type:"boolean",defaultVal:"-"},{prop:"defaultChecked",desc:"默认是否选中",type:"boolean",defaultVal:"false"},{prop:"size",desc:"尺寸",type:"'small' | 'default'",defaultVal:"'default'"},{prop:"disabled",desc:"禁用",type:"boolean",defaultVal:"false"},{prop:"loading",desc:"加载状态",type:"boolean",defaultVal:"false"},{prop:"checkedChildren",desc:"选中时文案",type:"ReactNode",defaultVal:"-"},{prop:"unCheckedChildren",desc:"未选中时文案",type:"ReactNode",defaultVal:"-"},{prop:"onChange",desc:"变化回调",type:"(checked: boolean) => void",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],Ls=[{prop:"open",desc:"是否可见",type:"boolean",defaultVal:"-",required:!0},{prop:"title",desc:"标题",type:"ReactNode",defaultVal:"-"},{prop:"width",desc:"宽度",type:"number | string",defaultVal:"520"},{prop:"maskClosable",desc:"点击遮罩关闭",type:"boolean",defaultVal:"true"},{prop:"footer",desc:"底部按钮区域，传 null 则不显示",type:"ReactNode | null",defaultVal:"默认按钮"},{prop:"onClose",desc:"关闭回调",type:"() => void",defaultVal:"-"},{prop:"onOk",desc:"确认回调",type:"() => void",defaultVal:"-"},{prop:"children",desc:"自定义内容",type:"ReactNode",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"typeSpeed",desc:"打字机每字间隔 (ms)",type:"number",defaultVal:"80"},{prop:"typewriter",desc:"是否启用打字机效果",type:"boolean",defaultVal:"true"}],Ts=[{prop:"type",desc:"卡片类型",type:"'default' | 'title' | 'dashed'",defaultVal:"'default'"},{prop:"color",desc:"背景颜色类型",type:"'default' | 'app-pink' | 'purple' | 'app-blue' | 'app-yellow' | 'app-orange' | 'app-teal' | 'app-green' | 'app-red' | 'lime-green' | 'yellow-green' | 'brown' | 'warm-peach-pink'",defaultVal:"'default'"},{prop:"children",desc:"自定义内容",type:"ReactNode",defaultVal:"-"},{prop:"...",desc:"继承 React.HTMLAttributes",type:"HTMLDivElement",defaultVal:"-"}],Ms=[{prop:"question",desc:"问题标题",type:"ReactNode",defaultVal:"-",required:!0},{prop:"answer",desc:"答案内容",type:"ReactNode",defaultVal:"-",required:!0},{prop:"defaultExpanded",desc:"是否默认展开",type:"boolean",defaultVal:"false"},{prop:"disabled",desc:"是否禁用",type:"boolean",defaultVal:"false"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],Rs=[{prop:"children",desc:"子元素",type:"ReactNode",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],zs=[{prop:"type",desc:"分隔线类型",type:"'line-brown' | 'line-teal' | 'line-white' | 'line-yellow' | 'wave-yellow'",defaultVal:"'line-brown'"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],Ps=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Button ",e.jsx("span",{style:w,children:"6 types"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"type 按钮类型"}),e.jsxs("div",{style:C.row,children:[e.jsx(m,{type:"primary",children:"Primary"}),e.jsx(m,{children:"Default"}),e.jsx(m,{type:"dashed",children:"Dashed"}),e.jsx(m,{type:"text",children:"Text"}),e.jsx(m,{type:"link",children:"Link"})]}),e.jsx("div",{style:l,children:"danger / ghost / loading / disabled 状态"}),e.jsxs("div",{style:C.row,children:[e.jsx(m,{type:"primary",danger:!0,children:"Danger"}),e.jsx(m,{type:"primary",ghost:!0,children:"Ghost"}),e.jsx(m,{type:"primary",loading:!0,children:"Loading"}),e.jsx(m,{type:"primary",disabled:!0,children:"Disabled"})]}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:C.row,children:[e.jsx(m,{type:"primary",size:"small",children:"Small"}),e.jsx(m,{type:"primary",size:"middle",children:"Middle"}),e.jsx(m,{type:"primary",size:"large",children:"Large"})]}),e.jsx("div",{style:l,children:"icon 图标按钮"}),e.jsxs("div",{style:C.row,children:[e.jsx(m,{type:"primary",icon:e.jsx("span",{children:"🔍"}),children:"搜索"}),e.jsx(m,{icon:e.jsx("span",{children:"⭐"}),children:"收藏"}),e.jsx(m,{type:"dashed",icon:e.jsx("span",{children:"＋"}),children:"新增"})]}),e.jsx("div",{style:l,children:"block 块级按钮"}),e.jsx("div",{style:{maxWidth:360},children:e.jsx(m,{type:"primary",block:!0,children:"Block Button"})}),e.jsx("div",{style:l,children:"danger 组合"}),e.jsxs("div",{style:C.row,children:[e.jsx(m,{type:"primary",danger:!0,children:"Primary Danger"}),e.jsx(m,{danger:!0,children:"Default Danger"}),e.jsx(m,{type:"dashed",danger:!0,children:"Dashed Danger"}),e.jsx(m,{type:"text",danger:!0,children:"Text Danger"}),e.jsx(m,{type:"link",danger:!0,children:"Link Danger"})]})]}),e.jsx(A,{code:`import React from 'react';
import { Button } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* Primary */}
            <Button type="primary">Primary</Button>
            {/* Default */}
            <Button>Default</Button>
            {/* Dashed */}
            <Button type="dashed">Dashed</Button>
            {/* Text */}
            <Button type="text">Text</Button>
            {/* Link */}
            <Button type="link">Link</Button>
            {/* Danger */}
            <Button type="primary" danger>Danger</Button>
            {/* Ghost */}
            <Button type="primary" ghost>Ghost</Button>
            {/* Loading */}
            <Button type="primary" loading>Loading</Button>
            {/* Large */}
            <Button type="primary" size="large">Large</Button>
            {/* Icon */}
            <Button type="primary" icon={<span>🔍</span>}>搜索</Button>
            {/* Block */}
            <Button type="primary" block>Block</Button>
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Ds})]}),Ws=()=>{const[t,a]=r.useState("");return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Input ",e.jsx("span",{style:w,children:"3 sizes"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"shadow 阴影控制"}),e.jsxs("div",{style:{...C.col,maxWidth:360,gap:12},children:[e.jsx(P,{placeholder:"No shadow (default)"}),e.jsx(P,{placeholder:"With shadow",shadow:!0})]}),e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{...C.col,maxWidth:360,gap:12},children:[e.jsx(P,{placeholder:"Basic input"}),e.jsx(P,{placeholder:"With clear",allowClear:!0,value:t,onChange:n=>a(n.target.value),onClear:()=>a("")}),e.jsx(P,{placeholder:"Prefix & Suffix",prefix:"🔍",suffix:"⏎"})]}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:{...C.col,maxWidth:360,gap:12},children:[e.jsx(P,{placeholder:"Small",size:"small"}),e.jsx(P,{placeholder:"Middle (default)",size:"middle"}),e.jsx(P,{placeholder:"Large",size:"large"})]}),e.jsx("div",{style:l,children:"status 校验状态"}),e.jsxs("div",{style:{...C.col,maxWidth:360,gap:12},children:[e.jsx(P,{placeholder:"Error status",status:"error"}),e.jsx(P,{placeholder:"Warning status",status:"warning"})]}),e.jsx("div",{style:l,children:"disabled 禁用"}),e.jsx("div",{style:{...C.col,maxWidth:360,gap:12},children:e.jsx(P,{placeholder:"Disabled",disabled:!0})})]}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Input } from 'animal-island-ui';

const App = () => {
    const [val, setVal] = useState('');
    return (
        <div>
            {/* 基础输入框 */}
            <Input placeholder="Basic input" />
            {/* 带清除按钮 */}
            <Input placeholder="With clear" allowClear value={val} onChange={e => setVal(e.target.value)} />
            {/* 前后缀 */}
            <Input placeholder="Prefix" prefix="🔍" suffix="⏎" />
            {/* 小尺寸 */}
            <Input placeholder="Small" size="small" />
            {/* 大尺寸 */}
            <Input placeholder="Large" size="large" />
            {/* 错误状态 */}
            <Input placeholder="Error" status="error" />
            {/* 警告状态 */}
            <Input placeholder="Warning" status="warning" />
            {/* 有阴影 */}
            <Input placeholder="With shadow" shadow={true} />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Vs})]})},Os=()=>{const[t,a]=r.useState(!1);return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Switch ",e.jsx("span",{style:w,children:"2 sizes"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(Y,{checked:t,onChange:a}),e.jsx("span",{style:{fontSize:13},children:t?"ON":"OFF"})]}),e.jsx("div",{style:l,children:"checkedChildren / unCheckedChildren 自定义文案"}),e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:e.jsx(Y,{defaultChecked:!0,checkedChildren:"开",unCheckedChildren:"关"})}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(Y,{defaultChecked:!0}),e.jsx(Y,{size:"small",defaultChecked:!0})]}),e.jsx("div",{style:l,children:"disabled / loading 状态"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(Y,{disabled:!0}),e.jsx(Y,{loading:!0,defaultChecked:!0})]})]}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Switch } from 'animal-island-ui';

const App = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            {/* 受控模式 */}
            <Switch checked={checked} onChange={setChecked} />
            {/* 自定义文案 */}
            <Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />
            {/* 小尺寸 */}
            <Switch size="small" defaultChecked />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Bs})]})},Es=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Card ",e.jsx("span",{style:w,children:"3 types"})," ",e.jsx("span",{style:w,children:"13 colors"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:'type="default"'}),e.jsxs("div",{style:C.row,children:[e.jsx(O,{children:e.jsx("p",{children:"基础卡片"})}),e.jsx(O,{style:{maxWidth:560,width:"100%"},children:e.jsx("p",{children:"在Nintendo 3DS《Animal Island: New Leaf》和《Animal Island: Happy Home Designer》中製作的「我的設計」QR Code，以智慧型裝置讀取就能通過狸端機入口站下載至《集合啦！動物森友會》。"})})]}),e.jsx("div",{style:l,children:'type="title"'}),e.jsxs("div",{style:C.row,children:[e.jsx(O,{type:"title",children:e.jsx("p",{children:"Title标题卡片"})}),e.jsx(O,{type:"title",style:{maxWidth:360,width:"100%"},children:e.jsx("p",{children:"欢迎来到无人岛！在Nintendo 3DS《Animal Island: New Leaf》和《Animal Island: Happy Home Designer》中製作的「我的設計」QR Code，以智慧型裝置讀取就能通過狸端機入口站下載至《集合啦！動物森友會》。"})})]}),e.jsx("div",{style:l,children:'type="dashed"'}),e.jsxs("div",{style:C.row,children:[e.jsx(O,{type:"dashed",children:e.jsx("p",{children:"虚线边框卡片"})}),e.jsx(O,{type:"dashed",style:{maxWidth:360,width:"100%"},children:e.jsx("p",{children:"欢迎来到无人岛！虚线边框适合用于轻量提示或次要信息展示。"})})]})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"color — NookPhone 颜色"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:16,marginBottom:24},children:[["default","Default","默认奶油色"],["app-pink","App Pink","应用粉"],["purple","Purple","紫色"],["app-blue","App Blue","应用蓝"],["app-yellow","App Yellow","应用黄"],["app-orange","App Orange","应用橙"],["app-teal","App Teal","应用青"],["app-green","App Green","应用绿"],["app-red","App Red","应用红"],["lime-green","Lime Green","青柠绿"],["yellow-green","Yellow-Green","黄绿色"],["brown","Brown","棕色"],["warm-peach-pink","Warm Peach Pink","暖桃粉"]].map(([t,a,n])=>e.jsxs(O,{color:t,style:{padding:"16px 20px"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:14,marginBottom:4},children:a}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:n})]},t))})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:'color + type="title"'}),e.jsxs("div",{style:C.row,children:[e.jsxs(O,{type:"title",color:"app-blue",style:{width:240},children:[e.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:"蓝色标题卡片"}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:'type="title" + color="app-blue"'})]}),e.jsxs(O,{type:"title",color:"app-green",style:{width:250},children:[e.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:"绿色标题卡片"}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:'type="title" + color="app-green"'})]}),e.jsxs(O,{type:"title",color:"purple",style:{width:240},children:[e.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:"紫色标题卡片"}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:'type="title" + color="purple"'})]})]})]}),e.jsx(A,{code:`import React from 'react';
import { Card } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 基础卡片 */}
            <Card style={{ width: 260 }}>
                基础卡片
            </Card>

            {/* 标题卡片 */}
            <Card type="title" style={{ width: 260 }}>
                标题卡片
            </Card>

            {/* 颜色变体 */}
            <Card color="app-blue">
                蓝色卡片
            </Card>
            <Card color="warm-peach-pink">
                暖桃粉卡片
            </Card>

            {/* 颜色 + 标题 组合 */}
            <Card type="title" color="purple">
                紫色标题卡片
            </Card>
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Ts})]}),Fs=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Collapse ",e.jsx("span",{style:w,children:"FAQ"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{maxWidth:720},children:[e.jsx(_,{question:"1個島嶼可以登錄多少名用戶?",answer:e.jsx("p",{children:"1座島嶼最多可以容納8位居民（用戶）。"})}),e.jsx(_,{question:"可以多少人一起玩?",answer:e.jsx("p",{children:"同住1個島的居民可以最多4人一起遊玩。透過通訊最多8人一起遊玩。"})})]}),e.jsx("div",{style:l,children:"defaultExpanded 默认展开"}),e.jsx("div",{style:{maxWidth:720},children:e.jsx(_,{question:"这个问题默认展开",answer:e.jsx("p",{children:"答案已经展示出来了！可以点击收起。"}),defaultExpanded:!0})}),e.jsx("div",{style:l,children:"disabled 禁用状态"}),e.jsx("div",{style:{maxWidth:720},children:e.jsx(_,{question:"这个问题已被禁用（无法展开）",answer:e.jsx("p",{children:"这段文字不应该被看到。"}),disabled:!0})})]}),e.jsx(A,{code:`import React from 'react';
import { Collapse } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 基础用法 */}
            <Collapse question="问题" answer={<p>回答内容</p>} />
            {/* 默认展开 */}
            <Collapse question="默认展开" answer={<p>答案</p>} defaultExpanded />
            {/* 禁用状态 */}
            <Collapse question="禁用" answer={<p>答案</p>} disabled />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Ms})]}),Hs=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Cursor ",e.jsx("span",{style:w,children:"光标"})]}),e.jsx("p",{style:l,children:"Cursor 组件通过 CSS cursor 属性将子元素的鼠标光标替换为自定义手指图标，当前 Demo 全局已应用。"}),e.jsx(A,{code:`import React from 'react';
import { Cursor } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 光标组件 */}
            <Cursor>
                <div>鼠标移入此区域将显示自定义光标</div>
            </Cursor>
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Rs})]}),Ks=()=>{const[t,a]=r.useState(!1),[n,i]=r.useState(!1),[d,s]=r.useState(!1),[o,p]=r.useState(!1);return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Modal ",e.jsx("span",{style:w,children:"弹窗"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"基础弹窗"}),e.jsxs("div",{style:C.row,children:[e.jsx(m,{type:"primary",onClick:()=>a(!0),children:"基础 Modal"}),e.jsx(m,{onClick:()=>i(!0),children:"带标题 Modal"}),e.jsx(m,{type:"dashed",onClick:()=>s(!0),children:"自定义 Footer"})]}),e.jsx("div",{style:l,children:"关闭打字机效果"}),e.jsx("div",{style:C.row,children:e.jsx(m,{type:"primary",onClick:()=>p(!0),children:"关闭打字机效果"})})]}),e.jsx($,{open:t,onClose:()=>a(!1),onOk:()=>a(!1),children:e.jsxs("div",{style:{textAlign:"center",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsxs("span",{children:["钓到",e.jsx("span",{style:{color:"#FD9303"},children:"石头"}),"了!"]}),e.jsx("span",{children:"竟然连这种都能钓起来..."})]})}),e.jsx($,{open:n,title:"博物馆捐赠",onClose:()=>i(!1),onOk:()=>i(!1),children:"是否愿意将这条鱼捐赠给博物馆呢？傅达会好好照顾它的！这可是博物馆的新展品哦~"}),e.jsx($,{open:d,title:"确认操作",onClose:()=>s(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>s(!1),children:"再想想"}),e.jsx(m,{type:"primary",danger:!0,onClick:()=>s(!1),children:"确认搬家"})]}),children:"确定要让这位居民搬走吗？这个操作不可撤销。"}),e.jsx($,{open:o,title:"天气预报",onClose:()=>p(!1),onOk:()=>p(!1),typewriter:!1,children:"明天天气晴朗，气温 20-28°C，适合外出活动！"}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Button, Modal } from 'animal-island-ui';

const App = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button type="primary" onClick={() => setOpen(true)}>打开 Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)} onOk={() => setOpen(false)}>
                Modal 内容
            </Modal>

            {/* 带标题 */}
            <Modal open={open} title="标题" onClose={() => setOpen(false)}>
                内容
            </Modal>

            {/* 自定义 Footer */}
            <Modal open={open} title="确认" footer={<Button>自定义按钮</Button>}>
                内容
            </Modal>

            {/* 无 Footer */}
            <Modal open={open} footer={null}>
                无底部按钮
            </Modal>

            {/* 关闭打字机效果 */}
            <Modal open={open} typewriter={false}>
                直接显示全部内容
            </Modal>
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Ls})]})},Us=()=>{const[t,a]=r.useState(0);return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Typewriter ",e.jsx("span",{style:w,children:"打字机"})]}),e.jsxs("div",{style:T,children:[e.jsxs("div",{children:[e.jsx("div",{style:l,children:"基础用法"}),e.jsx("div",{style:{...le,marginBottom:20},children:e.jsx(te,{trigger:t,children:"你好，欢迎来到动物岛！今天的天气真不错呢～"})})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"保留多行与富内容 (速度 40ms)"}),e.jsx("div",{style:{...le,flexDirection:"column",alignItems:"flex-start",marginBottom:20,gap:8},children:e.jsxs(te,{speed:40,trigger:t,children:[e.jsx("div",{children:"第一行：钓到石头了！"}),e.jsx("div",{children:"第二行：竟然连这种都能钓起来..."}),e.jsx("div",{style:{color:"#FD9303",fontWeight:700},children:"第三行：继续加油吧！"})]})})]}),e.jsx("div",{style:C.row,children:e.jsx(m,{type:"primary",onClick:()=>a(n=>n+1),children:"重新播放"})})]}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Typewriter } from 'animal-island-ui';

const App = () => {
    const [key, setKey] = useState(0);
    return (
        <>
            <Typewriter trigger={key}>
                你好，欢迎来到动物岛！
            </Typewriter>

            {/* 支持多行与内联样式 */}
            <Typewriter speed={40} trigger={key}>
                <div>第一行</div>
                <div style={{ color: 'orange' }}>第二行</div>
            </Typewriter>

            <button onClick={() => setKey(k => k + 1)} style={{ marginBottom: 20 }}>重新播放</button>
        </>
    );
};

export default App;`}),e.jsx(D,{rows:Ys})]})},Ys=[{prop:"children",desc:"需要逐字显示的内容，支持 ReactNode",type:"ReactNode",defaultVal:"-"},{prop:"speed",desc:"每字间隔 (ms)",type:"number",defaultVal:"90"},{prop:"trigger",desc:"值变化时重新播放",type:"unknown",defaultVal:"-"},{prop:"autoPlay",desc:"是否自动从头开始播放",type:"boolean",defaultVal:"true"},{prop:"onDone",desc:"播放完成回调",type:"() => void",defaultVal:"-"}],qs=()=>e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Divider ",e.jsx("span",{style:w,children:"5 types"})]}),e.jsx("div",{style:l,children:"line-brown"}),e.jsx(J,{type:"line-brown"}),e.jsx("div",{style:l,children:"line-teal"}),e.jsx(J,{type:"line-teal"}),e.jsx("div",{style:l,children:"line-white"}),e.jsx("div",{style:{background:"#333",padding:10},children:e.jsx(J,{type:"line-white"})}),e.jsx("div",{style:l,children:"line-yellow"}),e.jsx(J,{type:"line-yellow"}),e.jsx("div",{style:l,children:"wave-yellow"}),e.jsx(J,{type:"wave-yellow"}),e.jsx(A,{code:`import React from 'react';
import { Divider } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* line-brown */}
            <Divider type="line-brown" />
            {/* line-teal */}
            <Divider type="line-teal" />
            {/* line-white */}
            <Divider type="line-white" />
            {/* line-yellow */}
            <Divider type="line-yellow" />
            {/* wave-yellow */}
            <Divider type="wave-yellow" />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:zs})]}),Qs=[{prop:"options",desc:"选项列表",type:"SelectOption[]",defaultVal:"-",required:!0},{prop:"value",desc:"当前选中值",type:"string",defaultVal:"-",required:!0},{prop:"onChange",desc:"选中变化回调",type:"(key: string) => void",defaultVal:"-",required:!0},{prop:"placeholder",desc:"占位文本",type:"string",defaultVal:"请选择"},{prop:"disabled",desc:"禁用状态",type:"boolean",defaultVal:"false"}],Gs=()=>{const[t,a]=r.useState("fish1"),[n,i]=r.useState(""),[d,s]=r.useState("flower2"),[o,p]=r.useState(""),u=[{key:"fish1",label:"鲈鱼"},{key:"fish2",label:"鲷鱼"},{key:"fish3",label:"草鱼"},{key:"fish4",label:"龙睛鱼"},{key:"fish5",label:"神仙鱼"}],k=[{key:"flower1",label:"樱花"},{key:"flower2",label:"玫瑰"},{key:"flower3",label:"向日葵"},{key:"flower4",label:"薰衣草"},{key:"flower5",label:"郁金香"}],v=[{key:"fruit1",label:"草莓"},{key:"fruit2",label:"蓝莓"},{key:"fruit3",label:"桃子"},{key:"fruit4",label:"樱桃"},{key:"fruit5",label:"猕猴桃"}];return e.jsxs("div",{style:N,children:[e.jsxs("div",{style:I,children:["Select ",e.jsx("span",{style:w,children:"基础用法"})]}),e.jsx("div",{style:l,children:"默认状态"}),e.jsxs("div",{style:{marginBottom:8,fontSize:13,color:"#a08060"},children:["当前选中:"," ",e.jsx("span",{style:{color:"#19c8b9",fontWeight:600},children:u.find(g=>g.key===t)?.label})]}),e.jsx("div",{style:C.demoBox,children:e.jsx(ee,{options:u,value:t,onChange:a})}),e.jsx("div",{style:l,children:"自定义占位文本"}),e.jsxs("div",{style:le,children:[e.jsx(ee,{options:k,value:n,onChange:i,placeholder:"请选择花朵"}),e.jsx(ee,{options:v,value:o,onChange:p,placeholder:"请选择水果"})]}),e.jsx("div",{style:l,children:"禁用状态"}),e.jsx("div",{style:C.demoBox,children:e.jsx(ee,{options:k,value:d,onChange:s,disabled:!0})}),e.jsx(A,{code:`import React, { useState } from 'react';
import { Select } from 'animal-island-ui';

const options = [
    { key: 'option1', label: '选项一' },
    { key: 'option2', label: '选项二' },
];

const App = () => {
    const [value, setValue] = useState('option1');
    return (
        <div>
            {/* 受控模式 */}
            <Select options={options} value={value} onChange={setValue} />
            {/* 占位文本 */}
            <Select options={options} placeholder="请选择" />
            {/* 禁用状态 */}
            <Select options={options} disabled />
        </div>
    );
};

export default App;`}),e.jsx(D,{rows:Qs})]})},Zs={button:{title:"Button 按钮",desc:"按钮组件 — 支持 primary / dashed / text / link 等类型，danger / ghost / loading / disabled 状态，icon 图标，block 块级，三种尺寸"},input:{title:"Input 输入框",desc:"输入框组件 — 支持三种尺寸、clearable 清除、prefix / suffix 前后缀、error / warning 校验状态、disabled 禁用"},switch:{title:"Switch 开关",desc:"开关组件 — 支持受控 / 非受控、自定义文案、small 尺寸、loading 状态"},card:{title:"Card 卡片",desc:"卡片容器组件 — 支持 default / title 两种类型，12 种 NookPhone 背景颜色"},collapse:{title:"Collapse 折叠面板",desc:"折叠面板组件 — 支持展开/收起、默认展开、禁用状态"},cursor:{title:"Cursor 光标",desc:"光标组件 — 自定义手指光标，支持自定义尺寸、点击动画"},time:{title:"Time 时间",desc:"经典 HUD 风格的时间显示组件，实时更新时间"},phone:{title:"Phone 手机",desc:"动森风格手机界面，包含对话框和背包功能"},footer:{title:"Footer 底部装饰",desc:"页面底部装饰图片，支持树和海两种类型"},modal:{title:"Modal 弹窗",desc:"模态弹窗组件 — SVG 有机形状裁切、支持标题、关闭按钮、自定义 Footer、ESC / 遮罩关闭"},typewriter:{title:"Typewriter 打字机",desc:"打字机组件 — 按字符逐个显示文本，支持多行与 ReactNode 富内容，不改变原有样式"},"divider-comp":{title:"Divider 分割线",desc:"分割线组件 — 装饰性分割线"},icon:{title:"Icon 图标",desc:"图标组件 — 动森风格图标集，包含 10 个可爱图标，支持自定义尺寸"},select:{title:"Select 选择器",desc:"下拉选择器组件 — 支持自定义选项列表，高亮当前选中项"},tabs:{title:"Tabs 标签页",desc:"标签页组件 — 支持受控/非受控模式切换"},checkbox:{title:"Checkbox 多选框",desc:"多选框组件 — 支持受控/非受控、水平/垂直排列、三种尺寸、禁用单项或全部禁用"},codeblock:{title:"CodeBlock 代码高亮",desc:"代码高亮组件 — 语法高亮显示，支持自定义样式和类名"},loading:{title:"Loading 加载",desc:"动森风格小岛 Loading 动画组件，支持自定义样式和类名"},table:{title:"Table 表格",desc:"数据表格组件，支持斑马纹、边框、加载状态等常用功能"}},Xs={button:Ps,input:Ws,switch:Os,card:Es,collapse:Fs,cursor:Hs,time:cs,phone:hs,footer:us,modal:Ks,typewriter:Us,"divider-comp":qs,icon:fs,select:Gs,tabs:vs,checkbox:Cs,codeblock:ks,loading:Ss,table:Is},_s=({activeKey:t})=>{const a=Xs[t],n=Zs[t];return!a||!n?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontSize:24,fontWeight:700,color:"#794f27",marginBottom:12,lineHeight:1.4},children:n.title}),e.jsx("div",{style:{...C.pageDesc,minHeight:40},children:e.jsx(te,{trigger:t,speed:30,children:n.desc},t)}),e.jsx(a,{})]})};export{Zs as PAGE_INFO,_s as default};
