import React, { useState } from 'react';

const EmojiItem = ({ emoji, onCopy }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      id="emoji-container" 
      className={`emoji-container rounded-md p-2 shadow-md cursor-pointer flex items-center justify-content: space-between ${isHovering ? 'bg-gray-100' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onCopy(emoji)}
    >
      <span className="text-4xl mr-2">{emoji.image}</span>
      <p className="text-sm">{emoji.name}</p>
      {isHovering && <p className="text-sm ml-auto">{"Emoji'yi kopyala"}</p>}
    </div>
  );
};

export default EmojiItem;
