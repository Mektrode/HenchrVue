<template>
<div>
    <v-toolbar class="red">
          <v-toolbar-side-icon @click.native="!nav3"></v-toolbar-side-icon>
          <v-toolbar-title class="xs">Toolbar</v-toolbar-title>
          
          <v-btn icon dark>
            <router-link to="/"><v-icon>home</v-icon></router-link>
          </v-btn>
          <v-btn icon dark>
            <router-link to="/Meals"><v-icon>account_circle</v-icon></router-link>
          </v-btn>
          <v-btn icon dark>
            <v-icon><router-link to="/newMeal">favorite</router-link></v-icon>
          </v-btn>

          
          <v-menu bottom origin="top right" transition="v-scale-y-transition">
            <v-btn dark icon slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Update Stats</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>Log Out</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        
</div>
</template>

<script>
export default {
}
</script>
