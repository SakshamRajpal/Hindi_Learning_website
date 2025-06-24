// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       Cookies.set("user", userCredential.user.uid, { expires: 7 });
//       navigate("/home");
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='5' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E')", backgroundSize: "20px 20px" }}>
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to हिंदी सफर सीखो</h2>
//         <p className="text-gray-400 mb-6 text-center">Access the best-fit platform & Recommender for your Hindi learning.</p>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-gray-300">Email</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 bg-gray-700 text-white rounded" />
//           </div>
//           <div>
//             <label className="block text-gray-300">Password</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 bg-gray-700 text-white rounded" />
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign In</button>
//           <p className="text-gray-400 text-center">Don't have an account? <a href="/register" className="text-blue-400">Sign up</a></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">Login to हिंदी सफर सीखो</h2>
        <p className="text-gray-400 mb-6 text-center">Access the best-fit platform & Recommender for your Hindi learning.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 flex items-center justify-center"
          >
            <LogIn className="mr-2 h-4 w-4" /> Sign In
          </button>
          <p className="text-gray-400 text-center">Don't have an account? <a href="/register" className="text-blue-400">Sign up</a></p>
          <p className="text-center mt-2"><a href="/login" className="text-blue-400">Forgot Password?</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;