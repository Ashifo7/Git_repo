import React, { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice Coding" },
    { id: 2, checked: true, item: "Read a Book" },
    { id: 3, checked: true, item: "Exercise" },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked={item.checked} readOnly />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
