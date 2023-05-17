const mongoose=require("mongoose");


const Teams=new mongoose.Schema({
    TeamName:{type:String},
    TeamPerformanceData:{type:Array}

});

const TeamsDataModel=new mongoose.model("Teams",Teams);


module.exports=TeamsDataModel;