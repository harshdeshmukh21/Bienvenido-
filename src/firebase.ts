
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC6SLYaJyrsLYWlbAtWAbZIrMWSTiROkC8",
  authDomain: "bienvenido-d2c79.firebaseapp.com",
  projectId: "bienvenido-d2c79",
  storageBucket: "bienvenido-d2c79.appspot.com",
  messagingSenderId: "200108434990",
  appId: "1:200108434990:web:cc18c3c89895f3626a21bf",
  measurementId: "G-SW8VMK4RND"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app };
export { auth };
