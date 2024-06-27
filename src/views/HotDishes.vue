<template>
  <div class="hot-dishes">
    <h2 class="hot-dishes-title">Choose Dishes</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="hot-dish">
        <img src="https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1719360000&semt=sphg" alt="Dish 1" class="hot-dish-image" />
        <h3 class="hot-dish-title">Spicy seasoned seafood noodles</h3>
        <p class="hot-dish-info">$2.29 - 20 Bowls available</p>
      </div>
      <div class="hot-dish">
        <img src="https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1719360000&semt=sph" alt="Dish 2" class="hot-dish-image" />
        <h3 class="hot-dish-title">Salted Pasta with mushroom sauce</h3>
        <p class="hot-dish-info">$2.69 - 11 Bowls available</p>
      </div>
      <!-- Más platos -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotDishes'
}
</script>

<style scoped>
.hot-dishes {
  padding: 20px;
}

.hot-dishes-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #FFFFFF; /* Color del título */
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.hot-dish {
  background-color: #2D303E; /* Color de fondo del plato */
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hot-dish-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 10px;
}

.hot-dish-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  color: #E0E6ED; /* Color del título del plato */
}

.hot-dish-info {
  color: #8A8D93; /* Color del texto de información */
  text-align: center;
  margin-top: 5px;
}
</style>
