import { createRouter, createWebHistory } from 'vue-router'
import UberHome from '../components/UberHome.vue'
import UberReason from '../components/UberReason.vue'
import UberMobile from '../components/UberMobile.vue'
import UberPrius from '../components/UberPrius.vue'
import UberRequire from '../components/UberRequire.vue'
import UberWorld from '../components/UberWorld.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: UberHome
		},
		{
			path: '/reason',
			name: 'reason',
			component: UberReason
		},
		{
			path: '/mobile',
			name: 'mobile',
			component: UberMobile
		},
		{
			path: '/prius',
			name: 'prius',
			component: UberPrius
		},
		{
			path: '/require',
			name: 'require',
			component: UberRequire
		},
		{
			path: '/world',
			name: 'world',
			component: UberWorld
		},
	]
})

export default router
