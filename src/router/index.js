import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import PriceCalculator from '../views/PriceCalculator.vue'
import ReservationSuccess from '../views/ReservationSuccess'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: "/contact",
        name: "Contaxt",
        component: Contact
    },
    {
        path: "/priceCalculator",
        name: "PriceCalculator",
        component: PriceCalculator
    },
    {
        path: "/reservationSuccess",
        name: "ReservationSuccess",
        component: ReservationSuccess
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router