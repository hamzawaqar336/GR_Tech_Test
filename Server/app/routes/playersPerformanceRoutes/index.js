const express = require("express");
const router = express.Router();

const {getPlayersPerformance,createPlayersPerformance,updatePlayersPerformance,deletePlayersPerformance} = require("../../controllers/playerPerformanceController/index")


router.route("/create-team-player/:id").post(createPlayersPerformance);

router.route("/get-team-player-Performance/:id").get(getPlayersPerformance);

router.route("/update-team-player/:id").put(updatePlayersPerformance);

router.route("/delete-team-player/:id").delete(deletePlayersPerformance);

// router.get('/teams/:id/performance', (req, res) => {
//     const teamsController = new TeamsController(db);
//     const teamPerformance = teamsController.getTeamPerformance(req.params.id);
//     res.json(teamPerformance);
// });

module.exports = router

