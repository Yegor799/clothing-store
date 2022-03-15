import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {  onSnapshot } from "firebase/firestore";
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';



function App() {

  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch(); 
  
  const navigate = useNavigate();
  
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

  useEffect(() => {
    if (currentUser) {
      return navigate("/");
    }
  }, [currentUser, navigate]);
  
  
  

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

//начал 121 папка 8


