import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const key = '4273054ff6f056d7541ef873941254f6';
const firebaseConfig = {
    apiKey: "AIzaSyCds-laluoBicOUU9XaI5Zyn2hZba3I6P4",
    authDomain: "filmoteka-a678a.firebaseapp.com",
    projectId: "filmoteka-a678a",
    storageBucket: "filmoteka-a678a.appspot.com",
    messagingSenderId: "767994332645",
    appId: "1:767994332645:web:7a3961a3c7878fcc12db0c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { key, auth, db };
