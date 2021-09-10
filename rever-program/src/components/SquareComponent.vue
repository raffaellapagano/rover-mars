<template>
  <div>
    <!-- Create a Square and ask the size of width and height to the user -->
    <div class="row d-flex justify-content-center">
      <h4>Size of Square</h4>
      <!-- Square width -->
      <b-form-group
        label="Square Size X"
        class="col-3"
        :invalid-feedback="invalidFeedbackWidth"
      >
        <b-form-input id="squareX" 
        type="number"
        v-model="width" 
        :state="stateX" 
        trim
        @blur="SetSquareX(width)"></b-form-input>
      </b-form-group>
      <!-- Square height -->
      <b-form-group
        label="Square Size Y"
        class="col-3"
        :invalid-feedback="invalidFeedbackHeight"
      >
        <b-form-input id="squareY"
        type="number" 
        v-model="height" 
        :state="stateY" 
        trim
        @blur="SetSquareY(height)"></b-form-input>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"

export default {
  components: {
  },
  data() {
    return {
        width: 1,
        height: 1      
    }
  },
  methods: {
    validate(value){
      this.width = value
    },
    ...Vuex.mapMutations(['SetSquareX', 'SetSquareY'])
  },
  computed: {
    stateX() {
      return this.width >= 1
    },
    stateY(){
      return this.height >= 1
    },
    invalidFeedbackWidth(){
      if(this.width < 0){
        return "Add a value..."
      }
      return ""
    },
    invalidFeedbackHeight(){
      if(this.height < 0){
        return "Add a value..."
      }
      return ""
    }
  }
  
}
</script>