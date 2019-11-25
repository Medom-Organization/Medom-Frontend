import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'


Vue.use(VueResource);
Vue.use(VueRouter);



import './assets/js/app';




const router = new VueRouter ({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
