import express from "express";
import AiLab from "../models/AiLab.js";

const router = express.Router();

/* =========================
   GET AI LAB DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const aiLab = await AiLab.findOne();
    res.json(aiLab);
  } catch (error) {
    console.error("FETCH AI LAB ERROR:", error);
    res.status(500).json({ message: "Error fetching AI lab data" });
  }
});

/* =========================
   CREATE / UPDATE AI LAB
========================= */
router.post("/", async (req, res) => {
  try {
    let aiLab = await AiLab.findOne();

    /* FIRST TIME CREATE */
    if (!aiLab) {
      aiLab = await AiLab.create({
        hero: req.body.hero || {},
        stemSection: req.body.stemSection || {},
        videoSection: req.body.videoSection || {},
      });

      return res.json(aiLab);
    }

    /* SAFE PARTIAL UPDATE */
    const updatedAiLab = await AiLab.findByIdAndUpdate(
      aiLab._id,
      {
        $set: {
          hero: {
            ...(aiLab.hero || {}),
            ...(req.body.hero || {}),
          },
          stemSection: {
            ...(aiLab.stemSection || {}),
            ...(req.body.stemSection || {}),
          },
          videoSection: {
            ...(aiLab.videoSection || {}),
            ...(req.body.videoSection || {}),
          },
        },
      },
      { new: true }
    );

    res.json(updatedAiLab);
  } catch (error) {
    console.error("AI LAB SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving AI lab data" });
  }
});

export default router;
