(function(e){function t(t){for(var o,u,i=t[0],s=t[1],c=t[2],p=0,d=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"18ed":function(e,t,n){},2750:function(e,t,n){"use strict";var o=n("18ed"),r=n.n(o);r.a},3389:function(e,t,n){"use strict";var o=n("ac31"),r=n.n(o);r.a},"4e0e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Accueil")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Zone sécurisée")])],1),n("router-view",{on:{authenticated:e.setAuthenticated}})],1)},a=[],u=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,mockAccount:{username:"admin",password:"admin"}}},mounted:function(){this.authenticated||this.$router.replace({name:"Home"})},methods:{setAuthenticated:function(e){this.authenticated=e},logout:function(){this.authenticated=!1}}}),i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null),l=c.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"home"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Bienvenue sur la page Vue.js d'Arnaud !"}}),o("button",{on:{click:function(t){return e.connexion()}}},[e._v("Connexion")])],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},h=[],v={name:"HelloWorld",props:{msg:String}},g=v,b=(n("2750"),Object(s["a"])(g,f,h,!1,null,"35afcc4c",null)),w=b.exports,_={name:"Home",components:{HelloWorld:w},methods:{connexion:function(){this.$router.push({name:"login"})}}},y=_,x=(n("3389"),Object(s["a"])(y,d,m,!1,null,"9f440750",null)),O=x.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h1",[e._v("PAGE DE CONNEXION")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Nom (admin)"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"mot de passe (admin)"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}})]),n("button",{attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v("Connexion")]),n("button",{on:{click:function(t){return e.cancel()}}},[e._v("Annuler")])])},j=[],k={name:"Login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$parent.mockAccount.username&&this.input.password==this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):(console.log("The username and / or password is incorrect"),alert("ERREUR: Identifiants incorrects")):(console.log("A username and password must be present"),alert("ERREUR: Informations incomplètes"))},cancel:function(){this.$router.push({name:"Home"})}}},E=k,A=(n("88c0"),Object(s["a"])(E,$,j,!1,null,"3cc8ea54",null)),P=A.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"secure"}},[n("h1",[e._v("Zone protégée")]),n("p",[e._v("Vous êtes dans une zone sécurisée !")]),n("button",{attrs:{type:"button"},on:{click:function(t){return e.home()}}},[e._v("Déconnexion")])])},S=[],N={name:"Secure",data:function(){return{}},methods:{home:function(){this.$emit("authenticated",!1),this.$router.replace({name:"Home"})}}},R=N,C=(n("9b5e"),Object(s["a"])(R,H,S,!1,null,"9bdb1b2a",null)),M=C.exports;o["a"].use(p["a"]);var T=[{path:"/",name:"Home",component:O},{path:"/login",name:"login",component:P},{path:"/secure",name:"secure",component:M}],I=new p["a"]({mode:"history",base:"/vue-app/",routes:T}),V=I;o["a"].config.productionTip=!1,new o["a"]({router:V,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},"87f3":function(e,t,n){},"88c0":function(e,t,n){"use strict";var o=n("4e0e"),r=n.n(o);r.a},"9b5e":function(e,t,n){"use strict";var o=n("87f3"),r=n.n(o);r.a},ac31:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ec183718.js.map