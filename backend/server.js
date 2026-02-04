const express=require('express');
require('dotenv').config();
const mongoose=require('mongoose');
const cors=require('cors')
const app=express();
app.use(cors());
const leaveRoutes = require('./routes/apiroutes');

app.use(express.json());
app.use('/api', leaveRoutes);

mongoose.connect(process.env.Mongo_uri)
.then(()=>{console.log("mongoose is conncted")})
.catch((err)=>{console.log(err)});

app.get("/hc",(req,res)=>{
    res.send("Health check for AGN TECH & IT SOLUTION");
})

 app.listen(process.env.PORT,()=>{
    console.log(`Server running on the port ${process.env.PORT}`)
 })