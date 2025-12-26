import { useState, useEffect } from 'react';
import { wordleWords, LEVELS } from '../data/database';
import useStore from '../store/useStore';
import './Wordle.css';

function Wordle() {
  const { user, addWordleScore } = useStore();
  const [selectedLevel, setSelectedLevel] = useState(user?.level || 'A1');
  const [targetWord, setTargetWord] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost
  const [showHint, setShowHint] = useState(false);

  const maxAttempts = 6;

  useEffect(() => {
    startNewGame();
  }, [selectedLevel]);

  const startNewGame = () => {
    const words = wordleWords[selectedLevel] || wordleWords['A1'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setTargetWord(randomWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setShowHint(false);
  };

  const handleKeyPress = (key) => {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      if (currentGuess.length === targetWord.word.length) {
        submitGuess();
      }
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < targetWord.word.length && /^[A-ZÄÖÜß]$/.test(key)) {
      setCurrentGuess(prev => prev + key);
    }
  };

  const submitGuess = () => {
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord.word) {
      setGameStatus('won');
      addWordleScore(maxAttempts - newGuesses.length + 1);
    } else if (newGuesses.length >= maxAttempts) {
      setGameStatus('lost');
      addWordleScore(0);
    }
  };

  const getLetterStatus = (letter, index, guess) => {
    if (targetWord.word[index] === letter) return 'correct';
    if (targetWord.word.includes(letter)) return 'present';
    return 'absent';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-ZÄÖÜß]$/.test(key)) {
        handleKeyPress(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameStatus, targetWord]);

  if (!targetWord) return null;

  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ü'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä'],
    ['ENTER', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'ß', 'BACKSPACE']
  ];

  return (
    <div className="wordle-page fade-in">
      <h1>🔤 Wordle</h1>

      {/* Seviye Seçimi */}
      <div className="level-selector">
        {LEVELS.map(level => (
          <button
            key={level}
            className={`level-btn ${selectedLevel === level ? 'active' : ''}`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* İpucu */}
      <div className="hint-section">
        <button className="btn btn-outline" onClick={() => setShowHint(!showHint)}>
          {showHint ? 'İpucunu Gizle' : 'İpucu Göster'} 💡
        </button>
        {showHint && <p className="hint-text">Türkçesi: {targetWord.turkish}</p>}
      </div>

      {/* Tahmin Grid */}
      <div className="wordle-grid">
        {[...Array(maxAttempts)].map((_, rowIndex) => (
          <div key={rowIndex} className="wordle-row">
            {[...Array(targetWord.word.length)].map((_, colIndex) => {
              let letter = '';
              let status = '';

              if (rowIndex < guesses.length) {
                letter = guesses[rowIndex][colIndex] || '';
                status = getLetterStatus(letter, colIndex, guesses[rowIndex]);
              } else if (rowIndex === guesses.length) {
                letter = currentGuess[colIndex] || '';
              }

              return (
                <div key={colIndex} className={`wordle-cell ${status}`}>
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Oyun Durumu */}
      {gameStatus !== 'playing' && (
        <div className="game-result">
          {gameStatus === 'won' ? (
            <div className="result-message success">
              🎉 Tebrikler! {guesses.length} denemede buldun!
            </div>
          ) : (
            <div className="result-message fail">
              😔 Doğru cevap: <strong>{targetWord.word}</strong> ({targetWord.turkish})
            </div>
          )}
          <button className="btn btn-primary mt-2" onClick={startNewGame}>
            Yeni Oyun
          </button>
        </div>
      )}

      {/* Klavye */}
      <div className="keyboard">
        {keyboard.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map(key => (
              <button
                key={key}
                className={`key ${key === 'ENTER' || key === 'BACKSPACE' ? 'key-wide' : ''}`}
                onClick={() => handleKeyPress(key)}
              >
                {key === 'BACKSPACE' ? '⌫' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wordle;
