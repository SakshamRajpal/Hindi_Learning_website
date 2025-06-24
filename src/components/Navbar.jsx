// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, User, ArrowRight, LogIn } from "lucide-react";
// import React from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-900 text-white py-4 px-4 sm:px-6 md:px-10 relative z-10">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to="/" className="flex items-center space-x-2">
//           <span className="text-purple-400 font-bold text-xl sm:text-2xl">हिंदी</span>
//           <span className="text-white font-bold text-lg sm:text-xl">Safar</span>
//           <span className="text-blue-300 font-bold text-lg sm:text-xl">Seekho</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
//           {["Lessons", "Alphabet", "Practice", "Leaderboard"].map((item) => (
//             <Link
//               key={item}
//               to={`/${item.toLowerCase()}`}
//               className="font-medium text-white hover:text-blue-300 transition-colors text-sm sm:text-base"
//             >
//               {item}
//             </Link>
//           ))}
//           <div className="flex items-center space-x-2">
//             <Link to="/login" className="border border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm flex items-center">
//               <LogIn className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Login <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
//             </Link>
//             <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm flex items-center">
//               <User className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Register <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-800 rounded-md text-white focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 px-6 animate-fade-in z-20">
//           <div className="flex flex-col space-y-4">
//             {["Lessons", "Alphabet", "Practice", "Leaderboard"].map((item) => (
//               <Link
//                 key={item}
//                 to={`/${item.toLowerCase()}`}
//                 className="font-medium text-white hover:text-blue-300 transition-colors py-2 text-sm"
//                 onClick={toggleMenu}
//               >
//                 {item}
//               </Link>
//             ))}
//             <div className="flex flex-col space-y-2 pt-2">
//               <Link to="/login" className="w-full border border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 px-4 py-2 rounded-md text-sm flex items-center">
//                 <LogIn className="mr-2 h-5 w-5" /> Login <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//               <Link to="/register" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
//                 <User className="mr-2 h-5 w-5" /> Register <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, ArrowRight, LogOut, LogIn } from "lucide-react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-4 sm:px-6 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-purple-400 font-bold text-xl sm:text-2xl">हिंदी</span>
          <span className="text-white font-bold text-lg sm:text-xl">Safar</span>
          <span className="text-blue-300 font-bold text-lg sm:text-xl">Seekho</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
          {["Lessons", "Alphabet", "Practice", "Leaderboard"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="font-medium text-white hover:text-blue-300 transition-colors text-sm sm:text-base"
            >
              {item}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm flex items-center"
              >
                <LogOut className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="border border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm flex items-center">
                  <LogIn className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Login <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm flex items-center">
                  <User className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Register <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-800 rounded-md text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 px-6 animate-fade-in z-20">
          <div className="flex flex-col space-y-4">
            {["Lessons", "Alphabet", "Practice", "Leaderboard"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="font-medium text-white hover:text-blue-300 transition-colors py-2 text-sm"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center"
                >
                  <LogOut className="mr-2 h-5 w-5" /> Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="w-full border border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 px-4 py-2 rounded-md text-sm flex items-center">
                    <LogIn className="mr-2 h-5 w-5" /> Login <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/register" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <User className="mr-2 h-5 w-5" /> Register <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;