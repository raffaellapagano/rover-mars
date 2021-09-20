<template>
  <div class="home container border border-primary p-5 mars">
    <h1 :square="square" class="text-white">Rover to Mars</h1>
    <div v-if="!confirm">
      <hr class="col-6 m-auto mb-3 text-danger" />
      <Square />
      <hr class="col-6 m-auto my-4 text-white border border-white" />
    </div>
    <Rover />
  </div>
</template>

<script>
import Vuex from "vuex";
import Square from "../components/SquareComponent.vue";
import Rover from "../components/RoverComponent.vue";

export default {
  name: "Home",
  components: {
    Square,
    Rover,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...Vuex.mapState(["square", "confirm"]),
  },
};
</script>

<style scoped>
.mars {
  height: 800px;
  background-image: url("../assets/MARS2.png");
  background-repeat: repeat;
  background-color: #cccccc;
  background-position: center;
}
</style>
