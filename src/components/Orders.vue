<template>
    <aside class="orders-sidebar">
        <header class="orders-header">
            <div class="orders-header-top">
                <h2 class="orders-title inline-block">Orders #34562</h2>
            </div>
            <div class="orders-header-bottom mt-2">
                <nav class="orders-nav flex flex-col space-y-2">
                    <button class="orders-button active">Dine In</button>
                    <button class="orders-button">To Go</button>
                    <button class="orders-button">Delivery</button>
                </nav>
            </div>
        </header>
        <section class="orders-section mt-4">
            <div class="orders-labels flex justify-between bg-gray-700 p-4 rounded">
                <div class="orders-label text-gray-300 font-bold">Item</div>
                <div class="orders-label text-gray-300 font-bold">Quantity</div>
                <div class="orders-label text-gray-300 font-bold">Price</div>
            </div>
            <div class="order-item mt-4 flex justify-between bg-gray-700 p-4 rounded">
                <div class="order-item-details flex items-center">
                    <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-waffle-squares-png-image_9114365.png"
                        alt="dish-image" class="order-item-image rounded-lg mr-4" />
                    <div class="order-item-info">
                        <p class="order-item-name text-gray-300">Chicken Sandwich</p>
                        <div class="order-item-meta flex items-center">
                            <input type="number" id="quantity1" class="order-item-input mr-2" value="1" />
                            <p class="order-item-price text-gray-300">$12.99</p>
                        </div>
                    </div>
                </div>
                <button
                    class="order-item-delete text-red-500 border-red-500 border-2 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition duration-300">X</button>
            </div>
            <div class="order-item mt-4 flex justify-between bg-gray-700 p-4 rounded">
                <div class="order-item-details flex items-center">
                    <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-waffle-squares-png-image_9114365.png"
                        alt="dish-image" class="order-item-image rounded-lg mr-4" />
                    <div class="order-item-info">
                        <p class="order-item-name text-gray-300">Salad</p>
                        <div class="order-item-meta flex items-center">
                            <input type="number" id="quantity2" class="order-item-input mr-2" value="1" />
                            <p class="order-item-price text-gray-300">$8.99</p>
                        </div>
                    </div>
                </div>
                <button
                    class="order-item-delete text-red-500 border-red-500 border-2 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition duration-300">X</button>
            </div>
            <div class="order-item mt-4 flex justify-between bg-gray-700 p-4 rounded">
                <div class="order-item-details flex items-center">
                    <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-waffle-squares-png-image_9114365.png"
                        alt="dish-image" class="order-item-image rounded-lg mr-4" />
                    <div class="order-item-info">
                        <p class="order-item-name text-gray-300">Soda</p>
                        <div class="order-item-meta flex items-center">
                            <input type="number" id="quantity3" class="order-item-input mr-2" value="1" />
                            <p class="order-item-price text-gray-300">$2.05</p>
                        </div>
                    </div>
                </div>
                <button
                    class="order-item-delete text-red-500 border-red-500 border-2 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition duration-300">X</button>
            </div>
        </section>
        <footer class="orders-footer mt-4">
            <div class="orders-summary flex flex-col">
                <div class="orders-summary-item flex justify-between mb-4">
                    <p class="orders-summary-label text-gray-300">Discount</p>
                    <p class="orders-summary-value text-gray-300">$0</p>
                </div>
                <div class="orders-summary-item flex justify-between">
                    <p class="orders-summary-label text-gray-300">Sub total</p>
                    <p class="orders-summary-value text-gray-300">$21.03</p>
                </div>
            </div>
            <button
                class="orders-button-primary bg-orange-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-orange-600 transition duration-300">Continue
                to Payment</button>
        </footer>
    </aside>
</template>

<script>
export default {
    name: 'Orders',
};
</script>



<style scoped>
.orders-sidebar {
    width: 400px;
    /* Aumento del ancho del sidebar */
    background-color: #1F1D2B;
    /* Color de fondo del sidebar */
    padding: 20px;
    /* Espaciado interno */
    color: #e0e6ed;
    /* Color del texto */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.orders-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    /* Espacio inferior */
}

.orders-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.orders-nav {
    display: flex;
    flex-direction: column;
    /* Alineación vertical */
    align-items: flex-start;
    /* Alineación a la izquierda */
    margin-bottom: 20px;
    /* Espacio inferior */
}

.orders-button {
    background-color: transparent;
    /* Fondo transparente */
    color: #8a8d93;
    /* Color de texto original */
    border: 1px solid #eb966a;
    /* Borde rojo */
    padding: 10px 16px;
    /* Reducido el padding */
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    flex: 1;
    margin: 0 6px;
    /* Reducido el margen */
}

.orders-button.active {
    background-color: #eb966a;
    color: #ffffff;
}

.orders-button:hover {
    background-color: #1F1D2B;
    /* Cambio de color al pasar el mouse */
}

.orders-section {
    flex: 1;
    /* Ocupa el espacio restante */
    overflow-y: auto;
    /* Scroll si es necesario */
    margin-top: 20px;
}

.orders-labels {
    display: flex;
    justify-content: space-between;
    background-color: #1F1D2B;
    /* Fondo de las etiquetas */
    padding: 10px;
    /* Espaciado interno */
    border-radius: 0.5rem;
    margin-bottom: 10px;
    /* Espacio inferior */
}

.orders-label {
    color: #8a8d93;
    font-weight: bold;
}

.order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1F1D2B;
    /* Fondo del item */
    padding: 10px;
    /* Espaciado interno */
    border-radius: 0.5rem;
    margin-bottom: 10px;
    /* Espacio entre items */
}

.order-item-details {
    display: flex;
    align-items: center;
}

.order-item-image {
    width: 60px;
    /* Reducido el tamaño de la imagen */
    height: 60px;
    /* Reducido el tamaño de la imagen */
    border-radius: 0.5rem;
    margin-right: 12px;
    /* Reducido el margen */
}

.order-item-info {
    flex: 1;
    /* Ocupa el espacio restante */
}

.order-item-name {
    font-size: 1rem;
    /* Ajuste de tamaño del nombre */
    margin-bottom: 5px;
}

.order-item-meta {
    display: flex;
    align-items: center;
}

.order-item-meta label {
    margin-right: 8px;
    /* Reducido el margen */
}

.order-item-input {
    width: 50px;
    /* Reducido el ancho del input */
    padding: 5px;
    margin-right: 8px;
    /* Reducido el margen */
}

.order-item-price {
    font-weight: bold;
}

.order-item-delete {
    background-color: transparent;
    /* Fondo transparente */
    color: #eb966a;
    /* Color de texto rojo */
    border: 1px solid #eb966a;
    /* Borde rojo */
    padding: 8px 12px;
    /* Reducido el padding */
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.order-item-delete:hover {
    background-color: #ff9c71;
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
    margin-bottom: 10px;
    /* Espacio entre elementos */
}

.orders-summary-label {
    color: #8a8d93;
}

.orders-button-primary {
    background-color: #eb966a;
    color: #ffffff;
    border: none;
    padding: 12px 0;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 100%;
}

.orders-button-primary:hover {
    background-color: #ffa981;
}
</style>