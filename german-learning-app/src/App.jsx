import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useStore from './store/useStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Themes from './pages/Themes';
import ThemeQuiz from './pages/ThemeQuiz';
import Wordle from './pages/Wordle';
import Crossword from './pages/Crossword';
import Stories from './pages/Stories';
import StoryPlayer from './pages/StoryPlayer';
import Dictionary from './pages/Dictionary';
import Leaderboard from './pages/Leaderboard';
import PvP from './pages/PvP';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const { isLoggedIn } = useStore();

  return (
    <Router>
      <div className="app">
        {isLoggedIn && <Navbar />}
        <main className="main-content">
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/themes" element={isLoggedIn ? <Themes /> : <Navigate to="/login" />} />
            <Route path="/theme/:id" element={isLoggedIn ? <ThemeQuiz /> : <Navigate to="/login" />} />
            <Route path="/wordle" element={isLoggedIn ? <Wordle /> : <Navigate to="/login" />} />
            <Route path="/crossword" element={isLoggedIn ? <Crossword /> : <Navigate to="/login" />} />
            <Route path="/stories" element={isLoggedIn ? <Stories /> : <Navigate to="/login" />} />
            <Route path="/story/:id" element={isLoggedIn ? <StoryPlayer /> : <Navigate to="/login" />} />
            <Route path="/dictionary" element={isLoggedIn ? <Dictionary /> : <Navigate to="/login" />} />
            <Route path="/leaderboard" element={isLoggedIn ? <Leaderboard /> : <Navigate to="/login" />} />
            <Route path="/pvp" element={isLoggedIn ? <PvP /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
