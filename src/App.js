import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { doc, onSnapshot } from "firebase/firestore";
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';





function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
 
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth);
     }
      
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



export default App;


