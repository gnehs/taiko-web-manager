/*=======================*/
/*       mongoose        */
/*=======================*/
const mongoose = require('mongoose');
const config = require('../../taiko.config.js')
const Schema = mongoose.Schema;
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'taiko' });

module.exports = { db }