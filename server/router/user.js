const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Users = require('../db/users')

router.get("/all", async ctx => {
    let userList = await Users.gatUsersList()
    ctx.body = userList
})
module.exports = router