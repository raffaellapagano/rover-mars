<template>
    <div>
        <!-- Option North -->
       <div v-if="rover.orientation.text === 'North'">
  <b-card no-body class="overflow-hidden" style="max-width: 300px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card :img-src="require('../assets/rocketN.png')" alt="Image" class="rounded-0"></b-card>
      </b-col>
      <b-col md="6">
        <b-card-body title="Rocket Position">
          <b-card-text>
            Coordinate X: {{rover.cordX}}
            Coordinate Y: {{rover.cordY}}
            Orientation: {{rover.orientation.text}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
 <!-- Option East -->
       <div v-else-if="rover.orientation.text === 'East'">
  <b-card no-body class="overflow-hidden" style="max-width: 300px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card :img-src="require('../assets/rocketW.png')" alt="Image" class="rounded-0"></b-card>
      </b-col>
      <b-col md="6">
       <b-card-body title="Rocket Position">
          <b-card-text>
            Coordinate X: {{rover.cordX}}
            Coordinate Y: {{rover.cordY}}
            Orientation: {{rover.orientation.text}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
 <!-- Option South -->
       <div v-else-if="rover.orientation.text === 'South'">
  <b-card no-body class="overflow-hidden" style="max-width: 300px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card :img-src="require('../assets/rocketS.png')" alt="Image" class="rounded-0"></b-card>
      </b-col>
      <b-col md="6">
        <b-card-body title="Rocket Position">
          <b-card-text>
            Coordinate X: {{rover.cordX}}
            Coordinate Y: {{rover.cordY}}
            Orientation: {{rover.orientation.text}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
 <!-- Option West -->
       <div v-else>
  <b-card no-body class="overflow-hidden" style="max-width: 300px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card :img-src="require('../assets/rocket.png')" alt="Image" class="rounded-0"></b-card>
      </b-col>
      <b-col md="6">
        <b-card-body title="Rocket Position">
          <b-card-text>
            Coordinate X: {{rover.cordX}}
            Coordinate Y: {{rover.cordY}}
            Orientation: {{rover.orientation.text}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props:{
        orientation: String
    },
    computed: {
    ...mapState(['rover']),
    }  
}
</script>