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



//take the auth info and store inside the dataabase 

export const createUserProfileDocument = async (userAuth, additionalData) => {
    //this is a async funciton because we are using api and making fetch 
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        //create a reference in our database
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (err) {
            console.log("error catching when create new users", err.message)
        }
    }
    return userRef
}




firebase.initializeApp(firebaseConfig)
//export auth and firestore
export const auth = firebase.auth()
export const firestore = firebase.firestore()

//implement google sign up
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase