<template>
     <div class="school">
        <h2>name: {{schoolName}}</h2>
        <h2>address: {{address}}</h2>
    </div>
</template>

<script>
export default {   
    name : 'School',
    data() {
        return {
            schoolName: 'google',
            address:'baidu'
        }
    },
}
</script>

<style>
 .school{
     background-color: aqua;
 }
</style>