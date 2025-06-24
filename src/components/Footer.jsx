import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="col-span-1">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-purple-400 font-bold text-lg sm:text-xl md:text-2xl">हिंदी</span>
            <span className="text-white font-bold text-base sm:text-lg md:text-xl">Safar</span>
            <span className="text-blue-300 font-bold text-base sm:text-lg md:text-xl">Seekho</span>
          </Link>
          <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-gray-400">
            Your journey to fluent Hindi starts here. Learn, practice, and master Hindi with our interactive lessons.
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="text-blue-300 font-medium text-base sm:text-lg md:text-xl mb-1 sm:mb-2 md:mb-4">Learn</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><Link to="/lessons" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Lessons</Link></li>
            <li><Link to="/alphabet" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Alphabet</Link></li>
            <li><Link to="/vocabulary" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Vocabulary</Link></li>
            <li><Link to="/grammar" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Grammar</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-blue-300 font-medium text-base sm:text-lg md:text-xl mb-1 sm:mb-2 md:mb-4">Resources</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li><Link to="/practice" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Practice</Link></li>
            <li><Link to="/quiz" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Quizzes</Link></li>
            <li><Link to="/daily-challenge" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Daily Challenge</Link></li>
            <li><Link to="/leaderboard" className="text-xs sm:text-sm md:text-base hover:text-blue-300 transition-colors">Leaderboard</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-blue-300 font-medium text-base sm:text-lg md:text-xl mb-1 sm:mb-2 md:mb-4">Connect</h3>
          <div className="flex flex-col space-y-1 sm:space-y-2 mb-1 sm:mb-2 md:mb-4">
            <a href="https://facebook.com" className="text-xs sm:text-sm md:text-base hover:text-blue-300 flex items-center">
              <Facebook className="mr-1 sm:mr-2 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5" /> Facebook
            </a>
            <a href="https://twitter.com" className="text-xs sm:text-sm md:text-base hover:text-blue-300 flex items-center">
              <Twitter className="mr-1 sm:mr-2 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5" /> Twitter
            </a>
            <a href="https://instagram.com" className="text-xs sm:text-sm md:text-base hover:text-blue-300 flex items-center">
              <Instagram className="mr-1 sm:mr-2 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5" /> Instagram
            </a>
          </div>
          <a href="mailto:info@hindisafarseekho.com" className="text-xs sm:text-sm md:text-base hover:text-blue-300 flex items-center">
            <Mail className="mr-1 sm:mr-2 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5" /> info@hindisafarseekho.com
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-2 sm:mt-4 md:mt-6 pt-2 sm:pt-4 md:pt-6 border-t border-gray-700">
        <p className="text-xs sm:text-sm md:text-base text-center text-gray-400">© {new Date().getFullYear()} Hindi Safar Seekho. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;