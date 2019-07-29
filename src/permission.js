import router from '@/router';
import { store } from './store/store';
import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import getPageTitle from '@/utils/get-page-title';

import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login'];

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);

  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        if (to.path === '/' && store.getters.roles.includes('admin') ) {
          next({ path: '/admin/users' });
        } else {
          next();
        }
      } else {
        try {
          const UserInfo = await store.dispatch('user/getInfo');
          const accessRoutes = await store.dispatch('permission/generateRoutes', UserInfo);
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true });
        } catch(error) {
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
