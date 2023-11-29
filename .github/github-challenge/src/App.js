import React, { useState } from 'react';

function App() {
  const [inputType, setInputType] = useState('url');
  const [inputValue, setInputValue] = useState('');

  const handleAnalysis = () => {
    if (inputType === 'url') {
      // Add code for image analysis from URL
      console.log('Analyzing image from URL:', inputValue);
    } else {
      // Add code for image analysis from prompt
      console.log('Analyzing image from prompt:', inputValue);
    }
  };

  const handleGeneration = () => {
    // Add code for image generation from prompt
    console.log('Generating image from prompt:', inputValue);
  };

  return (
    <div>
      <h1>Computer Vision</h1>

      {/* Input box for image URL or prompt */}
      <label>
        {inputType === 'url' ? 'Image URL:' : 'Image Prompt:'}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Dropdown to select input type */}
      <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
        <option value="url">URL</option>
        <option value="prompt">Prompt</option>
      </select>

      {/* Button for image analysis */}
      <button onClick={handleAnalysis}>Analyze Image</button>

      {/* Button for image generation */}
      <button onClick={handleGeneration}>Generate Image</button>
    </div>
  );
}

export default App;
