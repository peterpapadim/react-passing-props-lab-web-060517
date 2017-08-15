import React from 'react';

const FilteredFruitList = (props) =>
    <div>
      <ul className="fruit-list">
        {props.list().map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    </div>

export default FilteredFruitList;
