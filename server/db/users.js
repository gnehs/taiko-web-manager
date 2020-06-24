const { db } = require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    username: String,
    username_lower: String,
    password: 'Buffer',
    display_name: String,
    don: {
        body_fill: String,
        face_fill: String
    },
    user_level: Number,
    session_id: String
}, { collection: 'users' });
const model = mongoose.model('user', User)
async function login(username, password) { }
async function gatUsersList() {
    return (await model.find({}))
}
async function getUserById(id) {
    return (await model.findById(id))
}
async function addUser() { }
async function delUser() { }
async function editUser() { }

module.exports = {
    login,
    gatUsersList,
    getUserById,
    addUser,
    delUser,
    editUser
}