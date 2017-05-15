<template>
<div>
    <md-theme md-name="footer">
    <md-bottom-bar>
      <md-bottom-bar-item md-iconset="icon-speedometer" @click.native="$router.push({ name: 'Stats' })">Stats</md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="icon-home" @click.native="$router.push({ name: 'Home' })" md-active>Home</md-bottom-bar-item>
      <md-bottom-bar-item md-iconset="icon-layers" @click.native="$router.push({ name: 'Meals' })">Meals</md-bottom-bar-item>
    </md-bottom-bar>
    </md-theme>
</div>
</template>

<script>
export default {
}
</script>
