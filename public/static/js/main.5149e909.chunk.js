(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(38),a=c.n(s),i=(c(51),c(52),c(13)),j=c(1);var o=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var l=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},u=c(22),d=c.n(u),h=c(23),b=c(41),x=c(25),O=c(42),p=c.n(O),f=(c(76),c(9)),y=c(46),m={HeaderRow:"  \n    font-weight: bold;\n    font-size: 24px;\n \n    background-color: #eaf5fd;\n  ",Row:"\n    font-size: 14px;\n    \n    &:hover {\n      color: #212529;\n      cursor: default;\n    }\n  "};var v=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(x.a)(s,2),i=a[0],o=a[1],l=Object(y.a)(m);Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t,c,n,s,a,i,j,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency");case 2:t=e.sent,console.log("Result from api: "+t),r(t.data.lines),c=[],n=Object(h.a)(t.data.lines);try{for(n.s();!(s=n.n()).done;){a=s.value,i=Object(h.a)(t.data.currencyDetails);try{for(i.s();!(j=i.n()).done;)l=j.value,a.currencyTypeName===l.name&&c.push(l.icon)}catch(u){i.e(u)}finally{i.f()}}}catch(u){n.e(u)}finally{n.f()}o([].concat(c));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[Object(j.jsx)("img",{src:i[t],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(j.jsx)("td",{children:e.chaosEquivalent})]},t)}));var u={nodes:c};return Object(j.jsx)(f.g,{data:u,theme:l,children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.c,{children:Object(j.jsxs)(f.e,{children:[Object(j.jsx)(f.d,{style:{width:"100px"},children:"Item"}),Object(j.jsx)(f.d,{style:{width:"100px"},children:"Price"})]})}),Object(j.jsx)(f.a,{children:e.map((function(e,t){return Object(j.jsxs)(f.f,{item:e,style:{width:"200px"},children:[Object(j.jsxs)(f.b,{style:{width:"100px"},children:[Object(j.jsx)("img",{src:i[t],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(j.jsx)(f.b,{style:{width:"100px"},children:e.chaosEquivalent})]},t)}))})]})}})},g=c(2);var w=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{path:"/",exact:!0,component:l}),Object(j.jsx)(g.a,{path:"/currency",component:v})]})]})})},N=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,81)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[79,1,2]]]);
//# sourceMappingURL=main.5149e909.chunk.js.map