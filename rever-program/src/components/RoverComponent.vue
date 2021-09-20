<template>
  <div>
    <!-- User choose Coordinate X, Y and orientation of a Rover-->
    <div v-if="!confirm" class="row d-flex justify-content-center align-items-end">
      <h4 class="text-white">Coodinate X of the Rover</h4>
      <!-- Rover coordinate X -->
      <b-form-group
        style="color: white"
        label="Coord. X"
        class="col-2"
        :invalid-feedback="invalidFeedbackX"
      >
        <b-form-input
          id="squareX"
          type="number"
          v-model="cordX"
          :state="stateX"
          trim
          @blur="SetRoverX(cordX)"
        >
        </b-form-input>
      </b-form-group>
      <!-- Rover coordinate Y -->
      <b-form-group
        style="color: white"
        label="Coord. Y"
        class="col-2"
        :invalid-feedback="invalidFeedbackY"
      >
        <b-form-input
          id="squareY"
          type="number"
          v-model="cordY"
          :state="stateY"
          trim
          @blur="SetRoverY(cordY)"
        >
        </b-form-input>
      </b-form-group>
      <!-- Rover orientation -->
      <b-form-group style="color: white" label="Orientation" class="col-2">
        <b-form-select
          v-model="orientationInicial.value"
          :options="options"
          class="p-2 rounded"
          @change="SetRoverOrientation(orientationInicial.value)"
        >
        </b-form-select>
      </b-form-group>
      <b-button
        pill
        variant="primary"
        class="mx-1 col-2 mt-4"
        size="sm"
        @click="SetConfirm()"
        >Confirm</b-button
      >
    </div>
    <hr class="col-6 m-auto my-4 text-white border border-white" />
    <div class="d-flex justify-content-around col-10 m-auto align-items-center">
      <!-- User decides actions of Rover with Buttons -->
      <div v-if="confirm" class="bg-dark rounded p-2 m-4">
        <div class="mt-3">
          <b-button-group size="sm">
            <b-button variant="warning" @click="textComand += 'L'">LEFT</b-button>
            <b-button variant="info" @click="textComand += 'R'">RIGHT</b-button>
            <b-button variant="success" @click="textComand += 'A'">ADVANCE</b-button>
          </b-button-group>
        </div>
        <b-form-group
          style="color: white; font-size: 18pt"
          label="Commands"
          class="col-9 m-auto"
          :invalid-feedback="invalidCommands"
        >
          <b-form-input
            type="text"
            v-model="textComand"
            :state="stateCommands"
            placeholder="Introduce commands"
            trim
          >
          </b-form-input>
        </b-form-group>
        <b-button
          pill
          :disabled="disableMove"
          variant="success"
          class="my-2"
          @click="MoveRocket()"
          >Move</b-button
        >
      </div>
      <!-- Rover position -->

      <div v-if="rover.orientation.text === 'North'">
        <RocketCardPosition
          :orientationRock="arrayImgOrientation[0]"
          class="d-flex"
        />
      </div>
      <div v-else-if="rover.orientation.text === 'West'">
        <RocketCardPosition
          :orientationRock="arrayImgOrientation[1]"
          class="d-flex"
        />
      </div>
      <div v-else-if="rover.orientation.text === 'South'">
        <RocketCardPosition
          :orientationRock="arrayImgOrientation[2]"
          class="d-flex"
        />
      </div>
      <div v-else-if="rover.orientation.text === 'East'">
        <RocketCardPosition
          :orientationRock="arrayImgOrientation[3]"
          class="d-flex"
        />
      </div>
    </div>
    <!-- Game Over -->
    <div
      v-if="outMars"
      class="
        d-flex
        bg-black
        text-danger
        mt-2
        col-6
        m-auto
        justify-content-center
        rounded
        animate__animated animate__bounceInDown
      "
    >
      <h1 class="p-2">OUT OF SQUARE</h1>
      <b-button variant="light" class="m-4" @click="goToScore()"
        >Score</b-button
      >
      <b-button variant="primary" class="m-4" @click="loadOnce()"
        >Play again</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import RocketCardPosition from "./RocketCardPosition.vue";

