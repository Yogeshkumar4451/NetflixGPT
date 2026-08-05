import { geminiModel } from './firebaseAI';

export const searchMoviesWithAI = async (query) => {
  try {
    const prompt = `
You are an expert movie recommendation system.

The user asked:

"${query}"

Recommend exactly 5 movies.

Return ONLY valid JSON.

Example format:

[
  {
    "title": "Interstellar",
    "year": 2014
  },
  {
    "title": "Arrival",
    "year": 2016
  }
]

Rules:

- No markdown
- No explanation
- No \`\`\`
- No extra text
- Only JSON array
`;

    const result = await geminiModel.generateContent(prompt);

    return JSON.parse(result.response.text());
  } catch (error) {
    console.error('Gemini Error:', error);
    return [];
  }
};
