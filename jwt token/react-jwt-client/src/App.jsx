import { useState } from 'react';

import Login from './components/Login.jsx';
import CreateUser from './components/CreateUser.jsx';
import UsersList from './components/UsersList.jsx';

import { logout } from './api';


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);


  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }


  async function handleLogout() {

    try {

      await logout();

      setIsLoggedIn(false);

    } catch (error) {

      console.error('Logout failed:', error);

    }
  }


  if (!isLoggedIn) {

    return (
      <Login
        onLoginSuccess={handleLoginSuccess}
      />
    );

  }


  return (
    <div>

      <div
        className="container top-bar"
        style={{
          maxWidth: 420,
          margin: '0 auto 0'
        }}
      >

        <strong>
          Logged in
        </strong>

        <button
          className="logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>


      {/* <CreateUser
        onUserCreated={() =>
          setRefreshKey((k) => k + 1)
        }
      /> */}


      <UsersList
        refreshKey={refreshKey}
      />

    </div>
  );
}