import { NavLink } from 'react-router-dom';
import useStore from '../store/useStore';
import './Navbar.css';

function Navbar() {
  const { user } = useStore();

  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Ana Sayfa</span>
      </NavLink>
      <NavLink to="/themes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">📚</span>
        <span className="nav-label">Temalar</span>
      </NavLink>
      <NavLink to="/pvp" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">⚔️</span>
        <span className="nav-label">PvP</span>
      </NavLink>
      <NavLink to="/leaderboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">🏆</span>
        <span className="nav-label">Sıralama</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="nav-icon">👤</span>
        <span className="nav-label">Profil</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
