/**
 * 侧边栏导航
 */
const navList = [{
    code: '1',
    label: "首页",
    path: "/",
    icon: "jr-icon-s-grid"
}, {
    code: '2',
    label: "常用组件",
    path: "/report/index",
    icon: "jr-icon-s-fold",
    children: [{
        code: "2-1",
        label: "table",
        path: "/table",
        dot: true
    }, {
        code: "2-2",
        label: "空态",
        path: "/empty",
        value: "new"
    }, {
        code: "2-3",
        label: "流式布局",
        path: "/tile"
    }, ],
}, {
    code: "3",
    label: "题库管理",
    path: "/tiku/index",
    icon: "jr-icon-s-opportunity",
    disabled: true,
}, {
    code: '4',
    label: "系统设置",
    path: "/system",
    icon: "jr-icon-s-data"
}];

/**
 * 角色对应菜单权限
 */
let roleList = [{
    //系统管理员
    id: 1000,
    name: "管理员",
    list: ["1", "2", "2-1", "2-2", "2-3", "3", "4"],
}, {
    //文员
    id: 1001,
    name: "文员",
    list: ["1", "2", "2-1", "2-2", "2-3"],
}, {
    //tr
    id: 1002,
    name: "TR",
    list: ["1", "2", "2-1", "3"],
}, {
    //TSD
    id: 1003,
    name: "TSD",
    list: ["1", "3"],
}];

module.exports = { navList, roleList };