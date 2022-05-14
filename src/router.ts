  import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Homepage from '@/pages/homepage/View.vue'
import About from '@/pages/about/View.vue'
import Login from '@/pages/login/View.vue'
import Register from '@/pages/register/view.vue'
import Category from '@/pages/category/View.vue'
import { createRouter, createWebHistory } from 'vue-router';
const routes = [{
        path: "/",
        name: "HomePage",
        component: Homepage,
        meta: { requiresAuth: true }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },

]
export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () =>
{
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) =>
            {
                removeListener();
                resolve(user);
            },
            reject
        );
    })
}
router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth))
    {
        if (await getCurrentUser())
        {
            next();
        }else {
            next('/login');
        }
    } else {
        next();
    }
});
