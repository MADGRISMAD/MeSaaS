<template>
    <main class="main-content">
      <Header />
      <router-view />
    </main>
  </template>
  
  <script>
  import Header from './Header.vue';
  
  export default {
    name: 'MainContent',
    components: {
      Header,
    },
  }
  </script>
  
  <style scoped>
  .main-content {
    flex: 1; /* Toma el espacio restante */
    padding: 20px; /* Espaciado interno */
    display: flex;
    flex-direction: column;
    background-color: #1F1D2B; /* Ajuste del color de fondo */
    color: #E0E6ED; /* Color del texto */
  }
  </style>
  