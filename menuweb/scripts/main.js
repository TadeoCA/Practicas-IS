// Año en footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// QR (si existe el contenedor y la librería QRCode está cargada)
(function initQR(){
  const qrEl = document.getElementById('qrcode');
  if (!qrEl || typeof QRCode === 'undefined') return;
  const url = qrEl.getAttribute('data-menu-url') || 'menu.html';
  new QRCode(qrEl, {
    text: url,
    width: 220,
    height: 220,
    correctLevel: QRCode.CorrectLevel.H
  });
})();

// Photo-swap: click/tap/Enter para mostrar foto real en dispositivos táctiles y accesible por teclado
(function initPhotoSwap(){
  const items = document.querySelectorAll('.photo-swap');
  if (!items.length) return;

  items.forEach(el => {
    const toggle = () => el.classList.toggle('show-real');

    // Click / tap
    el.addEventListener('click', toggle, false);

    // Teclado (Enter o Espacio)
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });

    // Inicial: en pantallas táctiles, mostrar icono; el usuario toca para ver la foto
    // en desktop, el hover del CSS ya hace el efecto
  });
})();
