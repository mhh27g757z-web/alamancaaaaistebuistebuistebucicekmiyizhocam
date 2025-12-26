import { Link } from 'react-router-dom';
import { stories, LEVELS } from '../data/database';
import { useState } from 'react';
import './Stories.css';

function Stories() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredStories = selectedLevel === 'all'
    ? stories
    : stories.filter(s => s.level === selectedLevel);

  return (
    <div className="stories-page fade-in">
      <h1>📖 Hikayeler</h1>
      <p className="text-gray mb-2">Çizgi dizi formatında Almanca hikayeler</p>

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

      {/* Hikaye Listesi */}
      <div className="stories-list">
        {filteredStories.map(story => (
          <Link to={`/story/${story.id}`} key={story.id} className="story-card card">
            <div className="story-thumbnail">{story.thumbnail}</div>
            <div className="story-info">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <div className="story-meta">
                <span className={`badge level-${story.level}`}>{story.level}</span>
                <span>⏱️ {story.duration}</span>
                <span>📺 {story.episodes.length} bölüm</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="empty-state">
          <p>Bu seviyede henüz hikaye yok.</p>
        </div>
      )}
    </div>
  );
}

export default Stories;
