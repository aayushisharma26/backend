const Register=require('../db.js')
const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken")

signup=async(req,res)=>{
    try{
    const users={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone_number:req.body.phone_number
    }
    // console.log(users);

    const insertData= await Register.insertMany(users)
    res.json({
        message:'New Profile Added',
        profile:insertData
    })
    }catch(err){
        console.log(err);
        res.json({
            message:'Email id already exits!',
            error:err
            
        })
    }
}

login=async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password

        const result=await Register.findOne({email:email})

        const token=jwt.sign({id:Register._id},"aayushisharma",{ expiresIn:"8h"})
        // console.log(result,token);
        
        res.send({message:"login successfuly",result:result,token:token})
        // res.send({result:result,token:token})

        if (err){
            return
            res.send(err)
            }
        else{
            // console.log("login");
            return
            res.send({success:"User login succesfully",result})
        }     

    }catch(err){
        return
        res.send("no")
    }

}

module.exports={signup,login}