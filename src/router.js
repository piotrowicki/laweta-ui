import Vue from "vue";
import Router from "vue-router";
import Rent from './components/Rent'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: '/', redirect: '/rent' },
        { path: '/rent', component: Rent }
    ]
});