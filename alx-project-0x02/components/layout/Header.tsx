import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <a href="/">StayEase</a>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
