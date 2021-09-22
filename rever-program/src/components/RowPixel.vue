<template>
  <div>
    <div class="d-flex">
      <div class="d-flex m-auto">
        <Pixel v-for="(pixel, index) in drawSquare.width" :key="pixel.id" 
        :index="index + (indexY * square.width) - square.width">
        </Pixel>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Pixel from "./Pixel.vue";

export default {
  components: {
    Pixel,
  },
  data() {
    return {
      drawSquare: {
        width: 0,
        height: 0,
      },
    };
  },
  props:{
    indexY: Number
  },
  methods: {},
  computed: {
    ...Vuex.mapState(["square", "rover"]),
  },
  created() {
    this.drawSquare.width = parseInt(this.square.width);
  },
};
</script>


<style scoped>
.opacity {
  opacity: 0.8;
}
</style>