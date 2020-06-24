const colors = require('vuetify/es5/util/colors').default
module.exports = {
	/*
	** Nuxt rendering mode
	** See https://nuxtjs.org/api/configuration-mode
	*/
	mode: 'spa',
	/*
	** Headers of the page
	** See https://nuxtjs.org/api/configuration-head
	*/
	head: {
		title: 'Taiko Web Manager',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/vuetify',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				light: {
					primary: colors.blue.base,
					secondary: colors.purple.base,
					accent: colors.pink.base,
					error: colors.red.base,
					warning: colors.teal.base,
					info: colors.cyan.base,
					success: colors.green.base
				},
				dark: {
					primary: colors.blue.darken4,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
	},
	telemetry: false
}
