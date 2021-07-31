<template>
    <jr-fullscreen v-model="fullscreen" id="app">
        <jr-layout-swallow :sidebar-width="200">
            <jr-nav-bar :data="list" slot="sidebar" :default-active="selectPath" value-field="path" logo="/images/logo_white_360.png" @change="navChangeHandler"> </jr-nav-bar>
            <template slot="header">
                <jr-breadcrumb separator="/">
                    <jr-breadcrumb-item :to="{ path: '/' }">首页</jr-breadcrumb-item>
                    <jr-breadcrumb-item>活动管理</jr-breadcrumb-item>
                    <jr-breadcrumb-item>活动列表</jr-breadcrumb-item>
                    <jr-breadcrumb-item>活动详情</jr-breadcrumb-item>
                </jr-breadcrumb>

                <div class="el-layout-header__profile">
                    <jr-tag @click="fullscreen = !fullscreen">{{ fullscreen ? "常规" : "全屏" }}</jr-tag>
                    <nuxt-link to="/login">
                        <jr-tag type="danger">退出</jr-tag>
                    </nuxt-link>
                </div>
            </template>
            <jr-nav-top></jr-nav-top>
            <!-- 实际上这个地方，放置路由 -->
            <nuxt></nuxt>
        </jr-layout-swallow>
    </jr-fullscreen>
</template>

<script>
import { data, selectPath } from "./main-menu.js";
export default {
    validate({ params }) {
        console.log("layout", params);
        return true;
    },
    data() {
        return {
            fullscreen: false,
            list: data,
        };
    },
    computed: {
        selectPath() {
            return selectPath;
        },
    },
    methods: {
        changeHandler() {
            this.fullscreen = !this.fullscreen;
        },
        navChangeHandler(a, b, c, d) {
            // console.log(a, b, c, d);
            this.$router.push(a);
        },
    },
    asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
        console.log("asyncData");
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
};
</script>
<style lang="scss">
#app,
html,
body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

* {
    padding: 0;
    margin: 0;
}

.el-fullscreen {
    background: #fff;

    .el-nav-bar {
        height: 100%;
    }

    .el-layout-swallow > .el-layout-main {
        overflow: auto;
    }
}
</style>
