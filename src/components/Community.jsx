import React from 'react';
import Boards from './Boards';
import Posts from './Posts';
import About from './About';

function Community() {
  return (
    <div className="flex bg-gray-800 pt-[200px] pb-[100px]">
      <Boards />
      <Posts />
      <About />
    </div>
  );
}

export default Community;
