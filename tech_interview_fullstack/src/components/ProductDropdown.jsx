import React, { useState, useEffect } from 'react';

const ProductDropdown = ({ profileId, setRecommendation }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleProductChange = async (event) => {
    const productId = event.target.value;
    setSelectedProduct(productId);
    if (profileId && productId) {
      try {
        const response = await fetch(`http://localhost:3000/recommendation?productId=${productId}&profileId=${profileId}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          console.log(data.recommendation.size_recommendations.good_matches[0].garment.size);
          setRecommendation({
            productName: data.recommendation.customer.product_id,
            size: data.recommendation.size_recommendations.good_matches[0].garment.size});
        } else {
          console.error('Failed to get recommendation');
        }
      } catch (error) {
        console.error('Error fetching recommendation:', error);
      }
    }
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