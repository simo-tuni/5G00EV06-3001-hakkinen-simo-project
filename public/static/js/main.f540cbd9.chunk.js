(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(42),s=n.n(a),i=(n(53),n(54),n(11)),j=n(1);var o=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var u=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},l=n(13),b=n.n(l),h=n(24),d=n(21),x=n(17),O=n(22),p=n.n(O),f=(n(41),n(9)),m=n(48),v={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var g=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(x.a)(a,2),o=s[0],u=s[1],l=Object(m.a)(v);Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency");case 2:t=e.sent,r(Object(h.a)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O={nodes:n.filter((function(e){return e.Name.toLowerCase().includes(o.toLowerCase())}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(j.jsx)("input",{id:"search",type:"text",onChange:function(e){u(e.target.value)}})]}),Object(j.jsx)(f.g,{data:O,theme:l,layout:{custom:!0},children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.c,{children:Object(j.jsxs)(f.e,{children:[Object(j.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(j.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(j.jsx)(f.a,{children:e.map((function(e,t){return Object(j.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(j.jsxs)(f.b,{style:{width:"100px"},children:[Object(j.jsx)("img",{src:e.Image,alt:"Picture of "+e.Name})," ",Object(j.jsx)(i.b,{to:"/Currency/".concat(e.Name),children:e.Name})]}),Object(j.jsx)(f.b,{style:{width:"100px"},children:e.Price})]},t)}))})]})}})]})};var y=function(e){var t=e.match,n=Object(c.useState)([]),r=Object(x.a)(n,2),a=r[0],s=r[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrencyDetails?name=".concat(t.params.id));case 2:n=e.sent,console.log(n),s(Object(h.a)(n.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=a.map((function(e,t){return Object(j.jsx)("div",{children:e},t)}));return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:i})})},w=n(2);var C=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(w.a,{path:"/currency",exact:!0,component:g}),Object(j.jsx)(w.a,{path:"/currency/:id",component:y})]})]})})},F=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),F()}},[[80,1,2]]]);
//# sourceMappingURL=main.f540cbd9.chunk.js.map