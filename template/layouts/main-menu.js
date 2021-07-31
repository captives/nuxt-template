import Vue from 'vue';
import { navList, roleList } from '~/config/config-nav.js';

/**
 * 当前用户的角色信息
 */
let role = null;
let selectPath = '';

/**
 * 根据用户角色筛选出来的菜单队列结构(路由过滤)
 */
let menus = {};

/**
 * 根据用户角色筛选出来的菜单结构(导航)
 */
let data = {};

function filterList(array) {
    let _navData = array ? JSON.parse(JSON.stringify(array)) : [];

    function flat(list) {
        for (let i = list.length - 1; i >= 0; i--) {
            if (!role.list.includes(list[i].code)) {
                list.splice(i, 1);
            }

            if (list[i]) {
                if (list[i].path) {
                    menus[list[i].path] = list[i];
                }

                if (list[i].children) {
                    flat(list[i].children);
                }
            }
        }
    }

    flat(_navData);
    data = _navData;
    console.log('菜单渲染', data);
}

/**
 * 当前选中的菜单
 * @param {*} path 当前选中的菜单path
 */
function setActive(path) {
    selectPath = path;
    if (menus[path]) {
        Vue.set(menus[path], 'active', menus[path].active || true);
    }
    console.log('selectPath', selectPath);
}

/**
 * 根据角色id，识别当前角色,返回当前角色的完整信息
 * 如果为查询到，则返回null;
 * @param {*} id 
 */
function setRole(id, keep) {
    role = roleList.find(item => item.id == id) || null;

    if (role) {
        //查询角色下对应的菜单结构
        filterList(role ? navList : null);
        keep && window.localStorage.setItem('_role', JSON.stringify(role));
    }

    return role;
}

/**
 * 获取指定角色id的角色信息
 * @param {*} id 
 * @returns 
 */
function getRole() {
    if (role) {
        return role;
    }

    let _role = JSON.parse(window.localStorage.getItem('_role'));
    //防止用户更改role
    role = _role && roleList.find(item => item.id == _role.id) || role;

    //查询角色下对应的菜单结构
    filterList(role ? navList : null);
    return role;
}

/**
 * 移除当前角色信息
 */
function removeRole() {
    role = null;
    window.localStorage.removeItem('_role');
}

getRole();
const roles = roleList.map(role => Object.assign({}, role ? { id: role.id, name: role.name } : {}));

export { roles, menus, data, selectPath, setActive, setRole, getRole, removeRole };