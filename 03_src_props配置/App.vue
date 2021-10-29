<template>
  <div>
    <Student name="baidu" gender="female" :age="18"/>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
    name:'App',
    components:{Student},
}
</script>

