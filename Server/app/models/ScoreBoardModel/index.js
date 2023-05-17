const mongoose=require("mongoose");
const Schema = mongoose.Schema

const scoreCardModel=new mongoose.Schema({
  teamId:{type: Schema.Types.ObjectId},
  oponentTeamId:{type: Schema.Types.ObjectId},
  goalKeeperSave: {type:String},
  highestScorer:{type:String},
  mostAssists:{type:String},
  bestDefence:{type:String}  

//for now i am keeping these fields hardcode otherwise better option is to give type object or array and add fields you like because data fields may increase may decrease by the time....

});

const scoreCardDataModel=new mongoose.model("ScoreCards",scoreCardModel);


module.exports=scoreCardDataModel;