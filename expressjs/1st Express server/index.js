import express from "express";
import User from "./routers/user.js";
import admin from "./routers/admin.js";

const app = express();
const PORT = 8080;

app.use(User);
app.use(admin);

app.use("/*splat", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
