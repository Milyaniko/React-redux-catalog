import React from 'react'

const FilterPrices = ({ filterByPrice }) => (
            <div>   
                <ul >
                    <li><a onClick={() => { filterByPrice('') }}>All</a></li>
                    <li><a onClick={() => { filterByPrice(2000) }}>Under 20$</a></li>
                    <li><a onClick={() => { filterByPrice(5000) }}>Under 50$</a></li>
                    <li><a onClick={() => { filterByPrice(8000) }}>Under 80$</a></li>
                </ul>
            </div>
)

export default FilterPrices;
