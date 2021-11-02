<template>
     <div class="student">
        <h2>Student name: {{name}}</h2>
        <h2>Student gender: {{gender}}</h2>
        <h2>{{number}}</h2>
        <button @click="add">Click me to add number</button>
        <button @click="sendStudentName">Send student name to App</button>
        <button @click="unbind">Setfree google </button>
        <button @click="distroy">Teardown Student's data</button>
    </div>
</template>

<script>
export default {   
    name : 'Student',
    data() {
        return {
            name:'baidu',
            gender:'male',
            number:0
        }
    },
    methods: {
        sendStudentName(){
            // 触发Students组件实例身上的google事件
           this.$emit('google', this.name)
        //    this.$emit('demo')
        },
        unbind(){
            this.$off('google') //用于解绑一个自定义事件
            // this.$off(['google','demo']) //解绑多个自定义事件
            // this.$off() //解绑所有自定义事件

        },
        distroy(){
            this.$destroy()//销毁了当前student组件实例，销毁后所有student实例的自定义事件全都不奏效。
        },
        add(){
            console.log('add be used')
            this.number++
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