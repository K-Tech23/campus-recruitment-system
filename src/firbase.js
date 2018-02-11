import * as firebase from 'firebase';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCdi30dqvP75rdLZhlpl04BjlJGB3GDzLc",
  authDomain: "campuse-recruiment-system.firebaseapp.com",
  databaseURL: "https://campuse-recruiment-system.firebaseio.com",
  projectId: "campuse-recruiment-system",
  storageBucket: "campuse-recruiment-system.appspot.com",
  messagingSenderId: "635307527115"
};
firebase.initializeApp(config);

const fire = firebase;

const signupUser = (user) => {

  fire.auth().createUserWithEmailAndPassword(user.email, user.password).then((user) => console.log(user)).catch(err => console.log(err))

}
const loginUser = (user) => {

  console.log(user.password, "user")
  fire.auth().signInWithEmailAndPassword(user.email, user.password).then((user) => {
      console.log(user, "login user")
    }).catch(err => console.log(err))

}


export {
  fire,
  signupUser,
  loginUser
}