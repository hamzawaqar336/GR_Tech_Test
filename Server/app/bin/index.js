const express = require("express");
const app = express();
require("../config/database");

const SocerTeamCurdRoutes = require("../routes/curdRoutes/index");
const detailedScorecardRoutes = require("../routes/detailedScorecardRoutes/index");
const playersPerformanceRoutes = require("../routes/playersPerformanceRoutes/index");
const teamPerformanceRoutes = require("../routes/teamPerformanceRoutes/index");
const teamSetup = require("../routes/teamSetupRoutes/index");
const upcommingMatchRoutes = require("../routes/upcommingMatchRoutes/index");


//using Middleware to connect with routes.

app.use("/api/soccerTeamCurd",SocerTeamCurdRoutes)
app.use("/api/detailedSoccer",detailedScorecardRoutes)
app.use("/api/playerPerformance",playersPerformanceRoutes)
app.use("/api/teamPerformance",teamPerformanceRoutes)
app.use("/api/teamSetup",teamSetup)
app.use("/api/upcommingMatches",upcommingMatchRoutes)




app.listen(3000, () => {
  console.log("Server started on port 3000");
})