import express from "express";
import Home from "../models/Home.js";

const router = express.Router();

/* =========================
   GET HOME DATA (Website)
========================= */
router.get("/", async (req, res) => {
  try {
    const home = await Home.findOne();
    res.json(home);
  } catch (err) {
    res.status(500).json({ message: "Error fetching home data" });
  }
});

/* =========================
   CREATE / UPDATE HOME (Admin)
========================= */
router.post("/", async (req, res) => {
  try {
    let home = await Home.findOne();

    /* =========================
       FIRST TIME CREATE
    ========================= */
    if (!home) {
      home = await Home.create({
        hero: req.body.hero || {},
        chooseSection: req.body.chooseSection || {},
        testimonialsSection: req.body.testimonialsSection || {},
        contactSection: req.body.contactSection || {},
      });

      return res.json(home);
    }

    /* =========================
       SAFE PARTIAL UPDATE
    ========================= */
    const updatedHome = await Home.findByIdAndUpdate(
      home._id,
      {
        $set: {
          // HERO (already working)
          hero: {
            ...(home.hero?.toObject() || {}),
            ...(req.body.hero || {}),
          },

          // CHOOSE SECTION (NEW – SAFE)
          chooseSection: {
            ...(home.chooseSection?.toObject() || {}),
            ...(req.body.chooseSection || {}),
          },

          // TESTIMONIALS (future safe)
          testimonialsSection: {
            ...(home.testimonialsSection?.toObject() || {}),
            ...(req.body.testimonialsSection || {}),
          },

          //CONTACT FORM 
          contactSection: {
            ...(home.contactSection?.toObject() || {}),
            ...(req.body.contactSection || {}),
          },
        },
      },
      { new: true }
    );

    res.json(updatedHome);
  } catch (err) {
    console.error("HOME SAVE ERROR:", err);
    res.status(500).json({ message: "Error saving home data" });
  }
});




export default router;
