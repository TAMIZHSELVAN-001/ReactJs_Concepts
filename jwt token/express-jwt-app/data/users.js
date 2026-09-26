// Simple in-memory "database" of users.
// Replace this with a real database (MongoDB, PostgreSQL, etc.) in production.

const bcrypt = require('bcryptjs');

// Pre-seeded demo user -> username: admin, password: admin123
const users = [
  {
    id: 1,
    username: 'akash',
    password: bcrypt.hashSync('admin123', 8), // hashed password
  },
];

let nextId = 2;

function findByUsername(username) {
  return users.find((u) => u.username === username);
}

function getAllUsers() {
  // Never return password hashes to the client
  return users.map(({ id, username }) => ({ id, username }));
}

function createUser(username, password) {
  const existing = findByUsername(username);
  if (existing) {
    return { error: 'Username already exists' };
  }

  const hashed = bcrypt.hashSync(password, 8);
  const newUser = { id: nextId++, username, password: hashed };
  users.push(newUser);

  console.log(newUser)
  return { id: newUser.id, username: newUser.username ,hashed};
}

module.exports = {
  users,
  findByUsername,
  getAllUsers,
  createUser,
};
