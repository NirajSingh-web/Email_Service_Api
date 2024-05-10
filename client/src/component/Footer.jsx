import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2 sticky bottom-0 rounded-sm border border-t-8 border-[rgb(35,34,34)]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} | All rights reserved.
        </p>
        <p className="text-gray-700 text-sm">
          Niraj Singh | Full Stack Devloper | nirajsingh41412@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
