<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenue sur la page Vue.js d'Arnaud !"/>
    <button @click="connexion()">Connexion</button>
    <superBouton nom="Bouton1" couleur="red"/>
    <superBouton nom="Bouton2" couleur="yellow"/>

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

  methods:{
    connexion(){
      this.$router.push ({name:'login'});
    },
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
</style>
