// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Leaderboard from "@/components/Leaderboard";

// // Sample user data
// const leaderboardData = [
//   {
//     id: 1,
//     rank: 1,
//     name: "Rahul Sharma",
//     avatar: "https://i.pravatar.cc/150?img=1",
//     points: 1250,
//     streak: 15,
//   },
//   {
//     id: 2,
//     rank: 2,
//     name: "Priya Patel",
//     avatar: "https://i.pravatar.cc/150?img=5",
//     points: 1120,
//     streak: 12,
//   },
//   {
//     id: 3,
//     rank: 3,
//     name: "Amit Kumar",
//     avatar: "https://i.pravatar.cc/150?img=3",
//     points: 980,
//     streak: 8,
//   },
//   {
//     id: 4,
//     rank: 4,
//     name: "Neha Singh",
//     avatar: "https://i.pravatar.cc/150?img=4",
//     points: 920,
//     streak: 10,
//   },
//   {
//     id: 5,
//     rank: 5,
//     name: "Vikram Malhotra",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     points: 850,
//     streak: 7,
//   },
//   {
//     id: 6,
//     rank: 6,
//     name: "Ananya Gupta",
//     avatar: "https://i.pravatar.cc/150?img=9",
//     points: 830,
//     streak: 9,
//     isCurrentUser: true,
//   },
//   {
//     id: 7,
//     rank: 7,
//     name: "Rohan Joshi",
//     avatar: "https://i.pravatar.cc/150?img=11",
//     points: 780,
//     streak: 6,
//   },
//   {
//     id: 8,
//     rank: 8,
//     name: "Divya Kapoor",
//     avatar: "https://i.pravatar.cc/150?img=10",
//     points: 720,
//     streak: 5,
//   },
//   {
//     id: 9,
//     rank: 9,
//     name: "Arjun Reddy",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     points: 690,
//     streak: 4,
//   },
//   {
//     id: 10,
//     rank: 10,
//     name: "Meera Verma",
//     avatar: "https://i.pravatar.cc/150?img=19",
//     points: 650,
//     streak: 3,
//   },
// ];

// const LeaderboardPage = () => {
//   const [timeFrame, setTimeFrame] = useState("weekly");

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-1 py-8 bg-gray-900">
//         <div className="container mx-auto px-6 md:px-10">
//           <h1 className="text-3xl font-bold text-purple-400 mb-8">Leaderboard</h1>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="md:col-span-2">
//               <Leaderboard
//                 users={leaderboardData}
//                 timeFrame={timeFrame}
//                 onTimeFrameChange={setTimeFrame}
//               />
//             </div>

//             <div>
//               <div className="bg-gray-800 rounded-xl shadow-md p-6">
//                 <h2 className="text-xl font-bold text-purple-400 mb-4">Your Stats</h2>

//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
//                     <span className="text-gray-400">Current Rank</span>
//                     <span className="font-bold text-blue-400">#6</span>
//                   </div>

//                   <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
//                     <span className="text-gray-400">Total XP</span>
//                     <span className="font-bold text-blue-400">830 points</span>
//                   </div>

//                   <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
//                     <span className="text-gray-400">Current Streak</span>
//                     <span className="font-bold text-blue-400">9 days</span>
//                   </div>

//                   <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
//                     <span className="text-gray-400">Lessons Completed</span>
//                     <span className="font-bold text-green-500">24</span>
//                   </div>

//                   <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
//                     <span className="text-gray-400">Perfect Quizzes</span>
//                     <span className="font-bold text-purple-500">12</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gray-800 rounded-xl shadow-md p-6 mt-6">
//                 <h2 className="text-xl font-bold text-purple-400 mb-4">How to Earn Points</h2>

