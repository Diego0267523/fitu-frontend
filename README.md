# 💪 Gym App — Frontend

Cliente web y móvil (Android) de una app de fitness social: feed, stories, perfiles públicos, chat con asistente de IA, mensajes directos y registro de comidas.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![MUI](https://img.shields.io/badge/Material_UI-7-007FFF?logo=mui&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-Android-119EFF?logo=capacitor&logoColor=white)
![React Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)

> Consume la API del repositorio [`gym-app`](https://github.com/Diego0267523/gym-app).

## ✨ Características

- **Feed social** con posts y **stories** (con subida de imágenes).
- **Perfiles públicos** con URL propia (`/app/u/:usuario`) navegables desde los posts.
- **Asistente de IA** y burbuja de chat flotante.
- **Mensajes directos** en tiempo real (Socket.io).
- **Registro de comidas** con análisis de calorías.
- **App Android** empaquetada con Capacitor.

## 🧰 Stack

React 19 · React Router 7 · Material UI 7 · TanStack Query · Framer Motion · Axios · Socket.io Client · Capacitor 8

## 🚀 Puesta en marcha

```bash
git clone https://github.com/Diego0267523/frontend.git
cd frontend
npm install
npm start          # http://localhost:3000
```

Necesitas la API corriendo (ver [`gym-app`](https://github.com/Diego0267523/gym-app)).

### Scripts

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Tests |
| `npx cap sync android` | Sincroniza el build con el proyecto Android |

## 🗂️ Estructura

```
src/
├── components/   # UI: feed, dashboard, chat, modales
├── pages/        # Feed, Home, Login, Register, Perfiles, Stories
├── hooks/        # usePosts, useStories, useProfile...
├── context/      # AuthContext, SocketContext
├── services/     # Capa de acceso a la API
└── api/          # Clientes HTTP
docs/             # Documentación de perfiles públicos
android/          # Proyecto nativo (Capacitor)
```
