<template>
  <div class="app">
    <h1>{{msg}}, Student name is : {{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现子給父传递数据  -->
    <School :getSchoolName="getSchoolName"/>
     <!-- 通过父组件给子组件绑定一个自定义事件实现子給父传递数据  第一种写法-->
    <!-- <Student @google="getStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现子給父传递数据  第二种写法-->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
    name:'App',
    components:{School,Student},
    data() {
      return {
        msg:'Hello!',
        studentName:''
      }
    },
    methods: {
      getSchoolName(name){
        console.log('App reseve a school name :', name)
      },
      getStudentName(name){
        console.log('App reseve a school name :',name)
        this.studentName = name
      },
      m1(){
        console.log("demo be touched")
      },
      show(){
        alert(123)
      }
    },
    mounted() {
      // 绑定自定义事件
      this.$refs.student.$on('google',this.getStudentName)
      // 绑定自定义事件--一次性
      // this.$refs.student.$once('google',this.getStudentName)
    },
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>