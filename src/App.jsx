import './App.css'
import Navbar from './components/Navbar/Navbar'
import Items from './components/Items/Items'
import HeroSection from './components/HeroSection/HeroSection'
import { FaRegHeart } from "react-icons/fa6";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";


function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0)

  const handleBookMark = (item) => {
    // console.log(item);
    // console.log("Hello World");
    // console.log(item)
    setBookmarked([...bookmarked, item]);

  }
  // console.log(bookmarked)


  // const handleMarkAssRead = (amount) => {
  //   // console.log("Hello World");
  //   // console.log(time);
  //   const totalAmount = readingCount + amount
  //   setReadingCount(totalAmount);
  // }

  const handleMarkAssRead = (amount) => {
    // Take out everything that isn’t a number ($ or commas)
    const cleanAmount = amount.replace("$", "").replace(",", "").trim();

    // Turn it into a number
    const number = parseInt(cleanAmount);

    // Add it to your total
    setReadingCount(readingCount + number);

  };

  // const handleDeleteItem = (id) => {
  //   console.log("Hello World");

  //  
  // }




  return (
    <>
      <Navbar />
      <HeroSection />


      <div className="py-6 px-10 bg-gray-50 min-h-screen md:pl-16 lg:pl-32">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-gray-800">Active Auctions</h2>
          <p className="text-sm text-gray-500 mb-6">Discover and bid on extraordinary items</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          {/* Active Auctions Section (2/3 width on desktop) */}
          <div className="md:col-span-2 bg-white rounded-lg shadow p-5 border-t border-gray-500">
            {/* Table Header */}
            <div className="flex items-center text-xs font-semibold text-gray-500 border-b border-gray-200 pb-2 mb-2">
              <div className="w-1/2">Items</div>
              <div className="w-1/6 text-left">Current Bid</div>
              <div className="w-1/6 text-left">Time Left</div>
              <div className="w-1/4 text-center">Bid Now</div>
            </div>

            {/* Auction Item List */}
            <div className="space-y-2">

              {/* Item 1: Vintage Leica M3 Camera */}

              <Items handleBookMark={handleBookMark} handleMarkAssRead={handleMarkAssRead}></Items>

              {/* Item 2: 1965 Gibson SG Standard Electric Guitar */}


              {/* Item 3: Original Apple Macintosh 128K */}


              {/* Item 4: Rolex Submariner '6610' */}


              {/* Item 5: First Edition 'The Great Gatsby' */}

              {/* Item 6: Mid-Century Modern Kannes Lounge Chair */}


              {/* Item 7: Konkav Original Korean Point */}

            </div>
          </div>



          {/* Favorite Items Section (1/3 width on desktop) */}
          <div className="md:col-span-1 bg-white rounded-lg shadow p-5 h-fit w-96 border-t border-gray-500 ">

            <div className=" border-b border-gray-200 justify-items-center">
              <div className='flex gap-2'>
                <FaRegHeart size={25} />
                <h2 className="text-xl font-semibold text-gray-800 ">Favorite Items</h2>
              </div>
            </div>

            {/* No Favorites Yet Message */}
            <div className="text-center py-10 px-4 ">
              <p className="text-lg font-medium text-gray-700 mb-2">No favorites yet</p>
              <p className="text-sm text-gray-500">Click the heart icon on any item to add it to your favorites</p>
            </div>
            <div className='border-b border-gray-200'>

              <div className='space-y-4'>
                {
                  bookmarked.map((marked) =>
                    <div className="flex items-center justify-between border rounded-md p-2 hover:bg-gray-50 transition ">
                      {/* Left side: image + info */}
                      <div className="flex items-center space-x-3 overflow-hidden ">
                        <img
                          src={marked.photo}

                          className="w-14 h-14 object-cover rounded-md"
                        />
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium text-gray-800 truncate w-40">{marked.name}</p>
                          <div className="text-xs text-gray-500 flex space-x-4 mt-1">
                            <span>{marked.current_bid}</span>
                            {/* <span>Bids: {}</span> */}
                          </div>
                        </div>
                      </div>

                      {/* Remove button */}
                      <button
                        className=" hover:text-red-500 transition">
                        <RxCross1 size={16} />
                      </button>
                    </div>)

                }
              </div>

            </div>
            {/* Total Bids Amount Footer */}


            <div className="flex justify-between items-center pt-4 ">
              <span className="text-base font-medium text-gray-700">Total bids Amount</span>
              <span className="text-xl font-bold text-gray-800">$       {readingCount}</span>
            </div>
          </div>


        </div>


      </div >


    </>
  )
}

export default App
