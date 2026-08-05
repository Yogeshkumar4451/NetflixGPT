const Footer = () => {
  return (
    <footer className="w-full py-6 mt-10 border-t border-gray-700 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-white text-lg sm:text-xl font-bold">NetflixGPT</h2>

        <p className="text-gray-400 text-sm mt-2">
          AI Powered Movie Recommendation Platform
        </p>

        <p className="text-gray-300 mt-4">
          Developed by{' '}
          <span className="text-red-500 font-semibold">Yogesh Kumar</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <a
            href="mailto:yogeshsahu4ldh@gmail.com"
            className="text-gray-300 hover:text-red-500 transition"
          >
            📧 yogeshsahu4ldh@gmail.com
          </a>

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-red-500 transition"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yogesh-kumar-9b9413258/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-red-500 transition"
          >
            💼 LinkedIn
          </a>
        </div>

        <p className="text-gray-500 text-xs mt-6">
          Built with React • Redux Toolkit • Firebase • Gemini AI • TMDB API
        </p>

        <p className="text-gray-600 text-xs mt-2">
          © {new Date().getFullYear()} NetflixGPT. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
