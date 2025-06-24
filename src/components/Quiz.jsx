import React, { useState } from "react";
import { Check, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (optionIndex) => {
    if (!isAnswered) {
      setSelectedOption(optionIndex);
    }
  };

  const checkAnswer = () => {
    if (selectedOption === null) {
      toast({ title: "Please select an answer", variant: "destructive" });
      return;
    }

    setIsAnswered(true);
    setShowExplanation(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({ title: "Correct!", variant: "default", className: "bg-green-500 text-white" });
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer is: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`,
        variant: "destructive",
      });
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 text-white">
      {!quizCompleted ? (
        <>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </h3>
            <span className="text-sm bg-blue-400 text-gray-900 px-3 py-1 rounded-full">
              Score: {score}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-purple-400">{questions[currentQuestion].question}</h2>

            <RadioGroup className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-3 rounded-md border ${
                    isAnswered
                      ? index === questions[currentQuestion].correctAnswer
                        ? "border-green-500 bg-green-900"
                        : selectedOption === index
                        ? "border-red-500 bg-red-900"
                        : "border-gray-700"
                      : "border-gray-700 hover:border-blue-400 cursor-pointer"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <RadioGroupItem value={index.toString()} disabled={isAnswered} />
                  <Label className="flex-1 cursor-pointer text-gray-200">{option}</Label>
                  {isAnswered && (
                    <span>
                      {index === questions[currentQuestion].correctAnswer ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : selectedOption === index ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : null}
                    </span>
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>

          {showExplanation && questions[currentQuestion].explanation && (
            <div className="mb-6 p-4 bg-gray-700 border border-gray-600 rounded-md">
              <h4 className="font-semibold mb-1 text-blue-400">Explanation:</h4>
              <p className="text-gray-300">{questions[currentQuestion].explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            {!isAnswered ? (
              <Button onClick={checkAnswer} className="bg-blue-600 hover:bg-blue-700">
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion} className="bg-blue-400 hover:bg-blue-500 text-gray-900">
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Next Question <ChevronRight className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  "Finish Quiz"
                )}
              </Button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Quiz Completed!</h2>
          <p className="text-lg mb-6 text-gray-400">
            Your score: {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </p>
          <Button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedOption(null);
              setIsAnswered(false);
              setShowExplanation(false);
              setQuizCompleted(false);
              setScore(0);
            }}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Restart Quiz
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;