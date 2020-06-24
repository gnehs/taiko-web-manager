const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Songs = require('../db/songs')

router.get("/all", async ctx => {
    let songList = await Songs.getSongsList()
    ctx.body = songList
})
router.get("/:songId", async ctx => {
    let songData = await Songs.getSongById(ctx.params.songId)
    ctx.body = songData
})
module.exports = router