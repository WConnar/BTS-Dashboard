import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public auth: AngularFireAuth) { }
  glogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  glogout() {
    this.auth.signOut();
  }
}
