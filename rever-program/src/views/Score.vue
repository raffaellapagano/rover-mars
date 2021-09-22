<template>
  <div class="mars m-auto d-flex align-items-center justify-content-center flex-wrap">
    <div class="m-3">
      <b-card
        title="Square Details"
        style="min-width: 20rem"
        class="m-auto col-6 m-3 opacity animate__animated animate__zoomInDown"
      >
        <b-card-text>
          <div class="d-flex row">
            <RowPixel
              v-for="(pixel, index) in drawSquare.height"
              :key="pixel.id" :indexY="square.height - index"
            ></RowPixel>
          </div>
        </b-card-text>
        <b-card-text>
          Out of Square: {{ outMars }} <br />
          Moves Inside: {{ totalmovesInside }} <br />
          Total moves: {{ commands.length }}
          <hr>
          Square Width: {{ square.width }} <br />
          Square Height: {{ square.height }} <br />
        </b-card-text>
      </b-card>
    </div>

    <div>
      <b-card
        :img-src="require('../assets/rocket.png')"
        title="Rover Details"
        img-alt="Rover"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="m-auto mt-3 opacity animate__animated animate__zoomInDown"
      >
        <b-card-text>
          Initial coordinate X: {{ rover.cordXStart }} <br />
          Initial coordinate Y: {{ rover.cordYStart }} <br />
          <hr>
          Final coordinate X: {{ rover.cordX }} <br />
          Final coordinate Y: {{ rover.cordY }} <br />
          Final Orientation: {{ rover.orientation.text }}
        </b-card-text>

        <b-button variant="primary" class="mx-1" @click="back()">Back</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import RowPixel from "../components/RowPixel.vue";

export default {
  components: {
    RowPixel,
  },
  data() {
    return {
      drawSquare: {
        width: 0,
        height: 0,
      },
      totalmovesInside: 3
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    ...Vuex.mapMutations(['CreateArrayPosition', 'addColor'])
  },
  computed: {
    ...Vuex.mapState(["square", "rover", "outMars", "moves", "commands"]),
  },
  created() {
    this.drawSquare.height = parseInt(this.square.height);
    this.totalmovesInside = this.moves;
    this.CreateArrayPosition();
    this.addColor()

  },
};
</script>

<style scoped>
.mars {
  height: 800px;
  background-image: url("../assets/MARS.png");
  background-repeat: no-repeat;
  background-color: #cccccc;
  background-position: center;
}

.opacity {
  opacity: 0.85;
}

b-card img {
  background-image: url(".././assets/rocket.png");
}
</style>

