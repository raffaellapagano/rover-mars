<template>
  <div class="d-flex">
    <div :id="index" class="pixel" :class="arrayPosition[index].color">
      n. {{arrayPosition[index].id}}
      ({{arrayPosition[index].coordX}},{{arrayPosition[index].coordY}})</div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  props:{
    index: {},
    color: String
  },
  methods: {
    ...Vuex.mapMutations(['addColor'])
  },
  updated() {
      if(this.id == 2){
        this.color = 'bg-primary'
      }
  },
  computed: {
    ...Vuex.mapState(['arrayPosition'])
  },
  mounted(){
    this.addColor()
  }
};
</script>

<style scope>
.pixel {
  width: 50px;
  height: 50px;
  background: red;
  border: 3px solid black;
}
</style>