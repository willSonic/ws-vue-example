import Vue from "vue";
import Vuex from "vuex";
import { GarmentCollection } from "./modules/garments";

Vue.use(Vuex);

const store =  new Vuex.Store({
    modules: {
        GarmentCollection
    },
});

export default store;
