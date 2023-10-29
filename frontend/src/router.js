import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage/HomePage.vue';
import AboutUs from './components/AboutUs/AboutUs.vue';
import CustomerService from './components/CustomerService/CustomerService.vue';
import SignUp from './components/Signup/SignUp.vue';
import LoginPage from './components/Signup/LoginPage.vue';
import ProjectDetails from './components/CustomerService/ProjectDetails.vue';
import UserProfile from './components/UserProfile/UserProfile.vue';

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
  },
  { path: '/projects/:id', component: ProjectDetails, name: 'ProjectDetails' },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
