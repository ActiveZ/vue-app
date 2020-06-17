<template>
    <div id="secure">
        <h1>Zone protégée</h1>
        <p>Vous êtes dans une zone sécurisée !</p>
        <button type="button" v-on:click="home()">Déconnexion</button>
        <superBouton nom="Vert" couleur="red" />
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        mounted() {
            if(!this.$parent.authenticated) {
                this.$router.replace({ name: "Home" });
            }
        },
        methods: {
            home() {
                this.$emit("authenticated", false);
                this.$router.replace({ name: "Home" });
            }
        }
    }


</script>

<style scoped>
    #secure {
        background-color: #ccffaa;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>