import React, { useState } from "react";
import { menuItemsData } from "../../Api/MenuItemsData";
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderMenuItems = (items) => {
    return (
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        {items.map((item, index) => (
          <li key={index} className="relative group">
            <Link to={item.url || '#'} className="hover:underline">
              {item.title}
            </Link>
            {item.submenu && item.submenu.length > 0 && (
              <ul className="absolute left-0 top-full hidden group-hover:block bg-blue-900 text-white p-2 mt-2">
                {renderMenuItems(item.submenu)}
              </ul>
            )}
            {item.submenu1 && item.submenu1.length > 0 && (
              <ul className="absolute left-full top-0 hidden group-hover:block bg-blue-700 text-white p-2 mt-2 ml-2">
                {renderMenuItems(item.submenu1)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 bg-blue-900 text-white">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h2 className="text-2xl font-bold">Exchange</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} sm:flex justify-center items-center mt-4 sm:mt-0`}>
        {renderMenuItems(menuItemsData)}
      </div>
      <div className="hidden sm:block">
        <Link to="/login">
          <button className="shadow-xl bg-white text-blue-900 px-4 py-2 rounded">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
