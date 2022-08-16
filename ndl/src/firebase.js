import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiavvcYc6SvhUHcwqHwcV_G08oqcxkR84",
  authDomain: "linkedin-clone-fb9ac.firebaseapp.com",
  projectId: "linkedin-clone-fb9ac",
  storageBucket: "linkedin-clone-fb9ac.appspot.com",
  messagingSenderId: "842482131980",
  appId: "1:842482131980:web:e2c263284d444757ddfa29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
