import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const Item = ({ item, handleBookMark, handleMarkAssRead, bookmarked }) => {
  const [showToast, setShowToast] = useState(false);


  const isBookmarked = bookmarked.some((fav) => fav.id === item.id);

  const handleClick = () => {
    if (!isBookmarked) {
      handleBookMark(item);
      handleMarkAssRead(item.current_bid);


      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    }
  };

  return (
    <>

      <div className="flex items-center py-2 hover:bg-gray-50 transition duration-150 rounded border-b border-gray-200">
        <div className="w-1/2 flex items-center">
          <img
            src={item.photo}

            className="w-24 h-24 object-cover rounded mr-3"
          />
          <span className="text-base font-medium text-gray-700">
            {item.name}
          </span>
        </div>

        <div className="w-1/6 text-sm text-gray-700 text-left">
          {item.current_bid}
        </div>
        <div className="w-1/6 text-sm text-gray-700 text-left">
          {item.time_left}
        </div>


        <div className="w-1/4 flex justify-center">
          <button
            onClick={handleClick}
            disabled={isBookmarked}
            className={`transition duration-150 ${isBookmarked
              ? "text-red-500 cursor-not-allowed"
              : "text-gray-400 hover:text-yellow-500 cursor-pointer"
              }`}
          >
            {isBookmarked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
          </button>
        </div>
      </div>


      {showToast && (
        <div className="fixed inset-x-0 top-0 flex items-end justify-end px-4 py-6 ">
          <div className="max-w-sm w-full shadow-lg rounded px-4 py-3 relative bg-[rgba(0,255,0,0.82)] text-white">
            <div className="p-2">
              <div className="flex items-start">
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-base opacity-80">
                    Item Added to your Favorite List
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
};

export default Item;
