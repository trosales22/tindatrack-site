import React from "react";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="navbar fixed top-0 bg-base-100 shadow-sm z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <Menu className="w-6 h-6" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center flex items-center gap-2">
        <img src="/images/app-logo.jpeg" alt="TindaTrack Logo" className="w-8 h-8" />
        <a className="btn btn-ghost text-xl">TindaTrack</a>
      </div>

      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Header;
