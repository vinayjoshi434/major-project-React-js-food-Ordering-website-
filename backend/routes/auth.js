const express = require("express");
const router = express.Router();

// for express validator we are using this statement:
const { body, validationResult } = require("express-validator");

//We are using it from out dependencies ()
const bcrypt = require("bcryptjs");

// importing user from models:
const User = require("../models/User");

//for jsonwebtoken:
var jwt = require("jsonwebtoken");

//const for jwt_secret:
const JWT_SECRET = "jagdish";

//now using middleware:
const fetchuser = require("../middleware/fetchuser");

//ROUTE:1

//create a user using: POST "api/auth/createuser". does not require auth:

router.post(
  "/createuser",
  [
    //express-validator:(checking all the validities in the name, email and in passwords):
    body("email", "Enter the valid email Id ").isEmail(),
    body("password", "password must be atleast  5 chracters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there are error return bad request and the error:
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });

      //this will return user exist or not:
      console.log("user", user);
      //if user is not null then it will give the response in the from of json and say (sorry a user with this email already exist !);
      if (user) {
        return res
          .status(400)
          .json({ errors: "sorry a user with this email already exist !" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);
      //creating a new user that referencing the Model User :(User.create Method is used to create the user )
      user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: secPassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      //Now I will send the token to user for next time secured login in the database:
      //for jwtwebtokens:(from website https://www.npmjs.com/package/jsonwebtoken)
      const authToken = jwt.sign(data, JWT_SECRET);

      //console log of the jwtData:
      console.log(authToken);

      //here the response will be the user we entered in the body:(Now it will send the autotoken )_
      res.json({ success: true, authToken });
      console.log("saved successfully in mongoDB !");
      //catching the error:
    } catch (error) {
      console.error(error.message);
      //if there will be any error in the above code it will return the error as response i.e. (some error occured):
      res.status(500).send("some error occured");
    }
  }
);

//ROUTE:2
//authenticate a user using: POST "api/auth/login". no login required:

router.post(
  "/login",
  [
    body("email", "Enter the valid email Id ").isEmail(),
    body("password", "password cannot be blank ").exists(),
  ],
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //by using destructuring we are taking the value of email and password:
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }

      // console.log(user);
      //password components taking the first parameter as password and second as hash here that is user.password because user.password:(return t and f)
      //here I'm comparing the password of user that was entered earlier and recent if both match user can go futher else he got a error fo 400.

      //here the first parameter is password that is written by the user and the second parameter is taken from the above let user(here I taking the user.password)
      const passwordCompare = await bcrypt.compare(password, user.password);

      //if password does not match:
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }

      //payload is a data of user: that is I am going to send :s
      //after checking the password we are providing the user a token by its Id (mongodb I'd )

      //if password match:
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, authToken });
    } catch (error) {
      console.error(error.message);
      //if there will be any error in the above code it will return the error as response i.e. (some error occured):
      res.status(500).send("internal server error ");
    }
  }
);

//ROUTE:3
// Get loggedin  user details : POST "api/auth/getuser".  login required:

router.post('/getuser',fetchuser,async (req, res) => {
    try {
          userId = req.user.id;
        //In the web token we have token Id that I'm fatching over here,
        const user = await User.findById(userId).select("-password");
        //responding user:
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error ");
    }
})

module.exports = router;
