import Vue from "vue";
import SurveyCreatorComponent from "./components/SurveyCreatorComponent";

new Vue({
    el: "#app",
    template: '<div id="surveyCreatorContainer"> <surveyjs-creator-component /></div>',
    component: {
        "surveyjs-creator-component": SurveyCreatorComponent
    }
});