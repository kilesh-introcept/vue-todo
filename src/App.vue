<template>
  <div id="app">
   <TodoPage />
  </div>
</template>

<script>
import TodoPage from "./Page/todoPage.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TodoPage
  }
}
</script>

<style src = "./index.css">

