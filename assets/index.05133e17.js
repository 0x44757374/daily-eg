import{t as f,d as Ee,c,a as _e,o as ve,i as d,b as S,e as N,f as F,S as xe,r as Se}from"./vendor.0e146b85.js";const Ne=function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function h(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=h(n);fetch(n.href,i)}};Ne();const Ie="_App_1wybh_5",Oe="_titleEg_1wybh_16",ke="_hidden_1wybh_27",Pe="_shrinkOut_1wybh_31",Le="_popIn_1wybh_36",Te="_fadeIn_1wybh_42",Be="_fadeOut_1wybh_47",He="_hideOnHover_1wybh_58",Re="_showOnHover_1wybh_64",We="_h1_1wybh_74",Ge="_header_1wybh_84",Me="_body_1wybh_94",Ae="_spoiler_1wybh_104",De="_icon_1wybh_111",qe="_shield_1wybh_127",Fe="_egGrid_1wybh_138",Ke="_egRow_1wybh_148",je="_Controls_1wybh_161",ze="_row_1wybh_187",Je="_EgButton_1wybh_238",Qe="_EgImage_1wybh_263",Ue="_wiggle_1wybh_1",Ve="_EgIcon_1wybh_291",Xe="_Content_1wybh_306",Ye="_CopyPasta_1wybh_319",Ze="_PastaWrapper_1wybh_335",et="_IconButton_1wybh_361";var t={App:Ie,titleEg:Oe,hidden:ke,shrinkOut:Pe,popIn:Le,fadeIn:Te,fadeOut:Be,hideOnHover:He,showOnHover:Re,h1:We,header:Ge,body:Me,spoiler:Ae,icon:De,shield:qe,egGrid:Fe,egRow:Ke,Controls:je,row:ze,EgButton:Je,EgImage:Qe,wiggle:Ue,EgIcon:Ve,Content:Xe,CopyPasta:Ye,PastaWrapper:Ze,IconButton:et};const tt=f("<div><div></div><div></div></div>"),ce=f("<div></div>"),nt=f("<textarea></textarea>"),it=f('<div><header><div><h1>Daily <!> Generator</h1></div></header><div><div><div><div><span class="material-icons">keyboard_arrow_up</span><div><label for="height">Height</label><input id="height" type="number" maxlength="2"></div><span class="material-icons">keyboard_arrow_down</span></div><div><span class="material-icons">keyboard_arrow_up</span><div><label for="width">Width</label><input id="width" type="number" maxlength="2"></div><span class="material-icons">keyboard_arrow_down</span></div></div> <div><div></div><div><span class="material-icons">refresh</span></div></div></div><div><div><h3> Copypasta</h3></div><div><div><h3> Pasta Text</h3></div></div></div></div> </div>'),st=f("<div><div></div><div>:eg:</div></div>"),ot=f('<span class="material-icons">content_copy</span>'),lt=f('<span class="material-icons"></span>'),rt=({eg:u=!1,...v})=>{const[h,a]=c(!1),[n,i]=c(t.shrinkOut),[s,o]=c(t.fadeIn+" "+t.shield),[l,g]=c(S.symbols.x);return _e(ve(h,()=>{h()&&(g(u?S.food.egg:S.symbols.x),o(t.fadeOut),i(t.popIn+" "+t.icon))})),(()=>{const y=tt.cloneNode(!0),b=y.firstChild,T=b.nextSibling;return y.$$click=()=>a(!0),d(b,l),N(r=>{const I=t.spoiler,B=n(),w=s();return I!==r._v$&&(y.className=r._v$=I),B!==r._v$2&&(b.className=r._v$2=B),w!==r._v$3&&(T.className=r._v$3=w),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),y})()},dt=({height:u,width:v,position:h})=>{let a="";const n=[];for(var i=0;i<u;i++){const o={element:()=>(()=>{const l=ce.cloneNode(!0);return d(l,()=>o.children),N(()=>l.className=t.egRow),l})(),children:[]};for(var s=0;s<v;s++){const l=h[0]===s&&h[1]===i;o.children.push(F(rt,{eg:l})),a+=`||${l?":eg:":":x:"}||`}a+=`
`,n.push(o.element())}return{grid:(()=>{const o=ce.cloneNode(!0);return d(o,n),N(()=>o.className=t.egGrid),o})(),text:a}},at=()=>{const[u,v]=c(t.popIn),[h,a]=c(t.fadeOut),n=()=>{v(t.shrinkOut),a(t.fadeIn)},i=()=>{a(t.fadeOut),v(t.popIn)},[s,o]=c(6),[l,g]=c(6),[y,b]=c(!1),T=()=>{b($=>!$)},[r,I]=c({grid:[],text:""});_e(ve([s,l,y],()=>{const $=[Math.floor(Math.random()*l()),Math.floor(Math.random()*s())];I(dt({height:s(),width:l(),position:$}))}));const[w,he]=c(!0),O=($,p)=>{$(H=>H+p)};return(()=>{const $=it.cloneNode(!0),p=$.firstChild,H=p.firstChild,R=H.firstChild,$e=R.firstChild,K=$e.nextSibling;K.nextSibling;const j=p.nextSibling,W=j.firstChild,G=W.firstChild,z=G.firstChild,J=z.firstChild,Q=J.nextSibling,ge=Q.firstChild,U=ge.nextSibling,fe=Q.nextSibling,ue=z.nextSibling,V=ue.firstChild,X=V.nextSibling,ye=X.firstChild,Y=ye.nextSibling,me=X.nextSibling,be=G.nextSibling,M=be.nextSibling,A=M.firstChild,we=A.nextSibling,D=W.nextSibling,k=D.firstChild,Z=k.firstChild,pe=Z.firstChild,P=k.nextSibling,q=P.firstChild,ee=q.firstChild,Ce=ee.firstChild;return d(R,()=>(()=>{const e=st.cloneNode(!0),m=e.firstChild,L=m.nextSibling;return e.addEventListener("pointerleave",i),e.addEventListener("pointerenter",n),d(m,()=>S.food.egg),N(_=>{const C=t.titleEg,E=u(),x=h();return C!==_._v$19&&(e.className=_._v$19=C),E!==_._v$20&&(m.className=_._v$20=E),x!==_._v$21&&(L.className=_._v$21=x),_},{_v$19:void 0,_v$20:void 0,_v$21:void 0}),e})(),K),J.$$click=()=>{O(o,1)},U.addEventListener("change",({currentTarget:{valueAsNumber:e}})=>{if(e>20){o(20);return}e&&o(e)}),fe.$$click=()=>{O(o,-1)},V.$$click=()=>{O(g,1)},Y.addEventListener("change",({currentTarget:{valueAsNumber:e}})=>{if(e>20){g(20);return}g(e)}),me.$$click=()=>{O(g,-1)},M.$$click=T,d(A,()=>S.food.egg),k.$$click=()=>{try{navigator.clipboard.writeText(r().text),alert("Daily Eg Copied to Clipboard")}catch{try{window.prompt("Copy to clipboard: Ctrl+C, Enter",r().text)}catch{}}},d(Z,ot.cloneNode(!0),pe),d(D,()=>r().grid,P),q.$$click=()=>{he(e=>!e)},d(ee,()=>(()=>{const e=lt.cloneNode(!0);return d(e,()=>w()?"visibility":"visibility_off"),e})(),Ce),d(P,F(xe,{get when(){return w()},get children(){const e=nt.cloneNode(!0);return d(e,()=>r().text),e}}),null),N(e=>{const m=t.App,L=t.header,_=t.h1,C=t.body,E=t.row,x=t.Controls,te=s(),ne=l(),ie=t.EgButton,se=t.EgImage,oe=t.EgIcon,le=t.Content,re=t.CopyPasta,de=t.PastaWrapper,ae=t.IconButton;return m!==e._v$4&&($.className=e._v$4=m),L!==e._v$5&&(p.className=e._v$5=L),_!==e._v$6&&(R.className=e._v$6=_),C!==e._v$7&&(j.className=e._v$7=C),E!==e._v$8&&(W.className=e._v$8=E),x!==e._v$9&&(G.className=e._v$9=x),te!==e._v$10&&(U.value=e._v$10=te),ne!==e._v$11&&(Y.value=e._v$11=ne),ie!==e._v$12&&(M.className=e._v$12=ie),se!==e._v$13&&(A.className=e._v$13=se),oe!==e._v$14&&(we.className=e._v$14=oe),le!==e._v$15&&(D.className=e._v$15=le),re!==e._v$16&&(k.className=e._v$16=re),de!==e._v$17&&(P.className=e._v$17=de),ae!==e._v$18&&(q.className=e._v$18=ae),e},{_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),$})()};Ee(["click"]);Se(()=>F(at,{}),document.getElementById("root"));
