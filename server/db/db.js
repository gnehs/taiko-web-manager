/*=======================*/
/*       mongoose        */
/*=======================*/
const mongoose = require('mongoose');
const config = require('../taiko.config.js').default
const Schema = mongoose.Schema;
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo, { useNewUrlParser: true });

module.exports = { db }