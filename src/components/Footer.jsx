import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hussaini Ahmed</h3>
            <p className="mb-4">Bridging the gap between data and location, I transform raw information into actionable intelligence. Whether it's analytics or mapping, I help you see the bigger picture. Let’s connect and create something impactful! </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              hussainiahmed222@gmail.com
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +2349031852400
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p>&copy; {new Date().getFullYear()} Hussaini Ahmed. All rights reserved.</p>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="w-full h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
    </footer>
  );
};

export default Footer;