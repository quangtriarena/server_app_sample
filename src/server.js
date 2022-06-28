import bodyParser from "body-parser";
import express from "express";
import connection from "./config/testConnect";
require("dotenv").config();
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
// import initWebRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8081;

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// init web routes
// initWebRoutes(app);
initApiRoutes(app);

connection(); // success

app.listen(PORT, () => {
  console.log(`port listening ${PORT}`);
});
