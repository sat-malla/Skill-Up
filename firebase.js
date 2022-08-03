import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYAyqgf-wK09Jrm2ulKPPAXsGDL7agVHs",
  authDomain: "skill-up-77ae6.firebaseapp.com",
  projectId: "skill-up-77ae6",
  storageBucket: "skill-up-77ae6.appspot.com",
  messagingSenderId: "706821563197",
  appId: "1:706821563197:web:267a9cfa597cbc01f2db54",
  measurementId: "G-YPLV9LCVLM",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };
