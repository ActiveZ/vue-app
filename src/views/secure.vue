<template>
    <div id="secure">
        <h1>Zone protégée</h1>
        <p>Vous êtes dans une zone sécurisée !</p>
        <superBouton :param="param" @customClick="deconnexion" />
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
            if(!this.$root.connected) {
                this.$router.replace({ name: "Home" });
            }
        },

        methods: {
            deconnexion() {
                this.$root.connected = false;
                this.$router.replace({ name: "Home" });
            }
        }
    }
</script>


<style scoped>
    #secure {
        background-color: #41b883;
        border: 1px solid #CCCCCC;
        padding: 40px;
        /* margin-top: 20px; */
    }
</style>