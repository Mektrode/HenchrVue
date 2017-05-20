<template>
  <div>
      <header>
        <app-header v-on:toggle="openit"></app-header>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <app-sidebar></app-sidebar>
      <footer>
        <appFooter></appFooter>
      </footer>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import appSidebar from './components/Sidebar.vue'
import appFooter from './components/appFooter.vue'

export default {
    data () {
        return {
            // openSidenavState: true
        }
    },
    methods: {
        openStatus (status) {
            console.log('from app.vue status is... ' + status)
        }
    },
    computed: {
        openit () {
            console.log('from app.vue status is... ' + this.status)
            // return this.$emit('update:open', status)
        }
    }, 
    components: {
        appHeader: appHeader,
        appSidebar: appSidebar,
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
