const express=require("express");
const router=express.Router();
const userController=require("./controller/user");
const {check}=require("express-validator");




router.post('/register',
[
    check("email","Please write your correct email").isEmail(),
    check("password","PLEASE ENTER THE PASSWORD OF LENGTH 8 TO 10 LETTERS").isLength({min:8})
],userController.register);

router.post('/login',
[check("email","Please Write correct email").isEmail()],
[check("Please enter correct password").isLength({min:8})
],userController.login)

router.post("/signout", userController.signout);
