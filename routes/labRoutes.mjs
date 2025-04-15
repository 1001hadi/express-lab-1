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
  res.render("form", { title: "Please fill up the form" });
});

router.post("/submit", (req, res) => {
  console.log("Form data:", req.body);
  res.send("Success!");
});

router.get("/image", (req, res) => {
  res.render("image", { title: "If you like it,You can download it!" });
});

// create route for downloading the image
// when a GET request is made to '/download' path
router.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "..", "images", "lab-1.jpg");
  res.download(filePath, "downloaded_lab-1.jpg", (err) => {
    if (err) {
      console.log("Download error:", err);
      res.status(500).send("Download failed.");
    } else {
      console.log("Image downloaded successfully.");
    }
  });
});

export default router;
