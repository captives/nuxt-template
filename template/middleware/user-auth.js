import { navData } from './../layouts/nav-list.js';
export default function({ route, req, res, redirect, error }) {
    //在服务端
    if (process.server) {}

    //在客户端
    if (process.client) {}

    console.log('user-auth', route);

    console.log('process.env', process.env.baseURL);

    if (navData[route.path] && navData[route.path].path === '/system') {
        error({ statusCode: 700, message: '无权限进入该页面~' })
    }
    //如果未登录
    //redirect('/login');
}