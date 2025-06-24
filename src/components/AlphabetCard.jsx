import React, { useState, useRef, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AlphabetCard = ({ hindi, transliteration, audioSrc, examples }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const audioRef = useRef(null);
  const exampleAudioRefs = useRef([]);

  const speakHindi = (text) => {
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find((voice) => voice.lang.includes("hi-IN"));

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    if (hindiVoice) utterance.voice = hindiVoice;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Ensure voices are preloaded on mount
    if (typeof window !== "undefined") {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
          window.speechSynthesis.onvoiceschanged = loadVoices;
        }
      };
      loadVoices();
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const playExampleAudio = (index) => {
    if (exampleAudioRefs.current[index]) {
      exampleAudioRefs.current[index].play();
    }
  };

  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform cursor-pointer h-full text-white`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front Side */}
      <div className={`transition-opacity duration-500 ${isFlipped ? "hidden" : "block"}`}>
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-end">
            {audioRef.current && (
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:text-blue-300"
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio();
                }}
              >
                <Volume2 className="h-5 w-5" />
              </Button>
            )}

            {/* Voice button - click and hover */}
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-blue-300 ml-2"
              onClick={(e) => {
                e.stopPropagation();
                speakHindi(hindi);
              }}
              onMouseEnter={(e) => {
                // Only on desktop
                if (!("ontouchstart" in window)) {
                  e.stopPropagation();
                  speakHindi(hindi);
                }
              }}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-6xl font-bold text-purple-400 hindi-text mb-4">{hindi}</div>
          <div className="text-xl text-gray-400">{transliteration}</div>
          <p className="text-xs text-gray-500 mt-4">Click to see examples</p>
          {audioSrc && <audio ref={audioRef} src={audioSrc} className="hidden" />}
        </div>
      </div>

      {/* Back Side */}
      <div className={`transition-opacity duration-500 ${isFlipped ? "block" : "hidden"} h-full`}>
        <div className="p-6 h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-purple-400 hindi-text">{hindi}</div>

            {/* Optional audio button (same as above) */}
            {audioRef.current && (
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:text-blue-300"
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio();
                }}
              >
                <Volume2 className="h-5 w-5" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-blue-300 ml-2"
              onClick={(e) => {
                e.stopPropagation();
                speakHindi(hindi);
              }}
              onMouseEnter={(e) => {
                if (!("ontouchstart" in window)) {
                  e.stopPropagation();
                  speakHindi(hindi);
                }
              }}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-3">
            {examples?.map((example, index) => (
              <div key={index} className="border-b border-gray-700 pb-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg hindi-text text-gray-200">{example.hindi}</span>
                  {example.audioSrc && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        playExampleAudio(index);
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-sm text-gray-400">{example.meaning}</p>
                {example.audioSrc && (
                  <audio
                    ref={(el) => (exampleAudioRefs.current[index] = el)}
                    src={example.audioSrc}
                    className="hidden"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4 absolute bottom-4 left-0 right-0 text-center">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlphabetCard;
