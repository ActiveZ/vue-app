(function(e){function t(t){for(var r,u,i=t[0],s=t[1],c=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"100f":function(e,t,n){"use strict";var r=n("e33a"),o=n.n(r);o.a},2384:function(e,t,n){"use strict";var r=n("6a94"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[e.authenticated?n("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(t){return e.logout()}}},[e._v("Logout")]):e._e()],1),n("router-view",{on:{authenticated:e.setAuthenticated}})],1)},a=[],u=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,mockAccount:{username:"admin",password:"admin"}}},mounted:function(){this.authenticated||this.$router.replace({name:"login"})},methods:{setAuthenticated:function(e){this.authenticated=e},logout:function(){this.authenticated=!1}}}),i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null),p=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h1",[e._v("PAGE DE LOGIN")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Nom (admin)"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"mot de passe (admin)"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}})]),n("button",{attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v("Login")])])},f=[],m={name:"Login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$parent.mockAccount.username&&this.input.password==this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):(console.log("The username and / or password is incorrect"),alert("ERREUR: Identifiants incorrects")):(console.log("A username and password must be present"),alert("ERREUR: Informations incomplètes"))}}},h=m,v=(n("2384"),Object(s["a"])(h,d,f,!1,null,"1569602c",null)),g=v.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"secure"}},[n("h1",[e._v("Zone protégée")]),n("p",[e._v("Vous êtes dans une zone sécurisée !")])])}],y={name:"Secure",data:function(){return{}}},_=y,O=(n("100f"),Object(s["a"])(_,w,b,!1,null,"4f229542",null)),j=O.exports;r["a"].use(l["a"]);var x=[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:g},{path:"/secure",name:"secure",component:j}],$=new l["a"]({mode:"history",base:"/vue-app/",routes:x}),E=$;r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(p)}}).$mount("#app")},"6a94":function(e,t,n){},"85ec":function(e,t,n){},e33a:function(e,t,n){}});
//# sourceMappingURL=app.86ffc743.js.map