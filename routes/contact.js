import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/* =========================
   GET CONTACT DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (error) {
    console.error("FETCH CONTACT ERROR:", error);
    res.status(500).json({ message: "Error fetching contact data" });
  }
});

/* =========================
   CREATE / UPDATE CONTACT
========================= */
router.post("/", async (req, res) => {
  try {
    let contact = await Contact.findOne();

    /* FIRST TIME CREATE */
    if (!contact) {
      contact = await Contact.create({
        leftInfo: req.body.leftInfo || {},
        designationOptions: req.body.designationOptions || {},
      });

      return res.json(contact);
    }

    /* SAFE PARTIAL UPDATE */
    const updatedContact = await Contact.findByIdAndUpdate(
      contact._id,
      {
        $set: {
          leftInfo: {
            ...(contact.leftInfo || {}),
            ...(req.body.leftInfo || {}),
          },
          designationOptions: {
            ...(contact.designationOptions || {}),
            ...(req.body.designationOptions || {}),
          },
        },
      },
      { new: true }
    );

    res.json(updatedContact);
  } catch (error) {
    console.error("CONTACT SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving contact data" });
  }
});

export default router;
