import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const launchServer = (port) => {
  const app = express();

  app.use(morgan);
  app.use(cors());
  app.use(bodyParser.json());

  app.get("/hello-world", (_req, res) => {
    res.send("Hello World!");
  });

  app.post("/hello-world", (_req, res) => {
    res.send("Hello World From Post!");
  });

  // error handlers

  app.use(function (err, _req, res, _next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  return app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
  });
};

export default launchServer;
