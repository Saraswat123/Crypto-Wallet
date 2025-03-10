import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}