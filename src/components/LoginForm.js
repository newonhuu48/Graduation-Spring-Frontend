import { useState } from 'react';
import api from '../api/axios';

function LoginForm({ form, onChange, onSubmit, error }) {
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      {error && <div data-cy="login-error" className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            data-cy="username-input"
            className="form-control"
            placeholder="Enter username"
            value={form.username}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            data-cy="password-input"
            className="form-control"
            placeholder="Enter password"
            value={form.password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" data-cy="login-button" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;