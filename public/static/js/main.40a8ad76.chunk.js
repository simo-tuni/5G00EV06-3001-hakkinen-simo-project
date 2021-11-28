(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{242:function(e,t,n){},243:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(41),i=n.n(a),s=(n(242),n(243),n(50)),o=n(1);var j=function(){var e={color:"white"};return Object(o.jsxs)("nav",{children:[Object(o.jsx)("img",{className:"logo",src:"/final_logo_small.png",alt:"Logo"}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)(s.b,{style:e,to:"/",children:Object(o.jsx)("li",{children:"Home"})}),Object(o.jsx)(s.b,{style:e,to:"/Currency",children:Object(o.jsx)("li",{children:"Currency"})}),Object(o.jsx)(s.b,{style:e,to:"/Predictionsettings",children:Object(o.jsx)("li",{children:"ML model settings"})})]})]})};var l=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("h1",{children:"Home Page for the application"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{style:{float:"left",width:"50%",display:"flex",justifyContent:"center",alignItems:"justify"},children:Object(o.jsxs)("h3",{children:["This application allows the User to view currency data for the ARPG"," ",Object(o.jsx)("a",{href:"https://www.pathofexile.com/",children:"Path of Exile"}),". Players in Path of Exile (or poe for short) can trade with each other, however there does not exist a money equivalent in the game, such as gold or coins. This is why certain items with varying uses are used by players as a pseudo money equivalent to facilitate easier trading between players."]})}),Object(o.jsx)("div",{style:{float:"right",width:"50%",display:"flex",justifyContent:"center",alignItems:"justify"},children:Object(o.jsx)("h3",{children:"Links to used resources"})}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("a",{href:"https://poe.ninja/",children:"Poe.ninja"}),", used to get data for currently active leagues"]}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("a",{href:"https://poe.watch/",children:"Poe.watch"}),", used to get date data for historical data"]}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("a",{href:"https://poe-antiquary.xyz/",children:"Poe-antiquary"}),", used to get data for expired leagues"]})]})},d=n(26),u=n.n(d),b=n(29),h=n(52),O=n(6),x=n(46),f=n.n(x),p=(n(144),n(48)),g=n(233),m=n(66),y=n(21),v={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 16px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var C=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("Scourge"),i=Object(O.a)(a,2),j=i[0],l=i[1],d=Object(c.useState)(""),x=Object(O.a)(d,2),C=x[0],w=x[1],k=Object(g.a)(v);Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/getCurrency?League=".concat(j));case 2:t=e.sent,r(Object(b.a)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]);var S={nodes:n.filter((function(e){return e.Name.toLowerCase().includes(C.toLowerCase())}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:"Select ongoing League"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:j,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Hardcore Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Standard"}),Object(o.jsx)(y.a.Item,{onClick:function(e){l(e.target.textContent)},children:"Hardcore"})]})}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)("label",{htmlFor:"search",children:["Search by Name: ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{id:"search",type:"text",onChange:function(e){w(e.target.value)}})]})}),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p.g,{data:S,theme:k,layout:{custom:!0},children:function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.c,{children:Object(o.jsxs)(p.e,{children:[Object(o.jsx)(p.d,{style:{width:"100px"},children:"Item"}),Object(o.jsx)(p.d,{style:{width:"100px"},children:"Price"})]})}),Object(o.jsx)(p.a,{children:e.map((function(e,t){return Object(o.jsxs)(p.f,{item:e,style:{width:"200px"},children:[Object(o.jsxs)(p.b,{style:{width:"100px"},children:[Object(o.jsx)("img",{src:e.Image,alt:"Picture of "+e.Name})," ",Object(o.jsx)(s.b,{to:{pathname:"/Currency/".concat(e.Name),state:{CurName:e.Name,Id:e.Id,League:j}},children:e.Name})]}),Object(o.jsx)(p.b,{style:{width:"100px"},children:e.Price})]},t)}))})]})}})})]})},w=n(408),k=n(232),S=n(412),I=n(228),L=n(229),N=n(106),P=n(22),E=n(47);var D=function(e){var t=e.match,n=Object(P.f)(),r=Object(c.useState)([]),a=Object(O.a)(r,2),i=a[0],s=a[1],j=Object(c.useState)([]),l=Object(O.a)(j,2),d=l[0],x=l[1],p=Object(c.useState)([n.state.League]),g=Object(O.a)(p,2),v=g[0],C=g[1],D=Object(c.useState)("Expedition"),F=Object(O.a)(D,2),H=F[0],R=F[1],U=Object(c.useState)(!1),q=Object(O.a)(U,2),M=q[0],T=q[1],z=Object(c.useState)(""),A=Object(O.a)(z,2),B=A[0],K=A[1],W=Object(c.useState)(""),_=Object(O.a)(W,2),J=_[0],G=_[1];function Q(){return(Q=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/getPredictCurrency?Name=".concat(n.state.CurName));case 2:t=e.sent,x(Object(b.a)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return X.apply(this,arguments)}function X(){return(X=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(t),G(t),T(!1),e.next=5,f.a.get("/api/getPastCurrency?League=".concat(t,"&Id=").concat(n.state.Id));case 5:c=e.sent,s(Object(b.a)(c.data));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/getCurrencyDetails?League=".concat(v,"&name=").concat(t.params.id,"&Id=").concat(n.state.Id));case 2:c=e.sent,s(Object(b.a)(c.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),"Scourge"===v[0]?T(!0):T(!1);var c=t.params.id.replace(/ /g,"_",(function(e){return e}));K("https://www.poewiki.net/wiki/".concat(c)),G(v)}),[v,n,t.params.id]);var Y=function(e){var t=e.active,n=e.payload,c=e.label;return t&&n&&n.length?Object(o.jsxs)("div",{className:"custom-tooltip",children:[Object(o.jsx)("p",{className:"label",children:"Day: ".concat(c)}),Object(o.jsx)("p",{className:"price",children:"Price: ".concat(n[0].value," Chaos")})]}):null},Z=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("h2",{children:"Predicted price"})}),Object(o.jsx)(E.a,{variant:"info",onClick:function(){return function(){return Q.apply(this,arguments)}()},children:"Show predicted price"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)(w.a,{width:1200,height:600,data:d,margin:{top:5,right:20,bottom:30,left:40},children:[Object(o.jsx)(k.a,{type:"monotone",dataKey:"Price",stroke:"#8884d8"}),Object(o.jsx)(S.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(o.jsx)(I.a,{dataKey:"Day",label:{value:"Days since League start",dy:20}}),Object(o.jsx)(L.a,{label:{value:"Price in Chaos",position:"left",angle:-90}}),Object(o.jsx)(N.a,{content:Object(o.jsx)(Y,{})})]})})]})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{children:["Detailed overview for ",Object(o.jsx)("a",{href:B,children:t.params.id})]}),Object(o.jsx)("div",{children:"Select ongoing League"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:v,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){C([e.target.textContent].concat())},children:"Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){C([e.target.textContent].concat())},children:"Hardcore Scourge"}),Object(o.jsx)(y.a.Item,{onClick:function(e){C([e.target.textContent].concat())},children:"Standard"}),Object(o.jsx)(y.a.Item,{onClick:function(e){C([e.target.textContent].concat())},children:"Hardcore"})]}),Object(o.jsx)("div",{children:"Browse past League data"}),Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:H,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){V(e.target.textContent)},children:"Expedition"}),Object(o.jsx)(y.a.Item,{onClick:function(e){V(e.target.textContent)},children:"Hardcore Expedition"}),Object(o.jsx)(y.a.Item,{onClick:function(e){V(e.target.textContent)},children:"Ultimatum"}),Object(o.jsx)(y.a.Item,{onClick:function(e){V(e.target.textContent)},children:"Hardcore Ultimatum"}),Object(o.jsx)(y.a.Item,{onClick:function(e){V(e.target.textContent)},children:"Ritual"}),Object(o.jsx)(y.a.Item,{onClick:function(e){V(e.target.textContent)},children:"Hardcore Ritual"})]}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)("h2",{children:["Real price in ",J]})}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsxs)(w.a,{width:1200,height:600,data:i,margin:{top:5,right:20,bottom:30,left:40},children:[Object(o.jsx)(k.a,{type:"monotone",dataKey:"History",stroke:"#8884d8"}),Object(o.jsx)(S.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(o.jsx)(I.a,{dataKey:"Dates",label:{value:"Date",dy:20}}),Object(o.jsx)(L.a,{label:{value:"Price in Chaos",position:"left",angle:-90}}),Object(o.jsx)(N.a,{content:Object(o.jsx)(Y,{})})]})}),M?Object(o.jsx)(Z,{}):null]})},F=n(230),H=n(105),R=n(139),U=n(164);var q=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(O.a)(a,2),s=i[0],j=i[1],l=Object(c.useState)("ReLU"),d=Object(O.a)(l,2),x=d[0],p=d[1],g=Object(c.useState)([]),v=Object(O.a)(g,2),C=v[0],w=v[1],k=Object(c.useState)(0),S=Object(O.a)(k,2),I=S[0],L=S[1],N=Object(c.useState)(0),P=Object(O.a)(N,2),D=P[0],q=P[1],M=Object(c.useState)(""),T=Object(O.a)(M,2),z=T[0],A=T[1],B=Object(c.useState)([]),K=Object(O.a)(B,2),W=K[0],_=K[1],J=Object(c.useState)(!1),G=Object(O.a)(J,2),Q=G[0],V=G[1],X=Object(c.useState)(!1),Y=Object(O.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(["Waiting for response..."].concat()),te=Object(O.a)(ee,2),ne=te[0],ce=te[1],re=Object(c.useState)([Object(b.a)("Waiting for response...")]),ae=Object(O.a)(re,2),ie=ae[0],se=ae[1],oe=Object(c.useState)(!1),je=Object(O.a)(oe,2),le=je[0],de=je[1],ue=Object(c.useState)(!0),be=Object(O.a)(ue,2),he=be[0],Oe=be[1],xe=n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t+1}),Object(o.jsx)("td",{children:e.amount}),Object(o.jsx)("td",{children:e.function}),Object(o.jsx)("td",{children:Object(o.jsx)(E.a,{variant:"danger",onClick:function(){return fe(t)},children:"Delete"})})]},t)}));Object(c.useEffect)((function(){w({epochs:I,batchsize:D})}),[I,D]);var fe=function(e){V(!1);for(var t=n,c=0;c<t.length;c++)if(c===e){t.splice(c,1),r(Object(b.a)(t));break}},pe=function(){return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)(U.a,{variant:"danger",children:z})})},ge=function(){return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)(U.a,{variant:"success",children:W})})};Object(c.useEffect)((function(){var e=setTimeout((function(){$(!1)}),3e3);return function(){$(!0),clearTimeout(e)}}),[W]);var me=function(e){function t(){return(t=Object(h.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("/api/setModel",{model:e});case 2:n=t.sent,console.log(n),_(Object(b.a)(n.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},ye=function(){return Object(o.jsx)(H.a,{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Status of data gathering"}),Object(o.jsx)("td",{children:ne})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Status of Model Compiling"}),Object(o.jsx)("td",{children:ie})]})]})})},ve=function(){return Object(o.jsx)(E.a,{variant:"primary",onClick:function(){return function(){if(Oe(!1),ce.apply(void 0,["Waiting for response..."]),se.apply(void 0,["Waiting for response..."]),n.length<1||n.length>10)return A("Error, Layer amount must be between 1 and 10"),void V(!0);if(I<1||I>1e3)return A("Error, Epochs must be an integer equal or greater than 1, and less than 1000"),void V(!0);if(D<1||D>1e3)return A("Error, Batch Size must be an integer equal or greater than 1, and less than 1000"),void V(!0);function e(){return(e=Object(h.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/getCurrentData");case 2:return t=e.sent,console.log(t),ce(Object(b.a)(t.data)),e.next=7,f.a.post("/api/createNewModel",{fitsettings:C,layersettings:n});case 7:c=e.sent,console.log(c),se(Object(b.a)(c.data)),Oe(!0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}V(!1),de(!0),function(){e.apply(this,arguments)}()}()},children:Object(o.jsx)("h3",{children:"Create a new Neural Network model using the settings above"})})};return Object(o.jsxs)(F.a,{children:[Object(o.jsxs)(H.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Epochs"}),Object(o.jsx)("th",{children:"Batch size"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:I}),Object(o.jsx)("td",{children:D})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)(R.a.Control,{type:"number",name:"name",placeholder:"integer",onChange:function(e){return L(e.target.value.replace(/\D/,""))}})}),Object(o.jsx)("td",{children:Object(o.jsx)(R.a.Control,{type:"number",name:"name",placeholder:"integer",onChange:function(e){return q(e.target.value.replace(/\D/,""))}})})]})]})]}),Object(o.jsxs)(H.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Id"}),Object(o.jsx)("th",{children:"Units"}),Object(o.jsx)("th",{children:"Activation function"}),Object(o.jsx)("th",{children:"Add or Remove layer"})]})}),Object(o.jsxs)("tbody",{children:[xe,Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{children:Object(o.jsx)(R.a.Control,{type:"number",name:"name",placeholder:"integer",onChange:function(e){return j(e.target.value)}})}),Object(o.jsx)("td",{children:Object(o.jsxs)(m.a,{id:"dropdown-basic-button",title:x,children:[Object(o.jsx)(y.a.Item,{onClick:function(e){return p(e.target.textContent)},children:"ReLU"}),Object(o.jsx)(y.a.Item,{onClick:function(e){return p(e.target.textContent)},children:"Sigmoid"}),Object(o.jsx)(y.a.Item,{onClick:function(e){return p(e.target.textContent)},children:"Tanh"})]})}),Object(o.jsx)("td",{children:Object(o.jsx)(E.a,{variant:"primary",onClick:function(){return function(){if(s<1||s>1e3||isNaN(s)||Number.isInteger(s)||s%1!==0)return A("Error, units must be an integer equal or greater than 1, and less than 1000"),void V(!0);if(n.length+1>10)return A("Error, maximum amount of layers is 10"),void V(!0);V(!1);var e=n;e.push({amount:s,function:x});for(var t=0;t<e.length;t++)e[t].id=t;console.log(e),r(Object(b.a)(e))}()},children:"Add layer"})})]})]})]}),Q?Object(o.jsx)(pe,{}):null,Object(o.jsx)(H.a,{striped:!0,bordered:!0,hover:!0,children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)(E.a,{onClick:function(){return me("Original")},children:"Load Original Model"})}),Object(o.jsx)("td",{children:Object(o.jsx)(E.a,{onClick:function(){return me("User")},children:"Load User Model"})})]})})}),Z?Object(o.jsx)(ge,{}):null,he?Object(o.jsx)(ve,{}):null,le?Object(o.jsx)(ye,{}):null]})};var M=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(P.c,{children:[Object(o.jsx)(P.a,{path:"/",exact:!0,component:l}),Object(o.jsx)(P.a,{path:"/currency",exact:!0,component:C}),Object(o.jsx)(P.a,{path:"/currency/:id",component:D}),Object(o.jsx)(P.a,{path:"/predictionsettings",component:q})]})]})})},T=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,415)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),T()}},[[401,1,2]]]);
//# sourceMappingURL=main.40a8ad76.chunk.js.map