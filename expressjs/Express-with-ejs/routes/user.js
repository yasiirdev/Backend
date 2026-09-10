import express from "express";
import { hostData } from "./host.js";

const User = express.Router();

User.get("/", (req, res) => {
  res.render("home", { hostData ,location:"home" });
});



export default User;
