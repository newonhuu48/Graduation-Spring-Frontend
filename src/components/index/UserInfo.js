import React from 'react';

function UserInfo({ claims, onLogout }) {

  const username = claims?.sub || 'Unknown User';
  const roles = claims?.roles || [];

  return (
    <div
      className="d-flex flex-column align-items-end p-3"
      style={{ minWidth: '220px' }}
    >
      <div>
        <strong>User:</strong> {username}
      </div>
      <div>
        <strong>Roles:</strong> {roles.join(', ')}
      </div>
      <button className="btn btn-outline-danger mt-3" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserInfo;