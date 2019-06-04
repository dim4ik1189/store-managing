import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHmEvVTnEBY_EFa_L7zXZl2Rj-SNWTma8",
  authDomain: "store-managing-3e522.firebaseapp.com",
  databaseURL: "https://store-managing-3e522.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
