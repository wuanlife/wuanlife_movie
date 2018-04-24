import Vue from 'vue'
import Router from 'vue-router'

const Layout = resolve => require.ensure([], () => resolve(require('../views/layout/Layout')), 'Layout')
const Movies = resolve => require.ensure([], () => resolve(require('../views/movies/index')), 'Movies')
const Movie = resolve => require.ensure([], () => resolve(require('../views/movie/index')), 'Movie')
const Share = resolve => require.ensure([], () => resolve(require('../views/share/index')), 'Share')
const Search = resolve => require.ensure([], () => resolve(require('../views/search/index')), 'Search')
const Find = resolve => require.ensure([], () => resolve(require('../views/find/index')), 'Find')
const Callback = resolve => require.ensure([], () => resolve(require('../views/callback/index')), 'Callback')

/* error page */
const Err404 = resolve => require.ensure([], () => resolve(require('../views/error/404')), 'Err404')
const Err401 = resolve => require.ensure([], () => resolve(require('../views/error/401')), 'Err401')

Vue.use(Router)

/**
  * icon : the icon show in the sidebar
  * hidden : if hidden:true will not show in the sidebar
  * redirect : if redirect:noredirect will not redirct in the levelbar
  * noDropdown : if noDropdown:true will not has submenu
  * meta : { role: ['admin'] }  will control the page role
  **/

export const constantRouterMap = [
  /* { path: '/authredirect', component: authRedirect, hidden: true }, */
  { path: '/404', component: Err404, hidden: true, meta: { title: '404错误 - 午安影视' } },
  { path: '/401', component: Err401, hidden: true, meta: { title: '401错误 - 午安影视' } },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/timeline',
    children: [{
      path: '/timeline/:typeId',
      component: Movies,
      meta: { title: '午安影视' }
    }, {
      path: '/timeline',
      component: Movies,
      meta: { title: '午安影视' }
    }]
  },
  {
    path: '/movie',
    component: Layout,
    children: [{
      path: '',
      component: Movie
    }, {
      path: ':id',
      component: Movie,
      meta: { title: '电影详情 - 午安影视' }
    }]
  },
  {
    path: '/callback',
    component: Callback
  },
  {
    path: '/share',
    component: Layout,
    children: [{
      path: ':id',
      component: Share,
      meta: { title: '分享资源 - 午安影视' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/search',
      component: Search,
      meta: { title: '分享资源 - 午安影视' }
    }]
  },
  {
    path: '/find',
    component: Layout,
    children: [{
      path: '',
      component: Find,
      meta: { title: '发现影视 - 午安影视' }
    }]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
