<template>
  <div class="home container border border-primary p-5 col-">
    <h1 :square="square">Rover to Mars</h1>
    <hr class="col-6 m-auto mb-3">

    <Square/>
    <hr class="col-6 m-auto my-4">
    <Rover/>

  </div>
</template>

<script>
import Vuex from "vuex"
import Square from "../components/SquareComponent.vue"
import Rover from "../components/RoverComponent.vue"

export default {
  name: 'Home',
  components: {
    Square,
    Rover
  },
  data() {
    return{

    }
  },
  methods: {
  },
  computed: {
    ...Vuex.mapState(['square'])
  }
  
}
</script>
