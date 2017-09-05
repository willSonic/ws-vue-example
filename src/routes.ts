import axios, { AxiosError, AxiosResponse } from "axios";

import VueRouter from "vue-router";
import * as Logger from "js-logger";
import Home from "./layouts/home";
import StyleCollection from "./layouts/style-collection";
import NotFound from "./layouts/not-found";

export const routes = [
  {
    path: "/",
    name: " ",
    component: Home
  },
  {
    path: "/style-collection",
    name: "Styles",
    component: StyleCollection,
  },
  {
    path: "*",
    component: NotFound
  }
];

export const router = new VueRouter({
  routes,
  mode: "hash",
  linkActiveClass: "active"
});