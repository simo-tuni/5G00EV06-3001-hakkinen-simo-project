(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{227:function(e,t,n){},228:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(108),i=n.n(r),s=(n(227),n(228),n(51)),o=n(2);var j=function(){var e={color:"white"};return Object(o.jsxs)("nav",{children:[Object(o.jsx)("img",{src:"final_logo_small.png",alt:"Logo"}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)(s.b,{style:e,to:"/",children:Object(o.jsx)("li",{children:"Home"})}),Object(o.jsx)(s.b,{style:e,to:"/Currency",children:Object(o.jsx)("li",{children:"Currency"})})]})]})};var l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Home Page"})})},d=n(34),u=n.n(d),b=n(46),x=n(73),h=n(9),O=n(74),p=n.n(O),f=(n(164),n(43)),g=n(218),m=n(86),y=n(23),C={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var v=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("Scourge"),i=Object(h.a)(r,2),j=i[0],l=i[1],d=Object(c.useState)(""),O=Object(h.a)(d,2),v=O[0],w=O[1],I=Object(g.a)(C);Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency?League=".concat(j));case 2:t=e.sent,console.log(t),a(Object(b.a)(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]);var k={nodes:n.filter((function(e){return e.Name.toLowerCase().includes(v.toLowerCase())}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:"Select ongoing League"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:j,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Hardcore Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Standard"}),Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Hardcore"})]})}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)("label",{htmlFor:"search",children:["Search by Name: ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{id:"search",type:"text",onChange:function(e){w(e.target.value)}})]})}),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(f.g,{data:k,theme:I,layout:{custom:!0},children:function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f.c,{children:Object(o.jsxs)(f.e,{children:[Object(o.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(o.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(o.jsx)(f.a,{children:e.map((function(e,t){return Object(o.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(o.jsxs)(f.b,{style:{width:"100px"},children:[Object(o.jsx)("img",{src:e.Image,alt:"Picture of "+e.Name})," ",Object(o.jsx)(s.b,{to:{pathname:"/Currency/".concat(e.Name),state:{CurName:e.Name,Id:e.Id,League:j}},children:e.Name})]}),Object(o.jsx)(f.b,{style:{width:"100px"},children:e.Price})]},t)}))})]})}})})]})},w=n(392),I=n(217),k=n(396),S=n(214),L=n(215),N=n(97),P=n(19),H=n(118);var F=function(e){var t=e.match,n=Object(P.f)(),a=Object(c.useState)([]),r=Object(h.a)(a,2),i=r[0],s=r[1],j=Object(c.useState)([]),l=Object(h.a)(j,2),d=l[0],O=l[1],f=Object(c.useState)([n.state.League]),g=Object(h.a)(f,2),C=g[0],v=g[1],F=Object(c.useState)("Expedition"),D=Object(h.a)(F,2),E=D[0],R=D[1],K=Object(c.useState)(!1),B=Object(h.a)(K,2),T=B[0],z=B[1];function J(){return(J=Object(x.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getPredictCurrency?Name=".concat(n.state.CurName));case 2:t=e.sent,console.log(t),O(Object(b.a)(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return _.apply(this,arguments)}function _(){return(_=Object(x.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(t),e.next=3,p.a.get("/api/getPastCurrency?League=".concat(t,"&Id=").concat(n.state.Id));case 3:c=e.sent,console.log(c),s(Object(b.a)(c.data));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrencyDetails?League=".concat(C,"&name=").concat(t.params.id,"&Id=").concat(n.state.Id));case 2:c=e.sent,console.log(c),s(Object(b.a)(c.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("location:"),console.log(n),function(){e.apply(this,arguments)}(),console.log("League is: "+C),z("Scourge"===C),console.log("ShowPrediction state is: "+T)}),[C,n,t.params.id]);var A=function(e){var t=e.active,n=e.payload,c=e.label;return t&&n&&n.length?Object(o.jsxs)("div",{className:"custom-tooltip",children:[Object(o.jsx)("p",{className:"label",children:"Day: ".concat(c)}),Object(o.jsx)("p",{className:"price",children:"Price: ".concat(n[0].value," Chaos")})]}):null},M=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("h2",{children:"Predicted price"})}),Object(o.jsx)(H.a,{variant:"info",onClick:function(){return function(){return J.apply(this,arguments)}()},children:"Show predicted price"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)(w.a,{width:1200,height:600,data:d,margin:{top:5,right:20,bottom:5,left:0},children:[Object(o.jsx)(I.a,{type:"monotone",dataKey:"Price",stroke:"#8884d8"}),Object(o.jsx)(k.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(o.jsx)(S.a,{dataKey:"Day",label:{value:"Days since League start",dy:10}}),Object(o.jsx)(L.a,{label:{value:"Price in Chaos",position:"insideTopLeft",dx:75}}),Object(o.jsx)(N.a,{content:Object(o.jsx)(A,{})})]})})]})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{children:["Detailed overview for ",t.params.id]}),Object(o.jsx)("div",{children:"Select ongoing League"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:C,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Hardcore Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Standard"}),Object(o.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Hardcore"})]}),Object(o.jsx)("div",{children:"Browse past League data"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:E,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){U(e.target.textContent)},children:"Expedition"}),Object(o.jsx)(y.a.Item,{onClick:function(e){U(e.target.textContent)},children:"Hardcore Expedition"}),Object(o.jsx)(y.a.Item,{onClick:function(e){U(e.target.textContent)},children:"Ultimatum"}),Object(o.jsx)(y.a.Item,{onClick:function(e){U(e.target.textContent)},children:"Hardcore Ultimatum"}),Object(o.jsx)(y.a.Item,{onClick:function(e){U(e.target.textContent)},children:"Ritual"}),Object(o.jsx)(y.a.Item,{onClick:function(e){U(e.target.textContent)},children:"Hardcore Ritual"})]}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("h2",{children:"Real price"})}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)(w.a,{width:1200,height:600,data:i,margin:{top:5,right:20,bottom:5,left:0},children:[Object(o.jsx)(I.a,{type:"monotone",dataKey:"History",stroke:"#8884d8"}),Object(o.jsx)(k.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(o.jsx)(S.a,{dataKey:"Dates"}),Object(o.jsx)(L.a,{})]})}),T?Object(o.jsx)(M,{}):null]})};var D=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(P.c,{children:[Object(o.jsx)(P.a,{path:"/",exact:!0,component:l}),Object(o.jsx)(P.a,{path:"/currency",exact:!0,component:v}),Object(o.jsx)(P.a,{path:"/currency/:id",component:F})]})]})})},E=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,399)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),E()}},[[386,1,2]]]);
//# sourceMappingURL=main.dfd69bb7.chunk.js.map