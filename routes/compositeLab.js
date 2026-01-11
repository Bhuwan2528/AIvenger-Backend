import express from "express";
import CompositeLab from "../models/CompositeLab.js";

const router = express.Router();

/* =========================
   GET COMPOSITE LAB DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const compositeLab = await CompositeLab.findOne();
    res.json(compositeLab);
  } catch (error) {
    console.error("FETCH COMPOSITE LAB ERROR:", error);
    res.status(500).json({ message: "Error fetching composite lab data" });
  }
});

/* =========================
   CREATE / UPDATE COMPOSITE LAB
========================= */
router.post("/", async (req, res) => {
  try {
    let compositeLab = await CompositeLab.findOne();

    /* FIRST TIME CREATE */
    if (!compositeLab) {
      compositeLab = await CompositeLab.create({
        hero: req.body.hero || {},
        stemSection: req.body.stemSection || {},
        videoSection: req.body.videoSection || {},
      });

      return res.json(compositeLab);
    }

    /* SAFE PARTIAL UPDATE */
    const updatedCompositeLab = await CompositeLab.findByIdAndUpdate(
      compositeLab._id,
      {
        $set: {
          hero: {
            ...(compositeLab.hero || {}),
            ...(req.body.hero || {}),
          },
          stemSection: {
            ...(compositeLab.stemSection || {}),
            ...(req.body.stemSection || {}),
          },
          videoSection: {
            ...(compositeLab.videoSection || {}),
            ...(req.body.videoSection || {}),
          },
        },
      },
      { new: true }
    );

    res.json(updatedCompositeLab);
  } catch (error) {
    console.error("COMPOSITE LAB SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving composite lab data" });
  }
});

export default router;
