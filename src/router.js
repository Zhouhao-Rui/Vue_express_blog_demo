import Vue from 'vue'
import Router from 'vue-router'
const ListArticle = () => import('./views/ListArticle')
const CreateArticle = () => import('./views/CreateArticle')
const EditArticle = () => import('./views/EditArticle')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/articles/index'
    },
    {
      path: '/articles/index',
      name: 'list-articles',
      component: ListArticle
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: CreateArticle
    },
    {
      path: '/articles/edit/:id',
      name: 'edit-article',
      component: EditArticle
    }
  ]
})
