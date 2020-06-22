const { db } = require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const category = new Schema({
    id: Number,
    title: String
}, { collection: 'categories' });
async function getCategoriesList() {

}
async function addCategory() { }
async function delCategory() { }
async function editCategory() { }