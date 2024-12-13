import React from 'react';
import people from '@/assets/people.png';

function Contact() {
  return (
    <div className='min-w-screen-2xl min-h-screen 
      bg-black text-white 
      flex flex-col sm:flex-row 
      justify-center items-center 
      py-10 sm:py-0
      2xl:px-20 xl:px-16 lg:px-12 md:px-8 sm:px-4'>
      <div className='
        w-full sm:w-[45vw] 
        h-[50vh] sm:h-[70vh] 
        sm:ml-10 
        mb-8 sm:mb-0
        flex justify-center items-center'>
        <img 
          src={people} 
          alt="people" 
          className='w-full h-full object-cover max-w-[600px]'
        />
      </div>
      <div className='
        w-full sm:w-[45vw] 
        sm:h-[63vh] 
        sm:ml-5 
        p-4 sm:p-6 
        flex flex-col justify-center'>
        <h1 className='
          text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 
          font-bold 
          sm:ml-2 ml-0 
          mb-4 text-center sm:text-left'>
          Get Started
        </h1>
        <h2 className='
          text-sm sm:text-xl lg:text-2xl xl:text-2xl 
          sm:ml-4 ml-0 
          mb-6 
          text-center sm:text-left'>
          Sign up to access our data analytics courses and resources.
        </h2>
        
        <form className='space-y-4 w-full max-w-[500px] mx-auto sm:mx-0'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-white sm:ml-2 ml-0'>Name</label>
            <input
              type='text'
              id='name'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-white sm:ml-2 ml-0'>Email</label>
            <input
              type='email'
              id='email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm'
              placeholder='Your Email'
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-white sm:ml-2 ml-0'>Message</label>
            <textarea
              id='message'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm'
              placeholder='Your Message'
              rows='4'
              required
            />
          </div>
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
            <button
              type='button'
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Submit
            </button>
            <button
              type='submit'
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;