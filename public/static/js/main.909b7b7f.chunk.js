(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{102:function(e,n,t){},104:function(e,n,t){"use strict";t.r(n),t.d(n,"baseURL",(function(){return _n})),t.d(n,"client",(function(){return Rn}));var a=t(0),r=t.n(a),c=t(47),o=t.n(c),i=t(22),u=t(4),l=t(39),s=t(6),d=t(8);function p(){var e=Object(s.a)(["\n  background: #252525;\n  color: #FFF;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return p=function(){return e},e}function m(){var e=Object(s.a)(["\n  background: #353535;\n  border-radius: 14px;\n  padding: 20px;\n  position: relative;\n  margin: 20px;\n  overflow: hidden;\n"]);return m=function(){return e},e}function f(){var e=Object(s.a)(["\n"]);return f=function(){return e},e}function b(){var e=Object(s.a)(["\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-width: 420px;\n    min-height: ","px;\n    max-height: 900px;\n    margin: 0 auto;\n    grid-template-columns: 1fr;\n    grid-template-rows: 75% 100%;\n    align-items: center;\n    justify-items: center;\n    overflow: hidden;\n\n    & #brand {\n        width: 50%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        // max-width: 150px;\n        // height: 200%;\n    }\n    & #brand > img {\n        max-width: 240px;\n        width: 100%;\n        height: auto;\n    }\n"]);return b=function(){return e},e}var g=d.a.div(b(),(function(e){return e.minHeight})),v=d.a.div(f()),h=d.a.div(m()),O=d.a.div(p());var j=t(17),x=t(31);function E(){var e=Object(s.a)(["\n  \n"]);return E=function(){return e},e}function w(){var e=Object(s.a)(["\n  min-height: 100px;\n  width: 100%;\n  background: #efefef;\n  color: #222;\n  border-radius: 6px;\n  padding: 20px;\n  box-shadow: 0px 5px 5px #0003;\n"]);return w=function(){return e},e}function y(){var e=Object(s.a)(["\n  // background: red;\n  padding: 10px 20px;\n  display: flex;\n  align-items: ",";\n  justify-content: space-between;\n"]);return y=function(){return e},e}function F(){var e=Object(s.a)(["\n  color: #FFF;\n  font-size: 1em;\n  text-shadow: 0px 2px 2px #0007;\n"]);return F=function(){return e},e}function k(){var e=Object(s.a)(["\n  color: #FFF;\n  display: grid;\n  grid-template-rows: repeat(3, auto) 100%;\n  height: 100%;\n"]);return k=function(){return e},e}var C=d.a.div(k()),N=d.a.h1(F()),T=d.a.div.attrs({className:"row"})(y(),(function(e){return e.alignItems||"center"})),I=d.a.div(w());d.a.div(E());function A(){var e=Object(s.a)(["\n    display: block;\n    width: ","px;\n    height: ","px;\n    background: ",";\n    border-radius: 8px;\n    margin: 0 auto;\n    box-shadow: 0px 3px 3px #0005;\n"]);return A=function(){return e},e}function S(){var e=Object(s.a)(["\n    // background: #000;\n    width: ","px;\n    position: relative;\n\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-template-columns: 1fr;\n    cursor: pointer;\n\n    \n    & > span {\n        margin-top: 10px;\n        text-align: center;\n        font-size: 0.65em;\n    }\n    "]);return S=function(){return e},e}var _=d.a.div(S(),50),R=d.a.div(A(),50,50,(function(e){return e.color||"#222"}));function M(e){var n=Object(j.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{onClick:function(){return n.push(e.href)}},r.a.createElement(R,{color:e.color}),r.a.createElement("span",null,e.name)))}function z(){var e=Object(s.a)(["\n  background: #2D2D2D;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  border-radius: 8px;\n"]);return z=function(){return e},e}var G,L=d.a.div(z());function D(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,"Sem novidades, por enquanto. Volte novamente mais tarde."))}function V(){Object(a.useRef)(),Object(j.g)();var e,n,t,c,o,u=Object(i.c)((function(e){return e.auth})).user;return Object(a.useEffect)((function(){var e;(null===(e=G)||void 0===e?void 0:e.pause)&&G.pause(),(G=x.a.timeline({})).add({targets:".row"})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement(T,null,r.a.createElement(N,{className:"title"},(null===u||void 0===u||null===(e=u.name)||void 0===e?void 0:e.split(" ")[0])+" "+((null===u||void 0===u||null===(n=u.name)||void 0===n?void 0:n.split(" ").length)>1?null===u||void 0===u||null===(t=u.name)||void 0===t?void 0:t.split(" ")[(null===u||void 0===u||null===(c=u.name)||void 0===c||null===(o=c.split(" "))||void 0===o?void 0:o.length)-1]:"")||"Jovem"),r.a.createElement("div",{style:{fontSize:"0.7em"}},"CONFIGURA\xc7\xd5ES")),r.a.createElement(T,null,r.a.createElement(I,null)),r.a.createElement(T,{alignItems:"start"},r.a.createElement(M,{name:"Novidades",color:"#89DD62",href:"news"}),r.a.createElement(M,{name:"Cronograma de atividades",color:"#E16363"}),r.a.createElement(M,{name:"Cantina",color:"#56B9BF"}),r.a.createElement(M,{name:"Social",color:"#D1BC4A"})),r.a.createElement(T,null,r.a.createElement(D,null))))}function q(){var e=Object(s.a)(["\n  padding: 15px 20px;\n  color: #FFF8;\n  font-size: 0.8em;\n  cursor: pointer;\n\n  &:hover{\n      background: #FFF1;\n  }\n"]);return q=function(){return e},e}function P(){var e=Object(s.a)(["\n    width: 100%;\n    padding: 10px;\n    border: none;  \n    background: ",";\n    color: ",";\n    transition: background 0.75s ease-in-out;\n    cursor: pointer;\n    border-radius: 4px;\n"]);return P=function(){return e},e}function H(){var e=Object(s.a)(["\n  width: 100%;\n  padding: 10px;\n"]);return H=function(){return e},e}function U(){var e=Object(s.a)(["\npadding: 2.5px 0px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ntext-align: justify;\n\ncolor: ",";\n\nmargin-top: ",";\n\n&:first-child{\n    padding-top: 0;\n}\n\n&:last-child{\n    padding-bottom: 0;\n}\n"]);return U=function(){return e},e}function B(){var e=Object(s.a)(["\n  background: transparent;\n\n  & > .row {\n      padding: 2.5px 0px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      &:first-child{\n          padding-top: 0;\n      }\n\n      &:last-child{\n          padding-bottom: 0;\n      }\n  }\n\n  & input, & .input {\n      color: #FFF;\n      background: #2c2c2c;\n      border: none;\n      padding: 10px;\n      flex: 1;\n      height: 100%;\n      border-radius: 4px;\n\n      &.invalid{\n          background: #911;\n          outline: red 1px solid;\n      }\n\n      &[type=button]{\n          transition: background 0.5s ease-in-out;\n          background: ",";\n      }\n  }\n"]);return B=function(){return e},e}function J(){var e=Object(s.a)(["\n  color: #FFF;\n  & > h1 {\n      margin: 25px 0px;\n  }\n  & > p {\n      margin: 25px 0px;\n  }\n"]);return J=function(){return e},e}var $=d.a.div(J()),Q=d.a.div(B(),(function(e){return e.canContinue?"#159":"transparent"})),Y=d.a.div(U(),(function(e){return e.textColor||"inherit"}),(function(e){return e.marginTop})),K=(d.a.select(H()),d.a.button(P(),(function(e){return e.color}),(function(e){return e.textColor}))),W=d.a.span(q()),X=t(53),Z=t.n(X);function ee(e){var n=Object(j.g)(),t=Object(i.b)(),c=Object(i.c)((function(e){return e.auth})),o=Object(a.useState)({firstName:"Jovem",step:1}),s=Object(l.a)(o,2),d=s[0],p=s[1],m=Object(a.useState)({church:{}}),f=Object(l.a)(m,2),b=f[0],g=f[1];return Object(a.useEffect)((function(){d.passwordConfirm!==d.password?(p((function(e){return Object(u.a)(Object(u.a)({},e),{},{invalidPassword:!0})})),g((function(e){return Object(u.a)(Object(u.a)({},e),{},{password:void 0})}))):(p((function(e){return Object(u.a)(Object(u.a)({},e),{},{invalidPassword:!1})})),g((function(e){return Object(u.a)(Object(u.a)({},e),{},{password:d.password})})))}),[d.password,d.passwordConfirm]),c.user?r.a.createElement(j.a,{to:"/"}):1==d.step?r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement("h1",null,"Ol\xe1, ",d.firstName||"Jovem","!"),r.a.createElement("p",null,"Sua experi\xeancia come\xe7a agora."),r.a.createElement("p",null,"Fa\xe7a seu cadastro e garanta a sua participa\xe7\xe3o no CVM#MorteVital!"),r.a.createElement(Q,{canContinue:!!(b.name&&b.cpf&&b.mail)},r.a.createElement("div",{className:"row",style:{marginTop:-20}},r.a.createElement(W,{onClick:function(){return n.push("/")}},"Cancelar inscri\xe7\xe3o")),r.a.createElement("div",{className:"row"},r.a.createElement("input",{name:"name",autoComplete:"false",autoCapitalize:"true",defaultValue:b.name,placeholder:"Nome completo",onChange:function(e){var n;e.persist(),e.target.value=(null===(n=/(([A-z]+)\s?)+/gi.exec(e.target.value))||void 0===n?void 0:n[0])||"";var t=e.target.value.trim().split(" ")[0];t||(t="Jovem"),p((function(e){return Object(u.a)(Object(u.a)({},e),{},{firstName:t})})),g((function(n){return Object(u.a)(Object(u.a)({},n),{},{name:e.target.value||""})}))}})),r.a.createElement("div",{className:"row"},r.a.createElement(Z.a,{name:"cpf",mask:[/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,"-",/\d/,/\d/],placeholder:"CPF",onBlur:function(e){e.persist(),g((function(n){return Object(u.a)(Object(u.a)({},n),{},{cpf:e.target.value})}))},defaultValue:b.cpf,inputMode:"numeric",autoComplete:"off"})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{name:"mail",className:d.isMailValid||void 0===d.isMailValid?"":"invalid",defaultValue:b.mail,placeholder:"E-mail",onChange:function(e){e.persist();var n=e.target.value;if(g((function(e){return Object(u.a)(Object(u.a)({},e),{},{mail:void 0})})),""==n)return p((function(e){return Object(u.a)(Object(u.a)({},e),{},{isMailValid:void 0})}));/^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+){1,2}$/i.test(n)?(p((function(e){return Object(u.a)(Object(u.a)({},e),{},{isMailValid:!0})})),g((function(e){return Object(u.a)(Object(u.a)({},e),{},{mail:n})}))):p((function(e){return Object(u.a)(Object(u.a)({},e),{},{isMailValid:!1})}))}})),r.a.createElement("div",{className:"row"},r.a.createElement(K,{onClick:function(e){p((function(e){return Object(u.a)(Object(u.a)({},e),{},{step:e.step+1})}))},style:{marginTop:20},color:b.name&&b.cpf&&b.mail?"#159":"#222",textColor:"#FFF"},"Continuar"))))):2==d.step?r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{onClick:function(e){p((function(e){return Object(u.a)(Object(u.a)({},e),{},{step:e.step-1})}))},color:"#222",textColor:"#FFF"},"Voltar"),r.a.createElement(Q,null,r.a.createElement(Y,{marginTop:"20px"},r.a.createElement("input",{type:"password",onChange:function(e){e.persist(),e.target.value?(e.target.value=e.target.value.trim(),p((function(n){return Object(u.a)(Object(u.a)({},n),{},{password:e.target.value})}))):p((function(e){return Object(u.a)(Object(u.a)({},e),{},{password:null})}))},defaultValue:b.password,placeholder:"Senha"})),r.a.createElement(Y,null,r.a.createElement("input",{type:"password",className:d.invalidPassword?"invalid":"",defaultValue:b.password,onChange:function(e){e.persist(),e.target.value?(e.target.value=e.target.value.trim(),p((function(n){return Object(u.a)(Object(u.a)({},n),{},{passwordConfirm:e.target.value})}))):p((function(e){return Object(u.a)(Object(u.a)({},e),{},{passwordConfirm:null})}))},placeholder:"Confirma\xe7\xe3o da senha"})),r.a.createElement(Y,{textColor:"#FFF9",marginTop:"20px"},r.a.createElement("span",null,d.firstName,", informe-nos, por favor, a igreja que voc\xea congrega e o nome do seu pastor.")),r.a.createElement(Y,{textColor:"#FFF9",marginTop:"20px"},r.a.createElement("input",{onChange:function(e){e.persist(),e.target.value?g((function(n){return Object(u.a)(Object(u.a)({},n),{},{church:Object(u.a)(Object(u.a)({},n.church),{},{name:e.target.value.trim()})})})):g((function(e){return Object(u.a)(Object(u.a)({},e),{},{church:Object(u.a)(Object(u.a)({},e.church),{},{name:void 0})})}))},defaultValue:b.church.name,placeholder:"Nome da igreja"})),r.a.createElement(Y,{marginTop:"0px"},r.a.createElement("input",{type:"text",onChange:function(e){e.persist(),e.target.value?g((function(n){return Object(u.a)(Object(u.a)({},n),{},{church:Object(u.a)(Object(u.a)({},n.church),{},{pastor:e.target.value.trim()})})})):g((function(e){return Object(u.a)(Object(u.a)({},e),{},{church:Object(u.a)(Object(u.a)({},e.church),{},{pastor:void 0})})}))},defaultValue:b.church.pastor,placeholder:"Nome do pastor"})),r.a.createElement(Y,{marginTop:"20px"},r.a.createElement(K,{onClick:function(){b.cpf&&b.name&&b.mail&&b.password&&b.church.pastor&&b.church.name&&t({type:"REGISTER.SEND_DATA",payload:b,history:n})},color:"#222",textColor:"#FFF"},"Finalizar cadastro")))):void 0}var ne=t(42);function te(e){var n=e.children,t=e.to,a=void 0===t?"/":t;Object(ne.a)(e,["children","to"]);return Object(i.c)((function(e){return e.auth})).user?n:r.a.createElement(j.a,{to:a})}function ae(){var e=Object(s.a)(["\n    display: block;\n    min-height: 60px;\n    // max-height: 175px;\n    background: #222 ",";\n    background-size: cover;\n    background-position: center;\n    border-radius: 6px;\n    // margin-bottom: -35px;\n\n    box-shadow: 1px 5px 5px #0002;\n"]);return ae=function(){return e},e}var re=d.a.div(ae(),(function(e){return'url("'.concat(e.image,'")')}));function ce(){var e=Object(s.a)(["\n  width: 80%;\n  padding: 20px;\n  min-height: 50px;\n  background: #FFF;\n  border-radius: 5px;\n  box-shadow: 0px 5px 5px #0002;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 20%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  text-align: center;\n  opacity: 0;\n  overflow: hidden;\n  z-index: 9999999;\n\n\n  & > #progressbar {\n      width: 100%;\n      height: 7.5px;\n      background: #E16363;\n      position: absolute;\n      bottom: 0px;\n      left: 0;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(s.a)(["\n    background: #E16363;\n    border: none;\n    padding: 15px 0;\n    color: #FFF;\n    font-weight: bold;\n    width: 65%;\n    border-radius: 6px;\n    margin: 0 auto;\n    position: relative;\n    cursor: pointer;\n    max-height: 50px;\n\n    box-shadow: 0px 5px 2px #0001;\n    \n    &:hover{\n        background: #D15353;\n    }\n"]);return oe=function(){return e},e}function ie(){var e=Object(s.a)(["\ncolor: #A8A8A8;\ntext-align: center;\nfont-size: 0.8em;\n\n& > a {\n    padding: 5px 10px;\n    cursor: pointer;\n    &:hover{\n        background: #FFF1;\n    }\n}\n"]);return ie=function(){return e},e}function ue(){var e=Object(s.a)(["\n    display: flex; \n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    gap: 15px;\n\n    & .myInput {\n        padding: 5px;\n        border-radius: 12px;\n        width: 100%;\n        height: 100%;\n        border: none;\n        text-align: center;\n\n    }\n"]);return ue=function(){return e},e}function le(){var e=Object(s.a)(["\n    width: 90%;\n    height: 1px;\n    display: block;\n    border-color: #FFF1;\n    background: #FFF1;\n    margin: 0 auto;\n"]);return le=function(){return e},e}function se(){var e=Object(s.a)(["\ncolor: #A8A8A8;\n// background: yellow;\nborder-radius: 6px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]);return se=function(){return e},e}function de(){var e=Object(s.a)(["\ndisplay: grid;\ngrid-template-rows: 0fr 0.6fr auto auto auto auto auto auto;\nheight: 100%;\n"]);return de=function(){return e},e}var pe=d.a.div(de()),me=d.a.span(se()),fe=d.a.div(le()),be=d.a.div(ue()),ge=d.a.span(ie()),ve=d.a.button(oe()),he=d.a.div(ce());function Oe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{image:"https://www.ufc.com.br/themes/custom/ufc/assets/img/default-hero.jpg"}),r.a.createElement(ve,{style:{marginBottom:15,marginTop:-25}},"Ver mais..."))}var je={};function xe(){var e=Object(j.g)(),n=Object(i.c)((function(e){return e.auth})),t=Object(a.useState)({}),c=Object(l.a)(t,2),o=c[0],s=c[1],d=Object(i.b)(),p=Object(a.useRef)();Object(a.useEffect)((function(t){n.user&&e.replace("/profile")}),[n]),Object(a.useEffect)((function(){}),[o.isErro,o.erro]);return r.a.createElement(r.a.Fragment,null,o.isErro&&r.a.createElement(Ee,{setState:s},o.erro),r.a.createElement(pe,null,r.a.createElement(me,{style:{marginBottom:15}},"Novidades"),r.a.createElement(Oe,null),r.a.createElement(fe,null),r.a.createElement(me,{ref:p,style:{textAlign:"center",marginTop:-20,marginBottom:10}},"Entre com seu CPF e senha"),r.a.createElement(be,null,r.a.createElement(Z.a,{className:"myInput",name:"cpf",mask:[/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,"-",/\d/,/\d/],onBlur:function(e){e.persist(),s((function(n){return Object(u.a)(Object(u.a)({},n),{},{cpf:e.target.value})}))},inputMode:"numeric",autoComplete:"off"}),r.a.createElement("input",{className:"myInput",onChange:function(e){e.persist(),s((function(n){return Object(u.a)(Object(u.a)({},n),{},{password:e.target.value})}))},type:"password"})),r.a.createElement(ve,{style:{marginTop:20,marginBottom:15},onClick:function(){d({type:"AUTH.LOGIN",payload:{cpf:o.cpf,password:o.password},history:e,setState:s})}},"Entrar"),r.a.createElement(ge,null,r.a.createElement("a",{onClick:function(){return e.push("register")}},"Registrar")," | ",r.a.createElement("a",{onClick:function(){return e.push("recoveryPassword")}},"Esqueci minha senha"))))}function Ee(e){var n=e.children,t=e.setState,c=(Object(ne.a)(e,["children","setState"]),Object(a.useRef)());return Object(a.useEffect)((function(){je.pause&&je.pause(),(je=x.a.timeline({endDelay:0,complete:function(){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{isErro:!1})}))}})).add({targets:c.current,opacity:[0,1],translateY:[-100,0]}),je.add({targets:"#progressbar",width:["100%","0%"],duration:5e3,easing:"easeInOutQuad"},0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{ref:c},n,r.a.createElement("div",{id:"progressbar"})))}var we=t(25);function ye(){var e=Object(s.a)(["\n  background: #c308;\n  color: #FFF;\n  position: absolute;\n  right: 20px;\n  top: 25px;\n  width: 50px;\n  font-size: 1.5em;\n  border-radius: 4px;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover{\n    background: #c30;\n  }\n"]);return ye=function(){return e},e}function Fe(){var e=Object(s.a)(["\n  display: block;\n  max-height: 100%;\n  overflow-y: scroll;\n  padding-bottom: 70px;\n\n  &::-webkit-scrollbar{\n     display: none;\n  }\n"]);return Fe=function(){return e},e}function ke(){var e=Object(s.a)(["\n  color: #888;\n  padding: 10px;\n  text-align: center;\n  font-size: 0.8em;\n  font-weight: 200;\n  letter-spacing: 2px;\n  margin-bottom: 20px;\n"]);return ke=function(){return e},e}var Ce=d.a.h3(ke()),Ne=d.a.div(Fe()),Te=d.a.div(ye());function Ie(){var e=Object(s.a)(["\n  z-index: 1;\n  margin: 10px 10px;\n  color: #ccc;\n  font-size: 0.7em;\n"]);return Ie=function(){return e},e}function Ae(){var e=Object(s.a)(["\n  z-index: 1;\n  font-size: 0.85em;\n  color: #FFF;\n  margin: 5px 10px;\n"]);return Ae=function(){return e},e}function Se(){var e=Object(s.a)(["\n  font-size: 1em;\n  z-index: 1;\n  color: #FFF;\n  margin: 5px 10px;\n  "]);return Se=function(){return e},e}function _e(){var e=Object(s.a)(["\n  background: #eee url(",');\n  background-size: cover;\n  background-position: center;\n  height: 300px;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px #2225;\n  position: relative;\n  padding: 10px;\n  margin-bottom: 20px;\n\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n\n  &::after{\n      top: 0;\n      left: 0;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(to top, #000F 10%, #0004 60%);\n      border-radius: 6px;\n      content: "";\n      z-index: 0;\n  }\n']);return _e=function(){return e},e}var Re=d.a.div(_e(),(function(e){return e.picture})),Me=d.a.h1(Se()),ze=d.a.p(Ae()),Ge=d.a.p(Ie());function Le(e){var n=e.data,t=(Object(ne.a)(e,["data"]),Object(j.g)());return r.a.createElement(Re,{onClick:function(e){return t.push({pathname:"/news/".concat(n._id),state:{data:n}})},picture:"".concat(_n,"/pictures/news/").concat(n._id,"/thumbnail.jpg")},r.a.createElement(Me,null,n.title),r.a.createElement(ze,null,n.content.split(" ").slice(0,10).join(" "),"..."),r.a.createElement(Ge,null,"Postado por ",n.author.name))}function De(){var e=Object(s.a)(["\n  query GetNews{\n    allNews{\n      _id\n      title\n      author {\n          name\n      }\n      picture\n      content\n    }\n  }\n"]);return De=function(){return e},e}var Ve=Object(we.gql)(De());function qe(e){var n=Object(j.g)(),t=Object(we.useQuery)(Ve),a=t.loading,c=(t.error,t.data);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,null,"Carregando...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{onClick:function(e){return n.replace("/profile")}},"\xd7"),r.a.createElement(Ce,null,"Novidades"),r.a.createElement(Ne,null,null===c||void 0===c?void 0:c.allNews.map((function(e){return r.a.createElement(Le,{data:e})}))))}function Pe(){var e=Object(s.a)(["\n  color: red;\n  text-align: justify;\n  color: #FFF;\n"]);return Pe=function(){return e},e}function He(){var e=Object(s.a)(["\n  color: #FFF;\n  text-align: center;\n  font-size: 1.1em;\n  padding: 20px 40px;\n"]);return He=function(){return e},e}function Ue(){var e=Object(s.a)(["\n  background: red;\n  height: 350px;\n  margin: 20px 0;\n  border-radius: 4px;\n  background: #222 url(",");\n  background-size: cover;\n  background-position: center;\n"]);return Ue=function(){return e},e}function Be(){var e=Object(s.a)(["\n  color: #fff9;\n  font-size: 0.8em;\n  font-weight: 300;\n  text-align: center;\n  margin-bottom: 20px;\n"]);return Be=function(){return e},e}function Je(){var e=Object(s.a)(["\n  \n"]);return Je=function(){return e},e}var $e,Qe=d.a.div(Je()),Ye=d.a.h3(Be()),Ke=d.a.div(Ue(),(function(e){return e.href})),We=d.a.h1(He()),Xe=d.a.p(Pe());function Ze(e){var n=Object(j.g)();if(Object(a.useEffect)((function(){}),[]),!n.location.state||!n.location.state.data)return r.a.createElement(j.a,{to:"/news"});var t=n.location.state.data;return r.a.createElement(Qe,null,r.a.createElement(We,null,n.location.state.data.title),r.a.createElement(Ye,null,n.location.state.data.author.name),r.a.createElement(Ke,{href:"".concat(_n,"/pictures/news/").concat(t._id,"/thumbnail.jpg")}),r.a.createElement(Xe,null,n.location.state.data.content))}function en(){var e,n=Object(i.b)(),t=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)(),s=Object(j.h)(),d=Object(j.g)(),p=Object(i.c)((function(e){return e.main})),m=Object(a.useState)({}),f=Object(l.a)(m,2),b=f[0],E=f[1];return Object(a.useEffect)((function(){E((function(e){return Object(u.a)(Object(u.a)({},e),{},{minHeight:window.innerHeight<=937?window.innerHeight:937})})),n({type:"MAIN.APP.START"})}),[]),Object(a.useEffect)((function(){($e=x.a.timeline({})).pause(),($e=x.a.timeline({easing:"easeInOutCirc"})).add({targets:o.current,gridTemplateRows:["75% 80%","20% 80%"]}),$e.add({targets:t.current,width:["calc(100% - 40px)","calc(100% - 40px)"],height:["calc(100% - 40px)","calc(100% - 40px)"],margin:20,borderRadius:14},0)}),[]),Object(a.useEffect)((function(){var e;(null===(e=$e)||void 0===e?void 0:e.pause)&&$e.pause(),$e=x.a.timeline({});var n="spring(1, 100, 20, 10)";switch(s.pathname){case"/":$e.pause(),($e=x.a.timeline({easing:"".concat(n)})).add({targets:o.current,gridTemplateRows:"20% 80%"}),$e.add({targets:t.current,width:"calc(100% - 40px)",height:"calc(100% - 40px)",margin:20,borderRadius:14},0);break;default:$e.pause(),($e=x.a.timeline({easing:"".concat(n)})).add({targets:o.current,gridTemplateRows:"0% 100%"}),$e.add({targets:t.current,width:"calc(100% - 0px)",height:"calc(100% - 0px)",margin:0,borderRadius:0},0)}}),[s]),Object(a.useEffect)((function(){document.title=p.title}),[p.title]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(g,{ref:o,minHeight:b.minHeight},r.a.createElement("div",{ref:c,id:"brand"},r.a.createElement("img",{src:"".concat((e="images/logo.jpg","".concat("").concat("/"===e[0]?"":"/").concat(e)))})),r.a.createElement(h,{ref:t},p.isLoading&&r.a.createElement(O,null,p.loadingMessage||"Carregando... Por favor, aguarde."),r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/",exact:!0},r.a.createElement(xe,null)),r.a.createElement(te,{path:"/profile"},r.a.createElement(V,null)),r.a.createElement(j.b,{path:"/register"},r.a.createElement(ee,null)),r.a.createElement(j.b,{exact:!0,path:"/news/:id",component:Ze}),r.a.createElement(j.b,{path:"/news"},r.a.createElement(qe,null)),r.a.createElement(j.b,{path:"/"},"P\xe1gina n\xe3o encontrada. ",r.a.createElement("div",{onClick:function(){return d.goBack()}},"Clique aqui para voltar \xe0 p\xe1gina inicial.")))))))}t(102);var nn=t(35),tn={title:"CVM",isLoading:!1};var an={user:null};var rn=Object(nn.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTH.LOGGED":return Object(u.a)(Object(u.a)({},e),{},{user:n.payload});case"AUTH.LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{user:null});default:return e}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_TITLE":return Object(u.a)(Object(u.a)({},e),{},{title:n.title});case"MAIN.SET_LOADING.ON":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0});case"MAIN.SET_LOADING.OFF":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,loadingMessage:"Carregando..."});case"MAIN.SET_LOADING_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},{loadingMessage:n.message});default:return e}}}),cn=t(16),on=t.n(cn),un=t(88),ln=t(9),sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Carregando...";return{type:"MAIN.SET_LOADING_MESSAGE",message:e}},dn=on.a.mark(bn),pn=on.a.mark(gn);function mn(){var e=Object(s.a)(['\n    query VERIFY_TOKEN {\n        verify_token(token: "','"){\n            name\n            cpf\n            email\n            password\n            token\n        }\n    }\n']);return mn=function(){return e},e}var fn=function(e){return Object(we.gql)(mn(),e)};function bn(){var e,n;return on.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,localStorage.getItem("__authtoken")){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Object(ln.d)({type:"MAIN.SET_LOADING.ON"});case 5:return t.next=7,Object(ln.d)(sn("Entrando como ".concat(localStorage.getItem("__username").split(" ")[0],"...")));case 7:return e=localStorage.getItem("__authtoken"),t.next=10,Rn.query({query:fn(e)});case 10:return n=t.sent,localStorage.setItem("__authtoken",n.data.verify_token.token),localStorage.setItem("__username",n.data.verify_token.name),t.next=15,Object(ln.d)({type:"MAIN.SET_LOADING.OFF"});case 15:return t.next=17,Object(ln.d)({type:"AUTH.LOGGED",payload:n.data.verify_token});case 17:t.next=29;break;case 19:return t.prev=19,t.t0=t.catch(0),t.next=23,Object(ln.d)(sn("Falha ao tentar fazer o login. Por favor, tente novamente."));case 23:return t.next=25,Object(ln.c)(1e4);case 25:return t.next=27,Object(ln.d)({type:"MAIN.SET_LOADING.OFF"});case 27:return t.next=29,Object(ln.d)({type:"AUTH.LOGGED",payload:null});case 29:case"end":return t.stop()}}),dn,null,[[0,19]])}function gn(){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ln.e)("MAIN.APP.START",bn);case 2:case"end":return e.stop()}}),pn)}var vn=on.a.mark(jn),hn=on.a.mark(xn);function On(){var e=Object(s.a)(["\n                mutation CreateUser($userInput: UserInput!) {\n                    createUser(data: $userInput){ name }\n                }\n            "]);return On=function(){return e},e}function jn(e){var n,t;return on.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,t=e.history,a.next=3,Object(ln.d)({type:"SET_TITLE",title:"Registrando ".concat(e.payload.name.split(" ")[0],"...")});case 3:return a.next=5,Object(ln.c)(500);case 5:return a.prev=5,a.next=8,Rn.mutate({mutation:Object(we.gql)(On()),variables:{userInput:{name:n.name,email:n.mail,password:n.password,cpf:n.cpf,church:n.church}}});case 8:return a.sent,a.next=11,Object(ln.d)({type:"SET_TITLE",title:"Sucesso!"});case 11:t.push("/profile"),a.next=21;break;case 14:return a.prev=14,a.t0=a.catch(5),console.log(a.t0),a.next=19,Object(ln.d)({type:"SET_TITLE",title:"Erro inesperado!"});case 19:return a.next=21,Object(ln.d)({type:"REGISTER.ERROR",title:"Registrando ".concat(e.payload.name.split(" ")[0],"...")});case 21:case"end":return a.stop()}}),vn,null,[[5,14]])}function xn(){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ln.e)("REGISTER.SEND_DATA",jn);case 2:case"end":return e.stop()}}),hn)}var En=on.a.mark(Fn),wn=on.a.mark(kn);function yn(){var e=Object(s.a)(['\n            query Login{\n                login( cpf: "','", password: "','" )\n                {\n                    name\n                    cpf\n                    email\n                    password\n                    token\n                }\n            }\n        ']);return yn=function(){return e},e}function Fn(e){var n,t,a;return on.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,e.history,(t=e.setState)((function(e){return Object(u.a)(Object(u.a)({},e),{},{isErro:!1})})),r.next=4,Object(ln.c)(0);case 4:if(""!=n.cpf&&""!=n.password&&void 0!=n.cpf&&void 0!=n.password){r.next=7;break}return t((function(e){return Object(u.a)(Object(u.a)({},e),{},{isErro:!0,erro:"Favor, preencher completamente todos os campos."})})),r.abrupt("return");case 7:return r.next=9,Object(ln.d)({type:"MAIN.SET_LOADING.ON"});case 9:return r.next=11,Object(ln.d)(sn("Entrando..."));case 11:return r.next=13,Object(ln.c)(100);case 13:return r.prev=13,r.next=16,Rn.query({query:Object(we.gql)(yn(),n.cpf,n.password)});case 16:return a=r.sent,localStorage.setItem("__authtoken",a.data.login.token),localStorage.setItem("__username",a.data.login.name),r.next=21,Object(ln.d)({type:"MAIN.SET_LOADING.OFF"});case 21:return r.next=23,Object(ln.d)({type:"AUTH.LOGGED",payload:a.data.login});case 23:r.next=33;break;case 25:return r.prev=25,r.t0=r.catch(13),console.error(r.t0),r.next=30,Object(ln.d)(sn("Falha ao tentar entrar."));case 30:return t((function(e){var n,t,a,c,o;return Object(u.a)(Object(u.a)({},e),{},{isErro:!0,erro:null!==(n=null===r.t0||void 0===r.t0||null===(t=r.t0.networkError)||void 0===t||null===(a=t.result)||void 0===a||null===(c=a.errors)||void 0===c||null===(o=c[0])||void 0===o?void 0:o.message)&&void 0!==n?n:r.t0.message})})),r.next=33,Object(ln.d)({type:"MAIN.SET_LOADING.OFF"});case 33:case"end":return r.stop()}}),En,null,[[13,25]])}function kn(){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ln.e)("AUTH.LOGIN",Fn);case 2:case"end":return e.stop()}}),wn)}var Cn=on.a.mark(Nn);function Nn(){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ln.a)({main:Object(ln.b)(gn),authRegister:Object(ln.b)(xn),authLogin:Object(ln.b)(kn)});case 2:case"end":return e.stop()}}),Cn)}var Tn=Object(un.a)(),In=Object(nn.e)(rn,Object(nn.a)(Tn));Tn.run(Nn);var An=In,Sn=t(30),_n="http://192.168.0.81:3001",Rn=new we.ApolloClient({uri:"".concat(_n,"/graphql"),cache:new we.InMemoryCache});o.a.render(r.a.createElement(we.ApolloProvider,{client:Rn},r.a.createElement(i.a,{store:An},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Sn.a,null,r.a.createElement(en,null))))),document.getElementById("root"))},89:function(e,n,t){e.exports=t(104)}},[[89,1,2]]]);
//# sourceMappingURL=main.909b7b7f.chunk.js.map