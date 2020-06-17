<template>
<div>
  <button class="superBouton" :style="{'width' : param.width}" @click="customClick"> {{ param.nom }} </button>  
</div>
</template>

<script>
export default {
  name: 'superBouton',
  props: {
    param: Object
  },
  methods: {
    customClick() {
      //this.param.couleur = "yellow" ;
      //this.param.nom = "bleu";
      this.$emit("customClick", this.param);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.superBouton {
	background: linear-gradient(to right, gold, darkorange);
	color: white;
	--width: 160px;
	--height: calc(var(--width) / 3);
	width: var(--width);
	height: var(--height);
	text-align: center;
	line-height: var(--height);
	font-size: calc(var(--height) / 2.5);
	font-family: sans-serif;
	letter-spacing: 0.2em;
	border: 1px solid darkgoldenrod;
	border-radius: 2em;
	transform: perspective(500px) rotateY(-15deg);
	text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
	box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
	transition: 0.5s;
	position: relative;
	overflow: hidden;
}

.superBouton:hover {
	transform: perspective(500px) rotateY(15deg);
	text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.2);
	box-shadow: -2px 0 0 5px rgba(0, 0, 0, 0.2);
}

.superBouton::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, transparent, white, transparent);
	left: -100%;
	transition: 0.5s;
}

.superBouton:hover::before {
	left: 100%;
}

</style>