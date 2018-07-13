// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//import the hello component
import Hello from './components/HelloWorld.vue'
//import the about component
import About from './components/About.vue'
//define your routes
const routes = [
  { path: '/', component: Hello },
  //route for the about route of the web page
{ path: '/hello-world', component: About }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes, 
  mode: 'history'
})
//instatinate the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
