import { Component } from '@angular/core';
import firebase from "firebase/compat";

const config = {
  apiKey: 'AIzaSyD7cck-bpeDZiG6wJq4YwYlX9n-bk4EmVM',
  databaseURL: 'https://app-chat-4d60d-default-rtdb.firebaseio.com/'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
