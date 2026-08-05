import { getAI, getGenerativeModel, GoogleAIBackend } from 'firebase/ai';
import { app } from './firebase';

const ai = getAI(app, {
  backend: new GoogleAIBackend(),
});

export const geminiModel = getGenerativeModel(ai, {
  model: 'gemini-3.6-flash',
});
