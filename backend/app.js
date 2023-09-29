const path = require('path')

const express = require('express')

const bodyParser=require("body-parser");
const mongoose= require('mongoose')
const userRoutes = require("./routes/user");
const TalentRoute = require("./routes/talents")
const EventRoute=require('./routes/event');
const researchRoute = require('./routes/research');
const cors = require("cors");

const app= express();

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "https://spontaneous-swan-32e0c4.netlify.app",
      "https://kletechinsights.netlify.app",
      "https://front-end-lyart-theta.vercel.app",
      "https://insightsofkletech.vercel.app",
      "https://bvbinsights.vercel.app",
      "https://insightsofkletech2.vercel.app",
      "https://insights-ngy8.onrender.com/api/user/login",
      "https://insights-ngy8.onrender.com/api/user/signup",
    ],
  })
);

mongoose.connect("mongodb+srv://ganesh:Ganesh2003@myfirstprojects.nejygcx.mongodb.net/cp?retryWrites=true&w=majority")
.then(()=>{
  console.log("connected to database");
})
.catch(()=>{
  console.log("connection is failed .");
})

app.use(bodyParser.json()); //it will parse the incoming data
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use("/images",express.static(path.join("backend/images")));


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  // res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS,PUT");

  next();
});

app.use("/api/talents",TalentRoute)
app.use("/api/user",userRoutes)
app.use("/api/event",EventRoute)
app.use("/api/research",researchRoute)

module.exports =app;
