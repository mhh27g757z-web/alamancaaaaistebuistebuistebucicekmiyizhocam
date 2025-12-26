import useStore from '../store/useStore';
import { levelProgress, xpToNextLevel, LEVELS } from '../data/database';
import './Profile.css';

function Profile() {
  const { user, logout, toggleSound, toggleDarkMode } = useStore();

  if (!user) return null;

  const progress = levelProgress(user.totalXp, user.level);
  const xpNeeded = xpToNextLevel(user.totalXp, user.level);
  const levelIndex = LEVELS.indexOf(user.level);

  return (
    <div className="profile-page fade-in">
      <h1>👤 Profil</h1>

      {/* Kullanıcı Kartı */}
      <div className="profile-card card">
        <div className="profile-header">
          <div className="profile-avatar">🧑</div>
          <div className="profile-info">
            <h2>{user.username}</h2>
            <div className={`level-badge level-${user.level}`}>{user.level}</div>
          </div>
        </div>

        <div className="xp-section">
          <div className="flex-between mb-1">
            <span>Toplam XP</span>
            <span className="text-primary">{user.totalXp}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex-between mt-1 text-sm text-gray">
            <span>{user.level}</span>
            <span>
              {xpNeeded > 0
                ? `${xpNeeded} XP → ${LEVELS[levelIndex + 1] || 'MAX'}`
                : 'Maksimum seviye!'}
            </span>
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <h3 className="section-title">İstatistikler</h3>
      <div className="stats-grid grid grid-2">
        <div className="stat-card card">
          <span className="stat-icon">🔥</span>
          <span className="stat-value">{user.streak || 0}</span>
          <span className="stat-label">Günlük Seri</span>
        </div>
        <div className="stat-card card">
          <span className="stat-icon">📚</span>
          <span className="stat-value">{user.completedThemes?.length || 0}</span>
          <span className="stat-label">Tamamlanan Tema</span>
        </div>
        <div className="stat-card card">
          <span className="stat-icon">⚔️</span>
          <span className="stat-value">{user.pvpWins || 0}</span>
          <span className="stat-label">PvP Galibiyet</span>
        </div>
        <div className="stat-card card">
          <span className="stat-icon">🎮</span>
          <span className="stat-value">{user.wordleScores?.length || 0}</span>
          <span className="stat-label">Wordle Oyunu</span>
        </div>
      </div>

      {/* Seviye İlerlemesi */}
      <h3 className="section-title">Seviye İlerlemesi</h3>
      <div className="levels-progress card">
        {LEVELS.map((level, index) => {
          const isCompleted = index < levelIndex;
          const isCurrent = level === user.level;
          return (
            <div
              key={level}
              className={`level-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
            >
              <div className={`level-circle level-${level}`}>
                {isCompleted ? '✓' : level}
              </div>
              <span className="level-name">{level}</span>
            </div>
          );
        })}
      </div>

      {/* Ayarlar */}
      <h3 className="section-title">Ayarlar</h3>
      <div className="settings-list card">
        <div className="setting-item">
          <span>🔊 Sesler</span>
          <button
            className={`toggle-btn ${user.settings?.soundEnabled ? 'active' : ''}`}
            onClick={toggleSound}
          >
            {user.settings?.soundEnabled ? 'Açık' : 'Kapalı'}
          </button>
        </div>
        <div className="setting-item">
          <span>🌙 Karanlık Mod</span>
          <button
            className={`toggle-btn ${user.settings?.darkMode ? 'active' : ''}`}
            onClick={toggleDarkMode}
          >
            {user.settings?.darkMode ? 'Açık' : 'Kapalı'}
          </button>
        </div>
      </div>

      {/* Çıkış */}
      <button className="btn btn-danger btn-block mt-3" onClick={logout}>
        Çıkış Yap
      </button>

      <p className="text-center text-gray text-sm mt-2">
        Almanca Öğren v1.0.0
      </p>
    </div>
  );
}

export default Profile;
