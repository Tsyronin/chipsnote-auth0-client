import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Sync } from '../models/sync';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncsService {

  readonly baseUri: string = "https://chipsnote-main.up.railway.app";

  constructor(private readonly auth: AuthService,
    private readonly _httpClient: HttpClient) { }
  
    getAllSyncs(): Observable<Sync[]> {
      return this._httpClient.get<Sync[]>(this.baseUri + '/me/sinks');
    }
}
