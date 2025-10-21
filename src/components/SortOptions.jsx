import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { getCategories } from '../App';


const SortOptions = ({ sortType, setSortType, selectedCategory, setSelectedCategory }) => {
  const { t, i18n } = useTranslation();
  const categories = getCategories(t);

  const sortOptionList = [
    { id: "MostRecent", label: t('SortPlace.recentButton') },
    { id: "Category", label: t('SortPlace.categoriesButton') },
  ];

  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  return (
    <div className="sortingPlace">
      {sortOptionList.map((option) => (
        <button
          key={option.id}
          className={`sortButton ${sortType === option.id  ? "active" : ""}`}
          onClick={() => { 
            if (option.id === "Category" ) {
              setIsDropDownOpen(!isDropDownOpen);
              setSortType(option.id);
            } else {
              setSortType(option.id);
              setIsDropDownOpen(false);
              setSelectedCategory(null); // limpa o filtro de categoria
            }
          }}
          aria-pressed={sortType === option.id}
        >
          {option.label}
        </button>
      ))}

      {isDropDownOpen && (
  <div className={`categoryDropdown ${isDropDownOpen ? 'open' : ''}`}>
    {categories.map((cat) => (
      <button
        key={cat.value}
        className={`categoryButton ${
          selectedCategory === cat.value ? "active" : ""
        }`}
        onClick={() => setSelectedCategory(cat.value)}
      >
        {cat.label}
      </button>
    ))}
  </div>
)}
    </div>
  );
};

export default SortOptions;