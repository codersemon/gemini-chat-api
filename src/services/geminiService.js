// dependencies
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getGeminiResponse(prompt) {
  try {
    // Use the Gemini model (e.g., gemini-1.5-flash)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Send the prompt to the model
    const result = await model.generateContent(prompt);

    // Extract and return the response text
    const response = await result.response.text();
    return response;
  } catch (error) {
    console.error('Error interacting with Gemini API:', error);
    throw new Error('Failed to get response from Gemini API');
  }
}

export default getGeminiResponse;