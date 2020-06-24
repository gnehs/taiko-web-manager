const { db } = require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = new Schema({
    category_id: Number,
    subtitle: String,
    title: String,
    //maker_id: null,
    enabled: Boolean,
    subtitle_lang: {
        tw: String,
        en: String,
        ko: String,
        ja: String,
        cn: String
    },
    order: Number,
    volume: Number,
    courses: {
        oni: {
            branch: Boolean,
            stars: Number
        },
        hard: {
            branch: Boolean,
            stars: Number
        },
        ura: {
            branch: Boolean,
            stars: Number
        },
        easy: {
            branch: Boolean,
            stars: Number
        },
        normal: {
            branch: Boolean,
            stars: Number
        }
    },
    //skin_id: null,
    offset: Number,
    preview: Number,
    title_lang: {
        tw: String,
        en: String,
        ko: String,
        ja: String,
        cn: String
    },
    type: String,
    id: Number,
    hash: String

}, { collection: 'songs' });
const model = mongoose.model('song', Song)

async function getSongsList() {
    return (await model.find({}))
}
async function getSongById(id) {
    return (await model.findById(id))
}
async function addSong() { }
async function delSong() { }
async function editSong() { }

module.exports = {
    getSongsList,
    getSongById,
    addSong,
    delSong,
    editSong
}