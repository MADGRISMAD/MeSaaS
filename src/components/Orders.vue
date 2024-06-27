<template>
    <aside class="orders-sidebar">
      <header class="orders-header">
        <h2 class="orders-title">Orders #34562</h2>
        <nav class="orders-nav">
          <button class="orders-button active">Dine In</button>
          <button class="orders-button">To Go</button>
          <button class="orders-button">Delivery</button>
        </nav>
      </header>
      <section class="orders-section">
        <!-- Contenido de pedidos aquí -->
      </section>
      <footer class="orders-footer">
        <div class="orders-summary">
          <div class="orders-summary-item">
            <p class="orders-summary-label">Discount</p>
            <p class="orders-summary-value">$0</p>
          </div>
          <div class="orders-summary-item">
            <p class="orders-summary-label">Sub total</p>
            <p class="orders-summary-value">$21.03</p>
          </div>
        </div>
        <button class="orders-button-primary">Continue to Payment</button>
      </footer>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Orders',
  }
  </script>
  
  <style scoped>
  .orders-sidebar {
    width: 320px; /* Ancho del sidebar */
    background-color: #2D303E; /* Color de fondo del sidebar */
    padding: 20px; /* Espaciado interno */
    color: #E0E6ED; /* Color del texto */
  }
  
  .orders-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .orders-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .orders-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .orders-button {
    background-color: #2D303E;
    color: #8A8D93;
    border: none;
    padding: 10px 20px;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .orders-button.active {
    background-color: #EB966A;
    color: #FFFFFF;
  }
  
  .orders-section {
    margin-top: 20px;
  }
  
  .orders-footer {
    margin-top: 20px;
  }
  
  .orders-summary {
    display: flex;
    flex-direction: column;
  }
  
  .orders-summary-item {
    display: flex;
    justify-content: space-between;
  }
  
  .orders-summary-label {
    color: #8A8D93;
  }
  
  .orders-button-primary {
    background-color: #EB966A;
    color: #FFFFFF;
    border: none;
    padding: 12px 0;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .orders-button-primary:hover {
    background-color: #FFA981;
  }
  </style>
  