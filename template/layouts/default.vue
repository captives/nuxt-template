<template>
    <jr-fullscreen v-model="fullscreen" id="app" @change="fullChangeHandler">
        <jr-layout-swallow>
            <jr-nav-bar :data="list" slot="sidebar" value-field="path" @change="navChangeHandler">
                <span style="display: block; height: 60px">这是logo</span>
            </jr-nav-bar>
            <jr-nav-top></jr-nav-top>
            <!-- 实际上这个地方，放置路由 -->
            <nuxt />
        </jr-layout-swallow>
        <jr-button type="danger" :class="['full-btn', fullscreen ? 'el-icon-news' : 'el-icon-full-screen']" @click="changeHandler"></jr-button>
    </jr-fullscreen>
</template>

<script>
import testData from "./data.js";
export default {
    data() {
        return {
            fullscreen: false,
            list: testData.navList,
        };
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
            console.log(a, b, c, d);
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
