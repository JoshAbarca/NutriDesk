// --- BLOG.JS ---
// Movimiento del cuadrito de temáticas: baja con el scroll

// Event listener para scroll (afecta solo el cuadrito)
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  // Movimiento del cuadrito de temáticas: baja con el scroll
  const tocFija = document.getElementById('toc-fija');
  if (tocFija) {
    const initialTop = 200; // Posición inicial más baja (después del header ~150px)
    const scrollFactor = 0.3; // Velocidad: 30% del scroll
    const maxTop = 400; // Límite máximo superior
    const minTop = 200; // Límite mínimo inferior (para no subir encima del menú)
    
    // Calcular nueva posición
    let newTop = initialTop + (scrollY * scrollFactor);
    newTop = Math.max(minTop, Math.min(newTop, maxTop)); // Limita entre minTop y maxTop
    
    tocFija.style.top = newTop + 'px';
  }
});

// Opcional: Cierra/oculta elementos en resize (para responsive)
window.addEventListener('resize', function() {
  // Si necesitas lógica extra para móviles, agrégala aquí
});
