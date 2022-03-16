import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzvHYYkHpwHxMbywrzDA7hOkzYS4ttgRA",
  authDomain: "cooking-catz.firebaseapp.com",
  projectId: "cooking-catz",
  storageBucket: "cooking-catz.appspot.com",
  messagingSenderId: "537933021416",
  appId: "1:537933021416:web:8085f5718c81959962495d",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
