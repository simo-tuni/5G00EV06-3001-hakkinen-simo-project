(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{227:function(t,e,n){},228:function(t,e,n){},386:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(108),i=n.n(r),o=(n(227),n(228),n(51)),s=n(2);var j=function(){var t={color:"white"};return Object(s.jsxs)("nav",{children:[Object(s.jsx)("h3",{children:"Logo"}),Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)(o.b,{style:t,to:"/",children:Object(s.jsx)("li",{children:"Home"})}),Object(s.jsx)(o.b,{style:t,to:"/Currency",children:Object(s.jsx)("li",{children:"Currency"})})]})]})};var l=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Home Page"})})},d=n(34),u=n.n(d),b=n(46),x=n(73),h=n(9),O=n(74),p=n.n(O),f=(n(164),n(43)),g=n(218),m=n(86),y=n(23),C={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var v=function(){var t=Object(c.useState)([]),e=Object(h.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)("Scourge"),i=Object(h.a)(r,2),j=i[0],l=i[1],d=Object(c.useState)(""),O=Object(h.a)(d,2),v=O[0],k=O[1],w=Object(g.a)(C);Object(c.useEffect)((function(){function t(){return(t=Object(x.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/getCurrency?League=".concat(j));case 2:e=t.sent,console.log(e),a(Object(b.a)(e.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[j]);var I={nodes:n.filter((function(t){return t.Name.toLowerCase().includes(v.toLowerCase())}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:"Select ongoing League"}),Object(s.jsxs)(m.a,{id:"dropdown-basic-button",title:j,children:[Object(s.jsx)(y.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Scourge"}),Object(s.jsx)(y.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Hardcore Scourge"}),Object(s.jsx)(y.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Standard"}),Object(s.jsx)(y.a.Item,{onClick:function(t){l(t.target.textContent)},children:"Hardcore"})]}),Object(s.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(s.jsx)("input",{id:"search",type:"text",onChange:function(t){k(t.target.value)}})]}),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(f.g,{data:I,theme:w,layout:{custom:!0},children:function(t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f.c,{children:Object(s.jsxs)(f.e,{children:[Object(s.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(s.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(s.jsx)(f.a,{children:t.map((function(t,e){return Object(s.jsxs)(f.f,{item:t,style:{width:"200px"},children:[Object(s.jsxs)(f.b,{style:{width:"100px"},children:[Object(s.jsx)("img",{src:t.Image,alt:"Picture of "+t.Name})," ",Object(s.jsx)(o.b,{to:{pathname:"/Currency/".concat(t.Name),state:{CurName:t.Name,Id:t.Id,League:j}},children:t.Name})]}),Object(s.jsx)(f.b,{style:{width:"100px"},children:t.Price})]},e)}))})]})}})})]})},k=n(392),w=n(217),I=n(396),S=n(214),L=n(215),N=n(97),P=n(19),H=n(118);var F=function(t){var e=t.match,n=Object(P.f)(),a=Object(c.useState)([]),r=Object(h.a)(a,2),i=r[0],o=r[1],j=Object(c.useState)([]),l=Object(h.a)(j,2),d=l[0],O=l[1],f=Object(c.useState)([n.state.League]),g=Object(h.a)(f,2),C=g[0],v=g[1],F=Object(c.useState)("Expedition"),D=Object(h.a)(F,2),E=D[0],R=D[1];function K(){return(K=Object(x.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/getPredictCurrency?Name=".concat(n.state.CurName));case 2:e=t.sent,console.log(e),O(Object(b.a)(e.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){return z.apply(this,arguments)}function z(){return(z=Object(x.a)(u.a.mark((function t(e){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(e),t.next=3,p.a.get("/api/getPastCurrency?League=".concat(e,"&Id=").concat(n.state.Id));case 3:c=t.sent,console.log(c),o(Object(b.a)(c.data));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(c.useEffect)((function(){function t(){return(t=Object(x.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/getCurrencyDetails?League=".concat(C,"&name=").concat(e.params.id,"&Id=").concat(n.state.Id));case 2:c=t.sent,console.log(c),o(Object(b.a)(c.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("location:"),console.log(n),function(){t.apply(this,arguments)}()}),[C,n,e.params.id]);var J=function(t){var e=t.active,n=t.payload,c=t.label;return e&&n&&n.length?Object(s.jsxs)("div",{className:"custom-tooltip",children:[Object(s.jsx)("p",{className:"label",children:"Day: ".concat(c)}),Object(s.jsx)("p",{className:"price",children:"Price: ".concat(n[0].value," Chaos")})]}):null};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:"Select ongoing League"}),Object(s.jsxs)(m.a,{id:"dropdown-basic-button",title:C,children:[Object(s.jsx)(y.a.Item,{onClick:function(t){v([t.target.textContent].concat())},children:"Scourge"}),Object(s.jsx)(y.a.Item,{onClick:function(t){v([t.target.textContent].concat())},children:"Hardcore Scourge"}),Object(s.jsx)(y.a.Item,{onClick:function(t){v([t.target.textContent].concat())},children:"Standard"}),Object(s.jsx)(y.a.Item,{onClick:function(t){v([t.target.textContent].concat())},children:"Hardcore"})]}),Object(s.jsx)("div",{children:"Browse past League data"}),Object(s.jsxs)(m.a,{id:"dropdown-basic-button",title:E,children:[Object(s.jsx)(y.a.Item,{onClick:function(t){B(t.target.textContent)},children:"Expedition"}),Object(s.jsx)(y.a.Item,{onClick:function(t){B(t.target.textContent)},children:"Hardcore Expedition"}),Object(s.jsx)(y.a.Item,{onClick:function(t){B(t.target.textContent)},children:"Ultimatum"}),Object(s.jsx)(y.a.Item,{onClick:function(t){B(t.target.textContent)},children:"Hardcore Ultimatum"}),Object(s.jsx)(y.a.Item,{onClick:function(t){B(t.target.textContent)},children:"Ritual"}),Object(s.jsx)(y.a.Item,{onClick:function(t){B(t.target.textContent)},children:"Hardcore Ritual"})]}),Object(s.jsx)(H.a,{variant:"info",onClick:function(){return function(){return K.apply(this,arguments)}()},children:"Show predicted price"}),Object(s.jsx)("div",{children:"Real price"}),Object(s.jsxs)(k.a,{width:1200,height:600,data:i,margin:{top:5,right:20,bottom:5,left:0},children:[Object(s.jsx)(w.a,{type:"monotone",dataKey:"History",stroke:"#8884d8"}),Object(s.jsx)(I.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(s.jsx)(S.a,{dataKey:"Dates"}),Object(s.jsx)(L.a,{})]}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(s.jsx)("h2",{children:"Predicted price"})}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(s.jsxs)(k.a,{width:1200,height:600,data:d,margin:{top:5,right:20,bottom:5,left:0},children:[Object(s.jsx)(w.a,{type:"monotone",dataKey:"Price",stroke:"#8884d8"}),Object(s.jsx)(I.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(s.jsx)(S.a,{dataKey:"Day",label:{value:"Days since League start",position:"bottom",dy:10}}),Object(s.jsx)(L.a,{label:{value:"Price in Chaos",position:"left",angle:-90,dy:-10}}),Object(s.jsx)(N.a,{content:Object(s.jsx)(J,{})})]})})]})};var D=function(){return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{}),Object(s.jsxs)(P.c,{children:[Object(s.jsx)(P.a,{path:"/",exact:!0,component:l}),Object(s.jsx)(P.a,{path:"/currency",exact:!0,component:v}),Object(s.jsx)(P.a,{path:"/currency/:id",component:F})]})]})})},E=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,399)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),E()}},[[386,1,2]]]);
//# sourceMappingURL=main.869362c1.chunk.js.map