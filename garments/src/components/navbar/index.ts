import Vue from "vue";
import { Component, Prop } from "vue-typed";
import {Getter, Action} from "vuex-class";
import * as Logger from "js-logger";
import { Dispatcher } from "vuex-type-helper";
//import * as garmentCollection from "../../vuex-typescript-store/modules/garmentCollections";
import { GarmentActions } from "../../store/modules/garments";
let template = require("./navbar.vue");

@Component({
  mixins: [template],
  methods: {
      onClickLogin () {
        console.log("Navabar onclickLogin " ,  this.$store);
        //garmentCollection.disPatchFetchGarmentCollection(this.$store, "red+dress");
        this.$store.dispatch<Dispatcher<GarmentActions>>({
            type: 'GarmentCollection/fetchGarmentCollection',
            garmentType:  "red+dress"
        });

        //this.fetchGarmentCollection({garmentType: 'red+dress'});
      }
  }
})
export default class NavBar extends Vue {
  @Action('GarmentCollection/fetchGarmentCollection') fetchGarmentCollection:any;
  collapsed: boolean = true;

  me: "me";
  isLoggedIn: "loggedIn";

  collapse () {
    this.collapsed = !this.collapsed;
  }



  // ...mapActions({
  //   getAccount: 'getAccount'
  // })

  created () {
    // this.isLoggedIn && this.getAccount({id: 'me'})
    // .catch(() => {});
  }
}