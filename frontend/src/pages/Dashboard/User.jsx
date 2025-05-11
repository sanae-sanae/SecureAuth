import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8 text-white"
    >
      <h1 className="text-4xl font-bold mb-8">
        Hello {user?.role === 'admin' ? 'Admin' : 'User'} {user?.username}!
      </h1>
      <div className="glass-container p-6 rounded-lg">
        <h2 className="text-2xl mb-4">Your Profile</h2>
        <p>Email: {user?.email}</p>
        <p>Role: {user?.role}</p>
      </div>
    </motion.div>
  );
}