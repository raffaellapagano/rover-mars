import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    square: {
      width: 1,
      height: 1
    },
    orientacionArray: ["North", "East", "South", "West"],
    rover: {
      cordX: 0,
      cordY: 1,
      orientation: this.orientacionArray[0]
    }
  },
  mutations: {
    SetSquareX(state, value){
      state.square.width = value;
    },
    SetSquareY(state, value){
      state.square.height = value;
    },
    SetRoverX(state, value){
      state.rover.cordX = value;
    },
    SetRoverY(state, value){
      state.rover.cordY = value;
    },
    TurnLeft(state){
      for (let i = 0; i < 3; i++) {
        if(state.rover.orientation === state.orientacionArray[i])){
          state.rover.orientation === orientacionArray[i];
        }else{
          state.rover.orientation === orientacionArray[0];
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
