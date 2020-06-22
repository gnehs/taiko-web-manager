const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Catgories = require('../db/categories')

router.get("/all", async ctx => {
    let categoriesData = await Catgories.getCategoriesList()
    ctx.body = categoriesData
})
module.exports = router