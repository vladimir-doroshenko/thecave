import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Route from './components/Route.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css'
import './assets/main.css'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Route',
    path: '/route',
    component: Route
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });

NProgress.configure({ easing: 'ease', speed: 800, showSpinner: false });

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
});

router.afterEach((to, from) => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
