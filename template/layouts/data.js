// 测试数据
import dic from "./dic.js";
// 表格测试数据
const cascaderOptions = [{
        value: "zhinan",
        label: "指南",
        children: [{
                value: "shejiyuanze",
                label: "设计原则",
                children: [{
                        value: "yizhi",
                        label: "一致",
                    },
                    {
                        value: "fankui",
                        label: "反馈",
                    },
                    {
                        value: "xiaolv",
                        label: "效率",
                    },
                    {
                        value: "kekong",
                        label: "可控",
                    },
                ],
            },
            {
                value: "daohang",
                label: "导航",
                children: [{
                        value: "cexiangdaohang",
                        label: "侧向导航",
                    },
                    {
                        value: "dingbudaohang",
                        label: "顶部导航",
                    },
                ],
            },
        ],
    },
    {
        value: "zujian",
        label: "组件",
        children: [{
                value: "basic",
                label: "Basic",
                children: [{
                        value: "layout",
                        label: "Layout 布局",
                    },
                    {
                        value: "color",
                        label: "Color 色彩",
                    },
                    {
                        value: "typography",
                        label: "Typography 字体",
                    },
                    {
                        value: "icon",
                        label: "Icon 图标",
                    },
                    {
                        value: "button",
                        label: "Button 按钮",
                    },
                ],
            },
            {
                value: "form",
                label: "Form",
                children: [{
                        value: "radio",
                        label: "Radio 单选框",
                    },
                    {
                        value: "checkbox",
                        label: "Checkbox 多选框",
                    },
                    {
                        value: "input",
                        label: "Input 输入框",
                    },
                    {
                        value: "input-number",
                        label: "InputNumber 计数器",
                    },
                    {
                        value: "select",
                        label: "Select 选择器",
                    },
                    {
                        value: "cascader",
                        label: "Cascader 级联选择器",
                    },
                    {
                        value: "switch",
                        label: "Switch 开关",
                    },
                    {
                        value: "slider",
                        label: "Slider 滑块",
                    },
                    {
                        value: "time-picker",
                        label: "TimePicker 时间选择器",
                    },
                    {
                        value: "date-picker",
                        label: "DatePicker 日期选择器",
                    },
                    {
                        value: "datetime-picker",
                        label: "DateTimePicker 日期时间选择器",
                    },
                    {
                        value: "upload",
                        label: "Upload 上传",
                    },
                    {
                        value: "rate",
                        label: "Rate 评分",
                    },
                    {
                        value: "form",
                        label: "Form 表单",
                    },
                ],
            },
            {
                value: "data",
                label: "Data",
                children: [{
                        value: "table",
                        label: "Table 表格",
                    },
                    {
                        value: "tag",
                        label: "Tag 标签",
                    },
                    {
                        value: "progress",
                        label: "Progress 进度条",
                    },
                    {
                        value: "tree",
                        label: "Tree 树形控件",
                    },
                    {
                        value: "pagination",
                        label: "Pagination 分页",
                    },
                    {
                        value: "badge",
                        label: "Badge 标记",
                    },
                ],
            },
            {
                value: "notice",
                label: "Notice",
                children: [{
                        value: "alert",
                        label: "Alert 警告",
                    },
                    {
                        value: "loading",
                        label: "Loading 加载",
                    },
                    {
                        value: "message",
                        label: "Message 消息提示",
                    },
                    {
                        value: "message-box",
                        label: "MessageBox 弹框",
                    },
                    {
                        value: "notification",
                        label: "Notification 通知",
                    },
                ],
            },
            {
                value: "navigation",
                label: "Navigation",
                children: [{
                        value: "menu",
                        label: "NavMenu 导航菜单",
                    },
                    {
                        value: "tabs",
                        label: "Tabs 标签页",
                    },
                    {
                        value: "breadcrumb",
                        label: "Breadcrumb 面包屑",
                    },
                    {
                        value: "dropdown",
                        label: "Dropdown 下拉菜单",
                    },
                    {
                        value: "steps",
                        label: "Steps 步骤条",
                    },
                ],
            },
            {
                value: "others",
                label: "Others",
                children: [{
                        value: "dialog",
                        label: "Dialog 对话框",
                    },
                    {
                        value: "tooltip",
                        label: "Tooltip 文字提示",
                    },
                    {
                        value: "popover",
                        label: "Popover 弹出框",
                    },
                    {
                        value: "card",
                        label: "Card 卡片",
                    },
                    {
                        value: "carousel",
                        label: "Carousel 走马灯",
                    },
                    {
                        value: "collapse",
                        label: "Collapse 折叠面板",
                    },
                ],
            },
        ],
    },
    {
        value: "ziyuan",
        label: "资源",
        children: [{
                value: "axure",
                label: "Axure Components",
            },
            {
                value: "sketch",
                label: "Sketch Templates",
            },
            {
                value: "jiaohu",
                label: "组件交互文档",
            },
        ],
    },
];

