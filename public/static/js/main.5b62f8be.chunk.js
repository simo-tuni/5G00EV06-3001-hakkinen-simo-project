(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{226:function(t,e,n){},227:function(t,e,n){},385:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(108),o=n.n(r),i=(n(226),n(227),n(50)),s=n(2);var j=function(){var t={color:"white"};return Object(s.jsxs)("nav",{children:[Object(s.jsx)("h3",{children:"Logo"}),Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)(i.b,{style:t,to:"/",children:Object(s.jsx)("li",{children:"Home"})}),Object(s.jsx)(i.b,{style:t,to:"/Currency",children:Object(s.jsx)("li",{children:"Currency"})})]})]})};var l=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Home Page"})})},d=n(37),u=n.n(d),b=n(55),x=n(83),h=n(9),O=n(84),g=n.n(O),p=(n(163),n(43)),f=n(217),m=n(86),C=n(23),y={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var v=function(){var t=Object(c.useState)([]),e=Object(h.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)("Scourge"),o=Object(h.a)(r,2),j=o[0],l=o[1],d=Object(c.useState)(""),O=Object(h.a)(d,2),v=O[0],k=O[1],w=Object(f.a)(y);Object(c.useEffect)((function(){function t(){return(t=Object(x.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("/api/getCurrency?League=".concat(j));case 2:e=t.sent,console.log(e),a(Object(b.a)(e.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[j]);var I={nodes:n.filter((function(t){return t.Name.toLowerCase().includes(v.toLowerCase())}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:"Select ongoing League"}),Object(s.jsxs)(m.a,{id:"dropdown-basic-button",title:j,children:[Object(s.jsx)(C.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Scourge"}),Object(s.jsx)(C.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Hardcore Scourge"}),Object(s.jsx)(C.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Standard"}),Object(s.jsx)(C.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Hardcore"})]}),Object(s.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(s.jsx)("input",{id:"search",type:"text",onChange:function(t){k(t.target.value)}})]}),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(p.g,{data:I,theme:w,layout:{custom:!0},children:function(t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p.c,{children:Object(s.jsxs)(p.e,{children:[Object(s.jsx)(p.d,{style:{width:"100px"},children:"Item"}),Object(s.jsx)(p.d,{style:{width:"100px"},children:"Price"})]})}),Object(s.jsx)(p.a,{children:t.map((function(t,e){return Object(s.jsxs)(p.f,{item:t,style:{width:"200px"},children:[Object(s.jsxs)(p.b,{style:{width:"100px"},children:[Object(s.jsx)("img",{src:t.Image,alt:"Picture of "+t.Name})," ",Object(s.jsx)(i.b,{to:{pathname:"/Currency/".concat(t.Name),state:{Id:t.Id,League:j}},children:t.Name})]}),Object(s.jsx)(p.b,{style:{width:"100px"},children:t.Price})]},e)}))})]})}})})]})},k=n(391),w=n(216),I=n(395),S=n(213),L=n(214),H=n(19);var F=function(t){var e=t.match,n=Object(H.f)(),a=Object(c.useState)([]),r=Object(h.a)(a,2),o=r[0],i=r[1],j=Object(c.useState)(n.state.League),l=Object(h.a)(j,2),d=l[0],O=l[1],p=Object(c.useState)("Expedition"),f=Object(h.a)(p,2),y=f[0],v=f[1];function F(t){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(u.a.mark((function t(e){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(e),t.next=3,g.a.get("/api/getPastCurrency?League=".concat(e,"&Id=").concat(n.state.Id));case 3:c=t.sent,console.log(c),i(Object(b.a)(c.data));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function t(){return(t=Object(x.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("/api/getCurrencyDetails?League=".concat(d,"&name=").concat(e.params.id,"&Id=").concat(n.state.Id));case 2:c=t.sent,console.log(c),i(Object(b.a)(c.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("location:"),console.log(n),function(){t.apply(this,arguments)}()}),[d,n,e.params.id]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:"Select ongoing League"}),Object(s.jsxs)(m.a,{id:"dropdown-basic-button",title:d,children:[Object(s.jsx)(C.a.Item,{onClick:function(t){O(t.target.textContent)},children:"Scourge"}),Object(s.jsx)(C.a.Item,{onClick:function(t){O(t.target.textContent)},children:"Hardcore Scourge"}),Object(s.jsx)(C.a.Item,{onClick:function(t){O(t.target.textContent)},children:"Standard"}),Object(s.jsx)(C.a.Item,{onClick:function(t){O(t.target.textContent)},children:"Hardcore"})]}),Object(s.jsx)("div",{children:"Browse past League data"}),Object(s.jsxs)(m.a,{id:"dropdown-basic-button",title:y,children:[Object(s.jsx)(C.a.Item,{onClick:function(t){F(t.target.textContent)},children:"Expedition"}),Object(s.jsx)(C.a.Item,{onClick:function(t){F(t.target.textContent)},children:"Hardcore Expedition"}),Object(s.jsx)(C.a.Item,{onClick:function(t){F(t.target.textContent)},children:"Ultimatum"}),Object(s.jsx)(C.a.Item,{onClick:function(t){F(t.target.textContent)},children:"Hardcore Ultimatum"}),Object(s.jsx)(C.a.Item,{onClick:function(t){F(t.target.textContent)},children:"Ritual"}),Object(s.jsx)(C.a.Item,{onClick:function(t){F(t.target.textContent)},children:"Hardcore Ritual"})]}),Object(s.jsxs)(k.a,{width:1200,height:600,data:o,margin:{top:5,right:20,bottom:5,left:0},children:[Object(s.jsx)(w.a,{type:"monotone",dataKey:"History",stroke:"#8884d8"}),Object(s.jsx)(I.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(s.jsx)(S.a,{dataKey:"Dates"}),Object(s.jsx)(L.a,{})]})]})};var N=function(){return Object(s.jsx)(i.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{}),Object(s.jsxs)(H.c,{children:[Object(s.jsx)(H.a,{path:"/",exact:!0,component:l}),Object(s.jsx)(H.a,{path:"/currency",exact:!0,component:v}),Object(s.jsx)(H.a,{path:"/currency/:id",component:F})]})]})})},P=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,398)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),P()}},[[385,1,2]]]);
//# sourceMappingURL=main.5b62f8be.chunk.js.map