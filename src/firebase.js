import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBygWioO2yhXtg16F0QzUMvFBn4ctMVKLw",
    authDomain: "jansenverhuurtransport.firebaseapp.com",
    databaseURL: "https://jansenverhuurtransport.firebaseio.com",
    projectId: "jansenverhuurtransport",
    storageBucket: "jansenverhuurtransport.appspot.com",
    messagingSenderId: "48207543597",
    appId: "1:48207543597:web:0d1374ba10bf979dd7a7a4"
};


const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()