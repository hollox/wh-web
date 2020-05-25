import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Message, MessageJson} from './messages.models';
import {map, mergeMap} from 'rxjs/operators';
import {convertJsonToModel, convertModelToJson} from './messages.helper';
import {AuthService} from '../authentication/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  save$(message: Message): Observable<Message> {
    return this.authService.getToken$().pipe(
      mergeMap((token: string) => {
        return this.http.post<MessageJson>(`${environment.ticketsApiBaseUrl}v1/messages`,
          convertModelToJson(message), {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).pipe(
          map(convertJsonToModel));
      }));
  }
}
