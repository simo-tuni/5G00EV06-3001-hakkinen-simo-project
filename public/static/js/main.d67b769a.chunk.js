(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(26),a=n.n(s),i=(n(36),n(37),n(10)),j=n(1);var o=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var u=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},l=n(16),b=n.n(l),h=n(29),d=n(31),p=n(30),O=n.n(p);var x=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/getCurrency");case 2:t=e.sent,console.log(t),r(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=n.map((function(e,t){return Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:[e.currencyTypeName," --- ",e.chaosEquivalent]})},t)}));return Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:s})})},f=n(2);var v=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(f.a,{path:"/currency",component:x})]})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.d67b769a.chunk.js.map