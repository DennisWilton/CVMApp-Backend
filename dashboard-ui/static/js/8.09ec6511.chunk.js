(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{705:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(706);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(s){c=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(c)throw i}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},706:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(707);function c(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},707:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},709:function(t,e,r){"use strict";var n=r(202),c=r.n(n).a.create({baseURL:"http://".concat("192.168.0.81:3001"),headers:{Authorization:"Bearer ".concat(localStorage.getItem("__authtoken"))}});e.a=c},711:function(t,e,r){"use strict";function n(t,e,r,n,c,i,a){try{var o=t[i](a),s=o.value}catch(u){return void r(u)}o.done?e(s):Promise.resolve(s).then(n,c)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(c,i){var a=t.apply(e,r);function o(t){n(a,c,i,o,s,"next",t)}function s(t){n(a,c,i,o,s,"throw",t)}o(void 0)}))}}r.d(e,"a",(function(){return c}))},714:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(26),c=r.n(n),i=r(711),a=r(709);function o(){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("/users");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},769:function(t,e,r){"use strict";r.r(e);var n=r(30),c=r(705),i=r(3),a=r(703),o=r(708),s=r(709);r(714);e.default=function(t){var e=t.match,r=Object(i.useState)({}),u=Object(c.a)(r,2),d=u[0],j=u[1],l=Object(i.useState)([]),b=Object(c.a)(l,2),f=(b[0],b[1]);return Object(i.useEffect)((function(){s.a.get("/user/".concat(e.params.id)).then((function(t){var e=t.data;return j(e)}))}),[]),Object(i.useEffect)((function(){f(d?Object.entries(d):[["id",Object(n.jsxs)("span",{children:[Object(n.jsx)(o.a,{className:"text-muted",name:"cui-icon-ban"})," Not found"]})]])}),[d]),Object(n.jsx)(a.wb,{children:Object(n.jsx)(a.u,{lg:6,children:Object(n.jsxs)(a.j,{children:[Object(n.jsxs)(a.n,{children:["User id: ",e.params.id]}),Object(n.jsx)(a.k,{children:Object(n.jsx)("table",{className:"table table-striped table-hover",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Nome:"}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:d.name})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"CPF:"}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:d.cpf})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"E-mail:"}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:d.email})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Participante confirmado?"}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:d.isConfirmado?"Sim":"N\xe3o"})})]})]})})})]})})})}}}]);
//# sourceMappingURL=8.09ec6511.chunk.js.map