import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

//закончил 5 папку
