(this["webpackJsonpecommerce-fashion"]=this["webpackJsonpecommerce-fashion"]||[]).push([[0],{40:function(e,c,s){},41:function(e,c,s){},43:function(e,c,s){},51:function(e,c,s){},52:function(e,c,s){},53:function(e,c,s){},54:function(e,c,s){},55:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s.n(t),n=s(17),i=s.n(n),l=(s(40),s(41),s(42),s(59)),o=s(58),j=s(60),r=s(15),d=(s(43),s(1)),b=function(){return Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"header",children:Object(d.jsx)(l.a,{collapseOnSelect:!0,expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(l.a.Brand,{className:"siteLogo",children:Object(d.jsxs)(r.b,{className:"logo",to:"/",children:[Object(d.jsx)("span",{className:"fas fa-hamburger"})," Meal House"]})}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsxs)(j.a,{className:"me-auto",children:[Object(d.jsx)(r.b,{className:"menusOfMenubar",to:"/home",children:"Home"}),Object(d.jsx)(r.b,{className:"menusOfMenubar",to:"/about",children:"About Us"}),Object(d.jsx)(r.b,{className:"menusOfMenubar",to:"/contact",children:"Contact Us"})]}),Object(d.jsxs)(j.a,{children:[Object(d.jsx)(r.b,{to:"/cart",children:Object(d.jsx)("span",{className:"fas fa-shopping-cart meni-icon"})}),Object(d.jsx)(r.b,{to:"/wishlist",children:Object(d.jsx)("span",{className:"fas fa-heart meni-icon"})}),Object(d.jsx)(r.b,{to:"/myacoount",children:Object(d.jsx)("span",{className:"fas fa-user meni-icon"})})]})]})]})})})})},h=s(11),m=s(19),O=s(4),f=(s(51),function(e){var c=e.foodInfo,s=c.id,t=c.name,a=c.image,n=c.regularPrice,i=c.salePrice,l=c.ratting,o=Object(O.f)();return Object(d.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(d.jsxs)("div",{className:"foodCard",children:[Object(d.jsx)("img",{src:a,alt:"foodImage"}),Object(d.jsx)("h3",{className:"foodTitle",children:t}),Object(d.jsxs)("span",{className:"regularPrice",children:["$ ",n]}),Object(d.jsxs)("span",{className:"salePrice",children:["$ ",i]})," ",Object(d.jsx)("br",{}),Object(d.jsx)(m.a,{className:"foodRatting",readonly:!0,initialRating:l,emptySymbol:"far fa-star",fullSymbol:"fas fa-star"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){o.push("/foods/".concat(s))},className:"viewBtn",children:"Quick View"})]})})}),x=(s(52),function(){var e=Object(t.useState)([]),c=Object(h.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)([]),i=Object(h.a)(n,2),l=i[0],o=i[1];Object(t.useEffect)((function(){fetch("./foods.json").then((function(e){return e.json()})).then((function(e){a(e),o(e)}))}),[]);return Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"shopSection",children:Object(d.jsxs)("div",{className:"container px-4",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(d.jsxs)("h3",{className:"totalData",children:["Total Food : ",l.length]})}),Object(d.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(d.jsx)("input",{type:"search",onChange:function(e){var c=e.target.value,t=s.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));o(t)},placeholder:"Search your food here...",className:"searchIput"})})]}),Object(d.jsx)("div",{className:"row",children:l.map((function(e){return Object(d.jsx)(f,{foodInfo:e},e.id)}))})]})})})}),u=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Hello. Your Page not found."})})},N=(s(53),function(){var e=Object(O.g)().foodId,c=Object(t.useState)([]),s=Object(h.a)(c,2),a=s[0],n=s[1];if(Object(t.useEffect)((function(){fetch("../foods.json").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),a.length){var i=a.find((function(c){return c.id===e}));n(i)}return Object(d.jsx)("div",{className:"singleFood",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row justify-content-between",children:[Object(d.jsx)("div",{className:"col-lg-5 col-md-6 col-sm-12",children:Object(d.jsx)("div",{className:"foodImage",children:Object(d.jsx)("img",{src:a.image,alt:"foodSingleImage"})})}),Object(d.jsx)("div",{className:"col-lg-7 col-md-6 col-sm-12",children:Object(d.jsxs)("div",{className:"detailsOfFood",children:[Object(d.jsx)("h2",{className:"foodName",children:a.name}),Object(d.jsxs)("span",{className:"salePrice",children:["$ ",a.salePrice]}),Object(d.jsx)(m.a,{className:"foodRatting",readonly:!0,initialRating:a.ratting,emptySymbol:"far fa-star",fullSymbol:"fas fa-star"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("span",{className:"stock",children:["Stock : ",a.stock]}),Object(d.jsxs)("span",{className:"cat",children:["Category : ",a.category]})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"number",value:"1",className:"quantity"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){alert("I am currently working on it!")},className:"viewBtn",children:"Add to Cart"})]})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 shortDesc",children:[Object(d.jsx)("h2",{className:"descHeadline",children:"Description"}),Object(d.jsx)("p",{children:a.description})]})})]})})}),g=(s(54),function(){return Object(d.jsx)("div",{className:"footerArea",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(d.jsxs)("h3",{className:"creditHeadline",children:["Designed and Developed By || ",Object(d.jsx)("a",{href:"https://rafix.netlify.app",target:"blank",className:"portfolioLink",children:"MH Rafix"})]})})})})})});var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/home",children:Object(d.jsx)(x,{})}),Object(d.jsx)(O.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsx)(O.a,{path:"/foods/:foodId",children:Object(d.jsx)(N,{})}),Object(d.jsx)(O.a,{path:"*",children:Object(d.jsx)(u,{})})]}),Object(d.jsx)(g,{})]})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;s(e),t(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),v()}},[[55,1,2]]]);
//# sourceMappingURL=main.ac6ee144.chunk.js.map