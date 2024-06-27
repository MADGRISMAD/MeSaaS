<template>
  <header class="header">
    <div class="header-left">
      <h1 class="header-title">Jaegar Resto</h1>
      <p class="header-subtitle">Tuesday, 2 Feb 2021</p>
    </div>
    <div class="header-right">
      <div class="relative">
        <input type="text" placeholder="Search for food, coffee, etc..." class="search-input" />
        <font-awesome-icon icon="search" class="search-icon" />
      </div>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      searchIcon: faSearch
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2D303E; /* Color de fondo del header */
}

.header-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF; /* Color del título */
  margin: 0;
}

.header-subtitle {
  color: #8A8D93; /* Color del subtítulo */
  margin: 0;

}

.search-input {
  background-color: #26242F; /* Color de fondo del input */
  color: #E0E6ED; /* Color del texto del input */
  padding: 12px 16px; /* Ajuste de espaciado interno */
  border-radius: 0.5rem;
  border: none;
  width: 300px; /* Ancho del input */
  outline: none; /* Quita el borde de enfoque */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.search-input:focus {
  background-color: #26242F; /* Color de fondo del input al enfocar */
}

.search-icon {
  font-size: 1rem;
  color: #8A8D93; /* Color del ícono */
  position: absolute;
  right: 16px; /* Ajuste para alinear con el borde del input */
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
