import { data } from '@/data/projects';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Projects() {

  const projects = data;

  return (
    <div className='w-full' id='projects'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4'>
            Projects
          </p>
          <p className='py-4'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Gird Item */}
          {projects.map(project => (
            <div key={project.id} className="flex items-center">
              <Image src={project.image} alt={project.title} className='w-40 sm:w-52' />
              <div className="px-4 sm:px-5">
                <span className="text-2xl font bold tracking-wider ">
                  {project.title}
                </span>
                <p>{project.description}</p>
                <div className='flex my-3 text-gray-700'>
                  {project.technology.map((Icon, index) => (
                    <Icon key={index} size={22} className='me-2' />
                  ))}
                </div>
                <div className="pt-5">
                  <a href={project.link} target="_blank">
                    <button className="inline-flex items-center border-2 border-black rounded px-3 py-1 bg-black text-white transition-colors hover:bg-white hover:border-black hover:text-black">
                      Visit
                      <IoMdArrowRoundForward className='ms-3' />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};