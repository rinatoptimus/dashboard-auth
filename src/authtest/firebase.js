import firebase from "firebase/app";

import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGzsFESlgaskoVnwahpLlwUWnz8uP3Rzc",
  authDomain: "auth-dev-a2db4.firebaseapp.com",
  projectId: "auth-dev-a2db4",
  storageBucket: "auth-dev-a2db4.appspot.com",
  messagingSenderId: "347737831262",
  appId: "1:347737831262:web:6f27d391f71abef55d81cf"
});

export const auth = app.auth();
export default app;

// import firebase from "firebase/app";

// import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.APP_ID
// });

// export const auth = app.auth();
// export default app;
