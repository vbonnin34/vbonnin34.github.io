// Anime les valeurs de coordonnées affichées à côté du schéma du bras robotisé,
// pour renforcer l'idée d'un système asservi en temps réel.
(function () {
  const labels = document.querySelectorAll(".label-text");
  if (!labels.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  let t = 0;
  function tick() {
    t += 0.02;
    const x = 210 + Math.sin(t) * 25;
    const y = 118 + Math.cos(t * 0.8) * 15;
    const theta = 42 + Math.sin(t * 1.3) * 10;

    if (labels[0]) labels[0].textContent = `X: ${x.toFixed(1)}`;
    if (labels[1]) labels[1].textContent = `Y: ${y.toFixed(1)}`;
    if (labels[2]) labels[2].textContent = `θ: ${theta.toFixed(1)}°`;

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
