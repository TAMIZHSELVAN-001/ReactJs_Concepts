import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);

  // GET USERS
  async function user_list() {
    try {
      // setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
          console.log("users data: ", data);


      data.forEach((user)=>{
        console.log("User ID:", typeof user.id)
        // console.log("Email id",user.email)
      })

      setUsers(data);
    } catch (error) {
      console.log("Failed to load users");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    
    user_list();
  }, []);

  // ADD / UPDATE USER
  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    // UPDATE
    if (typeof editId === Number()) {
      const updatedUsers = users.map((user) => {
        if (user.id === editId) {
          return {
            ...user,
            name: name,
            email: email,
          };
        }

        return user;
      });

      setUsers(updatedUsers);
      setEditId(null);
    }

    // ADD
    else {
      const newUser = {
        id: Date.now(),
        name: name,
        email: email,
      };

      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
  }

  // EDIT USER
  function handleEdit(user) {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  }

  // DELETE USER
  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  }

  // CANCEL EDIT
  function handleCancel() {
    setEditId(null);
    setName("");
    setEmail("");
  }

  // LOADING PAGE
  if (loading) {
    return (
      <div className="loading-page">
        <div className="loader"></div>
        <h2>Loading Users...</h2>
        <p>Please wait while we fetch the user list.</p>
      </div>
    );
  }

  // ERROR PAGE
  if (error) {
    return (
      <div className="error-page">
        <div className="error-icon">!</div>

        <h2>Failed to Load Users</h2>

        <p>
          Something went wrong while loading the user list.
        </p>

        <button onClick={user_list} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">
        <div>
          <h1>User Management</h1>
          <p>Manage your users easily</p>
        </div>

        <div className="user-count">
          <span>{users.length}</span>
          <small>Users</small>
        </div>
      </header>


      {/* ADD / UPDATE FORM */}

      <section className="form-section">

        <h2>
          {editId !== null ? "Edit User" : "Add New User"}
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter user name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>


          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>


          <div className="form-buttons">

            <button type="submit" className="primary-btn">
              {editId !== null ? "Update User" : "Add User"}
            </button>

            {editId !== null && (
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </section>


      {/* USER LIST */}

      <section className="users-section">

        <div className="section-title">
          <h2>Users</h2>
          <span>{users.length} total</span>
        </div>


        <div className="user-grid">

          {users.map((user) => (

            <div className="user-card" key={user.id}>

              <div className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div className="user-info">

                <h3>{user.name}</h3>

                <p>{user.email}</p>

              </div>


              <div className="actions">

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default App;

