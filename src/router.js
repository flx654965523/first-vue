import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeComponent from './components/tabbar/HomeComponent.vue'
import MemberComponent from './components/tabbar/MemberComponent.vue'
import ShopcarComponent from './components/tabbar/ShopcarComponent.vue'
import SearchComponent from './components/tabbar/SearchComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
	  path: '/',redect: '/home',
	  name: '/',
	  component: HomeComponent
	},
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
	{
	  path: '/member',
	  name: 'member',
	  component: MemberComponent
	},
	{
	  path: '/shopcar',
	  name: 'shopcar',
	  component: ShopcarComponent
	},
	{
	  path: '/search',
	  name: 'search',
	  component: SearchComponent
	},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  linkActiveClass: 'mui-active'
})
