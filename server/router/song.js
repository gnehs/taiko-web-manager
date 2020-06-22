const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Songs = require('../db/songs')

router.get("/all", async ctx => {
    let songList = await Songs.getSongsList()
    ctx.body = songList
})
module.exports = router