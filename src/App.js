import './App.css';
//Import Firebase
import 'firebase/compat/auth';

//Import Resources
import timesLogo from './Resources/times_logo.svg';
import timesLogoBW from './Resources/times_logo_bw.svg';

//Import Components
import { useState, useEffect } from 'react';
import { getAuth, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from "firebase/app"

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBV685ZZr9FV18lEOxvd_jcuPtzqq35xiE",
  authDomain: "times-budapest-2021.firebaseapp.com",
  projectId: "times-budapest-2021",
  storageBucket: "times-budapest-2021.appspot.com",
  messagingSenderId: "876651553073",
  appId: "1:876651553073:web:a3af78105d93847104d010"
};

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Set Up Authentication
const auth = getAuth(firebaseApp);

function App() {

  const[user] = useAuthState(auth);

  if (user) console.log(user)
  return (
    <div className="bg-primary h-screen relative w-screen">
      <section>
        {user ? <Site /> : <SignIn />}
      </section>
    </div>
  );
}

function Site() {
  const[user] = useAuthState(auth);

  return (
      <div className="flex justify-end items-center bg-secondary py-2 pr-5">
        <img alt="" src={timesLogo} className="h-3 pl-5 mr-auto"/>
        <h1 className="text-white text-xs hidden sm:text-md sm:block">{user ? user.email : ''}</h1>
        <button className="bg-white px-2 ml-4 hover:bg-gray-200 text-sm" onClick={() => signOut(auth)} >Kijelentkezés</button>
      </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onError = () => {
   setPassword('');     
  }

  const onSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      onError();
    });
  }

  const onReminder = (e) => {
    e.preventDefault();
    if (email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
    // Password reset email sent!
    // ..
    })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  }



  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex flex-col justify-center items-center">
        <img src={timesLogoBW} alt="" className="h-4 mb-1" />
        <p className="text-4xl text-secondary mb-6 font-semibold">Bejelentkezés</p>
      </div>

      <form onSubmit={onSignIn} className="w-3/5 max-w-sm shadow px-8 py-8 bg-white rounded flex justify-center flex-col">
        <div className="flex mb-2 flex-col">
          <p className="mb-1 text-secondary mr-2 font-semibold text-xs">E-mail<span className="text-red-600">*</span></p>
          <input required className="pl-2 border border-formBorder focus:outline-none focus:ring-2 focus:ring-estiemGreen" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex mb-6 flex-col">
          <p className="mb-1 text-secondary mr-2 font-semibold text-xs">Jelszó<span className="text-red-600">*</span></p>
          <input required className="pl-2 border border-formBorder focus:outline-none focus:ring-2 focus:ring-estiemGreen" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="mb-2 bg-estiemGreen hover:bg-estiemGreenHover text-white py-1 rounded-">Bejelentkezés</button>
        <p onClick={onReminder} className="text-xs underline">Elfelejtett jelszó</p>
      </form>
    </div>
  );
}

export default App;
