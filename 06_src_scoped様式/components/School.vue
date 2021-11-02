<template>
     <div class="test">
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
    }
}
</script>

<style>
.test{
    background-color: aqua;
}
</style>

