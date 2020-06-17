<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenue sur la page Vue.js d'Arnaud !"/>
    <!-- <button @click="connexion()">Connexion</button> -->
    <superBouton :param="param" @customClick="connexion" />
    <!-- <superBouton :param="param" @customClick="test" @click="connexion"/> -->

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
      param : {
        nom :"connexion",
        //couleur : "green"
      }
    }
  },
  methods: {
    connexion(){
      this.$router.push ({name:'login'});
    },

    test(param){
      alert('ok ' + param.nom)
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
</style>
