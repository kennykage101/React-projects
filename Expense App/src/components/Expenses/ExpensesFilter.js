import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({selected, onChangeFilter}) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value='2027'>2027</option>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
