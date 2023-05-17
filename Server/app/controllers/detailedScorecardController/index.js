const ScoreBoardModel = require("../../models/ScoreBoardModel/index");


const getTeamsDetailedSocreBoard = async (req, res) => {

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
            as: "teamsData"
        }
    },
    {
        $lookup: {
            from: "teams",
            localField: "oponentTeamId",
            foreignField: "_id",
            as: "opnentTeamsData"
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

const getDatas = await ScoreBoardModel.aggregate(query);

res.json({
    result:getDatas,
    success:true
})


}


const createTeamsDetailedSocreBoard = async (req, res) => {
    const scoreBoardData = new ScoreBoardModel({
        teamId:req.body.teamId,
        oponentTeamId: req.body.oponentTeamId,
        goalKeeperSave: req.body.goalKeeperSave,
        highestScorer: req.body.highestScorer,
        mostAssists: req.body.mostAssists,
        bestDefence: req.body.bestDefence

    })
    const scoreBoardDataSave = await scoreBoardData.save();

    res.json(scoreBoardDataSave);
}

const updateTeamsDetailedSocreBoard = async (req, res) => {

    let updatedata = req.body;
   
    const result = await ScoreBoardModel.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedata });
    res.json({result:result,success:true});

  

}

const deleteTeamsDetailedSocreBoard = async (req, res) => {

    const team = await ScoreBoardModel.findById(req.params.id);

        await team.remove();

    res.json({
        success:true
    });
}





module.exports = {createTeamsDetailedSocreBoard,updateTeamsDetailedSocreBoard,deleteTeamsDetailedSocreBoard,getTeamsDetailedSocreBoard};