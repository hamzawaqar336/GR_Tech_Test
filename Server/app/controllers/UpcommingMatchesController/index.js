const UpcommingMatchesModel = require("../../models/MatchesModel/index");

const teamUpcomingMatches = async (req,res) => {
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
                as: "teamsDatas"
            }
        },
        {
            $lookup: {
                from: "teams",
                localField: "oponentTeamId",
                foreignField: "_id",
                as: "oponentDatas"
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
    
    const getDatas = await UpcommingMatchesModel.aggregate(query);
    
    res.json({
        result:getDatas,
        success:true
    })
}

module.exports = teamUpcomingMatches;