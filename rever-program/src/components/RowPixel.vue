<template>
  <div>
    <div class="d-flex">
      <div class="d-flex m-auto">
        <Pixel v-for="pixel in drawSquare.width" :key="pixel.id"></Pixel>
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
        width: 3,
        height: 0,
      },
    };
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