const { db } = require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = new Schema({
    id: Number,
    title: String
}, { collection: 'categories' });
const model = mongoose.model('category', Category)
async function getCategoriesList() {
    return (await model.find({}))
}
async function addCategory() { }
async function editCategory() { }
async function delCategory() { }

module.exports = {
    getCategoriesList,
    addCategory,
    editCategory,
    delCategory
}