/**
 * Created by willstreeter on 8/30/17.
 */

import Vue from "vue";
import { Component, Prop } from "vue-typed";

let template = require("./card.vue");

@Component({
  mixins: [template],
  props: {
      msgClick: Function,
      title: String,
      message: String
  },

  methods: {
    handleButtonClick() {
       // this.msgClick('ysdfdfolo');
    }
  }

})

export default class Card extends Vue {





}
