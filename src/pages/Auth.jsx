import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            {isLogin ? "Login" : "Register"} to Hindi Safar Seekho
          </h2>
          <p className="text-gray-400 mb-6 text-center">
            {isLogin ? "Access your account" : "Create a new account"}
          </p>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-700 text-white rounded"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-2 bg-gray-700 text-white rounded"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                className="w-full p-2 bg-gray-700 text-white rounded"
                placeholder="••••••••"
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-gray-300">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-gray-700 text-white rounded"
                  placeholder="••••••••"
                />
              </div>
            )}
            <Button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              {isLogin ? <LogIn className="mr-2 h-4 w-4" /> : <UserPlus className="mr-2 h-4 w-4" />}
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>
          <p className="text-gray-400 text-center mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:text-blue-300"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;