"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[96],{42110:function(Et,Oe){var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};Oe.Z=m},48096:function(Et,Oe,m){m.d(Oe,{Z:function(){return Ya}});var a=m(67294),Rt=m(62208),wt=m(48001),re=m(87462),It=m(42110),Zt=m(93771),Lt=function(t,n){return a.createElement(Zt.Z,(0,re.Z)({},t,{ref:n,icon:It.Z}))},Nt=a.forwardRef(Lt),Mt=Nt,Ot=m(93967),Q=m.n(Ot),J=m(4942),ee=m(1413),N=m(97685),ze=m(71002),ye=m(91),Ke=m(21770),zt=m(31131),Pe=(0,a.createContext)(null),Xe=m(74902),Ae=m(9220),At=m(66680),$e=m(42550),_e=m(75164),_t=function(t){var n=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,d=s===void 0?"center":s,v=(0,a.useState)(),u=(0,N.Z)(v,2),b=u[0],I=u[1],z=(0,a.useRef)(),R=a.useCallback(function(g){return typeof o=="function"?o(g):typeof o=="number"?o:g},[o]);function M(){_e.Z.cancel(z.current)}return(0,a.useEffect)(function(){var g={};if(n)if(r){g.width=R(n.width);var f=i?"right":"left";d==="start"&&(g[f]=n[f]),d==="center"&&(g[f]=n[f]+n.width/2,g.transform=i?"translateX(50%)":"translateX(-50%)"),d==="end"&&(g[f]=n[f]+n.width,g.transform="translateX(-100%)")}else g.height=R(n.height),d==="start"&&(g.top=n.top),d==="center"&&(g.top=n.top+n.height/2,g.transform="translateY(-50%)"),d==="end"&&(g.top=n.top+n.height,g.transform="translateY(-100%)");return M(),z.current=(0,_e.Z)(function(){I(g)}),M},[n,r,i,d,R]),{style:b}},Bt=_t,Fe={width:0,height:0,left:0,top:0};function Dt(e,t,n){return(0,a.useMemo)(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Fe,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,d=t.get(s);if(!d){var v;d=t.get((v=e[o-1])===null||v===void 0?void 0:v.key)||Fe}var u=i.get(s)||(0,ee.Z)({},d);u.right=c-u.left-u.width,i.set(s,u)}return i},[e.map(function(r){return r.key}).join("_"),t,n])}function Ue(e,t){var n=a.useRef(e),r=a.useState({}),i=(0,N.Z)(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(n.current):o;s!==n.current&&t(s,n.current),n.current=s,l({})}return[n.current,c]}var Wt=.1,Ye=.01,Ee=20,Qe=Math.pow(.995,Ee);function Ht(e,t){var n=(0,a.useState)(),r=(0,N.Z)(n,2),i=r[0],l=r[1],c=(0,a.useState)(0),o=(0,N.Z)(c,2),s=o[0],d=o[1],v=(0,a.useState)(0),u=(0,N.Z)(v,2),b=u[0],I=u[1],z=(0,a.useState)(),R=(0,N.Z)(z,2),M=R[0],g=R[1],f=(0,a.useRef)();function w(p){var Z=p.touches[0],C=Z.screenX,x=Z.screenY;l({x:C,y:x}),window.clearInterval(f.current)}function L(p){if(i){p.preventDefault();var Z=p.touches[0],C=Z.screenX,x=Z.screenY;l({x:C,y:x});var y=C-i.x,T=x-i.y;t(y,T);var F=Date.now();d(F),I(F-s),g({x:y,y:T})}}function _(){if(i&&(l(null),g(null),M)){var p=M.x/b,Z=M.y/b,C=Math.abs(p),x=Math.abs(Z);if(Math.max(C,x)<Wt)return;var y=p,T=Z;f.current=window.setInterval(function(){if(Math.abs(y)<Ye&&Math.abs(T)<Ye){window.clearInterval(f.current);return}y*=Qe,T*=Qe,t(y*Ee,T*Ee)},Ee)}}var H=(0,a.useRef)();function B(p){var Z=p.deltaX,C=p.deltaY,x=0,y=Math.abs(Z),T=Math.abs(C);y===T?x=H.current==="x"?Z:C:y>T?(x=Z,H.current="x"):(x=C,H.current="y"),t(-x,-x)&&p.preventDefault()}var $=(0,a.useRef)(null);$.current={onTouchStart:w,onTouchMove:L,onTouchEnd:_,onWheel:B},a.useEffect(function(){function p(y){$.current.onTouchStart(y)}function Z(y){$.current.onTouchMove(y)}function C(y){$.current.onTouchEnd(y)}function x(y){$.current.onWheel(y)}return document.addEventListener("touchmove",Z,{passive:!1}),document.addEventListener("touchend",C,{passive:!1}),e.current.addEventListener("touchstart",p,{passive:!1}),e.current.addEventListener("wheel",x),function(){document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",C)}},[])}var kt=m(8410);function Je(e){var t=(0,a.useState)(0),n=(0,N.Z)(t,2),r=n[0],i=n[1],l=(0,a.useRef)(0),c=(0,a.useRef)();return c.current=e,(0,kt.o)(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function jt(e){var t=(0,a.useRef)([]),n=(0,a.useState)({}),r=(0,N.Z)(n,2),i=r[1],l=(0,a.useRef)(typeof e=="function"?e():e),c=Je(function(){var s=l.current;t.current.forEach(function(d){s=d(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var qe={width:0,height:0,left:0,top:0,right:0};function Gt(e,t,n,r,i,l,c){var o=c.tabs,s=c.tabPosition,d=c.rtl,v,u,b;return["top","bottom"].includes(s)?(v="width",u=d?"right":"left",b=Math.abs(n)):(v="height",u="top",b=-n),(0,a.useMemo)(function(){if(!o.length)return[0,0];for(var I=o.length,z=I,R=0;R<I;R+=1){var M=e.get(o[R].key)||qe;if(M[u]+M[v]>b+t){z=R-1;break}}for(var g=0,f=I-1;f>=0;f-=1){var w=e.get(o[f].key)||qe;if(w[u]<b){g=f+1;break}}return g>=z?[0,0]:[g,z]},[e,t,r,i,l,b,s,o.map(function(I){return I.key}).join("_"),d])}function et(e){var t;return e instanceof Map?(t={},e.forEach(function(n,r){t[r]=n})):t=e,JSON.stringify(t)}var Vt="TABS_DQ";function tt(e){return String(e).replace(/"/g,Vt)}function at(e,t,n,r){return!(!n||r||e===!1||e===void 0&&(t===!1||t===null))}var Kt=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),nt=Kt,Xt=a.forwardRef(function(e,t){var n=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return(0,ze.Z)(i)==="object"&&!a.isValidElement(i)?c=i:c.right=i,n==="right"&&(l=c.right),n==="left"&&(l=c.left),l?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),rt=Xt,Ft=m(40228),te=m(15105),Ut=te.Z.ESC,Yt=te.Z.TAB;function Qt(e){var t=e.visible,n=e.triggerRef,r=e.onVisibleChange,i=e.autoFocus,l=e.overlayRef,c=a.useRef(!1),o=function(){if(t){var u,b;(u=n.current)===null||u===void 0||(b=u.focus)===null||b===void 0||b.call(u),r==null||r(!1)}},s=function(){var u;return(u=l.current)!==null&&u!==void 0&&u.focus?(l.current.focus(),c.current=!0,!0):!1},d=function(u){switch(u.keyCode){case Ut:o();break;case Yt:{var b=!1;c.current||(b=s()),b?u.preventDefault():o();break}}};a.useEffect(function(){return t?(window.addEventListener("keydown",d),i&&(0,_e.Z)(s,3),function(){window.removeEventListener("keydown",d),c.current=!1}):function(){c.current=!1}},[t])}var Jt=(0,a.forwardRef)(function(e,t){var n=e.overlay,r=e.arrow,i=e.prefixCls,l=(0,a.useMemo)(function(){var o;return typeof n=="function"?o=n():o=n,o},[n]),c=(0,$e.sQ)(t,l==null?void 0:l.ref);return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:"".concat(i,"-arrow")}),a.cloneElement(l,{ref:(0,$e.Yr)(l)?c:void 0}))}),qt=Jt,be={adjustX:1,adjustY:1},me=[0,0],ea={topLeft:{points:["bl","tl"],overflow:be,offset:[0,-4],targetOffset:me},top:{points:["bc","tc"],overflow:be,offset:[0,-4],targetOffset:me},topRight:{points:["br","tr"],overflow:be,offset:[0,-4],targetOffset:me},bottomLeft:{points:["tl","bl"],overflow:be,offset:[0,4],targetOffset:me},bottom:{points:["tc","bc"],overflow:be,offset:[0,4],targetOffset:me},bottomRight:{points:["tr","br"],overflow:be,offset:[0,4],targetOffset:me}},ta=ea,aa=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function na(e,t){var n,r=e.arrow,i=r===void 0?!1:r,l=e.prefixCls,c=l===void 0?"rc-dropdown":l,o=e.transitionName,s=e.animation,d=e.align,v=e.placement,u=v===void 0?"bottomLeft":v,b=e.placements,I=b===void 0?ta:b,z=e.getPopupContainer,R=e.showAction,M=e.hideAction,g=e.overlayClassName,f=e.overlayStyle,w=e.visible,L=e.trigger,_=L===void 0?["hover"]:L,H=e.autoFocus,B=e.overlay,$=e.children,p=e.onVisibleChange,Z=(0,ye.Z)(e,aa),C=a.useState(),x=(0,N.Z)(C,2),y=x[0],T=x[1],F="visible"in e?w:y,ne=a.useRef(null),h=a.useRef(null),X=a.useRef(null);a.useImperativeHandle(t,function(){return ne.current});var ae=function(W){T(W),p==null||p(W)};Qt({visible:F,triggerRef:X,onVisibleChange:ae,autoFocus:H,overlayRef:h});var j=function(W){var Y=e.onOverlayClick;T(!1),Y&&Y(W)},U=function(){return a.createElement(qt,{ref:h,overlay:B,prefixCls:c,arrow:i})},ie=function(){return typeof B=="function"?U:U()},E=function(){var W=e.minOverlayWidthMatchTrigger,Y=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?W:!Y},A=function(){var W=e.openClassName;return W!==void 0?W:"".concat(c,"-open")},G=a.cloneElement($,{className:Q()((n=$.props)===null||n===void 0?void 0:n.className,F&&A()),ref:(0,$e.Yr)($)?(0,$e.sQ)(X,$.ref):void 0}),V=M;return!V&&_.indexOf("contextMenu")!==-1&&(V=["click"]),a.createElement(Ft.Z,(0,re.Z)({builtinPlacements:I},Z,{prefixCls:c,ref:ne,popupClassName:Q()(g,(0,J.Z)({},"".concat(c,"-show-arrow"),i)),popupStyle:f,action:_,showAction:R,hideAction:V,popupPlacement:u,popupAlign:d,popupTransitionName:o,popupAnimation:s,popupVisible:F,stretch:E()?"minWidth":"",popup:ie(),onPopupVisibleChange:ae,onPopupClick:j,getPopupContainer:z}),G)}var ra=a.forwardRef(na),ia=ra,it=m(72512),oa=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.more,s=o===void 0?{}:o,d=e.style,v=e.className,u=e.editable,b=e.tabBarGutter,I=e.rtl,z=e.removeAriaLabel,R=e.onTabClick,M=e.getPopupContainer,g=e.popupClassName,f=(0,a.useState)(!1),w=(0,N.Z)(f,2),L=w[0],_=w[1],H=(0,a.useState)(null),B=(0,N.Z)(H,2),$=B[0],p=B[1],Z=s.icon,C=Z===void 0?"More":Z,x="".concat(r,"-more-popup"),y="".concat(n,"-dropdown"),T=$!==null?"".concat(x,"-").concat($):null,F=l==null?void 0:l.dropdownAriaLabel;function ne(E,A){E.preventDefault(),E.stopPropagation(),u.onEdit("remove",{key:A,event:E})}var h=a.createElement(it.ZP,{onClick:function(A){var G=A.key,V=A.domEvent;R(G,V),_(!1)},prefixCls:"".concat(y,"-menu"),id:x,tabIndex:-1,role:"listbox","aria-activedescendant":T,selectedKeys:[$],"aria-label":F!==void 0?F:"expanded dropdown"},i.map(function(E){var A=E.closable,G=E.disabled,V=E.closeIcon,k=E.key,W=E.label,Y=at(A,V,u,G);return a.createElement(it.sN,{key:k,id:"".concat(x,"-").concat(k),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(k),disabled:G},a.createElement("span",null,W),Y&&a.createElement("button",{type:"button","aria-label":z||"remove",tabIndex:0,className:"".concat(y,"-menu-item-remove"),onClick:function(ce){ce.stopPropagation(),ne(ce,k)}},V||u.removeIcon||"\xD7"))}));function X(E){for(var A=i.filter(function(Y){return!Y.disabled}),G=A.findIndex(function(Y){return Y.key===$})||0,V=A.length,k=0;k<V;k+=1){G=(G+E+V)%V;var W=A[G];if(!W.disabled){p(W.key);return}}}function ae(E){var A=E.which;if(!L){[te.Z.DOWN,te.Z.SPACE,te.Z.ENTER].includes(A)&&(_(!0),E.preventDefault());return}switch(A){case te.Z.UP:X(-1),E.preventDefault();break;case te.Z.DOWN:X(1),E.preventDefault();break;case te.Z.ESC:_(!1);break;case te.Z.SPACE:case te.Z.ENTER:$!==null&&R($,E);break}}(0,a.useEffect)(function(){var E=document.getElementById(T);E&&E.scrollIntoView&&E.scrollIntoView(!1)},[$]),(0,a.useEffect)(function(){L||p(null)},[L]);var j=(0,J.Z)({},I?"marginRight":"marginLeft",b);i.length||(j.visibility="hidden",j.order=1);var U=Q()((0,J.Z)({},"".concat(y,"-rtl"),I)),ie=c?null:a.createElement(ia,(0,re.Z)({prefixCls:y,overlay:h,visible:i.length?L:!1,onVisibleChange:_,overlayClassName:Q()(U,g),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:M},s),a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:j,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":x,id:"".concat(r,"-more"),"aria-expanded":L,onKeyDown:ae},C));return a.createElement("div",{className:Q()("".concat(n,"-nav-operations"),v),style:d,ref:t},ie,a.createElement(nt,{prefixCls:n,locale:l,editable:u}))}),la=a.memo(oa,function(e,t){return t.tabMoving}),ca=function(t){var n=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,d=l.closeIcon,v=l.icon,u=t.closable,b=t.renderWrapper,I=t.removeAriaLabel,z=t.editable,R=t.onClick,M=t.onFocus,g=t.style,f="".concat(n,"-tab"),w=at(u,d,z,s);function L($){s||R($)}function _($){$.preventDefault(),$.stopPropagation(),z.onEdit("remove",{key:c,event:$})}var H=a.useMemo(function(){return v&&typeof o=="string"?a.createElement("span",null,o):o},[o,v]),B=a.createElement("div",{key:c,"data-node-key":tt(c),className:Q()(f,(0,J.Z)((0,J.Z)((0,J.Z)({},"".concat(f,"-with-remove"),w),"".concat(f,"-active"),i),"".concat(f,"-disabled"),s)),style:g,onClick:L},a.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(f,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(p){p.stopPropagation(),L(p)},onKeyDown:function(p){[te.Z.SPACE,te.Z.ENTER].includes(p.which)&&(p.preventDefault(),L(p))},onFocus:M},v&&a.createElement("span",{className:"".concat(f,"-icon")},v),o&&H),w&&a.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(f,"-remove"),onClick:function(p){p.stopPropagation(),_(p)}},d||z.removeIcon||"\xD7"));return b?b(B):B},sa=ca,da=function(t,n){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,d=o.height,v=o.x,u=o.y;return Math.abs(s-r)<1?[s,d,v-n.x,u-n.y]:[r,i,c,l]},ge=function(t){var n=t.current||{},r=n.offsetWidth,i=r===void 0?0:r,l=n.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,d=o.height;if(Math.abs(s-i)<1)return[s,d]}return[i,c]},Re=function(t,n){return t[n?0:1]},ua=a.forwardRef(function(e,t){var n=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,d=e.editable,v=e.locale,u=e.tabPosition,b=e.tabBarGutter,I=e.children,z=e.onTabClick,R=e.onTabScroll,M=e.indicator,g=a.useContext(Pe),f=g.prefixCls,w=g.tabs,L=(0,a.useRef)(null),_=(0,a.useRef)(null),H=(0,a.useRef)(null),B=(0,a.useRef)(null),$=(0,a.useRef)(null),p=(0,a.useRef)(null),Z=(0,a.useRef)(null),C=u==="top"||u==="bottom",x=Ue(0,function(D,P){C&&R&&R({direction:D>P?"left":"right"})}),y=(0,N.Z)(x,2),T=y[0],F=y[1],ne=Ue(0,function(D,P){!C&&R&&R({direction:D>P?"top":"bottom"})}),h=(0,N.Z)(ne,2),X=h[0],ae=h[1],j=(0,a.useState)([0,0]),U=(0,N.Z)(j,2),ie=U[0],E=U[1],A=(0,a.useState)([0,0]),G=(0,N.Z)(A,2),V=G[0],k=G[1],W=(0,a.useState)([0,0]),Y=(0,N.Z)(W,2),he=Y[0],ce=Y[1],ue=(0,a.useState)([0,0]),pe=(0,N.Z)(ue,2),O=pe[0],le=pe[1],Ce=jt(new Map),ut=(0,N.Z)(Ce,2),Qa=ut[0],Ja=ut[1],we=Dt(w,Qa,V[0]),Be=Re(ie,C),xe=Re(V,C),De=Re(he,C),vt=Re(O,C),ft=Be<xe+De,oe=ft?Be-vt:Be-De,qa="".concat(f,"-nav-operations-hidden"),se=0,ve=0;C&&o?(se=0,ve=Math.max(0,xe-oe)):(se=Math.min(0,oe-xe),ve=0);function We(D){return D<se?se:D>ve?ve:D}var He=(0,a.useRef)(null),en=(0,a.useState)(),bt=(0,N.Z)(en,2),Ie=bt[0],mt=bt[1];function ke(){mt(Date.now())}function je(){He.current&&clearTimeout(He.current)}Ht(B,function(D,P){function K(q,fe){q(function(de){var Ne=We(de+fe);return Ne})}return ft?(C?K(F,D):K(ae,P),je(),ke(),!0):!1}),(0,a.useEffect)(function(){return je(),Ie&&(He.current=setTimeout(function(){mt(0)},100)),je},[Ie]);var tn=Gt(we,oe,C?T:X,xe,De,vt,(0,ee.Z)((0,ee.Z)({},e),{},{tabs:w})),gt=(0,N.Z)(tn,2),an=gt[0],nn=gt[1],ht=(0,At.Z)(function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,P=we.get(D)||{width:0,height:0,left:0,right:0,top:0};if(C){var K=T;o?P.right<T?K=P.right:P.right+P.width>T+oe&&(K=P.right+P.width-oe):P.left<-T?K=-P.left:P.left+P.width>-T+oe&&(K=-(P.left+P.width-oe)),ae(0),F(We(K))}else{var q=X;P.top<-X?q=-P.top:P.top+P.height>-X+oe&&(q=-(P.top+P.height-oe)),F(0),ae(We(q))}}),Ze={};u==="top"||u==="bottom"?Ze[o?"marginRight":"marginLeft"]=b:Ze.marginTop=b;var pt=w.map(function(D,P){var K=D.key;return a.createElement(sa,{id:i,prefixCls:f,key:K,tab:D,style:P===0?void 0:Ze,closable:D.closable,editable:d,active:K===c,renderWrapper:I,removeAriaLabel:v==null?void 0:v.removeAriaLabel,onClick:function(fe){z(K,fe)},onFocus:function(){ht(K),ke(),B.current&&(o||(B.current.scrollLeft=0),B.current.scrollTop=0)}})}),yt=function(){return Ja(function(){var P,K=new Map,q=(P=$.current)===null||P===void 0?void 0:P.getBoundingClientRect();return w.forEach(function(fe){var de,Ne=fe.key,Pt=(de=$.current)===null||de===void 0?void 0:de.querySelector('[data-node-key="'.concat(tt(Ne),'"]'));if(Pt){var sn=da(Pt,q),Me=(0,N.Z)(sn,4),dn=Me[0],un=Me[1],vn=Me[2],fn=Me[3];K.set(Ne,{width:dn,height:un,left:vn,top:fn})}}),K})};(0,a.useEffect)(function(){yt()},[w.map(function(D){return D.key}).join("_")]);var Le=Je(function(){var D=ge(L),P=ge(_),K=ge(H);E([D[0]-P[0]-K[0],D[1]-P[1]-K[1]]);var q=ge(Z);ce(q);var fe=ge(p);le(fe);var de=ge($);k([de[0]-q[0],de[1]-q[1]]),yt()}),rn=w.slice(0,an),on=w.slice(nn+1),$t=[].concat((0,Xe.Z)(rn),(0,Xe.Z)(on)),St=we.get(c),ln=Bt({activeTabOffset:St,horizontal:C,indicator:M,rtl:o}),cn=ln.style;(0,a.useEffect)(function(){ht()},[c,se,ve,et(St),et(we),C]),(0,a.useEffect)(function(){Le()},[o]);var Ct=!!$t.length,Te="".concat(f,"-nav-wrap"),Ge,Ve,xt,Tt;return C?o?(Ve=T>0,Ge=T!==ve):(Ge=T<0,Ve=T!==se):(xt=X<0,Tt=X!==se),a.createElement(Ae.Z,{onResize:Le},a.createElement("div",{ref:(0,$e.x1)(t,L),role:"tablist",className:Q()("".concat(f,"-nav"),n),style:r,onKeyDown:function(){ke()}},a.createElement(rt,{ref:_,position:"left",extra:s,prefixCls:f}),a.createElement(Ae.Z,{onResize:Le},a.createElement("div",{className:Q()(Te,(0,J.Z)((0,J.Z)((0,J.Z)((0,J.Z)({},"".concat(Te,"-ping-left"),Ge),"".concat(Te,"-ping-right"),Ve),"".concat(Te,"-ping-top"),xt),"".concat(Te,"-ping-bottom"),Tt)),ref:B},a.createElement(Ae.Z,{onResize:Le},a.createElement("div",{ref:$,className:"".concat(f,"-nav-list"),style:{transform:"translate(".concat(T,"px, ").concat(X,"px)"),transition:Ie?"none":void 0}},pt,a.createElement(nt,{ref:Z,prefixCls:f,locale:v,editable:d,style:(0,ee.Z)((0,ee.Z)({},pt.length===0?void 0:Ze),{},{visibility:Ct?"hidden":null})}),a.createElement("div",{className:Q()("".concat(f,"-ink-bar"),(0,J.Z)({},"".concat(f,"-ink-bar-animated"),l.inkBar)),style:cn}))))),a.createElement(la,(0,re.Z)({},e,{removeAriaLabel:v==null?void 0:v.removeAriaLabel,ref:p,prefixCls:f,tabs:$t,className:!Ct&&qa,tabMoving:!!Ie})),a.createElement(rt,{ref:H,position:"right",extra:s,prefixCls:f})))}),ot=ua,va=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return a.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:Q()(n,c&&"".concat(n,"-active"),r),ref:t},s)}),lt=va,fa=["renderTabBar"],ba=["label","key"],ma=function(t){var n=t.renderTabBar,r=(0,ye.Z)(t,fa),i=a.useContext(Pe),l=i.tabs;if(n){var c=(0,ee.Z)((0,ee.Z)({},r),{},{panes:l.map(function(o){var s=o.label,d=o.key,v=(0,ye.Z)(o,ba);return a.createElement(lt,(0,re.Z)({tab:s,key:d,tabKey:d},v))})});return n(c,ot)}return a.createElement(ot,r)},ga=ma,ha=m(82225),pa=["key","forceRender","style","className","destroyInactiveTabPane"],ya=function(t){var n=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=a.useContext(Pe),s=o.prefixCls,d=o.tabs,v=i.tabPane,u="".concat(s,"-tabpane");return a.createElement("div",{className:Q()("".concat(s,"-content-holder"))},a.createElement("div",{className:Q()("".concat(s,"-content"),"".concat(s,"-content-").concat(l),(0,J.Z)({},"".concat(s,"-content-animated"),v))},d.map(function(b){var I=b.key,z=b.forceRender,R=b.style,M=b.className,g=b.destroyInactiveTabPane,f=(0,ye.Z)(b,pa),w=I===r;return a.createElement(ha.ZP,(0,re.Z)({key:I,visible:w,forceRender:z,removeOnLeave:!!(c||g),leavedClassName:"".concat(u,"-hidden")},i.tabPaneMotion),function(L,_){var H=L.style,B=L.className;return a.createElement(lt,(0,re.Z)({},f,{prefixCls:u,id:n,tabKey:I,animated:v,active:w,style:(0,ee.Z)((0,ee.Z)({},R),H),className:Q()(M,B),ref:_}))})})))},$a=ya,bn=m(80334);function Sa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,ee.Z)({inkBar:!0},(0,ze.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var Ca=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],ct=0,xa=a.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,d=e.defaultActiveKey,v=e.editable,u=e.animated,b=e.tabPosition,I=b===void 0?"top":b,z=e.tabBarGutter,R=e.tabBarStyle,M=e.tabBarExtraContent,g=e.locale,f=e.more,w=e.destroyInactiveTabPane,L=e.renderTabBar,_=e.onChange,H=e.onTabClick,B=e.onTabScroll,$=e.getPopupContainer,p=e.popupClassName,Z=e.indicator,C=(0,ye.Z)(e,Ca),x=a.useMemo(function(){return(c||[]).filter(function(O){return O&&(0,ze.Z)(O)==="object"&&"key"in O})},[c]),y=o==="rtl",T=Sa(u),F=(0,a.useState)(!1),ne=(0,N.Z)(F,2),h=ne[0],X=ne[1];(0,a.useEffect)(function(){X((0,zt.Z)())},[]);var ae=(0,Ke.Z)(function(){var O;return(O=x[0])===null||O===void 0?void 0:O.key},{value:s,defaultValue:d}),j=(0,N.Z)(ae,2),U=j[0],ie=j[1],E=(0,a.useState)(function(){return x.findIndex(function(O){return O.key===U})}),A=(0,N.Z)(E,2),G=A[0],V=A[1];(0,a.useEffect)(function(){var O=x.findIndex(function(Ce){return Ce.key===U});if(O===-1){var le;O=Math.max(0,Math.min(G,x.length-1)),ie((le=x[O])===null||le===void 0?void 0:le.key)}V(O)},[x.map(function(O){return O.key}).join("_"),U,G]);var k=(0,Ke.Z)(null,{value:n}),W=(0,N.Z)(k,2),Y=W[0],he=W[1];(0,a.useEffect)(function(){n||(he("rc-tabs-".concat(ct)),ct+=1)},[]);function ce(O,le){H==null||H(O,le);var Ce=O!==U;ie(O),Ce&&(_==null||_(O))}var ue={id:Y,activeKey:U,animated:T,tabPosition:I,rtl:y,mobile:h},pe=(0,ee.Z)((0,ee.Z)({},ue),{},{editable:v,locale:g,more:f,tabBarGutter:z,onTabClick:ce,onTabScroll:B,extra:M,style:R,panes:null,getPopupContainer:$,popupClassName:p,indicator:Z});return a.createElement(Pe.Provider,{value:{tabs:x,prefixCls:i}},a.createElement("div",(0,re.Z)({ref:t,id:n,className:Q()(i,"".concat(i,"-").concat(I),(0,J.Z)((0,J.Z)((0,J.Z)({},"".concat(i,"-mobile"),h),"".concat(i,"-editable"),v),"".concat(i,"-rtl"),y),l)},C),a.createElement(ga,(0,re.Z)({},pe,{renderTabBar:L})),a.createElement($a,(0,re.Z)({destroyInactiveTabPane:w},ue,{animated:T}))))}),Ta=xa,Pa=Ta,Ea=m(53124),Ra=m(35792),wa=m(98675),Ia=m(33603);const Za={motionAppear:!1,motionEnter:!0,motionLeave:!0};function La(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return t===!1?n={inkBar:!1,tabPane:!1}:t===!0?n={inkBar:!0,tabPane:!0}:n=Object.assign({inkBar:!0},typeof t=="object"?t:{}),n.tabPane&&(n.tabPaneMotion=Object.assign(Object.assign({},Za),{motionName:(0,Ia.m)(e,"switch")})),n}var Na=m(50344),Ma=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Oa(e){return e.filter(t=>t)}function za(e,t){if(e)return e;const n=(0,Na.Z)(t).map(r=>{if(a.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=Ma(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return Oa(n)}var S=m(6731),Se=m(14747),Aa=m(91945),_a=m(45503),st=m(48611),Ba=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,st.oN)(e,"slide-up"),(0,st.oN)(e,"slide-down")]]};const Da=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:r,border:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,S.bf)(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,S.bf)(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,S.bf)(e.borderRadiusLG)} 0 0 ${(0,S.bf)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Wa=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,Se.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,S.bf)(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Se.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,S.bf)(e.paddingXXS)} ${(0,S.bf)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ha=e=>{const{componentCls:t,margin:n,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,S.bf)(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ka=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,S.bf)(e.borderRadius)} ${(0,S.bf)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,S.bf)(e.borderRadius)} ${(0,S.bf)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,S.bf)(e.borderRadius)} ${(0,S.bf)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,S.bf)(e.borderRadius)} 0 0 ${(0,S.bf)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},ja=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,Se.Qy)(e)),"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:l}}}},Ga=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,S.bf)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,S.bf)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,S.bf)(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Va=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Se.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${(0,S.bf)(e.paddingXS)}`,background:"transparent",border:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${(0,S.bf)(e.borderRadiusLG)} ${(0,S.bf)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},(0,Se.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),ja(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Ka=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}};var Xa=(0,Aa.I$)("Tabs",e=>{const t=(0,_a.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,S.bf)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,S.bf)(e.horizontalItemGutter)}`});return[ka(t),Ga(t),Ha(t),Wa(t),Da(t),Va(t),Ba(t)]},Ka),Fa=()=>null,Ua=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const dt=e=>{var t,n,r,i,l,c,o,s,d,v,u;const{type:b,className:I,rootClassName:z,size:R,onEdit:M,hideAdd:g,centered:f,addIcon:w,removeIcon:L,moreIcon:_,more:H,popupClassName:B,children:$,items:p,animated:Z,style:C,indicatorSize:x,indicator:y}=e,T=Ua(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:F}=T,{direction:ne,tabs:h,getPrefixCls:X,getPopupContainer:ae}=a.useContext(Ea.E_),j=X("tabs",F),U=(0,Ra.Z)(j),[ie,E,A]=Xa(j,U);let G;b==="editable-card"&&(G={onEdit:(ue,pe)=>{let{key:O,event:le}=pe;M==null||M(ue==="add"?le:O,ue)},removeIcon:(t=L!=null?L:h==null?void 0:h.removeIcon)!==null&&t!==void 0?t:a.createElement(Rt.Z,null),addIcon:(w!=null?w:h==null?void 0:h.addIcon)||a.createElement(Mt,null),showAdd:g!==!0});const V=X(),k=(0,wa.Z)(R),W=za(p,$),Y=La(j,Z),he=Object.assign(Object.assign({},h==null?void 0:h.style),C),ce={align:(n=y==null?void 0:y.align)!==null&&n!==void 0?n:(r=h==null?void 0:h.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=y==null?void 0:y.size)!==null&&i!==void 0?i:x)!==null&&l!==void 0?l:(c=h==null?void 0:h.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:h==null?void 0:h.indicatorSize};return ie(a.createElement(Pa,Object.assign({direction:ne,getPopupContainer:ae},T,{items:W,className:Q()({[`${j}-${k}`]:k,[`${j}-card`]:["card","editable-card"].includes(b),[`${j}-editable-card`]:b==="editable-card",[`${j}-centered`]:f},h==null?void 0:h.className,I,z,E,A,U),popupClassName:Q()(B,E,A,U),style:he,editable:G,more:Object.assign({icon:(u=(v=(d=(s=h==null?void 0:h.more)===null||s===void 0?void 0:s.icon)!==null&&d!==void 0?d:h==null?void 0:h.moreIcon)!==null&&v!==void 0?v:_)!==null&&u!==void 0?u:a.createElement(wt.Z,null),transitionName:`${V}-slide-up`},H),prefixCls:j,animated:Y,indicator:ce})))};dt.TabPane=Fa;var Ya=dt}}]);
