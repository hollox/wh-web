import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ticket, TicketJson } from "./tickets.models";
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { convertTicketsJsonToModel } from "./tickets.helper";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient) {
  }

  getTickets$(token: string): Observable<Ticket[]> {
    return this.http.get<TicketJson[]>(`${environment.ticketsApiBaseUrl}v1/tickets`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).pipe(
      map(convertTicketsJsonToModel)
    )
  }
}
