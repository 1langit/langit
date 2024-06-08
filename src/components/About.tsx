import React from 'react';

export default function About() {
  return (
      <div className='w-full h-screen sm:h-auto sm:mb-20'>
        <div className='flex flex-col justify-center items-center'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-300' id='about'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I&apos;m Lintang. Welcome to my portofolio.</p>
              </div>
              <div>
                <p>
                  I&apos;m a Software Engineering Technology student at Universitas Gadjah Mada.
                  My passion lies in software development, specializing in Android development and frontend development.
                  I constantly learn and stay updated on the latest technology trends to expand my knowledge.
                  Currently, I seek opportunities to enhance my technical and non-technical skills through hands-on projects.
                </p>  
              </div>
            </div>
          </div>
      </div>
  );
};