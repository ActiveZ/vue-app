<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenue sur la page Vue.js d'Arnaud !"/>
    <p id="msg" v-if="this.$root.connected">Bonjour {{ this.$root.user }}, vous êtes connecté</p>
    <superBouton v-if="!this.$root.connected" :param="param1" @customClick="connexion" />
    <superBouton v-if="this.$root.connected" :param="param2" @customClick="deconnexion" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import superBouton from '@/components/superBouton.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    superBouton
  },

data(){
    return{
      param1 : {
        nom :"connexion",
      },
      param2 : {
        nom :"déconnexion",
        width: "220px"
      }
    }
  },

  methods: {
    connexion() {
      this.$router.push ({name:'login'});
    },
    deconnexion() {
      this.$root.connected = false;
    }
  }
} 
</script>


<style scoped>
    #home {
        width: 80%;
        border: 1px solid #CCCCCC;
        /* background-color: rgb(70, 70, 70); */
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }

    #msg {
      color: red;
    }
</style>
