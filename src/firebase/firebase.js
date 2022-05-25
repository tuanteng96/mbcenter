import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCrR3YxvRHN5wFNcEBdhLFgKiGyiW18udM",
    authDomain: "mbcenter-ff8f6.firebaseapp.com",
    projectId: "mbcenter-ff8f6",
    storageBucket: "mbcenter-ff8f6.appspot.com",
    messagingSenderId: "879837557038",
    appId: "1:879837557038:web:93e9d32fe05ceb3fb00abf",
    measurementId: "G-0V6SZNDCDF"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };