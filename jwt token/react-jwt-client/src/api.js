const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));

  console.log('Status:', res.status);
  console.log('Response:', data);

  if (!res.ok) {
    throw new Error(
      data.message || `Request failed with status ${res.status}`
    );
  }

  return data;
}


// LOGIN
export async function login(username, password) {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    credentials: 'include',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return handleResponse(res);
}


// GET USERS
export async function getUsers() {
  const res = await fetch(`${API_BASE_URL}/users`, {
    method: 'GET',

    credentials: 'include',
  });

  return handleResponse(res);
}


// LOGOUT
export async function logout() {
  const res = await fetch(`${API_BASE_URL}/logout`, {
    method: 'POST',

    credentials: 'include',
  });

  return handleResponse(res);
}