const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get("/all", ctx => {
    ctx.body = {
        hi: hi
    }
})
module.exports = router