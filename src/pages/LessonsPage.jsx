import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoLesson from "@/components/VideoLesson.jsx";
import lessonsData from "./lessonsData";
import { useToast } from "@/hooks/use-toast";

const LessonsPage = () => {
  const [selectedLesson, setSelectedLesson] = useState(lessonsData[0].id);
  const [activeTab, setActiveTab] = useState("lesson");
  const { toast } = useToast();

  const currentLesson = lessonsData.find((lesson) => lesson.id === selectedLesson);

  const handleQuizComplete = (score, total) => {
    const percentage = Math.round((score / total) * 100);
    toast({
      title: `Quiz Result: ${percentage}%`,
      description: `You scored ${score} out of ${total}`,
      variant: percentage >= 70 ? "default" : "destructive",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 bg-gray-900">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-purple-400 mb-8">Hindi Lessons</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Lesson Menu */}
            <div className="bg-gray-900 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">Lesson Topics</h2>
              <nav className="space-y-1">
                {lessonsData.map((lesson) => (
                  <button
                    key={lesson.id}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedLesson === lesson.id
                        ? "bg-purple-800 text-white"
                        : "hover:bg-gray-800 text-gray-300"
                    }`}
                    onClick={() => {
                      setSelectedLesson(lesson.id);
                      setActiveTab("lesson");
                    }}
                  >
                    {lesson.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Lesson Content */}
            <div className="md:col-span-3">
              {currentLesson && (
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="lesson" className="text-base px-6 text-gray">
                      Lesson
                    </TabsTrigger>
                    {currentLesson.quiz && (
                      <TabsTrigger value="quiz" className="text-base px-6 text-gray">
                        Quiz
                      </TabsTrigger>
                    )}
                  </TabsList>

                  <TabsContent value="lesson">
                    <VideoLesson
                      title={currentLesson.title}
                      description={currentLesson.description}
                      videoId={currentLesson.videoId}
                      transcript={currentLesson.transcript}
                    />
                  </TabsContent>

                  <TabsContent value="quiz">
                    <Quiz questions={currentLesson.quiz || []} onComplete={handleQuizComplete} />
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LessonsPage;