<template>
     <div>
        <h2>School name: {{name | mySlice}}</h2>
        <h2>School address: {{address}}</h2>
        <button @click="test">Click me to test hello </button>
    </div>
</template>

<script>
export default {   
    name : 'School',
    data() {
        return {
            name:'google',
            address:'beijing'
        }
    },
    methods: {
        test(){
            this.hello()
        }
    },
}
  
</script>

