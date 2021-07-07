module.exports = {
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
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/ctx-inject.js',
        '~/plugins/manage-ui-components'
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                ['import', {
                    libraryName: 'newManageTemplate',
                    libraryDirectory: 'lib',
                    camel2DashComponentName: false
                }]
            ]
        },
        vendor: [
            '~/plugins/manage-ui-components.js'
        ],
        extractCSS: true,
    }
}