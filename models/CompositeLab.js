import mongoose from "mongoose";

/* =========================
   COMPOSITE LAB PAGE SCHEMA
========================= */

const compositeLabSchema = new mongoose.Schema(
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

const CompositeLab = mongoose.model("CompositeLab", compositeLabSchema);

export default CompositeLab;
