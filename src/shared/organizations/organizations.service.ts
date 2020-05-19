import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Organization, OrganizationJson } from "./organizations.models";
import { environment } from '../../environments/environment';
import {map, mergeMap} from "rxjs/operators";
import {convertJsonToModels, convertJsonToModel, convertModelToJson} from "./organizations.helper";
import {AuthService} from "../authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

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

  saveOrganization$(organization: Organization): Observable<Organization> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.post<OrganizationJson>(`${environment.ticketsApiBaseUrl}v1/organizations`,
          convertModelToJson(organization), {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }).pipe(
          map(convertJsonToModel))
      }));
  }
}
