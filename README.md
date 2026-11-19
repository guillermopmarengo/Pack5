# Pack5 Logística — sitio web

Sitio estático (HTML + CSS + JS, sin dependencias) para **www.pack5logistica.com**.

## Estructura

- `index.html` — contenido de la página (servicios, nosotros, proceso, preguntas, contacto)
- `styles.css` — estilos y diseño responsive
- `script.js` — menú móvil, animaciones y formulario de cotización
- `assets/logo.svg` — logo / favicon
- `CNAME` — dominio para GitHub Pages

## Datos a completar

Buscá `000000000000` y `contacto@pack5logistica.com` y reemplazalos por los reales en:

- `index.html` → sección **Contacto**, botón flotante de WhatsApp y bloque `ld+json`
- `script.js` → constantes `CONTACT_EMAIL` y `WHATSAPP_NUMBER`

También conviene revisar la dirección, horarios y los números de la franja de estadísticas.

## Ver localmente

Abrí `index.html` en el navegador, o ejecutá `python3 -m http.server` y entrá a http://localhost:8000.

## Publicar con GitHub Pages

1. En GitHub: **Settings → Pages**, elegí la rama y la carpeta raíz (`/`).
2. En tu proveedor de dominio, configurá el DNS:
   - `www` → registro **CNAME** apuntando a `<tu-usuario>.github.io`
   - Dominio raíz → registros **A** a `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Activá **Enforce HTTPS** en Settings → Pages.

También funciona en Netlify, Vercel o cualquier hosting estático: solo subí los archivos.
