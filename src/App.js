import './App.css';
//Import Firebase
import 'firebase/compat/auth';

//Import Resources
import timesLogoBW from './Resources/times_logo_bw.svg';

//Import Components
import { useState, useEffect } from 'react';
import { getAuth, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from "firebase/app"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Components/Form';
import Splash from './Components/Splash'


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

//Base Function
function App() {
  //Variables
  const[splash, setSplash] = useState(false);
  const[user] = useAuthState(auth);


  useEffect(() => {
    setSplash(true);
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-primary h-screen relative w-screen">
          <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      <section>
        {splash ? <Splash /> : (user ? <Site /> : <SignIn />)}
      </section>
    </div>
  );
}

function Site() {
  const[user] = useAuthState(auth);

  const onSignOut = () => {
    toast.success('Sikeres kijelentkezés!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      signOut(auth);
  }

  return (
      <div className="bg-primary">
        <div className="fixed top-0 left-0 w-screen flex justify-end items-center bg-white py-2 pr-5 shadow">
          <img alt="" src={timesLogoBW} className="h-3 pl-5 mr-auto"/>
          <h1 className="text-secondary text-xs hidden sm:text-md sm:block">{user ? user.email : ''}</h1>
          <button className="bg-estiemGreen py-1 text-white px-3 ml-4 hover:bg-estiemGreenHover text-sm rounded" onClick={onSignOut} >Kijelentkezés</button>
        </div>
          {/*Form*/}
        <Form />
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
      toast.success('Sikeres bejelentkezés', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code)
      onError();
      if (error.code == 'auth/user-not-found') {
        toast.error('Ismeretlen e-mail cím!', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      if (error.code == 'auth/wrong-password') {
        toast.error('Hibás jelszó!', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    });
  }

  const onReminder = (e) => {
    e.preventDefault();
    if (email) {
    sendPasswordResetEmail(auth, email)
    toast.info('Emlékeztetető küldve a ' + email + ' címre!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    .then(() => {

    })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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
          <input required className="pl-2 border border-formBorder focus:outline-none focus:ring-2 focus:ring-estiemGreen focus:border-opacity-0" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex mb-6 flex-col">
          <p className="mb-1 text-secondary mr-2 font-semibold text-xs">Jelszó<span className="text-red-600">*</span></p>
          <input required className="pl-2 border border-formBorder focus:outline-none focus:ring-2 focus:ring-estiemGreen focus:border-opacity-0" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="mb-2 bg-estiemGreen hover:bg-estiemGreenHover text-white py-1 rounded-">Bejelentkezés</button>
        <p onClick={onReminder} className="text-xs underline">Elfelejtett jelszó</p>
      </form>
    </div>
  );
}

export default App;
