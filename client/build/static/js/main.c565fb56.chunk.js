(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{221:function(e,t,a){e.exports=a.p+"static/media/versus.0a6375c6.png"},226:function(e,t,a){e.exports=a(433)},231:function(e,t,a){},232:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){},433:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=(a(231),a(46)),s=a(31),l=a(71),u=a(70),f=(a(232),a(15)),h=a.n(f),d=a(18),g=a(17),m=a(458),p=a(26),v=a(463),b=(a(425),function(){var e=Object(d.a)(h.a.mark((function e(t){var a,n=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:"",e.next=3,E("".concat(t,"/").concat(a),"GET");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=function(){var e=Object(d.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,"POST",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(h.a.mark((function e(t,a,n){var r,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat("/api","/").concat(t),e.next=4,fetch(r,{method:a,body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json"}});case 4:return c=e.sent,e.next=7,c.json();case 7:if(i=e.sent,!c.ok){e.next=10;break}return e.abrupt("return",i);case 10:return alert("".concat(i.message)),e.abrupt("return",i);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,a,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e,t){var a="object"===typeof t?JSON.stringify(t):t;localStorage.setItem(e,a)},S=function(){return!!function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}("user")},_=function(e){j("user",e)},y=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function N(e){var t=e.setIsLoggedIn,a=y(),c=Object(n.useState)(),i=Object(g.a)(c,2),o=i[0],s=i[1],l=Object(n.useState)(),u=Object(g.a)(l,2),f=u[0],m=u[1],b=function(){var e=Object(d.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({email:o,password:f});case 2:(a=e.sent)&&!a.error&&(_(a),t(!0));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},r.a.createElement(p.b,{onChange:function(e){s(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Email"}),r.a.createElement(p.b,{onChange:function(e){m(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Password",type:"password"}),r.a.createElement(v.a,{onClick:b,variant:"contained",color:"primary"},"Sign In"))}var F=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("users",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function C(e){var t=e.setIsLoggedIn,a=k(),c=Object(n.useState)(),i=Object(g.a)(c,2),o=i[0],s=i[1],l=Object(n.useState)(),u=Object(g.a)(l,2),f=u[0],m=u[1],b=Object(n.useState)(),w=Object(g.a)(b,2),E=w[0],O=w[1],j=Object(n.useState)(),S=Object(g.a)(j,2),y=S[0],N=S[1],C=Object(n.useState)(),L=Object(g.a)(C,2),I=L[0],x=L[1],H=function(){var e=Object(d.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F({email:o,password:f,firstName:E,lastName:y,phoneNumber:I});case 2:(a=e.sent)&&!a.error&&(_(a),t(!0));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},r.a.createElement(p.b,{key:"first-name",onChange:function(e){O(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"First Name"}),r.a.createElement(p.b,{key:"last-name",onChange:function(e){N(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Last Name"}),r.a.createElement(p.b,{key:"email",onChange:function(e){s(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Email"}),r.a.createElement(p.b,{key:"phone",onChange:function(e){x(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Phone Number"}),r.a.createElement(p.b,{key:"password",onChange:function(e){m(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Password",type:"password"}),r.a.createElement(v.a,{onClick:H,variant:"contained",color:"primary"},"Sign Up"))}var L=0,I=1,x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={index:I},e.setIndex=function(t){e.setState({index:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.index;return n.createElement("div",{id:"sign-in-up"},n.createElement("div",{id:"form-wrapper"},n.createElement("div",{className:"header"},n.createElement("div",{onClick:function(){return e.setIndex(L)},className:"".concat(t===L?"active":"")},"Sign In"),n.createElement("div",{onClick:function(){return e.setIndex(I)},className:"".concat(t===I?"active":"")},"Sign Up")),t===L?n.createElement(N,{setIsLoggedIn:this.props.setIsLoggedIn}):n.createElement(C,{setIsLoggedIn:this.props.setIsLoggedIn})))}}]),a}(n.Component),H=a(28),D=function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("fighters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("fighters",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a(427);function B(e){var t=e.onCreated,a=Object(n.useState)(),c=Object(g.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(),l=Object(g.a)(s,2),u=l[0],f=l[1],m=Object(n.useState)(),b=Object(g.a)(m,2),w=b[0],E=b[1],O=function(){var e=Object(d.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({name:i,power:u,defense:w});case 2:(a=e.sent)&&!a.error&&t(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"new-fighter"},r.a.createElement("div",null,"New Fighter"),r.a.createElement(p.b,{onChange:function(e){o(e.target.value)},id:"standard-basic",label:"Standard",placeholder:"Name"}),r.a.createElement(p.b,{onChange:function(e){var t=e.target.value||0===e.target.value?Number(e.target.value):null;f(t)},id:"standard-basic",label:"Standard",placeholder:"Power",type:"number"}),r.a.createElement(p.b,{onChange:function(e){var t=e.target.value||0===e.target.value?Number(e.target.value):null;E(t)},id:"standard-basic",label:"Standard",placeholder:"Defense",type:"number"}),r.a.createElement(v.a,{onClick:O,variant:"contained",color:"primary"},"Create"))}var J=a(464),M=a(465),T=a(462),A=Object(m.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function K(e){var t=e.fightersList,a=e.onFighterSelect,c=e.selectedFighter,i=A(),o=Object(n.useState)(),s=Object(g.a)(o,2),l=s[0],u=s[1];return t.length?r.a.createElement("div",null,r.a.createElement(J.a,{className:i.formControl},r.a.createElement(M.a,{id:"simple-select-label"},"Select Fighter"),r.a.createElement(T.a,{labelId:"simple-select-label",id:"simple-select",value:l,onChange:function(e){u(e.target.value),a(e.target.value)}},t.map((function(e,t){return r.a.createElement(p.a,{key:"".concat(t),value:e},e.name)}))),c?r.a.createElement("div",null,r.a.createElement("div",null,"Name: ",c.name),r.a.createElement("div",null,"Power: ",c.power),r.a.createElement("div",null,"Defense: ",c.defense),r.a.createElement("div",null,"Health: ",c.health)):null)):r.a.createElement("p",{className:"center"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442")}var R=a(40),W=(a(428),a(221)),U=a.n(W),V=function(e){var t=e.fighter1Name,a=e.fighter2Name,n=e.onKeyDown,c=e.firstFighterBar,i=e.secondFighterBar,o=e.showDamage;return r.a.createElement("div",{className:"arena___root",tabIndex:"1",onKeyDown:function(e){return n(e)}},r.a.createElement("div",{className:"arena___fight-status"},r.a.createElement("div",{className:"arena___fighter-indicator"},r.a.createElement("span",{className:"arena___fighter-name"},t),r.a.createElement("div",{className:"arena___health-indicator"},r.a.createElement("div",{className:"arena___health-bar",id:"left-fighter-indicator",ref:c}))),r.a.createElement("div",{className:"arena___versus-sign"},r.a.createElement("img",{src:U.a,alt:"vs"}),r.a.createElement("div",{className:"arena___damageBlock",ref:o})),r.a.createElement("div",{className:"arena___fighter-indicator"},r.a.createElement("span",{className:"arena___fighter-name"},a),r.a.createElement("div",{className:"arena___health-indicator"},r.a.createElement("div",{className:"arena___health-bar",id:"right-fighter-indicator",ref:i})))),r.a.createElement("div",{className:"arena___battlefield"},r.a.createElement("div",{className:"fighter-preview___root fighter-preview___left"},r.a.createElement("img",{src:"https://media.giphy.com/media/kdHa4JvihB2gM/giphy.gif",alt:"fighter1",title:t,className:"fighter-preview___img"})),r.a.createElement("div",{className:"fighter-preview___root fighter-preview___right arena___right-fighter"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/46/4b/36/464b36a7aecd988e3c51e56a823dbedc.gif",alt:"fighter2",title:a,className:"fighter-preview___img"}))))},G=(a(429),function(e){var t=e.winner;return r.a.createElement("div",{className:"modal-layer"},r.a.createElement("div",{className:"modal-root"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"modal-title"},"".concat(t.name," has won this time")),r.a.createElement("div",{className:"close-btn",onClick:function(){return window.location.reload()}}," \xd7 ")),r.a.createElement("div",{className:"modal-description"},"The game will be reloaded after you close modal window")))}),$=65,q=68,z=74,Q=76,X=[81,87,69],Y=[85,73,79],Z=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("fights",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ee(e,t){var a=function(e){var t=(a=.2,n=.7,Math.random()*(n-a)+a);var a,n;return e.power*t}(e)-function(e){var t=Math.random()+1;return e.defense*t}(t);return a>0?a:0}function te(e,t,a,n,r){var c=ee(e,t);return n.className="arena___damageBlock ".concat(r),c?(n.innerHTML=c.toFixed(3),(a-=c)>0?a:0):(n.innerHTML="Blocked",a)}function ae(e,t,a){var n=100*e/t.health;a.style.width="".concat(n,"%")}function ne(e,t,a){var n=Date.now();if(n-a<1e4)return t.clear(),!1;var r=0;return r=e.power<20?.7*e.power:e.power<60?.5*e.power:.3*e.power,a=n,t.clear(),{critical:r,cooldown:a}}var re=function(e){var t=e.fighter1,a=e.fighter2,c=Object(n.useState)(null),i=Object(g.a)(c,2),o=i[0],s=i[1],l=Object(n.useState)({player:JSON.parse(localStorage.getItem("user")).email,fightStartedAt:new Date,fighter1:t.name,fighter2:a.name,logging:["Fight started"]}),u=Object(g.a)(l,2),f=u[0],h=u[1],d=Object(n.useState)({firstPlayerComboCooldown:Date.now()-1e4,secondPlayerComboCooldown:Date.now()-1e4}),m=Object(g.a)(d,2),p=m[0],v=m[1],b=Object(n.useRef)(null),w=Object(n.useRef)(null),E=Object(n.useRef)(null),O=new Set,j=$,S=q,_=z,y=Q,N=X,F=Y,k=Object(g.a)(N,3),C=k[0],L=k[1],I=k[2],x=Object(g.a)(F,3),D=x[0],P=x[1],B=x[2],J=Object(n.useState)({firstFighterHealthLeft:+t.health,secondFighterHealthLeft:+a.health}),M=Object(g.a)(J,2),T=M[0],A=M[1],K=function(e){return h(Object(R.a)({},f,{logging:f.logging.push("".concat(e.name," has won this battle"))})),Z(f),!0},W=function(e){return s(a),!0},U=function(e,t,a){h(Object(R.a)({},f,{logging:[].concat(Object(H.a)(f.logging),["".concat(e," makes damage, ").concat(t," ").concat(a,"% HP left")])}))};Object(n.useEffect)((function(){ae(T.firstFighterHealthLeft,t,b.current),U(a.name,t.name,T.firstFighterHealthLeft),T.firstFighterHealthLeft<=0&&W()&&K(a)}),[T.firstFighterHealthLeft]),Object(n.useEffect)((function(){ae(T.secondFighterHealthLeft,a,w.current),U(t.name,a.name,T.secondFighterHealthLeft),T.secondFighterHealthLeft<=0&&W()&&K(t)}),[T.secondFighterHealthLeft]);return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(G,{winner:o}),r.a.createElement(V,{onKeyDown:function(e){var n,r=T.firstFighterHealthLeft,c=(T.secondFighterHealthLeft,p.firstPlayerComboCooldown),i=p.secondPlayerComboCooldown;switch(O.add(e.which),!0){case O.has(C)&&O.has(L)&&O.has(I):(n=ne(t,O,c))&&(v(Object(R.a)({},p,{firstPlayerComboCooldown:n.cooldown})),A(Object(R.a)({},T,{secondFighterHealthLeft:T.secondFighterHealthLeft-=n.critical})));break;case O.has(D)&&O.has(P)&&O.has(B):(n=ne(a,O,i))&&(v(Object(R.a)({},p,{secondPlayerComboCooldown:n.cooldown})),A(Object(R.a)({},T,{firstFighterHealthLeft:T.firstFighterHealthLeft-=n.critical})));break;case O.has(S):case O.has(y):document.addEventListener("keyup",(function(e){e.which===S&&O.delete(S),e.which===y&&O.delete(y)}));break;case O.has(j):A(Object(R.a)({},T,{secondFighterHealthLeft:te(t,a,T.secondFighterHealthLeft,E.current,"arena___first-fighter-hit")})),O.delete(j);break;case O.has(_)&&!O.has(y):A(Object(R.a)({},T,{firstFighterHealthLeft:te(a,t,r,E.current,"arena___second-fighter-hit")})),O.delete(_)}},firstFighterBar:b,secondFighterBar:w,showDamage:E,fighter1Name:t.name,fighter2Name:a.name}))},ce=(a(430),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={fighters:[],fighter1:null,fighter2:null,fightStarted:!1,warning:null},e.onFightStart=function(){var t=e.state,a=t.fighter1,n=t.fighter2;a&&n?e.setState({fightStarted:!0,warning:null}):e.setState({warning:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439, \u0435\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442 - \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0438\u0445"})},e.onCreate=function(t){e.setState({fighters:[].concat(Object(H.a)(e.state.fighters),[t])})},e.onFighter1Select=function(t){e.setState({fighter1:t})},e.onFighter2Select=function(t){e.setState({fighter2:t})},e.getFighter1List=function(){var t=e.state,a=t.fighter2,n=t.fighters;return a?n.filter((function(e){return e.id!==a.id})):n},e.getFighter2List=function(){var t=e.state,a=t.fighter1,n=t.fighters;return a?n.filter((function(e){return e.id!==a.id})):n},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:(t=e.sent)&&!t.error&&this.setState({fighters:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fighter1,a=e.fighter2,n=e.fightStarted,c=e.warning;return r.a.createElement(r.a.Fragment,null,c&&!n&&r.a.createElement("div",{className:"preview-warning"},c),n?r.a.createElement(re,{fighter1:t,fighter2:a}):r.a.createElement("div",{id:"wrapper"},r.a.createElement(B,{onCreated:this.onCreate}),r.a.createElement("div",{id:"figh-wrapper"},r.a.createElement(K,{selectedFighter:t,onFighterSelect:this.onFighter1Select,fightersList:this.getFighter1List()||[]}),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement(v.a,{onClick:this.onFightStart,variant:"contained",color:"primary"},"Start Fight")),r.a.createElement(K,{selectedFighter:a,onFighterSelect:this.onFighter2Select,fightersList:this.getFighter2List()||[]}))))}}]),a}(r.a.Component));a(431);function ie(e){var t=e.isSignedIn,a=e.onSignOut;return t?r.a.createElement("div",{onClick:function(){j("user",null),a()},id:"sign-out"},"Sign out"):null}var oe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isSignedIn:!1},e.setIsLoggedIn=function(t){e.setState({isSignedIn:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setIsLoggedIn(S())}},{key:"render",value:function(){var e=this,t=this.state.isSignedIn;return t?n.createElement(n.Fragment,null,n.createElement(ce,null),n.createElement(ie,{isSignedIn:t,onSignOut:function(){return e.setIsLoggedIn(!1)}})):n.createElement(x,{setIsLoggedIn:this.setIsLoggedIn})}}]),a}(n.Component),se=a(97),le=a.n(se);a(432);var ue=function(){return r.a.createElement(le.a,null,r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[226,1,2]]]);
//# sourceMappingURL=main.c565fb56.chunk.js.map