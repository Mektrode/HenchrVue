<template>
    <div>
        <h1>Add new meal</h1>
        <label>Meal Name:</label>
        <input type="text" v-model="mealName" placeholder="What fufu it now?">
        <label>Calories (in kJ):</label>
        <input type="number" v-model="mealCal" placeholder="Calories?">
        <label>Carbohydrates (in grams):</label>
        <input type="number" v-model="mealCarb" placeholder="Carbohydrates?">
        <label>Protein (in grams):</label>
        <input type="number" v-model="mealProt" placeholder="Protein?">
        <button type="submit" @click="addameal">Submit</button>
        
    </div>
</template>

<script>
export default {
    methods: {
        done () {
            alert('You submitted: ' + this.mealName + ': ' + this.mealCal + 'kJ , with ' + this.mealCarb + 'g of CARBS, ' + this.mealProt + 'g of PROT')
        },
        addameal (mealName, mealCal, mealCarb, mealProt) {
            /* const meal = {
                mealName: this.meal.name,
                mealCal: this.meal.info.calories,
                mealCarb: this.meal.info.carbs,
                mealProt: this.meal.info.prot
            } */
            this.$store.dispatch('adddmeal', {mealName, mealCal, mealCarb, mealProt})
        }
    }

}
</script>
