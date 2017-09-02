import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import startgame from '@/components/start_game/start_game'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/startgame',
      component: startgame
    }
  ]
})
