import React from "react";
import { Trophy, Award, Medal } from "lucide-react";

const Leaderboard = ({ users, timeFrame, onTimeFrameChange }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-white" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />;
      default:
        return <span className="text-gray-400 text-sm">{rank}</span>;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Leaderboard</h2>

      <div className="flex space-x-2 mb-6">
        {["daily", "weekly", "monthly", "allTime"].map((frame) => (
          <button
            key={frame}
            className={`px-4 py-2 text-sm rounded-full ${
              timeFrame === frame
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-400 hover:bg-gray-600"
            }`}
            onClick={() => onTimeFrameChange(frame)}
          >
            {frame.charAt(0).toUpperCase() + frame.slice(1)}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-16">
                Rank
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider w-24">
                XP
              </th>
              <th className="py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider w-24">
                Streak
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`${
                  user.isCurrentUser
                    ? "bg-gray-700 border-l-4 border-blue-400"
                    : "hover:bg-gray-600"
                }`}
              >
                <td className="py-4 pl-4">
                  <div className="flex justify-center">{getRankIcon(user.rank)}</div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <span className={user.isCurrentUser ? "font-semibold" : ""}>
                      {user.name}
                      {user.isCurrentUser && " (You)"}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-right font-medium">{user.points}</td>
                <td className="py-4 text-right font-medium">{user.streak} days</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;