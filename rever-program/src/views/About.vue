<template>
  <div>
    <div>
      <b-button block variant="primary" @click="startRover()">Start</b-button>
    </div>
    <div v-if="rectangle" class="d-flex row">
      <RowPixel v-for="pixel in drawSquare.height" :key="pixel.id"></RowPixel>
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
      rectangle: false,
      drawSquare: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    startRover(){
      this.drawSquare.height = parseInt(this.square.height);
      this.rectangle = true;
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

