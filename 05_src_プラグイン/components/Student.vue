<template>
     <div>
        <h2>Student name: {{name}}</h2>
        <h2>Student gender: {{gender}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
export default {   
    name : 'Student',
    data() {
        return {
            name:'baidu',
            gender:'male'
        }
    }
}
  
</script>

