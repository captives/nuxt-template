<template>
    <jr-main>
        这是设置页面
        {{ menus }}
        <ul>
            <li v-for="(item, key) in data" :key="key" @click="clickHandler(item)">{{ item }}</li>
        </ul>

        <jr-button type="success" @click="selectHandler">选中当前节点</jr-button>
    </jr-main>
</template>
<script>
import { menus, data, setActive } from "~/layouts/main-menu";
export default {
    data() {
        return {
            menus,
            data,
        };
    },
    methods: {
        clickHandler(item) {
            this.$set(item, "disabled", !(item.disabled || false));
        },
        selectHandler() {
            setActive("/system");
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