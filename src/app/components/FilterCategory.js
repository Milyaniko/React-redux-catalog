import React from 'react';
import { BRUSHES, TOOLS, MARKUP } from '../utils/ActionTypes';

const FilterCategory = ({ filterByCategory }) => (
      <div>
        <ul >
          <li><input  type="checkbox" onClick={() => { filterByCategory ("") }}></input>All</li>
          <li><input  type="checkbox" onClick={() => { filterByCategory (BRUSHES) }}></input>Brushes</li>
          <li><input  type="checkbox" onClick={() => { filterByCategory (TOOLS) }}></input>Tools</li>
          <li><input  type="checkbox" onClick={() => { filterByCategory (MARKUP) }}></input>Markup</li>
        </ul>
      </div>
    )
    
    export default FilterCategory; 
