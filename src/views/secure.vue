<template>
    <div id="secure">
        <h1>Zone protégée</h1>
        <p>Vous êtes dans une zone sécurisée !</p>
        <button type="button" v-on:click="home()">Accueil</button>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        methods: {
            home() {
                this.$emit("authenticated", false);
                this.$router.replace({ name: "login" });
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