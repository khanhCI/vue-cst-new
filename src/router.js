import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Main from './components/Main.vue';
import MainLesson from './components/MainLesson.vue';
import MainDistrict from './components/MainDistrict.vue';
import MainSchool from './components/MainSchool.vue';
import MainProgram from './components/MainProgram.vue';
import MainSubject from './components/MainSubject.vue';
import NotFound from './components/NotFound.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      component: Home,
      children: [
        {
          path: '',
          component: Main,
        },
        {
          path: 'district',
          component: MainDistrict
        },
        {
          path: 'school',
          component: MainSchool
        }
      ],
    },
    {
      path: '/materials',
      component: Home,
      children: [
        {
          path: 'program',
          component: MainProgram
        },
        {
          path: 'subject',
          component: MainSubject
        },
        {
          path: 'lesson',
          component: MainLesson
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   // lazy-loaded
    //   component: () => import('./views/BoardAdmin.vue')
    // },
    // {
    //   path: '/mod',
    //   name: 'moderator',
    //   // lazy-loaded
    //   component: () => import('./views/BoardModerator.vue')
    // },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });