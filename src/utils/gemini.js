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
- No extra text
- Only return the JSON array
`;

    const result = await geminiModel.generateContent(prompt);
    const text = result.response.text();

    const movies = JSON.parse(text);

    if (!Array.isArray(movies)) {
      throw new Error('Gemini returned an invalid movie list');
    }

    return movies.filter((movie) => movie?.title);
  } catch (error) {
    console.error('Gemini search failed:', error);
    return [];
  }
};
