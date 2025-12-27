// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqJTLjxhZBCsvjrTH_cG0fkXlElG6BqTg",
  authDomain: "tose-ccf8f.firebaseapp.com",
  databaseURL: "https://tose-ccf8f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tose-ccf8f",
  storageBucket: "tose-ccf8f.firebasestorage.app",
  messagingSenderId: "475447495901",
  appId: "1:475447495901:web:9189276a162a3680afdf34",
  measurementId: "G-PWC5R6Q8JD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };
