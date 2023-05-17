const TeamsModel = require("../../models/TeamModel");
const TeamsPerformance = async (req, res) => {
    const getAllTeamsData = await TeamsModel.find({});
    res.json({
        result:getAllTeamsData
    });
}

module.exports = TeamsPerformance;