import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    square: {
      width: 1,
      height: 1
    },
    orientationArray: [
      { value: 'a', text: 'North' },
              { value: 'b', text: 'East' },
              { value: 'c', text: 'South' },
              { value: 'd', text: 'West' },
    ],
    rover: {
      cordXStart: 0,
      cordYStart: 0,
      cordX: 0,
      cordY: 0,
      orientation: {
        value: "a",
        text: "North"
      }
    },
    commands: "",
    confirm: false,
    outMars: false
  },
  // getters:{
  //   GetSquare(state){
  //     return state.square;
  //   },
  //   GetRover(state){
  //     return state.rover;
  //   }
  // },
  mutations: {
    // methods Square
    SetSquareX(state, value){
      state.square.width = value;
    },
    SetSquareY(state, value){
      state.square.height = value;
    },
     // setter Rover
    SetRoverX(state, value){
      state.rover.cordX = value;
    },
    SetRoverY(state, value){
      state.rover.cordY = value;
    },
    SetRoverOrientation(state, value){
      switch (value) {
        case "a":
          state.rover.orientation.value = value;
          state.rover.orientation.text = "North";          
          break;
        case "b":
          state.rover.orientation.value = value;
          state.rover.orientation.text = "East";
          break;
        case "c":
          state.rover.orientation.value = value;
          state.rover.orientation.text = "South";
          break;
        case "d":
          state.rover.orientation.value = value;
          state.rover.orientation.text = "West";            
          break;
        default:
          break;
      }
    },
    SetCommands(state, value){
      state.commands = value;
    },
    SetConfirm(state){
      state.confirm=!state.confirm;
    },
    // methods Rover
    TurnLeft(state){
      let change = false;
      if(state.rover.orientation.value === state.orientationArray[3].value){
        state.rover.orientation.value = state.orientationArray[0].value;
        state.rover.orientation.text = state.orientationArray[0].text;
      }else{
        for (let i = 0; i < 3; i++) {
          if(state.rover.orientation.value === state.orientationArray[i].value && !change){
            state.rover.orientation.value = state.orientationArray[i+1].value;
            state.rover.orientation.text = state.orientationArray[i+1].text;
            change=true
          }
        }
      }
    },
    TurnRight(state){
      let change = false;
      if(state.rover.orientation.value === state.orientationArray[0].value){
        state.rover.orientation.value = state.orientationArray[3].value;
        state.rover.orientation.text = state.orientationArray[3].text;
      }else{
        for (let i = 1; i < 4; i++) {
          if(state.rover.orientation.value === state.orientationArray[i].value && !change){
            state.rover.orientation.value = state.orientationArray[i-1].value;
            state.rover.orientation.text = state.orientationArray[i-1].text;
            change=true
          }
        }
      }
    },
    Go1Step(state, value){
      switch (value) {
        case "A":
          state.rover.cordY = parseInt(state.rover.cordY) + 1;
          break;
        case "B":
          state.rover.cordX = parseInt(state.rover.cordX) + 1;
          break;
        case "C":
          state.rover.cordY = parseInt(state.rover.cordY) - 1;
          break;
        case "D":
          state.rover.cordX = parseInt(state.rover.cordX) - 1;
          break;
      
        default:
          break;
      }
      return "move"
    },
    ValidateInside(state){
      if(state.rover.cordX > state.square.width 
        || (state.rover.cordY > state.square.height)
        || (state.rover.cordX < 0) || (state.rover.cordY < 0)){
        state.outMars = true
      }else{
        state.outMars = false
      }
    }
  },
  computed:{
    
  },
  actions: {
  },
  modules: {
  }
})
