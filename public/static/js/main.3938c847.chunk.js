(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{50:function(e,c,t){},51:function(e,c,t){},78:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),a=t(38),s=t.n(a),i=(t(50),t(51),t(13)),j=t(1);var l=function(){var e={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:"Logo"}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{style:e,to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{style:e,to:"/Currency",children:Object(j.jsx)("li",{children:"Currency"})})]})]})};var u=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Home Page"})})},o=t(22),b=t.n(o),d=t(23),h=t(41),O=t(25),x=t(42),p=t.n(x),f=(t(75),t(9));var y=function(){var e=Object(n.useState)([]),c=Object(O.a)(e,2),t=c[0],r=c[1],a=Object(n.useState)([]),s=Object(O.a)(a,2),i=s[0],l=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var c,t,n,a,s,i,j,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/getCurrency");case 2:c=e.sent,console.log("Result from api: "+c),r(c.data.lines),t=[],n=Object(d.a)(c.data.lines);try{for(n.s();!(a=n.n()).done;){s=a.value,i=Object(d.a)(c.data.currencyDetails);try{for(i.s();!(j=i.n()).done;)u=j.value,s.currencyTypeName===u.name&&t.push(u.icon)}catch(o){i.e(o)}finally{i.f()}}}catch(o){n.e(o)}finally{n.f()}l([].concat(t));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t.map((function(e,c){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[Object(j.jsx)("img",{src:i[c],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(j.jsx)("td",{children:e.chaosEquivalent})]},c)}));var u={nodes:t};return Object(j.jsx)(f.g,{data:u,children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.c,{children:Object(j.jsxs)(f.e,{children:[Object(j.jsx)(f.d,{children:"Item"}),Object(j.jsx)(f.d,{children:"Price"})]})}),Object(j.jsx)(f.a,{children:e.map((function(e,c){return Object(j.jsxs)(f.f,{item:e,children:[Object(j.jsxs)(f.b,{children:[Object(j.jsx)("img",{src:i[c],alt:"Picture of "+e.currencyTypeName})," ",e.currencyTypeName]}),Object(j.jsx)(f.b,{children:e.chaosEquivalent})]},c)}))})]})}})},m=t(2);var v=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(m.a,{path:"/currency",component:y})]})]})})},g=function(e){e&&e instanceof Function&&t.e(4).then(t.bind(null,80)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,a=c.getLCP,s=c.getTTFB;t(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[78,1,2]]]);
//# sourceMappingURL=main.3938c847.chunk.js.map