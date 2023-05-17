const playerModel = require("../../models/playerModel/index");

const getPlayersPerformance = async (req, res) => {

    const query = [
        {
            $match: {
                _id: ObjectID(req.params.id)
            }
        },
    
        {
            $lookup: {
                from: "teams",
                localField: "teamId",
                foreignField: "_id",
                as: "teamsDatas_in_PlayerModel"
            }
        },
       
        { $unwind: { "path": "$TeamPerformanceData", "preserveNullAndEmptyArrays": true } },
       
    
        {
            "$project": {
              
                "TeamName": 1
            }
        },
        { $sort: { _id: -1 } }
    ]
    
    const getDatas = await playerModel.aggregate(query);
    
    res.json({
        result:getDatas,
        success:true
    })

}

const createPlayersPerformance = async (req, res) => {
  const createPlayer = new playerModel({
    name:req.body.name,
    appearances:req.body.appearances,
    goals: req.body.goals,
    assists:req.body.assists,
    crossAccuracy:req.body.crossAccuracy,
    keyPasses:req.body.keyPasses,
    teamId:req.body.teamId,
    tackles:req.body.tackles
    
  })

}

const updatePlayersPerformance = async (req, res) => {

    let updatedata = req.body;
   
    const result = await playerModel.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedata });
    res.json({result:result,success:true});


}

const deletePlayersPerformance = async (req, res) => {
    const team = await playerModel.findById(req.params.id);

    await team.remove();

res.json({
    success:true
});


}

module.exports = {getPlayersPerformance,createPlayersPerformance,updatePlayersPerformance,deletePlayersPerformance};
