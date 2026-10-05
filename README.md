# 🎬 NetflixGPT

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=black)
![Firebase AI](https://img.shields.io/badge/Firebase%20AI-Gemini-4285F4?logo=google&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-API-01B4E4)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting-FFCA28?logo=firebase&logoColor=black)

## 🌐 Live Demo

**https://netflixgpt-fdca2.web.app**

---

## 📌 Overview

**NetflixGPT** is a responsive AI-powered movie discovery platform inspired by the Netflix browsing experience.

The application combines **React, Redux Toolkit, Firebase Authentication, Firebase AI with Gemini, TMDB API, YouTube trailers, Tailwind CSS, and Vite** to provide a complete movie browsing and AI recommendation experience.

Users can create an account, securely sign in, browse different movie categories, watch trailers, and search for movie recommendations using natural-language prompts such as:

> "Suggest some mind-bending sci-fi movies like Interstellar."

The AI generates movie recommendations, and the application then uses TMDB to find the corresponding movie data and display the results in the UI.

---

# ✨ Features

## 🔐 Authentication

- User Sign Up with name, email, and password
- User Sign In and Sign Out
- Firebase Authentication
- Custom authentication validation
- Firebase authentication error handling
- Protected routes
- Public routes
- Authentication state persistence across page refreshes
- Initial authentication loading state to prevent route-rendering race conditions

---

## 🎬 Movie Browsing

The browse page provides multiple movie categories using TMDB:

- Now Playing
- Popular
- Top Rated
- Upcoming Movies

Each category is displayed using reusable movie-list components with:

- Responsive horizontal scrolling
- Lazy-loaded movie posters
- Hover animations
- Responsive sizing across screen sizes
- Reusable `MovieCard` and `MovieList` components

---

## ▶️ Movie Trailers

The featured movie section uses TMDB's movie-video endpoint to find an available YouTube trailer.

The application:

1. Fetches Now Playing movies.
2. Checks movies for an available YouTube trailer.
3. Selects a movie with a trailer for the hero section.
4. Fetches the trailer information.
5. Displays the trailer using a YouTube embedded player.

The trailer is configured to autoplay muted and acts as the visual background for the featured movie section.

---

## 🤖 AI Movie Search

NetflixGPT includes an AI-powered movie recommendation system using **Gemini through Firebase AI**.

Users can search using natural language instead of entering an exact movie title.

### Example

```text
"Give me 5 psychological thriller movies with unexpected endings."
```

The AI returns movie recommendations containing:

- Movie title
- Release year when available

The application then searches TMDB using those AI-generated titles and displays the matching movie results.

### AI Search Flow

```text
User enters natural-language prompt
              ↓
        Gemini AI
              ↓
  Movie titles + release years
              ↓
             TMDB
              ↓
      Matching movie data
              ↓
      Movie recommendation UI
```

The application also includes:

- AI loading state
- Empty state before searching
- Empty state when no recommendations are returned
- Error handling
- Maximum of 5 displayed recommendations

---

## 🌍 Multi-language Support

The GPT search interface supports:

- English
- Hindi

The selected language is stored in Redux and used to update the GPT search interface.

---

## 📱 Responsive UI

The interface is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Responsive behavior is handled using Tailwind CSS utility classes.

The movie rows, authentication interface, GPT search interface, hero section, navigation controls, and footer adapt to different screen sizes.

---

# 🧠 Architecture

The application follows a component-based React architecture with a centralized Redux store.

```text
React UI
   │
   ├── Components
   │
   ├── Custom Hooks
   │
   ├── Firebase Authentication
   │
   ├── Firebase AI / Gemini
   │
   ├── TMDB API
   │
   └── Redux Store
            │
            ├── User State
            ├── Movie State
            ├── GPT State
            └── Language State
```

---

# 🔄 Application Flow

## Authentication Flow

```text
Application Starts
        ↓
Firebase Authentication Listener
        ↓
Check Current User
     ↙       ↘
  User       No User
   ↓            ↓
Redux User    Redux User = null
   ↓            ↓
Browse       Login Page
```

Authentication state is initialized at the application level so that protected and public routes don't make routing decisions before Firebase finishes checking the user's session.

---

## Browse Flow

```text
User Signs In
      ↓
ProtectedRoute
      ↓
Browse Page
      ↓
MainContainer
      ↓
Fetch Movie Categories
      ↓
Select Featured Movie
      ↓
Find YouTube Trailer
      ↓
Hero Section
      ↓
SecondaryContainer
      ↓
Movie Lists
```

---

# 🗂️ Project Structure

```text
src
│
├── app
│   ├── appStore.js
│   │
│   └── slices
│       ├── ConfigSlice.js
│       ├── gptSlice.js
│       ├── moviesSlice.js
│       └── userSlice.js
│
├── components
│   ├── AILoading.jsx
│   ├── Browse.jsx
│   ├── EmptyState.jsx
│   ├── Footer.jsx
│   ├── GptMovieSuggestions.jsx
│   ├── GptSearch.jsx
│   ├── GptSearchBar.jsx
│   ├── Header.jsx
│   ├── Login.jsx
│   ├── MainContainer.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   ├── ProtectedRoute.jsx
│   ├── PublicRoute.jsx
│   ├── SecondaryContainer.jsx
│   ├── VideoBG.jsx
│   └── VideoTitle.jsx
│
├── hooks
│   ├── useAuthHandler.js
│   ├── useGetPlayingMoviesTrailer.js
│   ├── useOnPlayMovies.js
│   ├── usepopularmovies.js
│   ├── useToggleForSignUp.js
│   ├── useTopRated.js
│   └── useUpcomingMovies.js
│
├── utils
│   ├── authErrorHandler.js
│   ├── authService.js
│   ├── constantLang.js
│   ├── constants.js
│   ├── firebase.js
│   ├── firebaseAI.js
│   ├── gemini.js
│   └── validation.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

# 🛠️ Tech Stack

## Frontend

- **React 19** — Component-based UI development
- **Redux Toolkit** — Global state management
- **React Router DOM** — Client-side routing
- **Tailwind CSS 4** — Responsive styling
- **Vite** — Development server and production build tool

## Authentication & AI

- **Firebase Authentication** — User authentication
- **Firebase App Check** — Application protection
- **Firebase AI** — AI integration
- **Gemini** — Movie recommendation generation

## APIs & Media

- **TMDB API** — Movie information and posters
- **YouTube Embedded Player** — Movie trailers

## Deployment

- **Firebase Hosting**

---

# 🧩 Redux Store

The application uses Redux Toolkit to maintain shared application state.

```text
Redux Store
│
├── user
│   └── authenticated user
│
├── movies
│   ├── nowPlayingMovies
│   ├── popularMovies
│   ├── topRatedMovies
│   ├── upcomingMovies
│   └── trailers
│
├── gpt
│   ├── showGPTSearch
│   ├── movieNames
│   ├── movieResults
│   ├── isLoading
│   └── hasSearched
│
└── Config
    └── lang
```

Redux is mainly used where state needs to be shared across multiple components instead of being kept locally inside a single component.

---

# 🪝 Custom Hooks

The project uses custom hooks to keep API and authentication logic separate from presentation components.

### `useAuthHandler`

Handles:

- Sign In
- Sign Up
- Validation
- Firebase authentication errors

### `useOnPlayMovies`

Fetches Now Playing movies from TMDB.

### `usePopularMovies`

Fetches Popular movies from TMDB.

### `useTopRated`

Fetches Top Rated movies from TMDB.

### `useUpcomingMovies`

Fetches Upcoming movies from TMDB.

### `useGetPlayingMoviesTrailer`

Fetches the YouTube trailer for the selected movie and stores it in Redux.

### `useToggleForSignUp`

Controls the Sign In / Sign Up form state.

---

# 🔧 Utility Layer

The utility layer keeps external-service and validation logic separate from the UI.

### `authService.js`

Contains Firebase authentication operations:

- Create account
- Sign in
- Update user profile

### `authErrorHandler.js`

Maps Firebase error codes to user-friendly messages.

### `validation.js`

Handles:

- Required field validation
- Email validation
- Sign Up password validation
- Name validation

### `gemini.js`

Handles communication with the Gemini model and validates the AI response.

The AI response is parsed as JSON before being passed to the UI.

### `constants.js`

Contains shared configuration such as:

- TMDB request options
- Poster URL
- Supported languages

---

# 💡 Key Technical Decisions

## 1. Centralized Authentication State

Authentication state is initialized in `App.jsx` using Firebase's authentication listener.

This prevents the application from rendering protected or public routes before Firebase has finished determining whether a user is signed in.

A dedicated loading state is used during the initial authentication check.

---

## 2. Redux Toolkit for Shared State

Redux Toolkit is used for shared state such as:

- Current user
- Movie categories
- Trailer information
- GPT search results
- GPT loading state
- Selected interface language

This keeps the components focused more on rendering and user interaction.

---

## 3. Reusable Movie Components

Instead of creating a separate component for every movie category, the project uses:

```text
MovieList
    ↓
MovieCard
```

The same components are reused for:

- Now Playing
- Popular
- Top Rated
- Upcoming
- AI-generated recommendations

This keeps the UI consistent and reduces duplicated JSX.

---

## 4. Separate Data Logic from UI Logic

API requests are kept inside custom hooks and utility functions rather than being written directly inside every UI component.

This makes the code easier to understand, maintain, and reuse.

---

## 5. AI + TMDB Combination

Gemini is responsible for understanding the user's natural-language request and generating recommendations.

TMDB is responsible for finding actual movie data and posters.

This separation allows each service to do what it is best suited for:

```text
Gemini
→ Recommendation / Understanding

TMDB
→ Movie Data / Posters
```

---

# 🧪 Validation & Error Handling

The project includes validation and error handling at several levels.

### Authentication

- Missing email/password
- Invalid email
- Weak Sign Up password
- Invalid name
- Existing account
- Invalid credentials
- Disabled account
- Too many requests
- Network errors

### API Requests

TMDB and trailer requests check the response status before parsing data.

### Gemini

The AI response is:

1. Retrieved from Gemini
2. Cleaned
3. Parsed as JSON
4. Checked to ensure it is an array
5. Filtered for valid movie titles
6. Limited to 5 recommendations

---

# 🎯 Challenges Solved

## Authentication Race Condition

One important problem addressed in the project was the timing between Firebase authentication and route rendering.

Previously, route protection could evaluate Redux user state before Firebase had finished restoring the user's session.

The solution was to initialize the Firebase auth listener at the application level and keep the router behind an authentication loading state.

```text
Firebase Auth Check
        ↓
     Loading
        ↓
Authentication State Ready
        ↓
      Router
```

This prevents incorrect redirects during application startup.

---

## Featured Movie Without a Trailer

Not every movie has a usable YouTube trailer.

Instead of blindly selecting a movie and displaying a missing trailer state, the application checks the available movies until it finds one with a valid YouTube trailer.

This improves the reliability of the hero section.

---

## AI Response Reliability

AI-generated responses cannot be treated as guaranteed valid JSON.

The project therefore cleans the model response, parses it safely, validates the result, and handles failures gracefully.

---

# 📈 Performance Considerations

The project includes several practical performance decisions:

- Vite for fast development and optimized production builds
- Lazy loading for movie poster images
- Reusable components to avoid unnecessary UI duplication
- Redux Toolkit for predictable shared state management
- Responsive layouts using Tailwind utilities
- API response validation before updating application state

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Yogeshkumar4451/NetflixGPT.git
```

## 2. Navigate to the Project

```bash
cd NetflixGPT
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_AUTHORIZATION=YOUR_TMDB_BEARER_TOKEN
VITE_RECAPTCHA_SITE_KEY=YOUR_RECAPTCHA_V3_SITE_KEY
```

### Environment Variables

| Variable                  | Purpose                                  |
| ------------------------- | ---------------------------------------- |
| `VITE_AUTHORIZATION`      | TMDB Bearer token used for API requests  |
| `VITE_RECAPTCHA_SITE_KEY` | Firebase App Check reCAPTCHA v3 site key |

> ⚠️ Never commit your `.env` file or private credentials to GitHub.

The Firebase application configuration is currently defined in `src/utils/firebase.js`.

If you want to run your own Firebase project, update the Firebase configuration and configure the required Firebase services.

---

# 📜 Available Scripts

## Start Development Server

```bash
npm run dev
```

## Run ESLint

```bash
npm run lint
```

## Create Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deploy to Firebase

```bash
npm run deploy
```

---

# 📦 Production Build

The production build is generated using Vite.

```bash
npm run build
```

The output is generated in:

```text
dist/
```

Firebase Hosting is configured to serve the `dist` directory.

---

# 🌐 Deployment

The project is deployed using **Firebase Hosting**.

```text
React Application
       ↓
      Vite
       ↓
  Production Build
       ↓
      dist/
       ↓
Firebase Hosting
```

Live application:

**https://netflixgpt-fdca2.web.app**

---

# 🔮 Future Improvements

The current project focuses on the core browsing, authentication, trailer, and AI recommendation experience.

Potential future improvements include:

- ❤️ My List / Favorites
- 🎬 Dedicated movie details page
- ⭐ Movie ratings and cast information
- 🔎 Search history
- 🎭 Similar movie recommendations
- 🎤 Voice search
- 📜 Infinite scrolling
- ▶️ Functional Play button
- ℹ️ Functional More Info button
- 🎥 Improved trailer interaction
- 🖼️ Additional movie metadata and genres

---

# 🧠 What This Project Demonstrates

This project demonstrates practical understanding of:

- React functional components
- React Hooks
- Custom Hooks
- `useState`
- `useEffect`
- `useRef`
- Redux Toolkit
- React Router
- Protected Routes
- Public Routes
- Firebase Authentication
- Firebase App Check
- Firebase AI
- Gemini AI integration
- REST API integration
- Async/Await
- API error handling
- Form validation
- Reusable components
- Responsive UI development
- Tailwind CSS
- Vite
- Firebase deployment

---

# 💼 Interview Talking Points

This project is designed to demonstrate practical frontend development rather than only basic UI implementation.

During an interview, the main technical areas that can be discussed are:

### React

- Component architecture
- Props and state
- Hooks
- `useEffect` side effects
- Custom hooks
- Conditional rendering
- Reusable components

### Redux

- Why Redux Toolkit was used
- Global state vs local state
- Slice structure
- Reducers and actions
- Sharing movie and authentication state

### Authentication

- Firebase Authentication flow
- Authentication persistence
- Protected routes
- Public routes
- Handling the initial Firebase auth check

### APIs

- TMDB integration
- Fetch API
- HTTP response validation
- Async/Await
- Handling API failures

### AI Integration

- How Gemini generates recommendations
- Why TMDB is used after Gemini
- Validating AI-generated JSON
- Handling malformed AI responses
- Limiting recommendations

### Performance & UX

- Lazy-loaded images
- Responsive design
- Loading states
- Empty states
- Reusable UI components

### Deployment

- Vite production builds
- Firebase Hosting
- Environment variables
- SPA routing configuration

---

# 👨‍💻 Developer

## Yogesh Kumar

Frontend Developer focused on **React.js, JavaScript, Redux Toolkit, and modern frontend development**.

📧 **Email:** yogeshsahu4ldh@gmail.com

🐙 **GitHub:** https://github.com/Yogeshkumar4451

💼 **LinkedIn:** https://www.linkedin.com/in/yogesh-kumar-9b9413258/

🌐 **Live Project:** https://netflixgpt-fdca2.web.app

📂 **Repository:** https://github.com/Yogeshkumar4451/NetflixGPT

# 🙏 Acknowledgements

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Firebase](https://firebase.google.com/)
- [Firebase AI](https://firebase.google.com/docs/ai)
- [Google Gemini](https://ai.google.dev/)
- [TMDB](https://www.themoviedb.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)

---

# ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

# 📄 License

This project was developed for **learning and portfolio purposes**.
