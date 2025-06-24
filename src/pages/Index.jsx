import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Calendar, PlayCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressTracker from "@/components/ProgressTracker";
import DailyChallenge from "@/components/DailyChallenge";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import DialogflowChatbot from "@/components/DialogflowChatbot";

const sampleLessonProgress = [
  { id: 1, name: "Hindi Alphabet (Vowels)", completed: false, progress: 0 },
  { id: 2, name: "Hindi Alphabet (Consonants)", completed: false, progress: 0 },
  { id: 3, name: "Basic Greetings", completed: false, progress: 0 },
  { id: 4, name: "Numbers 1-20", completed: false, progress: 0 },
];

const formatDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const faqs = [
  {
    "id": 1,
    "question": "What is this platform?",
    "answer": "This platform helps you learn Hindi by expanding your vocabulary and improving communication skills."
  },
  {
    "id": 2,
    "question": "How can I sign up?",
    "answer": "You can sign up by clicking the \"Register\" button on the homepage and filling in the required details."
  },
  {
    "id": 3,
    "question": "Is there a mobile app?",
    "answer": "Yes, this app is mobile resposive as well!!"
  },
  {
    "id": 4,
    "question": "How can I track my progress?",
    "answer": "You can track your learning progress through your leaderboard, where you will find statistics and achievements."
  }
];

const Index = () => {
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [progress, setProgress] = useState({ lessons: 0, totalPoints: 0, streak: 0 });
  const [user, setUser] = useState(null);
  const [initialLessonProgress, setInitialLessonProgress] = useState(sampleLessonProgress);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Set half completion for logged-in users
        const halfLessons = Math.floor(12 / 2); // Half of totalLessons (12)
        const halfPoints = 500; // Reasonable initial points
        const halfStreak = 5; // Reasonable initial streak

        // Update lessonProgress to reflect half completion
        const updatedLessonProgress = sampleLessonProgress.map((lesson, index) => {
          if (index < halfLessons) {
            return { ...lesson, completed: true, progress: 100 };
          }
          return { ...lesson, completed: false, progress: index === halfLessons ? 50 : 0 };
        });

        setProgress({ lessons: halfLessons, totalPoints: halfPoints, streak: halfStreak });
        setInitialLessonProgress(updatedLessonProgress);
      } else {
        // Reset to 0% for non-logged-in users
        setProgress({ lessons: 0, totalPoints: 0, streak: 0 });
        setInitialLessonProgress(sampleLessonProgress.map(lesson => ({ ...lesson, completed: false, progress: 0 })));
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Journey to Hindi Fluency Starts Here
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Learn Hindi from the basics to advanced with interactive lessons,
                videos, quizzes, and daily challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lessons">
                  <Button variant="outline" className="border-white bg-white text-purple-800 hover:bg-gray-800 hover:text-purple-400 text-lg px-8 py-6">
                    Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/alphabet">
                  <Button variant="outline" className="border-white text-purple-800 hover:bg-gray-800 hover:text-purple-400 text-lg px-8 py-6">
                    Explore Hindi Alphabet 
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
              Everything You Need to Master Hindi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Interactive Lessons</h3>
                <p className="text-gray-400">
                  Learn Hindi through structured, interactive lessons designed by language experts.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Video Tutorials</h3>
                <p className="text-gray-400">
                  Watch engaging video lessons with native speakers for perfect pronunciation.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Track Progress</h3>
                <p className="text-gray-400">
                  Monitor your learning journey with detailed progress tracking and achievements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ProgressTracker
                  totalLessons={12}
                  completedLessons={progress.lessons}
                  currentStreak={progress.streak}
                  totalPoints={progress.totalPoints}
                  lessonProgress={initialLessonProgress}
                />
              </div>
              
              <div>
                <DailyChallenge
                  word="नमस्ते"
                  transliteration="Namaste"
                  meaning="Hello / Greetings"
                  example="नमस्ते, आप कैसे हैं?"
                  exampleTranslation="Hello, how are you?"
                  completed={challengeCompleted}
                  onComplete={() => setChallengeCompleted(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Begin Your Hindi Learning Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students learning Hindi with our interactive platform.
              Start your journey today and speak Hindi with confidence.
            </p>
            <Link to="/lessons">
              <Button variant="outline" className="border-white text-purple-800 hover:bg-gray-800 hover:text-purple-400 text-lg px-8 py-6">
                Start Your First Lesson
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
              {faqs.map((faq) => (
                <div key={faq.id} className="mb-4">
                  <button
                    className="w-full text-left text-white text-lg font-semibold py-3 px-4 bg-gray-800 rounded-t-lg hover:bg-gray-700 focus:outline-none flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${openFaq === faq.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === faq.id && (
                    <div className="text-gray-400 text-base py-3 px-4 bg-gray-800 rounded-b-lg">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;