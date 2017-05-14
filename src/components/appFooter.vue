<template>
<div>
    <md-theme md-name="footer">
    <md-bottom-bar>
      <md-bottom-bar-item md-iconset="icon-speedometer"><router-link to="/Stats">Stats</router-link></md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="icon-home" md-active><router-link to="/">Home</router-link></md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="icon-layers"><router-link to="/Meals">Meals</router-link></md-bottom-bar-item>
    </md-bottom-bar>
    </md-theme>
</div>
</template>

<script>
export default {
}
</script>
