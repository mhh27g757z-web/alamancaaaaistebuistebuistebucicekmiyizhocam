import { useState, useMemo } from 'react';
import { dictionary } from '../data/database';
import './Dictionary.css';

function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const types = ['all', ...new Set(dictionary.map(d => d.type))];

  const filteredWords = useMemo(() => {
    return dictionary.filter(word => {
      const matchesSearch =
        word.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.turkish.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || word.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, filterType]);

  return (
    <div className="dictionary-page fade-in">
      <h1>📕 Sözlük</h1>
      <p className="text-gray mb-2">Almanca-Türkçe sözlük ({dictionary.length} kelime)</p>

      {/* Arama */}
      <div className="search-box">
        <input
          type="text"
          className="input"
          placeholder="Kelime ara (Almanca veya Türkçe)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtreler */}
      <div className="type-filter">
        {types.map(type => (
          <button
            key={type}
            className={`filter-btn ${filterType === type ? 'active' : ''}`}
            onClick={() => setFilterType(type)}
          >
            {type === 'all' ? 'Tümü' : type}
          </button>
        ))}
      </div>

      {/* Sonuç sayısı */}
      <p className="result-count">{filteredWords.length} sonuç bulundu</p>

      {/* Kelime Listesi */}
      <div className="words-list">
        {filteredWords.slice(0, 50).map((word, index) => (
          <div key={index} className="word-card card">
            <div className="word-header">
              <div className="word-german">
                {word.article && <span className="article">{word.article}</span>}
                <span className="german">{word.german}</span>
              </div>
              <span className="word-type badge">{word.type}</span>
            </div>
            <div className="word-turkish">{word.turkish}</div>
            {word.example && (
              <div className="word-example">
                <span className="example-label">Örnek:</span> {word.example}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredWords.length > 50 && (
        <p className="text-center text-gray mt-2">
          İlk 50 sonuç gösteriliyor. Daha spesifik arama yapın.
        </p>
      )}

      {filteredWords.length === 0 && (
        <div className="empty-state">
          <p>Aramanızla eşleşen kelime bulunamadı.</p>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
