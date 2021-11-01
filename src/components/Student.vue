<template>
     <div class="demo">
        <h2 class="title">Student name: {{name}}</h2>
        <h2 class="qwe">Student gender: {{gender}}</h2>
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

<style lang="less">
    .demo{
        background-color: pink;
        .qwe{
            font-size: 100px;
        }
    }
</style>