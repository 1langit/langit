import React from 'react';
import { data } from '@/data/skills';
import Image from 'next/image';

export default function Skills() {
    const skills = data
  return (
    <div className='w-full'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' id='skills'>
          <div>
              <p className='text-3xl sm:text-4xl font-bold inline border-b-4'>Skills</p>
              <p className='py-4'>These are the technologies I&apos;ve worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 gap-y-2 py-8'>
            {skills.map(skill => (
                <div key={skill.id} className='flex flex-col justify-between items-center rounded-md hover:bg-gray-200 duration-200 py-4'>
                    <Image className='w-20 zmx-auto' src={skill.image} alt={skill.name} width={200} height={200} objectFit='contain' />
                    <p className='mt-2'>{skill.name}</p>
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};