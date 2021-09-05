import React from "react";

export const Filter = ({ value, onFilterChange }) => (
  <label>
    Find contatcs by Name
    <input type="text" value={value} onChange={onFilterChange} />
  </label>
);
