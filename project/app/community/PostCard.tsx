import React from 'react';
import ReactionBar from './ReactionBar';
import { Post } from './types/Post';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-[#2c2d2e] rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {post.content}
          </p>
          <div className="flex space-x-2 mt-3">
            {post.labels.map(label => (
              <span 
                key={label} 
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          By {post.author}
        </span>
      </div>
      <ReactionBar 
        likes={post.likes} 
        dislikes={post.dislikes} 
        comments={post.comments} 
      />
    </div>
  );
}

export default PostCard;