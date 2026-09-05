import express from "express";
const admin = express.Router();


admin.use(express.urlencoded());
admin.post("/contact-us", (req, res) => {
  const { email, password } = req.body;
  res.send(`<h1>Email : ${email}</h1>
    <br>
  <h1>Password : ${password}</h1>
    `);
});


export default admin;