const db = require('../utils/lowdb')

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
}).write()