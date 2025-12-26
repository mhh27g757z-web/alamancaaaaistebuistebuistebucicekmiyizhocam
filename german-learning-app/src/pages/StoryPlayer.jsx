import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stories } from '../data/database';
import './StoryPlayer.css';

function StoryPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = stories.find(s => s.id === id);

  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  if (!story) {
    return <div className="text-center mt-3">Hikaye bulunamadı</div>;
  }

  const episode = story.episodes[currentEpisode];
  const scene = episode.scenes[currentScene];
  const isLastScene = currentScene === episode.scenes.length - 1;
  const isLastEpisode = currentEpisode === story.episodes.length - 1;

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        nextScene();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentScene, autoPlay]);

  const nextScene = () => {
    if (!isLastScene) {
      setCurrentScene(currentScene + 1);
      setShowTranslation(false);
    } else if (!isLastEpisode) {
      setCurrentEpisode(currentEpisode + 1);
      setCurrentScene(0);
      setShowTranslation(false);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
      setShowTranslation(false);
    } else if (currentEpisode > 0) {
      setCurrentEpisode(currentEpisode - 1);
      setCurrentScene(story.episodes[currentEpisode - 1].scenes.length - 1);
      setShowTranslation(false);
    }
  };

  return (
    <div className="story-player fade-in">
      {/* Header */}
      <div className="player-header">
        <button className="btn-back" onClick={() => navigate('/stories')}>←</button>
        <div className="player-title">
          <h2>{story.title}</h2>
          <p>{episode.title}</p>
        </div>
        <button
          className={`btn-autoplay ${autoPlay ? 'active' : ''}`}
          onClick={() => setAutoPlay(!autoPlay)}
        >
          {autoPlay ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Progress */}
      <div className="episode-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentScene + 1) / episode.scenes.length) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">
          Sahne {currentScene + 1} / {episode.scenes.length}
        </span>
      </div>

      {/* Scene */}
      <div className="scene-container card">
        <div className="character">
          <div className="character-avatar">{scene.image}</div>
          <div className="character-name">{scene.character}</div>
        </div>

        <div className="dialogue">
          <p className="german-text">{scene.german}</p>
          {showTranslation && (
            <p className="turkish-text fade-in">{scene.turkish}</p>
          )}
        </div>

        <button
          className="btn btn-outline translation-toggle"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? 'Çeviriyi Gizle' : 'Çeviriyi Göster'} 🔄
        </button>
      </div>

      {/* Navigation */}
      <div className="scene-navigation">
        <button
          className="btn btn-outline"
          onClick={prevScene}
          disabled={currentScene === 0 && currentEpisode === 0}
        >
          ← Önceki
        </button>
        <button
          className="btn btn-primary"
          onClick={nextScene}
          disabled={isLastScene && isLastEpisode}
        >
          {isLastScene && isLastEpisode ? 'Bitti' : 'Sonraki →'}
        </button>
      </div>

      {/* Episode Selector */}
      <div className="episode-selector">
        <h4>Bölümler</h4>
        <div className="episodes-list">
          {story.episodes.map((ep, index) => (
            <button
              key={ep.id}
              className={`episode-btn ${currentEpisode === index ? 'active' : ''}`}
              onClick={() => {
                setCurrentEpisode(index);
                setCurrentScene(0);
                setShowTranslation(false);
              }}
            >
              {index + 1}. {ep.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryPlayer;
