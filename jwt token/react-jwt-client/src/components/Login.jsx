import { useState } from 'react';
import { login } from '../api';

export default function Login({ onLoginSuccess }) {

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {

   e.preventDefault();

    setError('');
    setLoading(true);

    try {

      await login(username, password);

      onLoginSuccess();

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  }


  return (
    <div className="container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="username">
          Username
        </label>

        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />


        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />


        {error && (
          <span className="error">
            {error}
          </span>
        )}


        <button
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

      </form>

    </div>
  );
}