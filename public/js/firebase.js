let firebaseConfig = {
     // enter your firebase credentials here.
     apiKey: "AIzaSyANnECkazMmEnvgatmbZBEBmRhZXYcIyHo",
     authDomain: "blog-86111.firebaseapp.com",
     projectId: "blog-86111",
     storageBucket: "blog-86111.appspot.com",
     messagingSenderId: "695664738739",
     appId: "1:695664738739:web:672d807ecc187e8503cbc6"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}