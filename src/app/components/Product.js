import React from 'react';

const Product = ({ catalog, isFetching }) => (
  <div className="products-container">
    {isFetching === false ? catalog.data.map((product, i) => {
      return (
        <div key={i} className="product-item">
        <img alt="" src={`http://localhost:3000/images/${product.attributes.category}.jpg`} className="product-image" />
          <div className="product-title">{product.attributes.name}</div>
          <div className="product-price">${product.attributes.price / 100}</div>
          <div className="product-stock">Under sale: <span className="product-stock-value">{product.attributes.under_sale === true ? 'true' : 'false'}</span></div>
        </div>
      );
    }) : null}
  </div>
);

export default Product;
