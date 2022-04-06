const express = require('express')
const router = express.Router()
const controller = require('../controller/userAuthController');
// middleware that is specific to this router
router.use((req, res, next) => {
//   console.log('Time: ', database)
          
  next()
})
// define the home page route
router.get('/', controller.auth)
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router