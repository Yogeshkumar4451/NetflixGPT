const Footer = () => {
  return (
    <footer className="w-full bg-black/90 border-t border-red-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-red-600">NetflixGPT</h2>

            <p className="mt-5 text-gray-300 leading-8">
              Discover trending movies, watch trailers and get personalized AI
              movie recommendations powered by Gemini AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="https://netflixgpt-fdca2.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  🌐 Live Demo
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Yogeshkumar4451/NetflixGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  📂 Source Code
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Yogeshkumar4451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  🐙 GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/yogesh-kumar-9b9413258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  💼 LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Tech Stack</h3>

            <ul className="space-y-3 text-gray-300">
              <li>⚛ React.js</li>
              <li>🛠 Redux Toolkit</li>
              <li>🔥 Firebase</li>
              <li>🤖 Gemini AI</li>
              <li>🎬 TMDB API</li>
              <li>🎨 Tailwind CSS</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Contact</h3>

            <ul className="space-y-3 text-gray-300">
              <li>👨‍💻 Yogesh Kumar</li>

              <li>
                <a
                  href="mailto:yogeshsahu4ldh@gmail.com"
                  className="hover:text-red-500 transition"
                >
                  📧 yogeshsahu4ldh@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/yogesh-kumar-9b9413258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  💼 Connect on LinkedIn
                </a>
              </li>

              <li>🚀 Open to Frontend / MERN Opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            Built with ❤️ using React • Redux Toolkit • Firebase • Gemini AI •
            TMDB API
          </p>

          <p className="mt-3 text-gray-500 text-sm">
            © {new Date().getFullYear()} NetflixGPT. Developed by
            <span className="text-red-500 font-semibold"> Yogesh Kumar</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
