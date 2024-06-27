<template>
    <aside class="sidebar">
      <img src="https://placehold.co/40x40" alt="restaurant-logo" class="logo" />
  
      <nav class="navigation">
        <!-- Enlaces de navegación con estilos dinámicos -->
        <router-link to="/" class="sidebar-link" :class="{ 'sidebar-active': $route.path === '/' }">
          <div class="sidebar-icon-wrapper">
            <div class="sidebar-background-square"></div> <!-- Cuadrado de fondo -->
            <div v-if="$route.path === '/'" class="sidebar-inner-square"></div> <!-- Cuadrado interno -->
            <font-awesome-icon :icon="['fas', 'home']" class="sidebar-icon" />
          </div>
          <div class="sidebar-overlay"></div> <!-- Overlay para efecto oscuro -->
        </router-link>
        <router-link to="/menu" class="sidebar-link" :class="{ 'sidebar-active': $route.path === '/menu' }">
          <div class="sidebar-icon-wrapper">
            <div class="sidebar-background-square"></div> <!-- Cuadrado de fondo -->
            <div v-if="$route.path === '/menu'" class="sidebar-inner-square"></div> <!-- Cuadrado interno -->
            <font-awesome-icon :icon="['fas', 'utensils']" class="sidebar-icon" />
          </div>
          <div class="sidebar-overlay"></div> <!-- Overlay para efecto oscuro -->
        </router-link>
        <router-link to="/messages" class="sidebar-link" :class="{ 'sidebar-active': $route.path === '/messages' }">
          <div class="sidebar-icon-wrapper">
            <div class="sidebar-background-square"></div> <!-- Cuadrado de fondo -->
            <div v-if="$route.path === '/messages'" class="sidebar-inner-square"></div> <!-- Cuadrado interno -->
            <font-awesome-icon :icon="['fas', 'envelope']" class="sidebar-icon" />
          </div>
          <div class="sidebar-overlay"></div> <!-- Overlay para efecto oscuro -->
        </router-link>
        <router-link to="/settings" class="sidebar-link" :class="{ 'sidebar-active': $route.path === '/settings' }">
          <div class="sidebar-icon-wrapper">
            <div class="sidebar-background-square"></div> <!-- Cuadrado de fondo -->
            <div v-if="$route.path === '/settings'" class="sidebar-inner-square"></div> <!-- Cuadrado interno -->
            <font-awesome-icon :icon="['fas', 'cog']" class="sidebar-icon" />
          </div>
          <div class="sidebar-overlay"></div> <!-- Overlay para efecto oscuro -->
        </router-link>
      </nav>
  
      <router-link to="/logout" class="sidebar-link logout-link" :class="{ 'sidebar-active': $route.path === '/logout' }">
        <div class="sidebar-icon-wrapper">
          <div class="sidebar-background-square"></div> <!-- Cuadrado de fondo -->
          <div v-if="$route.path === '/logout'" class="sidebar-inner-square"></div> <!-- Cuadrado interno -->
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="sidebar-icon" />
        </div>
        <div class="sidebar-overlay"></div> <!-- Overlay para efecto oscuro -->
      </router-link>
  
      <!-- Barra de búsqueda -->
      <div class="search-wrapper">
        <input type="text" placeholder="Buscar..." class="search-input" />
        <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
      </div>
    </aside>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faHome, faUtensils, faEnvelope, faCog, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    mounted() {
      // Agrega los iconos a la biblioteca de Font Awesome
      this.$options.icon = { faHome, faUtensils, faEnvelope, faCog, faSignOutAlt, faSearch };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 100px;
    height: 100vh;
    background-color: #2D303E; /* Color de fondo del sidebar */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
  
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto; /* Empuja el enlace de logout hacia abajo */
  }
  
  .sidebar-link {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* Para posicionar los elementos internos */
    width: 80px;
    height: 80px;
    background-color: transparent;
    color: #EB966A; /* Color por defecto del ícono */
    border-radius: 10px; /* Bordes redondeados */
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-bottom: 10px; /* Espacio entre los enlaces */
    overflow: hidden; /* Para ocultar el overflow del cuadrado interno */
  }
  
  .sidebar-link:hover,
  .sidebar-active {
    background-color: #1F1D2B; /* Color de fondo al activar el enlace */
    color: #FFFFFF; /* Color del ícono al activar el enlace */
  }
  
  .sidebar-icon-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sidebar-icon {
    font-size: 1.5rem;
    z-index: 1; /* Asegura que el ícono esté sobre los cuadrados */
  }
  
  .sidebar-inner-square {
    position: absolute;
    width: 50px; /* Tamaño más grande que el cuadrado exterior */
    height: 50px; /* Tamaño más grande que el cuadrado exterior */
    background-color: #EB966A; /* Color del cuadrado interno */
    border-radius: 5px; /* Bordes redondeados */
    z-index: 0; /* Detrás del ícono y del cuadrado de fondo */
  }
  
  .sidebar-background-square {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #EB966A; /* Color del cuadrado de fondo */
    border-radius: 10px; /* Bordes redondeados */
    z-index: -1; /* Detrás del ícono */
    top: 0;
    left: 0;
    transform: translate(-10px, -10px); /* Ajuste de posición */
  }
  
  .sidebar-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Color del overlay */
    border-radius: 10px; /* Bordes redondeados */
    z-index: -2; /* Detrás del cuadrado de fondo */
    opacity: 0; /* Inicialmente invisible */
    transition: opacity 0.3s ease;
  }
  
  .sidebar-link:hover .sidebar-overlay,
  .sidebar-active .sidebar-overlay {
    opacity: 1; /* Mostrar el overlay al activar el enlace */
  }
  
  .search-wrapper {
    margin-top: auto; /* Empuja la barra de búsqueda hacia abajo */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .search-input {
    background-color: #1F1D2B; /* Color de fondo del input */
    color: #E0E6ED; /* Color del texto del input */
    padding: 10px;
    border-radius: 0.5rem;
    border: none;
    width: 80%; /* Ancho del input */
  }
  
  .search-icon {
    font-size: 1.2rem;
    color: #8A8D93; /* Color del ícono de búsqueda */
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  </style>
  