<template>
    <div id="login">
        <h1>PAGE DE CONNEXION</h1>
        <p><input type="text" name="username" v-model="input.username" placeholder="Nom (admin)"></p>
        <p><input type="password" name="password" v-model="input.password" placeholder="mot de passe (admin)"></p>
        <button type="button" v-on:click="login()">Connexion</button>
        <button @click="cancel()">Annuler</button>

    </div>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.idValide.username && this.input.password == this.$parent.idValide.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                        alert ("ERREUR: Identifiants incorrects");
                    }
                } else {
                    console.log("A username and password must be present");
                    alert ("ERREUR: Informations incomplètes");
                }
            },

            cancel() {
                this.$emit("authenticated", false);
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
        margin-top: 200px;
        padding: 20px;
    }
</style>