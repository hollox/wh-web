import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Organization, OrganizationJson } from "./organizations.models";
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { convertOrganizationsJsonToModel } from "./organizations.helper";

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  constructor(private http: HttpClient) {
  }

  getOrganizations$(token: string): Observable<Organization[]> {
    return this.http.get<OrganizationJson[]>(`${environment.ticketsApiBaseUrl}v1/organizations`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).pipe(
      map(convertOrganizationsJsonToModel)
    )
  }

  // saveOrganization$(token: string, organization: Organization): Observable<Organization> {
    // return this.http.post<OrganizationJson>(`${environment.ticketsApiBaseUrl}v1/organizations`, {
    //   headers: {
    //     "Authorization": `Bearer ${token}`
    //   }
    // }).pipe(
    //   map(convertOrganizationsJsonToModel)
    // )
  // }
}
