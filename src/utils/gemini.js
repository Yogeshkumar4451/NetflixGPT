import { geminiModel } from './firebaseAI';

const searchMoviesWithAI = async (query) => {
  if (!query?.trim()) {
    return [];
  }

  const prompt = `
You are an expert movie recommendation system.

The user asked:

"${query.trim()}"

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

- Return exactly 5 movies.
- Every movie must have a title.
- Include the release year when you know it.
- No markdown.
- No explanation.
- No extra text.
- Only return the JSON array.
`;

  try {
    const result = await geminiModel.generateContent(prompt);
    const rawText = result.response.text().trim();

    const jsonText = rawText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    const movies = JSON.parse(jsonText);

    if (!Array.isArray(movies)) {
      throw new Error('Gemini returned an invalid movie list');
    }

    return movies
      .filter(
        (movie) =>
          movie &&
          typeof movie.title === 'string' &&
          movie.title.trim().length > 0,
      )
      .slice(0, 5);
  } catch (error) {
    console.error('Gemini search failed:', error);
    return [];
  }
};

export { searchMoviesWithAI };
