<template>
  <div class="mars m-auto d-flex align-items-center justify-content-center">
    
    <div class="d-flex row">
      <RowPixel v-for="pixel in drawSquare.height" :key="pixel.id"></RowPixel>
    </div>

    <div>
      

  <b-card
    :img-src="require('../assets/rocket.png')"
    title="Rover Details"
    img-alt="Rover"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-auto mt-3 opacity animate__animated animate__zoomInDown"
  >
    <b-card-text>
      Out of Square: {{outMars}} <br/>
      Initial coordinate X: {{rover.cordXStart}} <br/>
      Initial coordinate Y: {{rover.cordYStart}} <br/>
      Final coordinate X: {{rover.cordX}} <br/>
      Final coordinate Y: {{rover.cordY}} <br/>
      Final Orientation: {{rover.orientation.text}}
    </b-card-text>

    <b-button variant="primary" class="mx-1" @click="back()">Back</b-button>
  </b-card>
</div>
  </div>
</template>

<script>
import Vuex from "vuex"
import RowPixel from "../components/RowPixel.vue"

export default {
  components: {
    RowPixel
  },
  data() {
    return{
      drawSquare: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  },
  computed: {
    ...Vuex.mapState(['square', 'rover', 'outMars'])
  },
  created(){
    // console.log(this.rectangle)
    // console.log(this.square.width)
  }  
}
</script>

<style scoped>
.mars{
  height: 800px;
  background-image: url("../assets/MARS.png");
  background-repeat: no-repeat;
  background-color: #cccccc;
  background-position: center;
}

.opacity{
  opacity: .8;
}

b-card img{
  background-image: url(".././assets/rocket.png");
  
}
</style>

