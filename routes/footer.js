import express from "express";
import Footer from "../models/Footer.js";

const router = express.Router();

/* =========================
   GET FOOTER DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const footer = await Footer.findOne();
    res.json(footer);
  } catch (error) {
    console.error("FETCH FOOTER ERROR:", error);
    res.status(500).json({ message: "Error fetching footer data" });
  }
});

/* =========================
   CREATE / UPDATE FOOTER
========================= */
router.post("/", async (req, res) => {
  try {
    let footer = await Footer.findOne();

    /* FIRST TIME CREATE */
    if (!footer) {
      footer = await Footer.create({
        brand: req.body.brand || {},
        about: req.body.about || {},
        company: req.body.company || {},
        support: req.body.support || {},
        socials: req.body.socials || {},
        bottomText: req.body.bottomText || "",
      });

      return res.json(footer);
    }

    /* SAFE PARTIAL UPDATE */
    const updatedFooter = await Footer.findByIdAndUpdate(
      footer._id,
      {
        $set: {
          brand: {
            ...(footer.brand || {}),
            ...(req.body.brand || {}),
          },
          about: {
            ...(footer.about || {}),
            ...(req.body.about || {}),
          },
          company: {
            ...(footer.company || {}),
            ...(req.body.company || {}),
          },
          support: {
            ...(footer.support || {}),
            ...(req.body.support || {}),
          },
          socials: {
            ...(footer.socials || {}),
            ...(req.body.socials || {}),
          },
          bottomText:
            req.body.bottomText !== undefined
              ? req.body.bottomText
              : footer.bottomText,
        },
      },
      { new: true }
    );

    res.json(updatedFooter);
  } catch (error) {
    console.error("FOOTER SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving footer data" });
  }
});

export default router;
