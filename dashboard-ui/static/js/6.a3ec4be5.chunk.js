(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6,7,41],{705:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(706);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(a){c=!0,o=a}finally{try{n||null==s.return||s.return()}finally{if(c)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(707);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},707:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},709:function(e,t,r){"use strict";var n=r(202),c=r.n(n).a.create({baseURL:"http://".concat("192.168.0.81:3001"),headers:{Authorization:"Bearer ".concat(localStorage.getItem("__authtoken"))}});t.a=c},710:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return a})),r.d(t,"getStyle",(function(){return s})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return d})),r.d(t,"makeUid",(function(){return j})),r.d(t,"omitByKeys",(function(){return b})),r.d(t,"pickByKeys",(function(){return h})),r.d(t,"rgbToHex",(function(){return u}));var n=function e(t,r){for(var n=0,c=Object.keys(r);n<c.length;n++){var o=c[n];r[o]instanceof Object&&Object.assign(r[o],e(t[o],r[o]))}return Object.assign(t||{},r),t},c=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var c=t[n].cssRules,o=c.length-1;o>-1;o--)if(".ie-custom-properties"===c[o].selectorText){r=c[o].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},o=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},s=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&o()){var n=c();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=s(r,t);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,c,o=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(c,", ").concat(t/100,")")},j=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,t){for(var r={},n=Object.keys(e),c=0;c<n.length;c++)!t.includes(n[c])&&(r[n[c]]=e[n[c]]);return r},h=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},u=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),c="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))},m={deepObjectsMerge:n,getColor:a,getStyle:s,hexToRgb:l,hexToRgba:d,makeUid:j,omitByKeys:b,pickByKeys:h,rgbToHex:u};t.default=m}]))},712:function(e,t,r){"use strict";var n=r(27),c=r(30),o=r(199),i=(r(3),r(710)),s=r(713),a=function(e){var t=e.borderColor,r=e.backgroundColor,a=e.pointHoverBackgroundColor,l=e.dataPoints,d=e.label,j=e.pointed,b=Object(o.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=a||("transparent"!==r?r:t),u=[{data:l,borderColor:Object(i.getColor)(t),backgroundColor:Object(i.getColor)(r),pointBackgroundColor:Object(i.getColor)(h),pointHoverBackgroundColor:Object(i.getColor)(h),label:d}],m={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,l)-5,max:Math.max.apply(Math,l)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},x={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},g=function(){var e=j?m:x;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),O=Object(i.deepObjectsMerge)(u,b.datasets||{}),f=Object(i.deepObjectsMerge)(g,b.options||{});return Object(c.jsx)(s.c,Object(n.a)(Object(n.a)({},b),{},{datasets:O,options:f,labels:d}))};a.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=a},716:function(e,t,r){"use strict";var n=r(27),c=r(30),o=r(199),i=(r(3),r(710)),s=r(713),a=function(e){var t=e.backgroundColor,r=e.pointHoverBackgroundColor,a=e.dataPoints,l=e.label,d=(e.pointed,Object(o.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),j=[{data:a,backgroundColor:Object(i.getColor)(t),pointHoverBackgroundColor:Object(i.getColor)(r),label:l,barPercentage:.5,categoryPercentage:1}],b={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(c.jsx)(s.a,Object(n.a)(Object(n.a)({},d),{},{datasets:j,options:b,labels:l}))};a.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=a},723:function(e,t,r){"use strict";r.r(t);var n=r(30),c=(r(3),r(703)),o=r(708),i=r(712);t.default=function(e){return e.withCharts?Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsxs)(c.Tb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds",children:[Object(n.jsx)(o.a,{name:"cib-facebook",height:"52",className:"my-4"}),Object(n.jsx)(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[65,59,84,84,51,55,40],label:"Friends",labels:"months"})]})}),Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsxs)(c.Tb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets",children:[Object(n.jsx)(o.a,{name:"cib-twitter",height:"52",className:"my-4"}),Object(n.jsx)(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[1,13,9,17,34,41,38],label:"Followers",labels:"months"})]})}),Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsxs)(c.Tb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds",children:[Object(n.jsx)(o.a,{name:"cib-linkedin",height:"52",className:"my-4"}),Object(n.jsx)(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[78,81,80,45,34,12,40],label:"Contracts",labels:"months"})]})}),Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsxs)(c.Tb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning",children:[Object(n.jsx)(o.a,{name:"cil-calendar",height:"52",className:"my-4"}),Object(n.jsx)(i.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[35,23,56,22,97,23,64],label:"Followers",labels:"months"})]})})]}):Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsx)(c.Tb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds",children:Object(n.jsx)(o.a,{name:"cib-facebook",height:"56",className:"my-4"})})}),Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsx)(c.Tb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets",children:Object(n.jsx)(o.a,{name:"cib-twitter",height:"56",className:"my-4"})})}),Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsx)(c.Tb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds",children:Object(n.jsx)(o.a,{name:"cib-linkedin",height:"56",className:"my-4"})})}),Object(n.jsx)(c.u,{sm:"6",lg:"3",children:Object(n.jsx)(c.Tb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning",children:Object(n.jsx)(o.a,{name:"cil-calendar",height:"56",className:"my-4"})})})]})}},724:function(e,t,r){"use strict";r.r(t);var n=r(30),c=r(705),o=r(3),i=r(703),s=r(708),a=r(712),l=(r(716),r(709));t.default=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),r=t[0],d=t[1];return Object(o.useEffect)((function(){l.a.get("/users").then((function(e){var t=e.data;return d(t)}))}),[]),Object(n.jsxs)(i.wb,{children:[Object(n.jsx)(i.u,{sm:"6",lg:"3",children:Object(n.jsx)(i.Ub,{color:"gradient-primary",header:r.length.toString(),text:"Acampante".concat(1==r.length?"":"s"," cadastrado").concat(1==r.length?"":"s"),footerSlot:Object(n.jsx)(a.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[0,0,0,0,0,0,r.length],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(n.jsxs)(i.z,{children:[Object(n.jsx)(i.E,{color:"transparent",children:Object(n.jsx)(s.a,{name:"cil-settings"})}),Object(n.jsxs)(i.D,{className:"pt-0",placement:"bottom-end",children:[Object(n.jsx)(i.C,{children:"Action"}),Object(n.jsx)(i.C,{children:"Another action"}),Object(n.jsx)(i.C,{children:"Something else here..."}),Object(n.jsx)(i.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(n.jsx)(i.u,{sm:"6",lg:"3",children:Object(n.jsx)(i.Ub,{color:"gradient-info",header:r.filter((function(e){return e.isConfirmado})).length.toString(),text:"Acampante".concat(1==r.filter((function(e){return e.isConfirmado})).length?"":"s"," confirmado").concat(1==r.filter((function(e){return e.isConfirmado})).length?"":"s"),footerSlot:Object(n.jsx)(a.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[0,0,0,0,0,0,r.filter((function(e){return e.isConfirmado})).length],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(n.jsxs)(i.z,{children:[Object(n.jsx)(i.E,{caret:!1,color:"transparent",children:Object(n.jsx)(s.a,{name:"cil-location-pin"})}),Object(n.jsxs)(i.D,{className:"pt-0",placement:"bottom-end",children:[Object(n.jsx)(i.C,{children:"Action"}),Object(n.jsx)(i.C,{children:"Another action"}),Object(n.jsx)(i.C,{children:"Something else here..."}),Object(n.jsx)(i.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(n.jsx)(i.u,{sm:"6",lg:"6",children:Object(n.jsx)(i.Wb,{color:"success",header:(r.filter((function(e){return e.isConfirmado})).length/35*100).toFixed(1).replace(".",",")+"%",text:"Preenchimento do 1\xba lote (35)",footer:"Valor do lote autal: R$ 150.00",value:r.filter((function(e){return e.isConfirmado})).length/35*100})})]})}},767:function(e,t,r){"use strict";r.r(t);var n=r(30),c=(r(3),r(703)),o=r(723),i=r(724),s=r(712),a=r(716),l=r(708);t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.default,{}),Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{color:"success",header:"89.9%",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{color:"info",header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{color:"warning",header:"$98.111,00",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{header:"2 TB",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",children:Object(n.jsx)(c.ub,{color:"danger",animated:!0,size:"xs",className:"my-3",value:75})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{inverse:!0,color:"success",variant:"inverse",header:"89.9%",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{inverse:!0,color:"info",variant:"inverse",header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{inverse:!0,color:"warning",variant:"inverse",header:"$98.111,00",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Wb,{inverse:!0,color:"danger",variant:"inverse",value:95,header:"2 TB",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})})]}),Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"primary",children:Object(n.jsx)(l.a,{width:24,name:"cil-settings"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"info",children:Object(n.jsx)(l.a,{width:24,name:"cil-user"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"warning",children:Object(n.jsx)(l.a,{width:24,name:"cil-moon"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"danger",children:Object(n.jsx)(l.a,{width:24,name:"cil-bell"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"primary",iconPadding:!1,children:Object(n.jsx)(l.a,{width:24,name:"cil-settings"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"info",iconPadding:!1,children:Object(n.jsx)(l.a,{width:24,name:"cil-laptop"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"warning",iconPadding:!1,children:Object(n.jsx)(l.a,{width:24,name:"cil-moon"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"3",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"danger",iconPadding:!1,children:Object(n.jsx)(l.a,{width:24,name:"cil-bell"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"4",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"primary",iconPadding:!1,children:Object(n.jsx)(l.a,{width:24,name:"cil-settings",className:"mx-5"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"4",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"info",iconPadding:!1,children:Object(n.jsx)(l.a,{width:24,name:"cil-laptop",className:"mx-5"})})}),Object(n.jsx)(c.u,{xs:"12",sm:"6",lg:"4",children:Object(n.jsx)(c.Vb,{text:"income",header:"$1.999,50",color:"warning",iconPadding:!1,footerSlot:Object(n.jsx)(c.l,{className:"card-footer px-3 py-2",children:Object(n.jsxs)(c.db,{className:"font-weight-bold font-xs btn-block text-muted",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",Object(n.jsx)(l.a,{name:"cil-arrow-right",className:"float-right",width:"16"})]})}),children:Object(n.jsx)(l.a,{width:24,name:"cil-moon",className:"mx-5"})})})]}),Object(n.jsx)(o.default,{}),Object(n.jsx)(o.default,{withCharts:!0}),Object(n.jsxs)(c.m,{className:"mb-4",children:[Object(n.jsx)(c.Xb,{header:"87.500",text:"Visitors",color:"gradient-info",children:Object(n.jsx)(l.a,{name:"cil-people",height:"36"})}),Object(n.jsx)(c.Xb,{header:"385",text:"New Clients",color:"gradient-success",children:Object(n.jsx)(l.a,{name:"cil-userFollow",height:"36"})}),Object(n.jsx)(c.Xb,{header:"1238",text:"Products sold",color:"gradient-warning",children:Object(n.jsx)(l.a,{name:"cil-basket",height:"36"})}),Object(n.jsx)(c.Xb,{header:"28%",text:"Returning Visitors",children:Object(n.jsx)(l.a,{name:"cil-chartPie",height:"36"})}),Object(n.jsx)(c.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",progressSlot:Object(n.jsx)(c.ub,{color:"danger",size:"xs",value:75,animated:!0,className:"my-3"}),children:Object(n.jsx)(l.a,{name:"cil-speedometer",height:"36"})})]}),Object(n.jsxs)(c.m,{className:"mb-4",children:[Object(n.jsx)(c.Xb,{header:"87.500",text:"Visitors",color:"gradient-info",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-people",height:"36"})}),Object(n.jsx)(c.Xb,{header:"385",text:"New Clients",color:"gradient-success",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-userFollow",height:"36"})}),Object(n.jsx)(c.Xb,{header:"1238",text:"Products sold",color:"gradient-warning",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-basket",height:"36"})}),Object(n.jsx)(c.Xb,{header:"28%",text:"Returning Visitors",color:"gradient-primary",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-chartPie",height:"36"})}),Object(n.jsx)(c.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-speedometer",height:"36"})})]}),Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"87.500",text:"Visitors",color:"gradient-info",children:Object(n.jsx)(l.a,{name:"cil-people",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"385",text:"New Clients",color:"gradient-success",children:Object(n.jsx)(l.a,{name:"cil-userFollow",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"1238",text:"Products sold",color:"gradient-warning",children:Object(n.jsx)(l.a,{name:"cil-basket",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"28%",text:"Returning Visitors",color:"gradient-primary",children:Object(n.jsx)(l.a,{name:"cil-chartPie",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",children:Object(n.jsx)(l.a,{name:"cil-speedometer",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"972",text:"comments",color:"gradient-info",children:Object(n.jsx)(l.a,{name:"cil-speech",height:"36"})})})]}),Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"87.500",text:"Visitors",color:"gradient-info",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-people",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"385",text:"New Clients",color:"gradient-success",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-userFollow",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"1238",text:"Products sold",color:"gradient-warning",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-basket",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"28%",text:"Returning Visitors",color:"gradient-primary",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-chartPie",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-speedometer",height:"36"})})}),Object(n.jsx)(c.u,{sm:"6",md:"2",children:Object(n.jsx)(c.Xb,{header:"972",text:"comments",color:"gradient-info",inverse:!0,children:Object(n.jsx)(l.a,{name:"cil-speech",height:"36"})})})]}),Object(n.jsxs)(c.wb,{children:[Object(n.jsx)(c.u,{sm:"4",lg:"2",children:Object(n.jsx)(c.Yb,{header:"title",text:"1,123",children:Object(n.jsx)(s.a,{style:{height:"40px"},borderColor:"danger"})})}),Object(n.jsx)(c.u,{sm:"4",lg:"2",children:Object(n.jsx)(c.Yb,{header:"title",text:"1,123",children:Object(n.jsx)(s.a,{style:{height:"40px"},borderColor:"primary"})})}),Object(n.jsx)(c.u,{sm:"4",lg:"2",children:Object(n.jsx)(c.Yb,{header:"title",text:"1,123",children:Object(n.jsx)(s.a,{style:{height:"40px"},borderColor:"success"})})}),Object(n.jsx)(c.u,{sm:"4",lg:"2",children:Object(n.jsx)(c.Yb,{header:"title",text:"1,123",children:Object(n.jsx)(a.a,{style:{height:"40px"},backgroundColor:"danger"})})}),Object(n.jsx)(c.u,{sm:"4",lg:"2",children:Object(n.jsx)(c.Yb,{header:"title",text:"1,123",children:Object(n.jsx)(a.a,{style:{height:"40px"},backgroundColor:"primary"})})}),Object(n.jsx)(c.u,{sm:"4",lg:"2",children:Object(n.jsx)(c.Yb,{header:"title",text:"1,123",children:Object(n.jsx)(a.a,{style:{height:"40px"},backgroundColor:"success"})})})]})]})}}}]);
//# sourceMappingURL=6.a3ec4be5.chunk.js.map