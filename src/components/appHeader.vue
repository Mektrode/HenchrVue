<template>
    <div>   
    <v-toolbar class="orange">
  <v-toolbar-side-icon></v-toolbar-side-icon>
  <v-toolbar-title>Toolbar</v-toolbar-title>
  <v-toolbar-items class="hidden-md-and-down">
    <v-toolbar-item ripple><router-link to="/">Home</router-link></v-toolbar-item>
    <v-toolbar-item ripple><router-link to="/newMeal">Add New Meal</router-link></v-toolbar-item>
    <v-toolbar-item ripple><router-link to="/Meals">Meals so far</router-link></v-toolbar-item>
  </v-toolbar-items>
</v-toolbar>

        
        
        
    </div>
</template>

<script>
</script>
