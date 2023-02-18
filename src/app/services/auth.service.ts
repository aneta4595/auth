import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HasDataModel } from '../models/has-data.model';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  public token$: Observable<string | null> = this._tokenSubject.asObservable();


  constructor(private _httpClient: HttpClient) {}

  login(login: HasDataModel<LoginModel>): Observable<any> {
    return this._httpClient.post<any>(
      'https://us-central1-courses-auth.cloudfunctions.net/auth/login',
      login
    ).pipe(
        map((response) => {
            this._tokenSubject.next(response.data.accessToken);
            localStorage.setItem('token', response.data.accessToken);
        })
    )
  }
  
  logOut(): void {
    this._tokenSubject.next(null),
    localStorage.clear()
  }
}
