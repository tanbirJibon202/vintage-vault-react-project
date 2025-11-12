import React from 'react';

const Footer = () => {
  return (
    <div className="w-full py-10 text-center bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-2">
          <span className="text-xl font-medium text-blue-600">Auction</span>
          <span className="text-xl font-medium text-auction-gold text-yellow-300">Gallery</span>
        </div>

        <p className="text-sm text-gray-700 mb-6">
          Bid. Win. Own.
        </p>

        <nav className="flex justify-center space-x-6 text-sm font-normal text-gray-700 mb-6">
          <a href="#" class="hover:text-yellow-200">Home</a>
          <a href="#" class="hover:text-yellow-200">Auctions</a>
          <a href="#" class="hover:text-yellow-200">Categories</a>
          <a href="#" class="hover:text-yellow-200">How to works</a>
        </nav>

        <p className="text-xs text-gray-500">
          &copy; 2025 AuctionHub. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Footer;