export default {
  data() {
    return {
      cordX: 0,
      cordY: 0,
      orientationInicial: {
        value: "a",
        text: "North",
      },
      textComand: "",
      options: [
        { value: "a", text: "North" },
        { value: "b", text: "East" },
        { value: "c", text: "South" },
        { value: "d", text: "West" },
      ],
      arrayImgOrientation: [
        { textO: "North", imgO: "rocketN.png" },
        { textO: "West", imgO: "rocketW.png" },
        { textO: "South", imgO: "rocketS.png" },
        { textO: "East", imgO: "rocket.png" },
      ],
    };
  },
  components: {
    RocketCardPosition,
  },
  computed: {
    ...mapState([
      "rover",
      "orientationArray",
      "square",
      "commands",
      "confirm",
      "outMars",
      "moves"
    ]),
    stateX() {
      return this.cordX <= this.square.width - 1 && this.cordX >= 0;
    },
    stateY() {
      return this.cordY <= this.square.height - 1 && this.cordY >= 0;
    },
    stateCommands() {
      let verify = true;
      if (this.textComand.length === 0) {
        verify = false;
      }
      for (let i = 0; i < this.textComand.length; i++) {
        if (
          this.textComand[i] != "A" &&
          this.textComand[i] != "R" &&
          this.textComand[i] != "L"
        ) {
          verify = false;
        }
      }
      return verify;
    },
    invalidFeedbackX() {
      if (this.cordX < 0) {
        return "Add a positive value...";
      } else if (this.cordX > this.square.width) {
        return "Value less of width of the square";
      }
      return "";
    },
    invalidFeedbackY() {
      if (this.cordY < 0) {
        return "Add a positive value...";
      } else if (this.cordY > this.square.height) {
        return "Value less of height of the square";
      }
      return "";
    },
    invalidCommands() {
      if (this.textComand.length === 0) {
        return "Add commands";
      }
      for (let i = 0; i < this.textComand.length; i++) {
        if (
          this.textComand[i] != "A" ||
          this.textComand[i] != "R" ||
          this.textComand[i] != "L"
        ) {
          return "Write commands like AALLRR";
        }
      }
      return "";
    },
    disableBtn() {
      return this.outMars;
    },
    disableMove() {
      let verify = false;
      if (this.textComand.length === 0) {
        verify = true;
      }
      for (let i = 0; i < this.textComand.length; i++) {
        if (
          this.textComand[i] != "A" &&
          this.textComand[i] != "R" &&
          this.textComand[i] != "L"
        ) {
          verify = true;
        }
      }
      return verify;
    },
  },
  methods: {
    ...mapMutations([
      "SetRoverX",
      "SetRoverY",
      "SetRoverOrientation",
      "SetCommands",
      "AddMovies",
      "SetConfirm",
      "TurnLeft",
      "TurnRight",
      "Go1Step",
      "ValidateInside",
    ]),
    ...mapGetters(["GetSquare", "GetRover"]),
    // Confirm rover's inputs
    Confirm() {
      this.rover.cordXStart = this.rover.cordX;
      this.rover.cordYStart = this.rover.cordY;
      this.confirm = true;
    },
    MoveRocket() {
      console.log(this.textComand);
      for (let i = 0; i < this.textComand.length; i++) {
        switch (this.textComand[i]) {
          case "R":
            this.TurnRight();
            break;
          case "L":
            this.TurnLeft();
            break;
          case "A":
            this.Go1Step(this.rover.orientation.value);
            this.ValidateInside();
            break;

          default:
            break;
        }
        this.SetCommands(this.textComand);
      }
    },
    loadOnce() {
      location.reload();
    },
    goToScore() {
      this.$router.push("/score");
    },
  },
};
</script>
