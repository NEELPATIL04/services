'use client'
import React, { useState } from 'react';

const LABELS = [
  'React', 'Next.js', 'TypeScript', 
  'JavaScript', 'Python', 'AI', 
  'Machine Learning', 'Web Development'
];

const FilterSection: React.FC = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const toggleLabel = (label: string) => {
    setSelectedLabels(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="mb-6 bg-gray-50 dark:bg-[#2c2d2e] p-4 rounded-lg mt-10">
      <h3 className="text-lg font-semibold mb-3">Filter Posts</h3>
      <div className="flex flex-wrap gap-2">
        {LABELS.map(label => (
          <button
            key={label}
            onClick={() => toggleLabel(label)}
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
  );
};

export default FilterSection;