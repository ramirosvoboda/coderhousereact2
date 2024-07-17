import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import '../style/productspage.css';
import { useCart } from '../context/cartcontext';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="container">
      <h1>Products Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
