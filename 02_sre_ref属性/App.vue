<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click="showDOM">Click to show the DOM Element</button>
      <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
    name:'App',
    components:{School},
    data() {
      return {
        msg:'Welcome to here!'
      }
    },
    methods: {
      showDOM(){
        console.log(this.$refs.title);
        console.log(this.$refs.btn);
        console.log(this.$refs.sch)
      }
    },
}
</script>

