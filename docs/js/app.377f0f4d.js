(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"363da309"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"e5ba46f5"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"137d":function(e,t,n){},"18ed":function(e,t,n){},2460:function(e,t,n){"use strict";var r=n("eab4"),o=n.n(r);o.a},2750:function(e,t,n){"use strict";var r=n("18ed"),o=n.n(r);o.a},"439a":function(e,t,n){"use strict";var r=n("57c6"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Accueil")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Zone sécurisée")])],1),n("router-view",{on:{authenticated:e.setAuthenticated}})],1)},a=[],u=(n("ac1f"),n("5319"),{data:function(){return{authenticated:!1,idValide:{username:"admin",password:"admin"}}},mounted:function(){this.authenticated||this.$router.replace({name:"Home"})},methods:{setAuthenticated:function(e){this.authenticated=e},logout:function(){this.authenticated=!1}}}),i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,p=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Bienvenue sur la page Vue.js d'Arnaud !"}}),r("superBouton",{attrs:{param:e.param},on:{customClick:e.connexion}})],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},h=[],v={name:"HelloWorld",props:{msg:String}},g=v,b=(n("2750"),Object(s["a"])(g,f,h,!1,null,"35afcc4c",null)),_=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"superBouton",on:{click:e.customClick}},[e._v(" "+e._s(e.param.nom)+" ")])])},y=[],x={name:"superBouton",props:{param:Object},methods:{customClick:function(){this.$emit("customClick",this.param)}}},E=x,$=(n("439a"),Object(s["a"])(E,w,y,!1,null,"693a38fc",null)),O=$.exports,k={name:"Home",components:{HelloWorld:_,superBouton:O},data:function(){return{param:{nom:"connexion"}}},methods:{connexion:function(){this.$router.push({name:"login"})},test:function(e){alert("ok "+e.nom)}}},j=k,C=(n("bd48"),Object(s["a"])(j,d,m,!1,null,"7a0796f6",null)),A=C.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h1",[e._v("PAGE DE CONNEXION")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Nom (admin)"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}})]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"mot de passe (admin)"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}})]),n("div",{attrs:{id:"superBt"}},[n("superBouton",{attrs:{param:e.param1},on:{customClick:e.login}}),n("superBouton",{attrs:{param:e.param2},on:{customClick:e.cancel}})],1)])},P=[],N={name:"Login",components:{superBouton:O},data:function(){return{param1:{nom:"connexion"},param2:{nom:"Annuler"},input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$parent.idValide.username&&this.input.password==this.$parent.idValide.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):(console.log("The username and / or password is incorrect"),alert("ERREUR: Identifiants incorrects")):(console.log("A username and password must be present"),alert("ERREUR: Informations incomplètes"))},cancel:function(){this.$emit("authenticated",!1),this.$router.push({name:"Home"})}}},S=N,H=(n("9e6f"),Object(s["a"])(S,B,P,!1,null,"9214f83c",null)),T=H.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"secure"}},[n("h1",[e._v("Zone protégée")]),n("p",[e._v("Vous êtes dans une zone sécurisée !")]),n("button",{attrs:{type:"button"},on:{click:function(t){return e.home()}}},[e._v("Déconnexion")]),n("superBouton",{attrs:{nom:"Vert",couleur:"red"}})],1)},L=[],R={name:"Secure",data:function(){return{}},mounted:function(){this.$parent.authenticated||this.$router.replace({name:"Home"})},methods:{home:function(){this.$emit("authenticated",!1),this.$router.replace({name:"Home"})}}},D=R,I=(n("2460"),Object(s["a"])(D,V,L,!1,null,"2d575237",null)),M=I.exports;r["a"].use(p["a"]);var U=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:T},{path:"/secure",name:"secure",component:M}],W=new p["a"]({mode:"history",base:"/vue-app/",routes:U}),q=W;r["a"].config.productionTip=!1,new r["a"]({router:q,render:function(e){return e(l)}}).$mount("#app")},"57c6":function(e,t,n){},"85ec":function(e,t,n){},"9e6f":function(e,t,n){"use strict";var r=n("f4c5"),o=n.n(r);o.a},bd48:function(e,t,n){"use strict";var r=n("137d"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},eab4:function(e,t,n){},f4c5:function(e,t,n){}});
//# sourceMappingURL=app.377f0f4d.js.map