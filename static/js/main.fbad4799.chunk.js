(this["webpackJsonpfood-order"]=this["webpackJsonpfood-order"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2seb2",total:"Cart_total__2aO1U",actions:"Cart_actions__2sWf1","button--alt":"Cart_button--alt__1A3vE",button:"Cart_button__EMwwE"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1k8po",summary:"CartItem_summary__271JP",price:"CartItem_price__1TcQt",amount:"CartItem_amount__1osdn",actions:"CartItem_actions__14kZb"}},,,function(e,t,n){e.exports={button:"HeadCartButton_button__2Q36c",icon:"HeadCartButton_icon__1HliG",badge:"HeadCartButton_badge__1cyD0",bump:"HeadCartButton_bump__2H9mv"}},,function(e,t,n){e.exports={meal:"MealItem_meal__3C449",description:"MealItem_description__2NPFs",price:"MealItem_price__1HCow",error:"MealItem_error__cXnBe"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1pyMY",modal:"Modal_modal__1TbTd","slide-down":"Modal_slide-down__3N1ib"}},,function(e,t,n){e.exports={header:"Header_header__e3ABf","main-image":"Header_main-image__y8ABj"}},function(e,t,n){e.exports={form:"MealItemForm_form__3KdCP",error:"MealItemForm_error__3lVGs"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__xk18D"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__15QJK","meals-appear":"AvailableMeals_meals-appear__1Ypjb"}},function(e,t,n){e.exports={card:"Card_card__A2Ahz"}},function(e,t,n){e.exports={input:"Input_input__3dgNR"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),r=n.n(i),o=(n(24),n(3)),s=n.p+"static/media/meals.2971f633.jpg",l=n(13),d=n.n(l),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(8),b=n.n(j),p=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),x=function(e){var t=Object(a.useContext)(p),n=t.items.reduce((function(e,t){return e+t.amount}),0),c=Object(a.useState)(!1),i=Object(o.a)(c,2),r=i[0],s=i[1];Object(a.useEffect)((function(){if(0!==t.items.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[t]);var l="".concat(b.a.button," ").concat(r?b.a.bump:"");return Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:b.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:b.a.badge,children:n})]})},O=function(e){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(x,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:d.a["main-image"],children:Object(m.jsx)("img",{style:{width:"100%"},src:s,alt:"A table full of delicious food!"})})]})},h=n(16),_=n.n(h),f=function(){return Object(m.jsxs)("section",{className:_.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],C=n(17),A=n.n(C),N=n(18),y=n.n(N),g=function(e){return Object(m.jsx)("div",{className:y.a.card,children:e.children})},I=n(10),M=n.n(I),w=n(14),k=n.n(w),H=n(2),B=n(19),F=n.n(B),E=c.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:F.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(H.a)({ref:t},e.input))]})})),S=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(a.useRef)();return Object(m.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,a=+n;0===n.trim().length||a<1||a>5?i(!1):e.onAddToCart(a)},children:[Object(m.jsx)(E,{ref:r,label:"Amount",input:{id:e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{type:"submit",children:"+ Add"}),!c&&Object(m.jsx)("p",{className:k.a.error,children:"Please input a valid amount !"})]})},D=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(a.useContext)(p);return Object(m.jsxs)("li",{className:M.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("div",{className:M.a.description,children:e.description}),Object(m.jsx)("div",{className:M.a.price,children:t})]}),Object(m.jsx)("div",{children:Object(m.jsx)(S,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price,description:e.description})},id:e.id})})]})},R=function(){var e=v.map((function(e){return Object(m.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:A.a.meals,children:Object(m.jsx)(g,{children:Object(m.jsx)("ul",{children:e})})})},T=function(){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(R,{})]})},P=n(4),z=n.n(P),J=n(11),V=n.n(J),Y=function(e){return Object(m.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},G=function(e){return Object(m.jsx)("div",{className:V.a.modal,children:Object(m.jsx)("div",{className:V.a.content,children:e.children})})},Q=document.getElementById("overlays"),$=function(e){return Object(m.jsxs)("div",{children:[r.a.createPortal(Object(m.jsx)(Y,{onClose:e.onClose}),Q),r.a.createPortal(Object(m.jsx)(G,{children:e.children}),Q)]})},K=n(5),q=n.n(K),U=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:q.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:q.a.summary,children:[Object(m.jsx)("span",{className:q.a.price,children:t}),Object(m.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:q.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},W=function(e){var t=Object(a.useContext)(p),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,i=function(e){t.addItem(Object(H.a)(Object(H.a)({},e),{},{amount:1}))},r=function(e){t.removeItem(e)},o=Object(m.jsx)("ul",{className:z.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(U,{price:e.price,amount:e.amount,name:e.name,description:e.description,onAdd:i.bind(null,e),onRemove:r.bind(null,e.id)},e.id)}))});return Object(m.jsxs)($,{onClose:e.onClose,children:[o,Object(m.jsxs)("div",{className:z.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:z.a.actions,children:[Object(m.jsx)("button",{onClick:e.onClose,className:z.a["button--alt"],children:"Close"}),c&&Object(m.jsx)("button",{className:z.a.order,children:"Order"})]})]})},X=n(15),Z={items:[],totalAmount:0},L=function(e,t){var n,a=e.items,c=0;if("ADD"===t.type){var i=a.findIndex((function(e){return e.id===t.item.id})),r=a[i];if(r){var o=Object(H.a)(Object(H.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(X.a)(a))[i]=o}else n=a.concat(t.item);return{items:n,totalAmount:c=e.totalAmount+t.item.price*t.item.amount}}if("REMOVE"===t.type){var s=a.findIndex((function(e){return e.id===t.id})),l=a[s];if(c=e.totalAmount-l.price,1===l.amount)n=a.filter((function(e){return e.id!==t.id}));else{var d=Object(H.a)(Object(H.a)({},l),{},{amount:l.amount-1});(n=Object(X.a)(e.items))[s]=d}return{items:n,totalAmount:c}}return{}},ee=function(e){var t=Object(a.useReducer)(L,Z),n=Object(o.a)(t,2),c=n[0],i=n[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(m.jsx)(p.Provider,{value:r,children:e.children})};var te=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(W,{onClose:function(){c(!1)}}),Object(m.jsx)(O,{onShowCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(T,{})})]})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(te,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.fbad4799.chunk.js.map