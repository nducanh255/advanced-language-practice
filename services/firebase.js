import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBfr2dQI6KClPVtm7IHvulkfhOqq1KrNWw",
  authDomain: "advanced-language-practice.firebaseapp.com",
  databaseURL: "https://advanced-language-practice.firebaseio.com",
  projectId: "advanced-language-practice",
  storageBucket: "advanced-language-practice.appspot.com",
  messagingSenderId: "674655308729",
  appId: "1:674655308729:web:0289bbf10179a8a6334468",
  measurementId: "G-BXHDP04RRL"
}

firebase.initializeApp(firebaseConfig)

export default firebase