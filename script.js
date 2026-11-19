// ===== Configuración: reemplazar con los datos reales =====
const CONTACT_EMAIL = "contacto@pack5logistica.com";
const WHATSAPP_NUMBER = "000000000000"; // formato internacional sin "+" ni espacios, ej: 5491112345678

// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Animación de aparición al hacer scroll
const revealEls = document.querySelectorAll(".card, .features li, .steps li, .section__head, details, .form");
if ("IntersectionObserver" in window) {
  revealEls.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
}

// Contadores
const counters = document.querySelectorAll("[data-count]");
const runCounter = (el) => {
  const target = +el.dataset.count;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / 1200, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if ("IntersectionObserver" in window) {
  const co = new IntersectionObserver((entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        runCounter(e.target);
        co.unobserve(e.target);
      }
    })
  );
  counters.forEach((c) => co.observe(c));
} else {
  counters.forEach((c) => (c.textContent = c.dataset.count));
}

// Formulario de cotización: arma el mensaje y lo envía por email o WhatsApp
const form = document.getElementById("quote-form");
const msg = form.querySelector(".form__msg");
let via = "email";
form.querySelectorAll("button[data-via]").forEach((b) =>
  b.addEventListener("click", () => (via = b.dataset.via))
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("[required]").forEach((f) => {
    const valid = f.value.trim() && (f.type !== "email" || /^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle("invalid", !valid);
    if (!valid) ok = false;
  });
  if (!ok) {
    msg.textContent = "Por favor completá los campos obligatorios (*).";
    return;
  }

  const d = Object.fromEntries(new FormData(form));
  const text =
    `Hola Pack5, quiero solicitar una cotización.\n\n` +
    `Nombre: ${d.nombre}\n` +
    (d.empresa ? `Empresa: ${d.empresa}\n` : "") +
    `Email: ${d.email}\n` +
    (d.telefono ? `Teléfono: ${d.telefono}\n` : "") +
    `Servicio: ${d.servicio}\n` +
    (d.origen ? `Origen: ${d.origen}\n` : "") +
    (d.destino ? `Destino: ${d.destino}\n` : "") +
    `\nDetalle:\n${d.mensaje}`;

  if (via === "whatsapp") {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  } else {
    const subject = `Cotización - ${d.servicio} - ${d.nombre}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  }
  msg.textContent = "¡Gracias! Se abrió tu aplicación para enviar el mensaje.";
});
