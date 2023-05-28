import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Sync } from '../models/sync';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncsService {

  readonly baseUri: string = "https://chipsnote-main-api-auth.up.railway.app";
  readonly proxyUri: string = "/api";


  constructor(private readonly auth: AuthService,
    private readonly http: HttpClient) { }
  
    getAllSyncs(): Observable<Sync[]> {
      //const headers = new HttpHeaders().set('Authorization', 'Bearer ' + 'cyrone');
      this.auth.idTokenClaims$.subscribe((claims) => {
        console.log(claims)
      })
      // console.log(this.auth.idTokenClaims$);

      return this.http.get<Sync[]>(this.baseUri + '/me/sinks').pipe(
        catchError((error) => {
          // Handle any errors here
          console.error(error);
          throw error;
        })
      );

      // this.http.get(this.baseUri, { headers }).subscribe(
      //   (response) => {
      //     // Handle the successful response here
      //     console.log(response);
      //   },
      //   (error) => {
      //     // Handle any errors here
      //     console.error(error);
      //   }
      // );

      // return this.http.get<Sync[]>(this.baseUri + '/me/sinks');
    }
}
