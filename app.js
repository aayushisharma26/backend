const express=require("express")

const mongoose=require("mongoose")

require('dotenv').config()

const router=require('./Router/Router.js')

const app=express()

app.use(express.json())

const PORT=process.env.PORT||4000

app.use ("/",router)

app.listen(PORT,()=>console.log('Listening to the port..'))