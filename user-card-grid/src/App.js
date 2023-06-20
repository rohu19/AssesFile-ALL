import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="brand">Rohan Software Technologies</div>
        <button onClick={fetchUsers} disabled={loading}>
          {loading ? "Loading..." : "Get Users"}
        </button>
      </nav>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.email} />
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
