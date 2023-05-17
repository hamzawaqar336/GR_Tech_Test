const express = require("express");
const router = express.Router();

const teamUpcomingMatches = require("../../controllers/UpcommingMatchesController")

router.route("/teams-upcoming-matches/:id").get(teamUpcomingMatches);

// router.get('/teams-upcoming-matches/:id', (req, res) => {
//     const teamsController = new TeamsController(db);
//     const upcomingMatches = teamsController.getUpcomingMatches(req.params.id);
//     res.json(upcomingMatches);
// });

module.exports = router;