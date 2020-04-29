import firebase from "firebase/app"
import "firebase/firestore"

const firestore = firebase.firestore()

firestore.collection("users").doc("ppReCLSy1dtB23oCTl40").collection("cartTiems").doc("NYpPxLiKxMR5wvZVKm25")
firebase.doc("/users/ppReCLSy1dtB23oCTl40/cartTiems/NYpPxLiKxMR5wvZVKm25")
firebase.collection("u/sers/ppReCLSy1dtB23oCTl40/cartTiems/")



//regular funciton with promise
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log(users[0].name)
    })
    .catch(error => console.log(error))

//write a async function -- method 1
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const userName = await data[0].name
    console.log(userName)
}

//write a async function -- method 2
const fetchUsers = async () => {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        const userName = await data[0].name
        console.log(userName)
    } catch (error) {
        console.log(error)
    }
}

const myAsyncFUnction = async () => {

}