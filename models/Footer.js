import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema(
  {
    /* =========================
       BRAND / LEFT INFO
    ========================= */
    brand: {
      logoUrl: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },

    /* =========================
       ABOUT COLUMN
    ========================= */
    about: {
      heading: {
        type: String,
        default: "",
      },
      link1: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link2: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link3: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link4: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link5: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
    },

    /* =========================
       COMPANY COLUMN
    ========================= */
    company: {
      heading: {
        type: String,
        default: "",
      },
      link1: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link2: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link3: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link4: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link5: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
    },

    /* =========================
       SUPPORT COLUMN
    ========================= */
    support: {
      heading: {
        type: String,
        default: "",
      },
      link1: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link2: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link3: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link4: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
      link5: {
        text: { type: String, default: "" },
        url: { type: String, default: "" },
      },
    },

    /* =========================
       SOCIAL LINKS
    ========================= */
    socials: {
      instagramUrl: {
        type: String,
        default: "",
      },
      youtubeUrl: {
        type: String,
        default: "",
      },
    },

    /* =========================
       FOOTER BOTTOM
    ========================= */
    bottomText: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Footer", FooterSchema);
