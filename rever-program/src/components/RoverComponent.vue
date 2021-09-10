<template>
    <div>
         <!-- User choose Coordinate X, Y and orientation of a Rover-->
    <div class="row d-flex justify-content-center">
      <h4>Coodinate X of the Rover</h4>
      <!-- Rover coordinate X -->
      <b-form-group
        label="Coord. X"
        class="col-2"
        :invalid-feedback="invalidFeedbackX"
      >
        <b-form-input id="squareX" 
          type="number"
          v-model="cordX" 
          :state="stateX" 
          trim
          @blur="SetRoverX(cordX)">
        </b-form-input>
      </b-form-group>
      <!-- Rover coordinate Y -->
      <b-form-group
        label="Coord. Y"
        class="col-2"
        :invalid-feedback="invalidFeedbackY"
      >
        <b-form-input id="squareY"
          type="number" 
          v-model="cordY" 
          :state="stateY" 
          trim
          @keydown="SetRoverY(cordY)">
        </b-form-input>
      </b-form-group>
        <!-- Rover orientation -->
      <b-form-group
        label="Orientation"
        class="col-2"
      >
        <b-form-select 
          v-model="orientationInicial.value" 
          :options="options"
          class="p-2 rounded"
          @change="SetRoverOrientation(orientationInicial.value)">
        </b-form-select>
      </b-form-group>
    </div>

    </div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from 'vuex'

export default {
    data() {
        return{
            cordX: 0,
            cordY: 0,
            orientationInicial:
              {
                value: "a",
                text: "North"
              },
            options: [
              { value: 'a', text: 'North' },
              { value: 'b', text: 'East' },
              { value: 'c', text: 'South' },
              { value: 'd', text: 'West' },
              ]                      
            }
    },
  computed: {
    ...mapState(['rover', 'orientationArray', "square"]),
    stateX() {
      return this.cordX <= (this.square.width -1);
    },
    stateY(){
      return this.cordY <= (this.square.height-1);
    },
    invalidFeedbackX(){
      if(this.cordX < 0){
        return "Add a positive value..."
      }else if(this.cordX > this.square.width){
        return "Value less of width of the square"
      }
      return ""
    },
    invalidFeedbackY(){
      if(this.cordY < 0){
        return "Add a positive value..."
      }else if(this.cordY > this.square.height){
        return "Value less of height of the square"
      }
      return ""
    }
  },
  methods: {
    ...mapMutations(['SetRoverX', 'SetRoverY', 'SetRoverOrientation']),
    ...mapGetters(['GetSquare', 'GetRover'])
  }
}
</script>
