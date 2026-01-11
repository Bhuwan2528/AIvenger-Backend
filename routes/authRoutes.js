import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

/* ============================
   LOGIN ROUTE
============================ */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Static admin check
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Create token
  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // Save token in cookie
  res.cookie("adminToken", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: false, // production me true
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ success: true, message: "Admin logged in" });
});

/* ============================
   LOGOUT ROUTE
============================ */
router.post("/logout", (req, res) => {
  res.clearCookie("adminToken");
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
   PROTECTED ROUTE (TEST)
============================ */
router.get("/check", adminAuth, (req, res) => {
  res.json({ success: true, message: "Admin authenticated" });
});

export default router;
