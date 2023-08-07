// firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://threads-counter-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export default app;
