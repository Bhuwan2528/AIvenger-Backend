import express from "express";
import RoboticsLab from "../models/RoboticsLab.js";

const router = express.Router();

/* =========================
   GET ROBOTICS LAB DATA
========================= */
router.get("/", async (req, res) => {
  try {
    const roboticsLab = await RoboticsLab.findOne();
    res.json(roboticsLab);
  } catch (error) {
    console.error("FETCH ROBOTICS LAB ERROR:", error);
    res.status(500).json({ message: "Error fetching robotics lab data" });
  }
});

/* =========================
   CREATE / UPDATE ROBOTICS LAB
========================= */
router.post("/", async (req, res) => {
  try {
    let roboticsLab = await RoboticsLab.findOne();

    if (!roboticsLab) {
      roboticsLab = await RoboticsLab.create({
        hero: req.body.hero || {},
        stemSection: req.body.stemSection || {},
        videoSection: req.body.videoSection || {},
      });
      return res.json(roboticsLab);
    }

    const updatedRoboticsLab = await RoboticsLab.findByIdAndUpdate(
      roboticsLab._id,
      {
        $set: {
          hero: {
            ...(roboticsLab.hero || {}),
            ...(req.body.hero || {}),
          },
          stemSection: {
            ...(roboticsLab.stemSection || {}),
            ...(req.body.stemSection || {}),
          },
          videoSection: {
            ...(roboticsLab.videoSection || {}),
            ...(req.body.videoSection || {}),
          },
        },
      },
      { new: true }
    );

    res.json(updatedRoboticsLab);
  } catch (error) {
    console.error("ROBOTICS LAB SAVE ERROR:", error);
    res.status(500).json({ message: "Error saving robotics lab data" });
  }
});

export default router;
