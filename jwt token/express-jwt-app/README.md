# Express + JWT API

A single-node Express project with:
- `POST /api/login` — authenticate and receive a JWT
- `GET /api/users` — list users (JWT protected)
- `POST /api/create` — create a new user (JWT protected)

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Server runs on `http://localhost:3000` by default.

## Demo user

A demo user is pre-seeded in memory (see `data/users.js`):
- username: `admin`
- password: `admin123`

## API Usage

### 1. Login

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

Response:
```json
{ "message": "Login successful", "token": "<JWT_TOKEN>" }
```

### 2. Get users (protected)

```bash
curl http://localhost:3000/api/users \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

### 3. Create user (protected)

```bash
curl -X POST http://localhost:3000/api/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"username":"newuser","password":"newpass123"}'
```

## Notes

- Data is stored in memory (`data/users.js`) and resets on server restart. Swap in a real database for production use.
- Set a strong, random `JWT_SECRET` in `.env` before deploying.
- Passwords are hashed with `bcryptjs` before storage.

## Project structure

```
express-jwt-app/
├── data/
│   └── users.js        # in-memory user store
├── middleware/
│   └── auth.js          # JWT verification middleware
├── routes/
│   ├── auth.js           # login route
│   └── users.js          # get/create user routes
├── server.js             # app entry point
├── package.json
├── .env.example
└── README.md
```
