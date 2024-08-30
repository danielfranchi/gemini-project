import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('API key is not defined in the .env file');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateContent(prompt: string, imagePayload: any): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent([prompt, imagePayload]);
  return result.response.text();
}
