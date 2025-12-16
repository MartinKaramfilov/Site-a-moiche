// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
// Добавяме Auth и Firestore ръчно тук:
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAghjZDCED-fp4nbv9dKY77D_VaukpsJUk",
    authDomain: "sait1-bf0b0.firebaseapp.com",
    projectId: "sait1-bf0b0",
    storageBucket: "sait1-bf0b0.firebasestorage.app",
    messagingSenderId: "839355971280",
    appId: "1:839355971280:web:023585744cbdca390950d5",
    measurementId: "G-GLWX5JY31R"
};

// Инициализираме Firebase
const app = initializeApp(firebaseConfig);

// Експортираме ги, за да ги ползваме в login.html или index.html
export const auth = getAuth(app);
export const db = getFirestore(app);