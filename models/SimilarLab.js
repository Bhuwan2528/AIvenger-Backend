import mongoose from "mongoose";

/* =========================
   SIMILAR LAB PAGE SCHEMA
   (Single Page CMS)
========================= */

const similarLabSchema = new mongoose.Schema(
  {
    /* =========================
       1. WHY COURSE SECTION
       (Only 1 <p>)
    ========================= */
    whyCourse: {
      content: {
        type: String,
        default: "",
      },
    },

    /* =========================
       2. OUR LAB SECTION
       (3 Images)
    ========================= */
    ourLab: {
      images: {
        type: [String], // image URLs
        default: [],
      },
    },

    /* =========================
       3. SAMPLE DESIGN SECTION
       (1 desc + 3 images)
    ========================= */
    sampleDesign: {
      description: {
        type: String,
        default: "",
      },
      images: {
        type: [String],
        default: [],
      },
    },

    /* =========================
       4. OUR FACILITIES SECTION
       (Everything dynamic except pill text)
    ========================= */
    ourFacilities: {
      heading: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      facilities: [
        {
          image: {
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
      ],
    },

    /* =========================
       5. QUESTIONS / CTA SECTION
       (Text + Click URL)
    ========================= */
    questions: [
      {
        text: {
          type: String,
          default: "",
        },
        url: {
          type: String,
          default: "",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

/* =========================
   SAFE MODEL EXPORT
========================= */
const SimilarLab =
  mongoose.models.SimilarLab ||
  mongoose.model("SimilarLab", similarLabSchema);

export default SimilarLab;
