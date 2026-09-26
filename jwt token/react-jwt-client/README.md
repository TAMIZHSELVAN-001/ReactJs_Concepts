# React + JWT Client

A React (Vite) frontend that consumes the Express + JWT API:
- Login form → `POST /api/login`
- Create user form → `POST /api/create` (sends `Authorization: Bearer <token>`)
- Users list → `GET /api/users` (auto-refreshes after creating a user)

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

App runs on `http://localhost:5173` by default and expects the Express API at
`http://localhost:3000/api` (set via `VITE_API_BASE_URL` in `.env`).

Make sure the `express-jwt-app` backend is running first (`npm start` in that project).

## Demo login

- username: `admin`
- password: `admin123`

## How it works

- On login success, the JWT is stored in `localStorage` and kept in React state.
- `src/api.js` centralizes all fetch calls and attaches the `Authorization` header.
- Logging out clears the token and returns to the login screen.

## Project structure

```
react-jwt-client/
├── src/
│   ├── api.js                  # fetch helpers for login / create / get users
│   ├── App.jsx                  # top-level state (token, logout)
│   ├── main.jsx                 # React entry point
│   ├── styles.css
│   └── components/
│       ├── Login.jsx
│       ├── CreateUser.jsx
│       └── UsersList.jsx
├── index.html
├── vite.config.js
├── package.json
└── .env.example
```
