module.exports = {
    helpers: {
        escape: function(value) {
            return value.replace(/'/g, '&apos;');
        }
    },
    //交互询问
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': '项目名称'
        },
        vuex: {
            type: "confirm",
            message: "项目使用vuex吗？",
            default: true
        },
        description: {
            'type': 'string',
            'required': false,
            'message': '项目描述',
            'default': 'Nuxt.js project'
        },
        author: {
            'type': 'string',
            'message': '作者'
        },
    },
    filters: {
        "store/*": "vuex"
    },
    complete: function() {
        console.log('创建完成', arguments);
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};