import React from 'react';
import { Utensils, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-orange-500 font-extrabold text-2xl">
            <div className="bg-orange-500 text-white p-2 rounded-xl">
              <Utensils className="w-5 h-5" />
            </div>
            <span>TastyDash</span>
          </div>
          <p className="text-sm text-gray-400">
            Delivering hot, chef-prepared meals straight to your doorstep in minutes. Quality taste, guaranteed satisfaction.
          </p>
          <div className="flex space-x-4 text-gray-400">
            {/* Social Icons (Inline SVGs) */}
            <a href="#" className="hover:text-orange-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.885V8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Menu & Categories</a></li>
            <li><a href="#" className="hover:text-white transition">Special Offers</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 11:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 12:00 AM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span className="text-white">9:00 AM - 10:00 PM</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>123 Culinary St, Food City</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+1 (555) 019-2834</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-orange-500" />
              <span>support@tastydash.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} TastyDash Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for food lovers everywhere.
        </p>
      </div>
    </footer>
  );
}