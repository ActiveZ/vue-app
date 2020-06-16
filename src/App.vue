<template>
    <div id="app">
        <div id="nav">
             <router-link to="/">Home</router-link> | 
             <router-link to="/login">Secure</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "admin",
                    password: "admin"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "Home" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
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