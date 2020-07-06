const db = require('../utils/lowdb')
const dbConfig = require('../config/db');
const fs = require('fs');

if(!fs.existsSync(dbConfig.lowdb.path)) {
    fs.mkdirSync(dbConfig.lowdb.path)
}

db.defaults({
    workspaces: [],
    users: []
}).write();

db.get('users')
.push({
    id: 1, username: 'obobo'
}).write()

db.get('workspaces')
.push({
    id: 1,
    workspace_id: 'team1',
    name: 'The ABC'
},
{
    id: 2,
    workspace_id: 'team2',
    name: 'We Are Two'
}).write()