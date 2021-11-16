<template>
  <div>
      <button @click="isShow = !isShow">show/hide</button>
      <transition name="hello" appear>
        <h1 v-show="isShow">Hello</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h1{
        background-color: orange;
    }

    .hello-enter-active{
        animation: google 1s;
    }

    .hello-leave-active{
        animation: google 1s reverse;
    }

    @keyframes google {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>