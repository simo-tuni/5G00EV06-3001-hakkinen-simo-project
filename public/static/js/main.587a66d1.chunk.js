(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(38),s=n.n(a),i=(n(51),n(52),n(13)),o=n(1);var l=function(){var e={color:"white"};return Object(o.jsxs)("nav",{children:[Object(o.jsx)("h3",{children:"Logo"}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)(i.b,{style:e,to:"/",children:Object(o.jsx)("li",{children:"Home"})}),Object(o.jsx)(i.b,{style:e,to:"/Currency",children:Object(o.jsx)("li",{children:"Currency"})})]})]})};var j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Home Page"})})},u=n(24),h=n.n(u),d=n(19),b=n(41),O=n(20),x=n(42),f=n.n(x),p=(n(76),n(9)),y=n(46),m={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 14px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var g=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(O.a)(a,2),i=s[0],l=s[1],j=Object(c.useState)(""),u=Object(O.a)(j,2),x=u[0],g=u[1],v=Object(y.a)(m);Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t,c,a,s,i,o,j,u,b,O,x,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/getCurrency");case 2:t=e.sent,console.log("Result from api: "+t),r(t.data.lines),c=[],a=Object(d.a)(t.data.lines);try{for(a.s();!(s=a.n()).done;){i=s.value,o=Object(d.a)(t.data.currencyDetails);try{for(o.s();!(j=o.n()).done;)u=j.value,i.currencyTypeName===u.name&&c.push(u.icon)}catch(h){o.e(h)}finally{o.f()}}}catch(h){a.e(h)}finally{a.f()}b=[],console.log("tmpJoined: "),O=Object(d.a)(n);try{for(O.s();!(x=O.n()).done;)p=x.value,b.push({Name:p,Image:c[p]})}catch(h){O.e(h)}finally{O.f()}console.log(b),console.log("setPic"),l([].concat(c));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w={nodes:n.filter((function(e){return e.currencyTypeName.toLowerCase().includes(x.toLowerCase())}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("label",{htmlFor:"search",children:["Search by Name:",Object(o.jsx)("input",{id:"search",type:"text",onChange:function(e){g(e.target.value)}})]}),Object(o.jsx)(p.g,{data:w,theme:v,layout:{custom:!0},children:function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.c,{children:Object(o.jsxs)(p.e,{children:[Object(o.jsx)(p.d,{style:{width:"100px"},children:"Item"}),Object(o.jsx)(p.d,{style:{width:"100px"},children:"Price"})]})}),Object(o.jsx)(p.a,{children:e.map((function(e,t){return Object(o.jsxs)(p.f,{item:e,style:{width:"200px"},children:[Object(o.jsxs)(p.b,{style:{width:"100px"},children:[Object(o.jsx)("img",{src:i[t],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(o.jsx)(p.b,{style:{width:"100px"},children:e.chaosEquivalent})]},t)}))})]})}})]})},v=n(2);var w=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsxs)(v.c,{children:[Object(o.jsx)(v.a,{path:"/",exact:!0,component:j}),Object(o.jsx)(v.a,{path:"/currency",component:g})]})]})})},C=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),C()}},[[79,1,2]]]);
//# sourceMappingURL=main.587a66d1.chunk.js.map