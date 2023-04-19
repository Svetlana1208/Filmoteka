import { collection, doc, addDoc, setDoc, getDocs } from "firebase/firestore"; 
import { db } from "./vars";

const movieWatchedRef = collection(db, "watched");






// async function addToWatched() {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//           first: "Ada",
//           last: "Lovelace",
//           born: 1815
//         });
//         console.log(docRef);
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }


// export default addToWatched;