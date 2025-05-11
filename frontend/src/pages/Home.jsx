import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center text-white p-8"
    >
      <h1 className="text-6xl font-bold mb-8">Welcome to Our Platform</h1>
      <p className="text-xl mb-12 max-w-2xl">
        Discover the best experience for managing your account with secure authentication
        and beautiful interfaces.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Register
        </Link>
      </div>
    </motion.div>
  );
}