const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');

//create a user using: POST "/api/auth/" . Doesnt require auth
router.post('/', [
    body('email').isEmail(),
    body('name').isLength({min: 3}),
    body('password').isLength({min: 5}),
], (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body)
})

module.exports = router
