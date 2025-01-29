import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';  // Using react-icons for social media icons

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 via-gray-900 to-black text-white py-6 mt-10">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <div className="flex space-x-8 mb-4">
            {/* Social Media Icons */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Follow us on social media to stay updated.
          </p>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <div className="text-sm">
            <p>© {new Date().getFullYear()} Coding Heroes. All rights reserved.</p>
          </div>
          <div className="text-sm text-gray-400">
            <p>123 Your Street, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
