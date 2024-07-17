import React from 'react';
import productsData from '../data/products.json';
import { useCart } from '../context/cartcontext';
import '../style/category.css';

const MaderaPage = () => {
  const { addToCart } = useCart();
  const maderaProducts = productsData.filter(product => product.category === 'madera');

  return (
    <div className="categories-container">
      <h1>Madera</h1>
      <div className="category-items">
        {maderaProducts.map(product => (
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

export default MaderaPage;
