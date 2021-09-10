import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    square: {
      width: 1,
      height: 1
    },
    orientationArray: ["a", "b", "c", "d"],
    rover: {
      cordX: 0,
      cordY: 0,
      orientation: {
        value: "a",
        text: "North"
      }
    }
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
     // methods Rover
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
    TurnLeft(state){
      if(state.rover.orientation === state.orientationArray[3]){
        state.rover.orientation === state.orientationArray[0];
      }else{
        for (let i = 0; i < 3; i++) {
          if(state.rover.orientation === state.orientationArray[i]){
            state.rover.orientation === state.orientationArray[i+1];
          }
        }
      }
    },
    ValidateInside(state){
      // True is outside of Square
      return state.rover.cordX >= state.square.width 
        || state.rover.cordY >= state.square.height
        || state.rover.cordX < 0 || state.rover.cordY < 0
    }
  },
  actions: {
  },
  modules: {
  }
})
