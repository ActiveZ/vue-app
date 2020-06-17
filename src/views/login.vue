<template>
    <div id="login">
        <h1>CONNEXION</h1>
        <p><input type="text" name="username" v-model="input.username" placeholder="Nom (admin)"></p>
        <p><input type="password" name="password" v-model="input.password" placeholder="mot de passe (admin)"></p>
        <div id ="superBt">
            <superBouton :param="param1" @customClick="login" />
            <superBouton :param="param2" @customClick="cancel" />
        </div>
    </div>
</template>

<script>
import superBouton from '@/components/superBouton.vue'

    export default {
        name: 'Login',
        components: {
            superBouton
        },

        data() {
            return {
                param1: {
                    nom: "connexion"
                },
                param2: {
                    nom: "Annuler"
                },

                input: {
                    username: "",
                    password: ""
                }
            }
        },
        
        mounted() {
            if(this.$root.connected) {
                this.$router.replace({ name: "secure" });
            }
        },

        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.idValide.username && this.input.password == this.$parent.idValide.password) {
                        this.$root.connected = true;
                        this.$root.user = this.input.username;
                        this.$router.replace({ name: "secure" });
                    } else {
                        alert ("ERREUR: Identifiants incorrects");
                    }
                } else {
                    alert ("ERREUR: Informations incomplètes");
                }
            },

            cancel() {
                this.$router.push ({ name: "Home"});
            }
        }
    }
</script>


<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        /* background-color: rgb(70, 70, 70); */
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 20px;
        padding: 20px;
    }

    #superBt {
        display: flex;
        justify-content: space-around;
    }
</style>