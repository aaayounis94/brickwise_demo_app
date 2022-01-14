import { createRouter, createWebHistory } from "vue-router";
import Marketplace from "../views/Marketplace.vue";
import Portfolio from "../views/Portfolio.vue";
import AssetPage from "../components/AssetPage.vue";
const routes = [
  {
    path: "/",
    name: "Marketplace",
    props: (route) => {
      parseInt(route.query.page) || 0;
    },
    component: Marketplace,
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
    name: "AssetPage",
    props: true,
    component: AssetPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
