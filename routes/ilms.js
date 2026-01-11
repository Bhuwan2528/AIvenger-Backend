import express from "express";
import Ilms from "../models/Ilms.js";

const router = express.Router();

/* =========================
   GET ILMS DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const ilms = await Ilms.findOne();
    res.json(ilms);
  } catch (error) {
    console.error("FETCH ILMS ERROR:", error);
    res.status(500).json({ message: "Error fetching ILMS data" });
  }
});

/* =========================
   CREATE / UPDATE ILMS
========================= */
router.post("/", async (req, res) => {
  try {
    let ilms = await Ilms.findOne();

    /* ===== FIRST TIME CREATE ===== */
    if (!ilms) {
      ilms = await Ilms.create({
        hero: req.body.hero || {},
        whyChooseHeader: req.body.whyChooseHeader || {},
        card1: req.body.card1 || {},
        card2: req.body.card2 || {},
        card3: req.body.card3 || {},
      });

      return res.json(ilms);
    }

    /* ===== SAFE PARTIAL UPDATE ===== */
    const updatedIlms = await Ilms.findByIdAndUpdate(
      ilms._id,
      {
        $set: {
          hero: {
            ...(ilms.hero || {}),
            ...(req.body.hero || {}),
          },
          whyChooseHeader: {
            ...(ilms.whyChooseHeader || {}),
            ...(req.body.whyChooseHeader || {}),
          },
          card1: {
            ...(ilms.card1 || {}),
            ...(req.body.card1 || {}),
          },
          card2: {
            ...(ilms.card2 || {}),
            ...(req.body.card2 || {}),
          },
          card3: {
            ...(ilms.card3 || {}),
            ...(req.body.card3 || {}),
          },
        },
      },
      { new: true }
    );

    res.json(updatedIlms);
  } catch (error) {
    console.error("ILMS SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving ILMS data" });
  }
});

export default router;
