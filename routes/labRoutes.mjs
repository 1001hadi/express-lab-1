import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.render("home", { title: "Home", message: "Welcome to the home page!" });
});

router.get("/form", (req, res) => {
  res.render("form", { title: "Form Page" });
});

router.post("/submit", (req, res) => {
  console.log("Form data:", req.body);
  res.send("Success!");
});

router.get("/image", (req, res) => {
  res.render("image", { title: "Image Page" });
});

export default router;
