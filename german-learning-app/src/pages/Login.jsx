import { useState } from 'react';
import useStore from '../store/useStore';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length >= 3) {
      login(username.trim());
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">🇩🇪 Almanca Öğren</h1>
          <p className="login-subtitle">Türkçe konuşanlar için interaktif Almanca öğrenme platformu</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Kullanıcı adınız"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              maxLength={20}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={username.trim().length < 3}>
            Başla 🚀
          </button>
        </form>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">📚</span>
            <span>Temalar</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🎮</span>
            <span>Oyunlar</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⚔️</span>
            <span>PvP</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📖</span>
            <span>Hikayeler</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
