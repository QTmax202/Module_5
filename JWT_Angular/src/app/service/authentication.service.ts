import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {UserToken} from "../models/user-token";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;
  update = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(<any>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  login(gmail: string, password: string) {
    return this.http.post<any>('http://localhost:8080/api/auth/signIn', {gmail, password})
      .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.update.emit('login');
          return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EMAIL');
    // this.currentUserSubject.next(null);
  }
}
