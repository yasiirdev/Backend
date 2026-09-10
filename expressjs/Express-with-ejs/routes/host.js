import express from "express";
import path from "path";

const Host = express.Router();

const hostData = [];

Host.get("/add-home", (req, res) => {
  res.render("add-home", { location:"addhome" });
});

Host.post("/add-home", (req, res) => { 
  hostData.push(req.body);
  res.redirect("/");
})

export { hostData };
export default Host;