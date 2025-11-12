import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Item from '../Item/Item';

const Items = ({ handleBookMark, handleMarkAssRead, bookmarked }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then(res => res.json())
      .then(data => setItems(data));
    // .then(data => console.log(data));
  }, [])
  // console.log(items);

  return (
    <div>
      <div className='all-items'>
        {
          items.map((item) => <Item key={item.id} item={item} handleBookMark={handleBookMark} handleMarkAssRead={handleMarkAssRead}
            bookmarked={bookmarked}></Item>)
        }
      </div>
    </div>
  );
};

export default Items;