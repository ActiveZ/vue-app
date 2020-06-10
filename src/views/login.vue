<template>
    <div id="login">
        <h1>PAGE DE LOGIN</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Nom" />
        <input type="password" name="password" v-model="input.password" placeholder="mot de passe" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
// lien utilisé: https://www.thepolyglotdeveloper.com/2018/04/simple-user-login-vuejs-web-application/

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
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                        alert ("ERREUR: Login/mot de passe incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                    alert ("ERREUR: Informations incomplètes");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>