import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import CustomerService from './components/CustomerService.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/customer-service',
    name: 'customer-service',
    component: CustomerService
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
