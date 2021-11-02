<template>
     <div class="school">
        <h2>School name: {{name}}</h2>
        <h2>School address: {{address}}</h2>
        <button @click="sendSchoolName">Send school name to App</button>
    </div>
</template>

<script>
export default {   
    name : 'School',
    props:['getSchoolName'],
    data() {
        return {
            name:'google',
            address:'beijing'
        }
    },
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>

<style>
.school{
    background-color: aqua;
    padding: 5px;
}
</style>

