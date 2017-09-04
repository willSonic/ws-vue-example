import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";
import { Dispatcher } from "vuex-type-helper";
import { Getter, Action } from "vuex-class";
import { GarmentActions } from "../../store/modules/garments";
let template = require("./navbar.vue");

@Component({
  mixins: [template],
  methods: {
      onClickLogin () {
        console.log("$store =", this.$store);

        this.$store.dispatch<Dispatcher<GarmentActions>>({
          type: "fetchGarmentCollection",
          garmentType: "red+dress"
        });
      }
  }
})
export default class NavBar extends Vue {
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