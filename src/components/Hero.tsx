import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <div className='w-full h-screen' id='home'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
        <p className='text-gray-400'>Hello, my name is</p>
        <h1 className='text-3xl sm:text-5xl font-bold'>
          Langit Lintang Radjendra
        </h1>
        <p className='text-gray-700 text-base sm:text-lg my-3'>
          I&apos;m a Software Developer
        </p>
        <a
          // href="/assets/CV-langitlintangradjendra.pdf"
          // target="_blank"
        >
          <button className='border-2 border-black rounded-lg px-5 py-2 my-2 bg-black text-white transition-colors hover:bg-white hover:border-black hover:text-black'>
            View CV
          </button>
        </a>
      </div>
    </div>
  );
};