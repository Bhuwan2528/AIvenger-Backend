import mongoose from "mongoose";

/* =========================
   AI LAB PAGE SCHEMA
========================= */

const aiLabSchema = new mongoose.Schema(
  {
    /* HERO SECTION */
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

    /* STEM SECTION */
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

    /* VIDEO SECTION */
    videoSection: {
      videoUrl: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const AiLab = mongoose.model("AiLab", aiLabSchema);

export default AiLab;
