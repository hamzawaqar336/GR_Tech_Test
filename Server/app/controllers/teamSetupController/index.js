const TeamsModel = require("../../models/TeamModel");

const teamSetupFunc = async (req, res) => {
    const getAllTeamsData = await TeamsModel.find({});
    res.json({
        result:getAllTeamsData
    });
}

module.exports = teamSetupFunc