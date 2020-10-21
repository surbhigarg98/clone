import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA84gxTjZt7G3gyL43P9IO0mtgkG81IybM",
    authDomain: "netflix-clone-8ac1a.firebaseapp.com",
    databaseURL: "https://netflix-clone-8ac1a.firebaseio.com",
    projectId: "netflix-clone-8ac1a",
    storageBucket: "netflix-clone-8ac1a.appspot.com",
    messagingSenderId: "815229067186",
    appId: "1:815229067186:web:f9f001cad58fb049e28eab",
    measurementId: "G-2HP193M625"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db