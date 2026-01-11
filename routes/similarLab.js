import express from "express";
import SimilarLab from "../models/SimilarLab.js";

const router = express.Router();

/* =========================
   GET SIMILAR LAB DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const similarLab = await SimilarLab.findOne();
    res.json(similarLab);
  } catch (error) {
    console.error("FETCH SIMILAR LAB ERROR:", error);
    res.status(500).json({ message: "Error fetching Similar Lab data" });
  }
});

/* =========================
   CREATE / UPDATE SIMILAR LAB
========================= */
router.post("/", async (req, res) => {
  try {
    let similarLab = await SimilarLab.findOne();

    /* ===== FIRST TIME CREATE ===== */
    if (!similarLab) {
      similarLab = await SimilarLab.create({
        whyCourse: req.body.whyCourse || {},
        ourLab: req.body.ourLab || {},
        sampleDesign: req.body.sampleDesign || {},
        ourFacilities: req.body.ourFacilities || {},
        questions: req.body.questions || [],
      });

      return res.json(similarLab);
    }

    /* ===== SAFE PARTIAL UPDATE ===== */
    const updatedSimilarLab = await SimilarLab.findByIdAndUpdate(
      similarLab._id,
      {
        $set: {
          whyCourse: {
            ...(similarLab.whyCourse || {}),
            ...(req.body.whyCourse || {}),
          },
          ourLab: {
            ...(similarLab.ourLab || {}),
            ...(req.body.ourLab || {}),
          },
          sampleDesign: {
            ...(similarLab.sampleDesign || {}),
            ...(req.body.sampleDesign || {}),
          },
          ourFacilities: {
            ...(similarLab.ourFacilities || {}),
            ...(req.body.ourFacilities || {}),
          },
          questions:
            req.body.questions !== undefined
              ? req.body.questions
              : similarLab.questions,
        },
      },
      { new: true }
    );

    res.json(updatedSimilarLab);
  } catch (error) {
    console.error("SIMILAR LAB SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving Similar Lab data" });
  }
});

export default router;
