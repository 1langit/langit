import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export default function Contact() {
  return (
    <footer className='w-full h-96 flex flex-col justify-center items-center p-4 my-20' id='contact'>
      <div className='pb-14'>
          <p className='text-4xl font-bold inline border-b-4'>Get in touch</p>
      </div>
      <div className='md:flex items-center'>
        <a
          href='https://linkedin.com/in/langit-lintang-r'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center mt-2 text-blue-600 hover:text-blue-400 duration-200'
        >
          <FaLinkedin size={32} />
          <p className='ms-2'>Langit Lintang Radjendra</p>
        </a>
        <a
          href='mailto:langitlintangradjendra@gmail.com'
          target='_top'
          rel='noopener noreferrer'
          className='flex items-center md:ms-6 mt-2 text-gray-500 hover:text-gray-400 duration-200'
        >
            <IoMdMail size={32} />
            <p className='ms-2'>langitlintangradjendra@gmail.com</p>
        </a>
        <a
          href='https://github.com/1langit'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center md:ms-6 mt-2 hover:text-gray-500 duration-200'
        >
            <FaGithub size={32} />
            <p className='ms-2'>1langit</p>
        </a>
      </div>
    </footer>
  )
}