import Vue from 'vue';

// 侧边栏导航测试数据
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

let selectPath = '';
let navData = (function() {
    let navData = {};

    function flat(list) {
        list.forEach(nav => {
            if (nav.path) {
                navData[nav.path] = nav;
            }

            if (nav.children) {
                flat(nav.children);
            }
        })
    }

    flat(navList);
    return navData;
})(navList)

function setActive(path) {
    selectPath = path;
    if (navData[path]) {
        Vue.set(navData[path], 'active', navData[path].active || true);
    }
    console.log('selectPath', selectPath);
}

//角色对应菜单
let roleList = [{
    //系统管理员
    roleId: 1000,
    roleName: "admin",
    navList: ["0", "0-0", "0-8", "0-9", "0-10", "1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-12", "1-13", "1-15", "1-17", "2", "2-1", "2-2", "2-3", "2-4", "2-5", "4", "4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9", "4-10", "4-11", "4-12", "4-13", "5", "5-1", "6", "6-4", "6-7", "6-8", "6-12", "7", "7-1", "7-2", "7-3", "7-4", "7-5", '8', '8-0', '8-1'],
}, {
    //文员
    roleId: 1001,
    roleName: "tr",
    navList: ["1", "1-2", "1-16", "1-17"],
}, {
    //tr
    roleId: 1002,
    roleName: "tr",
    navList: ["1", "1-14", "1-11", "1-12", "1-13", "1-14"],
}, {
    //TSD
    roleId: 1003,
    roleName: "tr",
    navList: ["0", "0-0", "0-1", "0-5", "0-6", "0-7", "0-10", "2", "2-1", "2-2", "2-3", "2-4", "2-5", "1", "1-3", "1-18", '8', '8-0', '8-1'],
}];

export { navList, navData, setActive, selectPath };