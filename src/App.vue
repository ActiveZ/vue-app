<template>
    <div id="app">
        <div id="topnav">
            <router-link to="/" class="active">Accueil</router-link> 
            <router-link to="/about">A propos</router-link> 
            <router-link to="/login">Zone sécurisée</router-link>
        </div>
        <router-view/>
        <!-- <router-view @authenticated="setAuthenticated" /> -->
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
        methods: {}
    }
</script>

<style>
    body {
        /* background-color: #F0F0F0; */
        background-color: rgb(221, 221, 221);
        margin: auto;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        /* width: 1024px; */
        margin: auto;
    }

/***************** barre de navigation *********************/
#topnav {
  overflow: hidden;
  background-color: #333;
}

#topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#topnav a:hover {
  background-color: #ddd;
  color: black;
}

#topnav a.active {
  /* background-color: red; */
  background-color: #4CAF50;
  color: white;
}

</style>