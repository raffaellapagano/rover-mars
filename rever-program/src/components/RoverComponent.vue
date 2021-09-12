<template>
    <div>
         <!-- User choose Coordinate X, Y and orientation of a Rover-->
    <div class="row d-flex justify-content-center align-items-end">
      <h4 class="text-white">Coodinate X of the Rover</h4>
      <!-- Rover coordinate X -->
      <b-form-group style="color: white;"
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
      <b-form-group style="color: white;"
        label="Coord. Y"
        class="col-2"
        :invalid-feedback="invalidFeedbackY"
      >
        <b-form-input id="squareY"
          type="number" 
          v-model="cordY" 
          :state="stateY" 
          trim
          @blur="SetRoverY(cordY)">
        </b-form-input>
      </b-form-group>
        <!-- Rover orientation -->
      <b-form-group style="color: white;"
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
      <b-button pill variant="primary" class="mx-1 col-2 mt-4" size="sm" @click="SetConfirm()">Confirm</b-button>
    </div>
    <!-- User decides actions of Rover with Buttons -->
    <div v-if="confirm" class= "my-3">
    <b-button pill variant="primary" :disabled="disableBtn" class="mx-1" @click="TurnLeft()">Turn Left</b-button>
    <b-button pill variant="primary" :disabled="disableBtn" class="mx-1" @click="TurnRight()">Turn Right</b-button>
    <b-button pill variant="primary" :disabled="disableBtn" class="mx-1" @click="Go1Step(rover.orientation.value); ValidateInside()">Advance</b-button>
    </div>
    <p v-if="commands.length>0" class="col-8 bg-light border border-primary m-auto my-2">{{commands}}</p>
    <hr class="text-white col-8 m-auto my-3">
    <div class="text-white">ACTUAL ROVER'S POSITION</div>
    <div class="d-flex justify-content-around col-8 m-auto"> 
    <!-- Rover position after actions -->
    <div class="text-white">Coordinate X: {{rover.cordX}} </div>
    <div class="text-white">Coordinate Y: {{rover.cordY}} </div>
    <div class="text-white">Orientation: {{rover.orientation.text}}</div>     
    </div>
    <!-- Game Over -->
    <div v-if="outMars" 
      class="d-flex bg-black text-danger mt-2 col-8 m-auto justify-content-center rounded animate__animated animate__bounceInDown">
        <h1 class="p-2" >OUT OF SQUARE</h1>
        <b-button variant="light" class="m-4" @click="goToScore()">Score</b-button>
        <b-button variant="primary" class="m-4" @click="loadOnce()">Play again</b-button>
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
      orientationInicial:{
        value: "a",
        text: "North"
        },
      options: [
        { value: 'a', text: 'North' },
        { value: 'b', text: 'East' },
        { value: 'c', text: 'South' },
        { value: 'd', text: 'West' }
        ]         
      }
    },
  computed: {
    ...mapState(['rover', 'orientationArray', "square", "commands", "confirm", "outMars"]),
    stateX() {
      return this.cordX <= (this.square.width -1) && this.cordX >= 0;
    },
    stateY(){
      return this.cordY <= (this.square.height-1) && this.cordY >= 0;
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
    },
    disableBtn(){
      return this.outMars;
    }
  },
  methods: {
    ...mapMutations(['SetRoverX', 'SetRoverY', 'SetRoverOrientation', 'SetConfirm', 'TurnLeft', 'TurnRight', "Go1Step", "ValidateInside"]),
    ...mapGetters(['GetSquare', 'GetRover']),
    // Confirm rover's inputs
    Confirm(){
      this.rover.cordXStart = this.rover.cordX;
      this.rover.cordYStart = this.rover.cordY;
      this.confirm = true;
    },
    loadOnce() {
      location.reload();
    },
    goToScore() {
      this.$router.push('/score')
    }
  },

}
</script>
