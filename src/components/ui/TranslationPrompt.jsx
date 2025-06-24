import React, { useState } from 'react';

const TranslationPrompt = () => {
  const [englishText, setEnglishText] = useState('');
  const [hindiText, setHindiText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: englishText,
          source: 'en',
          target: 'hi',
          format: 'text',
        }),
      });
      const data = await response.json();
      setHindiText(data.translatedText);
    } catch (error) {
      setHindiText('Translation error. Please try again.');
    }
  };

  return (
    <div className="ml-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold text-purple-700">Translate to Hindi</h3>
      <input
        type="text"
        value={englishText}
        onChange={(e) => setEnglishText(e.target.value)}
        placeholder="Enter English text"
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        onClick={handleTranslate}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Translate
      </button>
      {hindiText && (
        <div className="mt-2 p-2 bg-white rounded">
          <h4 className="text-md font-medium">Hindi:</h4>
          <p>{hindiText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationPrompt;