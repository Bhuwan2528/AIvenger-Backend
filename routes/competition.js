import express from "express";
import Competition from "../models/Competition.js";

const router = express.Router();

/* =========================
   GET COMPETITION DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const competition = await Competition.findOne();
    res.json(competition);
  } catch (error) {
    console.error("FETCH COMPETITION ERROR:", error);
    res.status(500).json({ message: "Error fetching competition data" });
  }
});

/* =========================
   CREATE / UPDATE COMPETITION
========================= */
router.post("/", async (req, res) => {
  try {
    let competition = await Competition.findOne();

    /* FIRST TIME CREATE */
    if (!competition) {
      competition = await Competition.create(req.body);
      return res.json(competition);
    }

    /* SAFE PARTIAL UPDATE */
    const updatedCompetition = await Competition.findByIdAndUpdate(
      competition._id,
      { $set: req.body },
      { new: true }
    );

    res.json(updatedCompetition);
  } catch (error) {
    console.error("SAVE COMPETITION ERROR:", error);
    res.status(500).json({ message: "Error saving competition data" });
  }
});

export default router;
