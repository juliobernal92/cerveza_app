# 🍻 Cerveza App — Yka’a Beer Store

Aplicación móvil desarrollada con **Ionic + Angular**, diseñada para la marca **Yka’a Cerveza Artesanal**.  
Permite explorar las diferentes variedades de cervezas, agregarlas al carrito, y simular un proceso de compra con distintos métodos de pago (QR, tarjeta y efectivo).

---
<img width="443" height="903" alt="image" src="https://github.com/user-attachments/assets/4bfcf704-2847-440a-b104-9ecf2199c4fd" />

<img width="446" height="903" alt="image" src="https://github.com/user-attachments/assets/d585b36d-2ce4-44ef-884f-4c967978cecf" />

<img width="450" height="908" alt="image" src="https://github.com/user-attachments/assets/7507a7c2-f907-4621-9ae1-eab5466b9bcb" />

<img width="447" height="906" alt="image" src="https://github.com/user-attachments/assets/1ba92916-96f4-47b1-8f63-dfa25d949855" />

<img width="447" height="907" alt="image" src="https://github.com/user-attachments/assets/34fdf013-6471-43c3-b6ed-f4edb9dc4f3f" />
<img width="449" height="910" alt="image" src="https://github.com/user-attachments/assets/b920b7da-a3a2-4b5b-971d-f269273b2b7c" />


## 🏠 Funcionalidades principales

### 🧭 Inicio
- Catálogo de cervezas artesanales (Altbier, Golden Ale, IPA, Kölsch, Saison, Porter, Luquenburger).
- Visualización de nombre, descripción, tipo, imagen y precio.
- Botón de “Agregar al carrito”.

### 🛒 Carrito
- Lista de productos seleccionados con:
  - Imagen del producto.
  - Precio unitario y subtotal.
  - Controles de cantidad (+ / −).
  - Botón para eliminar.
- Cálculo automático de totales.
- Modal interactivo para elegir método de pago:
  - 💳 Tarjeta.
  - 💵 Efectivo.
  - 📱 QR.

### 💳 Pago
- Simulación de pago con animaciones visuales.
- Confirmación de éxito y vaciado automático del carrito.

---

## 🎨 Estilo visual

- Paleta de colores inspirada en tonos **dorado y ámbar**, evocando el color de la cerveza.
- Diseño moderno y responsivo con **Ionic Components**.
- Íconos dinámicos con **Ionicons**.
- Modal de pago animado y amigable.

---

## 🧱 Estructura del proyecto

<img width="285" height="895" alt="image" src="https://github.com/user-attachments/assets/dfce36f4-4ef3-42ee-8ea3-9a8624a081f0" />




---

## ⚙️ Instalación y ejecución

### 📦 Requisitos previos
- Node.js v16 o superior  
- Ionic CLI v7 o superior  
- Angular CLI v17 o superior  

### 🧩 Instalación de dependencias
```bash
npm install
▶️ Ejecución en modo desarrollo
bash
Copiar código
ionic serve
Esto abrirá la app en http://localhost:8100

📱 Compilación para Android / iOS
bash
Copiar código
ionic build
npx cap sync
npx cap open android
💾 Datos de ejemplo
Producto	Tipo	Precio	Imagen
Altbier	Ale	₲32.000	assets/img/altbier.jpeg
Golden Ale	Ale	₲30.000	assets/img/golden.jpeg
IPA	American IPA	₲35.000	assets/img/ipa.jpeg
Kölsch	Lager	₲31.000	assets/img/kolsch.jpeg
Saison	Farmhouse	₲32.000	assets/img/saison.jpeg
Porter	Dark	₲33.000	assets/img/porter.jpeg
Luquenburger	Especial	₲34.000	assets/img/luque.jpeg

🧠 Lógica interna
CartService:
Administra el carrito de compras:

Agregar, eliminar, actualizar cantidad.

Calcular subtotal y total.

Vaciar carrito al finalizar el pago.

CarritoPage:

Muestra productos en carrito con imagen, precio y botones de control.

Abre y cierra el modal de pago.

Simula el procesamiento y éxito del pago.

🧩 Tecnologías utilizadas
Tecnología	Propósito
Ionic Framework	Componentes UI multiplataforma
Angular	Framework de desarrollo web
TypeScript	Lógica de negocio
Ionicons	Íconos vectoriales
SCSS	Estilos personalizados

✨ Autor
Desarrollado Alumnos de uninorte
Proyecto académico: Programación VI
📍 Paraguay 🇵🇾

📜 Licencia
Este proyecto es de uso educativo.
© 2025 Yka’a Beer — Todos los derechos reservados.





