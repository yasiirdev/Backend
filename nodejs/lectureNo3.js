import { createServer } from "node:http";
import { getItems, setItems } from "./practics.js";
const PORT = 8080;
const server = createServer();

server
  .on("request", (req, res) => {
    const { url, method } = req;
    // /data/items per get req send krean ga to ya json data wo received kr ga ;
    if (url === "/" && method === "GET") {
        return getItems()
        .then((resp) => {
          res.setHeader("Content-Type", "text/json");
          res.write(JSON.stringify(resp));
          return res.end();
          
        })
        .catch((e) => console.log(e));
    } else if (url.toLowerCase() === "/setitems" && method === "POST") {
      return setItems(req);
    }
    res.end();
  })
  .listen(PORT, () => {
    console.log(`the server is runing on http://localhost:${PORT}/`);
  });
