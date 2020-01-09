import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dragon } from '../models/dragon';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private httpClient: HttpClient) { }

  getDragons(): Observable<Dragon[]>{
    return this.httpClient.get<Dragon[]>(api.url);
  }
}
