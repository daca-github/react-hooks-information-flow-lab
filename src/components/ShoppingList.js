import React, { useState } from 'react';
import Item from './Item';
import Filter from './Filter';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const categories = ['', 'Produce', 'Dairy', 'Dessert'];

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === '') return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
