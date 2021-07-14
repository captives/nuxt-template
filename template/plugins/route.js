import { navData, setActive } from './../layouts/nav-list.js';

export default ({ app }) => {
    app.router.afterEach((to, from) => {
        console.log("to.path", to.path)
        setActive(to.path);
    })
}