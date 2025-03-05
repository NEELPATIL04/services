// src/components/community/CreatePostModal.tsx
'use client'
import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

const AVAILABLE_LABELS = [
  'React', 'Next.js', 'TypeScript', 
  'JavaScript', 'Python', 'AI', 
  'Machine Learning', 'Web Development', 
  'Backend', 'Frontend', 'DevOps'
];

const CreatePostModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLabelToggle = (label: string) => {
    setSelectedLabels(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim() || !content.trim()) {
      alert('Please fill in title and content');
      return;
    }

    // Here you would typically send the post to your backend
    const newPost = {
      title,
      content,
      labels: selectedLabels,
      author: 'Current User', // Replace with actual user
      likes: 0,
      dislikes: 0,
      comments: 0
    };

    console.log('Creating post:', newPost);

    // Reset form
    setTitle('');
    setContent('');
    setSelectedLabels([]);
    closeModal();
  };

  if (!isModalOpen) {
    return (
      <button 
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <Plus size={24} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-[#2c2d2e] rounded-lg w-full max-w-lg p-6 relative">
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
          Create New Post
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="title" 
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Title
            </label>
            <input 
              type="text" 
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="w-full px-3 py-2 border rounded-md dark:bg-[#3c3d3e] dark:text-white dark:border-gray-600"
              required 
            />
          </div>
          
          <div>
            <label 
              htmlFor="content" 
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Content
            </label>
            <textarea 
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows={4}
              className="w-full px-3 py-2 border rounded-md dark:bg-[#3c3d3e] dark:text-white dark:border-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Add Labels
            </label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_LABELS.map(label => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleLabelToggle(label)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedLabels.includes(label)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button 
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;