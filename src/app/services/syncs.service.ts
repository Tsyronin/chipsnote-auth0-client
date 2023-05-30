import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Sync } from '../models/sync';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncsService {

  readonly baseUri: string = "https://chipsnote-main-api-auth0.up.railway.app";

  constructor(private readonly auth: AuthService,
    private readonly http: HttpClient) { }
  
  getAllSyncs(): Observable<Sync[]> {
    var token: string = localStorage.getItem('token');
    console.log("token", token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Sync[]>(this.baseUri + '/me/sinks', { headers }).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }

  createNewSync(sync: Sync): Observable<string> {
    var token: string = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.post<string>(this.baseUri + '/me/sinks', sync, { headers }).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }

  makeSyncPrimary(syncId: string): Observable<string> {
    var token: string = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    var body = {
      "sink_id": syncId
    }

    return this.http.post<string>(this.baseUri + '/me/sinks/primary', body, { headers }).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }
}
