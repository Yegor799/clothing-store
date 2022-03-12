import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';





function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
 
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      createUserProfileDocument(user);
      setCurrentUser(user)
      
    })
  }, []);  
  
  

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

//098 в процессе

export default App;


