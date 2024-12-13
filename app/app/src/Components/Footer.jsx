import React from 'react';
import { Link } from 'react-router-dom';
import footer from '@/assets/footer.png';
import twitter from '@/assets/twitter.png';
import fb from '@/assets/fb.png';
import insta from '@/assets/insta.png';
import linkedin from '@/assets/linkedin.png';

function Footer() {
  const links = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: "FAQ's", path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Terms and Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <div className="relative max-w-screen-2xl min-h-[60vh] sm:min-h-[40vh] bg-black">
      <div className="w-full h-[60vh] sm:h-[40vh] opacity-50">
        <img src={footer} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <div className="flex flex-col sm:flex-row items-center w-full justify-between">
          {/* Logo */}
          <div className="w-[5rem] sm:w-20 h-[5rem] sm:h-20 text-white rounded-full 
            flex items-center justify-center 
            mb-4 sm:mb-0 sm:ml-10">
            <h1 className="text-2xl">Datasense</h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row space-x-4 mb-4 sm:mb-0 sm:mr-10">
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10">
              <img src={twitter} alt="Twitter" className="w-full h-full" />
            </a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10">
              <img src={fb} alt="Facebook" className="w-full h-full" />
            </a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10">
              <img src={linkedin} alt="LinkedIn" className="w-full h-full" />
            </a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10">
              <img src={insta} alt="Instagram" className="w-full h-full" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full text-white flex flex-wrap justify-center sm:justify-center 
          gap-4 sm:gap-6 mt-6 
          text-sm sm:text-base 
          text-center sm:text-left 
          px-4">
          {links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="hover:text-green-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;