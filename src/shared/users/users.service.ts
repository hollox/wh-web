import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserJson } from './users.models';
import { environment } from '../../environments/environment';
import {map, mergeMap, shareReplay} from 'rxjs/operators';
import {convertJsonToModel, convertModelToJson} from './users.helper';
import {AuthService} from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  whoAmI(): Observable<User> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.post<UserJson>(`${environment.ticketsApiBaseUrl}v1/users/who-am-i`, null, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
          map(convertJsonToModel),
          shareReplay(1));
      }));
  }

  save$(user: User): Observable<User> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.post<UserJson>(`${environment.ticketsApiBaseUrl}v1/users`,
          convertModelToJson(user), {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
          map(convertJsonToModel));
      }));
  }
}
