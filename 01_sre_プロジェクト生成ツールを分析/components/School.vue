<template>
    <div class="demo">
        <h2>name: {{schoolName}}</h2>
        <h2>address: {{address}}</h2>
        <button @click="showName">Click to show school name</button>
    </div>
</template>

<script>
    export default{
        name:'School',
        data() {
            return {
                schoolName:'Google',
                address:'NewYork'
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        },
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>