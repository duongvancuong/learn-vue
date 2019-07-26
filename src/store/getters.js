export default {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.first_name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes
};
