import LoginForm from '../components/LoginForm';

function LoginPage({ onLogin }) {
  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;