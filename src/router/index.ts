import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayoutComponent from "@/views/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: LayoutComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
