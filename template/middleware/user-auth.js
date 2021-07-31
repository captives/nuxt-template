import { menus, getRole, removeRole } from '~/layouts/main-menu.js';
export default function({ route, req, res, redirect, error }) {
    //在服务端
    if (process.server) {}

    //在客户端
    if (process.client) {}

    console.log('process.env', process.env.baseURL);

    //角色
    if (route.path == '/login') {
        removeRole();
    } else if (!getRole()) {
        //未登录
        redirect('/login');
    }

    //权限
    if (!menus[route.path] && !['/login'].includes(route.path)) {
        error({ statusCode: 700, message: '无权限进入该页面~' })
    }
}