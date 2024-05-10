import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-28 md:h-[92vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">About Our Email Services</h2>
          <p className="mt-4 text-lg text-gray-600">An email service  provides businesses with tools to send bulk emails and implement email marketing.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <svg className="h-12 w-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Send Emails</h3>
              <p className="mt-4 text-gray-600">Send emails to your customers, subscribers, or team members with ease.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <svg className="h-12 w-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 6.08v-.01a1 1 0 00-.29-.71l-3.5-3.5a1 1 0 00-1.42 0l-2.83 2.83a10 10 0 00-11.31 11.31l2.83-2.83a1 1 0 000-1.42l-3.5-3.5a1 1 0 00-.7-.29h-.01a1 1 0 00-.71.29l-3.5 3.5a1 1 0 000 1.42l2.83 2.83A10 10 0 006.15 20l-2.83 2.83a1 1 0 000 1.42l3.5 3.5a1 1 0 001.42 0l3.5-3.5a10 10 0 0011.31-11.31l-2.83 2.83a1 1 0 00-.29.71v.01a1 1 0 00.29.71l3.5 3.5a1 1 0 001.42 0l2.83-2.83a10 10 0 000-11.31l-2.83 2.83a1 1 0 00-.71.29zM12 14a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Receive Emails</h3>
              <p className="mt-4 text-gray-600">Receive and organize emails efficiently to stay on top of your communication.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
