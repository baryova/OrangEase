const express = require('express')
const router = express.Router()

router.get('/users', (req,res) => {
    res.json('Hello World')
})  

module.exports = router

