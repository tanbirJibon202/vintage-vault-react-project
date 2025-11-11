import React from 'react';

const Navbar = () => {
  return (
    <>

      <nav className="flex justify-around  items-center
 py-4 bg-white shadow">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className='text-primary'>Auction</span><span className="text-yellow-300">Gallery</span>
        </h1>

        {/* Menu */}
        <ul className="flex gap-20 text-sm font-semibold">
          <li><a className="hover:text-yellow-300">Home</a></li>
          <li><a className="hover:text-yellow-300">Auction</a></li>
          <li><a className="hover:text-yellow-300">Categories</a></li>
          <li><a className="hover:text-yellow-300">How it works</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-sm absolute -top-2 -right-2 bg-primary text-white">8</span>
          </div>


          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />
            </div>
          </div>
        </div>
      </nav>



    </>
  );
};

export default Navbar;