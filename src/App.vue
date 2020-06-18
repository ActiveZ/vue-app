<template>
    <div id="app">
        <div id="topnav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/carte">Carte</router-link> 
            <router-link to="/about">A propos</router-link>
            <router-link to="/login" :style="{'color': colorConnect}">{{ isConnect }}</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                connected: false,
                idValide: {
                    username: "admin",
                    password: "admin"
                }
            }
        },
        mounted() {
            if(this.$root.connected) {
                this.$router.replace({ name: "Secure" });
            }
        },
        computed: {
            isConnect: function() {  // pour le libellé de l'onglet menu connecté
                if (this.$root.connected) return "Connecté";
                else return "Déconnecté";
            },

            colorConnect: function() { //pour la couleur du texte de l'onglet du menu connecté
                if (this.$root.connected) return "#41b883";
                else return "red";
            }
        },
        methods: {}
    }
</script>

<style>
    body {
        background-color: rgb(221, 221, 221);
        margin: auto;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        margin: auto;
    }



/***************** barre de navigation *********************/
#topnav {
  overflow: hidden;
  background-color: #35495e;
}

#topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 12px 14px;
  text-decoration: none;
  font-size: 17px;
}

#topnav a:hover {
  background-color: #ddd;
  color: black;
}

.router-link-exact-active {
    /* couleur de l'onglet du chemin actif*/
    background-color: #41b883;
    transition: all 0.25s;
}


</style>