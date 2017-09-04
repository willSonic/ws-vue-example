/**
 * Created by willstreeter on 9/3/17.
 */
import Vuex from "vuex";
import { DefineGetters, DefineMutations, DefineActions } from "vuex-type-helper";
import { fetchStyleCollective } from "../../services/styleCollective/garments";

export interface IGarment {
  id: string;
  name: string;
  currency: string;
  price: number;
  inStock: boolean;
  description: string;
  stock: Array<any>;
  image:any;
  colors:Array<any>;
  sizes:Array<any>;
  categories:Array<any>;
}


export interface IGarmentList {
  id: string;
  isSelected:boolean;
  offset: number;
  limit: number;
  total: number;
  category: any;
  products:IGarment[];
}

export interface GarmentGetters {
   collections: IGarmentList[],
   totalCollections: number
}

export interface GarmentMutations {
    reset: {};
    appendCollections: {};
    setTotalCollections: {};

}

export interface GarmentActions {
    fetchGarmentCollection: {
        garmentType:string
    }
}

export interface GarmentState {
    collections: IGarmentList[];
    totalCollections: number;
}

const state:GarmentState ={
   collections: [],
   totalCollections: 0
}

const getters: DefineGetters<GarmentGetters, GarmentState> = {
        collections: (state:GarmentState) => state.collections,
        totalCollections: (state:GarmentState) => state.totalCollections

};

const mutations: DefineMutations<GarmentMutations, GarmentState> = {
        reset(state: GarmentState) {
            state.collections = [];
            state.totalCollections = 0;
        },

        appendCollections(state: GarmentState, collection: { garmentList: IGarmentList }) {
            console.log('collection  ', collection)
            state.collections = [...state.collections, collection.garmentList];
        },

        setTotalCollections(state: GarmentState, totalCollections: number) {
            state.totalCollections = totalCollections;
        }
 };

const  actions: DefineActions<GarmentActions, GarmentState,  GarmentMutations, GarmentGetters> = {
  async fetchGarmentCollection( { commit }, payload ) {
        let newCollection =  await fetchStyleCollective(payload.garmentType);
        let garments:IGarment[] = newCollection.data.products.map( (product)=>{
               return   <IGarment>({
                                      id: product.id,
                                      name: product.name,
                                      currency: product.currency,
                                      price: product.price,
                                      inStock: product.inStock,
                                      description: product.description,
                                      stock: product.stock,
                                      image:product.image,
                                      colors:product.colors,
                                      sizes:product.sizes,
                                      categories:product.categories
                                    });
           });
        let garmentList:IGarmentList = <IGarmentList>({
                                              id: payload.garmentType,
                                              isSelected:newCollection.data.metadata.isSelected,
                                              offset: newCollection.data.metadata.offset,
                                              limit: newCollection.data.metadata.limit,
                                              total: newCollection.data.metadata.total,
                                              category: newCollection.data.metadata.category,
                                              products:garments
                                     });
       console.log("fetchGarmentCollection garmentList =", garmentList);
        commit("appendCollections", garmentList);
  }
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = Vuex.createNamespacedHelpers<GarmentState, GarmentGetters, GarmentMutations, GarmentActions>('GarmentCollection');

export const GarmentCollection = {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};
