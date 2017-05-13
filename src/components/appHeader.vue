<template>
<div>
    <h1>{{ $route.params.title }}</h1>
    <router-link to="/newMeal">New Meal</router-link>
    <router-link to="/Weight">Update Weight</router-link>
</div>
</template>

<script>
export default {
}
</script>
