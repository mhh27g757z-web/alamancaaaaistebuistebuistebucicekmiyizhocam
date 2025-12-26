import { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import { themes } from '../data/database';
import './PvP.css';

function PvP() {
  const {
    user,
    matchmaking,
    startMatchmaking,
    cancelMatchmaking,
    pvpAnswer,
    endPvpGame,
    resetPvp
  } = useStore();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);

  // Oyun başladığında soruları hazırla
  useEffect(() => {
    if (matchmaking.gameStatus === 'playing' && questions.length === 0) {
      // Tüm temalardan rastgele sorular al
      const allQuestions = themes.flatMap(t => t.questions);
      const shuffled = allQuestions.sort(() => Math.random() - 0.5);
      setQuestions(shuffled.slice(0, 5));
    }
  }, [matchmaking.gameStatus]);

  // Oyun bitişini kontrol et
  useEffect(() => {
    if (matchmaking.currentQuestion >= 5 && matchmaking.gameStatus === 'playing') {
      const won = matchmaking.myScore > matchmaking.opponentScore;
      endPvpGame(won);
    }
  }, [matchmaking.currentQuestion]);

  const handleAnswer = (index) => {
    if (showResult || matchmaking.gameStatus !== 'playing') return;

    setSelectedAnswer(index);
    setShowResult(true);

    const question = questions[matchmaking.currentQuestion];
    const isCorrect = index === question.correct;
    pvpAnswer(isCorrect);

    setTimeout(() => {
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  const handleNewGame = () => {
    resetPvp();
    setQuestions([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  // Arama ekranı
  if (matchmaking.gameStatus === 'idle') {
    return (
      <div className="pvp-page fade-in">
        <h1>⚔️ PvP Kapışma</h1>
        <p className="text-gray mb-2">Online rakiplerle Almanca bilgini yarıştır!</p>

        <div className="pvp-stats card">
          <div className="stat">
            <span className="stat-value">{user?.pvpWins || 0}</span>
            <span className="stat-label">Galibiyet</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user?.pvpLosses || 0}</span>
            <span className="stat-label">Mağlubiyet</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {user?.pvpWins && user?.pvpLosses
                ? Math.round((user.pvpWins / (user.pvpWins + user.pvpLosses)) * 100)
                : 0}%
            </span>
            <span className="stat-label">Kazanma</span>
          </div>
        </div>

        <div className="matchmaking-box card">
          <div className="matchmaking-icon">🎮</div>
          <h2>Hazır mısın?</h2>
          <p className="text-gray">5 soruluk hızlı bir kapışma!</p>
          <button className="btn btn-primary btn-block mt-2" onClick={startMatchmaking}>
            Rakip Ara ⚔️
          </button>
        </div>
      </div>
    );
  }

  // Arama yapılıyor
  if (matchmaking.gameStatus === 'searching') {
    return (
      <div className="pvp-page fade-in">
        <div className="searching-box card text-center">
          <div className="searching-animation">🔍</div>
          <h2>Rakip Aranıyor...</h2>
          <p className="text-gray">Seninle eşleşecek bir rakip bekleniyor</p>
          <div className="loading-dots">
            <span></span><span></span><span></span>
          </div>
          <button className="btn btn-outline mt-2" onClick={cancelMatchmaking}>
            İptal
          </button>
        </div>
      </div>
    );
  }

  // Oyun bitti
  if (matchmaking.gameStatus === 'finished') {
    const won = matchmaking.myScore > matchmaking.opponentScore;
    const tied = matchmaking.myScore === matchmaking.opponentScore;

    return (
      <div className="pvp-page fade-in">
        <div className="game-over card text-center">
          <div className="result-emoji">
            {won ? '🎉' : tied ? '🤝' : '😔'}
          </div>
          <h2>{won ? 'Kazandın!' : tied ? 'Berabere!' : 'Kaybettin!'}</h2>

          <div className="final-scores">
            <div className="final-score you">
              <span className="player-name">Sen</span>
              <span className="player-score">{matchmaking.myScore}</span>
            </div>
            <span className="vs">VS</span>
            <div className="final-score opponent">
              <span className="player-name">{matchmaking.opponent?.username}</span>
              <span className="player-score">{matchmaking.opponentScore}</span>
            </div>
          </div>

          <div className="xp-earned">
            {won ? '+50 XP' : '+5 XP'}
          </div>

          <button className="btn btn-primary btn-block mt-2" onClick={handleNewGame}>
            Yeni Oyun
          </button>
        </div>
      </div>
    );
  }

  // Oyun devam ediyor
  const question = questions[matchmaking.currentQuestion];

  if (!question) return null;

  return (
    <div className="pvp-page fade-in">
      {/* Skorboard */}
      <div className="pvp-header">
        <div className="player you">
          <span className="player-avatar">🧑</span>
          <span className="player-name">Sen</span>
          <span className="player-score">{matchmaking.myScore}</span>
        </div>
        <div className="vs-badge">VS</div>
        <div className="player opponent">
          <span className="player-score">{matchmaking.opponentScore}</span>
          <span className="player-name">{matchmaking.opponent?.username}</span>
          <span className="player-avatar">{matchmaking.opponent?.avatar}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="pvp-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((matchmaking.currentQuestion + 1) / 5) * 100}%` }}
          ></div>
        </div>
        <span>Soru {matchmaking.currentQuestion + 1} / 5</span>
      </div>

      {/* Soru */}
      <div className="question-card card">
        <h2 className="question-text">{question.question}</h2>
      </div>

      {/* Seçenekler */}
      <div className="options">
        {question.options.map((option, index) => {
          let className = 'option-btn';
          if (showResult) {
            if (index === question.correct) {
              className += ' correct';
            } else if (index === selectedAnswer && index !== question.correct) {
              className += ' wrong';
            }
          }
          if (selectedAnswer === index) {
            className += ' selected';
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PvP;
