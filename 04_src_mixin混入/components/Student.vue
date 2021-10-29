<template>
     <div>
        <h2 @click="showName">Student name: {{name}}</h2>
        <h2>Student gender: {{gender}}</h2>
    </div>
</template>

<script>
// import {hunhe} from '../mixin'
export default {   
    name : 'Student',
    data() {
        return {
            name:'baidu',
            gender:'male'
        }
    },
    // mixins:[hunhe]
}
  
</script>

