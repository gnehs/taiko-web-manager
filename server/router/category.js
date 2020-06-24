const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Catgories = require('../db/categories')

router.get("/all", async ctx => {
    let categoriesList = await Catgories.getCategoriesList()
    ctx.body = categoriesList
})
router.get("/:categoryId", async ctx => {
    let categoryData = await Catgories.getCategoryById(ctx.params.categoryId)
    ctx.body = categoryData
})
module.exports = router