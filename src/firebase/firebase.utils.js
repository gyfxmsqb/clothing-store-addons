import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDCoj8hbeASHOVgfBXQMFHdCLJXzBgEGCc",
    authDomain: "clothing-store-db-8bb27.firebaseapp.com",
    databaseURL: "https://clothing-store-db-8bb27.firebaseio.com",
    projectId: "clothing-store-db-8bb27",
    storageBucket: "clothing-store-db-8bb27.appspot.com",
    messagingSenderId: "660981964706",
    appId: "1:660981964706:web:42973d17a3d2b049d01cfb",
    measurementId: "G-BW6RF4437S"
};

firebase.initializeApp(firebaseConfig)

//export auth and firestore
export const auth = firebase.auth()
export const firestore = firebase.firestore()

//implement google sign up
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const  signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase