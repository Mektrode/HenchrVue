<template>
<div class="cardy">
    <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
      <md-whiteframe md-elevation="3">
        <md-card>
            <md-layout md-row md-gutter>
                <md-layout md-flex="25">
                <md-card-media>
                    <img class="spacy" src="~@/assets/hensh1.png">
                </md-card-media>
                <md-card-header-text>
                    <div class="md-subhead">{{ meal.name }}</div>
                </md-card-header-text>
                </md-layout>
                <md-layout class="spacy" md-flex="25">
                    <md-spinner :md-progress=meal.calrPerc></md-spinner>
                    {{ meal.calrPerc }}% Cal
                </md-layout>
                <md-layout class="spacy" md-flex="25">
                    <md-spinner :md-progress="98" class="md-accent"></md-spinner>
                    {{ meal.calrPerc }}% Pro
                </md-layout>
                <md-layout class="spacy" md-flex="25">
                    <md-spinner :md-progress="4" class="md-warn"></md-spinner>
                    {{ meal.calrPerc }}% Carb
                </md-layout>
            </md-layout>
        </md-card>
      </md-whiteframe>
    </md-layout>
</div>
</template>
<script>
    export default {
        props: ['meal']
    }
</script>
<style>
    .cardy {
        width: 100%;
        margin-bottom: 3%;
    }
    .spacy {
        padding: 3%;
    }
</style>
