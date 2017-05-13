<template>
<div>
    
    <v-card>
      <v-card-row class="red darken-1">
        <v-card-title>
          <span class="white--text">{{ meal.name }} <small>(Added {{ meal.calrPerc }}% today)</small></span>
          <v-spacer></v-spacer>
          <div>
            
            <v-menu id="marriot" bottom left origin="top right">
              <v-btn icon="icon" slot="activator" class="white--text">
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-item>
                  <v-list-tile>
                    <v-list-tile-title>Never show rewards</v-list-tile-title>
                  </v-list-tile>
                </v-list-item>
                <v-list-item>
                  <v-list-tile>
                    <v-list-tile-title>Remove Card</v-list-tile-title>
                  </v-list-tile>
                </v-list-item>
                <v-list-item>
                  <v-list-tile>
                    <v-list-tile-title>Send Feedback</v-list-tile-title>
                  </v-list-tile>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-card-title>
      </v-card-row>
      <v-card-text>
        <v-card-row height="75px">
        <v-card-row height="75px">
            <v-icon class="mr-5">card_membership</v-icon>
            <div>
                Calories: <strong>{{meal.calories}}</strong>kJ
            </div>
        </v-card-row>
        <v-card-row height="75px">
            <v-icon class="mr-5">card_membership</v-icon>
            <div>
                Carbohydrates: <strong>{{meal.carbs}}</strong>g
            </div>
        </v-card-row>
        <v-card-row height="75px">
            <v-icon class="mr-5">card_membership</v-icon>
            <div>
                Protien: <strong>{{meal.prot}}</strong>g
            </div>
        </v-card-row>
        <v-card-row height="75px">
          <v-icon class="mr-5">card_membership</v-icon>
          <div>
            <div>Membership Number</div><strong>113241423</strong>
          </div>
        </v-card-row>
        </v-card-row>
      </v-card-text>
      <v-card-row actions>
        <v-btn flat class="green--text darken-1">More</v-btn>
      </v-card-row>
    </v-card>
    
    <h3>
        
        
    </h3>
    
</div>
</template>
<script>
    export default {
        props: ['meal']
    }
</script>

