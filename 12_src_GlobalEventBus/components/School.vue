<template>
     <div class="school">
        <h2>School name: {{name}}</h2>
        <h2>School address: {{address}}</h2>
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
    mounted() {
        // console.log('School', this)
        this.$bus.$on('hello',(data)=>{
            console.log('I am School page,recived data alrady ,', data)
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    },
}
</script>

<style>
.school{
    background-color: aqua;
    padding: 5px;
}
</style>

