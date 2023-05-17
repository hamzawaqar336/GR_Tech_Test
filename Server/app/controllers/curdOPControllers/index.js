const TeamsModel = require("../../models/TeamModel/index");

const getAllTeam = async (req , res) => {
    const teams = await TeamsModel.find({});


        res.json(teams);
}

const createTeam = async (req , res) => {

    const teamData = new TeamsModel({
        TeamName:req.body.teamName,
        TeamPerformanceData:req.body.teamPerformanceArray

    })
    const teamDataSave = await teamData.save();
  
    res.json(teamDataSave);
    
}

const updateTeam = async (req , res) => {

 
    if(req.body.teamName && req.body.teamPerformanceArray){
      
        
    let updatedata = {
        TeamName:req.body.teamName,
        TeamPerformanceData:req.body.teamPerformanceArray
    }
    const result = await TeamsModel.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedata });
    res.json({result:result,success:true});
    

    }else if(req.body.teamName){
        const result = await TeamsModel.findByIdAndUpdate({ _id: req.params.id }, { TeamName: req.body.teamName }, { new: true });
        res.json({result:result,success:true});


    }else if(req.body.teamPerformanceArray){
        const result = await TeamsModel.findByIdAndUpdate({ _id: req.params.id }, { TeamPerformanceData:req.body.teamPerformanceArray }, { new: true });
        res.json({result:result,success:true});


    }else{
        res.json({success:false});
    }

       
    
}

const deleteTeam = async (req , res) => {

    const team = await TeamsModel.findById(req.params.id);


        await team.remove();
    
    
        res.json({ success: true });
    
}

module.exports = {getAllTeam, createTeam, updateTeam, deleteTeam};