import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    square: {
      width: 1,
      height: 1,
    },
    rover: {
      cordXStart: 0,
      cordYStart: 0,
      cordX: 0,
      cordY: 0,
      orientation: {
        value: "a",
        text: "North",
      },
    },
    orientationArray: [
      { value: "a", text: "North" },
      { value: "b", text: "East" },
      { value: "c", text: "South" },
      { value: "d", text: "West" },
    ],
    commands: "",
    confirm: false,
    outMars: false,
    moves: 0, //Moves before out of Square
    arrayPosition:[]//array for print the coordinates of the square in view Score.vue. Created when the page is created
  },
  getters: {
    GetSquare(state) {
      return state.square;
    },
    GetRover(state) {
      return state.rover;
    },
  },
  mutations: {
    // setters Square
    SetSquareX(state, value) {
      state.square.width = value;
    },
    SetSquareY(state, value) {
      state.square.height = value;
    },
    // setters Rover
    SetRoverX(state, value) {
      state.rover.cordX = value;
    },
    SetRoverY(state, value) {
      state.rover.cordY = value;
    },
    SetRoverOrientation(state, value) {
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
    // methods Rover
    TurnRight(state) {
      let change = false;
      if (state.rover.orientation.value == state.orientationArray[3].value) {
        state.rover.orientation.value = state.orientationArray[0].value;
        state.rover.orientation.text = state.orientationArray[0].text;
      } else {
        for (let i = 0; i < 3; i++) {
          if (
            state.rover.orientation.value == state.orientationArray[i].value &&
            !change
          ) {
            state.rover.orientation.value = state.orientationArray[i + 1].value;
            state.rover.orientation.text = state.orientationArray[i + 1].text;
            change = true;
          }
        }
      }
      if(!state.outMars){
        state.moves++
      }
    },
    TurnLeft(state) {
      let change = false;
      if (state.rover.orientation.value == state.orientationArray[0].value) {
        state.rover.orientation.value = state.orientationArray[3].value;
        state.rover.orientation.text = state.orientationArray[3].text;
      } else {
        for (let i = 1; i < 4; i++) {
          if (
            state.rover.orientation.value == state.orientationArray[i].value &&
            !change
          ) {
            state.rover.orientation.value = state.orientationArray[i - 1].value;
            state.rover.orientation.text = state.orientationArray[i - 1].text;
            change = true;
          }
        }
      }
      if(!state.outMars){
        state.moves++
      }
    },
    Go1Step(state, value) {
      switch (value) {
        case "a":
          state.rover.cordY = parseInt(state.rover.cordY) + 1;
          break;
        case "b":
          state.rover.cordX = parseInt(state.rover.cordX) + 1;
          break;
        case "c":
          state.rover.cordY = parseInt(state.rover.cordY) - 1;
          break;
        case "d":
          state.rover.cordX = parseInt(state.rover.cordX) - 1;
          break;

        default:
          break;
      }
      if(!state.outMars){
        state.moves++
      }
      return "move";
    },
    ValidateInside(state) {
      if (
        state.rover.cordX + 1 > state.square.width ||
        state.rover.cordY + 1 > state.square.height ||
        state.rover.cordX < 0 ||
        state.rover.cordY < 0
      ) {
        state.outMars = true;
      } else {
        state.outMars = false;
      }
    },
    SetCommands(state, value) {
      state.commands = value;
    },
    //method to count moves before out of Square
    AddMovies(state){
      state.moves++
    },
    SetConfirm(state) {
      state.confirm = !state.confirm;
    },
    //method to print the Square in view Score.view
    CreateArrayPosition(state){
      for (let y = 0; y < state.square.height; y++) {
        for (let i = 0; i < state.square.width;) {
          let element = { 
            id: state.arrayPosition.length,
            coordX: i, 
            coordY: y,
            color: ""}  
            i++  
            state.arrayPosition.push(element) 
        }     
      }
    },
    //method to color the final position of rover in Score.vue
    addColor(state){
      for (let i = 0; i < state.arrayPosition.length; i++) {
        if(state.arrayPosition[i].coordX == state.rover.cordX && 
          state.arrayPosition[i].coordY == state.rover.cordY){
            state.arrayPosition[i].color = "bg-primary"
          }        
      }
    }
  },
  computed: {},
  actions: {},
  modules: {},
});
