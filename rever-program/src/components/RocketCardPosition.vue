<template>
    <div class="d-flex flex-column">
      <div class="text-white">ACTUAL ROVER'S POSITION</div>
  <b-card no-body class="overflow-hidden" style="max-width: 300px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card :img-src="require('../assets/'+orientationRock.imgO)" alt="Image" class="rounded-0"></b-card>
      </b-col>
      <b-col md="6">
        <b-card-body title="Rocket Position">
          <b-card-text>
            Coord. X: {{rover.cordX}}
            Coord. Y: {{rover.cordY}}
            Orient.: {{rover.orientation.text}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
      return{
        img: 'rocketN.png'
      }
    },
    props:{
        orientation: String,
        orientationRock: {
          textO: String,
          imgO: URL
        }
    },
    computed: {
    ...mapState(['rover'])
    }
}
</script>