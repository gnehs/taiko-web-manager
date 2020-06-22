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
async function login(username, password) { }
async function gatUsersList() { }
async function addUser() { }
async function delUser() { }
async function editUser() { }