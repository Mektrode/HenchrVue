<template>
<div>
  <md-toolbar class="md-medium md-transparent">
    <md-button class="md-icon-button" @click.native="toggle()">
      <md-icon>menu</md-icon>
    </md-button>
    <h1 class="md-title" style="flex: 1">{{ $route.name }}</h1>
    
    <md-speed-dial md-open="click" md-direction="left" class="md-fab-top-right" md-theme="red">
      <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph>close</md-icon>
        <md-icon>add</md-icon>
      </md-button>
    
      <md-button class="md-fab md-primary md-mini md-clean">
        <router-link to="/newMeal"><md-icon>note_add</md-icon></router-link>
      </md-button>
    
      <md-button class="md-fab md-primary md-mini md-clean">
        <router-link to="/Weight"><md-icon>alarm_add</md-icon></router-link>
      </md-button>
    </md-speed-dial>
  </md-toolbar>
</div>
</template>

<script>
export default {
    data: {
        return: {
            status: false
        }
    },
    methods: {
        toggle: function (status) {
            this.status = !this.status
            console.log('appHeader export toggle is now ' + this.status)
            // if (this.status)
            // this.$refs.sidenav.open()
            this.$emit('toggle', [this.status])
            this.$store.dispatch('toggleSidenav')
        }
    }
}
</script>
