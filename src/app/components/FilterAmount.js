import React from 'react'

const FilterAmount = ({ fetchData }) => (
    <div className="dropdown">
        <p>View</p>
        <input className="dropdown-toggle" type="text" />
        <div className="dropdown-text">Products per page</div>
        <ul className="dropdown-content">
            <li><a onClick={() => { fetchData(15) }}>15</a></li>
            <li> <a onClick={() => { fetchData(20) }}>20</a></li>
            <li><a onClick={() => { fetchData(30) }}>30</a></li>
        </ul>
    </div>
);

export default FilterAmount;
