import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserJson } from "./users.models";
import { environment } from '../../environments/environment';
import {map, mergeMap} from "rxjs/operators";
import {convertJsonToModels, convertJsonToModel, convertModelToJson} from "./users.helper";
import {AuthService} from "../authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }
/*
  getOrganizations$(): Observable<Organization[]> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.get<OrganizationJson[]>(`${environment.ticketsApiBaseUrl}v1/organizations`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }).pipe(map(convertJsonToModels))
      }));
  }

  getOrganizationById$(organizationId: string): Observable<Organization> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.get<OrganizationJson>(`${environment.ticketsApiBaseUrl}v1/organizations/${organizationId}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }).pipe(map(convertJsonToModel))
      }));
  }
*/
  save$(user: User): Observable<User> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.post<UserJson>(`${environment.ticketsApiBaseUrl}v1/users`,
          convertModelToJson(user), {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }).pipe(
          map(convertJsonToModel))
      }));
  }
}