//                 <ul className="space-y-2 text-gray-400">
//                   <li className="flex justify-between">
//                     <span>Complete a lesson</span>
//                     <span className="font-semibold">+10 XP</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Perfect quiz score</span>
//                     <span className="font-semibold">+20 XP</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>Daily challenge</span>
//                     <span className="font-semibold">+15 XP</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>7-day streak</span>
//                     <span className="font-semibold">+50 XP</span>
//                   </li>
//                   <li className="flex justify-between">
//                     <span>30-day streak</span>
//                     <span className="font-semibold">+200 XP</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default LeaderboardPage;

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/Leaderboard";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// Sample user data (static for now, can be replaced with dynamic data)
const baseLeaderboardData = [
  {
    id: 1,
    rank: 1,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=1",
    points: 1250,
    streak: 15,
  },
  {
    id: 2,
    rank: 2,
    name: "Priya Patel",
    avatar: "https://i.pravatar.cc/150?img=5",
    points: 1120,
    streak: 12,
  },
  {
    id: 3,
    rank: 3,
    name: "Amit Kumar",
    avatar: "https://i.pravatar.cc/150?img=3",
    points: 980,
    streak: 8,
  },
  {
    id: 4,
    rank: 4,
    name: "Neha Singh",
    avatar: "https://i.pravatar.cc/150?img=4",
    points: 920,
    streak: 10,
  },
  {
    id: 5,
    rank: 5,
    name: "Vikram Malhotra",
    avatar: "https://i.pravatar.cc/150?img=7",
    points: 850,
    streak: 7,
  },
  {
    id: 6,
    rank: 6,
    name: "Ananya Gupta",
    avatar: "https://i.pravatar.cc/150?img=9",
    points: 830,
    streak: 9,
  },
  {
    id: 7,
    rank: 7,
    name: "Rohan Joshi",
    avatar: "https://i.pravatar.cc/150?img=11",
    points: 780,
    streak: 6,
  },
  {
    id: 8,
    rank: 8,
    name: "Divya Kapoor",
    avatar: "https://i.pravatar.cc/150?img=10",
    points: 720,
    streak: 5,
  },
  {
    id: 9,
    rank: 9,
    name: "Arjun Reddy",
    avatar: "https://i.pravatar.cc/150?img=12",
    points: 690,
    streak: 4,
  },
  {
    id: 10,
    rank: 10,
    name: "Meera Verma",
    avatar: "https://i.pravatar.cc/150?img=19",
    points: 650,
    streak: 3,
  },
];

const LeaderboardPage = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");
  const [user, setUser] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState(baseLeaderboardData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Get the user's name (fallback to email if displayName is null)
        const userName = currentUser.displayName || currentUser.email.split("@")[0];
        const userAvatar = currentUser.photoURL || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 20) + 1}`;
        const userPoints = 0; // Initialize with 0 or fetch from a database
        const userStreak = 0; // Initialize with 0 or fetch from a database

        // Check if the user already exists in leaderboardData
        const userExists = leaderboardData.some((u) => u.name === userName);
        if (!userExists) {
          // Add the logged-in user to the leaderboard with a new ID
          const newUser = {
            id: leaderboardData.length + 1,
            rank: leaderboardData.length + 1,
            name: userName,
            avatar: userAvatar,
            points: userPoints,
            streak: userStreak,
            isCurrentUser: true,
          };
          setLeaderboardData([...baseLeaderboardData, newUser]);
        } else {
          // Update existing user to mark as current user
          setLeaderboardData(
            leaderboardData.map((u) =>
              u.name === userName ? { ...u, isCurrentUser: true } : { ...u, isCurrentUser: false }
            )
          );
        }
      } else {
        // Reset isCurrentUser when logged out
        setLeaderboardData(baseLeaderboardData.map((u) => ({ ...u, isCurrentUser: false })));
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 bg-gray-900">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-purple-400 mb-8">Leaderboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Leaderboard
                users={leaderboardData}
                timeFrame={timeFrame}
                onTimeFrameChange={setTimeFrame}
              />
            </div>

            <div>
              <div className="bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-purple-400 mb-4">Your Stats</h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                    <span className="text-gray-400">Current Rank</span>
                    <span className="font-bold text-blue-400">
                      #{leaderboardData.find((u) => u.isCurrentUser)?.rank || "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                    <span className="text-gray-400">Total XP</span>
                    <span className="font-bold text-blue-400">
                      {leaderboardData.find((u) => u.isCurrentUser)?.points || 0} points
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                    <span className="text-gray-400">Current Streak</span>
                    <span className="font-bold text-blue-400">
                      {leaderboardData.find((u) => u.isCurrentUser)?.streak || 0} days
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                    <span className="text-gray-400">Lessons Completed</span>
                    <span className="font-bold text-green-500">24</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-md">
                    <span className="text-gray-400">Perfect Quizzes</span>
                    <span className="font-bold text-purple-500">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-md p-6 mt-6">
                <h2 className="text-xl font-bold text-purple-400 mb-4">How to Earn Points</h2>

                <ul className="space-y-2 text-gray-400">
                  <li className="flex justify-between">
                    <span>Complete a lesson</span>
                    <span className="font-semibold">+10 XP</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Perfect quiz score</span>
                    <span className="font-semibold">+20 XP</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Daily challenge</span>
                    <span className="font-semibold">+15 XP</span>
                  </li>
                  <li className="flex justify-between">
                    <span>7-day streak</span>
                    <span className="font-semibold">+50 XP</span>
                  </li>
                  <li className="flex justify-between">
                    <span>30-day streak</span>
                    <span className="font-semibold">+200 XP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LeaderboardPage;