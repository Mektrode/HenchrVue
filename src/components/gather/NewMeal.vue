<template>
    <div>
        <h1>Add new meal</h1>
        <label>Meal Name:</label>
        <input type="text" v-model="mealName" placeholder="What fufu it now?">
        <br>
        <label>Calories (in kCal):</label>
        <input type="number" v-model="mealCal" placeholder="Calories?">
        <br>
        <label>Carbohydrates (in grams):</label>
        <input type="number" v-model="mealCarb" placeholder="Carbohydrates?">
        <br>
        <label>Protein (in grams):</label>
        <input type="number" v-model="mealProt" placeholder="Protein?">
        <br>
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
            const meal = {
                name: this.mealName,
                info: {
                    calories: this.mealCal,
                    carbs: this.mealCarb,
                    prot: this.mealProt
                }
            }
            this.$store.dispatch('adddmeal', meal)
        }
    }
}
</script>
