(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},359:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(91),s=n.n(a),i=(n(200),n(201),n(48)),j=n(7);var o=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var u=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},b=n(39),l=n.n(b),h=n(99),d=n(93),x=n(18),O=n(94),p=n.n(O),f=(n(138),n(36)),m=n(191),y={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var g=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(x.a)(a,2),o=s[0],u=s[1],b=Object(m.a)(y);Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency");case 2:t=e.sent,r(Object(h.a)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O={nodes:n.filter((function(e){return e.Name.toLowerCase().includes(o.toLowerCase())}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(j.jsx)("input",{id:"search",type:"text",onChange:function(e){u(e.target.value)}})]}),Object(j.jsx)(f.g,{data:O,theme:b,layout:{custom:!0},children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.c,{children:Object(j.jsxs)(f.e,{children:[Object(j.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(j.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(j.jsx)(f.a,{children:e.map((function(e,t){return Object(j.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(j.jsxs)(f.b,{style:{width:"100px"},children:[Object(j.jsx)("img",{src:e.Image,alt:"Picture of "+e.Name})," ",Object(j.jsx)(i.b,{to:"/Currency/".concat(e.Name),children:e.Name})]}),Object(j.jsx)(f.b,{style:{width:"100px"},children:e.Price})]},t)}))})]})}})]})},v=n(361),w=n(190),C=n(365),k=n(187),F=n(188);var N=function(e){var t=e.match,n=Object(c.useState)([]),r=Object(x.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrencyDetails?name=".concat(t.params.id));case 2:n=e.sent,console.log(n),s(Object(h.a)(n.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)(v.a,{width:1200,height:600,data:a,margin:{top:5,right:20,bottom:5,left:0},children:[Object(j.jsx)(w.a,{type:"monotone",dataKey:"mean",stroke:"#8884d8"}),Object(j.jsx)(C.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(j.jsx)(k.a,{dataKey:"date"}),Object(j.jsx)(F.a,{})]})},P=n(17);var S=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(P.c,{children:[Object(j.jsx)(P.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(P.a,{path:"/currency",exact:!0,component:g}),Object(j.jsx)(P.a,{path:"/currency/:id",component:N})]})]})})},L=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,368)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),L()}},[[359,1,2]]]);
//# sourceMappingURL=main.c9eefad5.chunk.js.map