(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{231:function(e,t,c){},232:function(e,t,c){},390:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(113),i=c.n(r),s=(c(231),c(232),c(46)),j=c(1);var o=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("img",{className:"logo",src:"/final_logo_small.png",alt:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(s.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(s.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})}),Object(j.jsx)(s.b,{style:e,to:"/Predictionsettings",children:Object(j.jsx)("li",{children:"ML model settings"})})]})]})};var l=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},d=c(34),b=c.n(d),u=c(36),h=c(75),x=c(6),O=c(76),p=c.n(O),f=(c(167),c(44)),g=c(222),m=c(90),y=c(25),C={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var v=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("Scourge"),i=Object(x.a)(r,2),o=i[0],l=i[1],d=Object(n.useState)(""),O=Object(x.a)(d,2),v=O[0],k=O[1],w=Object(g.a)(C);Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency?League=".concat(o));case 2:t=e.sent,console.log(t),a(Object(u.a)(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]);var I={nodes:c.filter((function(e){return e.Name.toLowerCase().includes(v.toLowerCase())}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:"Select ongoing League"}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsxs)(m.a,{id:"dropdown-basic-button",title:o,children:[Object(j.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Scourge"}),Object(j.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Hardcore Scourge"}),Object(j.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Standard"}),Object(j.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Hardcore"})]})}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsxs)("label",{htmlFor:"search",children:["Search by Name: ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{id:"search",type:"text",onChange:function(e){k(e.target.value)}})]})}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f.g,{data:I,theme:w,layout:{custom:!0},children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.c,{children:Object(j.jsxs)(f.e,{children:[Object(j.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(j.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(j.jsx)(f.a,{children:e.map((function(e,t){return Object(j.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(j.jsxs)(f.b,{style:{width:"100px"},children:[Object(j.jsx)("img",{src:e.Image,alt:"Picture of "+e.Name})," ",Object(j.jsx)(s.b,{to:{pathname:"/Currency/".concat(e.Name),state:{CurName:e.Name,Id:e.Id,League:o}},children:e.Name})]}),Object(j.jsx)(f.b,{style:{width:"100px"},children:e.Price})]},t)}))})]})}})})]})},k=c(396),w=c(221),I=c(400),S=c(217),L=c(218),N=c(102),P=c(21),D=c(54);var H=function(e){var t=e.match,c=Object(P.f)(),a=Object(n.useState)([]),r=Object(x.a)(a,2),i=r[0],s=r[1],o=Object(n.useState)([]),l=Object(x.a)(o,2),d=l[0],O=l[1],f=Object(n.useState)([c.state.League]),g=Object(x.a)(f,2),C=g[0],v=g[1],H=Object(n.useState)("Expedition"),F=Object(x.a)(H,2),E=F[0],R=F[1],A=Object(n.useState)(!1),z=Object(x.a)(A,2),B=z[0],K=z[1],U=Object(n.useState)(""),_=Object(x.a)(U,2),J=_[0],M=_[1];function T(){return(T=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getPredictCurrency?Name=".concat(c.state.CurName));case 2:t=e.sent,console.log(t),O(Object(u.a)(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return G.apply(this,arguments)}function G(){return(G=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(t),e.next=3,p.a.get("/api/getPastCurrency?League=".concat(t,"&Id=").concat(c.state.Id));case 3:n=e.sent,console.log(n),s(Object(u.a)(n.data));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrencyDetails?League=".concat(C,"&name=").concat(t.params.id,"&Id=").concat(c.state.Id));case 2:n=e.sent,console.log(n),s(Object(u.a)(n.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("location:"),console.log(c),function(){e.apply(this,arguments)}(),"Scourge"===C[0]?K(!0):K(!1);var n=t.params.id.replace(/ /g,"_",(function(e){return e}));M("https://www.poewiki.net/wiki/".concat(n))}),[C,c,t.params.id]);var Q=function(e){var t=e.active,c=e.payload,n=e.label;return t&&c&&c.length?Object(j.jsxs)("div",{className:"custom-tooltip",children:[Object(j.jsx)("p",{className:"label",children:"Day: ".concat(n)}),Object(j.jsx)("p",{className:"price",children:"Price: ".concat(c[0].value," Chaos")})]}):null},V=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsx)("h2",{children:"Predicted price"})}),Object(j.jsx)(D.a,{variant:"info",onClick:function(){return function(){return T.apply(this,arguments)}()},children:"Show predicted price"}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsxs)(k.a,{width:1200,height:600,data:d,margin:{top:5,right:20,bottom:30,left:40},children:[Object(j.jsx)(w.a,{type:"monotone",dataKey:"Price",stroke:"#8884d8"}),Object(j.jsx)(I.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(j.jsx)(S.a,{dataKey:"Day",label:{value:"Days since League start",dy:20}}),Object(j.jsx)(L.a,{label:{value:"Price in Chaos",position:"left",angle:-90}}),Object(j.jsx)(N.a,{content:Object(j.jsx)(Q,{})})]})})]})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:["Detailed overview for ",Object(j.jsx)("a",{href:J,children:t.params.id})]}),Object(j.jsx)("div",{children:"Select ongoing League"}),Object(j.jsxs)(m.a,{id:"dropdown-basic-button",title:C,children:[Object(j.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Scourge"}),Object(j.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Hardcore Scourge"}),Object(j.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Standard"}),Object(j.jsx)(y.a.Item,{onClick:function(e){v([e.target.textContent].concat())},children:"Hardcore"})]}),Object(j.jsx)("div",{children:"Browse past League data"}),Object(j.jsxs)(m.a,{id:"dropdown-basic-button",title:E,children:[Object(j.jsx)(y.a.Item,{onClick:function(e){q(e.target.textContent)},children:"Expedition"}),Object(j.jsx)(y.a.Item,{onClick:function(e){q(e.target.textContent)},children:"Hardcore Expedition"}),Object(j.jsx)(y.a.Item,{onClick:function(e){q(e.target.textContent)},children:"Ultimatum"}),Object(j.jsx)(y.a.Item,{onClick:function(e){q(e.target.textContent)},children:"Hardcore Ultimatum"}),Object(j.jsx)(y.a.Item,{onClick:function(e){q(e.target.textContent)},children:"Ritual"}),Object(j.jsx)(y.a.Item,{onClick:function(e){q(e.target.textContent)},children:"Hardcore Ritual"})]}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsx)("h2",{children:"Real price"})}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsxs)(k.a,{width:1200,height:600,data:i,margin:{top:5,right:20,bottom:30,left:40},children:[Object(j.jsx)(w.a,{type:"monotone",dataKey:"History",stroke:"#8884d8"}),Object(j.jsx)(I.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(j.jsx)(S.a,{dataKey:"Dates",label:{value:"Date",dy:20}}),Object(j.jsx)(L.a,{label:{value:"Price in Chaos",position:"left",angle:-90}}),Object(j.jsx)(N.a,{content:Object(j.jsx)(Q,{})})]})}),B?Object(j.jsx)(V,{}):null]})},F=c(219),E=c(152),R=c(101);var A=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),i=Object(x.a)(r,2),s=i[0],o=i[1],l=Object(n.useState)(),d=Object(x.a)(l,2),b=d[0],h=d[1],O=Object(n.useState)([]),p=Object(x.a)(O,2),f=(p[0],p[1]),g=Object(n.useState)(0),m=Object(x.a)(g,2),y=m[0],C=m[1],v=Object(n.useState)(0),k=Object(x.a)(v,2),w=k[0],I=k[1],S=c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:e.amount}),Object(j.jsx)("td",{children:e.function}),Object(j.jsx)("td",{children:Object(j.jsx)(D.a,{onClick:function(){return L(t)},children:"Delete"})})]},t)}));Object(n.useEffect)((function(){f({epochs:y,batchsize:w})}),[y,w]);var L=function(e){for(var t=c,n=0;n<t.length;n++)if(n===e){t.splice(n,1),a(Object(u.a)(t));break}},N=function(){var e=c;e.push({amount:s,function:b});for(var t=0;t<e.length;t++)e[t].id=t;console.log(e),a(Object(u.a)(e))};return Object(j.jsxs)(F.a,{children:[Object(j.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Amount of Epochs"}),Object(j.jsx)("th",{children:"Batch size"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:y}),Object(j.jsx)("td",{children:w})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:Object(j.jsx)(R.a.Control,{type:"text",name:"name",onChange:function(e){return C(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)(R.a.Control,{type:"text",name:"name",onChange:function(e){return I(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)(D.a,{variant:"primary",onClick:function(){return N()},children:"Set fit stage settings"})})]})]})]}),Object(j.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"Amount of Units"}),Object(j.jsx)("th",{children:"Activation function"})]})}),Object(j.jsxs)("tbody",{children:[S,Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:Object(j.jsx)(R.a.Control,{type:"text",name:"name",placeholder:"integer",onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)(R.a.Control,{type:"text",name:"name",placeholder:"ReLU",onChange:function(e){return h(e.target.value)}})}),Object(j.jsx)("td",{children:Object(j.jsx)(D.a,{variant:"primary",onClick:function(){return N()},children:"Add layer"})})]})]})]})]})};var z=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(P.c,{children:[Object(j.jsx)(P.a,{path:"/",exact:!0,component:l}),Object(j.jsx)(P.a,{path:"/currency",exact:!0,component:v}),Object(j.jsx)(P.a,{path:"/currency/:id",component:H}),Object(j.jsx)(P.a,{path:"/predictionsettings",component:A})]})]})})},B=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,403)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),B()}},[[390,1,2]]]);
//# sourceMappingURL=main.e65a763d.chunk.js.map