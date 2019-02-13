import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from './components/home';
import detail from './components/detail';
import follow from './components/follow'
import column from './components/column';
import user from './components/user';
import login from './components/login';
import reg from './components/reg';
import car from './components/car';

import error from './components/error';


const routes=[
	{path:'/home',component:home},
	{path:'/detail',component:detail},
	{path:'/follow',component:follow},
	{path:'/column',component:column},
	{path:'/user',component:user},
	{path:'/login',component:login},
	{path:'/reg',component:reg},
	{path:'/car',component:car},
	{path:'/',redirect:'/home'},
	{path:'*',component:error},
	
];

export default new Router({

  routes
})
