import { Link } from 'react-router-dom';
import { themes, LEVELS } from '../data/database';
import useStore from '../store/useStore';
import './Themes.css';

function Themes() {
  const { user } = useStore();
  const [selectedLevel, setSelectedLevel] = React.useState('all');

  const filteredThemes = selectedLevel === 'all'
    ? themes
    : themes.filter(t => t.level === selectedLevel);

  return (
    <div className="themes-page fade-in">
      <h1>📚 Temalar</h1>
      <p className="text-gray mb-2">Seviyene uygun temalardan kelime öğren</p>

      {/* Seviye Filtresi */}
      <div className="level-filter">
        <button
          className={`filter-btn ${selectedLevel === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedLevel('all')}
        >
          Tümü
        </button>
        {LEVELS.map(level => (
          <button
            key={level}
            className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Tema Listesi */}
      <div className="themes-list">
        {filteredThemes.map(theme => {
          const isCompleted = user?.completedThemes?.includes(theme.id);
          return (
            <Link
              to={`/theme/${theme.id}`}
              key={theme.id}
              className="theme-card card"
              style={{ borderLeft: `4px solid ${theme.color}` }}
            >
              <div className="theme-icon">{theme.icon}</div>
              <div className="theme-info">
                <h3>{theme.name}</h3>
                <p>{theme.description}</p>
                <div className="theme-meta">
                  <span className={`badge level-${theme.level}`}>{theme.level}</span>
                  <span>{theme.words.length} kelime</span>
                  {isCompleted && <span className="completed-badge">✅</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
export default Themes;
