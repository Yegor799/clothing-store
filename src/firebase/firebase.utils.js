import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';




const config = {
    apiKey: "AIzaSyD_O6DOKGp9-3gfiOSFIGulLiZQ0uNiNOQ",
    authDomain: "clothing-store-bdf39.firebaseapp.com",
    projectId: "clothing-store-bdf39",
    storageBucket: "clothing-store-bdf39.appspot.com",
    messagingSenderId: "654862172091",
    appId: "1:654862172091:web:89ca11a1d076bd4dbf8e9e",
    measurementId: "G-8JL46ZCDS3"
};

const app = initializeApp(config);
const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  
  const snapshot = await getDoc(userRef)
  
  
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, 'users', userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      
    } catch (error) {
      console.log('error creating user', error.message);
    }
  

  return userRef;
}


 export const auth = getAuth();


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

