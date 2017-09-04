import Vue from "vue";
import Vuex, { Store } from "vuex";
import { garmentCollections } from "./modules/garmentCollections";
import { IGarmentsCollectionsState } from "../models/garments/garment.collections.state.interface";

export interface RootState {
    garmentCollections: IGarmentsCollectionsState;
}

Vue.use(Vuex);
const store: Store<RootState> =  new Vuex.Store<RootState>({
    modules: {
        garmentCollections
    },
});
export default store;