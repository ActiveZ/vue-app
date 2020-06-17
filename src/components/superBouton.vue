<template>
  <div class="superBouton">
      <button :style="{'backgroundColor' : couleur}" @click="updatename"> {{ nom }} </button>
  </div>
</template>

<script>
export default {
  name: 'superBouton',
  props: {
    nom: String,
    couleur: String
  },
  methods: {
    updatename: function() {
    this.couleur= "blue" ;
    this.$emit("nameupdated", this.couleur);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>