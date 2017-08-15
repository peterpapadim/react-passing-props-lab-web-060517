import React from 'react';

const Filter = (props) =>
  <div>
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  </div>


Filter.defaultProps = {
  handleChange: [],
  filters: [],
};

export default Filter;
