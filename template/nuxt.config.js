const env = require('./config');
const plugins = [
    ['import', {
        libraryName: 'manage-ui-components',
        libraryDirectory: 'lib',
        camel2DashComponentName: false
    }]
];

if (env.mode === 'production') {
    plugins.push(["transform-remove-console", { "exclude": ["error", "warn"] }]);
}

module.exports = {
    env,
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',

    /*
     ** Nuxt Telemetry Module
     ** See https://github.com/nuxt/telemetry
     */
    telemetry: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-demo',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    router: {
        middleware: ['user-auth']
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/route.js',
        '~/plugins/ctx-inject.js',
        '~/plugins/manage-ui-components'
    ],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: { plugins },
        vendor: [
            '~/plugins/manage-ui-components.js'
        ],
        extractCSS: true,
    }
}