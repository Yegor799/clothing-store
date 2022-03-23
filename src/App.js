import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';
import CollectionPage from './pages/collection/Collection';



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

    return () => auth.onAuthStateChanged();
    
  }, [dispatch]);

  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />        
        <Route path="/shop/:collectionId" element={<CollectionPage />}/>
        <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}



export default App;



//начал папка 13 161
