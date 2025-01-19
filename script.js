const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});

const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Масив для зберігання товарів
let cart = [];

// Додаємо обробник подій до кнопок
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        // Додаємо товар до кошика
        cart.push({ name, price });

        // Оновлюємо відображення кошика
        updateCart();
    });
});

// Функція для оновлення відображення кошика
function updateCart() {
    // Очищаємо список товарів
    cartItems.innerHTML = '';

    // Оновлюємо список товарів
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} ₴`;

        // Додаємо кнопку для видалення товару
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', () => {
            // Видаляємо товар з кошика
            cart.splice(index, 1);

            // Оновлюємо відображення кошика
            updateCart();
        });

        li.appendChild(deleteButton);
        cartItems.appendChild(li);
    });

    // Рахуємо загальну суму
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = `Загальна сума: ${totalPrice} ₴`;
}
