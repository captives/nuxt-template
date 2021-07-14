<template>
    <jr-container>
        <jr-login :bgStyle="{ background: 'url(/images/login_bg2.png) 100% 0px / 75px no-repeat' }" imgLogo="/images/login_bg3.png" imgTitle="/images/login_bg1.png" :title="{ form: '', box: 'CRM cloud platform' }" :formItems="formItems" @submit="submitControl">
            <template v-slot:defaulForm></template>
        </jr-login>
    </jr-container>
</template>
<script>
export default {
    layout: "main",
    data() {
        return {
            formItems: [],
        };
    },
    methods: {
        submitControl(valid, data) {
            // 表单验证通过后执行的操作
            console.log("表单验证通过%s, 数据源", valid, data);
            if (valid) {
                this.$router.push({ path: "/" });
            }
        },
    },
    created() {
        this.formItems = [
            {
                slot: "account",
                tag: "input",
                itemAttrs: {
                    label: "账号",
                    labelWidth: "70px",
                    rules: [{ required: true, message: "请输入账号", trigger: "blur" }],
                },
                attrs: {
                    key: "account",
                    value: null,
                    default: null,
                    placeholder: "请输入账号",
                },
            },
            {
                slot: "password",
                tag: "input",
                itemAttrs: {
                    labelWidth: "70px",
                    label: "密码",
                    rules: [{ required: true, message: "请输入密码", trigger: "blur" }],
                },
                attrs: {
                    key: "password",
                    value: "",
                    default: null,
                    placeholder: "请输入密码",
                },
            },
            {
                tag: "checkbox",
                itemAttrs: { labelWidth: "70px", label: "" },
                attrs: {
                    key: "isRemember",
                    value: false,
                    default: null,
                    label: "记住我",
                },
            },
        ];
    },
};
</script>
<style lang="scss" scoped>
.el-container {
    height: 100%;
    position: fixed;
    width: 100%;
    .el-login {
        margin: 0 auto;
    }
}
</style>