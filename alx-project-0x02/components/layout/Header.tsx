import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">StayEase</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
