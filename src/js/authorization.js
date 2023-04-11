import {refs} from "./vars";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// refs.authModalOpenBtn.addEventListener('click', onOpenAuthModal);
// refs.authForm.addEventListener('click', saveDataAuth);

// function onOpenAuthModal() {
//   refs.authModal.classList.remove("is-hidden");
//   document.body.classList.add("body-modal-open");
//   refs.authModalCloseBtn.addEventListener('click', onCloseAuthModal);
//   window.addEventListener('keydown', onEscKeyPressAuth);
//   refs.authModal.addEventListener('click', onBackdropClickAuth);
// }

// function onCloseAuthModal() {
//   refs.authModal.classList.add("is-hidden");    
//   document.body.classList.remove("body-modal-open");
// }

// function onEscKeyPressAuth(e) {
//   if (e.code === 'Escape') {
//     onCloseAuthModal();
//   }
// }

// function onBackdropClickAuth(e) {
//   if (e.currentTarget === e.target) {
//     onCloseAuthModal();
//   }
// }

// function saveDataAuth(event) {
//   event.preventDefault();
//   const {
//     elements: { login, email, password, confirmPassword }
//   } = e.currentTarget;

//   if (login.value === "") {
//     refs.authLogin.classList.add("error");
//     return alert("Enter correct password");
//     // refs.authInfo.innerHTML = "Please fill in all the fields!";
//   }

//   if (email.value === "") {
//     refs.authEmail.classList.add("error");
//     return alert("Enter correct password");
//     // refs.authInfo.innerHTML = "Please fill in all the fields!";
//   }  

//   if (password.value === "") {
//     refs.authPassword.classList.add("error");
//     return alert("Enter correct password");
//     // refs.authInfo.innerHTML = "Please fill in all the fields!";
//   }

//   if (password.value !== confirmPassword.value || authConfirmPassword === "") {
//     refs.authPassword.classList.add("error");
//     refs.authConfirmPassword.classList.add("error");
//     return alert("Enter correct password");
//     // refs.authInfo.innerHTML = "Enter correct password";
//   }

//   const client = {
//     login: login.value,
//     email: email.value,
//     password: password.value,
// };

// console.log(client);
//   // e.currentTarget.reset();
//   // refs.authInfo.innerHTML = "";
// }



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
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });