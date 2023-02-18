import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable } from 'rxjs';
import { MeModel } from '../models/me.model';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getMe(): Observable<MeModel> {
    return this._httpClient.get<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/me').pipe(
      map((response) => ({
        id: response.data.user.id,
        email: response.data.user.context.email,
      }))
    )
    
  
}
}