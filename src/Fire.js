import firebase from 'firebase/app';
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyByma4rfpmOg7TiGFq-RlSAiMNwXnw5_iU",
  authDomain: "ordentrabajo-989c8.firebaseapp.com",
  databaseURL: "https://ordentrabajo-989c8.firebaseio.com",
  projectId: "ordentrabajo-989c8",
  storageBucket: "ordentrabajo-989c8.appspot.com",
  messagingSenderId: "389115284614",
  appId: "1:389115284614:web:c3ff445adefbb9d4141507"
  });
  const db = firebase.firestore();
  db.settings({})

  export default db