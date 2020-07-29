import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About-us.vue'
import Contact from './components/Contact-us.vue'
import Blog from './components/Cact-blog.vue'
import Help from './components/help.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

require("./assets/main.scss")

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},
  {path: '/blog', component: Blog},
  {path: '/help', component: Help},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
