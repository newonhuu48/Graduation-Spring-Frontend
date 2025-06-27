import LoginForm from 'components/LoginForm';

import { useState } from 'react';
import api from '../api/axios';

function parseJwtPayload(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', {
        username: form.username,
        password: form.password,
      });

      const token = res.data;
      localStorage.setItem('token', token);

      const claims = parseJwtPayload(token);
      if (!claims) throw new Error('Invalid token');

      localStorage.setItem('claims', JSON.stringify(claims));
      onLogin(claims);
    } catch {
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <div>
      <LoginForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default LoginPage;