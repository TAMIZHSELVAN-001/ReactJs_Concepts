import { useEffect, useState, useCallback } from 'react';
import { getUsers } from '../api';

export default function UsersList({ token, refreshKey }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = useCallback(async () => {
    setError('');
    try {
      const data = await getUsers(token);
      setUsers(data.users);
    } catch (err) {
      setError(err.message);
    }
  }, [token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, refreshKey]);

  return (
    <div className="container" style={{ marginTop: '1.5rem' }}>
      <h1>Users</h1>
      {error && <span className="error">{error}</span>}
      <ul className="user-list">
        {users.map((u) => (
          <li key={u.id}>
            #{u.id} — {u.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
