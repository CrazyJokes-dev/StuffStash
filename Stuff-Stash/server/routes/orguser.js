const express = require('express')
const router = express.Router()
const {adduserOrg} = require('../controllers/org.js')

router
  .route('/')
  //.get(getOrgs)
  .post(adduserOrg)

module.exports = router