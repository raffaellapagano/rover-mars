import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    square: {
      width: 1,
      height: 1
    },
    rover: {
      cordX: 0,
      cordY: 1,
      orientation: "Nord"
    },
    orientacionArray: ["North", "East", "South", "West"]
  },
  mutations: {
    SetSquareX(state, value){
      state.square.width = value;
    },
    SetSquareY(state, value){
      state.square.height = value;
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
