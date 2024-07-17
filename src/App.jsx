import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartcontext'; // Importa el proveedor
import Navbar from './components/Navbar';
import Home from './pages/home';
import ProductsPage from './pages/productspage';
import CartPage from './pages/cartpage';
import MaderaPage from './pages/madera'; // Asegúrate de que esta ruta sea correcta
import RodadosPage from './pages/rodados'; // Asegúrate de que esta ruta sea correcta
import ComputacionPage from './pages/computacion'; // Asegúrate de que esta ruta sea correcta

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/categoria/madera" element={<MaderaPage />} />
          <Route path="/categoria/rodados" element={<RodadosPage />} />
          <Route path="/categoria/computacion" element={<ComputacionPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
