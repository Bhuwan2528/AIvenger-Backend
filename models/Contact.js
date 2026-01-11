import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    /* =========================
       LEFT SIDE INFO
    ========================= */
    leftInfo: {
      introText: {
        type: String,
        default: "",
      },

      officeAddress: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },

      email: {
        type: String,
        default: "",
      },
    },

    /* =========================
       FORM DATA
    ========================= */
    designationOptions: {
      option1: { type: String, default: "" },
      option2: { type: String, default: "" },
      option3: { type: String, default: "" },
      option4: { type: String, default: "" },
      option5: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
