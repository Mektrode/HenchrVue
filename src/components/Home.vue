<template>
  <div class="hello">
    <md-theme>
    <md-layout md-gutter>
      <md-layout md-flex="50" md-flex-offset="25">
        <center>
        <h1>{{ msg }}</h1>
        <md-spinner :md-size="170" :md-stroke="3.2" :md-progress="43">43%</md-spinner>
        <h2>Ecosystem</h2>
        </center>
      </md-layout>
    </md-layout>
    <meal-List></meal-List>
    </md-theme>
  </div>
</template>

<script>
import mealL from './Meals/Meals.vue'

export default {
    data () {
        return {
            msg: 'Welcome'
        }
    },
    components: {
        mealList: mealL
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
