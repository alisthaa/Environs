import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const PagesDropdown = () => {
  return (
    <div className="relative group">
      <div  className="flex items-center cursor-pointer gap-2 text-[#0000008c] hover:text-primary transition-all duration-200">
        Pages <FaChevronDown />
      </div>
      <div className="hidden absolute bg-hover py-4 h-[185px] w-44 group-hover:block ">
        <Link to="blog" className="block px-2 py-1 text-gray-800 hover:bg-opacity-15 hover:bg-primary hover:text-primary">Blog</Link>
        <Link to="gallery" className="block px-2 py-1 text-gray-800 hover:bg-opacity-15 hover:bg-primary hover:text-primary">Gallery</Link>
        <Link to="volunteers" className="block px-2 py-1 text-gray-800 hover:bg-opacity-15 hover:bg-primary hover:text-primary">Volunteers</Link>
        <Link to="donation" className="block px-2 py-1 text-gray-800 hover:bg-opacity-15 hover:bg-primary hover:text-primary">Donation</Link>
        <Link to="404" className="block px-2 py-1 text-gray-800 hover:bg-opacity-15 hover:bg-primary hover:text-primary">404 Error</Link>
      </div>
    </div>
  );
};

export default PagesDropdown;
