(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{200:function(e,t,c){},201:function(e,t,c){},359:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(91),s=c.n(r),o=(c(200),c(201),c(43)),i=c(7);var j=function(){var e={color:"white"};return Object(i.jsxs)("nav",{children:[Object(i.jsx)("h3",{children:"Logo"}),Object(i.jsxs)("ul",{className:"nav-links",children:[Object(i.jsx)(o.b,{style:e,to:"/",children:Object(i.jsx)("li",{children:"Home"})}),Object(i.jsx)(o.b,{style:e,to:"/Currency",children:Object(i.jsx)("li",{children:"Currency"})})]})]})};var l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Home Page"})})},u=c(39),d=c.n(u),b=c(99),h=c(93),x=c(18),O=c(94),p=c.n(O),f=(c(138),c(36)),m=c(191),g={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var y=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(x.a)(r,2),j=s[0],l=s[1],u=Object(m.a)(g);Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency");case 2:t=e.sent,console.log(t),a(Object(b.a)(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O={nodes:c.filter((function(e){return e.Name.toLowerCase().includes(j.toLowerCase())}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(i.jsx)("input",{id:"search",type:"text",onChange:function(e){l(e.target.value)}})]}),Object(i.jsx)(f.g,{data:O,theme:u,layout:{custom:!0},children:function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f.c,{children:Object(i.jsxs)(f.e,{children:[Object(i.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(i.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(i.jsx)(f.a,{children:e.map((function(e,t){return Object(i.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(i.jsxs)(f.b,{style:{width:"100px"},children:[Object(i.jsx)("img",{src:e.Image,alt:"Picture of "+e.Name})," ",Object(i.jsx)(o.b,{to:{pathname:"/Currency/".concat(e.Name),state:{Id:e.Id}},children:e.Name})]}),Object(i.jsx)(f.b,{style:{width:"100px"},children:e.Price})]},t)}))})]})}})]})},v=c(361),w=c(190),C=c(365),k=c(187),F=c(188),I=c(17);var N=function(e){var t=e.match,c=Object(n.useState)([]),a=Object(x.a)(c,2),r=a[0],s=a[1],o=Object(I.f)();return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrencyDetails?name=".concat(t.params.id,"&id=").concat(o.state.Id));case 2:c=e.sent,console.log(c),s(Object(b.a)(c.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("location:"),console.log(o),function(){e.apply(this,arguments)}()}),[]),Object(i.jsxs)(v.a,{width:1200,height:600,data:r,margin:{top:5,right:20,bottom:5,left:0},children:[Object(i.jsx)(w.a,{type:"monotone",dataKey:"mean",stroke:"#8884d8"}),Object(i.jsx)(C.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(i.jsx)(k.a,{dataKey:"date"}),Object(i.jsx)(F.a,{})]})};var P=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)(I.c,{children:[Object(i.jsx)(I.a,{path:"/",exact:!0,component:l}),Object(i.jsx)(I.a,{path:"/currency",exact:!0,component:y}),Object(i.jsx)(I.a,{path:"/currency/:id",component:N})]})]})})},S=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,368)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),S()}},[[359,1,2]]]);
//# sourceMappingURL=main.d72ca810.chunk.js.map