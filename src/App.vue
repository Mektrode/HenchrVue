<template>
  <div>
    <v-app top-toolbar left-fixed-sidebar sidebar-under-toolbar>
      <header>
        <app-header></app-header>
      </header>
      <main>
        <v-sidebar class="red darken-3" drawer v-model="nav3" height="100%">
          <v-list>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-title>Itemmm</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-sidebar>
        <v-content>
          <v-container mobile>
            <router-view></router-view>
          </v-container>
        </v-content>
      </main>
    </v-app>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import 'vuetify/dist/vuetify.min.css'

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
