import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlphabetCard from "@/components/AlphabetCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const vowels = [
  {
    hindi: "अ", transliteration: "a", examples: [
      { hindi: "अनार", meaning: "Pomegranate" },
      { hindi: "अच्छा", meaning: "Good" }
    ]
  },
  {
    hindi: "आ", transliteration: "aa", examples: [
      { hindi: "आम", meaning: "Mango" },
      { hindi: "आदमी", meaning: "Man" }
    ]
  },
  {
    hindi: "इ", transliteration: "i", examples: [
      { hindi: "इमली", meaning: "Tamarind" },
      { hindi: "इच्छा", meaning: "Desire" }
    ]
  },
  {
    hindi: "ई", transliteration: "ee", examples: [
      { hindi: "ईख", meaning: "Sugarcane" },
      { hindi: "ईमान", meaning: "Honesty" }
    ]
  },
  {
    hindi: "उ", transliteration: "u", examples: [
      { hindi: "उल्लू", meaning: "Owl" },
      { hindi: "उड़ान", meaning: "Flight" }
    ]
  },
  {
    hindi: "ऊ", transliteration: "oo", examples: [
      { hindi: "ऊन", meaning: "Wool" },
      { hindi: "ऊँचाई", meaning: "Height" }
    ]
  },
  {
    hindi: "ए", transliteration: "e", examples: [
      { hindi: "एक", meaning: "One" },
      { hindi: "एड़ी", meaning: "Heel" }
    ]
  },
  {
    hindi: "ऐ", transliteration: "ai", examples: [
      { hindi: "ऐनक", meaning: "Glasses" },
      { hindi: "ऐसा", meaning: "Like this" }
    ]
  },
  {
    hindi: "ओ", transliteration: "o", examples: [
      { hindi: "ओखली", meaning: "Mortar" },
      { hindi: "ओस", meaning: "Dew" }
    ]
  },
  {
    hindi: "औ", transliteration: "au", examples: [
      { hindi: "औरत", meaning: "Woman" },
      { hindi: "और", meaning: "And" }
    ]
  },
  {
    hindi: "अं", transliteration: "an", examples: [
      { hindi: "अंगूर", meaning: "Grapes" },
      { hindi: "अंग", meaning: "Limb" }
    ]
  },
  {
    hindi: "अः", transliteration: "ah", examples: [
      { hindi: "दुःख", meaning: "Sorrow" },
      { hindi: "शः", meaning: "Used in mantras" }
    ]
  }
];

