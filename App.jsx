import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import EmojiItem from './Components/EmojiItem';
import emojisData from './emojis.json';

const App = () => {
  const [emojis, setEmojis] = useState(emojisData);
  

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCopy = (emoji) => {
    navigator.clipboard.writeText(emoji.image);
  };

  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    const newFilteredEmojis = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEmojis(newFilteredEmojis);
  }, [search]);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold text-center">😸 Emoji Arama Motoru 😸</h1>
        <div className="flex mt-4">
          <input
            type="text"
            className="border-gray-300 rounded-md p-2 w-full"
            placeholder="Ara..."
            onChange={handleSearch}
          />
          <button className="bg-gray-200 rounded-md p-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-3">
          {filteredEmojis.map((emoji) => (
            <EmojiItem key={emoji.id} emoji={emoji} onCopy={handleCopy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
