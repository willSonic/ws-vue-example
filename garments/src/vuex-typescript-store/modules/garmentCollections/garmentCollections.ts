/**
 * Created by willstreeter on 9/2/17.
 */
import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { State as RootState } from "../../state";
import { IGarmentsCollectionsState, IGarment, IGarmentList   } from "../../.";
import { fetchStyleCollective } from "../../../services/styleCollective/garments";

type GarmentContext = ActionContext<IGarmentsCollectionsState, RootState>;

export const garmentCollections = {
    namespaced: true,

    state: {
        collections: <IGarmentList>[],
        totalCollections: 0,
    },

    getters: {
        getGarmentCollections(state: IGarmentsCollectionsState) {
            return state.collections;
        },

        getGarmentListIds(state: IGarmentsCollectionsState) {
            return state.collections.length;
        },

    },

    mutations: {
        reset(state: IGarmentsCollectionsState) {
            state.collections = <IGarmentList>[];
            state.totalCollections = 0;
        },

        appendCollectionsn(state: IGarmentsCollectionsState, collection: { garmentList: IGarmentList[] }) {
            state.collections.push({ garmentList: collection.garmentList });
        },

        setTotalCollections(state: IGarmentsCollectionsState, totalCollections: number) {
            state.totalCollections = totalCollections;
        }
    },

    actions: {

        async fetchGarmentCollection(garmentType: string): Promise<void> {
           console.log("fetchGarmentCollection garmentType =", garmentType);

           let newCollection =  await fetchStyleCollective(garmentType);
           console.log("fetchGarmentCollection newCollection =", newCollection);
        }
    },
};

const { commit, read, dispatch } =
     getStoreAccessors<IGarmentsCollectionsState, RootState>("garmentCollections");

const getters = garmentCollections.getters;

export const readAllCollections = read(getters.getGarmentCollections);
export const readCollectionsByIds = read(getters.getGarmentListIds);

const actions = garmentCollections.actions;

export const disPatchFetchGarmentCollection = dispatch(actions.fetchGarmentCollection);

const mutations = garmentCollections.mutations;

export const commitReset = commit(mutations.reset);
export const commitCollections = commit(mutations.appendCollectionsn);
export const commitSetTotalCollections = commit(mutations.setTotalCollections);