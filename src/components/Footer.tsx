import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">TindaTrack</h2>
          <p className="text-sm">
            Built with the Filipino entrepreneur in mind. Effortless sales and inventory tracking.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-title">Features</h3>
          <ul className="text-sm space-y-1">
            <li><a className="link link-hover">Sales Logging</a></li>
            <li><a className="link link-hover">Inventory Tracker</a></li>
            <li><a className="link link-hover">Profit/Loss Summary</a></li>
            <li><a className="link link-hover">Multiple Businesses</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Support</h3>
          <ul className="text-sm space-y-1">
            <li><a className="link link-hover">Help Center</a></li>
            <li><a className="link link-hover">FAQs</a></li>
            <li><a className="link link-hover">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-title">Stay Connected</h3>
          <div className="flex space-x-4 mt-2">
            <a className="btn btn-sm btn-circle btn-ghost" aria-label="Facebook"><Facebook size={18} /></a>
            <a className="btn btn-sm btn-circle btn-ghost" aria-label="Twitter"><Twitter size={18} /></a>
            <a className="btn btn-sm btn-circle btn-ghost" aria-label="Instagram"><Instagram size={18} /></a>
            <a className="btn btn-sm btn-circle btn-ghost" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TindaTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
