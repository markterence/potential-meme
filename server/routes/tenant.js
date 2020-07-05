var express = require('express');
var router = express.Router();
const db = require('../utils/lowdb')
const crypto = require('crypto')

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(`x-tenant-domain:`,req.get('x-tenant-domain'))
    const tenant = req.get('x-tenant-domain');
    
    const workspace = db.get('workspaces')
    .find({workspace_id: tenant}).value();
    console.log(workspace)
    if(workspace) {
        const randomToken = crypto.randomBytes(18).toString('hex');
        let payload = {
            workspaceToken: randomToken,
            workspace
        }
        return res.json(payload)
    }
    else {
        return res.status(404)
    }
    

    

});

module.exports = router;
