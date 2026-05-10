import{r as o,j as e,C as de,T as _,B as m,s as S,a as N,t as w,l,d as T,b as D,A,c as H,e as ne,f as ae,D as G,g as L}from"./index-DX8cq19t.js";import{a as he,g as ue}from"./vendor-N--QU9DW.js";const ye="animal-wrapper-IRrhj",xe="animal-wrapper-disabled-MWwHK",fe="animal-input-12WUn",je="animal-wrapper-no-shadow-WP9Gk",ve="animal-wrapper-small-mWvja",ge="animal-wrapper-middle-zXqMR",be="animal-wrapper-large-RrYM4",Ce="animal-wrapper-error-W-VRo",we="animal-wrapper-warning-miO7A",ke="animal-prefix-g8f1R",Se="animal-suffix-o7ywP",Ne="animal-clear-HuR2N",P={wrapper:ye,"wrapper-disabled":"animal-wrapper-disabled-MWwHK",wrapperDisabled:xe,input:fe,"wrapper-no-shadow":"animal-wrapper-no-shadow-WP9Gk",wrapperNoShadow:je,"wrapper-small":"animal-wrapper-small-mWvja",wrapperSmall:ve,"wrapper-middle":"animal-wrapper-middle-zXqMR",wrapperMiddle:ge,"wrapper-large":"animal-wrapper-large-RrYM4",wrapperLarge:be,"wrapper-error":"animal-wrapper-error-W-VRo",wrapperError:Ce,"wrapper-warning":"animal-wrapper-warning-miO7A",wrapperWarning:we,prefix:ke,suffix:Se,clear:Ne},M=({size:t="middle",prefix:a,suffix:n,allowClear:i=!1,status:c,shadow:s=!1,disabled:r=!1,className:d,value:h,defaultValue:k,onChange:I,onClear:g,...f})=>{const[x,y]=o.useState(k??""),b=h!==void 0,p=b?h:x,C=o.useCallback(u=>{b||y(u.target.value),I?.(u)},[b,I]),U=o.useCallback(()=>{b||y(""),g?.();const u=new Event("input",{bubbles:!0}),Y={value:""};I?.({target:Y,currentTarget:Y,nativeEvent:u})},[b,I,g]),Q=[P.wrapper,P[`wrapper-${t}`],c&&P[`wrapper-${c}`],r&&P["wrapper-disabled"],!s&&P["wrapper-no-shadow"],d].filter(Boolean).join(" ");return e.jsxs("span",{className:Q,children:[a&&e.jsx("span",{className:P.prefix,children:a}),e.jsx("input",{className:P.input,disabled:r,value:p,onChange:C,...f}),i&&p&&!r&&e.jsx("span",{className:P.clear,onClick:U,role:"button",tabIndex:-1,children:"×"}),n&&e.jsx("span",{className:P.suffix,children:n})]})};M.displayName="Input";const De="animal-switch-disabled-U5tjL",Ae="animal-switch-checked-6HKL4",Ie="animal-switch-small-jkWtD",Ve="animal-handle-KgZ7M",Be="animal-inner-5x97M",Te="animal-switch-loading--3JYL",Me="animal-spinner-QK4sP",Le="animal-animal-spin-P6YYa",W={switch:"animal-switch-NQPLj","switch-disabled":"animal-switch-disabled-U5tjL",switchDisabled:De,"switch-checked":"animal-switch-checked-6HKL4",switchChecked:Ae,"switch-small":"animal-switch-small-jkWtD",switchSmall:Ie,handle:Ve,inner:Be,"switch-loading":"animal-switch-loading--3JYL",switchLoading:Te,spinner:Me,"animal-spin":"animal-animal-spin-P6YYa",animalSpin:Le},F=({checked:t,defaultChecked:a=!1,size:n="default",disabled:i=!1,loading:c=!1,checkedChildren:s,unCheckedChildren:r,onChange:d,className:h})=>{const[k,I]=o.useState(a),g=t!==void 0,f=g?t:k,x=o.useCallback(()=>{if(i||c)return;const b=!f;g||I(b),d?.(b)},[i,c,f,g,d]),y=[W.switch,W[`switch-${n}`],f&&W["switch-checked"],i&&W["switch-disabled"],c&&W["switch-loading"],h].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",role:"switch","aria-checked":f,className:y,onClick:x,disabled:i,children:[e.jsx("span",{className:W.handle,children:c&&e.jsx("span",{className:W.spinner})}),e.jsx("span",{className:W.inner,children:f?s:r})]})};F.displayName="Switch";var Re=he();const ze="animal-mask-hAWeP",Pe="animal-modal-d0zyM",Oe="animal-modalClipped-7IuAw",We="animal-header-udOSi",Ee="animal-title-s6pv3",Fe="animal-body--aiyx",He="animal-footer-9Ib-a",E={mask:ze,modal:Pe,modalClipped:Oe,header:We,title:Ee,body:Fe,footer:He},Ye=()=>e.jsx("svg",{style:{position:"absolute",width:0,height:0},"aria-hidden":!0,children:e.jsx("clipPath",{id:"animal-modal-clip",clipPathUnits:"objectBoundingBox",children:e.jsx("path",{d:"M0.501,0.005 L0.501,0.005 L0.523,0.005 L0.549,0.006 C0.704,0.01,0.796,0.017,0.825,0.027 L0.827,0.028 C0.872,0.045,0.939,0.044,0.978,0.17 C1,0.254,1,0.365,0.99,0.505 L0.988,0.513 C0.979,0.558,0.971,0.598,0.965,0.633 C0.956,0.689,0.979,0.77,0.964,0.865 C0.953,0.928,0.921,0.966,0.869,0.979 C0.821,0.986,0.773,0.992,0.726,0.995 L0.712,0.996 L0.694,0.997 C0.648,1,0.586,1,0.507,1 L0.501,1 L0.464,1 C0.385,1,0.325,0.998,0.283,0.995 C0.234,0.992,0.184,0.987,0.133,0.979 C0.081,0.966,0.05,0.928,0.039,0.865 C0.023,0.77,0.047,0.689,0.037,0.633 C0.031,0.595,0.023,0.552,0.013,0.505 C-0.006,0.365,-0.002,0.254,0.024,0.17 C0.064,0.045,0.13,0.045,0.174,0.028 L0.175,0.028 C0.204,0.017,0.303,0.009,0.474,0.005 L0.501,0.005"})})}),X=({open:t,title:a,width:n=520,maskClosable:i=!0,footer:c,onClose:s,onOk:r,children:d,className:h,typeSpeed:k=80,typewriter:I=!0})=>{const[g,f]=o.useState(0);o.useEffect(()=>{t&&f(C=>C+1)},[t]),o.useEffect(()=>{if(!t)return;const C=U=>{U.key==="Escape"&&s?.()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[t,s]),o.useEffect(()=>(t&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[t]);const x=o.useCallback(()=>{i&&s?.()},[i,s]),y=o.useCallback(C=>{C.stopPropagation()},[]);if(!t)return null;const b=e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"primary",onClick:s,children:"取消"}),e.jsx(m,{type:"primary",onClick:r,children:"确定"})]}),p=e.jsx(de,{children:e.jsx("div",{className:E.mask,onClick:x,children:e.jsxs("div",{className:[E.modal,h].filter(Boolean).join(" "),style:{width:n},onClick:y,role:"dialog","aria-modal":"true",children:[e.jsx(Ye,{}),e.jsxs("div",{className:E.modalClipped,children:[a&&e.jsx("div",{className:E.header,children:a&&e.jsx("div",{className:E.title,children:a})}),e.jsx("div",{className:E.body,children:I?e.jsx(_,{speed:k,trigger:g,children:d}):d}),c!==null&&e.jsx("div",{className:E.footer,children:c===void 0?b:c})]})]})})});return Re.createPortal(p,document.body)};X.displayName="Modal";const Ke="animal-footer-5DMOR",qe="animal-tree-KZ8hX",ie={footer:Ke,tree:qe},se=({type:t="tree",className:a,style:n})=>{const i=[ie.footer,ie[t],a].filter(Boolean).join(" ");return e.jsx("div",{className:i,style:n})};se.displayName="Footer";const Ue="animal-faqCard-5jlOE",Qe="animal-disabled-9DAjm",Ge="animal-questionHeader-iqP87",Ze="animal-questionIcon-xRkdp",Xe="animal-expanded-a8Eze",Je="animal-questionText-jVpUv",$e="animal-leafDecoration-RoK4H",_e="animal-answerWrapper-tzFtx",et="animal-answerContent-ppsk-",O={faqCard:Ue,disabled:Qe,questionHeader:Ge,questionIcon:Ze,expanded:Xe,questionText:Je,leafDecoration:$e,answerWrapper:_e,answerContent:et},J=({question:t,answer:a,defaultExpanded:n=!1,disabled:i=!1,className:c,style:s})=>{const[r,d]=o.useState(n),h=()=>{i||d(!r)},k=[O.faqCard,r&&O.expanded,i&&O.disabled,c].filter(Boolean).join(" ");return e.jsxs("div",{className:k,style:s,children:[e.jsxs("button",{className:O.questionHeader,onClick:h,disabled:i,"aria-expanded":r,children:[e.jsx("span",{className:O.questionIcon,children:r?"−":"+"}),e.jsx("span",{className:O.questionText,children:t}),e.jsx("span",{className:O.leafDecoration,children:e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:e.jsx("path",{fill:"currentColor",d:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"})})})]}),e.jsx("div",{className:O.answerWrapper,children:e.jsx("div",{className:O.answerContent,children:a})})]})};J.displayName="Collapse";const tt="animal-acDatetime-hVKh7",at="animal-acDate-rhO3k",st="animal-acWeekday-bxDHR",lt="animal-acMonthday-1jUmX",nt="animal-acTime-S-twb",it="animal-acColon-g4vuJ",K={acDatetime:tt,acDate:at,acWeekday:st,acMonthday:lt,acTime:nt,acColon:it},ot=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],rt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pe=({className:t})=>{const[a,n]=o.useState(new Date);return o.useEffect(()=>{const i=setInterval(()=>n(new Date),1e3);return()=>clearInterval(i)},[]),e.jsx(de,{children:e.jsxs("div",{className:`${K.acDatetime} ${t||""}`,children:[e.jsxs("div",{className:K.acDate,children:[e.jsx("span",{className:K.acWeekday,children:ot[a.getDay()]}),e.jsxs("span",{className:K.acMonthday,children:[rt[a.getMonth()]," ",a.getDate()]})]}),e.jsxs("div",{className:K.acTime,children:[a.getHours().toString().padStart(2,"0"),e.jsx("span",{className:K.acColon,children:":"}),a.getMinutes().toString().padStart(2,"0")]})]})})};pe.displayName="Time";const ct="animal-phoneContainer-49yKw",dt="animal-phone-bXgSa",pt="animal-statusBar-Vb96q",mt="animal-time-cokU-",ht="animal-signalIcons-TuL3l",ut="animal-screenContent-oyJF-",yt="animal-homeScreen-no2yS",xt="animal-grasswave-l6cyA",ft="animal-dateDisplay-cnvu8",jt="animal-dateDisplayHeader-32i0J",vt="animal-blink--R0wf",gt="animal-dayText-7NEMb",bt="animal-appsGrid-opTs8",Ct="animal-appItem-1NmDt",wt="animal-appIcon-tTPIg",kt="animal-iconBounce-n4Boc",St="animal-appIconOffset-b5SZG",Nt="animal-iconBounceOffset-XfsXI",Dt="animal-appItemOffset-FEStg",At="animal-iconCamera-c-grH",It="animal-iconMiles-L9Cow",Vt="animal-iconCritterpedia-okU95",Bt="animal-iconDiy-gZgxn",Tt="animal-iconDesign-YvE9z",Mt="animal-iconMap-xmfHe",Lt="animal-iconVariant-k-kkB",Rt="animal-iconHelicopter-HV-TH",zt="animal-iconChat-TVZXY",Pt="animal-iconWifi-RoLJH",Ot="animal-iconLocation-YfhoK",Wt="animal-iconPage-wMmBC",Et="animal-badge-drGmk",Ft="animal-pageIndicator-mQ-Pg",v={phoneContainer:ct,phone:dt,statusBar:pt,time:mt,signalIcons:ht,screenContent:ut,homeScreen:yt,grasswave:xt,dateDisplay:ft,dateDisplayHeader:jt,blink:vt,dayText:gt,appsGrid:bt,appItem:Ct,appIcon:wt,iconBounce:kt,appIconOffset:St,iconBounceOffset:Nt,appItemOffset:Dt,iconCamera:At,iconMiles:It,iconCritterpedia:Vt,iconDiy:Bt,iconDesign:Tt,iconMap:Mt,iconVariant:Lt,iconHelicopter:Rt,iconChat:zt,iconWifi:Pt,iconLocation:Ot,iconPage:Wt,badge:Et,pageIndicator:Ft},Ht=[{id:"camera",iconClass:"iconCamera",color:"#B77DEE",hasNewMessage:!0},{id:"app",iconClass:"iconMiles",color:"#889DF0",offset:!0},{id:"critterpedia",iconClass:"iconCritterpedia",color:"#F7CD67"},{id:"diy",iconClass:"iconDiy",color:"#E59266"},{id:"shopping",iconClass:"iconDesign",color:"#F8A6B2"},{id:"variant",iconClass:"iconMap",color:"#82D5BB",hasNewMessage:!0},{id:"design",iconClass:"iconVariant",color:"#8AC68A"},{id:"map",iconClass:"iconHelicopter",color:"#FC736D"},{id:"chat",iconClass:"iconChat",color:"#D1DA49"}],Yt=({className:t})=>{const[a,n]=o.useState(new Date);o.useEffect(()=>{const h=setInterval(()=>{n(new Date)},1e3);return()=>clearInterval(h)},[]);const i=a.getHours(),c=a.getMinutes(),s=i>=12?"PM":"AM",r=i%12||12,d=c.toString().padStart(2,"0");return e.jsx("div",{className:`${v.phoneContainer} ${t||""}`,children:e.jsx("div",{className:v.phone,children:e.jsx("div",{className:v.screenContent,children:e.jsxs("div",{className:v.homeScreen,children:[e.jsxs("div",{className:v.dateDisplay,children:[e.jsxs("div",{className:v.dateDisplayHeader,children:[e.jsx("span",{className:v.iconWifi}),e.jsxs("div",{children:[r,e.jsx("span",{className:v.blink,children:":"}),d,s]}),e.jsx("span",{className:v.iconLocation})]}),e.jsx("div",{className:v.dayText,children:"Welcome!"})]}),e.jsx("div",{className:v.appsGrid,children:Ht.map(h=>e.jsxs("div",{className:`${v.appItem} ${h.offset?v.appItemOffset:""}`,style:{backgroundColor:h.color},children:[h.hasNewMessage&&e.jsx("span",{className:v.badge}),e.jsx("span",{className:`${v.appIcon} ${v[h.iconClass]} ${h.offset?v.appIconOffset:""}`})]},h.id))}),e.jsx("div",{className:v.pageIndicator,children:e.jsx("span",{className:v.iconPage})})]})})})})},Kt="animal-icon-wUFR-",qt="animal-iconBounce-Q1e3X",Ut="animal-icon-miles-oVFnM",Qt="animal-icon-camera-W9x4U",Gt="animal-icon-chat-dfYOk",Zt="animal-icon-critterpedia-vDPSY",Xt="animal-icon-design-8gBms",Jt="animal-icon-diy-AwPHs",$t="animal-icon-helicopter-w6ZL6",_t="animal-icon-map-ogQk4",ea="animal-icon-shopping-TSh2U",ta="animal-icon-variant-E6wqy",aa="animal-iconList-MRyTC",sa="animal-iconListItem-nTF3l",la="animal-iconListLabel-t2M3-",ee={icon:Kt,"icon-bounce":"animal-icon-bounce-1MvWH",iconBounce:qt,"icon-miles":"animal-icon-miles-oVFnM",iconMiles:Ut,"icon-camera":"animal-icon-camera-W9x4U",iconCamera:Qt,"icon-chat":"animal-icon-chat-dfYOk",iconChat:Gt,"icon-critterpedia":"animal-icon-critterpedia-vDPSY",iconCritterpedia:Zt,"icon-design":"animal-icon-design-8gBms",iconDesign:Xt,"icon-diy":"animal-icon-diy-AwPHs",iconDiy:Jt,"icon-helicopter":"animal-icon-helicopter-w6ZL6",iconHelicopter:$t,"icon-map":"animal-icon-map-ogQk4",iconMap:_t,"icon-shopping":"animal-icon-shopping-TSh2U",iconShopping:ea,"icon-variant":"animal-icon-variant-E6wqy",iconVariant:ta,iconList:aa,iconListItem:sa,iconListLabel:la},V=({name:t,size:a=24,className:n,style:i,bounce:c=!1,...s})=>e.jsx("span",{className:`${ee.icon} ${ee[t]} ${c?ee["icon-bounce"]:""} ${n||""}`,style:{width:a,height:a,...i},...s}),oe=[{name:"icon-miles",label:"NookMiles"},{name:"icon-camera",label:"Camera"},{name:"icon-chat",label:"Chat"},{name:"icon-critterpedia",label:"Critterpedia"},{name:"icon-design",label:"Design"},{name:"icon-diy",label:"DIY"},{name:"icon-helicopter",label:"Helicopter"},{name:"icon-map",label:"Map"},{name:"icon-shopping",label:"Shopping"},{name:"icon-variant",label:"Variant"}],na="animal-wrapper-pbOTq",ia="animal-trigger-2-Ahh",oa="animal-open-867xo",ra="animal-value-623RB",ca="animal-placeholder-vpC8E",da="animal-arrow-xNbxA",pa="animal-dropdown-0l6jF",ma="animal-option-GEkLI",ha="animal-active-jtSpt",ua="animal-hovered-N-cco",ya="animal-pillBar-O9cTb",xa="animal-optionDot-FQtyw",fa="animal-disabled-Oy12C",B={wrapper:na,trigger:ia,open:oa,value:ra,placeholder:ca,arrow:da,dropdown:pa,option:ma,active:ha,hovered:ua,pillBar:ya,optionDot:xa,disabled:fa},$=({options:t,value:a,onChange:n,placeholder:i="请选择",disabled:c=!1})=>{const[s,r]=o.useState(!1),[d,h]=o.useState(null),[k,I]=o.useState({}),[g,f]=o.useState(!1),x=o.useRef(null),y=t.find(p=>p.key===a)?.label||i;o.useEffect(()=>{const p=C=>{x.current&&!x.current.contains(C.target)&&(r(!1),f(!1))};return s&&document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[s]),o.useEffect(()=>{if(s&&x.current){const p=x.current.getBoundingClientRect(),C=window.innerWidth,U=window.innerHeight,Q=t.length*44+24,u={position:"absolute"};p.right+200>C?(u.right="100%",u.marginRight="6px",u.left="auto"):(u.left="100%",u.marginLeft="6px",u.right="auto");const Y=U-p.bottom,me=p.top;Y<Q&&me>Y?(u.top="auto",u.bottom="100%",u.marginBottom="6px",delete u.transform):Y<Q||p.top<Q?(u.top="100%",u.marginTop="6px",u.bottom="auto",delete u.transform):(u.top="50%",u.transform="translateY(-50%)",u.bottom="auto"),I(u),requestAnimationFrame(()=>{f(!0)})}else s||f(!1)},[s,t.length]);const b=p=>{n(p),r(!1),f(!1)};return e.jsxs("div",{ref:x,className:`${B.wrapper} ${c?B.disabled:""}`,children:[e.jsxs("div",{className:`${B.trigger} ${s?B.open:""}`,onClick:()=>!c&&r(!s),children:[e.jsx("span",{className:a?B.value:B.placeholder,children:y}),e.jsx("span",{className:B.arrow,children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),s&&g&&e.jsx("div",{className:B.dropdown,style:k,children:t.map(p=>e.jsxs("div",{className:`${B.option} ${a===p.key?B.active:""} ${d===p.key?B.hovered:""}`,onClick:()=>b(p.key),onMouseEnter:()=>h(p.key),onMouseLeave:()=>h(null),children:[e.jsx("span",{className:B.optionDot}),p.label,a===p.key&&e.jsx("div",{className:B.pillBar})]},p.key))})]})};$.displayName="Select";const ja="animal-tabs-I3QAo",va="animal-tabList--fYUP",ga="animal-tabItem-Ehph4",ba="animal-active-AoX4Y",Ca="animal-tabIcon-Aiu-T",wa="animal-tabLabel-bCauA",ka="animal-tabLeaf-1ud9k",Sa="animal-tabLeafStatic-52CX9",Na="animal-tabContent-zDlRq",Da="animal-tabContentInner-Y5kRC",R={tabs:ja,tabList:va,tabItem:ga,active:ba,tabIcon:Ca,tabLabel:wa,tabLeaf:ka,tabLeafStatic:Sa,tabContent:Na,tabContentInner:Da},Aa="data:image/png;base64,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",le=({items:t,defaultActiveKey:a,activeKey:n,onChange:i,className:c,style:s,leafAnimation:r=!0})=>{const[d,h]=o.useState(a||t[0]?.key),k=n!==void 0?n:d,I=x=>{n===void 0&&h(x),i?.(x)},g=t.find(x=>x.key===k),f=[R.tabs,c].filter(Boolean).join(" ");return e.jsxs("div",{className:f,style:s,children:[e.jsx("div",{className:R.tabList,children:t.map(x=>{const y=x.key===k;return e.jsxs("button",{className:`${R.tabItem} ${y?R.active:""}`,onClick:()=>I(x.key),children:[e.jsx("span",{className:R.tabIcon,children:y?"●":"○"}),e.jsx("span",{className:R.tabLabel,children:x.label}),y&&e.jsx("img",{src:Aa,alt:"",className:`${R.tabLeaf} ${r?"":R.tabLeafStatic}`})]},x.key)})}),e.jsx("div",{className:R.tabContent,children:e.jsx("div",{className:R.tabContentInner,children:g?.children})})]})};le.displayName="Tabs";const Ia="animal-checkboxGroup-q3P6l",Va="animal-horizontal-fBBSw",Ba="animal-vertical-klL45",Ta="animal-checkboxItem-DxKFM",Ma="animal-small-2wCHI",La="animal-box-bIDkg",Ra="animal-checkmark-Ub21Y",za="animal-label-L0ila",Pa="animal-middle-VUB-E",Oa="animal-large-QQxPe",Wa="animal-checked-S7gPe",Ea="animal-animal-checkbox-pop-0cWeC",Fa="animal-disabled-zDC-1",Ha="animal-groupDisabled-LvBFd",z={checkboxGroup:Ia,horizontal:Va,vertical:Ba,checkboxItem:Ta,small:Ma,box:La,checkmark:Ra,label:za,middle:Pa,large:Oa,checked:Wa,"animal-checkbox-pop":"animal-animal-checkbox-pop-0cWeC",animalCheckboxPop:Ea,disabled:Fa,groupDisabled:Ha};var te={exports:{}};var re;function Ya(){return re||(re=1,(function(t){(function(){var a={}.hasOwnProperty;function n(){for(var s="",r=0;r<arguments.length;r++){var d=arguments[r];d&&(s=c(s,i(d)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var r="";for(var d in s)a.call(s,d)&&s[d]&&(r=c(r,d));return r}function c(s,r){return r?s?s+" "+r:s+r:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(te)),te.exports}var Ka=Ya();const ce=ue(Ka),q=({value:t,defaultValue:a=[],options:n,size:i="middle",disabled:c=!1,direction:s="horizontal",onChange:r,className:d,style:h})=>{const[k,I]=o.useState(a),g=t!==void 0,f=g?t:k,x=o.useCallback((y,b)=>{if(c||b)return;const p=f.includes(y)?f.filter(C=>C!==y):[...f,y];g||I(p),r?.(p)},[c,f,g,r]);return e.jsx("div",{className:ce(z.checkboxGroup,z[s],{[z.groupDisabled]:c},d),style:h,children:n.map(y=>{const b=f.includes(y.value),p=c||y.disabled;return e.jsxs("label",{className:ce(z.checkboxItem,z[i],{[z.checked]:b,[z.disabled]:p}),onClick:()=>x(y.value,y.disabled),children:[e.jsx("span",{className:z.box,role:"checkbox","aria-checked":b,tabIndex:p?-1:0,onKeyDown:C=>{(C.key===" "||C.key==="Enter")&&(C.preventDefault(),x(y.value,y.disabled))},children:b&&e.jsx("span",{className:z.checkmark,children:"✓"})}),e.jsx("span",{className:z.label,children:y.label})]},String(y.value))})})};q.displayName="Checkbox";const qa=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Time ",e.jsx("span",{style:w,children:"时间"})]}),e.jsx("div",{style:l,children:"Time 组件 — 动森经典 HUD 风格的时间显示组件，实时更新时间，支持星期、日期和时间显示。"}),e.jsx("div",{style:T,children:e.jsx(pe,{})}),e.jsx(D,{code:`import React from 'react';
import { Time } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 时间显示 */}
            <Time />
        </div>
    );
};

export default App;`}),e.jsx(A,{rows:Ua})]}),Ua=[{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],Qa=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Phone ",e.jsx("span",{style:w,children:"手机"})]}),e.jsx("div",{style:l,children:"Phone 组件 — 手机界面组件。"}),e.jsx("div",{style:{...T,transform:"scale(0.6)",transformOrigin:"top left",height:473},children:e.jsx(Yt,{})}),e.jsx(D,{code:`import React from 'react';
import { Phone } from 'animal-island-ui';

const App = () => {
    return (
        <div>
            {/* 手机界面 */}
            <Phone />
        </div>
    );
};

export default App;`}),e.jsx(A,{rows:Ga})]}),Ga=[{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],Za=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Footer ",e.jsx("span",{style:w,children:"底部装饰"})]}),e.jsx("div",{style:l,children:"Footer 组件 — 页面底部装饰图片，支持 sea（海）和 tree（树）两种类型。"}),e.jsxs("div",{style:{...T,padding:"40px 0"},children:[e.jsx("div",{style:l,children:"tree 类型（默认）"}),e.jsx(se,{})]}),e.jsxs("div",{style:{...T,padding:"40px 0"},children:[e.jsx("div",{style:l,children:"sea 类型"}),e.jsx(se,{type:"sea"})]}),e.jsx(D,{code:`import React from 'react';
import { Footer } from 'animal-island-ui';

const App = () => (
    <div>
        <Footer />
        <Footer type="sea" />
    </div>
);`}),e.jsx(A,{rows:Xa})]}),Xa=[{prop:"type",desc:"Footer 类型",type:"'sea' | 'tree'",defaultVal:"'tree'"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],Ja=[{prop:"name",desc:"图标名称",type:"IconName",defaultVal:"-",required:!0},{prop:"size",desc:"图标尺寸",type:"number | string",defaultVal:"24"},{prop:"bounce",desc:"弹跳动画",type:"boolean",defaultVal:"false"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],$a=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Icon ",e.jsx("span",{style:w,children:"10 icons"})]}),e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{display:"flex",gap:20,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(V,{name:"icon-miles",size:32}),e.jsx(V,{name:"icon-camera",size:32}),e.jsx(V,{name:"icon-chat",size:32}),e.jsx(V,{name:"icon-design",size:32}),e.jsx(V,{name:"icon-map",size:32})]}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[e.jsx(V,{name:"icon-miles",size:16}),e.jsx(V,{name:"icon-miles",size:24}),e.jsx(V,{name:"icon-miles",size:32}),e.jsx(V,{name:"icon-miles",size:48})]}),e.jsx("div",{style:l,children:"bounce 弹跳动画（鼠标悬停查看效果）"}),e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[e.jsx(V,{name:"icon-miles",size:32,bounce:!0}),e.jsx(V,{name:"icon-camera",size:32,bounce:!0}),e.jsx(V,{name:"icon-chat",size:32,bounce:!0})]}),e.jsx("div",{style:l,children:"图标列表"}),e.jsx("div",{style:{border:"1px solid #e8e2d6",borderRadius:12,overflow:"hidden",padding:"5px 16px"},children:oe.map((t,a)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,padding:"12px 5px",borderBottom:a<oe.length-1?"1px dashed #f0e8d8":"none",background:"#fff"},children:[e.jsx(V,{name:t.name,size:32}),e.jsx("span",{style:{fontSize:14,color:"#725d42",fontFamily:"inherit"},children:t.label}),e.jsx("span",{style:{marginLeft:"auto",fontSize:12,color:"#a0936e",fontFamily:"'SF Mono', 'Fira Code', Consolas, monospace"},children:t.name})]},t.name))}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:Ja})]}),_a=[{prop:"options",desc:"选项列表",type:"CheckboxOption[]",defaultVal:"-",required:!0},{prop:"value",desc:"受控选中值列表",type:"Array<string | number>",defaultVal:"-"},{prop:"defaultValue",desc:"默认选中值列表",type:"Array<string | number>",defaultVal:"[]"},{prop:"size",desc:"尺寸",type:"'small' | 'middle' | 'large'",defaultVal:"'middle'"},{prop:"disabled",desc:"禁用全部选项",type:"boolean",defaultVal:"false"},{prop:"direction",desc:"排列方向",type:"'horizontal' | 'vertical'",defaultVal:"'horizontal'"},{prop:"onChange",desc:"选中值变化回调",type:"(values: Array<string | number>) => void",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"React.CSSProperties",defaultVal:"-"}],Z=[{label:"🌊 海滩",value:"beach"},{label:"🌳 森林",value:"forest"},{label:"🌸 花园",value:"garden"},{label:"🏡 村庄",value:"village"}],es=[{label:"🦋 蝴蝶",value:"butterfly"},{label:"🐟 鲈鱼",value:"bass"},{label:"🦀 螃蟹",value:"crab",disabled:!0},{label:"🐛 毛毛虫",value:"caterpillar"},{label:"🌊 水母",value:"jellyfish"}],ts=()=>{const[t,a]=o.useState(["beach","garden"]),[n,i]=o.useState([]);return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Checkbox ",e.jsx("span",{style:w,children:"基础用法"})]}),e.jsx("div",{style:l,children:"默认水平排列（受控）"}),e.jsxs("div",{style:{marginBottom:8,fontSize:13,color:"#a08060"},children:["已选中:"," ",e.jsx("span",{style:{color:"#19c8b9",fontWeight:600},children:t.length>0?Z.filter(c=>t.includes(c.value)).map(c=>c.label).join("、"):"无"})]}),e.jsx("div",{style:H,children:e.jsx(q,{options:Z,value:t,onChange:a,style:{gap:20}})}),e.jsx("div",{style:l,children:"垂直排列 + 含禁用选项"}),e.jsx("div",{style:H,children:e.jsx(q,{options:es,value:n,onChange:i,direction:"vertical",style:{gap:12}})}),e.jsx("div",{style:l,children:"小尺寸"}),e.jsx("div",{style:H,children:e.jsx(q,{options:Z,defaultValue:["forest"],size:"small"})}),e.jsx("div",{style:l,children:"大尺寸"}),e.jsx("div",{style:H,children:e.jsx(q,{options:Z.slice(0,3),defaultValue:["beach"],size:"large"})}),e.jsx("div",{style:l,children:"全部禁用"}),e.jsx("div",{style:H,children:e.jsx(q,{options:Z,defaultValue:["garden","village"],disabled:!0})}),e.jsx(D,{code:`import React, { useState } from 'react';
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

export default App;`}),e.jsx(A,{rows:_a})]})},as=[{prop:"code",desc:"代码字符串",type:"string",defaultVal:"-",required:!0},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],ss=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["CodeBlock ",e.jsx("span",{style:w,children:"代码高亮"})]}),e.jsx("div",{style:l,children:"基础用法"}),e.jsx("div",{style:H,children:e.jsx(ne,{code:`import React from 'react';
import { Button } from 'animal-island-ui';

const App = () => (
    <Button type="primary">按钮</Button>
);

export default App;`})}),e.jsx("div",{style:l,children:"自定义样式"}),e.jsx("div",{style:H,children:e.jsx(ne,{code:`import React from 'react';
import { CodeBlock } from 'animal-island-ui';

<CodeBlock
    code={codeString}
    style={{ borderRadius: 5, backgroundColor: '#242c46ff' }}
    className="custom-code"
/>`,style:{borderRadius:5,backgroundColor:"#242c46ff"}})}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:as})]}),j={pageDesc:{fontSize:14,color:"#794f27",marginBottom:20},row:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-start"},col:{display:"flex",flexDirection:"column",gap:12},demoBox:{padding:16,borderRadius:18,fontWeight:500,marginBottom:20}},ls=[{prop:"type",desc:"按钮类型",type:"'primary' | 'default' | 'dashed' | 'text' | 'link'",defaultVal:"'default'"},{prop:"size",desc:"按钮尺寸",type:"'small' | 'middle' | 'large'",defaultVal:"'middle'"},{prop:"danger",desc:"是否危险按钮",type:"boolean",defaultVal:"false"},{prop:"ghost",desc:"是否幽灵按钮（透明背景）",type:"boolean",defaultVal:"false"},{prop:"block",desc:"是否块级按钮",type:"boolean",defaultVal:"false"},{prop:"loading",desc:"加载状态",type:"boolean",defaultVal:"false"},{prop:"disabled",desc:"禁用状态",type:"boolean",defaultVal:"false"},{prop:"icon",desc:"图标",type:"ReactNode",defaultVal:"-"},{prop:"htmlType",desc:"原生 button type",type:"'submit' | 'reset' | 'button'",defaultVal:"'button'"},{prop:"children",desc:"按钮内容",type:"ReactNode",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"...",desc:"继承 React.ButtonHTMLAttributes",type:"HTMLButtonElement",defaultVal:"-"}],ns=[{prop:"size",desc:"输入框尺寸",type:"'small' | 'middle' | 'large'",defaultVal:"'middle'"},{prop:"prefix",desc:"前缀图标",type:"ReactNode",defaultVal:"-"},{prop:"suffix",desc:"后缀图标",type:"ReactNode",defaultVal:"-"},{prop:"allowClear",desc:"允许清除",type:"boolean",defaultVal:"false"},{prop:"status",desc:"校验状态",type:"'error' | 'warning'",defaultVal:"-"},{prop:"shadow",desc:"是否显示阴影",type:"boolean",defaultVal:"false"},{prop:"onChange",desc:"值变化回调",type:"ChangeEventHandler<HTMLInputElement>",defaultVal:"-"},{prop:"onClear",desc:"清除回调",type:"() => void",defaultVal:"-"},{prop:"...",desc:"继承 React.InputHTMLAttributes",type:"HTMLInputElement",defaultVal:"-"}],is=[{prop:"checked",desc:"是否选中（受控）",type:"boolean",defaultVal:"-"},{prop:"defaultChecked",desc:"默认是否选中",type:"boolean",defaultVal:"false"},{prop:"size",desc:"尺寸",type:"'small' | 'default'",defaultVal:"'default'"},{prop:"disabled",desc:"禁用",type:"boolean",defaultVal:"false"},{prop:"loading",desc:"加载状态",type:"boolean",defaultVal:"false"},{prop:"checkedChildren",desc:"选中时文案",type:"ReactNode",defaultVal:"-"},{prop:"unCheckedChildren",desc:"未选中时文案",type:"ReactNode",defaultVal:"-"},{prop:"onChange",desc:"变化回调",type:"(checked: boolean) => void",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"}],os=[{prop:"open",desc:"是否可见",type:"boolean",defaultVal:"-",required:!0},{prop:"title",desc:"标题",type:"ReactNode",defaultVal:"-"},{prop:"width",desc:"宽度",type:"number | string",defaultVal:"520"},{prop:"maskClosable",desc:"点击遮罩关闭",type:"boolean",defaultVal:"true"},{prop:"footer",desc:"底部按钮区域，传 null 则不显示",type:"ReactNode | null",defaultVal:"默认按钮"},{prop:"onClose",desc:"关闭回调",type:"() => void",defaultVal:"-"},{prop:"onOk",desc:"确认回调",type:"() => void",defaultVal:"-"},{prop:"children",desc:"自定义内容",type:"ReactNode",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"typeSpeed",desc:"打字机每字间隔 (ms)",type:"number",defaultVal:"80"},{prop:"typewriter",desc:"是否启用打字机效果",type:"boolean",defaultVal:"true"}],rs=[{prop:"type",desc:"卡片类型",type:"'default' | 'title' | 'dashed'",defaultVal:"'default'"},{prop:"color",desc:"背景颜色类型",type:"'default' | 'app-pink' | 'purple' | 'app-blue' | 'app-yellow' | 'app-orange' | 'app-teal' | 'app-green' | 'app-red' | 'lime-green' | 'yellow-green' | 'brown' | 'warm-peach-pink'",defaultVal:"'default'"},{prop:"children",desc:"自定义内容",type:"ReactNode",defaultVal:"-"},{prop:"...",desc:"继承 React.HTMLAttributes",type:"HTMLDivElement",defaultVal:"-"}],cs=[{prop:"question",desc:"问题标题",type:"ReactNode",defaultVal:"-",required:!0},{prop:"answer",desc:"答案内容",type:"ReactNode",defaultVal:"-",required:!0},{prop:"defaultExpanded",desc:"是否默认展开",type:"boolean",defaultVal:"false"},{prop:"disabled",desc:"是否禁用",type:"boolean",defaultVal:"false"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],ds=[{prop:"children",desc:"子元素",type:"ReactNode",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],ps=[{prop:"type",desc:"分隔线类型",type:"'line-brown' | 'line-teal' | 'line-white' | 'line-yellow' | 'wave-yellow'",defaultVal:"'line-brown'"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"}],ms=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Button ",e.jsx("span",{style:w,children:"6 types"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"type 按钮类型"}),e.jsxs("div",{style:j.row,children:[e.jsx(m,{type:"primary",children:"Primary"}),e.jsx(m,{children:"Default"}),e.jsx(m,{type:"dashed",children:"Dashed"}),e.jsx(m,{type:"text",children:"Text"}),e.jsx(m,{type:"link",children:"Link"})]}),e.jsx("div",{style:l,children:"danger / ghost / loading / disabled 状态"}),e.jsxs("div",{style:j.row,children:[e.jsx(m,{type:"primary",danger:!0,children:"Danger"}),e.jsx(m,{type:"primary",ghost:!0,children:"Ghost"}),e.jsx(m,{type:"primary",loading:!0,children:"Loading"}),e.jsx(m,{type:"primary",disabled:!0,children:"Disabled"})]}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:j.row,children:[e.jsx(m,{type:"primary",size:"small",children:"Small"}),e.jsx(m,{type:"primary",size:"middle",children:"Middle"}),e.jsx(m,{type:"primary",size:"large",children:"Large"})]}),e.jsx("div",{style:l,children:"icon 图标按钮"}),e.jsxs("div",{style:j.row,children:[e.jsx(m,{type:"primary",icon:e.jsx("span",{children:"🔍"}),children:"搜索"}),e.jsx(m,{icon:e.jsx("span",{children:"⭐"}),children:"收藏"}),e.jsx(m,{type:"dashed",icon:e.jsx("span",{children:"＋"}),children:"新增"})]}),e.jsx("div",{style:l,children:"block 块级按钮"}),e.jsx("div",{style:{maxWidth:360},children:e.jsx(m,{type:"primary",block:!0,children:"Block Button"})}),e.jsx("div",{style:l,children:"danger 组合"}),e.jsxs("div",{style:j.row,children:[e.jsx(m,{type:"primary",danger:!0,children:"Primary Danger"}),e.jsx(m,{danger:!0,children:"Default Danger"}),e.jsx(m,{type:"dashed",danger:!0,children:"Dashed Danger"}),e.jsx(m,{type:"text",danger:!0,children:"Text Danger"}),e.jsx(m,{type:"link",danger:!0,children:"Link Danger"})]})]}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:ls})]}),hs=()=>{const[t,a]=o.useState("");return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Input ",e.jsx("span",{style:w,children:"3 sizes"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"shadow 阴影控制"}),e.jsxs("div",{style:{...j.col,maxWidth:360,gap:12},children:[e.jsx(M,{placeholder:"No shadow (default)"}),e.jsx(M,{placeholder:"With shadow",shadow:!0})]}),e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{...j.col,maxWidth:360,gap:12},children:[e.jsx(M,{placeholder:"Basic input"}),e.jsx(M,{placeholder:"With clear",allowClear:!0,value:t,onChange:n=>a(n.target.value),onClear:()=>a("")}),e.jsx(M,{placeholder:"Prefix & Suffix",prefix:"🔍",suffix:"⏎"})]}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:{...j.col,maxWidth:360,gap:12},children:[e.jsx(M,{placeholder:"Small",size:"small"}),e.jsx(M,{placeholder:"Middle (default)",size:"middle"}),e.jsx(M,{placeholder:"Large",size:"large"})]}),e.jsx("div",{style:l,children:"status 校验状态"}),e.jsxs("div",{style:{...j.col,maxWidth:360,gap:12},children:[e.jsx(M,{placeholder:"Error status",status:"error"}),e.jsx(M,{placeholder:"Warning status",status:"warning"})]}),e.jsx("div",{style:l,children:"disabled 禁用"}),e.jsx("div",{style:{...j.col,maxWidth:360,gap:12},children:e.jsx(M,{placeholder:"Disabled",disabled:!0})})]}),e.jsx(D,{code:`import React, { useState } from 'react';
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

export default App;`}),e.jsx(A,{rows:ns})]})},us=()=>{const[t,a]=o.useState(!1);return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Switch ",e.jsx("span",{style:w,children:"2 sizes"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(F,{checked:t,onChange:a}),e.jsx("span",{style:{fontSize:13},children:t?"ON":"OFF"})]}),e.jsx("div",{style:l,children:"checkedChildren / unCheckedChildren 自定义文案"}),e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:e.jsx(F,{defaultChecked:!0,checkedChildren:"开",unCheckedChildren:"关"})}),e.jsx("div",{style:l,children:"size 尺寸"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(F,{defaultChecked:!0}),e.jsx(F,{size:"small",defaultChecked:!0})]}),e.jsx("div",{style:l,children:"disabled / loading 状态"}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(F,{disabled:!0}),e.jsx(F,{loading:!0,defaultChecked:!0})]})]}),e.jsx(D,{code:`import React, { useState } from 'react';
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

export default App;`}),e.jsx(A,{rows:is})]})},ys=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Card ",e.jsx("span",{style:w,children:"3 types"})," ",e.jsx("span",{style:w,children:"13 colors"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:'type="default"'}),e.jsxs("div",{style:j.row,children:[e.jsx(L,{children:e.jsx("p",{children:"基础卡片"})}),e.jsx(L,{style:{maxWidth:560,width:"100%"},children:e.jsx("p",{children:"在Nintendo 3DS《Animal Island: New Leaf》和《Animal Island: Happy Home Designer》中製作的「我的設計」QR Code，以智慧型裝置讀取就能通過狸端機入口站下載至《集合啦！動物森友會》。"})})]}),e.jsx("div",{style:l,children:'type="title"'}),e.jsxs("div",{style:j.row,children:[e.jsx(L,{type:"title",children:e.jsx("p",{children:"Title标题卡片"})}),e.jsx(L,{type:"title",style:{maxWidth:360,width:"100%"},children:e.jsx("p",{children:"欢迎来到无人岛！在Nintendo 3DS《Animal Island: New Leaf》和《Animal Island: Happy Home Designer》中製作的「我的設計」QR Code，以智慧型裝置讀取就能通過狸端機入口站下載至《集合啦！動物森友會》。"})})]}),e.jsx("div",{style:l,children:'type="dashed"'}),e.jsxs("div",{style:j.row,children:[e.jsx(L,{type:"dashed",children:e.jsx("p",{children:"虚线边框卡片"})}),e.jsx(L,{type:"dashed",style:{maxWidth:360,width:"100%"},children:e.jsx("p",{children:"欢迎来到无人岛！虚线边框适合用于轻量提示或次要信息展示。"})})]})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"color — NookPhone 颜色"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:16,marginBottom:24},children:[["default","Default","默认奶油色"],["app-pink","App Pink","应用粉"],["purple","Purple","紫色"],["app-blue","App Blue","应用蓝"],["app-yellow","App Yellow","应用黄"],["app-orange","App Orange","应用橙"],["app-teal","App Teal","应用青"],["app-green","App Green","应用绿"],["app-red","App Red","应用红"],["lime-green","Lime Green","青柠绿"],["yellow-green","Yellow-Green","黄绿色"],["brown","Brown","棕色"],["warm-peach-pink","Warm Peach Pink","暖桃粉"]].map(([t,a,n])=>e.jsxs(L,{color:t,style:{padding:"16px 20px"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:14,marginBottom:4},children:a}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:n})]},t))})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:'color + type="title"'}),e.jsxs("div",{style:j.row,children:[e.jsxs(L,{type:"title",color:"app-blue",style:{width:240},children:[e.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:"蓝色标题卡片"}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:'type="title" + color="app-blue"'})]}),e.jsxs(L,{type:"title",color:"app-green",style:{width:250},children:[e.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:"绿色标题卡片"}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:'type="title" + color="app-green"'})]}),e.jsxs(L,{type:"title",color:"purple",style:{width:240},children:[e.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:"紫色标题卡片"}),e.jsx("div",{style:{fontSize:12,opacity:.85},children:'type="title" + color="purple"'})]})]})]}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:rs})]}),xs=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Collapse ",e.jsx("span",{style:w,children:"FAQ"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"基础用法"}),e.jsxs("div",{style:{maxWidth:720},children:[e.jsx(J,{question:"1個島嶼可以登錄多少名用戶?",answer:e.jsx("p",{children:"1座島嶼最多可以容納8位居民（用戶）。"})}),e.jsx(J,{question:"可以多少人一起玩?",answer:e.jsx("p",{children:"同住1個島的居民可以最多4人一起遊玩。透過通訊最多8人一起遊玩。"})})]}),e.jsx("div",{style:l,children:"defaultExpanded 默认展开"}),e.jsx("div",{style:{maxWidth:720},children:e.jsx(J,{question:"这个问题默认展开",answer:e.jsx("p",{children:"答案已经展示出来了！可以点击收起。"}),defaultExpanded:!0})}),e.jsx("div",{style:l,children:"disabled 禁用状态"}),e.jsx("div",{style:{maxWidth:720},children:e.jsx(J,{question:"这个问题已被禁用（无法展开）",answer:e.jsx("p",{children:"这段文字不应该被看到。"}),disabled:!0})})]}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:cs})]}),fs=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Cursor ",e.jsx("span",{style:w,children:"光标"})]}),e.jsx("p",{style:l,children:"Cursor 组件通过 CSS cursor 属性将子元素的鼠标光标替换为自定义手指图标，当前 Demo 全局已应用。"}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:ds})]}),js=()=>{const[t,a]=o.useState(!1),[n,i]=o.useState(!1),[c,s]=o.useState(!1),[r,d]=o.useState(!1);return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Modal ",e.jsx("span",{style:w,children:"弹窗"})]}),e.jsxs("div",{style:T,children:[e.jsx("div",{style:l,children:"基础弹窗"}),e.jsxs("div",{style:j.row,children:[e.jsx(m,{type:"primary",onClick:()=>a(!0),children:"基础 Modal"}),e.jsx(m,{onClick:()=>i(!0),children:"带标题 Modal"}),e.jsx(m,{type:"dashed",onClick:()=>s(!0),children:"自定义 Footer"})]}),e.jsx("div",{style:l,children:"关闭打字机效果"}),e.jsx("div",{style:j.row,children:e.jsx(m,{type:"primary",onClick:()=>d(!0),children:"关闭打字机效果"})})]}),e.jsx(X,{open:t,onClose:()=>a(!1),onOk:()=>a(!1),children:e.jsxs("div",{style:{textAlign:"center",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx("span",{children:"钓到石头了!"}),e.jsx("span",{children:"竟然连这种都能钓起来..."})]})}),e.jsx(X,{open:n,title:"博物馆捐赠",onClose:()=>i(!1),onOk:()=>i(!1),children:"是否愿意将这条鱼捐赠给博物馆呢？傅达会好好照顾它的！这可是博物馆的新展品哦~"}),e.jsx(X,{open:c,title:"确认操作",onClose:()=>s(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>s(!1),children:"再想想"}),e.jsx(m,{type:"primary",danger:!0,onClick:()=>s(!1),children:"确认搬家"})]}),children:"确定要让这位居民搬走吗？这个操作不可撤销。"}),e.jsx(X,{open:r,title:"天气预报",onClose:()=>d(!1),onOk:()=>d(!1),typewriter:!1,children:"明天天气晴朗，气温 20-28°C，适合外出活动！"}),e.jsx(D,{code:`import React, { useState } from 'react';
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

export default App;`}),e.jsx(A,{rows:os})]})},vs=()=>{const[t,a]=o.useState(0);return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Typewriter ",e.jsx("span",{style:w,children:"打字机"})]}),e.jsxs("div",{style:T,children:[e.jsxs("div",{children:[e.jsx("div",{style:l,children:"基础用法"}),e.jsx("div",{style:{...ae,marginBottom:20},children:e.jsx(_,{trigger:t,children:"你好，欢迎来到动物岛！今天的天气真不错呢～"})})]}),e.jsxs("div",{children:[e.jsx("div",{style:l,children:"保留多行与富内容 (速度 40ms)"}),e.jsx("div",{style:{...ae,flexDirection:"column",alignItems:"flex-start",marginBottom:20,gap:8},children:e.jsxs(_,{speed:40,trigger:t,children:[e.jsx("div",{children:"第一行：钓到石头了！"}),e.jsx("div",{children:"第二行：竟然连这种都能钓起来..."}),e.jsx("div",{style:{color:"#d98324",fontWeight:700},children:"第三行：继续加油吧！"})]})})]}),e.jsx("div",{style:j.row,children:e.jsx(m,{type:"primary",onClick:()=>a(n=>n+1),children:"重新播放"})})]}),e.jsx(D,{code:`import React, { useState } from 'react';
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

export default App;`}),e.jsx(A,{rows:gs})]})},gs=[{prop:"children",desc:"需要逐字显示的内容，支持 ReactNode",type:"ReactNode",defaultVal:"-"},{prop:"speed",desc:"每字间隔 (ms)",type:"number",defaultVal:"90"},{prop:"trigger",desc:"值变化时重新播放",type:"unknown",defaultVal:"-"},{prop:"autoPlay",desc:"是否自动从头开始播放",type:"boolean",defaultVal:"true"},{prop:"onDone",desc:"播放完成回调",type:"() => void",defaultVal:"-"}],bs=()=>e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Divider ",e.jsx("span",{style:w,children:"5 types"})]}),e.jsx("div",{style:l,children:"line-brown"}),e.jsx(G,{type:"line-brown"}),e.jsx("div",{style:l,children:"line-teal"}),e.jsx(G,{type:"line-teal"}),e.jsx("div",{style:l,children:"line-white"}),e.jsx("div",{style:{background:"#333",padding:10},children:e.jsx(G,{type:"line-white"})}),e.jsx("div",{style:l,children:"line-yellow"}),e.jsx(G,{type:"line-yellow"}),e.jsx("div",{style:l,children:"wave-yellow"}),e.jsx(G,{type:"wave-yellow"}),e.jsx(D,{code:`import React from 'react';
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

export default App;`}),e.jsx(A,{rows:ps})]}),Cs=[{prop:"options",desc:"选项列表",type:"SelectOption[]",defaultVal:"-",required:!0},{prop:"value",desc:"当前选中值",type:"string",defaultVal:"-",required:!0},{prop:"onChange",desc:"选中变化回调",type:"(key: string) => void",defaultVal:"-",required:!0},{prop:"placeholder",desc:"占位文本",type:"string",defaultVal:"请选择"},{prop:"disabled",desc:"禁用状态",type:"boolean",defaultVal:"false"}],ws=()=>{const[t,a]=o.useState("fish1"),[n,i]=o.useState(""),[c,s]=o.useState("flower2"),[r,d]=o.useState(""),h=[{key:"fish1",label:"鲈鱼"},{key:"fish2",label:"鲷鱼"},{key:"fish3",label:"草鱼"},{key:"fish4",label:"龙睛鱼"},{key:"fish5",label:"神仙鱼"}],k=[{key:"flower1",label:"樱花"},{key:"flower2",label:"玫瑰"},{key:"flower3",label:"向日葵"},{key:"flower4",label:"薰衣草"},{key:"flower5",label:"郁金香"}],I=[{key:"fruit1",label:"草莓"},{key:"fruit2",label:"蓝莓"},{key:"fruit3",label:"桃子"},{key:"fruit4",label:"樱桃"},{key:"fruit5",label:"猕猴桃"}];return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Select ",e.jsx("span",{style:w,children:"基础用法"})]}),e.jsx("div",{style:l,children:"默认状态"}),e.jsxs("div",{style:{marginBottom:8,fontSize:13,color:"#a08060"},children:["当前选中:"," ",e.jsx("span",{style:{color:"#19c8b9",fontWeight:600},children:h.find(g=>g.key===t)?.label})]}),e.jsx("div",{style:j.demoBox,children:e.jsx($,{options:h,value:t,onChange:a})}),e.jsx("div",{style:l,children:"自定义占位文本"}),e.jsxs("div",{style:ae,children:[e.jsx($,{options:k,value:n,onChange:i,placeholder:"请选择花朵"}),e.jsx($,{options:I,value:r,onChange:d,placeholder:"请选择水果"})]}),e.jsx("div",{style:l,children:"禁用状态"}),e.jsx("div",{style:j.demoBox,children:e.jsx($,{options:k,value:c,onChange:s,disabled:!0})}),e.jsx(D,{code:`import React, { useState } from 'react';
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

export default App;`}),e.jsx(A,{rows:Cs})]})},ks=[{prop:"items",desc:"标签页配置列表",type:"TabItem[]",defaultVal:"-",required:!0},{prop:"defaultActiveKey",desc:"默认激活的标签",type:"string",defaultVal:"第一个标签"},{prop:"activeKey",desc:"受控模式当前激活标签",type:"string",defaultVal:"-"},{prop:"onChange",desc:"标签切换回调",type:"(key: string) => void",defaultVal:"-"},{prop:"className",desc:"自定义类名",type:"string",defaultVal:"-"},{prop:"style",desc:"自定义样式",type:"CSSProperties",defaultVal:"-"},{prop:"leafAnimation",desc:"是否开启叶子动画",type:"boolean",defaultVal:"true"}],Ss=()=>{const[t,a]=o.useState("tab1"),n=[{key:"tab1",label:"岛屿概况",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12},children:"这里是一座无人岛，环境优美，气候宜人。"}),e.jsx("p",{children:"可以钓鱼、捉虫、种植各种植物。"})]})},{key:"tab2",label:"商店",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12},children:"狸然超市营业中！"}),e.jsx("p",{children:"各种商品应有尽有，价格实惠。"})]})},{key:"tab3",label:"服务台",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12},children:"欢迎来到服务台！"}),e.jsx("p",{children:"可以办理各种服务业务。"})]})}];return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:N,children:["Tabs ",e.jsx("span",{style:w,children:"基础用法"})]}),e.jsx("div",{style:l,children:"非受控模式"}),e.jsx("div",{style:{...j.demoBox,padding:0},children:e.jsx(le,{items:[{key:"a",label:"鱼类",children:e.jsx("p",{children:"鲈鱼、鲷鱼、河童..."})},{key:"b",label:"昆虫",children:e.jsx("p",{children:"蝴蝶、瓢虫、蜻蜓..."})},{key:"c",label:"海洋生物",children:e.jsx("p",{children:"海星、珊瑚、小丑鱼..."})}],defaultActiveKey:"a"})}),e.jsx("div",{style:l,children:"受控模式"}),e.jsx("div",{style:{...j.demoBox,padding:0},children:e.jsx(le,{items:n,activeKey:t,onChange:a,leafAnimation:!1})}),e.jsxs("div",{style:{marginTop:16,fontSize:13,color:"#a08060"},children:["当前选中:"," ",e.jsx("span",{style:{color:"#19c8b9",fontWeight:600},children:n.find(i=>i.key===t)?.label})]}),e.jsx(D,{code:`import React, { useState } from 'react';
import { Tabs } from 'animal-island-ui';

const items = [
    { key: 'tab1', label: '岛屿概况', children: <p>内容一</p> },
    { key: 'tab2', label: '商店', children: <p>内容二</p> },
    { key: 'tab3', label: '服务台', children: <p>内容三</p> },
];

const App = () => {
    return (
        <div>
            {/* 非受控模式 */}
            <Tabs items={items} defaultActiveKey="tab1" />
            {/* 受控模式 */}
            <Tabs items={items} activeKey={activeKey} onChange={setActiveKey} leafAnimation={false} />
            {/* 关闭叶子动画 */}
            <Tabs items={items} leafAnimation={false} />
        </div>
    );
};

export default App;`}),e.jsx(A,{rows:ks})]})},Ns={button:{title:"Button 按钮",desc:"按钮组件 — 支持 primary / dashed / text / link 等类型，danger / ghost / loading / disabled 状态，icon 图标，block 块级，三种尺寸"},input:{title:"Input 输入框",desc:"输入框组件 — 支持三种尺寸、clearable 清除、prefix / suffix 前后缀、error / warning 校验状态、disabled 禁用"},switch:{title:"Switch 开关",desc:"开关组件 — 支持受控 / 非受控、自定义文案、small 尺寸、loading 状态"},card:{title:"Card 卡片",desc:"卡片容器组件 — 支持 default / title 两种类型，12 种 NookPhone 背景颜色"},collapse:{title:"Collapse 折叠面板",desc:"折叠面板组件 — 支持展开/收起、默认展开、禁用状态"},cursor:{title:"Cursor 光标",desc:"光标组件 — 自定义手指光标，支持自定义尺寸、点击动画"},time:{title:"Time 时间",desc:"经典 HUD 风格的时间显示组件，实时更新时间"},phone:{title:"Phone 手机",desc:"动森风格手机界面，包含对话框和背包功能"},footer:{title:"Footer 底部装饰",desc:"页面底部装饰图片，支持树和海两种类型"},modal:{title:"Modal 弹窗",desc:"模态弹窗组件 — SVG 有机形状裁切、支持标题、关闭按钮、自定义 Footer、ESC / 遮罩关闭"},typewriter:{title:"Typewriter 打字机",desc:"打字机组件 — 按字符逐个显示文本，支持多行与 ReactNode 富内容，不改变原有样式"},"divider-comp":{title:"Divider 分割线",desc:"分割线组件 — 装饰性分割线"},icon:{title:"Icon 图标",desc:"图标组件 — 动森风格图标集，包含 10 个可爱图标，支持自定义尺寸"},select:{title:"Select 选择器",desc:"下拉选择器组件 — 支持自定义选项列表，高亮当前选中项"},tabs:{title:"Tabs 标签页",desc:"标签页组件 — 支持受控/非受控模式切换"},checkbox:{title:"Checkbox 多选框",desc:"多选框组件 — 支持受控/非受控、水平/垂直排列、三种尺寸、禁用单项或全部禁用"},codeblock:{title:"CodeBlock 代码高亮",desc:"代码高亮组件 — 语法高亮显示，支持自定义样式和类名"}},Ds={button:ms,input:hs,switch:us,card:ys,collapse:xs,cursor:fs,time:qa,phone:Qa,footer:Za,modal:js,typewriter:vs,"divider-comp":bs,icon:$a,select:ws,tabs:Ss,checkbox:ts,codeblock:ss},Vs=({activeKey:t})=>{const a=Ds[t],n=Ns[t];return!a||!n?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontSize:24,fontWeight:700,color:"#794f27",marginBottom:12,lineHeight:1.4},children:n.title}),e.jsx("div",{style:{...j.pageDesc,minHeight:40},children:e.jsx(_,{trigger:t,speed:30,children:n.desc},t)}),e.jsx(a,{})]})};export{Ns as PAGE_INFO,Vs as default};
