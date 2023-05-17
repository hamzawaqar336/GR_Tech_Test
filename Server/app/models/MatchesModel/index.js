const mongoose=require("mongoose");
const Schema = mongoose.Schema

const matchesModel=new mongoose.Schema({
  teamId:{type: Schema.Types.ObjectId},
  oponentTeamId:{type: Schema.Types.ObjectId},
  startDate:{type:Number}, //will user timestamp data here
  startTime:{type:Number}, //will user timestamp data here from front end
  location:{type:String}

});

const matchesDataModel=new mongoose.model("Matches",matchesModel);


module.exports=matchesDataModel;