import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-links">
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Déconnexion</button>
          </>
        )}
      </div>
    </nav>
  );
}