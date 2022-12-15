// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAvUthyPgPSMn130HfSzoGgGa08iIPfeo",
  authDomain: "easywash-2.firebaseapp.com",
  projectId: "easywash-2",
  storageBucket: "easywash-2.appspot.com",
  messagingSenderId: "883197004010",
  appId: "1:883197004010:web:d93726385d4e740ead2f93",
  measurementId: "G-6G59SRV7HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };