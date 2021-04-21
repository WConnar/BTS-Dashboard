import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

export class User {
  public email!: string;
  public password!: string;
 
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  model = new User();

  authState: any = null;

  notLoggedIn: boolean = true;
  loggedIn: boolean = false;

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }
  glogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.loggedIn = true;
    this.notLoggedIn = false;
  }
  tlogin() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    this.loggedIn = true;
    this.notLoggedIn = false;
  }
  logout() {
    this.auth.signOut();
    this.loggedIn = false;
    this.notLoggedIn = true;
  }

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.loggedIn = true;
        this.notLoggedIn = false;
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  elogin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.loggedIn = true;
        this.notLoggedIn = false;
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
}
