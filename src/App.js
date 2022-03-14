import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {  onSnapshot } from "firebase/firestore";
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';



function App() {

  const dispatch = useDispatch();  
 
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          }))
        })
      } else {
        dispatch(setCurrentUser(userAuth));
     }
      
    })
  }, [dispatch]);  
  
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}



export default App;

//начал 118 папка 8


