(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(38),s=n.n(a),o=(n(51),n(52),n(13)),i=n(1);var l=function(){var e={color:"white"};return Object(i.jsxs)("nav",{children:[Object(i.jsx)("h3",{children:"Logo"}),Object(i.jsxs)("ul",{className:"nav-links",children:[Object(i.jsx)(o.b,{style:e,to:"/",children:Object(i.jsx)("li",{children:"Home"})}),Object(i.jsx)(o.b,{style:e,to:"/Currency",children:Object(i.jsx)("li",{children:"Currency"})})]})]})};var j=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Home Page"})})},u=n(24),h=n.n(u),d=n(19),b=n(41),O=n(20),p=n(42),x=n.n(p),f=(n(76),n(9)),y=n(46),m={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 14px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var g=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(O.a)(a,2),o=s[0],l=s[1],j=Object(c.useState)(""),u=Object(O.a)(j,2),p=u[0],g=u[1],v=Object(y.a)(m);Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t,c,a,s,o,i,j,u,b,O,p,f,y;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/getCurrency");case 2:t=e.sent,console.log("Result from api: "+t),r(t.data.lines),c=[],a=Object(d.a)(t.data.lines);try{for(a.s();!(s=a.n()).done;){o=s.value,i=Object(d.a)(t.data.currencyDetails);try{for(i.s();!(j=i.n()).done;)u=j.value,o.currencyTypeName===u.name&&c.push(u.icon)}catch(h){i.e(h)}finally{i.f()}}}catch(h){a.e(h)}finally{a.f()}b=[],console.log("tmpJoined: "),O=Object(d.a)(n);try{for(O.s();!(p=O.n()).done;)f=p.value,console.log("Item: "+f),console.log("tmpArray[item]: "+c[f]),y={Name:f,Image:c[f]},b.push(y)}catch(h){O.e(h)}finally{O.f()}console.log(b),console.log("setPic"),l([].concat(c));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w={nodes:n.filter((function(e){return e.currencyTypeName.toLowerCase().includes(p.toLowerCase())}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(i.jsx)("input",{id:"search",type:"text",onChange:function(e){g(e.target.value)}})]}),Object(i.jsx)(f.g,{data:w,theme:v,layout:{custom:!0},children:function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f.c,{children:Object(i.jsxs)(f.e,{children:[Object(i.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(i.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(i.jsx)(f.a,{children:e.map((function(e,t){return Object(i.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(i.jsxs)(f.b,{style:{width:"100px"},children:[Object(i.jsx)("img",{src:o[t],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(i.jsx)(f.b,{style:{width:"100px"},children:e.chaosEquivalent})]},t)}))})]})}})]})},v=n(2);var w=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsxs)(v.c,{children:[Object(i.jsx)(v.a,{path:"/",exact:!0,component:j}),Object(i.jsx)(v.a,{path:"/currency",component:g})]})]})})},C=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),C()}},[[79,1,2]]]);
//# sourceMappingURL=main.7bebbe8c.chunk.js.map