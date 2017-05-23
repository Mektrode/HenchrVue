<template>
<div>
    <h1>STATISTICS</h1>
    <ul v-for="stat in stats">
        <h3>Here are the Stats below:-</h3>
        <li>Name: {{stat.name}}</li>
        <li>Age: {{stat.age}}</li>
        <li>Gender: {{stat.gender}}</li>
        <li>Height: {{stat.height}}</li>
        <li>Weight: {{stat.weight}}</li>
        <li>BMI: {{stat.bmi}}</li>
    </ul>
</div>
</template>

<script>
export default {
    computed: {
        stats: function () {
            return this.$store.getters.statistics
        }
    }
}
</script>
