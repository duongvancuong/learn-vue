import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 *  NOTED public routes, not need permission
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/components/NotFound'),
    props: { greeting: 'Hello tekfun' },
    hidden: true
  },
  {
    path: '',
    component: () => import('@/pages/Home'),
    name: 'home',
    meta: { title: 'Home' }
  },
  {
    path: '/reddit',
    name: 'reddit',
    component: () => import('@/pages/Reddit'),
  },
  {
    path: '/viewer',
    name: 'imageViewer',
    component: () => import('@/components/ImageViewer'),
  },
  {
    path: '/subdetail/:id',
    component: () => import('@/pages/Subdetail'),
    name: 'subdetail',
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('@/pages/Employee'),
    children: [
      {
        path: ':id',
        component: () => import('@/components/EmployeeProfile'),
        name: 'employee-profile',
      },
    ],
  },
];

export const asyncRoutes = [
  {
    path: '/admin',
    name: 'admin',
    hidden: false,
    alwaysShow: true,
    redirect: '/admin/users',
    component: () => import('@/layout'),
    children: [
      {
        path: 'users',
        component: () => import('@/views/admin/Index'),
        name: 'user_list',
        meta: {
          title: 'User List',
        },
      },
    ],
    meta: {
      title: 'Admin Site',
    }
  },
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
