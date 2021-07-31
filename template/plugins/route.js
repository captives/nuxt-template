import { navData, setActive } from '~/layouts/main-menu.js';

export default ({ app }) => {
    app.router.afterEach((to, from) => {
        console.log("to.path", to.path)
        setActive(to.path);
    })
}