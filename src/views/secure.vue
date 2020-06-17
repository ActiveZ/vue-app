<template>
    <div id="secure">
        <h1>Zone protégée</h1>
        <p>Vous êtes dans une zone sécurisée !</p>
        <superBouton :param="param" @customClick="deconnexion" />
        <!-- <button type="button" v-on:click="home()">Déconnexion</button> -->
    </div>
</template>

<script>
import superBouton from '@/components/superBouton.vue'

    export default {
        name: 'Secure',
        components: {
            superBouton
        },

        data() {
            return {
                param : {
                    nom :"déconnexion",
                    width: "220px"
                }
            };
        },

        mounted() {
            // if(!this.$parent.authenticated) {
            //     this.$router.replace({ name: "Home" });
            // }
            if(!this.$root.connected) {
                this.$router.replace({ name: "Home" });
            }
        },

        methods: {
            deconnexion() {
                // this.$emit("authenticated", false);
                this.$root.connected = false;
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