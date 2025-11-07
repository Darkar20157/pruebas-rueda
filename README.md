# 🚀 Proyecto La Rueda - Panel de Contactos (Angular 11)

Aplicación desarrollada con **Angular 11**, que incluye autenticación con token JWT y gestión de contactos (listado, creación individual y carga masiva).  
Diseñada para integrarse con la API de **La Rueda**: [https://api.larueda.com.co/api/testingreso](https://api.larueda.com.co/api/testingreso)

---

## 🧩 Características principales

- 🔐 **Login con autenticación JWT**
  - Guarda el token en `localStorage`.
  - Redirige automáticamente al panel `/rueda/contact` tras autenticarse.
- 👥 **Gestión de Contactos**
  - Listado general.
  - Alta individual mediante formulario reactivo.
  - Importación masiva de contactos (sin subir archivos, solo lista en pantalla).
- 🧭 **Ruteo Angular configurado**
  - `/login`
  - `/rueda/contact`
- 🎨 **Diseño responsive y moderno**
  - CSS limpio y minimalista.
  - Compatible con dispositivos móviles.
- 📦 **Buenas prácticas**
  - Uso de `environment` para URLs de API.
  - Separación de servicios (`AuthService`, `ContactService`).
  - FormBuilder + Reactive Forms.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Versión | Descripción |
|-------------|----------|--------------|
| Angular | 11.1.x | Framework principal |
| TypeScript | 4.1.x | Lenguaje base |
| RxJS | 6.6.x | Programación reactiva |

---

## ⚙️ Instalación y configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Darkar20157/prueba-rueda.git
cd prueba-rueda
