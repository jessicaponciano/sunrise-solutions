import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC9VSW6XsYdqTAraTs55NkzPZsFQFPuIwE",
    authDomain: "sunrise-solutions-e9eee.firebaseapp.com",
    projectId: "sunrise-solutions-e9eee",
    storageBucket: "sunrise-solutions-e9eee.appspot.com",
    messagingSenderId: "1005901834055",
    appId: "1:1005901834055:web:776ce60f062e8290680e62"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;