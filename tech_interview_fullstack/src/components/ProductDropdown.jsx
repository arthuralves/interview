import React, { useState, useEffect } from 'react';

const ProductDropdown = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(() => console.log(products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div>
      <label htmlFor="product-select">Select a product: </label>
      <select
        id="product-select"
        value={selectedProduct}
        onChange={handleProductChange}
      >
        <option value="">--Please choose a product--</option>
        {products.map(({ productID, name }) => (
          <option key={productID} value={productID}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductDropdown;
