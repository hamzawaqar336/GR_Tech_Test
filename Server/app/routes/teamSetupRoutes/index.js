const express = require("express");
const router = express.Router();


const teamSetupFunc = require("../../controllers/teamSetupController/index")


router.route("/teams-Setup/:id").get(teamSetupFunc);


// router.get('/teams-Setup/:id', (req, res) => {
//     const teamsController = new TeamsController(db);
//     const teamSetup = teamsController.getTeamSetup(req.params.id);
//     res.json(teamSetup);
// });

module.exports = router