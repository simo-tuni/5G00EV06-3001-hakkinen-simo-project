(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(32),s=c.n(a),i=(c(40),c(41),c(10)),j=c(1);var o=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var l=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},u=c(11),b=c.n(u),h=c(19),d=c(21),O=c(22),x=c(15),f=c.n(x),p=(c(67),c(70));var y=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(O.a)(a,2),i=s[0],o=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t,c,n,a,s,i,j,l,u,d,O;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/getCurrency");case 2:t=e.sent,console.log(t),r(t.data),c=[],n=Object(h.a)(t.data.lines);try{for(n.s();!(a=n.n()).done;){s=a.value,i=Object(h.a)(t.data.currencyDetails);try{for(i.s();!(j=i.n()).done;)l=j.value,s.currencyTypeName===l.name&&c.push(l.icon)}catch(b){i.e(b)}finally{i.f()}}}catch(b){n.e(b)}finally{n.f()}[],console.log("before pic loop"),u=0,d=c;case 11:if(!(u<d.length)){e.next=20;break}return O=d[u],console.log("inside fetchPic, fetching "+O),e.next=16,f.a.get("/api/getPicture/"+O);case 16:e.sent;case 17:u++,e.next=11;break;case 20:console.log("before setPic()"),o([].concat(c));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[Object(j.jsx)("img",{src:i[t],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(j.jsx)("td",{children:e.chaosEquivalent})]},t)}));return Object(j.jsxs)(p.a,{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Item"}),Object(j.jsx)("th",{children:"Price"})]})}),Object(j.jsx)("tbody",{children:l})]})},g=c(2);var v=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{path:"/",exact:!0,component:l}),Object(j.jsx)(g.a,{path:"/currency",component:y})]})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),m()}},[[68,1,2]]]);
//# sourceMappingURL=main.29144e90.chunk.js.map