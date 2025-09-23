// dependencies
import express from "express";
import getGeminiResponse from "../services/geminiService.js";

// init router
const router = express.Router();

// POST /api/chat - Send a message and get AI response
router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await getGeminiResponse(message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
