(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{704:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var c=s(27),n=s(30),r=s(199),i=s(3),a=s.n(i),j=s(703),d=function(e){var t=e.name,s=e.text,i=Object(r.a)(e,["name","text"]),a=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(n.jsx)("div",{className:"card-header-actions",children:Object(n.jsx)(j.db,Object(c.a)(Object(c.a)({},i),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(n.jsx)("small",{className:"text-muted",children:s||"docs"})}))})},o=a.a.memo(d)},709:function(e,t,s){"use strict";var c=s(202),n=s.n(c).a.create({baseURL:"http://".concat("192.168.0.81:3001"),headers:{Authorization:"Bearer ".concat(localStorage.getItem("__authtoken"))}});t.a=n},711:function(e,t,s){"use strict";function c(e,t,s,c,n,r,i){try{var a=e[r](i),j=a.value}catch(d){return void s(d)}a.done?t(j):Promise.resolve(j).then(c,n)}function n(e){return function(){var t=this,s=arguments;return new Promise((function(n,r){var i=e.apply(t,s);function a(e){c(i,n,r,a,j,"next",e)}function j(e){c(i,n,r,a,j,"throw",e)}a(void 0)}))}}s.d(t,"a",(function(){return n}))},714:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var c=s(26),n=s.n(c),r=s(711),i=s(709);function a(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},736:function(e,t,s){"use strict";s.r(t);var c=s(30),n=(s(3),s(703)),r=s(704),i=s(714),a=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},j=["name","registered","role","status"];t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(n.wb,{children:[Object(c.jsx)(n.u,{xs:"12",lg:"6",children:Object(c.jsxs)(n.j,{children:[Object(c.jsxs)(n.n,{children:["Simple Table",Object(c.jsx)(r.a,{name:"CModal"})]}),Object(c.jsx)(n.k,{children:Object(c.jsx)(n.y,{items:i.a,fields:j,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(n.b,{color:a(e.status),children:e.status})})}}})})]})}),Object(c.jsx)(n.u,{xs:"12",lg:"6",children:Object(c.jsxs)(n.j,{children:[Object(c.jsx)(n.n,{children:"Striped Table"}),Object(c.jsx)(n.k,{children:Object(c.jsx)(n.y,{items:i.a,fields:j,striped:!0,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(n.b,{color:a(e.status),children:e.status})})}}})})]})})]}),Object(c.jsxs)(n.wb,{children:[Object(c.jsx)(n.u,{xs:"12",lg:"6",children:Object(c.jsxs)(n.j,{children:[Object(c.jsx)(n.n,{children:"Condensed Table"}),Object(c.jsx)(n.k,{children:Object(c.jsx)(n.y,{items:i.a,fields:j,size:"sm",itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(n.b,{color:a(e.status),children:e.status})})}}})})]})}),Object(c.jsx)(n.u,{xs:"12",lg:"6",children:Object(c.jsxs)(n.j,{children:[Object(c.jsx)(n.n,{children:"Bordered Table"}),Object(c.jsx)(n.k,{children:Object(c.jsx)(n.y,{items:i.a,fields:j,bordered:!0,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(n.b,{color:a(e.status),children:e.status})})}}})})]})})]}),Object(c.jsx)(n.wb,{children:Object(c.jsx)(n.u,{children:Object(c.jsxs)(n.j,{children:[Object(c.jsx)(n.n,{children:"Combined All Table"}),Object(c.jsx)(n.k,{children:Object(c.jsx)(n.y,{items:i.a,fields:j,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(n.b,{color:a(e.status),children:e.status})})}}})})]})})}),Object(c.jsx)(n.wb,{children:Object(c.jsx)(n.u,{children:Object(c.jsxs)(n.j,{children:[Object(c.jsx)(n.n,{children:"Combined All dark Table"}),Object(c.jsx)(n.k,{children:Object(c.jsx)(n.y,{items:i.a,fields:j,dark:!0,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(n.b,{color:a(e.status),children:e.status})})}}})})]})})})]})}}}]);
//# sourceMappingURL=11.41113d78.chunk.js.map