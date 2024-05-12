importScripts(
    'https://www.gstatic.com/firebasejs/9.8.0/firebase-app-compat.js',
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.8.0/firebase-messaging-compat.js',
);
  
const app = firebase.initializeApp({
    apiKey: "AIzaSyCyqv9eQFHPDp8Svr_3JmBHNHreD_VZ8xM",
    authDomain: "equipo-basket-frontenders.firebaseapp.com",
    databaseURL: "https://equipo-basket-frontenders-default-rtdb.firebaseio.com",
    projectId: "equipo-basket-frontenders",
    storageBucket: "equipo-basket-frontenders.appspot.com",
    messagingSenderId: "299055623733",
    appId: "1:299055623733:web:e146e82f17c8e006244b7c"
});
  
firebase.messaging(app);