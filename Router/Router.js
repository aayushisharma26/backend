const { signup,login} = require("../Controller/controller");
const express=require('express')

var router=express.Router();

router.post("/signup",signup)

router.post("/login",login)

module.exports=router