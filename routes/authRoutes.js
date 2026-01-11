import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

/* ============================
   LOGIN ROUTE
============================ */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("adminToken", token, {
    httpOnly: true,
    secure: isProduction,                 // 🔥 HTTPS only in prod
    sameSite: isProduction ? "None" : "Lax", // 🔥 cross-site allow
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ success: true, message: "Admin logged in" });
});

/* ============================
   LOGOUT ROUTE
============================ */
router.post("/logout", (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("adminToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax",
  });

  res.json({ success: true, message: "Logged out successfully" });
});

/* ============================
   AUTH MIDDLEWARE
============================ */
const adminAuth = (req, res, next) => {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

/* ============================
   PROTECTED ROUTE
============================ */
router.get("/check", adminAuth, (req, res) => {
  res.json({ success: true, message: "Admin authenticated" });
});

export default router;
