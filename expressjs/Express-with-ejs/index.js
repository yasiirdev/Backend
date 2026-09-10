import express from "express";
import PublicPath from "./utils/path.js";
import UserRouter from "./routes/user.js";
import HostRouter from "./routes/host.js";

const app = express();
const PORT = 8080;
app.use(express.static(PublicPath));
app.set("view engine", "ejs");
app.set("views", "views/");

app.use(express.urlencoded({ extended: true }))
app.use(UserRouter);
app.use(HostRouter);

app.use((req, res) => {
  res.status(404).render("partials/404", { url: req.originalUrl });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
