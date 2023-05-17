const express = require("express");
const router = express.Router();

const TeamsPerformance = require("../../controllers/teamPerformanceController/index")

router.route("/teams-performance").get(TeamsPerformance)
// router.get('/teams', (req, res) => {
//     const teamsController = new TeamsController(db);
//     const teams = teamsController.getTeams();
//     res.json(teams);
// });
 
module.exports = router;