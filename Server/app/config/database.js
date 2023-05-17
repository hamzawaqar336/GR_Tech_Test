const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const myPassVariable = process.env.Mongo_Pass;

const uri = `mongodb+srv://hamzaWaqar:${myPassVariable}@cluster0.icmmu0d.mongodb.net/`;
mongoose.connect(uri, { useNewUrlParser: true }).then((res)=>{
    console.log("Database Connected")

}).catch((err)=>{
    console.log("DB error Hamza Bro",err)
})