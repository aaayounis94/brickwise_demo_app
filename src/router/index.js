import { createRouter, createWebHistory } from "vue-router";
import Marketplace from "../views/Marketplace.vue";
import Portfolio from "../views/Portfolio.vue";
import AssetPage from "../views/AssetViews/AssetPage.vue";
import edit from "../views/AssetViews/edit.vue";
import register from "../views/AssetViews/register.vue";
import layout from "../views/AssetViews/layout.vue";
const routes = [
  {
    path: "/marketplace",
    name: "Marketplace",
    ///// lesson 1 Routing
    // then we need to specify this page as a parameter that we will give to the router
    // if there is no page just set the current page to 1
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
    }),
    component: Marketplace,
  },
  {
    path: "/",
    redirect: { name: "Marketplace" },
  },
  {
    path: "/home",
    redirect: { name: "Marketplace" },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Portfolio,
  },
  {
    path: "/asset/:id",
    name: "layout",
    props: true,
    component: layout,
    children: [
      {
        path: "",
        name: "AssetPage",
        component: AssetPage,
      },
      {
        path: "register",
        name: "register",
        component: register,
      },
      {
        path: "edit",
        name: "edit",
        component: edit,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
