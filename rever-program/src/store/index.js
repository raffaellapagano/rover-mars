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
    SetConfirm(state){
      state.confirm=!state.confirm;
    },
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
      state.commands += "L"
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
      state.commands += "R"
    },
    Go1Step(state, value){
      switch (value) {
        case "a":
          state.rover.cordY += 1;
          break;
        case "b":
          state.rover.cordX += 1;
          break;
        case "c":
          state.rover.cordY -= 1;
          break;
        case "d":
          state.rover.cordX -= 1;
          break;
      
        default:
          break;
      }
      state.commands += "A"
    },
    ValidateInside(state){
      state.outMars = state.rover.cordX > state.square.width 
        || state.rover.cordY > state.square.height
        || state.rover.cordX < 0 || state.rover.cordY < 0
    }
  },
  actions: {
  },
  modules: {
  }
})
