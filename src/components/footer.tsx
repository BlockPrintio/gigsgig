import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold text-green-500">
            GigsGig<span className="text-white">App</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Connecting students for quick, reliable, and affordable campus tasks.
          </p>
        </div>

        {/* Discover */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Discover</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition-colors">Become a Tasker</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Campus Communities</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Legal</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Community Guidelines</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} <strong>GigsGig</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
