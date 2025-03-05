import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  // Estado para manejar los productos ingresados
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // Función para agregar un producto
  const addProduct = () => {
    if (productId && productName && quantity && price) {
      const newProduct = {
        id: productId,
        name: productName,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      };
      setProducts([...products, newProduct]);
      // Limpiar los campos del formulario
      setProductId('');
      setProductName('');
      setQuantity('');
      setPrice('');
    }
  };

  // Calcular el total
  const total = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

  return (
    <div className="main-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Vault 4 POS</h2>
        <button className="sidebar-button">Cobro</button>
        <button className="sidebar-button">Entradas</button>
        <button className="sidebar-button">Salidas</button>
        <button className="sidebar-button">Facturación</button>
        <button className="sidebar-button">Inventario</button>
        <button className="sidebar-button">Usuario</button>
        <div className="contact-info">
          <p>Contactanos:</p>
          <p>soporte@vault4pos.com</p>
        </div>
      </aside>

      {/* Área principal */}
      <main className="content">
        <h1>Punto de Venta</h1>

        {/* Formulario para ingresar productos */}
        <div className="product-form">
          <input
            type="text"
            placeholder="ID Producto"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={addProduct}>Agregar Producto</button>
        </div>

        {/* Tabla de productos */}
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${(product.quantity * product.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="total">
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
      </main>
    </div>
  );
};

export default MainPage;