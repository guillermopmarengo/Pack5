# Memoria del proyecto — Pack5 Logística

## Contexto
- Sitio web de la empresa de logística del usuario: **www.pack5logistica.com**.
- Idioma del sitio y de la conversación: **español** (voseo rioplatense: "pedí", "contanos").
- Sitio estático sin dependencias: `index.html`, `styles.css`, `script.js`, `assets/logo.svg`, `CNAME`.
- Rama de trabajo: `claude/pack5-logistics-website-62o4gx`.
- Vista previa privada (artifact): https://claude.ai/artifact/H8CfuWmB89ap2fx4abiXBe — al cambiar el sitio, volver a publicarla con el mismo `index.html` para mantener el link.

## Diseño
- Colores: azul marino `#0B2545` + naranja `#FF7A1A`. Fuente Inter.
- Secciones: portada, cifras, servicios, nosotros, cómo trabajamos, banner, preguntas frecuentes, contacto/cotización, footer, botón flotante de WhatsApp.
- El formulario de cotización no usa servidor: arma el mensaje y lo abre por email (`mailto:`) o WhatsApp (`wa.me`).

## Pendiente (datos que debe dar el usuario)
- Teléfono, número de WhatsApp (hoy `000000000000`), email real (hoy `contacto@pack5logistica.com`, inventado), dirección y horarios.
  Se cambian en `index.html` (contacto, botón flotante, bloque `ld+json`) y en `script.js` (`CONTACT_EMAIL`, `WHATSAPP_NUMBER`).
- Cifras de la franja de estadísticas (98%, 24 h, 7 días, 100%) son de ejemplo.
- Servicios, zonas de cobertura y respuestas de preguntas frecuentes fueron redactados como ejemplo: validar con el usuario.
- Logo propio del usuario, si tiene (hoy hay uno provisorio).
- Publicación: activar GitHub Pages y configurar el DNS del dominio (pasos en `README.md`).

## Preferencias del usuario
- Quiere ver los cambios antes de publicarlos: mandarle siempre el link de la vista previa.
