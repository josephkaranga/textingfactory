import express from "express";
const router = express.Router();

// Dashboard test route
router.get("/", (req, res) => {
  res.json({
    message: "Backend connected successfully ✅",
    timestamp: new Date(),
  });
});

export default router;
