import { useState, useEffect } from 'react';
import { crosswordPuzzles } from '../data/database';
import useStore from '../store/useStore';
import './Crossword.css';

function Crossword() {
  const { addCrosswordScore } = useStore();
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedWord, setSelectedWord] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const puzzle = crosswordPuzzles[currentPuzzle];

  useEffect(() => {
    // Başlangıçta boş cevapları ayarla
    const initial = {};
    puzzle.words.forEach(word => {
      initial[word.word] = '';
    });
    setUserAnswers(initial);
    setIsComplete(false);
  }, [currentPuzzle]);

  const handleInputChange = (word, value) => {
    const newAnswers = {
      ...userAnswers,
      [word]: value.toUpperCase()
    };
    setUserAnswers(newAnswers);

    // Tamamlanma kontrolü
    const allCorrect = puzzle.words.every(w => newAnswers[w.word] === w.word);
    if (allCorrect) {
      setIsComplete(true);
      addCrosswordScore(100);
    }
  };

  const nextPuzzle = () => {
    if (currentPuzzle < crosswordPuzzles.length - 1) {
      setCurrentPuzzle(currentPuzzle + 1);
    }
  };

  return (
    <div className="crossword-page fade-in">
      <h1>📝 Crossword</h1>
      <p className="text-gray mb-2">{puzzle.title} - {puzzle.level}</p>

      {isComplete && (
        <div className="complete-message">
          🎉 Tebrikler! Bulmacayı tamamladın!
          {currentPuzzle < crosswordPuzzles.length - 1 && (
            <button className="btn btn-primary mt-2" onClick={nextPuzzle}>
              Sonraki Bulmaca →
            </button>
          )}
        </div>
      )}

      {/* Grid Görünümü */}
      <div className="crossword-grid">
        {puzzle.grid.map((row, rowIndex) => (
          <div key={rowIndex} className="crossword-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`crossword-cell ${cell === ' ' ? 'empty' : ''}`}
              >
                {cell !== ' ' && cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* İpuçları ve Cevaplar */}
      <div className="clues-section">
        <h3>İpuçları</h3>
        {puzzle.words.map((word, index) => (
          <div key={index} className="clue-item">
            <div className="clue-header">
              <span className="clue-number">{index + 1}.</span>
              <span className="clue-direction">
                {word.direction === 'across' ? '→' : '↓'}
              </span>
              <span className="clue-text">{word.clue}</span>
            </div>
            <input
              type="text"
              className={`clue-input ${userAnswers[word.word] === word.word ? 'correct' : ''}`}
              placeholder={`${word.word.length} harf`}
              value={userAnswers[word.word] || ''}
              onChange={(e) => handleInputChange(word.word, e.target.value)}
              maxLength={word.word.length}
              disabled={isComplete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crossword;
