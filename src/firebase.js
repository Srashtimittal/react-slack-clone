   import firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';

   const firebaseConfig = {
    apiKey: "AIzaSyBnqiU7U78dZ-qCRjNAE-mtiWuEVyu8naM",
    authDomain: "react-slack-clone-8adba.firebaseapp.com",
    databaseURL: "https://react-slack-clone-8adba.firebaseio.com",
    projectId: "react-slack-clone-8adba",
    storageBucket: "react-slack-clone-8adba.appspot.com",
    messagingSenderId: "619917987757",
    appId: "1:619917987757:web:f386287fe23756008e1b24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  export const signInWithGoogle = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  };