const consonants = [
  { hindi: "क", transliteration: "ka", examples: [
      { hindi: "कमल", meaning: "Lotus" },
      { hindi: "कलम", meaning: "Pen" }
    ]
  },
  { hindi: "ख", transliteration: "kha", examples: [
      { hindi: "खरगोश", meaning: "Rabbit" },
      { hindi: "खाना", meaning: "Food" }
    ]
  },
  { hindi: "ग", transliteration: "ga", examples: [
      { hindi: "गमला", meaning: "Flowerpot" },
      { hindi: "गाड़ी", meaning: "Car" }
    ]
  },
  { hindi: "घ", transliteration: "gha", examples: [
      { hindi: "घर", meaning: "Home" },
      { hindi: "घड़ी", meaning: "Watch" }
    ]
  },
  { hindi: "ङ", transliteration: "nga", examples: [
      { hindi: "अंग", meaning: "Limb" },
      { hindi: "संग", meaning: "Together" }
    ]
  },
  { hindi: "च", transliteration: "cha", examples: [
      { hindi: "चमच", meaning: "Spoon" },
      { hindi: "चिड़िया", meaning: "Bird" }
    ]
  },
  { hindi: "छ", transliteration: "chha", examples: [
      { hindi: "छाता", meaning: "Umbrella" },
      { hindi: "छात्र", meaning: "Student" }
    ]
  },
  { hindi: "ज", transliteration: "ja", examples: [
      { hindi: "जहाज", meaning: "Ship" },
      { hindi: "जंगल", meaning: "Forest" }
    ]
  },
  { hindi: "झ", transliteration: "jha", examples: [
      { hindi: "झूला", meaning: "Swing" },
      { hindi: "झंडा", meaning: "Flag" }
    ]
  },
  { hindi: "ञ", transliteration: "nya", examples: [
      { hindi: "ज्ञानी", meaning: "Wise" },
      { hindi: "ज्ञान", meaning: "Knowledge" }
    ]
  },
  { hindi: "ट", transliteration: "ṭa", examples: [
      { hindi: "टमाटर", meaning: "Tomato" },
      { hindi: "टोकरी", meaning: "Basket" }
    ]
  },
  { hindi: "ठ", transliteration: "ṭha", examples: [
      { hindi: "ठंडा", meaning: "Cold" },
      { hindi: "ठेला", meaning: "Cart" }
    ]
  },
  { hindi: "ड", transliteration: "ḍa", examples: [
      { hindi: "डमरू", meaning: "Drum" },
      { hindi: "डिब्बा", meaning: "Box" }
    ]
  },
  { hindi: "ढ", transliteration: "ḍha", examples: [
      { hindi: "ढोल", meaning: "Drum" },
      { hindi: "ढक्कन", meaning: "Lid" }
    ]
  },
  { hindi: "ण", transliteration: "ṇa", examples: [
      { hindi: "कण", meaning: "Particle" },
      { hindi: "विष्णु", meaning: "Lord Vishnu" }
    ]
  },
  { hindi: "त", transliteration: "ta", examples: [
      { hindi: "तरबूज", meaning: "Watermelon" },
      { hindi: "तलवार", meaning: "Sword" }
    ]
  },
  { hindi: "थ", transliteration: "tha", examples: [
      { hindi: "थाली", meaning: "Plate" },
      { hindi: "थकान", meaning: "Fatigue" }
    ]
  },
  { hindi: "द", transliteration: "da", examples: [
      { hindi: "दरवाज़ा", meaning: "Door" },
      { hindi: "दूध", meaning: "Milk" }
    ]
  },
  { hindi: "ध", transliteration: "dha", examples: [
      { hindi: "धागा", meaning: "Thread" },
      { hindi: "धरती", meaning: "Earth" }
    ]
  },
  { hindi: "न", transliteration: "na", examples: [
      { hindi: "नदी", meaning: "River" },
      { hindi: "नक्शा", meaning: "Map" }
    ]
  },
  { hindi: "प", transliteration: "pa", examples: [
      { hindi: "पतंग", meaning: "Kite" },
      { hindi: "पंखा", meaning: "Fan" }
    ]
  },
  { hindi: "फ", transliteration: "pha", examples: [
      { hindi: "फल", meaning: "Fruit" },
      { hindi: "फूल", meaning: "Flower" }
    ]
  },
  { hindi: "ब", transliteration: "ba", examples: [
      { hindi: "बच्चा", meaning: "Child" },
      { hindi: "बिल्ली", meaning: "Cat" }
    ]
  },
  { hindi: "भ", transliteration: "bha", examples: [
      { hindi: "भालू", meaning: "Bear" },
      { hindi: "भोजन", meaning: "Meal" }
    ]
  },
  { hindi: "म", transliteration: "ma", examples: [
      { hindi: "मछली", meaning: "Fish" },
      { hindi: "मकान", meaning: "House" }
    ]
  },
  { hindi: "य", transliteration: "ya", examples: [
      { hindi: "यात्रा", meaning: "Journey" },
      { hindi: "योग", meaning: "Yoga" }
    ]
  },
  { hindi: "र", transliteration: "ra", examples: [
      { hindi: "राजा", meaning: "King" },
      { hindi: "रसगुल्ला", meaning: "Sweet" }
    ]
  },
  { hindi: "ल", transliteration: "la", examples: [
      { hindi: "लड़का", meaning: "Boy" },
      { hindi: "लड्डू", meaning: "Sweet" }
    ]
  },
  { hindi: "व", transliteration: "va", examples: [
      { hindi: "वृक्ष", meaning: "Tree" },
      { hindi: "विमान", meaning: "Airplane" }
    ]
  },
  { hindi: "श", transliteration: "sha", examples: [
      { hindi: "शेर", meaning: "Lion" },
      { hindi: "शब्द", meaning: "Word" }
    ]
  },
  { hindi: "ष", transliteration: "ṣa", examples: [
      { hindi: "षट्कोण", meaning: "Hexagon" },
      { hindi: "षष्ठी", meaning: "Sixth" }
    ]
  },
  { hindi: "स", transliteration: "sa", examples: [
      { hindi: "सूरज", meaning: "Sun" },
      { hindi: "सड़क", meaning: "Road" }
    ]
  },
  { hindi: "ह", transliteration: "ha", examples: [
      { hindi: "हाथी", meaning: "Elephant" },
      { hindi: "हवा", meaning: "Air" }
    ]
  },
  { hindi: "क्ष", transliteration: "ksha", examples: [
      { hindi: "क्षत्रिय", meaning: "Warrior" },
      { hindi: "क्षमा", meaning: "Forgiveness" }
    ]
  },
  { hindi: "त्र", transliteration: "tra", examples: [
      { hindi: "त्रिशूल", meaning: "Trident" },
      { hindi: "त्रिकोण", meaning: "Triangle" }
    ]
  },
  { hindi: "ज्ञ", transliteration: "gya", examples: [
      { hindi: "ज्ञान", meaning: "Knowledge" },
      { hindi: "ज्ञानी", meaning: "Wise person" }
    ]
  }
];

