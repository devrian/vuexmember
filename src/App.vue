<template>
  <div id="app">
    <MainView/>
    <SideBar/>
  </div>
</template>

<script>
import MainView from './components/MainView'
import SideBar from './components/SideBar'

export default {
  name: 'App',
  components: {
    MainView,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
