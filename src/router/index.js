import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import FavoritesPage from '../views/FavoritesPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import AlbumDetails from '../views/AlbumDetails.vue'
import ContactPage from '../views/ContactPage.vue'
import CartPage from '../views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/carts',
      name: 'carts',
      component: CartPage
    },
    {
      path: '/:id',
      name: 'album-details',
      component: AlbumDetails
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && localStorage.access_token) {
    next('/')
  } else {
    next()
  }
})

export default router
