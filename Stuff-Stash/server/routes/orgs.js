const express = require('express')
const router = express.Router()
const { getOrgs, addOrg} = require('../controllers/org.js')

router
  .route('/org')
  .get(getOrgs)
  .post(addOrg)

module.exports = router