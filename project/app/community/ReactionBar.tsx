import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

interface ReactionBarProps {
  likes: number;
  dislikes: number;
  comments: number;
}

const ReactionBar: React.FC<ReactionBarProps> = ({ 
  likes, 
  dislikes, 
  comments 
}) => {
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  const handleLike = () => {
    setUserLiked(!userLiked);
    if (userDisliked) setUserDisliked(false);
  };

  const handleDislike = () => {
    setUserDisliked(!userDisliked);
    if (userLiked) setUserLiked(false);
  };

  return (
    <div className="flex items-center space-x-4 mt-4 text-gray-600 dark:text-gray-300">
      <button 
        onClick={handleLike}
        className={`flex items-center space-x-1 ${userLiked ? 'text-green-500' : ''}`}
      >
        <ThumbsUp size={20} />
        <span>{likes}</span>
      </button>
      <button 
        onClick={handleDislike}
        className={`flex items-center space-x-1 ${userDisliked ? 'text-red-500' : ''}`}
      >
        <ThumbsDown size={20} />
        <span>{dislikes}</span>
      </button>
      <div className="flex items-center space-x-1">
        <MessageCircle size={20} />
        <span>{comments}</span>
      </div>
    </div>
  );
};

export default ReactionBar;