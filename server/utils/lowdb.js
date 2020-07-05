const dbConfig = require('../config/db');

const low = require('lowdb')
const path = require('path');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(dbConfig.lowdb.path)
const db = low(adapter)

module.exports = db;