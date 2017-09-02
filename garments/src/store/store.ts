/**
 * Created by willstreeter on 9/2/17.
 */

import * as Vuex from "vuex";
import { product } from "./basket";
import { State } from "./state";

export const createStore = () => new Vuex.Store<State>({
    modules: {
        basket,
        system,
    },
});
