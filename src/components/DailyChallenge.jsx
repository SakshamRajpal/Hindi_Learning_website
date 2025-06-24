import React, { useState } from "react";
import { Calendar, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const DailyChallenge = ({
  date,
  word,
  transliteration,
  meaning,
  example,
  exampleTranslation,
  completed,
  onComplete,
}) => {
  const [isRevealed, setIsRevealed] = useState(completed);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleMarkComplete = () => {
    setIsCompleted(true);
    onComplete();
    toast({
      title: "Challenge Completed!",
      description: "You've earned 10 XP points!",
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-purple-300" />
          <h3 className="text-lg font-semibold">Daily Challenge</h3>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-400 hindi-text mb-2">
            {word}
          </h2>
          <p className="text-lg text-gray-400 mb-1">{transliteration}</p>
          <p className="text-sm text-gray-500">
            {isRevealed ? meaning : "????????"}
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-md mb-6">
          <p className="text-lg mb-2 hindi-text text-gray-200">{example}</p>
          <p className="text-sm text-gray-400">
            {isRevealed ? exampleTranslation : "Can you guess the meaning?"}
          </p>
        </div>

        <div className="flex justify-between">
          {!isRevealed ? (
            <Button
              onClick={handleReveal}
              className="bg-blue-400 hover:bg-blue-500 text-gray-900"
            >
              Reveal Meaning
            </Button>
          ) : !isCompleted ? (
            <Button
              onClick={handleMarkComplete}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Mark as Learned
            </Button>
          ) : (
            <Button disabled className="bg-gray-600 text-gray-400 cursor-not-allowed">
              <Check className="mr-2 h-4 w-4" /> Completed
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;