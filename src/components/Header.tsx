import React from "react";

const Header: React.FC = () => {
  return (
    <div className="navbar fixed top-0 bg-base-100 shadow-sm z-50">
      <div className="navbar-start">
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
