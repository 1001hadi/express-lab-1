import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import router from "./routes/labRoutes.mjs";

const app = express();
const PORT = 3000 || 3001;

// get current directories using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "images")));

app.use(router);

// Routes
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// run the engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
