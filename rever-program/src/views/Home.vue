<template>
  <div class="home container">
    <h1>Rover to Mars</h1>
    <hr class="col-4 m-auto mb-3">

    <Square/>

  </div>
</template>

<script>
import Vuex from "vuex"
import Square from "../components/SquareComponent.vue"

export default {
  name: 'Home',
  components: {
    Square
  },
  data() {
    return{

    }
  },
  methods: {
  },
  computed: {
    ...Vuex.mapState(['square', 'orientacionArray'])
  }
  
}
</script>
