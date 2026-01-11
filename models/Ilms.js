import mongoose from "mongoose";

const IlmsSchema = new mongoose.Schema(
  {
    /* =========================
       HERO SECTION
    ========================= */
    hero: {
      description: {
        type: String,
        default: "",
      },
      ctaText: {
        type: String,
        default: "",
      },
      ctaUrl: {
        type: String,
        default: "",
      },
      videoUrl: {
        type: String,
        default: "",
      },
    },

    /* =========================
       WHY CHOOSE US (HEADER)
       pill text excluded
    ========================= */
    whyChooseHeader: {
      heading: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },

    /* =========================
       WHY CHOOSE US - 3 CARDS
    ========================= */

    /* FIRST BIG CARD */
    card1: {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      imageUrl: {
        type: String,
        default: "",
      },
    },

    /* SECOND CARD */
    card2: {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      imageUrl: {
        type: String,
        default: "",
      },
    },

    /* THIRD CARD */
    card3: {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      imageUrl: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ilms", IlmsSchema);
