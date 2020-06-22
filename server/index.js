const Koa = require('koa')
const KoaPassport = require('koa-passport')
const KoaSession = require('koa-session')
const KoaBodyParser = require('koa-bodyparser')
const KoaRouter = require('koa-router')
const KoaLogger = require('koa-logger')

const consola = require('consola')

const {
    Nuxt,
    Builder
} = require('nuxt')

const app = new Koa()

const config = require('../nuxt.config.js')
config.dev = global.dev = app.env !== 'production'

async function start() {

    const nuxt = new Nuxt(config)

    const {
        host = process.env.HOST || config.server.bind.host,
        port = process.env.PORT || config.server.bind.port
    } = nuxt.options.server

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    app.keys = ['hi'];
    const router = new KoaRouter()
    router.use("/api", require("./router/index").routes())

    app
        .use(KoaLogger())
        .use(KoaBodyParser())
        .use(KoaSession(app))
        .use(KoaPassport.initialize())
        .use(KoaPassport.session())
        .use(router.routes())
        .use(router.allowedMethods());

    app.use((ctx) => {
        ctx.status = 200
        ctx.respond = false
        ctx.req.ctx = ctx
        nuxt.render(ctx.req, ctx.res)
    })

    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}

start()