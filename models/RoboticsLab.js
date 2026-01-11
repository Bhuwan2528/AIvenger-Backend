import mongoose from "mongoose";

/* =========================
   ROBOTICS LAB SCHEMA
   (Single Page CMS)
========================= */

const roboticsLabSchema = new mongoose.Schema(
  {
    /* =========================
       HERO SECTION
    ========================= */
    hero: {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },

    /* =========================
       CUSTOM STEM LABS SECTION
    ========================= */
    stemSection: {
      subText: {
        type: String,
        default: "",
      },
      heading: {
        type: String,
        default: "",
      },
    },

    /* =========================
       FULL WIDTH VIDEO SECTION
    ========================= */
    videoSection: {
      videoUrl: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true, // good practice
  }
);

const RoboticsLab =
  mongoose.models.RoboticsLab ||
  mongoose.model("RoboticsLab", roboticsLabSchema);

export default RoboticsLab;
