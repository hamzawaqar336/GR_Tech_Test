const express = require("express");
const router = express.Router();

const {getTeamsDetailedSocreBoard,createTeamsDetailedSocreBoard,updateTeamsDetailedSocreBoard,deleteTeamsDetailedSocreBoard} = require("../../controllers/detailedScorecardController/index")

router.route("/get-teams-detailed-soccerboard/:id").get(getTeamsDetailedSocreBoard)

router.route("/create-teams-detailed-soccerboard").post(createTeamsDetailedSocreBoard)

router.route("/update-teams-detailed-soccerboard/:id").put(updateTeamsDetailedSocreBoard)

router.route("/delete-teams-detailed-soccerboard/:id").delete(deleteTeamsDetailedSocreBoard)



module.exports = router