// 侧边栏导航测试数据
const navList = [{
        id: 1,
        label: "报表管理",
        path: "/report/index",
        icon: "jr-icon-s-fold",
        children: [
            { id: "1-1", label: "table", path: "/table", dot: true },
            { id: "1-2", label: "空态", path: "/empty", value: "new" },
            { id: "1-3", label: "流式布局", path: "/tile" },
        ],
    },
    { id: 2, label: "表单", path: "/form", icon: "jr-icon-s-grid" },
    {
        id: 3,
        label: "题库管理",
        path: "/tiku/index",
        icon: "jr-icon-s-opportunity",
        disabled: true,
    },
    { id: 4, label: "系统设置", path: "/system/index", icon: "jr-icon-s-data" },
    {
        id: 5,
        label: "走进公校",
        path: "/school",
        icon: "jr-icon-s-management",

        children: [
            { id: "5-1", label: "学校库", path: "/school/info", value: 1000 },
            {
                id: "5-2",
                label: "四情库",
                path: "/school/list",
                value: 2000,
                max: 1000,
            },
            {
                id: "5-3",
                label: "更新记录",
                path: "/school/record",
                children: [
                    { id: "5-1", label: "学校库", path: "/school/info/1", value: 1000 },
                    {
                        id: "5-2",
                        label: "四情库",
                        path: "/school/list/1",
                        value: 2000,
                        max: 1000,
                    },
                    { id: "5-3", label: "更新记录", path: "/school/record/1" },
                ],
            },
        ],
    },
];

// 表单测试数据
const formItems = [{
        tag: "input",
        itemAttrs: {
            label: "姓名",
        },
        attrs: {
            key: "name",
            value: "1123",
            placeholder: "请输入姓名",
        },
        getAttrs(Model) {
            //返回一个被合并到当前attrs属性里的对象
            return Model.age === "22" ? { disabled: true } : null;
        },
    },
    {
        tag: "input",
        itemAttrs: {
            label: "年龄",
            rules: [{ required: true, message: "年龄不能为空", trigger: "click" }],
        },
        attrs: {
            key: "age",
            placeholder: "请输入年龄",
        },
        ifRender(Model) {
            //form为ZFrom的:model对象
            return Model.hobby === "2";
        },
    },
    {
        tag: "select",
        itemAttrs: {
            label: "兴趣",
        },
        attrs: {
            key: "hobby",
            value: "2",
            placeholder: "请输入兴趣",
            options: [
                { value: "1", label: "吃饭" },
                { value: "2", label: "睡觉" },
                { value: "3", label: "打豆豆" },
            ],
        },
    },
    {
        tag: "date",
        itemAttrs: {
            label: "日期",
        },
        attrs: {
            key: "date",
            value: "2018/11/12",
        },
    },
    {
        tag: "radio",
        itemAttrs: {
            label: "单选框",
        },
        attrs: {
            value: "1",
            key: "radio",
            options: [
                { value: "1", label: "男" },
                { value: "2", label: "女" },
            ],
        },
    },
    {
        tag: "radio",
        itemAttrs: {
            label: "调用后端接口-单选框",
        },
        attrs: {
            value: "1",
            key: "asyncRadio",
            options: [{ value: "1", label: "调用后端接口-单选框" }],
        },
    },
    {
        tag: "checkbox-group",
        itemAttrs: {
            label: "复选框组",
        },
        attrs: {
            value: ["1"],
            key: "checkboxGroup",
            options: [
                { value: "1", label: "复选框1" },
                { value: "2", label: "复选框2" },
                { value: "3", label: "复选框3" },
            ],
        },
    },
    {
        tag: "cascader",
        itemAttrs: {
            label: "级联选择器",
        },
        attrs: {
            key: "cascader",
            value: [],
            options: cascaderOptions,
        },
    },
    {
        tag: "checkbox",
        itemAttrs: {
            label: "复选框",
        },
        attrs: {
            key: "checkbox",
            value: true,
            label: "复选框",
        },
    },
    {
        slot: "slotCheckBox",
        itemAttrs: {
            label: "插槽复选框",
        },
    },
    {
        tag: "textarea",
        itemAttrs: {
            label: "文本框",
        },
        attrs: {
            key: "textarea",
        },
    },
];

// 表单测试数据2
const formItems2 = [{
        tag: "select",
        itemAttrs: {
            label: "跟进状态",
        },
        attrs: {
            key: "hobby",
            placeholder: "请输入1",
            options: dic[0].trackResult,
        },
    },
    // 搜索学员
    {
        tag: "input",
        itemAttrs: {
            label: "1搜索学员",
        },
        attrs: {
            key: "name2",
            placeholder: "姓名/手机号/学员编号",
        },
        getAttrs(Model) {
            console.log(Model, 666);
        },
    },

    {
        tag: "input",
        itemAttrs: {
            label: "2搜索学员",
        },
        attrs: {
            key: "name2",
            placeholder: "姓名/手机号/学员编号",
        },
        getAttrs(Model) {
            console.log(Model, 666);
        },
    },
    {
        tag: "input",
        itemAttrs: {
            label: "2搜索学员",
        },
        attrs: {
            key: "name2",
            placeholder: "姓名/手机号/学员编号",
        },
        getAttrs(Model) {
            console.log(Model, 666);
        },
    },
    {
        tag: "input",
        itemAttrs: {
            label: "3搜索学员",
        },
        attrs: {
            key: "name2",
            placeholder: "姓名/手机号/学员编号",
        },
        getAttrs(Model) {
            console.log(Model, 666);
        },
    },
    {
        tag: "input",
        itemAttrs: {
            label: "4搜索学员",
        },
        attrs: {
            key: "name2",
            placeholder: "姓名/手机号/学员编号",
        },
        getAttrs(Model) {
            console.log(Model, 666);
        },
    },
    {
        tag: "input",
        itemAttrs: {
            label: "5搜索学员",
        },
        attrs: {
            key: "name2",
            placeholder: "姓名/手机号/学员编号",
        },
        getAttrs(Model) {
            console.log(Model, 666);
        },
    },
];

function formApi(query) {
    return axios({
        url: "/form",
        method: "post",
        data: query,
    });
}

export default { cascaderOptions, navList, formItems, formItems2, formApi };