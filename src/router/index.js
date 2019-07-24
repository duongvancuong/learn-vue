import Vue from 'vue';
import Router from 'vue-router';

import ImageViewer from '@/components/ImageViewer';
import Subdetail from '@/pages/Subdetail';

const Employee = () => import('../pages/Employee.vue');
const EmployeeProfile = () => import('@/components/EmployeeProfile');
const PageNotFound = () => import('@/components/NotFound');
const Login = () => import('@/components/Login');
const Home = () => import('../pages/Home.vue');
const Reddit = () => import('../pages/Reddit.vue');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '', component: Home, name: 'home' },
    { path: '/employee', alias: '/home', name: 'Employee', component: Employee,
      children: [
        {
          path: ':id',
          component: EmployeeProfile,
          name: 'employee-profile',
          // meta: { requiresAuth: true },
        },
      ],
    },
    { path: '/login', component: Login },
    { path: '/reddit', name: 'reddit', component: Reddit },
    { path: '/viewer', name: 'imageViewer', component: ImageViewer },
    { path: '/subdetail/:id', component: Subdetail, name: 'subdetail' },
    { path: '/not-found', component: PageNotFound, props: { greeting: 'Hello tekfun' } },
    { path: '*', redirect: '/not-found' },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return desired position
  },
});

router.beforeEach((to, from, next) => {
  // should be handling authentication here.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  console.log(`after router to is: ${to.fullPath}`);
  console.log(`after router from is: ${from.fullPath}`);
});

export default router;
