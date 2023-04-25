import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})