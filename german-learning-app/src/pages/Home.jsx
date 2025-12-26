import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import { levelProgress, xpToNextLevel } from '../data/database';
import './Home.css';

function Home() {
  const { user } = useStore();

  if (!user) return null;

  const progress = levelProgress(user.totalXp, user.level);
  const xpNeeded = xpToNextLevel(user.totalXp, user.level);

  return (
    <div className="home fade-in">
      {/* Kullanıcı Bilgisi */}
      <div className="user-card card">
        <div className="user-info">
          <div className={`level-badge level-${user.level}`}>{user.level}</div>
          <div>
            <h2>Merhaba, {user.username}!</h2>
            <p className="text-gray">Günlük seri: {user.streak} 🔥</p>
          </div>
        </div>
        <div className="xp-info">
          <div className="flex-between mb-1">
            <span>XP: {user.totalXp}</span>
            <span>{xpNeeded > 0 ? `${xpNeeded} XP kaldı` : 'Maksimum seviye!'}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      {/* Hızlı Erişim */}
      <h3 className="section-title">Öğrenmeye Başla</h3>
      <div className="quick-actions grid grid-2">
        <Link to="/themes" className="action-card card">
          <span className="action-icon">📚</span>
          <span className="action-title">Temalar</span>
          <span className="action-desc">Kelime öğren</span>
        </Link>
        <Link to="/pvp" className="action-card card">
          <span className="action-icon">⚔️</span>
          <span className="action-title">PvP Kapışma</span>
          <span className="action-desc">Online yarış</span>
        </Link>
      </div>

      {/* Oyunlar */}
      <h3 className="section-title">Oyunlar</h3>
      <div className="games grid grid-2">
        <Link to="/wordle" className="game-card card">
          <span className="game-icon">🔤</span>
          <span className="game-title">Wordle</span>
          <span className="game-desc">Kelime tahmin</span>
        </Link>
        <Link to="/crossword" className="game-card card">
          <span className="game-icon">📝</span>
          <span className="game-title">Crossword</span>
          <span className="game-desc">Bulmaca çöz</span>
        </Link>
      </div>

      {/* Diğer */}
      <h3 className="section-title">Keşfet</h3>
      <div className="explore grid grid-2">
        <Link to="/stories" className="explore-card card">
          <span className="explore-icon">📖</span>
          <span>Hikayeler</span>
        </Link>
        <Link to="/dictionary" className="explore-card card">
          <span className="explore-icon">📕</span>
          <span>Sözlük</span>
        </Link>
      </div>

      {/* İstatistikler */}
      <h3 className="section-title">İstatistikler</h3>
      <div className="stats grid grid-3">
        <div className="stat-card card">
          <span className="stat-value">{user.completedThemes?.length || 0}</span>
          <span className="stat-label">Tema</span>
        </div>
        <div className="stat-card card">
          <span className="stat-value">{user.pvpWins || 0}</span>
          <span className="stat-label">PvP Galibiyet</span>
        </div>
        <div className="stat-card card">
          <span className="stat-value">{user.streak || 0}</span>
          <span className="stat-label">Seri</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
