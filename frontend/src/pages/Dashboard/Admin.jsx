import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
    >
      <h1>Hello Admin {user.username}!</h1>
      {/* Contenu admin */}
    </motion.div>
  );
}