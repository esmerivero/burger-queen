(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/bq-logo.52ecd033.png"},15:function(e){e.exports={breakfast:[{type:"Caf\xe9 americano",price:5},{type:"Caf\xe9 con leche",price:7},{type:"Emparedado de jam\xf3n con queso",price:10},{type:"Jugo natural",price:7}],meal:[{type:"Hamburgesa simple",price:10},{type:"Hamburgesa doble",price:15},{type:"Papas fritas",price:5},{type:"Aros de cebolla",price:5},{type:"Agua 500ml",price:5},{type:"Agua 750ml",price:8},{type:"Refresco 500ml",price:8},{type:"Refresco 750ml",price:10}]}},17:function(e,t,a){},26:function(e,t,a){e.exports=a(59)},31:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),i=a(62),l=a(61),o=(a(31),a(4)),u=a(5),m=a(7),p=a(6),b=a(8),h=a(3),d=a(23),g=a.n(d).a.initializeApp({apiKey:"AIzaSyB27y1gdYay2HLN0R3YNB_Cu7jl4jWAoRU",authDomain:"variosproyectos-35b23.firebaseapp.com",databaseURL:"https://variosproyectos-35b23.firebaseio.com",projectId:"variosproyectos-35b23",storageBucket:"variosproyectos-35b23.appspot.com",messagingSenderId:"317508774373"}),f=(a(47),a(14)),O=a.n(f),j=a(63),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleChangeEmail=a.handleChangeEmail.bind(Object(h.a)(Object(h.a)(a))),a.handleChangePass=a.handleChangePass.bind(Object(h.a)(Object(h.a)(a))),a.handleSignIn=a.handleSignIn.bind(Object(h.a)(Object(h.a)(a))),a.state={email:null,pass:""},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePass",value:function(e){this.setState({pass:e.target.value})}},{key:"handleSignIn",value:function(){g.auth().signInWithEmailAndPassword(this.state.email,this.state.pass).then(this.props.history.replace("/menu")).catch(function(e){console.log(e);e.code,e.message})}},{key:"render",value:function(){return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row logo"},r.a.createElement("img",{src:O.a,alt:"Logotipo de burger queen",width:"20%",height:"auto"})),r.a.createElement("div",{className:"row contenido"},r.a.createElement("div",{className:"col-md-6 offset-md-3 align-items"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-lg"},"CORREO")),r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg",value:this.state.email,onChange:this.handleChangeEmail})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 align-items"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-lg"},"CONTRASE\xd1A")),r.a.createElement("input",{type:"password",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg",value:this.state.pass,onChange:this.handleChangePass})))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit",onClick:this.handleSignIn,className:"btn btn-success btn-lg col-md-4 offset-md-4 align-items"},"ACCEDER")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"button",className:"btn btn-link btn-lg offset-md-8 col-md-3 align-items"},"Recuperar contrase\xf1a")))}}]),t}(n.Component),E=Object(j.a)(y),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleLogout=a.handleLogout.bind(Object(h.a)(Object(h.a)(a))),a.state={email:null,pass:""},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleLogout",value:function(){g.auth().signOut().then(this.props.history.replace("/signin")).catch(function(e){})}},{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-secondary ml-auto",onClick:this.handleLogout},"Cerrar sesi\xf3n")}}]),t}(n.Component),C=Object(j.a)(k),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light nav-pills"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("img",{src:O.a,width:"60",height:"auto",alt:"Logotipo de burger queen"})),r.a.createElement(C,null)))}}]),t}(n.Component),w=(a(17),a(15)),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleMenuBreakfast=a.handleMenuBreakfast.bind(Object(h.a)(Object(h.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleMenuBreakfast",value:function(){var e=this;return w.breakfast.map(function(t){return r.a.createElement("button",{type:"button",className:"btn btn-success btn-lg btn-menu","data-type":t.type,"data-price":t.price,onClick:e.props.getOption},t.type,r.a.createElement("br",null),t.price)})}},{key:"render",value:function(){return r.a.createElement("section",{className:"btn-menu"},r.a.createElement(this.handleMenuBreakfast,null))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleChangeMenuMeal=a.handleChangeMenuMeal.bind(Object(h.a)(Object(h.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChangeMenuMeal",value:function(){var e=this;return w.meal.map(function(t){return r.a.createElement("button",{type:"button",className:"btn btn-success btn-lg btn-menu","data-type":t.type,"data-price":t.price,onClick:e.props.getOption},t.type,r.a.createElement("br",null),t.price)})}},{key:"render",value:function(){return r.a.createElement("section",{className:"btn-menu"},r.a.createElement(this.handleChangeMenuMeal,null))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleChangeBreakfast=a.handleChangeBreakfast.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeMeal=a.handleChangeMeal.bind(Object(h.a)(Object(h.a)(a))),a.state={breakfast:a.props.breakfasMenu,meal:a.props.mealMenu},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChangeBreakfast",value:function(){this.setState({breakfast:this.props.breakfasMenu,meal:this.props.mealMenu})}},{key:"handleChangeMeal",value:function(){this.setState({breakfast:!1,meal:!0})}},{key:"render",value:function(){return this.state.breakfast?r.a.createElement("section",{className:"col-md-7"},r.a.createElement("section",{className:"mr-auto"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg buttons",onClick:this.handleChangeBreakfast},"Desayuno"),r.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg buttons",onClick:this.handleChangeMeal},"Comida / cena")),r.a.createElement(M,{getOption:this.props.getOrder})):r.a.createElement("section",{className:"col-md-7"},r.a.createElement("section",{className:"mr-auto"},r.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg buttons",onClick:this.handleChangeBreakfast},"Desayuno"),r.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg buttons",onClick:this.handleChangeMeal},"Comida / cena")),r.a.createElement(B,{getOption:this.props.getOrder}))}}]),t}(n.Component),x=(a(55),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handlePrintOrder=a.handlePrintOrder.bind(Object(h.a)(Object(h.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handlePrintOrder",value:function(){}},{key:"componentDidUpdate",value:function(){console.log(this.props.order)}},{key:"render",value:function(){return r.a.createElement("section",{className:"col-md-5"},r.a.createElement("div",{className:"section-order"}))}}]),t}(n.Component)),A=(a(57),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleGetOrder=a.handleGetOrder.bind(Object(h.a)(Object(h.a)(a))),a.state={breakfast:!0,meal:!1,order:[]},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleGetOrder",value:function(e){var t=this.state.order.concat({typeMenu:e.target.dataset.type,price:e.target.dataset.price});this.setState({order:t})}},{key:"componentDidUpdate",value:function(){console.log(this.state.order)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement("div",{className:"content row"},r.a.createElement(S,{breakfasMenu:this.state.breakfast,mealMenu:this.state.meal,getOrder:this.handleGetOrder}),r.a.createElement(x,{order:this.state.order})))}}]),t}(n.Component));s.a.render(r.a.createElement(i.a,{basename:"/burger-queen"},r.a.createElement("div",null,r.a.createElement(l.a,{exact:!0,path:"/",component:v}),r.a.createElement(l.a,{exact:!0,path:"/menu",component:A}),r.a.createElement(l.a,{exact:!0,path:"/signin",component:v}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.f87d1b20.chunk.js.map