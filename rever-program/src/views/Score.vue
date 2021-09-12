<template>
  <div class="mars m-auto">
    
    <div class="d-flex row">
      <RowPixel v-for="pixel in drawSquare.height" :key="pixel.id"></RowPixel>
    </div>

    <b-button variant="outline-success" class="mx-1" @click="back()">Back</b-button>
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
    ...Vuex.mapState(['square'])
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
</style>

