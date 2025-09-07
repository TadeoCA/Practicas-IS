// Utilidades / formato de dinero
const money = v => v.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

// Carrito en localStorage
let cart = JSON.parse(localStorage.getItem('ts_cart_v1') || '[]');

function saveCart() { localStorage.setItem('ts_cart_v1', JSON.stringify(cart)); }
function cartCount() { return cart.reduce((a,i)=>a+i.qty,0); }
function cartTotal() { return cart.reduce((a,i)=>a + i.price*i.qty, 0); }

function renderCart() {
  const countEl = document.getElementById('cartCount');
  const listEl  = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');

  if (countEl) countEl.textContent = cartCount();

  if (!listEl || !totalEl) return;
  listEl.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${item.name} <span class="text-secondary">x${item.qty}</span></span>
      <span>
        ${money(item.price * item.qty)}
        <button class="btn btn-sm btn-outline-danger ms-2" aria-label="Eliminar" onclick="removeFromCart(${idx})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </span>`;
    listEl.appendChild(li);
  });
  totalEl.textContent = money(cartTotal());
  saveCart();
}

function addToCart(name, price, image) {
  const found = cart.find(i => i.name === name);
  if (found) found.qty++;
  else cart.push({ name, price: Number(price) || 0, qty: 1, image: image || '' });

  renderCart();

  const toastEl = document.getElementById('cartToast');
  if (toastEl) {
    const toast = new bootstrap.Toast(toastEl, { delay: 1500 });
    const msg = document.getElementById('toastMsg');
    if (msg) msg.textContent = `${name} agregado al carrito.`;
    toast.show();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  // Año en footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Validación Bootstrap
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
      form.classList.add('was-validated');
    });
  });

  // Inicializa carrito
  renderCart();

  // Botones Agregar
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(
        btn.getAttribute('data-item') || 'Producto',
        btn.getAttribute('data-price') || 0,
        btn.getAttribute('data-image') || ''
      );
    });
  });

  // Checkout demo
  const checkout = document.getElementById('checkoutBtn');
  if (checkout) {
    checkout.addEventListener('click', () => {
      if (!cart.length) return alert('Tu carrito está vacío.');
      alert('Gracias por tu compra (demo). Total: ' + money(cartTotal()));
      cart = [];
      renderCart();
      const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
      modal && modal.hide();
    });
  }
});
