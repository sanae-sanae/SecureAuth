import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full"
    />
  );
}