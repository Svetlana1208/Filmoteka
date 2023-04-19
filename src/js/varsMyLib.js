import { doc } from "firebase/firestore";

export const refsMyLib = {
    userLogin: document.querySelector(".user__login"),
    userSignOut: document.querySelector(".user__signOut"),
    watchedBtn: document.querySelector("[data-watched-button]"),
    queueBtn: document.querySelector("[data-queue-button]"),
    gallery: document.querySelector(".myLibGallery"),
    information: document.querySelector(".information"),
    movieCardBox: document.querySelector(".movieCard__box"),
    modal: document.querySelector("[data-modal]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    pagination: document.querySelector(".pagination"),
    paginationNumbers: document.querySelector(".pagination__current"),
    nextButton: document.getElementById("next-button"),
    prevButton: document.getElementById("prev-button"),
    firstPage: document.querySelector(".pagination__firstPage"),
    dotsPrev: document.querySelector(".pagination__dotsPrev"),
    lastPage: document.querySelector(".pagination__lastPage"),
    dotsNext: document.querySelector(".pagination__dotsNext"),

}
