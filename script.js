// Accordéon : déplie/replie le détail de chaque projet au clic sur "VIEW".
(function () {
  const toggles = document.querySelectorAll(".project-toggle");
  toggles.forEach((btn) => {
    const row = btn.closest(".project-row");
    const details = row.querySelector(".project-details");

    // État initial : fermé.
    details.style.maxHeight = "0px";

    btn.addEventListener("click", () => {
      const isOpen = row.classList.contains("open");

      if (isOpen) {
        details.style.maxHeight = "0px";
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
      }

      row.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));

      const label = btn.querySelector(".chevron");
      if (label) label.textContent = isOpen ? "→" : "↓";
    });
  });
})();


// Resume preview toggle (same pattern as project accordion).
(function () {
  const btn = document.querySelector(".resume-toggle");
  if (!btn) return;
  const details = document.querySelector(".resume-details");
  details.style.maxHeight = "0px";
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      details.style.maxHeight = "0px";
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
    }
    btn.setAttribute("aria-expanded", String(!isOpen));
    const label = btn.querySelector(".chevron");
    if (label) label.textContent = isOpen ? "→" : "↓";
  });
})();

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
