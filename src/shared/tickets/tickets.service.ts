import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Ticket, TicketJson} from "./tickets.models";
import {map, mergeMap} from "rxjs/operators";
import { convertTicketsJsonToModel } from "./tickets.helper";
import {AuthService} from "../authentication/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getTickets$(): Observable<Ticket[]> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => this.http.get<TicketJson[]>(`${environment.ticketsApiBaseUrl}v1/tickets`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })),
      map(convertTicketsJsonToModel)
    );
  }
}
