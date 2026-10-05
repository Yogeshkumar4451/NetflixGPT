const Footer = () => {
  return (
    <footer className="mt-10 w-full border-t border-red-700 bg-black/90">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/Thumbai_logo.png"
              alt="NetflixGPT Logo"
              className="h-auto w-48"
            />

            <p className="mt-5 leading-8 text-gray-300">
              Discover trending movies, watch trailers and get personalized AI
              movie recommendations powered by Gemini AI.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="https://netflixgpt-fdca2.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-500"
                >
                  🌐 Live Demo
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Yogeshkumar4451/NetflixGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-500"
                >
                  📂 Source Code
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Yogeshkumar4451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-500"
                >
                  🐙 GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/yogesh-kumar-9b9413258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-500"
                >
                  💼 LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Tech Stack</h3>

            <ul className="space-y-3 text-gray-300">
              <li>⚛ React.js</li>
              <li>🛠 Redux Toolkit</li>
              <li>🔥 Firebase</li>
              <li>🤖 Gemini AI</li>
              <li>🎬 TMDB API</li>
              <li>🎨 Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Contact</h3>

            <ul className="space-y-3 text-gray-300">
              <li>👨‍💻 Yogesh Kumar</li>

              <li>
                <a
                  href="mailto:yogeshsahu4ldh@gmail.com"
                  className="break-words transition hover:text-red-500"
                >
                  📧 yogeshsahu4ldh@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/yogesh-kumar-9b9413258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-500"
                >
                  💼 Connect on LinkedIn
                </a>
              </li>

              <li>🚀 Open to Frontend / MERN Opportunities</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            Built with ❤️ using React • Redux Toolkit • Firebase • Gemini AI •
            TMDB API
          </p>

          <p className="mt-3 text-sm text-gray-500">
            © {new Date().getFullYear()} NetflixGPT. Developed by
            <span className="font-semibold text-red-500"> Yogesh Kumar</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
