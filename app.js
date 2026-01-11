import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

/* =====================
   MIDDLEWARE
===================== */
app.use(cors({
  origin: "https://aivenger.vercel.app",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

/* =====================
   DATABASE CONNECT
===================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Mongo error:", err));

/* =====================
   ROUTES
===================== */
import homeRoutes from "./routes/home.js";
import labRoutes from "./routes/roboticsLab.js";
import aiLabRoutes from "./routes/aiLab.js";
import similarLabRoutes from "./routes/similarLab.js";
import ilmsRoutes from "./routes/ilms.js";
import CompetitionRoutes from "./routes/competition.js";
import ContactRoutes from "./routes/contact.js";
import footerRoutes from "./routes/footer.js";
import adminRoutes from "./routes/authRoutes.js";
import compositeLabRoutes from "./routes/compositeLab.js";

app.use("/api/home", homeRoutes);
app.use("/api/lab", labRoutes);
app.use("/api/ai-lab", aiLabRoutes);
app.use("/api/similar-lab", similarLabRoutes);
app.use("/api/ilms", ilmsRoutes);
app.use("/api/competition", CompetitionRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/composite-lab", compositeLabRoutes);

/* =====================
   SERVER START
===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
