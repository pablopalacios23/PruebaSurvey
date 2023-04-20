<template>
    <div id="creatorElement" style="height: 100vh;">
    </div>
</template>

<script>


import Vue from "vue";
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import { surveyJSON } from "C:/Users/VORPC/Desktop/Prueba/json.js";
import "C:/Users/VORPC/Desktop/Prueba/node_modules/survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "./index.css";

export default Vue.component("surveyjs-creator-component", {
    name: "surveyjs-creator-component",
    mounted() {
        const options = {
            showLogicTab: true
        };
        const creator = new SurveyCreator(options);
        creator.JSON = surveyJSON;
        creator.render("creatorElement");
    }
});
</script>