const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Users = require('../db/users')

router.get("/all", async ctx => {
    let userList = await Users.gatUsersList()
    ctx.body = userList
})
router.get("/:userId", async ctx => {
    let userData = await Users.getUserById(ctx.params.userId)
    ctx.body = userData
})
module.exports = router