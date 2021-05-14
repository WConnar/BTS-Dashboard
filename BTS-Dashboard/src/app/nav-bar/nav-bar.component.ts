/* @AH_VACKintosh
  Uses the firebase auth methods to allow users to log in
*/

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

export class User {
  public email!: string;
  public password!: string;
  public name!: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  model = new User();

  newUserName: string = "";

  authState: any = null;

  errorMessage: any = null;

  accountSuccess: boolean = false;

  resetSuccess: boolean = false;

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe((auth) => {
      this.authState = auth
    });
    
   }
  glogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  tlogin() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }
  logout() {
    this.auth.signOut();
    this.accountSuccess = false;
    this.resetSuccess = false;
  }

  signUp(email: string, password: string, name: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.newUserName = name;
        this.accountSuccess = true;
        this.errorMessage = null;
        this.resetSuccess = false;
        var theCurrentUser = firebase.auth().currentUser;
        if(theCurrentUser){
          theCurrentUser.updateProfile({
            displayName: this.newUserName,
          })
        }
      })
      .catch(error => {
        this.errorMessage = error;
        this.accountSuccess = false;
        this.resetSuccess = false;
        console.log(error)
        throw error
      });
  }

  elogin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.accountSuccess = true;
        this.errorMessage = null;
        this.resetSuccess = false;
      })
      .catch(error => {
        this.errorMessage = error;
        this.accountSuccess = false;
        this.resetSuccess = false;
        console.log(error)
        throw error
      });
  }

  isLoggedIn(){
    if(firebase.auth().currentUser){
      return true;
    }
    else{
      return false
    }
  }

  resetPassword(email:string){
    this.auth.sendPasswordResetEmail(email)
    .then((user) => {
      this.errorMessage = null;
      this.accountSuccess = false;
      this.resetSuccess = true;
    })
    .catch(error => {
      this.errorMessage = error;
    })
  }
}
