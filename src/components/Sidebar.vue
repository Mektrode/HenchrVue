<template>
    <div>
      <md-sidenav md-theme="red" class="md-left" ref="sidenav" :md-visible="open">
        <md-toolbar class="md-account-header">
          <md-list class="md-transparent">
            <md-list-item class="md-avatar-list">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/8" alt="People">
              </md-avatar>
    
              <span style="flex: 1"></span>
    
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/3" alt="People">
              </md-avatar>
    
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/4" alt="People">
              </md-avatar>
            </md-list-item>
    
            <md-list-item>
              <div class="md-list-text-container">
                <span>John Doe</span>
                <span>johndoe@email.com</span>
              </div>
    
              <md-button class="md-icon-button md-list-action">
                <md-icon>arrow_drop_down</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-toolbar>
    
        <md-list>
          <md-list-item @click.native="$refs.sidenav.toggle()" class="md-primary">
            <md-icon>insert_drive_file</md-icon> <span>My files</span>
          </md-list-item>
    
          <md-list-item @click.native="$refs.sidenav.toggle()">
            <md-icon>people</md-icon> <span>Shared with me</span>
          </md-list-item>
    
          <md-list-item @click.native="$refs.sidenav.toggle()">
            <md-icon>access_time</md-icon> <span>Recent</span>
          </md-list-item>
    
          <md-list-item @click.native="$refs.sidenav.toggle()">
            <md-icon>start</md-icon> <span>Starred</span>
          </md-list-item>
    
          <md-list-item @click.native="$refs.sidenav.toggle()">
            <md-icon>delete</md-icon> <span>Trash</span>
          </md-list-item>
        </md-list>
      </md-sidenav>
    </div>
</template>

<script>
export default {
    props: ['open'],
    data () {
        return {
        }
    }
}
</script>
