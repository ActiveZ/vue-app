<template>
    <div id="app">
        <div id="nav">
             <router-link to="/">Accueil</router-link> | 
             <router-link to="/about">About</router-link> | 
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
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        /* width: 1024px; */
        margin: auto;
    }
</style>