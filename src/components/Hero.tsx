import React from 'react';

const Hero: React.FC = () => {
  const portalUrl = import.meta.env.VITE_PORTAL_URL;

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/images/hero-banner.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to TindaTrack</h1>
          <p className="mb-5 text-lg">
            TindaTrack helps small businesses track inventory & sales—so you can spend less time
            guessing and more time growing.
          </p>
          <p className="mb-5 text-sm text-gray-200">
            Smart, easy-to-use, and built with the Filipino entrepreneur in mind.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              window.open(`${portalUrl}/login`, '_blank');
            }}
          >
            Start Managing Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
