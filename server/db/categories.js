const { db } = require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = new Schema({
    id: Number,
    title: String,
    aliases: [],
    song_skin: {
        "background": String,
        "bg_img": String,
        "border": [],
        "info_fill": String,
        "outline": String,
        "sort": Number
    },
    "title": String,
    "title_lang":
    {
        "cn": String,
        "en": String,
        "ja": String,
        "ko": String,
        "tw": String
    }
}, { collection: 'categories' });
const model = mongoose.model('category', Category)
async function getCategoriesList() {
    return (await model.find({}))
}
async function getCategoryById(id) {
    return (await model.findById(id))
}
async function addCategory() { }
async function editCategory() { }
async function delCategory() { }

module.exports = {
    getCategoriesList,
    getCategoryById,
    addCategory,
    editCategory,
    delCategory
}