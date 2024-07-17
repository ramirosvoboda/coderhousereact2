import React from 'react';
import productsData from '../data/products.json';
import { useCart } from '../context/cartcontext';
import '../style/category.css';

const RodadosPage = () => {
  const { addToCart } = useCart();
  const rodadosProducts = productsData.filter(product => product.category === 'rodados');

  return (
    <div className="categories-container">
      <h1>Rodados</h1>
      <div className="category-items">
        {rodadosProducts.map(product => (
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

export default RodadosPage;
