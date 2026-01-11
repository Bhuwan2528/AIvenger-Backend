import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    /* =========================
       HERO SECTION
    ========================= */
    hero: {
      badgeText: { type: String, default: "" },

      leadText: { type: String, default: "" },
      subText: { type: String, default: "" },

      primaryButtonText: { type: String, default: "" },
      primaryButtonURL: { type: String, default: "" },

      mediaUrl: { type: String, default: "" }, // video / image URL
    },

    /* =========================
       CHOOSE SECTION
    ========================= */
    chooseSection: {
      intro: {
        heading: { type: String, default: "" },
        description: { type: String, default: "" },
      },

      labs: {
        items: [
          {
            title: { type: String, default: "" },
            description: { type: String, default: "" },
            imageUrl: { type: String, default: "" },
            buttonText: { type: String, default: "" },
            buttonURL: { type: String, default: "" },
          },
        ],
      },

      lms: {
        description: { type: String, default: "" },
        imageUrl: { type: String, default: "" },
        buttonText: { type: String, default: "" },
        buttonURL: { type: String, default: "" },
      },

      services: {
        items: [
          {
            title: { type: String, default: "" },
            description: { type: String, default: "" },
            imageUrl: { type: String, default: "" },
            buttonText: { type: String, default: "" },
            buttonURL: { type: String, default: "" },
          },
        ],
      },
    },

    /* =========================
       TESTIMONIALS SECTION
    ========================= */
    testimonialsSection: {
      meetingButtonText: { type: String, default: "" },
      meetingButtonURL: { type: String, default: "" },

      items: [
        {
          name: { type: String, default: "" },
          designation: { type: String, default: "" },
          message: { type: String, default: "" },
          imageUrl: { type: String, default: "" },
        },
      ],
    },

    /* =========================
       CONTACT SECTION
    ========================= */
    contactSection: {
      dropdownOptions: {
        type: [String], // exactly 6 options handled in admin
        default: [],
      },

      contactInfo: {
        phone: { type: String, default: "" },
        email: { type: String, default: "" },
        address: { type: String, default: "" },

        businessHours: {
          weekday: { type: String, default: "" },
          weekend: { type: String, default: "" },
        },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Home", homeSchema);
