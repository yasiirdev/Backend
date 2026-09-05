import fs from "node:fs/promises";

export async function getItems() {
  const file = await fs.readFile("./item.json", { encoding: "utf-8" }, (e) => {
    if (e) console.error(e);
  });

  const data = JSON.parse(file);
        return data;
}


export function setItems(req) {
  let body = [];
  req.on("data", (chunks) => {
    body.push(chunks);
  });

  req.on("end", () => {
    let bufferData = Buffer.concat(body).toString();
    bufferData = JSON.parse(bufferData); 
    const paramsData = new URLSearchParams(bufferData);
    const objForm = Object.fromEntries(paramsData);
    getItems()
      .then((res) => {
        res.push(objForm);
        fs.writeFile("item.json", JSON.stringify(res, null, 2), (e) => {
          if (e) throw e;
        });
      })
      .catch((e) => {
        if (e) throw e;
      });
  });
}
