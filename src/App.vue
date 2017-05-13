<template>
  <div>
      <header>
        <app-header></app-header>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <appFooter></appFooter>
      </footer>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import appFooter from './components/appFooter.vue'

export default {
    components: {
        appHeader: appHeader,
        appFooter: appFooter
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
}
</style>
