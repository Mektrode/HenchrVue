<template>
<div>
<md-bottom-bar>
  <md-bottom-bar-item md-iconset="icon-speedometer"><router-link to="/Stats">Stats</router-link></md-bottom-bar-item>
  <md-bottom-bar-item md-iconset="icon-home" md-active><router-link to="/">Home</router-link></md-bottom-bar-item>
  <md-bottom-bar-item md-iconset="icon-cursor"><router-link to="/Meals">Meals</router-link></md-bottom-bar-item>
</md-bottom-bar>
    <router-link to="/Stats">Stats</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/Meals">Meals</router-link>
</div>
</template>

<script>
export default {
}
</script>
