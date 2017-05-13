<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/logo.png">
    <h2>Ecosystem</h2>
    <hr>
    <meal-List></meal-List>
  </div>
</template>

<script>
import mealL from './Meals/Meals.vue'

export default {
    data () {
        return {
            msg: 'Home'
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
