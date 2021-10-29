<template>
     <div>
        <h2 @click="showName">School name: {{name}}</h2>
        <h2>School address: {{address}}</h2>
    </div>
</template>

<script>
// import {hunhe} from '../mixin'
export default {   
    name : 'School',
    data() {
        return {
            name:'google',
            address:'beijing'
        }
    },
    // mixins:[hunhe]
}
  
</script>

