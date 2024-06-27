<template>
  <section class="home-section">
    <h2 class="home-title">Choose Dishes</h2>
    <div class="grid grid-cols-3 gap-6">
      <div class="home-item">
        <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-waffle-squares-png-image_9114365.png" alt="Spicy seasoned seafood noodles" class="home-item-image" />
        <h3 class="home-item-title">Spicy seasoned seafood noodles</h3>
        <p class="home-item-price">$2.29</p>
        <p class="home-item-availability">20 Bowls available</p>
      </div>
      <!-- Más platos aquí -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home-section {
  padding: 20px;
}

.home-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #FFFFFF; /* Color del título */
}

.grid {
  display: grid;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.home-item {
  background-color: #1F1D2B; /* Color de fondo del card */
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-item-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.home-item-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  color: #E0E6ED; /* Color del título del plato */
}

.home-item-price {
  color: #EB966A; /* Color del precio */
  font-weight: bold;
  margin-top: 5px;
}

.home-item-availability {
  color: #8A8D93; /* Color del texto de disponibilidad */
  margin-top: 5px;
}
</style>
