<template>
  <div class="min-h-screen bg-background text-foreground flex">
    <Sidebar />
    <MainContent />
    <Orders />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import MainContent from './components/MainContent.vue';
import Orders from './components/Orders.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent,
    Orders,
  },
}
</script>

<style>
/* Estilos globales si es necesario */
</style>
