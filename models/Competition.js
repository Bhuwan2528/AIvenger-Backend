import mongoose from "mongoose";

const CompetitionSchema = new mongoose.Schema(
  {
    /* =========================
       HERO SECTION
    ========================= */
    hero: {
      videoUrl: {
        type: String,
        default: "",
      },
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
       GALLERY SECTION
       (heading static)
    ========================= */
    galleryImages: {
      img1: { type: String, default: "" },
      img2: { type: String, default: "" },
      img3: { type: String, default: "" },
      img4: { type: String, default: "" },
      img5: { type: String, default: "" },
    },

    /* =========================
       VICTORIES SECTION
       (pill + project name static)
    ========================= */
    victoriesHeader: {
      heading: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },

    victory1: {
      imageUrl: { type: String, default: "" },
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },

    victory2: {
      imageUrl: { type: String, default: "" },
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },

    victory3: {
      imageUrl: { type: String, default: "" },
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },

    /* =========================
       COMPETITION WINS
    ========================= */
    winsHeader: {
      heading: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },

    win1: {
      imageUrl: { type: String, default: "" },
      teamName: { type: String, default: "" },
      schoolName: { type: String, default: "" },
      competition: { type: String, default: "" },
      event: { type: String, default: "" },
      position: { type: String, default: "" },
    },

    win2: {
      imageUrl: { type: String, default: "" },
      teamName: { type: String, default: "" },
      schoolName: { type: String, default: "" },
      competition: { type: String, default: "" },
      event: { type: String, default: "" },
      position: { type: String, default: "" },
    },

    win3: {
      imageUrl: { type: String, default: "" },
      teamName: { type: String, default: "" },
      schoolName: { type: String, default: "" },
      competition: { type: String, default: "" },
      event: { type: String, default: "" },
      position: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Competition", CompetitionSchema);
