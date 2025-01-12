"use client";

import { data } from '@/data/projects';
import { Project } from '@/type/project';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Projects() {
  const projects = data;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const toggleModal  = (project: Project | null) => {
    setSelectedProject(project);
  };

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
          { projects.map((project, index) => (
            <div key={index} className="relative flex items-center">
              {/* Container for the image and overlay */}
              <div className="relative group hover:cursor-pointer" onClick={() => toggleModal(project)}>
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  loading='lazy'
                  className="w-40 sm:w-52 hover:brightness-75 transition-all"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                  <span className="text-center px-4 py-2">View detail</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="px-4 sm:px-5">
                <span className="text-2xl tracking-wider">{project.title}</span>
                <p>{project.subtitle}</p>
                <div className="flex my-3 text-gray-700">
                  {project.technology.map((Icon, index) => (
                    <Icon key={index} size={22} className="me-2" />
                  ))}
                </div>
                <div className="pt-5">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="inline-flex items-center border-2 border-black rounded px-3 py-1 bg-black text-white transition-colors hover:bg-white hover:border-black hover:text-black">
                      Visit
                      <IoMdArrowRoundForward className="ms-3" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      { selectedProject  && 
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20" onClick={() => toggleModal(null)}>
          <div className="sm:flex bg-white rounded-lg shadow-lg max-w-screen-md w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-0 md:w-96 rounded-s-lg"
            />
            <div className='w-full ps-7'>
              <div className='flex justify-end'>
                <button
                  className='text-2xl rounded-tr-lg rounded-bl px-2 transition-colors hover:bg-black hover:text-white'
                  onClick={() => toggleModal(null)} 
                >
                  ×
                </button>
              </div>
              <h2 className='text-3xl font-medium mt-4'>
                {selectedProject.title}
              </h2>
              <hr className='my-4'/>
              <div className='text-black/70 leading-snug me-6 mb-10 md:mb-0'>
                { selectedProject.description.split('\n').map((par, index) =>
                  <p key={index}>{par}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};