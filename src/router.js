import Vue from "vue";
import Router from "vue-router";
import Offer from './components/Offer'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: '/', redirect: '/offer' },
        { path: '/offer', component: Offer }
    ]
});