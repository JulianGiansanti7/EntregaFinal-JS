function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.getElementById('cartBody');
    tbody.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
    const subtotal = Number(item.precio) * Number(item.qty);
    total += subtotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><img src="${item.img}" width="50" /></td>
        <td>${item.nombre}</td>
        <td>U$${item.precio}</td>
        <td>${item.qty}</td>
        <td>U$${subtotal}</td>
        <td><button class="remove" data-id="${item.id}">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
});

    document.getElementById('total').textContent = "U$" + total;
}

    document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('cartBody');

    if (!tbody) return;

    tbody.addEventListener('click', (e) => {
    if (!e.target.classList.contains('remove')) return;

    const id = String(e.target.dataset.id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => String(item.id) !== id);
    localStorage.setItem('cart', JSON.stringify(cart));

    renderCart();
    });

renderCart();
});