const commonWords = [
  {
    "id": "word002",
    "word": "धन्यवाद",
    "pronunciation": "dhanyavaad",
    "meaning": "thank you",
    "part_of_speech": "expression",
    "difficulty": "easy",
    "lesson_no": 1,
    "when_to_say": "Used to express gratitude in formal contexts.",
    "example": "धन्यवाद, आपने मेरी मदद की। (dhanyavaad, aapne meri madad ki.) - Thank you for helping me."
  },
  {
    "id": "word003",
    "word": "सुनो",
    "pronunciation": "suno",
    "meaning": "listen",
    "part_of_speech": "verb",
    "difficulty": "easy",
    "lesson_no": 2,
    "when_to_say": "Used to grab someone's attention before speaking.",
    "example": "सुनो, मुझे तुमसे बात करनी है। (suno, mujhe tumse baat karni hai.) - Listen, I need to talk to you."
  },
  {
    "id": "word004",
    "word": "खुश",
    "pronunciation": "khush",
    "meaning": "happy",
    "part_of_speech": "adjective",
    "difficulty": "easy",
    "lesson_no": 2,
    "when_to_say": "Used to describe feelings of joy.",
    "example": "मैं बहुत खुश हूँ। (main bahut khush hoon.) - I am very happy."
  },
  {
    "id": "word005",
    "word": "क्या",
    "pronunciation": "kya",
    "meaning": "what",
    "part_of_speech": "pronoun",
    "difficulty": "easy",
    "lesson_no": 1,
    "when_to_say": "Used to ask questions.",
    "example": "क्या तुमने खाना खाया? (kya tumne khana khaya?) - Did you eat food?"
  },
  {
    "id": "word006",
    "word": "पढ़ना",
    "pronunciation": "padhna",
    "meaning": "to read",
    "part_of_speech": "verb",
    "difficulty": "medium",
    "lesson_no": 3,
    "when_to_say": "Used to describe the action of reading.",
    "example": "मुझे किताब पढ़ना पसंद है। (mujhe kitaab padhna pasand hai.) - I like to read books."
  },
  {
    "id": "word007",
    "word": "सुंदर",
    "pronunciation": "sundar",
    "meaning": "beautiful",
    "part_of_speech": "adjective",
    "difficulty": "easy",
    "lesson_no": 4,
    "when_to_say": "Used to compliment someone's appearance or something pleasant.",
    "example": "यह बगीचा बहुत सुंदर है। (yah bageecha bahut sundar hai.) - This garden is very beautiful."
  },
  {
    "id": "word008",
    "word": "दोस्त",
    "pronunciation": "dost",
    "meaning": "friend",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 2,
    "when_to_say": "Used to refer to a friend.",
    "example": "मेरा सबसे अच्छा दोस्त राम है। (mera sabse accha dost Ram hai.) - My best friend is Ram."
  },
  {
    "id": "word009",
    "word": "प्यासा",
    "pronunciation": "pyasa",
    "meaning": "thirsty",
    "part_of_speech": "adjective",
    "difficulty": "medium",
    "lesson_no": 5,
    "when_to_say": "Used to express the need for water.",
    "example": "मुझे पानी चाहिए, मैं प्यासा हूँ। (mujhe pani chahiye, main pyasa hoon.) - I need water, I am thirsty."
  },
  {
    "id": "word010",
    "word": "खाना",
    "pronunciation": "khana",
    "meaning": "food",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 3,
    "when_to_say": "Used to refer to meals or food in general.",
    "example": "मुझे खाना बहुत पसंद है। (mujhe khana bahut pasand hai.) - I love food."
  },
  {
    "id": "word011",
    "word": "बोलना",
    "pronunciation": "bolna",
    "meaning": "to speak",
    "part_of_speech": "verb",
    "difficulty": "medium",
    "lesson_no": 4,
    "when_to_say": "Used to describe the action of speaking.",
    "example": "हिंदी बोलना आसान है। (hindi bolna aasan hai.) - Speaking Hindi is easy."
  },
  {
    "id": "word012",
    "word": "जल्दी",
    "pronunciation": "jaldi",
    "meaning": "quickly",
    "part_of_speech": "adverb",
    "difficulty": "medium",
    "lesson_no": 5,
    "when_to_say": "Used to express urgency.",
    "example": "जल्दी आओ, देर हो रही है। (jaldi aao, der ho rahi hai.) - Come quickly, it's getting late."
  },
  {
    "id": "word013",
    "word": "बड़ा",
    "pronunciation": "bada",
    "meaning": "big",
    "part_of_speech": "adjective",
    "difficulty": "easy",
    "lesson_no": 6,
    "when_to_say": "Used to describe size or importance.",
    "example": "यह कमरा बहुत बड़ा है। (yah kamra bahut bada hai.) - This room is very big."
  },
  {
    "id": "word014",
    "word": "छोटा",
    "pronunciation": "chhota",
    "meaning": "small",
    "part_of_speech": "adjective",
    "difficulty": "easy",
    "lesson_no": 6,
    "when_to_say": "Used to describe something of small size.",
    "example": "मेरा घर छोटा है। (mera ghar chhota hai.) - My house is small."
  },
  {
    "id": "word015",
    "word": "आसमान",
    "pronunciation": "aasman",
    "meaning": "sky",
    "part_of_speech": "noun",
    "difficulty": "medium",
    "lesson_no": 7,
    "when_to_say": "Used to refer to the sky.",
    "example": "आसमान नीला है। (aasman neela hai.) - The sky is blue."
  },
  {
    "id": "word016",
    "word": "पानी",
    "pronunciation": "pani",
    "meaning": "water",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 3,
    "when_to_say": "Used to refer to water.",
    "example": "पानी पियो, सेहत के लिए अच्छा है। (pani piyo, sehat ke liye accha hai.) - Drink water, it's good for health."
  },
  {
    "id": "word017",
    "word": "चलना",
    "pronunciation": "chalna",
    "meaning": "to walk",
    "part_of_speech": "verb",
    "difficulty": "medium",
    "lesson_no": 5,
    "when_to_say": "Used to describe the action of walking.",
    "example": "चलो, बाजार चलते हैं। (chalo, bazar chalte hain.) - Let's go to the market."
  },
  {
    "id": "word018",
    "word": "सपना",
    "pronunciation": "sapna",
    "meaning": "dream",
    "part_of_speech": "noun",
    "difficulty": "medium",
    "lesson_no": 7,
    "when_to_say": "Used to describe aspirations or dreams while sleeping.",
    "example": "मैंने एक सुंदर सपना देखा। (maine ek sundar sapna dekha.) - I had a beautiful dream."
  },
  {
    "id": "word020",
    "word": "सीखना",
    "pronunciation": "seekhna",
    "meaning": "to learn",
    "part_of_speech": "verb",
    "difficulty": "medium",
    "lesson_no": 8,
    "when_to_say": "Used to describe the process of gaining knowledge.",
    "example": "मुझे नई भाषाएँ सीखना पसंद है। (mujhe nai bhashayen seekhna pasand hai.) - I like learning new languages."
  },
  {
    "id": "word021",
    "word": "बिल्कुल",
    "pronunciation": "bilkul",
    "meaning": "exactly",
    "part_of_speech": "adverb",
    "difficulty": "medium",
    "lesson_no": 4,
    "when_to_say": "Used to affirm something with certainty.",
    "example": "तुम बिल्कुल सही हो। (tum bilkul sahi ho.) - You are absolutely correct."
  },
  {
    "id": "word022",
    "word": "काम",
    "pronunciation": "kaam",
    "meaning": "work",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 3,
    "when_to_say": "Used to refer to tasks or job responsibilities.",
    "example": "मुझे अपना काम खत्म करना है। (mujhe apna kaam khatam karna hai.) - I need to finish my work."
  },
  {
    "id": "word023",
    "word": "खेल",
    "pronunciation": "khel",
    "meaning": "game",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 5,
    "when_to_say": "Used to refer to sports or recreational activities.",
    "example": "हमें खेल खेलना पसंद है। (humein khel khelna pasand hai.) - We like to play games."
  },
  {
    "id": "word024",
    "word": "सुबह",
    "pronunciation": "subah",
    "meaning": "morning",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 1,
    "when_to_say": "Used to talk about the early part of the day.",
    "example": "मैं सुबह जल्दी उठता हूँ। (main subah jaldi uthta hoon.) - I wake up early in the morning."
  },
  {
    "id": "word025",
    "word": "शब्द",
    "pronunciation": "shabd",
    "meaning": "word",
    "part_of_speech": "noun",
    "difficulty": "medium",
    "lesson_no": 7,
    "when_to_say": "Used to describe units of language.",
    "example": "यह शब्द का सही अर्थ क्या है? (yah shabd ka sahi arth kya hai?) - What is the correct meaning of this word?"
  },
  {
    "id": "word026",
    "word": "पढ़ाई",
    "pronunciation": "padhai",
    "meaning": "study",
    "part_of_speech": "noun",
    "difficulty": "medium",
    "lesson_no": 6,
    "when_to_say": "Used to describe academic learning.",
    "example": "पढ़ाई पर ध्यान देना जरूरी है। (padhai par dhyan dena zaruri hai.) - It is important to focus on studies."
  },
  {
    "id": "word027",
    "word": "समझ",
    "pronunciation": "samajh",
    "meaning": "understanding",
    "part_of_speech": "noun",
    "difficulty": "medium",
    "lesson_no": 9,
    "when_to_say": "Used to refer to comprehension or grasping ideas.",
    "example": "यह समझना मुश्किल है। (yah samajhna mushkil hai.) - This is difficult to understand."
  },
  {
    "id": "word028",
    "word": "मज़ाक",
    "pronunciation": "mazaak",
    "meaning": "joke",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 4,
    "when_to_say": "Used to refer to something funny or humorous.",
    "example": "तुम्हारा मजाक बहुत अच्छा था। (tumhara mazaak bahut accha tha.) - Your joke was very funny."
  },
  {
    "id": "word029",
    "word": "खुशबू",
    "pronunciation": "khushboo",
    "meaning": "fragrance",
    "part_of_speech": "noun",
    "difficulty": "medium",
    "lesson_no": 6,
    "when_to_say": "Used to describe pleasant smells.",
    "example": "फूलों की खुशबू बहुत अच्छी है। (phoolon ki khushboo bahut acchi hai.) - The fragrance of flowers is very nice."
  },
  {
    "id": "word030",
    "word": "सच",
    "pronunciation": "sach",
    "meaning": "truth",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 5,
    "when_to_say": "Used to refer to facts or honesty.",
    "example": "सच बोलना हमेशा अच्छा होता है। (sach bolna hamesha accha hota hai.) - Telling the truth is always good."
  }
];

