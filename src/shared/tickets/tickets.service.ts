import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Ticket, TicketJson} from './tickets.models';
import {map, mergeMap} from 'rxjs/operators';
import {convertJsonToModels, convertJsonToModel, convertModelToJson} from './tickets.helper';
import {AuthService} from '../authentication/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

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
          Authorization: `Bearer ${token}`
        }
      })),
      map(convertJsonToModels)
    );
  }

  getById$(ticketId: string): Observable<Ticket> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.get<TicketJson>(`${environment.ticketsApiBaseUrl}v1/tickets/${ticketId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).pipe(map(convertJsonToModel));
      }));
  }

  save$(ticket: Ticket): Observable<Ticket> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.post<TicketJson>(`${environment.ticketsApiBaseUrl}v1/tickets`,
          convertModelToJson(ticket), {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
          map(convertJsonToModel));
      }));
  }
}
