import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HasDataModel } from '../models/has-data.model';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {

  private _dataUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public dataUser$: Observable<any> = this._dataUserSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(login: HasDataModel<LoginModel>): Observable<void> {
    return this._httpClient.post<void>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', login).pipe(
        tap((value: any) => this._dataUserSubject.next(value))
    )
  }
}
