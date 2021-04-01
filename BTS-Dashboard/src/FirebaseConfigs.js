const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const signWithGoogle = document.getElementById('signWithGoogle');
signWithGoogle.onclick = () => auth.signInWithPopup(provider);
