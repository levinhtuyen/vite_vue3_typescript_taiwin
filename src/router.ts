import Homepage from '@/pages/homepage/View.vue'
import About from '@/pages/about/View.vue'
import Login from '@/pages/login/View.vue'
import { createRouter, createWebHistory } from 'vue-router';
const routes = [{
        path: "/",
        name: "HomePage",
        component: Homepage,
    },
    {
        path: "/about",
        name: "About",
        component: About,
        // meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        // meta: { requiresAuth: true }
    },

]
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    // const isAuthenticated = firebase.auth().currentUser;
  const isAuthenticated = true
    // console.log("isauthenticated", isAuthenticated);
    if (requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});
