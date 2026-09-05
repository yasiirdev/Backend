import express from "express";
import path from "node:path";
import globalPath from "../utils/globalPath.js";
const User = express.Router()


User.get("/", (req,  res) => {
  res.send(`<h1>Hello</h1>`);
});



User.get("/contact-us", (req, res) => {
res.sendFile(path.join(globalPath, "form.htm"));
});





export default User;
