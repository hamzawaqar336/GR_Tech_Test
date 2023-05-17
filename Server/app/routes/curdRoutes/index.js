const express = require("express");
const router = express.Router();

const {getAllTeam, createTeam, updateTeam, deleteTeam} = require("../../controllers/curdOPControllers/index");

router.route('/').get(getAllTeam);

router.route('/teams').post(createTeam);

router.route('/teams/:id').put(updateTeam);

router.route('/teams/:id').delete(deleteTeam);




// router.get("/", async (req, res) => {

//     const teams = await mongoose.model("Team").find();


//     res.json(teams);
// })

// router.post("/teams", async (req, res) => {

//     const team = new mongoose.model("Team", req.body);


//     await team.save();


//     res.json(team);
// });


// router.put("/teams/:id", async (req, res) => {

//     const team = await mongoose.model("Team").findById(req.params.id);

//     team.name = req.body.name;
//     team.city = req.body.city;

//     await team.save();

//     res.json(team);
// });

// router.delete("/teams/:id", async (req, res) => {

//     const team = await mongoose.model("Team").findById(req.params.id);


//     await team.remove();


//     res.json({ success: true });
// });


module.exports = router;