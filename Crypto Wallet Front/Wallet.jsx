import { motion } from 'framer-motion';

const Wallet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-4">Wallet</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>Your wallet balance: $1,694.00</p>
      </div>
    </motion.div>
  );
};

export default Wallet;