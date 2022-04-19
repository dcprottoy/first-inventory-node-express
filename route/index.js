const express = require('express')
const router = express.Router()
const controller = require('../controller/userAuthController');
const bodyparser = require('body-parser');
const db = require('../models');
const Model = db.models.users;
// for parsing application/json
router.use(bodyparser.json()); 

// for parsing routerlication/xwww-
router.use(bodyparser.urlencoded({ extended: true })); 
//form-urlencoded

// define the home page route
router.get('/', controller.auth)
// define the about route
router.post('/about', async(req, res) => {
  const jane = await Model.create({ firstName: "Jane", lastName: "Doe" });
console.log("Jane's auto-generated ID:", jane.id);
  res.send('About birds')
}) 

module.exports = router