<template>
  <div>
    <div class="d-flex">
      <div class="d-flex">
      <Pixel v-for="pixel in drawSquare.width" :key="pixel.id"></Pixel>
    </div>
      
      <!-- <div v-if="drawSquare.width2>1">
        <Pixel v-for="pixel in drawSquare.width2" :key="pixel.id"></Pixel>
      </div>
      <Pixel/>
      <div v-if="drawSquare.width2>0">
        <Pixel v-for="pixel in drawSquare.width" :key="pixel.id"></Pixel>
      </div> -->
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
import Pixel from "./Pixel.vue"

export default {
  components: {
    Pixel
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
    
  },
  computed: {
    ...Vuex.mapState(['square', 'rover']),
  },
  created(){
     this.drawSquare.width = parseInt(this.square.width);

    // console.log(this.rectangle)
    // console.log(this.square.width)
  }  
}
</script>


<style scoped>
.opacity{
    opacity: .8;
}

</style>