import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user'
  });
  
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="auth-container"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Inscription</h2>

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Rôle</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </motion.div>
  );
}