(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(38),s=c.n(a),i=(c(50),c(51),c(13)),j=c(1);var l=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var o=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},u=c(22),b=c.n(u),d=c(23),h=c(41),O=c(25),x=c(42),p=c.n(x),f=(c(75),c(11));var y=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(O.a)(a,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t,c,n,a,s,i,j,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency");case 2:t=e.sent,console.log(t),r(t.data.lines),c=[],n=Object(d.a)(t.data.lines);try{for(n.s();!(a=n.n()).done;){s=a.value,i=Object(d.a)(t.data.currencyDetails);try{for(i.s();!(j=i.n()).done;)o=j.value,s.currencyTypeName===o.name&&c.push(o.icon)}catch(u){i.e(u)}finally{i.f()}}}catch(u){n.e(u)}finally{n.f()}l([].concat(c));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[Object(j.jsx)("img",{src:i[t],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(j.jsx)("td",{children:e.chaosEquivalent})]},t)})),Object(j.jsx)(f.e,{data:c,children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.b,{children:Object(j.jsxs)(f.d,{children:[Object(j.jsx)(f.c,{children:"Item"}),Object(j.jsx)(f.c,{children:"Price"})]})}),Object(j.jsx)(f.a,{})]})}})},m=c(2);var v=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/",exact:!0,component:o}),Object(j.jsx)(m.a,{path:"/currency",component:y})]})]})})},g=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[78,1,2]]]);
//# sourceMappingURL=main.28fa78b9.chunk.js.map