//@VT_VACKINTOSH
//Firebase authentication methods
const auth = firebase.auth();
const Googleprovider = new firebase.auth.GoogleAuthProvider();
const signWithGoogle = document.getElementById('signWithGoogle');
signWithGoogle.onclick = () => auth.signInWithPopup(Googleprovider);
const emailSignUp = document.getElementById("emailSignUp");
const emailSignIn = document.getElementById("emailSignIn");
emailSignUp.onclick = () => SignUp();
function SignUp(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    auth.createUserWithEmailAndPassword(email, password).catch(e=>{
        console.log(e)
    })
}
auth.onAuthStateChanged(user=>{
    if(user){
        console.log(user)
    }
    else{

    }
})