const commonWordsEasy = commonWords.filter(word => word.difficulty === "easy");
const commonWordsMedium = commonWords.filter(word => word.difficulty === "medium");

const AlphabetPage = () => {
  const [activeTab, setActiveTab] = useState("vowels");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredLetters = () => {
    const letters = activeTab === "vowels" ? vowels :
                    activeTab === "consonants" ? consonants :
                    activeTab === "common-easy" ? commonWordsEasy :
                    commonWordsMedium;
    if (!searchQuery) return letters;
    return letters.filter(letter =>
      letter.hindi?.includes(searchQuery) ||
      letter.transliteration?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.examples?.some(ex =>
        ex.hindi.includes(searchQuery) ||
        ex.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      letter.word?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.pronunciation?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.meaning?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.example?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredLetters = getFilteredLetters();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 bg-gray-900">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-purple-400 mb-4">Hindi Alphabet</h1>
          <p className="text-gray-300 mb-8">
            Learn the Hindi alphabet with interactive cards. Click on a card to see examples.
          </p>

          <div className="mb-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Scrollable Tabs Wrapper */}
              <div className="relative">
                <div className="scroll-tabs-wrapper w-full overflow-x-auto">
                  <TabsList className="flex flex-nowrap gap-2 w-max">
                    <TabsTrigger value="vowels" className="text-base px-6 text-gray">Vowels (स्वर)</TabsTrigger>
                    <TabsTrigger value="consonants" className="text-base px-6 text-gray">Consonants (व्यंजन)</TabsTrigger>
                    <TabsTrigger value="common-easy" className="text-base px-6 text-gray">Common Words (Easy)</TabsTrigger>
                    <TabsTrigger value="common-medium" className="text-base px-6 text-gray">Common Words (Medium)</TabsTrigger>
                  </TabsList>
                </div>

                {/* Fading gradient indicator */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-900 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-900 to-transparent"></div>
              </div>

              {/* Helper text on mobile */}
              <p className="text-sm text-gray-400 mt-2 sm:hidden text-center">
                Swipe to see more →
              </p>

              {/* Search bar */}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search letters or words..."
                  className="pl-10 w-full bg-gray-800 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredLetters.map((letter, index) => (
              <AlphabetCard
                key={index}
                hindi={letter.hindi || letter.word}
                transliteration={letter.transliteration || letter.pronunciation}
                examples={letter.examples || [{ hindi: letter.example.split(" - ")[0], meaning: letter.example.split(" - ")[1] }]}
              />
            ))}
          </div>

          {filteredLetters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No letters found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlphabetPage;