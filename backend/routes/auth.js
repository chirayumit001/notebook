const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken'); 

const JWT_SECRET = 'ChirayuIsaGoodboi$';

//create a user using: POST "/api/auth/createuser" . Doesnt require login
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there ar eno errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with same email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      // this part is not working dont know wy so i have added a catch block at the end, whihc was supposed to cath errors appart from duplicate key but now catches duplicate key as well and working fine
    //   if (user == undefined) {
    //     return res.status[400].json({
    //       error: "Sorry a user with this email already exists",
    //     });
    //   }
      const salt = await bcrypt.genSalt(10)
      secPass = await bcrypt.hash(req.body.password, salt) 

      //create user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });


      //sending token now with index jwt
      const data = {
          user: {
              id: user.id
          }
      }

      const authToken = jwt.sign(data, JWT_SECRET)
      
      res.json({authToken: authToken});

      
    } catch (error) {
        res.json({"Error":"Duplicate Key"})
        console.error(error)
        // res.status[500].send("Some error")
    }
  }
);

module.exports = router;
