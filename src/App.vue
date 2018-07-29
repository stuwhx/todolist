<template>
  <div id="app">
    <theader></theader>
    <todo></todo>  
    <tfooter></tfooter>     
  </div>
</template>

<script>
import theader from './components/theader'
import todo from './components/todo'
import tfooter from './components/tfooter.vue'

export default {
  components: {
    theader,
    todo,
    tfooter
  }
}
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0
}
</style>
