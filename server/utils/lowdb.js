const low = require('lowdb')
const path = require('path');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join('.tmp', 'db.json'))
const db = low(adapter)

module.exports = db;