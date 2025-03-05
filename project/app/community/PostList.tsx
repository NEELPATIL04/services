'use client'
import React, { useState } from 'react';
import PostCard from './PostCard';
import { Post } from './types/Post';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    // Sample posts - would typically come from API/database
    {
      id: '1',
      title: 'React 19 New Features',
      content: 'Exploring the latest innovations in React 19...',
      author: 'Tech Enthusiast',
      labels: ['React', 'Frontend'],
      likes: 42,
      dislikes: 3,
      comments: 12
    }
  ]);

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
