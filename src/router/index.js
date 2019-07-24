import Vue from 'vue';
import Router from 'vue-router';

const Employee = () => import('../pages/Employee.vue');
const EmployeeProfile = () => import('@/components/EmployeeProfile');
const PageNotFound = () => import('@/components/NotFound');
const Login = () => import('@/components/Login');
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Employee',
      component: Employee,
      children: [
        {
          path: 'employee/:id',
          component: EmployeeProfile,
          name: 'employee-profile',
          // meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/not-found',
      component: PageNotFound,
      props: {
        greeting: 'Hello tekfun',
      },
    },
    {
      path: '*', redirect: '/not-found',
    },
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
