
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Items from './components/Items/Items'
import HeroSection from './components/HeroSection/HeroSection'
import { FaRegHeart } from "react-icons/fa6";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import Footer from './components/Footer/Footer';

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleBookMark = (item) => {
    setBookmarked([...bookmarked, item]);
  };

  const handleMarkAssRead = (amount) => {
    const cleanAmount = amount.replace("$", "").replace(",", "").trim();
    const number = parseInt(cleanAmount);
    setReadingCount(readingCount + number);
  };

  const handleDeleteItem = (id) => {
    const itemToDelete = bookmarked.find((item) => item.id === id);
    const remaining = bookmarked.filter((item) => item.id !== id);
    setBookmarked(remaining);

    if (itemToDelete) {
      const cleanAmount = itemToDelete.current_bid.replace("$", "").replace(",", "").trim();
      const number = parseInt(cleanAmount);
      setReadingCount((prevCount) => prevCount - number);
    }


    setToastMessage("Item removed successfully!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="py-6 px-10 bg-gray-50 min-h-screen md:pl-16 lg:pl-32">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-gray-800">Active Auctions</h2>
          <p className="text-sm text-gray-500 mb-6">Discover and bid on extraordinary items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          <div className="md:col-span-2 bg-white rounded-lg shadow p-5 border-t border-gray-500">
            <div className="flex items-center text-xs font-semibold text-gray-500 border-b border-gray-200 pb-2 mb-2">
              <div className="w-1/2">Items</div>
              <div className="w-1/6 text-left">Current Bid</div>
              <div className="w-1/6 text-left">Time Left</div>
              <div className="w-1/4 text-center">Bid Now</div>
            </div>

            <div className="space-y-2">
              <Items
                handleBookMark={handleBookMark}
                handleMarkAssRead={handleMarkAssRead}
                bookmarked={bookmarked}
              />
            </div>
          </div>


          <div className=" md:col-span-1 bg-white rounded-lg shadow p-5 h-fit w-80 border-t border-gray-500">
            <div className="border-b border-gray-200 items-center justify-items-center">
              <div className='flex gap-2 justify-center '>
                <FaRegHeart size={20} />
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Favorite Items
                </h2>
              </div>
            </div>


            <div className="border-b border-gray-200">
              <div className="space-y-4 mt-4">
                {bookmarked.length === 0 ? (
                  <div className="text-center py-10 px-4">
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      No favorites yet
                    </p>
                    <p className="text-sm text-gray-500">
                      Click the heart icon on any item to add it to your favorites
                    </p>
                  </div>
                ) : (
                  bookmarked.map((marked) => (
                    <div
                      key={marked.id}
                      className="flex items-center justify-between border rounded-md p-2 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <img
                          src={marked.photo}
                          className="w-14 h-14 object-cover rounded-md"
                        />
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium text-gray-800 truncate w-40">
                            {marked.name}
                          </p>
                          <div className="text-xs text-gray-500 flex space-x-4 mt-1">
                            <span>{marked.current_bid}</span>
                          </div>
                        </div>
                      </div>


                      <button
                        onClick={() => handleDeleteItem(marked.id)}
                        className="hover:text-red-500 transition"
                      >
                        <RxCross1 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>


            <div className="flex justify-between items-center pt-4">
              <span className="text-base font-medium text-gray-700">
                Total bids Amount
              </span>
              <span className="text-xl font-bold text-gray-800">
                ${readingCount}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showToast && (
        <div className="fixed inset-x-0 top-0 flex items-end justify-end px-4 py-6">
          <div className="max-w-sm w-full shadow-lg rounded px-4 py-3 relative bg-[rgba(251,255,0,0.87)]   text-white">
            <div className="p-2">
              <div className="flex items-start">
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm leading-5 font-medium">
                    {toastMessage || "Success"}
                  </p>
                </div>
                <div className="ml-4  flex">
                  <button
                    onClick={() => setShowToast(false)}
                    className="inline-flex text-white hover:text-gray-200 transition ease-in-out duration-150"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
