require("dotenv").config();
const mongoose = require('mongoose');
const dbUrl = process.env.DB;
const kodoDb = async function (){
  try{
   const connectDb =  await mongoose.connect(dbUrl);
   
    
     console.log("Database connected sucessfully");

  }
  catch(error){
    console.log(error + 'Error Showing')
  }
}

kodoDb();