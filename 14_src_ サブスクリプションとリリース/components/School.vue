<template>
     <div class="school">
        <h2>School name: {{name}}</h2>
        <h2>School address: {{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {   
    name : 'School',
    data() {
        return {
            name:'google',
            address:'beijing'
        }
    },
    methods:{
        demo(magName,data){
            console.log('hello is recived', data, this)
        }
    },
    mounted() {
        // console.log('School', this)

        // this.$bus.$on('hello',(data)=>{
        //     console.log('I am School page,recived data alrady ,', data)
        // })

        this.pubid = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy() {
        // this.$bus.$off('hello')

        pubsub.unsubscribe(this.pubid )
    },
}
</script>

<style>
.school{
    background-color: aqua;
    padding: 5px;
}
</style>

