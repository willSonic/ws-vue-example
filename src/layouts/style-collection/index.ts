import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import {Getter, Action, namespace } from 'vuex-class'
import { GarmentCollection, GarmentGetters} from "../../store/modules/garments";
import { IGarmentList } from "../../store/modules/garments";
import Card from "../../components/card";


import "./stylecollection.scss";
import { mapGetters } from "vuex";


const ModuleGetter = namespace("../../store/modules/garments", Getter)

let template = require("./stylecollection.vue");

@Component({
  mixins: [template],
  computed :{
    ...mapGetters({
          styleCollection: GarmentCollection.getters.collections
    })
   // styleCollection(){
   //      let bb = GarmentCollection.getters.collections;
   //      console.log(' styleCollection  bb =', )
   //      return GarmentCollection.getters.collections;
   // }

  },
  components: {
    Card
  }
})
export default class StyleCollection extends Vue {

  @ModuleGetter('GarmentCollection') moduleGetterFoo

}
