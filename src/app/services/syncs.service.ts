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

      // this.auth.idTokenClaims$.subscribe((claims) => 
      // {
      //   token = claims.__raw;
      //   console.log("claims.__raw", claims.__raw);
      console.log("token", token);


        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

        return this.http.get<Sync[]>(this.baseUri + '/me/sinks', { headers }).pipe(
          catchError((error) => {
            // Handle any errors here
            console.error(error);
            throw error;
          })
        );
      // })

      // console.log("token", token);

      // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

      // return this.http.get<Sync[]>(this.baseUri + '/me/sinks', { headers }).pipe(
      //   catchError((error) => {
      //     // Handle any errors here
      //     console.error(error);
      //     throw error;
      //   })
      // );


      //const headers = new HttpHeaders().set('Authorization', 'Bearer ' + 'cyrone');
      // this.auth.idTokenClaims$.subscribe((claims) => {
      //   console.log(claims)
      //   console.log(claims.__raw)

      //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + claims.__raw);

      //   return this.http.get<Sync[]>(this.baseUri + '/me/sinks', { headers }).pipe(
      //     catchError((error) => {
      //       // Handle any errors here
      //       console.error(error);
      //       throw error;
      //     })
      //   );
      // })
      // console.log(this.auth.idTokenClaims$);

      // return this.http.get<Sync[]>(this.baseUri + '/me/sinks').pipe(
      //   catchError((error) => {
      //     // Handle any errors here
      //     console.error(error);
      //     throw error;
      //   })
      // );

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
