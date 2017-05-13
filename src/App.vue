<template>
  <div>
      <header>
        <app-header></app-header>
      </header>
      <main>
        <router-view></router-view>
      </main>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'

export default {
    components: {
        appHeader: appHeader
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
