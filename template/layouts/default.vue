<template>
    <jr-fullscreen v-model="fullscreen" id="app" @change="fullChangeHandler">
        <jr-layout-swallow :sidebar-width="200">
            <jr-nav-bar :data="list" slot="sidebar" :default-active="selectPath" value-field="path" logo="/images/logo_white_360.png" @change="navChangeHandler"> </jr-nav-bar>
            <template slot="header">
                <jr-breadcrumb separator-class="jr-icon-arrow-right">
                    <jr-breadcrumb-item :to="{ path: '/' }">首页</jr-breadcrumb-item>
                    <jr-breadcrumb-item>活动管理</jr-breadcrumb-item>
                    <jr-breadcrumb-item>活动列表</jr-breadcrumb-item>
                    <jr-breadcrumb-item>活动详情</jr-breadcrumb-item>
                </jr-breadcrumb>

                <div class="el-layout-header__profile">
                    <jr-tag>全屏</jr-tag>
                    <jr-tag>退出</jr-tag>
                    <jr-tag>登入</jr-tag>
                </div>
            </template>
            <jr-nav-top></jr-nav-top>
            <!-- 实际上这个地方，放置路由 -->
            <nuxt></nuxt>
        </jr-layout-swallow>
        <jr-button type="danger" :class="['full-btn', fullscreen ? 'el-icon-news' : 'el-icon-full-screen']" @click="changeHandler"></jr-button>
    </jr-fullscreen>
</template>

<script>
import { navList, selectPath } from "./nav-list.js";
console.log(navList);
export default {
    validate({ params }) {
        console.log("layout", params);
        return true;
    },
    data() {
        return {
            fullscreen: false,
            list: navList,
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
        fullChangeHandler(full) {
            this.$message({
                type: "success",
                message: full ? "进入全屏" : "退出全屏",
            });
        },
        navChangeHandler(a, b, c, d) {
            // console.log(a, b, c, d);
            this.$router.push(a);
        },
    },
    created() {},
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
}

.full-btn {
    position: absolute;
    left: 10px;
    bottom: 10px;
}
</style>
