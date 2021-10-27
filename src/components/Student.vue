<template>
    <div>
        <h2>Student name: {{name}}</h2>
        <h2>Student age: {{age}}</h2>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data() {
            return {
                name:'baidu',
                age:100
            }
        }
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>