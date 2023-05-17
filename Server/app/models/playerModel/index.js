const mongoose=require("mongoose");
const Schema = mongoose.Schema

const playerModel=new mongoose.Schema({
    name:{type:String},
    appearances:{type:String},
    goals:{type:String},
    assists:{type:String},
    crossAccuracy:{type:String},
    keyPasses:{type:String},
    teamId:{type:Schema.Types.ObjectId},
    tackles:{type:String}
    

});

const playerDataModel=new mongoose.model("Players",playerModel);


module.exports=playerDataModel;