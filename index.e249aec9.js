var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,s){r[e]=s},e.parcelRequired7c6=t);var a=t("hWKZL"),n=t("eyjy7");let i;function o(){a.refs.authModal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open"),a.refs.authInfo.innerHTML="",a.refs.authEmail.value="",a.refs.authPassword.value="",a.refs.authEmail.classList.remove("error"),a.refs.authPassword.classList.remove("error")}function d(e){"Escape"===e.code&&o()}function l(e){e.currentTarget===e.target&&o()}function u(e){e.preventDefault();const{elements:{email:s,password:r,confirmPassword:t}}=e.currentTarget;i={email:s.value,password:r.value},(0,n.signInWithEmailAndPassword)(a.auth,i.email,i.password).then((e=>{const s=e.user.email.split("@")[0];a.refs.userLogin.innerHTML=`${s}`,a.refs.user.classList.remove("is-hidden"),a.refs.authorization.classList.add("is-hidden"),a.refs.navigation.classList.remove("is-hidden"),a.refs.userSignOut.addEventListener("click",c),o()})).catch((e=>{const s=e.code;return"auth/user-not-found"===s?(a.refs.authEmail.classList.add("error"),a.refs.authInfo.innerHTML="Such user was not found"):"auth/wrong-password"===s?(a.refs.authPassword.classList.add("error"),a.refs.authInfo.innerHTML="Enter correct password"):"auth/missing-password"===s?(a.refs.authPassword.classList.add("error"),a.refs.authInfo.innerHTML="Enter password"):void 0}))}function c(){console.log("out"),(0,n.signOut)((0,n.getAuth)()),a.refs.authorization.classList.remove("is-hidden"),a.refs.navigation.classList.add("is-hidden"),a.refs.user.classList.add("is-hidden")}a.refs.authModalOpenBtn.addEventListener("click",(()=>{a.refs.authModal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),a.refs.authModalCloseBtn.addEventListener("click",o),window.addEventListener("keydown",d),a.refs.authModal.addEventListener("click",l),a.refs.authForm.addEventListener("submit",u)})),(0,n.onAuthStateChanged)(a.auth,(e=>{if(e){const s=e.email.split("@")[0];console.log(s),a.refs.userLogin.innerHTML=`${s}`,a.refs.userSignOut.addEventListener("click",c),a.refs.authorization.classList.add("is-hidden"),a.refs.navigation.classList.remove("is-hidden"),a.refs.user.classList.remove("is-hidden")}else console.log("user wasn't authorization")}));
//# sourceMappingURL=index.e249aec9.js.map
