import React from 'react';

import PostList from './PostList';
import CreatePostModal from './CreatePostModal';
import FilterSection from './Filtersection';

export default function CommunityPage() {
  return (
   
      
      <div className="container mx-auto px-4 py-8">
        <FilterSection />
        <CreatePostModal />
        <PostList />
      </div>
   
  );
}
// import React from 'react'

// const page = () => {
//   return (
//     <div className=' justify-center'>
//     <span className=' justify-center align-middle'>  This page is underdeveloped</span>
//     </div>
//   )
// }

// export default page
