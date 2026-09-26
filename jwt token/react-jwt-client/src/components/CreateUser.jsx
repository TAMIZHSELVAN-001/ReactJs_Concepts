import { useState } from 'react';


export default function CreateUser({ token, onUserCreated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const data = await createUser(token, username, password);
      setSuccess(`User "${data.user.username}" created successfully`);
      setUsername('');
      setPassword('');
      onUserCreated?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" style={{ marginTop: '1.5rem' }}>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-username">Username</label>
        <input
          id="new-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="new-password">Password</label>
        <input
          id="new-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create User'}
        </button>
      </form>
    </div>
  );
}
