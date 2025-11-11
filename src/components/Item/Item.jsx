import React from 'react';
import { FaRegHeart } from "react-icons/fa6";

const Item = ({ item, handleBookMark, handleMarkAssRead }) => {
  // console.log(handleBookMark);

  return (

    <div className="flex items-center py-2 hover:bg-gray-50 transition duration-150 rounded border-b border-gray-200">
      <div className="w-1/2 flex items-center">
        <img src={item.photo} className="w-24 h-24 object-cover rounded mr-3" />
        <span className="text-base font-medium text-gray-700">{item.name}</span>
      </div>
      <div className="w-1/6 text-sm text-gray-700 text-left">{item.current_bid}</div>
      <div className="w-1/6 text-sm text-gray-700 text-left">{item.time_left}</div>
      <div className="w-1/4 flex justify-center">
        <button
          onClick={() => {
            handleBookMark(item);
            handleMarkAssRead(item.current_bid);

          }}
          className="text-gray-400 hover:text-yellow-500 transition duration-150"
        >
          <FaRegHeart size={25} />
        </button>

      </div>
    </div >





  );
};

export default Item;
