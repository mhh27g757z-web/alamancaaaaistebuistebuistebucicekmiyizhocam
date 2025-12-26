import { useState } from 'react';
import useStore from '../store/useStore';
import { LEVELS } from '../data/database';
import './Leaderboard.css';

function Leaderboard() {
  const { leaderboard, user } = useStore();
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredLeaderboard = filterLevel === 'all'
    ? leaderboard
    : leaderboard.filter(u => u.level === filterLevel);

  const userRank = leaderboard.findIndex(u => u.id === user?.id) + 1;

  return (
    <div className="leaderboard-page fade-in">
      <h1>🏆 Lider Tablosu</h1>
      <p className="text-gray mb-2">En iyi Almanca öğrencileri</p>

      {/* Kullanıcı Sıralaması */}
      {user && userRank > 0 && (
        <div className="user-rank card">
          <span className="rank-label">Senin sıralaman</span>
          <span className="rank-number">#{userRank}</span>
          <span className="rank-xp">{user.totalXp} XP</span>
        </div>
      )}

      {/* Seviye Filtresi */}
      <div className="level-filter">
        <button
          className={`filter-btn ${filterLevel === 'all' ? 'active' : ''}`}
          onClick={() => setFilterLevel('all')}
        >
          Tümü
        </button>
        {LEVELS.map(level => (
          <button
            key={level}
            className={`filter-btn ${filterLevel === level ? 'active' : ''}`}
            onClick={() => setFilterLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Top 3 */}
      <div className="top-three">
        {filteredLeaderboard.slice(0, 3).map((player, index) => (
          <div key={player.id} className={`top-player rank-${index + 1}`}>
            <div className="top-medal">
              {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
            </div>
            <div className="top-avatar">{player.avatar}</div>
            <div className="top-name">{player.username}</div>
            <div className={`top-level level-${player.level}`}>{player.level}</div>
            <div className="top-xp">{player.xp.toLocaleString()} XP</div>
          </div>
        ))}
      </div>

      {/* Diğerleri */}
      <div className="leaderboard-list">
        {filteredLeaderboard.slice(3).map((player, index) => (
          <div
            key={player.id}
            className={`leaderboard-item card ${player.id === user?.id ? 'current-user' : ''}`}
          >
            <span className="item-rank">#{index + 4}</span>
            <span className="item-avatar">{player.avatar}</span>
            <div className="item-info">
              <span className="item-name">{player.username}</span>
              <span className={`item-level level-${player.level}`}>{player.level}</span>
            </div>
            <span className="item-xp">{player.xp.toLocaleString()} XP</span>
          </div>
        ))}
      </div>

      {filteredLeaderboard.length === 0 && (
        <div className="empty-state">
          <p>Bu seviyede henüz oyuncu yok.</p>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
