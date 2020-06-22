const KoaRouter = require('koa-router')
const router = new KoaRouter()

require('../passport')
const passport = require('koa-passport')

router.get("/list", ctx => {
    if (ctx.isAuthenticated()) {

    } else {
        ctx.body = {
            success: false,
            error_code: "NOT_AUTHORIZED"
        }
    }
})
router.post('/login', async (ctx, next) => {
    return passport.authenticate('local', (err, user) => {
        if (user === false) {
            ctx.body = {
                success: false,
                error: "wrong account or password"
            };
        } else {
            ctx.body = {
                success: true,
                error: null
            }
            ctx.login(user)
        }
    })(ctx)
})
module.exports = router