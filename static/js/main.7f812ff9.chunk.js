(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var s=c(3),n=c.n(s),a=c(4),o=(c(9),c(10),c(1)),r=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c.length>0?"".concat(c," is selected"):"No goods selected",c?Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){s("")}}):""]}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:i.map((function(t){var e=c===t,n=e?"has-background-success-light":"",a="button ".concat(e?"is-info":"");return Object(r.jsxs)("tr",{"data-cy":"Good",className:n,children:[Object(r.jsx)("td",{children:e?Object(r.jsx)("button",{onClick:function(){return s("")},"data-cy":"RemoveButton",type:"button",className:a,children:"-"}):Object(r.jsx)("button",{onClick:function(){return s(t)},"data-cy":"AddButton",type:"button",className:a,children:"+"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};n.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7f812ff9.chunk.js.map