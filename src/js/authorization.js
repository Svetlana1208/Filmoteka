import {auth, db} from "./vars";
import { refsMyLib } from "./refsMyLib";
import { refs } from "./refs";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, collection} from "firebase/firestore"; 

let user;
let watchedMovies;
let userRef;
let queueMovies;

const authorization = async () => {
    if(document.querySelector(".header__link--current").textContent === "my library") {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const login = user.email.split('@')[0];
                refsMyLib.userLogin.innerHTML = `${login}`;
                refsMyLib.userSignOut.addEventListener('click', signOutUser);

                const usersList = collection(db, "users");
                const userName = refs.userLogin.textContent;
                userRef = doc(usersList, `${userName}`);
                watchedMovies = collection(userRef, "watched");
                queueMovies = collection(userRef, "queue");
            }
        })
        
        function signOutUser() {
            signOut(getAuth());
        }  

    } else {
        onAuthStateChanged(auth, (user) => {
            refs.authModalOpenBtn.addEventListener('click', onOpenAuthModal);
    
            if (user) {
                const login = user.email.split('@')[0];
                refs.userLogin.innerHTML = `${login}`;
                refs.userSignOut.addEventListener('click', signOutUser);
                refs.authorization.classList.add("is-hidden");
                refs.navigation.classList.remove("is-hidden");
                refs.user.classList.remove("is-hidden");
    
                const usersList = collection(db, "users");
                const userName = refs.userLogin.textContent;
                userRef = doc(usersList, `${userName}`);
                watchedMovies = collection(userRef, "watched");
                queueMovies = collection(userRef, "queue");

                // return watchedMovies;
            } 
        });
        
        function onOpenAuthModal() {
            refs.authModal.classList.remove("is-hidden");
            document.body.classList.add("body-modal-open");
            refs.authModalCloseBtn.addEventListener('click', onCloseAuthModal);
            window.addEventListener('keydown', onEscKeyPressAuth);
            refs.authModal.addEventListener('click', onBackdropClickAuth);
            refs.authForm.addEventListener('submit', authorization);
        }
    
        function onCloseAuthModal() {
            refs.authModal.classList.add("is-hidden");    
            document.body.classList.remove("body-modal-open");
            currentTargetAuthReset();
        }
        
        function onEscKeyPressAuth(e) {
            if (e.code === 'Escape') {
                onCloseAuthModal();
            }
        }
        
        function onBackdropClickAuth(e) {
            if (e.currentTarget === e.target) {
                onCloseAuthModal();
            }
        }
        
        function currentTargetAuthReset() {
            refs.authInfo.innerHTML = "";
            refs.authEmail.value = "";
            refs.authPassword.value = "";
            refs.authEmail.classList.remove("error");
            refs.authPassword.classList.remove("error");
        }
        
        
        function authorization(e) {
            e.preventDefault();
            const {elements: { email, password, confirmPassword }} = e.currentTarget;
            user = {
                email: email.value,
                password: password.value,
            };
        
        
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
              const user = userCredential.user;
              const login = user.email.split('@')[0];
              refs.userLogin.innerHTML = `${login}`;
              refs.user.classList.remove("is-hidden");
              refs.authorization.classList.add("is-hidden");
              refs.navigation.classList.remove("is-hidden");
              refs.userSignOut.addEventListener('click', signOutUser);
              onCloseAuthModal();
            })
            .catch((error) => {
              const errorCode = error.code;
              if (errorCode === "auth/user-not-found") {
                refs.authEmail.classList.add("error");
                return refs.authInfo.innerHTML = "Such user was not found";
              }
        
              if (errorCode === "auth/wrong-password") {
                refs.authPassword.classList.add("error");
                return refs.authInfo.innerHTML = "Enter correct password";
              }
        
              if (errorCode === "auth/missing-password") {
                refs.authPassword.classList.add("error");
                return refs.authInfo.innerHTML = "Enter password";
              }
            });
        }
        
        function signOutUser() {
            signOut(getAuth());
            refs.authorization.classList.remove("is-hidden");
            refs.navigation.classList.add("is-hidden");
            refs.user.classList.add("is-hidden");
        }        
    }
}

export {watchedMovies, userRef, queueMovies};
export default authorization;