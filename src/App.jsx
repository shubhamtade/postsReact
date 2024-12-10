import React, { useEffect, useState } from 'react';

const App = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProductData(data.products);
        console.log(data.products); // Log the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 bg-slate-100">
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productData.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            <p className="text-sm text-gray-500">Brand: {product.brand}</p>
            <p className="text-sm text-gray-500">Rating: {product.rating}⭐</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.tags && product.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-200 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">${product.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
