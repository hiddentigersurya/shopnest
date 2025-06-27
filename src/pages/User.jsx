import React, { useEffect, useState } from 'react';

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-page">
      <h2 className="user-title">Users</h2>
      {loading ? (
        <div className="user-loading">Loading...</div>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-avatar">{user.name[0]}</div>
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
                <div className="user-address">
                  {user.address.city}, {user.address.street}
                </div>
                <div className="user-company">{user.company.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default User;