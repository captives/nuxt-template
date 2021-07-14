<template>
    <jr-main>
        这是设置页面
        {{ list }}
        <hr />
        <ul>
            <li v-for="(item, key) in data" :key="key" @click="clickHandler(item)">{{ item }}</li>
        </ul>

        <jr-button type="success" @click="selectHandler">选中当前节点</jr-button>
    </jr-main>
</template>
<script>
import { navList, navData, setActive } from "./../../layouts/nav-list.js";
export default {
    data() {
        return {
            list: navList,
            data: navData,
        };
    },
    methods: {
        clickHandler(item) {
            this.$set(item, "disabled", !(item.disabled || false));
        },
        selectHandler() {
            setActive();
        },
    },
};
</script>
<style lang="scss" scoped>
li {
    padding: 10px 5px;
    cursor: pointer;
    user-select: none;
    &:hover {
        background: #eee;
    }
}
</style>