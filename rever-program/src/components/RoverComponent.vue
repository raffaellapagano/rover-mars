<template>
    <div>
         <!-- User choose Coordinate X, Y and orientation of a Rover-->
    <div class="row d-flex justify-content-center">
      <h4>Size of Square</h4>
      <!-- Rover coordinate X -->
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
        label="Square Size X"
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

export default ({
    data() {
        return{
            cordX: 0,
            cordY: 0,
            orientatioInicial: this.orientacionArray[0]
        }
    },
  methods: {
    validate(value){
      this.width = value
    },
    ...Vuex.mapMutations(['SetSquareX', 'SetSquareY'])
  },
  computed: {
      ...Vuex.mapState(['rover', 'orientacionArray']),
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

})
</script>
