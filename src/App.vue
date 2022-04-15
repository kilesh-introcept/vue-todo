<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoPage from "./Page/todoPage.vue"
import Navbar from "./partials/navbar.vue"
export default {
  name: 'app',
  components: {
    TodoPage,
    Navbar
  }
}
</script>

<style src = "./index.css">

