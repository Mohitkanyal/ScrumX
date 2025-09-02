const express = require('express');

const router = express.Router()

const userRegisterController= require('../controller/userRegister');
const userLoginController = require('../controller/userLogin');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');



router.post("/Register",userRegisterController);
router.post("/Login",userLoginController);
router.get("/user-details",authToken,userDetailsController);
router.get("/userLogout",userLogout);


module.exports = router;