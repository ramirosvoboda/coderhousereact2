import React from 'react';
import productsData from '../data/products.json';
import { useCart } from '../context/cartcontext';
import '../style/category.css';

const ComputacionPage = () => {
  const { addToCart } = useCart();
  const computacionProducts = productsData.filter(product => product.category === 'computacion');

  return (
    <div className="categories-container">
      <h1>Computación</h1>
      <div className="category-items">
        {computacionProducts.map(product => (
          <div key={product.id} className="category-card">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p className="description">{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputacionPage;
