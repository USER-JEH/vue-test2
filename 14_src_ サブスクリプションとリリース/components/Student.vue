<template>
     <div class="student">
        <h2>Student name: {{name}}</h2>
        <h2>Student gender: {{gender}}</h2>
        <button @click="sendStudentName">Send Student name to School page</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {   
    name : 'Student',
    data() {
        return {
            name:'baidu',
            gender:'male',
        }
    },
    mounted() {
        // console.log('School', this.x)
    },
       methods: {
        sendStudentName(){
            // this.$bus.$emit('hello',this.name)

            pubsub.publish('hello',666)
        }
    },
}
  
</script>

<style lang="less">
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>