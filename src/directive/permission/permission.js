import store from '../../store/store';

export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    const roles = store.getters && store.getters.roles;
    let routeName = store.state.user.permissions;
    let hasPermission = false;

    if (value && value instanceof Array && value.length > 0) {
      const permissionsRoles = value;
      if (roles.indexOf('admin') !== -1) {
        hasPermission = true;
      } else {
        hasPermission = routeName.some(role => {
          return permissionsRoles.includes(role);
        });
      }
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin', 'user']"`);
    }
  }
};
