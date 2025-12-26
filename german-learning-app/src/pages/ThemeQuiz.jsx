import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { themes } from '../data/database';
import useStore from '../store/useStore';
import './ThemeQuiz.css';

function ThemeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { answerQuestion, completeTheme, currentQuestion, score, setCurrentTheme } = useStore();

  const theme = themes.find(t => t.id === id);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  if (!theme) {
    return <div className="text-center mt-3">Tema bulunamadı</div>;
  }

  const questions = theme.questions;
  const question = questions[currentQuestion];

  const handleAnswer = (index) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = index === question.correct;
    answerQuestion(isCorrect);

    setTimeout(() => {
      if (currentQuestion + 1 >= questions.length) {
        setIsFinished(true);
        completeTheme(theme.id);
      } else {
        setSelectedAnswer(null);
        setShowResult(false);
        useStore.getState().nextQuestion();
      }
    }, 1500);
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-result fade-in">
        <div className="result-card card text-center">
          <div className="result-emoji">
            {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h2>Tamamlandı!</h2>
          <p className="result-score">
            {score} / {questions.length} doğru
          </p>
          <div className="result-percentage">%{percentage}</div>
          <p className="text-gray mt-2">
            {percentage >= 80 ? 'Harika! Çok iyi gidiyorsun!' :
             percentage >= 50 ? 'İyi iş! Pratik yapmaya devam et.' :
             'Tekrar denemeni öneririm.'}
          </p>
          <div className="result-actions mt-3">
            <button className="btn btn-primary" onClick={() => navigate('/themes')}>
              Temalara Dön
            </button>
            <button className="btn btn-outline" onClick={() => window.location.reload()}>
              Tekrar Dene
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page fade-in">
      {/* Header */}
      <div className="quiz-header">
        <button className="btn-back" onClick={() => navigate('/themes')}>←</button>
        <div className="quiz-progress">
          <span>{currentQuestion + 1} / {questions.length}</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="quiz-score">🎯 {score}</div>
      </div>

      {/* Question */}
      <div className="question-card card">
        <h2 className="question-text">{question.question}</h2>
      </div>

      {/* Options */}
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
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeQuiz;
