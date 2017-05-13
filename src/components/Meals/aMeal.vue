<template>
<div>
    <h3>
        {{ meal.name }}
        <small>(Added a good {{ meal.calrPerc }}% today)</small>
    </h3>
    <p>
        Calories: <strong>{{meal.calories}}</strong>kJ
    </p>
    <p>
        Carbohydrates: <strong>{{meal.carbs}}</strong>g
    </p>
    <p>
        Protien: <strong>{{meal.prot}}</strong>g
    </p>
</div>
</template>
<script>
    export default {
        props: ['meal']
    }
</script>

