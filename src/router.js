import Vue from "vue";
import Router from "vue-router";
import Offer from './components/Offer'

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes: [
        { path: '/', redirect: '/offer' },
        { path: '/offer', component: Offer, meta: { title: 'Oferta' } }
    ]
});

router.beforeEach((to, from, next) => {
    const prefix = 'Laweta Ostróda | '
    document.title = prefix + to.meta.title
    next();
})