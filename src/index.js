import mongoose from "mongoose";
import { DB_Name } from "./constants"

import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({ 
  path: './env'
})





connectDB()
.then(()=> {

   // app.on("error" , (error)=>{  
  //   console.log("ERRR" , error);
  //   throw error
  // } )  assignment completed

  app.listen(process.env.PORT || 8000 , () =>{
    console.log(`Server is running at port: ${process.env.PORT}`);
  })
})
.catch((error)=>{
  console.log("MONGODB connection failed" , error);
})
